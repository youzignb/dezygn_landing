import { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ShieldCheck, Star, Lock } from 'lucide-react';
import Logo from '../components/Logo';
import { checkoutUrl } from '../config/funnel';

/**
 * Tripwire sales page — The AI Creative Client System ($37).
 * Long-form direct-response sales letter version.
 * Classic direct-response skeleton in the v4 "Paper & Ink Editorial" language.
 */

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

// TODO: set the real launch deadline before this page goes live. Scarcity must be true:
// price genuinely becomes $67 when the timer ends.
const LAUNCH_DEADLINE = '2026-06-30T23:59:59Z';
const PRICE_AFTER = '$67';

// Checkout URL comes from the funnel config — now the internal branded Stripe
// order page at /order (pays $37 + optional $27 bump, saves the card, then runs
// the 1-click OTO funnel). See src/pages/funnel/OrderPage.tsx.
const CHECKOUT_URL = checkoutUrl;

const stack = [
  { name: 'The Client System', desc: 'The complete playbook with video walkthroughs. Where the jobs are, which ones to skip, how to apply, how to deliver.', value: '$197' },
  { name: 'The 5 Minute Sample Method', desc: 'Watch over my shoulder as I take a real job posting and turn out a client-ready sample in minutes. This is the skill that does the selling FOR you.', value: '$147' },
  { name: 'The Instant Portfolio Prompt', desc: 'No clients yet? One structured prompt builds a 30-image, 5-brand portfolio that makes your profile look like a working studio on day one.', value: '$97' },
  { name: 'The Proposal Swipe File', desc: 'My actual winning proposals. Copy. Adapt. Send.', value: '$67' },
  { name: 'The Retainer Flip', desc: 'The exact message, word for word, that turned a paid test into $780/month last week. This one\'s worth the whole price a hundred times over.', value: '$67' },
  { name: 'The Rate Card', desc: 'What to charge per image, per batch, per retainer, with my real contracts as reference. So you never undercharge out of fear again.', value: '$47' },
  { name: 'The Job Finder Queries', desc: 'Copy-paste searches that surface today\'s AI photography jobs before the crowd finds them.', value: '$27' },
];

function AssetPlaceholder({ label, note, aspect = 'aspect-video' }: { label: string; note: string; aspect?: string }) {
  return (
    <div className={`${aspect} w-full rounded-2xl border-2 border-dashed border-[#1A1A1A]/20 bg-[#EDEBE6] flex flex-col items-center justify-center gap-2 p-6`}>
      <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#1A1A1A]/50`}>{label}</p>
      {note && <p className={`${sans} text-[12px] text-[#8B867B] text-center max-w-xs leading-5`}>{note}</p>}
    </div>
  );
}

function ProofShot({ src, alt, width, height, caption, eager = false, className = '' }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-2 sm:p-3 shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-[10px]"
          loading={eager ? undefined : 'lazy'}
        />
      </div>
      {caption && (
        <p className={`${mono} mt-2 text-center text-[10px] uppercase tracking-[0.12em] text-[#8B867B]`}>{caption}</p>
      )}
    </div>
  );
}

// Slim sticky announcement bar at the very top of the page — the only timer on the page.
function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, min: 0, sec: 0 });

  useEffect(() => {
    function calc() {
      const diff = Math.max(0, new Date(LAUNCH_DEADLINE).getTime() - Date.now());
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const min = Math.floor((diff % 3600000) / 60000);
      const sec = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ days, hours, min, sec });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="sticky top-0 z-50 w-full bg-[#1A1A1A]">
      <div className={`${mono} mx-auto flex max-w-6xl items-center justify-center gap-x-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.12em] text-[#E8E4DB]/75 sm:text-[12px] sm:tracking-[0.14em]`}>
        {/* Full label on sm+, condensed on mobile */}
        <span className="hidden sm:inline">Launch price ends June 30 — then {PRICE_AFTER}</span>
        <span className="sm:hidden">Ends Jun 30 · then {PRICE_AFTER}</span>
        <span aria-hidden className="text-[#E8E4DB]/30">·</span>
        <span className="flex items-center gap-1 font-medium text-[#8B5CF6]">
          <span>{pad(timeLeft.days)}d</span>
          <span>{pad(timeLeft.hours)}h</span>
          <span>{pad(timeLeft.min)}m</span>
          <span className="hidden sm:inline">{pad(timeLeft.sec)}s</span>
        </span>
      </div>
    </div>
  );
}

