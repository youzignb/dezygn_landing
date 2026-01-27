import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  GraduationCap,
  Eye,
  Users,
  Camera,
  BarChart3,
  Sparkles,
  Award,
  Map,
  Briefcase,
  Globe,
  DollarSign,
  Megaphone,
  FolderOpen,
} from 'lucide-react';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const MODULES = [
  {
    number: '01',
    title: 'Visual Syntax Foundation',
    description:
      'Master the 6-ingredient framework to deconstruct any reference image and construct prompts that reliably produce on-brand results.',
    icon: <Eye className="w-5 h-5" />,
  },
  {
    number: '02',
    title: 'The Client Workflow',
    description:
      'Extract brand DNA, prepare assets, self-evaluate with the scorecard, run feedback calls, and deliver files professionally.',
    icon: <Users className="w-5 h-5" />,
  },
  {
    number: '03',
    title: 'Studio Shots',
    description:
      'Packshots, hero shots, detail close-ups, sizing guides, and more — roughly 8-10 studio shot types you can deliver to any client.',
    icon: <Camera className="w-5 h-5" />,
  },
  {
    number: '04',
    title: 'Conversion Shots',
    description:
      'Comparison charts, trust cards, ingredient spotlights, benefit visualizations — roughly 6-8 high-conversion shot types.',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    number: '05',
    title: 'Lifestyle & UGC Shots',
    description:
      'Action shots, hand scale, proof shots, transformation shots — roughly 8-10 lifestyle and UGC shot types that sell.',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    number: '06',
    title: 'Portfolio & Certification',
    description:
      'Submit a graded portfolio and get certified as an AI Conversion Photographer — proof you can deliver results.',
    icon: <Award className="w-5 h-5" />,
  },
];

const BONUSES = [
  {
    title: 'Niche Selection Kit',
    description: 'Find the most profitable niches for AI photography services.',
    icon: <Map className="w-5 h-5" />,
  },
  {
    title: 'Portfolio Builder',
    description: 'Templates and strategies to build a portfolio that converts prospects into clients.',
    icon: <FolderOpen className="w-5 h-5" />,
  },
  {
    title: 'Profile & Website Templates',
    description: 'Ready-to-use templates for your online presence — profiles, bios, and website copy.',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: 'Pricing & Offer Framework',
    description: 'Proven pricing structures and offer frameworks that maximize revenue per client.',
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    title: 'Lead Generation System',
    description: 'Step-by-step system to find and attract your ideal clients consistently.',
    icon: <Megaphone className="w-5 h-5" />,
  },
  {
    title: 'Outreach & Client Management',
    description: 'Scripts, templates, and workflows for outreach, onboarding, and long-term client retention.',
    icon: <Briefcase className="w-5 h-5" />,
  },
];

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>The Conversion Photography System — Course | Dezygn</title>
        <meta
          name="description"
          content="Learn the complete AI conversion photography system — 6 core modules from Visual Syntax to certification, plus 6 business bonuses. Hosted on Skool."
        />
        <link rel="canonical" href="https://dezygn.com/course" />
      </Helmet>

      <HeaderV3 />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">Course</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Hosted on Skool</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            The Conversion{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Photography System
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Master AI product photography from first prompt to certified
            portfolio. 6 core modules, 6 business bonuses, one system that
            works.
          </p>
          <a
            href="https://chat.dezygn.com/signup"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Start Learning
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* Core Modules */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            6 Core Modules
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-14">
            From foundational frameworks to a graded certification — everything
            you need to deliver conversion-focused product photography.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <div
                key={mod.number}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    {mod.icon}
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      Module {mod.number}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {mod.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bonuses */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            6 Bonuses
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-14">
            Everything you need to turn your new skill into a business —
            from niche selection to client management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BONUSES.map((bonus) => (
              <div
                key={bonus.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                    {bonus.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {bonus.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to master AI photography?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Join the course, follow the system, and come out the other side
              with a certified portfolio and a client-ready business.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
};

export default CoursePage;
