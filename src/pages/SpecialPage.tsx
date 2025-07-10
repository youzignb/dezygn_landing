import { useState, useEffect } from 'react';
import { ChevronDown, Check, Clock, Users, Zap, Shield, Star, ArrowRight, Lock } from 'lucide-react';
import Logo from '../components/Logo';

// Import job images
import skincare1 from '../assets/images/jobs/skincare-product-shots/skincare1.jpeg';
import skincare2 from '../assets/images/jobs/skincare-product-shots/skincare2.jpeg';
import skincareOriginal from '../assets/images/jobs/skincare-product-shots/skincare_original.png';

// YouTube Thumbnails
import thumbnail0 from '../assets/images/jobs/youtube-thumbnails/thumbnail0.png';
import thumbnail1 from '../assets/images/jobs/youtube-thumbnails/thumbnail1.png';
import thumbnail2 from '../assets/images/jobs/youtube-thumbnails/thumbnail2.png';

// Instagram Fashion
import fashion0 from '../assets/images/jobs/instagram-fashion/fashion0.jpg';
import fashion1 from '../assets/images/jobs/instagram-fashion/fashion1.jpg';
import fashion2 from '../assets/images/jobs/instagram-fashion/fashion2.jpeg';

// Shopify Store
import shopify0 from '../assets/images/jobs/shopify-store/shopify0.png';
import shopify1 from '../assets/images/jobs/shopify-store/shopify1.jpeg';
import shopify2 from '../assets/images/jobs/shopify-store/shopify2.jpg';

// Fitness Equipment
import fitness0 from '../assets/images/jobs/fitness-equipment/fitness0.jpg';
import fitness1 from '../assets/images/jobs/fitness-equipment/fitness1.jpg';
import fitness2 from '../assets/images/jobs/fitness-equipment/fitness2.jpg';

// Pet Product Photography
import pet0 from '../assets/images/jobs/pet-product-photography/pet0.jpg';
import pet1 from '../assets/images/jobs/pet-product-photography/pet1.jpg';
import pet2 from '../assets/images/jobs/pet-product-photography/pet2.jpg';

// Real Estate Staging
import realestate0 from '../assets/images/jobs/real-estate-staging/realestate0.jpg';
import realestate1 from '../assets/images/jobs/real-estate-staging/realestate1.jpg';
import realestate2 from '../assets/images/jobs/real-estate-staging/realestate2.jpg';

// Youzign Integration
import youzignLogo from '../assets/images/youzign-integration/youzign-logo.png';
import youzignBeforeOriginal from '../assets/images/youzign-integration/youzign-before-original.png';
import youzignAfterTransformed from '../assets/images/youzign-integration/youzign-after-transormed-with-design.png';

// Toolkit Features
import hyperVisionEngine from '../assets/images/toolkit-features/hypervision_engine.png';
import smartTextVision from '../assets/images/toolkit-features/smart_text_vision.png';
import instantBrandSync from '../assets/images/toolkit-features/instant_brand_syncs.png';
import liveDesign from '../assets/images/toolkit-features/live_design.png';
import reDesignOne from '../assets/images/toolkit-features/reDesignOne.png';
import visualDNA from '../assets/images/toolkit-features/visual_dna.png';
import fusionCanvas from '../assets/images/toolkit-features/fusion_canvas.png';
import pocketStudio from '../assets/images/toolkit-features/pocketStudio.png';
import teamSpace from '../assets/images/toolkit-features/TeamSpace.png';
import instaShare from '../assets/images/toolkit-features/instashare.png';

// Made with Dezygn images
import lelaModelBeach from '../assets/images/made-with-dezygn/lela-model-beach.png';
import lelaGridProductMockups from '../assets/images/made-with-dezygn/lela-grid-of-product-mockups.png';
import gridInstagramContent from '../assets/images/made-with-dezygn/grid-of-instagram-social-media-content.png';
import lelaSuncreamTable from '../assets/images/made-with-dezygn/lela-suncream-on-table.jpeg';
import brandIdentityResearch from '../assets/images/made-with-dezygn/brand-identity-research.png';
import lelaSocialMediaPost from '../assets/images/made-with-dezygn/lela-social-media-post-with-text.png';
import kidTeddybearFunfair from '../assets/images/made-with-dezygn/kid-holding-teddybear-funfair.png';
import soapPebblesAd from '../assets/images/made-with-dezygn/soap-on-pebbles-ad.png';
import lelaGrid9Poses from '../assets/images/made-with-dezygn/lela-grid-of-9-poses-for-model.png';
import posterBabyShop from '../assets/images/made-with-dezygn/poster-for-baby-shop.png';
import modelTshirtLogo from '../assets/images/made-with-dezygn/model-wearing-tshirt-with-logo.png';
import catTableVegetables from '../assets/images/made-with-dezygn/cat-table-vegetables.png';
import lelaSuncreamHand from '../assets/images/made-with-dezygn/lela-suncream-in-hand.png';
import youngWomanJeans from '../assets/images/made-with-dezygn/young-woman-in-jeans.png';
import lelaSocialMediaPost2 from '../assets/images/made-with-dezygn/lela-social-media-post-with-text-2.png';
import squareAdDezygn from '../assets/images/made-with-dezygn/square-ad-for-dezyg.png';
import lelaSuncreamWomanHolding from '../assets/images/made-with-dezygn/lela-suncream-womain-holding-in-hand.png';

