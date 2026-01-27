import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Camera,
  Palette,
  Zap,
  Layers,
  Sparkles,
  Target,
  Image,
  Brain,
  Package,
  Globe,
  Clock,
  Shield,
  Eye,
  Wand2,
  Settings,
  BarChart3,
  Users,
  Star,
  ChevronRight,
} from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';
import { useCases } from '../../data/use-cases';
import type { UseCase } from '../../data/use-cases';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Palette,
  Zap,
  Layers,
  Sparkles,
  Target,
  Image,
  Brain,
  Package,
  Globe,
  Clock,
  Shield,
  Eye,
  Wand2,
  Settings,
  BarChart3,
  Users,
  Star,
};

function UseCaseContent({ useCase }: { useCase: UseCase }) {
  const relatedUseCaseData = useCases.filter((uc) =>
    useCase.relatedUseCases.includes(uc.slug)
  );

  return (
    <>
      <Helmet>
        <title>{useCase.metaTitle}</title>
        <meta name="description" content={useCase.metaDescription} />
        <link
          rel="canonical"
          href={`https://dezygn.com/use-cases/${useCase.slug}`}
        />
      </Helmet>

      <HeaderV3 />

      <main className="bg-[#050507] text-white pt-24">
        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link
                to="/use-cases"
                className="hover:text-white transition-colors"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-white">{useCase.title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-purple-500/5 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {useCase.heroHeadline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {useCase.heroSubheadline}
            </p>

            {useCase.image && (
              <div className="max-w-4xl mx-auto mt-12">
                <img
                  src={useCase.image}
                  alt={useCase.imageAlt}
                  width={800}
                  height={533}
                  loading="lazy"
                  className="w-full rounded-2xl border border-white/10"
                />
              </div>
            )}
          </div>
        </section>

        {/* Problem / The Challenge */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">
              The Challenge
            </h2>
            <div className="space-y-6 max-w-3xl">
              {useCase.problem.map((paragraph, idx) => (
                <p key={idx} className="text-gray-400 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">
              How Dezygn Solves This
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
              {useCase.solution}
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCase.features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || Sparkles;
                return (
                  <div
                    key={feature.title}
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-6"
                  >
                    <IconComponent className="w-8 h-8 text-purple-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
              {useCase.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center min-w-[180px]"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-purple-500 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-10 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your {useCase.title} Photography?
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                {useCase.cta}
              </p>
              <a
                href="https://chat.dezygn.com/signup"
                className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-medium hover:bg-purple-50 transition-colors"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </section>

        {/* Related Sections */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Related Use Cases */}
            {relatedUseCaseData.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                  Related Use Cases
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedUseCaseData.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/use-cases/${related.slug}`}
                      className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-colors group"
                    >
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {related.heroSubheadline}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Shot Types */}
            {useCase.relatedShotTypes.length > 0 && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                  Related Shot Types
                </h2>
                <div className="flex flex-wrap gap-3">
                  {useCase.relatedShotTypes.map((shotSlug) => (
                    <Link
                      key={shotSlug}
                      to={`/shot-types/${shotSlug}`}
                      className="bg-white/[0.03] border border-white/10 rounded-full px-5 py-2.5 text-sm text-gray-300 hover:border-purple-500/40 hover:text-purple-400 transition-colors"
                    >
                      {shotSlug
                        .split('-')
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(' ')}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterV3 />
    </>
  );
}

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Use Case Not Found | Dezygn</title>
        <meta
          name="description"
          content="The requested use case could not be found."
        />
      </Helmet>

      <HeaderV3 />

      <main className="bg-[#050507] text-white pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Use Case Not Found</h1>
          <p className="text-gray-400 mb-8">
            The use case you are looking for does not exist.
          </p>
          <Link
            to="/use-cases"
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Browse All Use Cases
          </Link>
        </div>
      </main>

      <FooterV3 />
    </>
  );
}

export default function UseCasePage() {
  const { slug } = useParams<{ slug: string }>();
  const useCase = useCases.find((uc) => uc.slug === slug);

  if (!useCase) {
    return <NotFound />;
  }

  return <UseCaseContent useCase={useCase} />;
}
