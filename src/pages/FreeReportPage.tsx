import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';
import ReportCaptureForm from '../components/ReportCaptureForm';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

/**
 * CSS placeholder for the report cover. Swap for the 3D render at
 * /images/report-cover-3d.png once it's generated (keep the rotation/shadow).
 */
function CoverMock() {
  return (
    <div className="mx-auto w-36 -rotate-2 rounded-lg bg-[#1A1A1A] p-4 shadow-[0_24px_50px_rgba(26,26,26,0.35)] aspect-[210/297]">
      <p className={`${mono} inline-block -rotate-2 rounded-full bg-[#F7F5F0] px-2 py-0.5 text-[5px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>
        Free Report · Dezygn
      </p>
      <p className="mt-4 text-[10px] font-semibold leading-[1.15] tracking-tight text-[#E8E4DB]">
        How to Make Money Selling AI Images — Without a Website, a Portfolio, or Any{' '}
        <span className={`${serif} font-normal italic text-[#8B5CF6]`}>Sales Skills.</span>
      </p>
      <p className={`${serif} mt-3 text-[6.5px] italic leading-snug text-[#E8E4DB]/65`}>
        The Proof Before Pitch method for landing your first AI photography client.
      </p>
    </div>
  );
}

const steps = [
  {
    n: '01',
    title: 'Find',
    body: 'The exact Upwork search where problem-aware e-com clients post AI photography jobs daily — at least one per hour.',
  },
  {
    n: '02',
    title: 'Create',
    body: 'The 3 ingredients of a sample that sells itself, pulled straight from the job post — before you ever talk to them.',
  },
  {
    n: '03',
    title: 'Send',
    body: 'The 4-line pitch that isn’t a pitch. The image does the selling; your message just delivers it. Word-for-word scripts included.',
  },
];

/** Dedicated squeeze page for the Proof Before Pitch report lead magnet. */
const FreeReportPage = () => {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Free Report: How to Make Money Selling AI Images | Dezygn</title>
        <meta
          name="description"
          content="The Proof Before Pitch method for landing your first AI photography client — no website, no portfolio, no sales skills. Free 19-page report."
        />
        <link rel="canonical" href="https://dezygn.com/free-report" />
      </Helmet>

      <HeaderV4 />

      <main>
        <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:pt-40">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-6 top-24 hidden rotate-12 text-[140px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✦
          </span>
          <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
                Free report
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
                How to Make Money Selling AI <span className={`${serif} italic font-normal text-[#7C3AED]`}>Images.</span>
              </h1>
              <p className={`${serif} mt-4 text-xl italic leading-relaxed text-[#6B6459]`}>
                Without a website, a portfolio, or any sales skills.
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#6B6459] sm:text-base">
                One client pays me $639/month for 12 AI-generated images — and I landed him with a brand-new
                Upwork account. No reviews, no history, no pitch. This report walks you through Proof Before
                Pitch: you create a sample of the client's actual product before you ever talk to them, and the
                sample does the selling.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'The exact Upwork search where problem-aware clients post daily',
                  'The 3 ingredients of a sample that sells itself — pulled straight from the job post',
                  'The word-for-word scripts, plus the Quality Gate checklist',
                  'Bonus: the cold-email version that works outside Upwork',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-[#2B2B2B]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#7C3AED]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rotate-1 rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.12)] transition-transform duration-500 ease-out hover:rotate-0 sm:p-10">
              <CoverMock />
              <div className="mt-8">
                <ReportCaptureForm label="Instant delivery · 19 pages" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                One Method, Three <span className={`${serif} italic font-normal`}>Steps.</span>
              </h2>
              <p className={`${mono} mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
                19 pages · 3 steps · 2 bonuses · real numbers
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {steps.map((step) => (
                <article key={step.n} className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-7 shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
                  <p className={`${serif} text-4xl italic text-[#8B5CF6]`}>{step.n}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#6B6459]">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#1A1A1A] px-5 py-20 text-center sm:py-24">
          <span aria-hidden className={`${serif} pointer-events-none absolute -left-4 -top-8 hidden rotate-[-12deg] text-[160px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✳
          </span>
          <blockquote className={`${serif} relative z-10 mx-auto max-w-2xl text-3xl italic leading-snug text-[#E8E4DB] sm:text-4xl`}>
            “The sample IS the sales conversation.”
          </blockquote>
          <p className="relative z-10 mx-auto mt-6 max-w-xl text-[15px] leading-7 text-[#E8E4DB]/55">
            Portfolios and sales skills exist to make a stranger trust you before you do the work. Proof Before
            Pitch skips all of that — they open your message and see their own product, done right.
          </p>
        </section>

        <section className="px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-xl rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.12)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Get the Report. Run Step 1 <span className={`${serif} italic font-normal text-[#7C3AED]`}>Today.</span>
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[#6B6459]">
              The first assignment takes 15 minutes. The whole method takes an hour a day.
            </p>
            <div className="mt-6">
              <ReportCaptureForm />
            </div>
          </div>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
};

export default FreeReportPage;
