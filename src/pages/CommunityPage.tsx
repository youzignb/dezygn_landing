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
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

const BENEFITS = [
  {
    title: 'Networking',
    description:
      'Meet agencies and freelancers like you. Exchange ideas, share wins, and build partnerships with peers who understand the AI photography space.',
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Live Sessions',
    description:
      'Join regular live sessions with the founder and guest experts. Get real-time answers, workflow demos, and the latest product updates first.',
    icon: <Video className="h-5 w-5" />,
  },
  {
    title: 'Critique Rounds',
    description:
      'Submit your work for peer feedback. Sharpen your eye, improve your output, and learn from how others approach the same briefs.',
    icon: <Eye className="h-5 w-5" />,
  },
  {
    title: 'Shared Resources',
    description:
      'Access prompt libraries, workflow templates, client scripts, and curated resources contributed by the community.',
    icon: <FolderOpen className="h-5 w-5" />,
  },
  {
    title: 'Peer Feedback',
    description:
      'Get honest, constructive feedback from practitioners who know the craft — not generic advice from outsiders.',
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: 'Founder Updates',
    description:
      'Stay ahead with direct updates from the Dezygn founder — product roadmap, feature drops, and strategic insights.',
    icon: <Lightbulb className="h-5 w-5" />,
  },
];

const CommunityPage = () => {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Community — AI Photography Agencies & Freelancers | Dezygn</title>
        <meta
          name="description"
          content="Join the private Dezygn community on Skool. Connect with AI photography agencies and freelancers, get peer feedback, attend live sessions, and access shared resources."
        />
        <link rel="canonical" href="https://dezygn.com/community" />
      </Helmet>

      <HeaderV4 />

      <main className="pt-28">
        {/* Breadcrumbs */}
        <div className="mx-auto max-w-6xl px-5 py-4">
          <nav aria-label="Breadcrumb" className={`${mono} text-xs text-[#8B867B]`}>
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="transition hover:text-[#1A1A1A]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#6B6459]">Community</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-5 py-16 text-center sm:py-20">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-4 top-8 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✳
          </span>
          <div className="mx-auto max-w-3xl">
            <p className={`${mono} mb-6 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              <Users className="h-3.5 w-3.5" />
              Private Skool Community
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-6xl">
              Meet Agencies & <span className={`${serif} italic font-normal text-[#7C3AED]`}>Freelancers Like You.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              A private community for AI photography agencies and freelancers.
              Exchange with other members, get peer feedback, and stay current
              with the latest from the founder.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
              className="mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-[15px] font-semibold text-white transition hover:bg-[#7C3AED]"
            >
              Join the Community
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${mono} mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              Membership
            </p>
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-5xl">
              What You <span className={`${serif} italic font-normal`}>Get.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#6B6459] sm:text-base">
              Everything you need to grow alongside other AI photography
              professionals.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                    {benefit.icon}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-[#1A1A1A]">
                    {benefit.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6B6459]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-5 py-20 sm:py-28">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] sm:p-16">
            <span aria-hidden className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}>
              ✳
            </span>
            <span aria-hidden className={`${serif} absolute -bottom-12 -right-2 rotate-12 text-[180px] italic leading-none text-white/10`}>
              ✦
            </span>
            <h2 className="relative z-10 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Stop Working <span className={`${serif} italic font-normal`}>Alone.</span>
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Join a community of professionals who share your craft. Get
              feedback, find collaborators, and grow faster together.
            </p>
            <a
              href="https://chat.dezygn.com/signup"
              className="relative z-10 mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
            >
              Join the Community
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
};

export default CommunityPage;
