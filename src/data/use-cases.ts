export interface UseCase {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
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
  // 1. GOLF BRANDS
  // ──────────────────────────────────────────────
  {
    slug: "golf-brands",
    title: "Golf Brands",
    metaTitle: "AI Product Photography for Golf Brands | Dezygn",
    metaDescription:
      "Create stunning golf product photos without fighting metal reflections. Dezygn's AI handles clubs, bags, and apparel — 2,500 shots/month at $99.",
    heroHeadline: "Stop Losing Sales to Bad Club Photos",
    heroSubheadline:
      "Golf equipment is one of the hardest product categories to photograph. Reflective metal, intricate grooves, and the need to convey performance — Dezygn handles all of it with AI-generated imagery built for the fairway.",
    problem: [
      "If you sell golf equipment, you already know the pain. Clubs are made of highly polished metal — chrome, stainless steel, titanium — and every single surface acts like a mirror. A traditional product shoot means hours of adjusting lighting rigs, taping diffusion panels, and still ending up with photos that show the photographer's reflection in the club face. One bad glare across the sweet spot and the entire image is unusable. For a brand releasing a new iron set with 8 clubs, each needing 4-6 angles, that is 40+ individual shots where reflections can ruin everything.",
      "Then there is the detail problem. Golfers are obsessive about specs. They want to see the milling pattern on a putter face, the cavity back design of an iron, the crown texture on a driver. These micro-details require macro photography setups with specialized lenses, focus stacking, and post-processing — easily $200-400 per SKU just for detail shots. Multiply that across a seasonal catalog and you are looking at five figures before you have even shot a single lifestyle image.",
      "Lifestyle photography for golf is its own nightmare. You need access to a course (permit fees, weather dependency, golden-hour timing), models who can actually swing a club convincingly (not just hold it), and the logistical challenge of hauling lighting equipment across 18 holes. Most DTC golf brands end up with either sterile white-background shots that fail to inspire, or amateurish on-course photos that undermine their premium positioning.",
      "And let us talk about seasonal velocity. The golf industry launches new products on tight cycles — spring releases need to be photographed in winter, limited editions drop with weeks of lead time, and custom colorways multiply your SKU count fast. Traditional photography simply cannot keep pace without blowing your marketing budget wide open.",
    ],
    solution:
      "Dezygn turns golf product photography from a logistical headache into a streamlined creative process. Upload a few reference images of your clubs, bags, or apparel, and our AI handles the rest — generating studio-quality shots with perfect lighting that eliminates reflections, plus lifestyle imagery set on photorealistic course backgrounds without ever leaving your office. Awa, our AI Creative Director, understands the visual language of premium golf brands and automatically suggests compositions that highlight the details golfers care about: face milling, shaft graphics, sole geometry, and alignment aids.\n\nThe Visual Syntax framework lets you define your brand's exact aesthetic — whether that is the clean minimalism of a modern DTC brand or the heritage feel of a classic equipment maker — and apply it consistently across every image. Import your brand colors, fonts, and logo, and Dezygn ensures every shot feels like it belongs in your catalog. With 2,500 credits per month, you can photograph an entire seasonal lineup including hero shots, detail close-ups, lifestyle scenes, and social media crops — all for $99/month instead of $15,000+ per traditional shoot.",
    features: [
      {
        icon: "Sparkles",
        title: "Reflection-Free Metal Rendering",
        description:
          "Our AI eliminates the glare and mirror effects that plague traditional club photography, producing clean images that show the true finish of every surface.",
      },
      {
        icon: "Target",
        title: "Macro Detail Generation",
        description:
          "Generate ultra-close-up views of club faces, groove patterns, and sole designs without expensive macro lens setups or focus stacking workflows.",
      },
      {
        icon: "Image",
        title: "Course Lifestyle Backgrounds",
        description:
          "Place your products on photorealistic fairways, greens, and pro-shop settings — no course permits, no weather delays, no golden-hour scrambles.",
      },
      {
        icon: "Layers",
        title: "Full-Set Consistency",
        description:
          "Shoot an 8-piece iron set or a 14-club bag and get perfectly matched lighting, angles, and color grading across every single image.",
      },
      {
        icon: "Clock",
        title: "Seasonal Speed",
        description:
          "Generate launch-ready images for new releases in hours instead of weeks. Hit your spring catalog deadline even if the product ships in February.",
      },
    ],
    stats: [
      { value: "$7.1B", label: "U.S. golf equipment market size (2024)" },
      { value: "34%", label: "Of golfers research gear online before buying" },
      { value: "2.8x", label: "Higher conversion with lifestyle imagery vs. white background" },
    ],
    cta: "Start Shooting Your Golf Line Today",
    relatedUseCases: ["fitness", "outdoor-gear", "fashion-accessories"],
    relatedShotTypes: ["hero-shots", "detail-close-ups"],
  },

  // ──────────────────────────────────────────────
  // 2. SKINCARE
  // ──────────────────────────────────────────────
  {
    slug: "skincare",
    title: "Skincare",
    metaTitle: "AI Product Photography for Skincare | Dezygn",
    metaDescription:
      "Capture the glow, texture, and luxury of skincare products with AI photography. No more fighting translucent bottles. Try Dezygn free.",
    heroHeadline: "Your Serums Deserve Better Than a Ring Light",
    heroSubheadline:
      "Skincare photography demands a clinical-meets-luxurious feel that most brands struggle to achieve. Dezygn's AI nails the glow, the drip, and the vibe — every single time.",
    problem: [
      "Skincare photography sits at the intersection of science and luxury, and getting that balance right is deceptively difficult. Your products need to look clinically effective — clean, precise, trustworthy — while simultaneously feeling indulgent and aspirational. That dual mandate means every image has to communicate efficacy and desire at the same time, and most product photographers default to one or the other.",
      "The physical challenges are brutal. Skincare bottles are often transparent or translucent, which means light passes through them in unpredictable ways. A clear serum bottle can look like a glowing gem in one setup and a washed-out ghost in another. Frosted glass diffuses light beautifully but loses all dimension without precise rim lighting. Pump dispensers, dropper caps, and airless packaging each introduce their own shadow and reflection nightmares. And if you sell a line of 20+ SKUs in similar packaging, achieving consistent lighting across all of them requires a photographer who truly specializes in beauty — and those specialists charge $500-1,500 per product.",
      "Texture photography is another massive gap. Your customers want to see what the product looks like — the viscosity of a serum on a dropper, the whipped consistency of a moisturizer, the grit of an exfoliator. These texture shots (often called swatch shots or smear shots) require food-styling-level precision, disposable backgrounds, and a lot of wasted product. Each texture shot can take 30-45 minutes to set up, shoot, and clean, making them prohibitively expensive at scale.",
      "Then there is the content treadmill. Between your DTC site, Amazon listings, TikTok Shop, Instagram, email campaigns, and retail partners who each have their own image specs, a single SKU might need 15-20 unique images. Multiply that by a product line of 30 items and you are staring at 500+ images per quarter. No wonder most skincare brands end up recycling the same three photos across every channel.",
    ],
    solution:
      "Dezygn understands skincare at a visual level. Our AI has been trained on the aesthetics that define top-performing beauty brands — the soft diffused lighting, the dewy reflections, the clean negative space, and the textural richness that makes customers reach for their credit card. Upload your product photos or 3D renders and Awa, our AI Creative Director, generates studio-quality imagery that nails the clinical-luxury balance without a single physical photoshoot.\n\nThe Visual Syntax framework lets you lock in your brand's aesthetic DNA — pastel minimalism, bold clinical, earthy organic, whatever your positioning demands — and reproduce it flawlessly across every product and every channel. Need a hero shot for your homepage, a texture close-up for your PDP, a lifestyle flat lay for Instagram, and a clean cutout for Amazon? Generate all four from a single upload. At 2,500 credits per month, you can keep your entire product catalog fresh across every sales channel without ever booking a studio.\n\nPlus, our course and community bundle means you are not just getting a tool — you are getting the strategy behind high-converting skincare imagery. Learn what top brands like Drunk Elephant, Glossier, and Tatcha do differently with their product visuals, and apply those principles directly in Dezygn.",
    features: [
      {
        icon: "Sparkles",
        title: "Translucent Bottle Mastery",
        description:
          "Our AI renders transparent and frosted glass with accurate light transmission, refraction, and rim lighting — no more washed-out or overexposed packaging.",
      },
      {
        icon: "Palette",
        title: "Texture & Swatch Generation",
        description:
          "Generate realistic serum drips, cream swatches, and exfoliator textures without wasting product or spending 45 minutes per shot on setup.",
      },
      {
        icon: "Brain",
        title: "Awa Knows Beauty",
        description:
          "Our AI Creative Director suggests compositions, color palettes, and prop styling informed by what actually converts in the skincare category.",
      },
      {
        icon: "Layers",
        title: "Full-Line Consistency",
        description:
          "Match lighting, shadows, and color grading across your entire product range — from cleansers to serums to SPF — so your brand page looks cohesive.",
      },
      {
        icon: "Globe",
        title: "Multi-Channel Output",
        description:
          "Export images sized and cropped for your DTC site, Amazon, TikTok Shop, Instagram, and retail partners from a single generation session.",
      },
      {
        icon: "Shield",
        title: "Claim-Safe Imagery",
        description:
          "Generate product images that accurately represent your packaging and formulas — critical for brands navigating FDA and FTC visual advertising guidelines.",
      },
    ],
    stats: [
      { value: "$190B", label: "Global skincare market projected by 2025" },
      { value: "73%", label: "Of consumers say product images affect purchase decisions" },
      { value: "22%", label: "Lower return rates when product images accurately represent the item" },
    ],
    cta: "Make Your Skincare Line Glow",
    relatedUseCases: ["beauty", "supplements", "candles"],
    relatedShotTypes: ["hero-shots", "detail-close-ups"],
  },

  // ──────────────────────────────────────────────
  // 3. SUPPLEMENTS
  // ──────────────────────────────────────────────
  {
    slug: "supplements",
    title: "Supplements",
    metaTitle: "AI Product Photography for Supplements | Dezygn",
    metaDescription:
      "Build trust with professional supplement photography. Dezygn's AI creates clean, compliant product images that convert — 2,500 shots/month for $99.",
    heroHeadline: "Your Supplements Look Legit. Make Your Photos Match.",
    heroSubheadline:
      "The supplement market is crowded and skeptical. Professional product imagery is the fastest way to signal quality and build trust — and Dezygn makes it effortless.",
    problem: [
      "The supplement industry has a trust problem, and your product photography is either helping or hurting. Consumers are bombarded with thousands of supplement brands online, many of which look indistinguishable from each other. When a customer lands on your product page, they make a snap judgment about your brand's legitimacy in under three seconds — and that judgment is almost entirely based on your imagery. Grainy photos, inconsistent lighting, or amateurish backgrounds instantly trigger the 'this looks sketchy' response that kills conversions.",
      "Supplement packaging is deceptively hard to photograph well. Most products come in similar formats — bottles, pouches, tubs, blister packs — with labels that contain dense text, nutrition facts panels, and regulatory information. Getting the label sharp and readable while maintaining attractive lighting on the container itself requires careful balance. Glossy labels reflect studio lights. Matte finishes absorb light and look flat. Metallic inks need specific angles to pop. And the ubiquitous white or black HDPE bottle that 80% of supplements come in is either blown out or lost in shadows without expert lighting.",
      "Lifestyle photography for supplements is another minefield. You need to show your product in context — a protein powder in a gym setting, a sleep supplement on a nightstand, a greens blend in a kitchen — but the imagery cannot make implied health claims. The FDA and FTC scrutinize supplement marketing closely, and a photo that shows an overly fit model next to your product can be interpreted as a before-and-after claim. This regulatory tightrope makes many brands default to boring, clinical imagery that fails to differentiate.",
      "Scale is the final challenge. Most supplement brands carry 10-30 SKUs across multiple flavors, sizes, and formats. Each needs a primary product image, a label detail shot, lifestyle context, and social-ready crops. At $200-400 per SKU for professional photography, a full catalog refresh runs $5,000-12,000 — money that most growth-stage supplement brands would rather spend on ads or inventory.",
    ],
    solution:
      "Dezygn gives supplement brands the visual credibility they need without the cost or complexity of traditional photography. Upload your product or packaging files and our AI generates clean, professional imagery with the precise lighting that makes bottles look premium, labels look sharp, and your brand look established. Awa, our AI Creative Director, understands the visual codes of the supplement space — what makes a brand look trustworthy versus cheap — and guides every composition accordingly.\n\nThe Visual Syntax framework lets you establish and enforce a consistent visual identity across your entire product line. Whether you are a clinical brand with clean white aesthetics or an active lifestyle brand with bold, energetic visuals, Dezygn ensures every image reinforces your positioning. Generate hero shots, ingredient flat lays, lifestyle scenes, and comparison layouts — all while maintaining the visual accuracy that keeps you on the right side of regulatory guidelines.\n\nWith 2,500 credits per month at $99, you can reshoot your entire catalog quarterly, create fresh content for every product launch, and A/B test different visual approaches — all without booking a single studio session. The brand import feature means your exact colors, fonts, and logo treatments are baked into every image automatically.",
    features: [
      {
        icon: "Shield",
        title: "Trust-Building Compositions",
        description:
          "Awa suggests layouts and lighting that signal quality and legitimacy — critical in an industry where consumers are trained to be skeptical.",
      },
      {
        icon: "Camera",
        title: "Label Clarity Engine",
        description:
          "Generate images where supplement facts panels, ingredient lists, and certifications are sharp and readable, not blurred or blown out by reflections.",
      },
      {
        icon: "Image",
        title: "Compliant Lifestyle Scenes",
        description:
          "Place your products in aspirational but regulation-safe contexts — kitchens, desks, gym bags — without implying unsubstantiated health claims.",
      },
      {
        icon: "Package",
        title: "Multi-Format Support",
        description:
          "Bottles, pouches, tubs, stick packs, blister packs — Dezygn handles every common supplement packaging format with optimized lighting for each.",
      },
      {
        icon: "Zap",
        title: "Flavor Variant Automation",
        description:
          "Launch a new flavor? Generate a full image set in minutes by swapping labels on your existing product template instead of reshooting from scratch.",
      },
    ],
    stats: [
      { value: "$177B", label: "Global dietary supplement market (2024)" },
      { value: "65%", label: "Of online supplement buyers say photos influence trust" },
      { value: "3.2x", label: "Higher click-through rate with professional vs. amateur product images" },
    ],
    cta: "Build Trust With Better Product Photos",
    relatedUseCases: ["skincare", "fitness", "food-beverage"],
    relatedShotTypes: ["studio", "flat-lay"],
  },

  // ──────────────────────────────────────────────
  // 4. JEWELRY
  // ──────────────────────────────────────────────
  {
    slug: "jewelry",
    title: "Jewelry",
    metaTitle: "AI Product Photography for Jewelry | Dezygn",
    metaDescription:
      "Capture sparkle, detail, and luxury in jewelry product photos without a $2,000 shoot. Dezygn's AI masters reflections and scale — try it free.",
    heroHeadline: "Every Facet, Every Sparkle — Without the $2K Photoshoot",
    heroSubheadline:
      "Jewelry is the hardest product category to photograph. Period. Dezygn's AI handles reflections, scale, and sparkle so you can focus on designing beautiful pieces.",
    problem: [
      "Ask any product photographer what the most difficult category is, and they will tell you jewelry. The combination of highly reflective metal surfaces, transparent or translucent gemstones, tiny scale, and the need to convey sparkle and luxury creates a perfect storm of photographic challenges. A single ring can take 30-60 minutes to light correctly, and even then, the photographer's hands, camera, and studio are often visible in the reflections. Professional jewelry photographers use specialized equipment — light tents, fiber optic spot lights, anti-reflection sprays, and custom-bent reflector cards — that most general product photographers do not own.",
      "Scale is an equally frustrating challenge. A pair of earrings is two centimeters long, but on your product page it needs to look detailed and substantial. Macro photography captures the detail but requires specialized lenses ($800-2,000), focus stacking (shooting 15-30 frames at slightly different focus points and merging them in software), and post-processing that can take an hour per image. Without this level of effort, your jewelry looks soft, flat, and cheap — the exact opposite of what it is.",
      "The sparkle problem is real and underappreciated. Diamonds, cubic zirconia, moissanite, and crystal all derive their beauty from how they interact with light — fire, brilliance, and scintillation are literally the value proposition. But a static photograph cannot show the dynamic play of light that makes gemstones captivating in person. Most jewelry photos end up looking dull because the lighting setup optimized for the metal kills the gemstone's sparkle, or vice versa. Getting both to look great simultaneously requires separate lighting passes composited in Photoshop.",
      "Finally, there is the volume problem. A jewelry brand with 200 SKUs — not unusual for even a mid-size business — needs at minimum 3-5 images per piece (hero, detail, scale on model, lifestyle, alternate angle). That is 800-1,000 images. At $150-300 per image for quality jewelry photography, a full catalog shoot costs $120,000-300,000. Most independent jewelers and DTC brands simply cannot afford this, so they end up with inconsistent, low-quality images that actively lose them sales.",
    ],
    solution:
      "Dezygn was built for exactly this kind of challenge. Our AI understands the optical properties of metals, gemstones, and crystals at a fundamental level, generating images with accurate reflections, realistic sparkle, and the kind of luxurious lighting that typically requires a specialist photographer with $50,000 in equipment. Upload reference images of your pieces and Awa, our AI Creative Director, generates studio-quality shots that show every facet, every setting detail, and every surface finish exactly as your customers need to see them.\n\nThe Visual Syntax framework is particularly powerful for jewelry brands because it lets you define the precise mood and aesthetic of your imagery — warm gold tones for vintage-inspired pieces, cool platinum lighting for modern designs, romantic soft-focus for bridal collections. Apply your visual language consistently across your entire catalog so every product page feels like it belongs to the same brand, regardless of whether the piece is a $50 pair of studs or a $5,000 engagement ring.\n\nWith 2,500 credits per month, a 200-SKU jewelry brand can generate a complete catalog refresh — including hero shots, macro details, on-model styling, and lifestyle scenes — for less than the cost of photographing five pieces traditionally. That is not an incremental improvement. That is a category shift.",
    features: [
      {
        icon: "Sparkles",
        title: "Intelligent Sparkle Rendering",
        description:
          "Our AI simulates the fire, brilliance, and scintillation of gemstones — capturing the dynamic light play that makes stones captivating in real life.",
      },
      {
        icon: "Target",
        title: "Macro-Level Detail",
        description:
          "Generate tack-sharp close-ups showing prong settings, pave details, engraving, and stone clarity without focus stacking or macro lens setups.",
      },
      {
        icon: "Camera",
        title: "Multi-Metal Accuracy",
        description:
          "Accurate rendering of yellow gold, rose gold, white gold, platinum, sterling silver, and mixed metals with proper color temperature and reflectivity.",
      },
      {
        icon: "Layers",
        title: "Scale Context",
        description:
          "Generate on-hand, on-neck, and on-ear shots that give customers accurate size reference — the number one concern for online jewelry buyers.",
      },
      {
        icon: "Palette",
        title: "Collection Cohesion",
        description:
          "Match lighting, background, and styling across bridal, fashion, fine, and demi-fine collections while maintaining each line's distinct character.",
      },
      {
        icon: "Zap",
        title: "Variant Speed",
        description:
          "Photograph one ring in three metal options, five stone colors, and two finishes? Generate all 30 variants in a single session, not 30 separate shoots.",
      },
    ],
    stats: [
      { value: "$57B", label: "U.S. jewelry market revenue (2024)" },
      { value: "44%", label: "Of jewelry purchases now happen online" },
      { value: "28%", label: "Average return rate for jewelry — often caused by unmet visual expectations" },
    ],
    cta: "Photograph Your Collection Like a Luxury Brand",
    relatedUseCases: ["fashion-accessories", "beauty", "skincare"],
    relatedShotTypes: ["detail-close-ups", "model-shots"],
  },

  // ──────────────────────────────────────────────
  // 5. TOYS
  // ──────────────────────────────────────────────
  {
    slug: "toys",
    title: "Toys",
    metaTitle: "AI Product Photography for Toys | Dezygn",
    metaDescription:
      "Create vibrant, playful toy product photos that parents and kids love. Dezygn's AI generates lifestyle scenes and studio shots — 2,500/month for $99.",
    heroHeadline: "Toy Photos That Make Kids Point and Parents Click",
    heroSubheadline:
      "Toy photography needs to sell to two audiences at once — the child who wants it and the parent who buys it. Dezygn's AI creates images that win both over.",
    problem: [
      "Toy photography serves two masters, and they want completely different things. Kids want to see toys in action — imaginative play scenarios, bright colors, fun environments that spark excitement. Parents want to see build quality, safety features, size relative to their child, and whether the product looks worth the price. Creating images that satisfy both audiences simultaneously requires creative direction that most product photographers are not equipped to provide, because it is fundamentally a marketing problem, not just a photography problem.",
      "The physical challenges compound the creative ones. Toys come in wildly diverse forms — plush animals, building sets with hundreds of pieces, action figures with articulated joints, board games with multiple components, electronic toys with screens and lights. Each category has its own photography requirements. A plush toy needs soft, warm lighting to look huggable. A building set needs to be shown both assembled and as individual pieces. An electronic toy needs to show the screen or lights in action without blowing out the rest of the image. There is no one-size-fits-all setup.",
      "Lifestyle photography for toys ideally includes children, and that introduces a whole layer of complexity and cost. Child models require specialized agencies, parental consent, shorter work hours, on-set tutors (for school-age kids), and photographers experienced in getting natural-looking expressions from a six-year-old. A single lifestyle shoot with child models can cost $3,000-8,000 per day, and you might get usable images of 8-12 products in that time. For a toy brand with 50-100 SKUs, the math is devastating.",
      "Seasonality makes it worse. The toy industry lives and dies by Q4 — roughly 40% of annual sales happen in November and December. That means your product photography needs to be complete by September at the latest, often requiring you to shoot spring and summer products alongside holiday items, creating scheduling nightmares and rushed timelines that sacrifice quality.",
    ],
    solution:
      "Dezygn lets toy brands create both the whimsical, play-oriented imagery that captures kids' imaginations and the clear, detailed product shots that give parents confidence — without the complexity and cost of traditional shoots. Our AI generates vibrant lifestyle scenes that show toys in playful environments (bedrooms, playgrounds, living rooms), complete with realistic lighting and context, while also producing clean studio shots that highlight build quality and included components.\n\nAwa, our AI Creative Director, understands the visual language of the toy industry — bold primary colors, energetic compositions, and the aspirational play scenarios that drive purchase intent. The Visual Syntax framework lets you define your brand's personality (educational and calm, adventurous and exciting, nostalgic and wholesome) and apply it consistently across every product image. Import your brand's color palette and Dezygn ensures your packaging, product, and lifestyle imagery all feel unified.\n\nWith 2,500 credits per month, you can generate complete image sets for your entire holiday lineup by summer, test different creative approaches for your hero products, and create seasonal variations of existing images — turning a summer outdoor shot into a holiday gift-giving scene — all without rebooking a studio.",
    features: [
      {
        icon: "Sparkles",
        title: "Play Scene Generation",
        description:
          "Create imaginative lifestyle environments — bedrooms, backyards, classrooms — that show your toys in the context of play without hiring child models.",
      },
      {
        icon: "Package",
        title: "Unboxing & Component Shots",
        description:
          "Show what is in the box with organized component layouts, assembled vs. unassembled views, and everything-included shots that set clear expectations.",
      },
      {
        icon: "Target",
        title: "Scale Reference",
        description:
          "Generate images that communicate actual toy size — shown next to familiar objects, hands, or in room settings — reducing the number one cause of toy returns.",
      },
      {
        icon: "Palette",
        title: "Color-Accurate Rendering",
        description:
          "Vibrant, accurate color reproduction ensures the bright reds, blues, and yellows on your product page match what arrives in the mail.",
      },
      {
        icon: "Clock",
        title: "Seasonal Turnaround",
        description:
          "Generate your entire Q4 holiday catalog by summer. Then create Valentine's, Easter, and back-to-school variants without reshooting a single product.",
      },
    ],
    stats: [
      { value: "$38B", label: "U.S. toy industry annual revenue" },
      { value: "40%", label: "Of toy sales happen in Q4 alone" },
      { value: "58%", label: "Of parents research toys online before purchasing" },
    ],
    cta: "Make Your Toys Irresistible Online",
    relatedUseCases: ["baby-products", "pet-products", "electronics"],
    relatedShotTypes: ["lifestyle", "scale-shots"],
  },

  // ──────────────────────────────────────────────
  // 6. PET PRODUCTS
  // ──────────────────────────────────────────────
  {
    slug: "pet-products",
    title: "Pet Products",
    metaTitle: "AI Product Photography for Pet Products | Dezygn",
    metaDescription:
      "Create adorable, high-converting pet product photos without wrangling animals on set. Dezygn's AI generates lifestyle scenes with pets — try it free.",
    heroHeadline: "Great Pet Product Photos. Zero On-Set Zoomies.",
    heroSubheadline:
      "Pet parents buy with their hearts. Your product photos need to trigger that emotional connection — and Dezygn's AI creates pet lifestyle imagery without the chaos of an actual animal on set.",
    problem: [
      "Pet product photography has a fundamental problem: the best images include actual pets, and actual pets are the worst photographic subjects on the planet. Dogs do not hold still. Cats actively resist direction. A golden retriever wearing your new bandana will spend the entire shoot trying to remove it. Professional animal wranglers exist, but they charge $500-1,500 per session, and even then, you are at the mercy of the animal's mood. A full-day shoot with animals might yield 20-30 usable frames — and that is a good day.",
      "The emotional stakes are high in pet product marketing. Pet parents (and that is what they call themselves) are deeply emotional buyers who want to see products on animals that look like their own pets. This means you need diverse representation — different breeds, sizes, coat colors, and ages. A single golden retriever on set does not cut it anymore. Your Chihuahua customers want to see a Chihuahua in that sweater. Your senior dog customers want to see a grey-muzzled lab with that orthopedic bed. This breed diversity requirement multiplies your production costs exponentially.",
      "Product diversity adds another layer of complexity. The pet products category spans food, treats, toys, beds, leashes, collars, apparel, grooming tools, supplements, and accessories — each with different photography requirements. A dog bed needs to look cozy and inviting (warm lighting, lifestyle setting). A leash needs to look durable and functional (outdoor setting, action context). A supplement needs to look trustworthy (clean, clinical). No single photoshoot setup works across these subcategories, meaning you are essentially running multiple productions per catalog.",
      "And then there is the Amazon problem. Pet products is one of the most competitive categories on Amazon, where your main image needs to be a clean product-on-white shot, but your secondary images need to tell an emotional story with lifestyle context. The brands winning on Amazon have 7-9 images per listing including infographics, lifestyle shots, and comparison charts — content that costs $1,000-2,500 per ASIN to produce professionally.",
    ],
    solution:
      "Dezygn eliminates the single biggest bottleneck in pet product photography: the animals themselves. Our AI generates photorealistic lifestyle imagery featuring dogs, cats, and other pets in natural settings — wearing your products, using your beds, playing with your toys — without a single animal on set. Choose from a wide range of breeds, sizes, and coat types to match your target customer's pet, and generate images that trigger the emotional connection pet parents need to buy.\n\nAwa, our AI Creative Director, understands what makes pet product imagery convert. It is not just about showing the product — it is about showing the bond between pet and owner, the cozy evening on the couch, the joyful park adventure. The Visual Syntax framework lets you define whether your brand is playful and colorful, premium and minimalist, or natural and earthy, then applies that aesthetic consistently across every product in your line. Import your brand assets and every image automatically includes your visual identity.\n\nWith 2,500 credits per month, you can generate complete Amazon listings for your entire catalog, create breed-specific ad variations, produce seasonal content (holiday, summer, back-to-school), and A/B test different emotional approaches — all for $99/month instead of $25,000+ in annual photography spend.",
    features: [
      {
        icon: "Sparkles",
        title: "Breed-Specific Lifestyle Scenes",
        description:
          "Generate imagery featuring specific dog breeds, cat breeds, and other pets — no animal wrangler needed, no zoomies, no treat bribery.",
      },
      {
        icon: "Image",
        title: "Emotional Context",
        description:
          "Show products in heartwarming settings — pets cuddling on beds, playing in parks, dressed up for holidays — that trigger the emotional buying response.",
      },
      {
        icon: "Layers",
        title: "Multi-Category Coverage",
        description:
          "From food packaging to fashion accessories to grooming tools, Dezygn adapts lighting and composition to each product subcategory's visual requirements.",
      },
      {
        icon: "Target",
        title: "Size & Fit Reference",
        description:
          "Show collars, harnesses, and apparel on appropriately sized animals so customers can gauge fit — reducing the high return rate in pet apparel.",
      },
      {
        icon: "Globe",
        title: "Marketplace-Ready Outputs",
        description:
          "Generate images optimized for Amazon, Chewy, and your DTC site in a single session — complete with the white-background hero and lifestyle secondary images each platform demands.",
      },
    ],
    stats: [
      { value: "$150B", label: "U.S. pet industry spending (2024)" },
      { value: "67%", label: "Of U.S. households own a pet" },
      { value: "36%", label: "Of pet product returns are due to incorrect size expectations" },
    ],
    cta: "Create Pet Product Photos That Melt Hearts",
    relatedUseCases: ["toys", "baby-products", "food-beverage"],
    relatedShotTypes: ["lifestyle", "model-shots"],
  },

  // ──────────────────────────────────────────────
  // 7. FITNESS
  // ──────────────────────────────────────────────
  {
    slug: "fitness",
    title: "Fitness",
    metaTitle: "AI Product Photography for Fitness Products | Dezygn",
    metaDescription:
      "Shoot gym equipment, activewear, and fitness accessories with AI. Dezygn creates action-ready product photos — 2,500 shots/month at $99.",
    heroHeadline: "Your Gym Gear Deserves More Than a Garage Photo",
    heroSubheadline:
      "Fitness product photography needs to convey strength, quality, and performance. Dezygn's AI generates gym-ready lifestyle and studio shots without renting equipment or studio time.",
    problem: [
      "Fitness product photography has a unique challenge: your products need to look like they perform. A set of dumbbells sitting on a white background communicates nothing about the training experience. A yoga mat rolled up in a studio tells you nothing about how it feels during practice. Fitness consumers buy aspiration — they buy the version of themselves that uses your product — and static product shots fail to deliver that emotional hook. The brands dominating this space use dynamic lifestyle imagery: athletes mid-workout, equipment in a premium gym setting, apparel in motion. But that kind of content requires gym location access, fitness models, and action photography expertise.",
      "The logistics of fitness product photography are particularly punishing. Equipment is heavy — a full rack of dumbbells, a bench, a cable machine. Transporting these to a studio costs hundreds in shipping and handling. Shooting on location at a gym means working around their schedule, dealing with inconsistent lighting (fluorescents, mixed natural light), and clearing the background of other members and equipment. Home gym setups look amateur unless you have a genuinely photogenic space, which most people do not.",
      "Apparel and accessories require model photography, which means casting, fitting, and directing talent who actually looks fit and can demonstrate exercises with proper form. A model deadlifting with bad form is worse than no model at all — the fitness community will roast your brand on social media. Finding models who are both photogenic and genuinely athletic is expensive ($500-2,000 per day) and competitive to book.",
      "Scale is the final constraint. Fitness brands typically carry diverse product lines — equipment, apparel, accessories, supplements, digital programs — each requiring different visual treatment. Equipment needs to look industrial and sturdy. Apparel needs to show fit, stretch, and moisture management. Supplements need to look clinical and trustworthy. Creating consistent brand imagery across these subcategories while adapting to each one's visual requirements is a creative direction challenge that most photography teams solve by siloing — and that creates brand fragmentation.",
    ],
    solution:
      "Dezygn brings the visual intensity that fitness products demand without the logistics that make traditional photography so painful. Our AI generates dynamic gym environment imagery, action-style product shots, and clean studio compositions — placing your dumbbells in a premium gym, your apparel on a fit model mid-movement, and your accessories in workout context — all without leaving your office. Awa, our AI Creative Director, understands the visual codes of fitness marketing: dramatic lighting, dynamic angles, sweat and intensity cues that communicate performance.\n\nThe Visual Syntax framework lets you unify your brand's look across equipment, apparel, and supplements — maintaining a cohesive identity while adapting the visual approach for each subcategory. Define your brand as hard-core and industrial, premium and aspirational, or approachable and inclusive, and Dezygn applies that personality consistently. Import your brand colors and every generated image reinforces your identity.\n\nAt 2,500 credits per month, you can shoot your entire product line in gym settings, generate seasonal campaign imagery (New Year's resolution content, summer body campaigns), create social media content at scale, and produce comparison images that highlight your products' advantages over competitors — all for less than the cost of a single day in a photography studio.",
    features: [
      {
        icon: "Zap",
        title: "Dynamic Action Shots",
        description:
          "Generate images that show your products in use — mid-lift, mid-run, mid-flow — with the energy and motion that static shots cannot capture.",
      },
      {
        icon: "Image",
        title: "Gym Environment Scenes",
        description:
          "Place your products in photorealistic gym, studio, and outdoor fitness settings without renting space or hauling 500 pounds of equipment across town.",
      },
      {
        icon: "Camera",
        title: "Material Rendering",
        description:
          "Accurate rendering of rubber grips, chrome plates, neoprene wraps, mesh fabrics, and other fitness materials — showing texture and quality up close.",
      },
      {
        icon: "Layers",
        title: "Cross-Category Consistency",
        description:
          "Unify your equipment, apparel, and supplement imagery under one visual system while giving each category the specific treatment it needs.",
      },
      {
        icon: "Target",
        title: "Spec Visualization",
        description:
          "Generate comparison images, dimension overlays, and feature callouts that communicate the technical specs fitness buyers obsess over.",
      },
    ],
    stats: [
      { value: "$96B", label: "Global fitness equipment market (2024)" },
      { value: "72%", label: "Of fitness purchases are influenced by product imagery" },
      { value: "4.1x", label: "More engagement on lifestyle fitness imagery vs. plain product shots" },
    ],
    cta: "Power Up Your Fitness Product Photos",
    relatedUseCases: ["supplements", "golf-brands", "outdoor-gear"],
    relatedShotTypes: ["lifestyle", "hero-shots"],
  },

  // ──────────────────────────────────────────────
  // 8. FOOD & BEVERAGE
  // ──────────────────────────────────────────────
  {
    slug: "food-beverage",
    title: "Food & Beverage",
    metaTitle: "AI Product Photography for Food & Beverage | Dezygn",
    metaDescription:
      "Make your packaged food and beverage products look irresistible online. Dezygn's AI creates appetite-worthy product photos — 2,500/month for $99.",
    heroHeadline: "Make Them Hungry Through the Screen",
    heroSubheadline:
      "Food and beverage photography is an art — and a science. Dezygn's AI generates appetite-triggering product imagery that makes customers crave your products before they even read the description.",
    problem: [
      "Food and beverage product photography exists in a strange middle ground between food photography and product photography, and most photographers are only good at one. Traditional food photography — the kind you see in cookbooks and restaurant marketing — is about making prepared dishes look irresistible. But if you sell packaged food products (sauces, snacks, beverages, meal kits), you need to make the packaging look appealing while also suggesting the delicious experience inside. That dual requirement is a fundamentally different creative challenge.",
      "The physical challenges are significant. Beverage bottles and cans are reflective cylinders — one of the most technically difficult shapes to light in product photography. Getting an even highlight down the side of a bottle without hot spots, while keeping the label readable, while showing the liquid color through glass, while adding condensation for that fresh feel — each of these elements requires dedicated lighting and often separate photographic passes composited in post-production. A single bottle can take 2-3 hours to photograph properly.",
      "Food packaging is equally tricky. Flexible pouches wrinkle unpredictably. Cardboard boxes have sharp edges that create harsh shadows. Clear windows in packaging show the product inside but introduce additional lighting complexity. And if you are photographing unpackaged food items — showing the actual granola, chips, or chocolate — you enter the world of food styling, where professionals use tweezers, spray bottles, and heat guns to make each morsel look perfect. Professional food stylists charge $750-1,500 per day on top of photography costs.",
      "The content volume required for modern food and beverage e-commerce is staggering. Between your own site, Amazon, Instacart, Walmart Marketplace, specialty retailers, social media, and email marketing, each SKU might need 10-15 unique images across channels. And unlike durable goods, food products have seasonal variants, limited editions, new flavors, and recipe-focused content needs that create a perpetual demand for fresh imagery. Most food brands end up choosing between quality and volume, and neither compromise ends well.",
    ],
    solution:
      "Dezygn makes packaged food and beverage products look as good as the food inside them. Our AI generates studio-quality product shots with perfectly controlled lighting — eliminating the reflection nightmares of bottles and cans, the wrinkle problems of pouches, and the shadow issues of boxes — while also creating appetite-triggering lifestyle scenes that show your products in kitchen, dining, and entertaining contexts. Awa, our AI Creative Director, applies the visual principles of professional food styling — warm color temperatures, shallow depth of field, hero ingredient spotlighting — to your packaged products.\n\nThe Visual Syntax framework lets you define your brand's food photography style: rustic and artisanal, clean and modern, bold and indulgent, or health-forward and fresh. Apply it consistently across every product and every channel. The brand import feature ensures your packaging design, color palette, and brand personality are reflected in every lifestyle scene and composition.\n\nWith 2,500 credits per month, you can generate complete image sets for your entire product line, create seasonal and holiday-themed variations, produce recipe-context imagery showing your products as ingredients, and generate social-ready content that makes followers stop scrolling — all for a fraction of what a single food photography day would cost.",
    features: [
      {
        icon: "Sparkles",
        title: "Appetite Appeal Engine",
        description:
          "Our AI applies the visual science of food photography — warm tones, strategic moisture, texture emphasis — to make your packaged products look irresistible.",
      },
      {
        icon: "Camera",
        title: "Bottle & Can Mastery",
        description:
          "Perfect cylindrical lighting with even highlights, readable labels, visible liquid color, and optional condensation — without multi-hour lighting setups.",
      },
      {
        icon: "Image",
        title: "Kitchen & Dining Lifestyle",
        description:
          "Place your products in photorealistic kitchen counters, dining tables, and entertaining settings that create the mealtime context customers need.",
      },
      {
        icon: "Palette",
        title: "Ingredient Styling",
        description:
          "Generate flat lays and compositions showing your product alongside its key ingredients — farm-fresh produce, premium spices, natural sweeteners — to tell your quality story.",
      },
      {
        icon: "Layers",
        title: "Multi-Format Packaging",
        description:
          "Bottles, cans, pouches, boxes, jars, and tins — each packaging format gets optimized lighting and composition treatment.",
      },
      {
        icon: "Globe",
        title: "Marketplace Compliance",
        description:
          "Generate images that meet the specific requirements of Amazon Fresh, Instacart, Walmart, and specialty grocery platforms — each has different specs.",
      },
    ],
    stats: [
      { value: "$1.2T", label: "U.S. food and beverage retail market" },
      { value: "67%", label: "Of grocery shoppers use online channels at least sometimes" },
      { value: "25%", label: "Increase in add-to-cart rate with styled food photography vs. plain packaging shots" },
    ],
    cta: "Make Your Products Look Delicious",
    relatedUseCases: ["supplements", "candles", "pet-products"],
    relatedShotTypes: ["hero-shots", "flat-lay"],
  },

  // ──────────────────────────────────────────────
  // 9. FASHION ACCESSORIES
  // ──────────────────────────────────────────────
  {
    slug: "fashion-accessories",
    title: "Fashion Accessories",
    metaTitle: "AI Product Photography for Fashion Accessories | Dezygn",
    metaDescription:
      "Shoot bags, sunglasses, watches, and scarves with AI-powered photography. Dezygn creates editorial-quality images — 2,500/month for $99.",
    heroHeadline: "Turn Your Accessories Into Editorial Content",
    heroSubheadline:
      "Fashion accessories need to look styled, aspirational, and on-trend. Dezygn's AI generates editorial-quality imagery that competes with brands 10x your size.",
    problem: [
      "Fashion accessories occupy a unique space in e-commerce because they are sold on aspiration more than utility. Nobody needs another pair of sunglasses — they want the feeling that pair of sunglasses projects. This means your product photography cannot just show the product clearly; it needs to create an emotional and aspirational context. The brands winning in accessories — the Coach, Ray-Ban, and Daniel Wellington tier — invest in full editorial shoots with stylists, art directors, models, and location scouts. For an independent or growth-stage brand, competing with that level of visual sophistication on a fraction of the budget feels impossible.",
      "The technical challenges vary wildly across subcategories. Sunglasses are reflective (lenses mirror everything in the environment), have complex curves (frames need specific angles to look flattering), and need to be shown both on a surface and on a face. Watches require macro detail shots of dials, crowns, and caseback engravings while also needing wrist-shot lifestyle images. Bags need to convey size, material texture, and how they look when carried. Scarves and belts need to show drape, pattern, and scale. Each subcategory is essentially its own specialized photography discipline.",
      "Styling is the hidden cost that kills most accessories brands' photography budgets. An accessory on a white background is forgettable. The same accessory on a marble surface next to a coffee cup and a vintage book becomes an aspirational lifestyle image. But prop styling requires a prop stylist ($300-600 per day), a curated prop collection, and the creative vision to assemble compositions that feel effortless. Without professional styling, accessories imagery either looks clinical and boring or cluttered and amateurish.",
      "Trend velocity compounds the challenge. Fashion moves fast, and your imagery needs to reflect current visual trends — color stories, composition styles, editing treatments — that shift seasonally. What looked fresh six months ago can look dated today. This means accessories brands need to refresh their visual content far more frequently than brands in other categories, creating a perpetual production cycle that strains both budgets and creative resources.",
    ],
    solution:
      "Dezygn puts editorial-quality fashion photography within reach of every accessories brand, regardless of budget. Our AI generates styled, aspirational imagery that includes curated prop compositions, lifestyle context, and the visual sophistication of a professional art direction team. Upload your product photos and Awa, our AI Creative Director, suggests compositions that match current fashion photography trends — knowing when minimalism is in, when maximalism is trending, and how to style your specific products for maximum impact.\n\nThe Visual Syntax framework is essential for accessories brands because it lets you define and enforce a consistent visual identity that adapts to trends without losing brand recognition. Lock in your brand's aesthetic DNA — bohemian, minimalist, streetwear, classic luxury — and Dezygn applies it across every product image, every lifestyle shot, and every social media crop. The brand import feature means your colors, logo, and typography are seamlessly integrated.\n\nWith 2,500 credits per month at $99, you can refresh your product photography seasonally, create trend-responsive social content, generate on-model imagery without model booking fees, and produce the kind of editorial-quality visuals that make customers perceive your brand as a major player — even if you launched last year.",
    features: [
      {
        icon: "Sparkles",
        title: "Editorial Styling AI",
        description:
          "Awa suggests prop compositions, surface textures, and environmental contexts that transform product shots into aspirational lifestyle imagery.",
      },
      {
        icon: "Camera",
        title: "Multi-Subcategory Expertise",
        description:
          "Specialized rendering for sunglasses (lens reflections), watches (dial detail), bags (material texture), scarves (drape and pattern), and more.",
      },
      {
        icon: "Palette",
        title: "Trend-Responsive Aesthetics",
        description:
          "Generate images that reflect current fashion photography trends — color stories, composition styles, and editing treatments that keep your brand visually current.",
      },
      {
        icon: "Image",
        title: "On-Model Generation",
        description:
          "Show accessories styled on models without booking talent — sunglasses on faces, watches on wrists, bags on shoulders, all photorealistic.",
      },
      {
        icon: "Layers",
        title: "Collection Storytelling",
        description:
          "Generate cohesive visual narratives for seasonal collections — ensuring every piece in a drop looks like it belongs together in the lookbook.",
      },
    ],
    stats: [
      { value: "$82B", label: "U.S. fashion accessories market (2024)" },
      { value: "3.6x", label: "Higher conversion with lifestyle imagery vs. plain product photos" },
      { value: "47%", label: "Of accessories buyers say imagery is the primary purchase driver" },
    ],
    cta: "Elevate Your Accessories Photography",
    relatedUseCases: ["jewelry", "beauty", "golf-brands"],
    relatedShotTypes: ["lifestyle", "flat-lay"],
  },

  // ──────────────────────────────────────────────
  // 10. HOME DECOR
  // ──────────────────────────────────────────────
  {
    slug: "home-decor",
    title: "Home Decor",
    metaTitle: "AI Product Photography for Home Decor | Dezygn",
    metaDescription:
      "Show your home decor in beautiful room settings without staging a house. Dezygn's AI creates photorealistic interior scenes — 2,500/month for $99.",
    heroHeadline: "Show Every Piece in Its Perfect Room",
    heroSubheadline:
      "Home decor products live or die by context. Your vase needs to be on a shelf, your throw needs to be on a couch, your art needs to be on a wall. Dezygn generates those rooms for you.",
    problem: [
      "Home decor is arguably the most context-dependent product category in all of e-commerce. A ceramic vase on a white background is just a cylinder. That same vase on a mid-century modern credenza in a sunlit living room is a $65 impulse purchase. Customers shopping for home decor are not buying objects — they are buying the feeling of a room, and if your product photography does not show them that feeling, you have already lost the sale. The brands dominating home decor e-commerce (West Elm, CB2, Anthropologie) invest millions in aspirational interior photography. Independent brands need to find a way to compete.",
      "The fundamental challenge is that home decor products need to be shown in rooms, and rooms are expensive to access. Professional interior photography either requires a real home (location fees of $1,000-5,000 per day, plus the risk that the home's existing decor clashes with your products), a photography studio with room sets (even more expensive to rent and style), or virtual staging (which until recently looked obviously fake). Each product ideally needs to be shown in 2-3 different room contexts to appeal to different customer tastes — modern, traditional, bohemian, farmhouse — tripling the production cost.",
      "Scale is the ultimate problem for home decor photography. A typical home decor brand carries hundreds of SKUs: throw pillows in 15 colors, candles in 8 scents with different labels, wall art in multiple sizes and frame options, seasonal items that change quarterly. Each SKU needs at least 3-5 images (product-on-white, room context, detail/texture, scale reference, alternate angle). That is easily 1,500-2,500 images per catalog cycle. The math on traditional photography is simply not viable — you are looking at $50,000-100,000 annually just for product images, and that does not include social content or campaign imagery.",
      "Material and texture photography is critical but underserved. Customers buying home decor online cannot touch your products, so your photography needs to convey texture — the weave of a basket, the glaze of a ceramic, the nap of a velvet pillow, the grain of wood. Capturing these textures convincingly requires specialized macro photography and lighting techniques that add cost and time to every single SKU.",
    ],
    solution:
      "Dezygn solves home decor's biggest challenge: showing every product in its perfect room without actually needing a room. Our AI generates photorealistic interior scenes — living rooms, bedrooms, kitchens, bathrooms, offices, dining rooms — and places your products naturally within them, complete with proper lighting, shadows, and scale. Your vase sits on a credenza with natural window light streaming across it. Your throw drapes over an armchair with the kind of casual perfection that stylists spend an hour achieving. Your wall art hangs in a gallery wall composition that inspires customers to buy the whole set.\n\nAwa, our AI Creative Director, understands interior design aesthetics and automatically suggests room styles that complement your products — pairing a rustic candle with a farmhouse kitchen, a minimalist sculpture with a modern living room, a bohemian pillow with an eclectic bedroom. The Visual Syntax framework lets you define your brand's interior aesthetic and apply it across your entire catalog, creating the visual cohesion that makes customers browse your site the way they browse a beautifully curated home.\n\nWith 2,500 credits per month, you can generate complete room scenes for every SKU, show products in multiple interior styles, create seasonal vignettes (holiday, spring refresh, cozy fall), and produce the kind of aspirational interior photography that typically requires a six-figure annual production budget — all for $99/month.",
    features: [
      {
        icon: "Image",
        title: "Photorealistic Room Scenes",
        description:
          "Generate living rooms, bedrooms, kitchens, and more — with your products naturally placed, properly lit, and realistically shadowed.",
      },
      {
        icon: "Palette",
        title: "Interior Style Matching",
        description:
          "Awa pairs your products with complementary room aesthetics — modern, farmhouse, bohemian, Japandi, maximalist — based on your product's design language.",
      },
      {
        icon: "Layers",
        title: "Multi-Room Contexts",
        description:
          "Show the same product in 2-3 different room styles to appeal to different customer tastes — without staging a single physical space.",
      },
      {
        icon: "Target",
        title: "Scale & Proportion",
        description:
          "Products are shown at accurate scale relative to furniture and room elements, giving customers a true sense of size before they buy.",
      },
      {
        icon: "Camera",
        title: "Texture Rendering",
        description:
          "Convey the weave, glaze, grain, and nap of your materials with detail-rich close-ups that let customers 'feel' your products through the screen.",
      },
      {
        icon: "Clock",
        title: "Seasonal Refreshes",
        description:
          "Transform the same product from a summer-bright living room to a cozy fall vignette to a holiday tablescape — without reshooting anything.",
      },
    ],
    stats: [
      { value: "$202B", label: "U.S. home furnishings market (2024)" },
      { value: "77%", label: "Of home decor shoppers say lifestyle photos influence their purchase" },
      { value: "42%", label: "Reduction in returns when products are shown in realistic room contexts" },
    ],
    cta: "Put Your Decor in Its Dream Home",
    relatedUseCases: ["candles", "baby-products", "jewelry"],
    relatedShotTypes: ["lifestyle", "detail-close-ups"],
  },

  // ──────────────────────────────────────────────
  // 11. OUTDOOR GEAR
  // ──────────────────────────────────────────────
  {
    slug: "outdoor-gear",
    title: "Outdoor Gear",
    metaTitle: "AI Product Photography for Outdoor Gear | Dezygn",
    metaDescription:
      "Shoot outdoor gear in stunning wilderness settings without leaving your warehouse. Dezygn's AI creates adventure-ready product imagery — try it free.",
    heroHeadline: "Epic Outdoor Shots. Zero Expedition Required.",
    heroSubheadline:
      "Your customers buy adventure. Your product photography needs to sell that promise — and Dezygn generates stunning wilderness imagery without a single trek to the trailhead.",
    problem: [
      "Outdoor gear brands face a paradox: the most compelling product imagery happens in the most logistically impossible locations. A tent photographed in a studio tells you nothing about how it looks pitched on a mountain ridge at sunrise. A backpack on a white background does not convey the feeling of summiting a peak with your gear on your back. But actually photographing products in stunning outdoor locations means permits, weather dependency, backcountry logistics, safety considerations, and travel costs that can make a single shoot cost $10,000-25,000.",
      "Weather is the uncontrollable variable that makes outdoor photography a gamble. You plan a two-day shoot at a mountain lake, drive five hours, haul your gear to the location, and the sky is a flat grey overcast that makes everything look dull. Or it rains. Or the wildfire smoke rolls in. Professional outdoor photographers budget 2-3 extra days per shoot for weather contingencies, which doubles accommodation and travel costs. And even with padding, sometimes you just lose — ask any photographer who has been weathered out of a critical shoot three days before a product launch deadline.",
      "The technical demands are extreme. Outdoor gear comes in materials that are tough to photograph — matte nylon that absorbs light, reflective zippers and buckles that create hot spots, and products that range in scale from a pocket knife to a four-person tent. Shooting in natural environments adds wind (blowing fabric, shaking tripods), variable light (sun moving through clouds), and terrain challenges (uneven ground, limited shooting angles). Many outdoor photographers work with assistants and specialized equipment (sandbag-weighted tripods, portable reflectors, battery-powered strobes) that add crew costs.",
      "Content variety is increasingly important in this category. Outdoor consumers are savvy — they want to see gear in use, packed down, compared to body proportions, and shown in the specific environment they plan to use it. A winter jacket needs snow. A kayak paddle needs water. Hiking boots need trail. Each product might need 3-4 different environmental contexts, and no single location provides all of them. This means multiple expedition-style shoots per season, each with its own budget, logistics, and weather risks.",
    ],
    solution:
      "Dezygn brings the grandeur of the outdoors to your product photography without any of the logistical nightmares. Our AI generates photorealistic wilderness environments — mountain ridges, forest trails, alpine lakes, desert canyons, coastal cliffs — and places your gear naturally within them, with accurate lighting, shadows, and environmental interaction. Your tent pitched on a granite slab at golden hour. Your backpack on a mossy log beside a stream. Your jacket on a figure standing at a summit overlook. All without leaving your office.\n\nAwa, our AI Creative Director, understands the visual language of outdoor brands — the epic scale, the warm golden-hour tones, the rugged authenticity that outdoor enthusiasts respond to. The Visual Syntax framework lets you define whether your brand is extreme and technical, casual and approachable, or eco-conscious and nature-forward, and applies that personality to every image. Import your brand's color palette and design language, and Dezygn generates images that feel like they came from your own field team.\n\nWith 2,500 credits per month, you can generate product imagery in multiple outdoor environments (mountains, forests, deserts, water), create seasonal content (spring thaw, summer adventure, fall foliage, winter expedition), and produce the aspirational photography that outdoor consumers expect from serious gear brands — all for $99/month instead of $50,000+ in annual expedition photography costs.",
    features: [
      {
        icon: "Image",
        title: "Wilderness Scene Generation",
        description:
          "Place your gear in photorealistic mountains, forests, lakes, deserts, and coastlines — with accurate natural lighting and weather conditions.",
      },
      {
        icon: "Zap",
        title: "Weather On Demand",
        description:
          "Need golden hour? Fresh snow? Morning mist? Dramatic storm clouds? Generate the exact conditions that make your gear look its most compelling.",
      },
      {
        icon: "Camera",
        title: "Technical Material Rendering",
        description:
          "Accurate representation of ripstop nylon, GORE-TEX textures, anodized aluminum, and other technical materials that outdoor consumers evaluate closely.",
      },
      {
        icon: "Target",
        title: "Pack-Down & Scale Shots",
        description:
          "Show your tent packed vs. pitched, your bag loaded vs. empty, and products next to familiar scale references — answering the practical questions outdoor buyers always ask.",
      },
      {
        icon: "Layers",
        title: "Multi-Season Content",
        description:
          "Generate summer, fall, winter, and spring versions of the same product imagery — keeping your catalog seasonally relevant without scheduling four separate expedition shoots.",
      },
    ],
    stats: [
      { value: "$23B", label: "U.S. outdoor recreation equipment market (2024)" },
      { value: "81%", label: "Of outdoor gear buyers research products online first" },
      { value: "3.9x", label: "Higher engagement on adventure-context imagery vs. studio shots" },
    ],
    cta: "Take Your Gear Photography Off-Grid",
    relatedUseCases: ["fitness", "golf-brands", "fashion-accessories"],
    relatedShotTypes: ["lifestyle", "hero-shots"],
  },

  // ──────────────────────────────────────────────
  // 12. ELECTRONICS
  // ──────────────────────────────────────────────
  {
    slug: "electronics",
    title: "Electronics",
    metaTitle: "AI Product Photography for Electronics | Dezygn",
    metaDescription:
      "Create sleek, modern electronics product photos that compete with Apple-level imagery. Dezygn's AI handles screens, reflections, and specs — try free.",
    heroHeadline: "Apple-Level Product Shots Without the Apple Budget",
    heroSubheadline:
      "Electronics consumers expect premium, pixel-perfect imagery. Dezygn's AI generates the clean, modern product photography that tech buyers demand — at a price that makes sense for growing brands.",
    problem: [
      "Consumer electronics photography has been permanently shaped by Apple. Since the original iPhone marketing, tech consumers expect product imagery to be immaculate — perfectly lit, surgically precise, and conveying both the physical beauty and the functional capability of the product. This standard is nearly impossible to achieve without professional equipment, experienced photographers, and extensive post-production. A startup launching a new gadget is compared directly against companies spending millions on product photography, and the visual gap immediately signals 'small player' in a category where trust is everything.",
      "The technical challenges are relentless. Electronics products are a minefield of reflective surfaces — glass screens, polished metal bezels, glossy plastic housings — each requiring dedicated lighting strategies that often conflict with each other. A laptop needs its screen to show content without glare, its aluminum body to have even highlights without hot spots, and its keyboard to be readable without shadows. Achieving all three in a single exposure is physically impossible; professional electronics photography routinely composites 3-5 separate exposures per image.",
      "Screen display is a particular nightmare. If you are showing a product with a screen (phones, tablets, laptops, smartwatches, monitors), you need the screen to display content that looks natural and bright while the product body around it is lit for photography. In reality, the screen's self-illumination and the studio lighting operate at completely different color temperatures and intensities. The industry standard is to photograph the product body and screen separately, then composite them in post — a process that requires Photoshop expertise and 30-60 minutes per image.",
      "Feature visualization adds another layer of complexity. Electronics consumers want to understand what a product does, not just what it looks like. That means you need images showing ports, buttons, and connectivity options at various angles; feature callout overlays; size comparisons with familiar objects; and lifestyle context showing the product in use. Creating this comprehensive visual story for each SKU requires not just photography but art direction, graphic design, and potentially 3D rendering capabilities — a cross-disciplinary production that most small teams cannot staff.",
    ],
    solution:
      "Dezygn brings premium electronics photography to brands that do not have a seven-figure marketing budget. Our AI generates the clean, precise, modern imagery that tech consumers expect — with perfectly controlled reflections, realistic screen displays, and the sophisticated lighting that makes electronics products look premium. Upload your product or CAD renders and Awa, our AI Creative Director, generates studio shots that hold up alongside the biggest names in tech.\n\nThe Visual Syntax framework lets you define your brand's tech aesthetic — whether that is warm and approachable (like Google), minimalist and premium (like Apple), or bold and technical (like Razer) — and apply it consistently across your entire product line. Import your brand design system and every image maintains your visual identity. Generate hero shots, feature angle close-ups, lifestyle usage scenes, and comparison layouts — all from a single set of reference images.\n\nWith 2,500 credits per month at $99, you can create a complete product launch gallery in hours, generate Amazon-optimized listing images that compete with billion-dollar brands, and produce the kind of polished tech imagery that builds consumer confidence — all without hiring a product photographer, retoucher, or 3D artist.",
    features: [
      {
        icon: "Sparkles",
        title: "Reflection & Glare Control",
        description:
          "Our AI masters the reflective surfaces that define electronics — glass, metal, glossy plastic — producing clean images without hot spots or visible studio reflections.",
      },
      {
        icon: "Camera",
        title: "Screen Content Integration",
        description:
          "Show realistic screen displays on phones, tablets, laptops, and watches with proper brightness, color temperature, and viewing angle — no compositing needed.",
      },
      {
        icon: "Target",
        title: "Feature Angle Shots",
        description:
          "Generate precisely angled views that highlight ports, buttons, sensors, and design details — the images that answer technical questions before they are asked.",
      },
      {
        icon: "Brain",
        title: "Tech Aesthetic Intelligence",
        description:
          "Awa understands the visual language of consumer tech and guides every composition toward the premium, modern look that electronics buyers expect.",
      },
      {
        icon: "Layers",
        title: "Product Family Consistency",
        description:
          "Launch a phone, case, charger, and earbuds? Get perfectly matched imagery across every product in the ecosystem.",
      },
    ],
    stats: [
      { value: "$487B", label: "U.S. consumer electronics market (2024)" },
      { value: "89%", label: "Of electronics buyers say image quality impacts purchase confidence" },
      { value: "31%", label: "Higher conversion rates with 6+ product images vs. fewer than 3" },
    ],
    cta: "Give Your Tech the Premium Treatment",
    relatedUseCases: ["toys", "fitness", "outdoor-gear"],
    relatedShotTypes: ["studio", "detail-close-ups"],
  },

  // ──────────────────────────────────────────────
  // 13. BEAUTY
  // ──────────────────────────────────────────────
  {
    slug: "beauty",
    title: "Beauty",
    metaTitle: "AI Product Photography for Beauty Products | Dezygn",
    metaDescription:
      "Create stunning beauty product photography with AI. Dezygn handles cosmetics, color accuracy, and editorial styling — 2,500 shots/month for $99.",
    heroHeadline: "Beauty Photography That Actually Converts",
    heroSubheadline:
      "Your lipstick shade needs to be exact. Your palette layout needs to pop. Your brand story needs to shine through every image. Dezygn's AI delivers all three.",
    problem: [
      "Beauty product photography operates under one non-negotiable requirement: color accuracy. When a customer orders 'Sunset Rose' lipstick based on your product photo, the color that arrives needs to match what they saw on screen. This sounds simple but it is an enormous technical challenge. Different lighting setups shift color temperature. Different backgrounds affect perceived color through simultaneous contrast. Camera sensors interpret pigments differently than the human eye. And every screen your customer views the image on has different color calibration. Beauty photographers spend enormous effort on color correction and calibration, often shooting reference color cards alongside products and spending hours in post-production matching hex values.",
      "The diversity of beauty product formats makes photography exponentially complex. A cosmetics brand might sell lipsticks (cylindrical tubes with swatchable tips), eyeshadow palettes (multiple small pans needing individual color accuracy), foundations (pump bottles with skin-matching color stories), powders (compacts with pressed product visible), and tools (brushes, sponges, applicators). Each format has different lighting requirements, optimal angles, and customer expectations. An eyeshadow palette shot from the wrong angle shows shadow instead of pigment. A lipstick bullet photographed under warm light shifts the color two shades. The margin for error is razor thin.",
      "Swatch and texture photography is the backbone of beauty e-commerce, and it is painstaking work. Customers want to see arm swatches, lip swatches, eye looks, and texture close-ups for every shade. A single lipstick line with 20 shades means 20 arm swatches (requiring a model with appropriate skin tone, consistent lighting, and a makeup artist), 20 lip application shots, and 20 product-with-swatch pairings. That is 60 images for one product line. With a professional beauty photographer charging $300-500 per image, a single shade range costs $18,000-30,000 to photograph properly.",
      "The visual bar in beauty is set by brands with massive production budgets — Fenty, Rare Beauty, Charlotte Tilbury — whose product photography is essentially editorial art direction. Their images tell stories, evoke moods, and create desire through sophisticated compositions, prop styling, and post-production. Independent and DTC beauty brands competing against this level of visual sophistication need either a very talented in-house creative team or an unsustainable photography budget.",
    ],
    solution:
      "Dezygn gives beauty brands the editorial-quality imagery and color precision they need without the five-figure price tag. Our AI generates product shots with calibrated color accuracy, realistic swatch renderings, and the sophisticated art direction that beauty customers expect. Upload your product photos and Awa, our AI Creative Director, applies the visual principles that drive beauty commerce: clean compositions that let color speak, textural close-ups that build desire, and lifestyle context that creates brand affinity.\n\nThe Visual Syntax framework is particularly powerful for beauty brands because it lets you define your brand's precise aesthetic — clinical and scientific, warm and inclusive, bold and editorial, or natural and organic — and reproduce it flawlessly across every SKU and every shade. Import your brand palette and Dezygn generates compositions that complement your products' colors rather than competing with them. Need a hero shot with complementary prop colors, a swatch series on diverse skin tones, and a flat lay for Instagram? Generate all three from the same upload session.\n\nWith 2,500 credits per month, you can photograph new shade launches on day one, generate seasonal campaign imagery, create the kind of aspirational editorial content that builds brand loyalty, and maintain color-consistent product galleries across your entire line — all for $99/month. The course and community bundle teaches you the visual strategies that top beauty brands use, so every image you generate is informed by proven conversion principles.",
    features: [
      {
        icon: "Palette",
        title: "Color-Calibrated Rendering",
        description:
          "Precise color reproduction across lipsticks, eyeshadows, foundations, and powders — ensuring on-screen colors match real-world shades as closely as possible.",
      },
      {
        icon: "Sparkles",
        title: "Swatch Generation",
        description:
          "Create realistic arm swatches, lip applications, and texture close-ups without models, makeup artists, or hours of cleanup between shades.",
      },
      {
        icon: "Brain",
        title: "Editorial Art Direction",
        description:
          "Awa suggests compositions, prop styling, and color stories informed by what converts in beauty e-commerce — turning product shots into editorial content.",
      },
      {
        icon: "Layers",
        title: "Shade Range Consistency",
        description:
          "Photograph 30 shades of foundation or 24 lipstick colors with perfectly matched lighting, backgrounds, and positioning across the entire range.",
      },
      {
        icon: "Camera",
        title: "Multi-Format Expertise",
        description:
          "Optimized photography for every beauty format — tubes, compacts, bottles, palettes, pencils, and tools — each with lighting tuned to its unique challenges.",
      },
      {
        icon: "Globe",
        title: "Social-First Outputs",
        description:
          "Generate Instagram, TikTok, and Pinterest-ready imagery alongside your e-commerce shots — beauty brands need social content at a volume traditional photography cannot sustain.",
      },
    ],
    stats: [
      { value: "$101B", label: "Global color cosmetics market (2024)" },
      { value: "85%", label: "Of beauty shoppers say accurate color photos are critical" },
      { value: "19%", label: "Return rate reduction when product colors match photos accurately" },
    ],
    cta: "Make Your Beauty Line Camera-Ready",
    relatedUseCases: ["skincare", "jewelry", "fashion-accessories"],
    relatedShotTypes: ["flat-lay", "detail-close-ups"],
  },

  // ──────────────────────────────────────────────
  // 14. BABY PRODUCTS
  // ──────────────────────────────────────────────
  {
    slug: "baby-products",
    title: "Baby Products",
    metaTitle: "AI Product Photography for Baby Products | Dezygn",
    metaDescription:
      "Create warm, trustworthy baby product photos without the chaos of infant photoshoots. Dezygn's AI generates safe, beautiful imagery — try it free.",
    heroHeadline: "Beautiful Baby Product Photos. No Crying Required.",
    heroSubheadline:
      "Baby product photography needs to feel warm, safe, and trustworthy — while being incredibly practical to produce. Dezygn's AI delivers both, without the unpredictability of shooting with actual infants.",
    problem: [
      "Baby product photography has a higher emotional bar than almost any other category. Parents are not just buying a product — they are trusting you with their child's safety, comfort, and wellbeing. Every image needs to radiate warmth, safety, and care. If your product photos feel even slightly clinical, cheap, or impersonal, parents scroll past. The brands winning in this space (Snoo, Ergobaby, Lovevery) project a visual identity that is warm, modern, and reassuring — a look that requires professional art direction, not just good photography.",
      "Shooting with babies is the most challenging and unpredictable form of product photography. Infants operate on their own schedule — they sleep, eat, cry, and need diaper changes with no regard for your shooting timeline. Professional baby photography sessions rarely last more than 30 minutes of actual shooting time, with breaks for feeding, soothing, and wardrobe changes. Agencies that provide baby models charge premium rates ($500-1,500 per session), and you need a parent or guardian on set at all times, adding to the logistical complexity. A single productive shoot day might yield usable images for 5-8 products.",
      "Safety representation is a non-negotiable concern. Parents examine product images closely for safety cues — is the crib sheet fitted properly? Is the stroller harness secure? Is the toy free of small parts? Your photography needs to show these details clearly and accurately, because misrepresenting a safety feature in an image can create liability issues as well as angry customer reviews. This means every image requires careful product preparation and quality control that adds time and cost to every shot.",
      "The diversity requirement in baby products is increasingly important. Modern parents want to see babies of different ethnicities, skin tones, and genders in your imagery. This means booking multiple baby models across sessions, multiplying your already complex scheduling and budgeting challenges. And since babies grow out of product stages quickly (newborn, 3-6 months, 6-12 months), you need age-appropriate models for age-specific products — a newborn for swaddles, a crawler for play mats, a toddler for sippy cups. The casting and scheduling logistics alone can consume more time than the actual photography.",
    ],
    solution:
      "Dezygn removes the chaos from baby product photography while preserving the warmth and trust that parents need to see. Our AI generates soft, inviting product imagery — from nursery lifestyle scenes to detailed product close-ups — with the emotional warmth of a professional family photography session and none of the unpredictability of shooting with actual infants. Awa, our AI Creative Director, understands the visual language that resonates with new parents: soft natural lighting, pastel-and-neutral color palettes, and cozy nursery environments that make your products feel like part of a loving home.\n\nThe Visual Syntax framework lets you define your brand's parenting philosophy visually — modern and minimal, warm and traditional, gender-neutral and inclusive, or playful and colorful — and apply it consistently across your entire product line. From strollers to swaddles, pacifiers to play mats, every image reinforces the brand trust that parents are looking for. The brand import feature means your colors and visual identity are reflected in every nursery scene and lifestyle composition.\n\nWith 2,500 credits per month at $99, you can generate complete image sets for your entire catalog — including nursery scenes, product detail shots, scale reference images, and safety feature close-ups — show products across diverse family representations, and create seasonal content (new baby season, holiday gifting, back-to-daycare) without ever wrestling a crying infant into a onesie on set.",
    features: [
      {
        icon: "Shield",
        title: "Safety-Forward Imagery",
        description:
          "Generate images that clearly show safety features — snug crib fits, secure harnesses, age-appropriate designs — building the trust parents need to buy.",
      },
      {
        icon: "Image",
        title: "Nursery Scene Generation",
        description:
          "Place your products in beautiful, photorealistic nursery settings — cribs, changing tables, play areas — with warm natural lighting that feels like home.",
      },
      {
        icon: "Sparkles",
        title: "Warm Emotional Tone",
        description:
          "Our AI applies the soft lighting, gentle colors, and cozy composition that new parents respond to — turning product shots into moments of calm.",
      },
      {
        icon: "Layers",
        title: "Age-Stage Matching",
        description:
          "Show products with age-appropriate contexts — newborn-sized for swaddles, crawler-sized for gates, toddler-sized for cups — without casting models for each stage.",
      },
      {
        icon: "Target",
        title: "Size & Scale Clarity",
        description:
          "Generate images that communicate actual product dimensions relative to cribs, changing tables, and baby proportions — a top purchase concern for parents.",
      },
    ],
    stats: [
      { value: "$67B", label: "Global baby products market (2024)" },
      { value: "82%", label: "Of new parents research baby products online" },
      { value: "37%", label: "Of baby product returns cite 'not as pictured' as the reason" },
    ],
    cta: "Create Baby Product Photos Parents Trust",
    relatedUseCases: ["toys", "pet-products", "home-decor"],
    relatedShotTypes: ["lifestyle", "scale-shots"],
  },

  // ──────────────────────────────────────────────
  // 15. CANDLES
  // ──────────────────────────────────────────────
  {
    slug: "candles",
    title: "Candles",
    metaTitle: "AI Product Photography for Candles | Dezygn",
    metaDescription:
      "Capture the glow, texture, and mood of your candle brand with AI photography. Dezygn creates atmospheric product images — 2,500/month for $99.",
    heroHeadline: "Sell the Glow, the Scent, the Mood — Through a Photo",
    heroSubheadline:
      "Candle photography needs to sell an invisible product — scent — through a visual medium. Dezygn's AI creates atmospheric imagery that makes customers smell your candles through the screen.",
    problem: [
      "Candles present one of the most paradoxical challenges in product photography: you are trying to sell a sensory experience (scent) through a visual medium (photography). Your customer cannot smell 'Coastal Sage' or 'Warm Vanilla' through their screen, so your imagery has to do the heavy lifting of evoking that scent through visual cues — color, environment, props, lighting, and mood. This is not photography; it is synesthetic storytelling. Most product photographers are not equipped for this level of creative demand, and most candle brands end up with pretty but generic images that fail to communicate their unique fragrance stories.",
      "The technical challenge of photographing lit candles is underappreciated. A burning candle flame is orders of magnitude brighter than the product around it, creating an extreme dynamic range problem. Expose for the flame and the candle body becomes a dark silhouette. Expose for the candle body and the flame is a blown-out white blob. Capturing a warm, natural-looking glow requires careful exposure blending, specialized lighting (dim ambient to preserve the flame's warmth while gently filling the candle body), and post-processing that most photographers charge extra for. And that is just a single-wick candle — multi-wick candles and candles in decorative vessels introduce additional complexity.",
      "Wax texture and vessel quality are critical but difficult to capture. Premium candle brands invest in distinctive wax textures — smooth soy, crystallized beeswax, terrazzo-style blends — and vessels that are design objects in their own right (hand-thrown ceramics, embossed glass, concrete, recycled materials). Photographing these textures requires macro-level detail and careful lighting that reveals surface character without creating distracting shadows or reflections. Glass vessels are particularly challenging — the same reflection and transparency problems that plague skincare bottles apply here, with the added complexity of wax pooling and wick positioning.",
      "Scale and volume are the business-level challenge. Candle brands typically carry multiple product lines (single-wick, three-wick, pillar, taper, melts) across 15-40+ scents, with seasonal collections dropping quarterly. Each scent needs a hero product shot, a lifestyle mood shot, and ideally an ingredient/inspiration flat lay. That is 45-120+ images per standard collection, and double or triple that when you include seasonal content. At $150-300 per image for quality candle photography, a single year's content can cost $10,000-30,000 — a significant chunk of a candle brand's marketing budget.",
    ],
    solution:
      "Dezygn helps candle brands do what no product alone can: make customers feel a scent through their eyes. Our AI generates atmospheric, mood-rich imagery that evokes the emotional and sensory experience of each fragrance — placing your 'Coastal Sage' in a sunlit bathroom with eucalyptus sprigs, your 'Warm Vanilla' in a cozy reading nook with soft blankets, and your 'Fresh Linen' in a bright, breezy bedroom. The imagery tells the scent story visually, bridging the gap between screen and sensation.\n\nAwa, our AI Creative Director, understands how to translate fragrance notes into visual compositions. Describe your scent profile and Awa suggests environments, props, lighting, and color palettes that create the sensory bridge your customers need. The Visual Syntax framework lets you define your brand's aesthetic — minimalist and modern, rustic and artisanal, luxurious and moody, or bright and botanical — and apply it with absolute consistency across every candle in every collection. Import your brand assets and every image reinforces your packaging design and brand story.\n\nWith 2,500 credits per month at $99, you can generate complete visual stories for your entire scent library, create seasonal collection imagery (fall spice, holiday evergreen, spring floral, summer citrus), and produce the atmospheric lifestyle content that drives social media sharing and purchase intent — all without burning through your production budget alongside your wicks.",
    features: [
      {
        icon: "Sparkles",
        title: "Scent-to-Scene Translation",
        description:
          "Tell Awa your fragrance notes and get lifestyle scenes that visually evoke the scent — lavender fields for floral, fireside settings for smoky, beach mornings for fresh.",
      },
      {
        icon: "Camera",
        title: "Perfect Glow Rendering",
        description:
          "Our AI captures the warm, natural glow of a lit candle with proper exposure balance — no blown-out flames, no dark vessels, just beautiful candlelight.",
      },
      {
        icon: "Palette",
        title: "Wax & Vessel Textures",
        description:
          "Render the crystalline surface of beeswax, the smooth pour of soy, and the unique character of ceramic, glass, concrete, and metal vessels.",
      },
      {
        icon: "Image",
        title: "Atmospheric Lifestyle Scenes",
        description:
          "Place your candles in moody bathrooms, cozy living rooms, romantic dinner settings, and outdoor patios — the contexts that make candles feel essential.",
      },
      {
        icon: "Layers",
        title: "Collection Cohesion",
        description:
          "Generate visually unified imagery for seasonal collections — every candle in your 'Winter Lodge' line shares a cohesive visual story while each scent has its own personality.",
      },
      {
        icon: "Clock",
        title: "Seasonal Speed",
        description:
          "Launch a new seasonal collection every quarter with complete imagery — hero shots, lifestyle scenes, and social content — in days instead of weeks.",
      },
    ],
    stats: [
      { value: "$13.7B", label: "U.S. candle market (2024)" },
      { value: "76%", label: "Of candle purchases are driven by scent, but sold by sight online" },
      { value: "3.4x", label: "Higher conversion with mood-setting lifestyle images vs. plain product shots" },
    ],
    cta: "Light Up Your Candle Brand's Visual Story",
    relatedUseCases: ["skincare", "home-decor", "food-beverage"],
    relatedShotTypes: ["lifestyle", "detail-close-ups"],
  },
];
