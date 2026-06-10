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
  secondaryCta?: { label: string; href: string };
  relatedIndustries: string[];
  relatedUseCases: string[];
}

export const industries: Industry[] = [
  // ──────────────────────────────────────────────
  // FREELANCERS (funnel page — previews Proof Before Pitch)
  // ──────────────────────────────────────────────
  {
    slug: "freelancers",
    title: "Freelancers",
    metaTitle: "AI Photography for Freelancers — Land Clients With Proof | Dezygn",
    metaDescription:
      "How freelancers use Dezygn to land e-commerce clients: send the finished work before the pitch. Real deals — $2k, $4.8k, and monthly retainers — from one mechanism.",
    heroHeadline: "While Other Freelancers Pitch, You Show Up With the Work Already Done",
    image: "/images/seo/industries/freelancers.webp",
    imageAlt: "Freelancer sending a custom AI-generated product visual to a prospective client",
    intro: `Freelancing's brutal math: on every job board, dozens of people beg for the same project with the same promises. 'I can improve your product imagery' is a claim every competitor also makes, and claims are free — which is why they're worth nothing. The freelancers who win don't make better claims. They skip the claim entirely.

The mechanism is called Proof Before Pitch, and it's how our own agency landed its first clients: instead of emailing a brand to ask for a meeting, you email them a finished deliverable — one custom, AI-generated lifestyle image of their own product, made in their own visual style, attached, free. The prospect opens the email and sees their weakest product photographed better than anything on their site. Gratitude replaces resistance. The image does the selling.

Real outcomes from this exact mechanism: a $2,000 jewelry project, a $4,800 deal that grew from one sample, and monthly retainers of $700 and $780 that started as single cold emails. Not guru numbers — real ones, and that's the point: three or four small retainers is a stable income floor, and the first client is the hardest. Everything after gets easier.`,
    painPoints: [
      {
        title: "You're competing on promises in a sea of promises",
        description:
          "Every proposal says 'high quality' and 'fast turnaround.' The client can't evaluate any of it before hiring, so they pick on price — a race you don't want to win.",
      },
      {
        title: "No portfolio, no clients; no clients, no portfolio",
        description:
          "The classic cold start. You can't show client work you haven't been hired to do — unless you build spec campaigns and per-prospect proof images, which require no one's permission.",
      },
      {
        title: "Outreach feels like begging, so you stop at 15 attempts",
        description:
          "Most freelancers quit before the data exists. A ~1% close rate on cold outreach is normal in B2B — the failure isn't the channel, it's judging it before 100 serious attempts.",
      },
      {
        title: "One-off gigs keep you on the hamster wheel",
        description:
          "Project income dies the day you deliver. Without a path to recurring work, every month starts at zero and the feast-famine cycle never ends.",
      },
    ],
    howDezygn: [
      {
        title: "Make the proof image in minutes, not hours",
        description:
          "Pick a prospect's weakest-photographed product, extract their brand identity, and generate one excellent on-brand lifestyle shot. The whole compressed R&D pass takes about half an hour per prospect — fast enough to run at Rule-of-100 volume.",
      },
      {
        title: "Run outreach as a system with Outreach Factory",
        description:
          "Dezygn's Outreach Factory turns the mechanism into a pipeline: lead lists, custom visuals per prospect, and follow-up cadence — so outreach happens on schedule instead of on motivation.",
      },
      {
        title: "Catch problem-aware clients on Upwork",
        description:
          "Dezygn's Opportunities feature surfaces relevant Upwork jobs — prospects who already posted the need. Lead your application with a custom mockup and you're the only applicant who showed up with the work.",
      },
      {
        title: "Deliver like an agency from day one",
        description:
          "The same Visual Syntax workflow our agency uses on retainer clients — brand identity, dedicated models, scene libraries, structured revisions — so your first client experience reads senior, not solo.",
      },
      {
        title: "Grow gigs into retainers",
        description:
          "The natural path is PDP images → ad creative → ongoing social content, suggested when the client is happy. Recurring beats new-logo hunting; the real revenue is in growing clients, not finding them.",
      },
    ],
    results: [
      { value: "$2k-4.8k", label: "Real first projects landed via Proof Before Pitch" },
      { value: "$700/mo", label: "Real retainer that started as one cold email" },
      { value: "100", label: "Outreach attempts before you judge the channel" },
      { value: "~30 min", label: "To produce one custom proof image per prospect" },
    ],
    secondaryCta: { label: "Watch the Free Training", href: "/webinar" },
    relatedIndustries: ["agencies", "ecommerce"],
    relatedUseCases: ["golf-brands", "eyewear", "jewelry"],
  },

  // ──────────────────────────────────────────────
  // AGENCIES
  // ──────────────────────────────────────────────
  {
    slug: "agencies",
    title: "Agencies",
    metaTitle: "AI Product Photography for Agencies | Dezygn",
    metaDescription:
      "How agencies run AI photography at retainer scale: calibrated client systems, honest production math, and the creative-fatigue demand wave from Meta's ranking changes.",
    heroHeadline: "We Run an Agency on This. Here's What That Actually Takes.",
    image: "/images/seo/industries/agencies.webp",
    imageAlt: "Agency team reviewing batches of AI-generated client creative",
    intro: `Dezygn isn't a tool we imagine agencies might use — it's the tool our own agency, Fairway Creatives, delivers client retainers on every month. That changes what this page can honestly tell you: real session times, real approval ratios, real account-growth paths, from paying clients in golf apparel, premium eyewear and e-commerce.

The agency opportunity right now has a structural driver: Meta's ranking increasingly rewards fresh creative variety over single optimized winners, which means every brand running ads burns through creative faster than traditional production replenishes it. Brands need 3-5 variations per campaign, refreshed constantly. A studio shoot takes weeks; ad accounts eat creative weekly. The gap between those two speeds is a service business — managed creative production at scale — and clients pay $1k-3k monthly retainers for someone to own it.

What it takes on the inside is a system, not talent alone: calibrated per-client setups (brand identity, model library, scene library, documented campaign instructions), honest production math, and the unglamorous SOPs — onboarding, structured feedback, delivery — that make good work consistent work.`,
    painPoints: [
      {
        title: "Client creative demand outruns production capacity",
        description:
          "Retainer clients expect fresh batches monthly while ad accounts demand weekly variation. Traditional production economics make scale a hiring problem; every new client used to mean new headcount.",
      },
      {
        title: "Every new client means reinventing the process",
        description:
          "Without documented systems, each account runs on heroics. Quality varies with who touched it, revision rounds balloon, and the agency can't onboard help because the process lives in someone's head.",
      },
      {
        title: "Revision hell from unstructured feedback",
        description:
          "'Can you make it pop more' is not a brief. Unstructured feedback leads to guessing, and guessing leads to the five-round revision spiral that destroys retainer margins.",
      },
      {
        title: "AI competence is now table stakes — and clients know it",
        description:
          "Brands ask directly whether you work with AI. Agencies that can't deliver accurate, on-brand AI imagery at volume are competing for a shrinking pool of traditional budgets.",
      },
    ],
    howDezygn: [
      {
        title: "Calibrated client systems that compound",
        description:
          "Brand identity, dedicated model library, scene library and documented campaign instructions per client. First campaigns take the longest; by the third, a monthly batch is a two-hour session — our real golf-client cadence: 60 images generated, 29 approved, delivered in 2h20m.",
      },
      {
        title: "Plan with honest production math",
        description:
          "Real premium-campaign numbers: 137 generations → 27 shortlisted → 12 client-approved. Roughly 10:1 generation-to-approval on new work. Build that into scope and pricing and you'll never miss a deliverable count.",
      },
      {
        title: "Structured feedback that kills revision spirals",
        description:
          "Walk clients through deliveries using the six Visual Syntax ingredients as questions. 'I don't love it' becomes 'the scene feels too European for an American golf brand' — a specific, one-round fix that actually happened on our client work.",
      },
      {
        title: "Grow accounts along PDP → Ads → Social",
        description:
          "The natural retainer escalation: product pages first, then ad creative (recurring, because fatigue), then always-on social. Suggested at happy moments, never during revisions. The real revenue is in growing accounts, not pitching new ones.",
      },
      {
        title: "White-label delivery under your brand",
        description:
          "Client galleries, feedback rounds and final delivery run under your agency's name — Dezygn is the production engine, you own the relationship.",
      },
    ],
    results: [
      { value: "2h 20m", label: "Real monthly client session: brief to 29 approved images" },
      { value: "$1k-3k", label: "Working monthly retainer range for AI creative" },
      { value: "10:1", label: "Honest generation-to-approval planning ratio" },
      { value: "3-5x", label: "Creative variants per campaign modern ad ranking rewards" },
    ],
    relatedIndustries: ["freelancers", "ecommerce"],
    relatedUseCases: ["golf-brands", "eyewear", "fashion-accessories"],
  },

  // ──────────────────────────────────────────────
  // ECOMMERCE
  // ──────────────────────────────────────────────
  {
    slug: "ecommerce",
    title: "E-Commerce Brands",
    metaTitle: "AI Product Photography for E-Commerce Brands | Dezygn",
    metaDescription:
      "AI product photography for e-commerce: accurate catalogs, brand-consistent imagery and ad-creative volume — engineered with the workflow a real agency delivers on.",
    heroHeadline: "Every SKU, Every Season, One Visual System",
    image: "/images/seo/industries/ecommerce.webp",
    imageAlt: "E-commerce catalog imagery generated with consistent AI product photography",
    intro: `E-commerce brands live and die by product imagery — it's the only contact the customer has with the product before buying. And the demands stack: marketplace-compliant packshots, lifestyle context for the PDP, ad creative that refreshes before fatigue kills performance, seasonal restyles, and consistency across all of it so the store reads as a brand rather than a flea market.

Traditional production answers each demand with the same expensive ritual: book, ship samples, shoot, edit, wait. The AI alternative most brands have tried — typing prompts and hoping — fails for a different reason: inaccurate products, inconsistent style, and imagery that quietly erodes trust. 'Close enough' isn't a style choice; close enough is a refund.

Dezygn is the third option: an engineered visual system. Your products anchored by real photos so what ships is what's pictured. Your brand defined once — exact colors, lighting temperature, scene world — and applied to every image. Your catalog, ads and seasonal campaigns produced from that system in hours. It's the same workflow our own agency uses to deliver e-commerce client retainers every month, productized.`,
    painPoints: [
      {
        title: "Catalog scale makes traditional production unaffordable",
        description:
          "Two hundred SKUs at 6-8 images each is over a thousand images to produce and maintain — a months-long five-figure project that's outdated by the next season.",
      },
      {
        title: "Visual drift across shoots erodes brand trust",
        description:
          "Products shot months apart by different setups produce a patchwork storefront — mismatched lighting, angles and tones that customers read, correctly, as inconsistency.",
      },
      {
        title: "Ad creative fatigues faster than you can replace it",
        description:
          "Performance marketing now rewards fresh variation over single winners. The same four heroes rotating for a quarter is a slow leak in your acquisition cost.",
      },
      {
        title: "DIY AI prompting produces accuracy liabilities",
        description:
          "Embellished colors, warped proportions, garbled labels — naive generation creates 'item not as pictured' refunds and reviews. Accuracy is non-negotiable, and prompting alone doesn't deliver it.",
      },
    ],
    howDezygn: [
      {
        title: "Anchor every product to its real photo",
        description:
          "Products aren't described and guessed — they're transferred from real source images, with materials and dimensions stated. The label stays legible, the proportions stay true, the customer gets what they saw.",
      },
      {
        title: "Define the brand once, apply it everywhere",
        description:
          "Exact hex colors, lighting temperature, scene world and prop families set up as your brand's Visual Syntax. Style, scene and product change per image; brand stays constant — that constancy is what reads as identity.",
      },
      {
        title: "Batch the catalog with locked recipes",
        description:
          "Lock the packshot setup once — 85mm, f/8, high-key, consistent shadow — and run the whole line. Every SKU in identical light, from bestseller to new arrival.",
      },
      {
        title: "Feed the ad account weekly",
        description:
          "Same accurate product, fresh scenes, models and formats — lifestyle, UGC-style, comparison frames — at the testing volume modern paid social demands.",
      },
      {
        title: "Restyle seasons without re-shooting",
        description:
          "Spring refresh, Black Friday, holiday warmth: scene swaps on the same validated product assets. The campaign calendar stops being a production calendar.",
      },
    ],
    results: [
      { value: "2K+", label: "Source/output resolution discipline keeping labels crisp" },
      { value: "1 system", label: "Brand definition applied across every SKU and channel" },
      { value: "Hours", label: "From product upload to storefront-ready image set" },
      { value: "10:1", label: "Honest generation-to-keeper ratio to plan around" },
    ],
    relatedIndustries: ["shopify-stores", "amazon-sellers"],
    relatedUseCases: ["skincare", "supplements", "home-decor"],
  },

  // ──────────────────────────────────────────────
  // AMAZON SELLERS
  // ──────────────────────────────────────────────
  {
    slug: "amazon-sellers",
    title: "Amazon Sellers",
    metaTitle: "AI Product Photography for Amazon Sellers | Dezygn",
    metaDescription:
      "AI product photography for Amazon: compliant white-background mains, accurate listing sets, lifestyle and comparison images that win the buy box battle.",
    heroHeadline: "Win the Click Without Risking the Listing",
    image: "/images/seo/industries/amazon-sellers.webp",
    imageAlt: "Amazon listing image set with compliant white background and lifestyle frames",
    intro: `Amazon is the most rule-bound, most competitive image environment in e-commerce. The main image must be the product on pure white (RGB 255,255,255), filling roughly 85% of the frame, no props, no text — and it competes in a search grid against fifty near-identical thumbnails. The listing then needs the full supporting cast: lifestyle context, detail close-ups, scale references, packaging shots — the 5-7 images that turn a click into a conversion.

The sellers winning this game treat imagery as an optimization loop, not a one-time cost. They test main-image angles, refresh lifestyle frames, and keep image sets consistent across variations. The sellers losing it are stuck with one old shoot — or worse, with sloppy AI images whose embellished products generate the platform's most lethal outcome: 'item not as pictured' reviews and the return rate that follows.

Dezygn is built for the winning loop: marketplace-compliant packshots from a locked recipe, products anchored to real source photos so listings stay honest, and the supporting image set — lifestyle, scale, detail, packaging — produced in batches per SKU.`,
    painPoints: [
      {
        title: "Compliance rules with zero tolerance",
        description:
          "Pure white background, 85% frame fill, no watermarks, 1000px+ for zoom. Suppressed listings from non-compliant images are revenue turned off overnight.",
      },
      {
        title: "Fifty identical thumbnails, one click",
        description:
          "In the search grid, your main image is your entire marketing budget. A slightly better angle, crisper shadow or cleaner fill is the difference between the click and invisibility.",
      },
      {
        title: "Returns and reviews punish image dishonesty",
        description:
          "Amazon's flywheel amplifies disappointment: an image that flatters the product into dishonesty produces returns, 'not as pictured' reviews, and ranking decay that outlasts the refund.",
      },
      {
        title: "Variation sprawl multiplies image debt",
        description:
          "Every color, size and bundle needs its own consistent image set. A 10-SKU listing family is 50-70 images — and they all have to match.",
      },
    ],
    howDezygn: [
      {
        title: "Compliant mains from a locked recipe",
        description:
          "Pure white, even high-key lighting, correct frame fill, natural contact shadow — the packshot recipe configured once and applied identically across every SKU and variation.",
      },
      {
        title: "Accuracy as returns insurance",
        description:
          "Real source anchoring keeps colors, proportions and label text true to the shipped product. The image is a promise the product has to keep — especially on Amazon.",
      },
      {
        title: "The full conversion set per SKU",
        description:
          "Lifestyle context, hands-as-ruler scale shots, macro details and packaging frames batched per product — the 5-7 image set that converts the click you fought for.",
      },
      {
        title: "Main-image testing without re-shoots",
        description:
          "Angle, shadow and framing variants of the compliant main, generated in minutes — feed your A/B tests instead of guessing which thumbnail wins the grid.",
      },
      {
        title: "Variation families that actually match",
        description:
          "Every colorway rendered in the identical setup from the same source discipline — listing families that read as one professional brand.",
      },
    ],
    results: [
      { value: "255,255,255", label: "Pure white mains, by recipe rather than retouching" },
      { value: "85%", label: "Frame fill compliance built into the packshot setup" },
      { value: "5-7", label: "Images per listing produced as one batch" },
      { value: "≥100px", label: "Source text height keeping labels zoom-proof" },
    ],
    relatedIndustries: ["ecommerce", "dropshipping"],
    relatedUseCases: ["supplements", "electronics", "toys"],
  },

  // ──────────────────────────────────────────────
  // SHOPIFY STORES
  // ──────────────────────────────────────────────
  {
    slug: "shopify-stores",
    title: "Shopify Stores",
    metaTitle: "AI Product Photography for Shopify Stores | Dezygn",
    metaDescription:
      "AI product photography for Shopify: brand-world imagery, conversion-complete PDP sets, and the ad creative volume DTC growth actually requires.",
    heroHeadline: "Your Store Is Your Brand. Your Images Are Your Store.",
    image: "/images/seo/industries/shopify-stores.webp",
    imageAlt: "Shopify storefront with cohesive brand imagery across product pages",
    intro: `A Shopify store has a freedom Amazon sellers envy and a burden marketplaces carry for everyone else: nothing about your visual presentation is decided for you. The white-background convention, the trust signals, the traffic — all yours to build. Which means your imagery isn't decoration; it's the store's entire credibility, brand and conversion system in one.

The DTC brands that win on Shopify run imagery as a brand world: a consistent visual universe — palette, light, scenes, models — that makes the homepage, collections, PDPs and ads feel like one deliberate place. The ones that struggle have what visitors read instantly as a reseller site: mismatched supplier photos, inconsistent lighting, no world at all.

Dezygn builds the world deliberately. Brand identity extracted and locked — exact colors, scene presets, model direction. Products anchored to real photos for accuracy. PDP sets, collection banners, lifestyle campaigns and the relentless ad creative DTC growth demands, all generated inside the same system. It's the methodology from our agency's real DTC client work, available to your store.`,
    painPoints: [
      {
        title: "Supplier photos make your store look like everyone's store",
        description:
          "The same manufacturer images appear on every competitor's site. Without original imagery, the only differentiator left is price — the worst position in DTC.",
      },
      {
        title: "No marketplace trust halo to borrow",
        description:
          "On your own domain, imagery does the trust work Amazon's brand does for marketplace sellers. Inconsistent or amateur visuals read as risk at checkout.",
      },
      {
        title: "Paid traffic burns creative relentlessly",
        description:
          "DTC growth runs on Meta and TikTok, and both now reward fresh variation over recycled winners. Creative production is the growth bottleneck nobody budgets for.",
      },
      {
        title: "Theme-quality design, stock-quality photos",
        description:
          "A premium theme with mediocre imagery is a suit with bad shoes. The gap between your design standard and your photo standard is visible on every page.",
      },
    ],
    howDezygn: [
      {
        title: "Build the brand world once",
        description:
          "Extracted brand identity — palette, light temperature, scene presets, model direction — applied across homepage, collections, PDPs and ads. The cohesion that separates a brand from a reseller.",
      },
      {
        title: "Conversion-complete PDP sets",
        description:
          "Hero, lifestyle context, scale reference, detail close-up, packaging — the full answer set for 'what is it, how big, what's it like' generated per product in one batch.",
      },
      {
        title: "Ad creative at testing volume",
        description:
          "UGC-style frames, lifestyle variations, model rotations — fresh weekly creative for the paid accounts, from the same accurate product assets.",
      },
      {
        title: "Seasonal campaigns without production cycles",
        description:
          "The same validated products restaged for spring, BFCM and holiday inside your brand world. Campaign imagery becomes a scene swap, not a shoot.",
      },
      {
        title: "Original imagery even for resold products",
        description:
          "If you sell products others also carry, original brand-world imagery is your differentiation — same item, completely different store experience.",
      },
    ],
    results: [
      { value: "1 world", label: "Brand system across homepage, PDPs and ads" },
      { value: "5-7", label: "Conversion-set images per product, batched" },
      { value: "Weekly", label: "Ad creative refresh cadence paid growth needs" },
      { value: "Hours", label: "From new product to full PDP image set" },
    ],
    relatedIndustries: ["ecommerce", "dropshipping"],
    relatedUseCases: ["candles", "fashion-accessories", "beauty"],
  },

  // ──────────────────────────────────────────────
  // DROPSHIPPING
  // ──────────────────────────────────────────────
  {
    slug: "dropshipping",
    title: "Dropshipping",
    metaTitle: "AI Product Photography for Dropshipping | Dezygn",
    metaDescription:
      "AI product photography for dropshipping: turn supplier photos into original brand imagery — honestly. Differentiate the store without misrepresenting the product.",
    heroHeadline: "Same Supplier, Different League",
    image: "/images/seo/industries/dropshipping.webp",
    imageAlt: "Supplier product transformed into original branded lifestyle imagery",
    intro: `Dropshipping's defining problem is that everyone has your product and everyone has your photos. The same supplier images circulate across every competing store, every ad library, every marketplace listing — so the customer's only differentiator is price, and the margin war begins. The stores that escape it do one thing differently: they look like brands. Original imagery, coherent visual identity, professional product presentation — built on top of the same catalog everyone else carries.

There's a right and a wrong way to do that with AI. The wrong way is fantasy: 'enhancing' the product until the image promises something the supplier doesn't ship. In a model where you never touch inventory, image honesty is your only quality control — an embellished render is a guaranteed dispute, and 'item not as pictured' is the review that kills a store that lives on impulse trust.

The right way is what Dezygn does: keep the product accurate — anchored to the real supplier photo, true colors, true proportions — and transform everything around it. Original scenes, brand palette, lifestyle context, model shots, consistent packshots. The product stays honest; the presentation stops being a commodity.`,
    painPoints: [
      {
        title: "Identical supplier photos across every competitor",
        description:
          "Your ad and your competitor's ad show the literal same image. Customers comparison-shop in one tab, and price becomes the only lever left.",
      },
      {
        title: "Supplier photo quality is a credibility ceiling",
        description:
          "Harsh factory lighting, cluttered backgrounds, watermarks — supplier imagery caps how premium your store can feel no matter what theme you run.",
      },
      {
        title: "Image dishonesty is fatal when you don't control fulfillment",
        description:
          "You can't inspect what ships. If the image over-promises, the dispute is automatic — and chargebacks plus 'not as pictured' reviews end dropshipping stores quickly.",
      },
      {
        title: "Testing products needs imagery faster than anyone can shoot",
        description:
          "The model runs on testing many products fast. Commissioning photography per test product is economically absurd; launching with raw supplier photos loses the test before it starts.",
      },
    ],
    howDezygn: [
      {
        title: "Original imagery from the supplier source",
        description:
          "The supplier photo becomes the accuracy anchor; Dezygn rebuilds the presentation around it — clean packshots, branded scenes, lifestyle context. Original images, honest product.",
      },
      {
        title: "Accuracy discipline as dispute insurance",
        description:
          "True colors, true proportions, no invented features. The conversion-integrity rule — accurate, realistic, on-brand — matters most when you never see the inventory.",
      },
      {
        title: "Launch-ready image sets for product testing",
        description:
          "Packshot, lifestyle frame and ad creative per test product in under an hour — test with brand-grade presentation at dropshipping speed.",
      },
      {
        title: "A consistent store world across a rotating catalog",
        description:
          "Products come and go; your brand world doesn't. One locked palette, scene system and lighting recipe makes a fast-rotating catalog read as a stable brand.",
      },
      {
        title: "Winning products get the full brand treatment",
        description:
          "When a test wins, scale its imagery: model shots, UGC-style ad batches, seasonal scenes — the full system applied to the products that earn it.",
      },
    ],
    results: [
      { value: "<1 hr", label: "Supplier photo to launch-ready image set" },
      { value: "100%", label: "Product accuracy maintained from the supplier source" },
      { value: "1 world", label: "Consistent brand system over a rotating catalog" },
      { value: "0", label: "Photoshoots required to test a new product" },
    ],
    relatedIndustries: ["shopify-stores", "amazon-sellers"],
    relatedUseCases: ["electronics", "pet-products", "fitness"],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
