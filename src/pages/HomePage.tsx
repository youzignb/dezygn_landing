import { useState, useEffect } from 'react';
import { Check, Star, ArrowRight, Shield, Users, X, TrendingUp, Award, Sparkles, ChevronDown, Play, Target, CheckCircle, Zap, BookOpen, FileSearch, Gift, AlertCircle, DollarSign, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

// Import key visual assets from existing pages
import hyperVisionEngine from '../assets/images/toolkit-features/hypervision_engine.png';
import visualDNA from '../assets/images/toolkit-features/visual_dna.png';
import smartTextVision from '../assets/images/toolkit-features/smart_text_vision.png';
import teamSpace from '../assets/images/toolkit-features/TeamSpace.png';
import instaShare from '../assets/images/toolkit-features/instashare.png';
import instantBrandSync from '../assets/images/toolkit-features/instant_brand_syncs.png';

// Job examples
import skincare1 from '../assets/images/jobs/skincare-product-shots/skincare1.jpeg';
import thumbnail1 from '../assets/images/jobs/youtube-thumbnails/thumbnail1.png';
import fashion1 from '../assets/images/jobs/instagram-fashion/fashion1.jpg';

// Real World Demos for video capabilities
import animateOriginal from '../assets/images/real-world-demos/animate/original_image-of-model-crossing-hands-wearing-tshirt.png';
import animateVideo from '../assets/images/real-world-demos/animate/animated_image-of-model-showing-off-tshirt.mp4';

// Audit Tool
import dezygn_audit from '../assets/images/audit/dezygn_audit.png';

// Youzign Integration
import youzignLogo from '../assets/images/youzign-integration/youzign-logo.png';

// Platform logos (text-based for now)
const platforms = [
  { name: 'Upwork', color: '#6FDA44' },
  { name: 'Fiverr', color: '#1DBF73' },
  { name: '99designs', color: '#FF5850' },
  { name: 'Freelancer', color: '#0084E1' },
  { name: 'Dribbble', color: '#EA4C89' },
  { name: 'Behance', color: '#1769FF' }
];

// Floating notification component
function FloatingNotification({ message, location }: { message: string; location: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), Math.random() * 3000 + 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="absolute bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 text-white text-sm animate-fade-in-up">
      <div className="font-semibold">{message}</div>
      <div className="text-xs text-white/60">{location}</div>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 pb-4 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-start gap-4 text-white hover:text-purple-400 transition-colors"
      >
        <span className="font-semibold">{question}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-white/70 pl-4">
          {answer}
        </div>
      )}
    </div>
  );
}


