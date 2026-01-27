import { ArrowRight, AlertTriangle, RotateCcw, TrendingDown, Eye, Target, Palette, Camera, BarChart3, Sparkles, Image, Globe, Package, Share2, Star, Shield, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>For E-commerce Brands — AI Product Photography | Dezygn</title>
        <meta name="description" content="Professional product photography without the photoshoot. Dezygn bridges the gap between expensive traditional shoots and generic AI slop — accurate, realistic, on-brand imagery that converts." />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap');
      `}</style>

      <HeaderV3 />

      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            For E-commerce Brands
          </div>

          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-6">
            Professional Product Photography.{' '}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              Without the Photoshoot.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-10">
            E-commerce brands need conversion-driving imagery. Traditional shoots cost $1,000–$5,000 per product line. Generic AI tools produce off-brand slop.{' '}
            <span className="text-white font-medium">Dezygn bridges the gap.</span>
          </p>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group"
          >
            See Pricing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE PROBLEM */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Bad Product Images{' '}
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Cost You Sales
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The data is clear — product imagery directly impacts conversion rates, return rates, and brand trust. Here's where most brands are stuck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: RotateCcw,
                stat: '22%',
                statColor: 'text-red-400',
                label: 'of returns are due to product not matching the image',
                desc: 'Inaccurate imagery erodes trust and drives expensive returns that eat into margins.',
              },
              {
                icon: TrendingDown,
                stat: '47–53%',
                statColor: 'text-green-400',
                label: 'better conversion rates with lifestyle product photography',
                desc: 'Lifestyle imagery outsells plain packshots by a wide margin — but most brands can\'t afford to produce it.',
              },
              {
                icon: AlertTriangle,
                stat: '$1K–$5K',
                statColor: 'text-yellow-400',
                label: 'per product line for traditional photoshoots',
                desc: 'Studio rental, photographer, models, styling, retouching. A single shoot costs more than most brands\' monthly ad budget.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <item.icon className="w-5 h-5 text-gray-400" />
                </div>
                <p className={`text-3xl font-black mb-2 ${item.statColor}`}>{item.stat}</p>
                <p className="text-white font-medium text-sm mb-3">{item.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <p className="text-white font-bold mb-2">Stock photography is dead</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Consumers recognize stock photos instantly. They signal "we didn't care enough to create our own imagery." In a market where trust drives purchases, stock is a liability.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <p className="text-white font-bold mb-2">Generic AI tools produce "AI slop"</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                6-fingered hands. Plastic skin. Off-brand styling. Warped products. Generic AI generates images that actively damage your brand's credibility — the opposite of what you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT YOU ACTUALLY NEED */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              The Three Pillars
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              What You{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Actually Need
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              AI-generated product photography only works when it nails three things. Miss any one, and you're wasting money.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                num: '01',
                title: 'Accuracy',
                desc: 'Does the image represent product dimensions, colors, and textures faithfully? This is critical for e-commerce. A 4mm pendant on a 50cm chain needs to look exactly right — generic AI can\'t handle this level of precision.',
                example: 'Example: Mapping "45cm chain = tight around neck base" to get proportions right in every image.',
              },
              {
                icon: Target,
                title: 'Realism',
                num: '02',
                desc: 'Do AI-generated people look real? No plastic skin, no uncanny valley, no anatomical errors. Style, lighting, and camera technique all matter — the difference between "obviously AI" and "shot on a Canon R5."',
                example: 'Example: Skin texture, hair detail, fabric drape — every element needs to pass the scrutiny test.',
              },
              {
                icon: Palette,
                title: 'On-Brand',
                num: '03',
                desc: 'Does the imagery incorporate your brand identity? A Danish brand needs Danish interiors. A luxury brand needs luxury styling. This requires hours of research into your market, aesthetic, and competitors.',
                example: 'Example: Researching Douglas fir flooring, Nordic light, and Scandinavian furniture for a Danish brand.',
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-gray-600 tracking-widest">PILLAR {pillar.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{pillar.desc}</p>
                <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-xl">
                  <p className="text-gray-300 text-xs leading-relaxed">{pillar.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT YOU GET WITH DEZYGN */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              The Dezygn Difference
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              What You Get with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Dezygn
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A complete AI photography system built for e-commerce — not a generic image generator with a filter on top.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Camera,
                title: 'Studio Shots',
                items: ['Packshots on white/custom backgrounds', 'Hero shots for PDPs and ads', 'Detail close-ups for texture and material', 'Sizing guides with accurate proportions'],
              },
              {
                icon: BarChart3,
                title: 'Conversion Shots',
                items: ['Comparison charts (before/after, vs competitor)', 'Trust cards with social proof overlays', 'Ingredient and feature spotlights', 'Images engineered to drive purchases'],
              },
              {
                icon: Image,
                title: 'Lifestyle & UGC',
                items: ['Action shots in real-world settings', 'Hand-scale and size reference imagery', 'Flat lays for social media', 'No shipping products to influencers'],
              },
              {
                icon: Sparkles,
                title: 'Awa AI Creative Director',
                items: ['12+ specialized skills including internet search', 'Prompt enhancement and vision-based refinement', '1-click brand import from any URL', 'Product import via Shopify URL'],
              },
            ].map((block, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                  <block.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">1-Click Brand Import</h3>
                <p className="text-gray-400 text-sm">Paste any URL. Your brand identity — colors, style, tone — extracted automatically.</p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Shopify Product Import</h3>
                <p className="text-gray-400 text-sm">Paste a Shopify product URL. All product assets imported instantly — ready for generation.</p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Studio with Comparison Mode</h3>
                <p className="text-gray-400 text-sm">Review, compare, rate, and iterate on AI generations. Built for professional QC workflows.</p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Client Sharing</h3>
                <p className="text-gray-400 text-sm">Share galleries with watermark protection. Get feedback and approval without file attachments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* REAL RESULTS */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              Real Results
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Proof, Not{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Promises
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                quote: 'Just got this contract… Potential earning here is $2,000+',
                name: 'Milan',
                role: 'Freelancer',
                img: 'https://www.upwork.com/profile-portraits/c1C0jvfaaxrjRXgvxDIOAUm3bMhbJjqqIeoMek_2TTijZyaSfWbFRsXirPIBSDnBAF',
                detail: 'Landed a $2,000+ product photography contract using Dezygn.',
              },
              {
                quote: 'Replaced a $4,800 shoot with 60-second AI photos.',
                name: 'Bruce',
                role: 'Founder of CinChili',
                img: 'https://ui-avatars.com/api/?name=Bruce&background=7c3aed&color=fff&size=96',
                detail: 'Traditional shoot quote: $4,800. Dezygn result: equivalent quality in under a minute.',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-white text-lg leading-relaxed mb-3">"{t.quote}"</p>
                <p className="text-gray-500 text-sm mb-6">{t.detail}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
              <p className="text-3xl font-black text-green-400 mb-1">$53</p>
              <p className="text-gray-400 text-sm">per image (retainer model)</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
              <p className="text-3xl font-black text-green-400 mb-1">$639</p>
              <p className="text-gray-400 text-sm">/month retainer for 12 images</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
              <p className="text-3xl font-black text-white mb-1">#1</p>
              <p className="text-gray-400 text-sm">"Out of 15 providers tested, best accuracy and realism"</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8">
            Start Creating{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              Professional Imagery
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
            Join e-commerce brands replacing $5,000 photoshoots with AI-generated imagery that actually converts.
          </p>

          <div className="flex items-center justify-center gap-2 mb-8 p-3 bg-green-500/5 border border-green-500/20 rounded-xl max-w-xs mx-auto">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">30-Day Money-Back Guarantee</span>
          </div>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group"
          >
            Start Creating
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-gray-600 text-sm">Cancel anytime. No long-term contracts.</p>
        </div>
      </section>

      <FooterV3 />
    </div>
  );
};

export default BusinessPage;
