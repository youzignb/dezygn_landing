import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { industries } from '../../data/industries';
import { useCases } from '../../data/use-cases';
import {
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import {
  pageWrap,
  eyebrowPill,
  cardLink,
  crumbNav,
  crumbLink,
  mono,
  serif,
  SIGNUP_URL,
  EditorialTitle,
} from './v4Theme';

interface Industry {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  image?: string;
  imageAlt?: string;
  intro: string;
  painPoints: { title: string; description: string }[];
  howDezygn: { title: string; description: string }[];
  results: { value: string; label: string }[];
  secondaryCta?: { label: string; href: string };
  relatedIndustries: string[];
  relatedUseCases: string[];
}

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const industry = (industries as Industry[]).find(
    (ind) => ind.slug === slug
  );

  if (!industry) {
    return (
      <div className={pageWrap}>
        <HeaderV4 />
        <main className="pt-28">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <h1 className="mb-4 text-4xl font-semibold tracking-tight">
              <EditorialTitle text="Industry Not Found." />
            </h1>
            <p className="mb-8 text-[#6B6459]">
              The industry page you are looking for does not exist.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-medium text-[#7C3AED] transition-colors hover:text-[#8B5CF6]"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Home
            </Link>
          </div>
        </main>
        <FooterV4 />
      </div>
    );
  }

  const relatedIndustryData = (industries as Industry[]).filter((ind) =>
    industry.relatedIndustries.includes(ind.slug)
  );

  const relatedUseCaseData = (
    useCases as { slug: string; title: string }[]
  ).filter((uc) => industry.relatedUseCases.includes(uc.slug));

  const introParagraphs = industry.intro.split('\n\n');

  return (
    <div className={pageWrap}>
      <Helmet>
        <title>{industry.metaTitle}</title>
        <meta name="description" content={industry.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/industries/${industry.slug}`}
        />
      </Helmet>

      <HeaderV4 />

      <main className="pt-28">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-6xl px-5 pt-8">
          <nav className={crumbNav}>
            <Link to="/" className={crumbLink}>
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/industries" className={crumbLink}>
              Industries
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A]">{industry.title}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:pb-20">
          <span
            aria-hidden
            className={`${serif} pointer-events-none absolute -right-4 top-8 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}
          >
            ✦
          </span>
          <div className="mx-auto max-w-6xl">
            <p className={eyebrowPill}>Industry</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              <EditorialTitle text={industry.heroHeadline} />
            </h1>

            {industry.image && (
              <div className="mt-12 max-w-4xl">
                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-1.5 shadow-[0_24px_60px_rgba(26,26,26,0.12)] sm:p-2">
                  <img
                    src={industry.image}
                    alt={industry.imageAlt}
                    width={800}
                    height={533}
                    loading="lazy"
                    className="w-full rounded-[10px]"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Intro */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl space-y-6">
              {introParagraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 text-[#6B6459]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="Common Challenges." />
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industry.painPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-3xl border border-[#1A1A1A]/12 bg-white p-6 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                >
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[#1A1A1A] text-[#EDEBE6]">
                    <AlertTriangle className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                    {point.title}
                  </h3>
                  <p className="leading-7 text-[#6B6459]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="How Dezygn Helps." />
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industry.howDezygn.map((solution) => (
                <div
                  key={solution.title}
                  className="rounded-3xl border border-[#1A1A1A]/12 bg-white p-6 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                >
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                    {solution.title}
                  </h3>
                  <p className="leading-7 text-[#6B6459]">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="The Results." />
            </h2>
            <div className="flex flex-wrap gap-6">
              {industry.results.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[200px] flex-1 rounded-3xl border border-[#1A1A1A]/12 bg-white p-8 text-center shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                >
                  <TrendingUp className="mx-auto mb-4 h-6 w-6 text-[#7C3AED]" />
                  <div className={`${serif} mb-2 text-4xl italic tracking-tight text-[#7C3AED] sm:text-5xl`}>
                    {stat.value}
                  </div>
                  <div className={`${mono} text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[32px] bg-[#7C3AED] p-12 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)]">
              <span
                aria-hidden
                className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}
              >
                ✳
              </span>
              <h2 className="relative z-10 mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to transform your {industry.title.toLowerCase()}{' '}
                <span className={`${serif} italic font-normal`}>visuals?</span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/75">
                Join hundreds of professionals already using Dezygn to create
                stunning product photography in minutes, not days.
              </p>
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
                >
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </a>
                {industry.secondaryCta && (
                  <Link
                    to={industry.secondaryCta.href}
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/40 px-9 text-[15px] font-semibold text-white transition hover:bg-white/10"
                  >
                    {industry.secondaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Industries */}
        {relatedIndustryData.length > 0 && (
          <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
                <EditorialTitle text="Related Industries." />
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedIndustryData.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/industries/${related.slug}`}
                    className={`${cardLink} p-6`}
                  >
                    <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED]">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Use Cases */}
        {relatedUseCaseData.length > 0 && (
          <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">
                <EditorialTitle text="Related Use Cases." />
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedUseCaseData.map((uc) => (
                  <Link
                    key={uc.slug}
                    to={`/use-cases/${uc.slug}`}
                    className={`${cardLink} p-6`}
                  >
                    <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                      {uc.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED]">
                      Learn more
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

export default IndustryPage;
