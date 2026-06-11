import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { comparisons } from '../../data/comparisons';
import { Check, X, Minus, ArrowRight, ChevronRight } from 'lucide-react';
import {
  pageWrap,
  eyebrowPill,
  ctaButton,
  cardLink,
  crumbNav,
  crumbLink,
  mono,
  serif,
  SIGNUP_URL,
  EditorialTitle,
} from './v4Theme';

interface Comparison {
  slug: string;
  competitor: string;
  competitorName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  intro: string;
  comparisonTable: { feature: string; dezygn: string; competitor: string }[];
  dezgnPros: string[];
  competitorCons: string[];
  verdict: string;
  relatedComparisons: string[];
}

function renderCellValue(value: string) {
  if (value === 'Yes') {
    return <Check className="mx-auto h-5 w-5 text-[#7C3AED]" />;
  }
  if (value === 'No') {
    return <X className="mx-auto h-5 w-5 text-[#8B867B]" />;
  }
  if (value === 'Limited') {
    return <Minus className="mx-auto h-5 w-5 text-[#8B867B]" />;
  }
  return <span>{value}</span>;
}

const ComparisonPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const comparison = (comparisons as Comparison[]).find(
    (c) => c.slug === slug
  );

  if (!comparison) {
    return (
      <div className={`${pageWrap} flex flex-col`}>
        <HeaderV4 />
        <main className="flex flex-1 items-center justify-center px-5 pt-28">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight">
              <EditorialTitle text="Comparison Not Found." />
            </h1>
            <p className="mb-8 text-[#6B6459]">
              The comparison you're looking for doesn't exist.
            </p>
            <Link to="/" className={ctaButton}>
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </main>
        <FooterV4 />
      </div>
    );
  }

  const introParagraphs = comparison.intro.split('\n\n');
  const verdictParagraphs = comparison.verdict.split('\n\n');

  const relatedItems = comparison.relatedComparisons
    .map((relSlug) =>
      (comparisons as Comparison[]).find((c) => c.slug === relSlug)
    )
    .filter((c): c is Comparison => c !== undefined);

  return (
    <div className={pageWrap}>
      <Helmet>
        <title>{comparison.metaTitle}</title>
        <meta name="description" content={comparison.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/compare/${comparison.slug}`}
        />
      </Helmet>

      <HeaderV4 />

      <main className="pt-28">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-6xl px-5 py-6">
          <nav className={crumbNav}>
            <Link to="/" className={crumbLink}>
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/compare" className={crumbLink}>
              Compare
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A]">
              Dezygn vs {comparison.competitorName}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-20 pt-10 sm:pb-24">
          <span
            aria-hidden
            className={`${serif} pointer-events-none absolute -right-4 top-8 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}
          >
            ✦
          </span>
          <div className="mx-auto max-w-6xl">
            <p className={eyebrowPill}>Comparison</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              <EditorialTitle text={comparison.heroHeadline} />
            </h1>
            <div className="mt-6 max-w-3xl space-y-6">
              {introParagraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-8 text-[#6B6459]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="Feature Comparison." />
            </h2>

            <div className="overflow-hidden rounded-3xl border border-[#1A1A1A]/[0.12] bg-white shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F7F5F0]">
                      <th
                        className={`${mono} px-6 py-4 text-left text-[11px] font-medium uppercase tracking-[0.12em] text-[#6B6459]`}
                      >
                        Feature
                      </th>
                      <th
                        className={`${mono} px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-[#7C3AED]`}
                      >
                        Dezygn
                      </th>
                      <th
                        className={`${mono} px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-[#6B6459]`}
                      >
                        {comparison.competitorName}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.comparisonTable.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-[#1A1A1A]/[0.08] last:border-b-0 ${
                          i % 2 === 1 ? 'bg-[#F7F5F0]/50' : ''
                        }`}
                      >
                        <td className="px-6 py-4 font-medium text-[#1A1A1A]">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center text-[#2B2B2B]">
                          {renderCellValue(row.dezygn)}
                        </td>
                        <td className="px-6 py-4 text-center text-[#6B6459]">
                          {renderCellValue(row.competitor)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dezygn */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="Why Choose Dezygn." />
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {comparison.dezgnPros.map((pro, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-6 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#7C3AED]" />
                  <span className="leading-7 text-[#2B2B2B]">{pro}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where Competitor Falls Short */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle
                text={`Where ${comparison.competitorName} Falls Short.`}
              />
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {comparison.competitorCons.map((con, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-6 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                >
                  <Minus className="mt-0.5 h-5 w-5 shrink-0 text-[#8B867B]" />
                  <span className="leading-7 text-[#2B2B2B]">{con}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="The Verdict." />
            </h2>
            <div className="max-w-3xl space-y-6">
              {verdictParagraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-8 text-[#6B6459]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F7F5F0] px-5 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[32px] bg-[#7C3AED] px-8 py-16 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] md:px-16 md:py-20">
              <span
                aria-hidden
                className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}
              >
                ✳
              </span>
              <h2 className="relative z-10 mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to switch to{' '}
                <span className={`${serif} italic font-normal`}>Dezygn?</span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/75">
                Join thousands of creators and agencies who chose Dezygn over{' '}
                {comparison.competitorName}. Start creating today.
              </p>
              <a
                href={SIGNUP_URL}
                className="relative z-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
              >
                Start Free
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Related Comparisons */}
        {relatedItems.length > 0 && (
          <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
                <EditorialTitle text="Related Comparisons." />
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedItems.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/compare/${related.slug}`}
                    className={`${cardLink} p-6`}
                  >
                    <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                      Dezygn vs {related.competitorName}
                    </h3>
                    <p className="mb-4 text-sm leading-6 text-[#6B6459] line-clamp-2">
                      {related.metaDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED]">
                      Read comparison
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <FooterV4 />
    </div>
  );
};

export default ComparisonPage;
