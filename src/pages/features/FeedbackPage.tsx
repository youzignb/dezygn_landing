import FeaturePageLayout from './FeaturePageLayout';

const FeedbackPage = () => (
  <FeaturePageLayout
    slug="feedback"
    metaTitle="Feedback — Client Review Pages & One Review Inbox | Dezygn"
    metaDescription="Share public review pages where clients rate and comment on visuals, then triage every response from one global inbox. Feedback routes back to the source campaign so revisions start in context."
    eyebrow="Feedback · Review Inbox"
    headline="Collect Client Feedback Efficiently."
    intro="No more Dropbox links and email threads. Clients review your visuals on a shared page — rating and commenting without an account — and every response lands in one inbox that routes you straight back to the source campaign."
    image={{
      src: '/assets/images/landing-v4/client-feedback.png',
      alt: 'Dezygn feedback review screen showing selected client visuals and client feedback notes in one workspace',
    }}
    stepsHeading="From Share Link To Revision."
    stepsBody="Review rounds, not scattered messages — every response is tied to the frame and campaign it came from."
    steps={[
      {
        title: 'Share a review round',
        body: 'Send your selected frames to the client as a public review page. They rate and comment on each visual in the browser — no seat, no login.',
      },
      {
        title: 'Everything lands in one inbox',
        body: 'The Feedback page collects every review round — visual and concept — across all brands and campaigns. Filter by status, review kind, or brand, with unread counts and response summaries per round.',
      },
      {
        title: 'Triage from the round card',
        body: 'Open the public round, jump to the source campaign, mark read, archive, or delete — from the full inbox or the quick bell drawer in the top nav.',
      },
      {
        title: 'Turn feedback into revisions',
        body: 'Inside the campaign, feedback is grouped by round with Selected, Needs Tweaks, and Pass tallies. One click sends a "needs tweaks" comment to chat — focused on the reviewed image, with the client’s note drafted into a revision prompt.',
      },
    ]}
    capabilities={{
      heading: 'One Queue For Every Round.',
      body: 'Feedback is a first-class surface, not a filter buried in the gallery.',
      items: [
        'Public client review pages with per-image ratings and comments — no client account needed',
        'Visual rounds and concept rounds triaged in the same queue',
        'Round cards show unread counts, reviewed/total progress, and decision tallies',
        'Go-to-campaign routing puts feedback back in its production context',
        'Send-to-chat hands a client note to Awa as a focused revision draft',
        'Bell drawer for quick triage from anywhere in the studio, live as responses arrive',
      ],
      image: {
        src: '/assets/images/landing-v4/gallery-share-winners.png',
        alt: 'Dezygn gallery showing selected favorite frames and a client share panel for review',
      },
    }}
    related={[
      {
        label: 'Concepts',
        description: 'Run the same review loop earlier — get direction approved before production starts.',
        to: '/features/concepts',
      },
      {
        label: 'Studio Workspace',
        description: 'Favorite your best frames and send them to client review in one click from the gallery.',
        to: '/features/studio',
      },
      {
        label: 'Awa',
        description: 'Client asked for tweaks? Hand the note to Awa and revise the exact frame in chat.',
        to: '/features/awa',
      },
    ]}
    ctaHeadline="Retire The Dropbox-And-Email Loop."
    ctaBody="One link out, one inbox back. Every client comment lands where the work happens."
  />
);

export default FeedbackPage;