// Trust signals beneath each CTA (the focus group asked for these). Pure
// markup — no external images — so it stays on-brand and fast.
function CheckoutTrust() {
  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <p className={`${mono} flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-[0.1em] text-[#8B867B]`}>
        <Lock className="h-3 w-3" aria-hidden />
        Secure checkout · SSL encrypted · 30-day money-back guarantee
      </p>
      <div className={`${mono} flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.12em] text-[#8B867B]/80`}>
        {['VISA', 'Mastercard', 'Amex', 'PayPal'].map((card, i) => (
          <span key={card} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-[#8B867B]/40">·</span>}
            <span className="rounded border border-[#1A1A1A]/[0.12] bg-white px-1.5 py-0.5 text-[#6B6459]">{card}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function BuyButton({ label = 'Get Instant Access — $37', trust = true }: { label?: string; trust?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <a
        href={CHECKOUT_URL}
        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-[15px] font-semibold text-white transition hover:bg-[#7C3AED]"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </a>
      {trust && <CheckoutTrust />}
    </div>
  );
}

/* ── Letter patterns ───────────────────────────────────────────── */

// The spine. Plain text + an italic serif accent tail, optional mono eyebrow.
function Crosshead({ children, accent, eyebrow }: { children: ReactNode; accent: string; eyebrow?: string }) {
  return (
    <div className="mt-16 mb-6">
      {eyebrow && (
        <p className={`${mono} mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7C3AED]`}>{eyebrow}</p>
      )}
      <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight leading-tight text-[#1A1A1A]">
        {children}{' '}
        <span className={`${serif} italic font-normal text-[#7C3AED]`}>{accent}</span>
      </h2>
    </div>
  );
}

// Standalone one-sentence punch line.
function Punch({ children }: { children: ReactNode }) {
  return <p className="my-7 text-xl sm:text-2xl font-semibold text-[#1A1A1A]">{children}</p>;
}

// Breakout pull-quote — a real client review, labeled as such.
function PullQuote({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <figure className="mx-auto my-8 max-w-3xl rounded-2xl border border-[#1A1A1A]/[0.12] border-l-4 border-l-[#8B5CF6] bg-white p-7 shadow-[0_12px_30px_rgba(26,26,26,0.06)] sm:p-9">
      <blockquote className={`${serif} text-2xl italic leading-snug text-[#1A1A1A] sm:text-[28px]`}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className={`${mono} mt-4 text-[11px] uppercase tracking-[0.14em] text-[#8B867B]`}>{attribution}</figcaption>
    </figure>
  );
}

// Beginner-friendly aside box (no crosshead).
function AsideBox({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div className="my-8 rounded-2xl border border-[#1A1A1A]/[0.12] bg-[#EDEBE6] p-6 sm:p-8">
      <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>{eyebrow}</p>
      <div className="mt-3 space-y-4 text-[18px] leading-[1.85] text-[#2B2B2B]">{children}</div>
    </div>
  );
}

// Marker highlight — used only on the exact phrases flagged in the copy.
function Hi({ children }: { children: ReactNode }) {
  return <mark className="bg-[#8B5CF6]/15 text-inherit rounded-sm px-1 -mx-0.5">{children}</mark>;
}

const ClientSystemPage = () => {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>The AI Creative Client System — Land Ecommerce Clients With AI Photography | Dezygn</title>
        <meta name="description" content="The complete system for landing paying AI photography clients on Upwork — by sending a free custom sample before you pitch. $37, instant access." />
        <link rel="canonical" href="https://dezygn.com/client-system" />
      </Helmet>

      {/* Sticky announcement bar — the only countdown timer on the page. */}
      <AnnouncementBar />

      {/* Funnel page: logo only, no nav. */}
      <header className="flex items-center justify-center px-5 pt-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Dezygn home">
          <Logo variant="dark" size="sm" showText={false} />
          <span className="text-[17px] font-semibold tracking-tight text-[#1A1A1A]">dezygn</span>
        </Link>
      </header>

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative px-5 pt-14 pb-10 text-center sm:px-8">
          {/* One decorative serif glyph, as spec allows. */}
          <span aria-hidden className={`${serif} pointer-events-none absolute right-[8%] top-6 hidden select-none text-[120px] italic leading-none text-[#8B5CF6]/[0.12] lg:block`}>✳</span>

          <div className="mx-auto max-w-3xl">
            <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.16em] text-[#7C3AED]`}>
              For freelancers and side-hustlers who are sick of pitching:
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              While 40 Freelancers Beg For The Job, One Quietly Hands Over The{' '}
              <span className={`${serif} font-normal italic`}>Finished Work.</span>
            </h1>
            <p className={`${sans} mx-auto mt-5 max-w-xl text-lg leading-8 text-[#6B6459]`}>
              Two ecommerce brands — online shops — now pay that guy $1,480/month for about 8 hours of work each. Here's how to be him.
            </p>

            {/* VSL frame — real-player look, clearly labeled placeholder. */}
            <div className="relative mt-9 aspect-video w-full overflow-hidden rounded-[24px] bg-[#1A1A1A]">
              {/* Centered play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Play the video sales letter"
                  className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-4 ring-white/15 transition hover:bg-white"
                >
                  <span className="ml-1 block h-0 w-0 border-y-[13px] border-l-[22px] border-y-transparent border-l-[#7C3AED]" />
                </button>
                <p className={`${mono} max-w-[260px] rounded-md border border-dashed border-[#E8E4DB]/30 px-3 py-1.5 text-center text-[10px] uppercase leading-4 tracking-[0.1em] text-[#E8E4DB]/55`}>
                  VSL placeholder — thumbnail will be the 40-beggars-vs-one-quiet-guy illustration
                </p>
              </div>
              {/* Bottom-left mono caption overlay */}
              <p className={`${mono} absolute bottom-4 left-5 text-[12px] uppercase tracking-[0.12em] text-[#E8E4DB]`}>
                40 applied. This is why I won.
              </p>
            </div>

            <p className={`${sans} mt-4 text-[15px] text-[#8B867B]`}>
              Prefer to read? The whole story is below — it takes four minutes.
            </p>

            <div className="mt-7 flex justify-center">
              <BuyButton label="Get The Client System — $37" />
            </div>
          </div>
        </section>

        {/* ── The letter ────────────────────────────────────────── */}
        <section className="px-5 pb-10 sm:px-8">
          <div className="mx-auto max-w-6xl">

            {/* Opening → text left, the two convo ProofShots right (sticky) */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
                {/* Byline with avatar */}
                <div className="flex items-center gap-3">
                  <img
                    src="/bertrand-profile.png"
                    alt="Bertrand"
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-full border border-[#1A1A1A]/10 object-cover"
                  />
                  <p className="text-[17px] font-semibold text-[#1A1A1A]">Hey, it's Bertrand.</p>
                </div>

                <p className="mt-6">I want to show you something real quick.</p>

                {/* On mobile, the convo shots render here (inside the text flow); on lg they live in the companion column. */}
                <div className="my-6 space-y-4 lg:hidden">
                  <ProofShot
                    src="/assets/images/client-system/proof-message.png"
                    alt="Bertrand's Upwork proposal offering a free custom sample"
                    width={839}
                    height={682}
                    eager
                  />
                  <ProofShot
                    src="/assets/images/client-system/proof-reply.png"
                    alt="The client's reply praising the sample images"
                    width={835}
                    height={365}
                    caption="Real conversation. 40+ applicants. Client name blurred for privacy."
                  />
                </div>

                <p>That's a real Upwork conversation. A brand posted a job for AI product photos. About 40 freelancers applied.</p>

                <Punch>I won it.</Punch>

                <p>Not because I was cheaper. I wasn't.</p>
                <p className="mt-5">Not because I had a hundred 5-star reviews. I didn't.</p>
                <p className="mt-5">I won because of <Hi>one weird little move that nobody else makes.</Hi></p>
                <p className="mt-5">And once you see it, you can't unsee it.</p>

                <AsideBox eyebrow="New to all this? Read this first.">
                  <p>Never used Upwork? Never sent a proposal in your life? Good — you've got less to unlearn.</p>
                  <p>I'm going to explain everything from zero. What Upwork is (the world's biggest freelance job board — companies post work, you apply for it). What a proposal is (the short message you send to apply). What a retainer is (a flat monthly fee a client pays to keep you on tap). How to set the whole thing up from scratch, even if you've never freelanced a day in your life. So if you've been reading those words wondering whether this is for beginners — it is. It's mostly for beginners.</p>
                </AsideBox>
              </article>

              {/* Companion: convo ProofShots, sticky, lg only */}
              <div className="hidden lg:col-span-5 lg:block">
                <div className="space-y-4 lg:sticky lg:top-20">
                  <ProofShot
                    src="/assets/images/client-system/proof-message.png"
                    alt="Bertrand's Upwork proposal offering a free custom sample"
                    width={839}
                    height={682}
                    eager
                  />
                  <ProofShot
                    src="/assets/images/client-system/proof-reply.png"
                    alt="The client's reply praising the sample images"
                    width={835}
                    height={365}
                    caption="Real conversation. 40+ applicants. Client name blurred for privacy."
                  />
                </div>
              </div>
            </div>

            {/* "Forty Applicants" → text left, the jewelry job post right */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
                <Crosshead accent="Promises.">Forty Applicants. Thirty-Nine Identical</Crosshead>

                <p>Here's the deal.</p>
                <p className="mt-5">Every day, ecommerce brands post jobs on Upwork. AI product photos. Lifestyle shots. Ad creatives. They need them constantly, because product pages and ads and emails eat images for breakfast.</p>

                {/* Mobile-only job post; on lg it lives in the companion column */}
                <div className="my-6 lg:hidden">
                  <ProofShot
                    src="/assets/images/client-system/job-post-jewelry.png"
                    alt="Upwork job post from a jewelry brand seeking 300 AI images per month"
                    width={1382}
                    height={1464}
                    caption="A real post from yesterday: one jewelry brand, 300 AI images a month."
                  />
                </div>

                <p>And every day, the same 40 freelancers reply with the same three messages:</p>

                {/* Promise bubbles */}
                <div className="my-7 space-y-3">
                  <p className="w-fit rounded-2xl rounded-tl-sm border border-[#1A1A1A]/10 bg-[#EDEBE6] px-5 py-3 text-[15px] italic text-[#6B6459]">"I can do this."</p>
                  <p className="ml-6 w-fit rounded-2xl rounded-tl-sm border border-[#1A1A1A]/10 bg-[#EDEBE6] px-5 py-3 text-[15px] italic text-[#6B6459]">"I'm an expert."</p>
                  <p className="ml-12 w-fit rounded-2xl rounded-tl-sm border border-[#1A1A1A]/10 bg-[#EDEBE6] px-5 py-3 text-[15px] italic text-[#6B6459]">"Check out my portfolio."</p>
                </div>

                <Punch>Promise. Promise. Promise.</Punch>

                <p>Here's the thing — the client has read those three sentences forty times today. Word for word. The names change, the promises don't.</p>
                <p className="mt-5">Now sit in the client's chair for a second. She's about to wire money to a complete stranger on the internet. She's not excited — she's nervous. Forty people are telling her what they COULD do, and she has no idea who's real.</p>
                <p className="mt-5">She doesn't want a freelancer. She wants her images. And every proposal in her inbox is asking her to gamble on getting them.</p>
              </article>

              {/* Companion: jewelry job post, sticky, lg only */}
              <div className="hidden lg:col-span-5 lg:block">
                <div className="lg:sticky lg:top-20">
                  <ProofShot
                    src="/assets/images/client-system/job-post-jewelry.png"
                    alt="Upwork job post from a jewelry brand seeking 300 AI images per month"
                    width={1382}
                    height={1464}
                    caption="A real post from yesterday: one jewelry brand, 300 AI images a month."
                  />
                </div>
              </div>
            </div>

            {/* Mechanism → text left (col-span-7), raw→client-ready proof right (col-span-5) */}
            <div className="mt-4 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
              <div className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
                <Crosshead accent="Proving.">So I Stopped Pitching. I Started</Crosshead>

                <p>Before I apply... <Hi>I make the image.</Hi></p>
                <p className="mt-5">Her actual product. Her brand's style. Done with AI in a few minutes. Attached to my proposal like it's no big deal.</p>
                <p className="mt-5">Think about what happens in her head when she opens that.</p>
                <p className="mt-5">She's not comparing me to 40 freelancers anymore. There's nothing to compare. They said they could. <strong>I already did.</strong></p>

                {/* Mechanism callout box */}
                <div className="my-8 rounded-2xl border border-[#1A1A1A]/[0.12] border-l-4 border-l-[#8B5CF6] bg-white p-6 shadow-[0_24px_60px_rgba(26,26,26,0.08)] sm:p-8">
                  <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>The mechanism</p>
                  <p className={`${serif} mt-3 text-3xl italic text-[#1A1A1A]`}>Proof Before Pitch.</p>
                  <p className="mt-4 text-[17px] leading-8 text-[#2B2B2B]">
                    Everyone else describes the work. You hand it over. The sample does the selling, the talking, and the trust-building — before you've said a word about yourself.
                  </p>
                </div>
              </div>

              {/* Raw → client-ready vertical proof */}
              <div className="mx-auto mt-6 w-full max-w-sm lg:col-span-5 lg:mt-0">
                <div>
                  <p className={`${mono} mb-2 text-[10px] uppercase tracking-[0.14em] text-[#8B867B]`}>What the brand sent me</p>
                  <img
                    src="/assets/images/client-system/work/cream-before.jpg"
                    alt="Raw Cedarwood &amp; Amber body lotion bottle on a plain white background, as supplied by the brand"
                    width={2436}
                    height={2999}
                    className="mx-auto w-2/3 rounded-2xl border border-[#1A1A1A]/[0.12] object-cover aspect-[4/5]"
                  />
                </div>
                <p aria-hidden className={`${serif} my-3 text-center text-3xl italic leading-none text-[#8B5CF6]`}>✳</p>
                <div>
                  <p className={`${mono} mb-2 text-[10px] uppercase tracking-[0.14em] text-[#7C3AED]`}>What I sent back — made with AI</p>
                  <img
                    src="/assets/images/client-system/work/cream-after.jpg"
                    alt="Lifestyle photo of a woman on a patio holding the Cedarwood &amp; Amber body lotion"
                    width={1024}
                    height={1024}
                    className="w-full rounded-2xl border border-[#1A1A1A]/[0.12] object-cover aspect-square shadow-[0_24px_60px_rgba(26,26,26,0.12)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NEW full-bleed dark showcase ──────────────────────── */}
        <section className="bg-[#1A1A1A] px-5 py-20 text-[#E8E4DB] sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.16em] text-[#8B5CF6]`}>Real client work, real products</p>
              <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight sm:text-[40px] text-[#E8E4DB]">
                Raw Assets In. Client-Ready Photos{' '}
                <span className={`${serif} font-normal italic text-[#A78BFA]`}>Out.</span>
              </h2>
              <p className={`${sans} mx-auto mt-5 max-w-xl text-[17px] leading-8 text-[#E8E4DB]/70`}>
                Same product. Different planet. Every shot below started as a snapshot the brand already had on their phone.
              </p>
            </div>

            {/* Three before→after pair cards */}
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  label: 'Body lotion',
                  before: { src: '/assets/images/client-system/work/cream-before.jpg', alt: 'Raw body lotion bottle on white', w: 2436, h: 2999 },
                  after: { src: '/assets/images/client-system/work/cream-after.jpg', alt: 'Client-ready lifestyle photo of the body lotion on a patio', w: 1024, h: 1024 },
                },
                {
                  label: "Men's pendant",
                  before: { src: '/assets/images/client-system/work/pendant-before.jpg', alt: 'Bare gold cross pendant on white', w: 3840, h: 3840 },
                  after: { src: '/assets/images/client-system/work/pendant-after.jpg', alt: 'Client-ready editorial photo of a man in a blazer wearing the pendant', w: 1024, h: 1024 },
                },
                {
                  label: "Kids' toy",
                  before: { src: '/assets/images/client-system/work/toy-before.jpg', alt: 'Raw rainbow stacking toy', w: 1080, h: 1080 },
                  after: { src: '/assets/images/client-system/work/toy-after.jpg', alt: 'Client-ready lifestyle photo of a toddler playing with the stacking toy', w: 796, h: 1024 },
                },
              ].map((pair) => (
                <div key={pair.label} className="rounded-3xl border border-[#E8E4DB]/[0.12] bg-[#222222] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                  <div className="relative">
                    <img
                      src={pair.before.src}
                      alt={pair.before.alt}
                      width={pair.before.w}
                      height={pair.before.h}
                      loading="lazy"
                      className="mx-auto w-1/2 rounded-xl border border-[#E8E4DB]/10 object-cover aspect-square"
                    />
                    <span className={`${mono} mt-2 inline-block rounded-md bg-[#E8E4DB]/10 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-[#E8E4DB]/70`}>Before</span>
                  </div>
                  <p aria-hidden className={`${serif} my-2 text-center text-2xl italic leading-none text-[#A78BFA]`}>↓</p>
                  <div className="relative">
                    <img
                      src={pair.after.src}
                      alt={pair.after.alt}
                      width={pair.after.w}
                      height={pair.after.h}
                      loading="lazy"
                      className="w-full rounded-xl border border-[#E8E4DB]/10 object-cover aspect-[4/5]"
                    />
                    <span className={`${mono} absolute left-3 top-3 rounded-md bg-[#8B5CF6] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-white`}>Client-ready</span>
                  </div>
                  <p className={`${mono} mt-4 text-center text-[10px] uppercase tracking-[0.14em] text-[#E8E4DB]/55`}>{pair.label}</p>
                </div>
              ))}
            </div>

            {/* 3-up gallery of more results */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { src: '/assets/images/client-system/work/pet-after.jpg', alt: 'Golden retriever with a branded plush frog', w: 1024, h: 765 },
                { src: '/assets/images/client-system/work/ugc-after.jpg', alt: 'UGC-style selfie of a woman holding a face cream', w: 572, h: 1024 },
                { src: '/assets/images/client-system/work/food-after.jpg', alt: 'Styled food and lifestyle scene', w: 1024, h: 1024 },
              ].map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="w-full rounded-2xl border border-[#E8E4DB]/10 object-cover aspect-[4/5]"
                />
              ))}
            </div>
            <p className={`${mono} mt-5 text-center text-[10px] uppercase tracking-[0.14em] text-[#E8E4DB]/55`}>More from the same workflow — a pet brand, a skincare UGC shot, a food brand.</p>
          </div>
        </section>

        {/* ── Mechanism payoff line (vellum) ────────────────────── */}
        <section className="px-5 pt-10 pb-10 sm:px-8">
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
              <p>And right now that one move is worth <Hi>$1,480 a month to me.</Hi> Every month. From just two clients.</p>
            </article>
          </div>
        </section>

        {/* ── Who's talking (tinted band) ───────────────────────── */}
        <section className="bg-[#EDEBE6] px-5 py-12 sm:px-8">
          {/* Backstory → text left (col-span-7), Top Rated profile right (col-span-5) */}
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
              <Crosshead accent="This.">Who's Talking — And Why I Was Hungry Enough To Find</Crosshead>

              <p>Let me back up, because you should know who's behind this page.</p>
              <p className="mt-5">I'm a software guy from Belgium — Wauthier-Braine, a town you've never heard of. I built Youzign, then Dezygn. Last November, I'll be honest with you, money was tight. I have a daughter. I needed cash flow — not someday-money.</p>
              <p className="mt-5">So I went where the buyers already were: Upwork. People with a problem, a job posted, and a credit card on file.</p>
              <p className="mt-5">I started applying to AI photography jobs with one rule: <strong>always send the sample first.</strong></p>
            </article>

            <div className="mt-6 lg:col-span-5 lg:mt-0">
              <ProofShot
                src="/assets/images/client-system/profile-top-rated.png"
                alt="Upwork profile header showing Top Rated badge and 100% Job Success"
                width={944}
                height={368}
                caption="My actual Upwork profile."
              />
            </div>
          </div>

          {/* Retainer proof → text left (col-span-7), $780 offer right (col-span-5) */}
          <div className="mx-auto mt-12 max-w-6xl lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
              <Crosshead accent="Started.">Then The Retainers</Crosshead>

              <p>Small jobs came in. Then an eyewear brand put me on a retainer — a flat monthly fee to keep me on call — $700 a month for 12 images.</p>
              <p className="mt-5">Then last week, a luxury homeware brand posted a job. I sent proof. They paid for a small test batch. Then I sent ONE message... and that test turned into <Hi>$780 a month, locked in for three months.</Hi></p>
            </article>

            <div className="mt-6 lg:col-span-5 lg:mt-0">
              <ProofShot
                src="/assets/images/client-system/offer-780.png"
                alt="The $780 monthly offer with funded milestone"
                width={1520}
                height={1572}
              />
            </div>
          </div>

          {/* Earnings screenshots — full-width bank */}
          <div className="mx-auto mt-12 max-w-6xl">
            <div className="space-y-4">
              <ProofShot
                src="/assets/images/client-system/earnings-2623.png"
                alt="$2,623 ongoing job with a 5.0 client review"
                width={1170}
                height={516}
                caption="Both retainers, real numbers."
              />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <ProofShot
                  src="/assets/images/client-system/review-video-gig.png"
                  alt="5.0 review AI video gig"
                  width={1996}
                  height={464}
                />
                <ProofShot
                  src="/assets/images/client-system/gig-ecom-designer.png"
                  alt="Ended gig 5.0 at $50 per hour"
                  width={1354}
                  height={338}
                />
                <ProofShot
                  src="/assets/images/client-system/gig-acne-reset.png"
                  alt="Ended gig 5.0 $100"
                  width={1330}
                  height={346}
                />
                <ProofShot
                  src="/assets/images/client-system/gig-dtc-accessories.png"
                  alt="Ended gig 5.0 $330"
                  width={1348}
                  height={358}
                />
              </div>
            <p className={`${mono} mt-2 text-center text-[10px] uppercase tracking-[0.12em] text-[#8B867B]`}>Receipts. All 5.0.</p>
          </div>

          {/* The Real Timeline → text left (col-span-7), the two client-review PullQuotes right (col-span-5) */}
          <div className="mx-auto mt-8 max-w-6xl lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
              <p className={`${mono} text-[10px] leading-5 text-[#8B867B]`}>
                My personal results from real client work. Not typical, not a guarantee.{' '}
                <Link to="/earnings-disclaimer" className="underline underline-offset-2">See the earnings disclaimer.</Link>
              </p>

              <Crosshead accent="With Receipts.">The Real Timeline —</Crosshead>

              <p>I don't want you walking away thinking this was instant. It wasn't. So here's the honest ramp, month by month, with the dates on the screenshots above.</p>
              <p className="mt-5"><strong>September.</strong> A small AI video gig. Five stars, delivered ahead of schedule. First proof that strangers would pay me for this at all.</p>
              <p className="mt-5"><strong>November.</strong> A $100 product-image job — &ldquo;Acne Reset.&rdquo; Five stars. And I'll be straight: it took me way longer than it should have. My first samples weren't fast. The system you're buying is the version of me that figured out how to make them fast.</p>
              <p className="mt-5"><strong>December.</strong> A French-speaking Instagram client came in. That one didn't end — it kept going. It's now at <Hi>$2,623 total</Hi>, still five stars.</p>
              <p className="mt-5">By the way — that $2,623 isn't part of the $1,480 a month I keep quoting. The $1,480 is the two retainers only. Project work like this lands on top of it.</p>
              <p className="mt-5"><strong>Spring.</strong> Small jobs kept landing while the big ones ran. A $310 prompt-engineering job for a publisher in February. A $50-an-hour design month in March. A $330 men's-accessories job through April and May.</p>
              <p className="mt-5"><strong>June 10.</strong> The luxury homeware brand. A paid test batch, then one message, then $780 a month locked for three months — funded as a milestone (Upwork's word for a chunk of work the client pays into up front, so the money's already there before you start).</p>
              <p className="mt-5">See the shape of that? The first month was small and slow. Then it compounds — because every sample makes the next one faster, and every five-star review makes the next client easier. <strong>I'm not showing you a lottery ticket. I'm showing you a slope.</strong></p>

              <p className="mt-8">Two clients. About 8 hours of work each, per month. No sales calls. No cold outreach. No begging.</p>
              <p className="mt-5">That's roughly $90 an hour. But honestly, the hourly rate isn't even the good part.</p>
              <p className="mt-5">The good part is this:</p>

              <Punch>A brand that needs 12 images this month needs 12 more next month. And the month after that.</Punch>

              <p>Images aren't a one-time problem. Which means you're not chasing gigs — <Hi>you're installing income.</Hi> The kind that shows up on the 1st without you re-winning it.</p>
              <p className="mt-5">That's the difference between freelancing that feels like begging... and freelancing where clients come back to YOU.</p>

              <Crosshead accent="Same Business.">Three Doors Into The</Crosshead>

              <p>I keep saying Upwork because that's the door I walked through. But the move — proof before pitch — works through three doors. Pick yours. Door 1 assumes nothing — it's the one for total beginners. Doors 2 and 3 are for people who already have a shop or clients of their own.</p>
            </article>

            {/* Companion: the two client-review pull-quotes, stacked, sticky */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-20">
                <PullQuote
                  quote="Perfect work ! Perfect Communication — Bertrand is a great listener and follows through until everything is perfectly polished."
                  attribution="Upwork client review · 5.0"
                />
                <PullQuote
                  quote="Bertrand went above and beyond with the project I gave him. He finished the project ahead of schedule, even after adding another mile stone. Great communication throughout the whole project…"
                  attribution="Upwork client review · 5.0"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-6 grid max-w-6xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#1A1A1A]/[0.12] bg-[#EDEBE6] p-6">
              <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>Door 1 — The freelancer</p>
              <p className="mt-3 text-[18px] leading-[1.85] text-[#2B2B2B]">The core path this letter walks. You go to Upwork, you find brands posting for AI photos, and you send the finished sample before anyone else sends a promise. This is the one I'll teach you step by step.</p>
            </div>
            <div className="rounded-2xl border border-[#1A1A1A]/[0.12] bg-[#EDEBE6] p-6">
              <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>Door 2 — The own-shop</p>
              <p className="mt-3 text-[18px] leading-[1.85] text-[#2B2B2B]">Already sell your own products — Etsy, Shopify, anything? Point the same method at your own catalog. You stop paying a photographer the $1,500 a month they'd charge, and you keep it. The skill is identical; the client is you.</p>
            </div>
            <div className="rounded-2xl border border-[#1A1A1A]/[0.12] bg-[#EDEBE6] p-6">
              <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>Door 3 — The local</p>
              <p className="mt-3 text-[18px] leading-[1.85] text-[#2B2B2B]">Already have business customers who trust you — a print shop, an agency, a designer you know? Skip Upwork entirely. Run proof before pitch on people who already take your calls: make the sample for THEIR product, hand it over, name a price. No platform, no fees, no waiting in line behind 40 strangers.</p>
            </div>
          </div>
        </section>

        {/* ── The catch / the opportunity ───────────────────────── */}
        <section className="px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
              <Crosshead accent={'Catch?"'}>"Okay Bertrand. What's The</Crosshead>

              <p>Fair question. Here's why this window exists.</p>
              <p className="mt-5">Brands already know they need AI visuals. They've tried doing it themselves. They typed some prompts. They got melted logos and plastic-looking skin. They gave up.</p>
              <p className="mt-5">That's literally why the job post exists.</p>
              <p className="mt-5">So the demand is proven. And the supply? Forty people sending promises. Almost nobody sending proof.</p>

              <Punch>That gap is the whole business.</Punch>

              <p>It won't stay open forever. But it's wide open today.</p>

              <p className="mt-5">And before you ask whether this works outside the US: I'm a French-speaking software guy in Belgium selling to American brands. The sample doesn't have an accent. Nobody opening that image asks where I'm from — they ask how fast I can send the next one. One honest caveat: Upwork availability and payout options vary by country, so check yours first. It's free to look, and that's the only thing you'd need to confirm before you start. And if you're in the US — none of this is even a question. You're on home turf.</p>
            </article>

            {/* Companion: the supply/demand gap stat card */}
            <div className="mt-8 lg:col-span-5 lg:mt-0">
              <div className="rounded-2xl border border-[#1A1A1A] bg-[#1A1A1A] p-7 text-[#E8E4DB] shadow-[0_24px_60px_rgba(26,26,26,0.18)] lg:sticky lg:top-20 sm:p-8">
                <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.16em] text-[#8B5CF6]`}>Demand</p>
                <p className="mt-2 text-[17px] leading-7 text-[#E8E4DB]">Proven. Brands already gave up doing it themselves.</p>
                <div className="my-6 h-px w-full bg-[#E8E4DB]/15" />
                <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.16em] text-[#8B5CF6]`}>Supply</p>
                <p className="mt-2 text-[17px] leading-7 text-[#E8E4DB]">40 promises. Almost zero proof.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The system intro ──────────────────────────────────── */}
        <section className="px-5 pb-4 sm:px-8">
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
              <Crosshead accent="System.">So I Wrote Down Every Step And Called It The</Crosshead>

              <p>Not theory. The actual operating system I run every week — every search, every message, every price.</p>
              <p className="mt-5">It's called <strong>The AI Creative Client System</strong>, and here's what's inside:</p>
              <p className="mt-5">This is the exact system I used to pull $3,000+ out of Upwork — the searches, the messages, the prices. Every piece below is something I actually run.</p>
            </article>
          </div>
        </section>

        {/* ── Offer stack + price → two-column (JVZoo style) ────── */}
        <section id="order" className="px-5 pb-12 sm:px-8">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            {/* LEFT: the value stack */}
            <div className="space-y-3">
              {stack.map((item, i) => (
                <div key={item.name} className="flex items-start gap-4 rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-5 shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
                  {/* Numbered badge */}
                  <div className={`${mono} shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6] text-[18px] font-semibold text-white`}>
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold text-[#1A1A1A]">{item.name}</p>
                      <span className={`${mono} mt-0.5 shrink-0 whitespace-nowrap text-[13px] font-medium text-[#7C3AED] sm:text-[14px]`}>{item.value} value</span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-[#6B6459]">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* Total value row */}
              <div className="flex items-center justify-between gap-3 rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A] px-5 py-4 text-[#E8E4DB] shadow-[0_12px_30px_rgba(26,26,26,0.12)]">
                <p className={`${mono} text-[12px] font-medium uppercase tracking-[0.14em] text-[#E8E4DB]/70`}>Total value</p>
                <span className={`${serif} text-3xl italic text-[#E8E4DB] sm:text-4xl`}>$649</span>
              </div>
            </div>

            {/* RIGHT: sticky order rail (top-16 clears the sticky announcement bar) */}
            <div className="lg:sticky lg:top-16">
              {/* Product cover placeholder */}
              <div className="mb-6">
                <AssetPlaceholder
                  label="Product cover image"
                  note="Flat-lay ecover bundle: box/binder + tablet + bonus card thumbnails. Looks like a kit, not a PDF."
                  aspect="aspect-video"
                />
              </div>

              {/* Price reveal */}
              <div className="text-[17px] leading-8 text-[#2B2B2B]">
                <p>You're not paying $649.</p>
                <Punch>You're paying $37.</Punch>
                <p>Yeah. Thirty-seven bucks. Less than what my clients pay me for 25 minutes.</p>
              </div>

              {/* Dark price panel */}
              <div className="mt-6 rounded-3xl border border-[#1A1A1A] bg-[#1A1A1A] p-8 text-center text-[#E8E4DB] shadow-[0_32px_80px_rgba(26,26,26,0.28)] sm:p-10">
                <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
                  You're paying
                </p>
                <p className={`${serif} mt-3 text-6xl italic tracking-tight text-[#E8E4DB]`}>$37.</p>
                <p className="mt-3 text-sm text-[#E8E4DB]/60">One-time. Instant access. Yours forever.</p>
              </div>

              {/* CTA */}
              <div className="mt-8 space-y-4 text-center">
                <BuyButton label="GET THE CLIENT SYSTEM — $37" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Why so cheap (tinted band) ────────────────────────── */}
        <section className="bg-[#EDEBE6] px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Why so cheap → text left (col-span-7), pricing stat card right (col-span-5) */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
                <Crosshead accent="Cheap?">Why So</Crosshead>

                <p>Two reasons, and I'll be straight with you.</p>
                <p className="mt-5">One: I remember needing this exact information when I was broke, and $37 is the price I could've paid that month.</p>
                <p className="mt-5">Two: some of you will love this, land clients, and want to go deeper with me later. That's my bet. But the $37 system is complete on its own. You don't need anything else to land your first client — including, by the way, any specific tool. The method works with whatever AI image tool you've got. Even free ones.</p>
              </article>

              {/* Companion: launch-pricing stat card */}
              <div className="mt-8 lg:col-span-5 lg:mt-0 lg:flex lg:items-center">
                <div className="w-full rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-7 shadow-[0_12px_30px_rgba(26,26,26,0.06)] sm:p-8">
                  <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.16em] text-[#7C3AED]`}>Launch pricing</p>
                  <p className={`${serif} mt-3 text-5xl italic text-[#1A1A1A]`}>$37 today</p>
                  <p className={`${mono} mt-3 text-[15px] text-[#8B867B] line-through`}>$67 after launch</p>
                </div>
              </div>
            </div>

            {/* What it actually costs → full-width ledger */}
            <article className="mt-6 text-[18px] leading-[1.85] text-[#2B2B2B] lg:max-w-3xl">
              <Crosshead accent="To Run.">What It Actually Costs</Crosshead>

              <p>Let's add up the real overhead, because I hate sales pages that hide it. Here's every dollar this business asks of you:</p>
            </article>

            <div className="my-6 divide-y divide-[#1A1A1A]/10 rounded-2xl border border-[#1A1A1A]/[0.12] bg-white shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="font-semibold text-[#1A1A1A]">The system</p>
                  <p className="mt-1 text-[15px] leading-6 text-[#6B6459]">This page. Paid once, yours forever.</p>
                </div>
                <span className={`${mono} whitespace-nowrap text-[13px] text-[#1A1A1A]`}>$37 once</span>
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="font-semibold text-[#1A1A1A]">An AI image tool</p>
                  <p className="mt-1 text-[15px] leading-6 text-[#6B6459]">Free tiers work. Dezygn's free plan has 50 credits. You don't need anything paid to start.</p>
                </div>
                <span className={`${mono} whitespace-nowrap text-[13px] text-[#1A1A1A]`}>$0 to start</span>
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Upwork</p>
                  <p className="mt-1 text-[15px] leading-6 text-[#6B6459]">A free account. Applying costs &ldquo;Connects&rdquo; — while you're actively sending proposals, budget roughly the price of this system again each month. And Upwork keeps 10% of what you earn.</p>
                </div>
                <span className={`${mono} whitespace-nowrap text-[13px] text-[#1A1A1A]`}>~$37/mo + 10%</span>
              </div>
            </div>

            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:max-w-3xl">
              <p>That 10% isn't a number I'm hiding from you — look back at the $780 screenshot. See the &minus;$78 line? That's it, right there in my own receipt. You saw it before I told you about it.</p>
              <p className="mt-5">That's the whole overhead. No $97-a-month tool hiding behind the curtain.</p>
              <p className="mt-5">If you want one name for Day 1: Dezygn's free plan — 50 credits, no card. Full disclosure: Dezygn is my own software. That's exactly how I can promise you the free tier is enough to start with. Don't want mine? Fine — any AI image tool works. The system doesn't care.</p>
            </article>
          </div>
        </section>

        {/* ── Empty profile (vellum) ────────────────────────────── */}
        <section className="px-5 py-12 sm:px-8">
          {/* Empty profile → text left (col-span-7), day-one portfolio grid right (col-span-5) */}
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
              <Crosshead accent={'Is Empty."'}>"But My Profile</Crosshead>

              <p>I know. No reviews, no portfolio, no history. Let me give you two honest answers.</p>
              <p className="mt-5"><strong>First:</strong> the sample method exists precisely because an empty profile loses credential fights. So you stop fighting with credentials. You can't out-review someone with 40 five-star jobs — but they're not sending the client a finished image of her actual product. You are. That's the one thing the whole crowded room isn't doing, and it doesn't care how old your account is.</p>
              <p className="mt-5"><strong>Second:</strong> the Instant Portfolio Prompt fills the visual gap on day one. One structured prompt builds a 30-image, 5-brand portfolio, so your profile looks like a working studio before you've landed a single client.</p>
              <p className="mt-5">And about my Top Rated badge — did it help? It didn't hurt. But look at the receipts again: the badge CAME FROM the $100 jobs. It didn't fall out of the sky. Everyone's profile was empty once, including mine. Small jobs are how the method bootstraps itself — you take a couple, you stack a couple of reviews, and the door you couldn't open last month opens on its own.</p>
              <p className="mt-5">And if you're already grinding $15 gigs on Fiverr — this is the exit ramp. Same skills, different room, prices with another zero on them.</p>
            </article>

            <div className="mt-8 lg:col-span-5 lg:mt-0">
              <p className={`${mono} mb-3 text-[10px] uppercase tracking-[0.14em] text-[#7C3AED]`}>What your day-one portfolio can look like.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: '/assets/images/client-system/work/cream-after.jpg', alt: 'Client-ready body lotion lifestyle photo', w: 1024, h: 1024 },
                  { src: '/assets/images/client-system/work/pendant-after.jpg', alt: 'Client-ready men\'s pendant editorial photo', w: 1024, h: 1024 },
                  { src: '/assets/images/client-system/work/toy-after.jpg', alt: 'Client-ready kids\' toy lifestyle photo', w: 796, h: 1024 },
                  { src: '/assets/images/client-system/work/ugc-after.jpg', alt: 'Client-ready skincare UGC selfie photo', w: 572, h: 1024 },
                ].map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    loading="lazy"
                    className="w-full rounded-2xl border border-[#1A1A1A]/[0.12] object-cover aspect-[4/5]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-6xl lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
              <Crosshead accent="Hour By Hour.">Your First Week,</Crosshead>

              <p>Here's a suggested cadence — not a promise, just a sane plan that fits around a job and a life:</p>
              <ul className="mt-6 space-y-4">
                {[
                  ['Day 1', 'Set up your Upwork profile, then run the Instant Portfolio Prompt in any AI image tool — a free one is fine (Dezygn’s free plan, no card, is the one I’d open). Then call it an evening.'],
                  ['Day 2', 'Load the Job Finder Queries, shortlist 5 jobs worth your time. Thirty minutes.'],
                  ['Days 3–4', 'Your first sample. Honest warning: your first one will NOT take 5 minutes — give it an hour. By your tenth, it’s minutes.'],
                  ['Day 5', 'Send 3 proposals using the swipe file. Forty-five minutes.'],
                  ['Weekend', 'Nothing. The proposals work while you don’t.'],
                ].map(([day, task]) => (
                  <li key={day} className="flex gap-4">
                    <span className={`${mono} mt-1 w-[78px] shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[#7C3AED]`}>{day}</span>
                    <span className="flex-1">{task}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">That's the 5 hours. Tuesday-sized pieces, not a second job.</p>
              <p className="mt-5">And the question under the question: how long until the first paycheck? I'll only give you my own numbers, because they're the only ones I have. My first paid job landed within weeks of starting — a small one. The retainers came months later, stacked on top of a string of small jobs. Budget 10–15 hours of practice before you're fast, and a month or two of evenings before the money feels real. If that math offends you, this isn't your thing — and that's fine.</p>
            </article>
          </div>
        </section>

        {/* ── Guarantee ─────────────────────────────────────────── */}
        <section className="px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <Crosshead accent="On You.">A Guarantee That Runs The Method</Crosshead>

            <div className="mt-2 flex items-start gap-5 rounded-2xl border border-[#8B5CF6]/30 bg-white p-6 shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
              {/* Shield seal */}
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#8B5CF6] flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.4)]">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <div className="space-y-4 text-[18px] leading-[1.85] text-[#2B2B2B]">
                <p>Take 30 days. Go through everything. Apply to jobs. Send samples.</p>
                <p>If you decide it's not for you, send me one email and you get every cent back. <Hi>And you keep the bonuses.</Hi></p>
                <p>Notice what I just did? I gave you the value before asking you to commit. Proof before pitch. I'm running the method on you right now.</p>
                <p>That's how confident I am that this works.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The honest part (tinted band) ─────────────────────── */}
        <section className="bg-[#EDEBE6] px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Honest part → text left (col-span-7), proposals funnel right (col-span-5) */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
              <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:col-span-7">
                <Crosshead accent="Part.">Now, The Honest</Crosshead>

                <p>This is work. You'll apply to jobs. You'll make samples. Some clients won't reply.</p>

                {/* Mobile-only funnel; on lg it lives in the companion column */}
                <div className="my-6 lg:hidden">
                  <ProofShot
                    src="/assets/images/client-system/proposals-funnel.png"
                    alt="Upwork proposal stats: 24 sent, 7 viewed, 3 interviews, 1 hire"
                    width={1184}
                    height={580}
                    caption="My own last 7 days: 24 proposals, 3 interviews, 1 hire."
                  />
                </div>

                <p>Those are my real numbers. The no's are the cost of the yes — and one yes can pay every month.</p>
                <p className="mt-5">And look closer at that screenshot — 24 proposals also cost me money. Upwork charges to apply. The no's aren't free. They're just cheap compared to what one yes pays.</p>
                <p className="mt-5">If you're looking for push-button money while you sleep, this isn't it — and please don't buy it.</p>
              </article>

              {/* Companion: proposals funnel, sticky, lg only */}
              <div className="hidden lg:col-span-5 lg:block">
                <div className="lg:sticky lg:top-20">
                  <ProofShot
                    src="/assets/images/client-system/proposals-funnel.png"
                    alt="Upwork proposal stats: 24 sent, 7 viewed, 3 interviews, 1 hire"
                    width={1184}
                    height={580}
                    caption="My own last 7 days: 24 proposals, 3 interviews, 1 hire."
                  />
                </div>
              </div>
            </div>

            {/* Student-results prose + the full-width-bounded Milan testimonial */}
            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:max-w-3xl">
              <Crosshead accent="Results?">Where Are The Student</Crosshead>

              <p>You noticed. There are no student testimonials anywhere on this page.</p>
              <p className="mt-5">Pages like this usually rent some. I won't. The system is new — every result you've seen is mine, with receipts you can read the dates on.</p>
              <p className="mt-5">But the move itself isn't theoretical for other people either. Milan, a Dezygn user, ran this exact play — sample first, then pitch — and landed a $2,000+ contract:</p>
            </article>

            {/* Milan testimonial card — real third-party proof, full-width-bounded */}
            <figure className="mx-auto my-8 max-w-3xl rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-7 shadow-[0_12px_30px_rgba(26,26,26,0.06)] sm:p-9">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/images/client-system/work/milan.jpg"
                  alt="Milan, a Dezygn user"
                  width={100}
                  height={100}
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded-full border border-[#1A1A1A]/10 object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Milan</p>
                  <p className={`${mono} text-[11px] uppercase tracking-[0.12em] text-[#8B867B]`}>Freelancer · Dezygn user</p>
                </div>
                <div className="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-[#8B5CF6] text-[#8B5CF6]" />
                  ))}
                </div>
              </div>
              <blockquote className={`${serif} mt-5 text-2xl italic leading-snug text-[#1A1A1A] sm:text-[26px]`}>
                &ldquo;Just landed a $2,000+ product photography contract using Dezygn.&rdquo;
              </blockquote>
            </figure>

            <article className="text-[18px] leading-[1.85] text-[#2B2B2B] lg:max-w-3xl">
              <p>That's exactly why it's $37 and not $497, and why the guarantee eats the risk instead of you.</p>
              <p className="mt-5">You're early. Early is uncomfortable — no crowd to hide in, nobody's already done it for you to copy. But early is also where the gap is widest, before everyone else figures out the move. I'd rather be honest about which one you're getting than fake the other.</p>
            </article>
          </div>
        </section>

        {/* ── FAQ accordion (vellum) ────────────────────────────── */}
        <section className="px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Crosshead accent="On A Call.">Questions You'd Ask Me If We Were</Crosshead>

            <div className="mt-2 space-y-3">
              {[
                {
                  q: "I've never used Upwork. Is this still for me?",
                  a: <>Yes — maybe especially. The system starts at account setup, from zero. Upwork is just the world's biggest freelance job board: companies post work, you apply for it. I'll walk you through making the profile, finding the jobs, and sending your first sample. No prior freelancing needed.</>,
                  open: true,
                },
                {
                  q: 'Do I need design or photography experience?',
                  a: <>No. The 5 Minute Sample Method handles the craft — you follow the workflow and the AI does the heavy lifting. The playbook handles the clients. You bring the willingness to send a few proposals; the system brings everything else.</>,
                },
                {
                  q: 'Do I need Dezygn or any paid tool?',
                  a: <>No. The method is tool-agnostic — free tiers work fine. If you want the fast lane, Dezygn's free plan gives you 50 credits to start, but nothing on this page requires a paid subscription to anything.</>,
                },
                {
                  q: 'How fast will I land my first client?',
                  a: <>I can't promise you a date, and I won't pretend to. My own last 7 days were 24 proposals, 7 viewed, 3 interviews, 1 hire. And remember — November was $100 jobs that took me too long. The system makes the reps cheaper and faster; it doesn't make them unnecessary. You still have to send the proposals.</>,
                },
                {
                  q: 'Does it work outside the US?',
                  a: <>I'm in Belgium, selling to American brands, so — yes, from here it does. The honest caveat: Upwork availability and payout options vary by country. Check yours before you start. It's free to look.</>,
                },
                {
                  q: 'What does it cost to run month to month?',
                  a: <>The system is $37 once. An AI tool can be free to start. Upwork is a free account, but proposals cost &ldquo;Connects&rdquo; — budget roughly the price of this system again each month while you're actively applying — and Upwork keeps 10% of what you earn. That's the whole ledger.</>,
                },
                {
                  q: 'Is this the same as AIPA coaching?',
                  a: <>No. This is the map — complete on its own, enough to land your first client. AIPA is six months of hands-on coaching with me, for people who want to go further once they've started. Start here. You don't need AIPA to make this work.</>,
                },
              ].map((item) => (
                <details
                  key={item.q}
                  open={item.open}
                  className="group rounded-2xl border border-[#1A1A1A]/[0.12] bg-white px-6 py-1 shadow-[0_12px_30px_rgba(26,26,26,0.06)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-[#1A1A1A] [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span className={`${mono} shrink-0 text-[20px] leading-none text-[#8B5CF6] transition-transform group-open:rotate-45`} aria-hidden>+</span>
                  </summary>
                  <div className="pb-5 text-[17px] leading-[1.8] text-[#2B2B2B]">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Recap box (skimmer's landing pad) ─────────────────── */}
        <section className="px-5 pb-4 sm:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#1A1A1A] bg-[#1A1A1A] p-7 text-[#E8E4DB] shadow-[0_32px_80px_rgba(26,26,26,0.28)] sm:p-10">
            <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>One more time, all of it</p>
            <p className={`${serif} mt-3 text-3xl italic text-[#E8E4DB] sm:text-4xl`}>Here's everything one more time.</p>

            <ul className="mt-7 space-y-3">
              {stack.map((item) => (
                <li key={item.name} className="flex items-baseline gap-3 border-b border-[#E8E4DB]/10 pb-3">
                  <span className="mt-0.5 text-[#8B5CF6]" aria-hidden>✓</span>
                  <span className="flex-1 text-[15px] leading-6 text-[#E8E4DB]/85">
                    <strong className="font-semibold text-[#E8E4DB]">{item.name}</strong> — {item.desc.split('.')[0]}.
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className={`${mono} text-[15px] text-[#8B867B] line-through`}>$649 value</span>
              <span className={`${serif} text-4xl italic text-[#E8E4DB]`}>$37 today.</span>
            </div>
            <p className="mt-3 text-[15px] leading-6 text-[#E8E4DB]/70">30-day money-back guarantee — and you keep the bonuses either way.</p>

            <div className="mt-7">
              <BuyButton label="GET THE CLIENT SYSTEM — $37" />
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section className="px-5 py-12 sm:px-8">
          <article className="mx-auto max-w-3xl text-[18px] leading-[1.85] text-[#2B2B2B]">
            <Crosshead accent="Reading This.">The Jobs Are Posted Today. Right Now. While You're</Crosshead>

            <p>But if you've got 5 focused hours a week and you're done begging strangers to maybe hire you...</p>
            <p className="mt-5">Somewhere on Upwork right now, a brand just posted the job. Forty freelancers are typing "I can do this."</p>

            <Punch>The only question is whether the sample she opens is yours.</Punch>

            <div className="mt-8 flex justify-center">
              <BuyButton label="GET THE CLIENT SYSTEM — $37" />
            </div>

            {/* Sign-off */}
            <div className="mt-10">
              <p>Talk soon,</p>
              <p className="mt-1 font-semibold">Bertrand</p>
            </div>
          </article>
        </section>

        {/* ── P.S. block (tinted band) ──────────────────────────── */}
        <section className="bg-[#EDEBE6] px-5 py-10 sm:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-5 text-[17px] leading-8 text-[#2B2B2B]">
              <p><strong>P.S.</strong> If you skipped to the bottom, here it is: while 40 freelancers send promises, you send a finished sample of the client's own product, made with AI in minutes. It currently pays me $1,480/month in retainers from 2 clients, ~8 hours each. The complete system, searches, proposals, samples, pricing, plus the message that flips test jobs into monthly retainers, is $37. 30-day guarantee, keep the bonuses. <a href={CHECKOUT_URL} className="text-[#7C3AED] underline underline-offset-2 hover:text-[#8B5CF6]">[Get it here.]</a></p>
              <p><strong>P.P.S.</strong> These are my personal results from real client work. Not typical, not a guarantee. The people who win with this are the ones who actually apply to jobs. Which, with this system, is the easy part.</p>
            </div>
          </div>
        </section>
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
};

export default ClientSystemPage;
