import { useState } from 'react';
import { Check, Users, Zap, Building, HelpCircle, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [tooltipVisible, setTooltipVisible] = useState('');

  const showTooltip = (feature: string) => setTooltipVisible(feature);
  const hideTooltip = () => setTooltipVisible('');

  const tooltips = {
    credits: "1 credit = 1 image generation. Create stunning visuals for your clients.",
    brandDNA: "Train AI to recognize your client's logos, faces, and brand styles. Others charge $20-50 per training.",
    brands: "Import and manage client brand assets (logos, colors, fonts) for consistent designs.",
    campaigns: "Organize your work into client projects and campaigns for better workflow.",
    team: "Collaborate with team members and share credits across your workspace.",
    whiteLabel: "Share work with clients under your own branding - no Dezygn watermarks.",
    academy: "Complete training program to build a profitable AI creative agency business.",
    support: "Get priority WhatsApp support for faster issue resolution."
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Built for freelancers and agencies who make money with AI
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2 shadow-2xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                billingCycle === 'monthly' 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-2xl opacity-90' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                billingCycle === 'yearly' 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-2xl opacity-90' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-green-400 text-sm">Save 25%</span>
            </button>
          </div>
        </div>


        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Freelancer Plan */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Freelancer</h3>
              </div>
              
              <p className="text-white/70 mb-6 text-lg">
                Perfect for solo creators serving 10-15 clients
              </p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  $79
                </span>
                <span className="text-white/70 text-xl font-medium">/month</span>
                {billingCycle === 'yearly' && (
                  <p className="text-green-400 font-bold mt-2 text-base">
                    $711/year (3 months free)
                  </p>
                )}
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg shadow-2xl hover:opacity-90 transition-opacity duration-300 mb-8">
                Get Started
              </button>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1">
                      <p className="font-bold text-white">500 credits/month</p>
                      <p className="text-sm text-white/60">
                        Create 500 images or 50 videos
                      </p>
                    </div>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('credits')}
                        onMouseLeave={hideTooltip}
                      />
                      {tooltipVisible === 'credits' && (
                        <div className="absolute right-0 top-5 bg-gray-900/90 backdrop-blur-sm text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
                          {tooltips.credits}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1">
                      <p className="font-bold text-white">5 Brand DNA™ trainings/month</p>
                      <p className="text-sm text-white/60">
                        Train logos & faces for consistency
                      </p>
                    </div>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('brandDNA')}
                        onMouseLeave={hideTooltip}
                      />
                      {tooltipVisible === 'brandDNA' && (
                        <div className="absolute right-0 top-5 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
                          {tooltips.brandDNA}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-white flex-1">10 brands</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('brands')}
                        onMouseLeave={hideTooltip}
                      />
                      {tooltipVisible === 'brands' && (
                        <div className="absolute right-0 top-5 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
                          {tooltips.brands}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-white flex-1">100 campaigns</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('campaigns')}
                        onMouseLeave={hideTooltip}
                      />
                      {tooltipVisible === 'campaigns' && (
                        <div className="absolute right-0 top-5 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
                          {tooltips.campaigns}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-white flex-1">3 team members</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('team')}
                        onMouseLeave={hideTooltip}
                      />
                      {tooltipVisible === 'team' && (
                        <div className="absolute right-0 top-5 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
                          {tooltips.team}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">All templates</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-white flex-1">White label client sharing</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('whiteLabel')}
                        onMouseLeave={hideTooltip}
                      />
                      {tooltipVisible === 'whiteLabel' && (
                        <div className="absolute right-0 top-5 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
                          {tooltips.whiteLabel}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="font-bold text-white flex-1">AI Creative Agency Academy</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('academy')}
                        onMouseLeave={hideTooltip}
                      />
                      {tooltipVisible === 'academy' && (
                        <div className="absolute right-0 top-5 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
                          {tooltips.academy}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Agency Plan */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-purple-400/50 hover:border-purple-400 transition-all duration-300 hover:scale-105">
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-2xl text-sm font-bold shadow-lg">
              POPULAR
            </div>
            
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Agency</h3>
              </div>
              
              <p className="text-white/70 mb-6 text-lg">
                Scale your business with 30+ clients
              </p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  $159
                </span>
                <span className="text-white/70 text-xl font-medium">/month</span>
                {billingCycle === 'yearly' && (
                  <p className="text-green-400 font-bold mt-2 text-base">
                    $1,431/year (3 months free)
                  </p>
                )}
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg shadow-2xl hover:opacity-90 transition-opacity duration-300 mb-8">
                Get Started
              </button>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1">
                      <p className="font-bold text-white">1,500 credits/month</p>
                      <p className="text-sm text-white/60">
                        Create 1,500 images or 150 videos
                      </p>
                    </div>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('credits')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5" />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1">
                      <p className="font-bold text-white">10 Brand DNA™ trainings/month</p>
                      <p className="text-sm text-white/60">
                        Perfect for multiple client brands
                      </p>
                    </div>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('brandDNA')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-white flex-1">Unlimited brands</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('brands')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-white flex-1">Unlimited campaigns</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('campaigns')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="font-bold text-white flex-1">Unlimited team members</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('team')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">All templates</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-white flex-1">White label client sharing</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('whiteLabel')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="font-bold text-white flex-1">AI Creative Agency Academy</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('academy')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div className="flex items-center gap-2 flex-1">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <p className="font-bold text-white flex-1">Priority Support</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-white/40 cursor-help" 
                        onMouseEnter={() => showTooltip('support')}
                        onMouseLeave={hideTooltip}
                      />
                      {tooltipVisible === 'support' && (
                        <div className="absolute right-0 top-5 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
                          {tooltips.support}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Enterprise</h3>
              </div>
              
              <p className="text-white/70 mb-6 text-lg">
                Custom solutions for large organizations
              </p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  $999+
                </span>
                <span className="text-white/70 text-xl font-medium">/month</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg shadow-2xl hover:opacity-90 transition-opacity duration-300 mb-8">
                Get in Touch
              </button>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">Custom credit allocation</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">Unlimited Brand DNA™ trainings</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">Unlimited brands & campaigns</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">Unlimited team members</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">Custom integrations</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">API access</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">Dedicated account manager</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">SLA guarantee</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <p className="text-white">Priority support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>

    </Layout>
  );
};

export default PricingPage;