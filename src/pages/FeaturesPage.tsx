import {
  Sparkles,
  Wand2,
  Users,
  Video,
  ArrowUpCircle,
  Share2,
  Copy,
  Palette,
  Film,
  Target,
  Layers,
  Zap,
  Grid3x3,
  Globe,
  Eye,
  RefreshCw
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';

interface Feature {
  title: string;
  summary: string;
  icon: any;
}

const features: Feature[] = [
  {
    title: "AI Image Generation",
    summary: "Transform text descriptions into professional visuals with our chat-based AI interface",
    icon: Sparkles
  },
  {
    title: "Advanced Editing",
    summary: "Edit with precision using multi-region lasso selection and targeted instructions",
    icon: Wand2
  },
  {
    title: "Video Generation",
    summary: "Create professional marketing videos with animation, lipsync, and premium quality tiers",
    icon: Video
  },
  {
    title: "Dezygn Challenge",
    summary: "Get your first client in 14 days with daily training videos and structured accountability",
    icon: Target
  },
  {
    title: "Brands & Campaigns",
    summary: "Organize creative work with brands and campaigns for consistent, efficient production",
    icon: Palette
  },
  {
    title: "Team Collaboration",
    summary: "Work together seamlessly with team members on creative projects in shared workspace",
    icon: Users
  },
  {
    title: "Upscaling",
    summary: "Fix defects and enhance AI-generated images with intelligent upscaling technology",
    icon: ArrowUpCircle
  },
  {
    title: "Studio",
    summary: "Create professional multi-scene videos with storyboards and AI-powered scriptwriting",
    icon: Film
  },
  {
    title: "Insta-Share",
    summary: "Share designs instantly with clients for quick feedback and approval with no login required",
    icon: Share2
  },
  {
    title: "Variations",
    summary: "Create multiple versions of designs to test different demographics and creative elements",
    icon: Copy
  },
  {
    title: "Concurrent Generation",
    summary: "Generate multiple images simultaneously for faster workflow and increased productivity",
    icon: Layers
  },
  {
    title: "Pro Mode",
    summary: "Advanced workflow controls with professional tools for experienced creators",
    icon: Zap
  },
  {
    title: "Collage",
    summary: "Combine multiple elements into cohesive designs with intelligent layout assistance",
    icon: Grid3x3
  },
  {
    title: "Ingredients",
    summary: "Upload and manage reference images, logos, and assets for consistent brand integration",
    icon: Globe
  },
  {
    title: "Aspect Ratio Control",
    summary: "Create designs in any dimensions for different platforms and use cases",
    icon: RefreshCw
  },
  {
    title: "One-Click Regenerate",
    summary: "Instantly create new variations with a single click for rapid iteration",
    icon: Eye
  }
];

function FeaturesPage() {
  return (
    <Layout>
      <Helmet>
        <title>Features - Professional AI Creative Tools | Dezygn</title>
        <meta name="description" content="Explore Dezygn's powerful features for AI image generation, video creation, team collaboration, and more. Professional tools for freelancers and agencies." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-6 py-2 border border-purple-200 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-900 text-sm font-medium">Powerful Features</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to<br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Create & Deliver</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional AI-powered tools for freelancers and agencies. Generate images, create videos, collaborate with teams, and deliver client-ready work in minutes.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.summary}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of creators using Dezygn to deliver professional work faster
          </p>
          <a
            href="https://dezygn.checkoutpage.com/dezygn-yearly"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
          >
            Start Free Trial
          </a>
        </div>
      </section>

    </Layout>
  );
}

export default FeaturesPage;
