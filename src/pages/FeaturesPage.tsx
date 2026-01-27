import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Sparkles, Brain, Image, Globe, Camera, Share2, Video } from 'lucide-react';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const features = [
  {
    title: 'Awa AI Creative Director',
    description: '12+ specialized skills including internet search, prompt enhancement, and vision-based refinement. Powered by Claude reasoning — she plans, verifies, and executes on brand, every time.',
    icon: Brain,
    to: '/features/awa',
    highlights: ['Claude reasoning engine', '12+ creative skills', 'Vision-based refinement', 'Brand-aware generation'],
  },
  {
    title: 'Studio & Gallery',
    description: 'Full-size image review, rating system, side-by-side comparison mode, and a beautiful gallery to manage all your creations. Filter, sort, and share — built for production workflows.',
    icon: Image,
    to: '/features/studio',
    highlights: ['Comparison mode', 'Rating system', 'Client sharing', 'Watermark protection'],
  },
  {
    title: 'Brand Import',
    description: 'One-click URL import pulls your full brand identity — colors, fonts, logo, visual style. Every image Dezygn creates stays on-brand without manual setup.',
    icon: Globe,
    to: '/features/brand-import',
    highlights: ['1-click URL import', 'Shopify integration', 'Brand DNA extraction', 'Unlimited brands'],
  },
];

const additionalFeatures = [
  { icon: Camera, title: 'Unlimited Campaigns', description: 'Organize work by product, season, or client. No limits.' },
  { icon: Share2, title: 'Client Collaboration', description: 'Share pages with watermarks. Clients rate and leave notes directly.' },
  { icon: Video, title: 'Video Animation', description: 'Turn your AI images into animated product videos. Beta feature.' },
  { icon: Sparkles, title: '2,500 Credits/Month', description: 'Generate ~500 images monthly. Credits roll over — you never lose them.' },
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Features — AI Creative Suite | Dezygn</title>
        <meta
          name="description"
          content="Dezygn's AI Creative Suite: Awa AI Creative Director, Studio & Gallery, Brand Import, and more. Everything you need for professional AI product photography."
        />
        <link rel="canonical" href="https://dezygn.com/features" />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Features</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            The AI Creative{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Suite
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to create accurate, realistic, and on-brand AI product photography — from brand import to client delivery.
          </p>
        </section>

        {/* Core Feature Cards */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.to}
                to={feature.to}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {feature.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {feature.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1.5 text-sm text-purple-400 group-hover:text-purple-300 transition-colors mt-auto">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">And more built in</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((f) => (
              <div
                key={f.title}
                className="bg-white/[0.02] border border-white/5 rounded-xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 mx-auto mb-4">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See it in action
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Start creating studio-quality AI product photography today. $99/month, 30-day money-back guarantee.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
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

export default FeaturesPage;
