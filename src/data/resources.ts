export interface Resource {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  image: string;
  imageAlt: string;
  publishedAt?: string;
  updatedAt?: string;
  faq?: { question: string; answer: string }[];
  cta?: {
    label: string;
    href: string;
    subtext?: string;
  };
  sections: { heading: string; content: string[] }[];
  keyTakeaways: string[];
  relatedResources: string[];
}

export const resources: Resource[] = [
  // ──────────────────────────────────────────────
  // 1. THE VISUAL SYNTAX FRAMEWORK (cornerstone)
  // ──────────────────────────────────────────────
  {
    slug: "visual-syntax",
    title: "The Visual Syntax Framework",
    metaTitle: "The Visual Syntax Framework — Engineer AI Photos, Don't Gamble | Dezygn",
    metaDescription:
      "The 6-ingredient framework behind professional AI product photography: Style, Subject, Action, Scene, Camera, Brand. Stop prompting like a slot machine.",
    heroHeadline: "Stop Gambling. Start Engineering.",
    image: "/images/seo/resources/visual-syntax.webp",
    imageAlt: "Visual Syntax framework diagram showing the six ingredients of a commercial AI image",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    cta: {
      label: "Get the Visual Syntax Cheatsheet (free)",
      href: "/#cheatsheet",
      subtext: "The full framework on two pages — the same reference we use on client work.",
    },
    sections: [
      {
        heading: "The Slot Machine Trap",
        content: [
          "Most people use AI image generation like a slot machine. They type something vague — 'woman holding cream jar, professional, beautiful' — they spin, they hope. Maybe this time it will be good. That is not a profession. That is gambling. And the output has a name: AI slop. Inaccurate products, melting hands, plastic skin, images that damage trust instead of building it.",
          "Here's the version of this that costs real money. A toy company owner generates his own catalog images with AI. The images look great — better than the product, in fact. A customer orders, the box arrives, and the review comes in: two stars, 'item not as pictured.' Not because the toy was bad. Because the image promised something the physical product didn't deliver. 'Close enough' isn't a style choice. Close enough is a refund. And refunds kill businesses.",
          "Professional AI photography replaces luck with engineering. Every image has to pass three tests we call conversion integrity: it must be accurate (the image respects the physical product's reality), realistic (it passes the sniff test — people can smell AI from a mile away now, and when they smell it, they close their wallet), and on-brand (it speaks the client's visual language). Clients aren't paying you to prompt. They're paying you to bridge the gap between raw AI potential and commercial reality.",
        ],
      },
      {
        heading: "The Six Ingredients",
        content: [
          "Every commercial image you've ever seen can be broken down into exactly six controllable ingredients. Control these, and you control the outcome. I didn't invent them from theory — after hundreds of client generations, every time the AI gave me slop instead of a usable image, it was because I had left one of these undefined.",
          "STYLE — what kind of photo is this? Clean catalog, editorial luxury, lifestyle, UGC, moody, minimalist. Style is the container; everything else lives inside it. SUBJECT — what or who is the hero? The product with its real shape, materials, finish and label text, or the model who matches the client's actual customer. ACTION — what's happening? The verb, the expression, the gaze. Static images are forgettable; action creates desire.",
          "SCENE — where are we, and how is it lit? Environment plus lighting, and lighting is 50% of the equation: get it wrong and nothing else matters. CAMERA — how are we shooting it? Focal length, aperture, framing. Three lenses cover 80% of commercial work: 50mm feels honest, 85mm feels premium, 135mm feels cinematic. BRAND — how does this feel like them? Exact hex colors (not 'navy blue' — '#1B3A57'), color temperature, identity textures. Brand stays constant across a campaign while everything else changes; that constancy is what reads as identity.",
          "The framework only works if you use all six. Skip one, and you're back to gambling.",
        ],
      },
      {
        heading: "The Ordering Rule: Hierarchy of Attention",
        content: [
          "The AI pays more attention to the beginning of your prompt than the end. Think of AI attention like a budget — you have a limited amount to spend, so front-load the things that matter most and don't waste budget on the obvious.",
          "The default order — Style, Subject, Action, Scene, Camera, Brand — works for most shots. You break it when something isn't coming through. Brand burgundy keeps rendering as generic red? Move the brand block to the top and repeat the critical detail across ingredients. Unusual product proportions getting normalized? Front-load them. The order is a tool, not a ritual.",
        ],
      },
      {
        heading: "Multimodal Anchoring: Words vs. Pictures",
        content: [
          "Here is the insight that separates amateurs from professionals: each ingredient can be communicated with words, with pictures, or both. Words describe. Images define.",
          "Use text when you want the AI's interpretation — mood, era, vibe, creative variation. Use images when accuracy matters: the product's exact appearance, a specific pose, an exact style. The AI doesn't know what your product looks like. If you're vague, it will guess, and its guess won't match reality. Attach the real product photo and the AI recreates it instead of inventing it.",
          "Two corollaries do a lot of work in practice. First, the over-description trap: don't write 400 words describing what your reference image already shows. 'Using [image1] as compositional template, recreate with the eyeglasses from [image2]' — fifteen words, and the images do the heavy lifting. Let the image speak; use text for what the image doesn't show. Second, visual signal-to-noise: the more focused your source image, the cleaner your transfer. Crop the source to what you want to keep. A busy source is noise the AI must reproduce or fight; a clean source is signal.",
          "And one rule above all, learned the expensive way on client work: the source image wins over the prompt. Always. If your source shows sunglasses sitting above the eyebrows, no prompt will move them down. Fix the source, not the prompt.",
        ],
      },
      {
        heading: "From Framework to Production",
        content: [
          "Visual Syntax is how you think; the shot types are how you ship. A packshot fixes Style and Camera and spends everything on Subject accuracy. A hero shot spends on Camera and lighting drama. A UGC shot deliberately inverts the polish rules while keeping the product accurate. Once you see images as ingredient stacks, you can deconstruct any reference a client sends and rebuild it with their product — which is the actual job.",
          "This framework is also what Dezygn's AI creative director, Awa, runs on. You define the brand block once, anchor products with real photos, build scenes as reusable assets, and Awa assembles shots instead of gambling on them. The full system — the R&D process, the per-shot recipes, the client workflows — is what we teach, but the framework above is enough to change how you prompt today.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Visual Syntax specific to one AI model?",
        answer:
          "No. It's a way of structuring visual decisions, not a syntax for one tool. The six ingredients map onto any capable image model — what changes between models is how much each ingredient needs reinforcing, not the ingredients themselves.",
      },
      {
        question: "Do I really need all six ingredients in every prompt?",
        answer:
          "You need all six decided, not necessarily all six written. A packshot's Action is 'none' — but that's a decision. Every failed generation we've audited traces back to an ingredient that was left undefined and got filled in by the model's guess.",
      },
      {
        question: "When should I use a reference image instead of text?",
        answer:
          "Whenever accuracy matters: product appearance, exact composition, exact style. Words are imprecise — 'editorial' means different things to different people. For products it's non-negotiable: attach the real photo. For mood and atmosphere, text gives the AI useful creative freedom.",
      },
      {
        question: "What's the fastest way to learn this?",
        answer:
          "Deconstruct images you admire. Take any commercial photo and name its six ingredients — style, subject, action, scene, camera, brand. After twenty deconstructions you'll see every image as an ingredient stack, and writing prompts becomes assembly instead of guessing.",
      },
    ],
    keyTakeaways: [
      "Every commercial image breaks down into six controllable ingredients: Style, Subject, Action, Scene, Camera, Brand. Control these and you control the outcome.",
      "Accuracy is non-negotiable — an embellished image is an 'item not as pictured' refund waiting to happen.",
      "Lighting is 50% of the equation; three lenses (50/85/135mm) cover 80% of commercial work.",
      "Words describe, images define: anchor products with real photos, use text for mood and relationships.",
      "The source image wins over the prompt. Always. Fix sources, not prompts.",
      "The AI reads the start of your prompt hardest — front-load what matters, repeat what isn't coming through.",
    ],
    relatedResources: ["rd-process", "ai-product-photography-guide", "ai-lifestyle-product-photography-masterclass"],
  },

  // ──────────────────────────────────────────────
  // 2. THE R&D PROCESS
  // ──────────────────────────────────────────────
  {
    slug: "rd-process",
    title: "The R&D Process: What Pros Do Before They Open the Tool",
    metaTitle: "The R&D Process for AI Photography — Research Before Generation | Dezygn",
    metaDescription:
      "Why professional AI photographers don't open the tool first: brief deconstruction, brand extraction, two-tier moodboards, and brand-world research that justifies premium rates.",
    heroHeadline: "Most People Fail at AI Photography Before They Even Open the Tool",
    image: "/images/seo/resources/conversion-photography.webp",
    imageAlt: "Moodboard and research documents laid out before an AI photography project begins",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    cta: {
      label: "Start Free — Run Your First R&D in Dezygn",
      href: "https://chat.dezygn.com/signup",
      subtext: "Free plan · 50 credits · No card required",
    },
    sections: [
      {
        heading: "Two People Get the Same Brief",
        content: [
          "An amateur receives a client request and immediately opens the AI tool. Types something vague. Generates fifty images. Gets nothing usable. Tries random variations for three hours and delivers mediocre work. A professional receives the same request and doesn't open the tool. Not yet. They spend that time on something else entirely: R&D. Then they generate a focused set of images and get strong results.",
          "This is what separates $10/image work from $100/image work — and it isn't better AI tools. It's research that builds a real brand world before a single image exists. The process below is the exact one we run at our own agency for every client campaign.",
        ],
      },
      {
        heading: "Step 1: Deconstruct the Brief",
        content: [
          "'12 images' means nothing until it's categorized. For one Parisian eyewear client, 12 images meant: 4 model shots (2 paparazzi-style, 2 fashion editorial), 4 product shots, 2 detail close-ups, 2 brand shots. For a Japanese titanium eyewear brand, the same count broke down completely differently: 6 ultra-close product shots, a few model shots, and atmosphere shots. Same number, different campaign. The categories map directly to creation workflows, so until the brief is scoped in writing — image counts by type, products with URLs and specs, where the images will run, references the client loves and hates — you don't actually know what you're making.",
          "Get this right and the rest of the process flows. Get it wrong and you'll spend hours generating images nobody asked for. Then do the unglamorous part immediately: collect every product photo, rename files by product and angle, organize by deliverable. It's admin work, and it's the foundation everything builds on.",
        ],
      },
      {
        heading: "Step 2: Extract the Brand Identity",
        content: [
          "Before touching an image, document the brand specifically — not 'they sell candles' but a working identity: audience, archetype, exact colors, and above all visual style. The brand identity isn't a nice-to-have; it's the filter for every creative decision that follows.",
          "Here's why the visual style line matters more than the archetype. A Belgian candle-and-skincare brand and a Japanese titanium eyewear brand can both be 'luxury premium.' But one's visual world is Mediterranean coastal — olive groves, sun-bleached linen, terracotta and sage, golden hour — and the other's is ultra-minimal: clean lines, matte finishes, soft directional light, studio-controlled. Same archetype, opposite images. The visual style is where the real identity lives, and every scene, prop and lighting decision answers to it.",
        ],
      },
      {
        heading: "Step 3: The Two-Tier Moodboard",
        content: [
          "Tier one is what everyone does: collect 3-5 visual references from the brand's existing photography, Pinterest, competitors. Useful, necessary, table stakes. The moodboard isn't just 'find pretty pictures' — at tier two, it's research that builds a brand world.",
          "Tier two is where the leverage lives: competitor deep-dives (how do the category's best brands photograph this material — the angles, the reflections, the surface treatment?), material research (understand titanium, or wax, or leather, at the level of how it takes light), and the part most people never think to do — brand story and geography.",
          "The example we keep coming back to: for the titanium eyewear brand, we traced the likely manufacturing origin to Sabae, Japan — the eyewear capital of the world. Near Sabae we found Ono Castle, 'the castle in the sky,' sitting on a 400-meter summit — a perfect physical metaphor for a brand selling lightweight luxury. The surrounding Fukui region filled out the visual references. None of the final images had to literally show the castle; the research shaped every scene decision, and several research photos were uploaded and transformed directly into brand-universe shots. You're building a story: where does this brand come from? What place in the world does it belong to? The deeper the moodboard, the more specific the final images — and the moodboard itself often becomes source material during creation.",
        ],
      },
      {
        heading: "Step 4: Prep the Ingredients",
        content: [
          "With the world defined, each Visual Syntax ingredient gets prepared deliberately. Style: extract the shared style from your references — genre, mood, quality level, era — into a reusable style fragment. Product: clean inputs make clean outputs — backgrounds removed, 2K resolution minimum so labels survive, multiple angles, dimensions documented. On real client sessions, product prep is routinely half the session time or more. This isn't overhead; this IS the skill.",
          "Models get the two-stage treatment: a model brief written from the brand identity (the client's actual customer, not 'attractive person'), comp cards to select the face, then clean portraits — white background, neutral clothing, zero accessories — because the comp card is for selection only, never for compositing. The source image wins over the prompt, so the compositing source has to be clean. Think of it like mise en place in cooking: the clean portrait is your prepped, measured, ready-to-use ingredient.",
          "Scenes are generated as standalone assets — empty, no people, no products, 3-4 angles per location with matching light — and named into a library. Complex images are built sequentially, not in one shot. By the time generation starts, you're assembling validated parts, not gambling on a miracle frame.",
        ],
      },
      {
        heading: "Step 5: The R&D Document",
        content: [
          "Everything compiles into one creation blueprint: brief summary, brand identity, style fragments, prepped product assets, model direction, scene library, and a deliverable plan mapping each required image to its ingredients. During creation you're executing a plan, not hunting through folders.",
          "And the document evolves. After each successful shot, what worked gets written down as campaign instructions — the exact settings and workflow that produced approved images. Those instructions compound: your first project with a client takes the longest, and every delivery after that gets faster. It's how a campaign goes from taking a full day to taking a few hours. (The full templates — the brief checklist, the extraction prompts, the R&D document structure — are part of our paid system; the process above is the complete shape of it.)",
        ],
      },
    ],
    faq: [
      {
        question: "How long should R&D take for a typical campaign?",
        answer:
          "First campaign for a new client: expect R&D to be the majority of the work — often more time than generation itself. By the second or third campaign, the brand identity, model library and scene library already exist, and R&D collapses to reviewing the brief and updating the plan. That compression is the business model.",
      },
      {
        question: "Is this overkill for a small brand with one product?",
        answer:
          "The depth scales, the sequence doesn't. A one-product brand still needs a scoped brief, a brand identity, clean product sources and a style direction — that might take an hour, not a week. Skipping the sequence is how you end up in the three-hour random-variation spiral.",
      },
      {
        question: "What's a 'brand world' in practice?",
        answer:
          "The researched visual universe a brand's images live in: its geography, materials, light and cultural references. 'Japanese aesthetic' is a prompt; Sabae, titanium craft, and a castle in the sky is a world. Worlds produce images competitors can't accidentally copy.",
      },
    ],
    keyTakeaways: [
      "Pros don't open the tool first — preparation is what separates $10/image work from $100/image work.",
      "A brief isn't scoped until image counts are broken down by shot type with products and usage defined.",
      "Brand archetypes are generic; the visual style line is where real identity lives.",
      "Tier-two moodboarding — competitors, materials, geography — builds a brand world that becomes source material itself.",
      "Product prep is half the job: clean, 2K, multi-angle sources. Comp cards select models; clean portraits composite them.",
      "Document what worked as campaign instructions — it's how a full-day project becomes a few hours.",
    ],
    relatedResources: ["visual-syntax", "ai-product-photography-guide", "start-ai-photography-agency"],
  },

  // ──────────────────────────────────────────────
  // 3. PROOF BEFORE PITCH
  // ──────────────────────────────────────────────
  {
    slug: "proof-before-pitch",
    title: "Proof Before Pitch: The Client-Getting Mechanism",
    metaTitle: "Proof Before Pitch — Get AI Photography Clients Without Begging | Dezygn",
    metaDescription:
      "The outreach mechanism that lands AI photography clients: send the finished work before the pitch. The workflow, the Rule of 100, and real deal numbers.",
    heroHeadline: "The Job Goes to Whoever Shows Up With the Work Already Done",
    image: "/images/seo/resources/brand-consistency-ai.webp",
    imageAlt: "A custom AI-generated lifestyle visual attached to an outreach email",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    cta: {
      label: "Watch the Free Training",
      href: "/webinar",
      subtext: "How we use Proof Before Pitch to land retainer clients — full walkthrough.",
    },
    sections: [
      {
        heading: "Flip the Cold Email",
        content: [
          "Traditional cold outreach asks for trust first and promises value later: 'book a call and I'll show you what I can do.' Proof Before Pitch reverses it. You don't email a prospect to ask for a meeting — you email them a finished deliverable: one custom, AI-generated lifestyle image of their own product, made specifically for their brand, attached, free, with no ask beyond 'would this be useful?'",
          "The psychology does the selling. The prospect opens an email and sees their product — the one with the mediocre photos on their site — in a beautiful, on-brand lifestyle shot. They didn't pay for it. They didn't ask for it. Gratitude replaces resistance. You're no longer 'another cold email'; you're someone who made something for them. And the claim every other freelancer makes in words ('I can improve your visuals'), you've already proven in pixels. The image does the selling — no amount of clever copywriting convinces a brand owner like seeing their own product done right.",
        ],
      },
      {
        heading: "The 30-Minute Workflow",
        content: [
          "Per prospect: pick one product from their site — usually the weakest-photographed one. Run a compressed R&D pass: extract the brand identity from their website (minutes, not hours), pull a clean product image, and generate one excellent lifestyle shot in their visual style. Write a short email — well under 100 words — with the image attached and a one-line offer to make more. Then two follow-ups: a check-in around day 3-4, and a final note around a week later.",
          "That's the whole mechanism. It works because of everything underneath it: the Visual Syntax framework makes the one image genuinely good, and the compressed R&D makes it genuinely theirs. Outreach is not begging — it's creating an opportunity for a business owner to see how you can help them. (Dezygn's Outreach Factory automates the lead list and the custom-visual production at batch scale; the exact email sequences and templates are part of the paid system.)",
        ],
      },
      {
        heading: "The Rule of 100",
        content: [
          "Do not judge any outreach channel until you've completed at least 100 serious attempts. This isn't motivation — it's statistics. From 100 Proof-Before-Pitch emails, realistic numbers look like: 5-8 responses, 2-3 calls, 1 deal closed. A roughly 1% close rate on cold outreach is normal in B2B services. The difference between people who build agencies and people who conclude 'outreach doesn't work' is that the second group quit at 15 attempts — before the data existed.",
          "At 50 attempts you have noise; at 100 you have signal: which niches respond, which products make the best proof images, which subject lines get opens. Success in outreach is less about being the most talented photographer and more about being the person who continues showing up despite silence. And you should not wait until you feel confident to perform outreach — perform outreach until confidence builds.",
        ],
      },
      {
        heading: "Pick Your Channel",
        content: [
          "Cold email is the primary channel because it batches: build a lead list, produce the custom visuals, send at a steady daily cadence with follow-ups scheduled. It scales and it compounds.",
          "Upwork is the fastest feedback loop, especially for a first client: prospects there have already identified the need — they posted a job. Apply to a handful of relevant jobs daily and lead with a custom mockup in the application. Same mechanism, warmer audience, replies in days instead of weeks. LinkedIn and social work better warm — after a portfolio exists — than as a cold proof channel.",
        ],
      },
      {
        heading: "What This Actually Produces",
        content: [
          "Real deals from this exact mechanism: a $2,000 jewelry project that started as a cold email with one lifestyle shot attached. A $4,800 deal that began as one sample, became a call, and expanded scope from there. Two monthly retainers — $700 and $780 a month — from e-commerce brands that started with a single proof image. Small numbers next to guru screenshots, real numbers next to reality: three or four such retainers is a stable $2-3k/month base, and the first client is the hardest. Everything after gets easier, because you have real work, real testimonials, and real confidence.",
          "One good lead handled well is worth a hundred mediocre ones. When a response comes in, the conversation isn't 'are you any good?' — your image already answered that. It's 'what would a first project look like?' That's a different business.",
        ],
      },
    ],
    faq: [
      {
        question: "Isn't sending free work devaluing the service?",
        answer:
          "You're sending one image as proof, not a campaign as charity. It's the same logic as a free sample at a bakery: it costs you minutes, it demonstrates the product, and the paid engagement — campaigns, retainers, ongoing creative — is what you actually sell.",
      },
      {
        question: "What if the prospect just uses the free image and disappears?",
        answer:
          "Some will. It costs you a few minutes of generation and it's still the best marketing you can do — your work is now live on their site, and brands that use the freebie are pre-qualified buyers for the next launch. The Rule of 100 already prices this in.",
      },
      {
        question: "How do I pick which brands to send to?",
        answer:
          "Physical products that photograph well, visibly mediocre existing photography, enough products and revenue to support ongoing work, and ideally active paid ads (they're already paying for creative). Score against those and only proof the strong fits — the full scoring system is part of our paid program.",
      },
      {
        question: "Do I need a portfolio first?",
        answer:
          "No — the proof image IS the portfolio, made per-prospect. A few strong spec samples in your chosen niche help credibility, and you can build those in an afternoon without any client's permission.",
      },
    ],
    keyTakeaways: [
      "Lead with a finished deliverable, not a pitch: one custom lifestyle image of the prospect's own product.",
      "Gratitude replaces resistance — the prospect receives value before any ask.",
      "The Rule of 100: judge nothing before 100 serious attempts; ~5-8 responses, 2-3 calls, 1 deal is normal and sufficient.",
      "Cold email batches and scales; Upwork gives the fastest first-client feedback loop.",
      "Real outcomes from this mechanism: $2k and $4.8k projects, $700-780/month retainers that started as one image.",
      "Perform outreach until confidence builds — not the other way around.",
    ],
    relatedResources: ["ai-photography-pricing", "start-ai-photography-agency", "rd-process"],
  },

  // ──────────────────────────────────────────────
  // 4. AI PHOTOGRAPHY PRICING GUIDE
  // ──────────────────────────────────────────────
  {
    slug: "ai-photography-pricing",
    title: "AI Photography Pricing Guide",
    metaTitle: "AI Product Photography Pricing — Per-Image Rates & Retainers (2026) | Dezygn",
    metaDescription:
      "What to charge for AI product photography: $25-150+ per image by shot type, $1k-3k monthly retainers, and the creative-strategist positioning that defends premium rates.",
    heroHeadline: "Charge for the Thinking, Deliver the Images",
    image: "/images/seo/resources/ai-photography-pricing.webp",
    imageAlt: "AI photography pricing tiers from per-image rates to monthly retainers",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    cta: {
      label: "Watch the Free Training",
      href: "/webinar",
      subtext: "Includes how we structure and pitch retainers at our own agency.",
    },
    sections: [
      {
        heading: "Why Brands Pay At All",
        content: [
          "The first objection every newcomer fears — 'can't they just generate images themselves?' — misunderstands what's being sold. Brands don't buy generations; they buy conversion integrity: accurate products, realistic scenes, on-brand consistency, delivered reliably on a schedule. The gap between 'I typed a prompt' and 'here are 25 on-brand creatives for your March drop, labels legible, model consistent, sized per placement' is the entire service. You're paid to bridge raw AI potential and commercial reality.",
          "Demand has a tailwind, too. Meta's Andromeda-era ranking rewards fresh creative variety over single optimized winners, which means brands running ads burn through creative faster than traditional production can replenish it. A studio shoot takes weeks and serious budget; ad accounts eat creative weekly. That gap is the market.",
        ],
      },
      {
        heading: "Per-Image Pricing",
        content: [
          "Working entry ranges by shot type: product-only packshots at $25-50 per image — fast to produce, clients understand the format. Styled product shots (product in a scene with props and deliberate lighting) at $50-100. Lifestyle and model shots — the highest R&D, the highest perceived value — at $75-150+. Complexity is the axis: the more ingredients you're engineering (models, scenes, brand worlds), the higher the rate.",
          "For your first two or three clients, price to win the project and the testimonial, not to maximize revenue. You're buying proof: real client work, portfolio pieces, reviews, and iteration speed. Raise rates after 3-5 completed projects with strong testimonials. That's not leaving money on the table — it's buying proof faster, and proof is what lets you charge properly forever after.",
        ],
      },
      {
        heading: "Retainers: Where the Real Money Is",
        content: [
          "One-off projects pay once; recurring clients pay every month. The working range for AI photography retainers is $1,000-3,000 per month for roughly 20-30+ finished visuals, with structure varying by client: monthly packages for brands with steady content needs, quarterly for brands with lumpy launch schedules. Even 'small' retainers compound — we run $700 and $780/month retainers that started as single cold-outreach images, and three or four of those is a stable revenue floor before any big client lands.",
          "The path into a retainer is a natural escalation, not a hard sell. Brands enter at product pages (packshots, heroes, details). Once the PDP images are live, the next realization is theirs: ads need different creative, and ad creative fatigues — that's recurring. After ads comes social, which is never 'done' — that's where monthly retainers live. PDP → Ads → Social. Suggest the next tier when the client is happy and the need is emerging, never during revisions.",
        ],
      },
      {
        heading: "Position as a Creative Strategist, Not a Prompt Operator",
        content: [
          "The same deliverable supports two prices depending on what the client thinks they're buying. 'AI image generator' is a commodity racing to $5/image. 'Creative strategist who owns the visual layer of our funnel' is a partner billing retainers. The difference is in what you talk about: prompt tricks versus their conversion rates, their creative fatigue, their product drops, their competitors' visual standards.",
          "Concretely: scope conversations before price conversations ('how many products, how often do you launch, where do the images run?'). Deliver structured feedback rounds with defined revision counts instead of unlimited tweaks. Show up with a point of view about their visuals, not a menu. The R&D process is the substance behind the positioning — brands can feel the difference between someone who researched their world and someone who owns a subscription.",
        ],
      },
      {
        heading: "What Not to Do",
        content: [
          "Don't race to the bottom — there will always be someone on Fiverr at $5/image, and that customer was never yours. Don't price 'unlimited revisions' — define rounds (typically 2-3) and what counts as a revision versus a new project, in writing, upfront. Don't quote a big retainer on day one — earn it one project at a time: trial project, testimonial, second drop, then the package conversation.",
          "And don't give away the strategy layer for free. Public ranges like the ones in this guide are safe to know and safe to share; the exact rate card, package structures, proposal templates and the message that flips a one-off project into a retainer are part of our paid AI Creative Client System — because they only work when delivered with the rest of the system.",
        ],
      },
    ],
    faq: [
      {
        question: "What should a complete beginner charge?",
        answer:
          "Start at the bottom of the working ranges — $25-50 packshots, $50-75 styled shots — and tell yourself the truth about what you're buying: testimonials and speed. After 3-5 projects with happy clients, move to standard rates. The ranges exist because the market pays them; your job is to get the proof that lets you ask.",
      },
      {
        question: "Per-image or per-project pricing?",
        answer:
          "Quote projects, calculate per-image. Clients think in deliverables ('we need the spring drop covered'), so scope the package — image counts by shot type, revision rounds, timeline — and sanity-check it against your per-image floor. Retainers beat both once the relationship exists.",
      },
      {
        question: "How does AI pricing compare to traditional photography?",
        answer:
          "A traditional product shoot runs thousands per day plus logistics, samples and weeks of lead time. AI delivery at $75-150/image undercuts the economics dramatically while being faster — which is why the positioning conversation matters: you're not 'cheaper photos,' you're a different production model with strategy included.",
      },
      {
        question: "When do I raise prices on an existing client?",
        answer:
          "At natural expansion points: a new tier of work (PDP → ads → social), a new product line, or contract renewal. Expanding scope at a better rate lands easier than re-pricing identical work — grow the account, don't squeeze it.",
      },
    ],
    keyTakeaways: [
      "Brands buy conversion integrity and reliability, not generations — that's what justifies real rates.",
      "Working per-image ranges: $25-50 packshots, $50-100 styled, $75-150+ lifestyle and model shots.",
      "Retainers are the business: $1k-3k/month for 20-30+ visuals, built via the PDP → Ads → Social path.",
      "Price your first projects to buy proof, then raise after 3-5 testimonials.",
      "Creative-strategist positioning defends premium rates; prompt-operator positioning races to $5/image.",
      "Define revision rounds upfront; quote scope before price; earn retainers one project at a time.",
    ],
    relatedResources: ["proof-before-pitch", "start-ai-photography-agency", "rd-process"],
  },

  // ──────────────────────────────────────────────
  // 5. HOW TO START AN AI PHOTOGRAPHY AGENCY
  // ──────────────────────────────────────────────
  {
    slug: "start-ai-photography-agency",
    title: "How to Start an AI Photography Agency",
    metaTitle: "How to Start an AI Photography Agency (Real Agency Playbook) | Dezygn",
    metaDescription:
      "The honest playbook for starting an AI product photography agency: niche selection, spec portfolios, the first 100 outreaches, and what a real delivery week looks like.",
    heroHeadline: "Built From a Real Agency, Not a Course Fantasy",
    image: "/images/seo/resources/start-ai-photography-agency.webp",
    imageAlt: "AI photography agency workflow from niche selection to client delivery",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    cta: {
      label: "Watch the Free Training",
      href: "/webinar",
      subtext: "The full client-getting walkthrough, including the outreach mechanism live.",
    },
    sections: [
      {
        heading: "The Dogfooding Story",
        content: [
          "Everything in this guide comes from running Fairway Creatives — an AI photography agency serving e-commerce brands — on Dezygn itself. The agency is why the product works the way it does: every feature exists because client delivery demanded it, and every number in this guide comes from real fulfillment, not theory. When we say a campaign session runs about two hours, it's because we timed it on a paying client.",
          "That matters because the AI-agency space is full of revenue screenshots and empty playbooks. The honest version: this is a real service business with real margins, it grows one client at a time, and the skills compound. Here's the actual shape of it.",
        ],
      },
      {
        heading: "Pick a Niche Like It's the Highest-Leverage Decision (It Is)",
        content: [
          "Picking the right niche is the single highest-leverage decision you'll make in this business. Get it right and outreach is easier, portfolio samples are more convincing, and clients are more likely to buy. Get it wrong and you'll burn through emails with nothing to show for it. Four filters: physical products that photograph well (golf gear, eyewear, jewelry, skincare, supplements, candles, pet products — and be careful with categories where AI still struggles or guidelines are strict, like fashion fit and food close-ups). Brands with visibly mediocre photography — that's your opening. Sufficient revenue to pay (real website, $25+ products, active marketing). And multiple products or seasonal drops, because recurring need is where retainers come from.",
          "We chose golf deliberately: brand-conscious buyers, constant seasonal drops, mid-tier brands with revenue but weak visuals, products with clean lines that photograph beautifully. When we filtered one ad-library search for golf apparel, roughly 2,000 ads led to 200+ brands, and over a hundred scored as strong prospects. Start broad, filter relentlessly, focus deep. Your niche determines how hard or easy everything else will be.",
        ],
      },
      {
        heading: "Build the Portfolio Before You Have Permission",
        content: [
          "You have the complete R&D process. You can produce professional-grade imagery for any brand with a website and products. So do exactly that — for brands you haven't been hired by. Two or three full spec campaigns in your niche, executed at delivery quality: brand identity, brand world, model direction, the full shot mix. Spec work with strategic intent is a portfolio; nobody needs to commission your proof.",
          "Then get clients with Proof Before Pitch: one custom image of the prospect's own product, attached to a short email, two follow-ups, repeated to the Rule of 100. The first deals from this mechanism at our agency: a $2,000 project, a $4,800 deal, and monthly retainers in the $700-800 range that are still running. The first client is the hardest. Everything after gets easier.",
        ],
      },
      {
        heading: "What a Week of Delivery Actually Looks Like",
        content: [
          "A real session from our golf client's monthly package: brief review and R&D about an hour (the client provides clean assets and mini-briefs — by then the system is calibrated), generation about an hour for 60 images across 6 deliverables, gallery review and delivery email about twenty minutes. Two hours twenty minutes, 29 approved images. A single-product session — a women's rain jacket needing three shots — ran 1h20, of which about 50 minutes was product prep: sourcing images, filtering for resolution, cropping, upscaling, naming.",
          "Notice the ratio. Product prep is routinely half the session or more, and that's the skill — knowing which source to pick, how to crop it, when to upscale, which angle matches the intended shot. Generation is the fast part. A premium eyewear campaign ran about four hours for 12 approved deliverables out of 137 generations: roughly 20% shortlisted, half of the shortlist approved. Those are honest production numbers; anyone promising one-click campaigns hasn't delivered one.",
        ],
      },
      {
        heading: "Run It Like a Business, Not a Gig",
        content: [
          "The unglamorous systems are the moat. Onboarding isn't paperwork — it's insurance: twenty minutes of structured intake (scope, references, assets, revision rounds, decision-maker) prevents the five-hour 'that's not what I wanted' conversation. Feedback runs on structure too: walk the client through the images using the six Visual Syntax ingredients as questions, and 'I don't love it' turns into 'the scene feels too European for an American golf brand' — a specific, one-round fix that actually happened.",
          "Deliver professionally (correct formats, clean naming, a message that opens the door to the next project), ask for the testimonial while the client is happy, and grow accounts along PDP → Ads → Social instead of constantly hunting new logos. The real revenue isn't in finding clients — it's in growing them. Write down what works as SOPs as you go; they're how good work becomes consistent work, and they're what makes the business sellable to a first hire later. (Our complete SOP library, templates and scoring systems are part of the paid program — the structure above is the whole skeleton.)",
        ],
      },
    ],
    faq: [
      {
        question: "How much does it cost to start?",
        answer:
          "A Dezygn subscription, a domain and an email address — under a couple hundred dollars a month all-in. The real investment is the 100 outreach attempts and the spec portfolio, which cost time, not money. Compare that to almost any other agency model and it's the cheapest credible start in the services world.",
      },
      {
        question: "How long until the first client?",
        answer:
          "Honest answer: as long as 100 serious outreach attempts take you — for most people working consistently, weeks, not days. Upwork shortens the loop because prospects there are already problem-aware. Anyone quoting guaranteed timelines is selling something other than the truth.",
      },
      {
        question: "Do I need photography experience?",
        answer:
          "No, but you need to learn to see like a photographer — which the Visual Syntax framework teaches deliberately: lighting recipes, camera language, composition. Design or photo backgrounds accelerate it; the framework exists so they're not prerequisites.",
      },
      {
        question: "Can I run this as a side project?",
        answer:
          "Yes — delivery sessions are measured in hours, not days, which is exactly what makes it side-project compatible. One or two retainer clients are very manageable alongside a job; the constraint is consistent outreach, not delivery capacity.",
      },
    ],
    keyTakeaways: [
      "This playbook comes from a real agency (Fairway Creatives) running its delivery on Dezygn — every number is from actual client work.",
      "Niche choice is the highest-leverage decision: photogenic physical products, weak existing visuals, real revenue, recurring drops.",
      "Build 2-3 spec campaigns without permission, then run Proof Before Pitch to the Rule of 100.",
      "Real delivery economics: ~2-4 hour sessions, 12-29 approved images, product prep is half the work.",
      "Structured onboarding and Visual Syntax feedback rounds prevent revision hell.",
      "Grow accounts along PDP → Ads → Social — the real revenue is in growing clients, not finding them.",
    ],
    relatedResources: ["proof-before-pitch", "ai-photography-pricing", "rd-process"],
  },

  // ──────────────────────────────────────────────
  // 6. AI PRODUCT PHOTOGRAPHY GUIDE
  // ──────────────────────────────────────────────
  {
    slug: "ai-product-photography-guide",
    title: "AI Product Photography: The Complete Workflow Guide",
    metaTitle: "AI Product Photography Guide — The Professional Workflow (2026) | Dezygn",
    metaDescription:
      "The professional AI product photography workflow: one-third research, one-third product prep, one-third generation. Production rules from real client delivery.",
    heroHeadline: "A Third Research, a Third Prep, a Third Generation",
    image: "/images/seo/resources/ai-product-photography-guide.webp",
    imageAlt: "Professional AI product photography workflow from source preparation to final render",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    cta: {
      label: "Start Free — 50 Credits, No Card",
      href: "https://chat.dezygn.com/signup",
      subtext: "Run this exact workflow in Dezygn with your own product.",
    },
    sections: [
      {
        heading: "The Shape of Professional Work",
        content: [
          "Ask an amateur where AI photography time goes and they'll say 'generating.' Time a professional session and you get a different answer: roughly a third research and direction, a third product preparation, a third generation and selection. On real client sessions, prep alone routinely takes half the clock. The generations are the cheap part; everything that makes them usable happens before and after.",
          "This guide is the workflow portion of our system: how images actually get built once the research exists. If you haven't read The R&D Process, start there — this guide assumes a scoped brief, a brand identity and a style direction already exist.",
        ],
      },
      {
        heading: "Sequential Pipeline, Not One-Shot Prompting",
        content: [
          "The single biggest workflow difference between amateurs and professionals: complex images are built in steps, not in one prompt. One-shotting a finished scene — model, product, pose, environment, lighting in a single generation — forces the AI to solve everything simultaneously, and you get compromises on every element.",
          "The sequential pipeline builds the image from validated parts: scenes generated empty as standalone assets, models as clean portraits, products as prepped source images — then composited. Each step produces a validated intermediate asset, so errors get caught early instead of compounding. When a composite fails, you know which ingredient failed, fix that one part, and recompose — instead of re-rolling the whole lottery. In Dezygn, Director Mode automates this assembly, but the thinking still matters: decompose, validate, composite.",
        ],
      },
      {
        heading: "Product Prep: The Skill Nobody Respects Until It Bites",
        content: [
          "Clean inputs make clean outputs — the AI cannot add information that isn't in the source. The prep checklist from real delivery: source images at 2,000px minimum on the long edge (critical label text at least ~100px tall in the source — if it's blurry when you zoom in, it will be worse in the output). Backgrounds removed. Multiple angles collected, named by product and angle so 'the front view of model 562P' is findable in seconds, not minutes. Dimensions documented, because the AI doesn't know how big your product is.",
          "Two rules discovered the expensive way: match the source angle to the intended output angle — every degree of difference is information the AI must hallucinate, so a side-view shot wants a side-view source. And crop the source to the signal — a model's face and legs in a jacket source image are noise the AI must reproduce or suppress, and both cost quality. For upscaling fine text, use a dedicated upscaler; general-purpose editors smear type that proper tools preserve.",
        ],
      },
      {
        heading: "Generation: Recipes, Resolution, and Micro-Iterations",
        content: [
          "Generation runs on camera and lighting recipes, not vibes. The combinations that cover most commercial work: 85mm + f/1.8 + soft studio for premium heroes; 50mm + f/1.8 + natural window light for authentic lifestyle; 85mm + f/8 + soft studio for sharp catalog work. Lighting follows material: matte products take broad soft light, and reflective products — glass, metal, jewelry — must have multi-directional fill, because single-direction light buries their surfaces in black.",
          "The production rule that solves the most mysterious failures: output resolution must match or exceed input resolution. A 2K source rendered at 1K output forces downscaling that blurs fine detail — brand text is the canary. If labels look consistently wrong despite a clean source, it's a settings problem, not a prompt problem. The most expensive bugs are the ones that look like creative problems but are actually technical settings. Iterate compositions at 1K for speed; render finals at 2K+.",
          "When one specific detail won't render — an unusually narrow frame shape, a strange clasp — don't re-roll the same prompt and don't rewrite everything. Micro-iterate: vary only the language around the problem feature ('oval' → 'elongated oval'), keep everything else stable, and run 10-15 small variations. Two or three will land; work from those. It's systematic variation, not random prompting — like tuning to find the right frequency.",
        ],
      },
      {
        heading: "Selection and Quality Control",
        content: [
          "Honest production math from a real premium campaign: 137 generations, 27 shortlisted, 12 approved by the client. Roughly 20% of generations deserve a shortlist and about half of those survive client review — and that's a calibrated system on a known brand. Plan volumes accordingly and you'll never miss a deliverable count; expect one-to-one and every project becomes a crisis.",
          "QC before delivery runs on the same six ingredients used to build the image: product accuracy (shape, color, label text, proportions — against the real product, not your memory of it), model consistency across the set, scene and lighting coherence, brand alignment. The standard is simple: would you put this image in your own portfolio? If an image needs a disclaimer, it isn't done. Accuracy is non-negotiable — an image that flatters the product into dishonesty is a refund, not a deliverable.",
        ],
      },
    ],
    faq: [
      {
        question: "Which AI model should I use for product photography?",
        answer:
          "The model matters less than the workflow — accuracy comes from clean sources, sequential assembly and resolution discipline, which apply to every capable model. Dezygn orchestrates current image models under one workflow so you work in recipes and ingredients rather than chasing model updates.",
      },
      {
        question: "How many images should I generate per final deliverable?",
        answer:
          "Plan for roughly 10:1 from generation to approved deliverable on new work — real campaign numbers run about 20% shortlisted and half of the shortlist approved. Calibrated repeat campaigns get dramatically more efficient as your documented settings compound.",
      },
      {
        question: "Why does my product's label text keep coming out wrong?",
        answer:
          "Two usual suspects, in order: your source resolution (text under ~100px tall in the source can't survive) and your output resolution set below your input. Fix the source first, then match output to input. It's almost never the prompt.",
      },
      {
        question: "Can AI handle reflective products like glass and jewelry?",
        answer:
          "Yes, with the right lighting recipe: soft multi-directional studio light with fill, never single-direction dramatic light, which creates dark voids on reflective surfaces. Keep the mood in the background and the fill on the product.",
      },
    ],
    keyTakeaways: [
      "Professional time splits roughly a third research, a third product prep, a third generation — prep is the skill.",
      "Build sequentially: scenes, models and products as validated assets, then composite. One-shot prompting compounds errors.",
      "Source rules: 2K minimum, crop to signal, match source angle to output angle, dedicated upscalers for text.",
      "Output resolution must match or exceed input — blurry brand text is a settings bug, not a prompt bug.",
      "Micro-iterate stubborn details by varying only the problem language across 10-15 small runs.",
      "Plan ~10:1 generation-to-approval on new work and QC against the real product with the six ingredients.",
    ],
    relatedResources: ["visual-syntax", "rd-process", "ai-photography-pricing"],
  },

  // ──────────────────────────────────────────────
  // 7. MASTERCLASS (kept — real YouTube playlist)
  // ──────────────────────────────────────────────
  {
    slug: "ai-lifestyle-product-photography-masterclass",
    title: "AI Lifestyle & Product Photography Masterclass",
    metaTitle:
      "AI Lifestyle & Product Photography Masterclass — Dezygn Resources",
    metaDescription:
      "The complete AI photography workflow used with real clients: briefs, brand identity, Visual Syntax, prompting, quality control, and delivery.",
    heroHeadline:
      "The Complete Workflow for AI Product + Lifestyle Photography (Agency Edition)",
    image: "/images/seo/resources/ai-lifestyle-product-photography-masterclass.jpg",
    imageAlt:
      "AI lifestyle and product photography masterclass thumbnail featuring a model holding a skincare product",
    cta: {
      label: "Watch the playlist on YouTube",
      href: "https://www.youtube.com/playlist?list=PLDWnj8EaOunb22xH4H2ges3KNQyDFtpWa",
      subtext:
        "Free masterclass playlist covering the full agency workflow end to end.",
    },
    sections: [
      {
        heading: "What This Masterclass Covers",
        content: [
          "This is the full, real-world workflow for creating AI product and lifestyle photography that converts. It walks through how I handle client briefs, translate brand identity into art direction, and create cohesive product + lifestyle image systems that feel like one brand, not two separate shoots.",
          "You will see the complete process using a real case study (LELA Natural Beauty), including how to reverse engineer reference images, build prompts that stay on-brand, and deliver images a client can approve quickly.",
        ],
      },
      {
        heading: "Who It Is For",
        content: [
          "Graphic designers pivoting into AI product photography, freelancers adding lifestyle imagery to their services, and creative professionals targeting e-commerce brands will get the most value.",
          "If you are building an AI photography agency, this masterclass is designed to show you exactly how to run projects end-to-end — not just generate nice images.",
        ],
      },
      {
        heading: "Why Lifestyle Photography Pays",
        content: [
          "Product-only shots are increasingly DIY. Lifestyle imagery is not — it requires art direction, model consistency, and a cohesive visual story.",
          "Lifestyle images drive higher conversion rates and justify premium pricing, making them the highest-leverage skill for AI photography agencies.",
        ],
      },
      {
        heading: "The 7-Part Workflow",
        content: [
          "The masterclass follows a 7-part sequence: understanding the client brief, extracting brand identity, reverse engineering reference imagery, preparing product photos, prompting and iteration, quality control, and client delivery with feedback loops.",
          "Each step is structured so you can repeat it across multiple clients and build a scalable, professional agency process.",
        ],
      },
      {
        heading: "Reverse Engineering with Visual Syntax",
        content: [
          "Instead of vague prompts, the workflow uses Visual Syntax to break images into controllable components: style, subject, action, scene, camera, and brand.",
          "This makes your prompts precise, reduces failed generations, and creates consistent results across an entire product line.",
        ],
      },
      {
        heading: "Preparation, Quality Control, and Delivery",
        content: [
          "Great AI outputs start with preparation: high-quality product reference images, clear product specs, and an organized asset structure.",
          "The masterclass includes a repeatable QC checklist (edges, lighting consistency, color accuracy, proportions) and a clean delivery process that makes client approvals easy.",
        ],
      },
    ],
    keyTakeaways: [
      "Lifestyle imagery is the highest-value offering for AI photography agencies because it is harder to DIY and converts better.",
      "Use a structured workflow (brief → brand identity → references → prompting → QC → delivery) to scale across clients.",
      "Visual Syntax-style prompting reduces guesswork and keeps your outputs on-brand.",
      "Preparation matters: clean references and documented product specs prevent accuracy problems later.",
      "Quality control should check realism, proportions, lighting alignment, and brand consistency before delivery.",
      "A reliable delivery + feedback loop makes clients trust you and keeps projects moving.",
    ],
    relatedResources: [
      "start-ai-photography-agency",
      "visual-syntax",
      "rd-process",
    ],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}
