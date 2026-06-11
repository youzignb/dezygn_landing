import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Bell, Check, Lock, PlayCircle, X } from 'lucide-react';
import Logo from '../components/Logo';

/**
 * Webinar registration page — Funnel Hacks style: one goal (register), no nav,
 * v4 editorial paper-and-ink design language (see LandingPageV4.tsx tokens).
 */
const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

const secrets = [
  {
    number: 'Secret #1',
    title: 'Proof Before Pitch',
    body: 'Why the job goes to whoever shows up with the work already done — and how to be that person on Upwork and in cold email, even with zero past clients and no portfolio.',
  },
  {
    number: 'Secret #2',
    title: 'The 12-Image Retainer',
    body: 'How a single test project flips into a $700–$800/month recurring client, why 12 images a month is the sweet spot, and the exact math behind ~8 hours of work per client.',
  },
  {
    number: 'Secret #3',
    title: 'Client-Ready, Not AI-Looking',
    body: 'The Visual Syntax framework we use at our agency to engineer brand-accurate images instead of gambling with prompts — so brands say yes to the samples you send.',
  },
];

const forYou = [
  'Freelancers and designers who want recurring client revenue, not one-off gigs',
  'Side-hustlers with ~5 focused hours a week',
  'Photographers and creatives adding AI photography to their offer',
];

const notForYou = [
  'Anyone looking for passive income with zero outreach',
  'People who want to sell prompts instead of serving real brands',
];

