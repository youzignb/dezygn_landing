import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Image,
  Star,
  Columns,
  Filter,
  Maximize,
  Grid3X3,
} from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';

const FEATURES = [
  {
    title: 'Full-Size Image Review',
    description:
      'Open any image at full resolution to inspect details, textures, and overall quality before sharing or exporting.',
    icon: <Maximize className="w-5 h-5" />,
  },
  {
    title: 'Rating System',
    description:
      'Rate images as you review them. Star your best work to quickly surface top picks from hundreds of generations.',
    icon: <Star className="w-5 h-5" />,
  },
  {
    title: 'Comparison Mode',
    description:
      'Side-by-side comparison of source images versus AI results. See exactly what changed and verify quality at a glance.',
    icon: <Columns className="w-5 h-5" />,
  },
  {
    title: 'Filter by Rating & Chat',
    description:
      'Filter your gallery by star rating or by chat session to find exactly what you need without scrolling.',
    icon: <Filter className="w-5 h-5" />,
  },
  {
    title: 'Beautiful Gallery View',
    description:
      'A clean, responsive gallery that showcases your work. Designed for reviewing large volumes of images efficiently.',
    icon: <Grid3X3 className="w-5 h-5" />,
  },
  {
    title: 'Source vs AI Result',
    description:
      'Every generated image is linked to its source. Toggle between original and AI output to evaluate transformations.',
    icon: <Image className="w-5 h-5" />,
  },
];

const StudioPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Studio & Gallery — Review, Compare, Rate | Dezygn</title>
        <meta
          name="description"
          content="Full-size image review, rating system, side-by-side comparison mode, and gallery filtering. Dezygn's Studio gives you complete control over your AI photography output."
        />
        <link rel="canonical" href="https://dezygn.com/features/studio" />
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
              <li>
                <Link to="/features" className="hover:text-gray-300 transition-colors">
                  Features
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Studio & Gallery</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <Image className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Studio & Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Review, Compare,{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rate
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            A full-featured gallery built for AI photography workflows. Inspect
            full-size images, compare source vs result side-by-side, and filter
            by rating or chat.
          </p>
          <a
            href="https://chat.dezygn.com/login"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Open Studio
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Built for high-volume review
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-14">
            When you're generating hundreds of images per campaign, you need
            tools that make review fast and precise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See your images the way they deserve
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Stop squinting at thumbnails. Review, rate, and compare at full
              resolution — then deliver only your best work.
            </p>
            <a
              href="https://chat.dezygn.com/login"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
};

export default StudioPage;
