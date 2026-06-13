// stripe-create-payment-intent — front-end order page (/order) calls this to
// start the $37 (+ optional $27 bump) charge. Find-or-creates a Stripe Customer
// by email, creates a PaymentIntent that SAVES the card off-session, and mints a
// signed "order token" that authorizes the later 1-click OTO charges.
//
// Required Supabase secrets:
//   STRIPE_SECRET_KEY    — sk_test_… / sk_live_… (the Wosho LLC account)
//   FUNNEL_TOKEN_SECRET  — random string used to HMAC the order token
//
// Deploy (no JWT — public order page calls it, like support-contact):
//   supabase functions deploy stripe-create-payment-intent --no-verify-jwt
//
// Talks to Stripe's REST API directly via fetch (urlencoded bodies), matching
// the support-contact pattern — no node Stripe SDK in Deno.
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
const FUNNEL_TOKEN_SECRET = Deno.env.get("FUNNEL_TOKEN_SECRET");

const STRIPE_API = "https://api.stripe.com/v1";
// Order token lifetime — the funnel (order → OTO1 → OTO2) is a few minutes;
// 2 hours is a generous ceiling that still bounds replay of a leaked token.
const TOKEN_TTL_SECONDS = 2 * 60 * 60;

const FRONT_END_AMOUNT = 3700; // $37
const BUMP_AMOUNT = 2700; // $27

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

/* ── Stripe helpers ───────────────────────────────────────────── */

async function stripe(
  path: string,
  params?: Record<string, string>,
): Promise<any> {
  const init: RequestInit = {
    method: params ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  if (params) init.body = new URLSearchParams(params).toString();
  const res = await fetch(`${STRIPE_API}${path}`, init);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(
      data?.error?.message || `Stripe ${path} failed (${res.status})`,
    );
  }
  return data;
}

async function findOrCreateCustomer(email: string): Promise<string> {
  // Prefer the search API (exact email match). Fall back to list if search is
  // unavailable on the account.
  try {
    const q = `email:'${email.replace(/'/g, "")}'`;
    const found = await stripe(
      `/customers/search?query=${encodeURIComponent(q)}&limit=1`,
    );
    if (found?.data?.length) return found.data[0].id;
  } catch (_) {
    const listed = await stripe(
      `/customers?email=${encodeURIComponent(email)}&limit=1`,
    );
    if (listed?.data?.length) return listed.data[0].id;
  }
  const created = await stripe("/customers", { email });
  return created.id;
}

/* ── Order token (HMAC-SHA256, base64url) ─────────────────────── */
// Token = base64url( "customerId.expiry.signature" ) where
//   signature = HMAC_SHA256( "customerId.expiry", FUNNEL_TOKEN_SECRET ).
// The client only ever holds this opaque token; stripe-charge-upsell re-derives
// the signature and rejects anything tampered/expired before charging.

function b64urlEncode(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmacHex(message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(FUNNEL_TOKEN_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message),
  );
  return [...new Uint8Array(sig)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function mintOrderToken(customerId: string): Promise<string> {
  const expiry = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
  const payload = `${customerId}.${expiry}`;
  const sig = await hmacHex(payload);
  return b64urlEncode(new TextEncoder().encode(`${payload}.${sig}`));
}

/* ── Handler ──────────────────────────────────────────────────── */

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }
  if (!STRIPE_SECRET_KEY || !FUNNEL_TOKEN_SECRET) {
    return json({ error: "Server not configured" }, 500);
  }

  try {
    const { email, bump } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return json({ error: "A valid email is required" }, 400);
    }

    const wantsBump = bump === true;
    const amount = FRONT_END_AMOUNT + (wantsBump ? BUMP_AMOUNT : 0);

    const customerId = await findOrCreateCustomer(email.trim());

    const pi = await stripe("/payment_intents", {
      amount: String(amount),
      currency: "usd",
      customer: customerId,
      // Save the card so the OTO functions can charge it off-session.
      setup_future_usage: "off_session",
      "automatic_payment_methods[enabled]": "true",
      "metadata[funnel]": "client-system",
      "metadata[bump]": String(wantsBump),
      receipt_email: email.trim(),
    });

    const orderToken = await mintOrderToken(customerId);

    return json({ clientSecret: pi.client_secret, orderToken, amount });
  } catch (err) {
    console.error("create-payment-intent error:", err);
    return json(
      { error: err instanceof Error ? err.message : "Failed to start checkout" },
      500,
    );
  }
});
