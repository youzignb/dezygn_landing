# Tripwire Funnel Spec — The AI Creative Client System ($37)

**Date:** 2026-06-13
**Checkout platform:** **Stripe** (Wosho LLC account). Build/test in **TEST mode first**.
**Scope:** The full $37 tripwire funnel — a branded Stripe order page (`/order`) that pays the front-end product + optional order bump and **saves the card**, followed by two **true 1-click** post-purchase upsells that charge the saved card off-session, ending at `/success`.

**Companion docs:** [`style-guide.md`](./style-guide.md) (palette/type/the Tailwind off-scale alpha bracket rule), [`site-hub-plan.md`](./site-hub-plan.md).

---

## 1. The funnel at a glance

| Step | Offer | Price (cents) | Where it lives | Customer-facing copy |
|---|---|---|---|---|
| **Front end** | The AI Creative Client System | **$37** (3700) | `/order` (Stripe Payment Element) | "Pay $37 — Get Instant Access." The complete playbook for landing paying AI-photography clients on Upwork by sending a free custom sample before you pitch. |
| **Order bump** | The 2-Minute Setup Pack | **+$27** (2700) | **Checkbox on `/order`** (charged in the same PaymentIntent) | "Add The 2-Minute Setup Pack — two custom GPTs that build your Upwork profile + portfolio in 2 minutes, on a free ChatGPT account. **+$27**" |
| **Upsell 1 (OTO1)** | The Fulfillment Masterclass | **$69** (6900) | Branded page `/oto/fulfillment` — 1-click | "You Landed The Client. Now Deliver." The 5-step AI photography method, two live client-project recordings, the prompting course, and the revision/feedback workflow. |
| **Upsell 2 (OTO2)** | The Dezygn Credit Deal | **$99** (9900) | Branded page `/oto/credits` — 1-click | "Make The Work Effortless." 1,500 credits kept permanently + 30 days of Agency features. Scales the work. |

**Flow:**

```
/order   ($37 + optional $27 bump → one Stripe PaymentIntent, card saved off_session)
   │  on success (mints signed order token)
   ▼
/oto/fulfillment   (OTO1 — $69, 1-click off-session charge)
   ├─ YES → charge → /oto/credits?t=<token>
   └─ NO  →          /oto/credits?t=<token>
        ▼
/oto/credits       (OTO2 — $99, 1-click off-session charge)
   ├─ YES → charge → /success?t=<token>
   └─ NO  →          /success?t=<token>
        ▼
/success           (thank-you — existing SuccessPage)
```

Both upsells route to the same next page whether accepted or declined; the YES path simply charges first. No countdown timers on the order/OTO pages (per spec).

---

## 2. Architecture

### 2.1 Order page (`/order`) — saves the card
`src/pages/funnel/OrderPage.tsx`. v4 "Paper & Ink" skin (logo-only header, footer).

- **Left column:** order summary (front-end $37) + the order-bump card with a real checkbox (+$27) + a live-updating **total** ($37 or $64).
- **Right column:** email input → Stripe **Payment Element** → "Pay $XX — Get Instant Access" + the trust row.
- On a valid email (and whenever the bump toggles, debounced), the page POSTs `{ email, bump }` to `stripe-create-payment-intent`, receives `{ clientSecret, orderToken, amount }`, and wraps the Payment Element in `<Elements stripe options={{ clientSecret }}>`. Toggling the bump re-fetches a fresh PaymentIntent for the new amount (the Elements remount is keyed on `clientSecret`); the pay button + checkbox disable while it refreshes.
- On submit: `stripe.confirmPayment({ elements, confirmParams: { return_url }, redirect: 'if_required' })`. On success → `navigate('/oto/fulfillment?t=' + orderToken)`.
- The PaymentIntent is created with `setup_future_usage=off_session`, which is what makes the later 1-click charges possible.
- **Resilience:** if `VITE_STRIPE_PUBLISHABLE_KEY` / `VITE_CREATE_PI_FN_URL` are unset, the page renders a clear "checkout not configured" placeholder — no crash in build/preview/prerender.

### 2.2 1-click OTOs — off-session charges
`src/pages/funnel/Upsell1Page.tsx` (`oto1`), `Upsell2Page.tsx` (`oto2`). The YES button calls `acceptUpsell(offer, orderToken, stripe)` (`src/lib/checkout.ts`), which POSTs `{ orderToken, offer }` to `stripe-charge-upsell`. The server verifies the token, maps the offer to an amount, finds the saved card, and creates+confirms an off-session PaymentIntent. The decline link advances immediately with no charge. The order token rides every navigation as `?t=<token>`.

