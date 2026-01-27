import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Globe,
  Upload,
  ShoppingBag,
  Palette,
  FolderOpen,
  Layers,
} from 'lucide-react';
import HeaderV3 from '../../components/HeaderV3';
import FooterV3 from '../../components/FooterV3';

const FEATURES = [
  {
    title: '1-Click URL Import',
    description:
      'Paste any website URL and Dezygn extracts the full brand identity — colors, fonts, tone, imagery style — in one click.',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: 'Shopify Product Import',
    description:
      'Import product visuals directly from a Shopify URL. Product images, descriptions, and variants are pulled automatically.',
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    title: 'Manual Upload',
    description:
      'Upload product photos, brand assets, or reference images directly. Drag and drop or bulk upload — whatever works for you.',
    icon: <Upload className="w-5 h-5" />,
  },
  {
    title: 'Brand Identity Extraction',
    description:
      'Colors, typography, visual tone, and style guidelines are captured from your URL and stored as a reusable brand profile.',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: 'Per-Brand Campaigns',
    description:
      'Organize work by brand. Each brand gets its own profile, assets, and campaigns — ideal for agencies managing multiple clients.',
    icon: <FolderOpen className="w-5 h-5" />,
  },
  {
    title: 'Product Visual Import',
    description:
      'Import product images from Shopify URLs or upload directly. Every asset is organized and ready for Awa to use in generation.',
    icon: <Layers className="w-5 h-5" />,
  },
];

const BrandImportPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Brand Import — 1-Click Brand Identity Import | Dezygn</title>
        <meta
          name="description"
          content="Import your full brand identity with one URL. Dezygn extracts colors, fonts, and visual style automatically. Import products from Shopify or upload manually."
        />
        <link rel="canonical" href="https://dezygn.com/features/brand-import" />
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
              <li className="text-gray-300">Brand Import</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Brand Import</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            One URL.{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full Brand Identity.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Paste a website URL and Dezygn extracts the complete brand identity
            — colors, fonts, tone, imagery style. Import products from Shopify
            or upload directly.
          </p>
          <a
            href="https://chat.dezygn.com/login"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Import a Brand
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* How It Works */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How it works
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-14">
            Three ways to get your brand and products into Dezygn — all
            designed to be fast and frictionless.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                step: '01',
                title: 'Paste a URL',
                description:
                  'Enter your website or Shopify store URL. Dezygn crawls the page and extracts brand elements automatically.',
              },
              {
                step: '02',
                title: 'Review & Confirm',
                description:
                  'Colors, typography, tone, and product images are presented for your review. Adjust anything before saving.',
              },
              {
                step: '03',
                title: 'Start Creating',
                description:
                  'Your brand profile is ready. Awa uses it for every generation — on-brand results from the first prompt.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Import capabilities
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-14">
            Whether you manage one brand or twenty, Brand Import keeps
            everything organized and ready to use.
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
              On-brand from the first image
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Stop describing your brand from scratch every session. Import it
              once, and let Awa handle the rest.
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

export default BrandImportPage;
