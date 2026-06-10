import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Camera,
  Palette,
  Zap,
  Layers,
  Sparkles,
  Target,
  Image,
  Brain,
  Package,
  Globe,
  Clock,
  Shield,
  Eye,
  Wand2,
  Settings,
  BarChart3,
  Users,
  Star,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { useCases } from '../../data/use-cases';
import type { UseCase } from '../../data/use-cases';
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Palette,
  Zap,
  Layers,
  Sparkles,
  Target,
  Image,
  Brain,
  Package,
  Globe,
  Clock,
  Shield,
  Eye,
  Wand2,
  Settings,
  BarChart3,
  Users,
  Star,
};

function UseCaseContent({ useCase }: { useCase: UseCase }) {
  const relatedUseCaseData = useCases.filter((uc) =>
    useCase.relatedUseCases.includes(uc.slug)
  );

  return (
    <div className={pageWrap}>
      <Helmet>
        <title>{useCase.metaTitle}</title>
        <meta name="description" content={useCase.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/use-cases/${useCase.slug}`}
        />
      </Helmet>

      <HeaderV4 />

      <main className="pt-28">
        {/* Breadcrumbs */}
        <nav className="mx-auto max-w-6xl px-5 py-4">
          <ol className={crumbNav}>
            <li>
              <Link to="/" className={crumbLink}>
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3 w-3" />
            </li>
            <li>
              <Link to="/use-cases" className={crumbLink}>
                Use Cases
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3 w-3" />
            </li>
            <li className="text-[#1A1A1A]">{useCase.title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative overflow-hidden px-5 py-16 sm:py-20">
          <span
            aria-hidden
            className={`${serif} pointer-events-none absolute -right-4 top-8 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}
          >
            ✦
          </span>
          <div className="relative mx-auto max-w-5xl text-center">
            <p className={eyebrowPill}>Use Case</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              <EditorialTitle text={useCase.heroHeadline} />
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B6459]">
              {useCase.heroSubheadline}
            </p>

            {useCase.image && (
              <div className="mx-auto mt-12 max-w-4xl">
                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-1.5 shadow-[0_24px_60px_rgba(26,26,26,0.12)] sm:p-2">
                  <img
                    src={useCase.image}
                    alt={useCase.imageAlt}
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

        {/* Problem / The Challenge */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="The Challenge." />
            </h2>
            <div className="max-w-3xl space-y-6">
              {useCase.problem.map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-8 text-[#6B6459]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="How Dezygn Solves This." />
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-[#6B6459]">
              {useCase.solution}
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCase.features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || Sparkles;
                return (
                  <div
                    key={feature.title}
                    className="rounded-3xl border border-[#1A1A1A]/12 bg-white p-6 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                  >
                    <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                      <IconComponent className="h-5 w-5" />
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                      {feature.title}
                    </h3>
                    <p className="leading-7 text-[#6B6459]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-6">
              {useCase.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[180px] rounded-3xl border border-[#1A1A1A]/12 bg-white p-6 text-center shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                >
                  <p className={`${serif} mb-2 text-4xl italic tracking-tight text-[#7C3AED] sm:text-5xl`}>
                    {stat.value}
                  </p>
                  <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] sm:p-16">
              <span
                aria-hidden
                className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}
              >
                ✳
              </span>
              <h2 className="relative z-10 mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to Transform Your {useCase.title}{' '}
                <span className={`${serif} italic font-normal`}>
                  Photography?
                </span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/75">
                {useCase.cta}
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

        {/* Related Sections */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            {/* Related Use Cases */}
            {relatedUseCaseData.length > 0 && (
              <div className="mb-16">
                <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
                  <EditorialTitle text="Related Use Cases." />
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedUseCaseData.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/use-cases/${related.slug}`}
                      className={`${cardLink} p-6`}
                    >
                      <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                        {related.title}
                      </h3>
                      <p className="text-sm leading-6 text-[#6B6459] line-clamp-2">
                        {related.heroSubheadline}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Shot Types */}
            {useCase.relatedShotTypes.length > 0 && (
              <div>
                <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
                  <EditorialTitle text="Related Shot Types." />
                </h2>
                <div className="flex flex-wrap gap-3">
                  {useCase.relatedShotTypes.map((shotSlug) => (
                    <Link
                      key={shotSlug}
                      to={`/shot-types/${shotSlug}`}
                      className={`${mono} rounded-full border border-[#1A1A1A]/12 bg-white px-5 py-2.5 text-sm text-[#2B2B2B] shadow-sm transition-colors hover:border-[#8B5CF6]/40 hover:text-[#7C3AED]`}
                    >
                      {shotSlug
                        .split('-')
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(' ')}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
}

function NotFound() {
  return (
    <div className={pageWrap}>
      <Helmet>
        <title>Use Case Not Found | Dezygn</title>
        <meta
          name="description"
          content="The requested use case could not be found."
        />
      </Helmet>

      <HeaderV4 />

      <main className="flex min-h-screen items-center justify-center pt-28">
        <div className="px-5 text-center">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">
            <EditorialTitle text="Use Case Not Found." />
          </h1>
          <p className="mb-8 text-[#6B6459]">
            The use case you are looking for does not exist.
          </p>
          <Link to="/use-cases" className={ctaButton}>
            Browse All Use Cases
          </Link>
        </div>
      </main>

      <FooterV4 />
    </div>
  );
}

export default function UseCasePage() {
  const { slug } = useParams<{ slug: string }>();
  const useCase = useCases.find((uc) => uc.slug === slug);

  if (!useCase) {
    return <NotFound />;
  }

  return <UseCaseContent useCase={useCase} />;
}
