import FeaturePageLayout from './FeaturePageLayout';

const BrandImportPage = () => (
  <FeaturePageLayout
    slug="brand-import"
    metaTitle="Brand Import — Set Up Client Brands & Asset Libraries | Dezygn"
    metaDescription="Import a client brand from their website URL, build a searchable Ingredients library, and prep every asset with crop, background removal, and upscaling — so every generation starts on-brand."
    eyebrow="Brand Import"
    headline="Set Up Client Brands In Minutes."
    intro="Paste a client's website URL and Dezygn extracts their brand for you. Every brand gets its own Ingredients library and prep tools, so every generation starts from clean, on-brand inputs."
    image={{
      src: '/assets/images/landing-v4/ingredients-assets.png',
      alt: 'Dezygn ingredients library showing uploaded product assets, searchable tags, and an ingredient detail panel',
    }}
    stepsHeading="From URL To Ready-To-Shoot."
    stepsBody="Client onboarding shouldn't take a day of copy-pasting. Set the brand up once and reuse it on every campaign."
    steps={[
      {
        title: 'Import from a URL',
        body: "Paste the client's website. Dezygn analyzes it and extracts the brand identity into a profile that Awa reads on every generation.",
      },
      {
        title: 'Load the Ingredients library',
        body: 'Bulk-upload product shots, logos, and references, or import images by URL. Everything is brand-wide and filterable by name or tag.',
      },
      {
        title: 'Prep your inputs',
        body: 'Crop, resize, remove backgrounds, and upscale inside Product Prep. Check the before/after comparison, then save the result as a new ingredient — the original stays intact.',
      },
      {
        title: 'Generate on-brand',
        body: 'Attach ingredients to any prompt with @image references. Awa uses your brand preferences, logos, and palettes as context.',
      },
    ]}
    capabilities={{
      heading: 'Every Brand, Organized.',
      body: 'Work is organized by Brand and Campaign — the way agencies actually run client accounts.',
      items: [
        'Brand profiles store visual preferences, logos, and style direction',
        'Brand moodboard — an infinite canvas for collecting and annotating references',
        'Batch ingredient uploads with a review step before saving',
        'Product Prep: crop, resize, remove background, AI upscale',
        'Before/after comparison on every prep enhancement',
        'Prepped assets save as new ingredients, tagged and searchable',
      ],
      image: {
        src: '/assets/images/landing-v4/product-prep.png',
        alt: 'Dezygn product prep screen showing remove background controls for a fashion product image',
      },
    }}
    related={[
      {
        label: 'Awa',
        description: 'Brief the AI creative assistant with your prepped, on-brand ingredients.',
        to: '/features/awa',
      },
      {
        label: 'Recipes',
        description: 'Pair brand ingredients with reusable templates for recurring deliverables.',
        to: '/features/recipes',
      },
      {
        label: 'Studio Workspace',
        description: 'Ingredients and Product Prep live inside every campaign workspace.',
        to: '/features/studio',
      },
    ]}
    ctaHeadline="Onboard Your Next Client Faster."
    ctaBody="One URL, one asset library, every campaign on-brand."
  />
);

export default BrandImportPage;
