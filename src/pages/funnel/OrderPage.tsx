import { useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Lock, Loader2, ShieldCheck } from 'lucide-react';
import { loadStripe, type Stripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Logo from '../../components/Logo';
import {
  STRIPE_PUBLISHABLE_KEY,
  CREATE_PI_FN_URL,
  stripeConfigured,
  frontEndOffer,
  orderBump,
  FRONT_END_AMOUNT,
  BUMP_AMOUNT,
  formatCents,
} from '../../config/funnel';
import { OTO_PATHS } from '../../config/funnel';

/**
 * Branded order page — /order. v4 "Paper & Ink" skin (matches ClientSystemPage
 * and the OTO pages). Pays the $37 front-end product + optional $27 order bump
 * in one Stripe PaymentIntent, saves the card off-session, then advances to the
 * 1-click OTO funnel carrying the signed order token (?t=).
 *
 * Resilient by design: if Stripe env (VITE_STRIPE_PUBLISHABLE_KEY /
 * VITE_CREATE_PI_FN_URL) is unset, it renders a clear "checkout not configured"
 * placeholder instead of crashing — so build/preview/prerender stay green.
 */

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

// One Stripe.js promise per session (null when unconfigured).
const stripePromise: Promise<Stripe | null> | null = STRIPE_PUBLISHABLE_KEY
  ? loadStripe(STRIPE_PUBLISHABLE_KEY)
  : null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ── Shared chrome ─────────────────────────────────────────────── */

function Header() {
  return (
    <header className="flex items-center justify-center px-5 pt-8">
      <Link to="/" className="flex items-center gap-2.5" aria-label="Dezygn home">
        <Logo variant="dark" size="sm" showText={false} />
        <span className="text-[17px] font-semibold tracking-tight text-[#1A1A1A]">dezygn</span>
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] px-5 py-10 text-center">
      <p className={`${mono} text-xs text-[#E8E4DB]/50`}>© 2026 Wosho LLC. All rights reserved.</p>
      <div className={`${mono} mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#E8E4DB]/50`}>
        <Link to="/privacy" className="hover:text-[#E8E4DB]">Privacy</Link>
        <Link to="/terms" className="hover:text-[#E8E4DB]">Terms</Link>
        <Link to="/earnings-disclaimer" className="hover:text-[#E8E4DB]">Earnings Disclaimer</Link>
      </div>
    </footer>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Complete Your Order | The AI Creative Client System</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

// Trust row beneath the pay button (mirrors ClientSystemPage's CheckoutTrust).
function CheckoutTrust() {
  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <p className={`${mono} flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.1em] text-[#8B867B]`}>
        <Lock className="h-3 w-3" aria-hidden />
        Secure checkout · SSL encrypted · 30-day money-back guarantee
      </p>
      <div className={`${mono} flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.12em] text-[#8B867B]/80`}>
        {['VISA', 'Mastercard', 'Amex'].map((card, i) => (
          <span key={card} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-[#8B867B]/40">·</span>}
            <span className="rounded border border-[#1A1A1A]/[0.12] bg-white px-1.5 py-0.5 text-[#6B6459]">{card}</span>
          </span>
        ))}
        <span aria-hidden className="text-[#8B867B]/40">·</span>
        <span className="flex items-center gap-1 text-[#6B6459]"><ShieldCheck className="h-3 w-3" aria-hidden /> Stripe</span>
      </div>
    </div>
  );
}

/* ── Order summary (left column) ───────────────────────────────── */

function OrderSummary({
  bump,
  onToggleBump,
  total,
  disabled,
}: {
  bump: boolean;
  onToggleBump: (next: boolean) => void;
  total: number;
  disabled: boolean;
}) {
  return (
    <div className="space-y-4">
      <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.16em] text-[#7C3AED]`}>Your order</p>

      {/* Front-end product line */}
      <div className="flex items-start justify-between gap-4 rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-5 shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
        <div className="flex-1">
          <p className="font-semibold text-[#1A1A1A]">{frontEndOffer.name}</p>
          <p className="mt-1 text-sm leading-6 text-[#6B6459]">
            The complete playbook for landing paying AI-photography clients on Upwork — by sending a free custom sample before you pitch.
          </p>
        </div>
        <span className={`${mono} shrink-0 whitespace-nowrap text-[15px] font-medium text-[#1A1A1A]`}>{frontEndOffer.priceLabel}</span>
      </div>

      {/* Order-bump card — real checkbox */}
      <label
        className={`flex cursor-pointer items-start gap-4 rounded-2xl border-2 p-5 transition ${
          bump
            ? 'border-[#8B5CF6] bg-[#8B5CF6]/[0.06]'
            : 'border-dashed border-[#1A1A1A]/25 bg-[#EDEBE6]'
        } ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
      >
        <input
          type="checkbox"
          checked={bump}
          disabled={disabled}
          onChange={(e) => onToggleBump(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-[#1A1A1A]/30 text-[#7C3AED] accent-[#7C3AED] focus:ring-[#8B5CF6] disabled:cursor-not-allowed"
        />
        <div className="flex-1">
          <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>One-time add-on</p>
          <p className="mt-1 font-semibold text-[#1A1A1A]">
            Add {orderBump.name}
            <span className="ml-2 text-[#7C3AED]">+{orderBump.priceLabel}</span>
          </p>
          <p className="mt-1 text-sm leading-6 text-[#6B6459]">
            Two custom GPTs that build your Upwork profile + portfolio in 2 minutes, on a free ChatGPT account. Skip the blank-page paralysis on day one.
          </p>
        </div>
      </label>

      {/* Live total */}
      <div className="flex items-center justify-between gap-3 rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A] px-5 py-4 text-[#E8E4DB] shadow-[0_12px_30px_rgba(26,26,26,0.12)]">
        <p className={`${mono} text-[12px] font-medium uppercase tracking-[0.14em] text-[#E8E4DB]/70`}>Total due today</p>
        <span className={`${serif} text-3xl italic text-[#E8E4DB] sm:text-4xl`}>{formatCents(total)}</span>
      </div>

      <p className={`${mono} flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] text-[#8B867B]`}>
        <Lock className="h-3 w-3" aria-hidden /> One-time charge · instant access · yours forever
      </p>
    </div>
  );
}

/* ── Stripe payment form (right column, inside <Elements>) ─────── */

function PaymentForm({
  total,
  orderToken,
  refreshing,
  email,
}: {
  total: number;
  orderToken: string | null;
  refreshing: boolean;
  email: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements || paying || refreshing) return;
    if (!orderToken) {
      setError('Order session not ready yet. Give it a second and try again.');
      return;
    }
    setPaying(true);
    setError(null);

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        receipt_email: email || undefined,
        // Used only if Stripe must redirect (rare bank flows). On return the
        // user lands back on /order; redirect:'if_required' avoids it otherwise.
        return_url: `${window.location.origin}${OTO_PATHS.fulfillment}?t=${encodeURIComponent(orderToken)}`,
      },
      redirect: 'if_required',
    });

    if (confirmError) {
      setError(confirmError.message || 'Your payment could not be completed. Please try again.');
      setPaying(false);
      return;
    }

    // No redirect needed → PaymentIntent succeeded (or processing). Advance.
    navigate(`${OTO_PATHS.fulfillment}?t=${encodeURIComponent(orderToken)}`);
  }

  const busy = paying || refreshing || !stripe || !elements;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-5 shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
        <PaymentElement options={{ layout: 'tabs' }} />
      </div>

      {error && (
        <p className="text-center text-[14px] text-[#B91C1C]">{error}</p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-[15px] font-semibold text-white transition hover:bg-[#7C3AED] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {paying ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Processing…
          </>
        ) : (
          <>
            Pay {formatCents(total)} — Get Instant Access
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <CheckoutTrust />
    </form>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function OrderPage() {
  const [email, setEmail] = useState('');
  const [bump, setBump] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [orderToken, setOrderToken] = useState<string | null>(null);
  const [piError, setPiError] = useState<string | null>(null);
  const [loadingPi, setLoadingPi] = useState(false);

  const total = FRONT_END_AMOUNT + (bump ? BUMP_AMOUNT : 0);
  const emailValid = EMAIL_RE.test(email);

  // Guards against out-of-order responses when the bump toggles quickly.
  const reqIdRef = useRef(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const createPaymentIntent = useCallback(
    async (withBump: boolean, withEmail: string) => {
      if (!stripeConfigured) return;
      const reqId = ++reqIdRef.current;
      setLoadingPi(true);
      setPiError(null);
      try {
        const res = await fetch(CREATE_PI_FN_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: withEmail, bump: withBump }),
        });
        const data = await res.json().catch(() => ({}));
        if (reqId !== reqIdRef.current) return; // a newer request superseded this one
        if (!res.ok || !data.clientSecret) {
          setPiError(data.message || 'We couldn’t start checkout. Please refresh and try again.');
          return;
        }
        setClientSecret(data.clientSecret);
        setOrderToken(data.orderToken ?? null);
      } catch {
        if (reqId !== reqIdRef.current) return;
        setPiError('Network error starting checkout. Please refresh and try again.');
      } finally {
        if (reqId === reqIdRef.current) setLoadingPi(false);
      }
    },
    [],
  );

  // Create the PaymentIntent once a valid email is present, and refresh the
  // amount when the bump toggles (debounced).
  useEffect(() => {
    if (!stripeConfigured || !emailValid) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      createPaymentIntent(bump, email);
    }, 350);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [bump, email, emailValid, createPaymentIntent]);

  /* ── Unconfigured placeholder (no Stripe env) ── */
  if (!stripeConfigured) {
    return (
      <Shell>
        <main className="px-5 pb-20 pt-12 sm:px-8">
          <div className="mx-auto max-w-md rounded-3xl border border-dashed border-[#1A1A1A]/25 bg-[#EDEBE6] p-8 text-center">
            <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>Checkout not configured</p>
            <p className={`${serif} mt-3 text-2xl italic text-[#1A1A1A]`}>Almost there.</p>
            <p className="mt-3 text-[15px] leading-7 text-[#6B6459]">
              Stripe isn’t wired up in this environment yet. Set{' '}
              <code className={`${mono} text-[13px] text-[#1A1A1A]`}>VITE_STRIPE_PUBLISHABLE_KEY</code> and{' '}
              <code className={`${mono} text-[13px] text-[#1A1A1A]`}>VITE_CREATE_PI_FN_URL</code> to enable checkout.
            </p>
          </div>
        </main>
      </Shell>
    );
  }

  const elementsOptions = clientSecret
    ? {
        clientSecret,
        appearance: {
          theme: 'flat' as const,
          variables: {
            colorPrimary: '#7C3AED',
            colorBackground: '#ffffff',
            colorText: '#1A1A1A',
            borderRadius: '12px',
            fontFamily: 'Inter, "Helvetica Neue", ui-sans-serif, sans-serif',
          },
        },
      }
    : undefined;

  return (
    <Shell>
      <main className="relative px-5 pb-20 pt-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.16em] text-[#7C3AED]`}>Secure checkout</p>
            <h1 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-tight sm:text-[40px]">
              Complete Your{' '}
              <span className={`${serif} font-normal italic text-[#7C3AED]`}>Order.</span>
            </h1>
          </div>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
            {/* LEFT: order summary + bump */}
            <OrderSummary
              bump={bump}
              onToggleBump={setBump}
              total={total}
              disabled={loadingPi}
            />

            {/* RIGHT: email + payment */}
            <div className="space-y-5">
              <div>
                <label htmlFor="order-email" className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>
                  Where should we send your access?
                </label>
                <input
                  id="order-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[#1A1A1A]/[0.18] bg-white px-4 py-3.5 text-[15px] text-[#1A1A1A] outline-none transition placeholder:text-[#8B867B] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30"
                />
              </div>

              {piError && (
                <p className="text-center text-[14px] text-[#B91C1C]">{piError}</p>
              )}

              {!emailValid ? (
                <div className="rounded-2xl border border-dashed border-[#1A1A1A]/20 bg-[#EDEBE6] p-6 text-center">
                  <p className={`${sans} text-[14px] leading-6 text-[#6B6459]`}>
                    Enter your email above to load secure payment.
                  </p>
                </div>
              ) : !clientSecret ? (
                <div className="flex items-center justify-center gap-2 rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-8 text-[#6B6459]">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-[14px]">Loading secure payment…</span>
                </div>
              ) : (
                <Elements stripe={stripePromise} options={elementsOptions} key={clientSecret}>
                  <PaymentForm
                    total={total}
                    orderToken={orderToken}
                    refreshing={loadingPi}
                    email={email}
                  />
                </Elements>
              )}
            </div>
          </div>
        </div>
      </main>
    </Shell>
  );
}
