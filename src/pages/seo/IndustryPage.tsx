import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { industries } from '../../data/industries';
import { useCases } from '../../data/use-cases';
import {
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

interface Industry {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  image?: string;
  imageAlt?: string;
  intro: string;
  painPoints: { title: string; description: string }[];
  howDezygn: { title: string; description: string }[];
  results: { value: string; label: string }[];
  relatedIndustries: string[];
  relatedUseCases: string[];
}

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const industry = (industries as Industry[]).find(
    (ind) => ind.slug === slug
  );

  if (!industry) {
    return (
      <div className="min-h-screen bg-[#050507] text-white">
        <HeaderV3 />
        <main className="pt-24">
          <div className="max-w-7xl mx-auto py-20 px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
            <p className="text-white/60 mb-8">
              The industry page you are looking for does not exist.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>
          </div>
        </main>
        <FooterV3 />
      </div>
    );
  }

  const relatedIndustryData = (industries as Industry[]).filter((ind) =>
    industry.relatedIndustries.includes(ind.slug)
  );

  const relatedUseCaseData = (
    useCases as { slug: string; title: string }[]
  ).filter((uc) => industry.relatedUseCases.includes(uc.slug));

  const introParagraphs = industry.intro.split('\n\n');

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans">
      <Helmet>
        <title>{industry.metaTitle}</title>
        <meta name="description" content={industry.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/industries/${industry.slug}`}
        />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <nav className="flex items-center gap-1.5 text-sm text-white/40">
            <Link to="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/industries" className="hover:text-white/70 transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">{industry.title}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            {industry.heroHeadline}
          </h1>

          {industry.image && (
            <div className="max-w-4xl mt-12">
              <img
                src={industry.image}
                alt={industry.imageAlt}
                width={800}
                height={533}
                loading="lazy"
                className="w-full rounded-2xl border border-white/10"
              />
            </div>
          )}
        </section>

        {/* Intro */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <div className="max-w-3xl space-y-6">
            {introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-white/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Pain Points */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Common Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6"
              >
                <AlertTriangle className="w-6 h-6 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            How Dezygn Helps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.howDezygn.map((solution) => (
              <div
                key={solution.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {solution.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">The Results</h2>
          <div className="flex flex-wrap gap-6">
            {industry.results.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex-1 min-w-[200px] text-center"
              >
                <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-purple-800 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your {industry.title.toLowerCase()} visuals?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of professionals already using Dezygn to create
              stunning product photography in minutes, not days.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Industries */}
        {relatedIndustryData.length > 0 && (
          <section className="max-w-7xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Related Industries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedIndustryData.map((related) => (
                <Link
                  key={related.slug}
                  to={`/industries/${related.slug}`}
                  className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {related.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-purple-400">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Use Cases */}
        {relatedUseCaseData.length > 0 && (
          <section className="max-w-7xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Related Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedUseCaseData.map((uc) => (
                <Link
                  key={uc.slug}
                  to={`/use-cases/${uc.slug}`}
                  className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {uc.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-purple-400">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
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

export default IndustryPage;
