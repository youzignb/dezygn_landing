import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { ShotType, shotTypes } from '../../data/shot-types';
import { useCases } from '../../data/use-cases';
import { ArrowRight, Check, Lightbulb, ChevronRight } from 'lucide-react';
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

const ShotTypePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const shotType: ShotType | undefined = shotTypes.find(
    (st) => st.slug === slug
  );

  if (!shotType) {
    return (
      <div className={`${pageWrap} flex flex-col`}>
        <HeaderV4 />
        <main className="flex flex-1 items-center justify-center px-5 pt-28">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight">
              <EditorialTitle text="Shot Type Not Found." />
            </h1>
            <p className="mb-8 text-[#6B6459]">
              The shot type you're looking for doesn't exist or has been moved.
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

  const relatedShots = shotType.relatedShotTypes
    .map((relSlug) => shotTypes.find((st) => st.slug === relSlug))
    .filter((st): st is ShotType => st !== undefined);

  const relatedUseCaseItems = shotType.relatedUseCases
    .map((relSlug) => useCases.find((uc) => uc.slug === relSlug))
    .filter((uc) => uc !== undefined);

  return (
    <div className={pageWrap}>
      <Helmet>
        <title>{shotType.metaTitle}</title>
        <meta name="description" content={shotType.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/shot-types/${shotType.slug}`}
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
            <Link to="/shot-types" className={crumbLink}>
              Shot Types
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A]">{shotType.title}</span>
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
            <p className={eyebrowPill}>Shot Type</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              <EditorialTitle text={shotType.heroHeadline} />
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B6459]">
              {shotType.definition}
            </p>

            {shotType.image && (
              <div className="mt-12 max-w-4xl">
                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-1.5 shadow-[0_24px_60px_rgba(26,26,26,0.12)] sm:p-2">
                  <img
                    src={shotType.image}
                    alt={shotType.imageAlt}
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

        {/* When to Use */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="When to Use This Shot Type." />
            </h2>
            <div className="space-y-4">
              {shotType.whenToUse.map((scenario, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#7C3AED]" />
                  <p className="text-lg leading-8 text-[#2B2B2B]">{scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Dezygn Creates These */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                <Lightbulb className="h-5 w-5" />
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <EditorialTitle text="How Dezygn Creates These." />
              </h2>
            </div>
            <div className="max-w-3xl space-y-6">
              {shotType.howDezygn.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 text-[#6B6459]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
              <EditorialTitle text="Pro Tips." />
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shotType.tips.map((tip, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-6 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                >
                  <p className={`${mono} mb-3 text-xs font-medium text-[#7C3AED]`}>
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mb-3 text-lg font-semibold text-[#1A1A1A]">
                    {tip.title}
                  </h3>
                  <p className="leading-7 text-[#6B6459]">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[32px] bg-[#7C3AED] px-8 py-16 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] md:px-16 md:py-20">
              <span
                aria-hidden
                className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}
              >
                ✳
              </span>
              <h2 className="relative z-10 mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Create {shotType.title} with{' '}
                <span className={`${serif} italic font-normal`}>AI.</span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/75">
                Generate professional {shotType.title.toLowerCase()} in
                minutes, not hours. Dezygn's AI understands composition,
                lighting, and brand consistency.
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

        {/* Related Shot Types */}
        {relatedShots.length > 0 && (
          <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
                <EditorialTitle text="Related Shot Types." />
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedShots.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/shot-types/${related.slug}`}
                    className={`${cardLink} p-6`}
                  >
                    <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                      {related.title}
                    </h3>
                    <p className="mb-4 text-sm leading-6 text-[#6B6459] line-clamp-2">
                      {related.definition}
                    </p>
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
        {relatedUseCaseItems.length > 0 && (
          <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
                <EditorialTitle text="Related Use Cases." />
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedUseCaseItems.map((useCase) => (
                  <Link
                    key={useCase.slug}
                    to={`/use-cases/${useCase.slug}`}
                    className={`${cardLink} p-6`}
                  >
                    <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                      {useCase.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED]">
                      Explore
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

export default ShotTypePage;
