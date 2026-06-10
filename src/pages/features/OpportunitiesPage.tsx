import FeaturePageLayout from './FeaturePageLayout';

const OpportunitiesPage = () => (
  <FeaturePageLayout
    slug="opportunities"
    metaTitle="Opportunities — Daily AI Photography Jobs From Upwork | Dezygn"
    metaDescription="Dezygn's Opportunities feed scans Upwork daily for AI photography jobs, scores each one for fit, and tracks your applications and wins — with a 7-day backlog so there's always something to apply to."
    eyebrow="Opportunities · Upwork Feed"
    headline="Find New Gigs Everyday."
    intro="A daily scan pulls fresh AI photography jobs from Upwork into your studio, scored for fit. Open them, apply, and track outcomes — with a rolling 7-day backlog so quiet days still leave you with work to chase."
    image={{
      src: '/assets/images/landing-v4/opportunities-gigs.png',
      alt: 'Dezygn opportunities dashboard showing AI photography gigs, application progress, and open opportunity cards',
    }}
    stepsHeading="From Scan To Signed Client."
    stepsBody="The feed is shared by your team — one daily scan keeps the pool fresh for everyone, while your applications stay personal."
    steps={[
      {
        title: 'Scan Upwork daily',
        body: 'One click scans the last 48 hours of Upwork posts across AI image and product-photo keywords. Scans run in the background and the cooldown is 24 hours, so the pool refreshes once a day.',
      },
      {
        title: 'Review scored jobs',
        body: 'Only jobs scoring 50+ for fit make the feed. Each card shows budget or rate, client spend, payment verification, and location — with the AI’s reasoning one tap away. Video-first jobs are filtered out.',
      },
      {
        title: 'Open and apply',
        body: 'Open takes you to the job on Upwork and the card asks whether you applied. Yes moves it to Applied, No to Skipped — so the open list stays clean and your numbers stay honest.',
      },
      {
        title: 'Track wins',
        body: 'Mark applied jobs as won when they land. A daily target panel tracks applications against a 5-a-day goal, plus this week, last week, all time, and wins.',
      },
    ]}
    capabilities={{
      heading: 'Designed Around A Daily Habit.',
      body: 'Opportunities is built for consistent application volume, not dashboard staring.',
      items: [
        'Rolling 7-day backlog, sorted freshest-first, so there are always jobs to act on',
        'Team-shared pool — one person scanning refreshes opportunities for everyone',
        'Personal Applied, Skipped, and Won tabs, separate from the shared feed',
        'Add applied: log jobs you found directly on Upwork so your stats stay complete',
        'Search links modal with ready-made Upwork searches when the classifier misses something',
        'AI fit reasoning available on every card without cluttering the list',
      ],
    }}
    related={[
      {
        label: 'Outreach Factory',
        description: 'Inbound jobs are one channel. Outreach turns CSV lead lists into personalized visual cold email.',
        to: '/features/outreach',
      },
      {
        label: 'Awa',
        description: 'Won the gig? Brief Awa, your AI creative assistant, and deliver the shoot.',
        to: '/features/awa',
      },
      {
        label: 'Studio Workspace',
        description: 'The workspace where you produce, compare, and select the work that wins repeat clients.',
        to: '/features/studio',
      },
    ]}
    ctaHeadline="Never Run Out Of Gigs To Chase."
    ctaBody="Five applications a day, from a feed that refreshes itself. That's the whole system."
  />
);

export default OpportunitiesPage;