// Timer Component
function CountdownTimer({ className = "" }: { className?: string }) {
  // Calculate time until Thursday July 17th, 2025
  const getTimeUntilJuly8 = () => {
    const targetDate = new Date('2025-07-17T23:59:59');
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

function SpecialPage() {

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
            <Clock className="w-5 h-5 text-white/80" />
            <CountdownTimer />
          </div>
          
          {/* Text Middle */}
          <p className="font-semibold text-center flex-1 mx-4">
            Legacy pricing ends soon → then $49/month forever
          </p>
          
          {/* Button Right */}
          <button 
            onClick={() => {
              const element = document.getElementById('cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-gray-100 transition whitespace-nowrap"
          >
            Secure Deal →
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">The AI Creative Revolution That's Minting New Millionaires</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            <span className="block text-gray-900">The AI Creative Revolution</span>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600">
                That's Minting New Millionaires
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 2 100 2 150 10C200 2 250 2 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cc0bff"/>
                    <stop offset="100%" stopColor="#4182ff"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="block text-gray-900 mt-2">(While 88% of People Still Don't Know It Exists)</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            296 new AI design jobs posted every single day at $360 average...
            and only 12% of creatives have figured out how to claim them.
            <span className="block mt-2 font-bold text-purple-600">This window closes fast.</span>
          </p>
          
          {/* YouTube Video Embed */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="relative rounded-3xl aspect-video shadow-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/6FnULxC4-Hk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById('cta');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Claim Your Early Mover Advantage</span>
              <span className="text-xl">→</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium text-purple-600">Get in before the window closes</span>
              <span>•</span>
              <span className="line-through opacity-60">$49/month</span>
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-bold">Limited Time</span>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex items-center justify-center">
            <div className="flex items-center gap-4">
              {/* User Avatars */}
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format',
                  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face&auto=format',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format'
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src}
                    alt={`Happy user ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-lg hover:scale-110 transition-transform duration-200"
                  />
                ))}
              </div>
              
              {/* Market Data */}
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">214,495+ Users</p>
                <p className="text-xs text-gray-600">Since 2014</p>
              </div>
              
              {/* 5 Star Rating */}
              <div className="flex items-center gap-1 ml-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">365-Day Opportunity Window</span>
            </div>
          </div>
        </div>

        {/* Floating UI Elements for Visual Interest */}
        <div className="absolute top-20 left-10 bg-white rounded-2xl shadow-lg p-4 transform rotate-3 hidden lg:block animate-float">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium">New thumbnail job posted 2 min ago: $35</p>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-10 bg-white rounded-2xl shadow-lg p-4 transform -rotate-3 hidden lg:block animate-float-reverse animation-delay-2000">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium">Virtual staging project: $300 (claimed in 4 min)</p>
          </div>
        </div>
      </section>

      {/* 3 Steps Section - Complete Redesign */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              <span>Capitalize on the Opportunity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Your 3-Step Early Mover Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Claim your share of 892 new AI design jobs posted this week
            </p>
          </div>
          
          {/* 3 Column Grid */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Step 1 */}
            <div className="flex-1 relative group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-purple-200 hover:shadow-xl transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  01
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Upload Your Ingredients</h3>
                  <p className="text-gray-600 mb-4">
                    Import any brand, product photo, or reference image to create unlimited variations
                  </p>
                  <div className="flex gap-2 justify-center">
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">Brand Import</span>
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">30 Seconds</span>
                  </div>
                </div>
                
                {/* Time Badge */}
                <div className="absolute -bottom-3 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ⏱️ 30 sec
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 relative group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  02
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💬</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Talk to Dezygn Like a Human</h3>
                  <p className="text-gray-600 mb-4">
                    "Make a YouTube thumbnail with fire effects" - Done in 30 seconds
                  </p>
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 font-mono">
                      "Add glowing text"
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 font-mono">
                      "Make it more clickable"
                    </div>
                  </div>
                </div>
                
                {/* Time Badge */}
                <div className="absolute -bottom-3 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ⏱️ 2 min
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 relative group">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-purple-600 font-bold text-lg shadow-lg">
                  03
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💵</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Dominate While Others Debate</h3>
                  <p className="text-white/90 mb-4">
                    Deliver in minutes what others take hours to create. Claim jobs while 88% are still figuring it out.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold font-mono">
                      <span className="animate-pulse">67%</span>
                    </div>
                    <p className="text-sm text-white/70">Adoption by Q4 2025</p>
                  </div>
                </div>
                
                {/* Money Badge */}
                <div className="absolute -bottom-3 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ⚡ Window Closing
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Ready to claim your share of the AI creative revolution?
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Every day you wait, 296 more jobs get claimed by early movers
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('cta');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get In Before It's Too Late</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem/Opportunity Section - Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 rounded-full px-4 py-2 text-sm font-semibold mb-6 animate-bounce">
              <span className="text-lg">🔥</span>
              <span>HOT OPPORTUNITY ALERT</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Early Mover</span>
              <br />Advantage Window Is Open
            </h2>
          </div>

          {/* Live Counter Display */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 mb-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="40" strokeDasharray="10 20"/>
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <p className="text-xl mb-4 opacity-90">The market data shows:</p>
              <div className="text-5xl md:text-7xl font-black mb-4">
                296 Jobs
              </div>
              <p className="text-2xl mb-6">posted daily (156% year-over-year growth)</p>
              
              {/* Live Updates Ticker */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-lg font-medium">Only 12% adoption rate • Window closes when it hits 67%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Time = Money Visual */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">The Opportunity Window That Changes Everything</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <p className="font-bold text-xl">Week 1 (2024): 32 jobs/day</p>
                      <p className="text-gray-600">When AI design started</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <p className="font-bold text-xl">Week 1 (2025): 296 jobs/day</p>
                      <p className="text-gray-600">The explosion is happening</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <p className="font-bold text-xl">Your competition: 12%</p>
                      <p className="text-gray-600">Early adopters (that's your window)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual Representation */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 text-center">
                  <p className="text-sm text-gray-600 mb-2">By year end</p>
                  <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                    67%
                  </p>
                  <div className="text-4xl font-bold mb-2">adoption rate</div>
                  <p className="text-sm text-gray-600">That's when the window closes.</p>
                </div>
                
                {/* Floating icons */}
                <div className="absolute -top-4 -right-4 text-4xl animate-float">⚡</div>
                <div className="absolute -bottom-4 -left-4 text-4xl animate-float animation-delay-2000">🚀</div>
              </div>
            </div>
          </div>

          {/* Opportunity Cards */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">Beyond Thumbnails</span>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  20+ Job Categories That Didn't Exist 12 Months Ago
                </span>
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The same window that made early Amazon sellers and crypto investors rich
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🏠', title: 'Virtual Staging', desc: 'Real estate agents', price: '47 jobs daily', color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-100' },
                { icon: '🎥', title: 'AI Avatar Videos', desc: 'Corporate training', price: '23 jobs daily', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-100' },
                { icon: '📸', title: 'Product Photos', desc: 'E-commerce sellers', price: '89 jobs daily', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-100' },
                { icon: '📱', title: 'Social Content', desc: 'Small business', price: '137 jobs daily', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-100' }
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-sm"
                       style={{ background: `linear-gradient(45deg, ${item.color.replace('from-', '').replace(' to-', ', ')})` }}></div>
                  
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                    <div className={`text-2xl font-black bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}>
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8">
            <p className="text-2xl font-bold mb-4">
              Every minute you wait, someone else is claiming these jobs
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
              <Clock className="w-5 h-5 text-purple-600 animate-spin" />
              <span>Next job posting in: <span className="font-bold text-purple-600">4:23</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M0 30h60M30 0v60M0 0l60 60M60 0L0 60'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <span className="text-lg">📊</span>
              <span>BACKED BY REAL DATA</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              The Numbers <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Don't Lie</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our analysis of <span className="text-white font-bold">1,050 Upwork jobs</span> revealed the goldmine everyone's missing
            </p>
          </div>

          {/* Main Stats Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Daily Jobs Counter */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-300">Daily Job Posts</h3>
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-green-400 text-2xl">📈</span>
                  </div>
                </div>
                <div className="text-6xl font-black mb-2">
                  320
                </div>
                <p className="text-gray-400">New design jobs every single day</p>
                
                {/* Live ticker simulation */}
                <div className="mt-6 bg-black/30 rounded-xl p-3 overflow-hidden">
                  <div className="flex gap-4 animate-scroll">
                    <span className="text-sm text-green-400 whitespace-nowrap">• New thumbnail job $30</span>
                    <span className="text-sm text-green-400 whitespace-nowrap">• Logo design $150</span>
                    <span className="text-sm text-green-400 whitespace-nowrap">• Social media pack $200</span>
                    <span className="text-sm text-green-400 whitespace-nowrap">• Product photos $75</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Average Value Display */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-300">Project Value Range</h3>
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-yellow-400 text-2xl">💰</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-400">$</span>
                  <span className="text-6xl font-black">188</span>
                  <span className="text-2xl font-medium text-gray-400">-</span>
                  <span className="text-6xl font-black">769</span>
                </div>
                <p className="text-gray-400 mt-2">Average per project</p>
                
                {/* Value bar visualization */}
                <div className="mt-6 bg-black/30 rounded-xl p-4">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" style={{width: '75%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Most jobs pay above $200</p>
                </div>
              </div>
            </div>
          </div>

          {/* Speed & Volume Stats */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* AI Speed Stat */}
              <div className="text-center">
                <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-5xl">⚡</span>
                  <div className="absolute inset-0 rounded-2xl animate-ping bg-white/20"></div>
                </div>
                <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  78%
                </div>
                <p className="text-gray-300">Jobs completed in under 5 min with AI</p>
              </div>

              {/* Volume Stat */}
              <div className="text-center">
                <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">🎯</span>
                </div>
                <div className="text-5xl font-black mb-2">
                  10-20
                </div>
                <p className="text-gray-300">Thumbnails needed per week per channel</p>
              </div>

              {/* Earnings Potential */}
              <div className="text-center">
                <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl">🚀</span>
                </div>
                <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  $15
                </div>
                <p className="text-gray-300">Average per thumbnail × 20 = $300/week</p>
              </div>
            </div>
          </div>

          {/* Visual Chart */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">Top Job Categories by Volume</h3>
            
            <div className="space-y-4">
              {[
                { name: 'AI Image Generation', count: 62, price: '$280 avg', color: 'from-purple-500 to-purple-600' },
                { name: 'Logo Design', count: 57, price: '$250 avg', color: 'from-blue-500 to-blue-600' },
                { name: 'Midjourney AI', count: 41, price: '$769 avg', color: 'from-green-500 to-green-600' },
                { name: 'AI Image Editing', count: 39, price: '$234 avg', color: 'from-yellow-500 to-yellow-600' },
                { name: 'Product Photography', count: 34, price: '$280 avg', color: 'from-red-500 to-red-600' }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-gray-400 ml-2">{item.price}</span>
                    </div>
                    <span className="text-2xl font-bold">{item.count}</span>
                  </div>
                  <div className="h-8 bg-gray-700/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 hover:brightness-110`}
                      style={{width: `${(item.count / 62) * 100}%`}}
                    >
                      <div className="h-full bg-white/20 animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-8 py-4">
              <div className="text-2xl">🎯</div>
              <p className="text-xl font-bold">
                Translation: There's more work than designers to fill it
              </p>
              <div className="text-2xl">🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Section - Redesigned */}
      <section className="py-32 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-300 to-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        {/* Particle Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-600 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${10 + Math.random() * 20}s ease-in-out ${Math.random() * 5}s infinite`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Pre-header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 text-sm font-bold mb-8 shadow-lg">
              <Zap className="w-4 h-4" />
              <span>THE GAME-CHANGER IS HERE</span>
              <Zap className="w-4 h-4" />
            </div>
            
            <p className="text-xl text-gray-600 mb-4">Introducing</p>
          </div>
          
          {/* Main Product Reveal */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: Product Visual */}
            <div className="relative">
              {/* Glow Effect Behind Product */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl filter blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Main Product Image */}
              <div className="relative transform hover:scale-105 transition-all duration-700">
                <img 
                  src="https://i.imgur.com/aVOdCey.png" 
                  alt="Dezygn 4.0 Software Box"
                  className="w-full max-w-md mx-auto drop-shadow-2xl rounded-[40px]"
                />
                
                {/* Floating Feature Badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg animate-bounce">
                  NEW AI
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white rounded-full px-4 py-2 text-sm font-bold shadow-lg animate-float">
                  v4.0
                </div>
                
                {/* Sparkle Effects */}
                <div className="absolute top-10 right-10 text-2xl animate-pulse">✨</div>
                <div className="absolute bottom-10 left-10 text-2xl animate-pulse animation-delay-2000">💫</div>
              </div>
            </div>
            
            {/* Right: Product Info */}
            <div>
              <div className="mb-6">
                <Logo variant="default" size="lg" showText={true} className="mb-2" />
                <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">4.0</span>
              </div>
              
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
                The Only AI Creative Agency Suite That Pays for Itself
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Built for Money-Making</h3>
                    <p className="text-gray-600">Not just another design tool - a complete business system</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">78% of Upwork Jobs Compatible</h3>
                    <p className="text-gray-600">Designed specifically for what clients actually pay for</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">5-Minute Delivery Times</h3>
                    <p className="text-gray-600">What takes others hours, you'll do before your coffee gets cold</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const element = document.querySelector('.features-section');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span>See What's Inside</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Bottom Stats Bar */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-purple-600 mb-2">4X</div>
                <p className="text-sm text-gray-600">Faster than traditional design</p>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-600 mb-2">$0</div>
                <p className="text-sm text-gray-600">Learning curve required</p>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-600 mb-2">365</div>
                <p className="text-sm text-gray-600">Day money-back guarantee</p>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-600 mb-2">24/7</div>
                <p className="text-sm text-gray-600">Your AI team never sleeps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 text-sm font-bold mb-6 shadow-lg">
              <span className="text-xl">🎉</span>
              <span>COMPLETE TOOLKIT</span>
              <span className="text-xl">🎉</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Everything You Need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Dominate
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop juggling 10 different tools. Get everything in one place.
            </p>
          </div>
          
          {/* Benefits Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Feature - Takes 2 columns on lg */}
            <div className="lg:col-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-8 h-full border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-4xl">💰</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Make Money from Day 1</h3>
                    <p className="text-gray-600 mb-4">No learning curve, just results. Start taking clients immediately with pre-built workflows and templates designed for what actually sells.</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Instant ROI</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Zero to $1,500/mo</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Proven Templates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Regular Feature */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-6 h-full border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Handle 10x More Clients</h3>
                <p className="text-gray-600 text-sm">What took hours now takes minutes. Scale your business without scaling your work hours.</p>
              </div>
            </div>
            
            {/* Regular Feature */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-6 h-full border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Charge Premium Prices</h3>
                <p className="text-gray-600 text-sm">Deliver quality that commands respect. Your work will look like it came from a $10k/month agency.</p>
              </div>
            </div>
            
            {/* Regular Feature */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-6 h-full border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Work from Anywhere</h3>
                <p className="text-gray-600 text-sm">Phone, tablet, or laptop. Beach, coffee shop, or couch. Your agency goes where you go.</p>
              </div>
            </div>
            
            {/* Regular Feature */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-6 h-full border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold mb-2">White-Label Delivery</h3>
                <p className="text-gray-600 text-sm">Build YOUR agency, not ours. Every delivery branded with your logo and style.</p>
              </div>
            </div>
            
            {/* Large Feature - Takes full width on all screens */}
            <div className="col-span-full relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-4xl">🤖</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Scale Without Hiring</h3>
                    <p className="text-white/90 mb-4">Your AI team works 24/7. No salaries, no drama, no limits. Just pure productivity.</p>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold">24/7</div>
                        <p className="text-sm text-white/70">Availability</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">$0</div>
                        <p className="text-sm text-white/70">Overhead</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">∞</div>
                        <p className="text-sm text-white/70">Capacity</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="relative">
                      <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to stop struggling and start succeeding?
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('.features-section');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Explore All Features</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Made with Dezygn Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
              CREATIVE SHOWCASE
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="block text-gray-900">Made with</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Dezygn
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real designs created by our community. From product shots to social media content, 
              see what's possible when creativity meets cutting-edge AI.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {/* Row 1 */}
            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={lelaModelBeach}
                  alt="Model at beach created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Beach Lifestyle</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={lelaGridProductMockups}
                  alt="Product mockups grid created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Product Mockups</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={gridInstagramContent}
                  alt="Instagram social media content grid created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Social Media</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={lelaSuncreamTable}
                  alt="Suncream product photography created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Product Photography</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={brandIdentityResearch}
                  alt="Brand identity research created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Brand Identity</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={lelaSocialMediaPost}
                  alt="Social media post with text created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Social Post</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={kidTeddybearFunfair}
                  alt="Kid with teddy bear at funfair created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Lifestyle Photography</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={soapPebblesAd}
                  alt="Soap advertisement created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Product Ad</p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={lelaGrid9Poses}
                  alt="Model poses grid created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Model Portfolio</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={posterBabyShop}
                  alt="Baby shop poster created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Retail Poster</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={modelTshirtLogo}
                  alt="Model wearing branded t-shirt created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Fashion Mock-up</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={catTableVegetables}
                  alt="Cat with vegetables on table created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Creative Scene</p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={lelaSuncreamHand}
                  alt="Suncream in hand product shot created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Product in Use</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={youngWomanJeans}
                  alt="Young woman in jeans created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Fashion Portrait</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={lelaSocialMediaPost2}
                  alt="Social media post with text created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Social Campaign</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={squareAdDezygn}
                  alt="Square advertisement created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Square Ad</p>
                </div>
              </div>
            </div>

            <div className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img 
                  src={lelaSuncreamWomanHolding}
                  alt="Woman holding suncream created with Dezygn"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Lifestyle Product</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-purple-100">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                Ready to Create Your Own?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of creators using Dezygn to bring their ideas to life. 
                From concept to creation in minutes, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://chat.dezygn.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Start Creating Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => {
                    const element = document.querySelector('.features-section');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-white border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all duration-300"
                >
                  <span>Explore Features</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform your Youzign designs Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-900 via-cyan-900/50 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.2'%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-bold mb-6">
              <img src={youzignLogo} alt="Youzign" className="w-6 h-6 rounded" />
              <span>YOUZIGN INTEGRATION</span>
              <span className="text-xl">🔗</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Youzign Designs
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Import all your visuals from Youzign and let AI transform them into professional, eye-catching designs that actually convert
            </p>
          </div>

          {/* Before/After Demo */}
          <div className="mb-20">
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="absolute top-4 right-4 text-xs font-semibold text-gray-400 tracking-wider z-10">
                YOUZIGN → DEZYGN TRANSFORMATION
              </div>
              
              {/* Split Screen Container */}
              <div className="grid grid-cols-2 gap-1 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                
                {/* BEFORE Section */}
                <div className="bg-orange-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <img src={youzignLogo} alt="Youzign" className="w-5 h-5 rounded" />
                      <h4 className="text-lg font-bold text-orange-700">YOUZIGN ORIGINAL</h4>
                    </div>
                    <p className="text-sm text-orange-600 font-medium">Flat 2D Design</p>
                  </div>
                  
                  <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <img 
                      src={youzignBeforeOriginal} 
                      alt="Original Youzign flat design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* AFTER Section */}
                <div className="bg-cyan-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-cyan-700 mb-2">🤖 DEZYGN AI</h4>
                    <p className="text-sm text-cyan-600 font-medium">3D Transformed</p>
                  </div>
                  
                  <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <img 
                      src={youzignAfterTransformed} 
                      alt="AI transformed 3D design" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mt-3 text-center">
                    <p className="text-xs text-cyan-600 font-medium">Professional 3D Mockup</p>
                  </div>
                </div>
              </div>
              
              {/* Center Arrow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-white rounded-full p-3 shadow-xl border-2 border-gray-200">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Use Case 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🎨</div>
                <h4 className="text-lg font-bold mb-2">"Make It Premium"</h4>
                <p className="text-gray-400 text-sm">Transform amateur designs into agency-quality work. AI analyzes and upgrades typography, spacing, hierarchy, and visual balance to professional standards.</p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-blue-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">📸</div>
                <h4 className="text-lg font-bold mb-2">"Real World Mockup"</h4>
                <p className="text-gray-400 text-sm">Place flat designs into photorealistic environments - books on coffee tables, posters on walls, graphics on t-shirts, ads on billboards.</p>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-purple-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🌈</div>
                <h4 className="text-lg font-bold mb-2">"Smart Color Upgrade"</h4>
                <p className="text-gray-400 text-sm">Fix clashing colors and amateur palettes. AI suggests and applies trending color schemes that actually work together.</p>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-pink-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">✨</div>
                <h4 className="text-lg font-bold mb-2">"Add That Polish"</h4>
                <p className="text-gray-400 text-sm">Apply subtle professional touches - drop shadows, gradients, glows, and effects that make designs look expensive.</p>
              </div>
            </div>

            {/* Use Case 5 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-red-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🔄</div>
                <h4 className="text-lg font-bold mb-2">"Style Switcher"</h4>
                <p className="text-gray-400 text-sm">Transform any design into different styles: "Make it minimalist," "Make it vintage," "Make it luxury," "Make it tech startup."</p>
              </div>
            </div>

            {/* Use Case 6 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-orange-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🎭</div>
                <h4 className="text-lg font-bold mb-2">"Remove The Cringe"</h4>
                <p className="text-gray-400 text-sm">AI detects and fixes common amateur mistakes - centered everything, too many fonts, poor contrast, cluttered layouts.</p>
              </div>
            </div>

            {/* Use Case 7 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🏆</div>
                <h4 className="text-lg font-bold mb-2">"Competition Crusher"</h4>
                <p className="text-gray-400 text-sm">"Make this look better than [competitor URL]" - AI analyzes competitor designs and creates superior versions.</p>
              </div>
            </div>

            {/* Use Case 8 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-green-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">📱</div>
                <h4 className="text-lg font-bold mb-2">"Multi-Platform Magic"</h4>
                <p className="text-gray-400 text-sm">Turn one design into 20+ optimized versions for different platforms - Instagram posts, stories, YouTube thumbnails, Facebook ads, etc.</p>
              </div>
            </div>

            {/* Use Case 9 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-emerald-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="text-lg font-bold mb-2">"Target Audience Makeover"</h4>
                <p className="text-gray-400 text-sm">"Make this appeal to millennials/seniors/professionals/kids" - AI adapts design language for specific demographics.</p>
              </div>
            </div>

            {/* Use Case 10 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-teal-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🖼️</div>
                <h4 className="text-lg font-bold mb-2">"Background Revolution"</h4>
                <p className="text-gray-400 text-sm">Replace amateur backgrounds with stunning AI-generated scenes that match the design's theme and mood.</p>
              </div>
            </div>

            {/* Use Case 11 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🔤</div>
                <h4 className="text-lg font-bold mb-2">"Typography Doctor"</h4>
                <p className="text-gray-400 text-sm">Fix font crimes. AI replaces amateur font choices with professional pairings and proper hierarchy.</p>
              </div>
            </div>

            {/* Use Case 12 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-blue-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🎪</div>
                <h4 className="text-lg font-bold mb-2">"Event-ify It"</h4>
                <p className="text-gray-400 text-sm">Add seasonal or event-specific elements: "Make it Christmas themed," "Add Super Bowl vibes," "Make it feel like summer."</p>
              </div>
            </div>

            {/* Use Case 13 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-indigo-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🏢</div>
                <h4 className="text-lg font-bold mb-2">"Instant Rebrand"</h4>
                <p className="text-gray-400 text-sm">"Apply [brand name] visual style" - Transform generic designs to match any major brand's design language.</p>
              </div>
            </div>

            {/* Use Case 14 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-purple-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">💡</div>
                <h4 className="text-lg font-bold mb-2">"Concept Variations"</h4>
                <p className="text-gray-400 text-sm">Generate 10 different creative directions from one basic design - explore what's possible.</p>
              </div>
            </div>

            {/* Use Case 15 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-pink-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🎬</div>
                <h4 className="text-lg font-bold mb-2">"Motion Ready"</h4>
                <p className="text-gray-400 text-sm">Prepare static designs for animation by separating layers and adding motion-friendly elements.</p>
              </div>
            </div>

            {/* Use Case 16 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-rose-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🔍</div>
                <h4 className="text-lg font-bold mb-2">"Detail Enhancer"</h4>
                <p className="text-gray-400 text-sm">Add rich textures, patterns, and micro-details that separate amateur from professional work.</p>
              </div>
            </div>

            {/* Use Case 17 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-red-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🌐</div>
                <h4 className="text-lg font-bold mb-2">"Global Adaptation"</h4>
                <p className="text-gray-400 text-sm">"Make this work for [country/culture]" - Adapt designs for different cultural contexts and languages.</p>
              </div>
            </div>

            {/* Use Case 18 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-orange-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">📈</div>
                <h4 className="text-lg font-bold mb-2">"Conversion Optimizer"</h4>
                <p className="text-gray-400 text-sm">Apply proven design psychology to boost clicks and conversions - better CTAs, visual hierarchy, and attention flow.</p>
              </div>
            </div>

            {/* Use Case 19 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-amber-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🎪</div>
                <h4 className="text-lg font-bold mb-2">"Theme Park"</h4>
                <p className="text-gray-400 text-sm">Transform boring designs with themed treatments: "Make it cyberpunk," "Add steampunk elements," "Give it a retro 80s feel."</p>
              </div>
            </div>

            {/* Use Case 20 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-500 h-full">
                <div className="text-2xl mb-3">🔗</div>
                <h4 className="text-lg font-bold mb-2">"Brand DNA Injection"</h4>
                <p className="text-gray-400 text-sm">Import any website's brand identity and apply it to transform generic designs into on-brand materials instantly.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Youzign Designs?</h3>
              <p className="text-gray-300 mb-6">Import your existing designs and watch AI turn them into professional masterpieces</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Start Transforming Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-purple-900/50 to-gray-900 text-white relative overflow-hidden features-section">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-bold mb-6">
              <span className="text-xl">🛠️</span>
              <span>COMPLETE TOOLKIT</span>
              <span className="text-xl">🛠️</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Your Complete
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Money-Making Arsenal
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every tool you need to go from zero to $10K/month, all in one place
            </p>
          </div>

          {/* Feature Categories */}
          <div className="space-y-20">
            {/* Category 1: Core AI Tools */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
                <h3 className="text-2xl font-bold text-purple-400">Core AI Creation</h3>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* HyperVision Engine */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 h-full">
                    <div className="text-center mb-6">
                      <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 mb-6">
                        <img src={hyperVisionEngine} alt="HyperVision Engine" className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-2xl font-bold mb-3">HyperVision Engine™</h4>
                      <p className="text-gray-400 mb-4 text-lg">Powered by state-of-the-art AI that turns your words into stunning visuals. Always updated with the latest models.</p>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full">Text-to-Image</span>
                        <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full">Latest AI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SmartText Fusion */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 h-full">
                    <div className="text-center mb-6">
                      <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 mb-6">
                        <img src={smartTextVision} alt="SmartText Fusion" className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-2xl font-bold mb-3">SmartText Fusion™</h4>
                      <p className="text-gray-400 mb-4 text-lg">Finally, AI that spells correctly! No more "BEUTIFUL DESGINS" embarrassments.</p>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">Perfect Text</span>
                        <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">No Typos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 2: Speed Tools */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1"></div>
                <h3 className="text-2xl font-bold text-green-400">Speed & Efficiency</h3>
                <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1"></div>
              </div>
              
              <div className="grid gap-8">
                {/* First Row - InstantBrand Sync */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-500 h-full">
                      <div className="text-center">
                        <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 mb-6">
                          <img src={instantBrandSync} alt="InstantBrand Sync" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">InstantBrand Sync™</h4>
                        <p className="text-gray-400 text-lg mb-4">Import any brand in 30 seconds</p>
                        <div className="bg-green-500/10 rounded-xl p-4">
                          <span className="text-4xl font-bold text-green-400">30s</span>
                          <p className="text-sm text-gray-500 mt-1">vs 3 hours manual</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500 h-full">
                      <div className="text-center">
                        <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 mb-6">
                          <img src={liveDesign} alt="LiveDesign AI" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">LiveDesign AI™</h4>
                        <p className="text-gray-400 text-lg mb-4">Edit by conversation, not clicks</p>
                        <div className="space-y-2">
                          <div className="bg-gray-700/50 rounded-lg px-4 py-2 text-sm text-gray-300 font-mono">"Make bg blue"</div>
                          <div className="bg-gray-700/50 rounded-lg px-4 py-2 text-sm text-gray-300 font-mono">"Add our logo"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Row - ReDesign One (centered) */}
                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                      <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-500 h-full">
                        <div className="text-center">
                          <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 mb-6">
                            <img src={reDesignOne} alt="ReDesign One" className="w-full h-full object-cover" />
                          </div>
                          <h4 className="text-2xl font-bold mb-3">ReDesign One™</h4>
                          <p className="text-gray-400 text-lg mb-4">Modernize old designs instantly</p>
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-16 h-16 bg-gray-700 rounded-lg"></div>
                            <ArrowRight className="w-6 h-6 text-pink-400" />
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 3: Advanced Creation */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1"></div>
                <h3 className="text-2xl font-bold text-orange-400">Advanced Creation</h3>
                <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-1"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* VisualDNA */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500 h-full">
                    <div className="text-center">
                      <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 mb-6">
                        <img src={visualDNA} alt="VisualDNA" className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-2xl font-bold mb-3">VisualDNA™</h4>
                      <p className="text-gray-400 mb-4 text-lg">Upload one product photo, generate 50 lifestyle shots. E-commerce stores pay $500 for this.</p>
                      <div className="bg-orange-500/10 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-lg text-gray-400">1 photo →</span>
                          <span className="text-3xl font-bold text-orange-400">50 variations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FusionCanvas */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-red-900/30 to-pink-900/30 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-500 h-full">
                    <div className="text-center">
                      <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 mb-6">
                        <img src={fusionCanvas} alt="FusionCanvas" className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-2xl font-bold mb-3">FusionCanvas™</h4>
                      <p className="text-gray-400 mb-4 text-lg">Combine logos, products, and models into magazine-quality compositions. Photographers hate this one trick.</p>
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-sm">🏢</div>
                        <span className="text-gray-500 text-xl">+</span>
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-sm">📦</div>
                        <span className="text-gray-500 text-xl">+</span>
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-sm">👤</div>
                        <span className="text-gray-500 text-xl">=</span>
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-sm">✨</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 4: Platform Features */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-1"></div>
                <h3 className="text-2xl font-bold text-indigo-400">Work Anywhere</h3>
                <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-1"></div>
              </div>
              
              <div className="grid gap-8">
                {/* First Row - PocketStudio & TeamSpace */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500 h-full">
                      <div className="text-center">
                        <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 mb-6">
                          <img src={pocketStudio} alt="PocketStudio" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">PocketStudio™</h4>
                        <p className="text-gray-400 text-lg">Design from your phone</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 h-full">
                      <div className="text-center">
                        <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 mb-6">
                          <img src={teamSpace} alt="TeamSpace" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">TeamSpace™</h4>
                        <p className="text-gray-400 text-lg">Scale without hiring</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Row - InstaShare (featured) */}
                <div className="w-full">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:border-pink-500/50 transition-all duration-500">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-6">
                          <div>
                            <div className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-bold mb-4">
                              <span>⭐</span>
                              <span>SIGNATURE FEATURE</span>
                            </div>
                            <h4 className="text-4xl font-bold mb-4">InstaShare™</h4>
                            <p className="text-xl text-gray-300 mb-6">Professional client delivery system that makes you look like a premium agency</p>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-xs">🔗</span>
                              </div>
                              <div>
                                <h5 className="text-lg font-semibold text-white mb-1">Dedicated Share Pages</h5>
                                <p className="text-gray-400">Create beautiful, branded galleries for each client project with professional presentation</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-xs">©</span>
                              </div>
                              <div>
                                <h5 className="text-lg font-semibold text-white mb-1">Smart Watermarking</h5>
                                <p className="text-gray-400">Protect your work with automatic watermarks that maintain professionalism</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-xs">💬</span>
                              </div>
                              <div>
                                <h5 className="text-lg font-semibold text-white mb-1">Client Review System</h5>
                                <p className="text-gray-400">Clients can leave comments on specific designs, streamlining feedback and revisions</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-xs">🌐</span>
                              </div>
                              <div>
                                <h5 className="text-lg font-semibold text-white mb-1">Website Integration</h5>
                                <p className="text-gray-400">Embed share pages directly on your website or client portals with custom captions</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-pink-500/10 rounded-xl p-4 border border-pink-500/20">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-pink-400 font-bold">💡 Pro Tip:</span>
                            </div>
                            <p className="text-sm text-gray-300">Charge 3x more by delivering work through InstaShare instead of email attachments</p>
                          </div>
                        </div>
                        
                        {/* Right Column - Large Image */}
                        <div className="flex justify-center">
                          <div className="w-full max-w-2xl h-[600px] rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                            <img src={instaShare} alt="InstaShare Professional Client Delivery" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Every tool designed for one purpose: Make you money
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('use-cases');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>See Real Examples</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Redesigned */}
      <section id="use-cases" className="py-24 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 text-sm font-bold mb-6 shadow-lg">
              <span className="text-xl">🎯</span>
              <span>REAL RESULTS</span>
              <span className="text-xl">🎯</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Real Jobs. Real Money. Right Now.
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Dezygn users are winning these jobs every day
            </p>
          </div>

          {/* Real Jobs Showcase Grid */}
          <div className="space-y-6">
            {/* Job 1: Skincare Product Shots */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center p-8 bg-gray-50">
                {/* Job Header */}
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  6 min ago
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skincare Product Shots</h3>
                
                <p className="text-gray-600 text-base mb-6 max-w-2xl leading-relaxed">
                  Need <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">12 lifestyle images</span> for our new serum launch. Must show <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">hands holding products</span> in natural settings. Looking for clean, minimal aesthetic with <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">soft natural lighting</span>. No studio needed - use AI generation.
                </p>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-lg">
                  $300 project
                </div>

                {/* Split Screen Before/After Layout */}
                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="absolute top-4 right-4 text-xs font-semibold text-gray-400 tracking-wider z-10">
                    CREATED WITH DEZYGN
                  </div>
                  
                  {/* Split Screen Container */}
                  <div className="grid grid-cols-2 gap-1 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* BEFORE Section */}
                    <div className="bg-blue-50 p-8 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-6">
                        <h4 className="text-lg font-bold text-blue-700 mb-2">📤 BEFORE</h4>
                        <p className="text-sm text-blue-600 font-medium">Client Original</p>
                      </div>
                      
                      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img 
                          src={skincareOriginal} 
                          alt="Original client image" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* AFTER Section */}
                    <div className="bg-purple-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-purple-700 mb-2">🤖 AFTER</h4>
                        <p className="text-sm text-purple-600 font-medium">AI Enhanced</p>
                      </div>
                      
                      {/* Full Size AI Images */}
                      <div className="space-y-4">
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={skincare1} 
                            alt="AI enhanced variation 1" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #1
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={skincare2} 
                            alt="AI enhanced variation 2" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #2
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <p className="text-xs text-purple-600 font-medium">2 Variations Generated</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-3 shadow-xl border-2 border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 2: YouTube Gaming Thumbnails */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center p-8 bg-gray-50">
                {/* Job Header */}
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  15 min ago
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">YouTube Thumbnail Designer Needed</h3>
                
                <p className="text-gray-600 text-base mb-6 max-w-2xl leading-relaxed">
                  Need someone to create <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">10-20 eye-catching thumbnails per week</span> for my gaming channel. Must understand <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">YouTube thumbnail psychology</span> and be able to match trending styles. Experience with <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">AI tools like Midjourney</span> preferred.
                </p>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-lg">
                  $200/week
                </div>

                {/* Split Screen Before/After Layout */}
                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="absolute top-4 right-4 text-xs font-semibold text-gray-400 tracking-wider z-10">
                    CREATED WITH DEZYGN
                  </div>
                  
                  {/* Split Screen Container */}
                  <div className="grid grid-cols-2 gap-1 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* BEFORE Section */}
                    <div className="bg-blue-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-blue-700 mb-2">📤 BEFORE</h4>
                        <p className="text-sm text-blue-600 font-medium">Client Original</p>
                      </div>
                      
                      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img 
                          src={thumbnail0} 
                          alt="Original client thumbnail" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* AFTER Section */}
                    <div className="bg-purple-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-purple-700 mb-2">🤖 AFTER</h4>
                        <p className="text-sm text-purple-600 font-medium">AI Enhanced</p>
                      </div>
                      
                      {/* Full Size AI Images */}
                      <div className="space-y-4">
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={thumbnail1} 
                            alt="AI enhanced variation 1" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #1
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={thumbnail2} 
                            alt="AI enhanced variation 2" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #2
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <p className="text-xs text-purple-600 font-medium">2 Variations Generated</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-3 shadow-xl border-2 border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 3: Instagram Fashion Brand */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center p-8 bg-gray-50">
                {/* Job Header */}
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  5 min ago
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instagram Fashion Brand</h3>
                
                <p className="text-gray-600 text-base mb-6 max-w-2xl leading-relaxed">
                  Need <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">daily posts + stories for 30 days</span>. Our brand is minimalist streetwear. Want <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">cohesive aesthetic</span> with mix of product shots, lifestyle, and inspirational content. Must understand <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">Instagram trends</span> and engagement.
                </p>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-lg">
                  $800/month
                </div>

                {/* Split Screen Before/After Layout */}
                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="absolute top-4 right-4 text-xs font-semibold text-gray-400 tracking-wider z-10">
                    CREATED WITH DEZYGN
                  </div>
                  
                  {/* Split Screen Container */}
                  <div className="grid grid-cols-2 gap-1 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* BEFORE Section */}
                    <div className="bg-blue-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-blue-700 mb-2">📤 BEFORE</h4>
                        <p className="text-sm text-blue-600 font-medium">Client Original</p>
                      </div>
                      
                      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img 
                          src={fashion0} 
                          alt="Original client content" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* AFTER Section */}
                    <div className="bg-purple-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-purple-700 mb-2">🤖 AFTER</h4>
                        <p className="text-sm text-purple-600 font-medium">AI Enhanced</p>
                      </div>
                      
                      {/* Full Size AI Images */}
                      <div className="space-y-4">
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={fashion1} 
                            alt="AI enhanced variation 1" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #1
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={fashion2} 
                            alt="AI enhanced variation 2" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #2
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <p className="text-xs text-purple-600 font-medium">2 Variations Generated</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-3 shadow-xl border-2 border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 4: Shopify Store Refresh */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center p-8 bg-gray-50">
                {/* Job Header */}
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  7 min ago
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopify Store Refresh</h3>
                
                <p className="text-gray-600 text-base mb-6 max-w-2xl leading-relaxed">
                  Have <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">30 product images that need lifestyle versions</span>. Currently just white backgrounds. Want to show products in <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">real-world settings</span> that match our brand aesthetic. Mix of home, outdoor, and lifestyle scenes needed.
                </p>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-lg">
                  $500 project
                </div>

                {/* Split Screen Before/After Layout */}
                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="absolute top-4 right-4 text-xs font-semibold text-gray-400 tracking-wider z-10">
                    CREATED WITH DEZYGN
                  </div>
                  
                  {/* Split Screen Container */}
                  <div className="grid grid-cols-2 gap-1 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* BEFORE Section */}
                    <div className="bg-blue-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-blue-700 mb-2">📤 BEFORE</h4>
                        <p className="text-sm text-blue-600 font-medium">Client Original</p>
                      </div>
                      
                      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img 
                          src={shopify0} 
                          alt="Original product image" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* AFTER Section */}
                    <div className="bg-purple-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-purple-700 mb-2">🤖 AFTER</h4>
                        <p className="text-sm text-purple-600 font-medium">AI Enhanced</p>
                      </div>
                      
                      {/* Full Size AI Images */}
                      <div className="space-y-4">
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={shopify1} 
                            alt="AI enhanced variation 1" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #1
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={shopify2} 
                            alt="AI enhanced variation 2" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #2
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <p className="text-xs text-purple-600 font-medium">2 Variations Generated</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-3 shadow-xl border-2 border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 5: Fitness Equipment Photos */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center p-8 bg-gray-50">
                {/* Job Header */}
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  14 min ago
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fitness Equipment Photos</h3>
                
                <p className="text-gray-600 text-base mb-6 max-w-2xl leading-relaxed">
                  Looking for <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">gym setting photos</span> of our resistance bands. Need <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">multiple angles</span> showing product in use. Want energetic, motivational vibe with <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">dynamic lighting</span>. 10 high-quality images needed.
                </p>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-lg">
                  $200 for 10
                </div>

                {/* Split Screen Before/After Layout */}
                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="absolute top-4 right-4 text-xs font-semibold text-gray-400 tracking-wider z-10">
                    CREATED WITH DEZYGN
                  </div>
                  
                  {/* Split Screen Container */}
                  <div className="grid grid-cols-2 gap-1 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* BEFORE Section */}
                    <div className="bg-blue-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-blue-700 mb-2">📤 BEFORE</h4>
                        <p className="text-sm text-blue-600 font-medium">Client Original</p>
                      </div>
                      
                      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img 
                          src={fitness0} 
                          alt="Original fitness product" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* AFTER Section */}
                    <div className="bg-purple-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-purple-700 mb-2">🤖 AFTER</h4>
                        <p className="text-sm text-purple-600 font-medium">AI Enhanced</p>
                      </div>
                      
                      {/* Full Size AI Images */}
                      <div className="space-y-4">
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={fitness1} 
                            alt="AI enhanced variation 1" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #1
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={fitness2} 
                            alt="AI enhanced variation 2" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #2
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <p className="text-xs text-purple-600 font-medium">2 Variations Generated</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-3 shadow-xl border-2 border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 6: Pet Product Photography */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center p-8 bg-gray-50">
                {/* Job Header */}
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  11 min ago
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pet Product Photography</h3>
                
                <p className="text-gray-600 text-base mb-6 max-w-2xl leading-relaxed">
                  Need <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">dogs/cats with products</span> in natural settings. Looking for <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">outdoor scenes</span> and happy pet moments. Products include leashes, toys, and treats. Must feel authentic and show <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">pet-owner connection</span>. 15 shots total.
                </p>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-lg">
                  $250 for 15
                </div>

                {/* Split Screen Before/After Layout */}
                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="absolute top-4 right-4 text-xs font-semibold text-gray-400 tracking-wider z-10">
                    CREATED WITH DEZYGN
                  </div>
                  
                  {/* Split Screen Container */}
                  <div className="grid grid-cols-2 gap-1 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* BEFORE Section */}
                    <div className="bg-blue-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-blue-700 mb-2">📤 BEFORE</h4>
                        <p className="text-sm text-blue-600 font-medium">Client Original</p>
                      </div>
                      
                      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img 
                          src={pet0} 
                          alt="Original pet product photo" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* AFTER Section */}
                    <div className="bg-purple-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-purple-700 mb-2">🤖 AFTER</h4>
                        <p className="text-sm text-purple-600 font-medium">AI Enhanced</p>
                      </div>
                      
                      {/* Full Size AI Images */}
                      <div className="space-y-4">
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={pet1} 
                            alt="AI enhanced variation 1" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #1
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={pet2} 
                            alt="AI enhanced variation 2" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #2
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <p className="text-xs text-purple-600 font-medium">2 Variations Generated</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-3 shadow-xl border-2 border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 7: Real Estate Virtual Staging */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center p-8 bg-gray-50">
                {/* Job Header */}
                <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  15 min ago
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate Virtual Staging</h3>
                
                <p className="text-gray-600 text-base mb-6 max-w-2xl leading-relaxed">
                  Have <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">5 empty rooms</span> that need virtual staging. Want <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">3 style variations each</span> - modern, traditional, and transitional. Need to look photorealistic for <span className="bg-yellow-200 px-1 rounded font-medium text-gray-900">MLS listings</span>. Quick turnaround appreciated.
                </p>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-lg">
                  $300 total
                </div>

                {/* Split Screen Before/After Layout */}
                <div className="relative w-full max-w-5xl mx-auto">
                  <div className="absolute top-4 right-4 text-xs font-semibold text-gray-400 tracking-wider z-10">
                    CREATED WITH DEZYGN
                  </div>
                  
                  {/* Split Screen Container */}
                  <div className="grid grid-cols-2 gap-1 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* BEFORE Section */}
                    <div className="bg-blue-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-blue-700 mb-2">📤 BEFORE</h4>
                        <p className="text-sm text-blue-600 font-medium">Client Original</p>
                      </div>
                      
                      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img 
                          src={realestate0} 
                          alt="Original empty room" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* AFTER Section */}
                    <div className="bg-purple-50 p-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-purple-700 mb-2">🤖 AFTER</h4>
                        <p className="text-sm text-purple-600 font-medium">AI Enhanced</p>
                      </div>
                      
                      {/* Full Size AI Images */}
                      <div className="space-y-4">
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={realestate1} 
                            alt="AI enhanced variation 1" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #1
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                          <img 
                            src={realestate2} 
                            alt="AI enhanced variation 2" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            #2
                          </div>
                          <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/15 transition-colors duration-300"></div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <p className="text-xs text-purple-600 font-medium">2 Variations Generated</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-3 shadow-xl border-2 border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Success Metrics */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black mb-2">$2,350</div>
                <p className="text-purple-200">Total value shown above</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">7 jobs</div>
                <p className="text-purple-200">Posted in 15 minutes</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">$800/mo</div>
                <p className="text-purple-200">Highest recurring value</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">Live</div>
                <p className="text-purple-200">Available right now</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to create your own success stories?
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('bonuses');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>See Your Bonuses</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Bonuses Section - Redesigned */}
      <section id="bonuses" className="py-24 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Confetti-like particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-pink-500 text-white rounded-full px-6 py-3 text-sm font-bold mb-6 shadow-lg animate-bounce">
              <span className="text-xl">🎁</span>
              <span>LIMITED TIME ONLY</span>
              <span className="text-xl">🎁</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Today Only:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Your Legacy Bonuses
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Because you believed in us when we were just starting... these exclusive bonuses will NEVER be offered again
            </p>
          </div>

          {/* Bonus Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Unlimited Brands & Campaigns */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-4xl">🏢</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400 line-through">Regular limit: 3 brands</p>
                    <p className="text-3xl font-black text-yellow-400">UNLIMITED</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Unlimited Brands & Campaigns</h3>
                <p className="text-gray-300 mb-4">
                  Manage unlimited client brands and campaigns. No restrictions, no extra fees. Scale infinitely.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-green-400">Lifetime Access</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    Value: <span className="text-yellow-400">$299/year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Unlimited TeamSpace */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-blue-900 to-cyan-900 rounded-3xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-4xl">👥</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400 line-through">Regular limit: 5 members</p>
                    <p className="text-3xl font-black text-yellow-400">UNLIMITED</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Unlimited TeamSpace™</h3>
                <p className="text-gray-300 mb-4">
                  Bring your spouse, VA, business partners - build a real agency without paying for extra seats.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-green-400">Lifetime Access</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    Value: <span className="text-yellow-400">$499/year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* InstaShare White-Label */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-green-900 to-emerald-900 rounded-3xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400 line-through">Premium plans only</p>
                    <p className="text-3xl font-black text-yellow-400">FREE</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">InstaShare™ White-Label System</h3>
                <p className="text-gray-300 mb-4">
                  Your branding, not ours. Watermark until payment clears. Embed on your website. Build YOUR agency.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-green-400">Lifetime Access</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    Value: <span className="text-yellow-400">$399/year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 500 Bonus Credits */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-yellow-900 to-orange-900 rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-4xl">💰</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Instant activation</p>
                    <p className="text-3xl font-black text-yellow-400">500</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">500 Bonus Credits</h3>
                <p className="text-gray-300 mb-4">
                  Start creating immediately. That's 500 designs. 500 chances to make money. No waiting.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-green-400">Instant Access</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    Value: <span className="text-yellow-400">$100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The $10K Hit List */}
            <div className="group relative md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-red-900 to-rose-900 rounded-3xl p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Exclusive legacy bonus</p>
                    <p className="text-3xl font-black text-yellow-400">$10K</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">The $10K Hit List - Your First 50 Clients Are Waiting</h3>
                <p className="text-gray-300 mb-4">
                  Stop guessing what services to offer. We analyzed 1,050 real Upwork jobs to reveal exactly what's selling: YouTube thumbnails ($15 each, 20/week), product photos ($150-500), virtual staging ($300/project), and 47 more profitable opportunities. Includes pricing sweet spots, copy-paste proposals, and the "green light" phrases that signal easy money. While others struggle to find clients, you'll know exactly where the money is.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-green-400">Lifetime Access</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    Value: <span className="text-yellow-400">$497</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Value Display */}
          <div className="bg-gradient-to-r from-yellow-500 to-pink-500 rounded-3xl p-1 mb-12">
            <div className="bg-gray-900 rounded-3xl p-8">
              <div className="text-center">
                <p className="text-2xl mb-4">Total Bonus Value</p>
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-4">
                  $1,794
                </div>
                <p className="text-xl text-gray-300">
                  Yours FREE today as a legacy member
                </p>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-red-500/20 border border-red-500/50 rounded-2xl px-6 py-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-lg font-medium">
                These bonuses are ONLY for existing customers and will never be offered again
              </p>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              Lock in your legacy bonuses before they're gone forever
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('.guarantee-section');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>See Our Guarantee</span>
              <Shield className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Guarantee Section - Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden guarantee-section">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-200 rounded-full filter blur-3xl opacity-20"></div>
          {/* Security pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h20v20h-20z' fill='%23000' fill-opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Shield Icon */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              My 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> Opportunity Window </span>
              Guarantee
            </h2>
          </div>

          {/* Main Guarantee Box */}
          <div className="relative group mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-green-100">
              <div className="text-center">
                {/* Days */}
                <div className="inline-flex items-baseline gap-3 mb-8">
                  <span className="text-7xl md:text-8xl font-black text-gray-900">365</span>
                  <span className="text-2xl font-medium text-gray-600">DAYS</span>
                </div>

                {/* Main Promise */}
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  Use Dezygn for 365 days to capitalize on this opportunity.
                </p>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  If you don't agree this is the biggest creative opportunity shift in a decade…
                </p>

                {/* The Guarantee */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white mb-8">
                  <p className="text-2xl md:text-3xl font-bold mb-4">
                    I'll refund every penny, no questions asked.
                  </p>
                </div>

                {/* Bottom Line */}
                <p className="text-xl md:text-2xl text-gray-700 mb-6 font-bold">
                  No questions asked.
                </p>

                {/* No BS Promise */}
                <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>No questions asked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>No hassles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>No "sorry, too bad"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Trust Section */}
          <div className="mb-12">
            {/* Main Trust Card */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 mb-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Left: User Avatars + Count */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format',
                      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face&auto=format',
                      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format',
                      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
                      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format'
                    ].map((src, i) => (
                      <img 
                        key={i} 
                        src={src}
                        alt={`Happy user ${i + 1}`}
                        className="w-14 h-14 rounded-full border-3 border-white object-cover shadow-lg hover:scale-110 transition-transform duration-300"
                      />
                    ))}
                    <div className="w-14 h-14 rounded-full border-3 border-white bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">+230K</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-black text-gray-900">230,123+</h3>
                    <p className="text-sm text-gray-600">Happy Users since 2015</p>
                  </div>
                </div>

                {/* Center: Money Back Guarantee */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto">
                      <span className="text-2xl">💰</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-gray-900">30-Day</p>
                    <p className="text-sm text-gray-600">Money Back</p>
                  </div>
                </div>

                {/* Right: Designs Hosted */}
                <div className="text-center md:text-right">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto">
                      <span className="text-2xl">🎨</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">2.47M+</h3>
                  <p className="text-sm text-gray-600">Designs hosted</p>
                </div>
              </div>
            </div>

            {/* Secondary Trust Indicators */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">SSL Secured</h4>
                  <p className="text-xs text-gray-600">Bank-level security</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Trusted Platform</h4>
                  <p className="text-xs text-gray-600">Since 2015</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Message */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">💪</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">I'm Betting on YOU</h3>
                <p className="text-gray-700 leading-relaxed">
                  I've watched every major market shift of the past decade. 
                  This AI creative revolution is the biggest opportunity I've seen since the early days of e-commerce. 
                  I'm so confident this window exists that I'm backing it up with my own money. 
                  You literally have nothing to lose and everything to gain.
                </p>
                <p className="mt-4 font-bold text-purple-600">
                  - Bertrand, Founder of Dezygn
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              With this guarantee, the only risk is NOT trying
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('cta');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Claim Your Risk-Free Access</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section id="cta" className="py-24 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          {/* Animated stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Urgency Banner */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-bold">SPECIAL LEGACY PRICING EXPIRES IN <CountdownTimer className="font-mono" /></span>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Your Investment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Today
              </span>
            </h2>
          </div>

          {/* Pricing Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What Others Pay */}
            <div className="relative">
              <div className="absolute inset-0 bg-gray-800 rounded-3xl opacity-50"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 opacity-75">
                <h3 className="text-2xl font-bold mb-4 text-gray-400">What Others Pay</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-gray-500 line-through">
                    <span>Monthly subscription</span>
                    <span className="text-xl">$49/month</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-500 line-through">
                    <span>Annual subscription</span>
                    <span className="text-xl">$499/year</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-500">Total First Year Cost</p>
                  <p className="text-3xl font-bold text-gray-400 line-through">$588</p>
                </div>
              </div>
            </div>

            {/* Your Price */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all"></div>
              <div className="relative bg-gradient-to-br from-yellow-900/90 to-pink-900/90 backdrop-blur-sm border border-yellow-500/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-6 right-8 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  SAVE 92%
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Your Legacy Price</h3>
                <div className="text-center mb-6">
                  <p className="text-xl mb-2">One-Time Payment</p>
                  <div className="text-7xl font-black text-white mb-2">$49</div>
                  <p className="text-lg text-yellow-300">Forever Access</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>No monthly fees ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>All future updates included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>$1,794 in bonuses FREE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Everything You Get Today</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Dezygn AI Platform Access ($399 value)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>InstantBrand Sync™ ($249 value)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>AI Avatar Studio™ ($197 value)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>HyperVision Engine™ ($197 value)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>SmartText Fusion™ ($97 value)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>LiveDesign AI™ ($197 value)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>VisualDNA™ ($197 value)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>FusionCanvas™ ($197 value)</span>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-white/20">
              <p className="text-lg mb-2">Total Platform Value: <span className="font-bold">$1,829</span></p>
              <p className="text-lg">+ Legacy Bonuses: <span className="font-bold text-yellow-400">$1,794</span></p>
              <p className="text-3xl font-bold mt-4">Total Value: <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">$3,126</span></p>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="text-center mb-12">
            <a 
              href="https://dezygn.checkoutpage.com/dezygn-legacy-upgrade"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-pink-500 text-white text-xl px-12 py-6 rounded-full font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get Dezygn 4.0 + All Bonuses</span>
              <span className="text-2xl">→</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
                          <p className="mt-4 text-lg">
              Only <span className="font-bold text-yellow-400">$49</span> One-Time 
              <span className="text-gray-400 ml-2">(Save $3,057)</span>
            </p>
          </div>

          {/* Payment Security */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" />
              <span className="text-sm">Safe Checkout</span>
            </div>
            <div className="text-sm text-gray-400">
              Accepted: Visa, Mastercard, Amex
            </div>
          </div>

          {/* Final Urgency */}
          <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-3xl p-6 text-center border border-red-500/30">
            <p className="text-xl font-bold mb-2">⚠️ Warning: When adoption hits 67%...</p>
            <p className="text-lg">The early mover advantage disappears FOREVER</p>
            <p className="text-gray-300 mt-2">Same pattern as crypto, Amazon FBA, and dropshipping</p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Redesigned */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 text-sm font-bold mb-6 shadow-lg">
              <span className="text-xl">❓</span>
              <span>COMMON QUESTIONS</span>
              <span className="text-xl">❓</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Got Questions?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                We've Got Answers
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about starting your AI creative agency
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {/* Question 1 */}
            <div className="group">
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-purple-200">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 pr-8">How is Dezygn 4.0 different from Canva or other tools?</h3>
                      <p className="text-gray-600 leading-relaxed">Dezygn 4.0 is built with one goal: make you money. Every feature is designed around what REAL clients on Upwork are paying for RIGHT NOW. We analyze 1,000 job postings every week to build exactly what the market wants. It's not just a design tool - it's a complete business system.</p>
                    </div>
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                      <ChevronDown className="w-4 h-4 text-purple-600 transform rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="group">
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-green-200">
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 pr-8">Why should I buy this offer?</h3>
                      <p className="text-gray-600 leading-relaxed">Because after today, Dezygn 4.0 costs $49/MONTH. Forever. This is your only chance to get lifetime access for a one-time $49, plus $1,794 in bonuses that will never be offered again. You're literally saving $3,554.</p>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <ChevronDown className="w-4 h-4 text-green-600 transform rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="group">
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-200">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 pr-8">Can I really make $1,500 in 30 days?</h3>
                      <p className="text-gray-600 leading-relaxed">The math is simple: 3 YouTube thumbnail clients at 10 thumbnails/week each = 30 thumbnails. At $15 each = $450/week = $1,800/month. That's from thumbnails alone. Add one product photography gig and you're at $2,300. Our users average $950 in their first month working just 10 hours.</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <ChevronDown className="w-4 h-4 text-blue-600 transform rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="group">
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-pink-200">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 pr-8">Do I need design experience?</h3>
                      <p className="text-gray-600 leading-relaxed">No. If you can type "Make a YouTube thumbnail about cooking" then you can use Dezygn. We handle the creative work - you handle the client relationships. Every feature has tutorials and templates. You can literally start today.</p>
                    </div>
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                      <ChevronDown className="w-4 h-4 text-pink-600 transform rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="group">
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-orange-200">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🤔</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 pr-8">What if I don't want to upgrade?</h3>
                      <p className="text-gray-600 leading-relaxed">You can access Dezygn 4.0 by requesting a standard upgrade. However, you won't get the InstaShare white-label feature, unlimited team members, unlimited brands, or the 500 bonus credits. Processing takes 48 hours and you'll pay monthly forever.</p>
                    </div>
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <ChevronDown className="w-4 h-4 text-orange-600 transform rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="group">
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-indigo-200">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 pr-8">Is this really a one-time payment?</h3>
                      <p className="text-gray-600 leading-relaxed">Yes! This is a special thank you to our legacy users. You pay $49 once and get lifetime access to Dezygn 4.0, including all future updates to the core image generation features. No hidden fees, no subscriptions, no surprises. This offer expires when the timer hits zero.</p>
                    </div>
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition-colors">
                      <ChevronDown className="w-4 h-4 text-indigo-600 transform rotate-180" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Legacy Customer FAQ */}
              <div className="bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-rose-200 transition-colors">
                      <span className="text-xl">💎</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">I bought Dezygn 1.0, 2.0, zSuite or Branding App in the past?</h3>
                      <p className="text-gray-600 leading-relaxed">If you are one of our early supporters, you can see if you qualify for extra credits at <a href="https://dezygn.com/legacy" className="text-rose-600 underline hover:text-rose-700">https://dezygn.com/legacy</a>. We still advise you to purchase this upgrade for the unlimited brands, unlimited members, the instashare white label and the 500 bonus credits!</p>
                    </div>
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-rose-200 transition-colors">
                      <ChevronDown className="w-4 h-4 text-rose-600 transform rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 text-purple-100">
              Remember, you're protected by our Iron-Clad Money-Back Guarantee. 
              The only risk is missing out on this one-time offer.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('cta');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span>Get Started Risk-Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA - Decision Time */}
      <section className="py-32 px-4 bg-gradient-to-br from-red-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* Animated stars */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Urgency Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-red-500/30 backdrop-blur-sm border border-red-500/50 rounded-full px-8 py-4 mb-8">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-black">⏰ DECISION TIME</span>
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Every Minute You Wait,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Money Walks Away
              </span>
            </h2>
          </div>

          {/* Urgency Messages */}
          <div className="mb-12 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <p className="text-2xl mb-4">Every minute you wait, someone else is claiming those Upwork jobs.</p>
              <p className="text-2xl mb-4">In the next 4.5 minutes, another $30 thumbnail job will be posted.</p>
              <p className="text-3xl font-black text-yellow-400">Will you be ready to claim it? Or watch someone else get paid?</p>
            </div>
          </div>
          
          {/* Main CTA Button */}
          <div className="mb-12">
            <button 
              onClick={() => {
                const element = document.getElementById('cta');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white text-2xl px-12 py-6 rounded-full font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-6"
            >
              <span>🚀 Claim Your Dezygn 4.0 Legacy Access</span>
              <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
            
            <div className="space-y-2">
              <p className="text-2xl font-black text-yellow-400">Just $49 One-Time + $1,794 in Bonuses</p>
              <p className="text-white/80 text-lg">Remember: When the timer hits zero, it's $49/month forever</p>
            </div>
          </div>
          
          {/* Final Message Card */}
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/20 rounded-3xl p-10 shadow-2xl">
            <div className="text-center">
              <p className="text-xl font-bold text-yellow-400 mb-4">P.S. - The Window is Closing</p>
              <p className="text-lg text-white/90 leading-relaxed">
                296 new AI jobs are posted every single day. Early movers are claiming them while 88% of people are still debating if AI is real. 
                <span className="font-black text-yellow-400">Every day you wait, more pioneers claim their stake</span>. 
              </p>
              <p className="text-2xl font-black text-red-400 mt-6">
                Don't let this opportunity pass you by.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialPage;