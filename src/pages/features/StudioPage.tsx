import FeaturePageLayout from './FeaturePageLayout';

const StudioPage = () => (
  <FeaturePageLayout
    slug="studio"
    metaTitle="Studio Workspace — Canvas, Gallery & Comparison Mode | Dezygn"
    metaDescription="Every Dezygn campaign gets a studio workspace: Awa chat beside a production canvas with comparison mode, favorites, gallery, notes, and one-click client sharing."
    eyebrow="Studio"
    headline="Run Every Shoot In One Workspace."
    intro="Every campaign gets its own workspace: Awa chat on one side, your production canvas on the other. Generate, inspect, compare, favorite, and send to the client — without leaving the page."
    image={{
      src: '/assets/images/landing-v4/gallery-share-winners.png',
      alt: 'Dezygn gallery showing selected favorite frames and a client share panel for review',
    }}
    stepsHeading="From Generation To Delivery."
    stepsBody="The workspace is built around the loop you actually run on client work: generate, QA, select, ship."
    steps={[
      {
        title: 'Generate into the canvas',
        body: 'Frames stream in as Awa works. Switch between hero and grid views, scrub the filmstrip, and navigate with your keyboard.',
      },
      {
        title: 'Inspect and compare',
        body: 'Zoom into full-size frames and open Comparison Mode to check outputs side by side against the source image before anything reaches a client.',
      },
      {
        title: 'Star the winners',
        body: 'Favorite the best frames and filter the canvas to favorites only. The gallery keeps everything browsable by brand and campaign.',
      },
      {
        title: 'Share for review',
        body: 'Send your selected winners to the client in one click. Their responses flow back into your Feedback inbox.',
      },
    ]}
    capabilities={{
      heading: 'Built For Production QA.',
      body: 'Out of fifty generations, maybe ten are client-ready. The workspace is designed to find them fast.',
      items: [
        'Comparison Mode — source vs output, side by side',
        'Star, favorite-only filtering, and brand-scoped gallery',
        'Full-size inspection with zoom and an info drawer per frame',
        'Save any generated frame back to Ingredients for future shoots',
        'Campaign notes with autosave, right next to the work',
        'Reply to a frame in chat to request a targeted revision',
      ],
      image: {
        src: '/assets/images/landing-v4/comparison-side-by-side.png',
        alt: 'Dezygn comparison mode showing a generated model result side by side with a product reference image',
      },
    }}
    related={[
      {
        label: 'Awa',
        description: 'The AI creative assistant that generates and edits everything on the canvas.',
        to: '/features/awa',
      },
      {
        label: 'Feedback',
        description: 'Client responses on shared winners land in one review inbox.',
        to: '/features/feedback',
      },
      {
        label: 'Recipes',
        description: 'Turn a winning setup into a reusable template for the next campaign.',
        to: '/features/recipes',
      },
    ]}
    ctaHeadline="Run Your Next Campaign Here."
    ctaBody="One workspace from first frame to client delivery."
  />
);

export default StudioPage;
