import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { comparisons } from '../../data/comparisons';
import { Check, X, Minus, ArrowRight, ChevronRight } from 'lucide-react';

interface Comparison {
  slug: string;
  competitor: string;
  competitorName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  intro: string;
  comparisonTable: { feature: string; dezygn: string; competitor: string }[];
  dezgnPros: string[];
  competitorCons: string[];
  verdict: string;
  relatedComparisons: string[];
}

function renderCellValue(value: string) {
  if (value === 'Yes') {
    return <Check className="w-5 h-5 text-green-400 mx-auto" />;
  }
  if (value === 'No') {
    return <X className="w-5 h-5 text-red-400 mx-auto" />;
  }
  if (value === 'Limited') {
    return <Minus className="w-5 h-5 text-yellow-400 mx-auto" />;
  }
  return <span>{value}</span>;
}

const ComparisonPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const comparison = (comparisons as Comparison[]).find(
    (c) => c.slug === slug
  );

  if (!comparison) {
    return (
      <div className="min-h-screen bg-[#050507] text-white">
        <HeaderV3 />
        <main className="pt-24">
          <div className="max-w-7xl mx-auto py-20 px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Comparison Not Found</h1>
            <p className="text-gray-400 mb-8">
              The comparison you're looking for doesn't exist.
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

  const introParagraphs = comparison.intro.split('\n\n');
  const verdictParagraphs = comparison.verdict.split('\n\n');

  const relatedItems = comparison.relatedComparisons
    .map((relSlug) =>
      (comparisons as Comparison[]).find((c) => c.slug === relSlug)
    )
    .filter((c): c is Comparison => c !== undefined);

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Helmet>
        <title>{comparison.metaTitle}</title>
        <meta name="description" content={comparison.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/compare/${comparison.slug}`}
        />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/compare" className="hover:text-gray-300 transition-colors">Compare</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300">
              Dezygn vs {comparison.competitorName}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            {comparison.heroHeadline}
          </h1>
        </section>

        {/* Intro */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <div className="max-w-3xl">
            {introParagraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-400 text-lg leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Feature Comparison
          </h2>

          <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/[0.05]">
                    <th className="text-left text-white font-semibold px-6 py-4">
                      Feature
                    </th>
                    <th className="text-center text-white font-semibold px-6 py-4">
                      Dezygn
                    </th>
                    <th className="text-center text-white font-semibold px-6 py-4">
                      {comparison.competitorName}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.comparisonTable.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-white/5 ${
                        i % 2 === 1 ? 'bg-white/[0.01]' : ''
                      }`}
                    >
                      <td className="text-gray-300 px-6 py-4">{row.feature}</td>
                      <td className="text-gray-400 text-center px-6 py-4">
                        {renderCellValue(row.dezygn)}
                      </td>
                      <td className="text-gray-400 text-center px-6 py-4">
                        {renderCellValue(row.competitor)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Choose Dezygn */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Dezygn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {comparison.dezgnPros.map((pro, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex items-start gap-4"
              >
                <Check className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                <span className="text-gray-300">{pro}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Where Competitor Falls Short */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where {comparison.competitorName} Falls Short
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {comparison.competitorCons.map((con, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex items-start gap-4"
              >
                <Minus className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-gray-300">{con}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Verdict</h2>
          <div className="max-w-3xl">
            {verdictParagraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-400 text-lg leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to switch to Dezygn?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators and agencies who chose Dezygn over{' '}
              {comparison.competitorName}. Start creating today.
            </p>
            <Link
              to="https://chat.dezygn.com/signup"
              className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get Started with Dezygn
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Related Comparisons */}
        {relatedItems.length > 0 && (
          <section className="max-w-7xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Related Comparisons
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((related) => (
                <Link
                  key={related.slug}
                  to={`/compare/${related.slug}`}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] transition-colors group"
                >
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Dezygn vs {related.competitorName}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {related.metaDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    Read comparison
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

export default ComparisonPage;
