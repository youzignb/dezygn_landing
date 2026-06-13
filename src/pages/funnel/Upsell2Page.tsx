import { useState, useEffect, ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight, Loader2 } from 'lucide-react';
import Logo from '../../components/Logo';
import { oto2, STRIPE_PUBLISHABLE_KEY } from '../../config/funnel';
import { acceptUpsell, getOrderToken, buildNextUrl } from '../../lib/checkout';
import { loadStripe, type Stripe } from '@stripe/stripe-js';

// One shared Stripe.js promise per session — only needed for the SCA
// (requires_action) path. Null when no publishable key is configured.
const stripePromise: Promise<Stripe | null> | null = STRIPE_PUBLISHABLE_KEY
  ? loadStripe(STRIPE_PUBLISHABLE_KEY)
  : null;

/**
 * OTO 2 — The Dezygn Credit Deal ($99).
 * Branded post-purchase upsell, v4 "Paper & Ink" funnel skin (matches
 * ClientSystemPage). 1-click accept via the saved order token; decline link
 * passes through to /success. No countdown timers.
 */

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

const benefits: { lead: string; rest: string }[] = [
  { lead: '1,500 credits — yours to keep permanently', rest: '. Enough to build samples for dozens of jobs. They never expire, even after the 30 days.' },
  { lead: '30 days of Agency features', rest: ' — the Upwork job feed surfaces fresh briefs daily, and batch outreach visuals let you make samples for ten jobs at once.' },
  { lead: 'Samples in minutes, not hours', rest: ' — so you out-pace the 40 freelancers still typing "I can do this."' },
  { lead: 'Deliver faster, take on more', rest: ' — the work stops being the bottleneck. After 30 days you drop to the free plan but keep every unused credit.' },
];

function Benefit({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/15 text-[#7C3AED]">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className="flex-1 text-[16px] leading-7 text-[#2B2B2B]">{children}</span>
    </li>
  );
}

export default function Upsell2Page() {
  const navigate = useNavigate();
  const [orderToken, setOrderToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Read the order token carried forward from OTO 1 (?t=, legacy ?order=).
  useEffect(() => {
    setOrderToken(getOrderToken());
  }, []);

  async function handleAccept() {
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    const stripe = stripePromise ? await stripePromise : null;
    const result = await acceptUpsell(oto2, orderToken, stripe);
    if (result.ok) {
      navigate(buildNextUrl(oto2.next, orderToken));
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  function handleDecline() {
    navigate(buildNextUrl(oto2.decline, orderToken));
  }

  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>One Last Thing | The Dezygn Credit Deal</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Funnel page: logo only, no nav. */}
      <header className="flex items-center justify-center px-5 pt-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Dezygn home">
          <Logo variant="dark" size="sm" showText={false} />
          <span className="text-[17px] font-semibold tracking-tight text-[#1A1A1A]">dezygn</span>
        </Link>
      </header>

      <main className="relative px-5 pb-20 pt-10 sm:px-8">
        {/* One decorative serif glyph, as the sales page allows. */}
        <span aria-hidden className={`${serif} pointer-events-none absolute left-[6%] top-4 hidden select-none text-[120px] italic leading-none text-[#8B5CF6]/[0.12] lg:block`}>✦</span>

        <div className="mx-auto max-w-2xl">
          {/* Eyebrow + headline */}
          <div className="text-center">
            <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.16em] text-[#7C3AED]`}>
              One last thing
            </p>
            <h1 className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-tight sm:text-[44px]">
              Make The Work{' '}
              <span className={`${serif} font-normal italic text-[#7C3AED]`}>Effortless.</span>
            </h1>
            <p className={`${sans} mx-auto mt-5 max-w-xl text-[17px] leading-8 text-[#6B6459]`}>
              You've got the method. Now give yourself the engine to run it — so a sample takes minutes and you're never the one holding the job up.
            </p>
          </div>

          {/* Offer card */}
          <div className="mt-10 rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-7 shadow-[0_24px_60px_rgba(26,26,26,0.08)] sm:p-9">
            <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>
              Add-on · The Dezygn Credit Deal
            </p>
            <p className={`${serif} mt-3 text-3xl italic text-[#1A1A1A] sm:text-[34px]`}>
              Scale the work — without scaling the hours.
            </p>
            <p className="mt-4 text-[16px] leading-7 text-[#2B2B2B]">
              A one-time stack of credits plus 30 days of the Agency tools that make this whole thing fast:
            </p>

            <ul className="mt-7 space-y-4">
              {benefits.map((b) => (
                <Benefit key={b.lead}>
                  <strong className="font-semibold text-[#1A1A1A]">{b.lead}</strong>{b.rest}
                </Benefit>
              ))}
            </ul>

            {/* Price line */}
            <div className="mt-8 rounded-2xl border border-[#1A1A1A]/[0.12] bg-[#EDEBE6] px-6 py-5 text-center">
              <p className="text-[17px] leading-7 text-[#2B2B2B]">
                Add it to your order for just{' '}
                <span className="font-semibold text-[#1A1A1A]">{oto2.priceLabel}</span> — one time.
              </p>
              <p className={`${mono} mt-1 text-[11px] uppercase tracking-[0.12em] text-[#8B867B]`}>
                One click · charged to the card you just used
              </p>
            </div>

            {error && (
              <p className="mt-4 text-center text-[14px] text-[#B91C1C]">{error}</p>
            )}

            {/* YES button */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleAccept}
                disabled={submitting}
                className="inline-flex min-h-[56px] w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-[15px] font-semibold text-white transition hover:bg-[#7C3AED] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Adding…
                  </>
                ) : (
                  <>
                    Yes — Add The Dezygn Credit Deal ({oto2.priceLabel})
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Decline — smaller, lower contrast, gentle loss-aversion */}
          <div className="mt-7 text-center">
            <button
              type="button"
              onClick={handleDecline}
              disabled={submitting}
              className={`${sans} text-[14px] leading-6 text-[#8B867B] underline underline-offset-4 transition hover:text-[#6B6459] disabled:opacity-50`}
            >
              No thanks, I'll pass on the credits — I'm fine doing it the slow way for now.
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[#1A1A1A] px-5 py-10 text-center">
        <p className={`${mono} text-xs text-[#E8E4DB]/50`}>© 2026 Wosho LLC. All rights reserved.</p>
        <div className={`${mono} mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#E8E4DB]/50`}>
          <Link to="/privacy" className="hover:text-[#E8E4DB]">Privacy</Link>
          <Link to="/terms" className="hover:text-[#E8E4DB]">Terms</Link>
          <Link to="/earnings-disclaimer" className="hover:text-[#E8E4DB]">Earnings Disclaimer</Link>
        </div>
      </footer>
    </div>
  );
}
