import { useEffect, useState } from 'react';
import { Check, Clock, Star, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

// Real World Demos - Animate
import animateOriginal from '../assets/images/real-world-demos/animate/original_image-of-model-crossing-hands-wearing-tshirt.png';
import animateVideo from '../assets/images/real-world-demos/animate/animated_image-of-model-showing-off-tshirt.mp4';

// Real World Demos - Lipsync
import lipsyncOriginal from '../assets/images/real-world-demos/lipsync/original-model-holding-selfie-camera.png';
import lipsyncVideo from '../assets/images/real-world-demos/lipsync/animation-with-voiceover-model-talking-to-camera.mp4';

// Real World Demos - Brand DNA
import brandDnaOriginal1 from '../assets/images/real-world-demos/brand-dna/original1.png';
import brandDnaOriginal2 from '../assets/images/real-world-demos/brand-dna/original2.png';
import brandDnaOriginal3 from '../assets/images/real-world-demos/brand-dna/original3.png';
import brandDnaOriginal4 from '../assets/images/real-world-demos/brand-dna/original4.png';
import galleryAntartica from '../assets/images/real-world-demos/brand-dna/gallery-antartica.jpg';
import galleryBeach from '../assets/images/real-world-demos/brand-dna/gallery-beach.jpg';
import galleryMountain from '../assets/images/real-world-demos/brand-dna/gallery-mountain.jpg';
import galleryParis from '../assets/images/real-world-demos/brand-dna/gallery-paris.jpg';
import galleryPool from '../assets/images/real-world-demos/brand-dna/gallery-pool.jpg';
import galleryRuins from '../assets/images/real-world-demos/brand-dna/gallery-ruins.jpg';
import gallerySahara from '../assets/images/real-world-demos/brand-dna/gallery-sahara.jpg';
import galleryStreetfood from '../assets/images/real-world-demos/brand-dna/gallery-streetfood.jpg';
import galleryStudio from '../assets/images/real-world-demos/brand-dna/gallery-studio.jpg';
import galleryTimesquare from '../assets/images/real-world-demos/brand-dna/gallery-timesquare.jpg';
import galleryVenice from '../assets/images/real-world-demos/brand-dna/gallery-venice.jpg';
import galleryMountainVideo from '../assets/images/real-world-demos/brand-dna/gallery-mountain-video.mp4';
import galleryPoolVideo from '../assets/images/real-world-demos/brand-dna/gallery-pool-video.mp4';

// Timer Component
function CountdownTimer({ className = "" }: { className?: string }) {
  // Calculate time until Saturday July 19th, 2025
  const getTimeUntilJuly8 = () => {
    const targetDate = new Date('2025-07-19T23:59:59');
    const now = new Date();
    const timeDiff = Math.max(0, Math.floor((targetDate.getTime() - now.getTime()) / 1000));
    return timeDiff;
  };
  
  const [timeLeft, setTimeLeft] = useState(getTimeUntilJuly8());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilJuly8());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/30">
        <span className="font-mono text-lg font-bold text-white">
          {days.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/80 font-bold">:</span>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/30">
        <span className="font-mono text-lg font-bold text-white">
          {hours.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/80 font-bold">:</span>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/30">
        <span className="font-mono text-lg font-bold text-white">
          {minutes.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/80 font-bold">:</span>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/30">
        <span className="font-mono text-lg font-bold text-white">
          {seconds.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

function UpgradePage() {
  // Proof Pixel Script
  useEffect(() => {
    // Load Proof Pixel
    const script = document.createElement('script');
    script.src = 'https://cdn.useproof.com/proof.js?acc=LHjP4hYhKheR2q4Uvyjk1JhPUDC3';
    script.async = true;
    document.body.appendChild(script);
    
    // Cleanup
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Add custom styles for animations
  const customStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(3deg); }
      50% { transform: translateY(-20px) rotate(3deg); }
    }
    
    @keyframes float-reverse {
      0%, 100% { transform: translateY(0px) rotate(-3deg); }
      50% { transform: translateY(-20px) rotate(-3deg); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-reverse {
      animation: float-reverse 6s ease-in-out infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .animate-scroll {
      animation: scroll 10s linear infinite;
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(200%); }
    }
    
    .animate-shimmer {
      animation: shimmer 3s infinite;
    }
    
    @keyframes float-particle {
      0% { transform: translate(0, 0); }
      33% { transform: translate(30px, -30px); }
      66% { transform: translate(-20px, 20px); }
      100% { transform: translate(0, 0); }
    }
  `;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Scarcity Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Timer Left */}
          <div className="flex items-center gap-3">
            <CountdownTimer />
          </div>
          
          {/* Text Middle */}
          <p className="font-semibold text-center flex-1 mx-4">
            LAST CHANCE FOR FREE 7 DAY TRIAL
          </p>
          
          {/* Button Right */}
          <button 
            onClick={() => {
              const element = document.getElementById('pricing');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-gray-100 transition whitespace-nowrap"
          >
            Start for free today 👉
          </button>
        </div>
      </div>

      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-3 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <Star className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-bold text-gray-700">Congratulations! You're Now a Dezygn 4.0 Founders Member!</span>
          </div>
          
          {/* Account Upgrade Status */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Your account is being upgraded right now...</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full w-1/2 transition-all duration-300"></div>
              </div>
              <span className="text-xs text-gray-500">50% Complete - Adding legacy features...</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            While that's happening, I have an important question for you:
          </p>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
            What If You Could 10X Your Output...
          </h1>
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            And Unlock AI Video + Character Consistency That Others Can't Create?
          </h1>

          {/* Watch Video Subtext */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-lg text-gray-700 font-semibold">
              Watch now: this entire video was created with Dezygn
            </p>
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Video with Glassmorphism */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative rounded-3xl aspect-video shadow-2xl overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/7Q-YM2QQ_Ec?controls=0&rel=0&modestbranding=1&showinfo=0"
                title="How to Land Your First $5K Client"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Unlock Premium Job Categories</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-medium">Triple Money Back Guarantee</span>
              </div>
              <span>•</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">30% OFF Founders Pricing</span>
            </div>
          </div>
        </div>

        {/* Floating UI Elements for Visual Interest */}
        <div className="absolute top-20 left-10 bg-white rounded-2xl shadow-lg p-4 transform rotate-3 hidden lg:block animate-float">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium">Premium video project secured!</p>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-10 bg-white rounded-2xl shadow-lg p-4 transform -rotate-3 hidden lg:block animate-float-reverse animation-delay-2000">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium">Brand DNA client loves the consistency</p>
          </div>
        </div>

        <div className="absolute top-1/2 right-16 bg-white rounded-2xl shadow-lg p-4 transform rotate-1 hidden lg:block animate-float animation-delay-4000">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium">Advanced features = competitive edge</p>
          </div>
        </div>
      </section>

      {/* Smart Move - Redesigned */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-purple-50/40 to-indigo-50/30 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-float-reverse"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl animate-float"></div>
          </div>
          
          {/* Dotted Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Badge & Title */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-8 py-4 mb-8 shadow-xl hover:scale-105 transition-all duration-500">
              <div className="relative">
                <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-ping opacity-40"></div>
              </div>
              <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 uppercase tracking-wide">Smart Move!</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              You're Already <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">Perfect</span> for Starting
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-6 max-w-5xl mx-auto leading-relaxed">
              Your Dezygn 4.0 account has everything you need... And once you experience how 
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600"> EFFORTLESS </span> 
              landing clients becomes, growth is inevitable.
            </p>
          </div>

          {/* Success Catalyst Card */}
          <div className="mb-20">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                      <span className="text-4xl">📺</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Advanced Features = Premium Territory</h3>
                    <p className="text-xl text-gray-600">While others compete on price, you compete on capabilities they don't have</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    YouTube creators pay premium for advanced features like Brand DNA and video creation that basic tools can't deliver
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content: Growth Visualization */}
          <div className="grid lg:grid-cols-12 gap-8 mb-20">
            {/* Left: The Ripple Effect */}
            <div className="lg:col-span-7 space-y-8">
              {/* Single Client Impact */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">The Ripple Effect: ONE Client Leads To</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group/item flex items-center gap-4 p-5 bg-gradient-to-r from-emerald-50/80 to-green-50/80 backdrop-blur-sm rounded-2xl border border-emerald-200/50 hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-xl">👥</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg text-emerald-800">"Who designed your thumbnails?"</p>
                        <p className="text-emerald-600 text-sm">Their audience starts asking questions</p>
                      </div>
                    </div>
                    
                    <div className="group/item flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-xl">🔗</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg text-blue-800">Network Referrals</p>
                        <p className="text-blue-600 text-sm">They share your contact with creator friends</p>
                      </div>
                    </div>
                    
                    <div className="group/item flex items-center gap-4 p-5 bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-xl">🎬</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg text-purple-800">Service Expansion Requests</p>
                        <p className="text-purple-600 text-sm">Video editing, animations, brand packages</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Timeline */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">📈</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">Proven Growth Pattern</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-xl border border-amber-200/50 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-black text-sm">1</div>
                        <span className="font-bold text-amber-800">Month 1</span>
                      </div>
                      <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">$900</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-xl border border-amber-200/50 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-black text-sm">2</div>
                        <span className="font-bold text-amber-800">Month 2</span>
                      </div>
                      <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">$1,800</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-xl border border-amber-200/50 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-black text-sm">3</div>
                        <span className="font-bold text-amber-800">Month 3</span>
                      </div>
                      <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">$2,700</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Momentum Accelerator */}
            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black">Exponential Growth</h3>
                    </div>
                    
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      What begins as curiosity transforms into unstoppable momentum...
                    </p>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                      <h4 className="text-lg font-bold mb-6 text-center">Your Inevitable Journey:</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
                          <span className="text-white/80 font-medium">Today:</span>
                          <span className="font-bold text-sm">Testing with 1-2 clients</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded-xl">
                          <span className="text-white/80 font-medium">Month 3:</span>
                          <span className="font-bold text-sm">5 clients = $4,500/month</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/20 rounded-xl border border-white/30">
                          <span className="text-white font-medium">Month 6:</span>
                          <span className="font-black">10+ clients = $9,000/month</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <p className="text-lg font-bold text-center leading-relaxed">
                        I want to ensure you're equipped when opportunity comes knocking at your door...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Comparison */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-lg opacity-10"></div>
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-10 shadow-2xl">
              <h4 className="text-3xl font-black text-center text-gray-900 mb-10">Your Creative Journey</h4>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <span className="text-4xl">🌱</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs font-bold text-white">NOW</span>
                    </div>
                  </div>
                  <h5 className="text-2xl font-black text-emerald-700 mb-4">Foundation Phase</h5>
                  <div className="space-y-2 text-emerald-600">
                    <p className="font-semibold">✓ Perfect for learning the ropes</p>
                    <p className="font-semibold">✓ Building creative confidence</p>
                    <p className="font-semibold">✓ Establishing your workflow</p>
                  </div>
                </div>
                
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-400 to-red-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <span className="text-4xl">🚀</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs font-bold text-white">SOON</span>
                    </div>
                  </div>
                  <h5 className="text-2xl font-black text-orange-700 mb-4">Scale Phase</h5>
                  <div className="space-y-2 text-orange-600">
                    <p className="font-semibold">✓ Meeting explosive demand</p>
                    <p className="font-semibold">✓ Maximizing every opportunity</p>
                    <p className="font-semibold">✓ Building your creative empire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Goldmine Section - Redesigned */}
      <section className="py-32 px-6 bg-gradient-to-br from-amber-50 via-orange-50/80 to-red-50/60 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-float-reverse"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-3xl animate-float"></div>
          </div>
          
          {/* Video Play Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B'%3E%3Cpath d='M40 30l40 30-40 30z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-10 py-5 mb-8 shadow-xl hover:scale-105 transition-all duration-500">
              <div className="relative">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-ping opacity-40"></div>
              </div>
              <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 uppercase tracking-wide">The Video Goldmine</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
              Why Video Commands <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-red-600">5X Higher</span> Prices
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-6 max-w-5xl mx-auto leading-relaxed">
              Our analysis of <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">1,050 Upwork jobs</span> reveals the profit multiplier you're missing
            </p>
          </div>

          {/* Price Revolution */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-600 to-amber-600">Price Revolution</span> That Changes Everything
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Side-by-side comparison of what clients actually pay</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
              {/* Image-Only Jobs */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-gray-100/80 backdrop-blur-sm rounded-full px-6 py-3 text-lg font-black text-gray-700 mb-6">
                      <span className="text-2xl">🖼️</span>
                      Traditional Design Jobs
                    </div>
                    <div className="relative">
                      <div className="text-6xl font-black text-gray-900 mb-3">$188</div>
                      <div className="text-xl text-gray-600 font-semibold">Average project value</div>
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        LIMITED
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50/80 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-300">
                      <span className="text-gray-700 font-medium">Static thumbnails</span>
                      <span className="font-black text-gray-900 text-lg">$10-30</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50/80 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-300">
                      <span className="text-gray-700 font-medium">Social posts</span>
                      <span className="font-black text-gray-900 text-lg">$5-20</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50/80 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-300">
                      <span className="text-gray-700 font-medium">Logo design</span>
                      <span className="font-black text-gray-900 text-lg">$50-150</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50/80 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-300">
                      <span className="text-gray-700 font-medium">Product photos</span>
                      <span className="font-black text-gray-900 text-lg">$25-75</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video + AI Jobs */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-amber-50/90 via-orange-50/90 to-red-50/90 backdrop-blur-xl border border-white/60 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-lg font-black shadow-lg animate-pulse">
                    HOT 🔥
                  </div>
                  
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-200/80 to-orange-200/80 backdrop-blur-sm border border-amber-300/50 rounded-full px-6 py-3 text-lg font-black text-amber-800 mb-6">
                      <span className="text-2xl">🎬</span>
                      Video + AI Goldmine
                    </div>
                    <div className="relative">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mb-3">$688</div>
                      <div className="text-xl text-amber-700 font-bold">Average project value</div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                        3.6X MORE
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-xl border border-amber-200/50 hover:scale-105 transition-all duration-300">
                      <span className="text-amber-800 font-bold">AI spokesperson videos</span>
                      <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 text-lg">$500-2,000</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-xl border border-amber-200/50 hover:scale-105 transition-all duration-300">
                      <span className="text-amber-800 font-bold">Product demo videos</span>
                      <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 text-lg">$300-800</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-xl border border-amber-200/50 hover:scale-105 transition-all duration-300">
                      <span className="text-amber-800 font-bold">Character animations</span>
                      <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 text-lg">$1,000+</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-xl border border-amber-200/50 hover:scale-105 transition-all duration-300">
                      <span className="text-amber-800 font-bold">Lipsync testimonials</span>
                      <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 text-lg">$200-500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="text-center">
              <div className="group relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative inline-flex items-center gap-6 bg-white/90 backdrop-blur-xl border border-white/60 rounded-full px-12 py-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <span className="text-2xl md:text-3xl font-black text-gray-900">That's</span>
                  <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">3.6X</span>
                  <span className="text-2xl md:text-3xl font-black text-gray-900">more money for the same effort</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Opportunities Feed */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                🔥 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-600 to-amber-600">Live Opportunities</span> Right Now
              </h3>
              <p className="text-xl text-gray-600">Real jobs posted in the last 24 hours that require video capabilities</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Job 1 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-orange-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-40"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-gray-900 mb-3">"AI Avatar for Course Platform"</h4>
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">Budget: $2,500</div>
                      <p className="text-lg text-gray-700 mb-4">Need talking head videos for 20 course modules</p>
                      <div className="bg-gradient-to-r from-red-50/80 to-orange-50/80 backdrop-blur-sm border border-red-200/50 rounded-2xl p-4">
                        <p className="font-bold text-red-700">⚠️ Without video features, you can't even bid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-emerald-500 rounded-full animate-ping opacity-40"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-gray-900 mb-3">"Product Videos with AI Models"</h4>
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">$150 per video</div>
                      <p className="text-lg text-gray-700 mb-4">(10 videos/week ongoing)</p>
                      <div className="bg-gradient-to-r from-emerald-50/80 to-green-50/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-4">
                        <p className="font-bold text-emerald-700">💰 That's $6,000/month from ONE client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job 3 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-40"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-gray-900 mb-3">"Consistent Character for Children's YouTube"</h4>
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-3">$3,000/month retainer</div>
                      <p className="text-lg text-gray-700 mb-4">Long-term character development project</p>
                      <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-4">
                        <p className="font-bold text-blue-700">🎯 Requires Brand DNA + Video animation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job 4 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-40"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-gray-900 mb-3">"Real Estate Virtual Tours with AI Host"</h4>
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-3">$500 per property</div>
                      <p className="text-lg text-gray-700 mb-4">(5-10 properties/month)</p>
                      <div className="bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-4">
                        <p className="font-bold text-purple-700">🚀 Premium pricing for complete package</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Intelligence Dashboard */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600">Data Dashboard</span> Don't Lie
              </h3>
              <p className="text-xl text-gray-600">Real market intelligence from our analysis</p>
            </div>

            <div className="group relative max-w-6xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 via-purple-800 to-blue-800 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-white shadow-2xl">
                
                {/* Top Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center group/stat">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl group-hover/stat:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🎬</span>
                    </div>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-3">165</div>
                    <div className="text-xl text-gray-300 font-semibold">Jobs Requiring Video</div>
                  </div>
                  <div className="text-center group/stat">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl group-hover/stat:scale-110 transition-transform duration-300">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-3">123</div>
                    <div className="text-xl text-gray-300 font-semibold">Jobs Requiring Consistency</div>
                  </div>
                  <div className="text-center group/stat">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl group-hover/stat:scale-110 transition-transform duration-300">
                      <span className="text-3xl">💎</span>
                    </div>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-3">87</div>
                    <div className="text-xl text-gray-300 font-semibold">Premium Jobs (Both)</div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="border-t border-white/20 pt-12">
                  <div className="grid md:grid-cols-2 gap-12 text-center">
                    <div className="group/metric">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover/metric:scale-110 transition-transform duration-300">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">10 minutes</div>
                      <div className="text-lg text-gray-300 font-semibold">Average creation time</div>
                    </div>
                    <div className="group/metric">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover/metric:scale-110 transition-transform duration-300">
                        <span className="text-2xl">💰</span>
                      </div>
                      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-3">$300-600/hr</div>
                      <div className="text-lg text-gray-300 font-semibold">Your effective hourly rate</div>
                    </div>
                  </div>
                </div>

                {/* Warning Alert */}
                <div className="mt-12 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl blur opacity-30"></div>
                  <div className="relative bg-gradient-to-r from-red-500/20 to-orange-600/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <span className="text-2xl">⚠️</span>
                      <span className="text-xl font-black text-red-300">Critical Market Gap</span>
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <p className="text-xl font-bold text-red-200">
                      Without video and Brand DNA capabilities, you're locked out of <span className="text-3xl font-black text-red-100">43%</span> of the highest-paying opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Story Spotlight */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                One <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600">Success Story</span> That Says It All
              </h3>
              <p className="text-xl text-gray-600">Real transformation from a real subscriber</p>
            </div>

            <div className="group relative max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-emerald-50/90 via-green-50/90 to-teal-50/90 backdrop-blur-xl border border-white/60 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="flex items-start gap-8">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl">
                      "
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">✓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-2xl md:text-3xl text-emerald-900 leading-relaxed mb-8 font-medium italic">
                      "I was limited to basic static work until I unlocked video capabilities. Now I create animated content with consistent characters that my clients love. <span className="font-black text-emerald-700">Same effort, premium results they can't get anywhere else</span>."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-black shadow-lg">
                        J
                      </div>
                      <div>
                        <div className="text-xl font-black text-emerald-900">Jake M.</div>
                        <div className="text-lg text-emerald-700 font-semibold">Founders Subscriber</div>
                        <div className="text-sm text-emerald-600">Transformed his business in 3 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Value Proposition */}
          <div className="text-center">
            <div className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative inline-flex items-center gap-6 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <span className="text-2xl md:text-3xl font-black">The advantage is clear:</span>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                  <span className="text-xl md:text-2xl font-black">Video + Consistency = Premium Territory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Game Changers - Redesigned */}
      <section className="py-32 px-6 bg-gradient-to-br from-indigo-50 via-purple-50/60 to-pink-50/40 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-3xl animate-float-reverse"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-3xl animate-float"></div>
          </div>
          
          {/* Gear Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239333EA'%3E%3Cpath d='M50 25l10 20-10 20-10-20z M25 50l20 10-20 10-20-10z M75 50l20 10-20 10-20-10z M50 75l10 20-10 20-10-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-10 py-5 mb-8 shadow-xl hover:scale-105 transition-all duration-500">
              <div className="relative">
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-600 rounded-full animate-ping opacity-40"></div>
              </div>
              <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 uppercase tracking-wide">Game Changers</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600">Premium Arsenal</span> You're Missing
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-6 max-w-5xl mx-auto leading-relaxed">
              These <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">pro-level features</span> separate basic creators from premium agencies
            </p>
          </div>

          {/* Feature Showcase */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Brand DNA Feature */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                
                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <span className="text-4xl">🧬</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">PRO</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Brand DNA™</h3>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-black">"The $3,500 Consistency Machine"</p>
                  </div>
                </div>
                
                {/* Client Quote */}
                <div className="group/quote relative mb-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-r from-purple-50/90 to-pink-50/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-black">
                        "
                      </div>
                      <div>
                        <p className="text-lg font-bold text-purple-800 mb-2">
                          💬 The #1 request from high-paying clients:
                        </p>
                        <p className="text-purple-700 italic text-xl font-medium">
                          "Can you keep our mascot EXACTLY the same across 100+ videos?"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Core Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="group/benefit flex items-center gap-4 p-5 bg-gradient-to-r from-emerald-50/80 to-green-50/80 backdrop-blur-sm rounded-2xl border border-emerald-200/50 hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-emerald-800">Train AI on 20 images → Perfect consistency</p>
                      <p className="text-emerald-600 text-sm">Any logo, character, or product</p>
                    </div>
                  </div>
                  
                  <div className="group/benefit flex items-center gap-4 p-5 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl">🎥</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-blue-800">Personal Zoom Training Sessions</p>
                      <p className="text-blue-600 text-sm">I personally help perfect your dataset</p>
                    </div>
                  </div>
                  
                  <div className="group/benefit flex items-center gap-4 p-5 bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-2xl border border-amber-200/50 hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl">💰</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-amber-800">Create AI videos and maintain perfect character consistency across all content</p>
                      <p className="text-amber-600 text-sm">The premium service that separates pros from amateurs</p>
                    </div>
                  </div>
                </div>
                
                {/* Success Story */}
                <div className="group/story relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl blur opacity-30"></div>
                  <div className="relative bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-20">
                      <span className="text-6xl">🚀</span>
                    </div>
                    <div className="relative z-10">
                      <p className="font-bold text-lg mb-2">💪 Real Success Story:</p>
                      <p className="text-emerald-100 text-lg">
                        One user secured a <span className="font-black text-white text-2xl">premium ongoing contract</span> using ONLY Brand DNA consistency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Animation Feature */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-600 to-teal-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                
                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <span className="text-4xl">🎬</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-xs font-bold text-white">HOT</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Video Animation + Lipsync</h3>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-black">"The $5K Client Magnet"</p>
                  </div>
                </div>
                
                {/* Value Proposition */}
                <div className="group/value relative mb-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-gradient-to-r from-blue-50/90 to-cyan-50/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50">
                    <p className="text-xl font-black text-blue-800 mb-3">
                      🚀 Turn static images into viral videos in 2 clicks
                    </p>
                    <p className="text-lg text-blue-700 font-semibold">
                      What used to take agencies hours now takes you minutes
                    </p>
                  </div>
                </div>
                
                {/* Core Capabilities */}
                <div className="space-y-4 mb-8">
                  <div className="group/cap flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-md mt-1">
                      <span className="text-xl">🖼️</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-blue-800">Any Image → Professional Video</p>
                      <p className="text-blue-600 text-sm">Upload and animate instantly with AI</p>
                    </div>
                  </div>
                  
                  <div className="group/cap flex items-start gap-4 p-5 bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-md mt-1">
                      <span className="text-xl">🎤</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-purple-800">Perfect Lip Sync Technology</p>
                      <p className="text-purple-600 text-sm">AI handles all timing and mouth movements</p>
                    </div>
                  </div>
                  
                  <div className="group/cap flex items-center gap-4 p-5 bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-2xl border border-amber-200/50 hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-amber-800">Create 20+ videos/day effortlessly</p>
                      <p className="text-amber-600 text-sm">Premium video content that basic tools can't create</p>
                    </div>
                  </div>
                </div>
                
                {/* Market Reality */}
                <div className="group/market relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-30"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-6 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-20">
                      <span className="text-6xl">💼</span>
                    </div>
                    <div className="relative z-10">
                      <p className="font-bold text-lg mb-2">🔥 Market Reality:</p>
                      <p className="text-blue-100 text-lg">
                        Companies need <span className="font-black text-white text-2xl">AI spokesperson videos</span> but most tools can't deliver professional quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Combined Value Statement */}
          <div className="text-center">
            <div className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative inline-flex items-center gap-6 bg-white/90 backdrop-blur-xl border border-white/60 rounded-full px-12 py-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                <span className="text-2xl md:text-3xl font-black text-gray-900">Brand DNA + Video =</span>
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">Premium</span>
                <span className="text-2xl md:text-3xl font-black text-gray-900">capabilities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section - NEW */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-8 py-4 text-sm font-bold mb-6">
              <span className="text-2xl">🎨</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-lg">NEW: PROFESSIONAL TEMPLATES</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Speed Up Your Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">10X Faster</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Save 80% of design time with battle-tested templates that convert. Each template is proven to generate high-paying clients.
            </p>

            {/* Stats Bar */}
            <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-xl border border-white/60 rounded-full px-12 py-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">200+</div>
                <div className="text-sm text-gray-600 font-medium">Templates</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">$50K+</div>
                <div className="text-sm text-gray-600 font-medium">Revenue Potential</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">1-Click</div>
                <div className="text-sm text-gray-600 font-medium">Ready to Use</div>
              </div>
            </div>
          </div>

          {/* Template Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {/* YouTube Thumbnails */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">📺</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">YouTube Thumbnails</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">$300-600/week</div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>MrBeast shock style</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Gaming VS formats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span>Educational layouts</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-4 py-2 rounded-full text-xs font-bold">
                  <span>20 Templates</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Product Photography */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">📸</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Product Photos</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">$150-500/proj</div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>Amazon specs ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                    <span>Lifestyle scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span>Multi-angle displays</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-xs font-bold">
                  <span>25 Templates</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Social Media Stories */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">📱</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Social Stories</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">$500-2K/month</div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Instagram Reels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                    <span>TikTok covers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                    <span>Story ad templates</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold">
                  <span>30 Templates</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* AI Avatar Videos */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  HOT 🔥
                </div>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">🎭</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">AI Avatar Videos</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">$2K+/project</div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span>Spokesperson scenes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Educational layouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>Demo backgrounds</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-4 py-2 rounded-full text-xs font-bold">
                  <span>15 Templates</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* E-commerce Variations */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">🛍️</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">E-com Variations</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">$80/200 imgs</div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Day/night/weather</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span>Color variations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                    <span>Size comparisons</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold">
                  <span>20 Templates</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Real Estate Staging */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">🏠</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Real Estate</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">$300-500/proj</div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span>Modern furniture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>Room transforms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <span>Exterior enhance</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold">
                  <span>15 Templates</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Logo Design */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">✨</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Logo Design</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">$150-500/logo</div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                    <span>Minimalist marks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                    <span>Badge styles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>Tech aesthetics</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-4 py-2 rounded-full text-xs font-bold">
                  <span>25 Templates</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Instagram Feeds */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">📲</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Instagram Feeds</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-3">$500-1.5K/mo</div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <span>Grid carousels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>Quote designs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                    <span>Product grids</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-pink-100 text-violet-700 px-4 py-2 rounded-full text-xs font-bold">
                  <span>40 Templates</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="group relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-600 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative inline-flex items-center gap-6 bg-white/90 backdrop-blur-xl border border-white/60 rounded-full px-12 py-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                <span className="text-2xl md:text-3xl font-black text-gray-900">200+ Templates =</span>
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">80% Time Saved</span>
                <span className="text-2xl md:text-3xl font-black text-gray-900">on every project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M0 30h60M30 0v60M0 0l60 60M60 0L0 60'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-semibold mb-6">
              <span className="text-lg">✨</span>
              <span>REAL WORLD RESULTS</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              See Our AI Features <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">In Action</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Watch how our AI transforms simple images into powerful content. These are real demos showing the magic in action.
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature Demo 1 - Animate */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-bold border border-purple-500/30">
                  <span className="text-lg">🎬</span>
                  ANIMATE DEMO
                </div>
                <h3 className="text-3xl md:text-4xl font-black">
                  Bring Images to Life
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform any static image into engaging animations with simple prompts. Perfect for social media, ads, and presentations that need to grab attention.
                </p>
                
                <div className="bg-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-400 font-medium text-sm">AI Prompt Used:</span>
                  </div>
                  <p className="text-purple-100 font-medium text-lg italic">
                    "Make this woman pose with my t-shirt"
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Original Image */}
                <div className="space-y-3">
                  <div className="text-center">
                    <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
                      Original Image
                    </span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <img 
                      src={animateOriginal} 
                      alt="Original model image" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Animated Result */}
                <div className="space-y-3">
                  <div className="text-center">
                    <span className="inline-block bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-400">
                      AI Generated Animation
                    </span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 aspect-[9/16]">
                    <video 
                      src={animateVideo} 
                      controls 
                      muted 
                      className="w-full h-full object-cover"
                      poster={animateOriginal}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Demo 2 - Lipsync */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-6 order-1 lg:order-1">
                {/* Original Image */}
                <div className="space-y-3">
                  <div className="text-center">
                    <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
                      Original Image
                    </span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <img 
                      src={lipsyncOriginal} 
                      alt="Original model with camera" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Lipsync Result */}
                <div className="space-y-3">
                  <div className="text-center">
                    <span className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium text-blue-400">
                      AI Lipsync Video
                    </span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 aspect-square">
                    <video 
                      src={lipsyncVideo} 
                      controls 
                      muted 
                      className="w-full h-full object-cover"
                      poster={lipsyncOriginal}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-2 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold border border-blue-500/30">
                  <span className="text-lg">🎤</span>
                  LIPSYNC DEMO
                </div>
                <h3 className="text-3xl md:text-4xl font-black">
                  AI Spokesperson Videos
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Turn any portrait into a talking spokesperson. Perfect for brand videos, testimonials, and social media content that converts.
                </p>
                
                <div className="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-400 font-medium text-sm">AI Prompt Used:</span>
                  </div>
                  <p className="text-blue-100 font-medium text-lg italic">
                    "Make this woman say: 'Hi my name is Emma and I'm the new TikTok face for Exki. Speak soon'"
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Demo 3 - Brand DNA */}
            <div className="space-y-12">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold border border-emerald-500/30 mb-6">
                  <span className="text-lg">🧬</span>
                  BRAND DNA DEMO
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  Train AI on Just 4 Images
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Upload 4 images to create your character's DNA. Then generate unlimited content in any setting, with perfect consistency every time.
                </p>
              </div>

              {/* Training Images */}
              <div className="space-y-6">
                <div className="text-center">
                  <span className="inline-block bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 text-lg font-medium text-emerald-400">
                    Training Dataset (4 Images)
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-emerald-500/30">
                    <img 
                      src={brandDnaOriginal1} 
                      alt="Training image 1" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-emerald-500/30">
                    <img 
                      src={brandDnaOriginal2} 
                      alt="Training image 2" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-emerald-500/30">
                    <img 
                      src={brandDnaOriginal3} 
                      alt="Training image 3" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-emerald-500/30">
                    <img 
                      src={brandDnaOriginal4} 
                      alt="Training image 4" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center">
                <div className="inline-flex items-center gap-4 text-emerald-400">
                  <div className="h-px bg-emerald-400/30 w-16"></div>
                  <span className="text-3xl">⬇</span>
                  <div className="h-px bg-emerald-400/30 w-16"></div>
                </div>
                <p className="text-emerald-400 font-medium mt-2">AI learns the character's DNA</p>
              </div>

              {/* Generated Gallery */}
              <div className="space-y-6">
                <div className="text-center">
                  <span className="inline-block bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 text-lg font-medium text-emerald-400">
                    Generated Gallery (Unlimited Possibilities)
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryAntartica} 
                      alt="Character in Antarctica" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryBeach} 
                      alt="Character at beach" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryMountain} 
                      alt="Character in mountains" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryParis} 
                      alt="Character in Paris" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryPool} 
                      alt="Character at pool" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryRuins} 
                      alt="Character at ruins" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={gallerySahara} 
                      alt="Character in Sahara" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryStreetfood} 
                      alt="Character with street food" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryStudio} 
                      alt="Character in studio" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryTimesquare} 
                      alt="Character in Times Square" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                    <img 
                      src={galleryVenice} 
                      alt="Character in Venice" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Bonus: Animated Videos */}
              <div className="space-y-6">
                <div className="text-center">
                  <span className="inline-block bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 text-lg font-medium text-purple-400">
                    Bonus: Animate Any Generated Image
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {/* Mountain Adventure */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
                        Mountain Adventure
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 items-center">
                      {/* Original Image */}
                      <div className="space-y-2">
                        <div className="text-center">
                          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
                            Original
                          </span>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                          <img 
                            src={galleryMountain} 
                            alt="Original mountain image" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-purple-400 text-2xl mb-2">→</div>
                        <div className="text-purple-400 text-xs font-medium text-center">AI Animation</div>
                      </div>
                    </div>

                    {/* Animated Video */}
                    <div className="space-y-2">
                      <div className="text-center">
                        <span className="inline-block bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-3 py-1 text-xs font-medium text-purple-400">
                          Animated Result
                        </span>
                      </div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 aspect-video">
                        <video 
                          src={galleryMountainVideo} 
                          controls 
                          muted 
                          className="w-full h-full object-cover"
                          poster="/src/assets/images/real-world-demos/brand-dna/gallery-mountain.jpg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pool Party */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
                        Pool Party
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 items-center">
                      {/* Original Image */}
                      <div className="space-y-2">
                        <div className="text-center">
                          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
                            Original
                          </span>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-xl border border-white/20">
                          <img 
                            src={galleryPool} 
                            alt="Original pool image" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-purple-400 text-2xl mb-2">→</div>
                        <div className="text-purple-400 text-xs font-medium text-center">AI Animation</div>
                      </div>
                    </div>

                    {/* Animated Video */}
                    <div className="space-y-2">
                      <div className="text-center">
                        <span className="inline-block bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-3 py-1 text-xs font-medium text-purple-400">
                          Animated Result
                        </span>
                      </div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30 aspect-video">
                        <video 
                          src={galleryPoolVideo} 
                          controls 
                          muted 
                          className="w-full h-full object-cover"
                          poster="/src/assets/images/real-world-demos/brand-dna/gallery-pool.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-32 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-3xl font-black mb-4">
                Ready to Create Your Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AI Magic</span>?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                These demos show just a fraction of what's possible. Join thousands of creators already using our AI tools.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('pricing');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Upgrade to Founders Subscription</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Secret Weapon - Redesigned */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-purple-900/80 to-indigo-900/60 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-reverse"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-3xl animate-float"></div>
          </div>
          
          {/* Academy Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B'%3E%3Cpath d='M60 20l20 40-40 0z M20 60l40 20 0-40z M100 60l-40 20 0-40z M60 100l20-40-40 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-10 py-5 mb-8 shadow-xl hover:scale-105 transition-all duration-500">
              <div className="relative">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-ping opacity-40"></div>
              </div>
              <span className="text-xl font-black text-white uppercase tracking-wide">🎯 Secret Weapon</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight">
              But Here's the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">REAL</span> Secret Weapon...
            </h2>
            
            <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 mb-8">
              AI Creative Agency Academy™
            </h3>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-5xl mx-auto leading-relaxed">
              Your complete <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">$0-to-$10K roadmap</span> (Value: $4,997) - FREE with subscription
            </p>
          </div>

          {/* Academy Overview */}
          <div className="mb-20">
            <div className="group relative max-w-6xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="text-center mb-10">
                  <p className="text-2xl md:text-3xl text-white mb-8 leading-relaxed">
                    I've taken everything I learned building my agency to <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">$47K/month</span> and condensed it into a complete step-by-step system:
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="group/stat text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl group-hover/stat:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-black text-white">5</span>
                    </div>
                    <div className="text-lg font-bold text-purple-300">Core Modules</div>
                    <div className="text-sm text-gray-400">Foundation to Scale</div>
                  </div>
                  <div className="group/stat text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl group-hover/stat:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-black text-white">3</span>
                    </div>
                    <div className="text-lg font-bold text-blue-300">Bonus Modules</div>
                    <div className="text-sm text-gray-400">Extra Value Add-ons</div>
                  </div>
                  <div className="group/stat text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl group-hover/stat:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-black text-white">$10K</span>
                    </div>
                    <div className="text-lg font-bold text-emerald-300">Monthly Target</div>
                    <div className="text-sm text-gray-400">Realistic Goal</div>
                  </div>
                  <div className="group/stat text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl group-hover/stat:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-black text-white">∞</span>
                    </div>
                    <div className="text-lg font-bold text-orange-300">Lifetime Access</div>
                    <div className="text-sm text-gray-400">Forever Yours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Modules Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Module 1 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-500">
                      01
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">NEW</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-white mb-2">Land Your First Client This Week</h4>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-bold">The exact system I used to get my first $5K client</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-purple-400/30">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The "Golden Hour" outreach strategy (3X response rates)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">My exact cold email templates that convert</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The "Social Proof Stack" method</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">How to find warm leads using AI</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-black shadow-lg text-lg">
                    Value: $1,497
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-semibold">2 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-600 to-teal-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-500">
                      02
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">PRO</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-white mb-2">Build Instant Credibility</h4>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-bold">Look like a $10K agency from day one</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-blue-400/30">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The 2-hour portfolio system (looks like years of work)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">Professional website templates that convert</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The "Authority Positioning" framework</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">Social media presence that attracts clients</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-black shadow-lg text-lg">
                    Value: $997
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-semibold">1.5 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                    03
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-white mb-2">Price Like a Pro</h4>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300 font-bold">Stop undervaluing your work forever</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-emerald-400/30">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The "Value Ladder" pricing strategy</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">How to justify premium rates with confidence</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">Package structures that maximize profit</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The "Anchoring Effect" for higher closes</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full font-black shadow-lg text-lg">
                    Value: $1,297
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-semibold">1 hour</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                    04
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-white mb-2">Unstoppable Mindset</h4>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300 font-bold">Reprogram your mind for inevitable success</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-orange-400/30">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The "CEO Mindset" transformation</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">How to eliminate imposter syndrome forever</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">Daily visualization techniques that work</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The "Future Self" method for motivation</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-black shadow-lg text-lg">
                    Value: $797
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-semibold">45 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 5 - Featured */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-40"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900/50 to-purple-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-indigo-500/30 p-8 hover:shadow-3xl transition-all duration-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-b-2xl font-bold text-sm shadow-lg">
                🚀 SCALE MODULE
              </div>
              
              <div className="flex items-center gap-6 mb-8 pt-4">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-xl">
                  05
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-2">Scale Without Limits</h4>
                  <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 font-bold">From $10K to $50K+ monthly revenue</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The "Team Building" blueprint</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">Systems that run without you</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">Premium service offerings</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="text-white font-medium text-lg">The "White Label" strategy</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl p-6 shadow-xl">
                  <h5 className="text-xl font-bold mb-4">🎯 Advanced Tactics:</h5>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-yellow-300" />
                      <span className="font-medium text-lg">Monthly $10K+ deals</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-yellow-300" />
                      <span className="font-medium text-lg">Retainer agreements</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Check className="w-6 h-6 text-yellow-300" />
                      <span className="font-medium text-lg">Enterprise clients</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-black shadow-lg text-xl">
                  Value: $1,997
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-semibold">2.5 hours</span>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    Premium Module
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus Modules */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Plus These Exclusive Bonuses
              </h3>
              <p className="text-xl text-gray-300">
                Worth <span className="text-green-400 font-bold">$3,497</span> - yours FREE
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Bonus 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-lg mx-auto mb-4">
                      B1
                    </div>
                    <h4 className="text-xl font-black text-white mb-2">100+ Done-For-You Templates</h4>
                    <p className="text-gray-300">Never start from scratch again</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-yellow-500/30">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                        <span className="text-gray-300 font-medium">Email sequences</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                        <span className="text-gray-300 font-medium">Proposals & contracts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                        <span className="text-gray-300 font-medium">Social media posts</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                      Value: $1,497
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonus 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-lg mx-auto mb-4">
                      B2
                    </div>
                    <h4 className="text-xl font-black text-white mb-2">Weekly Live Coaching</h4>
                    <p className="text-gray-300">Direct access to me every week</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-teal-500/30">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"></div>
                        <span className="text-gray-300 font-medium">Live Q&A sessions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"></div>
                        <span className="text-gray-300 font-medium">Hot seat coaching</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"></div>
                        <span className="text-gray-300 font-medium">Strategy sessions</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                      Value: $1,200
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonus 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-6 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-lg mx-auto mb-4">
                      B3
                    </div>
                    <h4 className="text-xl font-black text-white mb-2">Private Community</h4>
                    <p className="text-gray-300">Network with other winners</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-pink-500/30">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
                        <span className="text-gray-300 font-medium">Exclusive Discord</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
                        <span className="text-gray-300 font-medium">Monthly challenges</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
                        <span className="text-gray-300 font-medium">Success celebrations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                      Value: $800
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Value Summary */}
          <div className="text-center">
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-8 max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
                  Total Value Summary
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/30">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">$6,585</div>
                    <div className="text-lg text-gray-300 font-medium">Core Modules</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-green-500/30">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">$3,497</div>
                    <div className="text-lg text-gray-300 font-medium">Bonus Content</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl border border-yellow-500/30">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2">$10,082</div>
                    <div className="text-lg text-gray-300 font-medium">Total Value</div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-2xl mb-8 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-50 blur-sm"></div>
                  <div className="relative">
                    <div className="text-5xl font-black mb-3">FREE</div>
                    <div className="text-xl font-semibold">With Your Dezygn Subscription</div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-8">
                  Everything you need to build a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">$10K+/month</span> AI creative agency
                </p>
                
                <button 
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl px-12 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Get Instant Access</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Money Comparison - Enhanced */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-900 via-purple-900/50 to-blue-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm text-purple-300 px-6 py-3 rounded-full font-bold mb-6 border border-purple-500/30">
              💰 Revenue Transformation
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Here's What This Means in Real Money
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly how the Founders Plan transforms your earning potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Limitations */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8">
                <h3 className="text-2xl font-bold text-gray-300 mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  With Your Current Credits Only:
                </h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span className="text-gray-400">Max clients: 1-2</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span className="text-gray-400">Monthly potential: $300-500</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-400">You'll hit the ceiling FAST</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-400">No Brand DNA training</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-400">No video animation</span>
                  </li>
                </ul>
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4">
                  <p className="text-center font-bold text-red-400">
                    Limited to basic image generation only
                  </p>
                </div>
              </div>
            </div>

            {/* Founders Plan Benefits */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-purple-900/80 to-blue-900/80 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  With Founders Plan:
                </h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white"><strong>Unlimited Images:</strong> Handle 50+ clients</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white"><strong>Brand DNA:</strong> Train AI on client's logos & style</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white"><strong>Video & LipSync:</strong> Premium video services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white"><strong>AI Creative Agency:</strong> Complete business training</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white"><strong>Revenue:</strong> $5,000-$15,000+/month potential</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-white mb-2">🚀</div>
                  <p className="font-bold text-white text-lg">
                    Complete AI creative agency in a box
                  </p>
                  <p className="text-green-100 text-sm mt-2">
                    Everything you need to build a 6-figure business
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl">
              <span>⚡</span>
              <span>The upgrade pays for itself with your FIRST client</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Urgency Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-red-600/90 backdrop-blur-xl border border-red-400/30 text-white px-8 py-6 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 animate-pulse" />
                <span className="text-2xl font-black">⚠️ CRITICAL NOTICE</span>
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-xl font-bold mb-2">
                This 30% Discount Ends When You Leave This Page
              </div>
              <div className="text-lg text-red-100">
                This is a ONE-TIME opportunity for founders only
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/50">
              <h3 className="text-xl font-bold text-red-300 mb-4">❌ If You Leave:</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Pay $79-$159/month (regular pricing)</li>
                <li>• Miss out on founder's benefits</li>
                <li>• No grandfathered rates</li>
                <li>• This page won't be available again</li>
              </ul>
            </div>
            
            <div className="bg-green-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-300 mb-4">✅ If You Act Now:</h3>
              <ul className="text-white space-y-3">
                <li>• Lock in $49-$99/month forever</li>
                <li>• Exclusive founder's pricing</li>
                <li>• 7-day free trial starts today</li>
                <li>• All premium features included</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full font-black text-xl shadow-xl inline-block">
            🚨 Your ONE SHOT at founder's pricing ends here
          </div>
        </div>
      </section>

      {/* Triple Money Back Guarantee */}
      <section className="px-6 py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-40"></div>
            <div className="relative bg-green-600/90 backdrop-blur-xl border border-green-400/30 text-white p-12 rounded-3xl shadow-2xl">
              <div className="text-6xl mb-6">💰</div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Triple Money Back Guarantee
              </h2>
              <div className="text-2xl font-bold mb-6 text-green-100">
                After 365 days, if you haven't made 3X your investment,<br />
                we'll triple your money back
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-green-300/30">
                <div className="text-xl font-bold mb-4">Here's How It Works:</div>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="font-bold mb-2">Step 1</div>
                    <div className="text-green-100">Follow our proven system for 365 days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">💵</div>
                    <div className="font-bold mb-2">Step 2</div>
                    <div className="text-green-100">If you don't make 3X your investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔄</div>
                    <div className="font-bold mb-2">Step 3</div>
                    <div className="text-green-100">We pay you 3X what you paid us</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-lg text-green-100">
                We're so confident in this system, we're willing to bet our own money on your success.
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ConversionZign Bonus Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-reverse"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-8 py-4 text-sm font-bold mb-6">
              <span className="text-2xl">🎁</span>
              <span className="text-indigo-300 font-bold text-lg">EXCLUSIVE BONUS</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              FREE ConversionZign Access
              <span className="block text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mt-2">
                Included with Every Dezygn Plan ($249 Value)
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Turn your ideas into high-converting landing pages with AI-powered blueprints
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  Your AI-Powered Guide to High-Converting Landing Pages
                </h3>
                <p className="text-gray-300 mb-4">
                  ConversionZign is your intelligent assistant that transforms ideas into actionable landing page blueprints. No more staring at blank screens or wondering what to write!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Create sales pages, one-pagers, and thank you pages in minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Copy any successful website design with AI analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Get conversion-optimized copy and layout suggestions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Export to your favorite builders and marketing tools</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
                <h4 className="text-xl font-bold mb-6 text-center">What You Get with ConversionZign</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="font-semibold">Monthly Landing Pages</span>
                    <span className="text-indigo-400 font-bold">50-100 pages</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="font-semibold">Regular Price</span>
                    <span className="text-gray-400 line-through">$29-$249/month</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                    <span className="font-semibold">Your Price</span>
                    <span className="text-green-400 font-bold text-xl">FREE Forever</span>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-6">
                  That's up to $2,988/year in savings!
                </p>
              </div>

              <div className="text-center">
                <p className="text-lg text-indigo-300 font-semibold mb-4">
                  Ready to create landing pages that convert?
                </p>
                <a href="https://dezygn.checkoutpage.com/get-even-more-from-dezygn" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span>Claim Your Free ConversionZign Access</span>
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VEO3 Video Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-reverse"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grid-gradient' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234F46E5;stop-opacity:0.1' /%3E%3Cstop offset='100%25' style='stop-color:%237C3AED;stop-opacity:0.1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0 0h100v100H0z' fill='url(%23grid-gradient)'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='rgba(255,255,255,0.05)' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 text-sm font-bold mb-6">
              <span className="text-2xl">🎬</span>
              <span className="text-blue-300 font-bold text-lg">WORLD'S MOST ADVANCED AI VIDEO MODEL</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Go Viral with VEO3
              <span className="block text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                Create Videos That Get Millions of Views
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The same AI technology behind viral Yeti and Penguin videos that are taking over social media. 
              Generate professional videos with perfect audio sync that captivate audiences.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Go Viral Instantly</h3>
              <p className="text-gray-300">
                Join the viral sensation - Yeti and penguin meme videos are hitting millions of views across all platforms
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3">Perfect Audio Sync</h3>
              <p className="text-gray-300">
                VEO3 is the only model that generates video and audio simultaneously for perfect synchronization
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Professional Quality</h3>
              <p className="text-gray-300">
                Create stunning videos that rival professional productions - no filming, no editing, just pure AI magic
              </p>
            </div>
          </div>

          {/* Video Examples Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              See What's Possible with VEO3
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Video 1 */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
                <iframe 
                  src="https://www.youtube.com/embed/-UW6nMGN2Bw" 
                  title="VEO3 Example - Viral Yeti Dancing"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video 2 */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
                <iframe 
                  src="https://www.youtube.com/embed/McFChYae6p8" 
                  title="VEO3 Example - Penguin Adventures"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video 3 */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
                <iframe 
                  src="https://www.youtube.com/embed/FcCF-bRa1uY" 
                  title="VEO3 Example - Character Animation"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video 4 */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
                <iframe 
                  src="https://www.youtube.com/embed/j4CT5dZe8ZA" 
                  title="VEO3 Example - Epic Yeti Compilation"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Create Your First Viral Video?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Join thousands of creators using VEO3 to generate content that captivates millions. 
                No filming, no editing, just pure creative freedom.
              </p>
              <a href="https://dezygn.checkoutpage.com/get-even-more-from-dezygn" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="text-xl">Start Creating Viral Videos</span>
                <span className="text-2xl">🚀</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison Table Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-100 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-reverse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm text-red-600 px-6 py-3 rounded-full font-bold mb-6 border border-red-500/30">
              💸 Competitor Analysis
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              See How Much You're <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Saving</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To get what Dezygn offers, you'd need to pay for multiple expensive tools
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-2xl backdrop-blur-sm bg-white/90">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                    <th className="text-left p-6 text-gray-900 font-bold text-lg">Tool/Service</th>
                    <th className="text-center p-6 text-gray-900 font-bold text-lg">Monthly Cost</th>
                    <th className="text-center p-6 text-gray-900 font-bold text-lg">Limitations</th>
                    <th className="text-center p-6 text-gray-900 font-bold text-lg">What You Get</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {/* Synthesia */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-semibold text-gray-900">Synthesia (Personal)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-2xl font-bold text-red-600">$89</span>
                      <span className="text-gray-500 text-sm block">/month</span>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>• Only 10 min/month</div>
                        <div>• No custom avatars</div>
                        <div>• No consistency</div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-500 text-sm">Basic AI videos</span>
                    </td>
                  </tr>

                  {/* HeyGen */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="font-semibold text-gray-900">HeyGen (Creator)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-2xl font-bold text-orange-600">$59</span>
                      <span className="text-gray-500 text-sm block">/month</span>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>• 15 min/month</div>
                        <div>• No consistency</div>
                        <div>• Custom = $145/month</div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-500 text-sm">Instant avatars only</span>
                    </td>
                  </tr>

                  {/* D-ID */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-semibold text-gray-900">D-ID (Pro)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-2xl font-bold text-yellow-600">$49</span>
                      <span className="text-gray-500 text-sm block">/month</span>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>• 15 min/month</div>
                        <div>• No training</div>
                        <div>• Watermarked</div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-500 text-sm">Basic talking heads</span>
                    </td>
                  </tr>

                  {/* Additional Tools */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="font-semibold text-gray-900">Midjourney + LoRA Training</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-2xl font-bold text-purple-600">$130</span>
                      <span className="text-gray-500 text-sm block">/month</span>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>• No video</div>
                        <div>• Complex setup</div>
                        <div>• Per character cost</div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-500 text-sm">Images only</span>
                    </td>
                  </tr>

                  {/* Total Competition */}
                  <tr className="border-b-2 border-red-200 bg-red-50/50">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="font-bold text-gray-900">To Match Dezygn's Features</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-3xl font-black text-red-600">$275+</span>
                      <span className="text-red-500 text-sm block font-bold">/month</span>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-sm text-red-600 space-y-1">
                        <div>• Multiple subscriptions</div>
                        <div>• Complex workflow</div>
                        <div>• Still missing features</div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-red-600 text-sm font-bold">Partial solution</span>
                    </td>
                  </tr>

                  {/* Dezygn Solution */}
                  <tr className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="font-bold text-gray-900 text-lg">🚀 Dezygn Founders Plan</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">$49-99</span>
                      <span className="text-green-600 text-sm block font-bold">/month</span>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-sm text-green-600 space-y-1 font-semibold">
                        <div>✅ UNLIMITED everything</div>
                        <div>✅ No watermarks</div>
                        <div>✅ Commercial rights</div>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-sm text-green-600 space-y-1 font-semibold">
                        <div>✅ Images + Videos + LipSync</div>
                        <div>✅ Brand DNA training</div>
                        <div>✅ Business Academy</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Savings Highlight */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-6 rounded-2xl shadow-xl">
              <div className="text-4xl">💰</div>
              <div>
                <div className="text-2xl font-black">You Save $176-226/month</div>
                <div className="text-lg font-semibold text-green-100">That's 64-82% less than competitors!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-reverse"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-8 py-4 text-sm font-bold mb-6">
              <span className="text-2xl">❓</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-lg">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">We've Got Answers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about Dezygn's plans and features
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                What's the difference between Dezygn and ConversionZign?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> Dezygn is our self-service AI design platform where you create everything yourself using our tools. ConversionZign is our done-for-you service where our team of designers and AI experts handle your projects from start to finish. Think of Dezygn as your creative toolkit, and ConversionZign as your creative team.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                Can I upgrade or downgrade my plan anytime?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> Absolutely! You can upgrade to a higher plan instantly and see the changes immediately. When downgrading, the change takes effect at your next billing cycle. Your founder's discount is locked in forever, regardless of which plan you choose.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                What happens after my 7-day free trial?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> After your 7-day free trial, you'll be automatically enrolled in your chosen plan at the founder's price (30% off regular pricing). You can cancel anytime during the trial with no charges. If you continue, you'll keep this special pricing forever - even if we raise prices in the future.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                Do unused credits roll over to the next month?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> Monthly subscription credits don't roll over - they refresh each billing cycle. However, any credits you purchase separately (credit packs) never expire and can be used anytime. This gives you flexibility to handle both regular work and sudden client rushes.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                What's included in Brand DNA training?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> Brand DNA training lets you upload 20 images of any logo, character, product, or person to create a custom AI model. This ensures 100% consistency across all your designs. You get 5 trainings/month on Freelancer or 10/month on Agency, plus dedicated Zoom support to ensure perfect results. Each training creates a permanent model you can use unlimited times.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                How does the Triple Money Back Guarantee work?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> We're so confident in our system that if you follow our AI Agency Academy training and use Dezygn consistently for 365 days, and don't make at least 3X your investment back, we'll refund you 3X what you paid us. That's right - we'll pay YOU for trying. This isn't just a guarantee, it's our commitment to your success.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                Can I use Dezygn designs for commercial projects?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> Yes! Everything you create with Dezygn comes with full commercial rights. You own 100% of your creations and can use them for client work, sell them, or use them in any commercial project. There are no additional licensing fees or royalties - create once, profit forever.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                What's the difference between monthly credits and credit packs?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> Monthly credits come with your subscription (500 for Freelancer, 1,500 for Agency) and refresh each month. Credit packs are one-time purchases that never expire - perfect for busy periods or large projects. You can stack them with your monthly credits for maximum flexibility. Plus, the more credits you buy at once, the more you save (up to 33% off).
              </p>
            </div>

            {/* FAQ 9 - Cancel Subscription */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                Can I cancel my subscription at any time?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> Yes! You're in full control. Simply go to Settings, click on "Manage Subscription", and you can upgrade, downgrade, or cancel your subscription whenever you want. There are no long-term contracts or cancellation fees - you're always in charge of your account.
              </p>
            </div>

            {/* FAQ 10 - Additional Credits Pricing */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-purple-600">Q:</span>
                How much do additional credits cost?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">A:</span> Need more credits? We offer flexible credit packs: 5,000 credits for $99, 12,000 credits for $199 (save 20%), or 30,000 credits for $399 (save 33%). These credits never expire and stack with your monthly allowance. Perfect for busy periods or large projects!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Founders Subscription Plans - Final CTA */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M0 30h60M30 0v60M0 0l60 60M60 0L0 60'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-8 py-4 text-sm font-semibold mb-6">
              <span className="text-2xl">🎁</span>
              <span className="text-green-300 font-bold text-lg">EXCLUSIVE 30% DISCOUNT</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Get Dezygn Founders Upgrade
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your Unfair Advantage in the AI Gold Rush
            </p>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-40"></div>
              <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-black mb-2">🎉 FREE FOR 7 DAYS</div>
                <div className="text-lg font-semibold">Then lock in founder's pricing forever</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Start your trial today - no credit card required for 7 days
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Freelancer Plan */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Freelancer (Founders)</h3>
                    <p className="text-gray-300">Perfect for solo creators ready to scale</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-center mb-4">
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                      FREE
                    </div>
                    <div className="text-lg text-green-300 font-bold">for 7 days</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-baseline justify-center gap-3 mb-2">
                      <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        $49
                      </span>
                      <span className="text-gray-400 text-sm">per month after trial</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-sm text-gray-400 line-through">$79</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold border border-green-500/30">
                        Save $30/month
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">500 Credits/Month</span>
                    <span className="text-xs text-gray-400">(vs your current 21-208)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">5 Brand DNA Trainings/Month + Zoom Support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Video Animation</span>
                    <span className="text-xs text-gray-400">Turn images into stunning videos</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">AI Lipsync</span>
                    <span className="text-xs text-gray-400">Perfect voice synchronization</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">AI Creative Agency Academy</span>
                    <span className="text-xs text-yellow-400 font-bold">($4,997 value)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                    <Check className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">100+ Professional Templates</span>
                    <span className="text-xs text-purple-400 font-bold">(NEW!)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Monthly Template Updates</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span className="text-white font-medium">FREE ConversionZign Access</span>
                    <span className="text-xs text-indigo-400 font-bold">($249 value)</span>
                  </div>
                </div>

                <a href="https://dezygn.checkoutpage.com/get-even-more-from-dezygn" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4 block text-center">
                  Start for free today 👉
                </a>
                
                <p className="text-center text-sm text-gray-400">
                  Perfect for: Solo creators scaling to 10-15 steady clients
                </p>
              </div>
            </div>

            {/* Agency Plan */}
            <div className="group relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-b-2xl font-bold text-sm shadow-lg z-10">
                🔥 BEST VALUE
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition-opacity"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border-2 border-orange-500/50 rounded-3xl p-8 pt-12 hover:border-orange-400/70 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Agency (Founders)</h3>
                    <p className="text-gray-300">For ambitious creators building a real agency</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-center mb-4">
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                      FREE
                    </div>
                    <div className="text-lg text-green-300 font-bold">for 7 days</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-baseline justify-center gap-3 mb-2">
                      <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                        $99
                      </span>
                      <span className="text-gray-400 text-sm">per month after trial</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-sm text-gray-400 line-through">$159</span>
                      <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full text-xs font-bold border border-orange-500/30">
                        Save $60/month
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">1,500 Credits/Month</span>
                    <span className="text-xs text-orange-400 font-bold">(7X more!)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">10 Brand DNA Trainings/Month + Zoom Support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Video Animation</span>
                    <span className="text-xs text-gray-400">Unlimited video creation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">AI Lipsync</span>
                    <span className="text-xs text-gray-400">Build entire video campaigns</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">AI Creative Agency Academy</span>
                    <span className="text-xs text-yellow-400 font-bold">($4,997 value)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Priority Support</span>
                    <span className="text-xs text-blue-400">Get help when you need it</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                    <Check className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">200+ Professional Templates</span>
                    <span className="text-xs text-purple-400 font-bold">(NEW!)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Weekly Template Updates</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-500/30">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-medium">Custom Template Requests</span>
                    <span className="text-xs text-emerald-400 font-bold">(EXCLUSIVE!)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span className="text-white font-medium">FREE ConversionZign Access</span>
                    <span className="text-xs text-indigo-400 font-bold">($249 value)</span>
                  </div>
                </div>

                <a href="https://dezygn.checkoutpage.com/get-even-more-from-dezygn" className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4 block text-center">
                  Start for free today 👉
                </a>
                
                <p className="text-center text-sm text-gray-400">
                  Perfect for: Building a real agency with 30+ clients
                </p>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="group relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-b-2xl font-bold text-sm shadow-lg z-10">
                🏢 ENTERPRISE
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition-opacity"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border-2 border-indigo-500/50 rounded-3xl p-8 pt-12 hover:border-indigo-400/70 transition-all hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Enterprise</h3>
                    <p className="text-gray-300">For large teams and agencies</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-center mb-4">
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                      CUSTOM
                    </div>
                    <div className="text-lg text-indigo-300 font-bold">Tailored for your needs</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-baseline justify-center gap-3 mb-2">
                      <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        Starting at $699
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      per month - custom pricing available
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span className="text-white font-medium">10,000+ Credits/Month</span>
                    <span className="text-xs text-indigo-400 font-bold">(Customizable)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span className="text-white font-medium">Unlimited Brand DNA Trainings</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span className="text-white font-medium">Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                    <Check className="w-5 h-5 text-indigo-400" />
                    <span className="text-white font-medium">Custom Integrations & API Access</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">Done-for-You Services Available</span>
                    <span className="text-xs text-yellow-400 font-bold">(Optional add-on)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Priority Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">SLA & 24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-500/30">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-medium">Custom Training & Onboarding</span>
                  </div>
                </div>

                <a href="mailto:support@youzign.com?subject=Enterprise%20Plan%20Inquiry&body=Hi%2C%20I'm%20interested%20in%20the%20Enterprise%20plan%20for%20my%20team." className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4 block text-center">
                  Get a Custom Quote →
                </a>
                
                <p className="text-center text-sm text-gray-400">
                  Perfect for: Large teams with 50+ active projects
                </p>
              </div>
            </div>
          </div>

          {/* No Thanks Link and Guarantee */}
          <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl backdrop-blur-sm mb-8">
              <p className="text-xl font-bold text-green-300 mb-2">
                💰 Triple Money Back Guarantee
              </p>
              <p className="text-green-200">
                After 365 days, if you haven't made 3X your investment, we'll triple your money back
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <Link to="/success" className="inline-block bg-gray-800/50 backdrop-blur-sm border-2 border-gray-600/50 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:shadow-lg">
                No thanks, I don't want video generation, Brand DNA and the AI Creative Academy
              </Link>
              
              <Link to="/success" className="inline-block bg-gradient-to-r from-gray-700 to-gray-800 text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
                Take me to the basic Dezygn experience →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <Logo variant="light" size="md" />
              <div className="flex flex-col sm:flex-row gap-6 text-white/70">
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              </div>
            </div>
            <div className="text-white/50 text-sm">
              © 2025 Youzign SPRL. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UpgradePage;