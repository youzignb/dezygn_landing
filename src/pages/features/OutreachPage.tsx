import FeaturePageLayout from './FeaturePageLayout';

const OutreachPage = () => (
  <FeaturePageLayout
    slug="outreach"
    metaTitle="Outreach Factory — Personalized Visual Outreach at Scale | Dezygn"
    metaDescription="Turn CSV lead lists into personalized proof-of-work visuals. Dezygn discovers each brand's product, an AI strategist picks the visual angle, you select winners, and export an Instantly-ready CSV."
    eyebrow="Outreach Factory"
    headline="Send Visual Outreach At Scale."
    intro="Cold email works better when the prospect sees their own product, upgraded. Import a CSV of leads, let Dezygn find each brand's product and generate custom visuals, pick the winners, and export a CSV that drops straight into Instantly."
    image={{
      src: '/assets/images/landing-v4/outreach-visuals.png',
      alt: 'Dezygn outreach dashboard showing imported lead batches, production line, and AI-generated winner visuals',
    }}
    stepsHeading="From CSV To Campaign."
    stepsBody="One batch dashboard runs the whole production line — import, discovery, strategy, generation, review, export."
    steps={[
      {
        title: 'Import your leads',
        body: 'Upload a CSV — email plus a domain is the minimum per row. Add company, decision maker, or a specific product URL when you have them. Invalid rows are filtered out at import.',
      },
      {
        title: 'Discover the product',
        body: 'For each lead, Dezygn visits the brand site, finds the most relevant product, and collects product images plus a brand fingerprint — colors, photography style, price tier, customer. Discovery is cached so reruns don’t re-pay for it.',
      },
      {
        title: 'Strategist picks the angle',
        body: 'Instead of forcing every lead into one template, an AI creative strategist scores three modes — product hero, lifestyle scene, or ad creative — and picks the strongest visual argument per brand. Two distinct candidates are generated per lead.',
      },
      {
        title: 'Review winners, export',
        body: 'Compare each candidate against the brand’s original product photo, pick a winner or regenerate with custom instructions, then export an Instantly-ready CSV with email-optimized image URLs. Instantly owns sending and replies.',
      },
    ]}
    capabilities={{
      heading: 'Built For Real Batches.',
      body: 'Outreach Factory is an operator tool. Everything that goes wrong in batch generation is inspectable and retryable without leaving the dashboard.',
      items: [
        'Two candidates per lead, generated concurrently — varied by concept, not just lighting',
        'Brand fingerprint keeps visuals in the prospect’s actual visual register',
        'Strategy cockpit on every candidate: selected mode, mode scores, reasoning, and the full prompt',
        'Stale product image URLs are validated and refreshed before generation, so dead links don’t burn credits',
        'Run logs and an exception queue with per-lead retry, skip, and regenerate',
        'Standard or ultra image model, selectable per batch, with credit estimates up front',
        'Export includes email, first name, company, website, image URL, and visual angle per row',
        'Winners get an email-safe JPEG derivative (max 700px) so images load in inboxes',
      ],
    }}
    related={[
      {
        label: 'Opportunities',
        description: 'Outbound is one channel. Opportunities scans Upwork daily for AI photography jobs you can apply to.',
        to: '/features/opportunities',
      },
      {
        label: 'Awa',
        description: 'When a prospect replies, brief Awa — your AI creative assistant — to produce the full shoot.',
        to: '/features/awa',
      },
      {
        label: 'Concepts',
        description: 'Once a lead becomes a client, align on creative direction before production starts.',
        to: '/features/concepts',
      },
    ]}
    ctaHeadline="Put Your Prospecting On A Production Line."
    ctaBody="Show prospects their own product, upgraded — before you've ever spoken to them."
  />
);

export default OutreachPage;
