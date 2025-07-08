import React, { useState } from 'react';
import { Check, X, Sparkles, Users, Zap } from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isLegacy, setIsLegacy] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Built for freelancers and agencies who make money with AI
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md font-medium transition ${
                billingCycle === 'monthly' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-md font-medium transition ${
                billingCycle === 'yearly' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600'
              }`}
            >
              Yearly
              <span className="ml-2 text-green-600 text-sm">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Legacy Customer Notice */}
        {isLegacy && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-purple-800">
              🎉 Legacy customer discount applied! You save $30/month
            </p>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Freelancer Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold">Freelancer</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Perfect for solo creators serving 10-15 clients
              </p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold">
                  ${isLegacy ? '49' : '79'}
                </span>
                <span className="text-gray-600">/month</span>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-green-600 mt-1">
                    ${isLegacy ? '470' : '758'}/year (2 months free)
                  </p>
                )}
              </div>
              
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Get Started
              </button>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">500 credits/month</p>
                    <p className="text-sm text-gray-600">
                      Create 500 images or 50 videos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p>3 team members</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p>Client brand imports</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p>White-label delivery</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p>All templates</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-gray-300" />
                  <p className="text-gray-400">AI Agency Academy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Agency Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-purple-600 relative">
            <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
              POPULAR
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold">Agency</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Scale your business with 30+ clients
              </p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold">
                  ${isLegacy ? '129' : '159'}
                </span>
                <span className="text-gray-600">/month</span>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-green-600 mt-1">
                    ${isLegacy ? '1,238' : '1,526'}/year (2 months free)
                  </p>
                )}
              </div>
              
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Get Started
              </button>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">1,500 credits/month</p>
                    <p className="text-sm text-gray-600">
                      Create 1,500 images or 150 videos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p className="font-medium">Unlimited team members</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p>Everything in Freelancer</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p className="font-medium">AI Agency Academy</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p>Priority support</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p>Advanced analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cinema Packs */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Premium Videos?</h2>
          <p className="text-gray-600 mb-8">
            Add Cinema Packs for professional AI video creation
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-6">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Starter Pack</h3>
              <p className="text-gray-600 text-sm mb-3">12 clips (~30 sec final)</p>
              <p className="text-2xl font-bold">$99</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Pro Pack</h3>
              <p className="text-gray-600 text-sm mb-3">24 clips (~60 sec final)</p>
              <p className="text-2xl font-bold">$179</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Studio Pack</h3>
              <p className="text-gray-600 text-sm mb-3">48 clips (~2 min final)</p>
              <p className="text-2xl font-bold">$329</p>
            </div>
          </div>
        </div>

        {/* Credit Packs */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Need More Credits?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              <span className="font-semibold">5,000 credits</span>
              <span className="text-gray-600 ml-2">$99</span>
            </button>
            <button className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              <span className="font-semibold">12,000 credits</span>
              <span className="text-gray-600 ml-2">$199</span>
              <span className="text-green-600 text-sm ml-2">Save 20%</span>
            </button>
            <button className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              <span className="font-semibold">30,000 credits</span>
              <span className="text-gray-600 ml-2">$399</span>
              <span className="text-green-600 text-sm ml-2">Save 33%</span>
            </button>
          </div>
        </div>

        {/* Toggle Legacy View */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsLegacy(!isLegacy)}
            className="text-purple-600 underline text-sm"
          >
            {isLegacy ? 'View standard pricing' : 'Are you a legacy customer?'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;