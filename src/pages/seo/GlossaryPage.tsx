import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { glossaryEntries } from '../../data/glossary';
import { ArrowRight, ChevronRight } from 'lucide-react';
import {
  pageWrap,
  eyebrowPill,
  ctaButton,
  cardLink,
  crumbNav,
  crumbLink,
  serif,
  SIGNUP_URL,
  EditorialTitle,
} from './v4Theme';

interface GlossaryEntry {
  slug: string;
  term: string;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  explanation: string[];
  howItRelates: string;
  relatedTerms: string[];
}

function getFirstSentence(text: string): string {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
}

const GlossaryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const entry = (glossaryEntries as GlossaryEntry[]).find(
    (e) => e.slug === slug
  );

  if (!entry) {
    return (
      <div className={`${pageWrap} flex flex-col`}>
        <HeaderV4 />
        <main className="flex flex-1 items-center justify-center px-5 pt-28">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight">
              <EditorialTitle text="Term Not Found." />
            </h1>
            <p className="mb-8 text-[#6B6459]">
              The glossary term you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link to="/glossary" className={ctaButton}>
              Back to Glossary
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </main>
        <FooterV4 />
      </div>
    );
  }

  const relatedEntries = entry.relatedTerms
    .map((relSlug) =>
      (glossaryEntries as GlossaryEntry[]).find((e) => e.slug === relSlug)
    )
    .filter((e): e is GlossaryEntry => e !== undefined);

  return (
    <div className={pageWrap}>
      <Helmet>
        <title>{entry.metaTitle}</title>
        <meta name="description" content={entry.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/glossary/${entry.slug}`}
        />
      </Helmet>

      <HeaderV4 />

      <main className="pt-28">
        <div className="mx-auto max-w-6xl px-5">
          {/* Breadcrumbs */}
          <nav className={`${crumbNav} py-6`}>
            <Link to="/" className={crumbLink}>
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/glossary" className={crumbLink}>
              Glossary
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A]">{entry.term}</span>
          </nav>

          <article className="mx-auto max-w-4xl pt-4">
            {/* Hero */}
            <div className="relative mb-12">
              <span
                aria-hidden
                className={`${serif} pointer-events-none absolute -right-4 -top-4 hidden rotate-12 text-[100px] italic leading-none text-[#8B5CF6]/15 lg:block`}
              >
                ✦
              </span>
              <p className={eyebrowPill}>Glossary</p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] md:text-5xl">
                What is{' '}
                <span className={`${serif} italic font-normal`}>
                  {entry.term}?
                </span>
              </h1>
            </div>

            {/* Definition Card */}
            <div className="mb-14 rounded-3xl border border-[#8B5CF6]/30 bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
              <p className="text-lg leading-8 text-[#2B2B2B]">
                {entry.definition}
              </p>
            </div>

            {/* Explanation */}
            <section className="mb-14">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                Understanding{' '}
                <span className={`${serif} italic font-normal`}>
                  {entry.term}.
                </span>
              </h2>
              <div className="space-y-5">
                {entry.explanation.map((paragraph, index) => (
                  <p key={index} className="leading-7 text-[#6B6459]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* How It Relates */}
            <section className="mb-14">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                <EditorialTitle text="How It Relates to AI Photography." />
              </h2>
              <p className="leading-7 text-[#6B6459]">{entry.howItRelates}</p>
            </section>

            {/* Related Terms */}
            {relatedEntries.length > 0 && (
              <section className="mb-14">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                  <EditorialTitle text="Related Terms." />
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedEntries.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/glossary/${related.slug}`}
                      className={`${cardLink} p-5`}
                    >
                      <h3 className="mb-2 flex items-center gap-2 font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                        {related.term}
                        <ArrowRight className="h-4 w-4 text-[#8B867B] transition-colors group-hover:text-[#7C3AED]" />
                      </h3>
                      <p className="text-sm leading-6 text-[#6B6459]">
                        {getFirstSentence(related.definition)}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <section className="mb-14">
              <div className="relative overflow-hidden rounded-[32px] bg-[#7C3AED] p-8 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] md:p-12">
                <span
                  aria-hidden
                  className={`${serif} absolute -bottom-10 -right-2 rotate-12 text-[140px] italic leading-none text-white/10`}
                >
                  ✦
                </span>
                <h2 className="relative z-10 mb-3 text-2xl font-semibold tracking-tight">
                  Start using AI for your product{' '}
                  <span className={`${serif} italic font-normal`}>
                    photography.
                  </span>
                </h2>
                <p className="relative z-10 mx-auto mb-6 max-w-lg leading-7 text-white/75">
                  Turn product photos into conversion-ready visuals with
                  Dezygn&apos;s AI Creative Suite.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="relative z-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
                >
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            {/* Back to Glossary */}
            <div className="mb-20">
              <Link
                to="/glossary"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6459] transition-colors hover:text-[#7C3AED]"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to full glossary
              </Link>
            </div>
          </article>
        </div>
      </main>

      <FooterV4 />
    </div>
  );
};

export default GlossaryPage;
