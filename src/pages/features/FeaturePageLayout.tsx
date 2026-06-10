import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';

/**
 * Shared v4 editorial paper-and-ink layout for /features/* pages.
 * Tokens follow LandingPageV4: ink #1A1A1A · paper #EDEBE6/#F7F5F0 ·
 * muted #6B6459 · dim #8B867B · accent #8B5CF6/#7C3AED (only accent).
 */
export const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
export const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
export const serif = "font-['Instrument_Serif',Georgia,serif]";

export const SIGNUP_URL = 'https://chat.dezygn.com/signup';

/** Sets the last word of a headline in italic serif — the editorial counterpoint to Inter. */
export function EditorialTitle({ text }: { text: string }) {
  const clean = text.replace(/\.$/, '');
  const words = clean.split(' ');
  const last = words.pop();
  return (
    <>
      {words.join(' ')}{' '}
      <span className={`${serif} italic font-normal`}>{last}.</span>
    </>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}
    >
      {children}
    </p>
  );
}

/** Matte frame so every screenshot reads the same way across the site. */
export function ScreenshotFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-2 shadow-[0_24px_60px_rgba(26,26,26,0.12)]">
      <div className="overflow-hidden rounded-[10px]">{children}</div>
    </div>
  );
}

export function StartFreeButton({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={SIGNUP_URL}
      className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-8 text-[15px] font-semibold transition ${
        dark ? 'bg-[#1A1A1A] text-[#EDEBE6] hover:bg-black' : 'bg-[#8B5CF6] text-white hover:bg-[#7C3AED]'
      }`}
    >
      Start Free
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export type FeatureStep = { title: string; body: string };
export type RelatedFeature = { label: string; description: string; to: string };

export type FeaturePageProps = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image?: { src: string; alt: string };
  stepsHeading: string;
  stepsBody?: string;
  steps: FeatureStep[];
  capabilities?: {
    heading: string;
    body?: string;
    items: string[];
    image?: { src: string; alt: string };
  };
  related: RelatedFeature[];
  ctaHeadline: string;
  ctaBody: string;
};

/** Final purple CTA band shared by the index and detail pages. */
export function CtaBand({ headline, body }: { headline: string; body: string }) {
  return (
    <section className="bg-[#F7F5F0] px-5 py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] sm:p-20">
        <span aria-hidden className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}>
          ✳
        </span>
        <span aria-hidden className={`${serif} absolute -bottom-12 -right-2 rotate-12 text-[180px] italic leading-none text-white/10`}>
          ✦
        </span>
        <h2 className="relative z-10 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          <EditorialTitle text={headline} />
        </h2>
        <p className="relative z-10 mx-auto mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">{body}</p>
        <div className="relative z-10 mt-10">
          <StartFreeButton dark />
        </div>
      </div>
    </section>
  );
}

const FeaturePageLayout = ({
  slug,
  metaTitle,
  metaDescription,
  eyebrow,
  headline,
  intro,
  image,
  stepsHeading,
  stepsBody,
  steps,
  capabilities,
  related,
  ctaHeadline,
  ctaBody,
}: FeaturePageProps) => {
  const stepCols = steps.length >= 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';

  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://dezygn.com/features/${slug}`} />
      </Helmet>

      <HeaderV4 />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#F7F5F0] px-5 pb-16 pt-32 sm:pb-20 sm:pt-40">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-4 top-32 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✦
          </span>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              <EditorialTitle text={headline} />
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#6B6459] sm:text-lg sm:leading-8">{intro}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <StartFreeButton />
              <Link to="/features" className="text-[15px] font-medium text-[#6B6459] underline-offset-4 transition hover:text-[#1A1A1A] hover:underline">
                See all features
              </Link>
            </div>
          </div>
          {image ? (
            <div className="relative z-10 mx-auto mt-14 max-w-5xl">
              <ScreenshotFrame>
                <img src={image.src} alt={image.alt} className="block w-full object-cover object-left-top" loading="eager" />
              </ScreenshotFrame>
            </div>
          ) : null}
        </section>

        {/* How it works */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
                <EditorialTitle text={stepsHeading} />
              </h2>
              {stepsBody ? <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#6B6459] sm:text-base">{stepsBody}</p> : null}
            </div>
            <div className={`mt-14 grid gap-5 ${stepCols}`}>
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-7 shadow-[0_16px_40px_rgba(26,26,26,0.06)]">
                  <span className={`${mono} text-xs font-medium text-[#7C3AED]`}>{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#1A1A1A]">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-[#6B6459]">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        {capabilities ? (
          <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
            <div className={`mx-auto grid max-w-6xl items-center gap-12 ${capabilities.image ? 'lg:grid-cols-[0.9fr_1.1fr]' : ''}`}>
              <div className={capabilities.image ? '' : 'mx-auto max-w-2xl'}>
                <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl">
                  <EditorialTitle text={capabilities.heading} />
                </h2>
                {capabilities.body ? <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#6B6459]">{capabilities.body}</p> : null}
                <ul className="mt-7 space-y-3.5">
                  {capabilities.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-[#2B2B2B]">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#7C3AED]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {capabilities.image ? (
                <div className="sm:rotate-[1.2deg] sm:transition-transform sm:duration-500 sm:hover:rotate-0">
                  <ScreenshotFrame>
                    <img src={capabilities.image.src} alt={capabilities.image.alt} className="block w-full object-cover object-left-top" loading="lazy" />
                  </ScreenshotFrame>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* Related features */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Keep exploring</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl">
                <EditorialTitle text="Works Better Together." />
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group rounded-3xl border border-[#1A1A1A]/10 bg-white p-7 shadow-[0_16px_40px_rgba(26,26,26,0.06)] transition hover:border-[#8B5CF6]/40"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-[#1A1A1A]">{item.label}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-[#6B6459]">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#7C3AED]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand headline={ctaHeadline} body={ctaBody} />
      </main>

      <FooterV4 />
    </div>
  );
};

export default FeaturePageLayout;
