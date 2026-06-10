export interface ShotType {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  image: string;
  imageAlt: string;
  definition: string;
  whenToUse: string[];
  howDezygn: string;
  tips: { title: string; description: string }[];
  relatedShotTypes: string[];
  relatedUseCases: string[];
}

export const shotTypes: ShotType[] = [
  // ──────────────────────────────────────────────
  // PACKSHOT (slug kept as "studio" for SEO)
  // ──────────────────────────────────────────────
  {
    slug: "studio",
    title: "Packshot Photography",
    metaTitle: "AI Packshot & Studio Product Photography | Dezygn",
    metaDescription:
      "Engineer clean, accurate packshots with AI: white background, controlled studio lighting, legible labels, marketplace-ready. The Visual Syntax recipe inside.",
    heroHeadline: "The Most Boring Shot in Your Catalog Is the One That Does the Selling",
    image: "/images/seo/shot-types/studio.webp",
    imageAlt: "Clean AI packshot on white background with soft studio lighting",
    definition:
      "The packshot is your product, isolated on a clean background, lit evenly, with nothing else in frame. It's the shot Amazon requires, every marketplace expects, and every product page is built on. It is also where AI photography most often falls apart — because the packshot is a pure accuracy test. There is no scene to hide behind. If the cap is the wrong material, if the label text is mangled, if the proportions are off, the customer sees it instantly. Accuracy is non-negotiable here: an embellished packshot doesn't just look bad, it generates 'item not as pictured' refunds.",
    whenToUse: [
      "Marketplace primary images — Amazon requires pure white background (RGB 255,255,255) with the product filling about 85% of the frame, and Walmart and Google Shopping have similar rules",
      "Product detail pages, where the packshot is the reference image shoppers zoom into before buying",
      "Catalogs and wholesale line sheets where buyers need to evaluate the product with zero environmental distraction",
      "Any time you need perfect consistency across a full product line — same angle, same lighting, same shadow on every SKU",
    ],
    howDezygn:
      "In the Visual Syntax framework, the packshot is the shot where Subject does almost all the work. Style is fixed: clean catalog, high-key bright, white or pale neutral background. Action is none. Scene is a lighting decision, not a location. The camera recipe is fixed too: 85mm, f/8 to f/11, straight-on or a slight 3/4 angle — the 'sharp catalog' look where every detail is visible and nothing is hidden.\n\nThat leaves the Subject — and this is where Dezygn does it differently. Instead of describing your product and hoping, you attach the actual product photo and Awa recreates it in the new setup without guessing. The AI doesn't know what your product looks like; if you're vague, it will guess, and its guess won't match reality. A real source image anchors the shape, the materials, the label, the exact colors.\n\nOne rule from real client work that nobody tells you: lighting must match material. Matte products want broad soft light. But if your product is reflective — glasses, jewelry, metal, glass — you must use soft studio lighting with fill from multiple directions. Single-direction lighting creates dark sides that hide details. We learned this the hard way on client eyewear work.",
    tips: [
      {
        title: "Your source image decides your output quality",
        description:
          "Garbage in, garbage out. A dark, blurry product photo won't magically become sharp in the output. Use a source at least 2,000px on the long edge, background removed, multiple angles if you have them. If text on the label is blurry when you zoom into the source, it will be worse in the generated image — the AI cannot add information that isn't there.",
      },
      {
        title: "Set output resolution to match or exceed the source",
        description:
          "A 2K source rendered at 1K output forces the pipeline to downscale, which blurs fine detail — brand text is always the first casualty. If your labels look consistently wrong, it's a resolution setting, not a prompt problem. Test compositions fast at 1K, then render final deliverables at 2K+.",
      },
      {
        title: "Keep the contact shadow",
        description:
          "A product floating on pure white with zero shadow reads as a bad Photoshop cutout. A soft, natural contact shadow grounds the product and makes it feel photographed rather than generated. For glossy surfaces, a subtle reflection adds even more realism.",
      },
      {
        title: "Shoot the whole line in one session",
        description:
          "Marketplaces want 5-7 images per product, and a catalog needs identical lighting across every SKU. Define the setup once — lighting, angle, shadow depth — and apply it to the entire line in one batch. Consistency is what makes a catalog look professional, and it's the thing traditional shoots struggle to maintain across days.",
      },
      {
        title: "Reflective product? Soft studio with fill — always",
        description:
          "Chrome, glass, polished metal and acetate act like mirrors. Golden hour and single-source dramatic lighting create dark voids on reflective surfaces that hide the product's form. Use a three-point soft setup with fill so the light wraps around the product and every surface stays readable.",
      },
    ],
    relatedShotTypes: ["detail-close-ups", "packaging", "scale-shots"],
    relatedUseCases: ["supplements", "electronics", "skincare"],
  },

  // ──────────────────────────────────────────────
  // LIFESTYLE
  // ──────────────────────────────────────────────
  {
    slug: "lifestyle",
    title: "Lifestyle Photography",
    metaTitle: "AI Lifestyle Product Photography | Dezygn",
    metaDescription:
      "Engineer lifestyle product photos with AI: real-world scenes, natural light, on-brand environments. How pros build the scene before they place the product.",
    heroHeadline: "Put the Product in the Customer's Life — Without Renting the Life",
    image: "/images/seo/shot-types/lifestyle.webp",
    imageAlt: "AI lifestyle product photography showing a product styled in a natural home setting",
    definition:
      "A lifestyle shot places the product in a real-world context — a kitchen counter, a gym bag, a café table — and answers the question every shopper silently asks: 'what does this look like in my life?' It's the workhorse of ads and social because context creates desire in a way isolation can't. It's also the shot where amateurs one-shot everything ('woman in kitchen holding product, professional, beautiful') and get compromises on every element, because the AI has to solve for person, product, pose, environment and lighting simultaneously.",
    whenToUse: [
      "Paid ads on Meta and TikTok, where in-context creative that looks native to the feed consistently outperforms catalog shots — and where you need constant fresh variations to fight creative fatigue",
      "Instagram and Pinterest content, where aspirational, in-context imagery is the format",
      "Secondary PDP images that show scale, context and use after the packshot has done the accuracy work",
      "Email and landing page heroes where the environment carries the brand story",
    ],
    howDezygn:
      "The professional move is to build the scene before you place the product. In Dezygn, scenes are generated as standalone ingredients — empty, no people, no products, 3-4 angles per location with matching light — and saved to your library. Then the product (anchored by its real photo) and the model are composited in. Complex images are built sequentially, not in one shot. Each step produces a validated asset, so errors get caught early instead of compounding.\n\nThe Visual Syntax recipe for lifestyle: Style is lifestyle/natural — authentic feel, candid moment. Scene is where the work happens, and it should come from your brand identity, not from a generic preset. If the brand world is 'Mediterranean coastal, olive groves, sun-bleached linen, terracotta and sage,' a neon Tokyo alley is jarring — and so is a generic 'modern kitchen.' Camera: 50mm at f/1.8-f/2.8. 50mm is how human eyes perceive space; it feels honest, approachable, real — which is exactly the emotional register lifestyle needs.\n\nLighting is 50% of the equation. Natural window light or golden hour, soft and directional, sells 'real moment.' Get the light wrong and no amount of styling saves the image.",
    tips: [
      {
        title: "Default to mid-shots, not wide shots",
        description:
          "Wide shots are landscape photography; mid-shots are product photography with environment. Go wide and the product becomes a small element in a pretty scene. When a brief calls for dramatic environments, frame mid so the storytelling and the product both survive. This rule came out of real apparel client work, where wide 'epic' shots kept burying the jacket.",
      },
      {
        title: "Build a scene library per client",
        description:
          "Generate each location empty, in 3-4 angles with consistent lighting, and name them clearly. Scenes don't involve product or model accuracy, so they can be produced in advance — which means campaign day is composition day, not generation day.",
      },
      {
        title: "Anchor scenes in brand research, not adjectives",
        description:
          "The difference between $10/image and $100/image lifestyle work is research. For a Japanese eyewear client we traced the brand's craft origins to Sabae, Japan's eyewear capital, and used the surrounding region as the visual universe. You don't need to show the landmark — the research shapes every scene decision and the images stop looking like everyone else's.",
      },
      {
        title: "Golden hour is for matte products and people",
        description:
          "Golden hour is single-direction light. It's beautiful on skin, fabric and ceramics — and it does not work for reflective products. Glass, metal and jewelry need soft multi-directional studio light so their surfaces stay readable. Match the lighting recipe to the material before you fall in love with a mood.",
      },
      {
        title: "Add one trace of life",
        description:
          "A hand reaching in, a half-finished coffee, an open book — small human traces make a scene feel lived-in instead of staged. You don't need a full model in every lifestyle frame; you need evidence that a person was just there.",
      },
    ],
    relatedShotTypes: ["hero-shots", "model-shots", "ugc"],
    relatedUseCases: ["candles", "skincare", "home-decor"],
  },

  // ──────────────────────────────────────────────
  // HERO SHOT
  // ──────────────────────────────────────────────
  {
    slug: "hero-shots",
    title: "Hero Shot Photography",
    metaTitle: "AI Hero Shot Product Photography | Dezygn",
    metaDescription:
      "Engineer hero shots with AI: 85mm, creamy bokeh, editorial lighting. The camera recipe luxury brands actually use, and how to apply it to your product.",
    heroHeadline: "The Shot That Sells the Product Before Anyone Reads a Word",
    image: "/images/seo/shot-types/hero-shots.webp",
    imageAlt: "Dramatic AI hero shot with editorial lighting and shallow depth of field",
    definition:
      "The hero shot is the statement image — the one at the top of the product page, the campaign visual, the image that has to carry the brand's ambition on its own. Where the packshot's job is accuracy, the hero shot's job is desire. It says 'this subject is special' through lighting, isolation and depth, not through claims. Most products get exactly one hero shot per campaign, which means this is the image where craft is most visible — and where slot-machine prompting is most obvious.",
    whenToUse: [
      "The first image on your own product page (marketplaces still want the white-background packshot first)",
      "Campaign launches, homepage banners and landing page heroes where one image sets the tone",
      "Top-of-funnel ads where you need a scroll-stopper that still looks premium, not clickbait",
      "Email headers and lookbook covers for product drops",
    ],
    howDezygn:
      "The hero shot has a known camera recipe, and Dezygn applies it instead of guessing. 85mm is the money-maker lens: it isolates the subject, compresses the background, and makes everything look slightly more expensive — it's what luxury brands actually use. Pair it with f/1.8-f/2.8 for the beautiful blur: creamy bokeh, isolated subject, everything feels elevated. Frame at a slight 3/4 angle — the most flattering, most professional default. For ultra-premium drama, step up to 135mm: extreme compression, magazine feel. Use it sparingly; it's a power move.\n\nStyle is editorial or moody: dramatic directional lighting, rich shadows, premium aesthetic. Scene stays minimal — a styled surface, a hint of environment, nothing competing with the subject. Think of AI attention like a budget: the hero shot spends almost all of it on the subject and the light.\n\nBrand is the quiet ingredient that makes a hero shot feel like yours: exact hex colors in the palette, the right color temperature, one or two identity textures. 'Navy blue' means different things to different AIs. Your hex code means exactly one thing.",
    tips: [
      {
        title: "When in doubt for premium work, go 85mm",
        description:
          "Out of dozens of focal lengths, three matter: 50mm feels honest, 85mm feels premium, 135mm feels cinematic. The hero shot almost always wants 85mm with shallow depth. If the image feels flat or 'catalog,' the lens choice is usually the culprit, not the styling.",
      },
      {
        title: "Moody lighting needs a matte product",
        description:
          "The single strong key light that makes moody hero shots cinematic also creates dark voids on reflective surfaces. If the product is glass, metal or polished acetate, keep the drama in the background and light the product itself with soft fill.",
      },
      {
        title: "Front-load what matters in the prompt",
        description:
          "The AI pays more attention to the beginning of your prompt than the end. If the brand's burgundy keeps coming out generic red, move the brand block to the top and repeat the critical detail. The default ingredient order works for most shots — you break it when something isn't coming through.",
      },
      {
        title: "One hero, many crops",
        description:
          "Compose with negative space so the same hero survives a 1:1 feed crop, a 9:16 story crop and a wide web banner. Generating the hero at the final aspect ratio always beats cropping after the fact — composition never survives the scissors.",
      },
    ],
    relatedShotTypes: ["studio", "lifestyle", "brand-atmosphere"],
    relatedUseCases: ["jewelry", "eyewear", "beauty"],
  },

  // ──────────────────────────────────────────────
  // FLAT LAY
  // ──────────────────────────────────────────────
  {
    slug: "flat-lay",
    title: "Flat Lay Photography",
    metaTitle: "AI Flat Lay Product Photography | Dezygn",
    metaDescription:
      "Engineer styled flat lays with AI: overhead framing, deliberate prop systems, brand-consistent surfaces. The recipe for kits, bundles, and social grids.",
    heroHeadline: "Styled Chaos Is Still Engineering",
    image: "/images/seo/shot-types/flat-lay.webp",
    imageAlt: "Overhead AI flat lay with products and props arranged on a styled surface",
    definition:
      "A flat lay is shot from directly overhead: products and props arranged on a surface, composed like a small still life. It reads as effortless, which is exactly why it's hard — every object in frame is a deliberate choice, and one off-brand prop breaks the spell. Flat lays shine when the story is 'what's in the set': bundles, routines, kits, ingredients, everything-you-get shots.",
    whenToUse: [
      "Bundles and kits, where one image has to show every item a customer receives",
      "Social grids — flat lays are a native Instagram and Pinterest format and sit well next to lifestyle shots",
      "Routine and ritual storytelling: the skincare shelf, the morning setup, the travel kit",
      "Collection launches where products need to appear together with consistent styling",
    ],
    howDezygn:
      "The flat lay recipe fixes Camera and frees Scene. Camera: overhead, f/8-style sharpness — every item in focus, because a flat lay with a blurry corner just looks like a mistake. Style: compositional, artistic, soft natural light.\n\nThe real engineering is in the prop system, and this is where brand identity earns its keep. Every brand vibe has a coherent material world: luxury wants marble, brass, silk and fresh peonies; natural-organic wants raw wood, linen, botanicals and stone; bold-playful wants saturated paper backdrops and graphic shapes. In Dezygn you define that world once — surface, palette, prop families, light — and Awa styles every flat lay inside it. The props change per shot; the world doesn't. That's how ten flat lays across a season still read as one brand.\n\nProducts go in as real source images, not descriptions, so labels and proportions survive. Props can be generated; the product can't be guessed.",
    tips: [
      {
        title: "Pick a hero, even overhead",
        description:
          "A flat lay without a focal point is clutter. Give the primary product the visual weight — center-adjacent placement, the most contrast, the cleanest negative space around it — and let props orbit it. The eye should land on the thing for sale within a second.",
      },
      {
        title: "Props must pass the brand filter",
        description:
          "Before any prop goes in frame, it answers to the brand identity: would this object exist in the brand's world? Eucalyptus and travertine belong to a wellness brand; a neon stapler doesn't. The fastest way to make a flat lay look cheap is one prop from the wrong universe.",
      },
      {
        title: "Odd numbers, deliberate gaps",
        description:
          "Three or five supporting objects compose better than four or six, and negative space is a styling element, not wasted room. If the layout feels crowded, remove a prop before you shrink anything.",
      },
      {
        title: "Keep the surface consistent across a series",
        description:
          "If the campaign's flat lays jump from marble to walnut to concrete, the set falls apart on a grid. Lock the surface and light as part of the brand definition and vary the arrangement instead.",
      },
    ],
    relatedShotTypes: ["studio", "packaging", "detail-close-ups"],
    relatedUseCases: ["skincare", "food-beverage", "fashion-accessories"],
  },

  // ──────────────────────────────────────────────
  // MODEL SHOTS
  // ──────────────────────────────────────────────
  {
    slug: "model-shots",
    title: "Model Shot Photography",
    metaTitle: "AI Model Shots & Dedicated AI Models | Dezygn",
    metaDescription:
      "Engineer on-brand AI model shots: dedicated models, comp cards, clean portraits, and the compositing rule that saves hours. From real client eyewear work.",
    heroHeadline: "Your Brand Deserves a Dedicated Model — Not a Different Face Every Image",
    image: "/images/seo/shot-types/model-shots.webp",
    imageAlt: "AI model shot showing a consistent dedicated model wearing a product",
    definition:
      "Model shots put the product on a person — worn, held, used. For entire categories they aren't optional: eyewear, jewelry and apparel barely sell without a face or a body in frame, because fit is the purchase question. The professional standard is the dedicated model: one consistent, brand-matched face that appears across the whole campaign, so your store doesn't look like it hired a different person for every photo. The amateur standard is whatever face the slot machine spits out today.",
    whenToUse: [
      "Eyewear, jewelry and apparel PDPs, where customers need to see fit and scale on a person before buying",
      "Ad creative — faces stop thumbs, and model variations are the fastest way to refresh fatigued campaigns",
      "Brand campaigns where the same recognizable model carries a season of content",
      "Size and fit storytelling: the same garment on different body types, the same frame on different face shapes",
    ],
    howDezygn:
      "Dezygn's model workflow comes straight from agency delivery work. First, the model brief is generated from the brand identity — not 'attractive woman,' but the client's actual customer: 'age 35-60, elegant, understated, confident with calm presence, never demonstrative; matte collarless dark sweaters, neutral expressions.' The subject IS the customer avatar. Choose deliberately.\n\nThen comp cards: a grid of poses and angles per candidate model, used to pick the face. And here's the rule that separates pros from people who lose afternoons: the comp card is for selection only — never use it as a compositing source. On a real eyewear project, a comp card showed sunglasses pushed above the model's eyebrows. Every attempt to composite prescription glasses onto that model put them above the eyebrows too, because the source image wins over the prompt. Always. Three hours lost. The fix took one generation: a clean portrait — white background, plain tee, zero accessories — paired with the clean product image. Glasses sat correctly on the first try.\n\nSo the pipeline is: brief → comp cards → clean portraits → composite with the real product photo. Mise en place, but for photography.",
    tips: [
      {
        title: "Generate the clean portrait before you need it",
        description:
          "For every selected model, produce portrait variants on white with neutral clothing and no accessories, in 2-3 angles. These are your prepped ingredients — every future composite starts from them, and they're the reason your composites work on the first try instead of the fifteenth.",
      },
      {
        title: "Stack features to escape the generic AI face",
        description:
          "Vague model prompts produce the same averaged face everyone else gets. Specify structure: face shape, chin, cheekbones, eyes, lips. 'Oblong face, pointed chin, high cheekbones, hooded eyes' renders a person; 'beautiful model' renders a stock photo.",
      },
      {
        title: "Control emotion with volume adjectives",
        description:
          "Raw emotions render theatrical. 'Happy' gives you a toothpaste ad; 'quiet joy' or 'subtle smile' gives you editorial. Same with 'restrained anxious look' over 'anxious.' Direct the dial, not the label.",
      },
      {
        title: "Know the rendering quirks",
        description:
          "Models aged 18-24 need the keyword 'youthful' or they render late-twenties. Adult male models default to stubble — specify 'clean-shaven' if that's not the brand. These aren't style choices, they're known model behaviors you work around.",
      },
      {
        title: "Match the model's energy to the shot type",
        description:
          "The same product supports opposite directions. For one Parisian eyewear client, the paparazzi set needed 'busy, arrogant, never poses' energy, and the fashion set needed 'dressed for the kill.' For a Japanese titanium brand, the direction was the reverse: calm, still, composed — the eye goes to the frames, not the model. Action is an ingredient; direct it.",
      },
    ],
    relatedShotTypes: ["ugc", "paparazzi", "lifestyle"],
    relatedUseCases: ["eyewear", "fashion-accessories", "jewelry"],
  },

  // ──────────────────────────────────────────────
  // UGC
  // ──────────────────────────────────────────────
  {
    slug: "ugc",
    title: "UGC-Style Photography",
    metaTitle: "AI UGC-Style Product Photos for Ads | Dezygn",
    metaDescription:
      "Engineer UGC-style product photos with AI: iPhone aesthetic, candid framing, authentic imperfection. The ad format that beats polish — done deliberately.",
    heroHeadline: "Engineered to Look Unengineered",
    image: "/images/seo/shot-types/ugc.webp",
    imageAlt: "Authentic UGC-style AI photo of a person holding a product in casual lighting",
    definition:
      "UGC-style shots imitate what a happy customer would post: iPhone aesthetic, imperfect lighting, candid framing, real-life clutter. In feeds and ad placements they routinely outperform polished studio work because they don't pattern-match to 'advertisement' — they pattern-match to 'person like me.' The paradox is that good UGC is deliberately engineered: the imperfection is specified, not accidental. Random sloppiness reads as low quality; designed authenticity reads as trust.",
    whenToUse: [
      "Meta and TikTok ad creative, where native-looking content beats studio polish and you need volume — fresh variations beat optimized single winners under Meta's current ranking",
      "Review sections, email and organic social, where studio shots would feel out of place",
      "Testing new angles cheaply: UGC variations are fast to produce and fast to read in the data",
      "Brands whose buying trigger is relatability rather than aspiration",
    ],
    howDezygn:
      "The UGC recipe inverts the usual rules on purpose. Style: 'authentic UGC photography, shot on iPhone, candid feel' — that phrase does heavy lifting. Scene: a real home environment with natural, slightly imperfect light; a bathroom counter beats a marble pedestal. Camera: 50mm-equivalent, deeper aperture around f/4, casual framing — selfie distance, slightly off-center, the kind of crop a person makes with one hand.\n\nAction is the ingredient that makes UGC breathe: mid-application, mid-sip, caught-in-the-moment, gaze off-camera or into a mirror rather than locked on the lens. Candid interaction reads authentic; posed presentation reads like an ad wearing a costume.\n\nThe one thing that never goes casual is the Subject. The product photo is still the real product, transferred accurately — label legible, proportions true. Authenticity in the styling, accuracy in the product. People can smell AI from a mile away now, and when they smell it, they close their wallet — the UGC frame only works if the product in it is unmistakably real.",
    tips: [
      {
        title: "Specify the imperfection",
        description:
          "Don't hope for authentic — direct it: 'natural imperfect lighting,' 'candid bathroom selfie,' 'slightly off-center framing.' If you leave authenticity to chance, you get either studio gloss or unusable mess. The imperfections are ingredients.",
      },
      {
        title: "Make volume your strategy",
        description:
          "UGC is the format where creative fatigue bites fastest and where testing pays best. Produce batches — different models, rooms, times of day, hooks — and let the ad account tell you which 'person' your customers believe. One UGC winner repeated for a month dies; ten variants rotating don't.",
      },
      {
        title: "Keep the gaze off the camera (usually)",
        description:
          "Looking at the product or into a mirror reads candid. Direct eye contact reads like a presenter. Save to-camera gaze for testimonial-style frames where the 'creator' is talking to you.",
      },
      {
        title: "Casual scene, accurate product",
        description:
          "The cluttered counter can be generated; the product cannot. Always anchor the product with its real photo so the label, colors and shape survive the casual treatment. A relatable photo of the wrong product is a refund with good engagement.",
      },
    ],
    relatedShotTypes: ["model-shots", "lifestyle", "paparazzi"],
    relatedUseCases: ["skincare", "supplements", "beauty"],
  },

  // ──────────────────────────────────────────────
  // BEFORE / AFTER
  // ──────────────────────────────────────────────
  {
    slug: "before-after",
    title: "Before & After Photography",
    metaTitle: "AI Before & After Product Imagery | Dezygn",
    metaDescription:
      "Engineer honest before/after and comparison visuals with AI: matched framing, matched lighting, accurate products. Persuasion without the refund risk.",
    heroHeadline: "Comparison Sells — If Both Frames Are Honest",
    image: "/images/seo/shot-types/before-after.webp",
    imageAlt: "Side-by-side before and after comparison frames with matched lighting",
    definition:
      "Before/after and comparison shots show contrast: the problem state and the solved state, the messy desk and the organized one, the dull surface and the polished one. They're among the highest-converting formats in e-commerce because they sell the outcome, not the object. They're also where trust goes to die when done dishonestly. The rule from running real client work: the AI image must respect physical reality. 'Close enough' isn't a style choice — close enough is a refund, and refunds kill businesses. Use this format to dramatize a real difference, never to manufacture one.",
    whenToUse: [
      "Cleaning, organization, restoration and tool products, where the transformation is the entire pitch",
      "Ad creative — the split-frame format is a proven scroll-stopper on Meta",
      "Landing pages demonstrating use: with/without, day/night, packed/unpacked, assembled/unassembled",
      "Comparison content that contrasts contexts (product in drawer chaos vs. in its organizer) rather than claiming physical results",
    ],
    howDezygn:
      "The craft of a before/after is sameness. The two frames must match in everything except the change: same scene, same camera position, same focal length, same light. Any drift between frames reads as manipulation — because it is. In Dezygn you build the scene once as a standalone asset, lock the camera recipe, and generate both states inside that fixed container. Sequential construction is what makes the discipline possible; one-shotting two matching frames is a coin flip.\n\nVisual Syntax-wise: Scene and Camera are frozen across both frames. Subject changes state. Style stays documentary-clean — bright, even, f/8 sharpness — because stylized drama undermines the 'this is evidence' read that makes the format convert.\n\nWhere the line is: staging contexts is legitimate (the cluttered counter, the tidy shelf). Fabricating product performance is not — especially body-results claims in skincare and supplements, which platform policies restrict and which violate the accuracy principle this whole system is built on. Show the product's real difference dramatically; don't invent a difference.",
    tips: [
      {
        title: "Lock everything except the change",
        description:
          "Generate the scene as a reusable asset and produce both frames from it with identical camera language. If the camera moves or the light shifts between frames, viewers sense the trick even when they can't name it.",
      },
      {
        title: "Let the 'before' be genuinely ugly",
        description:
          "The instinct to art-direct the before frame kills the format. The before should be believably bad — dim, cluttered, unflattering — and the after should win on the merits of the same honest camera.",
      },
      {
        title: "Use it for context, not claims",
        description:
          "The safe, durable version of this format contrasts situations: without the organizer vs. with it, before the candle is lit vs. the lit ambiance. Physical-results claims (skin, hair, body) are a policy and trust minefield — sell those products with texture, ritual and lifestyle instead.",
      },
      {
        title: "Label the frames",
        description:
          "A small 'before / after' label improves comprehension at feed speed and signals confidence. If the comparison needs studying to be noticed, the shot failed — contrast should land in half a second.",
      },
    ],
    relatedShotTypes: ["studio", "lifestyle", "detail-close-ups"],
    relatedUseCases: ["home-decor", "fitness", "pet-products"],
  },

  // ──────────────────────────────────────────────
  // SCALE SHOTS
  // ──────────────────────────────────────────────
  {
    slug: "scale-shots",
    title: "Scale Shot Photography",
    metaTitle: "AI Scale Shots — Show True Product Size | Dezygn",
    metaDescription:
      "Engineer scale shots with AI: hands, props and environments that communicate true product size. The accuracy shot that prevents 'smaller than expected' refunds.",
    heroHeadline: "If the Pendant Is 2cm, It Must Look 2cm",
    image: "/images/seo/shot-types/scale-shots.webp",
    imageAlt: "AI scale shot showing a product held in a hand for size reference",
    definition:
      "A scale shot communicates true size by placing the product against a universal reference — a hand, a face, a table, a doorway. It exists because photographs lie about size by default: a 30ml jar and a 100ml jar look identical on white. 'Smaller than expected' is one of the most common reasons for returns and 1-star reviews, and it's entirely preventable. This is the most literal expression of the accuracy principle: if the pendant is 2cm, it must look 2cm. If the texture is matte, it cannot be glossy. The image is a promise the physical product has to keep.",
    whenToUse: [
      "Jewelry, accessories and any product whose photos zoom past its real size — the categories where size disappointment drives returns",
      "PDP image sets: at least one image in every listing should answer 'how big is it?' without the customer reading specs",
      "Furniture and home goods, where room context is the size reference",
      "Ads for products whose size IS the selling point — oversized blankets, compact gadgets, travel-sized kits",
    ],
    howDezygn:
      "Scale accuracy starts before generation: document the product's real dimensions during product prep, because the AI doesn't know what your product looks like — and it certainly doesn't know how big it is. Vague inputs get guessed proportions; the guess won't match reality.\n\nThe engineering has two parts. First, the anchor: hands are the universal reference (everyone subconsciously knows hand size), faces work for eyewear and earrings, furniture and rooms work for decor. Second, honest camera language: 50mm, the focal length closest to human perception — it feels honest because it is. Avoid extreme close-up framing for the size-reference image; macro is for craftsmanship, not scale.\n\nIn the composite, the real product photo anchors proportions while the model or scene provides the reference. State dimensions explicitly in the subject block ('a 50ml frosted glass bottle,' 'a 16-inch chain') — specificity in, accuracy out.",
    tips: [
      {
        title: "Hands are the universal ruler",
        description:
          "A product held, cradled or pinched between fingers communicates size faster than any dimension diagram. Match the hand to the customer (the model brief still applies) and keep the grip natural — how a person actually holds a serum bottle, not how a robot presents one.",
      },
      {
        title: "Put dimensions in the prompt, not just the spec sheet",
        description:
          "Write '30ml amber glass dropper bottle' rather than 'small bottle.' Capacity, length and counts are subject-block information, and they're the difference between a render that respects proportions and one that improvises them.",
      },
      {
        title: "One honest size image per listing",
        description:
          "Let the hero shot seduce and the packshot document — but make sure one image in every set exists purely to set size expectations. It's the cheapest returns-reduction tool in e-commerce.",
      },
      {
        title: "Don't let flattering angles inflate the product",
        description:
          "Low angles and tight crops make products look grander — great for hero shots, dangerous for scale truth. Keep the scale shot at eye level with natural perspective. Save the drama for frames whose job is drama.",
      },
    ],
    relatedShotTypes: ["studio", "model-shots", "detail-close-ups"],
    relatedUseCases: ["jewelry", "baby-products", "electronics"],
  },

  // ──────────────────────────────────────────────
  // PACKAGING
  // ──────────────────────────────────────────────
  {
    slug: "packaging",
    title: "Packaging Photography",
    metaTitle: "AI Packaging Photography — Legible Labels, Real Boxes | Dezygn",
    metaDescription:
      "Engineer packaging shots with AI: legible labels, accurate boxes, unboxing moments. The 2K source rule that keeps brand text sharp.",
    heroHeadline: "If the Label Says 'Botanica,' It Needs to Say 'Botanica'",
    image: "/images/seo/shot-types/packaging.webp",
    imageAlt: "AI packaging photography showing a branded box with crisp, legible label text",
    definition:
      "Packaging shots make the box, jar, pouch or tube the subject — the printed object a customer receives. For premium brands the packaging IS part of the product, and unboxing is part of the purchase. This is the hardest accuracy test in AI photography because it's full of text, and text is where generation fails loudest: one mangled letter on a label and the image is unusable. The brands that get this right treat label fidelity as an engineering problem with known rules, not a lottery.",
    whenToUse: [
      "PDP sets for products where the packaging signals the positioning — skincare, supplements, food, fragrance",
      "Unboxing and gifting moments for ads and social, especially in Q4",
      "Subscription and bundle marketing, where the delivered box is the product experience",
      "Retail and wholesale materials where buyers evaluate shelf presence",
    ],
    howDezygn:
      "The packaging workflow is built around one fact: the AI cannot add information that isn't in the source. So the source does the work. Photograph or export the packaging at 2,000px minimum on the long edge, with critical text at least ~100px tall in the source file. Then the production rule discovered the expensive way on client work: output resolution must match or exceed input. A 2K source rendered at 1K output downscales the label into mush — if brand text looks consistently wrong, it's a resolution problem, not a prompt problem.\n\nFrom there it's product transfer, not description: attach the real packaging image and Awa recreates it in the new scene without guessing the typography. Describe materials in the subject block — 'matte kraft box with embossed gold foil logo,' 'frosted glass jar with rose gold lid' — because finish determines how light behaves on the pack.\n\nCamera: 85mm, f/8, straight-on or slight 3/4 — the catalog recipe, since packaging shots are documentation first. For texture and foil moments, switch to the macro recipe and let the type fill the frame.",
    tips: [
      {
        title: "The 'if it's blurry to you' rule",
        description:
          "Zoom into your source image. If you can't read the label crisply, the generated image will be worse, never better. Fix legibility at the source — re-photograph, upscale with a dedicated tool, or export from the label artwork directly.",
      },
      {
        title: "Use a real upscaler for text, not a general editor",
        description:
          "On real client packshots, a general-purpose AI editor smeared label text where a dedicated upscaling tool preserved it on the same image. For fine type and logos, the tool choice is part of the recipe.",
      },
      {
        title: "Test at 1K, deliver at 2K+",
        description:
          "Iterate compositions fast at low resolution, then render the chosen frames at 2K or higher for delivery. Brand text is the canary: when it sharpens, the settings are right.",
      },
      {
        title: "Shoot the pack like it ships",
        description:
          "Customers compare the delivered box to the photos. Show the real closure, the real finish, the real print quality — an embellished render of the packaging is the 'item not as pictured' review waiting to happen.",
      },
    ],
    relatedShotTypes: ["studio", "flat-lay", "detail-close-ups"],
    relatedUseCases: ["food-beverage", "supplements", "candles"],
  },

  // ──────────────────────────────────────────────
  // DETAIL CLOSE-UPS
  // ──────────────────────────────────────────────
  {
    slug: "detail-close-ups",
    title: "Detail Close-Up Photography",
    metaTitle: "AI Macro & Detail Close-Up Photography | Dezygn",
    metaDescription:
      "Engineer macro detail shots with AI: texture, stitching, materials and craft. How material research turns close-ups into proof of quality.",
    heroHeadline: "Craftsmanship Doesn't Survive a Wide Shot",
    image: "/images/seo/shot-types/detail-close-ups.webp",
    imageAlt: "Extreme close-up AI shot showing product texture and material detail",
    definition:
      "The detail close-up fills the frame with one square inch of the product: the hinge, the stitching, the milling, the weave. Its job is proof. Anyone can claim 'premium materials' in copy; the macro shot is where the claim gets checked. For premium products this is the conversion shot — customers paying $300 for titanium frames or $200 for a leather bag want to inspect the thing they can't touch. It's also the shot that punishes lazy sourcing hardest, because at macro distance every hallucinated detail is visible.",
    whenToUse: [
      "Premium and craft positioning — jewelry settings, watch crowns, frame hinges, fabric weaves, wood grain",
      "PDP sets as the 'quality proof' image after the packshot and hero have done their jobs",
      "Ads targeting consideration-stage buyers comparing your build quality against cheaper lookalikes",
      "Editorial and brand content celebrating materials and process",
    ],
    howDezygn:
      "Detail shots are where source quality and material knowledge converge. The source rule is absolute at macro distance: shoot or upscale the product area you'll feature, and pick a source angle close to the output angle — every degree of difference between source and output is information the AI must hallucinate. Minimize that gap and the render stays true.\n\nThen the part most people skip: understand the material before you light it. For a Japanese titanium eyewear client we researched titanium itself — how it looks raw, how its matte surface takes light — and studied how the category's top brands photograph it: the angles, the reflections, the surface treatment. That research set the lighting recipe: uniform diffused cool studio light, controlled reflections, nothing hiding the surface. This is what separates $10/image work from $100/image work — research the materials, the culture, the story.\n\nCamera recipe: macro framing or 85mm at f/2.8, extreme close-up, shallow focus pulling the eye to the featured detail. Style: clean catalog or editorial depending on whether the shot is documentation or seduction.",
    tips: [
      {
        title: "Match source angle to output angle",
        description:
          "Featuring the side seam? Use a side-view source. The less the AI has to invent about geometry, the more accurate the fine detail. This rule, discovered on apparel client work, does more for macro fidelity than any prompt tweak.",
      },
      {
        title: "Crop the source to the signal",
        description:
          "Before compositing, crop the source image to the region that matters. Everything else in the source is noise the AI must either reproduce or suppress — both cost quality. A focused source gives a clean transfer.",
      },
      {
        title: "Micro-iterate on stubborn details",
        description:
          "When one feature keeps rendering wrong — a low-profile frame shape, an unusual clasp — don't re-roll the same prompt. Vary only the words describing the problem feature ('oval' → 'elongated oval'), keeping all else stable. Out of 10-15 micro-iterations, 2-3 will nail it; work from those.",
      },
      {
        title: "Light for the material, not the mood",
        description:
          "Matte fabric wants broad soft light to show weave; polished metal wants controlled reflections with fill; transparent glass wants edge or backlight to show form. At macro distance, wrong lighting doesn't just look off — it misrepresents the material, and that's an accuracy failure.",
      },
    ],
    relatedShotTypes: ["studio", "packaging", "scale-shots"],
    relatedUseCases: ["eyewear", "jewelry", "outdoor-gear"],
  },

  // ──────────────────────────────────────────────
  // BRAND / ATMOSPHERE (new)
  // ──────────────────────────────────────────────
  {
    slug: "brand-atmosphere",
    title: "Brand & Atmosphere Photography",
    metaTitle: "AI Brand & Atmosphere Shots — Build a Brand World | Dezygn",
    metaDescription:
      "Engineer brand atmosphere shots with AI: scenes, places and textures that build your brand's world. How real geographic research becomes visual identity.",
    heroHeadline: "The Shots Where the Product Isn't the Point",
    image: "/images/seo/shot-types/lifestyle.webp",
    imageAlt: "Atmospheric AI brand photography showing an evocative scene that defines a brand world",
    definition:
      "Brand and atmosphere shots are the images where the product is secondary or absent entirely: the workshop, the coastline, the material in raw form, the place the brand comes from. They build the world the products live in. Commodity brands skip them; premium brands are made of them — because a customer who buys into a world pays world prices, and a customer comparing isolated products pays commodity prices. These shots are also the hardest to fake with generic prompting, because 'aesthetic background' isn't a world. A world is specific.",
    whenToUse: [
      "Campaign sets — agencies deliver 2-3 atmosphere shots in a typical 12-image campaign to glue the set together",
      "Website fabric: heroes, section backgrounds, about pages, collection headers",
      "Email and social interstitials that maintain presence between product pushes",
      "Brand storytelling: origin, materials, craft and place",
    ],
    howDezygn:
      "Atmosphere shots are built from brand-world research, and the research is the product. Real example from client work: a premium Japanese titanium eyewear brand. Instead of prompting 'Japanese aesthetic background,' we traced the craft's likely origin to Sabae, Japan — the eyewear capital of the world — then found Ono Castle nearby, 'the castle in the sky,' whose lightness and precision matched the brand's lightweight-luxury promise, and pulled visual references from the surrounding Fukui region. Those discoveries became the scene library. You're building a story: where does this brand come from? What place in the world does it belong to?\n\nIn Dezygn, moodboard research becomes creative material directly — real reference photos get uploaded and transformed into brand-universe shots, which beats describing a place from scratch. The deeper your moodboard, the more specific and compelling your final images, and the moodboard itself often becomes source material during creation.\n\nVisual Syntax-wise, this is the one shot type where Scene and Brand carry everything: locations, materials and light from the brand identity; exact hex palette; consistent color temperature. Camera follows the brand archetype — minimal brands shoot atmosphere clean and still, heritage brands shoot it warm and timeless.",
    tips: [
      {
        title: "Research a place, not a vibe",
        description:
          "'Coastal aesthetic' produces the same image for every brand that types it. Tracing your brand to real geography — a manufacturing town, a coastline, a craft tradition — produces scenes no competitor can accidentally copy. Even if the final images never show the landmark, the research shapes every decision.",
      },
      {
        title: "Generate scenes empty, then reuse them everywhere",
        description:
          "Atmosphere scenes do double duty: standalone brand shots today, composite backgrounds for product and model shots tomorrow. Build each location in 3-4 angles with matching light and the campaign assembles itself.",
      },
      {
        title: "Let materials be subjects",
        description:
          "Raw titanium, beeswax, linen in afternoon light — material studies are the most credible atmosphere shots a product brand can run, because they connect directly back to what the customer buys.",
      },
      {
        title: "Keep one palette across the set",
        description:
          "Atmosphere shots earn their keep by making the whole grid cohere. Define the brand block once — hex colors, temperature, textures — and apply it to every scene. Style, scene and subject change; brand stays constant. That constancy is what reads as identity.",
      },
    ],
    relatedShotTypes: ["lifestyle", "hero-shots", "detail-close-ups"],
    relatedUseCases: ["candles", "eyewear", "outdoor-gear"],
  },

  // ──────────────────────────────────────────────
  // PAPARAZZI (new)
  // ──────────────────────────────────────────────
  {
    slug: "paparazzi",
    title: "Paparazzi-Style Photography",
    metaTitle: "AI Paparazzi-Style Product Photography | Dezygn",
    metaDescription:
      "Engineer paparazzi-style shots with AI: flash photography, stolen-moment energy, celebrity attitude. The editorial format from real eyewear campaign work.",
    heroHeadline: "Make the Product Look Famous",
    image: "/images/seo/shot-types/model-shots.webp",
    imageAlt: "Paparazzi-style AI photo with hard flash and candid celebrity energy",
    definition:
      "The paparazzi shot stages a stolen moment: hard direct flash, candid framing, a subject who looks photographed against their will — and glamorous because of it. It borrows the visual grammar of celebrity culture to make a product feel famous by association. Fashion and eyewear brands have used the format for decades because it solves aspiration differently than the polished hero shot: instead of 'this is beautiful,' it says 'people who matter wear this.' It's a niche tool with a strong flavor — wrong for calm minimalist brands, lethal in the right campaign.",
    whenToUse: [
      "Eyewear, fashion and accessories campaigns built on attitude and status",
      "Editorial sets and lookbooks that want magazine energy, including black-and-white treatments",
      "Social and ad creative that needs to stop the feed with something that doesn't look like an ad at all",
      "Street-culture and nightlife-adjacent brands where polish would read as inauthentic",
    ],
    howDezygn:
      "This recipe comes from a real campaign for a Parisian eyewear brand whose set mixed paparazzi shots with fashion editorial. The ingredient that makes or breaks it is Action — specifically attitude. The working direction was: they're busy, they're arrogant, they don't have time, they never pose for pictures — and if they decide to pose, their style and attitude screams 'I own the world.' That sentence did more for the set than any lighting keyword. Static images are forgettable; action creates desire.\n\nThe rest of the recipe: Style is flash photography — hard direct light, deep shadows, that slightly blown editorial look; black-and-white pushes it further into magazine territory. Scene is urban and incidental: café exits, cobblestone courtyards, car doors, metro entrances — locations generated as standalone assets first, then composited. Camera is candid grammar: mid-stride framing, imperfect crops, the geometry of a shot grabbed in two seconds. Subject follows the dedicated-model workflow — model brief from brand identity, comp cards for selection, clean portraits for compositing — with the product (anchored by its real photo) worn, never presented.",
    tips: [
      {
        title: "Direct the attitude, not the pose",
        description:
          "Posed paparazzi is a contradiction the viewer feels instantly. Write the energy — 'doesn't have time, never poses, owns the world' — and let the stride, the glance and the hand placement follow from character. Casting the right model matters more here than in any other shot type.",
      },
      {
        title: "Hard flash is the style — commit to it",
        description:
          "Soft flattering light kills the format. Specify direct on-camera flash with hard shadows and bright falloff. The harshness is the authenticity signal; cleaning it up turns the shot back into an ad.",
      },
      {
        title: "Keep the product readable in the chaos",
        description:
          "Candid framing still has a job: the glasses, the bag, the jacket must be sharp and identifiable. Anchor the product with its real photo and frame mid-shot so the 'stolen moment' doesn't steal the product too.",
      },
      {
        title: "Use it as the spike, not the system",
        description:
          "In a 12-image campaign, 2-4 paparazzi frames electrify the set; twelve of them exhaust it. Pair them with packshots, details and atmosphere shots so the attitude has a calm world to disrupt.",
      },
    ],
    relatedShotTypes: ["model-shots", "ugc", "hero-shots"],
    relatedUseCases: ["eyewear", "fashion-accessories", "beauty"],
  },
];

export function getShotTypeBySlug(slug: string): ShotType | undefined {
  return shotTypes.find((shotType) => shotType.slug === slug);
}
