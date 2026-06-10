import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronRight } from 'lucide-react';
import HeaderV4 from '../../components/HeaderV4';
import FooterV4 from '../../components/FooterV4';
import { glossaryEntries } from '../../data/glossary';
import {
  pageWrap,
  eyebrowPill,
  cardLink,
  crumbNav,
  crumbLink,
  mono,
  serif,
  SIGNUP_URL,
} from './v4Theme';

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
    <div className={pageWrap}>
      <Helmet>
        <title>AI Photography Glossary — Key Terms Explained | Dezygn</title>
        <meta
          name="description"
          content="Learn the language of AI-powered product photography. A comprehensive glossary of key terms, techniques, and concepts used in modern AI photography workflows."
        />
        <link rel="canonical" href="https://dezygn.com/glossary" />
      </Helmet>

      <HeaderV4 />

      <main className="pt-28">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-6xl px-5 py-4">
          <nav aria-label="Breadcrumb" className={crumbNav}>
            <Link to="/" className={crumbLink}>
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#1A1A1A]">Glossary</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-5 py-16 text-center sm:py-20">
          <span
            aria-hidden
            className={`${serif} pointer-events-none absolute -right-4 top-8 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}
          >
            ✦
          </span>
          <div className="mx-auto max-w-3xl">
            <p className={eyebrowPill}>Glossary</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              AI Photography{' '}
              <span className={`${serif} italic font-normal`}>Glossary.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              Learn the language of AI-powered product photography.
            </p>
          </div>
        </section>

        {/* Alphabet Quick Nav */}
        <div className="mx-auto mb-4 max-w-6xl px-5">
          <div className="flex flex-wrap justify-center gap-2">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className={`${mono} flex h-10 w-10 items-center justify-center rounded-xl border border-[#1A1A1A]/10 bg-white text-sm font-semibold text-[#2B2B2B] shadow-sm transition hover:border-[#8B5CF6]/40 hover:text-[#7C3AED]`}
              >
                {letter}
              </a>
            ))}
          </div>
        </div>

        {/* Glossary Entries by Letter */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-16">
              {sortedLetters.map((letter) => (
                <div key={letter} id={`letter-${letter}`} className="scroll-mt-28">
                  <div className="mb-6 flex items-center gap-4">
                    <span
                      className={`${serif} text-4xl italic leading-none text-[#7C3AED]`}
                    >
                      {letter}
                    </span>
                    <div className="h-px flex-1 bg-[#1A1A1A]/10" />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {grouped[letter].map((entry) => (
                      <Link
                        key={entry.slug}
                        to={`/glossary/${entry.slug}`}
                        className={`${cardLink} p-5`}
                      >
                        <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#7C3AED]">
                          {entry.term}
                        </h3>
                        <p className="mb-3 text-sm leading-6 text-[#6B6459] line-clamp-2">
                          {getFirstSentence(entry.definition)}
                        </p>
                        <div className="flex items-center gap-1.5 text-sm font-medium text-[#7C3AED]">
                          <span>Read more</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] md:p-16">
              <span
                aria-hidden
                className={`${serif} absolute -bottom-12 -right-2 rotate-12 text-[180px] italic leading-none text-white/10`}
              >
                ✦
              </span>
              <h2 className="relative z-10 mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Put these concepts into{' '}
                <span className={`${serif} italic font-normal`}>practice.</span>
              </h2>
              <p className="relative z-10 mx-auto mb-8 max-w-xl text-lg leading-8 text-white/75">
                Master AI product photography with Dezygn. From glossary terms
                to real-world results — start creating today.
              </p>
              <a
                href={SIGNUP_URL}
                className="relative z-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
              >
                Start Free
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
};

export default GlossaryIndexPage;