function RegistrationForm({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-4 rounded-3xl border border-[#1A1A1A]/[0.12] bg-white shadow-[0_24px_60px_rgba(26,26,26,0.12)] ${compact ? 'p-6 sm:p-8' : 'p-8 sm:p-10'}`}>
      <div className="flex items-center justify-between gap-3">
        <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.12em] text-[#7C3AED]`}>
          ✦ Free training
        </p>
        <span className={`${mono} rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#7C3AED]`}>
          Coming soon
        </span>
      </div>
      <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#8B5CF6] text-white">
          <Bell className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#1A1A1A]">Registration opens soon.</h3>
        <p className="mt-3 text-sm leading-6 text-[#6B6459]">
          The training is being finalized before seats open. For now, create your free Dezygn account and I will announce
          the first session when it is ready.
        </p>
      </div>
      <input
        type="text"
        disabled
        placeholder="First name"
        className="h-12 cursor-not-allowed rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] px-4 text-[15px] text-[#1A1A1A] opacity-55 placeholder:text-[#8B867B]"
      />
      <input
        type="email"
        disabled
        placeholder="Best email address"
        className="h-12 cursor-not-allowed rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] px-4 text-[15px] text-[#1A1A1A] opacity-55 placeholder:text-[#8B867B]"
      />
      <button
        type="button"
        disabled
        className="inline-flex min-h-[52px] cursor-not-allowed items-center justify-center gap-2 rounded-full bg-[#8B5CF6]/45 px-6 text-[15px] font-semibold text-white"
      >
        Registration Opens Soon
        <Lock className="h-4 w-4" />
      </button>
      <a
        href="https://chat.dezygn.com/signup"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#1A1A1A]/[0.12] bg-white px-6 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#EDEBE6]"
      >
        Start Free With Dezygn
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

const WebinarPage = () => {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Free Training: Land AI Photography Clients With Proof Before Pitch | Dezygn</title>
        <meta
          name="description"
          content="Free live training: how I land $700+/month AI photography retainers by sending finished sample visuals before the pitch — no portfolio, no cold calls, no prompt engineering."
        />
        <link rel="canonical" href="https://dezygn.com/webinar" />
      </Helmet>

      {/* Funnel page: logo only, no nav — one way in, one way out. */}
      <header className="flex items-center justify-center px-5 pt-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Dezygn home">
          <Logo variant="dark" size="sm" showText={false} />
          <span className="text-[17px] font-semibold tracking-tight text-[#1A1A1A]">dezygn</span>
        </Link>
      </header>

      <main>
        {/* Hero + registration */}
        <section className="relative overflow-hidden px-5 pb-20 pt-12 sm:pt-16">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-6 top-20 hidden rotate-12 text-[140px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✳
          </span>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className={`${mono} inline-flex -rotate-1 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7C3AED] shadow-sm`}>
              Free training for freelancers, designers & side-hustlers
            </p>
            <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              While 40 Freelancers Beg for the Job, One Quietly Hands Over the Finished{' '}
              <span className={`${serif} font-normal italic text-[#7C3AED]`}>Work.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#6B6459]">
              Watch me pull a real job posting, generate a client-ready AI photography sample in minutes, and send the
              proposal that wins — the exact <strong className="font-semibold text-[#1A1A1A]">Proof Before Pitch</strong>{' '}
              method behind my $700+/month retainer clients.
            </p>
            <div className="mx-auto mt-10 max-w-md text-left">
              <RegistrationForm />
            </div>
            <p className={`${mono} mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
              <PlayCircle className="h-4 w-4" /> Live training · Limited seats · Replay for registrants
            </p>
          </div>
        </section>

        {/* Proof strip */}
        <section className="bg-[#1A1A1A] px-5 py-14 text-[#E8E4DB]">
          <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
            {[
              ['$700–$800/mo', 'per retainer client, ~12 images a month'],
              ['~8 hrs/month', 'of work per client — no call grind'],
              ['$3,000+', 'in Upwork client work since starting'],
            ].map(([stat, label]) => (
              <div key={stat}>
                <p className={`${serif} text-5xl italic text-[#8B5CF6]`}>{stat}</p>
                <p className="mt-2 text-sm leading-6 text-[#E8E4DB]/60">{label}</p>
              </div>
            ))}
          </div>
          <p className={`${mono} mx-auto mt-10 max-w-2xl text-center text-[10px] leading-5 text-[#E8E4DB]/40`}>
            These are my personal results from real client work. They are not typical and not a guarantee — see the{' '}
            <Link to="/earnings-disclaimer" className="underline underline-offset-2 hover:text-[#E8E4DB]/70">
              earnings disclaimer
            </Link>
            .
          </p>
        </section>

        {/* The 3 secrets */}
        <section className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              On this training
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Three Things Nobody Tells You About AI <span className={`${serif} italic font-normal`}>Photography.</span>
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
            {secrets.map((secret, index) => (
              <article
                key={secret.title}
                className={`rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition-transform duration-500 ease-out hover:rotate-0 ${
                  index % 2 === 0 ? 'sm:rotate-1' : 'sm:-rotate-1'
                }`}
              >
                <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>{secret.number}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#1A1A1A]">{secret.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#6B6459]">{secret.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Host */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[300px_1fr]">
            <div className="mx-auto w-fit lg:mx-0">
              <div className="-rotate-2 rounded-2xl border border-[#1A1A1A]/10 bg-white p-2.5 pb-0 shadow-[0_24px_60px_rgba(26,26,26,0.15)] transition-transform duration-500 ease-out hover:rotate-0">
                <img
                  src="/assets/images/landing-v4/founder-bertrand.jpg"
                  alt="Bertrand, your host"
                  className="block aspect-[4/5] w-56 rounded-[10px] object-cover sm:w-64"
                />
                <p className={`${mono} px-1 py-3.5 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-[#6B6459]`}>
                  Bertrand ✦ Your host
                </p>
              </div>
            </div>
            <div>
              <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
                Your host
              </p>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                I don't teach theory. I run an AI photography agency every <span className={`${serif} italic font-normal`}>week.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-[#6B6459] sm:text-base">
                I'm the founder of Dezygn and co-founder of Fairway Creatives, an AI photography agency serving DTC
                brands. Everything in this training comes from work I deliver to paying clients — the outreach, the
                samples, the proposals, the retainers. You'll see the actual workflow, not slides about it.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5">
                  <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.12em] text-[#7C3AED]`}>This is for you if</p>
                  <ul className="mt-3 space-y-2.5">
                    {forYou.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#2B2B2B]">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#1F6B3A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5">
                  <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Skip it if</p>
                  <ul className="mt-3 space-y-2.5">
                    {notForYou.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#6B6459]">
                        <X className="mt-1 h-4 w-4 shrink-0 text-[#8B867B]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Stop Pitching. Start <span className={`${serif} italic font-normal text-[#7C3AED]`}>Proving.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-7 text-[#6B6459]">
              Seats are limited so I can answer questions live. Register now and get the replay even if you can't make it.
            </p>
            <div className="mt-10 text-left">
              <RegistrationForm compact />
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

export default WebinarPage;
