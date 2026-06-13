import { generatedHelpArticles } from './help-content.generated';
/**
 * Dezygn Help Center content — data-driven, like every other src/data file.
 * Pages are dumb renderers; rewrite/expand articles here without touching layout.
 *
 * Article truth comes from the product repo (dezygn-v3/docs, dashboard branded v2),
 * the landing feature pages, and Bertrand's recorded platform tour (2026-06).
 * Screenshots are the homepage product shots in /assets/images/landing-v4/.
 * URL shape: /help/:slug (slugs are globally unique).
 */

export type HelpBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'steps'; items: string[] }
  | { type: 'callout'; variant: 'tip' | 'note' | 'warning'; text: string }
  | { type: 'img'; src: string; alt: string; caption?: string };

export interface HelpArticle {
  slug: string;
  title: string;
  /** One-liner used for meta description, search, and index cards. */
  description: string;
  updatedAt: string;
  blocks: HelpBlock[];
  /** Slugs of related articles, rendered at the end of the article. */
  related?: string[];
}

export interface HelpCategory {
  /** Category id — intentionally not named `slug` so generate-sitemap.mjs only picks up article slugs. */
  id: string;
  title: string;
  description: string;
  articles: HelpArticle[];
}

const IMG = '/assets/images/landing-v4';

