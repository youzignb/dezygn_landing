import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Download, PlayCircle, Sparkles } from 'lucide-react';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

const PDF_URL = '/assets/downloads/visual-syntax-cheatsheet.pdf';
const SIGNUP_URL = 'https://chat.dezygn.com/signup';

/** Delivery page for the Visual Syntax Cheatsheet lead magnet. */
const CheatsheetThankYouPage = () => {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Your Visual Syntax Cheatsheet | Dezygn</title>
        <meta name="description" content="Download the Visual Syntax Cheatsheet — the 6-ingredient framework for client-ready AI photography." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <HeaderV4 />

      <main>
        <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:pt-44">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-6 top-24 hidden rotate-12 text-[140px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✳
          </span>
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              ✦ Delivered
            </p>
            <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              The Cheatsheet Is <span className={`${serif} font-normal italic text-[#7C3AED]`}>Yours.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#6B6459]">
              A copy is also on its way to your inbox. Print it, pin it next to your screen, and run every shot
              through the six ingredients before you generate.
            </p>
            <a
              href={PDF_URL}
              download
              className="mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-[15px] font-semibold text-white transition hover:bg-[#7C3AED]"
            >
              <Download className="h-4 w-4" />
              Download the Cheatsheet (PDF)
            </a>
          </div>
        </section>

        <section className="bg-[#EDEBE6] px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              While You're Here, Two Smart Next <span className={`${serif} italic font-normal`}>Steps.</span>
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <article className="rotate-1 rounded-3xl border border-[#1A1A1A]/12 bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition-transform duration-500 ease-out hover:rotate-0">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">Put it to work in Dezygn</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#6B6459]">
                Awa, the AI creative assistant inside Dezygn, speaks Visual Syntax natively. Describe the shot — it
                engineers the prompt. Free plan, 50 credits.
              </p>
              <a href={SIGNUP_URL} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] hover:text-[#8B5CF6]">
                Start Free <ArrowRight className="h-4 w-4" />
              </a>
            </article>
            <article className="-rotate-1 rounded-3xl border border-[#1A1A1A]/12 bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition-transform duration-500 ease-out hover:rotate-0">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1A1A1A] text-[#EDEBE6]">
                <PlayCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">See the client-getting side</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#6B6459]">
                The cheatsheet makes the images good. The free training shows how those images win paying clients —
                the Proof Before Pitch method behind my $700+/month retainers.
              </p>
              <Link to="/webinar" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] hover:text-[#8B5CF6]">
                Save My Seat <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
};

export default CheatsheetThankYouPage;
