import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Award, Sparkles, ArrowRight, Heart, Zap, Target, Globe } from 'lucide-react';
import Layout from '../components/Layout';

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-400/30 mb-6">
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span className="text-white text-sm font-medium">Trusted by 214,495+ creators worldwide</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Turning Creativity Into<br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Real Income</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Since 2014, we've been building tools that help freelancers and agencies create professional work faster, 
                empowering creators to build profitable businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-purple-400">Mission</span>
              </h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                We believe creativity should be accessible to everyone, not just those with years of training. 
                Our mission is to democratize professional-quality design and content creation, 
                enabling anyone to build a successful creative business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Empower Creators</h3>
                    <p className="text-white/70">Give every creator the tools to compete with professional agencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Market-Driven Innovation</h3>
                    <p className="text-white/70">Build features based on real gig economy demand and what creators actually need</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Global Impact</h3>
                    <p className="text-white/70">Create opportunities for creators worldwide, regardless of location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">By The Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">214,495+</div>
                  <div className="text-sm text-white/70">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">11</div>
                  <div className="text-sm text-white/70">Years Building</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">50M+</div>
                  <div className="text-sm text-white/70">Designs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">$2.4M+</div>
                  <div className="text-sm text-white/70">Creator Earnings/Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Story</span>
            </h2>
            <p className="text-xl text-white/80">
              From a simple idea to a global platform transforming creative careers
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2014</span>
                </div>
                <h3 className="text-2xl font-bold text-white">The Beginning</h3>
              </div>
              <p className="text-white/80">
                Founded as Youzign, we started with a simple belief: design should be accessible to everyone. 
                Our first platform helped over 200,000 entrepreneurs create professional graphics without design experience.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2022</span>
                </div>
                <h3 className="text-2xl font-bold text-white">The Evolution</h3>
              </div>
              <p className="text-white/80">
                We saw an opportunity to help creators work faster and earn more. We evolved Youzign into Dezygn, 
                combining our decade of experience with new technology to solve real creator problems.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2025</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Today</h3>
              </div>
              <p className="text-white/80">
                Today, Dezygn helps creators worldwide build profitable businesses with faster, smarter creative tools. 
                We focus on what actually helps creators earn more money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Values</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Market-Driven Development</h3>
              <p className="text-white/70">
                We build what the gig economy actually demands, adapting our platform to real market needs and creator opportunities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">User Success</h3>
              <p className="text-white/70">
                Our success is measured by our users' success. Every feature is designed to help creators earn more and work smarter.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Growth</h3>
              <p className="text-white/70">
                We believe in constant improvement - both for our platform and for individual creators.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-white/70">
                We set the bar high for ourselves and deliver professional-quality tools that creators can rely on.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Speed to Market</h3>
              <p className="text-white/70">
                5-minute delivery times that let creators complete more projects and earn more money faster than ever.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Profit Focus</h3>
              <p className="text-white/70">
                Every feature is designed to help creators start earning day one with agency-quality output that commands premium rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our <span className="text-purple-400">Mission</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Be part of the AI creative revolution and build the business you've always dreamed of.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-2xl"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default AboutPage;