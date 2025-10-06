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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-2 border border-gray-200 mb-6">
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span className="text-gray-700 text-sm font-medium">Empowering creators since 2014</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Turning Creativity Into<br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Real Income</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Since 2014, we've been building tools that help freelancers and agencies create professional work faster,
                empowering creators to build profitable businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-purple-600">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We believe creativity should be accessible to everyone, not just those with years of training.
                Our mission is to democratize professional-quality design and content creation,
                enabling anyone to build a successful creative business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Empower Creators</h3>
                    <p className="text-gray-600">Give every creator the tools to compete with professional agencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Market-Driven Innovation</h3>
                    <p className="text-gray-600">Build features based on real gig economy demand and what creators actually need</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Impact</h3>
                    <p className="text-gray-600">Create opportunities for creators worldwide, regardless of location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">By The Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">214,495+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">11</div>
                  <div className="text-sm text-gray-600">Years Building</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50M+</div>
                  <div className="text-sm text-gray-600">Designs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">$2.4M+</div>
                  <div className="text-sm text-gray-600">Creator Earnings/Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Story</span>
            </h2>
            <p className="text-xl text-gray-600">
              From a simple idea to a global platform transforming creative careers
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">2014</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Beginning</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Founded as Youzign, we started with a simple belief: design should be accessible to everyone.
                Our first platform helped over 200,000 entrepreneurs create professional graphics without design experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">2022</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Evolution</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We saw an opportunity to help creators work faster and earn more. We evolved Youzign into Dezygn,
                combining our decade of experience with new technology to solve real creator problems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Today</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Today, Dezygn helps creators worldwide build profitable businesses with faster, smarter creative tools.
                We focus on what actually helps creators earn more money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Market-Driven Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We build what the gig economy actually demands, adapting our platform to real market needs and creator opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">User Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Our success is measured by our users' success. Every feature is designed to help creators earn more and work smarter.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in constant improvement - both for our platform and for individual creators.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We set the bar high for ourselves and deliver professional-quality tools that creators can rely on.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speed to Market</h3>
              <p className="text-gray-600 leading-relaxed">
                5-minute delivery times that let creators complete more projects and earn more money faster than ever.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profit Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature is designed to help creators start earning day one with agency-quality output that commands premium rates.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default AboutPage;