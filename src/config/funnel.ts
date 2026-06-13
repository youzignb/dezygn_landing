/**
 * Funnel configuration — single source of truth for the $37 tripwire funnel.
 *
 * Checkout platform: **Stripe** (Wosho LLC). The branded order page at /order
 * collects the card via a Stripe Payment Element and saves it for off-session
 * use; the two OTO pages then charge that saved card with one click.
 *
 * Flow:
 *   /order            (pays $37 + optional $27 order bump; card saved)
 *     → /oto/fulfillment  (Upsell 1 — Fulfillment Masterclass, $69, 1-click)
 *     → /oto/credits      (Upsell 2 — Dezygn Credit Deal, $99, 1-click)
 *     → /success          (thank-you page)
 *
 * Prices are the canonical source on the SERVER (the edge functions map
 * offer→amount). The cents below are for display/parity only — never trusted
 * by the charge endpoint. See docs/landingpage.v4/funnel-spec.md.
 */

/* ── Stripe env (read at build time by Vite) ───────────────────────────────
 * VITE_STRIPE_PUBLISHABLE_KEY — pk_test_… / pk_live_… for Stripe.js.
 * VITE_CREATE_PI_FN_URL       — stripe-create-payment-intent edge function URL.
 * VITE_CHARGE_FN_URL          — stripe-charge-upsell edge function URL.
 * All three may be unset in dev/preview; the order page renders a clear
 * "checkout not configured" placeholder and nothing crashes.
 */
export const STRIPE_PUBLISHABLE_KEY: string =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '';
export const CREATE_PI_FN_URL: string =
  import.meta.env.VITE_CREATE_PI_FN_URL || '';
export const CHARGE_FN_URL: string =
  import.meta.env.VITE_CHARGE_FN_URL || '';

/** True when the front-end has enough config to attempt a live checkout. */
export const stripeConfigured: boolean = Boolean(
  STRIPE_PUBLISHABLE_KEY && CREATE_PI_FN_URL,
);

/* ── Front-end offer + order bump (charged together on /order) ─────────────*/

/** Base front-end product price, in cents. Mirrors the server. */
export const FRONT_END_AMOUNT = 3700; // $37
/** Order-bump price, in cents. Mirrors the server. */
export const BUMP_AMOUNT = 2700; // $27

export const frontEndOffer = {
  id: 'client-system',
  name: 'The AI Creative Client System',
  amount: FRONT_END_AMOUNT,
  priceLabel: '$37',
} as const;

export const orderBump = {
  id: 'setup-pack',
  name: 'The 2-Minute Setup Pack',
  amount: BUMP_AMOUNT,
  priceLabel: '$27',
} as const;

/** Format a cents amount as a whole-dollar string (e.g. 6400 → "$64"). */
export function formatCents(cents: number): string {
  const dollars = cents / 100;
  return Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`;
}

/* ── The branded order page (internal route, replaces the hosted checkout) ──*/

/**
 * Checkout URL for the front-end product. Now the internal branded order page.
 * (Previously VITE_CHECKOUT_URL → a hosted checkout; that seam is retired.)
 */
export const checkoutUrl = '/order';

/** OTO route paths — referenced by App.tsx and the offer objects. */
export const OTO_PATHS = {
  fulfillment: '/oto/fulfillment',
  credits: '/oto/credits',
} as const;

export const ORDER_PATH = '/order';

/** Where the funnel ends. */
export const SUCCESS_PATH = '/success';

export interface FunnelOffer {
  /** Stable id, used in logs/UI. */
  id: string;
  /** Server-side offer key the charge endpoint maps to an amount. */
  offerKey: 'oto1' | 'oto2';
  /** Customer-facing offer name. */
  name: string;
  /** Price in cents (display/parity only; the server is authoritative). */
  amount: number;
  /** Formatted price string for display, e.g. "$69". */
  priceLabel: string;
  /** Route this offer's page lives at. */
  path: string;
  /** Where YES navigates after a successful charge. */
  next: string;
  /** Where the decline link navigates. */
  decline: string;
}

/** Upsell 1 — The Fulfillment Masterclass ($69). */
export const oto1: FunnelOffer = {
  id: 'oto1-fulfillment',
  offerKey: 'oto1',
  name: 'The Fulfillment Masterclass',
  amount: 6900,
  priceLabel: '$69',
  path: OTO_PATHS.fulfillment,
  next: OTO_PATHS.credits,
  decline: OTO_PATHS.credits,
};

/** Upsell 2 — The Dezygn Credit Deal ($99). */
export const oto2: FunnelOffer = {
  id: 'oto2-credits',
  offerKey: 'oto2',
  name: 'The Dezygn Credit Deal',
  amount: 9900,
  priceLabel: '$99',
  path: OTO_PATHS.credits,
  next: SUCCESS_PATH,
  decline: SUCCESS_PATH,
};

export const offers = { oto1, oto2 } as const;

/**
 * Maps a path to the next step in the funnel (independent of YES/NO, since for
 * these OTOs accept and decline land on the same next page). Returns the
 * success path for anything unknown.
 */
export function nextStep(path: string): string {
  switch (path) {
    case OTO_PATHS.fulfillment:
      return OTO_PATHS.credits;
    case OTO_PATHS.credits:
      return SUCCESS_PATH;
    default:
      return SUCCESS_PATH;
  }
}