### 2.3 Edge functions (Deno, Stripe REST via fetch — no node Stripe SDK)
Both match the `support-contact` pattern: CORS headers, `serve`, `Deno.env.get(...)`, and `application/x-www-form-urlencoded` POSTs to `https://api.stripe.com/v1/...` with `Authorization: Bearer <key>`.

- **`supabase/functions/stripe-create-payment-intent/index.ts`** — POST `{ email, bump }`. Find-or-create Customer by email (search API, list fallback), create the PaymentIntent (`amount = 3700 + (bump ? 2700 : 0)`, `currency=usd`, `customer`, `setup_future_usage=off_session`, `automatic_payment_methods[enabled]=true`, metadata `{ funnel: 'client-system', bump }`), mint the order token, return `{ clientSecret, orderToken, amount }`.
- **`supabase/functions/stripe-charge-upsell/index.ts`** — POST `{ orderToken, offer: 'oto1'|'oto2' }`. **Verify** the token (HMAC + expiry) → reject with **400** if invalid/expired/unknown-offer. Map `offer → amount` server-side (`oto1`=6900, `oto2`=9900; a client amount is never read). Look up the saved card (customer default → `payment_methods?type=card`). Create+confirm an off-session PaymentIntent (`off_session=true, confirm=true`), metadata `{ funnel, offer }`. Always returns **200** with a `{ status }` body so the page can react — except **400** on a bad token.

### 2.4 Order-token security model (HMAC)
The OTO charges must **not** trust a raw customer id from the client (anyone could charge an arbitrary customer). Instead:

```
orderToken = base64url( "customerId.expiry.signature" )
signature  = HMAC_SHA256( "customerId.expiry", FUNNEL_TOKEN_SECRET )   // Deno crypto.subtle
```

- `stripe-create-payment-intent` mints it (expiry = now + 2h).
- `stripe-charge-upsell` re-derives the signature and compares it in constant time, checks the expiry, and only then extracts `customerId`. Tamper with the customer id or the amount-by-proxy and the signature no longer matches → 400. The client only ever holds the opaque token.
- `FUNNEL_TOKEN_SECRET` is the shared secret both functions read from env. It must be identical in both.

---

## 3. Outcome handling (SCA / declines)

`stripe-charge-upsell` returns one of:

| Stripe outcome | Response | Front-end behavior |
|---|---|---|
| `succeeded` | `{ status: 'succeeded' }` | advance to the next page |
| `requires_action` (SCA / 3DS) | `{ status: 'requires_action', clientSecret }` | `acceptUpsell` runs `stripe.handleNextAction({ clientSecret })` in-browser; on success advance, else show the error |
| `card_declined` / other error | `{ status: 'failed', message }` | inline error; the buyer can retry or click decline to skip |
| bad/expired token, unknown offer | **HTTP 400** | inline "order session no longer valid" message |

`authentication_required` errors that carry a `payment_intent.client_secret` are surfaced as `requires_action` so SCA can complete.

---

## 4. Env vars & where each plugs in

| Env var | Read by | Falls back to | Set to |
|---|---|---|---|
| `VITE_STRIPE_PUBLISHABLE_KEY` | `src/config/funnel.ts` → OrderPage + OTO pages (Stripe.js) | `''` → "checkout not configured" placeholder | `pk_test_…` then `pk_live_…` |
| `VITE_CREATE_PI_FN_URL` | OrderPage (create PaymentIntent) | `''` | `https://<ref>.supabase.co/functions/v1/stripe-create-payment-intent` |
| `VITE_CHARGE_FN_URL` | `src/lib/checkout.ts` (OTO charge) | `''` → `acceptUpsell` stub resolves so the funnel is walkable in dev | `https://<ref>.supabase.co/functions/v1/stripe-charge-upsell` |
| `STRIPE_SECRET_KEY` | both edge functions; `scripts/stripe-setup-funnel.mjs` (from `process.env`) | — | `sk_test_…` then `sk_live_…` (Supabase secret) |
| `FUNNEL_TOKEN_SECRET` | both edge functions (HMAC mint/verify) | — | a long random string (Supabase secret) — same value in both functions |

The `VITE_*` vars are read by Vite at build time. The front-end charges by **amount** (mapped server-side), not by Stripe price IDs — the price IDs from the setup script are for dashboard/reporting/future invoice billing.

---

