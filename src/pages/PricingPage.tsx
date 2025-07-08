import { useState } from 'react';
import { Check, Sparkles, Users, Zap, Building, User, Palette, ExternalLink, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isLegacy, setIsLegacy] = useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Logo variant="default" size="md" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition">Home</Link>
            <Link to="/special" className="text-gray-600 hover:text-purple-600 transition">Special</Link>
            <Link to="/pricing" className="text-gray-900 font-bold hover:text-purple-600 transition">Pricing</Link>
            <Link to="/report" className="text-gray-600 hover:text-purple-600 transition">Report</Link>
            <a 
              href="https://chat.dezygn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300"
            >
              Login
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Built for freelancers and agencies who make money with AI
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-purple-200 rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                billingCycle === 'monthly' 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                billingCycle === 'yearly' 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 text-green-600 text-sm">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Legacy Customer Notice */}
        {isLegacy && (
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 rounded-2xl p-6 mb-12 text-center shadow-lg">
            <p className="text-purple-800 font-bold text-lg">
              🎉 Legacy customer discount applied! You save $30/month
            </p>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {/* Freelancer Plan */}
          <div className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
            <div className="relative p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-2xl font-black">Freelancer</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Perfect for solo creators serving 10-15 clients
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                  ${isLegacy ? '49' : '79'}
                </span>
                <span className="text-gray-600 text-lg font-medium">/month</span>
                {billingCycle === 'yearly' && (
                  <p className="text-green-600 font-bold mt-1 text-sm">
                    ${isLegacy ? '470' : '758'}/year (2 months free)
                  </p>
                )}
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6">
                Get Started
              </button>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 mt-0.5" />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1">
                      <p className="font-bold text-sm">500 credits/month</p>
                      <p className="text-xs text-gray-600">
                        Create 500 images or 50 videos
                      </p>
                    </div>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
                        onMouseEnter={() => showTooltip('credits')}
                        onMouseLeave={hideTooltip}
                      />
                      {tooltipVisible === 'credits' && (
                        <div className="absolute right-0 top-5 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
                          {tooltips.credits}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 mt-0.5" />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1">
                      <p className="font-bold text-sm">5 Brand DNA™ trainings/month</p>
                      <p className="text-xs text-gray-600">
                        Train logos & faces for consistency
                      </p>
                    </div>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
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
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm flex-1">10 brands</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
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
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm flex-1">100 campaigns</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
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
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm flex-1">3 team members</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
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
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">All templates</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm flex-1">White label client sharing</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
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
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="font-bold text-sm flex-1">AI Creative Agency Academy</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
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
          <div className="group relative bg-white rounded-3xl shadow-xl border-2 border-purple-600 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-2xl text-sm font-bold shadow-lg">
              POPULAR
            </div>
            
            <div className="relative p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-2xl font-black">Agency</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Scale your business with 30+ clients
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                  ${isLegacy ? '129' : '159'}
                </span>
                <span className="text-gray-600 text-lg font-medium">/month</span>
                {billingCycle === 'yearly' && (
                  <p className="text-green-600 font-bold mt-1 text-sm">
                    ${isLegacy ? '1,238' : '1,526'}/year (2 months free)
                  </p>
                )}
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6">
                Get Started
              </button>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 mt-0.5" />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1">
                      <p className="font-bold text-sm">1,500 credits/month</p>
                      <p className="text-xs text-gray-600">
                        Create 1,500 images or 150 videos
                      </p>
                    </div>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
                        onMouseEnter={() => showTooltip('credits')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-500 mt-0.5" />
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1">
                      <p className="font-bold text-sm">10 Brand DNA™ trainings/month</p>
                      <p className="text-xs text-gray-600">
                        Perfect for multiple client brands
                      </p>
                    </div>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
                        onMouseEnter={() => showTooltip('brandDNA')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm flex-1">Unlimited brands</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
                        onMouseEnter={() => showTooltip('brands')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm flex-1">Unlimited campaigns</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
                        onMouseEnter={() => showTooltip('campaigns')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="font-bold text-sm flex-1">Unlimited team members</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
                        onMouseEnter={() => showTooltip('team')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">All templates</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm flex-1">White label client sharing</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
                        onMouseEnter={() => showTooltip('whiteLabel')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <p className="font-bold text-sm flex-1">AI Creative Agency Academy</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
                        onMouseEnter={() => showTooltip('academy')}
                        onMouseLeave={hideTooltip}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex items-center gap-2 flex-1">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <p className="font-bold text-sm flex-1">WhatsApp Priority Support</p>
                    <div className="relative">
                      <HelpCircle 
                        className="w-3 h-3 text-gray-400 cursor-help" 
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
          <div className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
            <div className="relative p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-2xl font-black">Enterprise</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Custom solutions for large organizations
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                  $999+
                </span>
                <span className="text-gray-600 text-lg font-medium">/month</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6">
                Get in Touch
              </button>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">Custom credit allocation</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">Unlimited Brand DNA™ trainings</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">Unlimited brands & campaigns</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">Unlimited team members</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">Custom integrations</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">API access</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">Dedicated account manager</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">SLA guarantee</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  <p className="text-sm">Priority support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Legacy View */}
        <div className="text-center mb-16">
          {isLegacy ? (
            <button
              onClick={() => setIsLegacy(!isLegacy)}
              className="bg-white/80 backdrop-blur-sm border border-purple-200 text-purple-600 px-6 py-2 rounded-2xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-lg text-sm"
            >
              View standard pricing
            </button>
          ) : (
            <Link
              to="/special"
              className="inline-block bg-white/80 backdrop-blur-sm border border-purple-200 text-purple-600 px-6 py-2 rounded-2xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-lg text-sm"
            >
              Are you a legacy customer?
            </Link>
          )}
        </div>
      </div>

      {/* Cinema Packs */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Need Premium Videos?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Add Cinema Packs for professional AI video creation
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-black mb-4">Starter Pack</h3>
                <p className="text-gray-600 text-lg mb-6">12 clips (~30 sec final)</p>
                <p className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$99</p>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-black mb-4">Pro Pack</h3>
                <p className="text-gray-600 text-lg mb-6">24 clips (~60 sec final)</p>
                <p className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$179</p>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-black mb-4">Studio Pack</h3>
                <p className="text-gray-600 text-lg mb-6">48 clips (~2 min final)</p>
                <p className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$329</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand DNA Packs */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Need More Brand DNA™?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Train additional logos, faces, or styles beyond your monthly allowance
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            <button className="group bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <span className="block text-2xl font-black mb-2">Single Training</span>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$10</span>
            </button>
            <button className="group bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <span className="block text-2xl font-black mb-2">5-Pack</span>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$40</span>
              <span className="block text-green-600 font-bold mt-1">Save $10</span>
            </button>
            <button className="group bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <span className="block text-2xl font-black mb-2">10-Pack</span>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$70</span>
              <span className="block text-green-600 font-bold mt-1">Save $30</span>
            </button>
          </div>
        </div>
      </div>

      {/* Credit Packs */}
      <div className="py-20 px-6 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-black mb-12">Need More Credits?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="group bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <span className="block text-2xl font-black mb-2">5,000 credits</span>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$99</span>
            </button>
            <button className="group bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <span className="block text-2xl font-black mb-2">12,000 credits</span>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$199</span>
              <span className="block text-green-600 font-bold mt-1">Save 20%</span>
            </button>
            <button className="group bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <span className="block text-2xl font-black mb-2">30,000 credits</span>
              <span className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$399</span>
              <span className="block text-green-600 font-bold mt-1">Save 33%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Brand DNA Explanation */}
      <div className="py-32 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              What is Brand DNA™?
            </h2>
            <p className="text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
              Brand DNA™ lets you train AI to perfectly recognize and recreate specific logos, faces, products, or visual styles. Train once, use forever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-blue-100/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">🏢 Logo Consistency</h3>
              <p className="text-white/70 text-lg">
                Train client logos for perfect brand compliance
              </p>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-green-100/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <User className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">👤 AI Avatars</h3>
              <p className="text-white/70 text-lg">
                Create consistent faces for testimonials
              </p>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
              <div className="w-16 h-16 bg-purple-100/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">🎨 Style Matching</h3>
              <p className="text-white/70 text-lg">
                Replicate any visual style perfectly
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-white/90 font-bold">
              Others charge $20-50 per training. We include it in your plan.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <Link to="/">
                <Logo variant="light" size="md" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-6 text-white/70">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <a 
                  href="mailto:support@youzign.com" 
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </a>
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
};

export default PricingPage;