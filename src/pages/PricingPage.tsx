import { useState } from 'react';
import { Check, Zap, Users, Building } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-hidden flex flex-col">
      <Helmet>
        <title>Pricing - Simple Plans | Dezygn</title>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap');
        
        .pricing-card {
          background: rgba(26, 26, 26, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.2s ease-out;
        }
        
        .pricing-card:hover {
          background: rgba(26, 26, 26, 0.7);
          border-color: rgba(168, 85, 247, 0.3);
          transform: translateY(-2px);
        }

        .text-gradient {
          background: linear-gradient(to right, #a855f7, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <HeaderV3 />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-24 pb-8 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12 shrink-0">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase text-purple-400 mb-3">
            <span className="w-1 h-1 rounded-full bg-purple-500 animate-pulse"></span>
            Simple Plans
          </div>
          <h1 className="font-black text-3xl md:text-5xl text-white mb-3 tracking-tight">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          
          {/* Toggle */}
          <div className="inline-flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${billingCycle === 'monthly' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${billingCycle === 'yearly' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly <span className="text-[10px] text-green-600 bg-green-100 px-1.5 rounded-full">Save 25%</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4 w-full max-w-5xl h-auto items-stretch">

          {/* Pro */}
          <div className="pricing-card rounded-2xl p-6 flex flex-col relative">
            <div className="mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3 text-purple-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Pro</h3>
              <p className="text-xs text-gray-400 mt-1">For solo creators & freelancers</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">${billingCycle === 'yearly' ? '39' : '49'}</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              {billingCycle === 'yearly' && <p className="text-[10px] text-green-400 mt-1">Billed $468/yr (2 months free)</p>}
            </div>

            <div className="space-y-2.5 mb-6 flex-1">
              <Feature text="Perfect for 2-3 clients" highlight />
              <Feature text="~300 images/month" />
              <Feature text="5 Brands" />
              <Feature text="1 Team seat" />
              <Feature text="Commercial Usage" />
              <Feature text="Standard Support" />
            </div>

            <a href="https://cal.com/bertrand-6hbdyx/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-lg border border-white/20 hover:bg-white hover:text-black text-sm font-bold transition-all text-center">
              Book Demo
            </a>
          </div>

          {/* Plus (Highlighted) */}
          <div className="pricing-card rounded-2xl p-6 flex flex-col relative border-purple-500/30 bg-purple-900/10">
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
              POPULAR
            </div>
            <div className="mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 text-blue-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Plus</h3>
              <p className="text-xs text-gray-400 mt-1">For growing agencies</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">${billingCycle === 'yearly' ? '79' : '99'}</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              {billingCycle === 'yearly' && <p className="text-[10px] text-green-400 mt-1">Billed $948/yr (2 months free)</p>}
            </div>

            <div className="space-y-2.5 mb-6 flex-1">
              <Feature text="Handle 5-10 clients" highlight />
              <Feature text="~800 images/month" highlight />
              <Feature text="25 Brands" />
              <Feature text="10 Team seats" />
              <Feature text="White Label Sharing" />
              <Feature text="Private Discord Community" />
              <Feature text="AI Photography Training" />
              <Feature text="Priority Support" />
            </div>

            <a href="https://cal.com/bertrand-6hbdyx/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-lg bg-white text-black hover:bg-gray-200 text-sm font-bold transition-all text-center shadow-lg shadow-purple-900/20">
              Book Demo
            </a>
          </div>

          {/* Max */}
          <div className="pricing-card rounded-2xl p-6 flex flex-col relative">
            <div className="mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-3 text-blue-400">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Max</h3>
              <p className="text-xs text-gray-400 mt-1">For high-volume teams</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">${billingCycle === 'yearly' ? '249' : '299'}</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              {billingCycle === 'yearly' && <p className="text-[10px] text-green-400 mt-1">Billed $2,988/yr (2 months free)</p>}
            </div>

            <div className="space-y-2.5 mb-6 flex-1">
              <Feature text="Unlimited clients" highlight />
              <Feature text="~2,500+ images/month" highlight />
              <Feature text="Unlimited Brands" />
              <Feature text="Unlimited Team seats" />
              <Feature text="Everything in Plus" />
              <Feature text="Live Weekly Classes" />
              <Feature text="API Access" />
              <Feature text="Dedicated Support" />
            </div>

            <a href="https://cal.com/bertrand-6hbdyx/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-lg border border-white/20 hover:bg-white hover:text-black text-sm font-bold transition-all text-center">
              Book Demo
            </a>
          </div>

        </div>

        {/* Onboarding Callout */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Need hands-on help? Ask about <span className="text-purple-400">Done-With-You Onboarding</span>
          </p>
        </div>

      </main>
      <FooterV3 className="fixed bottom-0 left-0" />
    </div>
  );
};

const Feature = ({ text, highlight = false }: { text: string, highlight?: boolean }) => (
  <div className="flex items-center gap-2">
    <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${highlight ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-gray-400'}`}>
      <Check size={10} strokeWidth={3} />
    </div>
    <span className={`text-xs ${highlight ? 'text-white font-medium' : 'text-gray-400'}`}>{text}</span>
  </div>
);

export default PricingPage;
