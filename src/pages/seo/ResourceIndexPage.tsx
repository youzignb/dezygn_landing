import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BookOpen } from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { resources } from '../../data/resources';

const ResourceIndexPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>AI Photography Guides & Resources | Dezygn</title>
        <meta
          name="description"
          content="In-depth guides on AI product photography — from getting started to pricing, ROI, brand consistency, and building an agency. Free resources for photographers and brands."
        />
        <link rel="canonical" href="https://dezygn.com/resources" />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Resources</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Guides &{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            In-depth guides on AI product photography — from getting started to
            pricing, ROI, and building your own agency.
          </p>
        </section>

        {/* Resource Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                to={`/resources/${resource.slug}`}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all"
              >
                {resource.image && (
                  <img
                    src={resource.image}
                    alt={resource.imageAlt}
                    width={400}
                    height={267}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {resource.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-5">
                    {resource.heroHeadline}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span>Read guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to put it into practice?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Start creating studio-quality AI product photography today.
              Everything you just read — built into one platform.
            </p>
            <a
              href="https://chat.dezygn.com/login"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
};

export default ResourceIndexPage;
