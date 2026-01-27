import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { comparisons } from '../../data/comparisons';

const ComparisonIndexPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Dezygn vs Competitors — Honest Comparisons | Dezygn</title>
        <meta
          name="description"
          content="See how Dezygn stacks up against other AI product photography tools. Honest, transparent feature comparisons to help you choose the right solution."
        />
        <link rel="canonical" href="https://dezygn.com/compare" />
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
              <li className="text-gray-300">Compare</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            How Dezygn{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Compares
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Honest, transparent feature comparisons so you can make the right
            choice for your product photography workflow.
          </p>
        </section>

        {/* Comparison Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                to={`/compare/${comparison.slug}`}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">
                    vs
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {comparison.competitorName}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-5">
                  {comparison.heroHeadline}
                </p>

                <div className="flex items-center gap-1.5 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span>View comparison</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to see the difference?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Try Dezygn risk-free with a 30-day money-back guarantee. See why
              agencies and freelancers choose Dezygn for AI product photography.
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

export default ComparisonIndexPage;
