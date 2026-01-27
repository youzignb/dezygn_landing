import { ArrowRight, DollarSign, Target, Layers, FileText, Camera, Image, Award, Search, Mail, Sparkles, Eye, Share2, Brain, Star, Shield, Check, ChevronRight, Video } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const AgencyPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>For Freelancers &amp; Agencies — Build Your AI Photography Business | Dezygn</title>
        <meta name="description" content="Your design skills aren't obsolete — they're your competitive edge. Learn how to build a profitable AI photography agency with Dezygn's platform, course, and business resources." />
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
            For Freelancers &amp; Agencies
          </div>

          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-6">
            Your Design Skills Aren't Obsolete.{' '}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              They're Your Competitive Edge.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-10">
            AI does 80% of the work. That part is a commodity.{' '}
            <span className="text-white font-medium">You do the last 20%</span> — the brand alignment, quality control, professional judgment.{' '}
            <span className="text-white font-medium">That's where all the money is.</span>
          </p>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group mb-4"
          >
            Join Dezygn
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-600 text-sm">30-day money-back guarantee. Cancel anytime.</p>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE OPPORTUNITY */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              The Opportunity
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              A{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                $60 Billion
              </span>
              {' '}Market Gap
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              E-commerce product photography is a massive market. And right now, there's a gaping hole between "too expensive" and "AI slop."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">Too Expensive</p>
              <p className="text-white font-bold text-lg mb-2">Traditional Photographers</p>
              <p className="text-gray-400 text-sm leading-relaxed">$500–$5,000 per day. Models, studio rental, retouching. Most e-commerce brands can't justify the cost for every product line.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">Too Cheap</p>
              <p className="text-white font-bold text-lg mb-2">DIY AI Tools</p>
              <p className="text-gray-400 text-sm leading-relaxed">Generic output that tanks brand trust. 6-fingered hands, plastic skin, off-brand styling. Brands know it's AI slop — and so do their customers.</p>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-purple-500/20 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto text-center">
            <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">The Gap</p>
            <p className="text-2xl md:text-3xl font-black text-white mb-4">
              Someone who guarantees <span className="text-purple-400">accuracy</span>, <span className="text-purple-400">realism</span>, and <span className="text-purple-400">branding</span>.
            </p>
            <p className="text-lg text-gray-400">
              That someone is <span className="text-white font-medium">you</span>. Dezygn is how you deliver.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE TRANSFORMATION */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              The Transformation
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Stop Selling Hours.{' '}
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Start Selling Outcomes.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0a0a0a] border border-red-500/20 rounded-2xl p-8">
              <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-6">Before Dezygn</p>
              <ul className="space-y-4">
                {[
                  'Competing on price against cheaper freelancers',
                  'Watching clients accept "good enough" AI slop',
                  'Hoping the next AI generation looks better',
                  'Selling hours — income capped by your time',
                  'Identity crisis: "Are my skills worthless?"',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a0a0a] border border-green-500/20 rounded-2xl p-8">
              <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-6">After Dezygn</p>
              <ul className="space-y-4">
                {[
                  'Engineering visual assets with a repeatable system',
                  'Charging for accuracy, brand safety, and results',
                  'Delivering commercial-grade imagery in hours, not weeks',
                  'Selling outcomes — retainers that scale',
                  'Your taste and eye are the moat AI can\'t replicate',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE SKILL — COURSE MODULES */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              The Skill
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              What You'll{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Master
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The "Conversion Photography System" — 6 modules that take you from beginner to certified AI product photographer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: Layers,
                title: 'Visual Syntax Foundation',
                desc: 'The 6-ingredient framework to deconstruct any image and recreate it with AI. This is the core skill that separates professionals from prompt-guessers.',
              },
              {
                num: '02',
                icon: FileText,
                title: 'Client Workflow',
                desc: 'From intake form to final delivery — R&D process, quality checks, feedback calls, revision management. The complete client service system.',
              },
              {
                num: '03',
                icon: Camera,
                title: 'Studio Shots',
                desc: 'Packshots, hero shots, detail close-ups, sizing guides, and feature maps. The bread-and-butter deliverables every e-commerce brand needs.',
              },
              {
                num: '04',
                icon: Target,
                title: 'Conversion Shots',
                desc: 'Transformation shots, proof shots, comparison charts, trust cards — the images that don\'t just look good, they drive purchases.',
              },
              {
                num: '05',
                icon: Image,
                title: 'Lifestyle & UGC',
                desc: 'Action shots, hand scale, flat lays, brand shots — lifestyle imagery that builds trust without shipping products to influencers.',
              },
              {
                num: '06',
                icon: Award,
                title: 'Portfolio & Certification',
                desc: 'Submit a graded portfolio. Prove mastery. Get Dezygn-certified. Stand out from every other AI tool user on the market.',
              },
            ].map((mod) => (
              <div
                key={mod.num}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <mod.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-gray-600 tracking-widest">MODULE {mod.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{mod.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE BUSINESS RESOURCES */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              Business Resources
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Everything You Need to{' '}
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Land Clients
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              6 business bonuses included with your membership. Not theory — real SOPs, templates, and systems battle-tested by the founder's own agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Niche Selection Kit',
                desc: 'Profitable niches ranked by revenue potential — golf, supplements, jewelry, home goods. Plus niches to avoid and why.',
              },
              {
                icon: Image,
                title: 'Portfolio Builder',
                desc: 'Build a credible portfolio fast, without waiting for clients. Look established from day one using the AI portfolio method.',
              },
              {
                icon: FileText,
                title: 'Profile & Website Templates',
                desc: 'Upwork profile copy, website structure, and positioning templates. Proven to attract the right clients.',
              },
              {
                icon: DollarSign,
                title: 'Pricing & Offer Framework',
                desc: 'Per-image pricing, retainer structures, and the foot-in-the-door "free lifestyle shot" method that opens doors to bigger contracts.',
              },
              {
                icon: Search,
                title: 'Lead Generation System',
                desc: 'LLM-powered lead finding, Apollo walkthrough, qualification criteria — so you only chase deals worth winning.',
              },
              {
                icon: Mail,
                title: 'Outreach & Client Management',
                desc: 'The "free lifestyle shot" email approach, Upwork method, upsell path from first gig to monthly retainer.',
              },
            ].map((bonus, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                  <bonus.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{bonus.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE MATH */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              <DollarSign className="w-3.5 h-3.5" />
              The Math
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              The Numbers{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Work
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              This isn't "hustle harder" advice. It's math. Real pricing from real projects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: '$53', label: 'per image average' },
              { value: '$639', label: '/month retainer (12 images)' },
              { value: '$99', label: '/month Dezygn cost' },
              { value: '6x', label: 'ROI from 1 client' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
                <p className="text-2xl md:text-3xl font-black text-green-400 mb-1">{stat.value}</p>
                <p className="text-gray-400 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-6">Scale Path</h3>
            <div className="space-y-6">
              {[
                {
                  clients: '1 client',
                  revenue: '$640/month',
                  note: 'Covers your Dezygn subscription 6x over. Course ROI in month 1.',
                },
                {
                  clients: '3 clients',
                  revenue: '$1,920/month',
                  note: 'Part-time income replacement. Still plenty of capacity.',
                },
                {
                  clients: '5 clients',
                  revenue: '$3,200/month',
                  note: 'Full-time income replacement for most freelancers.',
                },
              ].map((tier, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 pb-6 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 md:w-40 flex-shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-white font-medium">{tier.clients}</span>
                  </div>
                  <p className="text-green-400 font-bold text-lg md:w-40 flex-shrink-0">{tier.revenue}</p>
                  <p className="text-gray-400 text-sm">{tier.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE PLATFORM */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              The Platform
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Your AI{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Creative Suite
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to serve clients — from generation to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: 'Dezygn AI Creative Suite',
                desc: 'Unlimited brands and campaigns. Full creative control over every generation.',
              },
              {
                icon: Brain,
                title: 'Awa AI Creative Director',
                desc: '12+ specialized skills, Claude reasoning, vision-based refinement. She plans, verifies, and executes.',
              },
              {
                icon: Eye,
                title: 'Studio & Comparison Mode',
                desc: 'Review, compare, rate AI generations. Built for professional QC workflows.',
              },
              {
                icon: Image,
                title: 'Gallery with Filtering',
                desc: 'Pinterest-style gallery. Filter by rating, campaign, brand. Find any image instantly.',
              },
              {
                icon: Share2,
                title: 'Client Sharing',
                desc: 'Share galleries with watermark protection. Get client feedback without file attachments.',
              },
              {
                icon: Video,
                title: 'Video Animation (Beta)',
                desc: 'Turn still images into animated product videos. Early access included.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#0a0a0a] border border-purple-500/20 rounded-2xl p-8 text-center">
            <p className="text-white font-bold text-lg mb-2">2,500 credits/month included</p>
            <p className="text-gray-400 text-sm">Approximately 500 images. Credits roll over. Top-ups available starting at $29.</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOUNDER'S STORY */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img
                src="/bertrand-profile.png"
                alt="Bertrand — Founder of Dezygn"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-purple-500/30"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-4">
                Built From Experience
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I started on Upwork with a fresh account in October 2025. First gig was $50. Then $100. Then $400 with TrendHim, a Danish e-commerce brand. Then a $640/month retainer for a French retro eyewear brand.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Two repeat clients. Always 5 stars. Every feature in Dezygn was built because I needed it myself — brand import, the studio, comparison mode, client sharing.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                This isn't built from theory. It's built from doing the work, every single day.
              </p>
              <div>
                <p className="text-white font-semibold">Bertrand</p>
                <p className="text-gray-500 text-sm">Founder of Dezygn &middot; AI Photography Agency Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SOCIAL PROOF */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              What Our Users Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Just got this contract… Potential earning here is $2,000+',
                name: 'Milan',
                role: 'Freelancer',
                img: 'https://www.upwork.com/profile-portraits/c1C0jvfaaxrjRXgvxDIOAUm3bMhbJjqqIeoMek_2TTijZyaSfWbFRsXirPIBSDnBAF',
              },
              {
                quote: 'Replaced a $4,800 shoot with 60-second AI photos.',
                name: 'Bruce',
                role: 'Founder of CinChili',
                img: 'https://ui-avatars.com/api/?name=Bruce&background=7c3aed&color=fff&size=96',
              },
              {
                quote: 'Out of 15 providers tested, best accuracy and realism.',
                name: 'Client',
                role: 'Verified Review',
                img: 'https://ui-avatars.com/api/?name=C&background=7c3aed&color=fff&size=96',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-white text-lg leading-relaxed mb-8 flex-1">
                  "{t.quote}"
                </p>
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
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8">
            Start Your Agency.{' '}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              Keep Your Edge.
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
            Platform. Course. Business resources. Community. Everything you need to build a premium AI photography agency — for $99/month.
          </p>

          <div className="flex items-center justify-center gap-2 mb-8 p-3 bg-green-500/5 border border-green-500/20 rounded-xl max-w-xs mx-auto">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">30-Day Money-Back Guarantee</span>
          </div>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group"
          >
            Start Your Agency
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-gray-600 text-sm">Cancel anytime. No long-term contracts.</p>
        </div>
      </section>

      <FooterV3 />
    </div>
  );
};

export default AgencyPage;
