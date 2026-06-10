import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronDown,
  ClipboardCheck,
  Crop,
  Eraser,
  GalleryHorizontalEnd,
  Heart,
  Image as ImageIcon,
  Mail,
  Maximize2,
  MessageSquare,
  Scaling,
  Search,
  SlidersHorizontal,
  Wand2,
} from 'lucide-react';
import HeaderV4 from '../components/HeaderV4';
import FooterV4 from '../components/FooterV4';

/**
 * Dezygn v2 tokens (docs/v2-style-guide.md):
 * ink #1A1A1A · inkWarm #2B2B2B · paper #EDEBE6 · paperDeep #E4DFD5 · vellum #F7F5F0
 * text-on-dark #E8E4DB · muted-on-paper #6B6459 · dim #8B867B
 * accent #8B5CF6 · accentDeep #7C3AED
 * Landing-page voice: editorial paper-and-ink, purple as the only accent.
 */
const mono = "font-['IBM_Plex_Mono','SFMono-Regular',ui-monospace,monospace]";
const sans = "font-['Inter','Helvetica_Neue',ui-sans-serif,sans-serif]";
const serif = "font-['Instrument_Serif',Georgia,serif]";

const SIGNUP_URL = 'https://chat.dezygn.com/signup';
const HERO_DASHBOARD_IMAGE = '/assets/images/landing-v4/dezygn-dashboard-hero.png';
const OPPORTUNITIES_IMAGE = '/assets/images/landing-v4/opportunities-gigs.png';
const OUTREACH_IMAGE = '/assets/images/landing-v4/outreach-visuals.png';
const CONCEPTS_IMAGE = '/assets/images/landing-v4/align-before-generate.png';
const INGREDIENTS_IMAGE = '/assets/images/landing-v4/ingredients-assets.png';
const PRODUCT_PREP_IMAGE = '/assets/images/landing-v4/product-prep.png';
const RECIPES_IMAGE = '/assets/images/landing-v4/recipes-winning-prompts.png';
const COMPARISON_IMAGE = '/assets/images/landing-v4/comparison-side-by-side.png';
const COLLABORATE_AI_IMAGE = '/assets/images/landing-v4/collaborate-with-ai.png';
const GALLERY_IMAGE = '/assets/images/landing-v4/gallery-share-winners.png';
const FEEDBACK_IMAGE = '/assets/images/landing-v4/client-feedback.png';
const FOUNDER_IMAGE = '/assets/images/landing-v4/founder-bertrand.jpg';

const featureBlocks = [
  {
    eyebrow: 'Opportunities',
    headline: 'Find New Gigs Everyday.',
    body: 'See fresh AI photography jobs from Upwork inside your studio.',
    visual: 'Gigs table with budget and status',
    icon: Search,
    variant: 'table',
    image: OPPORTUNITIES_IMAGE,
    imageAlt: 'Dezygn opportunities dashboard showing AI photography gigs, application progress, and open opportunity cards',
  },
  {
    eyebrow: 'Outreach',
    headline: 'Send Visual Outreach At Scale.',
    body: 'Scan brands and create custom visuals for personalized prospect emails.',
    visual: 'Domains list mapped to email previews',
    icon: Mail,
    variant: 'email',
    image: OUTREACH_IMAGE,
    imageAlt: 'Dezygn outreach dashboard showing imported lead batches, production line, and AI-generated winner visuals',
  },
  {
    eyebrow: 'Concepts',
    headline: 'Align Before You Generate.',
    body: 'Share concepts with references so clients approve direction before production starts.',
    visual: 'Concept list with approval pills',
    icon: ClipboardCheck,
    variant: 'concepts',
    image: CONCEPTS_IMAGE,
    imageAlt: 'Dezygn concept alignment screen showing concept decisions, reference images, and client selection states',
  },
  {
    eyebrow: 'Ingredients',
    headline: 'Find Every Asset Fast.',
    body: 'Bulk-upload product shots, models, and backgrounds into searchable brand libraries.',
    visual: 'Asset grid with smart tags and search',
    icon: Boxes,
    variant: 'assets',
    image: INGREDIENTS_IMAGE,
    imageAlt: 'Dezygn ingredients library showing uploaded product assets, searchable tags, and an ingredient detail panel',
  },
  {
    eyebrow: 'Awa',
    headline: 'Collaborate With AI.',
    body: 'Work with Awa, your AI Creative Assistant trained in the skill of AI photography.',
    visual: 'Brief on the left, generated grid on the right',
    icon: Wand2,
    variant: 'awa',
    image: COLLABORATE_AI_IMAGE,
    imageAlt: 'Dezygn Awa workspace showing AI creative assistant guidance, generated frames, and prompt enhancement progress',
  },
  {
    eyebrow: 'Product Prep',
    headline: 'Prep Inputs Once.',
    body: 'Crop, remove backgrounds, and upscale assets before every generation.',
    visual: 'Before and after product cutout',
    icon: SlidersHorizontal,
    variant: 'split',
    image: PRODUCT_PREP_IMAGE,
    imageAlt: 'Dezygn product prep screen showing remove background controls for a fashion product image',
    visualStyle: 'prep',
  },
  {
    eyebrow: 'Recipes',
    headline: 'Reuse Winning Prompts.',
    body: 'Save prompts, models, ingredients, and parameters for recurring client work.',
    visual: 'Recipe cards with prompt, model, ingredients, and parameters',
    icon: GalleryHorizontalEnd,
    variant: 'recipes',
    image: RECIPES_IMAGE,
    imageAlt: 'Dezygn recipes screen showing reusable prompt templates, image inputs, guided settings, and generated fashion output',
  },
  {
    eyebrow: 'Comparison Mode',
    headline: 'Check Outputs Side By Side.',
    body: 'Compare AI results against source images before sending them to clients.',
    visual: 'Split view comparing source and output',
    icon: ImageIcon,
    variant: 'split',
    image: COMPARISON_IMAGE,
    imageAlt: 'Dezygn comparison mode showing a generated model result side by side with a product reference image',
  },
  {
    eyebrow: 'Gallery',
    headline: 'Select And Share Winners Faster.',
    body: 'Favorite your best shots and send to client for review in one click.',
    visual: 'Masonry grid with favorites and tags',
    icon: Heart,
    variant: 'gallery',
    image: GALLERY_IMAGE,
    imageAlt: 'Dezygn gallery showing selected favorite frames and a client share panel for review',
  },
  {
    eyebrow: 'Feedback',
    headline: 'Collect Client Feedback Efficiently.',
    body: 'No more Dropbox and emails. Everything is in one place.',
    visual: 'Image grid with comment thread',
    icon: MessageSquare,
    variant: 'feedback',
    image: FEEDBACK_IMAGE,
    imageAlt: 'Dezygn feedback review screen showing selected client visuals and client feedback notes in one workspace',
  },
] as const;

