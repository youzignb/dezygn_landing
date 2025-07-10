import { useState } from 'react';
import { Globe, Zap, Check, AlertCircle, ArrowRight, Sparkles, TrendingUp, Palette, Image, ChevronRight, Eye, Download, Share2, RefreshCw, Target, Layers, Loader2, ExternalLink } from 'lucide-react';

function AuditPage() {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [selectedTab, setSelectedTab] = useState('opportunities');
  const [error, setError] = useState<string | null>(null);

  // Analysis results from API
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  // Add custom styles for animations
  const customStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(200%); }
    }
    
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
    
    .animate-pulse-glow {
      animation: pulse-glow 3s ease-in-out infinite;
    }
    
    .gradient-text {
      background: linear-gradient(to right, #9333EA, #2563EB);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .gradient-border {
      position: relative;
      background: linear-gradient(to right, #9333EA, #2563EB);
      padding: 2px;
      border-radius: 1rem;
    }
    
    .gradient-border-inner {
      background: white;
      border-radius: calc(1rem - 2px);
      padding: 1.5rem;
    }
  `;

  const isValidUrl = (string: string) => {
    try {
      const url = new URL(string.startsWith('http') ? string : `https://${string}`);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    console.log('🚀 Starting website analysis:', { websiteUrl });

    if (!isValidUrl(websiteUrl)) {
      console.log('❌ Invalid URL provided:', websiteUrl);
      setError('Please enter a valid website URL');
      return;
    }

    // Format URL properly
    const formattedUrl = websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`;
    console.log('✅ URL formatted:', { original: websiteUrl, formatted: formattedUrl });
    
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    
    try {
      console.log('📡 Calling API endpoint:', '/api/analyze-website');
      const response = await fetch('/api/analyze-website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ websiteUrl: formattedUrl })
      });

      console.log('📡 API response received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      });

      if (!response.ok) {
        console.log('❌ API returned error status:', response.status);
        let errorMessage = 'Analysis failed';
        try {
          const errorData = await response.json();
          console.log('📄 Error response data:', errorData);
          errorMessage = errorData.error || errorMessage;
        } catch (parseError) {
          console.log('❌ Failed to parse error response as JSON:', parseError);
          // If response isn't JSON, use status text
          errorMessage = `API Error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      console.log('📄 Parsing successful response...');
      const data = await response.json();
      console.log('✅ Pipeline started, received:', {
        hasData: !!data,
        dataKeys: data ? Object.keys(data) : [],
        run_id: data?.run_id,
        status: data?.status
      });

      // Check if we got a run_id (pipeline started) or final results
      if (data.run_id && data.status === 'started') {
        console.log('🔄 Starting client-side polling for run_id:', data.run_id);
        await pollForResults(data.run_id);
      } else {
        // Direct results (shouldn't happen with new flow but keeping for safety)
        setAnalysisResults(data);
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }
      
    } catch (error: any) {
      console.error('💥 Analysis error:', {
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
      setError(error.message || 'Analysis failed. Please try again.');
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setWebsiteUrl('');
    setAnalysisComplete(false);
    setAnalysisResults(null);
    setError(null);
  };

  const pollForResults = async (runId: string) => {
    const maxAttempts = 12; // 12 attempts * 15 seconds = 3 minutes max
    const pollInterval = 15000; // 15 seconds
    
    console.log('🔄 Starting client-side polling:', { runId, maxAttempts, pollInterval });

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      console.log(`📊 Polling attempt ${attempt}/${maxAttempts} for run_id: ${runId}`);
      
      try {
        // Wait before polling (except first attempt)
        if (attempt > 1) {
          await new Promise(resolve => setTimeout(resolve, pollInterval));
        } else {
          // Wait 10 seconds before first poll to give pipeline time to start
          await new Promise(resolve => setTimeout(resolve, 10000));
        }
        
        const pollResponse = await fetch('/api/poll-results', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ run_id: runId })
        });

        if (!pollResponse.ok) {
          console.log(`❌ Poll attempt ${attempt} failed:`, pollResponse.status);
          continue;
        }

        const pollData = await pollResponse.json();
        console.log(`📊 Poll attempt ${attempt} response:`, {
          status: pollData.status,
          completed: pollData.completed,
          failed: pollData.failed,
          hasOutputs: !!pollData.outputs
        });

        if (pollData.completed && pollData.outputs) {
          console.log('✅ Pipeline completed! Setting results');
          setAnalysisResults(pollData.outputs);
          setIsAnalyzing(false);
          setAnalysisComplete(true);
          return;
        }

        if (pollData.failed) {
          console.log('❌ Pipeline failed');
          throw new Error('Analysis pipeline failed');
        }

        console.log(`⏳ Pipeline still running (${pollData.status}), continuing to poll...`);
        
      } catch (pollError: any) {
        console.log(`❌ Error during poll attempt ${attempt}:`, pollError.message);
        
        // If this is the last attempt, throw the error
        if (attempt === maxAttempts) {
          throw pollError;
        }
      }
    }

    // If we get here, polling timed out
    console.log('⏰ Polling timed out after maximum attempts');
    throw new Error('Analysis timed out after 3 minutes. Please try again.');
  };

  const getImpactColor = (impact: string) => {
    switch(impact) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Header */}
      <div className="px-6 py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900">Dezygn Audit</h1>
                <p className="text-sm text-gray-600">AI-Powered Design Opportunity Analyzer</p>
              </div>
            </div>
            {analysisComplete && (
              <button 
                onClick={resetAnalysis}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium text-gray-700 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                New Analysis
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {!isAnalyzing && !analysisComplete && (
          /* URL Input Form */
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Discover Your
                <span className="gradient-text"> Hidden Opportunities</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enter any website URL and let AI identify design and content opportunities that could transform your business
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="gradient-border">
                <div className="gradient-border-inner">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-6 h-6 text-gray-400" />
                    <input
                      type="text"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="Enter website URL (e.g., example.com)"
                      className="flex-1 text-lg outline-none bg-transparent placeholder:text-gray-400"
                      required
                    />
                  </div>
                  
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={!websiteUrl || isAnalyzing}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Analyze Website
                  </button>
                  
                  <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>100% Private</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span>Instant Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      <span>AI Powered</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            {/* Example Sites */}
            <div className="mt-16">
              <p className="text-sm text-gray-600 mb-6">Popular examples to try:</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { type: 'E-commerce', example: 'shopify.com', icon: '🛍️', desc: 'Product photography opportunities' },
                  { type: 'Service Business', example: 'local-salon.com', icon: '💼', desc: 'Professional visual upgrades' },
                  { type: 'Restaurant', example: 'restaurant.com', icon: '🍕', desc: 'Food & ambiance shots' }
                ].map((example, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setWebsiteUrl(example.example)}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="text-3xl mb-3">{example.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-1">{example.type}</h4>
                    <p className="text-sm text-gray-600 mb-2">{example.desc}</p>
                    <div className="text-purple-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Try {example.example}
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analyzing State */}
        {isAnalyzing && (
          <div className="text-center py-20">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
              <div className="relative w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Loader2 className="w-16 h-16 text-white animate-spin" />
              </div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">Analyzing {websiteUrl}...</h3>
            <p className="text-gray-600 mb-6">This typically takes 1-2 minutes for a comprehensive analysis</p>
            <div className="space-y-3 max-w-md mx-auto">
              {[
                'Capturing website visuals...',
                'Detecting business type and industry...',
                'Analyzing brand consistency...',
                'Identifying content opportunities...',
                'Comparing with industry standards...'
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {analysisComplete && analysisResults && (
          <div>
            {/* Score Header */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-black gradient-text">{analysisResults.score}</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      /100
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">
                      Dezygn Opportunity Score
                    </h3>
                    <p className="text-gray-600">
                      <span className="font-bold text-purple-600">{analysisResults.businessType}</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {analysisResults.target_audience}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium text-gray-700 transition-all">
                    <Download className="w-4 h-4" />
                    Download Report
                  </button>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Brand Identity Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-500" />
                Brand Identity Detected
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Primary Color</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg border-2 border-gray-200" style={{backgroundColor: analysisResults.primary_color}}></div>
                    <span className="font-mono text-sm">{analysisResults.primary_color}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Typography</p>
                  <p className="text-sm font-medium">{analysisResults.font_style}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Personality</p>
                  <p className="text-sm font-medium">{analysisResults.brand_personality}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">AI Ready Score</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${analysisResults.aiReadyScore}%`}}
                      ></div>
                    </div>
                    <span className="text-sm font-bold">{analysisResults.aiReadyScore}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 bg-white rounded-2xl p-2 shadow-sm">
              {[
                { id: 'opportunities', label: 'Quick Wins', icon: Zap, count: 3 },
                { id: 'brand', label: 'Brand Analysis', icon: Palette },
                { id: 'competitive', label: 'Competitive Gaps', icon: Target, count: 3 },
                { id: 'multiply', label: 'Content Ideas', icon: Layers, count: 3 }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                    selectedTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {tab.count && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {/* Quick Wins Tab */}
              {selectedTab === 'opportunities' && (
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      Top Opportunities for Improvement
                    </h4>
                    <div className="space-y-4">
                      {/* Quick Win 1 */}
                      {analysisResults.quickWin1_title && (
                        <div className="border-l-4 border-purple-500 pl-6 py-4 hover:bg-gray-50 rounded-r-lg transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <h5 className="font-bold text-gray-900 text-lg">{analysisResults.quickWin1_title}</h5>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(analysisResults.quickWin1_impact)}`}>
                              {analysisResults.quickWin1_impact} impact
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Current State:</p>
                              <p className="text-sm text-gray-700">{analysisResults.quickWin1_current}</p>
                            </div>
                            <div>
                              <p className="text-sm text-purple-600 font-medium mb-1">Opportunity:</p>
                              <p className="text-sm text-gray-700">{analysisResults.quickWin1_opportunity}</p>
                            </div>
                          </div>
                          <div className="bg-purple-50 rounded-lg px-4 py-2 inline-flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-purple-700">
                              Use {analysisResults.quickWin1_feature}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Quick Win 2 */}
                      {analysisResults.quickWin2_title && (
                        <div className="border-l-4 border-blue-500 pl-6 py-4 hover:bg-gray-50 rounded-r-lg transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <h5 className="font-bold text-gray-900 text-lg">{analysisResults.quickWin2_title}</h5>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(analysisResults.quickWin2_impact)}`}>
                              {analysisResults.quickWin2_impact} impact
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Current State:</p>
                              <p className="text-sm text-gray-700">{analysisResults.quickWin2_current}</p>
                            </div>
                            <div>
                              <p className="text-sm text-blue-600 font-medium mb-1">Opportunity:</p>
                              <p className="text-sm text-gray-700">{analysisResults.quickWin2_opportunity}</p>
                            </div>
                          </div>
                          <div className="bg-blue-50 rounded-lg px-4 py-2 inline-flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">
                              Use {analysisResults.quickWin2_feature}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Quick Win 3 */}
                      {analysisResults.quickWin3_title && (
                        <div className="border-l-4 border-green-500 pl-6 py-4 hover:bg-gray-50 rounded-r-lg transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <h5 className="font-bold text-gray-900 text-lg">{analysisResults.quickWin3_title}</h5>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(analysisResults.quickWin3_impact)}`}>
                              {analysisResults.quickWin3_impact} impact
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Current State:</p>
                              <p className="text-sm text-gray-700">{analysisResults.quickWin3_current}</p>
                            </div>
                            <div>
                              <p className="text-sm text-green-600 font-medium mb-1">Opportunity:</p>
                              <p className="text-sm text-gray-700">{analysisResults.quickWin3_opportunity}</p>
                            </div>
                          </div>
                          <div className="bg-green-50 rounded-lg px-4 py-2 inline-flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">
                              Use {analysisResults.quickWin3_feature}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold mb-2">Ready to implement these improvements?</h4>
                        <p className="text-white/80">Start with Dezygn and transform your visual content today</p>
                      </div>
                      <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2">
                        Start Creating
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Brand Analysis Tab */}
              {selectedTab === 'brand' && (
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-purple-500" />
                    Brand Consistency Analysis
                  </h4>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: 'Color Consistency', value: analysisResults.colorConsistency, color: 'purple' },
                      { label: 'Visual Style', value: analysisResults.visualStyleScore, color: 'blue' },
                      { label: 'Image Quality', value: analysisResults.imageQualityScore, color: 'green' }
                    ].map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <svg className="w-32 h-32 transform -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke="#E5E7EB"
                              strokeWidth="12"
                              fill="none"
                            />
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke={`url(#gradient-${idx})`}
                              strokeWidth="12"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 56}`}
                              strokeDashoffset={`${2 * Math.PI * 56 * (1 - metric.value / 100)}`}
                              className="transition-all duration-1000"
                            />
                            <defs>
                              <linearGradient id={`gradient-${idx}`}>
                                <stop offset="0%" stopColor="#9333EA" />
                                <stop offset="100%" stopColor="#2563EB" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-black">{metric.value}%</span>
                          </div>
                        </div>
                        <p className="font-medium text-gray-900">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      Issues Detected
                    </h5>
                    <div className="space-y-3">
                      {[analysisResults.brandIssue1, analysisResults.brandIssue2, analysisResults.brandIssue3].filter(Boolean).map((issue, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">{issue}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                      <p className="text-sm text-purple-900">
                        <span className="font-bold">Pro tip:</span> Import your brand into Dezygn's InstantBrand Sync™ to ensure perfect consistency across all designs
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Competitive Gaps Tab */}
              {selectedTab === 'competitive' && (
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-500" />
                      Competitive Gap Analysis
                    </h4>
                    <div className="space-y-6">
                      {[
                        { gap: analysisResults.competitiveGap1 },
                        { gap: analysisResults.competitiveGap2 },
                        { gap: analysisResults.competitiveGap3 }
                      ].filter(item => item.gap).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Target className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <p className="text-gray-800 font-medium">{item.gap}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">Stay ahead of the competition</h4>
                        <p className="text-white/70 text-sm">
                          Companies using Dezygn report 3.2x faster content creation and 78% cost savings compared to traditional design methods
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Multiplication Tab */}
              {selectedTab === 'multiply' && (
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-500" />
                    Content Multiplication Opportunities
                  </h4>
                  
                  <div className="space-y-6">
                    {[
                      { idea: analysisResults.contentMultiplication1 },
                      { idea: analysisResults.contentMultiplication2 },
                      { idea: analysisResults.contentMultiplication3 }
                    ].filter(item => item.idea).map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-colors">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                            <Image className="w-6 h-6 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-800 font-medium">{item.idea}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">🚀</div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-1">
                          Turn 1 design into 20+ assets
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Dezygn's AI automatically adapts your content for every platform and format
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 px-6 py-8 bg-white border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600 mb-4">
            Dezygn Audit analyzes visual opportunities using AI. Results are suggestions based on industry best practices.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
              Learn More <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
              Start Creating <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
              View Pricing <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AuditPage;