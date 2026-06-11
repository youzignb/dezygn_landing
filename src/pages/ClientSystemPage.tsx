import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, ShieldCheck, X } from 'lucide-react';
import Logo from '../components/Logo';

/**
 * Tripwire sales page — The AI Creative Client System ($37).
 * Funnel page: no nav, one goal. v4 editorial design language.
 * Headline ownership: "The Job Goes to Whoever Shows Up With the Work Already Done"
 * belongs to THIS page (see docs/landingpage.v4/site-hub-plan.md §8).
 */
const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

// TODO: replace with the real checkout link (Stripe Payment Link / JVZoo) before linking this page anywhere.
const CHECKOUT_URL = '#order';

const stack = [
  { name: 'The Client System', desc: 'The full playbook: positioning, job hunting, the Proof Test, proposals, delivery. Everything in order.', value: '$197' },
  { name: 'The 5-Minute Sample Method', desc: 'Screen recording: a live job posting becomes a client-ready sample, start to finish.', value: '$147' },
  { name: 'Instant Portfolio Prompt', desc: 'The 30-image portfolio prompt — credible niche samples without a single past client.', value: '$97' },
  { name: 'Proposal Swipe File', desc: 'The actual winning Upwork proposals, word for word.', value: '$67' },
  { name: 'The Retainer Flip', desc: 'The exact message that turned a one-off test job into a $780/month recurring contract.', value: '$67' },
  { name: 'The Rate Card', desc: 'Per-image, per-batch, and retainer pricing — with real contract examples.', value: '$47' },
  { name: 'Job Finder Queries', desc: 'Copy-paste saved searches and skill tags that surface fresh AI photography jobs daily.', value: '$27' },
];

const mechanism = [
  { step: '01', title: 'Find the job', body: 'Fresh ecommerce briefs are posted every day. You\'ll get the exact search queries that surface them — and the Proof Test to know which ones are worth your time.' },
  { step: '02', title: 'Make the sample first', body: 'Before you apply, you create a custom visual for their actual product. Minutes, not hours — the workflow is in the system.' },
  { step: '03', title: 'Send the finished work', body: 'Your proposal opens with the sample already done. While everyone else describes what they could do, you show what you did.' },
];

const notFor = [
  'You want passive income. This is client work — you\'ll apply to jobs and make samples.',
  'You can\'t give it 5 focused hours a week.',
  'You want to sell prompts or "AI art" instead of serving real ecommerce brands.',
];

const faq = [
  { q: 'Do I need design or photography experience?', a: 'No. The system was built for freelancers, designers, and side-hustlers starting from zero. The Visual Syntax workflow handles the craft; the playbook handles the clients.' },
  { q: 'Do I need Dezygn to use this?', a: 'No — everything works with the tools you choose. Dezygn makes the sample-making step faster (and the free plan includes 50 credits), but the system itself is tool-agnostic.' },
  { q: 'How fast can I land a client?', a: 'Honest answer: it depends on your reps. The method is built on the Rule of 100 — judge nothing until 100 serious attempts. Some land a first client in weeks; some take longer.' },
  { q: 'Is this the same as the AIPA coaching program?', a: 'No. This is the map — the complete self-serve system. AIPA is the guide: six months of hands-on coaching, reviews, and accountability with me. Start here; upgrade if you want me in your corner.' },
];

