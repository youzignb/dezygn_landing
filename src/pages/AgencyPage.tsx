import {
  Zap,
  Users,
  Clock,
  Share2,
  CheckCircle2,
  Globe,
  Video,
  Layers,
  BarChart3
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const AgencyPage = () => {

  return (
    <div className="h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-hidden flex flex-col">
      <Helmet>
        <title>For Agencies - Scale Creative | Dezygn</title>
        <meta name="description" content="Scale creative output without scaling headcount. Awa helps agencies deliver 10x the work with rapid concepting, automated revisions, and consistent brand management." />
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
            For Agencies
          </div>
          <h1 className="font-black text-4xl md:text-5xl text-white mb-2 tracking-tight">
            Scale Creative <span className="text-gradient">Without Scaling Headcount.</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Awa lets your team deliver 10x the creative output—without hiring, burnout, or compromising quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 h-[60vh] min-h-[400px]">
          
          {/* 1. Rapid Concepting (Large) */}
          <div className="bento-card rounded-2xl p-5 col-span-2 row-span-2 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-32 h-32" />
            </div>
            <div>
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3 text-purple-400">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Rapid Concepting</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                Generate 10 directions in the time it takes to make one. Present options in hours, not days.
              </p>
            </div>
            <div className="mt-2 p-3 bg-white/5 rounded-lg border border-white/5 text-[10px] text-gray-300">
              <div className="flex justify-between items-center mb-1">
                <span>Concepts Generated</span>
                <span className="text-green-400">+900%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-purple-500 h-1.5 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>

          {/* 2. Revision Loops */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Instant Revisions</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">"Make it blue" → Done in 30s. No designer queue.</p>
            </div>
          </div>

          {/* 3. Client Sharing */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Share2 className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Insta-Share</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">Get sign-off in minutes via link. No login needed.</p>
            </div>
          </div>

          {/* 4. Brand Management (Wide) */}
          <div className="bento-card rounded-2xl p-4 col-span-2 flex flex-col justify-between bg-white/5">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-orange-400" />
              <h3 className="text-sm font-bold text-white">Multi-Client Management</h3>
            </div>
            <p className="text-[10px] text-gray-400 mb-3">
              Separate profiles for every client. Awa remembers style, logos, and preferences for each one automatically.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-[9px] text-gray-300">Client A: Luxury</span>
              <span className="px-2 py-1 rounded bg-black/40 border border-white/10 text-[9px] text-gray-300">Client B: Tech</span>
            </div>
          </div>

          {/* 5. Web Intel */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Globe className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Competitor Intel</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">Analyze competitor sites for inspiration instantly.</p>
            </div>
          </div>

          {/* 6. Quality Check */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Quality Verify</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">Auto-checks output against brief before you see it.</p>
            </div>
          </div>

          {/* 7. Video Studio */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between bg-white/5">
            <div className="flex justify-between items-start">
              <Video className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Video Production</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">Create ads & storyboards without a crew.</p>
            </div>
          </div>

          {/* 8. Team Features */}
          <div className="bento-card rounded-2xl p-4 flex flex-col justify-between bg-white/5">
            <div className="flex justify-between items-start">
              <Users className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Team Sync</h3>
              <p className="text-[10px] text-gray-400 leading-tight mt-1">Shared assets & consistent brand enforcement.</p>
            </div>
          </div>

          {/* 9. ROI / CTA (Wide) */}
          <div className="bento-card rounded-2xl p-4 col-span-2 flex items-center justify-between bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">9 Days → 2 Hours</h3>
                <p className="text-[10px] text-gray-400">Typical agency turnaround improvement.</p>
              </div>
            </div>
            <a href="/pricing" className="text-xs bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Start Trial
            </a>
          </div>

        </div>
      </main>

      <FooterV3 className="fixed bottom-0 left-0" />
    </div>
  );
};

export default AgencyPage;
