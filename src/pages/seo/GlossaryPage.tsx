import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { glossaryEntries } from '../../data/glossary';
import { ArrowRight, ChevronRight, BookOpen } from 'lucide-react';

interface GlossaryEntry {
  slug: string;
  term: string;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  explanation: string[];
  howItRelates: string;
  relatedTerms: string[];
}

function getFirstSentence(text: string): string {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
}

const GlossaryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const entry = (glossaryEntries as GlossaryEntry[]).find(
    (e) => e.slug === slug
  );

  if (!entry) {
    return (
      <div className="min-h-screen bg-[#050507] text-white">
        <HeaderV3 />
        <main className="pt-24">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Term Not Found</h1>
            <p className="text-gray-400 mb-8">
              The glossary term you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              to="/glossary"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Glossary
            </Link>
          </div>
        </main>
        <FooterV3 />
      </div>
    );
  }

  const relatedEntries = entry.relatedTerms
    .map((relSlug) =>
      (glossaryEntries as GlossaryEntry[]).find((e) => e.slug === relSlug)
    )
    .filter((e): e is GlossaryEntry => e !== undefined);

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Helmet>
        <title>{entry.metaTitle}</title>
        <meta name="description" content={entry.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/glossary/${entry.slug}`}
        />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-10 flex items-center gap-1.5 flex-wrap">
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              to="/glossary"
              className="hover:text-gray-300 transition-colors"
            >
              Glossary
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-400">{entry.term}</span>
          </nav>

          <article className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  What is {entry.term}?
                </h1>
              </div>
            </div>

            {/* Definition Card */}
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-8 mb-14">
              <p className="text-lg text-gray-300 leading-relaxed">
                {entry.definition}
              </p>
            </div>

            {/* Explanation */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold mb-6">
                Understanding {entry.term}
              </h2>
              <div className="space-y-5">
                {entry.explanation.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-400 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* How It Relates */}
            <section className="mb-14">
              <h2 className="text-2xl font-semibold mb-6">
                How It Relates to AI Photography
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {entry.howItRelates}
              </p>
            </section>

            {/* Related Terms */}
            {relatedEntries.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-semibold mb-6">
                  Related Terms
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedEntries.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/glossary/${related.slug}`}
                      className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all group"
                    >
                      <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                        {related.term}
                        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {getFirstSentence(related.definition)}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <section className="mb-14 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-3">
                Start using AI for your product photography
              </h2>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                Turn product photos into conversion-ready visuals with
                Dezygn&apos;s AI Creative Suite.
              </p>
              <a
                href="https://chat.dezygn.com/login"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-medium px-6 py-3 rounded-xl transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </section>

            {/* Back to Glossary */}
            <div className="mb-20">
              <Link
                to="/glossary"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors text-sm"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to full glossary
              </Link>
            </div>
          </article>
        </div>
      </main>

      <FooterV3 />
    </div>
  );
};

export default GlossaryPage;
