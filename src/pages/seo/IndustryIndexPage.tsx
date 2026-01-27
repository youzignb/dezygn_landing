import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Building2 } from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { industries } from '../../data/industries';

const IndustryIndexPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>AI Product Photography by Industry & Role | Dezygn</title>
        <meta
          name="description"
          content="See how Dezygn serves e-commerce brands, Amazon sellers, Shopify stores, agencies, freelancers, and dropshippers with AI-powered product photography."
        />
        <link rel="canonical" href="https://dezygn.com/industries" />
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
              <li className="text-gray-300">Industries</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AI Photography{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              by Industry
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you're an agency, freelancer, or e-commerce brand — Dezygn
            fits your workflow and scales with you.
          </p>
        </section>

        {/* Industry Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all"
              >
                {industry.image && (
                  <img
                    src={industry.image}
                    alt={industry.imageAlt}
                    width={400}
                    height={267}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {industry.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                    {industry.heroHeadline}
                  </p>

                  {industry.results && industry.results.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {industry.results.slice(0, 3).map((stat) => (
                        <span
                          key={stat.label}
                          className="text-xs bg-white/[0.05] border border-white/10 rounded-full px-3 py-1 text-gray-300"
                        >
                          <span className="font-semibold text-purple-300">
                            {stat.value}
                          </span>{' '}
                          {stat.label}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span>Learn more</span>
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
              Built for your business
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Join agencies and freelancers already using Dezygn to deliver
              studio-quality AI product photography at scale.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
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

export default IndustryIndexPage;
