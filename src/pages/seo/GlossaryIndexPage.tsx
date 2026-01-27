import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowRight } from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { glossaryEntries } from '../../data/glossary';

interface GroupedEntries {
  [letter: string]: typeof glossaryEntries;
}

const GlossaryIndexPage = () => {
  // Group entries alphabetically by first letter of term
  const grouped = glossaryEntries.reduce<GroupedEntries>((acc, entry) => {
    const letter = entry.term.charAt(0).toUpperCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(entry);
    return acc;
  }, {});

  const sortedLetters = Object.keys(grouped).sort();

  // Extract first sentence from definition
  const getFirstSentence = (text: string): string => {
    const match = text.match(/^[^.!?]+[.!?]/);
    return match ? match[0] : text.slice(0, 120) + '...';
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>AI Photography Glossary — Key Terms Explained | Dezygn</title>
        <meta
          name="description"
          content="Learn the language of AI-powered product photography. A comprehensive glossary of key terms, techniques, and concepts used in modern AI photography workflows."
        />
        <link rel="canonical" href="https://dezygn.com/glossary" />
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
              <li className="text-gray-300">Glossary</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AI Photography{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Glossary
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Learn the language of AI-powered product photography.
          </p>
        </section>

        {/* Alphabet Quick Nav */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/10 text-sm font-semibold text-gray-300 hover:border-purple-500/30 hover:text-purple-300 transition-all"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>

        {/* Glossary Entries by Letter */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-16">
            {sortedLetters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-purple-400">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {grouped[letter].map((entry) => (
                    <Link
                      key={entry.slug}
                      to={`/glossary/${entry.slug}`}
                      className="group bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition-all"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {entry.term}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">
                        {getFirstSentence(entry.definition)}
                      </p>
                      <div className="flex items-center gap-1.5 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Put these concepts into practice
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Master AI product photography with Dezygn. From glossary terms to
              real-world results — start creating today.
            </p>
            <Link
              to="https://chat.dezygn.com/signup"
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

export default GlossaryIndexPage;
