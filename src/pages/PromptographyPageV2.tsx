import { useState, useEffect } from 'react';
import { ArrowRight, Check, Minus, Plus, Shield, Users, Zap, X, Layers, Sparkles, Search, Target, Star, AlertTriangle, Wrench, Compass, Eye, FileText, Dna, FlaskConical, Palette, Camera, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0 pb-4 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-start gap-4 text-slate-900 hover:text-purple-600 transition-colors"
      >
        <span className="font-bold text-lg">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 flex-shrink-0 text-purple-600" />
        ) : (
          <Plus className="w-5 h-5 flex-shrink-0 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 text-slate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

function PromptographyPageV2() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Friday, January 9th, 2026 at 11:59 PM EST
      const endDate = new Date('2026-01-10T04:59:00Z'); // 11:59 PM EST = 4:59 AM UTC next day
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout hideHeader={true}>
      <Helmet>
        <title>AI Photography Agency Secrets | Dezygn</title>
        <meta name="description" content="How to make an extra $639 per client EACH MONTH for less than 1 day of work by leveraging this emerging niche AI skill." />
      </Helmet>

      {/* Scarcity Bar */}
      <div className="bg-slate-900 text-white py-3 px-4 text-center text-sm md:text-base sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 font-semibold tracking-wide">
            <span>Join the AI Photography Agency Secrets.</span>
            <span className="text-yellow-300">Ends Soon</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
            <span className="text-slate-300">Ends in</span>
            <span className="tabular-nums">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </span>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-red-600 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm hover:bg-red-700 transition-colors"
          >
            BUY NOW
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-red-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 translate-y-12 translate-x-1/3 w-[520px] h-[520px] bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
            <span className="text-slate-700 font-bold text-xs uppercase tracking-wider">
              If your creative / agency business has been declining because of AI, read this.
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-[1.05] tracking-tight text-slate-900">
            <span className="block text-3xl md:text-4xl">How to earn an extra</span>
            <span className="block mt-2">
              <span className="inline-block bg-[#ffea00] px-3 transform -rotate-1 shadow-sm border-2 border-slate-900 text-slate-900">$639 per client</span> EACH MONTH
            </span>
            <span className="block mt-2 text-2xl md:text-4xl font-bold text-slate-600">
              with <span className="italic text-red-600 underline decoration-red-300 decoration-4 underline-offset-4">less than 1 day of work</span>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed font-semibold">
            By selling <strong className="text-slate-900">AI Product Photography</strong> to e-com brands
            <br />
            who <strong className="text-red-600">desperately need it</strong>—but <strong className="text-red-600">can't do it themselves.</strong>
          </p>

          <div className="mt-12">
            <div className="relative w-full mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-[2rem] blur-lg opacity-60"></div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl bg-white">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    className="absolute inset-0 h-full w-full border-0"
                    src="https://www.tella.tv/video/vid_cmjvsujbo00al04l44s1qafyl/embed?b=0&title=1&a=1&loop=0&t=0&muted=0&wt=0"
                    title="Promptography hero video"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#recap"
              className="group inline-flex items-center justify-center gap-2 bg-red-600 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-red-700 hover:shadow-red-600/20 transform transition-all duration-200"
            >
              Secure Your Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="text-slate-400 line-through">$999</span>
                <span className="text-green-600">70% Founding Discount</span>
              </div>
              <p className="text-slate-500 text-xs">Limited to first 50 seats.</p>
            </div>
          </div>

          <div className="relative mt-8 bg-white p-4 rounded-xl border border-slate-200 shadow-lg flex items-start gap-4 animate-fade-in-up max-w-xl mx-auto text-left">
            <img
              src="https://www.upwork.com/profile-portraits/c1C0jvfaaxrjRXgvxDIOAUm3bMhbJjqqIeoMek_2TTijZyaSfWbFRsXirPIBSDnBAF"
              alt="Milan"
              className="w-12 h-12 rounded-full border-2 border-green-100 shrink-0"
            />
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-slate-700 text-sm font-medium leading-snug">
                "Just got this contract... First 10 products done. Potential earning here is <span className="bg-green-100 text-green-700 px-1 font-bold">$2,000+</span> for the entire project."
              </p>
              <p className="text-slate-400 text-xs font-bold mt-2">— Milan, Freelancer</p>
            </div>
          </div>
        </div>
      </section>



      {/* 3 Steps */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Pill */}
            <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-6">
              <span className="text-purple-600 font-bold text-xs uppercase tracking-wider">
                The Simple Path
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              It's as simple as <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">1, 2, 3!</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Follow this proven framework to turn AI photography into a profitable service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Step 1 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-[2rem] opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-purple-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl h-full">
                <div className="mb-8 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <Camera className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-7xl font-black text-purple-100 absolute top-0 right-0 select-none">1</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Learn AI Photography</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Discover why clients desperately need AI photography in 2026 and how to deliver this innovative service.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative md:mt-8">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2rem] opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl h-full">
                <div className="mb-8 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-7xl font-black text-blue-100 absolute top-0 right-0 select-none">2</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Sell to Clients</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Next, you will learn how to sell it in a way that is so cool that clients are actually happy to hear from you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-[2rem] opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-green-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl h-full">
                <div className="mb-8 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/30 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-7xl font-black text-green-100 absolute top-0 right-0 select-none">3</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Profit in 2026</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Be one of the first to catch the growing wave of e-com AI photography before it becomes a trend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story: The Problem */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Pill */}
          <div className="inline-block px-4 py-1.5 bg-red-50 border border-red-100 rounded-full mb-6">
            <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
              The Hard Truth
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            The Silent Killer: Why Most Small Agencies and Freelancers Will Not Survive 2026
          </h2>
          <div className="w-20 h-1 bg-red-500 rounded-full mb-12"></div>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>It is unfortunate, but many more small agencies will die in 2026.</p>

            <p>But it is <strong className="text-slate-900 font-bold">NOT your fault.</strong></p>

            <p>If you have been in business for more than 3 years, you know we are in unprecedented times.</p>

            <p>Artificial Intelligence is slowly killing small service businesses.</p>

            <p>It first started around 2022 with SEO and content marketing agencies.</p>

            <p>ChatGPT took over and essentially made them obsolete.</p>

            <p>Small businesses stopped calling on us freelancers to help them with content. Instead, they just started asking ChatGPT.</p>

            <p>And ChatGPT gave them better results, faster, and cheaper than any marketing agency ever could.</p>

            <p>Content Marketing agencies have been nearly WIPED OFF the map.</p>

            <p className="text-slate-900 font-semibold">As if this was not enough…</p>

            <p>AI then came after web and graphic designers. With products like Lovable, Divi AI, and Canva AI.</p>

            <p>Your "mom and pop" stores which desperately needed help in the past? Now they can do it all themselves.</p>

            {/* McKinsey Quote */}
            <div className="my-10 bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 pl-8 pr-6 py-6 rounded-r-xl shadow-sm">
              <p className="text-xl italic text-slate-800 leading-relaxed mb-2">
                "Companies using AI are primarily using it to save time and reduce the cost of work they used to outsource."
              </p>
              <p className="text-sm font-semibold text-purple-700">— McKinsey</p>
            </div>

            <p>And so if you are in the web design or the graphic design trade... You probably felt that there was LESS MONEY TO BE MADE in 2025.</p>

            <p className="font-semibold text-slate-900">And it will be even worse in 2026.</p>

            {/* Key Visual Quote Card */}
            <div className="my-12 bg-white border-2 border-slate-200 p-8 md:p-10 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                    "1 in 5 creative freelancers has already lost work because of AI."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story: The Solution */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Pill */}
          <div className="inline-block px-4 py-1.5 bg-green-50 border border-green-100 rounded-full mb-6">
            <span className="text-green-600 font-bold text-xs uppercase tracking-wider">
              The Opportunity
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            The Great Shift: How a Hidden "E-com Wave" is Creating a Massive New Opening for Creatives
          </h2>
          <div className="w-20 h-1 bg-green-500 rounded-full mb-12"></div>

           <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
             <p>But there is still hope. What we are going through right now is a major shift in business and economics.</p>

             <p>But if you have been around, this is not the first nor the last shift you will experience.</p>

             <p>I remember when I started my graphic design career in 2007. I used to create business cards and banners—mainly print materials. But then Facebook introduced Pages. Twitter made a splash. And soon I had to transition to doing social media graphics.</p>

             <p>When I was doing websites for clients, I used to use Blogspot. But then WordPress came, and I had to learn everything all over again.</p>

             <p>You probably went through the same throughout the years. Technologies change with each era. This is a fact of life. And with each change, we need to adapt.</p>

             <p className="font-semibold text-slate-900">This is one such time, today at the dawn of 2026.</p>

             <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">When one door is closed, many more will open.</h3>

             <p>Back in mid-2025, I decided to change my focus with Dezygn to help freelancers survive the new economy.</p>

             <p>I started implementing features like design sharing and client feedback... But the problem was I wasn't a freelancer myself at the time.</p>

             <p>So I didn't build from experience—just from what I thought would be useful.</p>

             <p>So in September, I made the jump and created a brand-new Upwork account. Right away, I was astonished by the amount of AI image and video work there was.</p>

             <p className="font-semibold text-slate-900">And I noticed a massive trend happening.</p>

             <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 p-8 rounded-2xl my-10 text-center shadow-lg">
                <p className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight">There is a HUGE DEMAND for AI Product & Lifestyle Photography.</p>
             </div>

             <img src="https://i.imgur.com/4EDutbg.png" alt="Upwork Jobs Screenshot" className="rounded-xl shadow-2xl border border-slate-200 w-full my-10" />

             <p>Since the release of Nano Banana, brands have realized they no longer need to pay $1,000 for photoshoots to get good pictures.</p>

             <p>And they also realized: <strong className="text-slate-900 font-bold">AI Photography OUTPERFORMS traditional pack shots. By a lot.</strong></p>

             <div className="my-10 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 pl-8 pr-6 py-6 rounded-r-xl shadow-sm">
               <p className="text-xl italic text-slate-800 leading-relaxed mb-2">
                 "Shopify's 2025 data shows stores using AI product photography increased conversion rates by roughly 47–53% on their product pages."
               </p>
               <p className="text-sm font-semibold text-green-700">— Shopify 2025 Report</p>
             </div>

             <p>The problem is, prompting for AI images is not as simple as generating an article. And if the brand does not get it right, they WILL face customer backlash.</p>

             <p>In fact, businesses get regularly slammed online for using "AI slop."</p>

             <img src="https://i.imgur.com/i8MOF6r.jpeg" alt="Business getting critiqued for AI slop" className="rounded-xl shadow-2xl border border-slate-200 w-full my-10" />

             <p className="font-semibold text-slate-900">And this is why they need someone like you. Someone who can guarantee accuracy, realism, and branding.</p>

             <p>Within a few days of starting on Upwork, I won my first $300 gig for a men's accessories e-com brand. While I was working on that project, I won multiple more smaller projects.</p>

             <p>These were all "good and dandy," but I didn't like that these were one-off gigs.</p>

             <p className="font-semibold text-slate-900">This is when I decided to sell AI photography as a recurring service.</p>
           </div>
        </div>
      </section>

      {/* Story: Pain of Development */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Pill */}
          <div className="inline-block px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full mb-6">
            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider">
              The Journey
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            I Spent Thousands of Dollars and Hundreds of Hours Solving the "AI Slop" Problem So You Don't Have To
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mb-12"></div>

           <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
             <p>When I took on those first clients, I had NO IDEA how I was going to fulfill the work.</p>

             <p>In fact, how do you create a realistic 20mm pendant on a 60cm long chain? AI doesn't do it naturally. It doesn't do well with dimensions.</p>

             <p>I had to literally spend DAYS generating images to get it right.</p>

             <img src="https://i.imgur.com/4czyWoO.jpeg" alt="Dezygn trials for necklace" className="rounded-xl shadow-2xl border border-slate-200 w-full my-10" />

             <p>This is when I came up with my own framework, which I call the <strong className="text-slate-900 font-bold">Visual Syntax</strong>.</p>

             <p>Then I wondered… how do you price this so it's profitable? How do you make sure you don't get paid pennies for images?</p>

             <p>I cooked up a brand new offer to an e-com client who reached out.</p>

             <p className="text-xl font-bold text-slate-900">12 images for $639 per month. That's $53 per AI Image.</p>

             <img src="https://i.imgur.com/xWgtOvL.png" alt="Client payment screenshot" className="rounded-xl shadow-2xl border border-slate-200 w-full my-10" />

             <p className="font-semibold text-green-600">They agreed without flinching.</p>

             <p>But they only accepted because of the way I positioned this offer.</p>

             <p>How do you create AI Photography for unique products that the AI doesn't recognize? Like a custom stepping stone project from a client.</p>

             <p>I literally had to develop a NEW process called <strong className="text-slate-900 font-bold">IMAGE TRANSFER</strong> to achieve the results.</p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
               <div>
                  <p className="text-center font-bold text-slate-500 mb-3 text-sm uppercase tracking-wide">BEFORE (Raw Client Image)</p>
                  <img src="https://i.imgur.com/4aCG6p3.png" alt="Before" className="rounded-xl shadow-lg border border-slate-200 w-full" />
               </div>
               <div>
                  <p className="text-center font-bold text-green-600 mb-3 text-sm uppercase tracking-wide">AFTER (Transformed)</p>
                  <img src="https://i.imgur.com/zW2zxxj.png" alt="After" className="rounded-xl shadow-lg border border-slate-200 w-full" />
               </div>
             </div>
             <p className="text-center text-lg italic text-slate-600 my-8 font-medium">"When you can achieve results like this even for complex products, clients are more than happy to pay you".</p>

             <p className="font-semibold text-slate-900">This client since told me that out of 15 providers he tested, I was the one who achieved the best ACCURACY and REALISM. I did the hard work so that you can get the results instantly.</p>

             <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 pl-6 pr-4 py-4 rounded-r-xl my-8">
               <p className="text-lg italic text-slate-800 mb-2">"Replaced a $4,800 shoot with 60-second AI photos. The quality is indistinguishable from our studio shots."</p>
               <p className="text-sm font-semibold text-blue-700">— Bruce, Founder of CinChili</p>
             </div>
           </div>
        </div>
      </section>

       {/* Ease of Use */}
       <section className="py-24 bg-white px-4">
         <div className="max-w-6xl mx-auto">
           {/* Pill */}
           <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6 mx-auto block w-fit">
             <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
               The Framework
             </span>
           </div>

           <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-6 leading-tight">
             The 3-Step "Profit Framework" That Turns Complex AI Tech Into a Simple, Repeatable Service
           </h2>
           <div className="w-20 h-1 bg-blue-500 rounded-full mb-16 mx-auto"></div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border border-slate-200 hover:border-purple-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Sell without selling</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">The first step is to sell this service without being pushy. I personally hate hard selling. I found a method that is so effortless that it becomes fun to get clients to work with you.</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Price for profits</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">The second step is to price your offer so it's profitable. I see too many people literally charging $1 per image. I don't charge less than $30 per image for a test project, and $50 per image for recurring work.</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border border-slate-200 hover:border-green-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Deliver with confidence</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">My 7-step process for AI Photography fulfillment means you will never be guessing. And best of all, I will show you how to retain clients and keep them happy for the long term.</p>
                </div>
              </div>
           </div>
         </div>
       </section>

       {/* Speed of Results */}
       <section className="py-24 bg-slate-50 px-4">
          <div className="max-w-5xl mx-auto text-center">
             {/* Pill */}
             <div className="inline-block px-4 py-1.5 bg-cyan-50 border border-cyan-100 rounded-full mb-6">
               <span className="text-cyan-600 font-bold text-xs uppercase tracking-wider">
                 Speed to Market
               </span>
             </div>

             <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
               From "Zero" to Your First Paid Pitch in as Little as 24 Hours
             </h2>
             <div className="w-20 h-1 bg-cyan-500 rounded-full mb-10 mx-auto"></div>

             <div className="text-left max-w-3xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed mb-12">
               <p>But how fast can you get started and earning? First of all, to be 100% crystal-clear: <strong className="text-slate-900 font-bold">This is NOT for everyone.</strong> This is for seasoned freelancers and agencies who understand what it takes to sell services.</p>

               <p>If that's you, you can get started and send your first non-salesy pitch to your existing clients basically on Day 1. This is how my first coaching student, Milan, got his first job in a couple of days by offering this service to an existing client.</p>
             </div>

             <img src="https://i.imgur.com/bPeFGmt.png" alt="Milan Testimonial Screenshot" className="rounded-xl shadow-2xl border border-slate-200 mx-auto" />
          </div>
       </section>

       {/* Future Cast */}
       <section className="py-24 bg-white px-4 overflow-hidden relative">
          <div className="max-w-4xl mx-auto relative z-10">
             {/* Pill */}
             <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-6">
               <span className="text-purple-600 font-bold text-xs uppercase tracking-wider">
                 Envision Success
               </span>
             </div>

             <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight text-center">
               Imagine Your 2026: Working with Dream Clients Who Finally Value Your Expertise (and Pay You Fairly)
             </h2>
             <div className="w-20 h-1 bg-purple-500 rounded-full mb-12 mx-auto"></div>

             <div className="space-y-6 text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
               <p>Imagine having the ability to sell this hot new service to any e-com business in 2026.</p>

               <p>Imagine seeing any one of the millions of businesses out there with TERRIBLE product photography stuck in the previous decade...</p>

               <ul className="space-y-4 my-8 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                 <li className="flex items-start gap-3"><Check className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5"/> <span className="text-lg">Firing up your preferred tools.</span></li>
                 <li className="flex items-start gap-3"><Check className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5"/> <span className="text-lg">Going through my AI Photography point-by-point workflow.</span></li>
                 <li className="flex items-start gap-3"><Check className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5"/> <span className="text-lg">And delivering crisp, accurate, realistic, and on-brand lifestyle photography on a silver platter.</span></li>
                 <li className="flex items-start gap-3"><Check className="text-green-600 w-6 h-6 flex-shrink-0 mt-0.5"/> <span className="text-lg">And getting paid a fair price for it.</span></li>
               </ul>

               <p className="text-2xl font-bold text-slate-900 text-center pt-8">Feeling VALUED for your work. It's an amazing feeling to have in this day and age.</p>
             </div>
          </div>
       </section>

       {/* Credibility */}
       <section className="py-24 bg-slate-50 px-4">
         <div className="max-w-4xl mx-auto">
           {/* Pill */}
           <div className="inline-block px-4 py-1.5 bg-slate-200 border border-slate-300 rounded-full mb-6 mx-auto block w-fit">
             <span className="text-slate-700 font-bold text-xs uppercase tracking-wider">
               Track Record
             </span>
           </div>

           <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 text-center leading-tight">
             Why 200,000+ Designers Have Trusted My Systems Over the Last Two Decades
           </h2>
           <div className="w-20 h-1 bg-slate-500 rounded-full mb-12 mx-auto"></div>

           <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
             <p>Everything I am going to reveal to you here is born from experience.</p>

             <p>I started as a graphic and web freelancer back in 2007. I launched my own graphic platform, Youzign, in 2015.</p>

             <p>Over 200k people signed up, and 3 million designs were generated. Since Dezygn went live in 2025, we have already reached 100k designs.</p>

             <p>I have lived and breathed visual marketing for the past 20 years.</p>

             <p className="text-xl font-bold text-slate-900">But the market is changing. A new generation is rising.</p>

             <p className="text-xl font-semibold text-slate-900">Will you be left out and let this wave pass you by? Or hop on the train before it departs?</p>
           </div>
         </div>
       </section>

       {/* Offer Reveal */}
       <section className="py-24 bg-white px-4 border-t border-slate-100">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* Pill */}
              <div className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full mb-6">
                <span className="text-purple-600 font-bold text-xs uppercase tracking-wider">
                  The Solution
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">INTRODUCING... <br/>The AI Photography Agency Secrets</h2>
              <div className="w-20 h-1 bg-purple-500 rounded-full mb-10 mx-auto"></div>

              <div className="w-full h-64 bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center border-2 border-slate-200 mb-10 text-slate-500 shadow-xl">
                 <div className="text-center">
                   <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                   <p className="font-bold text-lg">[KEY VISUAL PLACEHOLDER: COURSE MOCKUP]</p>
                 </div>
              </div>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12">Everything I learned landing $639/month retainers, winning competitive bids against 15 other providers, and building a repeatable system—packaged into a step-by-step blueprint.</p>
            </div>

            <h3 className="text-3xl font-black text-slate-900 text-center mb-12">Here's exactly what you're getting over the next 4 weeks:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Module 1 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-purple-600 font-black text-xl mb-4">MODULE 1</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">Visual Syntax Framework</h4>
                  <ul className="space-y-4 text-slate-700 text-base">
                    <li className="flex items-start gap-3"><Check className="text-purple-600 shrink-0 mt-1 w-5 h-5"/> <span>The Visual Syntax method for turning any client brief into accurate, realistic AI photography (so that you deliver with confidence every single time—no guesswork).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-purple-600 shrink-0 mt-1 w-5 h-5"/> <span>How to nail exact dimensions like 20mm pendants on 60cm chains (so that clients trust your accuracy and stop questioning your work).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-purple-600 shrink-0 mt-1 w-5 h-5"/> <span>The Image Transfer technique for "impossible" products like reflective jewelry and textured surfaces (so that you can take on projects other freelancers reject).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-purple-600 shrink-0 mt-1 w-5 h-5"/> <span>The 2-hour R&D process that lets you "read clients' minds" (so that difficult clients become your biggest fans and repeat buyers).</span></li>
                  </ul>
                </div>
              </div>

              {/* Module 2 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 font-black text-xl mb-4">MODULE 2</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">Sell Without Selling</h4>
                  <ul className="space-y-4 text-slate-700 text-base">
                    <li className="flex items-start gap-3"><Check className="text-blue-600 shrink-0 mt-1 w-5 h-5"/> <span>Where to find 20+ warm leads every single day without cold outreach (so that you never feel desperate for work again).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-blue-600 shrink-0 mt-1 w-5 h-5"/> <span>My 5-minute daily lead-gen ritual with exact prompts and keywords (so that finding clients becomes automatic, not exhausting).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-blue-600 shrink-0 mt-1 w-5 h-5"/> <span>The 3 client industries that pay premium rates—and the 2 you should avoid at all costs (so that you work with dream clients, not nightmare ones).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-blue-600 shrink-0 mt-1 w-5 h-5"/> <span>My content-driven pitch method (so that clients are excited to hear from you instead of hitting "delete").</span></li>
                  </ul>
                </div>
              </div>

              {/* Module 3 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-green-600 font-black text-xl mb-4">MODULE 3</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">Price for Profits</h4>
                  <ul className="space-y-4 text-slate-700 text-base">
                    <li className="flex items-start gap-3"><Check className="text-green-600 shrink-0 mt-1 w-5 h-5"/> <span>The exact script for positioning AI Photography as a recurring service from day one (so that you build monthly income, not a one-off hustle).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-green-600 shrink-0 mt-1 w-5 h-5"/> <span>How I charge $50+ per image while competitors charge $1 (so that you feel valued and actually build a business).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-green-600 shrink-0 mt-1 w-5 h-5"/> <span>My $639/month offer structure with the exact words I use (so that clients say yes without flinching or negotiating).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-green-600 shrink-0 mt-1 w-5 h-5"/> <span>How to manage AI generation costs and tool subscriptions (so that every project stays profitable, not just busy).</span></li>
                  </ul>
                </div>
              </div>

              {/* Module 4 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-orange-600 font-black text-xl mb-4">MODULE 4</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">Profit Multipliers</h4>
                  <ul className="space-y-4 text-slate-700 text-base">
                    <li className="flex items-start gap-3"><Check className="text-orange-600 shrink-0 mt-1 w-5 h-5"/> <span>The Instagram Content Retainer: how to package AI photography as ongoing social content (so that one client becomes $500-2,000/month recurring).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-orange-600 shrink-0 mt-1 w-5 h-5"/> <span>The Meta Andromeda Ad Strategy: how to create AI ad creatives that clients need weekly (so that you become their go-to creative partner, not a one-time vendor).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-orange-600 shrink-0 mt-1 w-5 h-5"/> <span>The Brand Asset Expansion play: turning one product shoot into 20+ variations (so that you 10x your output without 10x the work).</span></li>
                    <li className="flex items-start gap-3"><Check className="text-orange-600 shrink-0 mt-1 w-5 h-5"/> <span>How to upsell existing clients into bigger packages (so that your revenue grows without finding new clients).</span></li>
                  </ul>
                </div>
              </div>
            </div>
         </div>
       </section>

       {/* Proof */}
       <section className="py-24 bg-slate-50 px-4 text-center">
         <div className="max-w-4xl mx-auto">
           {/* Pill */}
           <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-8">
             <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
               Market Validation
             </span>
           </div>

           <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 p-8 md:p-10 rounded-2xl shadow-lg mb-10">
             <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
               "The AI image‑generation market is racing from $8.7 billion to $60.8 billion by 2030—and product photography is one of the biggest drivers of that growth."
             </p>
           </div>

           <img src="https://i.imgur.com/4EDutbg.png" alt="Upwork Jobs" className="rounded-xl border border-slate-200 shadow-2xl mx-auto" />
         </div>
       </section>

       {/* Value Stack & Offer */}
       <section id="pricing" className="py-24 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
             {/* Pill */}
             <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full mb-8 mx-auto block w-fit">
               <span className="text-purple-600 font-bold text-xs uppercase tracking-wider">
                 Investment Details
               </span>
             </div>

             {/* Main Offer Card */}
             <div className="bg-white rounded-[2.5rem] border-2 border-slate-200 overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"></div>

                <div className="p-8 md:p-12">
                   <h2 id="recap" className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10">Get AI Agency Photography Secrets:</h2>
                   
                   {/* Stack Items */}
                   <div className="space-y-4 mb-12">
                      <div className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-2">
                        <span>MODULE 1: Visual Syntax Framework</span>
                        <span className="font-bold text-slate-900">$497 Value</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-2">
                        <span>MODULE 2: Sell Without Selling System</span>
                        <span className="font-bold text-slate-900">$297 Value</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-2">
                        <span>MODULE 3: Price for Profits</span>
                        <span className="font-bold text-slate-900">$297 Value</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600 border-b border-slate-100 pb-2">
                        <span>MODULE 4: Profit Multipliers</span>
                        <span className="font-bold text-slate-900">$497 Value</span>
                      </div>
                      <div className="flex justify-between items-center text-xl font-bold text-slate-900 pt-2">
                        <span>Total Core Value:</span>
                        <span>$1,588</span>
                      </div>
                   </div>

                   {/* Bonuses */}
                   <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-12 border-2 border-purple-100">
                      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">But that's not all… I'm also including these bonuses:</h3>
                      <ul className="space-y-3">
                         {[
                           { name: "BONUS 1: Visual Syntax Cheatsheet", value: "$97" },
                           { name: "BONUS 2: Client Pitch Scripts", value: "$197" },
                           { name: "BONUS 3: Quality Control Delivery Checklist", value: "$97" },
                           { name: "BONUS 4: Upwork Lead Hunter System", value: "$197" },
                           { name: "BONUS 5: Niche Riches Discovery Method", value: "$197" },
                           { name: "BONUS 6: 2-Hour Portfolio Builder", value: "$297" },
                           { name: "BONUS 7: Done-For-You Agency Website", value: "$297" },
                           { name: "BONUS 8: Cold Email Swipe File", value: "$197" },
                           { name: "BONUS 9: Monthly Behind-The-Scenes Intel", value: "$297" },
                           { name: "BONUS 10: 30-Day 'First Client' Blueprint", value: "$397" },
                         ].map((bonus, i) => (
                           <li key={i} className="flex justify-between items-center text-sm text-slate-600">
                              <span className="flex items-center gap-2">🎁 {bonus.name}</span>
                              <span className="font-bold text-slate-800">{bonus.value} Value</span>
                           </li>
                         ))}
                      </ul>
                   </div>

                   {/* Final Price */}
                   <div className="text-center mb-10">
                      <p className="text-xl text-slate-600 mb-2">TOTAL COMBINED VALUE: <span className="line-through font-bold">$3,858</span></p>
                      <p className="text-xl text-slate-600 mb-8">You're not even paying <span className="line-through font-bold">$997</span>.</p>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-6 px-8 rounded-2xl mb-8 border-2 border-green-200">
                        <div className="text-6xl md:text-7xl font-black text-slate-900 mb-2 tracking-tight">$299</div>
                        <p className="text-xl text-green-600 font-bold">Join the founding cohort today.</p>
                      </div>

                      <a
                         href="https://dezygn.checkoutpage.com/promptography-secrets"
                         className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-2xl py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 mb-6"
                       >
                         BUY NOW
                       </a>
                       <div className="flex flex-wrap justify-center gap-4 text-slate-500 text-sm font-semibold">
                          <span className="flex items-center gap-1">⭐⭐⭐⭐⭐ 5-Star Rated</span>
                          <span className="flex items-center gap-1">🔒 SSL Secure Payment</span>
                          <span className="flex items-center gap-1">💯 180-Day Guarantee</span>
                       </div>
                   </div>

                   {/* Scarcity */}
                   <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 text-center">
                      <p className="text-red-700 font-bold text-lg flex items-center justify-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        <span>This discount ends on Friday, 9th January, or whenever 50 people sign up. After this, the price jumps to $499. This is not fake scarcity. It is real.</span>
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Guarantee Detail */}
       <section className="py-20 bg-slate-50 px-4 text-center border-t border-slate-200">
         <div className="max-w-4xl mx-auto">
           {/* Pill */}
           <div className="inline-block px-4 py-1.5 bg-green-50 border border-green-100 rounded-full mb-8">
             <span className="text-green-600 font-bold text-xs uppercase tracking-wider">
               Risk-Free Guarantee
             </span>
           </div>

           <div className="bg-white p-10 rounded-3xl border-2 border-green-200 shadow-xl">
             <Shield className="w-20 h-20 text-green-500 mx-auto mb-6" />
             <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">180-Day Action-Based Guarantee</h2>
             <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
               If you follow my "First Client Blueprint" and don't make your money back by selling AI photography services, I will double your money back. This is on top of my no-questions-asked 30-day money-back guarantee.
             </p>
           </div>
         </div>
       </section>

       {/* Warning / Crossroads */}
       <section className="py-24 bg-white">
         <div className="px-4">
           <div className="max-w-5xl mx-auto">
           {/* Pill */}
           <div className="inline-block px-4 py-1.5 bg-yellow-50 border border-yellow-200 rounded-full mb-8 mx-auto block w-fit">
             <span className="text-yellow-700 font-bold text-xs uppercase tracking-wider">
               Decision Time
             </span>
           </div>

           <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center mb-6 leading-tight">You are Standing at a Crossroads: Which Version of 2026 Will You Choose?</h2>
           <div className="w-20 h-1 bg-yellow-500 rounded-full mb-16 mx-auto"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="relative">
                 <div className="bg-slate-100 p-8 md:p-10 rounded-3xl border-2 border-slate-300 h-full">
                   <div className="flex items-center gap-3 mb-6">
                     <X className="w-8 h-8 text-slate-400" />
                     <h3 className="text-2xl font-bold text-slate-600">Choice #1: DO NOTHING</h3>
                   </div>
                   <ul className="space-y-4 text-slate-500 text-lg">
                     <li className="flex items-start gap-3"><X className="w-5 h-5 shrink-0 mt-1"/> <span>Keep doing exactly what you've been doing.</span></li>
                     <li className="flex items-start gap-3"><X className="w-5 h-5 shrink-0 mt-1"/> <span>Continue fighting for "table scraps" while AI eats your margins.</span></li>
                     <li className="flex items-start gap-3"><X className="w-5 h-5 shrink-0 mt-1"/> <span>Spend the next 6 months wondering why the phone stopped ringing.</span></li>
                     <li className="flex items-start gap-3"><X className="w-5 h-5 shrink-0 mt-1"/> <span>Stay stuck in the "insanity cycle"—doing the same work and expecting a different result.</span></li>
                   </ul>
                 </div>
               </div>

               <div className="relative">
                 <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl opacity-20 blur"></div>
                 <div className="relative bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-10 rounded-3xl border-2 border-green-300 shadow-xl h-full">
                   <div className="flex items-center gap-3 mb-6">
                     <Check className="w-8 h-8 text-green-600" />
                     <h3 className="text-2xl font-bold text-slate-900">Choice #2: TAKE ACTION</h3>
                   </div>
                   <ul className="space-y-4 text-slate-800 text-lg">
                     <li className="flex items-start gap-3"><Check className="text-green-600 w-5 h-5 shrink-0 mt-1"/> <span>Invest in yourself and master a skill that is currently a "Blue Ocean."</span></li>
                     <li className="flex items-start gap-3"><Check className="text-green-600 w-5 h-5 shrink-0 mt-1"/> <span>Learn how to turn AI from a "threat" into your most profitable employee.</span></li>
                     <li className="flex items-start gap-3"><Check className="text-green-600 w-5 h-5 shrink-0 mt-1"/> <span>Get the exact scripts to land $639/month retainers with less than a day of work.</span></li>
                     <li className="flex items-start gap-3"><Check className="text-green-600 w-5 h-5 shrink-0 mt-1"/> <span>Provide the security and lifestyle you and your family deserve in this new economy.</span></li>
                   </ul>
                 </div>
               </div>
            </div>

            <div className="text-center mt-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <p className="text-xl text-slate-700 leading-relaxed">
                One choice leads to more of the same. The other leads to a new skill you can trade for money right away. <br/>
                <span className="font-bold text-slate-900">With my 180-Day Double-Your-Money-Back Guarantee, the only real risk is doing nothing and letting this wave pass you by.</span>
              </p>
            </div>

           </div>
         </div>

         {/* Full Offer CTA Section */}
         <div className="mt-16 relative">
           <div className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 border-y-2 border-red-600/60">
             {/* Animated gradient glow */}
             <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 opacity-50 blur-xl"></div>

             <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  {/* Countdown Timer */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500 rounded-full px-4 py-2 mb-6">
                      <Clock className="w-4 h-4 text-red-400 animate-pulse" />
                      <span className="text-red-200 font-bold text-sm uppercase tracking-wider">
                        Offer Ends Friday, January 9th at 11:59 PM EST
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-lg mx-auto mb-8">
                      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-red-500/30">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1">{String(timeLeft.days).padStart(2, '0')}</div>
                        <div className="text-xs text-red-300 uppercase tracking-wide">Days</div>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-red-500/30">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1">{String(timeLeft.hours).padStart(2, '0')}</div>
                        <div className="text-xs text-red-300 uppercase tracking-wide">Hours</div>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-red-500/30">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1">{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <div className="text-xs text-red-300 uppercase tracking-wide">Minutes</div>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-red-500/30">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1">{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <div className="text-xs text-red-300 uppercase tracking-wide">Seconds</div>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                      Don't Miss This <span className="text-red-500">Limited-Time</span> Opportunity
                    </h3>
                    <p className="text-xl text-white mb-8">Join the founding cohort and get instant access to everything</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>4 Complete Training Modules (Worth $1,588)</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>10 Premium Bonuses (Worth $2,270)</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>180-Day Double-Your-Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Instant Access - Start Learning Today</span>
                    </div>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm border-2 border-yellow-500 py-8 px-6 rounded-2xl mb-8">
                    <p className="text-gray-300 text-sm mb-2 text-center">Total Value: <span className="line-through text-gray-400">$3,858</span></p>
                    <div className="text-6xl md:text-7xl font-black text-yellow-400 text-center mb-2 drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]">$299</div>
                    <p className="text-center text-yellow-300 font-bold text-lg">70% Founding Discount - Ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</p>
                  </div>

                  <a
                    href="https://dezygn.checkoutpage.com/promptography-secrets"
                    className="block w-full bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-black text-2xl md:text-3xl py-7 rounded-2xl shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-400/50 transition-all transform hover:scale-[1.02] mb-6 text-center animate-pulse hover:animate-none"
                  >
                    🔥 BUY NOW - SECURE YOUR SPOT 🔥
                  </a>

                  <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm font-semibold mb-6">
                    <span className="flex items-center gap-1">⭐⭐⭐⭐⭐ 5-Star Rated</span>
                    <span className="flex items-center gap-1">🔒 SSL Secure</span>
                    <span className="flex items-center gap-1">💯 Money-Back Guarantee</span>
                  </div>

                  <div className="bg-red-600/20 border-2 border-red-500 rounded-xl p-5 text-center backdrop-blur-sm">
                    <p className="text-red-200 font-bold text-base flex items-center justify-center gap-2 flex-wrap">
                      <AlertTriangle className="w-5 h-5 animate-pulse" />
                      <span>Only 50 founding member spots available at this price - {timeLeft.days} days left!</span>
                    </p>
                  </div>
             </div>
           </div>
         </div>
       </section>

       {/* FAQ + Footer PS */}
       <section className="py-16 bg-slate-50 px-4 border-t border-slate-200">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <FAQItem
                  question={`"I have no design degree or creative background. Can I really do this?"`}
                  answer={`You don’t need a degree, but you do need a "Skill Stack." If you just copy-paste prompts, you will fail. This masterclass provides a 15–30 day path to learn the branding and visual marketing basics required to charge professional rates. Think of AI as a piano: anyone can buy one, but you are paying to learn how to play a concerto.`}
                />
                <FAQItem
                  question={`"Can’t brands just use ChatGPT or Midjourney themselves for free?"`}
                  answer={`They try. Then they get "AI Slop"—distorted products and hallucinated labels that ruin their brand. Brands pay you a hefty retainer because they want accuracy, realism and on-brand visuals. They are paying for your ability to ensure a product looks exactly as it does in real life, which "amateur" prompting cannot do. Think of your role as more of a Brand Safety almost.`}
                />
                <FAQItem
                  question={`"Is the market already saturated or is there 'no moat' to protect me?"`}
                  answer={`There is no moat for "AI prompt-engineers," but there is a massive moat for AI Photographers. The gap between "making a cool image" and "delivering a brand-accurate product shoot" is where the money is. Currently, demand from millions of e-com stores is growing much faster than the supply of real experts.`}
                />
                <FAQItem
                  question={`"How much extra will I have to spend on AI tools and subscriptions?"`}
                  answer={`Transparency is key: expect a "Startup Tax" of roughly $60–$100 for your AI tools if you don't own any yet. Then for outreach, I will show you both how to find leads for free (slower), and how to find leads by paying (faster). However, one single client won't just cover your costs—it can make your entire year of overhead profitable.`}
                />
                <FAQItem
                  question={`"Is this just another 'Get Rich Quick' side hustle?"`}
                  answer={`No. This is a high-level creative skill. It requires dedicated practice to master the "Visual Syntax." It requires courage to make offers to strangers (who will become your clients). You will face frustrating revisions and technical hurdles, and I will be here every step the way to help you out. We aren't selling a "magic button"; we are selling a repeatable system for a new era of digital work.`}
                />
                <FAQItem
                  question={`"What happens if I don't land a client?"`}
                  answer={`We offer an 180-Day Action-Based Guarantee. If you follow the "First Client Blueprint," build your portfolio, and perform the outreach as prescribed, and you still don't land a client within 180 days, I will refund you double your investment. I am taking the risk because the data shows the system works for those who do the work.`}
                />
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">P.S.</h3>
              <div className="space-y-3 text-sm md:text-base text-slate-600 leading-relaxed">
                <p>We are at the very beginning of the AI photography wave. This is your window to get in before the market explodes and while there is still zero competition that actually knows what they're doing.</p>

                <p>I'm handing you the full blueprint: how to find the leads, how to close the deals, and how to deliver professional results so you can start trading this skill for profit immediately.</p>

                <p className="font-semibold text-slate-900">At this price, just one client saying "yes" covers your entire investment. I'll show you exactly how to get that first "yes" inside.</p>
              </div>
            </div>

            <div className="space-y-6">
              <a
                href="#pricing"
                className="block w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl py-5 rounded-2xl shadow-lg shadow-red-600/30 transition-all transform hover:scale-[1.01] text-center"
              >
                BUY NOW
              </a>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <img
                  src="https://i.imgur.com/UShOCpt.png"
                  alt="Bertrand Diouly-Osso"
                  className="w-16 h-16 rounded-full border-2 border-slate-200 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <p
                    className="text-slate-700 text-base md:text-lg"
                    style={{ fontFamily: '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive' }}
                  >
                    I'll be looking forward to seeing you inside,
                  </p>
                  <p
                    className="text-slate-900 text-2xl md:text-3xl"
                    style={{ fontFamily: '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive' }}
                  >
                    Bertrand Diouly-Osso
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm font-semibold uppercase tracking-wide">
                    Founder, AI Photography Agency Secrets
                  </p>
                </div>
              </div>
            </div>
          </div>
       </section>

    </Layout>
  );
}

export default PromptographyPageV2;
