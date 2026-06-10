import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Camera, ChevronRight } from 'lucide-react';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { shotTypes } from '../../data/shot-types';
import {
  pageWrap,
  eyebrowPill,
  cardLink,
  crumbNav,
  crumbLink,
  serif,
  SIGNUP_URL,
  EditorialTitle,
} from './v4Theme';

const ShotTypeIndexPage = () => {
  return (
    <div className={pageWrap}>
      <Helmet>
        <title>AI Photography Shot Types | Dezygn</title>
        <meta
          name="description"
          content="Explore every AI photography shot type — lifestyle, studio, hero, model, flat lay, and more. Learn when to use each one and how Dezygn creates them."
        />
        <link rel="canonical" href="https://dezygn.com/shot-types" />
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
            <span className="text-[#1A1A1A]">Shot Types</span>
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
            <p className={eyebrowPill}>
              <Camera className="h-3.5 w-3.5" />
              Shot Types
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              <EditorialTitle text="AI Photography Shot Types." />
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              Shot types are the vocabulary of conversion photography. Each one
              answers a different question in your customer's head — what it
              looks like, how it's used, why it belongs in their life. Learn
              when to reach for each shot, and how Dezygn generates it on
              demand.
            </p>
          </div>
        </section>

        {/* Shot Type Grid */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shotTypes.map((shotType) => (
                <Link
                  key={shotType.slug}
                  to={`/shot-types/${shotType.slug}`}
                  className={`${cardLink} overflow-hidden`}
                >
                  {shotType.image && (
                    <img
                      src={shotType.image}
                      alt={shotType.imageAlt}
                      width={400}
                      height={267}
                      loading="lazy"
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                      {shotType.title}
                    </h3>
                    <p className="mb-4 text-sm leading-6 text-[#6B6459] line-clamp-3">
                      {shotType.definition}
                    </p>
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
                Master every{' '}
                <span className={`${serif} italic font-normal`}>shot.</span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-xl text-lg leading-8 text-white/75">
                From clean studio packshots to lived-in lifestyle scenes —
                generate every shot type your clients need from one studio.
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

export default ShotTypeIndexPage;
