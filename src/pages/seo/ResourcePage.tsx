import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { resources, type Resource } from '../../data/resources';
import { ArrowRight, ChevronRight, CheckCircle2, BookOpen } from 'lucide-react';
import {
  pageWrap,
  eyebrowPill,
  ctaButton,
  card,
  cardLink,
  crumbNav,
  crumbLink,
  mono,
  serif,
  SIGNUP_URL,
  EditorialTitle,
} from './v4Theme';

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const ResourcePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [tocOpen, setTocOpen] = useState(false);

  const resource = (resources as Resource[]).find((r) => r.slug === slug);

  if (!resource) {
    return (
      <div className={`${pageWrap} flex flex-col`}>
        <HeaderV4 />
        <main className="flex flex-1 items-center justify-center px-5 pt-28">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight">
              <EditorialTitle text="Resource Not Found." />
            </h1>
            <p className="mb-8 text-[#6B6459]">
              The resource you are looking for does not exist or has been moved.
            </p>
            <Link to="/resources" className={ctaButton}>
              Browse all resources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </main>
        <FooterV4 />
      </div>
    );
  }

  const relatedItems = resource.relatedResources
    .map((relSlug) => (resources as Resource[]).find((r) => r.slug === relSlug))
    .filter((r): r is Resource => r !== undefined);

  const canonicalUrl = `https://dezygn.com/resources/${resource.slug}`;
  const absoluteImageUrl =
    resource.image?.startsWith('http')
      ? resource.image
      : resource.image
        ? `https://dezygn.com${resource.image}`
        : undefined;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.heroHeadline || resource.title,
    name: resource.title,
    description: resource.metaDescription,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    ...(absoluteImageUrl ? { image: [absoluteImageUrl] } : {}),
    ...(resource.publishedAt ? { datePublished: resource.publishedAt } : {}),
    ...(resource.updatedAt ? { dateModified: resource.updatedAt } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'Dezygn',
      url: 'https://dezygn.com',
    },
  };

  const faqJsonLd =
    resource.faq && resource.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: resource.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : undefined;

  return (
    <div className={pageWrap}>
      <Helmet>
        <title>{resource.metaTitle}</title>
        <meta name="description" content={resource.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={resource.metaTitle} />
        <meta property="og:description" content={resource.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Dezygn" />
        {absoluteImageUrl && (
          <>
            <meta property="og:image" content={absoluteImageUrl} />
            <meta property="og:image:alt" content={resource.imageAlt} />
          </>
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={resource.metaTitle} />
        <meta name="twitter:description" content={resource.metaDescription} />
        {absoluteImageUrl && <meta name="twitter:image" content={absoluteImageUrl} />}

        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
      </Helmet>

      <HeaderV4 />

      <main className="pb-20 pt-28">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-6xl px-5 py-6">
          <nav className={crumbNav}>
            <Link to="/" className={crumbLink}>
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/resources" className={crumbLink}>
              Resources
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A]">{resource.title}</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-4">
          <span
            aria-hidden
            className={`${serif} pointer-events-none absolute -right-4 top-0 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}
          >
            ✦
          </span>
          <div className="max-w-4xl">
            <p className={eyebrowPill}>Resource Guide</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl">
              <EditorialTitle text={resource.heroHeadline} />
            </h1>

            {resource.image && (
              <div className="mt-12 max-w-4xl">
                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-1.5 shadow-[0_24px_60px_rgba(26,26,26,0.12)] sm:p-2">
                  <img
                    src={resource.image}
                    alt={resource.imageAlt}
                    width={800}
                    height={533}
                    loading="lazy"
                    className="w-full rounded-[10px]"
                  />
                </div>
              </div>
            )}

            {resource.cta && (
              <div className="mt-10 max-w-4xl">
                <div className={`${card} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
                  <div>
                    <p
                      className={`${mono} mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}
                    >
                      Masterclass Playlist
                    </p>
                    <h2 className="mb-2 text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                      Watch the Full{' '}
                      <span className={`${serif} italic font-normal`}>
                        Workflow.
                      </span>
                    </h2>
                    {resource.cta.subtext && (
                      <p className="max-w-xl text-sm leading-6 text-[#6B6459]">
                        {resource.cta.subtext}
                      </p>
                    )}
                  </div>
                  <a
                    href={resource.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className={ctaButton}
                  >
                    {resource.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="mx-auto mb-10 max-w-6xl px-5 lg:hidden">
          <div className="overflow-hidden rounded-2xl border border-[#1A1A1A]/12 bg-white shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className={`${mono} flex w-full items-center justify-between px-5 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#2B2B2B]`}
            >
              <span>Table of Contents</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  tocOpen ? 'rotate-90' : ''
                }`}
              />
            </button>
            {tocOpen && (
              <div className="border-t border-[#1A1A1A]/10 px-5 pb-4 pt-3">
                <ul className="space-y-1">
                  {resource.sections.map((section) => {
                    const id = slugifyHeading(section.heading);
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          onClick={() => setTocOpen(false)}
                          className="block py-1.5 text-sm text-[#6B6459] transition-colors hover:text-[#1A1A1A]"
                        >
                          {section.heading}
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <a
                      href="#key-takeaways"
                      onClick={() => setTocOpen(false)}
                      className="block py-1.5 text-sm text-[#6B6459] transition-colors hover:text-[#1A1A1A]"
                    >
                      Key Takeaways
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Article Layout */}
        <div className="mx-auto max-w-6xl px-5">
          <div className="lg:flex lg:gap-12">
            {/* Desktop TOC Sidebar */}
            <aside className="hidden flex-shrink-0 lg:block lg:w-64">
              <nav className="sticky top-28 rounded-2xl border border-[#1A1A1A]/12 bg-white p-4 shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
                <p
                  className={`${mono} mb-3 px-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}
                >
                  Contents
                </p>
                <ul className="space-y-0.5">
                  {resource.sections.map((section) => {
                    const id = slugifyHeading(section.heading);
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="block rounded-lg px-2 py-1.5 text-sm text-[#6B6459] transition-colors hover:bg-[#F7F5F0] hover:text-[#1A1A1A]"
                        >
                          {section.heading}
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <a
                      href="#key-takeaways"
                      className="block rounded-lg px-2 py-1.5 text-sm text-[#6B6459] transition-colors hover:bg-[#F7F5F0] hover:text-[#1A1A1A]"
                    >
                      Key Takeaways
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Article Body */}
            <article className="max-w-4xl flex-1">
              {/* Sections */}
              {resource.sections.map((section, idx) => {
                const id = slugifyHeading(section.heading);
                return (
                  <section
                    key={id}
                    className={idx < resource.sections.length - 1 ? 'mb-16' : 'mb-20'}
                  >
                    <h2
                      id={id}
                      className="mb-6 mt-0 scroll-mt-32 text-2xl font-semibold tracking-tight text-[#1A1A1A]"
                    >
                      {section.heading}
                    </h2>
                    {section.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="mb-5 text-base leading-7 text-[#6B6459] last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                );
              })}

              {/* Key Takeaways */}
              <section id="key-takeaways" className="mb-20 scroll-mt-32">
                <h2 className="mb-6 mt-0 text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                  <EditorialTitle text="Key Takeaways." />
                </h2>
                <div className={card}>
                  <ul className="space-y-4">
                    {resource.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#7C3AED]" />
                        <span className="leading-7 text-[#2B2B2B]">
                          {takeaway}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-20">
                <div className="relative overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)]">
                  <span
                    aria-hidden
                    className={`${serif} absolute -bottom-12 -right-2 rotate-12 text-[160px] italic leading-none text-white/10`}
                  >
                    ✦
                  </span>
                  <h2 className="relative z-10 mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Ready to Put This Into{' '}
                    <span className={`${serif} italic font-normal`}>
                      Practice?
                    </span>
                  </h2>
                  <p className="relative z-10 mx-auto mb-8 max-w-lg leading-7 text-white/75">
                    Dezygn gives you the AI creative tools, training, and
                    community to turn these insights into real results for your
                    clients.
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

              {/* Related Resources */}
              {relatedItems.length > 0 && (
                <section className="mb-10">
                  <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                    <EditorialTitle text="Related Resources." />
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {relatedItems.map((related) => (
                      <Link
                        key={related.slug}
                        to={`/resources/${related.slug}`}
                        className={`${cardLink} block p-6`}
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <BookOpen className="h-4 w-4 text-[#7C3AED]" />
                          <span
                            className={`${mono} text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}
                          >
                            Guide
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                          {related.title}
                        </h3>
                        <p className="text-sm leading-6 text-[#6B6459] line-clamp-2">
                          {related.metaDescription}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#7C3AED]">
                          Read guide
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>
          </div>
        </div>
      </main>

      <FooterV4 />
    </div>
  );
};

export default ResourcePage;
