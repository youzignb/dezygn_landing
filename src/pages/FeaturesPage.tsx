import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Play, Palette, Users, Share2, ArrowRight, Zap, Target, FileSearch, Video, Eye, RefreshCw } from 'lucide-react';
import Layout from '../components/Layout';

// Import feature images from existing pages
import hyperVisionEngine from '../assets/images/toolkit-features/hypervision_engine.png';
import visualDNA from '../assets/images/toolkit-features/visual_dna.png';
import smartTextVision from '../assets/images/toolkit-features/smart_text_vision.png';
import teamSpace from '../assets/images/toolkit-features/TeamSpace.png';
import instaShare from '../assets/images/toolkit-features/instashare.png';
import instantBrandSync from '../assets/images/toolkit-features/instant_brand_syncs.png';
import dezygn_audit from '../assets/images/audit/dezygn_audit.png';
import animateOriginal from '../assets/images/real-world-demos/animate/original_image-of-model-crossing-hands-wearing-tshirt.png';
import animateVideo from '../assets/images/real-world-demos/animate/animated_image-of-model-showing-off-tshirt.mp4';

function FeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Features', icon: Sparkles },
    { id: 'ai-core', label: 'AI Core', icon: Zap },
    { id: 'video', label: 'AI Video', icon: Video },
    { id: 'brand', label: 'Brand Tools', icon: Palette },
    { id: 'collaboration', label: 'Collaboration', icon: Users },
    { id: 'business', label: 'Business Tools', icon: Target }
  ];

  const features = [
    {
      category: 'ai-core',
      title: 'HyperVision Engine',
      description: 'AI that understands design like a human designer. Analyzes composition, color theory, and visual hierarchy to transform amateur work into professional designs.',
      image: hyperVisionEngine,
      icon: Eye,
      featured: true,
      availability: 'All Plans',
      color: 'purple',
      benefits: [
        'Fixes common design mistakes automatically',
        'Understands brand guidelines and style',
        'Creates variations that actually look different',
        'Professional-quality output every time'
      ]
    },
    {
      category: 'brand',
      title: 'Brand DNA Technology',
      description: 'Character consistency technology that creates the same person, product, or brand element across unlimited designs. Unlocks premium $500-2000+ projects.',
      image: visualDNA,
      icon: Target,
      featured: true,
      availability: 'Pro & Agency',
      color: 'blue',
      benefits: [
        'Same character across unlimited designs',
        'Product photography series consistency',
        'Brand ambassador campaigns',
        'Social media character consistency'
      ]
    },
    {
      category: 'video',
      title: 'AI Video Generation (Animate)',
      description: 'Turn any image into engaging motion content. Create product demos, social media videos, and dynamic content that sells.',
      image: animateOriginal,
      video: animateVideo,
      icon: Play,
      featured: true,
      availability: 'Pro & Agency',
      color: 'green',
      benefits: [
        'Product demos: $800 average project value',
        'Social media content: $200-600 per video',
        'Website backgrounds: $300-500 add-on',
        'Turn static images into engaging motion'
      ]
    },
    {
      category: 'video',
      title: 'AI Lipsync Technology',
      description: 'Make any person speak any script with realistic lip movements. Create AI spokespersons and talking brand ambassadors.',
      image: visualDNA, // Using as placeholder since it shows character consistency
      icon: Video,
      featured: true,
      availability: 'Pro & Agency',
      color: 'red',
      benefits: [
        'AI spokespersons: $1,200 average project value',
        'Training content: $2,500+ retainer clients',
        'Testimonial videos: $400-800 per video',
        'Perfect synchronization with speech'
      ]
    },
    {
      category: 'ai-core',
      title: 'Smart Text Vision',
      description: 'AI that understands context and automatically improves text readability, hierarchy, and placement for maximum impact.',
      image: smartTextVision,
      icon: Eye,
      availability: 'All Plans',
      color: 'yellow',
      benefits: [
        'Context-aware text placement',
        'Automatic readability optimization',
        'Professional typography hierarchy',
        'Smart color contrast adjustments'
      ]
    },
    {
      category: 'brand',
      title: 'Instant Brand Sync',
      description: 'One-click brand consistency across all designs. Never worry about off-brand content again with automatic brand application.',
      image: instantBrandSync,
      icon: RefreshCw,
      availability: 'All Plans',
      color: 'purple',
      benefits: [
        'One-click brand consistency',
        'Automatic color scheme application',
        'Font and style synchronization',
        'Brand guideline enforcement'
      ]
    },
    {
      category: 'collaboration',
      title: 'TeamSpace',
      description: 'Collaborate seamlessly with clients and team members. Share, review, and approve designs in real-time with built-in feedback tools.',
      image: teamSpace,
      icon: Users,
      availability: 'All Plans',
      color: 'blue',
      benefits: [
        'Real-time collaboration',
        'Client review and approval system',
        'Team member management',
        'Version control and feedback loops'
      ]
    },
    {
      category: 'collaboration',
      title: 'InstaShare',
      description: 'Professional white-label delivery system with smart watermarking, client review tools, and automated delivery notifications.',
      image: instaShare,
      icon: Share2,
      availability: 'Pro & Agency',
      color: 'green',
      benefits: [
        'White-label client delivery',
        'Smart watermarking system',
        'Automated delivery notifications',
        'Professional presentation'
      ]
    },
    {
      category: 'business',
      title: 'Website Audit Tool',
      description: 'AI-powered website analyzer that uncovers design opportunities worth thousands. Generate professional audit reports that close deals.',
      image: dezygn_audit,
      icon: FileSearch,
      availability: 'All Plans',
      color: 'purple',
      benefits: [
        'Instant website analysis',
        'Professional audit reports',
        'Pricing recommendations included',
        'Lead generation tool'
      ]
    }
  ];

  const filteredFeatures = selectedCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === selectedCategory);

  const featuredFeatures = features.filter(feature => feature.featured);

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      yellow: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getAvailabilityColor = (availability: string) => {
    if (availability === 'All Plans') return 'text-green-400';
    if (availability === 'Pro & Agency') return 'text-blue-400';
    return 'text-yellow-400';
  };

  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-400/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-white text-sm font-medium">AI-Powered Creative Tools</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI Features</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover the AI-powered features that make Dezygn the most advanced creative platform for building profitable businesses.
          </p>
        </div>
      </section>

      {/* Featured Features */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="inline-flex items-center gap-2">
                <Zap className="w-8 h-8 text-yellow-400" />
                Core AI Features
              </span>
            </h2>
            <p className="text-white/70">The breakthrough technologies that set Dezygn apart</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-purple-400/50 transition-all group">
                <div className="aspect-video relative overflow-hidden">
                  {feature.video ? (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      className="w-full h-full object-cover"
                      poster={feature.image}
                    >
                      <source src={feature.video} type="video/mp4" />
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                    </video>
                  ) : (
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  )}
                  <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(feature.color)} rounded-xl flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-sm font-semibold ${getAvailabilityColor(feature.availability)}`}>
                      {feature.availability}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-white/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Feature Set
            </h2>
            <p className="text-xl text-white/80">
              Every tool you need to build a successful AI-powered creative business
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:border-purple-400/50 transition-all group">
                <div className="aspect-video relative overflow-hidden">
                  {feature.video ? (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      className="w-full h-full object-cover"
                      poster={feature.image}
                    >
                      <source src={feature.video} type="video/mp4" />
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                    </video>
                  ) : (
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  )}
                  {feature.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-xs font-semibold ${getAvailabilityColor(feature.availability)}`}>
                      {feature.availability}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{feature.description}</p>
                  <div className="space-y-1">
                    {feature.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        <span className="text-white/70">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience All Features Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start your free trial and access the complete suite of AI-powered creative tools
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Try Audit Tool Free
              <FileSearch className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default FeaturesPage;