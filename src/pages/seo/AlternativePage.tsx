import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { alternatives } from '../../data/alternatives';
import { comparisons } from '../../data/comparisons';
import { Check, X, ArrowRight, ChevronRight, Award } from 'lucide-react';

interface Alternative {
  slug: string;
  targetName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  intro: string;
  alternatives: {
    name: string;
    description: string;
    pros: string[];
    cons: string[];
    pricing: string;
    bestFor: string;
  }[];
  verdict: string;
  relatedComparisons: string[];
}

const AlternativePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const data = (alternatives as Alternative[]).find((a) => a.slug === slug);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050507] text-white font-sans">
        <HeaderV3 />
        <main className="pt-24 max-w-7xl mx-auto py-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-white/60 mb-8">
            The alternatives page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </main>
        <FooterV3 />
      </div>
    );
  }

  const relatedComparisonData = data.relatedComparisons
    .map((compSlug) => {
      const comp = comparisons.find((c) => c.slug === compSlug);
      if (!comp) return null;
      return {
        slug: comp.slug,
        label: `Dezygn vs ${comp.competitorName}`,
      };
    })
    .filter(Boolean) as { slug: string; label: string }[];

  const introParas = data.intro.split('\n\n');
  const verdictParas = data.verdict.split('\n\n');

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={`https://dezygn.com/alternatives/${data.slug}`} />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24 bg-[#050507]">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
          <nav className="flex items-center gap-2 text-sm text-white/40">
            <Link to="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/alternatives" className="hover:text-white/70 transition-colors">
              Alternatives
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{data.targetName} Alternatives</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {data.heroHeadline}
          </h1>
        </section>

        {/* Intro */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="max-w-3xl">
            {introParas.map((para, i) => (
              <p key={i} className="text-lg text-white/60 leading-relaxed mb-6 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Alternatives List */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-8">
            {data.alternatives.map((alt, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={alt.name}
                  className={`rounded-2xl p-8 ${
                    isFirst
                      ? 'bg-white/[0.03] border border-purple-500/30 shadow-lg shadow-purple-500/5'
                      : 'bg-white/[0.03] border border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    {/* Rank Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Name + Editor's Choice */}
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{alt.name}</h3>
                        {isFirst && (
                          <span className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                            <Award className="w-3.5 h-3.5" />
                            Editor&apos;s Choice
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-white/60 leading-relaxed mb-6">{alt.description}</p>

                      {/* Pros and Cons Grid */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Pros */}
                        <div>
                          <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {alt.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2 text-green-400/70">
                                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div>
                          <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {alt.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2 text-red-400/70">
                                <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Pricing + Best For */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-white/5 px-3 py-1 rounded-full text-sm text-white/70">
                          {alt.pricing}
                        </span>
                        <span className="text-sm text-white/40">
                          Best for: {alt.bestFor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Verdict */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Verdict</h2>
            {verdictParas.map((para, i) => (
              <p key={i} className="text-lg text-white/60 leading-relaxed mb-6 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to try the #1 alternative?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators and agencies who switched to Dezygn for AI-powered product photography.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Get Started with Dezygn <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Comparisons */}
        {relatedComparisonData.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-2xl font-bold mb-8">See Detailed Comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedComparisonData.map((comp) => (
                <Link
                  key={comp.slug}
                  to={`/compare/${comp.slug}`}
                  className="group bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 group-hover:text-white transition-colors font-medium">
                      {comp.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-purple-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <FooterV3 />
    </div>
  );
};

export default AlternativePage;