## 5. Go-live runbook (test-first)

1. **Provision the offers** (test mode):
   ```
   STRIPE_SECRET_KEY=sk_test_... node scripts/stripe-setup-funnel.mjs   # or: npm run stripe:setup
   ```
   Idempotent: creates the 4 Products + one-time Prices only if missing (matched by `metadata.offer`). Prints the price IDs, a JSON map, and the env lines to paste. Prints the mode (test/live) inferred from the key prefix **without** printing the key.

2. **Set the front-end env** (`.env` / host):
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
   VITE_CREATE_PI_FN_URL=https://<ref>.supabase.co/functions/v1/stripe-create-payment-intent
   VITE_CHARGE_FN_URL=https://<ref>.supabase.co/functions/v1/stripe-charge-upsell
   ```

3. **Set the Supabase secrets:**
   ```
   supabase secrets set STRIPE_SECRET_KEY=sk_test_... FUNNEL_TOKEN_SECRET=<long-random>
   ```

4. **Deploy the edge functions** (no JWT — public funnel pages call them):
   ```
   supabase functions deploy stripe-create-payment-intent --no-verify-jwt
   supabase functions deploy stripe-charge-upsell --no-verify-jwt
   ```

5. **Test the full flow:**
   - `/order` with test card `4242 4242 4242 4242` (any future expiry / CVC / ZIP) → toggle the bump, confirm the total updates → pay.
   - Walk OTO1 → OTO2 → `/success`; click YES on each and confirm the saved card is charged off-session (no second card form).
   - SCA path: use `4000 0025 0000 3155` (requires authentication) — confirm the OTO `requires_action` flow pops the 3DS modal and completes.
   - Decline path: click "No thanks" — confirm it advances with no charge.

6. **Flip to live:** swap every `sk_test_…` → `sk_live_…` and `pk_test_…` → `pk_live_…` (front-end env + Supabase secret), re-run the setup script with the live key to provision live Products/Prices, redeploy if the functions changed. `FUNNEL_TOKEN_SECRET` can stay the same (it's processor-agnostic).

---

## 6. Recommended next: fulfillment webhook (stub — NOT built)

Charges currently succeed but nothing **delivers** the product. The recommended next step is a Stripe **webhook** edge function (e.g. `stripe-webhook`) subscribed to `payment_intent.succeeded`, that reads `metadata.funnel` / `metadata.offer` and grants access / emails license details / fires the Resend delivery (reuse the `support-contact` Resend pattern). This is mentioned here as a stub; it is **not** part of this build. Until then, `/success` coaches the buyer to look for their Stripe receipt and activate at `chat.dezygn.com/activation`.

---

## 7. Files (source of truth)

| File | Role |
|---|---|
| `src/config/funnel.ts` | Stripe env (`STRIPE_PUBLISHABLE_KEY`, `CREATE_PI_FN_URL`, `CHARGE_FN_URL`, `stripeConfigured`), offer objects (`oto1`/`oto2` with `offerKey`/amount), front-end + bump amounts, `formatCents`, `checkoutUrl = '/order'`, `nextStep()`. |
| `src/lib/checkout.ts` | `getOrderToken()` (`?t=`, legacy `?order=`/`?cp_order=`), `buildNextUrl()` (re-appends `?t=`), `acceptUpsell()` (POST to charge fn; SCA via `stripe.handleNextAction`). |
| `src/pages/funnel/OrderPage.tsx` | `/order` — Payment Element, order bump, live total, mints/forwards the order token. |
| `src/pages/funnel/Upsell1Page.tsx` | OTO1 branded page ($69, `offerKey: 'oto1'`). |
| `src/pages/funnel/Upsell2Page.tsx` | OTO2 branded page ($99, `offerKey: 'oto2'`). |
| `src/pages/ClientSystemPage.tsx` | FE sales page; BuyButton → `checkoutUrl` (`/order`). |
| `src/pages/SuccessPage.tsx` | Funnel terminus; copy updated to Stripe receipt language. |
| `supabase/functions/stripe-create-payment-intent/index.ts` | Create Customer + PaymentIntent (saves card), mint order token. |
| `supabase/functions/stripe-charge-upsell/index.ts` | Verify token, off-session 1-click charge for OTO1/OTO2. |
| `scripts/stripe-setup-funnel.mjs` | Idempotent Product/Price provisioning (`npm run stripe:setup`). |
| `src/App.tsx` | Route `/order` → OrderPage (plus existing `/oto/*`, `/success`). |
