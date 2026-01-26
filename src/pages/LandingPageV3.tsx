import { useState } from 'react';
import { ArrowRight, Plus, Palette, Star, Globe, MessageSquare, Package, Sparkles, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderV3 from '../components/HeaderV3';
import AwaVisualization from '../components/AwaVisualization';
import FooterV3 from '../components/FooterV3';

const LandingPageV3 = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

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

      {/* Main Content Grid */}
      <main className="relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0">
        
        {/* Left Column: Text & Input */}
        <div className="w-full md:w-1/2 px-6 md:px-16 lg:px-24 flex flex-col justify-center z-10 mb-12 md:mb-0">
          
          <div className="space-y-6 max-w-xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
              v2.0 Now Live
            </div>

            <h1 className="font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-white">
              Design that <br />
              <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-blue-300">thinks.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-md">
              Meet <strong>AWA</strong>. The AI Creative Director that plans, verifies, and executes on brand.
            </p>

            {/* Chat Input Container */}
            <div className={`
              mt-8 relative group rounded-2xl bg-[#1a1a1a] border transition-all duration-300
              ${isFocused ? 'border-purple-500/50 shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]' : 'border-white/10 hover:border-white/20'}
            `}>
              <textarea 
                className="w-full bg-transparent text-lg p-4 pl-4 pr-14 min-h-[140px] resize-none outline-none text-white placeholder:text-gray-600 font-light"
                placeholder="E.g. Create UGC lifestyle photos for my coffee brand..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />

              <div className="absolute bottom-4 left-4 flex gap-3 text-gray-600">
                <button
                  className="hover:text-purple-400 transition-colors"
                  title="Upload Reference"
                  onClick={() => setShowSignupModal(true)}
                >
                   <Plus className="w-5 h-5" />
                </button>
                <button
                  className="hover:text-purple-400 transition-colors"
                  title="Style Guide"
                  onClick={() => setShowSignupModal(true)}
                >
                   <Palette className="w-5 h-5" />
                </button>
              </div>

              <button
                className={`
                  absolute bottom-3 right-3 p-3 rounded-xl flex items-center justify-center transition-all duration-300
                  ${inputValue.length > 0 ? 'bg-purple-600 text-white translate-y-0 opacity-100' : 'bg-white/10 text-gray-500 translate-y-1 opacity-50 cursor-not-allowed'}
                `}
                onClick={() => inputValue.length > 0 && setShowSignupModal(true)}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonial */}
            <div className="mt-8 flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm max-w-lg hover:bg-white/10 transition-colors duration-300">
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
              <div>
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
        </div>

        {/* Right Column: Visual Composition */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden bg-[#0a0a0a] md:rounded-l-[3rem] border-l border-t border-white/5">
          <AwaVisualization />
        </div>
      </main>

      {/* ============================================ */}
      {/* SECTION 2: SOCIAL PROOF BAR */}
      {/* ============================================ */}
      <section className="relative z-10 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
          <p className="text-gray-400 text-sm md:text-base tracking-wide">
            <span className="text-white font-semibold">100,000+</span> designs created
            <span className="mx-3 text-white/20">•</span>
            Trusted by freelancers and agencies worldwide
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">Rated by thousands</span>
          </div>
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
      {/* SECTION 5: KEY FEATURES */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              Everything You Need
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Built by an Agency Owner,{' '}
              <br className="hidden md:block" />
              for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Agency Owners
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Awa — Your AI Creative Director',
                desc: '12+ skills. Internet search, prompt enhancement, vision-based refinement.',
              },
              {
                title: 'Studio & Comparison Mode',
                desc: 'Review full-size. Compare with source. Rate and annotate.',
              },
              {
                title: 'Beautiful Gallery',
                desc: 'All creations in one place. Filter by rating, campaign, brand.',
              },
              {
                title: 'Client Sharing & Feedback',
                desc: 'Share with watermark. Clients rate and leave notes.',
              },
              {
                title: 'Video Animation (Beta)',
                desc: 'Turn images into product videos.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 ${
                  i >= 3 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: TESTIMONIALS */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
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
      {/* SECTION 7: PRICING */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
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

            <ul className="space-y-3 mb-10">
              {[
                'Unlimited brands & campaigns',
                'Awa AI Creative Director',
                'Studio & Comparison Mode',
                'Client sharing with watermark',
                'Gallery with filtering',
                'Video animation (Beta)',
                '200 credits/month included',
                'Priority support',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/pricing"
              className="block w-full text-center px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg"
            >
              Start Your Agency — Free Trial
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
      {/* SECTION 8: FINAL CTA */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8">
            Stop Losing Clients to AI Slop.{' '}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              Start Delivering Results.
            </span>
          </h2>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group"
          >
            Start Creating — Free Trial
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
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