const faq = [
  {
    q: 'Is this just another image generator?',
    a: 'No. Dezygn includes generation, but the product is a studio OS for client work: assets, concepts, AI generation, QA, feedback, gallery, opportunities, and outreach.',
  },
  {
    q: 'Can my clients access Dezygn without a seat?',
    a: 'Yes. Clients can review concepts and final visuals through shared pages without needing a full studio seat.',
  },
  {
    q: 'Who owns the images?',
    a: 'You can use the images you create for client work. Plan and model-specific details should be reflected in the final terms copy before this page ships.',
  },
  {
    q: 'What models do you support?',
    a: 'Dezygn is model-agnostic and integrates leading SOTA image models inside one workflow. The model badge row is placeholder until final screenshots and naming are approved.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. The pricing section should link to the final billing terms before launch.',
  },
];

type FloatingNoteData = {
  icon?: typeof Search;
  title?: string;
  sub?: string;
  text?: string;
  tone?: 'ink' | 'accent' | 'green';
  className: string;
};

/** Little story-cards floated over each screenshot — the moment each feature is about. */
const floatingNotes: Record<string, FloatingNoteData[]> = {
  Opportunities: [
    { icon: Search, title: 'New gig · $1,200', sub: 'Posted 2h ago · Upwork', tone: 'accent', className: 'right-0 top-10 translate-x-3 -rotate-2 animate-float lg:translate-x-12' },
    { text: '✦ 12 matches this week', tone: 'accent', className: 'bottom-14 left-0 -translate-x-3 rotate-2 animate-float-reverse lg:-translate-x-10' },
  ],
  Outreach: [
    { icon: Mail, title: 'Reply received', sub: 'brand-b.com · 9:41 AM', className: 'left-0 top-12 -translate-x-3 rotate-2 animate-float-reverse lg:-translate-x-12' },
    { text: '847 visuals sent', className: 'bottom-12 right-0 translate-x-3 -rotate-2 animate-float lg:translate-x-10' },
  ],
  Concepts: [
    { icon: ClipboardCheck, title: 'Concept approved', sub: 'Warm kitchen scene', tone: 'green', className: 'right-0 top-12 translate-x-3 rotate-2 animate-float lg:translate-x-12' },
    { text: 'Direction locked ✓', tone: 'green', className: 'bottom-16 left-0 -translate-x-3 -rotate-2 animate-float-reverse lg:-translate-x-10' },
  ],
  Ingredients: [
    { text: 'Search: blue bottle flat lay', className: 'left-0 top-10 -translate-x-3 -rotate-2 animate-float lg:-translate-x-10' },
    { icon: Boxes, title: '248 assets tagged', sub: 'Skincare brand library', tone: 'accent', className: 'bottom-12 right-0 translate-x-3 rotate-2 animate-float-reverse lg:translate-x-12' },
  ],
  Awa: [
    { icon: Wand2, title: 'Awa is generating…', sub: '4 frames · Visual Syntax', tone: 'accent', className: 'right-0 top-12 translate-x-3 -rotate-2 animate-float lg:translate-x-12' },
    { text: 'Trained in AI photography', className: 'bottom-14 left-0 -translate-x-3 rotate-2 animate-float-reverse lg:-translate-x-10' },
  ],
  Recipes: [
    { icon: GalleryHorizontalEnd, title: 'Recipe saved', sub: 'Skincare monthly flat lay', className: 'right-0 top-12 translate-x-3 rotate-2 animate-float-reverse lg:translate-x-12' },
    { text: '✦ Reused 14 times', tone: 'accent', className: 'bottom-14 left-0 -translate-x-3 -rotate-2 animate-float lg:-translate-x-10' },
  ],
  'Comparison Mode': [
    { icon: ImageIcon, title: 'Pixel-perfect check', sub: 'Source vs output', className: 'right-0 top-12 translate-x-3 -rotate-2 animate-float lg:translate-x-12' },
    { text: 'Zoom 200%', className: 'bottom-14 left-0 -translate-x-3 rotate-2 animate-float-reverse lg:-translate-x-10' },
  ],
  Gallery: [
    { icon: Heart, title: '12 favorites', sub: 'Ready for review', tone: 'accent', className: 'left-0 top-12 -translate-x-3 rotate-2 animate-float lg:-translate-x-12' },
    { text: 'Share with clients', tone: 'accent', className: 'right-0 bottom-16 translate-x-3 -rotate-2 animate-float-reverse lg:translate-x-12' },
  ],
  Feedback: [
    { icon: MessageSquare, title: 'New comment', sub: 'Client · 2 min ago', className: 'left-0 top-12 -translate-x-3 rotate-2 animate-float-reverse lg:-translate-x-12' },
    { text: 'Approved via shared link ✓', tone: 'green', className: 'bottom-14 right-0 translate-x-3 -rotate-2 animate-float lg:translate-x-10' },
  ],
};

