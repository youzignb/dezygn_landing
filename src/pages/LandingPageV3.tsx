import { useState } from 'react';
import { ArrowRight, Star, Globe, MessageSquare, Package, Sparkles, Check, ChevronRight, ChevronDown, Shield, BookOpen, GraduationCap, Award, Briefcase, Mail, TrendingUp, HelpCircle, Users, Eye, Camera, Image, Video, Share2, Search, Brain, Layers, Target, FileText, DollarSign, Zap, Play, X } from 'lucide-react';
import HeaderV3 from '../components/HeaderV3';
import AwaVisualization from '../components/AwaVisualization';
import FooterV3 from '../components/FooterV3';

const LandingPageV3 = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
      <main className="relative flex flex-col items-center pt-40 md:pt-48 pb-8">

        {/* Centered Content */}
        <div className="w-full max-w-3xl px-6 flex flex-col items-center text-center z-10">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
            ● BUILT FOR THE CREATIVE EYE, POWERED BY AI
          </div>

          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-6">
            The Operating System for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-blue-300">
              AI Photography Agencies
            </span>
            .
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mb-10">
            Stop selling "AI slop" and start selling conversion. Use your professional eye to deliver accurate, on-brand product photography that eCom brands actually pay for.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <a
              href="https://chat.dezygn.com/signup"
              className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group"
            >
              Start Creating — Risk Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
              aria-haspopup="dialog"
              aria-expanded={isVideoOpen}
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400/40">
                <Play className="w-4 h-4 text-purple-200" />
              </span>
              Watch the walkthrough
            </button>
          </div>
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

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Product walkthrough video"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6BAavTX4Sow?autoplay=1&controls=0&rel=0&modestbranding=1"
                title="Dezygn walkthrough video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

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
                visual: (
                  <div className="w-full aspect-video rounded-xl bg-[#0b0b0b] border border-white/10 overflow-hidden">
                    <div className="h-8 border-b border-white/10 bg-white/[0.02] flex items-center px-3 gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="text-[10px] text-gray-500 ml-3">Brand Import</span>
                    </div>
                    <div className="p-4 grid gap-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-xs text-gray-400">
                          https://
                          <span className="text-gray-300 ml-1">brand.com</span>
                        </div>
                        <div className="h-8 px-3 rounded-lg bg-purple-500/20 border border-purple-500/30 text-xs text-purple-300 flex items-center">
                          Import
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                          <div className="text-[10px] text-gray-500 mb-2">Logo</div>
                          <div className="h-10 rounded-md bg-gradient-to-br from-purple-500/40 to-blue-400/30" />
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                          <div className="text-[10px] text-gray-500 mb-2">Colors</div>
                          <div className="flex gap-1">
                            {['#A855F7', '#22D3EE', '#F472B6', '#111827'].map((color) => (
                              <span
                                key={color}
                                className="w-5 h-5 rounded-md border border-white/10"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                          <div className="text-[10px] text-gray-500 mb-2">Fonts</div>
                          <div className="h-3 rounded bg-white/10 mb-2" />
                          <div className="h-3 w-3/4 rounded bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                step: '02',
                icon: MessageSquare,
                title: 'Launch a Chat',
                desc: 'One brand, multiple campaigns. Spin up a chat for each product line or launch.',
                visual: (
                  <div className="w-full aspect-video rounded-xl bg-[#0b0b0b] border border-white/10 overflow-hidden">
                    <div className="h-8 border-b border-white/10 bg-white/[0.02] flex items-center px-3 gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500/40" />
                      <span className="text-[10px] text-gray-500">Brand: Solé Skin</span>
                    </div>
                    <div className="p-4 grid grid-cols-3 gap-3">
                      <div className="col-span-1 rounded-xl border border-white/10 bg-black/40 p-3">
                        <div className="text-[10px] text-gray-500 mb-2">Chats</div>
                        <div className="space-y-2 text-[10px] text-gray-400">
                          <div className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">Spring Launch</div>
                          <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-purple-200">Hydration Serum</div>
                          <div className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">UGC Batch</div>
                          <div className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">Retail PDP</div>
                        </div>
                      </div>
                      <div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                        <div className="text-[10px] text-gray-500 mb-2">Hydration Serum</div>
                        <div className="space-y-2">
                          <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-[10px] text-gray-300">
                            Need 4 studio + 2 lifestyle for the serum launch.
                          </div>
                          <div className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-[10px] text-purple-300">
                            Awa: pulling brand kit + scene styles.
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="px-2 py-1 rounded-md text-[10px] bg-white/5 text-gray-300 border border-white/10">New Chat</span>
                          <span className="px-2 py-1 rounded-md text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30">Duplicate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                step: '03',
                icon: Package,
                title: 'Import Your Products',
                desc: 'Paste Shopify URL. All assets imported instantly.',
                visual: (
                  <div className="w-full aspect-video rounded-xl bg-[#0b0b0b] border border-white/10 overflow-hidden">
                    <div className="h-8 border-b border-white/10 bg-white/[0.02] flex items-center px-3 gap-2">
                      <span className="text-[10px] text-gray-500">Import Products</span>
                    </div>
                    <div className="p-4">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                        <div className="text-[10px] text-gray-500 mb-2">Shopify URL</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-7 rounded-md bg-white/5 border border-white/10" />
                          <div className="h-7 px-3 rounded-md bg-purple-500/20 border border-purple-500/30 text-[10px] text-purple-300 flex items-center">
                            Import
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div
                            key={item}
                            className="h-12 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[10px] text-gray-500"
                          >
                            SKU {item}
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-purple-500/60 to-blue-400/60" />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                step: '04',
                icon: Sparkles,
                title: 'Generate with Intelligence',
                desc: 'Awa turns your brief into on-brand images using visual reasoning, not guesswork.',
                visual: (
                  <div className="w-full aspect-video rounded-xl bg-[#0b0b0b] border border-white/10 overflow-hidden">
                    <div className="h-8 border-b border-white/10 bg-white/[0.02] flex items-center px-3 gap-2">
                      <span className="text-[10px] text-gray-500">Awa Chat</span>
                      <span className="text-[10px] text-purple-300">Generating</span>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-end">
                        <div className="max-w-[75%] rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs text-gray-300">
                          Create 6 hero images for the new launch.
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500/30" />
                        <div className="flex-1">
                          <div className="rounded-xl bg-white/[0.03] border border-white/10 px-3 py-2 text-xs text-gray-300">
                            I will lock brand tone and lighting. Running tools now.
                          </div>
                          <div className="mt-2 rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-[10px] text-purple-300">
                            Tool call: prompt.enhance(visual_syntax)
                          </div>
                          <div className="mt-2 rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-[10px] text-purple-300">
                            Tool call: portrait.skill(light_retouch, skin_realism)
                          </div>
                          <div className="mt-2 rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-[10px] text-purple-300">
                            Tool call: vision.verify(brand_score &gt; 92)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                step: '05',
                icon: Eye,
                title: 'Review in Gallery',
                desc: 'Inspect full-size images, add notes, and star your top picks.',
                visual: (
                  <div className="w-full aspect-video rounded-xl bg-[#0b0b0b] border border-white/10 overflow-hidden">
                    <div className="h-8 border-b border-white/10 bg-white/[0.02] flex items-center px-3 gap-2">
                      <span className="text-[10px] text-gray-500">Gallery Review</span>
                      <span className="text-[10px] text-green-400">4★+</span>
                    </div>
                    <div className="p-4 grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                          key={item}
                          className="relative h-14 rounded-lg bg-white/[0.04] border border-white/10 overflow-hidden"
                        >
                          <div className="absolute top-1 left-1 flex items-center gap-1 rounded-full bg-black/60 px-1.5 py-0.5 text-[9px] text-gray-200">
                            <span className="text-yellow-400">★</span>
                            4.8
                          </div>
                        </div>
                      ))}
                      <div className="col-span-3 rounded-xl border border-white/10 bg-white/[0.03] p-2">
                        <div className="text-[10px] text-gray-500 mb-1">Note</div>
                        <div className="h-6 rounded bg-white/5 border border-white/10" />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                step: '06',
                icon: Share2,
                title: 'Share & Feedback',
                desc: 'Share with watermark protection and collect client ratings fast.',
                visual: (
                  <div className="w-full aspect-video rounded-xl bg-[#0b0b0b] border border-white/10 overflow-hidden">
                    <div className="h-8 border-b border-white/10 bg-white/[0.02] flex items-center px-3 gap-2">
                      <span className="text-[10px] text-gray-500">Client Share</span>
                      <span className="text-[10px] text-purple-300">Watermarked</span>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="h-16 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-400/20 border border-white/10 flex items-center justify-center text-[10px] text-white/60">
                        PREVIEW
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] text-gray-300">
                        <span>Client rating</span>
                        <span className="text-yellow-400">★★★★★</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 rounded-md text-[10px] bg-white/5 text-gray-300 border border-white/10">Copy link</span>
                        <span className="px-2 py-1 rounded-md text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30">Send</span>
                      </div>
                    </div>
                  </div>
                ),
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
                {item.visual}
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

          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-10">
              <div className="absolute inset-6 rounded-[26px] border border-white/5 pointer-events-none" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'The Tool', subtitle: 'AI Creative Suite', icon: Sparkles },
                  { title: 'The Training', subtitle: 'Conversion System', icon: GraduationCap },
                  { title: 'The Community', subtitle: 'Agency Network', icon: Users },
                ].map((item) => (
                  <div key={item.title} className="relative rounded-2xl border border-white/10 bg-black/50 p-5 text-center">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-3 text-xs text-gray-400">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Tool</span>
                <span className="text-purple-400">×</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Training</span>
                <span className="text-purple-400">×</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Community</span>
                <span className="text-purple-400">=</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-purple-500/10 text-purple-300">Dezygn</span>
              </div>
            </div>
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
                visual: (
                  <div className="w-full rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="text-[10px] text-gray-500 mb-2">Visual Syntax</div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="h-8 rounded-lg bg-white/5 border border-white/10" />
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['lighting', 'surface', 'props', 'angle', 'mood', 'color'].map((chip) => (
                        <span
                          key={chip}
                          className="px-2 py-1 rounded-full text-[10px] bg-white/5 border border-white/10 text-gray-400"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                num: '02',
                icon: FileText,
                title: 'The Client Workflow',
                outcome: 'From intake form to final delivery — QC process, feedback calls, revision management.',
                visual: (
                  <div className="w-full rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="text-[10px] text-gray-500 mb-2">Workflow</div>
                    <div className="space-y-2">
                      {['Intake', 'Brand DNA', 'Drafts', 'Review', 'Delivery'].map((step, idx) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${idx < 3 ? 'bg-purple-400' : 'bg-white/10'}`} />
                          <div className="h-2 flex-1 rounded bg-white/10" />
                          <span className="text-[10px] text-gray-500">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                num: '03',
                icon: Camera,
                title: 'Studio Shots',
                outcome: 'Packshots, hero shots, detail close-ups, and sizing guides that sell products.',
                visual: (
                  <div className="w-full rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="text-[10px] text-gray-500 mb-2">Studio Set</div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-400/20 border border-white/10"
                        />
                      ))}
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-purple-500/60 to-blue-400/60" />
                    </div>
                  </div>
                ),
              },
              {
                num: '04',
                icon: Target,
                title: 'Conversion Shots',
                outcome: 'Comparison charts, trust cards, ingredient spotlights — the images that drive purchases.',
                visual: (
                  <div className="w-full rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="text-[10px] text-gray-500 mb-2">Conversion Assets</div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="h-10 rounded-lg bg-white/5 border border-white/10" />
                      <div className="h-10 rounded-lg bg-white/5 border border-white/10" />
                    </div>
                    <div className="h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between px-2">
                      <span className="text-[10px] text-gray-500">Trust Score</span>
                      <span className="text-[10px] text-green-400">+38%</span>
                    </div>
                  </div>
                ),
              },
              {
                num: '05',
                icon: Image,
                title: 'Lifestyle & UGC Shots',
                outcome: 'Action shots, hand scale, proof shots, and transformation images that build trust.',
                visual: (
                  <div className="w-full rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="text-[10px] text-gray-500 mb-2">Lifestyle Board</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-400/10 border border-white/10" />
                      <div className="h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-400/10 border border-white/10" />
                      <div className="h-10 rounded-lg bg-white/5 border border-white/10 col-span-2" />
                    </div>
                  </div>
                ),
              },
              {
                num: '06',
                icon: Award,
                title: 'Portfolio & Certification',
                outcome: 'Submit a graded portfolio. Get certified. Stand out from every other AI tool user.',
                visual: (
                  <div className="w-full rounded-xl border border-white/10 bg-black/40 p-4">
                    <div className="text-[10px] text-gray-500 mb-2">Certification</div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30" />
                      <div className="flex-1 space-y-1">
                        <div className="h-2 rounded bg-white/10" />
                        <div className="h-2 w-2/3 rounded bg-white/10" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      Portfolio graded: 94/100
                    </div>
                  </div>
                ),
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
                <div className="mb-5">{mod.visual}</div>
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
                {
                  icon: Target,
                  title: 'Niche Selection Kit',
                  desc: 'Profitable niches, revenue criteria, market sizing',
                  visual: (
                    <div className="h-10 rounded-lg bg-white/5 border border-white/10 grid grid-cols-3 gap-1 p-2">
                      {['golf', 'gym', 'toys'].map((chip) => (
                        <span key={chip} className="rounded bg-black/40 text-[10px] text-gray-400 flex items-center justify-center">
                          {chip}
                        </span>
                      ))}
                    </div>
                  ),
                },
                {
                  icon: Image,
                  title: 'Portfolio Builder',
                  desc: 'Fast AI portfolio build process — look established from day 1',
                  visual: (
                    <div className="h-10 rounded-lg bg-white/5 border border-white/10 grid grid-cols-4 gap-1 p-1">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="rounded bg-gradient-to-br from-purple-500/20 to-blue-400/10" />
                      ))}
                    </div>
                  ),
                },
                {
                  icon: FileText,
                  title: 'Profile & Website Templates',
                  desc: 'Upwork profile copy, website templates ready to use',
                  visual: (
                    <div className="h-10 rounded-lg bg-white/5 border border-white/10 p-2 space-y-1">
                      <div className="h-2 rounded bg-white/10" />
                      <div className="h-2 w-3/4 rounded bg-white/10" />
                      <div className="h-2 w-1/2 rounded bg-white/10" />
                    </div>
                  ),
                },
                {
                  icon: DollarSign,
                  title: 'Pricing & Offer Framework',
                  desc: 'Per-image pricing, retainer structures, foot-in-the-door method',
                  visual: (
                    <div className="h-10 rounded-lg bg-white/5 border border-white/10 p-2 flex items-center justify-between text-[10px] text-gray-400">
                      <span>$49 / image</span>
                      <span className="text-green-400">retainer</span>
                    </div>
                  ),
                },
                {
                  icon: Search,
                  title: 'Lead Generation System',
                  desc: 'LLM-powered lead finding, Apollo walkthrough, qualification criteria',
                  visual: (
                    <div className="h-10 rounded-lg bg-white/5 border border-white/10 p-2 flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-purple-500/20 border border-purple-500/30" />
                      <div className="h-2 flex-1 rounded bg-white/10" />
                    </div>
                  ),
                },
                {
                  icon: Mail,
                  title: 'Outreach & Client Management',
                  desc: '"Free lifestyle shot" approach, Upwork method, upsell path',
                  visual: (
                    <div className="h-10 rounded-lg bg-white/5 border border-white/10 p-2 flex items-center justify-between text-[10px] text-gray-400">
                      <span>Pitch sent</span>
                      <span className="text-purple-300">reply 12%</span>
                    </div>
                  ),
                },
              ].map((bonus, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="mb-3">{bonus.visual}</div>
                  <div className="flex items-start gap-3">
                    <bonus.icon className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium mb-1">{bonus.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{bonus.desc}</p>
                    </div>
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

          <div className="max-w-4xl mx-auto mb-16">
            <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs tracking-[0.3em] text-green-400 uppercase mb-2">Momentum Signals</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Agency Momentum</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full text-xs bg-green-500/10 border border-green-500/20 text-green-300">
                    $12.4k MRR
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">
                    6 retainers
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">
                    4 new leads
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs text-gray-500 mb-3">Monthly Revenue</p>
                  <div className="h-20 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-400/10 border border-white/10" />
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                    <span>$8.2k → $12.4k</span>
                    <span className="text-green-400">+51%</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs text-gray-500 mb-3">Pipeline</p>
                  <div className="space-y-2">
                    {['Discovery', 'Sample Shot', 'Proposal', 'Retainer'].map((stage, idx) => (
                      <div key={stage} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${idx < 3 ? 'bg-green-400' : 'bg-white/10'}`} />
                        <div className="h-2 flex-1 rounded bg-white/10" />
                        <span className="text-[10px] text-gray-500">{stage}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs text-gray-500 mb-3">Invoices</p>
                  <div className="space-y-2">
                    {['Skincare brand — $1,980', 'Golf accessories — $1,250', 'Pet care — $890'].map((row) => (
                      <div key={row} className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-gray-300">
                        <span>{row}</span>
                        <span className="text-green-400">Paid</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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

          <div className="max-w-3xl mx-auto mb-12">
            <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs tracking-[0.3em] text-purple-400 uppercase mb-2">Community Feed</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Active, Helpful, No Noise</h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">312 members</span>
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">24 posts today</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs text-gray-500 mb-3">Top Threads</p>
                  <div className="space-y-2 text-xs text-gray-300">
                    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Rate my studio hero</div>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">UGC prompt fixes</div>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Client feedback call script</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs text-gray-500 mb-3">Member Spotlight</p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30" />
                    <div>
                      <p className="text-sm text-white">Milan — $2k+ contract</p>
                      <p className="text-xs text-gray-500">Before/After share</p>
                    </div>
                  </div>
                  <div className="h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-400/10 border border-white/10" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs text-gray-500 mb-3">Channels</p>
                  <div className="flex flex-wrap gap-2 text-[10px] text-gray-400">
                    {['studio', 'conversion', 'lifestyle', 'pricing', 'leads', 'wins'].map((chip) => (
                      <span key={chip} className="px-2 py-1 rounded-full border border-white/10 bg-white/5">
                        #{chip}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-gray-500">Live critiques weekly</div>
                </div>
              </div>
            </div>
          </div>

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

            <a
              href="https://chat.dezygn.com/signup"
              className="block w-full text-center px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg"
            >
              Try it for $1 Only
            </a>
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
                "Most AI tools are built by engineers who think 'good enough' is fine for brands. It’s not. As a creative agency owner, I know that 'AI hallucinations' and plastic skin don't just look cheap—they kill conversion.

                I built Dezygn for the professionals who refuse to settle. Every feature—from the AWA Design Assistant and the Studio to our Comparison Mode—was forged in the heat of real client deadlines for brands like Trendhim.

                I’ve packaged the software, the SOPs, and the community to give you a defensible edge. We don't just generate images; we engineer assets that sell."
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
          <a
            href="https://chat.dezygn.com/signup"
            className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group"
          >
            Join Dezygn — Risk Free
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
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
            <a
              href="https://chat.dezygn.com/signup"
              className="inline-block w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-colors"
            >
              Try it for $1 Only
            </a>
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
