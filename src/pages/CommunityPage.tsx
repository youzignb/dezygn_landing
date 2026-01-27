import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Users,
  MessageSquare,
  Video,
  Eye,
  FolderOpen,
  Lightbulb,
} from 'lucide-react';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

const BENEFITS = [
  {
    title: 'Networking',
    description:
      'Meet agencies and freelancers like you. Exchange ideas, share wins, and build partnerships with peers who understand the AI photography space.',
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: 'Live Sessions',
    description:
      'Join regular live sessions with the founder and guest experts. Get real-time answers, workflow demos, and the latest product updates first.',
    icon: <Video className="w-5 h-5" />,
  },
  {
    title: 'Critique Rounds',
    description:
      'Submit your work for peer feedback. Sharpen your eye, improve your output, and learn from how others approach the same briefs.',
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: 'Shared Resources',
    description:
      'Access prompt libraries, workflow templates, client scripts, and curated resources contributed by the community.',
    icon: <FolderOpen className="w-5 h-5" />,
  },
  {
    title: 'Peer Feedback',
    description:
      'Get honest, constructive feedback from practitioners who know the craft — not generic advice from outsiders.',
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    title: 'Founder Updates',
    description:
      'Stay ahead with direct updates from the Dezygn founder — product roadmap, feature drops, and strategic insights.',
    icon: <Lightbulb className="w-5 h-5" />,
  },
];

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Community — AI Photography Agencies & Freelancers | Dezygn</title>
        <meta
          name="description"
          content="Join the private Dezygn community on Skool. Connect with AI photography agencies and freelancers, get peer feedback, attend live sessions, and access shared resources."
        />
        <link rel="canonical" href="https://dezygn.com/community" />
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
              <li className="text-gray-300">Community</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Private Skool Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Meet Agencies &{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Freelancers Like You
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            A private community for AI photography agencies and freelancers.
            Exchange with other members, get peer feedback, and stay current
            with the latest from the founder.
          </p>
          <a
            href="https://chat.dezygn.com/login"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Join the Community
            <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* Benefits Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What you get
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-14">
            Everything you need to grow alongside other AI photography
            professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop working alone
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Join a community of professionals who share your craft. Get
              feedback, find collaborators, and grow faster together.
            </p>
            <a
              href="https://chat.dezygn.com/login"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Join the Community
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV3 />
    </div>
  );
};

export default CommunityPage;
