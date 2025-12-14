import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Minus, 
  Plus, 
  Shield, 
  Users, 
  Zap, 
  DollarSign, 
  Star, 
  Award, 
  X,
  Menu
} from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// --- Mock Layout Components ---
const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-white fill-current" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-gray-900">Dezygn</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-gray-600 hover:text-purple-600 font-medium transition">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 font-medium transition">How it works</a>
        <a href="#pricing" className="text-gray-600 hover:text-purple-600 font-medium transition">Pricing</a>
        <a href="https://app.dezygn.com" className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold hover:scale-105 transition transform">Login</a>
      </div>
      <button className="md:hidden text-gray-900">
        <Menu className="w-8 h-8" />
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-black tracking-tighter text-gray-900">Dezygn</span>
          </div>
          <p className="text-gray-600 max-w-xs">
            Professional AI creative work in minutes. Built for freelancers, by freelancers.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Product</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-purple-600">Features</a></li>
            <li><a href="#" className="hover:text-purple-600">Pricing</a></li>
            <li><a href="#" className="hover:text-purple-600">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#" className="hover:text-purple-600">About</a></li>
            <li><a href="#" className="hover:text-purple-600">Blog</a></li>
            <li><a href="#" className="hover:text-purple-600">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-gray-500 text-sm pt-8 border-t border-gray-200">
        © {new Date().getFullYear()} Dezygn. All rights reserved.
      </div>
    </div>
  </footer>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

// --- Helper Components ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center gap-4 py-6 text-gray-900 hover:text-purple-600 transition-colors"
      >
        <span className="font-bold text-xl">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed text-lg pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