export const helpCategories: HelpCategory[] = [
  // ──────────────────────────────────────────────
  // GETTING STARTED
  // ──────────────────────────────────────────────
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'What Dezygn is, how to create an account, and your first image.',
    articles: [
      {
        slug: 'what-is-dezygn',
        title: 'What is Dezygn?',
        description:
          'Dezygn is the AI Photography Studio OS — win clients, produce client-ready visuals, and close feedback loops in one place.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Dezygn is not just an image generator. It is the full production pipeline for AI photography work: from prospecting new clients, to creating visuals with Awa (a conversational AI creative director), to collecting structured client feedback and iterating until the work is approved. It replaces the fragmented stack — Photoshop + email + Google Drive + feedback spreadsheets — with one loop.',
          },
          {
            type: 'p',
            text: 'It was built as the in-house production tool for Fairway Creatives, an agency that delivers AI e-commerce photography and ad creatives to DTC brands every day. Dezygn is both the product and the tool we use on real client work.',
          },
          { type: 'h2', text: 'The full loop' },
          {
            type: 'ul',
            items: [
              'Win clients — Outreach Factory turns lead lists into personalized proof-of-work visuals, and Opportunities gives you a daily feed of AI photography jobs from Upwork.',
              'Create — chat with Awa inside a campaign workspace. Awa writes optimized prompts, generates and edits images, critiques quality, and iterates with you.',
              'Review — curate results on the canvas and in the gallery: star favorites, compare versions, upscale, and export.',
              'Share & get feedback — send clients a clean review page where they decide on each image. Feedback flows back into your workspace so you can revise and re-share until approved.',
            ],
          },
          {
            type: 'callout',
            variant: 'note',
            text: 'This help center covers the new Dezygn interface (v2). You can switch between the old and new interface at any time from the bottom-left of the app — "Try v2" in the old version, "Switch to v1" in the new one. If a screenshot here looks different from what you see, check which version you are in.',
          },
        ],
        related: ['create-your-account', 'dashboard-tour', 'your-first-image'],
      },
      {
        slug: 'create-your-account',
        title: 'Create your free account',
        description: 'Sign up free with 50 credits — no credit card required.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Every Dezygn account starts on the free plan: 50 credits, no card required. That is enough to generate your first set of images and test the full workflow before paying anything.',
          },
          { type: 'h2', text: 'Sign up' },
          {
            type: 'steps',
            items: [
              'Go to chat.dezygn.com/signup.',
              'Create your account with your email.',
              'You land in the dashboard with 50 free credits already in your balance.',
            ],
          },
          {
            type: 'p',
            text: 'Credits are what image and video generation cost. Different models cost different amounts — see the credits article for the exact numbers. Your current credit balance is always visible in the bottom-right of the campaign workspace.',
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'If you bought Dezygn through a partner deal and received license keys by email, activate them at chat.dezygn.com/activation.',
          },
        ],
        related: ['credits', 'plans-and-billing', 'your-first-image'],
      },
      {
        slug: 'dashboard-tour',
        title: 'A tour of the dashboard',
        description: 'The home screen, sidebar, recent chats, and account menu — how the new interface is organized.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'The dashboard is built around a collapsible left sidebar and a visual home screen. Everything you produce lives under a Brand (the client) and a Campaign (the specific shoot or deliverable), and the navigation follows that structure.',
          },
          {
            type: 'img',
            src: `${IMG}/dezygn-dashboard-hero.png`,
            alt: 'The Dezygn dashboard with the sidebar, campaign workspace, and creative canvas',
            caption: 'The new interface: sidebar on the left, your work front and center.',
          },
          { type: 'h2', text: 'Home' },
          {
            type: 'p',
            text: 'Home is a summary of every other tab, in one glance. At the top is the Favorites section — your latest starred images across all campaigns, your best work in one strip. Below it: the action queue (the latest client feedback waiting on you, tied to the Feedback page), your recently opened campaigns, and your brands. Each section is a shortcut into the matching sidebar tab.',
          },
          { type: 'h2', text: 'The sidebar' },
          {
            type: 'ul',
            items: [
              'Brands — every client you work with, with image-led cards and quick actions.',
              'Gallery — every image you have generated, in a mosaic grid with filters.',
              'Feedback — your global review inbox for client feedback and concept approvals.',
              'Concepts — brand-level concept review rounds.',
              'Opportunities — the Upwork job feed for AI photography work.',
              'Outreach — the Outreach Factory batch workflow for cold outreach visuals.',
              'Recent chats — your latest campaign conversations. Star a campaign and it pins to the top of the sidebar, so the clients you are actively working with are always one click away. The sidebar collapses from the logo.',
            ],
          },
          { type: 'h2', text: 'Account menu' },
          {
            type: 'p',
            text: 'The account menu (top right) shows your signed-in email and holds Settings, Logout, and the switch between the new interface and legacy v1. A notification bell next to it opens a quick feedback inbox from anywhere.',
          },
        ],
        related: ['brands', 'gallery', 'feedback-inbox'],
      },
      {
        slug: 'your-first-image',
        title: 'Generate your first image',
        description: 'From a blank account to a client-ready product shot: brand, campaign, ingredient, Awa.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'The fastest way to understand Dezygn is to ship one image. The workflow is always the same: create a brand, open a campaign, give Awa your real product photo, and describe the shot you want.',
          },
          {
            type: 'steps',
            items: [
              'Create a brand for the client (or your own brand) from the Brands page.',
              'Open a campaign inside that brand — this is your workspace with chat, canvas, ingredients, and notes.',
              'Go to the Ingredients tab and upload a real photo of the product. This is the single most important step: the AI does not know what your product looks like until you show it.',
              'Back in chat, attach the product ingredient and tell Awa what you want — for example: "Clean studio packshot of this bottle on a stone pedestal, soft daylight, 85mm."',
              'Awa writes the structured prompt, generates the image, and streams it into the canvas. Reply to iterate: "warmer light", "tighter crop", "put it on a marble bathroom counter."',
              'When you hit a keeper, star it. Out of 10 generations, expect to keep about 2 — that ratio is normal for professional work, and favorites are how you find the keepers later.',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Accuracy beats speed. Always generate from a real product photo, never from a text description of the product — in e-commerce, "close enough" is a refund.',
          },
        ],
        related: ['ingredients-library', 'chatting-with-awa', 'composer-and-models'],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // BRANDS & CAMPAIGNS
  // ──────────────────────────────────────────────
  {
    id: 'brands-campaigns',
    title: 'Brands & Campaigns',
    description: 'How work is organized: brands are clients, campaigns are shoots.',
    articles: [
      {
        slug: 'brands',
        title: 'Working with brands',
        description: 'Brands are your clients — they store visual identity, products, and every campaign you run for them.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'A brand in Dezygn represents one client (or your own company). It stores their visual preferences, logos, colors, and style direction, plus all the ingredients and campaigns that belong to them. Set a brand up once, and every future generation for that client speaks their visual language.',
          },
          { type: 'h2', text: 'The Brands page' },
          {
            type: 'ul',
            items: [
              'Two views: grid (three to four brands per row) and list (one brand per row, bigger cards). With a short client list, the list view is easier to work with.',
              'Card thumbnails are favorites-first — the top image on a brand card is usually one of your starred shots, not just the most recent generation. Another reason to favorite your keepers.',
              'Brands sort by latest used by default; hit Sort A in the top right for alphabetical order.',
              'From a card you can jump to the Gallery scoped to that brand, or start a new campaign for it. Edit and delete live behind the three-dot menu.',
              'Click the card itself to open that brand’s campaigns page. New brand (top right) opens the creation form.',
            ],
          },
          { type: 'h2', text: 'Campaigns inside a brand' },
          {
            type: 'p',
            text: 'Inside a brand you see its campaigns, each with open, edit, and delete actions. Star a campaign and it pins to the top of the app sidebar — handy for whatever you are delivering this week.',
          },
          { type: 'h2', text: 'Brand identity' },
          {
            type: 'p',
            text: 'Brand details matter more than people expect: exact hex colors (not "navy blue" — #1B3A57), logo files, and reference imagery. Awa reads these brand preferences when generating, which is what keeps a campaign looking like one brand instead of twenty random images. Each brand also has a moodboard — an infinite canvas for collecting visual direction.',
          },
        ],
        related: ['campaign-workspace', 'ingredients-library', 'chatting-with-awa'],
      },
      {
        slug: 'campaign-workspace',
        title: 'The campaign workspace',
        description: 'Chat, canvas, ingredients, and notes — the room where images get made.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'A campaign is one shoot or deliverable for a brand — "Spring PDP refresh", "Black Friday ads". Opening a campaign puts you in the workspace: chat with Awa on the left, your creative canvas on the right. The canvas deliberately gets most of the screen — the image is the product — and you can drag the divider between chat and canvas to resize either side.',
          },
          { type: 'h2', text: 'The left pane' },
          {
            type: 'ul',
            items: [
              'Chat — the conversation with Awa where you brief, generate, and iterate.',
              'Notes — a campaign-level scratchpad with autosave. A workflow that pays off: when a job lands, write the deliverables down first ("5 shots: wide, close-up, portrait, detail…") plus any ideas, and work down the list.',
              'Feedback — client feedback tied to this campaign, grouped by review round.',
            ],
          },
          { type: 'h2', text: 'The right pane (Create)' },
          {
            type: 'ul',
            items: [
              'Generations arrive as a stack — click the "+N" badge to fan out the additional frames. Every frame also sits in the filmstrip along the bottom.',
              'Hero view for inspecting one frame large, grid view for scanning the whole session.',
              'Compare mode puts a generated frame next to its source image so you can verify accuracy.',
              'Star/favorite frames and filter to favorites only.',
              'An info drawer per frame with the prompt, upscaling, save-as-ingredient, and delete.',
              'Ingredients — the brand asset library, including the Product Prep workspace.',
              'Bottom right: your credit balance, the brand and campaign names, and how many images this campaign has generated.',
            ],
          },
          { type: 'h2', text: 'Keyboard shortcuts' },
          {
            type: 'ul',
            items: [
              'Left / right arrows — move between frames without touching the mouse.',
              'Enter — open comparison mode on the current frame; Enter again switches to side-by-side with the source image.',
              'Escape — back out to the canvas.',
            ],
          },
          {
            type: 'callout',
            variant: 'note',
            text: 'Generated frames stream into chat and the canvas optimistically — you see them appear while the generation is still finishing.',
          },
        ],
        related: ['reviewing-results', 'ingredients-library', 'feedback-inbox'],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // AWA
  // ──────────────────────────────────────────────
  {
    id: 'awa',
    title: 'Awa — AI Creative Director',
    description: 'The conversational agent that engineers your images instead of gambling on prompts.',
    articles: [
      {
        slug: 'chatting-with-awa',
        title: 'Chatting with Awa',
        description: 'How the conversation works: briefs in, reasoning steps, images out, iterate until client-ready.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Awa is a chat-based AI creative director trained on professional AI photography technique. You describe what you want in plain language; Awa handles the engineering — writing structured prompts, generating, editing, critiquing quality, and iterating until the result is client-ready.',
          },
          {
            type: 'img',
            src: `${IMG}/collaborate-with-ai.png`,
            alt: 'Chatting with Awa in the campaign workspace, with generated frames streaming into the canvas',
            caption: 'Brief in plain language on the left; results land on the canvas on the right.',
          },
          { type: 'h2', text: 'What a conversation looks like' },
          {
            type: 'ul',
            items: [
              'Messages render with timestamps and visible reasoning steps, so you can see how Awa is approaching the brief.',
              'Awa answers in formatted text — headings, lists, tables — and offers quick answers as clickable chips below its replies. Clicking one drops it into the chat, which is the fastest way to carry the conversation forward.',
              'Generated images appear directly in the chat and on the Create canvas at the same time.',
              'Reply to a specific frame to request an edit of exactly that image.',
              'Hit stop at any time to cancel a generation in progress.',
            ],
          },
          { type: 'h2', text: 'Brief like a pro' },
          {
            type: 'p',
            text: 'Awa speaks Visual Syntax — the six ingredients of every commercial image: Style, Subject, Action, Scene, Camera, Brand. You do not have to write structured prompts yourself, but the more of those six you specify ("85mm, editorial luxury, golden hour, brand burgundy #6E1F2A"), the fewer iterations you need. Awa also keeps campaign context — it recalls the recent conversation (around 20 messages back), so "same scene, swap the product" works without re-explaining everything.',
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Specifics beat adjectives. "Beautiful professional photo" gives the AI nothing to engineer with; "50mm packshot on warm travertine, soft window light from camera left" does.',
          },
        ],
        related: ['plan-vs-act-mode', 'awa-tools', 'referencing-images'],
      },
      {
        slug: 'plan-vs-act-mode',
        title: 'Plan mode vs Act mode',
        description: 'Decide whether Awa proposes an approach first or generates immediately.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'The composer has two modes. Act mode is the default: you ask, Awa generates. Plan mode makes Awa lay out its approach first — shot list, ingredient choices, prompt strategy — and wait for your sign-off before spending credits.',
          },
          { type: 'h2', text: 'When to use Plan mode' },
          {
            type: 'ul',
            items: [
              'Multi-image briefs — a campaign of 6 shots is worth aligning on before generating 6 images.',
              'Expensive runs — higher-quality models and resolutions cost more credits per image; plan first, generate once.',
              'Ambiguous briefs — when the client ask is fuzzy, let Awa propose an interpretation you can correct in words instead of in wasted generations.',
            ],
          },
          {
            type: 'p',
            text: 'When you approve a plan, Awa continues with the full original context — nothing from the planning conversation is lost in the handoff.',
          },
        ],
        related: ['chatting-with-awa', 'composer-and-models', 'credits'],
      },
      {
        slug: 'awa-tools',
        title: 'What Awa can do',
        description: 'Generation, surgical edits, video, quality critique, web research, and brand awareness — the agent toolset.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Awa is an agent with a real toolset (17 tools and counting), not a text box in front of one model. In a single conversation it can research, generate, inspect, and fix its own output.',
          },
          {
            type: 'ul',
            items: [
              'Image generation — text-to-image through the models you pick in the composer.',
              'Image editing — surgical image-to-image edits: change the one thing you asked for, keep the rest.',
              'Video generation — product animations (reveals, lifestyle motion) from your stills.',
              'Vision critic — an automated quality check that inspects generated frames for defects like warped labels, broken text, or anatomy errors before you send anything to a client.',
              'Prompt enhancement — your plain-language ask is rewritten into a structured Visual Syntax prompt.',
              'Brand awareness — Awa reads the active brand’s preferences, logos, and color palette and applies them without being asked.',
              'Web search & screenshots — reference gathering for moodboards and brand research.',
              'Browser image sourcing — Awa can browse a website (say, your client’s store), find product images, and import the ones you confirm straight into Ingredients.',
            ],
          },
          {
            type: 'callout',
            variant: 'note',
            text: 'Out of ~50 raw generations in a working session, maybe 10 are client-ready — that ratio is normal for professional work. The agent’s job is to get you to those 10 faster.',
          },
        ],
        related: ['chatting-with-awa', 'composer-and-models', 'ingredients-library'],
      },
      {
        slug: 'referencing-images',
        title: 'Referencing images with @image tokens',
        description: 'Attach ingredients and point at them precisely: "put the shirt in @image2 on the model in @image1."',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'When accuracy matters, words are not enough — images define what words can only describe. Attach reference images to your message and refer to each one explicitly with @image tokens.',
          },
          { type: 'h2', text: 'How it works' },
          {
            type: 'steps',
            items: [
              'Type @ in the composer to pull up your ingredient picker, or attach from the + button / the Ingredients tab.',
              'Attached images appear as a thumbnail filmstrip above the composer, each labeled with its stable token: @image1, @image2, …',
              'Click a token label to insert it into your message at the cursor.',
              'Write prompts that target images precisely: "Make the woman from @image1 hold the bottle from @image2."',
            ],
          },
          {
            type: 'p',
            text: 'Hovering a token label highlights the matching thumbnail (and vice versa when your cursor is inside a token in the text), so you always know which image you are pointing at before you spend credits. The point is removing ambiguity: if your library has three different models and three different bottles, "make the woman hold the bottle" leaves the AI guessing — @image tokens tell it exactly which woman and which bottle.',
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Avoid the over-description trap: do not write 400 words describing what your reference image already shows. "Using @image1 as compositional template, recreate with the eyeglasses from @image2" — let the images do the heavy lifting.',
          },
        ],
        related: ['ingredients-library', 'chatting-with-awa', 'composer-and-models'],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // INGREDIENTS & PRODUCT PREP
  // ──────────────────────────────────────────────
  {
    id: 'ingredients',
    title: 'Ingredients & Product Prep',
    description: 'Your brand asset library, and how to prep products before generating.',
    articles: [
      {
        slug: 'ingredients-library',
        title: 'The Ingredients library',
        description: 'Upload, import, draw, and organize the source assets Awa generates from.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Ingredients are the raw assets behind every accurate generation: product photos, logos, model references, scene references. The Ingredients tab inside a campaign is the brand-wide library — every campaign for the same brand shares it.',
          },
          {
            type: 'img',
            src: `${IMG}/ingredients-assets.png`,
            alt: 'The Ingredients tab showing a brand asset library of product photos and references',
            caption: 'One brand-wide library: products, models, scenes, logos.',
          },
          { type: 'h2', text: 'Adding ingredients' },
          {
            type: 'ul',
            items: [
              'Upload files — single or in batches.',
              'Import from a URL — paste an image address and it is stored as an ingredient.',
              'Draw — a focused canvas with pen, eraser, colors, undo/redo. Best for composition guides: sketch "a man holding a bowl, basketball net behind", pair the drawing with a real product photo, and ask Awa to create the real image from that layout.',
              'Let Awa source them — Awa can browse a website and import the product images you confirm.',
              'Promote a generated frame — any frame you like can be saved back into the library as a new ingredient.',
            ],
          },
          { type: 'h2', text: 'Batch upload and naming' },
          {
            type: 'p',
            text: 'Upload several files at once and you get a batch review screen before they land in the library. Use it. With two ingredients, names barely matter; with 50 ingredients and a client you return to after two months, "IMG_4302" is a tax on every future session. Name things like "woman in white linen shirt" and tag by what it is for the brand ("model", "product", "scene").',
          },
          {
            type: 'ul',
            items: [
              'AI analyze — one click writes titles and tags for the whole batch automatically; you just review them.',
              'Tag all at once — type a tag in the batch header to apply it to every file in the upload.',
              'Batch edit — hit Select in the library, pick multiple ingredients, and edit or delete them together. Single-ingredient editing still lives in the info drawer.',
            ],
          },
          { type: 'h2', text: 'Using ingredients' },
          {
            type: 'p',
            text: 'Filter the library by name or tag, open any ingredient in a detail drawer, and send ingredients into the chat composer with one click — selected ingredients highlight, and removing the chip in the composer deselects them in the library. From the detail drawer you can also enter Product Prep.',
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'The cleaner the source, the cleaner the result. Crop your reference to what you want to keep — a busy source image is noise the AI has to reproduce or fight.',
          },
        ],
        related: ['product-prep', 'referencing-images', 'save-frames-as-ingredients'],
      },
      {
        slug: 'product-prep',
        title: 'Product Prep',
        description: 'Crop, resize, remove background, and upscale a product photo before you generate with it.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Most client product photos arrive as they are: busy backgrounds, low resolution, awkward crops. If you hand the AI a photo of your bottle on a cluttered counter, it has to deal with everything else in the frame too. Product Prep is the cleanup bench where you remove that noise before generating — it lives inside Ingredients, part of the same flow as organizing.',
          },
          {
            type: 'img',
            src: `${IMG}/product-prep.png`,
            alt: 'The Product Prep workspace with crop, resize, background removal, and upscale tools',
            caption: 'From cluttered client photo to clean, isolated product.',
          },
          { type: 'h2', text: 'The prep workspace' },
          {
            type: 'steps',
            items: [
              'Open an ingredient’s detail drawer and choose Open Prep — the prep workspace takes over the tab.',
              'Crop to just the product, and resize if needed — both apply instantly in the canvas.',
              'Remove background isolates the main subject and preserves its detail; AI upscale raises the resolution. Both show a before/after comparison so you decide whether to apply or discard.',
              'Save as new writes the prepped version as a separate ingredient. Your original source file is never overwritten.',
            ],
          },
          {
            type: 'callout',
            variant: 'note',
            text: 'A workflow rule from real client work: output resolution should be at least input resolution. Upscale low-res product shots before generating from them, not after.',
          },
        ],
        related: ['ingredients-library', 'your-first-image'],
      },
      {
        slug: 'save-frames-as-ingredients',
        title: 'Save a generated frame as an ingredient',
        description: 'Promote your best outputs into reusable inputs for future generations.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'A great generated frame is often the best possible reference for the next one — same scene, same model, same lighting, new product angle. That is the sequential pipeline: build on what worked instead of starting from zero every time.',
          },
          {
            type: 'steps',
            items: [
              'Select the frame in the Create canvas and open its info drawer.',
              'Choose Save as ingredient.',
              'The frame is added to the brand’s Ingredients library, tagged as saved-from-frame, and is immediately attachable in chat like any other ingredient.',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Use this to lock a "dedicated model" or a signature scene for a brand: generate it once, save it as an ingredient, and anchor every future shot to it for consistency across the whole campaign.',
          },
        ],
        related: ['ingredients-library', 'referencing-images'],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CREATING IMAGES
  // ──────────────────────────────────────────────
  {
    id: 'creating',
    title: 'Creating Images',
    description: 'Models, resolution, concepts, recipes, and reviewing your results.',
    articles: [
      {
        slug: 'composer-and-models',
        title: 'The composer: models, resolution, concepts',
        description: 'Pick the right model and resolution for the job, and use concepts and variations to explore deliberately.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'The composer is the message box at the bottom of chat — but it is also where you control how images get made: which model, what aspect ratio, what resolution, how many concepts. The input grows as you write longer briefs and caps at a comfortable height.',
          },
          { type: 'h2', text: 'The models' },
          {
            type: 'ul',
            items: [
              'Nano Banana 2 — the default, and what we use for ~99% of client work. From 4 credits per image.',
              'Nano Banana Pro — the realism-focused option when skin, fabric, and light need to survive close inspection. 8 credits per image at 1K/2K, 16 at 4K.',
              'GPT Image 2 — a genuinely different creative feel, strong on style, faces, and complex instructions. 10 credits per image, and its resolution is fixed at 1K — which gets soft fast when you zoom, so it is not the pick for fine product detail.',
            ],
          },
          {
            type: 'p',
            text: 'Why offer more than one? Think iPhone vs Samsung: same scene, different processing, different feel. Most work ships on Nano Banana 2, but when a brief calls for a different aesthetic rather than more detail, having a second creative opinion is worth it.',
          },
          { type: 'h2', text: 'Resolution: 1K, 2K, 4K' },
          {
            type: 'p',
            text: 'For client work, generate at 2K minimum — 1K turns blurry as soon as anyone zooms. Resolution is not just output size: higher resolution measurably improves the model’s output quality. Go 4K when your input image is at least 2K on a side, when the product has fine detail, or when there is text on the product that must render correctly. The practical rule: start at 2K; if the result is not crisp enough, go to 4K.',
          },
          { type: 'h2', text: 'Concepts and variations' },
          {
            type: 'ul',
            items: [
              'Concepts = different creative interpretations of one brief. Ask for "a woman wearing the t-shirt" with 3 concepts and you might get golden hour, editorial, and lifestyle-UGC takes — three directions for the price of one brief.',
              'Variations = the same prompt run again. Each run differs slightly in the fine details, which is exactly what you want for accuracy-critical products like jewelry: generate variations and keep the one where the details land.',
            ],
          },
          { type: 'h2', text: 'Loop and Vision' },
          {
            type: 'ul',
            items: [
              'Loop (experimental) — Awa keeps generating, self-evaluating, and retrying until the result meets the brief. Use it when you know exactly what you want on a hard subject (fine jewelry, precise detail) and would rather spend credits than rounds of manual feedback. It multiplies cost and time per image — that is the tradeoff, and why it is off by default.',
              'Vision (off by default) — lets Awa actually look at the frames it generated and critique them. Adds time per generation; worth switching on for complex products, unnecessary for routine shots.',
            ],
          },
          { type: 'h2', text: 'Aspect ratio' },
          {
            type: 'p',
            text: 'Set aspect ratio to match the destination before generating — square for PDP grids, portrait for stories, landscape for banners — rather than cropping afterwards.',
          },
        ],
        related: ['credits', 'plan-vs-act-mode', 'reviewing-results'],
      },
      {
        slug: 'recipes',
        title: 'Recipes',
        description: 'Pre-built shot templates with ingredient slots — drop in your product and generate.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Recipes are pre-engineered shot templates. Each one fixes the composition decisions — subject placement, action, environment, lighting, camera — and leaves slots for your ingredients. Pick a recipe, drop in your product, and Awa generates the shot.',
          },
          {
            type: 'img',
            src: `${IMG}/recipes-winning-prompts.png`,
            alt: 'The recipe browser showing pre-built shot templates with ingredient slots',
            caption: 'Proven shot structures — your product fills the slot.',
          },
          { type: 'h2', text: 'Using a recipe' },
          {
            type: 'steps',
            items: [
              'Open the recipe browser from the composer.',
              'Pick a template — packshots, lifestyle scenes, UGC-style shots, seasonal looks.',
              'Fill the ingredient slots with your assets (the product photo, optionally a model or scene reference).',
              'Generate. The recipe’s structured composition does the prompt engineering for you.',
            ],
          },
          {
            type: 'p',
            text: 'Recipes are the fastest path to consistent output when you need volume — a retainer deliverable of 12 monthly images is much easier when 8 of them start from proven templates.',
          },
        ],
        related: ['composer-and-models', 'ingredients-library'],
      },
      {
        slug: 'reviewing-results',
        title: 'Reviewing results on the canvas',
        description: 'Hero view, grid, compare, favorites — curating the keepers out of a working session.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Professional sessions produce a lot of frames, and most of them are stepping stones. The Create canvas is built for fast, honest curation.',
          },
          {
            type: 'img',
            src: `${IMG}/comparison-side-by-side.png`,
            alt: 'Compare mode showing a generated image side by side with its source image',
            caption: 'Side-by-side with the source — the accuracy check before anything ships.',
          },
          {
            type: 'ul',
            items: [
              'Hero view for inspecting one frame large; grid view for scanning the whole session; a filmstrip along the bottom for jumping between frames.',
              'Keyboard navigation: arrow keys move between frames, Enter opens compare, Enter again goes side-by-side with the source image, Escape backs out. Zoom in to check what clients actually notice — hands, label text, edges.',
              'Compare against the source ingredient to make sure the product is accurate — this is the "am I making a mistake?" check.',
              'Star the keepers (the button is top right on every frame) and toggle the favorites-only filter to see your shortlist.',
              'The action rail on each frame: favorite, compare, reply (which is edit — "remove her glasses"), zoom, info, gallery, favorites.',
              'The info drawer holds the prompt that made the frame, upscaling, save as ingredient, and delete (with confirmation).',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Star frames the moment they impress you, mid-session. Out of 10 generations you will typically keep 2 — favorites are how those 2 stay findable, and they feed your share rounds, brand thumbnails, and home screen.',
          },
        ],
        related: ['gallery', 'share-with-clients', 'save-frames-as-ingredients'],
      },
      {
        slug: 'gallery',
        title: 'The Gallery',
        description: 'Every image you have generated, browsable by brand and campaign — and the launchpad for sharing.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'The Gallery is the archive: every frame from every campaign, in an image-first mosaic grid with a single compact control bar. No card clutter — just the work.',
          },
          {
            type: 'img',
            src: `${IMG}/gallery-share-winners.png`,
            alt: 'The gallery in mosaic view with images selected for sharing with a client',
            caption: 'Filter to favorites, select the winners, share.',
          },
          {
            type: 'ul',
            items: [
              'Pick a brand at the top, then narrow to one of its campaigns.',
              'Sort and filter by tags, feedback status, newest/oldest, and favorites.',
              'Open any image for full-size inspection and per-frame actions.',
              'Select images and share them — this is where client review links are born (see "Share work with clients").',
              'Export selections as a ZIP when it is time to deliver final files.',
            ],
          },
          {
            type: 'p',
            text: 'The working rhythm: generate 10–30 images in a campaign, favorite the best as you go, then come to the Gallery, filter to favorites, inspect them properly, and share the winners with the client.',
          },
        ],
        related: ['reviewing-results', 'share-with-clients', 'brands'],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CONCEPTS & CLIENT FEEDBACK
  // ──────────────────────────────────────────────
  {
    id: 'feedback',
    title: 'Concepts & Client Feedback',
    description: 'Share work with clients, collect structured feedback, close the loop.',
    articles: [
      {
        slug: 'share-with-clients',
        title: 'Share work with clients',
        description: 'Send a clean review page where clients decide on each image — one link that holds every revision round.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'When a round of work is ready, you do not email attachments — you share a review page. Select images in the Gallery, hit share, and you get a stable public link to a clean page with no app chrome: just the images and a simple way to react to each one.',
          },
          {
            type: 'img',
            src: `${IMG}/client-feedback.png`,
            alt: 'The client review page with per-image decisions and comments',
            caption: 'The client decides on every image: select, needs changes, or pass.',
          },
          { type: 'h2', text: 'Creating a share' },
          {
            type: 'ul',
            items: [
              'Optional message — a note that appears at the top of the share page (most of the time you can leave it empty).',
              'Allow feedback — on by default; this is what lets the client respond per image.',
              'Apply watermark — overlays your logo on the images. A trust decision: clients can otherwise download and use the files freely. We almost never use it — most clients are honest — but it is there if you want it.',
            ],
          },
          { type: 'h2', text: 'What the client sees' },
          {
            type: 'ul',
            items: [
              'They enter their email first — so when several people at the company review (a designer, then the CEO), you know exactly who said what.',
              'For each image they make a decision — select it, ask for changes, or pass — and can leave a comment ("love this one, but the label should face camera").',
              'No login, no account. They respond in two minutes from any device, and they can download or resize anything you shared.',
            ],
          },
          { type: 'h2', text: 'One link, every revision round' },
          {
            type: 'p',
            text: 'Revisions work in rounds on the same link. Client wants 10 images, rejects 4? Fix those and add them as round two — the client opens the same link and sees the rounds as tabs. No more "here is link three of three" emails; just tell them the new round is ready.',
          },
        ],
        related: ['feedback-inbox', 'concepts', 'gallery'],
      },
      {
        slug: 'feedback-inbox',
        title: 'The Feedback inbox',
        description: 'One triage surface for all client feedback — and a one-click path from a client comment to the revision.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'The Feedback page is your global review inbox. Visual review rounds and concept review rounds from every brand land in one queue, with counts for unread work so you always know what needs attention. The home screen’s action queue surfaces the same items.',
          },
          { type: 'h2', text: 'Working the queue' },
          {
            type: 'ul',
            items: [
              'Filter by status, review kind (visual vs concept), and brand.',
              'Each round card shows progress — reviewed/total, selected / needs-tweaks / pass tallies, unread count.',
              'Card actions: open the public share round, jump to the source campaign, mark read, archive, or delete.',
              'The notification bell in the top nav opens a quick version of the same inbox from anywhere, defaulting to unread.',
            ],
          },
          { type: 'h2', text: 'From feedback to revision in one click' },
          {
            type: 'p',
            text: 'This is the loop that makes revisions the smallest part of the job. Open the campaign’s Feedback tab, find a comment marked "needs changes" — say, "the grass looks too green" — and hit reply. Dezygn switches to chat, focuses the exact image the client commented on, and pre-drafts the revision prompt with the client’s own words. No copy-paste, no hunting through email for the right file, no re-uploading.',
          },
          {
            type: 'p',
            text: 'Most of the time you send the draft as-is. Awa has the campaign context (it recalls the recent conversation) and client feedback is usually precise — "change this, not everything" — which is exactly what AI revises best. Good feedback in, one-shot revision out.',
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Tell clients up front: "don’t hesitate to give me precise, per-image feedback." The better their comments, the less you work — with a client who comments well, most revisions are a single click and a single shot.',
          },
        ],
        related: ['share-with-clients', 'campaign-workspace'],
      },
      {
        slug: 'concepts',
        title: 'Concept reviews',
        description: 'Get client sign-off on creative direction before you produce the full campaign.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Concept reviews exist to prevent the worst outcome in retainer work: you produce a month of visuals, and the client likes none of the directions. Instead, you get them to approve the ideas before production — so by the time finals arrive, they already bought in.',
          },
          {
            type: 'img',
            src: `${IMG}/align-before-generate.png`,
            alt: 'A concept review round where the client approves shot ideas before production',
            caption: '"Align on concepts before production" — the client buys in before you generate.',
          },
          { type: 'h2', text: 'What a concept is' },
          {
            type: 'p',
            text: 'Three to five words describing a shot, optionally with reference images attached: "runner with Nike shoes, close-up", "model wearing the product at golden hour, beach". That is enough for a client to react to. Where do ideas come from? The brand’s identity — its customers, products, locations — plus a quick Pinterest or web sweep for visual references.',
          },
          { type: 'h2', text: 'Running a round' },
          {
            type: 'steps',
            items: [
              'From Feedback (or Concepts), choose Create concept review and pick the brand.',
              'Name the round — "May concepts", "Sample ideas".',
              'Add a concept per planned shot, attaching reference images or ingredients where they help.',
              'Create the link and send it. The client page asks them to review each concept and mark it: move forward, needs tweaks, or replace.',
              'Decisions land in your Feedback inbox. Produce the month’s images against the approved concepts.',
            ],
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Timebox it: ~30 minutes of concepting per client per month (for a 10-image retainer) at the start of the billing cycle. If a client brings their own shot list, skip the round — but most clients pay you precisely because coming up with ideas is your job, not theirs.',
          },
        ],
        related: ['share-with-clients', 'feedback-inbox'],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // WINNING CLIENTS
  // ──────────────────────────────────────────────
  {
    id: 'winning-clients',
    title: 'Winning Clients',
    description: 'Outreach Factory and the Opportunities feed — proof before pitch, at volume.',
    articles: [
      {
        slug: 'outreach-factory',
        title: 'Outreach Factory',
        description: 'Turn a CSV of leads into personalized proof-of-work visuals and an export ready for your email tool.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Cold outreach with text gets deleted. Outreach with a finished visual of the prospect’s own product gets replies — that is Proof Before Pitch. Outreach Factory runs that play at batch scale: upload 10, 100, or 1,000 leads, and get reviewed winner visuals plus a send-ready CSV out the other end. Before this existed we built every outreach visual by hand, brand by brand; now a 100-lead batch is about 30 minutes of setup, and the rest is review.',
          },
          {
            type: 'img',
            src: `${IMG}/outreach-visuals.png`,
            alt: 'Outreach Factory showing generated proof-of-work visuals for a batch of leads',
            caption: 'One personalized visual per lead — proof of work before the first reply.',
          },
          { type: 'h2', text: 'The two big steps' },
          {
            type: 'steps',
            items: [
              'Discovery — upload your lead CSV (minimum per row: an email and a domain). The AI visits each website, finds the best product — the best-selling, most popular, or featured one — and builds a profile of the brand: its style, its customers, its visual language.',
              'Generation — using that profile, a creative strategist agent picks the strongest visual argument for each lead (lifestyle, hero ad, whatever fits that brand) and generates the visual.',
              'Review — you go through the output and choose which visuals to keep. Your taste stays the quality gate.',
              'Export — winners come out as an Instantly-ready CSV with image links, ready to import into Instantly or any email automation tool. Send hundreds of emails, each with a custom visual of that prospect’s own product.',
            ],
          },
          { type: 'h2', text: 'The batch dashboard' },
          {
            type: 'p',
            text: 'The dashboard tracks the whole funnel — imported leads, product-ready, generated, reviewed, winners, exceptions, exported — plus your current credit balance and an estimate of what the remaining work will cost before you commit to it.',
          },
          {
            type: 'callout',
            variant: 'note',
            text: 'One visual per email is deliberate. At 300–1,000 leads a week, extra images multiply your credit cost for no extra reply rate — and visually, one image (or a grid of four) reads well in an email; two reads like a banner ad. One strong visual is enough to spark the conversation.',
          },
        ],
        related: ['opportunities', 'credits'],
      },
      {
        slug: 'opportunities',
        title: 'Opportunities: the Upwork feed',
        description: 'A daily-scanned feed of AI photography jobs, scored for fit, with a daily application target and tracking.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Opportunities is a shared feed of AI photography jobs scanned from Upwork — so finding work is a daily habit, not a research project. Jobs are filtered to meaningful still-image and product work and scored for fit before they reach you. The feed refreshes daily, and there is far more volume than any one person can apply to — new posts arrive constantly, weekends included.',
          },
          {
            type: 'img',
            src: `${IMG}/opportunities-gigs.png`,
            alt: 'The Opportunities feed showing scored Upwork jobs with budgets and application tracking',
            caption: 'Fresh, scored AI photography jobs — open, apply, track.',
          },
          { type: 'h2', text: 'The daily habit' },
          {
            type: 'ul',
            items: [
              'Set a daily application target — 3, 5, or 10. Upwork rewards volume and consistency, and the counter ("1 of 5 applied today") keeps you honest.',
              'Job cards show the fit score, budget or rate, client spend history, payment verification, and location. The AI’s reasoning for picking the job sits behind the info icon.',
              'Open a job and the card asks: did you apply? Yes moves it to Applied, No to Skipped — and skipped jobs teach the feed what to stop recommending.',
              'Applied jobs can later be marked "Got the job", so your win rate becomes visible over time.',
              'Add applied lets you log jobs you found outside the feed, keeping your daily stats honest.',
              'If the running tallies stress you out, you can hide the stats entirely.',
            ],
          },
          {
            type: 'callout',
            variant: 'note',
            text: 'The method this feed is built for — answering job posts with finished sample work instead of proposals — is taught in the free training at dezygn.com/webinar.',
          },
        ],
        related: ['outreach-factory', 'what-is-dezygn'],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // ACCOUNT & BILLING
  // ──────────────────────────────────────────────
  {
    id: 'account-billing',
    title: 'Account & Billing',
    description: 'Credits, plans, and how to reach us.',
    articles: [
      {
        slug: 'credits',
        title: 'How credits work',
        description: 'What generations cost, how team credit pools work, and how to spend less per keeper.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Credits are the unit of generation. Every image or video costs credits depending on the model and resolution; everything else in Dezygn — chat, ingredients, sharing, feedback — is free to use. Your balance is always visible in the bottom-right of the campaign workspace.',
          },
          { type: 'h2', text: 'Image costs' },
          {
            type: 'ul',
            items: [
              'Nano Banana 2 — from 4 credits per image (resolution raises the cost).',
              'Nano Banana Pro — 8 credits per image at 1K/2K, 16 credits at 4K.',
              'GPT Image 2 — 10 credits per image (fixed 1K resolution; the price is set by the provider).',
              'Video generation costs more than stills and is priced per clip.',
            ],
          },
          { type: 'h2', text: 'Team pools and renewal' },
          {
            type: 'p',
            text: 'Credits belong to your team, not to individual seats — everyone draws from one pool, which is what you want when an agency shares an account. Monthly plan credits renew on your billing cycle.',
          },
          {
            type: 'callout',
            variant: 'tip',
            text: 'Spend pattern that works: iterate cheap, finalize expensive. Explore with Nano Banana 2 at 2K, then re-run only the chosen shot at 4K or on a higher-quality model. Features that multiply quality also multiply cost — Loop and extra variations are for the shots that earn it.',
          },
        ],
        related: ['plans-and-billing', 'composer-and-models'],
      },
      {
        slug: 'plans-and-billing',
        title: 'Plans and billing',
        description: 'Free, Agency ($99/mo, 2,500 credits), and Studio ($399/mo, 10,000 credits) — and managing your subscription.',
        updatedAt: '2026-06-11',
        blocks: [
          { type: 'h2', text: 'The plans' },
          {
            type: 'ul',
            items: [
              'Free — 50 credits to test the full workflow. No card required.',
              'Agency — $99/month, 2,500 credits/month. Built for freelancers and small studios delivering client work.',
              'Studio — $399/month, 10,000 credits/month. For teams producing at volume.',
            ],
          },
          { type: 'h2', text: 'Managing your subscription' },
          {
            type: 'p',
            text: 'Billing runs on Stripe. From Settings you can open the customer portal to update your payment method, change plans, download invoices, or cancel. Plan changes take effect on your billing cycle.',
          },
          {
            type: 'callout',
            variant: 'note',
            text: 'Current pricing and plan details always live at dezygn.com/pricing — if this page and the pricing page ever disagree, the pricing page wins.',
          },
        ],
        related: ['credits', 'get-support'],
      },
      {
        slug: 'get-support',
        title: 'Contact support',
        description: 'How to reach a human: the contact form, email, and what to include for a fast answer.',
        updatedAt: '2026-06-11',
        blocks: [
          {
            type: 'p',
            text: 'Stuck, found a bug, or have a billing question? Use the Contact support button on this page — it opens a short form that goes straight to our support inbox. You can also email support@youzign.com directly.',
          },
          { type: 'h2', text: 'Help us help you fast' },
          {
            type: 'ul',
            items: [
              'Use the email attached to your Dezygn account so we can find you.',
              'Describe what you expected and what happened instead.',
              'Include the brand/campaign name and roughly when it happened.',
              'Screenshots are gold — especially of error messages.',
            ],
          },
          {
            type: 'p',
            text: 'We answer within 24 hours on business days (Monday–Friday, 9am–6pm EST).',
          },
        ],
        related: ['plans-and-billing', 'what-is-dezygn'],
      },
    ],
  },
];

/** Flat, ordered list of all articles (sidebar order = prev/next order). */
for (const cat of helpCategories) {
  const extra = generatedHelpArticles[cat.id];
  if (extra) cat.articles.push(...extra);
}

export const allHelpArticles: { article: HelpArticle; category: HelpCategory }[] =
  helpCategories.flatMap((category) => category.articles.map((article) => ({ article, category })));

export interface HelpArticleLookup {
  article: HelpArticle;
  category: HelpCategory;
  prev: { article: HelpArticle; category: HelpCategory } | null;
  next: { article: HelpArticle; category: HelpCategory } | null;
}

export function findHelpArticle(slug: string): HelpArticleLookup | null {
  const index = allHelpArticles.findIndex(({ article }) => article.slug === slug);
  if (index === -1) return null;
  return {
    ...allHelpArticles[index],
    prev: index > 0 ? allHelpArticles[index - 1] : null,
    next: index < allHelpArticles.length - 1 ? allHelpArticles[index + 1] : null,
  };
}
