import { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, ClipboardList, Camera, Globe, Sparkles, Palette, Eye } from 'lucide-react';

const AwaVisualization = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [activeNodeIds, setActiveNodeIds] = useState<number[]>([]);

  // Node configuration
  const nodes = [
    { id: 0, icon: ClipboardList, label: "Plan", x: 15, y: 15 },
    { id: 1, icon: Globe, label: "Fetch", x: 85, y: 15 },
    { id: 2, icon: Camera, label: "Context", x: 50, y: 35 },
    { id: 3, icon: Sparkles, label: "Enhance", x: 20, y: 65 },
    { id: 4, icon: Eye, label: "Vision", x: 80, y: 65 },
    { id: 5, icon: Palette, label: "Create", x: 50, y: 90 },
  ];

  // Logic Flow: Start -> End
  const links = [
    { s: 0, e: 2, delay: 0.2 }, // Plan -> Context
    { s: 1, e: 2, delay: 0.4 }, // Fetch -> Context
    
    { s: 2, e: 3, delay: 1.5 }, // Context -> Enhance
    { s: 2, e: 4, delay: 1.7 }, // Context -> Vision
    { s: 2, e: 5, delay: 1.6 }, // Context -> Create (direct)
    
    { s: 0, e: 3, delay: 0.8 }, // Plan -> Enhance (cross)
    { s: 1, e: 4, delay: 0.8 }, // Fetch -> Vision (cross)
    
    { s: 3, e: 5, delay: 2.8 }, // Enhance -> Create
    { s: 4, e: 5, delay: 3.0 }, // Vision -> Create
  ];

  const mainImage = "https://vpklpenoffkvztqosbds.supabase.co/storage/v1/object/public/user-assets/703ed5a3-7c4a-4c89-9df2-0c61727a49ed/Lifestyle_photography_of_a_beautiful_Black_woman_edit_1_1764768440322.png";
  
  const stackImages = [
    "https://vpklpenoffkvztqosbds.supabase.co/storage/v1/object/public/user-assets/703ed5a3-7c4a-4c89-9df2-0c61727a49ed/Lifestyle_photography_of_a_beautiful_Black_woman_edit_1_1764768382976.png",
    "https://vpklpenoffkvztqosbds.supabase.co/storage/v1/object/public/user-assets/703ed5a3-7c4a-4c89-9df2-0c61727a49ed/Lifestyle_photography_of_a_beautiful_Black_woman_edit_1_1764768459130.png",
    "https://vpklpenoffkvztqosbds.supabase.co/storage/v1/object/public/user-assets/703ed5a3-7c4a-4c89-9df2-0c61727a49ed/Lifestyle_photography_of_a_beautiful_Black_woman_edit_1_1764768467223.png"
  ];

  // Calculate timing for node activation
  const nodeActivationTimings = useMemo(() => {
    const timings = new Array(nodes.length).fill(Infinity);
    const drawPathDuration = 1.2;

    timings[0] = 0; 
    timings[1] = 0.2; 

    links.forEach(link => {
      const arrivalTime = link.delay + drawPathDuration;
      if (arrivalTime < timings[link.e]) {
        timings[link.e] = arrivalTime;
      }
    });
    return timings;
  }, []);

  // Cycle stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Manage Node Active State
  useEffect(() => {
    if (activeStage === 1) {
      const timeouts: ReturnType<typeof setTimeout>[] = [];
      setActiveNodeIds([]); 

      nodes.forEach((node, idx) => {
        const delay = nodeActivationTimings[idx];
        if (delay < Infinity) {
          timeouts.push(setTimeout(() => {
            setActiveNodeIds(prev => [...prev, node.id]);
            timeouts.push(setTimeout(() => {
              setActiveNodeIds(prev => prev.filter(id => id !== node.id));
            }, 2000));
          }, delay * 1000));
        }
      });
      return () => timeouts.forEach(clearTimeout);
    } else {
      setActiveNodeIds([]);
    }
  }, [activeStage, nodeActivationTimings]);

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center font-sans p-4 select-none">
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* The Drawing Animation */
        @keyframes draw-line {
          0% { stroke-dashoffset: 1000; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }

        .active-link-line {
          /* Large dasharray to ensure it covers the full length (since we are using percentages, 
             units are relative to viewport, 1000 provides safe buffer) */
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-line 1.2s ease-out forwards;
        }
        
        .node-active .node-icon-wrapper {
          background: rgba(168, 85, 247, 0.1);
          box-shadow: 0 0 25px rgba(168, 85, 247, 0.3);
          border-color: transparent;
          transform: scale(1.15);
        }

        .node-active .icon-svg {
          color: white;
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.9));
        }
      `}</style>

      {/* 1. INPUT SECTION (Top) */}
      <div className={`
        relative z-20 mb-6 transition-all duration-700 ease-out
        ${activeStage === 0 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-80 scale-95'}
      `}>
        <div className={`
          relative rounded-full p-[1px] overflow-hidden
          ${activeStage === 0 ? 'bg-transparent' : 'bg-white/10'}
        `}>
          {activeStage === 0 && (
            <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#a855f7_50%,#0000_100%)]" />
          )}
          
          <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-[#151515] backdrop-blur-xl">
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeStage === 0 ? 'bg-[#a855f7] animate-pulse' : 'bg-gray-600'}`} />
            <span className="text-sm text-gray-200 font-light">"Lifestyle shots for summer campaign"</span>
          </div>
        </div>

        <div className={`absolute left-1/2 -bottom-10 w-px h-10 bg-gradient-to-b from-[#a855f7] to-transparent transition-opacity duration-500 ${activeStage === 0 ? 'opacity-100' : 'opacity-10'}`} />
      </div>


      {/* 2. NEURAL CORE (Middle) */}
      <div className={`
        relative w-full max-w-[400px] aspect-[4/3] z-10 transition-all duration-700
        ${activeStage === 1 ? 'opacity-100' : 'opacity-80'}
      `}>
        
        {/* SVG Container - Using standard coordinates for percentages */}
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          <defs>
            <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Render Links */}
          {links.map((link, i) => {
            const s = nodes[link.s];
            const e = nodes[link.e];
            return (
              <g key={i}>
                {/* Background Track */}
                <line 
                  x1={`${s.x}%`} y1={`${s.y}%`} 
                  x2={`${e.x}%`} y2={`${e.y}%`} 
                  stroke="white" 
                  strokeWidth="1"
                  strokeOpacity="0.05"
                />
                
                {/* Active Drawing Line */}
                {activeStage === 1 && (
                  <line
                    x1={`${s.x}%`} y1={`${s.y}%`} 
                    x2={`${e.x}%`} y2={`${e.y}%`} 
                    stroke="url(#linkGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="active-link-line"
                    style={{ 
                      animationDelay: `${link.delay}s`
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isActive = activeNodeIds.includes(node.id);
          
          return (
            <div 
              key={i}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 ${isActive ? 'node-active' : ''}`}
              style={{ 
                left: `${node.x}%`, 
                top: `${node.y}%` 
              }}
            >
              <div className={`
                node-icon-wrapper w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 relative overflow-hidden
                ${isActive 
                  ? 'bg-[#1a1a1a]' // Border handled by spinner
                  : 'bg-[#1a1a1a]/50 border-white/5'}
              `}>
                {isActive && (
                  <div className="absolute inset-[-50%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#a855f7_50%,#0000_100%)]" />
                )}
                
                {/* Inner Background */}
                <div className={`absolute inset-[1px] rounded-xl bg-[#151515] z-0`} />

                <node.icon className={`icon-svg w-5 h-5 transition-colors duration-500 relative z-10 ${isActive ? 'text-white' : 'text-gray-500'}`} />
              </div>
              <span className={`text-[10px] font-medium tracking-wider transition-colors duration-500 ${isActive ? 'text-purple-300' : 'text-gray-600'}`}>
                {node.label}
              </span>
            </div>
          );
        })}
        
        {/* Soft Central Glow */}
        <div className={`
          absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#a855f7] rounded-full blur-[100px] transition-opacity duration-1000
          ${activeStage === 1 ? 'opacity-15' : 'opacity-0'}
        `} />

        {/* Vertical Connector to Output */}
        <div className={`
          absolute left-1/2 top-[90%] w-px h-24 bg-gradient-to-b from-[#a855f7] to-transparent -z-10
          transition-all duration-700 ease-out origin-top
          ${activeNodeIds.includes(5) || activeStage === 2 ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
        `} />
      </div>


      {/* 3. OUTPUT SECTION (Bottom) */}
      <div className={`
        relative w-full max-w-[360px] mt-8 z-20 transition-all duration-700 perspective-[1000px]
        ${activeStage === 2 ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-4'}
      `}>
        {/* Card Stack */}
        <div className="relative h-[200px] w-full group cursor-pointer">
          {/* Background Cards */}
          {[0, 1, 2].map((idx) => (
             <div 
               key={idx}
               className="absolute inset-0 rounded-2xl border border-white/10 bg-[#151515] shadow-2xl transition-transform duration-500 ease-out overflow-hidden"
               style={{ 
                 transform: activeStage === 2 ? `translate(${(idx + 1) * 8}px, -${(idx + 1) * 8}px) rotate(${(idx + 1) * 2}deg)` : 'translate(0,0) rotate(0)',
                 zIndex: 10 - idx
               }}
             >
                <img 
                  src={stackImages[idx]} 
                  alt={`Variation ${idx}`}
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
             </div>
          ))}

          {/* Main Result Card */}
          <div className={`
            absolute inset-0 bg-[#050507] rounded-2xl border overflow-hidden shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] z-20 transition-all duration-500
            ${activeStage === 2 ? 'border-[#a855f7]/50' : 'border-white/10'}
          `}>
            <img 
              src={mainImage} 
              alt="Result" 
              className={`w-full h-full object-cover transition-all duration-500 ${activeStage === 2 ? 'opacity-90' : 'opacity-50 grayscale'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {activeStage === 2 && (
                    <>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_5px_#10b981]" />
                      <span className="text-[10px] font-mono text-[#10b981] tracking-widest">GENERATED</span>
                    </>
                  )}
                </div>
                {activeStage === 2 && <CheckCircle2 className="w-4 h-4 text-[#10b981]" />}
              </div>
              <p className={`text-sm font-medium transition-colors ${activeStage === 2 ? 'text-white' : 'text-gray-500'}`}>Summer Campaign 01</p>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className={`
            absolute -right-12 top-8 bg-black/50 backdrop-blur border border-white/10 rounded-lg p-2 z-30 transition-all duration-500 delay-300
            ${activeStage === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
          `}>
            <div className="text-[10px] text-gray-400 mb-1">VARIATIONS</div>
            <div className="text-xl font-mono text-white">12</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AwaVisualization;