function Badge({ icon: Icon, text, color = 'purple' }: { icon: any, text: string, color?: 'purple' | 'green' | 'blue' | 'yellow' }) {
  const colorClasses = {
    purple: 'bg-purple-100 text-purple-800',
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    yellow: 'bg-yellow-100 text-yellow-900',
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 ${colorClasses[color]} font-bold text-sm uppercase tracking-wider mb-6`}>
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </div>
  );
}

// --- Main Page Component ---
export default function LandingPage() {
  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <title>Professional AI Creative Work in Minutes | Dezygn</title>
          <meta name="description" content="Complete platform for freelancers. Generate client-ready designs, product photos, and videos with AI. No design experience needed." />
        </Helmet>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Decorative Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] opacity-30 pointer-events-none">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-purple-200 via-blue-100 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr from-blue-100 via-purple-100 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-5 relative z-10">
                <div className="inline-flex items-center gap-2 bg-white border border-purple-100 shadow-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-bold text-gray-700">
                    New: AI Video Generation added
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                  Professional AI creative work{' '}
                  <span className="transparent relative">
                    <span className="relative z-10 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">in minutes.</span>
                     <svg className="absolute -bottom-2 left-0 w-full text-yellow-300/80 -z-10" viewBox="0 0 300 20" fill="currentColor" preserveAspectRatio="none">
                      <path d="M3 14C34 9 145 3 297 10" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium max-w-lg">
                  Complete platform for freelancers. Generate client-ready designs, product photos, and videos with AI. <span className="text-gray-900 font-bold bg-yellow-100 px-1">No design experience needed.</span>
                </p>

                <div className="mb-12">
                  <a
                    href="https://dezygn.checkoutpage.com/dezygn-yearly"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img key={i} className="w-10 h-10 rounded-full border-4 border-white shadow-md" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="font-bold text-gray-700">2,000+ freelancers</span>
                  </div>
                </div>
              </div>

              {/* Right Image Area */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100 transform rotate-2 hover:rotate-0 transition-all duration-500 ease-out">
                   <img
                    src="https://vpklpenoffkvztqosbds.supabase.co/storage/v1/object/public/admin-assets/marketing/landing/dezygn-hero.png"
                    alt="Dezygn Platform"
                    className="w-full h-auto object-cover"
                  />
                  {/* Floating UI Elements for effect */}
                  <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Project Complete</p>
                        <p className="text-xs text-gray-500">Just now</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-20 -right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow delay-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Payment Received</p>
                        <p className="text-xs text-green-600 font-bold">+$500.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust / Social Proof Ticker */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-500 font-semibold uppercase tracking-widest mb-8">Trusted by over 2,000 active freelancers</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Testimonial 1 - Milan */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-purple-100 flex flex-col sm:flex-row items-center gap-6 hover:-translate-y-1 transition-all">
                <div className="relative">
                  <img src="https://www.upwork.com/profile-portraits/c1C0jvfaaxrjRXgvxDIOAUm3bMhbJjqqIeoMek_2TTijZyaSfWbFRsXirPIBSDnBAF" alt="Milan" className="w-20 h-20 rounded-full border-4 border-purple-50 object-cover" />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-2 border-white"><Check className="w-3 h-3" /></div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl font-bold text-gray-900 leading-tight mb-2">
                    "Landed a <span className="bg-green-100 text-green-800 px-1">$2,000+ contract</span> using Dezygn in my first week."
                  </p>
                  <p className="text-gray-500 font-medium">— Milan, Product Designer</p>
                </div>
              </div>
              {/* Testimonial 2 - Gerard */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-blue-100 flex flex-col sm:flex-row items-center gap-6 hover:-translate-y-1 transition-all">
                <div className="relative">
                  <img src="https://vpklpenoffkvztqosbds.supabase.co/storage/v1/object/public/admin-assets/marketing/landing/gerard-testimonial-dezygn.webp" alt="Gerard" className="w-20 h-20 rounded-full border-4 border-blue-50 object-cover" />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-2 border-white"><Check className="w-3 h-3" /></div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl font-bold text-gray-900 leading-tight mb-2">
                    "Created a month's worth of content in <span className="bg-blue-100 text-blue-800 px-1">under 30 minutes</span>."
                  </p>
                  <p className="text-gray-500 font-medium">— Gerard, Social Media Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem / Solution Split */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Badge icon={Shield} text="The Reality" color="yellow" />
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                The Freelancer's Dilemma
              </h2>
              <p className="text-xl text-gray-600">
                Having AI skills is great, but it doesn't automatically equal getting paid.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
              {/* Problem Card */}
              <div className="bg-red-50/50 rounded-[2.5rem] p-10 md:p-14 border-2 border-red-100 hover:border-red-200 transition-colors">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-8">
                  <span className="text-4xl">😓</span>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-6">The Struggle</h3>
                <ul className="space-y-6">
                  {[
                    { title: "No leads", desc: "Where do I find people who actually pay for AI design?" },
                    { title: "Wrong focus", desc: "Which services should I even be selling right now?" },
                    { title: "Imposter syndrome", desc: "How do I deliver pro quality without a design degree?" }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-200 rounded-full flex items-center justify-center mt-1">
                        <X className="w-5 h-5 text-red-700" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-700 leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution Card */}
              <div className="bg-green-50/50 rounded-[2.5rem] p-10 md:p-14 border-2 border-green-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8 relative z-10">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">The Dezygn Fix</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    { title: "Daily leads", desc: "See exactly where 3+ qualified clients post jobs every single day." },
                    { title: "Proven templates", desc: "Built-in templates for what clients are paying for right now." },
                    { title: "Pro results instantly", desc: "Agency-level AI tools that make you look like a full creative team." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1 shadow-lg shadow-green-500/30">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                        <p className="text-gray-700 leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (3 Steps) */}
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
          {/* Background mesh */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <Badge icon={Zap} text="3 Simple Steps" color="purple" />
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                From Zero to Paid in 14 Days
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our proven system to help you land your first client fast.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[ 
                { emoji: "🎯", title: "Find Clients", desc: "Discover 3+ qualified leads daily. We show you exactly where jobs are posted online.", badge: "3+ leads/day" },
                { emoji: "✨", title: "Generate with AI", desc: "Use the advanced Dezygn creative suite to create professional work in 5-10 minutes.", badge: "Fast delivery" },
                { emoji: "💰", title: "Get Paid", desc: "Deliver stunning designs and get feedback with our white-label delivery system.", badge: "Secure payments" }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-[2rem] p-10 pt-16 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2">
                    {/* Number Indicator */}
                    <div className="absolute -top-8 left-10 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl rotate-3 flex items-center justify-center text-2xl font-black shadow-lg group-hover:rotate-12 transition-all">
                      {i + 1}
                    </div>
                    
                    <div className="text-5xl mb-6">{step.emoji}</div>
                    <h3 className="text-2xl font-extrabold mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      {step.desc}
                    </p>
                    <span className="inline-block bg-gray-900/50 rounded-lg px-3 py-1 text-sm font-semibold text-purple-300 border border-purple-500/30">
                      {step.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]"
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Freelancers Choose Dezygn */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                Why Freelancers<br />Choose Dezygn
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just a tool—we're your unfair advantage in the freelance marketplace
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl p-10 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg rotate-3">
                    🧬
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Made for freelancers,<br />by freelancers
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    We use Dezygn to win and deliver AI design gigs daily. We live and breathe AI design work.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-purple-600 font-semibold">
                    <Check className="w-5 h-5" />
                    <span>Built by active freelancers</span>
                  </div>
                </div>
              </div>

              {/* Benefit 2 - Featured */}
              <div className="group relative lg:scale-105">
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 duration-300">
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-black shadow-lg rotate-12">
                    MOST POPULAR
                  </div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg -rotate-3">
                    💬
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                    Create 50+ Consistent Assets in 5 Minutes
                  </h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Upload client's brand and assets once. Generate unlimited on-brand designs instantly.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-white font-semibold">
                    <Zap className="w-5 h-5" />
                    <span>Brand DNA technology</span>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl p-10 border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg -rotate-3">
                    ⚡
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Get your first client<br />in 14 days
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Follow our process and win your first client within 14 days, or we double your money back!
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold">
                    <Shield className="w-5 h-5" />
                    <span>Money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Social Proof (Featured Story) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-[3rem] shadow-2xl border-2 border-purple-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Sidebar / Header for Mobile */}
                <div className="lg:col-span-2 bg-gradient-to-br from-purple-700 to-blue-800 p-10 md:p-14 text-white flex flex-col justify-between">
                  <div>
                    <Badge icon={Award} text="Success Story" color="yellow" />
                    <div className="flex items-center gap-4 mb-6">
                      <img src="https://www.upwork.com/profile-portraits/c1C0jvfaaxrjRXgvxDIOAUm3bMhbJjqqIeoMek_2TTijZyaSfWbFRsXirPIBSDnBAF" alt="Milan" className="w-20 h-20 rounded-2xl border-4 border-white/20 shadow-xl object-cover" />
                      <div>
                        <h3 className="text-2xl font-black">Milan</h3>
                        <p className="text-purple-200 font-medium">Product Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-0">
                    <div>
                      <p className="text-3xl font-black">6 Days</p>
                      <p className="text-purple-200 text-sm">To first contract</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black">$2k+</p>
                      <p className="text-purple-200 text-sm">Project value</p>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 p-10 md:p-14 flex flex-col justify-center relative">
                  <div className="absolute top-8 left-8 text-purple-100 text-9xl font-serif leading-none select-none -z-10">"</div>
                  <blockquote className="relative z-10">
                    <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
                      I just got this contract after <span className="text-purple-600 font-black bg-purple-50 px-2">6 days with Dezygn</span>. First 10 products, 10-15 AI images for each. Over 100 products total.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl">
                      <p className="text-gray-600 font-semibold mb-1">Total potential earning:</p>
                      <p className="text-4xl font-black text-green-600">$2,000+</p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Badge icon={DollarSign} text="Simple Pricing" color="blue" />
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600">Start with a 7-day free trial. No credit card required.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
              
              {/* Freelancer Plan - Highlighted */}
              <div className="relative transform lg:scale-105 z-10">
                <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-[2.5rem] blur-sm opacity-70"></div>
                <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl">
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg uppercase tracking-wider">
                    Most Popular
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 mb-2">Freelancer</h3>
                  <p className="text-gray-500 mb-8">For serious creators & solo freelancers.</p>

                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-6xl font-black text-gray-900">$33</span>
                    <span className="text-gray-500 font-medium">/month</span>
                  </div>

                  <ul className="space-y-4 mb-12">
                    {[ 
                      "1,000 Images every month",
                      "40 Video clips every month",
                      "Unlimited Brands",
                      "5 Team members",
                      "7-day free trial included"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="https://dezygn.checkoutpage.com/dezygn-yearly" className="block w-full py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-2xl font-bold text-xl hover:shadow-xl hover:scale-[1.02] transition-all">
                    Start Free Trial
                  </a>
                </div>
              </div>

              {/* Agency Plan */}
              <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border-2 border-gray-100">
                <h3 className="text-3xl font-black text-gray-900 mb-2">Agency</h3>
                <p className="text-gray-500 mb-8">For high-volume creators & teams.</p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-6xl font-black text-gray-900">$67</span>
                  <span className="text-gray-500 font-medium">/month</span>
                </div>

                <ul className="space-y-4 mb-12">
                  {[ 
                    "2,500 Images every month",
                    "100 Video clips every month",
                    "Unlimited Everything",
                    "Priority Support",
                    "Access to Agency Community"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-gray-900" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="https://dezygn.checkoutpage.com/dezygn-yearly" className="block w-full py-5 bg-gray-900 text-white text-center rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all">
                  Get Agency Plan
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about getting started.</p>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-xl">
              <div className="space-y-2">
                <FAQItem
                  question="What exactly is Dezygn?"
                  answer="Dezygn is an AI creative platform built specifically for freelance client work. We provide the tools (AI image/video generation), the templates (what's selling now), and the leads (where to find clients)."
                />
                <FAQItem
                  question="Do I need design experience?"
                  answer="No. If you can type a prompt like 'Make a YouTube thumbnail about cooking,' you can use Dezygn to create professional-grade work."
                />
                <FAQItem
                  question="How fast can I make money?"
                  answer="Our average active user lands their first paying client within 14 days of starting. Some, like Milan, have landed $2k+ projects in their first week."
                />
                <FAQItem
                  question="Is there a money-back guarantee?"
                  answer="Yes. We offer a 30-day 'Double Your Money Back' guarantee. If you follow our 14-day challenge and don't win a single client, we'll refund you 200% of your subscription cost."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 px-4 overflow-hidden">
          {/* Vibrant background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-900"></div>
          <div className="absolute inset-0 opacity-20">
             <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block bg-white/20 backdrop-blur-md rounded-full px-6 py-2 text-white font-bold mb-8 animate-pulse">
              Limited Time Offer
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Start Your Free<br/>7-Day Trial Today
            </h2>
            <p className="text-2xl text-purple-100 mb-12 font-medium">
              Join 2,000+ freelancers earning with AI. <br className="hidden md:block" />
              Cancel anytime. Double money-back guarantee.
            </p>
            
            <a href="https://dezygn.checkoutpage.com/dezygn-yearly" className="group bg-white text-gray-900 px-14 py-6 rounded-full font-black text-2xl hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto">
              <span>Get Started Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 font-medium">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Secure payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </HelmetProvider>
  );
}
