import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { ShotType, shotTypes } from '../../data/shot-types';
import { useCases } from '../../data/use-cases';
import { ArrowRight, Camera, Lightbulb, CheckCircle2, ChevronRight } from 'lucide-react';

const ShotTypePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const shotType: ShotType | undefined = shotTypes.find(
    (st) => st.slug === slug
  );

  if (!shotType) {
    return (
      <div className="min-h-screen bg-[#050507] text-white flex flex-col">
        <HeaderV3 />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Shot Type Not Found</h1>
            <p className="text-gray-400 mb-8">
              The shot type you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>
        <FooterV3 />
      </div>
    );
  }

  const relatedShots = shotType.relatedShotTypes
    .map((relSlug) => shotTypes.find((st) => st.slug === relSlug))
    .filter((st): st is ShotType => st !== undefined);

  const relatedUseCaseItems = shotType.relatedUseCases
    .map((relSlug) => useCases.find((uc) => uc.slug === relSlug))
    .filter((uc) => uc !== undefined);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>{shotType.metaTitle}</title>
        <meta name="description" content={shotType.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/shot-types/${shotType.slug}`}
        />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              to="/shot-types"
              className="hover:text-gray-300 transition-colors"
            >
              Shot Types
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-300">{shotType.title}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Camera className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
                Shot Type
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {shotType.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              {shotType.definition}
            </p>

            {shotType.image && (
              <div className="max-w-4xl mt-12">
                <img
                  src={shotType.image}
                  alt={shotType.imageAlt}
                  width={800}
                  height={533}
                  loading="lazy"
                  className="w-full rounded-2xl border border-white/10"
                />
              </div>
            )}
          </div>
        </section>

        {/* When to Use */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              When to Use This Shot Type
            </h2>
            <div className="space-y-4">
              {shotType.whenToUse.map((scenario, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-lg">{scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Dezygn Creates These */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <Lightbulb className="w-6 h-6 text-purple-400" />
              <h2 className="text-3xl md:text-4xl font-bold">
                How Dezygn Creates These
              </h2>
            </div>
            <div className="max-w-3xl space-y-6">
              {shotType.howDezygn.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-400 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shotType.tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500" />
              <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Create {shotType.title} with AI
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Generate professional {shotType.title.toLowerCase()} in
                  minutes, not hours. Dezygn's AI understands composition,
                  lighting, and brand consistency.
                </p>
                <Link
                  to="https://chat.dezygn.com/signup"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Shot Types */}
        {relatedShots.length > 0 && (
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Related Shot Types
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedShots.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/shot-types/${related.slug}`}
                    className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
                  >
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                      {related.definition}
                    </p>
                    <span className="inline-flex items-center gap-1 text-purple-400 text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Use Cases */}
        {relatedUseCaseItems.length > 0 && (
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Related Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedUseCaseItems.map((useCase) => (
                  <Link
                    key={useCase.slug}
                    to={`/use-cases/${useCase.slug}`}
                    className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors"
                  >
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-purple-400 text-sm font-medium">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <FooterV3 />
    </div>
  );
};

export default ShotTypePage;
