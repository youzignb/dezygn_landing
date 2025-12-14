import { useState } from 'react';
import { ArrowRight, Plus, Palette, Star } from 'lucide-react';
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

      <FooterV3 className="fixed bottom-0 left-0" />

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
