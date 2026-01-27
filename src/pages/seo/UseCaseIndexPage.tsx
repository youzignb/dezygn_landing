import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { useCases } from '../../data/use-cases';

const UseCaseIndexPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>AI Product Photography for Every Niche | Dezygn</title>
        <meta
          name="description"
          content="Discover how Dezygn creates stunning AI product photography tailored to your specific industry. Explore use cases for skincare, jewelry, supplements, golf brands, and more."
        />
        <link rel="canonical" href="https://dezygn.com/use-cases" />
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
              <li className="text-gray-300">Use Cases</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AI Product Photography{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              by Niche
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Dezygn creates stunning product images tailored to your specific
            industry. Find your niche below.
          </p>
        </section>

        {/* Use Case Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                to={`/use-cases/${useCase.slug}`}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all"
              >
                {useCase.image && (
                  <img
                    src={useCase.image}
                    alt={useCase.imageAlt}
                    width={400}
                    height={267}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                  {useCase.heroSubheadline}
                </p>

                {useCase.stats && useCase.stats.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {useCase.stats.slice(0, 3).map((stat) => (
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
              Don't see your niche?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Dezygn works for any product category. Start creating stunning AI
              photography for your brand today.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
};

export default UseCaseIndexPage;
