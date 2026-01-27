export interface ShotType {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  definition: string;
  whenToUse: string[];
  howDezygn: string;
  tips: { title: string; description: string }[];
  relatedShotTypes: string[];
  relatedUseCases: string[];
}

export const shotTypes: ShotType[] = [
  {
    slug: "lifestyle",
    title: "Lifestyle Photography",
    metaTitle: "Lifestyle Photography with AI | Dezygn",
    metaDescription:
      "Create stunning lifestyle product photos with AI. Place your products in real-world settings — kitchens, desks, outdoor scenes — without a single photoshoot.",
    heroHeadline:
      "Put Your Products Where They Belong — In Your Customer's Life",
    definition:
      "Lifestyle photography places your product in a real-world context — on a kitchen counter, in a gym bag, on a bedside table. It answers the question every shopper silently asks: 'What does this look like in my life?' Unlike studio shots, lifestyle images build an emotional bridge between the product and the buyer by showing it in use, in situ, in the wild.",
    whenToUse: [
      "When launching a new product on Shopify and you need scroll-stopping hero images that show the product in context, not just on a white background",
      "When building out social media content for Instagram or Pinterest where aspirational, in-context imagery consistently outperforms isolated product shots",
      "When your product's value proposition depends on environment — a candle on a windowsill hits different than a candle on white seamless",
      "When you're running paid ads on Meta or TikTok and need thumb-stopping creative that looks native to the feed, not like a catalog",
    ],
    howDezygn:
      "Dezygn's AI understands that lifestyle photography is about storytelling, not just placement. When you describe a scene — 'premium protein powder on a granite kitchen counter, morning light, fresh fruit nearby' — Awa, our AI creative director, interprets the mood, lighting direction, depth of field, and environmental details to produce a cohesive image that looks like it came from a professional set.\n\nThe Visual Syntax framework lets you control every layer of the composition. You set the surface material, the background environment, the lighting mood, and the supporting props. Awa then balances these elements so your product remains the focal point while the environment tells the story. No more hiring location scouts or renting Airbnbs for a two-hour shoot.\n\nIf you've imported your brand guidelines — colors, fonts, mood references — Dezygn ensures the lifestyle scenes stay on-brand. Your earth-tone skincare line won't end up in a neon cyberpunk kitchen. The AI learns your visual language and applies it consistently across every scene you generate.",
    tips: [
      {
        title: "Lead with the environment, not the product",
        description:
          "The best lifestyle shots let the setting do the heavy lifting. Describe the room, the light, the mood first — then place the product. Awa generates more natural compositions when the environment context comes before the product placement in your prompt.",
      },
      {
        title: "Match the platform aspect ratio",
        description:
          "Instagram feed posts perform best at 4:5 (1080x1350), Pinterest wants 2:3 (1000x1500), and Facebook ads thrive at 1:1. Generate your lifestyle shots in the right dimensions from the start — cropping after the fact always kills the composition.",
      },
      {
        title: "Use the rule of thirds for product placement",
        description:
          "Place your product at one of the four intersection points on a rule-of-thirds grid. Dead center looks like a catalog. Off-center looks like editorial. Specify placement in your prompt: 'product positioned in the lower-right third of the frame.'",
      },
      {
        title: "Control the depth of field",
        description:
          "A shallow depth of field (f/1.8-f/2.8 equivalent) blurs the background and draws the eye to your product. A deeper depth of field (f/8-f/11) keeps the whole scene in focus. Use shallow for single-product hero shots, deep for scenes where the environment matters as much as the product.",
      },
      {
        title: "Add one human element",
        description:
          "A hand reaching for the product, a coffee cup half-drunk beside it, a book left open — these small human touches make lifestyle shots feel lived-in rather than staged. You don't need a full model; just a trace of human presence.",
      },
    ],
    relatedShotTypes: ["hero-shots", "model-shots", "ugc"],
    relatedUseCases: ["home-decor", "candles", "skincare"],
  },
  {
    slug: "studio",
    title: "Studio Photography",
    metaTitle: "Studio Photography with AI | Dezygn",
    metaDescription:
      "Generate clean, professional studio product photos with AI. Perfect white backgrounds, controlled lighting, and e-commerce-ready images in minutes.",
    heroHeadline: "Clean. Professional. Pixel-Perfect. No Studio Required.",
    definition:
      "Studio photography is the backbone of any product catalog — your product, isolated on a clean background with controlled, professional lighting. It's the shot Amazon requires, Shopify recommends, and every marketplace expects. No distractions, no context, just your product presented with clarity and precision so customers can see exactly what they're buying.",
    whenToUse: [
      "When listing products on Amazon, Walmart, or any marketplace that requires clean white-background images as the primary photo",
      "When building out your Shopify product catalog and need consistent, professional imagery across hundreds of SKUs",
      "When creating wholesale or B2B line sheets where buyers need to evaluate the product without environmental distractions",
      "When you need perfectly consistent lighting and angles across an entire product line for a cohesive brand presentation",
    ],
    howDezygn:
      "Dezygn treats studio photography as a lighting problem, not a background problem. Anyone can slap a product on white — the difference is in how the light wraps around the product, where the shadows fall, and how the reflections behave on different materials. Awa analyzes your product's surface properties — matte, glossy, transparent, metallic — and applies the right lighting setup automatically.\n\nThe Visual Syntax framework gives you granular control over the studio environment. Choose between hard light for dramatic shadows or soft diffused light for even coverage. Specify single-source, two-point, or three-point lighting setups. Control the shadow density and direction. You're essentially directing a virtual photography studio with natural language instead of moving C-stands.\n\nConsistency is where Dezygn really shines for studio work. When you're shooting 50 products for a catalog, every image needs to match — same lighting angle, same shadow depth, same background tone. Set up your studio parameters once, and Dezygn applies them identically across every product. No color drift between morning and afternoon shoots. No inconsistent shadows because someone bumped a light.",
    tips: [
      {
        title: "Amazon's image requirements are non-negotiable",
        description:
          "Amazon requires a pure white background (RGB 255, 255, 255), product filling 85% of the frame, no text or watermarks, and minimum 1000px on the longest side for zoom. Generate your studio shots with these specs from the start — post-processing a gray background to pure white always looks off.",
      },
      {
        title: "Match lighting to material",
        description:
          "Matte products (fabric, wood) look best with broad, soft light. Glossy products (glass, metal) need carefully positioned light sources to control reflections. Transparent products (bottles, acrylic) need backlight or light from below to show their form. Specify the material in your prompt and let Awa adjust.",
      },
      {
        title: "Shoot all angles in one session",
        description:
          "Generate front, back, side, 3/4, and top-down views in a single batch to ensure lighting consistency. Most e-commerce platforms recommend 5-7 images per product. Knock them all out in one generation session rather than coming back to it later.",
      },
      {
        title: "Don't forget the shadow",
        description:
          "A product floating on pure white with zero shadow looks like a bad Photoshop job. A soft contact shadow grounds the product and makes it feel real. Dezygn adds natural shadow by default, but you can dial it up or down. A subtle reflection on a glossy surface adds even more realism.",
      },
    ],
    relatedShotTypes: ["hero-shots", "detail-close-ups", "scale-shots"],
    relatedUseCases: ["supplements", "electronics", "jewelry"],
  },
  {
    slug: "hero-shots",
    title: "Hero Shot Photography",
    metaTitle: "Hero Shot Photography with AI | Dezygn",
    metaDescription:
      "Create dramatic, high-impact hero product images with AI. Bold lighting, cinematic angles, and scroll-stopping compositions that sell your product.",
    heroHeadline: "The Shot That Sells Your Product Before They Read a Word",
    definition:
      "A hero shot is the single image that carries your product page, your ad campaign, your homepage banner. It's the dramatic, high-impact photograph designed to make someone stop scrolling and start wanting. Hero shots use cinematic lighting, bold angles, and intentional composition to present your product at its absolute best — not just what it looks like, but what it feels like to own.",
    whenToUse: [
      "When designing your homepage or landing page and need a single product image that communicates your entire brand promise above the fold",
      "When launching a paid ad campaign where you have exactly one frame to convince someone to click — this is that frame",
      "When preparing for a product launch and need the signature image for press kits, social announcements, and email headers",
      "When your product page needs a primary image that does more than inform — it needs to persuade",
    ],
    howDezygn:
      "Hero shots are where Dezygn's prompt engineering really pays off. Awa understands cinematic language — you can describe a shot the way a photographer or director would. 'Low angle, dramatic rim lighting, dark moody background with a single warm accent light' isn't just a description; it's a lighting blueprint that Awa translates into a photorealistic composition.\n\nThe Visual Syntax framework is designed for exactly this kind of creative control. Layer your prompt with foreground elements, mid-ground product placement, and background atmosphere. Specify the camera angle (low angle for power, eye-level for approachability, overhead for design). Control the color temperature, the contrast ratio, the bokeh intensity. You're not picking from templates — you're directing a shoot.\n\nDezygn generates hero shots at up to 4K resolution, which means your images hold up on billboard-scale web banners and retina displays alike. The AI preserves fine detail — label text stays sharp, textures remain intact, edges stay clean even at dramatic angles. This is the shot that goes on your homepage, so it needs to be flawless at every size.",
    tips: [
      {
        title: "Use a low camera angle for premium products",
        description:
          "Shooting from slightly below eye level — around 15-30 degrees — makes products feel monumental and aspirational. This is why luxury brands almost always photograph from below. Specify 'low angle, camera tilted up slightly' in your prompt for this effect.",
      },
      {
        title: "One light source creates more drama than three",
        description:
          "Hero shots thrive on contrast. A single key light with deep shadows is more compelling than flat, evenly-lit product photography. Think Apple product launches — that single spotlight on a dark stage. Less light, more impact.",
      },
      {
        title: "Generate at maximum resolution",
        description:
          "Your hero image will be displayed at full-width on desktops (1920px+), used in print materials, and cropped for social. Generate at the highest resolution Dezygn offers and export multiple crops. Starting big gives you flexibility; starting small locks you in.",
      },
      {
        title: "Color contrast between product and background",
        description:
          "Your product needs to pop against its background. Light product on dark background (classic Apple aesthetic) or dark product on a bright, colored surface. Avoid backgrounds that are the same value or hue as your product — it'll blend in instead of standing out.",
      },
      {
        title: "Leave space for text overlay",
        description:
          "If this hero image is going on a landing page or ad, you'll need room for a headline. Compose with negative space on one side — left third or right third — so your design team can drop in copy without covering the product.",
      },
    ],
    relatedShotTypes: ["studio", "lifestyle", "detail-close-ups"],
    relatedUseCases: ["electronics", "fitness", "fashion-accessories"],
  },
  {
    slug: "flat-lay",
    title: "Flat Lay Photography",
    metaTitle: "Flat Lay Photography with AI | Dezygn",
    metaDescription:
      "Generate beautiful flat lay product arrangements with AI. Birds-eye compositions, curated layouts, and Instagram-ready images without the styling hassle.",
    heroHeadline:
      "Every Product Tells a Story — Flat Lays Tell the Whole Collection",
    definition:
      "Flat lay photography is a top-down, birds-eye composition where products and props are arranged on a flat surface and photographed from directly above. It's the signature style of Instagram, Pinterest, and editorial brand content. A good flat lay doesn't just show products — it curates a world around them, telling a story through deliberate arrangement, color coordination, and negative space.",
    whenToUse: [
      "When showcasing a product collection, bundle, or kit where customers need to see everything that's included in a single, organized frame",
      "When creating Instagram or Pinterest content where flat lays consistently earn higher engagement than other composition styles",
      "When you need to show complementary products together — the skincare routine, the desk setup, the travel essentials — to drive cross-sells",
      "When building seasonal or themed marketing campaigns (back-to-school, holiday gift guides, summer essentials) that need a curated editorial feel",
    ],
    howDezygn:
      "Flat lay photography is one of the hardest styles to execute well because every millimeter of spacing matters, and the camera angle must be perfectly perpendicular to the surface. With Dezygn, you skip the hours of physical arranging and re-arranging. Describe the products, the surface, the props, and the overall mood — Awa handles the spatial composition.\n\nThe Visual Syntax framework breaks flat lays into layers: surface material (marble, wood, linen, concrete), primary products, secondary props, and accent elements. You control the density of the arrangement (minimal with lots of white space vs. abundant and overflowing) and the organizational style (grid, organic scatter, diagonal flow). Awa understands composition principles like visual weight and color balance, so the arrangement feels intentional, not random.\n\nColor coordination is where AI-generated flat lays surpass most manual attempts. Describe your color palette — 'warm neutrals with a pop of terracotta' — and every element in the frame will be harmonized. The linen backdrop, the dried flowers, the ceramic dish, the product packaging — all pulled from the same tonal family. This kind of color cohesion takes a professional stylist hours to achieve with physical props.",
    tips: [
      {
        title: "Choose your surface texture deliberately",
        description:
          "The surface is your largest visual element and sets the entire mood. Marble reads luxury. Raw wood reads artisan. White linen reads clean and feminine. Concrete reads modern and masculine. Match the surface to your brand positioning — it's doing more work than you think.",
      },
      {
        title: "Use the grid vs. organic spectrum",
        description:
          "Grid-aligned flat lays (items in neat rows, parallel edges) feel organized and professional — great for tech, stationery, and supplements. Organic arrangements (items at slight angles, overlapping, casual) feel warm and editorial — better for beauty, food, and lifestyle brands.",
      },
      {
        title: "Odd numbers create better compositions",
        description:
          "Three items, five items, seven items — odd groupings are more visually interesting than even numbers. It's a fundamental design principle. If you're arranging four products, add a fifth element (a prop, a plant sprig, a texture swatch) to break the symmetry.",
      },
      {
        title: "Control your negative space ratio",
        description:
          "For a premium, minimalist feel, leave 40-50% of the frame as empty surface. For an abundant, lifestyle feel, fill 70-80% of the frame. The ratio between product and space completely changes the perceived value and vibe of the shot.",
      },
      {
        title: "Add a hand or partial hand for scale and warmth",
        description:
          "A hand entering the frame — reaching for a product, holding a cup, adjusting an item — adds a human element that makes flat lays feel less sterile. Keep it to a single hand at the edge of the frame, not centered. It's a supporting actor, not the star.",
      },
    ],
    relatedShotTypes: ["lifestyle", "detail-close-ups", "packaging"],
    relatedUseCases: ["skincare", "jewelry", "candles"],
  },
  {
    slug: "model-shots",
    title: "Model Photography",
    metaTitle: "Model Photography with AI | Dezygn",
    metaDescription:
      "Generate product photos with AI models — worn, held, or styled on diverse virtual models. No casting calls, no bookings, no day rates.",
    heroHeadline: "Every Product Looks Better on Someone. Now You Don't Need to Book Them.",
    definition:
      "Model photography shows your product being worn, held, or used by a person. It's how fashion, beauty, accessories, and lifestyle brands help customers visualize themselves with the product. In e-commerce, model shots reduce return rates by showing fit, scale, and use — and they drive higher conversion than product-only images because they trigger the brain's mirror neurons: 'That could be me.'",
    whenToUse: [
      "When selling apparel, accessories, or wearable products where fit, drape, and scale on a human body directly impacts the buying decision",
      "When your product needs to show a use case — headphones being worn, a bag slung over a shoulder, sunscreen applied to skin — to communicate its function",
      "When you want to represent diverse body types, skin tones, and ages in your marketing without the cost of booking multiple models for every shoot",
      "When running social ads where images with people consistently outperform product-only images in click-through rate and engagement",
    ],
    howDezygn:
      "Traditional model photography is expensive: casting, booking, day rates, wardrobe, makeup, location, photographer. For a small e-commerce brand, a single model shoot can cost $2,000-$10,000. Dezygn eliminates all of that by generating photorealistic AI models that interact naturally with your product.\n\nAwa, our AI creative director, handles the hardest part of model photography — making the interaction between model and product look natural. Hands grip products with the right pressure. Fabric drapes correctly on different body types. Facial expressions match the brand mood. You describe the model (age range, body type, skin tone, style) and the pose, and Awa generates a composition where the product-model interaction looks authentic, not pasted-on.\n\nDezygn lets you generate the same product on multiple models in minutes. Show your sunglasses on six different face shapes. Put your jacket on three different body types. Display your jewelry across diverse skin tones. This kind of inclusive representation used to require a full day of shooting with multiple models — now it's a batch generation that costs a handful of credits.",
    tips: [
      {
        title: "Describe the model's energy, not just their appearance",
        description:
          "Instead of just specifying demographics, describe the vibe: 'confident, relaxed posture, slight smile, looking off-camera' gives Awa more to work with than '25-year-old woman.' The model's energy should match your brand personality — playful, authoritative, serene, bold.",
      },
      {
        title: "Keep the product as the hero, not the model",
        description:
          "In e-commerce model photography, the product is the star and the model is the supporting cast. Frame the shot so the product occupies the visual center of gravity. Crop tight enough that the product is prominent but loose enough to show it in context on the body.",
      },
      {
        title: "Match lighting on model and product",
        description:
          "The fastest way to spot a bad composite is when the light direction on the model doesn't match the light direction on the product. In Dezygn, specify a single, consistent light source direction for the entire scene. 'Key light from upper left' applies to everything in the frame.",
      },
      {
        title: "Use model shots and studio shots as a pair",
        description:
          "The most effective product pages use both: a clean studio shot for the primary image (what the product looks like) paired with model shots in the gallery (what the product looks like on you). Generate both in the same session so the product rendering stays consistent.",
      },
    ],
    relatedShotTypes: ["lifestyle", "ugc", "hero-shots"],
    relatedUseCases: ["fashion-accessories", "fitness", "beauty"],
  },
  {
    slug: "ugc",
    title: "UGC-Style Photography",
    metaTitle: "UGC-Style Photography with AI | Dezygn",
    metaDescription:
      "Create authentic, user-generated content style product photos with AI. Casual compositions, natural lighting, phone-camera aesthetic. Scroll-stopping UGC at scale.",
    heroHeadline:
      "The 'Real Person' Look. Generated in Seconds. No Influencers Required.",
    definition:
      "UGC-style photography mimics the casual, authentic aesthetic of photos taken by real customers — slightly imperfect composition, natural ambient lighting, a phone-camera look and feel. It's the antithesis of polished studio photography, and that's exactly why it converts. On platforms like TikTok, Instagram Stories, and Meta ads, UGC-style imagery outperforms professional photography because it feels trustworthy, relatable, and native to the feed.",
    whenToUse: [
      "When running paid social ads on Meta or TikTok where native-looking content outperforms polished creative by 2-4x in click-through rate",
      "When you need social proof imagery for your product pages but don't have enough real customer photos to work with yet",
      "When building TikTok Shop or Instagram Shopping content where overly-produced imagery actually hurts performance because it looks like an ad",
      "When launching a new product and need day-one social content that looks like real customers already love it",
    ],
    howDezygn:
      "UGC-style is surprisingly difficult to create intentionally because it requires imperfection — and most AI tools default to perfection. Dezygn specifically trains Awa to understand the UGC aesthetic: slightly warm white balance, a touch of grain, casual composition that's slightly off-center, natural window light instead of studio strobes.\n\nThe Visual Syntax framework includes UGC-specific parameters. Set the 'camera type' to smartphone, and the output mimics the depth of field, lens distortion, and dynamic range of a phone camera. Add descriptors like 'bathroom mirror selfie with product,' 'kitchen table overhead shot,' or 'car dashboard POV' — these are the real contexts where UGC lives, and Awa knows how to recreate them convincingly.\n\nThe real power here is scale. A single influencer might deliver 3-5 UGC images for $500-$2,000. With Dezygn, you can generate 50 UGC-style variations in an afternoon — different settings, different hands, different lighting conditions — and A/B test them in your ad campaigns to find the winners. At $99/month with 2,500 credits, the cost per image is cents, not dollars.",
    tips: [
      {
        title: "Imperfection is the whole point",
        description:
          "Don't over-prompt UGC shots. Resist the urge to specify perfect lighting or precise composition. The magic of UGC is that it looks unplanned. 'Product on a messy desk, afternoon light from a window, phone camera perspective' works better than a highly detailed composition brief.",
      },
      {
        title: "Include environmental context clues",
        description:
          "Real UGC happens in real spaces: a gym locker room, a bathroom counter with other products visible, a kitchen with dishes in the background. These contextual details signal authenticity. A product floating in a perfectly clean space doesn't read as UGC no matter how casual the lighting is.",
      },
      {
        title: "Shoot for vertical (9:16) first",
        description:
          "UGC lives on Stories, Reels, and TikTok — all vertical formats. Generate your UGC-style shots at 9:16 (1080x1920) as the primary format. You can always crop to square for feed posts, but you can't convincingly extend a square image to vertical.",
      },
      {
        title: "Vary the scenarios for ad testing",
        description:
          "Generate the same product in 10 different UGC scenarios: hand-held in a car, on a nightstand, in a gym bag, on a bathroom shelf. Run each as a separate ad creative. You'll be surprised which scenario resonates — it's rarely the one you'd guess. This kind of creative volume is only possible with AI generation.",
      },
      {
        title: "Add subtle motion cues",
        description:
          "Real phone photos often have slight motion artifacts — a hand that's not perfectly still, a slight directional blur. While you can't add actual motion to a still image, you can prompt for compositions that imply movement: 'hand reaching for the product,' 'product being pulled out of a bag,' 'mid-application on skin.' These action-oriented compositions feel more candid than static poses.",
      },
    ],
    relatedShotTypes: ["lifestyle", "model-shots", "before-after"],
    relatedUseCases: ["skincare", "supplements", "food-beverage"],
  },
  {
    slug: "before-after",
    title: "Before & After Photography",
    metaTitle: "Before & After Photography with AI | Dezygn",
    metaDescription:
      "Create compelling before and after product images with AI. Show transformations, results, and impact — perfect for skincare, cleaning, fitness, and home products.",
    heroHeadline:
      "Show the Transformation. Let the Results Do the Selling.",
    definition:
      "Before-and-after photography is the most persuasive format in e-commerce — it visually demonstrates the value of your product by showing a clear transformation. Whether it's a skincare product clearing skin, a cleaning product restoring a surface, or a supplement changing body composition, these side-by-side (or stacked) images let results speak louder than any copywriter ever could. Done right, they're the closest thing to a product demo in a static image.",
    whenToUse: [
      "When your product delivers a visible, tangible result — clearer skin, whiter teeth, restored surfaces, organized spaces — and you need to show that transformation visually",
      "When building product pages for results-driven categories like skincare, supplements, cleaning products, or home improvement where 'does it actually work?' is the primary purchase objection",
      "When creating testimonial-style content for social ads that pairs a transformation image with a customer quote or review text overlay",
      "When competing in a crowded market and need to differentiate by showing proof of efficacy rather than just listing ingredients or features",
    ],
    howDezygn:
      "Before-and-after shots require careful consistency between the two frames — same angle, same lighting, same framing — with only the 'transformation' changing. This is where most brands fail: the before and after look like they were taken in completely different conditions, which undermines credibility. Dezygn locks the camera position, lighting setup, and background across both frames so the only variable is the result.\n\nAwa understands the visual language of transformation across categories. For skincare, it's about skin texture and tone changes under consistent lighting. For cleaning products, it's surface restoration with the same camera angle. For fitness supplements, it's body composition shifts with matched poses. You describe the before state and the after state, and Awa generates a matched pair that looks like a genuine documentation of results.\n\nThe Visual Syntax framework includes a 'consistency lock' parameter for before-and-after work. Set your environment once — lighting direction, background, camera distance, color temperature — and it persists across both generations. You can also generate the transition in a single frame (split-screen or gradient reveal) for social media formats where a single image performs better than a carousel.",
    tips: [
      {
        title: "Consistency is credibility",
        description:
          "The number one rule of before-and-after photography: every variable except the result must stay identical. Same lighting, same angle, same distance, same background. The moment anything else changes between frames, viewers assume the 'improvement' is just better photography, not a better product.",
      },
      {
        title: "Use the split-screen format for social",
        description:
          "On Instagram and Facebook, a single split-screen image (left/right or top/bottom with a clear dividing line) performs better than a two-image carousel for before-and-after content. People process the comparison instantly without swiping. Generate these as single frames at 1:1 for feed or 9:16 for Stories.",
      },
      {
        title: "Subtle results are more believable",
        description:
          "An overly dramatic transformation looks fake and can trigger ad platform policy issues. Slightly understated results — a noticeable but realistic improvement — are more credible and more compliant. This is especially critical for skincare, health, and beauty categories where platforms actively flag exaggerated claims.",
      },
      {
        title: "Label clearly but don't overdesign",
        description:
          "Simple 'Before' and 'After' labels in clean, small text are all you need. Don't add arrows, circles, starbursts, or heavy graphics — they make the image look like a late-night infomercial. Let the visual transformation speak for itself. If you need to draw attention to a specific area, a subtle transparent highlight is enough.",
      },
    ],
    relatedShotTypes: ["ugc", "model-shots", "detail-close-ups"],
    relatedUseCases: ["skincare", "supplements", "fitness"],
  },
  {
    slug: "scale-shots",
    title: "Scale Shot Photography",
    metaTitle: "Scale Shot Photography with AI | Dezygn",
    metaDescription:
      "Generate product scale reference photos with AI. Show exact product size with hands, coins, and everyday objects. Reduce returns caused by size surprises.",
    heroHeadline:
      "Show Them Exactly How Big It Is. Kill the #1 Reason for Returns.",
    definition:
      "Scale photography places your product alongside familiar reference objects — a human hand, a coin, a smartphone, a standard mug — so customers can instantly understand its real-world size. Size misperception is the leading cause of e-commerce returns: 'I didn't realize it was that small' or 'this is way bigger than I expected.' A single well-executed scale shot can cut size-related returns by 20-30% and save you thousands in reverse logistics.",
    whenToUse: [
      "When selling products where size isn't immediately obvious from photos alone — jewelry, supplements, small electronics, miniature items, or oversized home goods",
      "When your return data shows that 'not as expected' or 'wrong size' is a top return reason, indicating customers can't gauge dimensions from your current imagery",
      "When listing products on marketplaces where you can't add interactive 3D models or AR try-on, and static images are your only tool for communicating scale",
      "When selling internationally where measurement systems differ and a visual reference communicates size faster than listing centimeters or inches",
    ],
    howDezygn:
      "Scale shots seem simple but they're surprisingly tricky to execute well. The reference object needs to be universally recognizable, properly proportioned relative to your product, and styled so it doesn't distract from the product itself. Dezygn handles all three challenges through Awa's understanding of spatial relationships and common reference objects.\n\nThe Visual Syntax framework lets you specify the scale reference type: 'held in hand,' 'next to a standard coffee mug,' 'beside a smartphone,' or 'on a ruler/measuring tape.' Awa ensures the proportions are accurate — a product described as 3 inches tall will look 3 inches tall next to a hand, not arbitrarily sized. This dimensional accuracy is critical because an inaccurate scale shot is worse than no scale shot at all.\n\nFor product lines with multiple sizes (S/M/L, different capacities, kit vs. individual), Dezygn can generate a single frame showing all size variants lined up with a consistent reference object. This comparison format is incredibly effective for upselling — customers see the larger size and think 'I might as well go bigger.' It's a conversion optimization trick that most brands miss.",
    tips: [
      {
        title: "The human hand is the universal reference",
        description:
          "Nothing communicates scale faster than a hand holding or touching the product. Everyone knows how big a hand is. Specify 'product held in an adult hand, fingers visible for scale' for the most intuitive size reference possible. For small items like jewelry or supplements, show the product pinched between two fingers.",
      },
      {
        title: "Use common objects, not obscure ones",
        description:
          "A coin, a credit card, a smartphone, a standard pencil — these are objects with universally understood dimensions. Don't use a reference object that varies in size (like 'a book' or 'a bowl') or that your audience might not be familiar with. When in doubt, a hand is always the safest reference.",
      },
      {
        title: "Product stays the hero even in scale shots",
        description:
          "The reference object should be visually secondary — slightly out of focus, partially visible, or in a neutral color that doesn't compete with the product. A bright red coffee mug next to your minimalist white speaker draws the eye to the wrong object. Keep reference items neutral and understated.",
      },
      {
        title: "Show the product in its intended space",
        description:
          "Instead of abstract scale references, show the product where it'll actually live: the supplement bottle on a kitchen shelf between other bottles, the wireless earbud case in a jeans pocket, the wall art above a standard sofa. Contextual scale is more intuitive than measurement-based scale because customers are imagining the product in their own space.",
      },
    ],
    relatedShotTypes: ["studio", "detail-close-ups", "packaging"],
    relatedUseCases: ["jewelry", "electronics", "supplements"],
  },
  {
    slug: "packaging",
    title: "Packaging Photography",
    metaTitle: "Packaging Photography with AI | Dezygn",
    metaDescription:
      "Create professional packaging and unboxing product photos with AI. Showcase boxes, labels, and the full unboxing experience without a single prototype.",
    heroHeadline:
      "The Box Is Part of the Product. Make It Look Like It.",
    definition:
      "Packaging photography showcases the product's box, label, wrapping, or container as a selling point in its own right. In an era where unboxing videos generate billions of views, how a product arrives matters almost as much as the product itself. Packaging shots cover everything from the outer shipping box to the inner tissue paper to the label design — every touchpoint of the physical experience that customers encounter before they ever use what's inside.",
    whenToUse: [
      "When your packaging design is a competitive advantage — premium boxes, custom tissue paper, embossed labels — and you want to showcase the full unboxing experience",
      "When selling gift-ready products where the packaging is a key part of the purchase decision and customers need to see that it arrives presentation-ready",
      "When launching a rebrand or new packaging design and need marketing assets before the physical packaging is manufactured",
      "When creating Amazon A+ Content or Shopify product pages where showing the packaging builds trust by proving the customer receives a complete, professional product",
    ],
    howDezygn:
      "Packaging photography is a unique challenge because it involves complex surfaces — reflective foils, matte laminates, embossed textures, transparent windows — that each interact with light differently. Awa understands these material properties and adjusts the virtual lighting to make each surface look its best. Foil stamping catches the light with a realistic gleam. Matte boxes show subtle shadow gradations. Clear windows reveal the product inside.\n\nThe Visual Syntax framework supports multi-stage packaging compositions. Generate the closed box first, then the lid-off reveal, then the product nestled in its insert — creating a visual unboxing sequence from a single prompt session. Each frame maintains consistent lighting and perspective so the sequence feels cohesive, like frames from an unboxing video frozen in time.\n\nOne of Dezygn's most powerful use cases for packaging is pre-production visualization. If you're designing new packaging, you can generate photorealistic mockups before spending money on printing and manufacturing. Test how different box colors look in a lifestyle setting. See how your label reads on a shelf. Validate the design with your audience before committing to a production run. This alone can save thousands in wasted prototyping costs.",
    tips: [
      {
        title: "Show the full unboxing narrative",
        description:
          "Don't just show the closed box. Create a 3-5 image sequence: sealed package, box opening, tissue/filler reveal, product in insert, product removed with packaging behind it. This narrative arc builds anticipation and justifies premium pricing — customers see the care and thought in every layer.",
      },
      {
        title: "Light packaging from above and slightly behind",
        description:
          "Packaging surfaces are tricky — direct front lighting creates harsh reflections on glossy finishes and washes out matte textures. Light from a 45-degree angle above and behind the package creates dimension, shows embossing and texture, and avoids blown-out reflections on foil or laminate surfaces.",
      },
      {
        title: "Include the label details",
        description:
          "If your product has important label information — ingredients, certifications, usage instructions — generate a dedicated shot where this text is legible. Customers buying supplements, skincare, and food products actively look for label shots. A close-up of the back label at a slight angle (not perfectly flat) looks natural and readable.",
      },
      {
        title: "Context sells the packaging story",
        description:
          "A beautifully wrapped product box on a gift-wrapping surface with ribbon and scissors nearby tells customers 'this is gift-ready.' The same box on a doorstep tells them 'this is what arrives.' Choose the context based on what you're trying to communicate — gift potential, premium unboxing, shelf presence, or doorstep first impression.",
      },
    ],
    relatedShotTypes: ["detail-close-ups", "flat-lay", "hero-shots"],
    relatedUseCases: ["candles", "beauty", "food-beverage"],
  },
  {
    slug: "detail-close-ups",
    title: "Detail & Close-Up Photography",
    metaTitle: "Detail & Close-Up Photography with AI | Dezygn",
    metaDescription:
      "Generate high-resolution close-up product photos with AI. Show textures, stitching, ingredients, and fine details that build buyer confidence.",
    heroHeadline:
      "Zoom In. Show the Quality. Let the Details Close the Sale.",
    definition:
      "Detail and close-up photography captures the textures, materials, craftsmanship, and fine features of a product that aren't visible in standard product shots. The grain of the leather, the precision of the stitching, the shimmer in a skincare formula, the weave of a fabric — these macro-level details are what separate a $20 product from a $200 product in the customer's mind. When shoppers can't touch and feel your product, close-up shots become a proxy for the in-store tactile experience.",
    whenToUse: [
      "When selling products where material quality is a key differentiator — leather goods, textiles, jewelry, handmade items — and customers need to see the craftsmanship to justify the price",
      "When your product has unique features, textures, or functional details (zipper pulls, clasp mechanisms, ingredient particles) that don't show up in full-product shots",
      "When competing against cheaper alternatives and need to visually communicate superior build quality, finer materials, or more precise manufacturing",
      "When creating product pages for high-consideration purchases where customers zoom in on images before buying — furniture, electronics, premium accessories",
    ],
    howDezygn:
      "Detail photography requires extreme precision in focus, lighting, and rendering — and this is where AI generation has made remarkable strides. Awa renders surface textures with photorealistic accuracy: the way light catches individual leather grain, the tiny air bubbles in a glass bottle, the metallic flake in a nail polish. You describe the detail you want to highlight, and Awa generates a macro-style close-up with the right depth of field and lighting to make that detail sing.\n\nThe Visual Syntax framework includes material-specific rendering parameters. Specify the material type — brushed metal, woven fabric, matte ceramic, polished wood — and Awa adjusts the micro-texture rendering, specular highlights, and subsurface scattering to match. This material awareness is what makes Dezygn's close-ups look like they were shot with a $3,000 macro lens rather than generated by AI.\n\nFor brands that import their product specifications into Dezygn, the AI can emphasize the details that matter most for that category. Supplement brands get capsule transparency and powder texture. Fashion brands get stitching precision and fabric weave. Jewelry brands get stone clarity and metal finish. The close-ups aren't generic — they're category-intelligent, highlighting the details that your specific customers care about.",
    tips: [
      {
        title: "Use extreme shallow depth of field",
        description:
          "Close-up shots should have a razor-thin plane of focus — the texture or detail you're highlighting is sharp, and everything else falls off into a smooth blur. Specify 'macro lens, very shallow depth of field, f/2.8 or wider equivalent' in your prompt. This focuses the viewer's eye exactly where you want it.",
      },
      {
        title: "Side lighting reveals texture best",
        description:
          "Light coming from directly in front of a surface flattens texture. Light raking across a surface from the side — at a 75-90 degree angle — creates shadows in every groove, stitch, and grain line, making the texture three-dimensional and tactile. For fabric, leather, wood, and any textured surface, side light is non-negotiable.",
      },
      {
        title: "Show the detail customers will zoom into anyway",
        description:
          "Look at your product reviews and customer questions. What do people ask about? The stitching quality? The clasp mechanism? The ingredient texture? Those are the details that deserve their own dedicated close-up shot. Don't guess — let your customer data tell you which details to highlight.",
      },
      {
        title: "Pair close-ups with full-product shots",
        description:
          "A close-up of beautiful stitching means nothing if the customer can't see where that stitching lives on the overall product. Use a visual callout strategy: full product shot with a subtle circle or line indicating the area, followed by the close-up of that area. Dezygn can generate both in the same session with matched lighting.",
      },
      {
        title: "Include a sense of scale in macro shots",
        description:
          "When you zoom in very close, viewers can lose sense of how big the detail actually is. Include a partial fingertip, a thread, or another micro-scale reference to ground the close-up in reality. A watch crown next to a fingertip tells you more about size than the crown alone ever could.",
      },
    ],
    relatedShotTypes: ["studio", "scale-shots", "hero-shots"],
    relatedUseCases: ["jewelry", "fashion-accessories", "outdoor-gear"],
  },
];
