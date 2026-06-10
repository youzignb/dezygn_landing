import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { alternatives } from '../../data/alternatives';
import { comparisons } from '../../data/comparisons';
import { Check, X, ArrowRight, ChevronRight, Award } from 'lucide-react';
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

interface Alternative {
  slug: string;
  targetName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  intro: string;
  alternatives: {
    name: string;
    description: string;
    pros: string[];
    cons: string[];
    pricing: string;
    bestFor: string;
  }[];
  verdict: string;
  relatedComparisons: string[];
}

const AlternativePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const data = (alternatives as Alternative[]).find((a) => a.slug === slug);

  if (!data) {
    return (
      <div className={`${pageWrap} flex flex-col`}>
        <HeaderV4 />
        <main className="flex flex-1 items-center justify-center px-5 pt-28">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight">
              <EditorialTitle text="Page Not Found." />
            </h1>
            <p className="mb-8 text-[#6B6459]">
              The alternatives page you are looking for does not exist.
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

  const relatedComparisonData = data.relatedComparisons
    .map((compSlug) => {
      const comp = comparisons.find((c) => c.slug === compSlug);
      if (!comp) return null;
      return {
        slug: comp.slug,
        label: `Dezygn vs ${comp.competitorName}`,
      };
    })
    .filter(Boolean) as { slug: string; label: string }[];

  const introParas = data.intro.split('\n\n');
  const verdictParas = data.verdict.split('\n\n');

  return (
    <div className={pageWrap}>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={`https://dezygn.com/alternatives/${data.slug}`} />
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
            <Link to="/alternatives" className={crumbLink}>
              Alternatives
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A]">{data.targetName} Alternatives</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-10">
          <span
            aria-hidden
            className={`${serif} pointer-events-none absolute -right-4 top-8 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}
          >
            ✦
          </span>
          <div className="mx-auto max-w-6xl">
            <p className={eyebrowPill}>Alternatives</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              <EditorialTitle text={data.heroHeadline} />
            </h1>
            <div className="mt-6 max-w-3xl space-y-6">
              {introParas.map((para, i) => (
                <p key={i} className="text-lg leading-8 text-[#6B6459]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Alternatives List */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl space-y-8">
            {data.alternatives.map((alt, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={alt.name}
                  className={`rounded-3xl border bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)] ${
                    isFirst ? 'border-[#8B5CF6]/40' : 'border-[#1A1A1A]/12'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    {/* Rank Badge */}
                    <div className="flex-shrink-0">
                      <div
                        className={`${mono} flex h-8 w-8 items-center justify-center rounded-full bg-[#8B5CF6] text-sm font-bold text-white`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* Name + Editor's Choice */}
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                          {alt.name}
                        </h3>
                        {isFirst && (
                          <span
                            className={`${mono} inline-flex items-center gap-1.5 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#7C3AED]`}
                          >
                            <Award className="h-3.5 w-3.5" />
                            Editor&apos;s Choice
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="mb-6 leading-7 text-[#6B6459]">
                        {alt.description}
                      </p>

                      {/* Pros and Cons Grid */}
                      <div className="mb-6 grid gap-6 md:grid-cols-2">
                        {/* Pros */}
                        <div>
                          <h4
                            className={`${mono} mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}
                          >
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {alt.pros.map((pro) => (
                              <li
                                key={pro}
                                className="flex items-start gap-2 text-[#2B2B2B]"
                              >
                                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#7C3AED]" />
                                <span className="text-sm leading-6">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div>
                          <h4
                            className={`${mono} mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}
                          >
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {alt.cons.map((con) => (
                              <li
                                key={con}
                                className="flex items-start gap-2 text-[#6B6459]"
                              >
                                <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8B867B]" />
                                <span className="text-sm leading-6">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Pricing + Best For */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`${mono} rounded-full border border-[#1A1A1A]/10 bg-[#F7F5F0] px-3 py-1 text-sm text-[#2B2B2B]`}
                        >
                          {alt.pricing}
                        </span>
                        <span className="text-sm text-[#8B867B]">
                          Best for: {alt.bestFor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Verdict */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="Our Verdict." />
            </h2>
            <div className="max-w-3xl space-y-6">
              {verdictParas.map((para, i) => (
                <p key={i} className="text-lg leading-8 text-[#6B6459]">
                  {para}
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
                Ready to try the #1{' '}
                <span className={`${serif} italic font-normal`}>
                  alternative?
                </span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/75">
                Join thousands of creators and agencies who switched to Dezygn
                for AI-powered product photography.
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
        {relatedComparisonData.length > 0 && (
          <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
                <EditorialTitle text="See Detailed Comparisons." />
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedComparisonData.map((comp) => (
                  <Link
                    key={comp.slug}
                    to={`/compare/${comp.slug}`}
                    className={`${cardLink} p-5`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                        {comp.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#8B867B] transition-colors group-hover:text-[#7C3AED]" />
                    </div>
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

export default AlternativePage;
