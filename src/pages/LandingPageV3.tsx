import { useState } from 'react';
import { ArrowRight, Star, Globe, MessageSquare, Package, Sparkles, Check, ChevronRight, ChevronDown, Shield, BookOpen, GraduationCap, Award, Briefcase, Mail, TrendingUp, HelpCircle, Users, Eye, Camera, Image, Video, Share2, Search, Brain, Layers, Target, FileText, DollarSign, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderV3 from '../components/HeaderV3';
import AwaVisualization from '../components/AwaVisualization';
import FooterV3 from '../components/FooterV3';

const LandingPageV3 = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'What exactly do I get for $99/month?',
      a: 'Everything. The Dezygn AI Creative Suite (unlimited brands & campaigns, 2,500 credits/month), the full "Conversion Photography System" course (6 modules + 6 bonuses), access to the private Skool community, and all agency business resources — SOPs, templates, lead generation system, pricing frameworks.',
    },
    {
      q: 'How many images can I create?',
      a: '2,500 credits per month, which is approximately 500 images. Credits roll over to the next month, so you never lose what you don\'t use. Need more? Credit top-ups start at $29.',
    },
    {
      q: 'Is there a free trial?',
      a: 'No free trial — but you get a 30-day money-back guarantee. Try everything for a full month. If it\'s not for you, email us for a complete refund. Zero risk.',
    },
    {
      q: 'What is Awa?',
      a: 'Awa is your AI Creative Director built into Dezygn. She has 12+ specialized skills including internet search, prompt enhancement, and vision-based refinement powered by Claude reasoning. She plans, verifies, and executes — on brand, every time.',
    },
    {
      q: 'Can I use this for client work?',
      a: 'Absolutely — that\'s the entire point. You get full commercial rights to everything you create. Dezygn is built specifically for freelancers and agencies doing client work.',
    },
    {
      q: 'What kind of results do users get?',
      a: 'Milan landed a $2,000+ product photography contract. Our retainer model pricing: $639/month for 12 images = $53/image. The course teaches you exactly how to land and price these deals.',
    },
    {
      q: 'What\'s in the course?',
      a: '6 core modules covering Visual Syntax Foundation, Client Workflow, Studio Shots, Conversion Shots, Lifestyle & UGC Shots, and Portfolio Certification. Plus 6 business bonuses: Niche Selection, Portfolio Builder, Profile & Website Templates, Pricing Framework, Lead Generation System, and Outreach & Client Management.',
    },
    {
      q: 'Do credits roll over?',
      a: 'Yes. Unused credits roll over to the next month. You never lose what you don\'t use.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Import Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap');

        .animated-gradient {
          background: linear-gradient(120deg, #a855f7 0%, #3b82f6 50%, #a855f7 100%);
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .float-animation-delayed {
          animation: float 6s ease-in-out 3s infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @keyframes scan {
          0% { top: -20%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .scanline-purple {
          background: linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.1), transparent);
        }
      `}</style>

      <HeaderV3 />

      {/* ============================================ */}
      {/* SECTION 1: HERO */}
      {/* ============================================ */}
      <main className="relative flex flex-col items-center pt-32 md:pt-40 pb-8">

        {/* Centered Content */}
        <div className="w-full max-w-3xl px-6 flex flex-col items-center text-center z-10">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            The AI Photography Platform
          </div>

          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-6">
            Create professional e‑commerce photography with AI.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-blue-300">
              Build a profitable agency.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mb-10">
            The all‑in‑one platform for AI product photographers — creative suite, certification course, agency playbook, and community.
          </p>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group mb-4"
          >
            Start Creating — Risk Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-600 text-sm mb-12">30-day money-back guarantee. Cancel anytime.</p>

          {/* Testimonial */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 mb-16">
            <div className="relative flex-shrink-0">
              <img
                src="https://www.upwork.com/profile-portraits/c1C0jvfaaxrjRXgvxDIOAUm3bMhbJjqqIeoMek_2TTijZyaSfWbFRsXirPIBSDnBAF"
                alt="Milan"
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-[#0a0a0a] flex items-center justify-center w-4 h-4">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-medium text-sm">Milan</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-snug">
                "Just landed a <span className="text-green-400 font-medium">$2,000+</span> product photography contract using Dezygn."
              </p>
            </div>
          </div>
        </div>

        {/* Awa Visualization — below the fold */}
        <div className="w-full max-w-4xl mx-auto px-6">
          <div className="w-full aspect-[16/9] relative overflow-hidden bg-[#0a0a0a] rounded-2xl border border-white/5">
            <AwaVisualization />
          </div>
        </div>
      </main>

      {/* ============================================ */}
      {/* SECTION 2: SOCIAL PROOF BAR */}
      {/* ============================================ */}
      <section className="relative z-10 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
          <p className="text-gray-400 text-sm md:text-base tracking-wide">
            <span className="text-white font-semibold">200K+ views</span> on our Reddit breakdown
            <span className="mx-3 text-white/20">•</span>
            Users landing <span className="text-green-400 font-semibold">$2,000+</span> contracts
            <span className="mx-3 text-white/20">•</span>
            Built by an agency owner, for agency owners
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: THE PROBLEM */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
            The Hard Truth
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-10">
            AI Is Killing Small Agencies.{' '}
            <br className="hidden md:block" />
            But There is a{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              $60 Billion Opening.
            </span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-6 text-lg text-gray-400 leading-relaxed mb-12">
            <p>
              E-commerce businesses need lifestyle product photography — the kind that drives{' '}
              <span className="text-white font-medium">47–53% better conversion rates</span>.
              Traditional shoots cost $1,000–$5,000 per product line. Most brands can't afford that.
              So they turn to AI — and get generic, off-brand slop that tanks trust.
            </p>
            <p>
              The gap is massive. Businesses need photorealistic, on-brand visuals at scale.
              Generic AI tools can't deliver. And stock photography is dead.
            </p>
          </div>

          <div className="inline-block bg-[#1a1a1a] border border-white/10 rounded-2xl px-8 py-6 mb-12">
            <p className="text-3xl md:text-4xl font-black text-white mb-1">22%</p>
            <p className="text-gray-400 text-sm">of returns are due to product not matching the image</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            They need someone who guarantees <span className="text-white font-medium">accuracy, realism, branding</span>.
            That someone is <span className="text-purple-400 font-semibold">you</span>.
            Dezygn is how you do it.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: HOW IT WORKS */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              From Brand Brief to Delivered{' '}
              <br className="hidden md:block" />
              Images in{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Minutes
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: '01',
                icon: Globe,
                title: 'Import Your Brand',
                desc: 'One click. Paste any URL. Brand identity extracted.',
              },
              {
                step: '02',
                icon: MessageSquare,
                title: 'Launch a Chat',
                desc: 'Create a chat per campaign. Your AI creative director Awa is ready.',
              },
              {
                step: '03',
                icon: Package,
                title: 'Import Your Products',
                desc: 'Paste Shopify URL. All assets imported instantly.',
              },
              {
                step: '04',
                icon: Sparkles,
                title: 'Generate & Deliver',
                desc: 'Tell Awa what you need. Review in Studio. Share with clients.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-gray-600 tracking-widest">STEP {item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <div className="w-full aspect-video rounded-xl bg-[#111] border border-white/5 flex items-center justify-center text-gray-600 text-sm">
                  [SCREENSHOT]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: MORE THAN A TOOL — THREE PILLARS */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              More Than a Tool
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              The Tool. The Training.{' '}
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                The Community.
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dezygn isn't just software. It's a complete system to launch and grow your AI photography agency — tool, course, community, and business resources included.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pillar 1: AI Creative Suite */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">The AI Creative Suite</h3>
              <p className="text-purple-400 text-sm font-medium mb-6">Dezygn App</p>
              <ul className="space-y-3">
                {[
                  { icon: Brain, text: 'Awa AI Creative Director — 12+ skills, Claude reasoning, vision-based refinement' },
                  { icon: Globe, text: '1-click brand import from any URL → full brand identity' },
                  { icon: Package, text: 'Product import via Shopify URL, upload, or Dezygn Eye plugin' },
                  { icon: Image, text: 'Pinterest-style inspiration library' },
                  { icon: Eye, text: 'Studio with comparison mode & client feedback' },
                  { icon: Layers, text: 'Beautiful gallery with filtering by rating, campaign, brand' },
                  { icon: Video, text: 'Video animation (Beta)' },
                  { icon: Share2, text: 'Client sharing with watermark protection' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2: The Course */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">The Course</h3>
              <p className="text-purple-400 text-sm font-medium mb-6">"The Conversion Photography System"</p>
              <p className="text-gray-400 text-sm mb-4">6 core modules that take you from beginner to certified:</p>
              <ul className="space-y-3">
                {[
                  'Visual Syntax Foundation — the 6-ingredient framework',
                  'The Client Workflow — intake to delivery',
                  'Studio Shots — packshots, hero shots, detail close-ups',
                  'Conversion Shots — comparison charts, trust cards',
                  'Lifestyle & UGC — action shots, transformations',
                  'Portfolio & Certification — get certified',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-400 text-xs font-mono mt-1 flex-shrink-0 w-4">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-purple-400 text-xs font-medium uppercase tracking-wider mb-2">+ 6 Business Bonuses</p>
                <p className="text-gray-500 text-sm">Niche selection, portfolio builder, templates, pricing, lead gen, outreach</p>
              </div>
            </div>

            {/* Pillar 3: The Community */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">The Community</h3>
              <p className="text-purple-400 text-sm font-medium mb-6">Private Skool Group</p>
              <ul className="space-y-3">
                {[
                  { icon: Users, text: 'Private community of AI photography experts and agency owners' },
                  { icon: MessageSquare, text: 'Exchange ideas, get feedback on your work, learn from others' },
                  { icon: Star, text: 'Direct access to the founder (Bertrand)' },
                  { icon: TrendingUp, text: 'Networking with agency owners building in the same space' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-purple-500/5 border border-purple-500/10 rounded-xl">
                <p className="text-white text-sm font-medium mb-1">You're not doing this alone.</p>
                <p className="text-gray-400 text-xs">Join a network of designers turning AI into a premium service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: THE COURSE — DEDICATED SECTION */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              <BookOpen className="w-3.5 h-3.5" />
              Included With Your Membership
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Learn the Skill That's{' '}
              <br className="hidden md:block" />
              Worth{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                $60 Billion
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Become a Certified AI Conversion Photographer. 6 modules that take you from zero to charging premium rates.
            </p>
          </div>

          {/* Module cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: '01',
                icon: Layers,
                title: 'Visual Syntax Foundation',
                outcome: 'Master the 6-ingredient framework to deconstruct any image and recreate it with AI.',
              },
              {
                num: '02',
                icon: FileText,
                title: 'The Client Workflow',
                outcome: 'From intake form to final delivery — QC process, feedback calls, revision management.',
              },
              {
                num: '03',
                icon: Camera,
                title: 'Studio Shots',
                outcome: 'Packshots, hero shots, detail close-ups, and sizing guides that sell products.',
              },
              {
                num: '04',
                icon: Target,
                title: 'Conversion Shots',
                outcome: 'Comparison charts, trust cards, ingredient spotlights — the images that drive purchases.',
              },
              {
                num: '05',
                icon: Image,
                title: 'Lifestyle & UGC Shots',
                outcome: 'Action shots, hand scale, proof shots, and transformation images that build trust.',
              },
              {
                num: '06',
                icon: Award,
                title: 'Portfolio & Certification',
                outcome: 'Submit a graded portfolio. Get certified. Stand out from every other AI tool user.',
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
                <p className="text-gray-400 text-sm leading-relaxed">{mod.outcome}</p>
              </div>
            ))}
          </div>

          {/* Bonuses block */}
          <div className="bg-[#0a0a0a] border border-purple-500/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">+ 6 Business Bonuses</h3>
                <p className="text-gray-400 text-sm">Everything you need to run your agency</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Target, title: 'Niche Selection Kit', desc: 'Profitable niches, revenue criteria, market sizing' },
                { icon: Image, title: 'Portfolio Builder', desc: 'Fast AI portfolio build process — look established from day 1' },
                { icon: FileText, title: 'Profile & Website Templates', desc: 'Upwork profile copy, website templates ready to use' },
                { icon: DollarSign, title: 'Pricing & Offer Framework', desc: 'Per-image pricing, retainer structures, foot-in-the-door method' },
                { icon: Search, title: 'Lead Generation System', desc: 'LLM-powered lead finding, Apollo walkthrough, qualification criteria' },
                { icon: Mail, title: 'Outreach & Client Management', desc: '"Free lifestyle shot" approach, Upwork method, upsell path' },
              ].map((bonus, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <bonus.icon className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium mb-1">{bonus.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{bonus.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: AGENCY RESOURCES */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              <Briefcase className="w-3.5 h-3.5" />
              Agency Business Resources
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Run Your Agency{' '}
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Like a Business
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything I'm learning as I grow my own AI photography agency, I share with you. Real SOPs. Real templates. Real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: FileText,
                title: 'Real Outreach SOPs',
                desc: 'The exact standard operating procedures used by the founder\'s own agency. Not theory — battle-tested processes.',
              },
              {
                icon: Mail,
                title: 'Email Templates That Work',
                desc: 'The "free lifestyle shot" hook that gets responses. Cold email sequences that convert strangers into paying clients.',
              },
              {
                icon: Search,
                title: 'Lead Generation System',
                desc: 'LLM-powered lead finding. Apollo walkthrough. Qualification criteria so you only chase deals worth winning.',
              },
              {
                icon: DollarSign,
                title: 'Pricing & Offer Framework',
                desc: 'Per-image pricing, monthly retainers ($639/mo for 12 images), and the foot-in-the-door method to land bigger contracts.',
              },
            ].map((resource, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                  <resource.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: COMMUNITY */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
            <Users className="w-3.5 h-3.5" />
            Private Community
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Join a Community of{' '}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              AI Photography Experts
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            You're not doing this alone. Connect with designers and agency owners who are building in the same space.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Private Skool Community',
                desc: 'A focused group of AI photography professionals — not a noisy Facebook group.',
              },
              {
                icon: MessageSquare,
                title: 'Peer Feedback on Your Work',
                desc: 'Share your generations, get honest critique, improve faster than working alone.',
              },
              {
                icon: Star,
                title: 'Direct Access to Bertrand',
                desc: 'The founder is active daily. Ask questions, get strategy advice, share wins.',
              },
              {
                icon: TrendingUp,
                title: 'Networking Opportunities',
                desc: 'Connect with agency owners in your niche. Share leads. Collaborate on bigger projects.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 9: TESTIMONIALS */}
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
      {/* SECTION 10: PRICING */}
      {/* ============================================ */}
      <section id="pricing" className="relative bg-black py-24 md:py-32 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              One Plan.{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Everything Included.
              </span>
            </h2>
          </div>

          {/* Main pricing card */}
          <div className="max-w-lg mx-auto bg-[#0a0a0a] border border-purple-500/30 rounded-2xl p-10 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

            <div className="text-center mb-8">
              <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">
                Dezygn Agency
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-black text-white">$99</span>
                <span className="text-gray-400 text-lg">/month</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">or $799/year (save $389)</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Dezygn AI Creative Suite (unlimited brands & campaigns)',
                'Awa AI Creative Director',
                'Studio, Gallery & Client Sharing',
                'Video Animation (Beta)',
                '2,500 credits/month (~500 images)',
                'The Conversion Photography System (full course)',
                '6 Agency Business Bonuses (SOPs, templates, lead gen)',
                'Private Skool Community access',
                'Priority support',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Guarantee badge */}
            <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-green-500/5 border border-green-500/20 rounded-xl">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">30-Day Money-Back Guarantee</span>
            </div>

            <Link
              to="/pricing"
              className="block w-full text-center px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg"
            >
              Start Creating — 30 Day Guarantee
            </Link>
          </div>

          {/* Credit top-ups */}
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-widest">Need more credits?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { credits: '500', price: '$29', oldPrice: '$49' },
              { credits: '2,000', price: '$99', oldPrice: '$179' },
              { credits: '7,500', price: '$299', oldPrice: '$599' },
            ].map((plan, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <p className="text-2xl font-bold text-white mb-1">{plan.credits}</p>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">credits</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-600 line-through text-sm">{plan.oldPrice}</span>
                  <span className="text-white font-bold text-lg">{plan.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 11: 30-DAY GUARANTEE */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-[#0a0a0a] border border-green-500/20 rounded-2xl p-10 md:p-14">
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mx-auto mb-8">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
              30-Day Money-Back{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
                Guarantee
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl mx-auto">
              Try Dezygn for a full 30 days. If it's not for you, email us and we'll refund every penny. No questions asked.
            </p>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              We can do this because we know the tool works. Our users are landing $2,000+ contracts within weeks.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 12: FAQ */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Frequently Asked{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/20 transition-all duration-300"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* A WORD FROM THE FOUNDER */}
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
                A Word From The Founder
              </div>
              <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                "I created Dezygn because I needed a tool to help me serve my own AI lifestyle and product photography clients. Every feature you see was built because I needed it myself — brand import, the studio, comparison mode, client sharing. Then I realized other designers and agencies needed the same thing. So I packaged everything — the tool, the course, the SOPs, the community — into one place. This isn't some Silicon Valley startup guessing what creatives need. This is built by someone doing the work, every single day."
              </blockquote>
              <div>
                <p className="text-white font-semibold">Bertrand</p>
                <p className="text-gray-500 text-sm">Founder of Dezygn • AI Photography Agency Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 13: FINAL CTA */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8">
            Stop Losing Clients to AI Slop.{' '}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              Start Delivering Results.
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Tool. Course. Community. Business resources. Everything you need to build a premium AI photography agency — for $99/month.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group"
          >
            Join Dezygn — Risk Free
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-gray-600 text-sm">30-day money-back guarantee. Cancel anytime.</p>
        </div>
      </section>

      <FooterV3 />

      {/* Sign Up Modal */}
      {showSignupModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowSignupModal(false)}
        >
          <div
            className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-sm mx-4 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Sign up to continue</h2>
            <p className="text-gray-400 mb-6">Create an account to start generating designs with AWA.</p>
            <Link
              to="/pricing"
              className="inline-block w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-colors"
            >
              View Pricing
            </Link>
            <button
              className="mt-4 text-gray-500 hover:text-white transition-colors text-sm"
              onClick={() => setShowSignupModal(false)}
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageV3;