function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <Logo variant="light" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/audit" className="text-white/80 hover:text-white transition-colors">
                Audit
              </Link>
              <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/report" className="text-white/80 hover:text-white transition-colors">
                Report
              </Link>
              <a 
                href="https://chat.dezygn.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Login
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Market Opportunity */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-400/30 mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm font-medium">214,495+ professionals already using Dezygn</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Turn Design Jobs Into<br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Recurring Revenue</span>
              </h1>
              
              {/* Subheadline with Market Data */}
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                320 new design jobs posted daily. Average value: $360. Only 12% of people are taking action. 
                67% adoption predicted by Q4 2025. The window for early movers closes fast.
              </p>

              {/* Market Opportunity Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-purple-400">$38M</div>
                  <div className="text-sm text-white/70">Annual market opportunity</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-blue-400">78%</div>
                  <div className="text-sm text-white/70">Jobs compatible with AI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-green-400">5 min</div>
                  <div className="text-sm text-white/70">Average delivery time</div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  to="/pricing"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-2xl"
                >
                  Start My Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                  See How It Works (2 min)
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="text-white/60 text-sm mb-4">Optimized for work on:</div>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {platforms.map((platform) => (
                  <div 
                    key={platform.name} 
                    className="text-white font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity"
                    style={{ color: platform.color }}
                  >
                    {platform.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Notifications */}
            <div className="absolute top-20 left-10 hidden lg:block">
              <FloatingNotification message="New job posted: Product photos" location="San Francisco, CA" />
            </div>
            <div className="absolute bottom-20 right-10 hidden lg:block">
              <FloatingNotification message="Designer earned $450" location="London, UK" />
            </div>
            <div className="absolute top-40 right-20 hidden lg:block">
              <FloatingNotification message="Premium video project secured!" location="New York, NY" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The <span className="text-red-400">Problem</span> With Current Design Tools
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Complex Learning Curves</h3>
                    <p className="text-white/70">Traditional tools take months to master, keeping you from earning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Hours Per Project</h3>
                    <p className="text-white/70">What should take minutes becomes an all-day affair</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Amateur Results</h3>
                    <p className="text-white/70">Generic AI tools produce "AI-looking" designs clients reject</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The <span className="text-green-400">Dezygn</span> Difference
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Start Earning Day One</h3>
                    <p className="text-white/70">Pre-built workflows for exactly what clients are buying</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">5-Minute Delivery</h3>
                    <p className="text-white/70">Complete professional projects before your coffee gets cold</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Agency-Quality Output</h3>
                    <p className="text-white/70">AI that creates designs indistinguishable from $10K agencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases with Real Examples */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Jobs. Real Money. <span className="text-purple-400">Real Results.</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These aren't theoretical examples. These are actual jobs posted today that Dezygn users are completing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Photography */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all hover:scale-105">
              <img src={skincare1} alt="Product Photography" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">Product Photography</h3>
                  <span className="text-green-400 font-bold">$280/job</span>
                </div>
                <p className="text-white/70 mb-4">Transform basic product shots into premium e-commerce imagery</p>
                <div className="flex items-center gap-2 text-sm text-purple-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>89 jobs posted daily</span>
                </div>
              </div>
            </div>

            {/* YouTube Thumbnails */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all hover:scale-105">
              <img src={thumbnail1} alt="YouTube Thumbnails" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">YouTube Thumbnails</h3>
                  <span className="text-green-400 font-bold">$150/job</span>
                </div>
                <p className="text-white/70 mb-4">Create click-worthy thumbnails that boost view counts</p>
                <div className="flex items-center gap-2 text-sm text-purple-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>156 jobs posted daily</span>
                </div>
              </div>
            </div>

            {/* Social Media Content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all hover:scale-105">
              <img src={fashion1} alt="Social Media Content" className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">Social Content</h3>
                  <span className="text-green-400 font-bold">$200/job</span>
                </div>
                <p className="text-white/70 mb-4">Design scroll-stopping posts for Instagram, TikTok & more</p>
                <div className="flex items-center gap-2 text-sm text-purple-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>234 jobs posted daily</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success Formula */}
          <div className="mt-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">The Simple Math of Success</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">3</div>
                  <div className="text-sm">Clients/week</div>
                </div>
                <span className="text-2xl">×</span>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">$200</div>
                  <div className="text-sm">Average job</div>
                </div>
                <span className="text-2xl">×</span>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">4</div>
                  <div className="text-sm">Weeks</div>
                </div>
                <span className="text-2xl">=</span>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">$2,400</div>
                  <div className="text-sm">Per month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ripple Effect */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-purple-400">Ripple Effect</span> in Action
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Watch how one happy client turns into a thriving business through word-of-mouth and expanded services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">Month 1</div>
              <div className="text-white font-semibold mb-2">$900</div>
              <p className="text-white/70 text-sm">3 clients × $300 each</p>
              <p className="text-green-400 text-sm mt-2">"Who designed this?"</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">Month 2</div>
              <div className="text-white font-semibold mb-2">$1,800</div>
              <p className="text-white/70 text-sm">6 clients (3 referrals)</p>
              <p className="text-green-400 text-sm mt-2">Network effect begins</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">Month 3</div>
              <div className="text-white font-semibold mb-2">$2,700</div>
              <p className="text-white/70 text-sm">9 clients + premium projects</p>
              <p className="text-green-400 text-sm mt-2">Video & Brand DNA work</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 relative">
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">GOAL</div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">Month 6</div>
              <div className="text-white font-semibold mb-2">$10,000+</div>
              <p className="text-white/70 text-sm">Retainer clients</p>
              <p className="text-green-400 text-sm mt-2">Full creative agency</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Bonus Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-yellow-400/30 mb-6">
              <Gift className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Limited Time Bonuses</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Get with <span className="text-purple-400">Dezygn Today</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              $7,288 in total value. Pay once, use forever. Never offered again at this price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* The $10K Hit List */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">The $10K Hit List™</h3>
                  <div className="text-yellow-400 font-semibold mb-4">Value: $497</div>
                  <p className="text-white/80 mb-4">
                    Analyzed data from 1,050 real Upwork jobs revealing exactly what's selling right now.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>50 profitable service categories with exact pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>Copy-paste proposals that actually work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>"Green light" phrases that signal easy money</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dezygn Audit Tool */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileSearch className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dezygn Audit Tool™</h3>
                  <div className="text-blue-400 font-semibold mb-4">Value: $297/month</div>
                  <p className="text-white/80 mb-4">
                    AI-powered website analyzer that uncovers hidden design opportunities worth thousands.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>Instantly analyze any website for issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>Generate professional audit reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>Include pricing recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Creative Agency Academy */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Creative Agency Academy™</h3>
                  <div className="text-purple-400 font-semibold mb-4">Value: $4,997</div>
                  <p className="text-white/80 mb-4">
                    Complete $0-to-$10K roadmap with step-by-step video training and done-for-you templates.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>8 core modules + 3 bonus workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>Client acquisition & pricing frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>Lifetime access with updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Bonuses */}
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Premium Features Bundle</h3>
                  <div className="text-green-400 font-semibold mb-4">Value: $1,497</div>
                  <p className="text-white/80 mb-4">
                    Advanced capabilities that unlock premium pricing and give you an unfair advantage.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>Unlimited brands & campaigns (normally 3)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>Unlimited TeamSpace members (normally 5)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>InstaShare white-label system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-1" />
                      <span>500 bonus AI credits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">Total Value: $7,288</div>
            <div className="text-xl text-white/80 mb-6">Your Investment Today: <span className="text-green-400 font-bold">Just $49</span></div>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-2xl"
            >
              Claim Everything Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/60 text-sm mt-4">This special bundle expires when the timer hits zero</p>
          </div>
        </div>
      </section>

      {/* Core Features Deep Dive */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI That Actually <span className="text-purple-400">Works</span> for Business
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              While others play with prompts, you'll have professional tools that deliver client-ready results every time.
            </p>
          </div>

          {/* Feature 1: HyperVision Engine */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-semibold">Core Technology</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">HyperVision Engine</h3>
              <p className="text-xl text-white/80 mb-6">
                The AI that understands design like a human designer. It analyzes composition, color theory, and visual hierarchy to transform amateur work into professional designs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Fixes common design mistakes automatically</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Understands brand guidelines and style</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Creates variations that actually look different</span>
                </div>
              </div>
            </div>
            <div>
              <img src={hyperVisionEngine} alt="HyperVision Engine" className="w-full rounded-xl shadow-2xl" />
            </div>
          </div>

          {/* Feature 2: Brand DNA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img src={visualDNA} alt="Brand DNA" className="w-full rounded-xl shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-2 mb-4">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-semibold">Premium Feature</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Brand DNA Technology</h3>
              <p className="text-xl text-white/80 mb-6">
                Character consistency that unlocks $500+ projects. Create the same person, product, or brand element across unlimited designs - something freelancers charge premium rates for.
              </p>
              <div className="bg-black/30 rounded-lg p-4 border border-white/20">
                <div className="text-sm text-white/60 mb-2">Client Message:</div>
                <p className="text-white italic">"Can you make sure our model looks the same in all 50 product shots? Budget: $2,000"</p>
                <div className="text-green-400 font-semibold mt-2">✓ Easily done with Brand DNA</div>
              </div>
            </div>
          </div>

          {/* Feature 3: AI Video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-2 mb-4">
                <Play className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">Game Changer</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">AI Video Generation</h3>
              <p className="text-xl text-white/80 mb-6">
                Turn any image into engaging video content. From product demos to social media stories, create motion that sells without learning complex video software.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/30 rounded-lg p-3 border border-white/20">
                  <div className="text-green-400 font-semibold mb-1">Animate</div>
                  <p className="text-sm text-white/70">Bring products to life</p>
                </div>
                <div className="bg-black/30 rounded-lg p-3 border border-white/20">
                  <div className="text-blue-400 font-semibold mb-1">Lipsync</div>
                  <p className="text-sm text-white/70">Make characters speak</p>
                </div>
              </div>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Unlock Video Features
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <video 
                autoPlay 
                loop 
                muted 
                className="w-full rounded-xl shadow-2xl"
                poster={animateOriginal}
              >
                <source src={animateVideo} type="video/mp4" />
              </video>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                AI Generated
              </div>
            </div>
          </div>

          {/* Additional Toolkit Features */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Your Complete Creative Toolkit</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Every tool you need to run a successful creative business, all in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {/* Smart Text Vision */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-colors">
              <img src={smartTextVision} alt="Smart Text Vision" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Smart Text Vision</h4>
              <p className="text-white/70">AI that understands context and automatically improves text readability and hierarchy.</p>
            </div>

            {/* TeamSpace */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-colors">
              <img src={teamSpace} alt="TeamSpace" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">TeamSpace</h4>
              <p className="text-white/70">Collaborate seamlessly with clients and team members. Share, review, and approve in real-time.</p>
            </div>

            {/* InstaShare */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-colors">
              <img src={instaShare} alt="InstaShare" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">InstaShare</h4>
              <p className="text-white/70">Professional white-label delivery system with smart watermarking and client review tools.</p>
            </div>

            {/* Instant Brand Sync */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-colors">
              <img src={instantBrandSync} alt="Instant Brand Sync" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Instant Brand Sync</h4>
              <p className="text-white/70">One-click brand consistency across all designs. Never worry about off-brand content again.</p>
            </div>

            {/* Audit Tool Preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-colors">
              <img src={dezygn_audit} alt="Dezygn Audit" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Website Audit Tool</h4>
              <p className="text-white/70">Instantly analyze any website and generate professional reports that close deals.</p>
            </div>

            {/* Youzign Integration */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-colors">
              <img src={youzignLogo} alt="Youzign Integration" className="w-full h-40 object-contain rounded-lg mb-4 bg-white/5" />
              <h4 className="text-xl font-semibold text-white mb-2">Youzign Integration</h4>
              <p className="text-white/70">Seamlessly import and enhance designs from Youzign's massive template library.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-400/30 mb-6">
            <DollarSign className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-semibold">Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Free. Upgrade When Ready.
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Join 214,495+ creators who are already using Dezygn to build their creative businesses.
          </p>
          
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-2xl"
          >
            View Pricing Plans
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <div className="mt-8">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 inline-block">
              <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">365-Day Money-Back Guarantee</span>
              </div>
              <p className="text-white/80">If you don't earn at least 3x your investment, we'll refund every penny.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dezygn vs Others */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="text-purple-400">Dezygn</span> Wins Every Time
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              While others compete on price, you compete on capabilities they don't have.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-purple-400 font-semibold">Dezygn</th>
                  <th className="text-center py-4 px-4 text-white/60 font-semibold">Midjourney</th>
                  <th className="text-center py-4 px-4 text-white/60 font-semibold">Canva</th>
                  <th className="text-center py-4 px-4 text-white/60 font-semibold">Traditional Designer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Delivery Time</td>
                  <td className="text-center py-4 px-4"><span className="text-green-400 font-semibold">5 minutes</span></td>
                  <td className="text-center py-4 px-4 text-white/60">30-60 min</td>
                  <td className="text-center py-4 px-4 text-white/60">1-2 hours</td>
                  <td className="text-center py-4 px-4 text-white/60">2-5 days</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Character Consistency</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">AI Video Generation</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Business Tools</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Professional Output</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-4 px-4 text-white/60">AI-looking</td>
                  <td className="text-center py-4 px-4 text-white/60">Template-y</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Average Cost</td>
                  <td className="text-center py-4 px-4"><span className="text-green-400 font-semibold">$49/mo</span></td>
                  <td className="text-center py-4 px-4 text-white/60">$30/mo</td>
                  <td className="text-center py-4 px-4 text-white/60">$15/mo</td>
                  <td className="text-center py-4 px-4 text-white/60">$500-2000/project</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white">Revenue Potential</td>
                  <td className="text-center py-4 px-4"><span className="text-green-400 font-semibold">$2,400+/mo</span></td>
                  <td className="text-center py-4 px-4 text-white/60">Limited</td>
                  <td className="text-center py-4 px-4 text-white/60">Limited</td>
                  <td className="text-center py-4 px-4 text-white/60">N/A (you are the designer)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real People. <span className="text-purple-400">Real Success.</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join thousands who've transformed their creative careers with Dezygn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white mb-4">
                "Went from $0 to $3,500/month in 60 days. The Brand DNA feature alone pays for my subscription 100x over."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-white">Sarah Chen</div>
                  <div className="text-sm text-white/60">E-commerce Designer</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white mb-4">
                "I replaced my 9-5 income working just 20 hours a week. Dezygn made design accessible to a non-designer like me."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-white">Marcus Johnson</div>
                  <div className="text-sm text-white/60">YouTube Thumbnail Specialist</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white mb-4">
                "My agency scaled from 3 to 12 clients using Dezygn. We deliver 10x faster than our competitors."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-white">Emma Williams</div>
                  <div className="text-sm text-white/60">Agency Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-2">
            <FAQItem 
              question="Do I need design experience?"
              answer="No! Dezygn is built for entrepreneurs, not designers. Our AI handles the technical stuff while you focus on serving clients and growing your business. Most users start earning within their first week."
            />
            <FAQItem 
              question="How is this different from Midjourney or DALL-E?"
              answer="Those are prompt-based tools that create 'AI-looking' images. Dezygn is a complete business system with professional workflows, brand consistency, client delivery tools, and designs that look like they came from a $10K agency."
            />
            <FAQItem 
              question="What if I don't have clients yet?"
              answer="We include the AI Creative Agency Academy ($4,997 value) free with your subscription. It shows you exactly how to find clients, price your services, and scale to $10K/month."
            />
            <FAQItem 
              question="Can I really make money with this?"
              answer="Our users average $2,400/month working part-time. The market data is real: 320 design jobs are posted daily with an average value of $360. You just need to claim your share."
            />
            <FAQItem 
              question="What's your refund policy?"
              answer="We offer a 365-day money-back guarantee. If you don't earn at least 3x your investment, we'll refund every penny. That's how confident we are in Dezygn."
            />
            <FAQItem 
              question="Do I get updates and new features?"
              answer="Yes! We ship new features weekly based on user feedback. Recent additions include AI video generation, lipsync technology, and advanced brand DNA features - all included at no extra cost."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-red-400/30 mb-6">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-semibold">Early Mover Advantage Closing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Window for <span className="text-purple-400">First Movers</span> Is Closing
          </h2>
          <p className="text-xl text-white/80 mb-4">
            Right now, only 12% of people are taking action. By Q4 2025, that number will be 67%.
          </p>
          <p className="text-xl text-white/80 mb-8">
            <span className="text-yellow-400 font-semibold">Will you be competing against everyone, or will you already be established?</span>
          </p>

          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-purple-400">7 Days</div>
                <div className="text-white/70">Free Trial</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">$0</div>
                <div className="text-white/70">To Start</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">365 Days</div>
                <div className="text-white/70">Guarantee</div>
              </div>
            </div>

            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-2xl"
            >
              Start My Free Trial Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <p className="text-white/60 text-sm mt-4">
              No credit card required • Cancel anytime • 365-day guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-white/60 text-sm mb-1">Active Now</div>
              <div className="text-2xl font-bold text-white">320 jobs</div>
              <div className="text-green-400 text-sm">posted today</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-white/60 text-sm mb-1">Average Value</div>
              <div className="text-2xl font-bold text-white">$360</div>
              <div className="text-green-400 text-sm">per project</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-white/60 text-sm mb-1">Your Share</div>
              <div className="text-2xl font-bold text-yellow-400">$2,400+</div>
              <div className="text-green-400 text-sm">per month</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 text-white/60 mt-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>214,495+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Since 2014</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Logo variant="light" size="md" />
              <p className="text-white/60 text-sm mt-4 text-center md:text-left">
                The AI creative platform that turns ideas into income.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left">
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a 
                href="mailto:support@youzign.com" 
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact Support
              </a>
              
              <div className="relative group">
                <button className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-1">
                  Legacy customers
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 bottom-full mb-2 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-700">
                  <a 
                    href="https://dezygn.glide.page" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors rounded-t-lg"
                  >
                    Dezygn v1
                  </a>
                  <div className="relative">
                    <span className="block px-4 py-3 text-gray-500 cursor-not-allowed">
                      Dezygn v2
                    </span>
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                      Unavailable
                    </div>
                  </div>
                  <a 
                    href="https://chat.dezygn.com/legacy"
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors rounded-b-lg"
                  >
                    Dezygn v4 Upgrade
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">© 2025 Youzign SPRL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;