export interface UseCase {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  image: string;
  imageAlt: string;
  problem: string[];
  solution: string;
  features: { icon: string; title: string; description: string }[];
  stats: { value: string; label: string }[];
  cta: string;
  relatedUseCases: string[];
  relatedShotTypes: string[];
}

export const useCases: UseCase[] = [
  // ──────────────────────────────────────────────
  // 1. GOLF BRANDS (real client category — Fairway Creatives)
  // ──────────────────────────────────────────────
  {
    slug: "golf-brands",
    title: "Golf Brands",
    metaTitle: "AI Product Photography for Golf Brands | Dezygn",
    metaDescription:
      "AI product photography for golf apparel and equipment — the exact category our own agency serves. Real client workflows, course scenes, model shots.",
    heroHeadline: "We Don't Guess at Golf — We Deliver It Every Month",
    heroSubheadline:
      "Golf is the niche our own agency, Fairway Creatives, serves with monthly creative retainers — apparel, outerwear, and accessories for DTC golf brands. Everything on this page comes from real, delivered client work.",
    image: "/images/seo/use-cases/golf-brands.webp",
    imageAlt: "AI-generated golf apparel photography showing a model on a course in branded outerwear",
    problem: [
      "Golf brands run on seasonal drops, and the photography pipeline can't keep up. Spring collections need imagery in winter, when the course is brown and the weather is hostile. A traditional shoot means models who can actually look credible in golf kit, course access, weather windows, and weeks of lead time — for a drop that's live for eight weeks.",
      "The audience makes it harder. Golfers are brand-conscious buyers who know what premium looks like; affluent 45-65 customers in Florida, California and Texas don't respond to obviously fake imagery or generic stock models. The visuals have to say 'this brand belongs at your club' — and most mid-tier golf brands have revenue, decent products, and photography that undersells both.",
      "And if you're running Meta ads — which working golf brands are — creative fatigue burns through imagery faster than any shoot schedule can replenish it. The brands winning paid social are testing fresh variations weekly, not rotating the same four hero shots for a quarter.",
    ],
    solution:
      "This is the category we know best because we deliver it: Dezygn was built running Fairway Creatives, an AI photography agency whose core clients are golf apparel brands. A real monthly session for a premium Scandinavian-design golf brand runs about two hours twenty minutes — brief review, generation of 60 images across 6 deliverables, gallery review and delivery — and produces 29 approved images. Not a demo. A paying client's monthly package.\n\nThe workflow that makes that possible lives in Dezygn: products anchored by real source images so technical fabrics and brand marks survive generation, dedicated models matched to the brand's actual customer (comp cards across the 40-60 age brackets, clean portraits for compositing), and a course-scene library built once and reused all season. The production rules came from this exact client work — mid-shot framing so the jacket never becomes a speck in a landscape, source angles matched to output angles so material panels render true, 2K sources so logos stay crisp.",
    features: [
      {
        icon: "Clock",
        title: "Drop-Speed Delivery",
        description:
          "A calibrated monthly session delivers a full content batch in hours. Spring drop imagery in January, with the course in perfect summer light.",
      },
      {
        icon: "Target",
        title: "Models Who Belong at the Club",
        description:
          "Model briefs written from the brand identity — the right age brackets, the right presence — with comp cards for selection and clean portraits for accurate compositing.",
      },
      {
        icon: "Image",
        title: "A Course-Scene Library",
        description:
          "Fairways, links coastlines, clubhouse terraces — generated once as standalone scenes in multiple angles with matching light, then reused across every product all season.",
      },
      {
        icon: "Layers",
        title: "Technical Fabric Fidelity",
        description:
          "Waterproof shells, ribbed collars, material panels: source-anchored generation with angle matching keeps the construction details that justify premium pricing.",
      },
      {
        icon: "Zap",
        title: "Ad Volume Without Fatigue",
        description:
          "Same product, fresh model, scene and framing variations weekly — the testing volume Meta's ranking now rewards, at a cost per creative a shoot can't touch.",
      },
    ],
    stats: [
      { value: "2h 20m", label: "Real client session: brief to 29 approved images" },
      { value: "50/mo", label: "Creatives delivered on a real golf-brand package" },
      { value: "60→29", label: "Generated → client-approved in one monthly batch" },
    ],
    cta: "Shoot Your Golf Line the Way Our Agency Does",
    relatedUseCases: ["outdoor-gear", "fitness", "fashion-accessories"],
    relatedShotTypes: ["lifestyle", "model-shots", "detail-close-ups"],
  },

  // ──────────────────────────────────────────────
  // 2. SKINCARE (My Lela anchor)
  // ──────────────────────────────────────────────
  {
    slug: "skincare",
    title: "Skincare",
    metaTitle: "AI Product Photography for Skincare Brands | Dezygn",
    metaDescription:
      "AI skincare photography that keeps containers, textures and labels accurate: packshots, UGC application shots, and lifestyle scenes built from a real brand world.",
    heroHeadline: "Skincare Sells on Texture, Light, and Trust",
    heroSubheadline:
      "Frosted glass, dropper caps, cream textures, golden-hour bathrooms — skincare is the most light-sensitive category in e-commerce, and the one where an inaccurate render costs you the customer's trust.",
    image: "/images/seo/use-cases/skincare.webp",
    imageAlt: "AI skincare photography showing a serum bottle in soft natural light",
    problem: [
      "Skincare packaging is an optics problem. Frosted glass, translucent serums, metallic dropper caps — every container is an exercise in how light passes through and reflects off materials. Generic AI prompting mangles exactly these properties: the frosted jar renders glossy, the golden serum turns opaque, the label text smears. And a skincare customer comparing your photo to the jar that arrives notices everything.",
      "The category also runs on people. Application shots, ritual moments, before-the-mirror scenes — skincare conversion imagery needs consistent on-brand models applying real product, in volumes that support both the PDP and a constant ad rotation. Booking that monthly with a traditional shoot is a five-figure habit.",
      "Meanwhile the brands winning the category publish constantly: PDP refreshes, UGC-style ad creative, seasonal campaigns. Mid-size skincare brands are stuck choosing between stale imagery and unsustainable production costs.",
    ],
    solution:
      "Dezygn treats skincare the way our agency work does: as a brand-world problem first. One of our reference projects is a Belgian candle-and-skincare brand whose extracted identity — Mediterranean coastal, olive groves, sun-bleached linen, terracotta and sage, golden hour — became the filter for every scene, prop and lighting decision. That's what keeps fifty images across a season looking like one brand instead of fifty prompts.\n\nThe accuracy layer is engineered, not hoped for. Containers are anchored by real product photos and described by what matters: '50ml frosted glass bottle, gold-plated dropper cap, clear golden-toned liquid inside.' Material-true specificity in, accuracy out. Models follow the dedicated-model workflow — brief from the brand identity, comp card selection, clean portraits for compositing — so the same face carries your PDP, your ads and your UGC-style content. And the lighting recipes are matched to the job: high-key studio for catalog, natural window light for ritual scenes, golden hour for the aspirational set.",
    features: [
      {
        icon: "Sparkles",
        title: "Material-True Containers",
        description:
          "Frosted glass, airless pumps, droppers, cream textures — real source images plus material-specific descriptions keep every container physically honest.",
      },
      {
        icon: "Camera",
        title: "UGC Application Shots",
        description:
          "iPhone-aesthetic, candid application moments — mid-routine, bathroom light, gaze off camera — engineered deliberately for the ad formats that outperform polish.",
      },
      {
        icon: "Palette",
        title: "A Brand World, Not a Backdrop",
        description:
          "Scenes built from your extracted brand identity — your geography, your materials, your palette — so the whole catalog coheres like a campaign.",
      },
      {
        icon: "Target",
        title: "One Dedicated Model Across Everything",
        description:
          "The same brand-matched face on PDP, ads and social, generated from clean portraits so composites land on the first try.",
      },
      {
        icon: "Shield",
        title: "Honest Claims by Design",
        description:
          "Texture, ritual and lifestyle do the selling — no fabricated skin-results imagery that violates platform policy and customer trust.",
      },
    ],
    stats: [
      { value: "2K+", label: "Minimum source resolution so label type survives" },
      { value: "6", label: "Ingredients controlled per image (Visual Syntax)" },
      { value: "1 face", label: "Dedicated model consistency across the catalog" },
    ],
    cta: "Build Your Skincare Brand World",
    relatedUseCases: ["beauty", "candles", "supplements"],
    relatedShotTypes: ["ugc", "studio", "lifestyle"],
  },

  // ──────────────────────────────────────────────
  // 3. SUPPLEMENTS
  // ──────────────────────────────────────────────
  {
    slug: "supplements",
    title: "Supplements",
    metaTitle: "AI Product Photography for Supplement Brands | Dezygn",
    metaDescription:
      "AI supplement photography with accurate bottles, legible labels and lifestyle context. Engineered for the most label-critical category in e-commerce.",
    heroHeadline: "In Supplements, the Label IS the Product",
    heroSubheadline:
      "Capsule counts, claims, ingredient panels — supplement customers read everything. Photography that garbles a label doesn't just look bad; it reads as untrustworthy in a category built on trust.",
    image: "/images/seo/use-cases/supplements.webp",
    imageAlt: "AI supplement photography showing a bottle with crisp legible label in a wellness scene",
    problem: [
      "No category punishes sloppy AI imagery faster than supplements. The product is a bottle whose entire surface is information — brand name, formula, capsule count, claims — and text is exactly where careless generation fails loudest. One garbled word on a label in your ad and the customer's takeaway is 'fake product.'",
      "The format is also repetitive in a way that exposes inconsistency: most supplement brands carry a line of near-identical bottles that differ only in label and accent color. Shot separately over time, the catalog drifts — different lighting, angles, shadows — and the storefront reads as amateur exactly where it needs to read as clinical.",
      "And supplements live or die on lifestyle context: the morning routine, the gym bag, the kitchen counter. White-background compliance shots don't sell wellness; scenes do. Producing both tracks — clinical catalog plus lifestyle volume for ads — doubles the traditional production bill.",
    ],
    solution:
      "Supplement work in Dezygn is built on the production rules that keep text alive. Sources at 2K minimum with label text at least ~100px tall, because the AI cannot add information that isn't in the source. Output resolution matched to input, because rendering a 2K source at 1K output downscales label type into mush — the most common 'AI can't do labels' complaint is actually a settings bug. Real product photos anchor every generation, so the bottle that ships is the bottle in the picture: '120-count amber glass bottle, white safety cap, matte label' — specificity in, accuracy out.\n\nFor the catalog, the packshot recipe is locked once — 85mm, f/8, high-key, consistent contact shadow — and applied across the entire line in one batch, so twelve SKUs look like one brand. For lifestyle, wellness-coded scenes (botanicals, natural wood, morning window light) and brand-matched models cover the ad volume, with honest framing: ritual and routine, not fabricated body-results claims that get ad accounts banned.",
    features: [
      {
        icon: "Shield",
        title: "Label-Legible by Engineering",
        description:
          "The 2K source rule plus output-resolution matching keeps ingredient panels and brand type crisp — the difference between clinical and counterfeit.",
      },
      {
        icon: "Layers",
        title: "Whole-Line Consistency",
        description:
          "Lock the packshot recipe once and batch the entire SKU line — identical lighting, angle and shadow from your bestseller to your newest formula.",
      },
      {
        icon: "Image",
        title: "Wellness Scenes That Convert",
        description:
          "Morning counters, gym bags, botanical settings — lifestyle context generated as reusable scenes, matched to your brand palette.",
      },
      {
        icon: "Target",
        title: "Routine Moments With Real People",
        description:
          "Brand-matched models mid-routine — capsule in hand, shaker on the bench — using action vocabulary that reads authentic instead of staged.",
      },
      {
        icon: "Zap",
        title: "Ad Variations on Demand",
        description:
          "Same bottle, fresh contexts weekly. The creative testing volume performance supplements brands need, without a recurring studio bill.",
      },
    ],
    stats: [
      { value: "≥100px", label: "Critical label text height in the source image" },
      { value: "1 batch", label: "Full SKU line shot with identical setup" },
      { value: "2K+", label: "Output resolution for label-sharp deliverables" },
    ],
    cta: "Shoot Your Whole Supplement Line This Week",
    relatedUseCases: ["fitness", "skincare", "food-beverage"],
    relatedShotTypes: ["studio", "packaging", "lifestyle"],
  },

  // ──────────────────────────────────────────────
  // 4. JEWELRY (Milan anchor)
  // ──────────────────────────────────────────────
  {
    slug: "jewelry",
    title: "Jewelry",
    metaTitle: "AI Product Photography for Jewelry Brands | Dezygn",
    metaDescription:
      "AI jewelry photography that respects scale and metal: macro detail, honest sizing, reflective-material lighting. From real client jewelry work.",
    heroHeadline: "If the Pendant Is 2cm, It Must Look 2cm",
    heroSubheadline:
      "Jewelry is the category where photography most often over-promises — and where 'smaller than expected' returns eat margins. Accurate scale, honest metal, real sparkle: that's an engineering problem, and it's solvable.",
    image: "/images/seo/use-cases/jewelry.webp",
    imageAlt: "AI jewelry photography showing a gold pendant at honest scale with macro detail",
    problem: [
      "Jewelry photography lies about size by default. Macro lenses make a 2cm pendant fill the frame like a chandelier, the customer orders, and the unboxing is a disappointment with a return label. In a category with high price-per-gram and emotional purchases, scale dishonesty is the most expensive image mistake you can make.",
      "Then there's the metal. Polished gold and silver are mirrors; stones are lenses. Traditional jewelry photography is a specialist craft of controlled reflections — and naive AI generation produces metal that looks like plastic and stones with physically impossible sparkle. Customers can't articulate what's wrong, but they feel it, and they don't buy.",
      "And jewelry needs people. Scale on a body — the chain at a real neckline, the ring on a real hand — is both the size-reference shot and the aspiration shot. Hands and skin are exactly where cheap AI work falls apart.",
    ],
    solution:
      "One of the first paid projects from our own outreach system was a $2,000 jewelry engagement that started with a single custom lifestyle image sent cold. The workflow it ran on is the one built into Dezygn. Scale is handled as data, not vibes: dimensions documented in product prep ('16-18 inch chain,' 'ring size 7,' 'stone carat weight') and stated in the subject block, with hands and faces as universal scale anchors at honest 50mm perspective for the size-reference image.\n\nMetal gets the reflective-material rule learned on client eyewear and metal work: soft multi-directional studio lighting with fill — never single-direction dramatic light, which buries reflective surfaces in black voids. Specify the metal precisely (14K yellow gold, sterling .925, brushed vs. polished) because finish determines how light behaves. For the hero set, the premium recipe — 85mm, f/1.8, controlled studio — earns the luxury read, and macro detail shots prove the setting work and stone quality that justify the price.",
    features: [
      {
        icon: "Target",
        title: "Honest Scale by Default",
        description:
          "Documented dimensions plus hand and face anchors at natural perspective — the 'how big is it really' image that prevents the most common jewelry return.",
      },
      {
        icon: "Sparkles",
        title: "Metal That Reads as Metal",
        description:
          "Soft multi-directional lighting with fill keeps gold, silver and platinum readable — controlled reflections instead of plastic shine or black voids.",
      },
      {
        icon: "Camera",
        title: "Macro Proof of Craft",
        description:
          "Settings, prongs, pavé and engraving at close-up — the quality-proof shots that close consideration-stage buyers on premium pieces.",
      },
      {
        icon: "Image",
        title: "On-Body Without the Model Bill",
        description:
          "Brand-matched dedicated models wearing your actual pieces, composited from clean portraits so necklines, ears and hands render right.",
      },
      {
        icon: "Layers",
        title: "Collection Consistency",
        description:
          "One locked recipe across the line — every piece in identical light and shadow, so the collection page looks curated, not aggregated.",
      },
    ],
    stats: [
      { value: "$2,000", label: "Real jewelry project landed with one cold proof image" },
      { value: "50mm", label: "Honest-perspective lens for the scale-truth shot" },
      { value: "85mm f/1.8", label: "The premium hero recipe luxury brands use" },
    ],
    cta: "Shoot Jewelry That Survives the Unboxing",
    relatedUseCases: ["eyewear", "fashion-accessories", "beauty"],
    relatedShotTypes: ["scale-shots", "detail-close-ups", "hero-shots"],
  },

  // ──────────────────────────────────────────────
  // 5. EYEWEAR (NEW — Kaze Optics / Retro Wear anchor)
  // ──────────────────────────────────────────────
  {
    slug: "eyewear",
    title: "Eyewear",
    metaTitle: "AI Product Photography for Eyewear Brands | Dezygn",
    metaDescription:
      "AI eyewear photography from real client campaigns: model shots that fit, titanium-true close-ups, and brand worlds built from actual craft research.",
    heroHeadline: "Glasses Don't Sell Without a Face",
    heroSubheadline:
      "Eyewear is our most documented client category — premium frame brands on monthly retainer. Model shots are the conversion driver, fit accuracy is the craft, and we learned both the expensive way so you don't have to.",
    image: "/images/seo/use-cases/fashion-accessories.webp",
    imageAlt: "AI eyewear photography showing premium frames worn by a model with accurate fit",
    problem: [
      "Eyewear has the hardest conversion requirement in e-commerce: customers need to see frames on a face before they'll buy, because fit IS the product. Flat packshots don't answer 'will these suit me' — and traditional model shoots for every frame, in every colorway, every season, are exactly the recurring cost that crushes independent frame brands.",
      "AI doesn't make it automatically easier — eyewear is technically brutal. Frames are thin, reflective, precisely proportioned objects sitting on the most scrutinized part of the human body. Naive generation gets the fit wrong in ways everyone instantly sees: frames too wide, lenses warped, glasses floating above the ears — or sitting above the eyebrows, which is exactly what happened on one of our own client projects when a comp card with sunglasses pushed up on the model's head contaminated every composite. Three hours lost to one dirty source image.",
      "And premium eyewear can't survive on generic 'aesthetic' imagery. A $300 titanium frame needs a world — craft, materials, place — or it looks like a $30 frame with ambitions.",
    ],
    solution:
      "Eyewear is where Dezygn's workflow has the deepest real-world mileage: premium frame clients on monthly retainer, including a $700/month engagement that started as a single cold-outreach proof image. The model workflow exists because of this category: model briefs from the brand identity, comp cards for selection only, then clean portraits — white background, plain tee, zero accessories — for compositing, because the source image wins over the prompt. Always. With a clean portrait and a clean product image, the glasses sit correctly on the first try; that's the lesson those three lost hours bought.\n\nAccuracy runs deeper than fit. For a Japanese titanium brand, we researched the material itself and how the category's top competitors photograph titanium — angles, reflections, surface treatment — then traced the brand's craft origins to Sabae, Japan's eyewear capital, and built the scene world from that region. Ultra-close product shots used uniform diffused cool studio light so the matte titanium read true. For a Parisian brand, the same system produced the opposite energy: paparazzi flash, café exits, 'never poses for pictures' attitude. Same framework, two completely different brands — that's the point.",
    features: [
      {
        icon: "Eye",
        title: "Fit-Accurate Model Shots",
        description:
          "Clean-portrait compositing puts frames where frames sit: rim below the brows, natural temple gaps, width proportional to the face. The conversion shot, done right.",
      },
      {
        icon: "Sparkles",
        title: "Material-True Frames",
        description:
          "Titanium, acetate, tortoiseshell marbling, gold hinge details — reflective-material lighting and macro recipes that survive close inspection.",
      },
      {
        icon: "Target",
        title: "Micro-Iteration for Hard Shapes",
        description:
          "Narrow profiles and unusual silhouettes that AI keeps 'correcting' get systematic micro-iterations — vary only the shape language until the render matches the frame.",
      },
      {
        icon: "Globe",
        title: "Brand Worlds From Real Research",
        description:
          "Scene libraries built from your brand's actual geography and craft story — the difference between 'Japanese aesthetic' and a world competitors can't copy.",
      },
      {
        icon: "Camera",
        title: "Campaign Range on One System",
        description:
          "Packshots, ultra close-ups, model editorial, paparazzi energy, atmosphere shots — a full 12-image campaign mix from one calibrated setup.",
      },
    ],
    stats: [
      { value: "$700/mo", label: "Real eyewear retainer, landed with one proof image" },
      { value: "137→12", label: "Generations → approved finals on a real premium campaign" },
      { value: "1st try", label: "Composite accuracy with clean portrait + clean product" },
    ],
    cta: "Put Your Frames on the Right Faces",
    relatedUseCases: ["jewelry", "fashion-accessories", "beauty"],
    relatedShotTypes: ["model-shots", "detail-close-ups", "paparazzi"],
  },

  // ──────────────────────────────────────────────
  // 6. TOYS (the 2-star review story)
  // ──────────────────────────────────────────────
  {
    slug: "toys",
    title: "Toys",
    metaTitle: "AI Product Photography for Toy Brands | Dezygn",
    metaDescription:
      "AI toy photography that never over-promises: accurate products, honest scale, playful scenes. The category that taught us why accuracy is non-negotiable.",
    heroHeadline: "The Image Is a Promise the Toy Has to Keep",
    heroSubheadline:
      "A toy company once generated AI catalog images that looked better than the product. The review came back: two stars — 'item not as pictured.' That story is why our entire system starts with accuracy.",
    image: "/images/seo/use-cases/toys.webp",
    imageAlt: "AI toy photography showing a plush toy at accurate scale in a bright playful scene",
    problem: [
      "Toys are where AI image embellishment does its most direct damage. Generation naturally 'improves' products — richer colors, finer stitching, better proportions — and a parent unboxing a toy that's visibly worse than the listing photo doesn't write it off as creative license. They write a one-star review and request a refund. The image promised something the physical product didn't deliver.",
      "Scale matters double here: 'smaller than expected' stings hardest when the recipient is a disappointed child. And the category's buyers — parents — are the most trust-sensitive audience in e-commerce; anything that pattern-matches to 'scammy listing' kills the purchase.",
      "At the same time, toys genuinely need playful, contextual imagery — kids' rooms, play scenes, gift moments — at seasonal volume, with Q4 making or breaking the year. Traditional shoots with child models are expensive, regulated, and slow.",
    ],
    solution:
      "Dezygn's accuracy discipline exists because of this category. Every toy is anchored by its real product photo — the AI recreates your product instead of idealizing it — with materials and dimensions stated explicitly so plush stays plush-textured and a 20cm toy looks 20cm. The conversion-integrity test applies to every frame: accurate, realistic, on-brand. 'Close enough' isn't a style choice; close enough is a refund.\n\nAround that honest core, the playful layer is engineered: bright, joyful scene presets (colorful backdrops, playroom settings, gift moments), scale shots with hands as universal references, and packaging shots with the 2K text rule keeping box art legible. For lifestyle context, traces of play — a child's hand reaching in, a bedroom floor scene — read warm without requiring child-model logistics for every image.",
    features: [
      {
        icon: "Shield",
        title: "Anti-Embellishment by Design",
        description:
          "Real source anchoring keeps colors, textures and proportions true to the product that ships — the 'item not as pictured' review, prevented at the source.",
      },
      {
        icon: "Target",
        title: "Scale a Parent Can Trust",
        description:
          "Hands-as-ruler scale shots and stated dimensions answer 'how big is it' before checkout, not after unboxing.",
      },
      {
        icon: "Image",
        title: "Play Scenes Without the Shoot",
        description:
          "Playrooms, gift moments, bedtime scenes — generated as reusable environments in your brand's palette, ready for every seasonal push.",
      },
      {
        icon: "Package",
        title: "Box Art That Stays Legible",
        description:
          "The 2K source rule keeps packaging type and character art crisp — critical for a category where the box is half the gift.",
      },
      {
        icon: "Clock",
        title: "Q4 Volume, January Calm",
        description:
          "Holiday campaign imagery produced in batches in hours — gift guides, bundles, seasonal scenes — without betting December on an October shoot.",
      },
    ],
    stats: [
      { value: "3", label: "Tests every image must pass: accurate, realistic, on-brand" },
      { value: "100%", label: "Of toy generations anchored to real product photos" },
      { value: "2K+", label: "Source resolution so packaging art survives" },
    ],
    cta: "Sell the Toy You Actually Ship",
    relatedUseCases: ["baby-products", "pet-products", "home-decor"],
    relatedShotTypes: ["scale-shots", "packaging", "lifestyle"],
  },

  // ──────────────────────────────────────────────
  // 7. PET PRODUCTS
  // ──────────────────────────────────────────────
  {
    slug: "pet-products",
    title: "Pet Products",
    metaTitle: "AI Product Photography for Pet Brands | Dezygn",
    metaDescription:
      "AI pet product photography with real animals in frame: composition transfer, accurate products, and the emotional imagery that drives the category.",
    heroHeadline: "The Dog Sells the Toy",
    heroSubheadline:
      "Pet imagery converts on emotion — the retriever with the plush toy, the cat in the new bed. Getting a consistent, photogenic animal together with your accurate product used to be the hardest shoot in e-commerce. Now it's a composite.",
    image: "/images/seo/use-cases/pet-products.webp",
    imageAlt: "AI pet photography showing a golden retriever with a plush toy in a bright studio scene",
    problem: [
      "Animals are the least directable models in photography. A traditional pet shoot is hours of treats, patience and luck for a handful of usable frames — and if your brand needs the same dog across a whole catalog, you're booking the same animal repeatedly and praying it cooperates. Costs scale with chaos.",
      "The product accuracy problem still applies underneath the cuteness: pet owners are buying a specific toy, bed, bowl or harness, and the item that arrives has to match the image. Embellished renders earn the same 'not as pictured' reviews here as everywhere else — with an audience that reviews enthusiastically.",
      "And the category's ad engine runs on emotional volume: fresh dog-and-product creative weekly for Meta, seasonal moments, breed-targeted variations. No shoot schedule keeps up with that appetite.",
    ],
    solution:
      "Pet work is a showcase for composition transfer — one of the core Visual Syntax techniques, and literally one of our teaching examples: a golden retriever with a plush frog toy, where a reference image defines the layout and the real toy (anchored by its product photo) replaces the original prop. The animal brings the emotion; the source image keeps the product honest; the reference keeps the composition professional.\n\nIn practice that means you can cast the perfect 'brand dog' — breed, coat, expression matched to your customer's pets — and keep it consistent across the entire catalog, in studio sets, lifestyle scenes and seasonal campaigns. Products get the standard accuracy treatment: real sources, stated materials and dimensions, legible packaging via the 2K rule. And the ad rotation gets its volume: same product, different breeds, rooms and moments, generated weekly instead of quarterly.",
    features: [
      {
        icon: "Sparkles",
        title: "The Perfectly Behaved Brand Dog",
        description:
          "Cast the breed, coat and energy that match your audience — then keep that same animal consistent across every image, no treats required.",
      },
      {
        icon: "Image",
        title: "Composition Transfer",
        description:
          "Use a reference image for the layout, your real product for the prop — the professional pet-photography look without the chaos that usually produces it.",
      },
      {
        icon: "Shield",
        title: "Accurate Products Under the Cuteness",
        description:
          "Toys, beds, bowls and harnesses anchored to real source photos, so the emotional image still shows exactly what ships.",
      },
      {
        icon: "Zap",
        title: "Breed-Targeted Ad Variations",
        description:
          "Same product with a lab, a frenchie, a tabby — audience-matched creative variations that pet-niche media buyers can only dream of shooting.",
      },
      {
        icon: "Clock",
        title: "Seasonal Moments On Schedule",
        description:
          "Holiday sweaters, summer hikes, gotcha-day scenes — campaign imagery batched in hours, timed to the calendar instead of the studio.",
      },
    ],
    stats: [
      { value: "1 dog", label: "Consistent brand animal across the whole catalog" },
      { value: "10:1", label: "Honest generation-to-approval planning ratio" },
      { value: "Weekly", label: "Fresh ad creative cadence the category demands" },
    ],
    cta: "Cast Your Brand Dog Today",
    relatedUseCases: ["toys", "home-decor", "outdoor-gear"],
    relatedShotTypes: ["lifestyle", "studio", "ugc"],
  },

  // ──────────────────────────────────────────────
  // 8. FITNESS
  // ──────────────────────────────────────────────
  {
    slug: "fitness",
    title: "Fitness",
    metaTitle: "AI Product Photography for Fitness Brands | Dezygn",
    metaDescription:
      "AI fitness photography with athletic models in real action: equipment, apparel and supplements shot with credible movement and consistent energy.",
    heroHeadline: "Fitness Imagery Lives or Dies on the Action",
    heroSubheadline:
      "A dumbbell on white is a commodity photo. A determined athlete mid-rep with your dumbbell is a brand. The difference is the Action ingredient — and it's directable.",
    image: "/images/seo/use-cases/fitness.webp",
    imageAlt: "AI fitness photography showing an athletic model using equipment with dynamic energy",
    problem: [
      "Fitness products are motion products — resistance bands, dumbbells, apparel, recovery tools all sell on what using them feels like. Static catalog shots communicate none of that, and credible action photography is the most demanding traditional shoot there is: athletic models who actually move correctly, gym locations, sweat-and-light management, and a photographer who can freeze the right rep.",
      "Form credibility is the silent filter. A fitness audience instantly clocks a model holding a kettlebell wrong or 'stretching' in a physically odd pose — the exact failure mode of lazy AI generation. Wrong form doesn't just look off; it tells your audience the brand doesn't lift.",
      "And fitness marketing is seasonal and relentless: New Year, summer prep, constant ad refresh against the most creative-hungry ad audiences on Meta and TikTok. The content appetite is weekly; shoot economics are quarterly.",
    ],
    solution:
      "Dezygn directs fitness imagery through the Action ingredient — the verb, the expression, the interaction — using the same vocabulary system we use on client work: 'performing weightlifting exercise, hands in action position, focused determination' for training frames; 'yoga stretch, peaceful recovery expression' for the cooldown set. Expression is dialed with volume adjectives — focused intensity, quiet determination — because raw emotions render theatrical.\n\nModels come from the athletic archetype with feature-stacked briefs (toned, defined, strong jawline, athletic confidence) matched to your audience, kept consistent across the catalog via the comp-card-then-clean-portrait workflow. Products stay accurate underneath the energy: real source anchoring for equipment geometry, apparel fabric and supplement labels. Scenes — gym floors, home workout corners, outdoor tracks at golden hour — are built once and reused across the season's entire content calendar.",
    features: [
      {
        icon: "Zap",
        title: "Credible Movement, Directed",
        description:
          "Action vocabulary that produces real exercise form — mid-rep, mid-stride, mid-stretch — instead of mannequins awkwardly adjacent to equipment.",
      },
      {
        icon: "Target",
        title: "Athletes Who Match Your Audience",
        description:
          "Feature-stacked athletic model briefs — the energy, build and age your customers actually have — consistent across every campaign.",
      },
      {
        icon: "Layers",
        title: "Equipment Geometry That Holds",
        description:
          "Plates, bands, racks and wearables anchored to real sources so specs and proportions survive the dynamic framing.",
      },
      {
        icon: "Image",
        title: "Train Anywhere Scenes",
        description:
          "Gym, garage, park, track — a reusable scene library covering every context your customers train in, lit for energy.",
      },
      {
        icon: "Clock",
        title: "New Year Volume in December",
        description:
          "Seasonal campaign batches generated ahead of the spike — the January creative war chest, built in an afternoon.",
      },
    ],
    stats: [
      { value: "3 parts", label: "Of every action: verb, expression, interaction" },
      { value: "1 athlete", label: "Consistent brand model across the catalog" },
      { value: "Weekly", label: "Ad refresh cadence fitness audiences demand" },
    ],
    cta: "Put Your Gear in Motion",
    relatedUseCases: ["supplements", "outdoor-gear", "golf-brands"],
    relatedShotTypes: ["lifestyle", "model-shots", "ugc"],
  },

  // ──────────────────────────────────────────────
  // 9. FOOD & BEVERAGE
  // ──────────────────────────────────────────────
  {
    slug: "food-beverage",
    title: "Food & Beverage",
    metaTitle: "AI Product Photography for Food & Beverage Brands | Dezygn",
    metaDescription:
      "AI food and beverage photography that plays to AI's strengths: packaging-first accuracy, legible labels, styled scenes — and honesty about where the line is.",
    heroHeadline: "Lead With the Pack, Style the World Around It",
    heroSubheadline:
      "Food is the category where AI realism is least forgiving — so professionals shoot it packaging-first: accurate packs, styled scenes, real ingredient context, and restraint where the uncanny valley still bites.",
    image: "/images/seo/use-cases/food-beverage.webp",
    imageAlt: "AI food and beverage photography showing branded packaging in a styled kitchen scene",
    problem: [
      "Food is the most scrutinized subject in photography — humans are evolutionarily expert at spotting wrong food. Naive AI generation of prepared dishes still trips into the uncanny valley, and one waxy-looking close-up can make a real product feel fake. Brands that prompt-and-pray in this category publish exactly the imagery that erodes appetite.",
      "Meanwhile the actual commercial need is mostly not glamour dishes — it's packaging: pouches, cans, jars, boxes, every surface covered in mandatory text. Nutrition panels, flavor names, claims. Text-dense packaging is precisely where careless generation fails, and in food, a garbled label reads as a counterfeit product.",
      "Add the volume problem — seasonal flavors, retail line sheets, social content, ad rotations — and food brands face the same production treadmill as everyone else, with a higher realism bar.",
    ],
    solution:
      "The professional approach is packaging-first, and it's where Dezygn's accuracy machinery shines. Packs are anchored by real artwork or photography at 2K+, with the format described in material terms — 'stand-up kraft pouch with matte film, full-wrap label,' 'slim aluminum can, glossy finish' — because finish determines light behavior. Output resolution matches input so flavor names and panels stay legible. The pack that ships is the pack in the picture.\n\nAround the accurate pack, scenes do the appetite work: styled kitchen counters, café tables, picnic spreads, ingredient flat lays with raw ingredients as props — real visual context where AI is strong. Beverage pours, condensation and serve moments are directed through the action vocabulary ('mid-sip, quiet joy') and held to the sniff test: if a frame reads even slightly waxy, it doesn't ship. That restraint — leading with pack, scene and ingredients rather than synthetic hero dishes — is what keeps a food brand's AI imagery credible.",
    features: [
      {
        icon: "Package",
        title: "Pack-Accurate by Engineering",
        description:
          "Real artwork anchoring, material-true finishes, and the 2K text rule keep every flavor name and panel legible — the line between premium and counterfeit.",
      },
      {
        icon: "Image",
        title: "Appetite Scenes That Are Actually Safe",
        description:
          "Kitchens, cafés, market tables and ingredient styling — contexts where AI realism is strong, built as reusable scenes in your palette.",
      },
      {
        icon: "Sparkles",
        title: "Ingredient Flat Lays",
        description:
          "Raw ingredients as props around the pack — the most credible 'what's inside' storytelling a food brand can run.",
      },
      {
        icon: "Shield",
        title: "The Sniff-Test Standard",
        description:
          "Every frame passes the realism check before delivery. Where prepared-food rendering risks the uncanny valley, the system says no — restraint is a feature.",
      },
      {
        icon: "Layers",
        title: "Flavor-Line Consistency",
        description:
          "Every SKU and seasonal flavor shot in the same locked setup — the shelf-ready consistency retail buyers expect from a line sheet.",
      },
    ],
    stats: [
      { value: "2K+", label: "Pack artwork resolution so labels survive" },
      { value: "100%", label: "Of frames held to the realism sniff test" },
      { value: "1 setup", label: "Locked recipe across the full flavor line" },
    ],
    cta: "Shoot Your Line, Flavor by Flavor",
    relatedUseCases: ["supplements", "candles", "home-decor"],
    relatedShotTypes: ["packaging", "flat-lay", "studio"],
  },

  // ──────────────────────────────────────────────
  // 10. FASHION & ACCESSORIES
  // ──────────────────────────────────────────────
  {
    slug: "fashion-accessories",
    title: "Fashion & Accessories",
    metaTitle: "AI Photography for Fashion & Accessories Brands | Dezygn",
    metaDescription:
      "AI fashion and accessories photography: fabric-true garments, editorial energy, dedicated models. From real apparel client work — including its honest limits.",
    heroHeadline: "Editorial Energy Without the Editorial Budget",
    heroSubheadline:
      "Bags, eyewear, scarves, jewelry, outerwear — accessories are AI photography's sweet spot. Garment fit is the honest frontier. We work both, from real client campaigns.",
    image: "/images/seo/use-cases/fashion-accessories.webp",
    imageAlt: "AI fashion photography showing a model with accessories in an editorial setting",
    problem: [
      "Fashion runs on imagery volume like no other category: every drop needs lookbook, PDP, social and ad creative; every colorway multiplies the matrix; and the brand premium lives entirely in art direction. Editorial-grade shoots — the model casting, the locations, the stylist — are exactly what mid-size brands can't afford monthly.",
      "Accessories have a precision problem AI must respect: a bag's hardware, a scarf's print, a frame's proportions are the product. Generation that 'approximates' a signature print or rounds off a silhouette isn't a style choice — it's misrepresenting the merchandise.",
      "Garment fit is the category's honest hard part: drape, fit and fabric behavior on a body are subjective, scrutinized, and still the most failure-prone area of AI fashion work. Brands that pretend otherwise ship images that fit-conscious customers don't trust.",
    ],
    solution:
      "Our most editorial client work is fashion-adjacent: a Parisian eyewear campaign mixing paparazzi flash shots ('they never pose; if they do, their attitude screams I own the world') with high-fashion frames ('dressed for the kill — bracelets, necklaces, earrings, attitude at the camera'). That range — engineered energy, consistent models, accurate product — is what Dezygn brings to fashion brands.\n\nThe workflow: dedicated models cast from your brand identity via comp cards, composited from clean portraits; garments and accessories described in fashion-accurate terms — exact color names, fabric type, fit and silhouette ('relaxed-fit heavyweight cotton, forest green, dropped shoulders'), because fabric type changes how AI renders drape; and source angle matched to output angle so material panels and prints survive. On apparel honesty: fit-critical garment imagery is run mid-shot with real product anchoring — and where a frame doesn't pass the realism test, it doesn't ship. Accessories — bags, eyewear, jewelry, scarves — carry full campaigns brilliantly, from packshot through paparazzi.",
    features: [
      {
        icon: "Camera",
        title: "Editorial Range on Demand",
        description:
          "Paparazzi flash, fashion editorial, quiet luxury stills — campaign energies directed through the Action ingredient, not left to chance.",
      },
      {
        icon: "Target",
        title: "A Cast of Dedicated Models",
        description:
          "Faces matched to your customer and kept consistent across drops — the recognizable 'brand model' look of houses ten times your size.",
      },
      {
        icon: "Layers",
        title: "Fabric-Aware Rendering",
        description:
          "Fiber, weave, fit and silhouette specified the way fashion people speak — because 'cotton poplin, boxy fit' renders differently than 'shirt.'",
      },
      {
        icon: "Sparkles",
        title: "Signature Details Preserved",
        description:
          "Hardware, prints, marbled acetate, embossing — source-anchored and macro-proofed, so the details that carry the price survive generation.",
      },
      {
        icon: "Zap",
        title: "Colorway Matrix in an Afternoon",
        description:
          "Every color of every style in the same locked setup — the consistency matrix that takes traditional shoots days of changeovers.",
      },
    ],
    stats: [
      { value: "12+1", label: "Approved visuals on a real eyewear campaign (plus video)" },
      { value: "2x2", label: "Models × products — the scoping that actually ships" },
      { value: "4 hrs", label: "Real premium campaign session, brief to delivery" },
    ],
    cta: "Direct Your Next Drop Like an Editorial",
    relatedUseCases: ["eyewear", "jewelry", "golf-brands"],
    relatedShotTypes: ["paparazzi", "model-shots", "hero-shots"],
  },

  // ──────────────────────────────────────────────
  // 11. HOME DECOR
  // ──────────────────────────────────────────────
  {
    slug: "home-decor",
    title: "Home Decor",
    metaTitle: "AI Product Photography for Home Decor Brands | Dezygn",
    metaDescription:
      "AI home decor photography: room scenes built to your brand's aesthetic, honest scale in context, and seasonal restyling without re-shooting.",
    heroHeadline: "Sell the Room, Ship the Object",
    heroSubheadline:
      "Nobody buys a vase — they buy how the shelf looks with the vase on it. Home decor is sold by rooms, and rooms are exactly what AI scene-building does best.",
    image: "/images/seo/use-cases/home-decor.webp",
    imageAlt: "AI home decor photography showing products styled in a designed interior scene",
    problem: [
      "Home decor's conversion imagery is interiors, and interiors are brutal to produce traditionally: staged rooms, prop sourcing, natural light windows, and a new setup for every aesthetic your catalog spans. A brand selling into both Scandinavian-minimal and rustic-farmhouse customers needs two completely different staged worlds.",
      "Scale in context is the category's quiet returns problem: a 'large' wall print that turns out poster-sized, a throw that barely covers a cushion. Without rooms for reference, customers guess — and wrong guesses come back in boxes.",
      "And the merchandising calendar never stops: spring refresh, autumn cozy, holiday — the same SKUs need re-staged worlds four times a year, which is precisely the shoot nobody re-budgets for.",
    ],
    solution:
      "Dezygn builds interiors as engineered scenes using the environment-preset system from our client work: each brand vibe has a coherent material world — minimalist wants pale wood, matte white and negative space; rustic wants reclaimed wood, linen and terracotta; modern wants polished concrete and brushed metal. Your brand identity picks the world; the scene library gets built once in multiple angles with matching light; and every product in the catalog gets staged inside it.\n\nProducts stay honest: real source anchoring for materials and finishes (ceramic vs. glass vs. powder-coated metal render differently because they are different), and room context doubles as the scale reference — the lamp next to a real sofa, the rug under a real table, at natural 50mm perspective. Seasonal restyling becomes a scene swap instead of a shoot: same accurate product, new world, same afternoon.",
    features: [
      {
        icon: "Image",
        title: "Rooms Built to Your Aesthetic",
        description:
          "Scene presets matched to your brand world — Scandinavian, rustic, modern, bohemian — generated once, reused across the entire catalog.",
      },
      {
        icon: "Target",
        title: "Scale Through Context",
        description:
          "Products staged against sofas, tables and walls at honest perspective — the in-room size reference that prevents the category's silent returns.",
      },
      {
        icon: "Sparkles",
        title: "Material-True Finishes",
        description:
          "Matte ceramic, blown glass, woven jute, brushed brass — finish-specific rendering so the texture that arrives matches the texture on screen.",
      },
      {
        icon: "Clock",
        title: "Seasonal Restyles in Hours",
        description:
          "Spring light, autumn layers, holiday warmth — re-stage the same SKUs across the merchandising calendar without re-shooting anything.",
      },
      {
        icon: "Layers",
        title: "Collection Cohesion",
        description:
          "Whole collections staged in one consistent world — the curated-showroom feel that makes a store read as a brand instead of a marketplace.",
      },
    ],
    stats: [
      { value: "8", label: "Brand-vibe environment presets to build from" },
      { value: "3-4", label: "Angles per scene for full staging flexibility" },
      { value: "4x/yr", label: "Seasonal restyles without a single re-shoot" },
    ],
    cta: "Stage Your Catalog in Its World",
    relatedUseCases: ["candles", "food-beverage", "toys"],
    relatedShotTypes: ["lifestyle", "brand-atmosphere", "flat-lay"],
  },

  // ──────────────────────────────────────────────
  // 12. OUTDOOR GEAR (Abacus rain jacket anchor)
  // ──────────────────────────────────────────────
  {
    slug: "outdoor-gear",
    title: "Outdoor Gear",
    metaTitle: "AI Product Photography for Outdoor Gear Brands | Dezygn",
    metaDescription:
      "AI outdoor gear photography from real client sessions: weather scenes on demand, technical fabric fidelity, and the mid-shot rule that keeps gear visible.",
    heroHeadline: "Shoot the Storm Without Waiting for One",
    heroSubheadline:
      "Rain shells in drizzle, jackets on windswept coasts, gear in golden alpine light — we've delivered exactly these shots for real outerwear clients, on deadline, in any weather.",
    image: "/images/seo/use-cases/outdoor-gear.webp",
    imageAlt: "AI outdoor gear photography showing a rain jacket worn in atmospheric drizzle",
    problem: [
      "Outdoor gear's whole pitch is performance in conditions — and conditions are unschedulable. A rain jacket needs rain, an insulated shell needs visible cold, trail gear needs trails. Traditional outdoor shoots are expeditions: location logistics, weather windows, gear hauling, and re-shoots when the sky doesn't cooperate.",
      "The technical details carry the price tag: taped seams, waterproof zips, material panels, hood construction. Generic generation smooths exactly these features away — and an outdoor audience reads spec-level detail the way golfers read club faces.",
      "There's also a framing trap: epic landscape shots that bury the product. The mountain looks incredible; the $300 jacket is twelve pixels tall. Brand money spent on landscape photography.",
    ],
    solution:
      "This category maps to documented client work: a women's rain jacket session — three deliverables (a confident tee shot in drizzle, an after-rain fairway walk, a waterproof shoulder detail close-up) — ran 1h20 end to end, about 50 minutes of it in product prep. That ratio is the craft: sources filtered for resolution, cropped to signal, angles matched to the intended shots, so the technical fabric renders true.\n\nThe production rules from that work are built into how Dezygn shoots outdoor: mid-shot framing as the default — wide shots are landscape photography; mid-shots are product photography with environment, and the jacket stays the subject. Weather and terrain are scene ingredients: drizzle, coastal wind, alpine dawn, forest trail — generated on demand, in your brand's palette, reusable across the line. Models are cast for credible outdoor energy across realistic age brackets (the comp-card workflow handled 40-60 brackets for our client in one pass), and detail close-ups prove the seam tape and zip construction that justify the spec-sheet price.",
    features: [
      {
        icon: "Image",
        title: "Weather On Demand",
        description:
          "Drizzle, wind, snow light, golden alpine hours — conditions as controllable scene ingredients instead of expedition lottery tickets.",
      },
      {
        icon: "Layers",
        title: "Technical Construction Fidelity",
        description:
          "Source-angle matching and 2K prep keep taped seams, waterproof zips and material panels rendering like the spec sheet reads.",
      },
      {
        icon: "Target",
        title: "The Mid-Shot Rule",
        description:
          "Environment with the product still the hero — the framing discipline from real client sessions that keeps epic from swallowing the gear.",
      },
      {
        icon: "Camera",
        title: "Trail-Credible Models",
        description:
          "Rugged, realistic casting across the age brackets your customers actually occupy — people who look like they use the gear.",
      },
      {
        icon: "Clock",
        title: "Season-Proof Scheduling",
        description:
          "Winter campaign in August, monsoon shots in a drought — launch timing decoupled from meteorology entirely.",
      },
    ],
    stats: [
      { value: "1h 20m", label: "Real client session: 3 deliverable shots, end to end" },
      { value: "~50 min", label: "Of that session spent on product prep — the skill" },
      { value: "3", label: "Comp-card age brackets cast in a single pass" },
    ],
    cta: "Shoot Your Gear in Its Element",
    relatedUseCases: ["golf-brands", "fitness", "fashion-accessories"],
    relatedShotTypes: ["lifestyle", "detail-close-ups", "model-shots"],
  },

  // ──────────────────────────────────────────────
  // 13. ELECTRONICS
  // ──────────────────────────────────────────────
  {
    slug: "electronics",
    title: "Electronics",
    metaTitle: "AI Product Photography for Electronics Brands | Dezygn",
    metaDescription:
      "AI electronics photography: precise device geometry, controlled reflections on glass and aluminum, and tech-coded scenes that sell the upgrade.",
    heroHeadline: "Precision Products Deserve Precision Imagery",
    heroSubheadline:
      "Electronics buyers compare specs and zoom into ports. The imagery has to be geometrically true, reflection-controlled, and clean enough to feel engineered — because the product is.",
    image: "/images/seo/use-cases/electronics.webp",
    imageAlt: "AI electronics photography showing a device with controlled reflections on a clean surface",
    problem: [
      "Electronics combine the two hardest rendering problems: precise geometry (a port in the wrong place isn't a style choice, it's a different product) and reflective materials — glass screens, aluminum bodies, glossy plastics that mirror their environment. Naive generation warps both, and tech buyers are exactly the audience that zooms in.",
      "The category's visual language is also unforgiving: minimal, controlled, clinical-clean. Inconsistent lighting or drifting angles across a product line reads as off-brand in a way lifestyle categories forgive.",
      "And accessories and gadgets live on marketplace velocity — new SKUs, colorways and bundles shipping constantly, each needing the full image set yesterday, plus lifestyle frames showing the device in a life worth upgrading to.",
    ],
    solution:
      "Electronics in Dezygn run on the documentation recipes: 85mm at f/8, straight-on or precise 3/4, high-key or neutral studio — the technical-catalog look, locked once and batched across the line. Devices are anchored by real source images with exact specifications in the subject block — device type, exact color name ('space gray,' not 'gray'), materials ('aluminum frame, glass back'), ports and controls — because in this category, approximation is misrepresentation.\n\nReflective surfaces get the multi-directional soft lighting rule: fill that keeps screens and metal readable instead of mirrored chaos or black voids. For lifestyle, the modern-tech scene world — urban lofts, clean desks, brushed metal and polished concrete — places devices in the aspirational context that sells upgrades, while UGC-style frames cover the ad rotation. Macro shots document ports, textures and build quality for the spec-checkers.",
    features: [
      {
        icon: "Target",
        title: "Geometry That Survives Zoom",
        description:
          "Real source anchoring plus exact spec language keeps ports, buttons and proportions true — the difference between your product and a hallucinated cousin.",
      },
      {
        icon: "Sparkles",
        title: "Controlled Glass and Aluminum",
        description:
          "Multi-directional fill lighting keeps screens, bezels and metal bodies readable — engineered reflections instead of accidental mirrors.",
      },
      {
        icon: "Layers",
        title: "Line-Wide Clinical Consistency",
        description:
          "One locked technical recipe across every SKU and colorway — the catalog discipline tech brands are judged by.",
      },
      {
        icon: "Image",
        title: "Desk-Worthy Lifestyle Scenes",
        description:
          "Minimal lofts, clean workspaces, modern kitchens — the tech-coded scene world that sells the life around the device.",
      },
      {
        icon: "Camera",
        title: "Macro Build-Quality Proof",
        description:
          "Port arrays, speaker grilles, surface textures at close-up — the detail documentation that converts spec-sheet readers.",
      },
    ],
    stats: [
      { value: "85mm f/8", label: "The locked technical-catalog recipe" },
      { value: "100%", label: "Of devices anchored to real source images" },
      { value: "1 setup", label: "Consistency across every SKU and colorway" },
    ],
    cta: "Shoot Your Devices to Spec",
    relatedUseCases: ["fitness", "home-decor", "outdoor-gear"],
    relatedShotTypes: ["studio", "detail-close-ups", "lifestyle"],
  },

  // ──────────────────────────────────────────────
  // 14. BEAUTY
  // ──────────────────────────────────────────────
  {
    slug: "beauty",
    title: "Beauty & Cosmetics",
    metaTitle: "AI Product Photography for Beauty Brands | Dezygn",
    metaDescription:
      "AI beauty photography: consistent dedicated models, honest skin, accurate shades and textures — the volume the beauty content machine demands.",
    heroHeadline: "Beauty Runs on Faces, Volume, and Shade Accuracy",
    heroSubheadline:
      "No category consumes more creative or scrutinizes it harder. Consistent models, honest skin texture, true-to-tube shades — at the publishing cadence beauty demands.",
    image: "/images/seo/use-cases/beauty.webp",
    imageAlt: "AI beauty photography showing a model with natural skin texture holding a cosmetic product",
    problem: [
      "Beauty is the highest-volume content category in e-commerce — daily social, constant ad rotation, launch after launch — and almost all of it needs faces. Model costs scale linearly with that appetite, and switching faces constantly costs the brand recognition that beauty marketing is built on.",
      "Skin is the realism frontier. Over-smoothed, poreless AI skin is the single most recognizable tell in the category — and it's also exactly what modern beauty consumers have learned to distrust. Plastic skin doesn't just look fake; it contradicts the texture-positive direction the whole industry moved toward.",
      "Shade accuracy is the returns engine: a foundation or lipstick whose photo reads a shade off generates returns and one-star 'not the color pictured' reviews. Color is not a vibe in beauty; it's the product.",
    ],
    solution:
      "Dezygn's model system was built for categories like this. Dedicated models are cast from your brand identity through comp cards, then kept consistent across months of content via clean-portrait compositing — one recognizable face for the campaign, or a deliberate cast spanning your shade range. Skin is directed honestly: natural texture, real pores, expressions dialed with volume adjectives ('quiet joy,' 'serene confidence') so faces read editorial instead of uncanny.\n\nProducts get the cosmetics-specific accuracy treatment: containers anchored by real photos with material language (frosted glass, airless pump, rose-gold trim), and shades specified as exact color values rather than adjectives — because 'warm nude' means a different thing to every model, and your hex value means one. Application moments — mid-swatch, mid-blend, compact in hand — come from the action vocabulary, and the UGC recipe covers the ad formats that outperform polish in this category.",
    features: [
      {
        icon: "Target",
        title: "One Face, Whole Campaign",
        description:
          "Dedicated models consistent across PDP, social and ads — the brand-recognition asset beauty houses pay agencies to maintain.",
      },
      {
        icon: "Sparkles",
        title: "Skin That Reads Human",
        description:
          "Natural texture and restrained expression direction — engineered against the plastic-skin tell that kills beauty credibility.",
      },
      {
        icon: "Palette",
        title: "Shade-Exact Color",
        description:
          "Exact color values for products and swatches instead of adjectives — the discipline that prevents 'not the color pictured' returns.",
      },
      {
        icon: "Camera",
        title: "Application Moments On Cue",
        description:
          "Mid-swatch, mid-application, compact-in-hand — directed action that shows the product working without a shoot day.",
      },
      {
        icon: "Zap",
        title: "The Beauty Content Cadence",
        description:
          "Launch sets, daily social, UGC ad rotations — generated at the volume the category's algorithm-driven marketing actually requires.",
      },
    ],
    stats: [
      { value: "1 face", label: "Campaign-long model consistency" },
      { value: "Hex", label: "Shades specified as values, not adjectives" },
      { value: "Daily", label: "The content cadence beauty brands sustain" },
    ],
    cta: "Cast Your Beauty Campaign",
    relatedUseCases: ["skincare", "jewelry", "fashion-accessories"],
    relatedShotTypes: ["ugc", "model-shots", "studio"],
  },

  // ──────────────────────────────────────────────
  // 15. BABY PRODUCTS
  // ──────────────────────────────────────────────
  {
    slug: "baby-products",
    title: "Baby Products",
    metaTitle: "AI Product Photography for Baby Brands | Dezygn",
    metaDescription:
      "AI baby product photography built on trust: accurate products, soft honest light, nursery scenes — without infant-model shoot logistics.",
    heroHeadline: "The Most Trust-Sensitive Buyer in E-Commerce",
    heroSubheadline:
      "Parents buying for a baby scrutinize everything. The imagery has to feel safe, soft and true — and the product that arrives has to match it exactly.",
    image: "/images/seo/use-cases/baby-products.webp",
    imageAlt: "AI baby product photography showing a nursery scene in soft natural light",
    problem: [
      "No customer evaluates imagery harder than a parent buying for an infant. Anything that pattern-matches to 'cheap listing' — harsh lighting, inconsistent catalogs, slightly-off renders — reads as a safety signal, not an aesthetic one. Trust is the entire purchase.",
      "Traditional production in this category is uniquely constrained: infant models involve regulation, ethics, scheduling chaos and cost, which is why most small baby brands fall back on flat packshots that sell none of the warmth the category runs on.",
      "And the products themselves are accuracy-critical: fabrics that touch skin, materials parents check ('organic cotton,' 'BPA-free silicone'), sizes that matter ('0-3 months' has to look 0-3 months). Embellished renders here don't just cause returns — they breach the one thing the brand sells: being trustworthy.",
    ],
    solution:
      "Dezygn shoots baby products on the trust recipe: soft natural window light (the everyday-mom warmth register, never clinical flash), nursery and home scenes in gentle brand palettes, and the wellness-soft camera language — 50mm, natural perspective, honest scale. Products are anchored to real sources with material truth front-loaded: weave texture on the swaddle, the actual silicone finish, stated dimensions so a bassinet looks bassinet-sized next to real furniture.",
    features: [
      {
        icon: "Shield",
        title: "Accuracy as a Safety Signal",
        description:
          "Real source anchoring and material-true rendering — because in this category, an honest image is a trust credential, not just a conversion asset.",
      },
      {
        icon: "Image",
        title: "Nursery Worlds in Soft Light",
        description:
          "Warm, gentle home scenes built to your palette — the visual register parents respond to, without staging a single room.",
      },
      {
        icon: "Target",
        title: "Scale Parents Can Verify",
        description:
          "Products staged against cribs, hands and real furniture at honest perspective — sized expectations set before checkout.",
      },
      {
        icon: "Sparkles",
        title: "Warmth Without Model Logistics",
        description:
          "Lived-in human traces and parent-and-product moments that read warm and real — no infant-model scheduling, ever.",
      },
      {
        icon: "Layers",
        title: "Catalog-Wide Gentleness",
        description:
          "The same soft recipe locked across every SKU — a storefront that feels like one careful brand, which is exactly the pitch.",
      },
    ],
    stats: [
      { value: "50mm", label: "Honest, natural perspective — the trust lens" },
      { value: "100%", label: "Material-true rendering on skin-contact products" },
      { value: "0", label: "Infant-model shoot days required" },
    ],
    cta: "Build a Storefront Parents Trust",
    relatedUseCases: ["toys", "home-decor", "skincare"],
    relatedShotTypes: ["lifestyle", "scale-shots", "studio"],
  },

  // ──────────────────────────────────────────────
  // 16. CANDLES (My Lela anchor)
  // ──────────────────────────────────────────────
  {
    slug: "candles",
    title: "Candles & Home Fragrance",
    metaTitle: "AI Product Photography for Candle Brands | Dezygn",
    metaDescription:
      "AI candle photography that sells atmosphere: brand worlds, golden-hour scenes, honest flames and wax. Built from a real candle-brand project.",
    heroHeadline: "You're Not Selling Wax. You're Selling an Evening.",
    heroSubheadline:
      "Candles are the purest atmosphere product in e-commerce — bought for the mood they promise. The photography has to deliver that mood, and we've built exactly this brand world for a real candle and skincare brand.",
    image: "/images/seo/use-cases/candles.webp",
    imageAlt: "AI candle photography showing a lit candle in a warm Mediterranean-styled scene",
    problem: [
      "A candle on white tells the customer nothing that matters. The product is the atmosphere — the golden evening, the ritual, the room it transforms — and atmosphere is exactly what flat e-commerce photography can't deliver. Lifestyle imagery isn't optional in this category; it's the primary driver of purchase decisions, and brands with weak visuals lose sales directly to brands with strong ones.",
      "Flame and wax are physics problems: real flame behavior, honest wax texture, light falloff in a dim room. Naive AI generation produces sci-fi flames and plastic wax — instantly wrong to anyone who's ever lit a candle.",
      "And fragrance can't be photographed at all — scent has to be communicated visually, through ingredients, place and palette. 'Fig and sandalwood' needs a world, not a white sweep.",
    ],
    solution:
      "One of our documented brand-world projects is a Belgian candle and skincare brand whose extracted identity became the entire visual system: Mediterranean coastal settings, olive groves, sun-bleached linen, warm terracotta and sage, handcrafted ceramics, golden hour light, relaxed bohemian elegance. Every scene, prop and lighting choice filtered through that world — which is why the imagery reads as a brand, not a mood board.\n\nThat's the candle methodology in Dezygn: extract the brand world, build the scene library (evening interiors, ritual corners, tablescapes — 3-4 angles each, matching light), and stage the accurate product inside it. Vessels are anchored by real photos — amber glass, matte ceramic, label legible via the 2K rule — and scent is translated visually: the fig branch, the sandalwood tones, the ingredients as props in flat lays. Flames and lit scenes are held to the realism sniff test, and golden-hour or candlelit recipes do what they do best here: warm, single-mood atmosphere on a product that isn't reflective.",
    features: [
      {
        icon: "Palette",
        title: "A Brand World, Documented",
        description:
          "The exact methodology from our real candle-brand project: extracted identity → visual world → every image filtered through it.",
      },
      {
        icon: "Image",
        title: "Evenings You Can Almost Smell",
        description:
          "Ritual corners, candlelit dinners, golden-hour interiors — the atmosphere library that sells what the white background can't.",
      },
      {
        icon: "Sparkles",
        title: "Scent, Translated Visually",
        description:
          "Ingredient props, regional palettes, material textures — fragrance notes turned into imagery customers can read at a glance.",
      },
      {
        icon: "Shield",
        title: "Honest Flames, Honest Wax",
        description:
          "Lit scenes held to the realism test — natural flame behavior and true wax texture, never the sci-fi glow that breaks the spell.",
      },
      {
        icon: "Clock",
        title: "Seasonal Collections in Days",
        description:
          "Autumn spice, winter hearth, summer linen — collection worlds restyled per season without restaging a single shelf.",
      },
    ],
    stats: [
      { value: "1 world", label: "Brand identity driving every scene and prop" },
      { value: "3-4", label: "Angles per scene in the atmosphere library" },
      { value: "2K+", label: "Source resolution keeping vessel labels crisp" },
    ],
    cta: "Bottle the Atmosphere",
    relatedUseCases: ["skincare", "home-decor", "food-beverage"],
    relatedShotTypes: ["lifestyle", "brand-atmosphere", "flat-lay"],
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((useCase) => useCase.slug === slug);
}
