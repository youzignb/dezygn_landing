export interface Industry {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  image: string;
  imageAlt: string;
  intro: string;
  painPoints: { title: string; description: string }[];
  howDezygn: { title: string; description: string }[];
  results: { value: string; label: string }[];
  relatedIndustries: string[];
  relatedUseCases: string[];
}

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    title: "E-Commerce Brands",
    metaTitle: "AI Product Photography for E-Commerce Brands | Dezygn",
    metaDescription:
      "Generate studio-quality product photos for your e-commerce store in minutes. 2,500 credits/month for ~500 images. No studio, no photographer, no delays.",
    heroHeadline:
      "Studio-Quality Product Photos for Every SKU, Every Season, Every Channel",
    image: "/images/seo/industries/ecommerce.webp",
    imageAlt: "AI product photography for e-commerce brands showing catalog imagery at scale",
    intro: `E-commerce brands live and die by their product imagery. Studies consistently show that 75% of online shoppers rely on product photos when making purchase decisions, and listings with high-quality lifestyle imagery see conversion rates 2-3x higher than those with basic white-background shots alone. Yet most e-commerce brands are trapped in an expensive cycle of booking studios, hiring photographers, coordinating samples, and waiting weeks for edited deliverables.

The challenge compounds as your catalog grows. A brand with 200 SKUs needs thousands of images across product pages, collection banners, social ads, email campaigns, and seasonal promotions. Each channel has its own aspect ratios, styling expectations, and creative requirements. Refreshing imagery for a spring campaign or a Black Friday sale means repeating the entire production pipeline from scratch.

Dezygn eliminates this bottleneck entirely. With AI-powered product photography and the Visual Syntax framework, you can generate consistent, on-brand imagery across your entire catalog in hours instead of weeks. Upload your product shots, set your brand guidelines once, and let Awa, your AI creative director, produce studio-quality lifestyle scenes, flat lays, and detail shots that convert.`,
    painPoints: [
      {
        title: "Scaling imagery across hundreds of SKUs",
        description:
          "Every new product needs 6-8 images minimum for a high-converting listing. With a catalog of 200+ SKUs, that is 1,200-1,600 images to produce, edit, and maintain. Traditional photography makes this a months-long, five-figure project.",
      },
      {
        title: "Inconsistent visual identity across product lines",
        description:
          "When you shoot products across multiple sessions, studios, or photographers, your catalog ends up looking like a patchwork. Different lighting temperatures, background textures, and styling choices erode brand trust and make your store look unprofessional.",
      },
      {
        title: "Seasonal and campaign refreshes drain budgets",
        description:
          "Refreshing hero banners, collection pages, and ad creatives for each season or promotion means re-shooting or re-editing existing products. Most brands skip this entirely because the cost of a new shoot for existing SKUs is hard to justify, leaving stale imagery on their storefront.",
      },
      {
        title: "No reliable way to A/B test product imagery",
        description:
          "You suspect that a lifestyle scene would outperform your current white-background hero image, but producing a variant just for testing costs $500-$1,000 per product. The result: most brands never test their most impactful conversion lever.",
      },
      {
        title: "Long turnaround kills product launch momentum",
        description:
          "From sample coordination to final edited deliverables, traditional product photography takes 2-4 weeks. By the time images arrive, the launch window has narrowed, pre-orders have stalled, and competitors have moved first.",
      },
    ],
    howDezygn: [
      {
        title: "Batch-generate imagery for your entire catalog",
        description:
          "Upload product photos in bulk, apply your brand's Visual Syntax settings once, and generate 6-8 variations per SKU in minutes. With 2,500 credits per month, you can produce approximately 500 finished images, enough to cover a full catalog refresh every month.",
      },
      {
        title: "Lock in brand consistency with Visual Syntax",
        description:
          "Define your lighting style, color palette, background preferences, and prop styling once in Dezygn's Visual Syntax framework. Every image generated from that point forward follows the same visual rules, whether it is your first SKU or your five-hundredth.",
      },
      {
        title: "Generate seasonal variants without re-shooting",
        description:
          "Place the same product in a cozy autumn scene, a bright summer patio, or a minimal holiday setting with a single prompt change. Seasonal refreshes that used to cost thousands now take an afternoon.",
      },
      {
        title: "Create unlimited A/B test variants at zero marginal cost",
        description:
          "Generate five different lifestyle contexts for the same product and test them head-to-head. Awa, your AI creative director, can suggest scene variations based on what performs well in your vertical, removing the guesswork from conversion optimization.",
      },
      {
        title: "Same-day turnaround from upload to storefront",
        description:
          "Upload a product image in the morning and have polished, storefront-ready assets by the afternoon. No studio booking, no sample shipping, no retouching queue. Launch products the day you are ready.",
      },
    ],
    results: [
      { value: "87%", label: "Reduction in average image production cost per SKU" },
      { value: "4 hrs", label: "Average time from upload to storefront-ready assets" },
      { value: "500+", label: "Product images generated per month on a single plan" },
      { value: "2.4x", label: "Average conversion lift with lifestyle imagery vs. white background" },
    ],
    relatedIndustries: ["shopify-stores", "amazon-sellers"],
    relatedUseCases: ["skincare", "supplements", "fashion-accessories"],
  },
  {
    slug: "amazon-sellers",
    title: "Amazon Sellers",
    metaTitle: "AI Product Photography for Amazon Sellers | Dezygn",
    metaDescription:
      "Create Amazon-compliant product photos, infographics, and A+ Content images with AI. Meet every listing requirement and consistently win the buy box.",
    heroHeadline:
      "Amazon-Ready Product Images That Meet Every Requirement and Win the Buy Box",
    image: "/images/seo/industries/amazon-sellers.webp",
    imageAlt: "AI product photography optimized for Amazon marketplace listing requirements",
    intro: `Selling on Amazon means operating inside one of the most visually competitive marketplaces on earth. Your main image must meet strict technical requirements: pure white background (RGB 255,255,255), the product filling at least 85% of the frame, minimum 1000x1000 pixel resolution, and no text overlays, watermarks, or additional props. Get any of these wrong and your listing gets suppressed, costing you visibility and sales every day it stays down.

But compliance is just the floor. To actually win clicks and conversions, you need a full image stack: a compliant hero image, 2-3 lifestyle images showing the product in use, 1-2 infographic images highlighting key features and dimensions, and A+ Content modules with comparison charts and brand story visuals. Top sellers on Amazon invest $2,000-$5,000 per ASIN in professional photography and graphic design to build these image stacks, and they repeat the process for every product variation and seasonal update.

Dezygn gives Amazon sellers the ability to produce this entire image stack from a single product photo. Generate compliant white-background heroes, contextual lifestyle scenes, and infographic-ready compositions without a studio. Awa understands Amazon's image requirements and can guide you through building a listing that matches what top-performing ASINs look like in your category.`,
    painPoints: [
      {
        title: "Amazon's strict main image requirements",
        description:
          "Amazon mandates a pure white background (RGB 255,255,255), product filling 85% of the frame, minimum 1000x1000px resolution, no text or graphics, and specific file format constraints. A single non-compliant image triggers listing suppression, halting sales entirely.",
      },
      {
        title: "Building a full image stack per ASIN is expensive",
        description:
          "A competitive Amazon listing needs 7-9 images: compliant hero, lifestyle shots, infographics with callouts, size/comparison charts, and packaging images. Professional production runs $300-$800 per ASIN, and sellers with 50+ ASINs face $15,000-$40,000 in photography costs alone.",
      },
      {
        title: "A+ Content demands ongoing visual investment",
        description:
          "Brand-registered sellers need A+ Content (Enhanced Brand Content) with comparison modules, brand story banners, and rich image grids. Creating these assets requires graphic design skills or an agency, adding $200-$500 per ASIN on top of standard photography costs.",
      },
      {
        title: "Competing listings constantly raise the visual bar",
        description:
          "Top sellers in every category continuously refresh their imagery with professional lifestyle shots, 3D renders, and video. If your listing looks dated compared to competitors, your click-through rate drops and Amazon's algorithm pushes you further down in search results.",
      },
      {
        title: "Product variations multiply image requirements",
        description:
          "A single product in 5 colors and 3 sizes creates 15 child ASINs, each needing its own compliant hero and supporting images. Most sellers either reuse the same images across variations, hurting conversion, or spend weeks producing unique shots for each.",
      },
    ],
    howDezygn: [
      {
        title: "Auto-generate Amazon-compliant hero images",
        description:
          "Upload any product photo and Dezygn produces a clean, pure-white-background image that meets Amazon's 85% fill rate, resolution, and format requirements. No Photoshop clipping paths, no manual background removal, no compliance rejections.",
      },
      {
        title: "Build complete image stacks from one source photo",
        description:
          "From a single product image, generate lifestyle scenes, in-use contexts, flat lays, and detail crops. Fill all 7-9 image slots with unique, high-quality visuals that tell a complete product story and match what top-performing listings look like.",
      },
      {
        title: "Create A+ Content visuals without a designer",
        description:
          "Generate comparison charts, feature highlight images, and brand story banners optimized for Amazon's A+ Content modules. Awa provides layout suggestions based on high-converting A+ Content patterns in your product category.",
      },
      {
        title: "Produce unique imagery for every product variation",
        description:
          "Generate color-accurate images for each product variant automatically. Show the blue version in a blue-themed lifestyle scene and the red version in a complementary setting, giving every child ASIN its own visual identity without multiplying your production costs.",
      },
    ],
    results: [
      { value: "100%", label: "Amazon main image compliance rate" },
      { value: "$14", label: "Average cost per complete 7-image listing stack" },
      { value: "34%", label: "Average click-through rate improvement with lifestyle images" },
    ],
    relatedIndustries: ["ecommerce", "dropshipping"],
    relatedUseCases: ["supplements", "pet-products", "electronics"],
  },
  {
    slug: "shopify-stores",
    title: "Shopify Stores",
    metaTitle: "AI Product Photography for Shopify Stores | Dezygn",
    metaDescription:
      "Generate on-brand product photos optimized for Shopify themes, collection pages, and mobile shopping. Lifestyle imagery that converts browsers to buyers.",
    heroHeadline:
      "Product Photography That Makes Your Shopify Store Look Like a Premium Brand",
    image: "/images/seo/industries/shopify-stores.webp",
    imageAlt: "AI-generated product photography tailored for Shopify store themes and layouts",
    intro: `Shopify powers over 4 million online stores, and the platform's visual-first design philosophy means your product photography is your storefront. Unlike marketplaces where listings follow a rigid template, Shopify gives you complete creative control. Your homepage hero banner, collection page grids, product detail pages, and announcement bars all depend on cohesive, high-quality imagery that tells your brand story.

This creative freedom is also a challenge. Popular Shopify themes like Dawn, Prestige, and Impact are designed around specific image aspect ratios and layout patterns. A product photo that looks great on a product detail page may get awkwardly cropped on a collection grid or look washed out on a mobile screen. Brands need multiple versions of every product image: square crops for grids, wide banners for collections, vertical orientations for mobile product pages, and lifestyle scenes for homepage storytelling sections.

Dezygn handles the complexity of Shopify-specific image production. Import your brand guidelines, define your visual language through the Visual Syntax framework, and generate assets that are pre-optimized for your specific Shopify theme's layout requirements. From hero banners to product page galleries, every image is consistent, on-brand, and sized correctly for both desktop and mobile experiences.`,
    painPoints: [
      {
        title: "Theme-specific image requirements vary wildly",
        description:
          "Each Shopify theme has different ideal aspect ratios: Dawn expects 1:1 product images but 16:9 hero banners, while Prestige uses 2:3 product grids and full-width lifestyle sections. Using wrong ratios causes awkward cropping, white bars, or blown-up pixelation.",
      },
      {
        title: "Collection and homepage imagery needs constant updating",
        description:
          "Your homepage hero, featured collection banners, and announcement bar visuals need regular refreshing to keep your store feeling alive. Most Shopify merchants launch with strong imagery and then let it stagnate because reshooting is too expensive for maintenance updates.",
      },
      {
        title: "Product variants need individual lifestyle coverage",
        description:
          "A t-shirt in 8 colors or a candle in 4 scents each needs its own styled imagery to help customers visualize their choice. Shopify's variant system supports unique images per option, but most stores reuse the same shots with color swatches, reducing buyer confidence.",
      },
      {
        title: "Mobile experience demands different image compositions",
        description:
          "Over 70% of Shopify traffic is mobile, but most product photos are composed for desktop viewing. Products centered in wide landscape shots get lost on phone screens. Mobile-optimized imagery needs tighter cropping, vertical orientation, and bolder visual impact.",
      },
      {
        title: "DIY photography looks amateur against DTC competitors",
        description:
          "Shopify's ecosystem includes polished DTC brands with $50,000 photography budgets. When your phone-shot product images sit next to these competitors in Google Shopping or Instagram ads, the quality gap costs you clicks before shoppers even visit your store.",
      },
    ],
    howDezygn: [
      {
        title: "Generate theme-optimized images in every aspect ratio",
        description:
          "Tell Dezygn which Shopify theme you use, and it generates product images pre-sized for your theme's product grid, hero banner, collection header, and mobile product page layouts. No manual cropping or resizing required.",
      },
      {
        title: "Refresh homepage and collection visuals on demand",
        description:
          "Swap your homepage hero from a summer beach scene to a fall lifestyle setting in minutes. Generate new collection banners, promotional graphics, and announcement bar visuals whenever your marketing calendar demands it, without scheduling a single shoot.",
      },
      {
        title: "Create unique lifestyle imagery for every variant",
        description:
          "Generate variant-specific product photography automatically. The navy sweater appears in a moody, warm-toned interior while the white version sits in a bright, airy space. Each variant gets its own visual story that helps customers connect with their choice.",
      },
      {
        title: "Mobile-first compositions that convert on small screens",
        description:
          "Awa composes product scenes with mobile viewing in mind: tighter framing, vertical orientations, and high-contrast backgrounds that make products pop on 6-inch screens. Your Shopify store looks premium on the device where most of your customers are shopping.",
      },
      {
        title: "Import your brand kit for pixel-perfect consistency",
        description:
          "Upload your brand colors, typography references, and existing product photography. Dezygn's brand import feature analyzes your visual identity and ensures every generated image matches your established look, so new imagery blends seamlessly with existing assets.",
      },
    ],
    results: [
      { value: "3.1x", label: "Average increase in product page time-on-page with lifestyle imagery" },
      { value: "28%", label: "Conversion rate improvement on mobile product pages" },
      { value: "45 min", label: "Average time to generate a full homepage refresh" },
      { value: "$99", label: "Monthly cost vs. $3,000+ for a traditional product photo shoot" },
    ],
    relatedIndustries: ["ecommerce", "dropshipping"],
    relatedUseCases: ["candles", "jewelry", "home-decor"],
  },
  {
    slug: "dropshipping",
    title: "Dropshipping",
    metaTitle: "AI Product Photography for Dropshipping | Dezygn",
    metaDescription:
      "Transform low-quality supplier photos into premium lifestyle imagery. Test products faster with AI-generated product photography. No samples needed.",
    heroHeadline:
      "Turn Supplier Photos Into Premium Product Imagery Without Ever Touching the Product",
    image: "/images/seo/industries/dropshipping.webp",
    imageAlt: "AI product photography for dropshipping businesses creating unique brand imagery",
    intro: `Dropshipping is built on speed. You find a trending product, list it in your store, run ads, and validate demand before committing inventory. But there is a fundamental problem at the core of this model: you never physically handle the product. Your only visual assets are whatever the supplier provides, typically a handful of poorly lit photos shot on a cluttered factory floor with inconsistent color accuracy and Chinese text watermarks.

These supplier images are conversion killers. Shoppers have been trained by premium DTC brands to expect lifestyle photography, clean backgrounds, and aspirational contexts. When your product page features the same generic supplier shots that 50 other dropshippers are using, you have zero visual differentiation. Your ad creative looks identical to competitors, your landing page fails to build trust, and your return rates climb because customers receive products that look nothing like what they expected.

Dezygn solves the dropshipping photography problem at its root. Upload a supplier photo, even a rough one, and generate premium lifestyle scenes, clean white-background hero shots, and scroll-stopping ad creatives in minutes. Test 10 products in a single afternoon with professional-grade imagery, kill the losers fast, and double down on winners with expanded visual assets. No samples, no waiting, no minimum order quantities.`,
    painPoints: [
      {
        title: "Supplier photos are unusable for a premium storefront",
        description:
          "AliExpress and 1688 supplier images are shot under fluorescent lighting on cluttered backgrounds, often with visible watermarks, inconsistent color temperatures, and Chinese-language packaging. Using these images directly signals low quality and erodes shopper trust instantly.",
      },
      {
        title: "No physical access to products for custom photography",
        description:
          "The entire dropshipping model depends on not holding inventory. Ordering samples for photography adds 2-4 weeks of lead time and $20-$50 per product in shipping costs, making it impractical to photograph the 20-30 products you need to test each month.",
      },
      {
        title: "Every competitor uses the same supplier images",
        description:
          "When 50 dropshippers sell the same product, they all use the same supplier photos. Shoppers see identical imagery across multiple stores and ads, making it impossible to differentiate your brand or justify a higher price point.",
      },
      {
        title: "Product testing speed is bottlenecked by creative assets",
        description:
          "A winning dropshipping product has a shelf life of weeks, not months. If it takes you 5 days to produce ad creatives and product page images for each test product, you can only test 4-6 products per month instead of the 20-30 needed to find consistent winners.",
      },
      {
        title: "High return rates from misleading or unclear product imagery",
        description:
          "When product images do not accurately represent size, color, or use context, return rates spike to 15-30%. Chargebacks and refunds eat into already thin dropshipping margins, and poor product representation drives negative reviews that tank future sales.",
      },
    ],
    howDezygn: [
      {
        title: "Transform any supplier photo into a premium product image",
        description:
          "Dezygn's AI extracts the product from even the lowest-quality supplier photo, corrects color accuracy, removes watermarks, and places it in a clean, professional context. A $3 AliExpress product looks like a $60 DTC brand offering.",
      },
      {
        title: "Skip the sample and shoot with AI instead",
        description:
          "Generate 8-10 product images from a single supplier photo without ever ordering a sample. Produce lifestyle scenes, white-background heroes, scale reference shots, and in-use contexts entirely through AI. Test the product visually before committing a single dollar to inventory.",
      },
      {
        title: "Create unique imagery that no competitor has",
        description:
          "While every other dropshipper uses the same supplier photos, your listings feature original lifestyle scenes and branded compositions that set your store apart. Visual differentiation lets you charge higher prices and build repeat customer trust.",
      },
      {
        title: "Test 20+ products per week with same-day creative",
        description:
          "Generate a complete product page image set and 3-4 ad creative variants in under 30 minutes per product. With 2,500 credits per month, you can produce imagery for 50+ test products while still having capacity for expanded assets on your winners.",
      },
      {
        title: "Show accurate product context to reduce returns",
        description:
          "Generate scale-reference images showing the product in a real-world setting: on a desk, in a hand, next to common objects. Customers understand exactly what they are buying, reducing returns driven by size or appearance mismatches.",
      },
    ],
    results: [
      { value: "30 min", label: "Average time from supplier photo to full product page imagery" },
      { value: "22%", label: "Reduction in return rates with contextual product imagery" },
      { value: "5x", label: "More products tested per month compared to sample-based photography" },
    ],
    relatedIndustries: ["amazon-sellers", "shopify-stores"],
    relatedUseCases: ["electronics", "fitness", "toys"],
  },
  {
    slug: "agencies",
    title: "Creative & E-Commerce Agencies",
    metaTitle: "AI Product Photography for Agencies | Dezygn",
    metaDescription:
      "Scale product photography output across client accounts. Maintain unique brand guidelines per client. White-label AI photography for agencies.",
    heroHeadline:
      "Deliver Premium Product Photography Across Every Client Account Without Scaling Your Team",
    image: "/images/seo/industries/agencies.webp",
    imageAlt: "AI product photography workflow for creative and e-commerce agencies managing client catalogs",
    intro: `Creative and e-commerce agencies are caught in a structural tension: clients expect faster turnaround, higher volume, and more creative variety, but hiring additional photographers, retouchers, and art directors does not scale linearly with revenue. A single product photography project for a mid-size e-commerce brand requires coordinating samples, booking studio time, managing a shoot day, and running 2-3 rounds of retouching. Multiply that by 8-12 active client accounts and your production team is permanently behind schedule.

The brand consistency challenge adds another layer of complexity. Each client has distinct brand guidelines: specific lighting moods, color palettes, prop styling preferences, and background treatments. A lifestyle shot that is perfect for your organic skincare client would be completely wrong for your premium electronics brand. Your team needs to context-switch between brand worlds multiple times per day, and mistakes are expensive both in reshoot costs and client trust.

Dezygn gives agencies a scalable production layer that sits beneath their creative strategy. Set up distinct Visual Syntax profiles for each client, import their brand guidelines, and generate on-brand product imagery at a volume that would require a team of 5-6 to match manually. Your strategists and account managers focus on the creative direction while Dezygn and Awa handle the production execution. Deliver work under your own brand with white-label output that clients never see behind the scenes.`,
    painPoints: [
      {
        title: "Production capacity cannot keep pace with client demand",
        description:
          "Each client account needs 50-200 product images per month across product pages, ads, email, and social. With 10 clients, that is 500-2,000 images monthly. Hiring photographers and retouchers to meet this volume requires $15,000-$30,000/month in payroll that erodes margins.",
      },
      {
        title: "Maintaining separate brand guidelines per client is error-prone",
        description:
          "Your team juggles 8-12 different brand style guides simultaneously. Using the wrong background tone for a client or applying another brand's color grading to a batch of images costs revision cycles and damages the client relationship.",
      },
      {
        title: "Client presentations require speculative creative work",
        description:
          "Pitching a new visual direction to a client means producing 5-10 sample images before you even know if the concept will be approved. Agencies absorb $1,000-$3,000 in speculative production costs per pitch, with no guarantee of a green light.",
      },
      {
        title: "Scaling to new clients requires hiring ahead of revenue",
        description:
          "Taking on a new account with heavy photography needs means hiring before the revenue is guaranteed. If the client churns in 3 months, you are stuck with excess production capacity and fixed costs that take months to unwind.",
      },
      {
        title: "Turnaround expectations are compressing every quarter",
        description:
          "Clients that accepted 2-week delivery timelines now expect 3-5 business days. Rush fees and overtime are cutting into project margins, and agencies that cannot meet these timelines lose accounts to faster competitors or in-house teams.",
      },
    ],
    howDezygn: [
      {
        title: "Create isolated Visual Syntax profiles per client",
        description:
          "Set up distinct brand profiles for each client account with their specific lighting preferences, color palettes, background styles, and prop guidelines. Switch between client worlds instantly and never accidentally cross-contaminate brand assets.",
      },
      {
        title: "Scale to 2,000+ images per month without hiring",
        description:
          "A single Dezygn plan produces approximately 500 images per month. Stack plans across client accounts or allocate credits flexibly to match each client's volume needs. Add a new client's production capacity in minutes, not months.",
      },
      {
        title: "Pitch new creative directions with instant mockups",
        description:
          "Generate 10-15 concept images for a client pitch in under an hour. Show the client exactly what a new visual direction looks like with their actual products instead of mood boards and verbal descriptions. Win more pitches with tangible creative proofs.",
      },
      {
        title: "White-label delivery with no Dezygn branding",
        description:
          "All generated images are clean, unbranded assets ready for delivery under your agency's name. No watermarks, no metadata traces, no platform branding. Your clients see premium photography from your agency, full stop.",
      },
      {
        title: "Same-day turnaround becomes your competitive advantage",
        description:
          "Deliver initial image drafts within hours of receiving product samples or photos. While competitors quote 2-week timelines, your agency promises next-day delivery on standard product photography, winning accounts on speed alone.",
      },
    ],
    results: [
      { value: "6x", label: "Increase in monthly image output per team member" },
      { value: "72%", label: "Reduction in speculative pitch production costs" },
      { value: "< 24 hrs", label: "Average turnaround from brief to first deliverables" },
      { value: "40%", label: "Improvement in project margins on photography-heavy accounts" },
    ],
    relatedIndustries: ["freelancers", "ecommerce"],
    relatedUseCases: ["beauty", "food-beverage", "outdoor-gear"],
  },
  {
    slug: "freelancers",
    title: "Freelance Photographers & Creatives",
    metaTitle: "AI Product Photography for Freelancers | Dezygn",
    metaDescription:
      "Expand your product photography services with AI. Deliver more concepts, faster revisions, and higher-volume output without booking extra studio time.",
    heroHeadline:
      "Deliver 10x the Creative Output Without 10x the Studio Hours",
    image: "/images/seo/industries/freelancers.webp",
    imageAlt: "AI-powered product photography tools for freelance photographers and creative professionals",
    intro: `Freelance product photographers face a ceiling that no amount of hustle can break through: there are only so many hours in a day to shoot, edit, and deliver. A typical freelance product photography workflow involves 2-4 hours of setup and shooting per product, followed by 1-2 hours of retouching per final image. At that rate, a single freelancer can realistically deliver 30-50 finished images per week while still handling client communication, invoicing, and business development.

The market is also shifting beneath freelancers' feet. E-commerce clients who used to budget $200-$500 per product for professional photography are now seeing AI-generated alternatives and asking why they should pay studio rates. Lowering prices to compete starts a race to the bottom. Refusing to adapt means losing clients to cheaper alternatives that are increasingly good enough for most use cases.

Dezygn is not a replacement for skilled freelancers, it is a force multiplier. Use AI-generated imagery to expand your service offering: deliver initial concepts in hours instead of days, offer unlimited revision rounds without eating into your margins, and take on higher-volume projects that were previously impossible for a solo operator. Position yourself as a creative director who leverages AI tools rather than a photographer competing on hourly rates. The freelancers who thrive will be those who integrate AI into their workflow and charge for creative judgment, not just shutter clicks.`,
    painPoints: [
      {
        title: "Income is capped by billable hours",
        description:
          "A freelancer charging $150/hour for shooting and $75/hour for retouching hits a hard ceiling around $8,000-$12,000/month. Taking on more work means longer hours, and there is no leverage: every dollar earned requires your direct time and attention.",
      },
      {
        title: "Clients expect faster turnaround at lower prices",
        description:
          "E-commerce clients increasingly compare freelance rates against AI tools and offshore retouching services charging $5-$15 per image. Freelancers who cannot demonstrate clear value above these alternatives face constant downward pricing pressure.",
      },
      {
        title: "Revisions and concept exploration eat unpaid hours",
        description:
          "A client asking to see the product in three different background settings means three separate setups or three rounds of compositing. Most freelancers include 1-2 revision rounds in their pricing but absorb 3-5 rounds in practice, destroying effective hourly rates.",
      },
      {
        title: "Building a diverse portfolio requires unpaid spec work",
        description:
          "Attracting clients in new verticals, like jewelry, food, or supplements, requires portfolio samples in those categories. Freelancers either shoot spec work for free or turn down inquiries outside their existing portfolio, limiting growth opportunities.",
      },
      {
        title: "Competing with full-service studios as a solo operator",
        description:
          "Studios offer end-to-end service: creative direction, multiple shooting styles, same-day editing, and project management. Freelancers competing for the same clients need to match this breadth of service while managing everything alone.",
      },
    ],
    howDezygn: [
      {
        title: "Decouple income from hours with AI-assisted delivery",
        description:
          "Use Dezygn to generate initial concepts, background variations, and mood explorations in minutes instead of hours. Bill clients for your creative direction and curation while AI handles the production volume. Serve 3x more clients without working 3x the hours.",
      },
      {
        title: "Offer unlimited concepts and revisions as a premium service",
        description:
          "Instead of charging per revision, offer clients a premium package with unlimited background and styling variations. Generate 10 options in the time it used to take to produce one. Clients get more choice, you maintain healthy margins, and revision cycles become a profit center.",
      },
      {
        title: "Expand your portfolio into new verticals instantly",
        description:
          "Use Dezygn to generate portfolio samples across product categories you have never shot before. Show prospective jewelry clients what their products would look like in your style without investing in spec shoots. Awa's creative direction helps you learn the visual conventions of unfamiliar verticals quickly.",
      },
      {
        title: "Compete with studios by offering full-service packages",
        description:
          "Bundle AI-generated product photography with your existing shooting skills to offer comprehensive packages: hero images from your studio, lifestyle variations from Dezygn, and social media crops optimized for every platform. Match studio-level output as a solo operator.",
      },
      {
        title: "Use the course and community to sharpen your edge",
        description:
          "Dezygn's bundled course and community connect you with other creatives using AI photography tools professionally. Learn prompting techniques, pricing strategies, and workflow optimizations from freelancers who have already integrated AI into profitable service offerings.",
      },
    ],
    results: [
      { value: "3.2x", label: "Average increase in monthly client capacity" },
      { value: "$0", label: "Marginal cost per additional concept or revision variant" },
      { value: "85%", label: "Reduction in time spent on background and scene variations" },
      { value: "2x", label: "Average increase in effective hourly rate within 90 days" },
    ],
    relatedIndustries: ["agencies", "ecommerce"],
    relatedUseCases: ["jewelry", "skincare", "baby-products"],
  },
];
