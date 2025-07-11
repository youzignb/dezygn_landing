import React, { useState, useEffect } from 'react';
import { ChevronDown, TrendingUp, DollarSign, Clock, Users, Zap, ArrowRight, BarChart3, Target, Play, Camera, Smartphone, Palette, X, Download, Share2, Check } from 'lucide-react';

function AICreativeReport() {
  const [animatedStats, setAnimatedStats] = useState({
    dailyJobs: 0,
    avgValue: 0,
    totalAnalyzed: 0,
    speedAdvantage: 0
  });
  const [showJobSamples, setShowJobSamples] = useState(false);
  const [selectedJobType, setSelectedJobType] = useState('');
  const [showShareSuccess, setShowShareSuccess] = useState(false);

  // Animate stats on load
  useEffect(() => {
    const animateValue = (start, end, duration, key) => {
      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        
        setAnimatedStats(prev => ({ ...prev, [key]: current }));
        
        if (progress === 1) clearInterval(timer);
      }, 16);
    };

    // Stagger the animations
    setTimeout(() => animateValue(0, 320, 2000, 'dailyJobs'), 500);
    setTimeout(() => animateValue(0, 469, 2000, 'avgValue'), 800);
    setTimeout(() => animateValue(0, 1050, 2000, 'totalAnalyzed'), 1100);
    setTimeout(() => animateValue(0, 78, 2000, 'speedAdvantage'), 1400);
  }, []);

  const jobCategories = [
    { name: 'AI-Generated Video', count: 288, avgPrice: 245, growth: '+156%', color: 'from-purple-500 to-purple-600' },
    { name: 'AI Image Generation', count: 103, avgPrice: 425, growth: '+189%', color: 'from-blue-500 to-blue-600' },
    { name: 'Product Photography', count: 89, avgPrice: 285, growth: '+145%', color: 'from-green-500 to-green-600' },
    { name: 'Social Media Design', count: 76, avgPrice: 195, growth: '+134%', color: 'from-yellow-500 to-orange-500' },
    { name: 'Brand Identity', count: 58, avgPrice: 520, growth: '+98%', color: 'from-pink-500 to-red-500' }
  ];

  const speedComparison = [
    { task: 'YouTube Thumbnail', traditional: '2-4 hours', ai: '5 minutes', savings: '$180-360', icon: Play },
    { task: 'Product Photography', traditional: '1-2 days', ai: '10 minutes', savings: '$800-1,600', icon: Camera },
    { task: 'Social Media Pack', traditional: '6-8 hours', ai: '30 minutes', savings: '$450-600', icon: Smartphone },
    { task: 'Brand Identity', traditional: '2-3 weeks', ai: '2 hours', savings: '$2,400-3,600', icon: Palette }
  ];

  const topAIJobs = {
    'Content Creation': [
      { title: 'YouTube Thumbnails', demand: 'Very High', pricing: '$8-40 each', frequency: 'Daily', description: 'Gaming, education, lifestyle channels need constant thumbnails' },
      { title: 'Social Media Posts', demand: 'High', pricing: '$5-25 each', frequency: 'Daily', description: 'Instagram, Facebook, LinkedIn content for businesses' },
      { title: 'Blog Featured Images', demand: 'Medium', pricing: '$15-50 each', frequency: 'Weekly', description: 'WordPress blogs, news sites, content marketing' },
      { title: 'Podcast Cover Art', demand: 'Medium', pricing: '$100-300 each', frequency: 'One-time', description: 'New podcasts launching weekly' }
    ],
    'E-commerce': [
      { title: 'Amazon Product Photos', demand: 'Very High', pricing: '$20-80 per set', frequency: 'Weekly', description: 'White background + lifestyle shots for listings' },
      { title: 'Fashion Lookbooks', demand: 'High', pricing: '$150-500 per set', frequency: 'Seasonal', description: 'AI models wearing clothing in various settings' },
      { title: 'Food Product Photography', demand: 'High', pricing: '$50-200 per set', frequency: 'Monthly', description: 'Restaurant menus, food delivery apps, packaging' },
      { title: 'Shopify Store Banners', demand: 'Medium', pricing: '$75-250 each', frequency: 'Monthly', description: 'Homepage headers, sale announcements, category banners' }
    ],
    'Business Services': [
      { title: 'Logo Design', demand: 'High', pricing: '$150-800 each', frequency: 'One-time', description: 'New businesses, rebrands, variations' },
      { title: 'Brand Identity Packages', demand: 'Medium', pricing: '$500-2000 per package', frequency: 'One-time', description: 'Complete visual identity systems' },
      { title: 'Business Card Design', demand: 'Medium', pricing: '$50-200 each', frequency: 'One-time', description: 'Professional networking materials' },
      { title: 'Website Headers', demand: 'High', pricing: '$100-400 each', frequency: 'Monthly', description: 'Hero sections, landing page headers' }
    ],
    'Real Estate': [
      { title: 'Virtual Staging', demand: 'Very High', pricing: '$50-150 per room', frequency: 'Weekly', description: 'Empty homes furnished with AI for listings' },
      { title: 'Property Brochures', demand: 'Medium', pricing: '$100-300 each', frequency: 'Weekly', description: 'Luxury property marketing materials' },
      { title: 'Real Estate Flyers', demand: 'High', pricing: '$25-75 each', frequency: 'Daily', description: 'Open house announcements, listing flyers' }
    ],
    'Video Content': [
      { title: 'AI Avatar Videos', demand: 'Very High', pricing: '$200-1000 per video', frequency: 'Weekly', description: 'Spokesperson videos, testimonials, announcements' },
      { title: 'Animated Explainers', demand: 'High', pricing: '$300-1500 per video', frequency: 'Monthly', description: 'Product demos, how-to videos, educational content' },
      { title: 'Social Media Video Ads', demand: 'High', pricing: '$150-600 per video', frequency: 'Weekly', description: 'Short promotional videos for Instagram, TikTok' }
    ]
  };

  const jobSamples = {
    'YouTube Thumbnails': [
      { title: 'Gaming Channel Thumbnails', budget: '$25-40', timeline: '24 hours', description: 'Need 5 eye-catching thumbnails for gaming videos. Must include shocked expressions and bright colors.' },
      { title: 'Educational YouTube Thumbnails', budget: '$15-25', timeline: '48 hours', description: 'Looking for clean, professional thumbnails for finance education channel. 10 thumbnails needed weekly.' },
      { title: 'Tech Review Thumbnails', budget: '$30-50', timeline: '12 hours', description: 'Thumbnails for tech product reviews. Need to include product images and comparison elements.' }
    ],
    'AI Avatar Videos': [
      { title: 'Corporate Training Videos', budget: '$800-1,200', timeline: '1 week', description: 'Need AI spokesperson for 10 corporate training modules. Professional appearance required.' },
      { title: 'Product Demo Videos', budget: '$400-800', timeline: '3 days', description: 'AI avatar explaining software features. Need consistent character across 5 videos.' },
      { title: 'Social Media Announcements', budget: '$200-400', timeline: '2 days', description: 'Weekly announcement videos for social media. Same character, different scripts.' }
    ],
    'Amazon Product Photos': [
      { title: 'Kitchen Appliance Photos', budget: '$100-200', timeline: '24 hours', description: 'Need lifestyle photos for kitchen appliances. 8 variations with different backgrounds and settings.' },
      { title: 'Supplement Listing Photos', budget: '$80-150', timeline: '48 hours', description: 'White background + lifestyle shots for supplements. Need before/after mockups.' },
      { title: 'Tech Accessory Photos', budget: '$120-250', timeline: '1 week', description: 'Product photos for phone cases. Need multiple angles and color variations.' }
    ],
    'Virtual Staging': [
      { title: 'Luxury Home Staging', budget: '$200-400', timeline: '2 days', description: 'Stage 5 empty rooms in luxury home. Modern furniture style preferred.' },
      { title: 'Apartment Staging', budget: '$100-200', timeline: '24 hours', description: 'Stage small apartment for rental listing. Budget-friendly but stylish furniture.' },
      { title: 'Commercial Space Staging', budget: '$300-500', timeline: '3 days', description: 'Stage office space to show potential. Need different layout options.' }
    ],
    'Fashion Lookbooks': [
      { title: 'Summer Collection Lookbook', budget: '$300-600', timeline: '1 week', description: 'AI models wearing summer collection in beach and city settings. Need 20 different looks.' },
      { title: 'Streetwear Campaign', budget: '$400-800', timeline: '5 days', description: 'Urban streetwear photos with consistent AI models. Various city backgrounds.' },
      { title: 'Activewear Lifestyle Shots', budget: '$250-500', timeline: '3 days', description: 'AI models in gym and outdoor settings wearing activewear line.' }
    ],
    'Logo Design': [
      { title: 'Tech Startup Logo', budget: '$200-500', timeline: '3 days', description: 'Modern, minimalist logo for AI software company. Need multiple variations and file formats.' },
      { title: 'Restaurant Brand Identity', budget: '$300-700', timeline: '1 week', description: 'Logo and basic brand identity for new restaurant. Need vintage/rustic feel.' },
      { title: 'Non-Profit Organization Logo', budget: '$150-400', timeline: '5 days', description: 'Trustworthy, professional logo for healthcare non-profit. Clean and approachable design.' }
    ]
  };

  const handleDownloadReport = () => {
    // Create a simple text file with key stats
    const reportData = `
State of AI Creative Work - H1 2025 Report
==========================================

Key Statistics:
• 320+ new AI creative jobs posted daily
• $469 average project value
• 1,050 jobs analyzed
• 78% of jobs completable with AI in under 5 minutes

Top Job Categories:
1. Video Editing (165 jobs) - Avg: $333
2. AI-Generated Video (123 jobs) - Avg: $188
3. AI Image Generation (62 jobs) - Avg: $280
4. Midjourney AI (41 jobs) - Avg: $769
5. Product Photography (34 jobs) - Avg: $325

Revenue Opportunities:
• YouTube Thumbnails: $320-3,200/month
• AI Avatar Videos: $1,000-10,000/month  
• Product Photography: $600-4,000/month
• Virtual Staging: $1,500-6,000/month

Total Market Potential: $4,500-23,200/month

For full interactive report visit: dezygn.com/report
    `;
    
    const blob = new Blob([reportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-creative-work-report-h1-2025.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShareReport = async () => {
    try {
      await navigator.clipboard.writeText('dezygn.com/report');
      setShowShareSuccess(true);
      setTimeout(() => setShowShareSuccess(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = 'dezygn.com/report';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowShareSuccess(true);
      setTimeout(() => setShowShareSuccess(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-purple-50/30 to-blue-50/30">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">d</span>
              </div>
              <h1 className="text-2xl font-black text-gray-900">State of AI Creative Work</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-gray-700">H1 2025 Report</span>
              </div>
              <button 
                onClick={handleShareReport}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300"
              >
                {showShareSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Share</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-3 mb-8 shadow-sm animate-slide-up">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">LIVE DATA ANALYSIS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6 animate-slide-up stagger-1">
              While Others Debate,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600">
                We Analyzed
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12 animate-slide-up stagger-2">
              We analyzed <span className="font-bold text-purple-600">1,050 real job postings</span> to see how the creative industry has transformed in just 12 months. The results reveal a complete shift in how design work gets done.
            </p>

            {/* Key Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up stagger-1">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                  {animatedStats.dailyJobs}+
                </div>
                <p className="text-sm text-gray-600">New AI jobs posted daily</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up stagger-2">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
                  ${animatedStats.avgValue}
                </div>
                <p className="text-sm text-gray-600">Average project value</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up stagger-3">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                  {animatedStats.totalAnalyzed}
                </div>
                <p className="text-sm text-gray-600">Jobs analyzed</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up stagger-4">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-2">
                  {animatedStats.speedAdvantage}%
                </div>
                <p className="text-sm text-gray-600">Completable with AI in under 5min</p>
              </div>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('market-overview');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-up stagger-4"
            >
              <span>Explore the Data</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section id="market-overview" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3 text-sm font-bold mb-6 shadow-lg">
              <TrendingUp className="w-4 h-4" />
              <span>MARKET OVERVIEW</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              The Creative Industry
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Transformation
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In just 12 months, AI has completely reshaped what clients want and how creative work gets delivered
            </p>
          </div>

          {/* Job Categories Interactive Chart */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Top Job Categories by Volume & Growth</h3>
            <div className="space-y-4">
              {jobCategories.map((category, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold">{category.name}</h4>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-green-600 font-bold">{category.growth}</span>
                      <span className="text-2xl font-black">{category.count}</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover:brightness-110 relative overflow-hidden`}
                      style={{width: `${(category.count / 165) * 100}%`}}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Jobs Posted</span>
                    <span>Average: <span className="font-bold text-gray-900">${category.avgPrice}</span></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-3xl p-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">156% Growth</h3>
              <p className="text-purple-100">Average growth in AI-specific job categories over 12 months</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-3xl p-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">90% Faster</h3>
              <p className="text-green-100">AI delivery times compared to traditional methods</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-3xl p-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">New Skills</h3>
              <p className="text-orange-100">20+ job categories that barely existed 12 months ago</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speed = Money Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full px-6 py-3 text-sm font-bold mb-6 shadow-lg">
              <Zap className="w-4 h-4" />
              <span>SPEED ADVANTAGE</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Speed = 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> Money</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The same work that takes traditional designers hours, you can complete in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {speedComparison.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{item.task}</h3>
                      <p className="text-gray-600 text-sm">Typical client request</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Traditional</span>
                      <span className="font-bold text-red-600">{item.traditional}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">With AI</span>
                      <span className="font-bold text-green-600">{item.ai}</span>
                    </div>
                    
                    <div className="border-t pt-4 text-center">
                      <p className="text-gray-500 text-sm mb-2">Time Savings Value</p>
                      <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                        {item.savings}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Speed Calculator */}
          <div className="mt-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">The Speed Advantage</h3>
              <p className="text-purple-100">How AI transforms your creative capacity</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black mb-2">12</div>
                <p className="text-sm text-purple-200">Thumbnails per hour</p>
                <p className="text-xs text-purple-300 mt-2">vs 1 traditional</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black mb-2">50</div>
                <p className="text-sm text-purple-200">Product variations</p>
                <p className="text-xs text-purple-300 mt-2">from 1 reference photo</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black mb-2">5</div>
                <p className="text-sm text-purple-200">Avatar videos per day</p>
                <p className="text-xs text-purple-300 mt-2">consistent character</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black mb-2">24/7</div>
                <p className="text-sm text-purple-200">Creative capacity</p>
                <p className="text-xs text-purple-300 mt-2">never sleeps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 20 AI Jobs */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-full px-6 py-3 text-sm font-bold mb-6 shadow-lg">
              <Target className="w-4 h-4" />
              <span>THE NEW LANDSCAPE</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Top 20 Jobs You Can Do
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                With AI Today
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The graphic design service landscape has completely transformed. Here are the opportunities that didn't exist 12 months ago.
            </p>
          </div>

          {Object.entries(topAIJobs).map(([category, jobs], categoryIdx) => (
            <div key={categoryIdx} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobs.map((job, jobIdx) => (
                  <div key={jobIdx} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent h-full">
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg">{job.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            job.demand === 'Very High' ? 'bg-red-100 text-red-700' :
                            job.demand === 'High' ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {job.demand}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Pricing:</span>
                          <span className="font-bold">{job.pricing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Frequency:</span>
                          <span className="font-bold">{job.frequency}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Market Transformation Summary */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-purple-900 rounded-3xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">The Transformation Is Complete</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
              These 20 job categories represent a fundamental shift in creative work. Traditional design is being replaced by AI-powered services that are faster, cheaper, and often better quality.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">12 months</div>
                <p className="text-gray-400">Since this market emerged</p>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">90%</div>
                <p className="text-gray-400">Faster than traditional methods</p>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">Unlimited</div>
                <p className="text-gray-400">Growth potential ahead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Predictions */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-bold mb-6">
              <span>🔮</span>
              <span>H2 2025 PREDICTIONS</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              What's Coming
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Next
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-green-400">📈 Growing Opportunities</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Video demand will 3x (TikTok, YouTube Shorts)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Character consistency = $500+ premiums</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Bulk operations for enterprise clients</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Real estate virtual staging boom</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-red-400">📉 Declining Markets</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Static logo design (-40%)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Basic photo editing (-60%)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Simple graphic design (-75%)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Template-based work (-80%)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 text-center">
            <h3 className="text-3xl font-bold mb-4">⚠️ Window Closing Fast</h3>
            <p className="text-xl text-gray-300 mb-6">
              Every month, more people discover AI tools. Early movers are capturing 80% of the high-value work.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">Q1 2025</div>
                <p className="text-sm text-gray-400">AI adopters</p>
                <div className="text-lg">12%</div>
              </div>
              <ArrowRight className="w-8 h-8 text-gray-400" />
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">Q4 2025</div>
                <p className="text-sm text-gray-400">Predicted</p>
                <div className="text-lg">67%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Join the Transformation?
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            The creative industry has changed forever. Those who adapt will thrive. Those who don't will be left behind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://dezygn.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-10 py-5 rounded-full font-black text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get Dezygn</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button 
              onClick={handleDownloadReport}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download Report</span>
            </button>
          </div>
          
          <p className="text-sm text-purple-200 mt-8">
            Report by Dezygn • Based on 1,050+ real job postings • Updated monthly • Last Updated: June 2025
          </p>
        </div>
      </section>

      {/* Job Samples Modal */}
      {showJobSamples && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowJobSamples(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <h3 className="text-3xl font-black mb-2">Sample Jobs: {selectedJobType}</h3>
              <p className="text-gray-600">Real job postings from platforms like Upwork (client names anonymized)</p>
            </div>
            
            <div className="space-y-6">
              {jobSamples[selectedJobType]?.map((job, idx) => (
                <div key={idx} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                    <div className="text-right">
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                        {job.budget}
                      </div>
                      <p className="text-sm text-gray-500">{job.timeline}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Active Job
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      Multiple Proposals
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-2">Ready to Apply for Jobs Like These?</h4>
              <p className="text-purple-100 mb-4">
                Get the AI tools that can complete these jobs in minutes, not hours
              </p>
              <a 
                href="https://dezygn.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all"
              >
                Get Dezygn →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AICreativeReport;