// stripe-charge-upsell — the OTO pages (/oto/fulfillment, /oto/credits) call
// this to charge the card SAVED on the front-end order, with one click. It
// verifies the signed order token (HMAC + expiry), maps the offer to a
// server-side amount, finds the customer's saved card, and creates+confirms an
// off-session PaymentIntent.
//
// Required Supabase secrets:
//   STRIPE_SECRET_KEY    — sk_test_… / sk_live_… (the Wosho LLC account)
//   FUNNEL_TOKEN_SECRET  — same secret used by stripe-create-payment-intent
//
// Deploy (no JWT — public OTO pages call it):
//   supabase functions deploy stripe-charge-upsell --no-verify-jwt
//
// SECURITY: the client sends only the opaque order token + an offer KEY
// ('oto1' | 'oto2'). The amount is fixed server-side per offer — a tampered or
// expired token is rejected with 400, and a client-supplied amount is ignored.
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
const FUNNEL_TOKEN_SECRET = Deno.env.get("FUNNEL_TOKEN_SECRET");

const STRIPE_API = "https://api.stripe.com/v1";

// Server-authoritative offer → amount (cents). Never trust a client amount.
const OFFER_AMOUNTS: Record<string, number> = {
  oto1: 6900, // Fulfillment Masterclass — $69
  oto2: 9900, // Dezygn Credit Deal — $99
};

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

/* ── Stripe helper ────────────────────────────────────────────── */

async function stripe(
  path: string,
  params?: Record<string, string>,
): Promise<{ ok: boolean; data: any }> {
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
  return { ok: res.ok, data };
}

/* ── Order-token verification (mirrors the minting function) ──── */

function b64urlDecode(token: string): string {
  const pad = token.length % 4 === 0 ? "" : "=".repeat(4 - (token.length % 4));
  const b64 = token.replace(/-/g, "+").replace(/_/g, "/") + pad;
  return atob(b64);
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

// Constant-time-ish string compare (avoids early-exit timing leaks).
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

interface VerifiedToken {
  ok: boolean;
  customerId?: string;
  reason?: string;
}

async function verifyOrderToken(token: string): Promise<VerifiedToken> {
  let decoded: string;
  try {
    decoded = b64urlDecode(token);
  } catch {
    return { ok: false, reason: "malformed" };
  }
  // "customerId.expiry.signature" — customerId may itself contain no dots
  // (Stripe ids are like cus_XXX), so split from the right.
  const parts = decoded.split(".");
  if (parts.length < 3) return { ok: false, reason: "malformed" };
  const signature = parts.pop() as string;
  const expiryStr = parts.pop() as string;
  const customerId = parts.join(".");

  const expiry = Number(expiryStr);
  if (!customerId || !Number.isFinite(expiry)) {
    return { ok: false, reason: "malformed" };
  }

  const expected = await hmacHex(`${customerId}.${expiryStr}`);
  if (!safeEqual(signature, expected)) return { ok: false, reason: "bad-signature" };
  if (Math.floor(Date.now() / 1000) > expiry) return { ok: false, reason: "expired" };

  return { ok: true, customerId };
}

/* ── Saved payment method lookup ──────────────────────────────── */

async function getSavedPaymentMethod(customerId: string): Promise<string | null> {
  // Prefer the customer's invoice/default payment method, then any saved card.
  const cust = await stripe(`/customers/${customerId}`);
  if (cust.ok) {
    const dflt =
      cust.data?.invoice_settings?.default_payment_method ||
      cust.data?.default_source;
    if (dflt) return typeof dflt === "string" ? dflt : dflt.id;
  }
  const pms = await stripe(
    `/payment_methods?customer=${customerId}&type=card&limit=1`,
  );
  if (pms.ok && pms.data?.data?.length) return pms.data.data[0].id;
  return null;
}

/* ── Handler ──────────────────────────────────────────────────── */

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return json({ status: "failed", message: "Method not allowed" }, 405);
  }
  if (!STRIPE_SECRET_KEY || !FUNNEL_TOKEN_SECRET) {
    return json({ status: "failed", message: "Server not configured" }, 500);
  }

  let orderToken: string;
  let offer: string;
  try {
    const body = await req.json();
    orderToken = body.orderToken;
    offer = body.offer;
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  // Bad/missing token or unknown offer → 400 (the only 400 cases).
  if (!orderToken || typeof orderToken !== "string") {
    return json({ error: "Missing order token" }, 400);
  }
  const amount = OFFER_AMOUNTS[offer];
  if (!amount) {
    return json({ error: "Unknown offer" }, 400);
  }

  const verified = await verifyOrderToken(orderToken);
  if (!verified.ok || !verified.customerId) {
    return json({ error: `Invalid order token (${verified.reason})` }, 400);
  }
  const customerId = verified.customerId;

  try {
    const paymentMethod = await getSavedPaymentMethod(customerId);
    if (!paymentMethod) {
      return json({
        status: "failed",
        message: "No saved card found for this order.",
      });
    }

    const { ok, data: pi } = await stripe("/payment_intents", {
      amount: String(amount),
      currency: "usd",
      customer: customerId,
      payment_method: paymentMethod,
      off_session: "true",
      confirm: "true",
      "metadata[funnel]": "client-system",
      "metadata[offer]": offer,
    });

    if (ok && pi?.status === "succeeded") {
      return json({ status: "succeeded", paymentIntentId: pi.id });
    }

    // SCA / authentication required on the off-session charge → hand the
    // client secret back so the page can run stripe.handleNextAction.
    if (pi?.status === "requires_action") {
      return json({ status: "requires_action", clientSecret: pi.client_secret });
    }

    // Stripe surfaces card_declined / authentication_required as an error
    // object (HTTP 402). Some of those carry a usable payment_intent for SCA.
    const err = pi?.error;
    if (err) {
      if (
        err.code === "authentication_required" &&
        err.payment_intent?.client_secret
      ) {
        return json({
          status: "requires_action",
          clientSecret: err.payment_intent.client_secret,
        });
      }
      return json({
        status: "failed",
        message: err.message || "Your card was declined.",
      });
    }

    return json({
      status: "failed",
      message: `Charge did not complete (${pi?.status ?? "unknown"}).`,
    });
  } catch (e) {
    console.error("charge-upsell error:", e);
    return json({
      status: "failed",
      message: e instanceof Error ? e.message : "Charge failed",
    });
  }
});