function FloatingNote({ note }: { note: FloatingNoteData }) {
  if (!note.icon) {
    const chipTone =
      note.tone === 'accent'
        ? 'border-[#7C3AED] bg-[#8B5CF6] text-white'
        : note.tone === 'green'
          ? 'border-[#1F6B3A]/25 bg-[#E3F0E6] text-[#1F6B3A]'
          : 'border-[#1A1A1A]/10 bg-white text-[#1A1A1A]';
    return (
      <div className={`${mono} absolute whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-medium shadow-[0_18px_44px_rgba(26,26,26,0.2)] ${chipTone} ${note.className}`}>
        {note.text}
      </div>
    );
  }

  const tile =
    note.tone === 'accent'
      ? 'bg-[#8B5CF6] text-white'
      : note.tone === 'green'
        ? 'bg-[#2F7D4F] text-white'
        : 'bg-[#1A1A1A] text-[#EDEBE6]';

  return (
    <div className={`absolute flex items-center gap-3 rounded-2xl border border-[#1A1A1A]/10 bg-white/95 p-3 pr-4 shadow-[0_18px_44px_rgba(26,26,26,0.18)] backdrop-blur-sm ${note.className}`}>
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${tile}`}>
        <note.icon className="h-4 w-4" />
      </span>
      <span className="whitespace-nowrap">
        <span className="block text-sm font-semibold leading-tight text-[#1A1A1A]">{note.title}</span>
        {note.sub ? <span className={`${mono} mt-0.5 block text-[9px] font-medium uppercase tracking-[0.1em] text-[#8B867B]`}>{note.sub}</span> : null}
      </span>
    </div>
  );
}

type VisualVariant =
  | 'dashboard'
  | 'mess'
  | 'assets'
  | 'concepts'
  | 'feedback'
  | 'split'
  | 'awa'
  | 'recipes'
  | 'gallery'
  | 'table'
  | 'email';

/** Fade-up reveal once the element scrolls into view. */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}

/** Sets the last word of a headline in italic serif — the editorial counterpoint to Inter. */
function EditorialTitle({ text }: { text: string }) {
  const clean = text.replace(/\.$/, '');
  const words = clean.split(' ');
  const last = words.pop();
  return (
    <>
      {words.join(' ')}{' '}
      <span className={`${serif} italic font-normal`}>{last}.</span>
    </>
  );
}

/** Shared matte frame so every screenshot on the page reads the same way. */
function ScreenshotFrame({
  children,
  tone = 'light',
}: {
  children: React.ReactNode;
  tone?: 'light' | 'dark';
}) {
  return (
    <div
      className={`rounded-2xl border p-1.5 sm:p-2 ${
        tone === 'dark'
          ? 'border-[#E8E4DB]/14 bg-[#2B2B2B] shadow-[0_40px_90px_rgba(0,0,0,0.42)]'
          : 'border-[#1A1A1A]/10 bg-white shadow-[0_24px_60px_rgba(26,26,26,0.12)]'
      }`}
    >
      <div className="overflow-hidden rounded-[10px]">{children}</div>
    </div>
  );
}