function BuyButton({ label = 'Get Instant Access — $37' }: { label?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-[15px] font-semibold text-white transition hover:bg-[#7C3AED]"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

const ClientSystemPage = () => {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>The AI Creative Client System — Land Ecommerce Clients With AI Photography | Dezygn</title>
        <meta
          name="description"
          content="The complete system for landing paying AI photography clients on Upwork and by email — by sending free custom samples before you pitch. $37, instant access."
        />
        <link rel="canonical" href="https://dezygn.com/client-system" />
      </Helmet>

      {/* Funnel page: logo only, no nav. */}
      <header className="flex items-center justify-center px-5 pt-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Dezygn home">
          <Logo variant="dark" size="sm" showText={false} />
          <span className="text-[17px] font-semibold tracking-tight text-[#1A1A1A]">dezygn</span>
        </Link>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:pt-16">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-6 top-20 hidden rotate-12 text-[140px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✳
          </span>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className={`${mono} inline-flex -rotate-1 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7C3AED] shadow-sm`}>
              For freelancers, designers & side-hustlers
            </p>
            <h1 className="mx-auto mt-8 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              The Job Goes to Whoever Shows Up With the Work{' '}
              <span className={`${serif} font-normal italic text-[#7C3AED]`}>Already Done.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#6B6459]">
              The AI Creative Client System is the complete playbook for landing paying ecommerce clients with AI
              product photography — by sending a free custom sample <em>before</em> you pitch. No portfolio. No cold
              calls. No design degree.
            </p>
            <div className="mt-10">
              <BuyButton />
            </div>
            <p className={`${mono} mt-5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
              Instant access · 30-day money-back guarantee
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#EDEBE6] px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>The problem</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              Forty freelancers apply. Thirty-nine of them <span className={`${serif} italic font-normal`}>beg.</span>
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-8 text-[#2B2B2B]">
              <p>
                Open any ecommerce photography job and look at the proposals. "I'm a hard worker." "Check out my
                portfolio." "I'd love to discuss your project." Thirty-nine variations of <em>please pick me</em>.
              </p>
              <p>
                One applicant does something different. They take the brand's actual product, create a finished
                lifestyle visual, and open with: "I made this for you. Want more?"
              </p>
              <p>
                That's the whole secret. The client doesn't have to imagine the work — it's sitting in front of them,
                already done. I've used this to win client after client since November: a $700/month eyewear retainer,
                a $780/month homeware retainer, $3,000+ in Upwork projects. Not by being the best designer in the
                pile. By being the only one who showed up with the work.
              </p>
            </div>
            <p className={`${mono} mt-8 text-[10px] leading-5 text-[#8B867B]`}>
              These are my personal results from real client work — not typical, not a guarantee. See the{' '}
              <Link to="/earnings-disclaimer" className="underline underline-offset-2">earnings disclaimer</Link>.
            </p>
          </div>
        </section>

        {/* Mechanism */}
        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              The mechanism
            </p>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              Proof Before <span className={`${serif} italic font-normal`}>Pitch.</span>
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            {mechanism.map((item, index) => (
              <article
                key={item.step}
                className={`rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition-transform duration-500 ease-out hover:rotate-0 ${index % 2 === 0 ? 'sm:rotate-1' : 'sm:-rotate-1'}`}
              >
                <p className={`${mono} text-xs font-medium text-[#7C3AED]`}>{item.step}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#6B6459]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Why now */}
        <section className="bg-[#1A1A1A] px-5 py-16 text-[#E8E4DB] sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#8B5CF6]`}>Why now</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              Brands are starving for fresh <span className={`${serif} italic font-normal text-[#8B5CF6]`}>creative.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-8 text-[#E8E4DB]/70">
              Meta's Andromeda update rewards creative variety — brands now need a constant stream of new visuals to
              keep ads performing. Traditional shoots cost $15k+ and take weeks. That gap is the opportunity, and
              almost nobody is positioned to fill it yet.
            </p>
          </div>
        </section>

        {/* The stack */}
        <section id="order" className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              Everything you get
            </p>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              The Complete <span className={`${serif} italic font-normal`}>System.</span>
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {stack.map((item) => (
              <div key={item.name} className="flex items-start justify-between gap-4 rounded-2xl border border-[#1A1A1A]/[0.12] bg-white p-5 shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#7C3AED]" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{item.name}</p>
                    <p className="mt-1 text-sm leading-6 text-[#6B6459]">{item.desc}</p>
                  </div>
                </div>
                <span className={`${mono} whitespace-nowrap text-xs text-[#8B867B] line-through`}>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-[#1A1A1A] bg-[#1A1A1A] p-8 text-center text-[#E8E4DB] shadow-[0_32px_80px_rgba(26,26,26,0.28)] sm:p-10">
            <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
              Total value <span className="line-through">$649</span>
            </p>
            <p className={`${serif} mt-3 text-6xl italic tracking-tight text-[#E8E4DB]`}>$37</p>
            <p className="mt-2 text-sm text-[#E8E4DB]/60">One-time. Instant access. Yours forever.</p>
            <div className="mt-7">
              <BuyButton />
            </div>
            <p className={`${mono} mt-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>
              <ShieldCheck className="h-4 w-4" /> 30-day money-back guarantee — no questions asked
            </p>
          </div>
        </section>

        {/* Not for you */}
        <section className="bg-[#EDEBE6] px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              Don't buy this <span className={`${serif} italic font-normal`}>if…</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 text-[15px] leading-7 text-[#2B2B2B]">
                  <X className="mt-1 h-4 w-4 shrink-0 text-[#8B867B]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              Fair <span className={`${serif} italic font-normal`}>Questions.</span>
            </h2>
            <div className="mt-10 divide-y divide-[#1A1A1A]/[0.12] border-y border-[#1A1A1A]/[0.12]">
              {faq.map((item, index) => (
                <details key={item.q} className="group py-5" open={index === 0}>
                  <summary className="flex cursor-pointer items-baseline gap-4 text-[16px] font-semibold text-[#1A1A1A] [&::-webkit-details-marker]:hidden">
                    <span className={`${mono} text-xs font-medium text-[#7C3AED]`}>{String(index + 1).padStart(2, '0')}</span>
                    {item.q}
                  </summary>
                  <p className="mt-3 pl-9 text-[15px] leading-7 text-[#6B6459]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="px-5 pb-20">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] sm:p-16">
            <span aria-hidden className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[140px] italic leading-none text-white/10`}>✳</span>
            <h2 className="relative z-10 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Be the One With the Work <span className={`${serif} font-normal italic`}>Done.</span>
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-md text-base leading-7 text-white/80">
              $37. Instant access. 30 days to decide if it's for you.
            </p>
            <div className="relative z-10 mt-8">
              <a
                href={CHECKOUT_URL}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
              >
                Get Instant Access — $37
                <ArrowRight className="h-4 w-4" />
              </a>
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
