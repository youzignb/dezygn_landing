import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { resources } from '../../data/resources';
import { ArrowRight, ChevronRight, CheckCircle2, BookOpen } from 'lucide-react';

interface Resource {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  image?: string;
  imageAlt?: string;
  cta?: {
    label: string;
    href: string;
    subtext?: string;
  };
  sections: { heading: string; content: string[] }[];
  keyTakeaways: string[];
  relatedResources: string[];
}

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
      <div className="min-h-screen bg-[#050507] text-white font-sans">
        <HeaderV3 />
        <main className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6 text-center py-32">
            <h1 className="text-4xl font-bold mb-4">Resource Not Found</h1>
            <p className="text-gray-400 mb-8">
              The resource you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Browse all resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <FooterV3 />
      </div>
    );
  }

  const relatedItems = resource.relatedResources
    .map((relSlug) => (resources as Resource[]).find((r) => r.slug === relSlug))
    .filter((r): r is Resource => r !== undefined);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white">
      <Helmet>
        <title>{resource.metaTitle}</title>
        <meta name="description" content={resource.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/resources/${resource.slug}`}
        />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24 pb-20">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              to="/resources"
              className="hover:text-white transition-colors"
            >
              Resources
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300">{resource.title}</span>
          </nav>
        </div>

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
                Resource Guide
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {resource.heroHeadline}
            </h1>

            {resource.image && (
              <div className="max-w-4xl mt-12">
                <img
                  src={resource.image}
                  alt={resource.imageAlt}
                  width={800}
                  height={533}
                  loading="lazy"
                  className="w-full rounded-2xl border border-white/10"
                />
              </div>
            )}

            {resource.cta && (
              <div className="max-w-4xl mt-10">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-purple-300 mb-2">
                      Masterclass Playlist
                    </p>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Watch the Full Workflow
                    </h2>
                    {resource.cta.subtext && (
                      <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                        {resource.cta.subtext}
                      </p>
                    )}
                  </div>
                  <a
                    href={resource.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    {resource.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile TOC */}
        <div className="lg:hidden max-w-7xl mx-auto px-6 mb-10">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-gray-300"
            >
              <span>Table of Contents</span>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  tocOpen ? 'rotate-90' : ''
                }`}
              />
            </button>
            {tocOpen && (
              <div className="px-5 pb-4 border-t border-white/10 pt-3">
                <ul className="space-y-1">
                  {resource.sections.map((section) => {
                    const id = slugifyHeading(section.heading);
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          onClick={() => setTocOpen(false)}
                          className="block py-1.5 text-sm text-gray-500 hover:text-white transition-colors"
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
                      className="block py-1.5 text-sm text-gray-500 hover:text-white transition-colors"
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:flex lg:gap-12">
            {/* Desktop TOC Sidebar */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
              <nav className="sticky top-28 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 px-2">
                  Contents
                </p>
                <ul className="space-y-0.5">
                  {resource.sections.map((section) => {
                    const id = slugifyHeading(section.heading);
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="block py-1.5 px-2 text-sm text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/[0.03]"
                        >
                          {section.heading}
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <a
                      href="#key-takeaways"
                      className="block py-1.5 px-2 text-sm text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/[0.03]"
                    >
                      Key Takeaways
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Article Body */}
            <article className="flex-1 max-w-4xl">
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
                      className="text-2xl font-bold text-white mb-6 mt-0 scroll-mt-32"
                    >
                      {section.heading}
                    </h2>
                    {section.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-gray-400 leading-relaxed text-base mb-5 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                );
              })}

              {/* Key Takeaways */}
              <section id="key-takeaways" className="mb-20 scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-6 mt-0">
                  Key Takeaways
                </h2>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                  <ul className="space-y-4">
                    {resource.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">
                          {takeaway}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* CTA Section */}
              <section className="mb-20">
                <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-10 text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ready to Put This Into Practice?
                  </h2>
                  <p className="text-purple-100 mb-8 max-w-lg mx-auto leading-relaxed">
                    Dezygn gives you the AI creative tools, training, and
                    community to turn these insights into real results for your
                    clients.
                  </p>
                  <Link
                    to="https://chat.dezygn.com/signup"
                    className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>

              {/* Related Resources */}
              {relatedItems.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Related Resources
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {relatedItems.map((related) => (
                      <Link
                        key={related.slug}
                        to={`/resources/${related.slug}`}
                        className="group block bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <BookOpen className="w-4 h-4 text-purple-400" />
                          <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                            Guide
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {related.metaDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-4 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                          Read guide
                          <ArrowRight className="w-3.5 h-3.5" />
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

      <FooterV3 />
    </div>
  );
};

export default ResourcePage;
