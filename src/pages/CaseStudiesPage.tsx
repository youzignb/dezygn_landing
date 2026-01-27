import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, ChevronRight, Star, Search, Ruler, Globe, Layers, Eye, Camera, Sparkles, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderV3 from '../components/HeaderV3';
import FooterV3 from '../components/FooterV3';

interface CaseStudy {
  id: string;
  title: string;
  badge: string;
  badgeColor: 'purple' | 'blue' | 'green' | 'orange';
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
    badgeColor: 'purple',
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
    badgeColor: 'blue',
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
    badgeColor: 'green',
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
    badgeColor: 'orange',
    goal: 'Deliver fast, high-quality product photography for a large Danish e-commerce brand with a broad product catalog.',
    challenge: 'Large brands need imagery at scale and at speed. Traditional photography can\'t keep up with the pace of new product launches. The brand needed a reliable partner who could deliver commercial-grade imagery on tight timelines.',
    solution: 'Used Dezygn\'s brand import to capture the TrendHim aesthetic from their existing site. Generated product imagery matching their established visual language — consistent lighting, styling, and composition across multiple product categories.',
    price: '$400 project',
    detail: 'Fast turnaround. Led to ongoing relationship.',
  },
];

const BADGE_COLORS = {
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
  green: 'bg-green-500/10 border-green-500/20 text-green-300',
  orange: 'bg-orange-500/10 border-orange-500/20 text-orange-300',
};

const ICON_COLORS = {
  purple: 'text-purple-400',
  blue: 'text-blue-400',
  green: 'text-green-400',
  orange: 'text-orange-400',
};

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [activeImage, setActiveImage] = useState(study.heroImage || '');
  const hasImages = !!study.heroImage && !!study.samples;

  return (
    <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
      <div className={`grid grid-cols-1 ${hasImages ? 'lg:grid-cols-2' : ''} gap-0`}>
        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col justify-center order-last lg:order-first">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className={`inline-flex items-center gap-2 ${BADGE_COLORS[study.badgeColor]} rounded-full px-3 py-1 border text-xs font-medium`}>
              <Target className={`w-3 h-3 ${ICON_COLORS[study.badgeColor]}`} />
              {study.badge}
            </div>
            {study.price && (
              <span className="text-green-400 text-sm font-bold">{study.price}</span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-6">{study.title}</h3>

          {study.detail && (
            <p className="text-gray-300 text-sm mb-4 italic">{study.detail}</p>
          )}

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">Goal</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{study.goal}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">Challenge</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Solution</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{study.solution}</p>
            </div>
          </div>
        </div>

        {/* Images */}
        {hasImages && (
          <div className="bg-black/20 p-6 flex flex-col">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-black/30 animate-pulse">
              <img
                src={activeImage}
                alt={study.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onLoad={(e) => e.currentTarget.parentElement?.classList.remove('animate-pulse')}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setActiveImage(study.heroImage!)}
                className={`aspect-square rounded-md overflow-hidden border-2 transition-all bg-black/30 ${activeImage === study.heroImage ? 'border-purple-500' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={study.heroImage} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </button>
              {study.samples!.map((sample, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(sample)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-all bg-black/30 ${activeImage === sample ? 'border-purple-500' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={sample} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Helmet>
        <title>Case Studies — Real AI Photography Projects &amp; Results | Dezygn</title>
        <meta name="description" content="See how we create accurate, on-brand AI photography for e-commerce brands. Real projects, real results, real process — from jewelry to toys to eyewear." />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap');
      `}</style>

      <HeaderV3 />

      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            Case Studies
          </div>

          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-6">
            Real Projects.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              Real Results.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            See how we create accurate, on-brand AI photography for e-commerce brands. Every project starts with research, uses our Visual Syntax framework, and delivers commercial-grade imagery.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATS BAR */}
      {/* ============================================ */}
      <section className="relative bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center">
          <div className="md:border-r md:border-white/5">
            <p className="text-3xl font-black text-green-400 mb-1">$2,000+</p>
            <p className="text-gray-400 text-sm">Largest single contract</p>
          </div>
          <div className="md:border-r md:border-white/5">
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-3xl font-black text-white">5</span>
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-gray-400 text-sm">Average rating on Upwork</p>
          </div>
          <div>
            <p className="text-3xl font-black text-white mb-1">100%</p>
            <p className="text-gray-400 text-sm">Client retention rate (repeat clients)</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CASE STUDIES */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE PROCESS */}
      {/* ============================================ */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              The Process
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              How Every Project{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Gets Done
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every case study follows the same proven process. This is what separates professional AI photography from prompt-guessing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-gray-600 tracking-widest">STEP {step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* KEY TECHNIQUES */}
      {/* ============================================ */}
      <section className="relative bg-[#050507] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
              Key Techniques
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              What Sets This{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                Apart
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <technique.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{technique.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{technique.desc}</p>
                    <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-xl">
                      <p className="text-gray-300 text-xs leading-relaxed">{technique.example}</p>
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
      <section className="relative bg-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8">
            Create Your Own{' '}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
              Success Story
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Join the designers and brands using Dezygn to create commercial-grade AI photography.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group"
          >
            Create Your Own Success Story
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-gray-600 text-sm">30-day money-back guarantee. Cancel anytime.</p>
        </div>
      </section>

      <FooterV3 />
    </div>
  );
};

export default CaseStudiesPage;
