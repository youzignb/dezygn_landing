import { useState } from 'react';
import { ArrowRight, Check, Minus, Plus, Shield, Users, Zap, X, Layers, PlayCircle, Sparkles, Search, Target, Star, AlertTriangle, Wrench, Compass, Eye, FileText, Dna, FlaskConical, Palette, Camera } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import retainerImage from '../assets/images/630:m-retainer.png';

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-start gap-4 text-white hover:text-purple-400 transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 flex-shrink-0 text-purple-400" />
        ) : (
          <Plus className="w-5 h-5 flex-shrink-0 text-slate-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

// Case Study Card Component
function CaseStudyCard({ 
  title, 
  badge, 
  badgeColor, 
  goal, 
  challenge, 
  solution, 
  heroImage, 
  samples 
}: { 
  title: string; 
  badge: string; 
  badgeColor: 'purple' | 'blue'; 
  goal: string; 
  challenge: string; 
  solution: string; 
  heroImage: string; 
  samples: string[]; 
}) {
  const [activeImage, setActiveImage] = useState(heroImage);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-12 flex flex-col justify-center order-last lg:order-first">
          <div className={`inline-flex items-center gap-2 bg-${badgeColor}-500/10 rounded-full px-4 py-1 mb-6 w-fit border border-${badgeColor}-500/20`}>
            <Target className={`w-4 h-4 text-${badgeColor}-400`} />
            <span className={`text-${badgeColor}-300 font-bold text-sm`}>{badge}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
          
          <div className="space-y-6 text-slate-300">
            <div>
              <p className="font-bold text-white mb-1">The Goal</p>
              <p>{goal}</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">The Challenge</p>
              <p>{challenge}</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">The Solution</p>
              <p>{solution}</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="font-bold text-white mb-4">Gallery (Click to View)</p>
            <div className="flex gap-4 overflow-x-auto pb-2">
              <img 
                src={heroImage} 
                onClick={() => setActiveImage(heroImage)}
                className={`h-20 w-20 object-cover rounded-lg shadow-lg cursor-pointer transition-all ${activeImage === heroImage ? `border-2 border-${badgeColor}-500 ring-2 ring-${badgeColor}-500/20` : 'border border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'}`} 
                alt="Hero" 
              />
              {samples.map((sample, index) => (
                <img 
                  key={index}
                  src={sample} 
                  onClick={() => setActiveImage(sample)}
                  className={`h-20 w-20 object-cover rounded-lg shadow-lg cursor-pointer transition-all ${activeImage === sample ? `border-2 border-${badgeColor}-500 ring-2 ring-${badgeColor}-500/20` : 'border border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'}`} 
                  alt={`Sample ${index + 1}`} 
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-black/20 h-full min-h-[400px] lg:min-h-full relative p-4 flex items-center justify-center">
          <img 
            src={activeImage} 
            alt="Project Preview" 
            className="w-full h-full object-contain rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

function PromptographyPage() {
  return (
    <Layout hideHeader={true}>
      <Helmet>
        <title>Promptography Secrets | Professional AI Photography Masterclass</title>
        <meta name="description" content="The 6-Week Sprint That Takes You From Total Beginner to Booked AI Photography Pro. Learn the Commercial Formula." />
      </Helmet>

      {/* Notification Bar */}
      <div className="bg-slate-950 text-white py-3 px-4 text-center font-medium text-sm md:text-base sticky top-0 z-50 border-b border-white/10 shadow-xl backdrop-blur-md bg-opacity-95">
        <div className="flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="font-semibold tracking-wide">Cyber Monday:</span>
          <span className="line-through text-slate-500">$997</span>
          <span className="text-green-400 font-bold">$497</span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-300">Only 10 Spots Available</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-visible bg-slate-950 text-white selection:bg-purple-500/30 selection:text-purple-200">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-purple-500/10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] animate-float-reverse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tighter text-white">
            The Fastest Way to Get Paid <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x pb-2">
              Using AI
            </span>
            <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-2 h-4 bg-purple-500/30 -skew-x-6 -z-10 transform origin-bottom scale-x-105"></span>
              — No Tech Skills Needed
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-medium max-w-2xl mx-auto text-balance">
            Turn simple prompts into commercial-quality images clients actually want. 6-week proven system. Limited spots.
          </p>

          {/* Hero Image Container */}
          <div className="relative mb-16 group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Image Frame */}
            <div className="relative p-2 bg-slate-900 rounded-[2.5rem] ring-1 ring-white/10 shadow-2xl">
              <div className="relative rounded-[2rem] overflow-hidden bg-slate-950 aspect-[16/9] md:aspect-[21/9]">
                <img
                  src="https://vpklpenoffkvztqosbds.supabase.co/storage/v1/object/public/user-assets/703ed5a3-7c4a-4c89-9df2-0c61727a49ed/High-end_editorial_photography_with_surrealist_c_1_1764150807488.png"
                  alt="High End Editorial AI Photography"
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105 opacity-90 hover:opacity-100"
                />
                
                {/* Floating UI Element 1 */}
                <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-white/10 hidden md:flex items-center gap-3 animate-bounce-slow">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-white">Prompt: "Editorial, Macro Lens..."</span>
                </div>

                 {/* Floating UI Element 2 */}
                 <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-white/10 hidden md:flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-bold text-white">Generated in 4s</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Area */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a
                href="#pricing"
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-slate-950 text-xl px-12 py-6 rounded-2xl font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join the Masterclass
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <div className="flex items-center justify-center gap-3 px-8 py-6 text-white font-semibold bg-white/5 rounded-2xl border border-white/10 shadow-sm hover:border-purple-500/50 hover:bg-white/10 transition-all">
                <Shield className="w-5 h-5 text-green-400" />
                <span>2x Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (3 Steps) */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-reverse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              How You'll Go From ‘Dabbling’ <br/>
              to ‘Getting Paid’ — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">In 3 Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-[2rem]"></div>
              <div className="mb-8 relative">
                <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
                  <Layers className="w-10 h-10 text-purple-400" />
                </div>
                <span className="absolute -top-2 -right-2 bg-purple-500/20 text-purple-300 text-xs font-black px-3 py-1 rounded-full border border-purple-500/30">01</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Learn the System</h3>
              <p className="text-slate-400 leading-relaxed">
                Unlock the 6-layer syntax that gives you full control over lighting, scale, realism, and brand feel — no more “lucky prompts.”
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-[2rem]"></div>
              <div className="mb-8 relative">
                <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-500/30">
                  <Target className="w-10 h-10 text-blue-400" />
                </div>
                <span className="absolute -top-2 -right-2 bg-blue-500/20 text-blue-300 text-xs font-black px-3 py-1 rounded-full border border-blue-500/30">02</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Land Your First Client</h3>
              <p className="text-slate-400 leading-relaxed">
                Use our “Trojan Horse” method to send irresistible samples that get replies — even if you’ve never sold anything before.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-[2rem]"></div>
              <div className="mb-8 relative">
                <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-green-500/30">
                  <Zap className="w-10 h-10 text-green-400" />
                </div>
                <span className="absolute -top-2 -right-2 bg-green-500/20 text-green-300 text-xs font-black px-3 py-1 rounded-full border border-green-500/30">03</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scale Fast with AWA</h3>
              <p className="text-slate-400 leading-relaxed">
                Let our Dezygn AWA Agent generate 100+ polished assets per hour — and build a system that supports $2K+ months on repeat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery Story */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             
             {/* Left: Founder & Proof (Sticky) */}
             <div className="lg:col-span-5 relative">
                <div className="lg:sticky lg:top-32 space-y-8">
                  
                  {/* Founder Badge */}
                  <div className="bg-white/5 p-4 rounded-2xl shadow-lg border border-white/10 flex items-center gap-4 w-fit backdrop-blur-sm">
                    <div className="relative">
                      <img src="https://i.imgur.com/6eM3qvK.png" alt="Bertrand" className="w-14 h-14 rounded-full object-cover border-2 border-slate-800 shadow-md" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-slate-900 flex items-center justify-center text-[10px] text-white">
                        <Check className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">Bertrand</p>
                      <p className="text-slate-400 text-xs font-medium">Founder, Dezygn</p>
                    </div>
                  </div>

                  {/* The "Vault" - Stacked Proof */}
                  <div className="relative cursor-default">
                     <div className="flex items-center justify-between mb-4 px-2">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Verified Upwork Earnings</p>
                        <div className="flex -space-x-2">
                          {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-900"></div>)}
                        </div>
                     </div>
                     
                     <div className="relative h-[300px] w-full">
                        {/* Card 1 (Top - Milan) */}
                        <div className="absolute top-0 left-0 right-0 z-40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                          <div className="relative">
                            <img src="https://i.imgur.com/dFBg2qw.png" alt="Milan Win" className="rounded-2xl shadow-xl border-4 border-white/10 w-full" />
                            <div className="absolute -top-4 -right-4 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-white/10">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" /> 
                              <span>Student Win: $2,000</span>
                            </div>
                          </div>
                        </div>
                        {/* Card 2 (LOvDSjq.png) */}
                        <div className="absolute top-12 left-4 right-4 z-30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                          <img src="https://i.imgur.com/LOvDSjq.png" alt="Win 1" className="rounded-2xl shadow-xl border border-white/10 w-full" />
                        </div>
                        {/* Card 3 (GcOWVIO.png) */}
                        <div className="absolute top-24 left-8 right-8 z-20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                          <img src="https://i.imgur.com/GcOWVIO.png" alt="Win 2" className="rounded-2xl shadow-xl border border-white/10 w-full" />
                        </div>
                        {/* Card 4 (Deepest - idbSH5D.png) */}
                        <div className="absolute top-36 left-12 right-12 z-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                          <img src="https://i.imgur.com/idbSH5D.png" alt="Win 3" className="rounded-2xl shadow-xl border border-white/10 w-full" />
                        </div>
                     </div>
                  </div>

                  {/* Chat UI Element */}
                  <div className="bg-white/5 rounded-2xl p-1 shadow-xl border border-white/10 mt-8 transform transition-transform hover:scale-[1.02]">
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-white/5">
                      <div className="flex items-center gap-2 mb-3 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <img src="https://i.imgur.com/KXQ2uYM.png" alt="Retainer Chat" className="rounded-lg w-full shadow-sm mb-4 opacity-90 border border-white/10" />
                      <div className="flex gap-3 items-start bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-blue-200 font-medium italic">
                          "You can get paid $630 a month for 12 images if you know how to position AI Photography."
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
             </div>

             {/* Right: Story Text */}
             <div className="lg:col-span-7 lg:pl-12">
               <div className="inline-flex items-center gap-2 text-purple-400 font-bold text-sm uppercase tracking-wider mb-6">
                 <span className="w-8 h-px bg-purple-500"></span>
                 From the Founder's Desk
               </div>
               
               <div className="prose prose-lg prose-invert max-w-none">
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
                   "I Didn’t Set Out to Teach This. <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">I Just Found Something That Worked.”</span>
                 </h2>
                 
                 <p className="text-xl font-medium text-slate-200 mb-8 leading-relaxed">
                   Hey, I’m Bertrand.
                 </p>
                 
                 <p className="text-slate-400 leading-relaxed mb-6">
                   A few months ago, I noticed something weird on Upwork: Every day, 20, 30, sometimes even 50 businesses were posting jobs for AI Product Photography.
                 </p>
                 
                 <p className="text-slate-400 leading-relaxed mb-6">
                   These weren’t randoms. They were real brands. They knew AI tools like Midjourney and ChatGPT existed. They just couldn’t get them to produce anything good enough to actually use.
                 </p>
                 
                 <div className="bg-white/5 border-l-4 border-purple-500 pl-6 py-4 my-8 italic text-slate-300 font-medium shadow-sm rounded-r-xl">
                   So I started applying for the jobs myself. At first, I landed small gigs — $100 here, $300 there. But I kept refining the system.
                 </div>

                 <img src={retainerImage} alt="$630/month retainer milestone" className="rounded-xl border border-white/10 shadow-lg my-8" />

                 <p className="text-slate-400 leading-relaxed mb-6">
                   And soon, I turned it into a <strong className="text-white">$630/month retainer</strong> — just to deliver 12 polished images per month. That’s $52 an image. On repeat.
                 </p>
                 
                 <p className="text-slate-400 leading-relaxed mb-6">
                   While that was happening, I was building Dezygn — an AI assistant that takes the job from hours of editing to just minutes. And once the tool was dialed in, I taught the process to Milan.
                 </p>
                 
                 <p className="text-slate-400 leading-relaxed mb-8">
                   He landed a <strong className="text-white">$2,000 ecom project</strong>, dropped his production time from 4 hours per product to 30 minutes — and now he’s running it like a real business.
                 </p>
                 
                 <h3 className="text-2xl font-bold text-white mb-4">That’s when it clicked:</h3>
                 
                 <p className="text-slate-400 leading-relaxed mb-6">
                   If you know how to finish that “last 20%” — the difference between amateur and commercial — you can win. There are businesses out there right now looking for this. They just don’t know you exist yet.
                 </p>
                 
                 <p className="text-white font-bold text-lg leading-relaxed">
                   So I built this course to fix that. It gives you the exact system I used — the workflows, the syntax, the templates, even the outreach. If you’re tired of dabbling and ready to get paid, this is where it starts.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* The Reality Check Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Headline */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
              <X className="w-4 h-4 text-red-500" />
              <span className="text-red-400 font-bold text-sm uppercase tracking-wide">The Reality Check</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Clients Don’t Pay for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">“Close Enough”</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              AI tools can get you 80% of the way there. The image looks “pretty good.”
              <br/>But “pretty good” <span className="text-red-500 font-bold">doesn’t work in e-commerce.</span>
            </p>
          </div>

          {/* What Kills The Sale Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {[
              { icon: <AlertTriangle className="w-6 h-6 text-red-500" />, title: "Accuracy Fail", desc: "A small pendant turns into a medallion.", result: "Refund" },
              { icon: <Users className="w-6 h-6 text-orange-500" />, title: "Consistency Fail", desc: "Skintones shift between frames.", result: "Low Trust" },
              { icon: <Layers className="w-6 h-6 text-pink-500" />, title: "Branding Fail", desc: "Branding is inconsistent.", result: "No Repeat Orders" }
            ].map((item, i) => (
              <div key={i} className="group bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-red-500/30 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500/10 px-4 py-2 rounded-bl-2xl text-xs font-bold text-red-400 border-b border-l border-white/5 group-hover:bg-red-500/20 transition-colors">
                  = {item.result}
                </div>
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-red-500/20">
                  {item.icon}
                </div>
                <p className="text-lg font-medium text-slate-300 leading-snug">{item.desc}</p>
                <p className="mt-4 text-sm font-bold text-red-400">This is why AI freelancers get ghosted.</p>
              </div>
            ))}
          </div>

          {/* The Real Problem (Split Layout) */}
          <div className="bg-slate-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              
              {/* Left: The Trap */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <Zap className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-3xl font-black text-white">💡 THE REAL PROBLEM</h3>
                </div>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Clients don’t want art. They want <strong className="text-white">assets</strong>. 
                  Real images, that represent real products, in a way that’s accurate, consistent, and professional.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Most freelancers get stuck at 80%:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-green-400">
                      <Check className="w-5 h-5" /> The vibe is right
                    </li>
                    <li className="flex items-center gap-3 text-red-400">
                      <X className="w-5 h-5" /> But the lighting is off
                    </li>
                    <li className="flex items-center gap-3 text-red-400">
                      <X className="w-5 h-5" /> The product is warped
                    </li>
                    <li className="flex items-center gap-3 text-red-400">
                      <X className="w-5 h-5" /> The branding doesn’t match
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-white/10 text-center">
                    <p className="font-mono text-sm text-slate-500">Result: <span className="text-red-400">“Good Enough” (Unusable)</span></p>
                  </div>
                </div>
              </div>

              {/* Right: The Solution */}
              <div className="flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-white mb-4">That last 20% is where the money is.</h3>
                  <p className="text-lg text-slate-400">
                    If you can’t deliver commercial-grade visuals, you can’t charge commercial-grade prices.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-8 rounded-3xl shadow-2xl border border-white/10 relative group hover:scale-[1.02] transition-transform duration-300">
                  <div className="absolute -top-6 -right-6 bg-yellow-400 text-slate-900 font-black text-sm px-4 py-2 rounded-lg shadow-lg transform rotate-6">
                    💥 WHY THIS COURSE EXISTS
                  </div>
                  <p className="text-xl font-bold text-white leading-relaxed mb-4">
                    This program teaches you how to close that gap.
                  </p>
                  <p className="text-white/80 font-medium">
                    To stop generating random outputs… and start producing real assets that pass client QC and drive revenue.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* The Solution: The Opportunity */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] opacity-50"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1 mb-8">
                <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-green-400 font-bold text-xs tracking-widest uppercase">Market Opportunity</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                The Gap Is <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">The Opportunity.</span>
              </h2>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Right now, <span className="text-white font-bold">40+ businesses per day</span> are posting jobs for “AI Product Photography.” They know AI can save them money — but they don’t know how to get commercial-grade results.
              </p>

              <div className="space-y-8">
                {/* The Advantage */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    The Advantage You Have
                  </h3>
                  <ul className="space-y-3">
                    {['Brands are actively looking', 'The bar is low', 'The tech is already there', 'Most people don’t know how to use it properly'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <Check className="w-4 h-4 text-green-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Vehicle */}
                <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/20 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-purple-400" />
                    The Vehicle To Do It
                  </h3>
                  <ul className="space-y-3 relative z-10">
                    <li className="flex items-start gap-3 text-slate-300">
                      <Layers className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                      <span>The <strong className="text-white">6-layer syntax</strong> to control the output</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <Target className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                      <span>The <strong className="text-white">Trojan Horse</strong> method to land jobs</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <Sparkles className="w-4 h-4 text-yellow-400 shrink-0 mt-1" />
                      <span>The <strong className="text-white">Dezygn AWA agent</strong> to scale delivery</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xl font-bold text-white leading-snug">
                  You don’t need more tools. <br/>
                  <span className="text-purple-400">You need the training to turn those tools into income.</span>
                </p>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-[2.5rem] blur-xl opacity-20 animate-pulse"></div>
              <img 
                src="https://i.imgur.com/XDyoHLM.png" 
                alt="AI Asset Creation Workflow" 
                className="relative rounded-[2rem] shadow-2xl border border-white/10 w-full transform hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-4 animate-bounce-slow hidden lg:flex">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-slate-900">$</div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Result</p>
                  <p className="text-white font-bold">Commercial Grade</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Introducing: Promptography Secrets */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
          <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl animate-float-reverse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-2 bg-slate-800 rounded-[2.5rem] ring-1 ring-white/10 shadow-2xl">
                <img
                  src="https://i.imgur.com/lLM9x1Y.png"
                  alt="Promptography Secrets Interface"
                  className="relative w-full h-auto rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  The Blueprint to Paid AI Photography
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Introducing Promptography Secrets: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">The System for Turning AI Prompts Into Paychecks</span>
              </h2>

              <p className="text-xl text-slate-400 leading-relaxed font-medium mb-8">
                The proven system to turn “lucky shots” into client-grade deliverables — and get paid to do it.
              </p>

              <a
                href="#pricing"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-10 py-5 rounded-full font-bold shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transform hover:scale-105 transition-all duration-300"
              >
                <span>Discover the Program</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-5 py-2 mb-6 border border-purple-500/20">
                <PlayCircle className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 font-bold text-sm">THE CURRICULUM</span>
              </div>
            <h2 className="text-4xl font-extrabold text-white mb-4">4 Weeks of Mastery</h2>
            <p className="text-xl text-slate-400">Starting January 5th — Live + Recorded Deep Dives</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Module List */}
            <div className="space-y-6 relative z-10">
              {/* Module 1: The Story */}
              <div className="group bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center text-xl font-black text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-colors">01</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">The Story</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300">Your belief builder. My journey from zero Upwork reviews to $640/month retainers. Why AI photography, why now, why this works.</p>
                  </div>
                </div>
              </div>

              {/* Module 2: The Skill */}
              <div className="group bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center text-xl font-black text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-colors">02</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">The Skill</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300">Visual Syntax. The formula. Accuracy, realism, branding. Image transfer. The workflows (Fixer, Builder, Architect). This is the CRAFT.</p>
                  </div>
                </div>
              </div>

              {/* Module 3: The Clients */}
              <div className="group bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center text-xl font-black text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-colors">03</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">The Clients</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300">Where to find them (Upwork, 840+ jobs/week). How to win them (free sample strategy). The outreach, the keywords, the 5-a-day system.</p>
                  </div>
                </div>
              </div>

               {/* Module 4: The Delivery */}
               <div className="group bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center text-xl font-black text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-colors">04</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">The Delivery</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300">How to price ($25-50/image, retainer model). How to deliver (the last 1%, upscaling, polish). How to KEEP them and turn one-offs into $500/month retainers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="relative h-full min-h-[500px] lg:min-h-full flex items-center justify-center p-8 lg:p-12">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
               <div className="relative h-full w-full bg-slate-900 rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex items-center justify-center group hover:scale-[1.01] transition-transform duration-500">
                  <img
                    src="https://i.imgur.com/5TnIiLO.png"
                    alt="Curriculum Overview"
                    className="relative w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWA Agent Software Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#050B24] text-white relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-5 py-2 mb-8 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-200 font-bold text-sm tracking-wider">INCLUDED FREE (3 MONTHS)</span>
              </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x">AWA</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-200/80 max-w-3xl mx-auto font-light leading-relaxed">
              Your new AI Creative Director. She orchestrates a team of 9 specialized sub-agents to do the work for you.
            </p>
          </div>

          {/* Hero Image with Glow */}
          <div className="relative max-w-5xl mx-auto mb-24 group perspective-1000">
             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
             <img 
               src="https://i.imgur.com/VWgrrRU.png" 
               alt="AWA Interface" 
               className="relative rounded-[2rem] shadow-2xl border border-white/10 w-full transform transition-transform duration-700 hover:scale-[1.01]" 
             />
             {/* Floating Badge */}
             <div className="absolute -bottom-6 right-12 bg-[#0A1033] border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow hidden md:flex">
               <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                 <Zap className="w-6 h-6 text-purple-400" />
               </div>
               <div>
                 <p className="text-xs text-blue-300 font-bold uppercase tracking-wider">Status</p>
                 <p className="text-white font-bold">Generating 100 Assets...</p>
               </div>
             </div>
          </div>

          {/* Agent Constellation */}
          <div className="mb-32 relative">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">Under The Hood</p>
              <h3 className="text-3xl font-bold text-white">The Agent Constellation</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 max-w-7xl mx-auto relative z-10">
              {[
                { icon: <Compass className="w-5 h-5" />, name: "TaskRouter", color: "blue" },
                { icon: <Sparkles className="w-5 h-5" />, name: "PromptEnhancer", color: "purple" },
                { icon: <Palette className="w-5 h-5" />, name: "ImageEditor", color: "pink" },
                { icon: <Eye className="w-5 h-5" />, name: "VisionCritic", color: "indigo" },
                { icon: <Search className="w-5 h-5" />, name: "SearchOptimizer", color: "cyan" },
                { icon: <Camera className="w-5 h-5" />, name: "ScreenshotAgent", color: "teal" },
                { icon: <FileText className="w-5 h-5" />, name: "ContentExtractor", color: "emerald" },
                { icon: <Dna className="w-5 h-5" />, name: "BrandEvolver", color: "orange" },
                { icon: <FlaskConical className="w-5 h-5" />, name: "IngredientAnalyzer", color: "rose" },
              ].map((agent, i) => (
                <div key={i} className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default relative overflow-hidden">
                  <div className={`absolute inset-0 bg-${agent.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent shadow-inner border border-white/10 group-hover:scale-110 transition-transform text-${agent.color}-300`}>
                    {agent.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors text-center">{agent.name}</span>
                  
                  {/* Connecting Thread (Visual flair) */}
                  <div className="absolute -bottom-4 left-1/2 w-px h-8 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-50"></div>
                </div>
              ))}
            </div>
            
            {/* Connecting Arc Visual */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-10 blur-sm"></div>
          </div>

          {/* Features Grid - Glassmorphic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
             {/* Feature 1 */}
             <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
               <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                 <Users className="w-7 h-7 text-white" />
               </div>
               <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">9 Agents in 1</h3>
               <p className="text-blue-200/70 leading-relaxed">
                 She routes your request to the perfect specialist: from 'PromptEnhancer' to 'VisionCritic' to 'BrandGuard'.
               </p>
             </div>

             {/* Feature 2 */}
             <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
               <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                 <Layers className="w-7 h-7 text-white" />
               </div>
               <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">Batch Scale</h3>
               <p className="text-blue-200/70 leading-relaxed">
                 Generate 100+ unique concepts in a single conversation. Perfect for building entire catalogs in minutes.
               </p>
             </div>

             {/* Feature 3 */}
             <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
               <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
               <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                 <Search className="w-7 h-7 text-white" />
               </div>
               <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-200 transition-colors">Web-Connected</h3>
               <p className="text-blue-200/70 leading-relaxed">
                 She researches competitors, screenshots websites, and extracts brand DNA automatically.
               </p>
             </div>
          </div>
          
          {/* AWA Testimonials - Dark Theme */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20">
            {/* Gerard */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] h-full flex flex-col justify-between hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-2xl font-medium text-white leading-relaxed mb-8">
                    "The speed is ridiculous. I created a month's worth of social media graphics in the time it usually takes me to decide what to order for lunch."
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                  <img src="https://i.imgur.com/nfgmgv2.png" alt="Gerard" className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-500/20" />
                  <div>
                    <p className="font-bold text-xl text-white">Gerard</p>
                    <p className="text-purple-300 font-medium">Small Business Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bruce */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] h-full flex flex-col justify-between hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-2xl font-medium text-white leading-relaxed mb-8">
                    "Replaced a <span className="text-green-400 font-bold">$4,800 shoot</span> with 60-second AI photos. The quality is indistinguishable from our studio shots."
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                  <img src="https://i.imgur.com/FGV60Tw.png" alt="Bruce" className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-500/20" />
                  <div>
                    <p className="font-bold text-xl text-white">Bruce</p>
                    <p className="text-blue-300 font-medium">Founder, CinChili</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Real World Case Studies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-extrabold text-white mb-4">Real Work. Real Contracts.</h2>
             <p className="text-xl text-slate-400">See what "Commercial Grade" actually looks like.</p>
           </div>

           <div className="grid grid-cols-1 gap-16">
             <CaseStudyCard
               title="Goal: 2mm Accuracy for Jewelry"
               badge="PROJECT 1: LARGE ECOM STORE"
               badgeColor="purple"
               goal="To reproduce accurate representation of chains and pendants in lifestyle photography settings."
               challenge="Working with the company's stylist & photographer to create on-brand model/clothing styling. Reproducing 2 to 6mm high pendants and 40 to 80cm chains proved to be very challenging with AI."
               solution="This project required upfront R&D to custom create models, outfits, and finding the right wording to accurately represent tiny pendants. It also required accurately measuring the products within the AI photography."
               heroImage="https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/0f74d57f-ec69-466a-bcf8-d4120c6f1745"
               samples={[
                 "https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/36115481-58bc-4820-9229-72556972c312",
                 "https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/03d053c3-8abc-4fa3-96aa-28b23dc7efec",
                 "https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/aa2361fe-471b-4044-a523-e1ef33c4711e"
               ]}
             />
             <CaseStudyCard
               title="Goal: On-Brand Scandinavian Style"
               badge="PROJECT 2: DANISH TOY BRAND"
               badgeColor="blue"
               goal="To create on-brand, premium AI photography showcasing children interacting with the brand's flagship product in a typical Danish interior."
               challenge="Existing imagery was not on brand; a custom photoshoot would have been too expensive."
               solution="Studied Danish interior design (flooring, furniture, light). The bigger challenge was to get a unique, foreign-to-LLMs product shown in the right dimensions, done using in-house image transfer technique."
               heroImage="https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/2d0e7669-28e9-44f3-87a2-b2e9670e5ea5"
               samples={[
                 "https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/57209dd4-dd14-4e4b-a274-c8bbb01a5b38",
                 "https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/89733176-9490-4a88-a0cd-54f5ed58ad5b",
                 "https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/9be563aa-b158-4041-aa55-1edf78c3593c"
               ]}
             />
           </div>
         </div>
      </section>

      {/* 5-Day Bonus Sprint (Redesigned) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 border-y border-white/10 relative overflow-hidden">
        {/* Glitch/Tech Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
           <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Mission Timeline */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-8">
                <span className="animate-pulse w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-orange-500 font-bold text-xs tracking-widest uppercase">Fast Action Bonus</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                The 5-Day <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Client Sprint</span>
              </h2>
              
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Most people learn forever and never earn. This sprint forces you to take action immediately. <strong className="text-white">Follow the protocol, get paid.</strong>
              </p>

              <div className="space-y-0 relative border-l-2 border-white/10 ml-3 pl-8 py-2">
                {[
                  { day: "Day 1", title: "The MVP Portfolio", desc: "Create 3 'Before & After' case studies from random ads." },
                  { day: "Day 2", title: "Golden Keywords", desc: "Setup your feed to find the hidden jobs others miss." },
                  { day: "Day 3", title: "The Trojan Horse", desc: "Send your first 5 samples using our script." },
                  { day: "Day 4-5", title: "Volume Protocol", desc: "Apply to 5 jobs per day. No excuses." },
                ].map((item, i) => (
                  <div key={i} className="relative mb-10 last:mb-0 group">
                    <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-orange-500/50 group-hover:border-orange-500 group-hover:bg-orange-500 transition-all flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1 group-hover:text-orange-400 transition-colors">{item.day}: {item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mission Card */}
            <div className="relative">
               <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] blur opacity-20 animate-pulse"></div>
               <div className="relative bg-slate-900 rounded-[2rem] border border-white/10 p-8 overflow-hidden">
                  
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <Target className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Mission Objective</p>
                        <p className="text-white font-bold text-lg">Get Hired in 5 Days</p>
                      </div>
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-xs font-bold border border-green-500/30">
                      ACTIVE
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-300">Portfolio Built</span>
                        <span className="text-green-400 font-bold">Done</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-green-500 to-emerald-400"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-300">Applications Sent</span>
                        <span className="text-orange-400 font-bold">In Progress (3/5)</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-3/5 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 mt-6 border border-white/5">
                      <p className="text-sm text-slate-300 italic">
                        <span className="text-orange-500 font-bold">"</span> I followed the sprint and got a reply on Day 3. The script works. <span className="text-orange-500 font-bold">"</span>
                      </p>
                    </div>
                  </div>

               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
           <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
             <Shield className="w-10 h-10 text-green-500" />
           </div>
           <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
             2x Money-Back Guarantee: <br/>Do the Work or Don’t Pay—Twice.
           </h2>
           <p className="text-xl text-slate-400 mb-8">
             If you follow the system and don’t book a single call or land a paid job, I’ll double your money back. No fine print. Just results or 2x your investment returned.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                 <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <span className="text-sm font-medium text-slate-300">Complete the 30-Day Tracker</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                 <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <span className="text-sm font-medium text-slate-300">Send 60 Outreach Messages</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                 <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                 <span className="text-sm font-medium text-slate-300">Submit 10 Samples for Review</span>
              </div>
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-green-400 font-bold text-xs tracking-widest uppercase">Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Choose Your Path</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Start generating commercial-grade assets today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
             
             {/* Tier 1: Course Only (Decoy) */}
             <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
               <h3 className="text-xl font-bold text-slate-300 mb-2">Masterclass Only</h3>
               <p className="text-sm text-slate-500 mb-6">For those who already have their own tools.</p>
               
               <div className="flex items-baseline gap-1 mb-8">
                 <span className="text-4xl font-black text-white">$397</span>
                 <span className="text-slate-500">one-time</span>
               </div>

               <ul className="space-y-4 mb-8">
                 <li className="flex items-start gap-3 text-sm text-slate-300">
                   <Check className="w-5 h-5 text-slate-500 shrink-0" />
                   <span>6-Week Promptography Masterclass</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-slate-300">
                   <Check className="w-5 h-5 text-slate-500 shrink-0" />
                   <span>The 5-Day "Get Clients" Sprint</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-slate-300">
                   <Check className="w-5 h-5 text-slate-500 shrink-0" />
                   <span>Private Discord Community</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-slate-600">
                   <X className="w-5 h-5 text-slate-700 shrink-0" />
                   <span className="line-through decoration-slate-700">3 Months of Dezygn Agency</span>
                 </li>
               </ul>

               <a
                 href="https://dezygn.checkoutpage.com/promptography-course-only"
                 className="w-full block text-center py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
               >
                 Join Masterclass Only
               </a>
             </div>

             {/* Tier 2: Bundle (Main) */}
             <div className="relative p-8 md:p-10 rounded-[2.5rem] border-2 border-purple-500/50 bg-slate-900/80 shadow-2xl transform lg:scale-105 z-10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-50 pointer-events-none"></div>
               
               <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg z-20">
                 Best Value
               </div>
               
               <h3 className="text-2xl font-black text-white mb-2 relative z-10">Masterclass + Agency Suite</h3>
               <p className="text-sm text-purple-200 mb-6 relative z-10">Everything you need to learn AND deliver.</p>
               
               <div className="flex items-baseline gap-1 mb-2 relative z-10">
                 <span className="text-5xl font-black text-white">$497</span>
                 <span className="text-slate-400">one-time</span>
               </div>
               <div className="mb-8 relative z-10">
                  <span className="text-sm text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded">Save $600+ vs buying separately</span>
               </div>

               <ul className="space-y-4 mb-10 relative z-10">
                 <li className="flex items-start gap-3 text-white font-medium">
                   <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400 shrink-0" /></div>
                   <span>6-Week Promptography Masterclass</span>
                 </li>
                 <li className="flex items-start gap-3 text-white font-medium">
                   <div className="bg-purple-500/20 p-1 rounded-full"><Sparkles className="w-3 h-3 text-purple-400 shrink-0" /></div>
                   <span><strong>3 Months of Dezygn Agency</strong> (Value $297)</span>
                 </li>
                 <li className="flex items-start gap-3 text-white font-medium">
                   <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400 shrink-0" /></div>
                   <span>The 5-Day "Get Clients" Sprint</span>
                 </li>
                 <li className="flex items-start gap-3 text-white font-medium">
                   <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400 shrink-0" /></div>
                   <span>Private Discord Community</span>
                 </li>
                 <li className="flex items-start gap-3 text-white font-medium">
                   <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-green-400 shrink-0" /></div>
                   <span>Weekly Live Coaching</span>
                 </li>
               </ul>

               <a
                 href="https://dezygn.checkoutpage.com/promptography-secrets"
                 className="w-full block text-center py-5 rounded-2xl font-black text-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:scale-[1.02] transition-all relative z-10"
               >
                 Get The Full Bundle
               </a>
               <p className="text-center text-xs text-slate-500 mt-4 relative z-10">
                 100% Risk-Free. 2x Money-Back Guarantee.
               </p>
             </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
             <div className="bg-white/5 rounded-xl shadow-sm border border-white/10 p-6">
              <FAQItem
                question="Do I need a powerful computer?"
                answer="No. Everything runs in the cloud via Dezygn (which is included for 3 months). You can even work from an iPad."
              />
            </div>
            <div className="bg-white/5 rounded-xl shadow-sm border border-white/10 p-6">
              <FAQItem
                question="I have no design experience. Is this for me?"
                answer="Yes. In fact, it's better if you don't have 'bad habits'. We teach you the Visual Syntax formula from scratch."
              />
            </div>
            <div className="bg-white/5 rounded-xl shadow-sm border border-white/10 p-6">
              <FAQItem
                question="What if I don't get any clients?"
                answer="We have a 2x Money-Back Guarantee. If you complete the sprint (do the work, apply to jobs) and don't land a single client, we will refund you double what you paid. That's how confident we are."
              />
            </div>
            <div className="bg-white/5 rounded-xl shadow-sm border border-white/10 p-6">
              <FAQItem
                question="When do the live calls happen?"
                answer="Calls are weekly. All sessions are recorded and pinned in the Discord, so you can watch them whenever suits your schedule."
              />
            </div>
          </div>
        </div>
      </section>

       {/* Final Footer CTA */}
       <section className="py-20 px-4 bg-slate-950 text-center border-t border-white/10">
         <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Turn AI Into Income?</h2>
           <p className="text-xl text-slate-400 mb-8">Only 10 spots available for this cohort. Don't miss the wave.</p>
           <a
             href="#pricing"
             className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors"
           >
             Secure Your Spot <ArrowRight className="w-5 h-5" />
           </a>
         </div>
       </section>

    </Layout>
  );
}

export default PromptographyPage;
