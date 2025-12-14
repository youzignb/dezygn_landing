import {
  DollarSign,
  MessageSquare,
  Palette,
  Clock,
  Zap,
  Image as ImageIcon,
  GraduationCap
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const BusinessPage = () => {

  return (
    <div className="h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-hidden flex flex-col">
      <Helmet>
        <title>For Small Business - DIY Design | Dezygn</title>
        <meta name="description" content="Professional design without the designer. Awa lets small business owners create stunning visuals, social content, and marketing materials in minutes." />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap');
        
        .bento-card {
          background: rgba(26, 26, 26, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.2s ease-out;
        }
        
        .bento-card:hover {
          background: rgba(26, 26, 26, 0.7);
          border-color: rgba(168, 85, 247, 0.3);
          transform: translateY(-1px);
        }

        .text-gradient {
          background: linear-gradient(to right, #a855f7, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        ::-webkit-scrollbar { width: 0px; }
      `}</style>

      <HeaderV3 />

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-4 sm:px-6 lg:px-8 pt-24 pb-4 max-w-7xl mx-auto w-full">
        
        {/* Hero */}
        <div className="text-center mb-12 shrink-0">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase text-purple-400 mb-3">
            <span className="w-1 h-1 rounded-full bg-purple-500 animate-pulse"></span>
            For Small Business
          </div>
          <h1 className="font-black text-4xl md:text-5xl text-white mb-2 tracking-tight">
            Professional Design <span className="text-gradient">Without the Designer.</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            You started a business, not an agency. Tell Awa what you need—she'll handle the rest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 h-[60vh] min-h-[400px]">
          
          {/* 1. Cost Savings (Large) */}
          <div className="bento-card rounded-2xl p-5 col-span-2 row-span-2 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <DollarSign className="w-32 h-32" />
            </div>
            <div>
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mb-3 text-green-400">
                <DollarSign className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">"I can't afford a designer"</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                Awa works for a fraction of the cost. Generate unlimited visuals without the $60k salary or freelancer fees.
              </p>
            </div>
            <div className="mt-2 p-3 bg-white/5 rounded-lg border border-white/5 text-[10px] text-gray-300">
              <div className="flex justify-between items-center mb-1">
                <span>Annual Savings</span>
                <span className="text-green-400">~$50,000+</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full w-[95%]"></div>
              </div>
            </div>
          </div>

          {/* 2. No Terminology */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <MessageSquare className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Plain English</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">"Make it premium" works. No jargon needed.</p>
            </div>
          </div>

          {/* 3. Brand Consistency */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Palette className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Always On-Brand</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">She remembers your logo & colors forever.</p>
            </div>
          </div>

          {/* 4. Speed */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Clock className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Lightning Fast</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">Describe → Confirm → Done. In seconds.</p>
            </div>
          </div>

          {/* 5. Process Visual */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Zap className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">4-Step Process</h3>
                              <p className="text-[10px] text-gray-400 leading-tight mt-1">Describe &gt; Enhance &gt; Refine &gt; Download.</p>            </div>
          </div>

          {/* 6. Outputs (Wide) */}
          <div className="bento-card rounded-2xl p-4 col-span-2 flex flex-col justify-between bg-white/5">
            <div className="flex items-center gap-3 mb-2">
              <ImageIcon className="w-5 h-5 text-pink-400" />
              <h3 className="text-sm font-bold text-white">What You Can Create</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-400">
              <span className="px-2 py-1 rounded bg-black/40 border border-white/10">Product Photography</span>
              <span className="px-2 py-1 rounded bg-black/40 border border-white/10">Social Content</span>
              <span className="px-2 py-1 rounded bg-black/40 border border-white/10">Marketing Flyers</span>
              <span className="px-2 py-1 rounded bg-black/40 border border-white/10">Brand Assets</span>
            </div>
          </div>

          {/* 7. Non-Designers */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Easy Editing</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">"Remove background" & one-click variations.</p>
            </div>
          </div>

          {/* 8. Challenge */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Learn Fast</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">14-day challenge to master AI design.</p>
            </div>
          </div>

          {/* 9. CTA (Wide) */}
          <div className="bento-card rounded-2xl p-4 col-span-2 flex items-center justify-between bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Start Free</h3>
                <p className="text-[10px] text-gray-400">No credit card required.</p>
              </div>
            </div>
            <a href="/pricing" className="text-xs bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Get Started
            </a>
          </div>

        </div>
      </main>

      <FooterV3 className="fixed bottom-0 left-0" />
    </div>
  );
};

export default BusinessPage;
