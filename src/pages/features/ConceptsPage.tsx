import FeaturePageLayout from './FeaturePageLayout';

const ConceptsPage = () => (
  <FeaturePageLayout
    slug="concepts"
    metaTitle="Concepts — Client Approval On Creative Direction First | Dezygn"
    metaDescription="Share concept directions with reference images on a public review link. Clients mark each concept Approve, Needs Tweak, or Pass — so direction is locked before you spend credits on production."
    eyebrow="Concepts · Direction Approval"
    headline="Align Before You Generate."
    intro="Rendering visuals before the client agrees on direction wastes credits and goodwill. Concepts lets you share short concept statements with reference images on one public link — clients approve, request tweaks, or pass on each direction before production starts."
    image={{
      src: '/assets/images/landing-v4/align-before-generate.png',
      alt: 'Dezygn concept alignment screen showing concept decisions, reference images, and client selection states',
    }}
    stepsHeading="From Idea To Locked Direction."
    stepsBody="A text-first approval round that takes the client minutes — and saves you a round of wrong renders."
    steps={[
      {
        title: 'Write concept cards',
        body: 'Build a round of short concept statements — each under 50 words. Attach up to five tagged reference images per concept so the client sees the intended product, model, styling, or scene.',
      },
      {
        title: 'Send one public link',
        body: 'Create a public review link and send it. Clients review in the browser — no account, no seat, no login.',
      },
      {
        title: 'Client decides per concept',
        body: 'Each concept gets a decision: Approve, Needs Tweak, or Pass. Clients add change notes where a direction needs work, and can suggest replacement concepts of their own.',
      },
      {
        title: 'Plan production from winners',
        body: 'Open the round from your Feedback inbox in a planning view filtered to Selected concepts — grid or list, with each client decision, note, and reference image at a glance. Then brief the approved directions into production.',
      },
    ]}
    capabilities={{
      heading: 'Approval That Survives Real Clients.',
      body: 'Concept rounds are built to produce decisions you can plan a shoot from, not vague feedback threads.',
      items: [
        'Up to five tagged reference images per concept — direction is visual, not just verbal',
        'Per-concept decisions with change notes and client-suggested replacements',
        'Concept rounds land in the same Feedback inbox as visual rounds, with decision totals per round',
        'Planning view filters: Selected, Needs Tweak, Pass, Unreviewed, or All',
        'Original concept numbering is preserved when filtering, so "concept 4" still means concept 4',
        'Clients can reload the link and pick up their saved progress',
      ],
    }}
    related={[
      {
        label: 'Feedback',
        description: 'The global review inbox where concept and visual rounds are triaged in one queue.',
        to: '/features/feedback',
      },
      {
        label: 'Awa',
        description: 'Brief approved directions to Awa, your AI creative assistant, and produce the shoot.',
        to: '/features/awa',
      },
      {
        label: 'Studio Workspace',
        description: 'Where approved concepts become generated frames, comparisons, and client-ready selects.',
        to: '/features/studio',
      },
    ]}
    ctaHeadline="Lock Direction Before You Spend Credits."
    ctaBody="One link, three buttons per concept. Production starts with the client already on board."
  />
);

export default ConceptsPage;
