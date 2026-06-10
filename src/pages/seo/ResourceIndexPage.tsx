import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { resources } from '../../data/resources';
import {
  pageWrap,
  eyebrowPill,
  cardLink,
  crumbNav,
  crumbLink,
  serif,
  SIGNUP_URL,
} from './v4Theme';

const ResourceIndexPage = () => {
  return (
    <div className={pageWrap}>
      <Helmet>
        <title>AI Photography Guides & Resources | Dezygn</title>
        <meta
          name="description"
          content="In-depth guides on AI product photography — from getting started to pricing, ROI, brand consistency, and building an agency. Free resources for photographers and brands."
        />
        <link rel="canonical" href="https://dezygn.com/resources" />
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
            <span className="text-[#1A1A1A]">Resources</span>
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
            <p className={eyebrowPill}>Resources</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Guides &{' '}
              <span className={`${serif} italic font-normal`}>Resources.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              In-depth guides on AI product photography — from getting started
              to pricing, ROI, and building your own agency.
            </p>
          </div>
        </section>

        {/* Resource Grid */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <Link
                  key={resource.slug}
                  to={`/resources/${resource.slug}`}
                  className={`${cardLink} overflow-hidden`}
                >
                  {resource.image && (
                    <img
                      src={resource.image}
                      alt={resource.imageAlt}
                      width={400}
                      height={267}
                      loading="lazy"
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                        {resource.title}
                      </h3>
                    </div>

                    <p className="mb-5 text-sm leading-6 text-[#6B6459] line-clamp-2">
                      {resource.heroHeadline}
                    </p>

                    <div className="flex items-center gap-1.5 text-sm font-medium text-[#7C3AED]">
                      <span>Read guide</span>
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
                Ready to put it into{' '}
                <span className={`${serif} italic font-normal`}>practice?</span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-xl text-lg leading-8 text-white/75">
                Start creating studio-quality AI product photography today.
                Everything you just read — built into one platform.
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

export default ResourceIndexPage;
