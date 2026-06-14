import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, ClipboardCheck, GalleryHorizontalEnd, Globe, Image, Mail, MessageSquare, Search, Sparkles } from 'lucide-react';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';
import { CtaBand, EditorialTitle, Eyebrow, StartFreeButton, mono, sans } from './features/FeaturePageLayout';
import { generatedFeatureIndex } from '../data/features.generated';

const features = [
  {
    title: 'Awa',
    tag: 'AI Creative Assistant',
    description: 'Your AI creative assistant, trained in AI photography. Brief her in chat — she writes the prompt, generates, checks quality, and iterates to client-ready.',
    icon: Brain,
    to: '/features/awa',
  },
  {
    title: 'Outreach Factory',
    tag: 'Visual Cold Email',
    description: 'Import CSV lead lists, discover each brand’s product, generate personalized proof-of-work visuals, and export an Instantly-ready CSV.',
    icon: Mail,
    to: '/features/outreach',
  },
  {
    title: 'Opportunities',
    tag: 'Upwork Feed',
    description: 'A daily Upwork scan brings scored AI photography jobs into your studio. Apply, track wins, and never run out of gigs to chase.',
    icon: Search,
    to: '/features/opportunities',
  },
  {
    title: 'Concepts',
    tag: 'Direction Approval',
    description: 'Share concept directions with reference images on one public link. Clients approve, request tweaks, or pass before production starts.',
    icon: ClipboardCheck,
    to: '/features/concepts',
  },
  {
    title: 'Feedback',
    tag: 'Review Inbox',
    description: 'Public client review pages with ratings and comments, collected into one inbox that routes feedback back to the source campaign.',
    icon: MessageSquare,
    to: '/features/feedback',
  },
  {
    title: 'Recipes',
    tag: 'Reusable Templates',
    description: 'Save the prompts, models, ingredients, and parameters that worked — then reuse them on recurring client work in one click.',
    icon: GalleryHorizontalEnd,
    to: '/features/recipes',
  },
  {
    title: 'Studio & Gallery',
    tag: 'Production Workspace',
    description: 'Chat, canvas, side-by-side comparison, and a gallery built for selecting winners and sharing them with clients.',
    icon: Image,
    to: '/features/studio',
  },
  {
    title: 'Brand Import',
    tag: 'Client Setup',
    description: 'Import a client’s brand from their website — logos, colors, and visual style — so every generation starts on-brand.',
    icon: Globe,
    to: '/features/brand-import',
  },
];

const FeaturesPage = () => {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Features — AI Creative Suite | Dezygn</title>
        <meta
          name="description"
          content="Dezygn's AI Creative Suite: Awa AI Creative Director, Studio & Gallery, Brand Import, and more. Everything you need for professional AI product photography."
        />
        <link rel="canonical" href="https://dezygn.com/features" />
      </Helmet>

      <HeaderV4 />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#F7F5F0] px-5 pb-14 pt-28 sm:pb-16 sm:pt-32">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <Eyebrow>Features</Eyebrow>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              <EditorialTitle text="A Studio OS, Not A Generator." />
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#6B6459] sm:text-lg sm:leading-8">
              Everything an AI photography operator needs for client work — finding gigs, pitching prospects, aligning on direction, producing visuals, and collecting feedback — in one workspace.
            </p>
            <div className="mt-9 flex justify-center">
              <StartFreeButton />
            </div>
          </div>
        </section>

        {/* Feature card grid */}
        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Link
                  key={feature.to}
                  to={feature.to}
                  className="group flex flex-col rounded-3xl border border-[#1A1A1A]/10 bg-white p-7 shadow-[0_16px_40px_rgba(26,26,26,0.06)] transition hover:border-[#8B5CF6]/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#8B5CF6]/10 text-[#7C3AED]">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <span className={`${mono} text-xs font-medium text-[#8B867B]`}>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className={`${mono} mt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>{feature.tag}</p>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight text-[#1A1A1A]">{feature.title}</h2>
                  <p className="mt-2.5 flex-grow text-sm leading-6 text-[#6B6459]">{feature.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#7C3AED]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
              {generatedFeatureIndex.map((feature, index) => (
                <Link
                  key={feature.slug}
                  to={`/features/${feature.slug}`}
                  className="group flex flex-col rounded-3xl border border-[#1A1A1A]/10 bg-white p-7 shadow-[0_16px_40px_rgba(26,26,26,0.06)] transition hover:border-[#8B5CF6]/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#8B5CF6]/10 text-[#7C3AED]">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <span className={`${mono} text-xs font-medium text-[#8B867B]`}>{String(features.length + index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className={`${mono} mt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>{feature.eyebrow}</p>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight text-[#1A1A1A]">{feature.title}</h2>
                  <p className="mt-2.5 flex-grow text-sm leading-6 text-[#6B6459]">{feature.subhead}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#7C3AED]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          headline="See The Whole System In Action."
          body="From your first gig to your first client review round — start free and run the workflow end to end."
        />
      </main>

      <FooterV4 />
    </div>
  );
};

export default FeaturesPage;
