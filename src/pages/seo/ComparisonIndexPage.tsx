import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronRight } from 'lucide-react';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { comparisons } from '../../data/comparisons';
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

const ComparisonIndexPage = () => {
  return (
    <div className={pageWrap}>
      <Helmet>
        <title>Dezygn vs Competitors — Honest Comparisons | Dezygn</title>
        <meta
          name="description"
          content="See how Dezygn stacks up against other AI product photography tools. Honest, transparent feature comparisons to help you choose the right solution."
        />
        <link rel="canonical" href="https://dezygn.com/compare" />
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
            <span className="text-[#1A1A1A]">Compare</span>
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
            <p className={eyebrowPill}>Comparisons</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              How Dezygn{' '}
              <span className={`${serif} italic font-normal`}>Compares.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              Honest, transparent feature comparisons so you can make the right
              choice for your product photography workflow.
            </p>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((comparison) => (
                <Link
                  key={comparison.slug}
                  to={`/compare/${comparison.slug}`}
                  className={`${cardLink} p-6`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`${mono} grid h-10 w-10 place-items-center rounded-xl bg-[#8B5CF6] text-sm font-bold text-white`}
                    >
                      vs
                    </span>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                      {comparison.competitorName}
                    </h3>
                  </div>

                  <p className="mb-5 text-sm leading-6 text-[#6B6459] line-clamp-2">
                    {comparison.heroHeadline}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-[#7C3AED]">
                    <span>View comparison</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                Ready to see the{' '}
                <span className={`${serif} italic font-normal`}>
                  difference?
                </span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-xl text-lg leading-8 text-white/75">
                Try Dezygn risk-free with a 30-day money-back guarantee. See why
                agencies and freelancers choose Dezygn for AI product
                photography.
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

export default ComparisonIndexPage;
