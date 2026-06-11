import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, ChevronRight, Star, Search, Ruler, Globe, Layers, Eye, Camera, Sparkles, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';

const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

interface CaseStudy {
  id: string;
  title: string;
  badge: string;
  goal: string;
  challenge: string;
  solution: string;
  heroImage?: string;
  samples?: string[];
  price?: string;
  detail?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'jewelry-ecom',
    title: '2cm Accuracy for Jewelry E-commerce',
    badge: 'Large E-commerce Store',
    goal: 'Accurate representation of chains and pendants in lifestyle photography settings — critical for a jewelry brand where every millimeter matters.',
    challenge: 'Working with the company\'s stylist and photographer to create on-brand model/clothing styling. Reproducing 2 to 6cm high pendants and 40 to 80cm chains proved extremely challenging with AI. A 4mm pendant on a 50cm chain needs to look proportionally correct.',
    solution: 'Created reference sheets mapping real-world measurements to descriptive language AI can understand. "45cm chain = tight around neck base." "60cm chain = reaches upper chest." Custom-created models and outfits. Used the image transfer technique to get product shapes right.',
    heroImage: 'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/0f74d57f-ec69-466a-bcf8-d4120c6f1745',
    samples: [
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/36115481-58bc-4820-9229-72556972c312',
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/03d053c3-8abc-4fa3-96aa-28b23dc7efec',
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/aa2361fe-471b-4044-a523-e1ef33c4711e',
    ],
    price: '$2,000+',
    detail: 'Largest single contract landed using Dezygn',
  },
  {
    id: 'danish-toys',
    title: 'On-Brand Scandinavian Lifestyle Photography',
    badge: 'Danish Toy Brand',
    goal: 'Create on-brand, premium AI photography showcasing children interacting with the brand\'s flagship product in a typical Danish interior setting.',
    challenge: 'The product was stepping stones in organic, stone-like shapes — impossible to describe in text alone. Existing imagery was not on brand, and a custom photoshoot would have been too expensive. The AI needed to understand a product shape that doesn\'t exist in any training data.',
    solution: 'Studied Danish interior design — Douglas fir flooring, specific Scandinavian furniture styles, Nordic natural light. Used the image transfer technique to accurately represent the unique product shape. Hours of cultural research to nail the authentic Danish aesthetic.',
    heroImage: 'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/2d0e7669-28e9-44f3-87a2-b2e9670e5ea5',
    samples: [
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/57209dd4-dd14-4e4b-a274-c8bbb01a5b38',
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/89733176-9490-4a88-a0cd-54f5ed58ad5b',
      'https://www.upwork.com/att/download/portfolio/persons/uid/1922331197430616357/profile/projects/files/9be563aa-b158-4041-aa55-1edf78c3593c',
    ],
  },
  {
    id: 'french-eyewear',
    title: 'Retro Eyewear Brand — Hybrid AI + Reference',
    badge: 'French Retro Eyewear',
    goal: 'Create accurate, on-brand lifestyle photography for a French retro eyewear brand with a very specific aesthetic. Monthly retainer model for ongoing content.',
    challenge: 'Accurately representing glasses frames on models is one of AI\'s hardest problems. The frames needed to look exactly like the real product — shape, color, proportions — on realistic-looking faces. The brand had a very specific retro aesthetic.',
    solution: 'The client physically mailed glasses to Bertrand. His wife wore them for reference photos. These real-world reference images were loaded into Dezygn and used via image transfer to create new AI visuals with perfect frame accuracy. This hybrid approach — real reference + AI generation — is the gold standard for products that need exact representation.',
    price: '$640/month retainer',
    detail: '12 images per month. Ongoing repeat client.',
  },
  {
    id: 'trendhim',
    title: 'Quick-Turnaround Product Photography',
    badge: 'TrendHim — Danish E-commerce',
    goal: 'Deliver fast, high-quality product photography for a large Danish e-commerce brand with a broad product catalog.',
    challenge: 'Large brands need imagery at scale and at speed. Traditional photography can\'t keep up with the pace of new product launches. The brand needed a reliable partner who could deliver commercial-grade imagery on tight timelines.',
    solution: 'Used Dezygn\'s brand import to capture the TrendHim aesthetic from their existing site. Generated product imagery matching their established visual language — consistent lighting, styling, and composition across multiple product categories.',
    price: '$400 project',
    detail: 'Fast turnaround. Led to ongoing relationship.',
  },
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [activeImage, setActiveImage] = useState(study.heroImage || '');
  const hasImages = !!study.heroImage && !!study.samples;

  return (
    <div
      className={`overflow-hidden rounded-3xl border border-[#1A1A1A]/[0.12] bg-white shadow-[0_24px_60px_rgba(26,26,26,0.08)] transition-transform duration-500 ease-out sm:hover:rotate-0 ${
        index % 2 === 0 ? 'sm:rotate-[0.6deg]' : 'sm:-rotate-[0.6deg]'
      }`}
    >
      <div className={`grid grid-cols-1 ${hasImages ? 'lg:grid-cols-2' : ''} gap-0`}>
        {/* Content */}
        <div className="order-last flex flex-col justify-center p-8 lg:order-first lg:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className={`${mono} inline-flex -rotate-1 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-[#F7F5F0] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[#7C3AED]`}>
              <Target className="h-3 w-3" />
              {study.badge}
            </div>
            {study.price && (
              <span className={`${mono} text-sm font-semibold text-[#7C3AED]`}>{study.price}</span>
            )}
          </div>

          <h3 className="mb-6 text-2xl font-semibold tracking-tight text-[#1A1A1A]">{study.title}</h3>

          {study.detail && (
            <p className={`${serif} mb-4 text-base italic text-[#6B6459]`}>{study.detail}</p>
          )}

          <div className="space-y-4">
            <div>
              <h4 className={`${mono} mb-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>Goal</h4>
              <p className="text-sm leading-6 text-[#6B6459]">{study.goal}</p>
            </div>
            <div>
              <h4 className={`${mono} mb-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>Challenge</h4>
              <p className="text-sm leading-6 text-[#6B6459]">{study.challenge}</p>
            </div>
            <div>
              <h4 className={`${mono} mb-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#7C3AED]`}>Solution</h4>
              <p className="text-sm leading-6 text-[#6B6459]">{study.solution}</p>
            </div>
          </div>
        </div>

        {/* Images */}
        {hasImages && (
          <div className="flex flex-col bg-[#EDEBE6] p-6">
            <div className="mb-4 aspect-[4/3] animate-pulse overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-[#E4DFD5]">
              <img
                src={activeImage}
                alt={study.title}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                onLoad={(e) => e.currentTarget.parentElement?.classList.remove('animate-pulse')}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setActiveImage(study.heroImage!)}
                className={`aspect-square overflow-hidden rounded-xl border-2 bg-[#E4DFD5] transition-all ${activeImage === study.heroImage ? 'border-[#8B5CF6]' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={study.heroImage} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </button>
              {study.samples!.map((sample, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(sample)}
                  className={`aspect-square overflow-hidden rounded-xl border-2 bg-[#E4DFD5] transition-all ${activeImage === sample ? 'border-[#8B5CF6]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={sample} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* No-image placeholder for text-only case studies */}
        {!hasImages && (
          <div className="hidden" />
        )}
      </div>
    </div>
  );
}

const CaseStudiesPage = () => {
  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Case Studies — Real AI Photography Projects &amp; Results | Dezygn</title>
        <meta name="description" content="See how we create accurate, on-brand AI photography for e-commerce brands. Real projects, real results, real process — from jewelry to toys to eyewear." />
      </Helmet>

      <HeaderV4 />

      <main>
        {/* ============================================ */}
        {/* HERO */}
        {/* ============================================ */}
        <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:pt-40 md:pb-20">
          <span aria-hidden className={`${serif} pointer-events-none absolute -right-4 top-28 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
            ✳
          </span>
          <div className="mx-auto max-w-3xl text-center">
            <p className={`${mono} mb-6 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              Case Studies
            </p>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-6xl">
              Real Projects. <span className={`${serif} italic font-normal text-[#7C3AED]`}>Real Results.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6459]">
              See how we create accurate, on-brand AI photography for e-commerce brands. Every project starts with research, uses our Visual Syntax framework, and delivers commercial-grade imagery.
            </p>
          </div>
        </section>

        {/* ============================================ */}
        {/* STATS BAR */}
        {/* ============================================ */}
        <section className="relative overflow-hidden bg-[#1A1A1A] px-5 text-[#E8E4DB]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(232,228,219,0.06)_1px,transparent_1px)] [background-size:26px_26px]"
          />
          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-6 py-10 text-center md:grid-cols-3 md:gap-0">
            <div className="md:border-r md:border-[#E8E4DB]/10">
              <p className={`${serif} mb-1 text-4xl italic tracking-tight text-[#8B5CF6]`}>$2,000+</p>
              <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Largest single contract</p>
            </div>
            <div className="md:border-r md:border-[#E8E4DB]/10">
              <div className="mb-1 flex items-center justify-center gap-1">
                <span className={`${serif} text-4xl italic tracking-tight text-[#E8E4DB]`}>5</span>
                <Star className="h-6 w-6 fill-[#8B5CF6] text-[#8B5CF6]" />
              </div>
              <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Average rating on Upwork</p>
            </div>
            <div>
              <p className={`${serif} mb-1 text-4xl italic tracking-tight text-[#E8E4DB]`}>100%</p>
              <p className={`${mono} text-[11px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Client retention rate (repeat clients)</p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CASE STUDIES */}
        {/* ============================================ */}
        <section className="bg-[#F7F5F0] px-5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-10">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.id} study={study} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* THE PROCESS */}
        {/* ============================================ */}
        <section className="bg-[#EDEBE6] px-5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className={`${mono} mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
                The Process
              </p>
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-5xl">
                How Every Project Gets <span className={`${serif} italic font-normal`}>Done.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#6B6459] sm:text-base">
                Every case study follows the same proven process. This is what separates professional AI photography from prompt-guessing.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  num: '01',
                  icon: Search,
                  title: 'Brand DNA Extraction',
                  desc: 'Research the brand, their aesthetic, their market, and their competitors. Understand what "on-brand" means for this specific client.',
                },
                {
                  num: '02',
                  icon: Camera,
                  title: 'Asset Preparation',
                  desc: 'Gather product photos, reference images, and create measurement mappings. Build the foundation for accurate generation.',
                },
                {
                  num: '03',
                  icon: Layers,
                  title: 'Visual Syntax Blueprint',
                  desc: 'Apply the 6-ingredient framework to the brief. Define subject, environment, lighting, camera, style, and mood before touching AI.',
                },
                {
                  num: '04',
                  icon: Sparkles,
                  title: 'Generation & Iteration',
                  desc: 'May generate 100 images to get the right one. Each round is informed by the previous — systematically closing the gap between vision and output.',
                },
                {
                  num: '05',
                  icon: Eye,
                  title: 'Quality Check',
                  desc: 'Accuracy, realism, on-brand verification. Does the image represent the product faithfully? Would it pass in a real e-commerce listing?',
                },
                {
                  num: '06',
                  icon: Share2,
                  title: 'Client Delivery',
                  desc: 'Share via Dezygn\'s client portal with comparison mode and feedback tools. Professional handoff with watermark protection.',
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#8B5CF6] text-white">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className={`${mono} text-xs font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>Step {step.num}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold tracking-tight text-[#1A1A1A]">{step.title}</h3>
                  <p className="text-sm leading-6 text-[#6B6459]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* KEY TECHNIQUES */}
        {/* ============================================ */}
        <section className="bg-[#F7F5F0] px-5 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className={`${mono} mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
                Key Techniques
              </p>
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-5xl">
                What Sets This <span className={`${serif} italic font-normal`}>Apart.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#6B6459] sm:text-base">
                These are the techniques that make the difference between "AI-generated" and "commercially viable."
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Camera,
                  title: 'Image Transfer',
                  desc: 'When a product shape is too unique to describe in text, use real photos as AI input. The AI learns the shape from the reference image, then generates new compositions around it.',
                  example: 'Used for: Danish stepping stones (organic shapes impossible to describe), French eyewear (exact frame shape needed), jewelry (tiny pendant proportions).',
                },
                {
                  icon: Ruler,
                  title: 'Measurement Mapping',
                  desc: 'Converting real-world dimensions to AI-understandable descriptions. AI doesn\'t know what "45cm" means on a human body — but it understands "tight around neck base."',
                  example: 'Used for: Jewelry chains (40-80cm mapped to body positions), pendant sizes (2-6cm described relative to hands and neckline).',
                },
                {
                  icon: Globe,
                  title: 'Brand Environment Research',
                  desc: 'Hours of research into cultural and brand-specific aesthetics before generating a single image. Understanding the visual language of a market is what makes imagery feel authentic.',
                  example: 'Used for: Danish interiors (Douglas fir flooring, Nordic light), French retro aesthetic, Scandinavian design language.',
                },
              ].map((technique, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-[#1A1A1A]/[0.12] bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-[#1A1A1A] text-[#EDEBE6]">
                      <technique.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#1A1A1A]">{technique.title}</h3>
                      <p className="mb-4 text-sm leading-6 text-[#6B6459]">{technique.desc}</p>
                      <div className="rounded-2xl border border-[#8B5CF6]/15 bg-[#EEE8FF] p-4">
                        <p className={`${mono} text-xs leading-5 text-[#7C3AED]`}>{technique.example}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FINAL CTA */}
        {/* ============================================ */}
        <section className="bg-[#F7F5F0] px-5 pb-24 md:pb-32">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] sm:p-16">
            <span aria-hidden className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}>
              ✳
            </span>
            <span aria-hidden className={`${serif} absolute -bottom-12 -right-2 rotate-12 text-[180px] italic leading-none text-white/10`}>
              ✦
            </span>
            <h2 className="relative z-10 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Create Your Own <span className={`${serif} italic font-normal`}>Success Story.</span>
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Join the designers and brands using Dezygn to create commercial-grade AI photography.
            </p>
            <Link
              to="/pricing"
              className="group relative z-10 mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
            >
              Create Your Own Success Story
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className={`${mono} relative z-10 mt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/55`}>
              30-day money-back guarantee. Cancel anytime.
            </p>
          </div>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
};

export default CaseStudiesPage;
