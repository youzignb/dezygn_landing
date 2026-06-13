/**
 * Post-purchase 1-click upsell mechanics (Stripe).
 *
 * On /order the buyer pays $37 (+ optional $27 bump) through a Stripe Payment
 * Element; the card is saved (`setup_future_usage=off_session`) and the order
 * page mints a signed **order token** (`?t=`). These helpers drive the OTO
 * pages: carry that token forward and charge the saved card with one click via
 * the `stripe-charge-upsell` edge function.
 *
 * Security: the token is an HMAC the server minted over the Stripe customer id
 * + expiry. The client never sees or sends a raw customer id — only the opaque
 * token — and the server re-verifies it before charging. The amount is mapped
 * server-side from the offer key; the client cannot set a price.
 */

import type { Stripe } from '@stripe/stripe-js';
import type { FunnelOffer } from '../config/funnel';
import { CHARGE_FN_URL } from '../config/funnel';

/**
 * Query keys we accept for the order token, in priority order. `t` is the
 * canonical key the Stripe order page emits; `order`/`cp_order` are legacy
 * fallbacks kept for any in-flight links.
 */
const ORDER_TOKEN_KEYS = ['t', 'order', 'cp_order'] as const;

/**
 * Read the order token from a query string. Returns null when absent.
 */
export function getOrderToken(search: string = window.location.search): string | null {
  const params = new URLSearchParams(search);
  for (const key of ORDER_TOKEN_KEYS) {
    const value = params.get(key);
    if (value) return value;
  }
  return null;
}

/**
 * Build a path for the next funnel step, preserving the order token under the
 * canonical `t` key so the next page can charge against the same order. If
 * there's no token, returns the bare path.
 */
export function buildNextUrl(path: string, orderToken: string | null): string {
  if (!orderToken) return path;
  const sep = path.includes('?') ? '&' : '?';
  return `${path}${sep}t=${encodeURIComponent(orderToken)}`;
}

export interface AcceptResult {
  ok: boolean;
  /** Present when ok is false. */
  error?: string;
}

interface ChargeResponse {
  status?: 'succeeded' | 'requires_action' | 'failed';
  clientSecret?: string;
  message?: string;
}

/**
 * Accept (1-click purchase) an upsell for an already-paid order.
 *
 * POSTs `{ orderToken, offer }` to the `stripe-charge-upsell` edge function,
 * which verifies the token and charges the saved card off-session. Outcomes:
 *   - `succeeded`        → { ok: true }
 *   - `requires_action`  → run SCA in-browser via stripe.handleNextAction; on
 *                          success → { ok: true }, else surface the error.
 *   - `failed` / network → { ok: false, error }
 *
 * `stripe` is the loaded Stripe.js instance from the order/OTO page (needed
 * only for the SCA path). When the charge endpoint isn't configured, the call
 * resolves successfully in dev so the funnel stays clickable end-to-end.
 */
export async function acceptUpsell(
  offer: FunnelOffer,
  orderToken: string | null,
  stripe?: Stripe | null,
): Promise<AcceptResult> {
  // No backend configured → stub so the flow is walkable in dev/preview.
  if (!CHARGE_FN_URL) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info(
        `[funnel] acceptUpsell stub — would charge ${offer.priceLabel} for "${offer.name}" (token: ${orderToken ?? 'none'})`,
      );
    }
    return { ok: true };
  }

  if (!orderToken) {
    return { ok: false, error: 'Your order session expired. Please refresh and try again.' };
  }

  try {
    const res = await fetch(CHARGE_FN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderToken, offer: offer.offerKey }),
    });

    // 400 = bad/expired token (the function 400s only there).
    if (res.status === 400) {
      return { ok: false, error: 'Your order session is no longer valid. Please contact support.' };
    }

    const data: ChargeResponse = await res.json().catch(() => ({}));

    if (data.status === 'succeeded') {
      return { ok: true };
    }

    if (data.status === 'requires_action' && data.clientSecret) {
      if (!stripe) {
        return { ok: false, error: 'Extra verification is required but the payment library is unavailable. Please refresh.' };
      }
      const { error } = await stripe.handleNextAction({ clientSecret: data.clientSecret });
      if (error) {
        return { ok: false, error: error.message || 'Card verification failed. Please try again.' };
      }
      // SCA cleared and the PaymentIntent was confirmed during creation
      // (confirm:true), so completing the action finalizes the charge.
      return { ok: true };
    }

    return {
      ok: false,
      error: data.message || 'That charge didn’t go through. You can try again or skip.',
    };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Network error' };
  }
}