function PlaceholderVisual({
  label,
  variant = 'dashboard',
}: {
  label: string;
  variant?: VisualVariant;
}) {
  return (
    <ScreenshotFrame>
      <div className="bg-[#FBFAF7]">
        <div className="flex items-center justify-between border-b border-[#1A1A1A]/8 px-4 py-2.5">
          <span className={`${mono} text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Dezygn Studio</span>
          <span className={`${mono} text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Preview</span>
        </div>

        <div className="p-4 sm:p-5">
          {variant === 'mess' ? (
            <div className="grid min-h-[280px] gap-4 md:grid-cols-[1fr_44px_1fr]">
              <div className="grid content-center gap-3">
                {['Email thread', 'Cloud folder', 'Model UI', 'Prompt doc', 'Feedback screenshot'].map((item) => (
                  <div key={item} className="rounded-lg border border-[#1A1A1A]/10 bg-white px-4 py-3 text-sm font-medium text-[#6B6459]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="hidden items-center justify-center text-3xl text-[#8B867B] md:flex">→</div>
              <div className="grid content-center gap-3 rounded-lg border border-[#D8CCFF] bg-[#F0EAFF] p-4">
                <div className="h-8 rounded bg-white" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-20 rounded bg-[#DDD6FE]" />
                  <div className="h-20 rounded bg-[#C4B5FD]" />
                </div>
                <div className="h-12 rounded bg-white" />
              </div>
            </div>
          ) : variant === 'assets' ? (
            <div className="min-h-[280px] space-y-4">
              <div className="rounded-lg border border-[#1A1A1A]/10 bg-white px-4 py-3 text-sm text-[#6B6459]">Search: blue bottle flat lay</div>
              <div className="grid grid-cols-3 gap-3">
                {['Bottle front', 'Model outdoor', 'Flat lay', 'Logo', 'Texture', 'Background'].map((tag, index) => (
                  <div key={tag} className="aspect-[4/3] rounded-lg bg-[#EDEBE6] p-3">
                    <div className={`h-full rounded ${index % 3 === 0 ? 'bg-[#DDD6FE]' : index % 3 === 1 ? 'bg-[#E4DFD5]' : 'bg-[#D9D3C8]'}`} />
                    <span className={`${mono} mt-2 inline-flex rounded bg-white px-2 py-1 text-[10px] font-medium text-[#6B6459]`}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : variant === 'concepts' ? (
            <div className="min-h-[280px] space-y-3">
              {[
                ['Warm kitchen prep scene', 'Approved'],
                ['Studio hero on teal sweep', 'Needs changes'],
                ['UGC bathroom shelf shot', 'Approved'],
                ['Summer flat lay kit', 'Draft'],
              ].map(([title, status], index) => (
                <div key={title} className="grid grid-cols-[52px_1fr_auto] items-center gap-3 rounded-lg border border-[#1A1A1A]/10 bg-white p-3">
                  <div className={`h-12 rounded ${index % 3 === 0 ? 'bg-[#DDD6FE]' : index % 3 === 1 ? 'bg-[#E4DFD5]' : 'bg-[#D9D3C8]'}`} />
                  <span className="text-sm font-medium text-[#1A1A1A]">{title}</span>
                  <span
                    className={`${mono} rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] ${
                      status === 'Approved'
                        ? 'bg-[#E3F0E6] text-[#1F6B3A]'
                        : status === 'Needs changes'
                          ? 'bg-[#F6EFD9] text-[#86691A]'
                          : 'bg-[#EDEBE6] text-[#6B6459]'
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          ) : variant === 'feedback' ? (
            <div className="grid min-h-[280px] gap-3 md:grid-cols-[1fr_160px]">
              <div className="grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map((item) => (
                  <div key={item} className={`relative rounded-lg ${item % 2 ? 'bg-[#DDD6FE]' : 'bg-[#E4DFD5]'}`}>
                    <div className={`${mono} absolute right-3 top-3 rounded-full bg-white px-2 py-1 text-[10px] font-medium text-[#1A1A1A]`}>2</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 rounded-lg border border-[#1A1A1A]/10 bg-white p-3">
                <div className={`${mono} text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Comments</div>
                <div className="rounded bg-[#F7F5F0] p-3 text-xs leading-5 text-[#2B2B2B]">Can we make the background warmer?</div>
                <div className="rounded bg-[#E3F0E6] p-3 text-xs leading-5 text-[#1F6B3A]">Approved after that change.</div>
              </div>
            </div>
          ) : variant === 'split' ? (
            <div className="grid min-h-[280px] grid-cols-2 gap-3">
              <div className={`${mono} grid place-items-center rounded-lg bg-[#E4DFD5] text-xs font-medium uppercase tracking-[0.12em] text-[#6B6459]`}>Source</div>
              <div className={`${mono} grid place-items-center rounded-lg bg-[#DDD6FE] text-xs font-medium uppercase tracking-[0.12em] text-[#7C3AED]`}>Generated</div>
            </div>
          ) : variant === 'awa' ? (
            <div className="grid min-h-[280px] gap-4 md:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-lg border border-[#1A1A1A]/10 bg-white p-4">
                <div className={`${mono} mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Brief</div>
                <p className="text-sm leading-6 text-[#2B2B2B]">Summer flat lay for DTC skincare brand, UGC feel, clean bathroom light.</p>
                <div className={`${mono} mt-5 rounded-lg bg-[#F7F5F0] p-3 text-[10px] uppercase tracking-[0.08em] text-[#6B6459]`}>Visual Syntax generated</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map((item) => (
                  <div key={item} className={`${item % 2 ? 'bg-[#E4DFD5]' : 'bg-[#DDD6FE]'} rounded-lg`} />
                ))}
              </div>
            </div>
          ) : variant === 'recipes' ? (
            <div className="min-h-[280px] space-y-3">
              {['Skincare monthly flat lay', 'Founder UGC testimonial', 'Studio hero packshot'].map((recipe, index) => (
                <div key={recipe} className="rounded-lg border border-[#1A1A1A]/10 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-[#1A1A1A]">{recipe}</div>
                    <span className={`${mono} rounded-full bg-[#EEE8FF] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[#7C3AED]`}>Saved recipe</span>
                  </div>
                  <div className={`${mono} mt-3 grid grid-cols-3 gap-2 text-[10px] text-[#6B6459]`}>
                    <span className="rounded bg-[#F7F5F0] px-2 py-1">Model {index + 1}</span>
                    <span className="rounded bg-[#F7F5F0] px-2 py-1">4 images</span>
                    <span className="rounded bg-[#F7F5F0] px-2 py-1">Brand rules</span>
                  </div>
                </div>
              ))}
            </div>
          ) : variant === 'gallery' ? (
            <div className="grid min-h-[280px] grid-cols-3 gap-3">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <div key={item} className={`relative rounded-lg ${item % 3 === 0 ? 'bg-[#DDD6FE]' : item % 3 === 1 ? 'bg-[#E4DFD5]' : 'bg-[#D9D3C8]'}`}>
                  {item < 3 ? <Heart className="absolute right-3 top-3 h-4 w-4 fill-[#8B5CF6] text-[#8B5CF6]" /> : null}
                </div>
              ))}
            </div>
          ) : variant === 'table' ? (
            <div className="min-h-[280px] space-y-3">
              {['Product photography for skincare brand', 'AI lifestyle image set', 'Amazon listing hero images', 'UGC-style ad creative'].map((job, index) => (
                <div key={job} className="grid grid-cols-[1fr_82px_76px] items-center gap-3 rounded-lg border border-[#1A1A1A]/10 bg-white p-3 text-xs">
                  <span className="font-medium text-[#1A1A1A]">{job}</span>
                  <span className={`${mono} text-[#2B2B2B]`}>${[350, 750, 500, 1200][index]}</span>
                  <span className={`${mono} ${index < 2 ? 'text-[#7C3AED]' : 'text-[#8B867B]'}`}>{index < 2 ? 'New' : 'Saved'}</span>
                </div>
              ))}
            </div>
          ) : variant === 'email' ? (
            <div className="grid min-h-[280px] gap-3 md:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-2">
                {['brand-a.com', 'brand-b.com', 'brand-c.com', 'brand-d.com'].map((domain) => (
                  <div key={domain} className={`${mono} rounded-lg border border-[#1A1A1A]/10 bg-white px-3 py-2 text-xs text-[#2B2B2B]`}>{domain}</div>
                ))}
              </div>
              <div className="space-y-3 rounded-lg border border-[#1A1A1A]/10 bg-white p-4">
                <div className="h-8 rounded bg-[#F7F5F0]" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-20 rounded bg-[#DDD6FE]" />
                  <div className="h-20 rounded bg-[#E4DFD5]" />
                  <div className="h-20 rounded bg-[#D9D3C8]" />
                </div>
                <div className="h-16 rounded bg-[#F7F5F0]" />
              </div>
            </div>
          ) : (
            <div className="grid min-h-[280px] gap-3 md:grid-cols-[128px_1fr_128px]">
              <div className="space-y-2 rounded-lg border border-[#1A1A1A]/10 bg-white p-3">
                {['Brands', 'Campaigns', 'Concepts', 'Gallery', 'Outreach'].map((item, index) => (
                  <div key={item} className={`rounded-md px-2 py-2 text-xs ${index === 1 ? 'bg-[#EEE8FF] text-[#7C3AED]' : 'bg-[#F7F5F0] text-[#6B6459]'}`}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-[#DDD6FE]" />
                <div className="rounded-lg bg-[#E4DFD5]" />
                <div className="rounded-lg bg-[#D9D3C8]" />
                <div className="rounded-lg bg-[#EDEBE6]" />
              </div>
              <div className="space-y-3 rounded-lg border border-[#1A1A1A]/10 bg-white p-3">
                <div className="h-9 rounded bg-[#F7F5F0]" />
                <div className="h-16 rounded bg-[#F7F5F0]" />
                <div className="h-24 rounded bg-[#F7F5F0]" />
              </div>
            </div>
          )}
        </div>

        <div className={`${mono} border-t border-[#1A1A1A]/8 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>{label}</div>
      </div>
    </ScreenshotFrame>
  );
}

function HeroDashboardVisual() {
  const [failed, setFailed] = useState(false);

  const chips = [
    { text: '✓ Client approved', className: '-left-4 top-10 -rotate-6 animate-float', accent: false },
    { text: '2,678 frames', className: '-right-6 top-24 rotate-3 animate-float-reverse', accent: false },
    { text: '✦ 4 new gigs today', className: '-left-8 bottom-16 rotate-2 animate-float-reverse', accent: true },
  ];

  return (
    <div className="relative z-10 mx-auto mt-14 w-full max-w-[1240px] px-5 sm:px-8 lg:mt-20">
      <div className="relative">
        {failed ? (
          <PlaceholderVisual label="Add screenshot at /assets/images/landing-v4/dezygn-dashboard-hero.png" />
        ) : (
          <ScreenshotFrame tone="dark">
            <img
              src={HERO_DASHBOARD_IMAGE}
              alt="Dezygn dashboard showing brands, campaigns, gallery, feedback, opportunities, and outreach"
              className="block aspect-[16/9] w-full object-cover object-left-top"
              onError={() => setFailed(true)}
            />
          </ScreenshotFrame>
        )}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {chips.map((chip) => (
            <div
              key={chip.text}
              className={`${mono} absolute rounded-full border px-4 py-2.5 text-xs font-medium shadow-[0_18px_44px_rgba(26,26,26,0.22)] ${
                chip.accent
                  ? 'border-[#7C3AED] bg-[#8B5CF6] text-white'
                  : 'border-[#1A1A1A]/10 bg-white text-[#1A1A1A]'
              } ${chip.className}`}
            >
              {chip.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarqueeBand() {
  const items = ['Find Clients', 'Get Work', 'Deliver Faster', 'AI Photography', 'Concepts', 'Outreach', 'Recipes', 'Gallery'];
  const row = items.map((item) => `${item} ✦ `).join('');

  return (
    <section aria-hidden className="overflow-hidden bg-[#F7F5F0] py-10">
      <div className="-mx-4 -rotate-[1.5deg] bg-[#8B5CF6] py-3.5 shadow-[0_18px_44px_rgba(124,58,237,0.25)]">
        <div className="flex w-max animate-[scroll_36s_linear_infinite]">
          {[0, 1].map((copy) => (
            <span key={copy} className={`${mono} whitespace-nowrap pr-2 text-sm font-medium uppercase tracking-[0.2em] text-white`}>
              {row}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SimpleHeader({
  title,
  body,
  eyebrow,
  inverse = false,
}: {
  title: string;
  body?: string;
  eyebrow?: string;
  inverse?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p
          className={`${mono} mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] ${
            inverse ? 'border-[#E8E4DB]/20 bg-[#2B2B2B] text-[#8B5CF6]' : 'border-[#1A1A1A]/10 bg-white text-[#7C3AED] shadow-sm'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl ${inverse ? 'text-[#E8E4DB]' : 'text-[#1A1A1A]'}`}>
        <EditorialTitle text={title} />
      </h2>
      {body ? (
        <p className={`mx-auto mt-5 max-w-xl text-[15px] leading-7 sm:text-base ${inverse ? 'text-[#E8E4DB]/65' : 'text-[#6B6459]'}`}>{body}</p>
      ) : null}
    </div>
  );
}

function ProductPrepVisual({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  const cards = [
    {
      label: 'Crop',
      icon: Crop,
      accent: false,
      className: 'left-0 top-1/2 -translate-y-1/2 -translate-x-2 -rotate-3 animate-float sm:-translate-x-10',
    },
    {
      label: 'Remove background',
      icon: Eraser,
      accent: true,
      className: 'right-0 top-8 translate-x-2 rotate-2 animate-float-reverse sm:translate-x-10',
    },
    {
      label: 'Upscale',
      icon: Maximize2,
      accent: false,
      className: 'bottom-10 left-6 rotate-1 animate-float-reverse sm:left-14',
    },
    {
      label: 'Resize',
      icon: Scaling,
      accent: false,
      className: 'bottom-12 right-0 translate-x-1 -rotate-2 animate-float sm:translate-x-6',
    },
  ];

  return (
    <div className="relative mx-auto max-w-3xl">
      <ScreenshotFrame>
        <img src={image} alt={alt} className="block w-full object-cover object-left-top" />
      </ScreenshotFrame>
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {cards.map((card) => (
          <div
            key={card.label}
            className={`absolute flex items-center gap-3 rounded-2xl border border-[#1A1A1A]/10 bg-white/95 p-3 pr-4 shadow-[0_18px_44px_rgba(26,26,26,0.18)] backdrop-blur-sm ${card.className}`}
          >
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
                card.accent ? 'bg-[#8B5CF6] text-white' : 'bg-[#1A1A1A] text-[#EDEBE6]'
              }`}
            >
              <card.icon className="h-4 w-4" />
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-[#1A1A1A]">{card.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:hidden">
        {cards.map((card) => (
          <div key={card.label} className="flex items-center gap-2.5 rounded-xl border border-[#1A1A1A]/10 bg-white px-3 py-2.5">
            <span
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-md ${
                card.accent ? 'bg-[#8B5CF6] text-white' : 'bg-[#1A1A1A] text-[#EDEBE6]'
              }`}
            >
              <card.icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[13px] font-semibold text-[#1A1A1A]">{card.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductShowcase({
  block,
  index,
  tinted = false,
}: {
  block: (typeof featureBlocks)[number];
  index: number;
  tinted?: boolean;
}) {
  const number = String(index + 1).padStart(2, '0');
  const isPrep = 'visualStyle' in block && block.visualStyle === 'prep';
  const tilt = isPrep ? '' : index % 2 === 0 ? 'sm:rotate-[1.2deg] sm:hover:rotate-0' : 'sm:-rotate-[1.2deg] sm:hover:rotate-0';
  const notes = floatingNotes[block.eyebrow];
  const fallbackVisual = block as { visual: string; variant: VisualVariant };

  return (
    <section className={`relative overflow-hidden px-5 py-20 sm:py-28 ${tinted ? 'bg-[#EDEBE6]' : 'bg-[#F7F5F0]'}`}>
      <div
        aria-hidden
        className={`${mono} pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 select-none text-[120px] font-medium leading-none text-[#1A1A1A]/[0.05] sm:text-[200px]`}
      >
        {number}
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="pt-10 sm:pt-16">
            <SimpleHeader eyebrow={`${number} · ${block.eyebrow}`} title={block.headline} body={block.body} />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className={`mx-auto mt-12 max-w-5xl transition-transform duration-500 ease-out ${tilt}`}>
            <div className="relative">
              {isPrep && 'image' in block && block.image ? (
                <ProductPrepVisual image={block.image} alt={block.imageAlt} />
              ) : 'image' in block && block.image ? (
                <ScreenshotFrame>
                  <img src={block.image} alt={block.imageAlt} className="block w-full object-cover object-left-top" />
                </ScreenshotFrame>
              ) : (
                <PlaceholderVisual label={fallbackVisual.visual} variant={fallbackVisual.variant} />
              )}
              {notes ? (
                <div className="pointer-events-none absolute inset-0 hidden md:block">
                  {notes.map((note) => (
                    <FloatingNote key={note.text ?? note.title} note={note} />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  compareAt?: string;
  suffix: string;
  credits: string;
  output: string;
  scale: string;
  badge: string | null;
  savings?: string;
  features: string[];
};

function PricingSection() {
  const plans: Plan[] = [
    {
      name: 'Agency',
      subtitle: 'For agencies scaling production and systems.',
      price: '$99',
      compareAt: '$149',
      suffix: '/mo',
      credits: '2,500 credits/month',
      output: '~1,250 Nano Banana or ~625 Nano Banana Pro images',
      scale: 'Enough for 3-4 clients/month',
      badge: 'Most popular',
      savings: 'Save 34%',
      features: ['Unlimited use of Awa AI Creative Director', 'Course, community, and business resources', 'Free founder strategy call (1-on-1 setup + guidance)', 'Priority access to new features'],
    },
    {
      name: 'Studio',
      subtitle: 'For high-volume studios and production teams.',
      price: '$399',
      suffix: '/mo',
      credits: '10,000 credits/month',
      output: '~5,000 Nano Banana or ~2,500 Nano Banana Pro images',
      scale: 'Unlimited scale — 7+ clients/month',
      badge: null,
      features: ['Unlimited use of Awa AI Creative Director', 'Course, community, and business resources', 'Free founder strategy call (1-on-1 setup + guidance)', 'Priority access to new features', 'Dedicated onboarding & support'],
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#F7F5F0] px-5 py-20 sm:py-28">
      <span aria-hidden className={`${serif} pointer-events-none absolute -left-6 top-20 hidden -rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
        ✦
      </span>
      <Reveal>
        <SimpleHeader
          eyebrow="Pricing"
          title="Choose Your Plan."
          body="Scale from client-ready AI photography to a full production studio."
        />
      </Reveal>
      <div className="mx-auto mt-16 grid max-w-5xl items-stretch gap-6 lg:grid-cols-2">
        {plans.map((plan, index) => {
          const featured = plan.name === 'Agency';
          return (
            <Reveal key={plan.name} delay={index * 110} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-transform duration-500 ease-out sm:p-10 sm:hover:rotate-0 ${
                  featured
                    ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#E8E4DB] shadow-[0_32px_80px_rgba(26,26,26,0.28)] sm:-rotate-1'
                    : 'border-[#1A1A1A]/12 bg-white sm:rotate-1'
                }`}
              >
                {plan.badge ? (
                  <div className={`${mono} absolute -top-4 right-8 rotate-3 rounded-full bg-[#8B5CF6] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white shadow-md`}>
                    {plan.badge}
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-3xl font-semibold tracking-tight ${featured ? 'text-[#E8E4DB]' : 'text-[#1A1A1A]'}`}>{plan.name}</h3>
                    <p className={`mt-2 text-sm ${featured ? 'text-[#E8E4DB]/60' : 'text-[#6B6459]'}`}>{plan.subtitle}</p>
                  </div>
                  {plan.savings ? (
                    <span className={`${mono} -rotate-2 whitespace-nowrap rounded-full border border-[#7C3AED]/40 bg-[#8B5CF6]/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] ${featured ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
                      ✦ {plan.savings}
                    </span>
                  ) : null}
                </div>

                <div className="mt-10 flex flex-wrap items-baseline gap-x-3">
                  {plan.compareAt ? (
                    <span className={`${mono} text-xl line-through ${featured ? 'text-[#8B867B]' : 'text-[#8B867B]'}`}>{plan.compareAt}</span>
                  ) : null}
                  <span className={`${serif} text-7xl italic tracking-tight ${featured ? 'text-[#E8E4DB]' : 'text-[#1A1A1A]'}`}>{plan.price}</span>
                  <span className={`${mono} text-sm ${featured ? 'text-[#E8E4DB]/60' : 'text-[#6B6459]'}`}>{plan.suffix}</span>
                </div>

                <div className={`mt-8 rounded-2xl border p-5 ${featured ? 'border-[#E8E4DB]/14 bg-[#2B2B2B]' : 'border-[#1A1A1A]/10 bg-[#F7F5F0]'}`}>
                  <p className={`text-lg font-semibold ${featured ? 'text-[#E8E4DB]' : 'text-[#1A1A1A]'}`}>{plan.credits}</p>
                  <p className={`${mono} mt-2 text-[11px] leading-5 ${featured ? 'text-[#8B867B]' : 'text-[#6B6459]'}`}>{plan.output}</p>
                  <p className={`${mono} mt-1.5 text-[11px] leading-5 ${featured ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>✦ {plan.scale}</p>
                </div>

                <p className={`${mono} mt-8 text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>Includes</p>
                <ul className="mt-3 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-3 text-[15px] leading-6 ${featured ? 'text-[#E8E4DB]/85' : 'text-[#2B2B2B]'}`}>
                      <Check className={`mt-1 h-4 w-4 shrink-0 ${featured ? 'text-[#8B5CF6]' : 'text-[#7C3AED]'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={SIGNUP_URL}
                  className={`mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${
                    featured
                      ? 'bg-[#8B5CF6] text-white hover:bg-[#7C3AED]'
                      : 'border border-[#1A1A1A]/16 text-[#1A1A1A] hover:bg-[#EDEBE6]'
                  }`}
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] px-5 py-20 text-[#E8E4DB] sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(232,228,219,0.06)_1px,transparent_1px)] [background-size:26px_26px]"
      />
      <span aria-hidden className={`${serif} absolute -right-4 top-16 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/20 lg:block`}>
        ✳
      </span>
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
        <Reveal>
          <div className="mx-auto w-fit lg:mx-0 lg:pt-2">
            {/* Polaroid-style mount, same matte language as the screenshots. */}
            <div className="-rotate-2 rounded-2xl border border-[#E8E4DB]/14 bg-white p-2.5 pb-0 shadow-[0_32px_80px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out hover:rotate-0">
              <img
                src={FOUNDER_IMAGE}
                alt="Bertrand, founder of Dezygn"
                className="block aspect-[4/5] w-60 rounded-[10px] object-cover sm:w-72"
              />
              <p className={`${mono} px-1 py-3.5 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-[#6B6459]`}>
                Bertrand ✦ Founder, Dezygn
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#E8E4DB]/20 bg-[#2B2B2B] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8B5CF6]`}>
              A word from the founder
            </p>
            <div className="mt-8 space-y-6">
              <p className="text-2xl font-medium leading-snug text-[#E8E4DB] sm:text-3xl">
                I created Dezygn because none of the other platforms understood what it takes to create and deliver{' '}
                <span className={`${serif} font-normal italic text-[#8B5CF6]`}>client-ready AI photography.</span>
              </p>
              <p className="text-lg leading-8 text-[#E8E4DB]/70">
                It is important to create pretty visuals, but it is just as important for us as freelancers to find new
                projects, send proposals, do outreach, and collect quality client feedback that we can iterate on.
              </p>
              <p className="text-lg leading-8 text-[#E8E4DB]/70">
                This is how Dezygn was molded: not as another AI photography tool or a wrapper for Nano Banana, but as
                the ultimate AI creative director OS that will be with you at every step of the way, from getting your
                first clients to serving your 100th.
              </p>
            </div>
            <div className="mt-10 border-t border-[#E8E4DB]/10 pt-8">
              <p className="text-lg font-medium text-[#E8E4DB]/80">Welcome to Dezygn,</p>
              <p className={`${serif} mt-3 inline-block -rotate-2 text-5xl italic text-[#8B5CF6]`}>Bertrand</p>
              <p className={`${mono} mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8B867B]`}>
                Founder of Dezygn
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Email-capture lead magnet — posts to the existing Supabase lead-magnet-capture function. */
function LeadMagnetSection() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      if (!supabaseUrl || !supabaseAnonKey) throw new Error('Missing Supabase environment variables.');

      const response = await fetch(`${supabaseUrl}/functions/v1/lead-magnet-capture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${supabaseAnonKey}`,
          apikey: supabaseAnonKey,
        },
        body: JSON.stringify({ name, email, lead_magnet: 'visual_syntax_cheatsheet' }),
      });
      if (!response.ok) throw new Error('Request failed');
      navigate('/cheatsheet');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="cheatsheet" className="relative overflow-hidden bg-[#EDEBE6] px-5 py-20 sm:py-28">
      <span aria-hidden className={`${serif} pointer-events-none absolute -right-4 top-12 hidden rotate-12 text-[120px] italic leading-none text-[#8B5CF6]/15 lg:block`}>
        ✦
      </span>
      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div>
            <p className={`${mono} inline-flex -rotate-2 items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#7C3AED] shadow-sm`}>
              Free download
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-5xl">
              Steal the Visual Syntax <span className={`${serif} italic font-normal`}>Cheatsheet.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#6B6459] sm:text-base">
              Every client-ready AI photo is built from the same 6 ingredients: Style, Subject, Action, Scene, Camera,
              and Brand. This one-page cheatsheet is the framework we use on real client work at Fairway Creatives —
              so you stop gambling with prompts and start engineering images.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'The 6 ingredients, with examples for each',
                'When to use words vs reference images (multimodal anchoring)',
                'Why ingredient order changes your output',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-[#2B2B2B]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#7C3AED]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rotate-1 rounded-3xl border border-[#1A1A1A]/12 bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.12)] transition-transform duration-500 ease-out hover:rotate-0 sm:p-10">
            <form onSubmit={handleSubmit} className="grid gap-4">
                <p className={`${mono} text-[10px] font-medium uppercase tracking-[0.12em] text-[#8B867B]`}>
                  Get the cheatsheet
                </p>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="First name"
                  className="h-12 rounded-xl border border-[#1A1A1A]/12 bg-[#F7F5F0] px-4 text-[15px] text-[#1A1A1A] placeholder:text-[#8B867B] focus:border-[#8B5CF6] focus:outline-none"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="h-12 rounded-xl border border-[#1A1A1A]/12 bg-[#F7F5F0] px-4 text-[15px] text-[#1A1A1A] placeholder:text-[#8B867B] focus:border-[#8B5CF6] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 text-sm font-semibold text-[#EDEBE6] transition hover:bg-black disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Me the Cheatsheet'}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {status === 'error' ? (
                  <p className="text-sm text-[#B3261E]">Something went wrong. Please try again.</p>
                ) : (
                  <p className={`${mono} text-[10px] leading-4 text-[#8B867B]`}>No spam. Unsubscribe anytime.</p>
                )}
              </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const LandingPageV4 = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className={`${sans} min-h-screen bg-[#F7F5F0] text-[#1A1A1A] antialiased selection:bg-[#8B5CF6]/25`}>
      <Helmet>
        <title>Dezygn - AI creative studio dashboard for freelancers and agencies</title>
        <meta
          name="description"
          content="Centralize assets, concepts, AI generation, client feedback, and outreach so AI creative freelancers and agencies ship better work in half the time."
        />
      </Helmet>

      <HeaderV4 />

      <main>
        <section className="relative isolate overflow-hidden bg-[#1A1A1A] pb-16 pt-32 text-[#E8E4DB] sm:pb-20 sm:pt-40">
          <div
            aria-hidden
            className="absolute inset-0 [background-image:radial-gradient(rgba(232,228,219,0.07)_1px,transparent_1px)] [background-size:26px_26px]"
          />
          <span aria-hidden className={`${serif} absolute -right-6 top-28 hidden rotate-12 text-[140px] italic leading-none text-[#8B5CF6]/25 lg:block`}>
            ✳
          </span>
          <span aria-hidden className={`${serif} absolute left-10 top-64 hidden -rotate-12 text-[64px] italic leading-none text-[#E8E4DB]/15 lg:block`}>
            ✦
          </span>
          {/* Layered paper diagonal: a sliver of paperDeep behind vellum gives the edge depth without decoration. */}
          <div className="absolute inset-x-0 bottom-0 h-[340px] bg-[#E4DFD5] [clip-path:polygon(0_60%,100%_28%,100%_100%,0_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[340px] bg-[#F7F5F0] [clip-path:polygon(0_66%,100%_34%,100%_100%,0_100%)]" />
          <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
            <p className={`${mono} inline-flex items-center gap-2.5 rounded-full border border-[#E8E4DB]/20 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#E8E4DB]/75`}>
              <span className="text-[#8B5CF6]">✦</span>
              The AI Photography Studio OS
            </p>
            <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#E8E4DB] sm:text-7xl lg:text-8xl">
              Deliver AI Photography{' '}
              <span className={`${serif} font-normal italic text-[#8B5CF6]`}>Faster.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#E8E4DB]/65 sm:text-xl">
              Dezygn helps creatives find clients, get work, and deliver faster.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={SIGNUP_URL}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 text-[15px] font-semibold text-white transition hover:bg-[#7C3AED]"
              >
                Start Free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#flows" className="text-[15px] font-medium text-[#E8E4DB]/75 underline-offset-4 transition hover:text-[#E8E4DB] hover:underline">
                Watch a 2-minute walkthrough
              </a>
            </div>
            <p className={`${mono} mt-5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#E8E4DB]/45`}>
              Free plan · 50 credits · No card required
            </p>
          </div>
          <HeroDashboardVisual />
        </section>

        <MarqueeBand />

        <div id="flows">
          {featureBlocks.map((block, index) => (
            <ProductShowcase key={block.eyebrow} block={block} index={index} tinted={index % 2 === 1} />
          ))}
        </div>

        <PricingSection />

        <section className="bg-[#EDEBE6] px-5 py-20 sm:py-28">
          <Reveal>
            <SimpleHeader title="Questions Creatives Ask." />
          </Reveal>
          <div className="mx-auto mt-14 max-w-3xl divide-y divide-[#1A1A1A]/12 border-y border-[#1A1A1A]/12">
            {faq.map((item, index) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
                className="block w-full py-6 text-left"
              >
                <span className="flex items-center justify-between gap-6">
                  <span className="flex items-baseline gap-4">
                    <span className={`${mono} text-xs font-medium text-[#7C3AED]`}>{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-[17px] font-semibold text-[#1A1A1A] sm:text-lg">{item.q}</span>
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#8B867B] transition ${openFaq === index ? 'rotate-180' : ''}`} />
                </span>
                {openFaq === index ? <span className="mt-4 block max-w-2xl pl-9 leading-7 text-[#6B6459]">{item.a}</span> : null}
              </button>
            ))}
          </div>
        </section>

        <FounderSection />

        <LeadMagnetSection />

        <section className="bg-[#F7F5F0] px-5 py-20 sm:py-28">
          <Reveal>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#7C3AED] p-10 text-center text-white shadow-[0_40px_100px_rgba(124,58,237,0.35)] sm:p-20">
              <span aria-hidden className={`${serif} absolute -left-4 -top-8 rotate-[-12deg] text-[160px] italic leading-none text-white/10`}>
                ✳
              </span>
              <span aria-hidden className={`${serif} absolute -bottom-12 -right-2 rotate-12 text-[180px] italic leading-none text-white/10`}>
                ✦
              </span>
              <h2 className="relative z-10 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                Deliver <span className={`${serif} font-normal italic`}>Faster.</span>
              </h2>
              <p className="relative z-10 mx-auto mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                Run your next AI photography project from one connected dashboard.
              </p>
              <a
                href={SIGNUP_URL}
                className="relative z-10 mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-9 text-[15px] font-semibold text-[#EDEBE6] transition hover:bg-black"
              >
                Start Free
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <FooterV4 />
    </div>
  );
};

export default LandingPageV4;
