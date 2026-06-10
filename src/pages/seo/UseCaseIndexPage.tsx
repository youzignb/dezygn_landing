import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronRight } from 'lucide-react';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { useCases } from '../../data/use-cases';
import {
  pageWrap,
  eyebrowPill,
  cardLink,
  crumbNav,
  crumbLink,
  mono,
  serif,
  SIGNUP_URL,
} from './v4Theme';

const UseCaseIndexPage = () => {
  return (
    <div className={pageWrap}>
      <Helmet>
        <title>AI Product Photography for Every Niche | Dezygn</title>
        <meta
          name="description"
          content="Discover how Dezygn creates stunning AI product photography tailored to your specific industry. Explore use cases for skincare, jewelry, supplements, golf brands, and more."
        />
        <link rel="canonical" href="https://dezygn.com/use-cases" />
      </Helmet>

      <HeaderV4 />

      <main className="pt-28">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-6xl px-5 py-4">
          <nav aria-label="Breadcrumb" className={crumbNav}>
            <Link to="/" className={crumbLink}>
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A]">Use Cases</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-5 py-16 text-center sm:py-20">
          <span
            aria-hidden
            className={`${serif} pointer-events-none absolute -right-4 top-8 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}
          >
            ✦
          </span>
          <div className="mx-auto max-w-3xl">
            <p className={eyebrowPill}>Use Cases</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              AI Product Photography by{' '}
              <span className={`${serif} italic font-normal`}>Niche.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              Dezygn creates stunning product images tailored to your specific
              industry. Find your niche below.
            </p>
          </div>
        </section>

        {/* Use Case Grid */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase) => (
                <Link
                  key={useCase.slug}
                  to={`/use-cases/${useCase.slug}`}
                  className={`${cardLink} overflow-hidden`}
                >
                  {useCase.image && (
                    <img
                      src={useCase.image}
                      alt={useCase.imageAlt}
                      width={400}
                      height={267}
                      loading="lazy"
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                      {useCase.title}
                    </h3>
                    <p className="mb-4 text-sm leading-6 text-[#6B6459] line-clamp-2">
                      {useCase.heroSubheadline}
                    </p>

                    {useCase.stats && useCase.stats.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {useCase.stats.slice(0, 3).map((stat) => (
                          <span
                            key={stat.label}
                            className={`${mono} rounded-full border border-[#1A1A1A]/10 bg-[#F7F5F0] px-3 py-1 text-[11px] text-[#6B6459]`}
                          >
                            <span className="font-semibold text-[#7C3AED]">
                              {stat.value}
                            </span>{' '}
                            {stat.label}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 text-sm font-medium text-[#7C3AED]">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] md:p-16">
              <span
                aria-hidden
                className={`${serif} absolute -bottom-12 -right-2 rotate-12 text-[180px] italic leading-none text-white/10`}
              >
                ✦
              </span>
              <h2 className="relative z-10 mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Don't see your{' '}
                <span className={`${serif} italic font-normal`}>niche?</span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-xl text-lg leading-8 text-white/75">
                Dezygn works for any product category. Start creating stunning
                AI photography for your brand today.
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
      </main>

      <FooterV4 />
    </div>
  );
};

export default UseCaseIndexPage;
