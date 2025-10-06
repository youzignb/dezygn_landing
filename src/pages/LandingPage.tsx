import { useState } from 'react';
import { ArrowRight, Check, ExternalLink, Minus, Plus, Shield, Users, Zap, Play, DollarSign, Star, Award, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-start gap-4 text-gray-900 hover:text-purple-600 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 flex-shrink-0 text-purple-600" />
        ) : (
          <Plus className="w-5 h-5 flex-shrink-0 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

function LandingPage() {
  return (
    <Layout>
      <Helmet>
        <title>Professional AI Creative Work in Minutes | Dezygn</title>
        <meta name="description" content="Complete platform for freelancers. Generate client-ready designs, product photos, and videos with AI. No design experience needed." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Content - 1 column */}
            <div className="lg:col-span-1 relative z-10">
              {/* Trust badge */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2 border border-gray-200">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-gray-700">Start free, get your first client in 14 days</span>
                </div>
              </div>

              {/* Main Headline with Yellow Highlight */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                <span className="block text-gray-900">
                  Professional AI creative work{' '}
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-yellow-300 -skew-y-2 transform"></span>
                    <span className="relative z-10 px-2 text-gray-900">in minutes</span>
                  </span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Complete platform for freelancers. Generate client-ready designs, product photos, and videos with AI. <b>No design experience needed.</b>
              </p>

              {/* CTA Section */}
              <div className="mb-8">
                <a
                  href="https://dezygn.checkoutpage.com/dezygn-yearly"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Start Free Trial</span>
                  <span className="text-xl">→</span>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </a>
              </div>
            </div>

            {/* Right Image - 2 columns */}
            <div className="lg:col-span-2 relative">
              <img
                src="https://vpklpenoffkvztqosbds.supabase.co/storage/v1/object/public/admin-assets/marketing/landing/dezygn-hero.png"
                alt="Dezygn Platform"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Quote marks decoration */}
            <div className="absolute -top-6 -left-4 text-purple-200 text-8xl font-serif leading-none opacity-50">"</div>

            <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 md:p-16 border-2 border-purple-200 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-xl opacity-50"></div>
                  <img
                    src="https://www.upwork.com/profile-portraits/c1C0jvfaaxrjRXgvxDIOAUm3bMhbJjqqIeoMek_2TTijZyaSfWbFRsXirPIBSDnBAF"
                    alt="Milan - Freelance Product Designer"
                    className="relative w-24 h-24 rounded-full border-4 border-white shadow-2xl object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    "Just landed a <span className="relative inline-block">
                      <span className="text-green-600">$2,000+</span>
                      <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                        <path d="M0 3 Q25 0, 50 3 T100 3" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round"/>
                      </svg>
                    </span> product photography contract using Dezygn."
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <p className="text-lg font-bold text-gray-900">— Milan</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              The Freelancer's Dilemma
            </h2>
            <p className="text-xl text-gray-600">And how Dezygn solves it</p>
          </div>

          <div className="relative">
            {/* Connecting arrow */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 bg-white rounded-full shadow-xl border-4 border-purple-500 flex items-center justify-center">
                <ArrowRight className="w-10 h-10 text-purple-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Problem */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl p-10 md:p-12 border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
                    <span className="text-3xl">😓</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    The Problem
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 font-semibold">
                    You have AI skills but no clients:
                  </p>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <X className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 mb-1">No leads</p>
                        <p className="text-gray-700 leading-relaxed">Where do I find people who actually pay for AI design?</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <X className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 mb-1">Wrong focus</p>
                        <p className="text-gray-700 leading-relaxed">Which services should I even be selling?</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <X className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 mb-1">Can't deliver</p>
                        <p className="text-gray-700 leading-relaxed">How do I deliver professional quality without a design background?</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl p-10 md:p-12 border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    The Solution
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 font-semibold">
                    Dezygn solves all three:
                  </p>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 mb-1">Daily leads</p>
                        <p className="text-gray-700 leading-relaxed">See exactly where 2-3 qualified clients post jobs every day</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 mb-1">High-demand work</p>
                        <p className="text-gray-700 leading-relaxed">Built-in templates for what clients are paying for right now</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 mb-1">Pro results</p>
                        <p className="text-gray-700 leading-relaxed">Agency-level AI tools that make you look like you have a team</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-5 py-2 mb-6">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-purple-900 font-bold text-sm">3 SIMPLE STEPS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              From Zero to Paid<br />in 14 Days
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven system to help you land your first client fast
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-purple-300 to-blue-300 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-xl border-2 border-purple-200 p-8 md:p-10 hover:scale-105 transition-all duration-300 relative z-10">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl rotate-3">
                      1
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="text-5xl mb-6">🎯</div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Find Clients</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Discover 3+ qualified leads daily. We show you exactly where jobs are posted online
                    </p>
                    <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 text-sm font-semibold text-purple-700">
                      <Users className="w-4 h-4" />
                      3+ leads per day
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-xl border-2 border-purple-200 p-8 md:p-10 hover:scale-105 transition-all duration-300 relative z-10">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl rotate-3">
                      2
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="text-5xl mb-6">✨</div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Generate with AI</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Use the advanced Dezygn creative suite to create professional work in 5-10 minutes
                    </p>
                    <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-semibold text-blue-700">
                      <Zap className="w-4 h-4" />
                      Client-ready in 5 min
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-xl border-2 border-purple-200 p-8 md:p-10 hover:scale-105 transition-all duration-300 relative z-10">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl rotate-3">
                      3
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="text-5xl mb-6">💰</div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Deliver & Get Paid</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Deliver designs and get feedback with our white-label delivery system from your own site
                    </p>
                    <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 text-sm font-semibold text-green-700">
                      <Shield className="w-4 h-4" />
                      2x Money-Back Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA below steps */}
          <div className="mt-20 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Start Your Journey Today
              <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="text-gray-500 mt-4">Get your first client in 14 days</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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

      {/* Deep Social Proof */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-5 py-2 mb-6">
              <Award className="w-4 h-4 text-green-600" />
              <span className="text-green-900 font-bold text-sm">SUCCESS STORY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Real Results from Real Freelancers
            </h2>
          </div>

          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl shadow-2xl border-2 border-purple-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 md:px-12 py-8">
                <div className="flex items-center gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-white rounded-full blur-md opacity-30"></div>
                    <img
                      src="https://www.upwork.com/profile-portraits/c1C0jvfaaxrjRXgvxDIOAUm3bMhbJjqqIeoMek_2TTijZyaSfWbFRsXirPIBSDnBAF"
                      alt="Milan"
                      className="relative w-20 h-20 rounded-full border-4 border-white shadow-2xl object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1">Milan</h3>
                    <p className="text-purple-100 text-lg">Freelance Product Designer</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 md:px-12 py-10">
                <div className="relative">
                  {/* Large quote mark */}
                  <div className="absolute -top-4 -left-2 text-purple-200 text-7xl font-serif leading-none opacity-50">"</div>

                  <div className="relative pl-8">
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 font-medium">
                      I just got this contract after <span className="font-bold text-purple-600">6 days with Dezygn</span>. First 10 products, 10-15 images for each product — AI-generated product with model, product in scene, and lifestyle photography. Over 100 products in total.
                    </p>

                    {/* Highlighted earning */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-2xl p-6 mb-6">
                      <p className="text-lg text-gray-700 mb-2">Potential earning:</p>
                      <p className="text-4xl md:text-5xl font-black text-green-600">$2,000+</p>
                      <p className="text-gray-600 mt-1">for the entire project</p>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-800 font-bold">
                      So yes, your system works! 🙂
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats footer */}
              <div className="bg-gray-50 px-8 md:px-12 py-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">6 days</div>
                    <div className="text-sm text-gray-600">To first contract</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">100+</div>
                    <div className="text-sm text-gray-600">Products delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">$2K+</div>
                    <div className="text-sm text-gray-600">Earned</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-2xl shadow-xl rotate-12 hidden md:block">
              <p className="font-black text-lg">VERIFIED ✓</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-5 py-2 mb-6">
              <DollarSign className="w-4 h-4 text-purple-600" />
              <span className="text-purple-900 font-bold text-sm">PRICING</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start with a 7-day free trial. No credit card required.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Freelancer Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-purple-500 p-10 hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-2xl text-sm font-black shadow-xl flex items-center gap-2">
                    <span>🚀</span> MOST POPULAR
                  </div>
                </div>

                <div className="text-center mt-6 mb-8">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Freelancer</h3>
                  <p className="text-gray-600 text-lg mb-8">For serious creators & freelancers</p>

                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-gray-500 line-through text-3xl">$588</span>
                      <span className="text-6xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$399</span>
                    </div>
                    <p className="text-gray-700 text-lg">per year</p>
                    <p className="text-purple-700 font-bold text-xl mt-2">Only $33/month</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">1000 Images every month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">40 Video Clips every month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Unlimited Brands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Unlimited Campaign</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">5 Team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-bold">7-day free trial</span>
                  </li>
                </ul>

                <Link
                  to="/pricing"
                  className="group/btn block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Agency Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-3xl shadow-xl border-2 border-gray-300 p-10 hover:-translate-y-2 transition-all duration-300">
                <div className="text-center mt-2 mb-8">
                  <div className="text-5xl mb-4">💼</div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Agency</h3>
                  <p className="text-gray-600 text-lg mb-8">For agencies & high-volume creators</p>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-gray-500 line-through text-3xl">$1,119</span>
                      <span className="text-6xl font-black text-gray-900">$799</span>
                    </div>
                    <p className="text-gray-700 text-lg">per year</p>
                    <p className="text-gray-900 font-bold text-xl mt-2">Only $67/month</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">2500 Images every month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">100 Video Clips every month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Unlimited Brands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Unlimited Campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Unlimited Team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                    <span className="text-gray-800 font-medium">Conversionzign</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                    <span className="text-gray-800 font-medium">AI Creative Agency access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-bold">★ Priority support</span>
                  </li>
                </ul>

                <Link
                  to="/pricing"
                  className="group/btn block w-full text-center bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-5 py-2 mb-6">
              <span className="text-blue-900 font-bold text-sm">❓ FAQ</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Got Questions?<br />We've Got Answers
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about Dezygn</p>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <FAQItem
                question="What is Dezygn?"
                answer="AI creative platform built specifically for freelance client work. Tools + templates + training."
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <FAQItem
                question="Do I need design experience?"
                answer='No. If you can type "Make a YouTube thumbnail about cooking," you can use Dezygn.'
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <FAQItem
                question="How long until I make money?"
                answer="Average user lands first client within the first 14 days. Milan landed $2,000 project in week 1."
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <FAQItem
                question="What's included?"
                answer="All the features you need to find AI design freelancing gigs and deliver them."
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <FAQItem
                question="Is there a guarantee?"
                answer="Yes. 30 day double your money back guarantee. If you follow our challenge for 14 days and don't win a single client, we will double your money."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-bold">LIMITED TIME OFFER</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Start Your Free<br />
            7-Day Trial Today
          </h2>

          <p className="text-2xl md:text-3xl text-white/90 mb-6 max-w-3xl mx-auto font-medium">
            No credit card required. Full access to everything.
          </p>
          <p className="text-xl text-white/80 mb-12">
            Cancel anytime. 2x money-back guarantee.
          </p>

          {/* CTA Button */}
          <Link
            to="/pricing"
            className="group inline-flex items-center gap-4 bg-white text-purple-600 px-14 py-7 rounded-3xl font-black text-2xl hover:shadow-2xl hover:scale-110 transition-all duration-300 shadow-2xl mb-12"
          >
            Start Free Trial
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Shield className="w-16 h-16 text-white mx-auto mb-4" />
              <p className="text-white font-bold text-xl mb-1">2x Money-Back</p>
              <p className="text-white/70">Double guarantee</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-16 h-16 text-white mx-auto mb-4" />
              <p className="text-white font-bold text-xl mb-1">3+ Leads Daily</p>
              <p className="text-white/70">Find clients fast</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Zap className="w-16 h-16 text-white mx-auto mb-4" />
              <p className="text-white font-bold text-xl mb-1">14 Days</p>
              <p className="text-white/70">To first client</p>
            </div>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 text-white/90">
            <Shield className="w-6 h-6 text-green-300" />
            <p className="text-lg font-semibold">
              Start risk-free with our 2x money-back guarantee
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default LandingPage;
