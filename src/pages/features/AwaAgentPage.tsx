import FeaturePageLayout from './FeaturePageLayout';

const AwaAgentPage = () => (
  <FeaturePageLayout
    slug="awa"
    metaTitle="Awa — AI Creative Assistant for AI Photography | Dezygn"
    metaDescription="Awa is Dezygn's AI creative assistant trained in AI photography. Brief her in chat — she writes Visual Syntax prompts, generates, critiques quality, and iterates until the work is client-ready."
    eyebrow="Awa · AI Creative Assistant"
    headline="Collaborate With AI."
    intro="Awa is your AI creative assistant, trained in the skill of AI photography. Describe the shot in plain language. She writes the optimized prompt, generates the frames, checks the result, and iterates with you until it's client-ready."
    image={{
      src: '/assets/images/landing-v4/collaborate-with-ai.png',
      alt: 'Dezygn Awa workspace showing AI creative assistant guidance, generated frames, and prompt enhancement progress',
    }}
    stepsHeading="From Brief To Frames."
    stepsBody="Awa runs the whole loop in one chat — no prompt engineering, no tab juggling."
    steps={[
      {
        title: 'Brief her in chat',
        body: 'Describe the shot like you would to a photographer. Attach product shots from Ingredients and reference them with @image tokens — "put the product in @image1 on the marble in @image2."',
      },
      {
        title: 'She writes the prompt',
        body: 'Awa turns your brief into a structured Visual Syntax prompt — style, subject, action, scene, camera — instead of gambling on loose wording.',
      },
      {
        title: 'Generate and verify',
        body: 'Frames stream straight into your campaign canvas. The vision critic checks outputs for quality issues so off-target results get caught early.',
      },
      {
        title: 'Iterate to client-ready',
        body: 'Reply to any frame with edit instructions and Awa makes surgical image-to-image edits. Use Plan mode to align on the approach before spending credits.',
      },
    ]}
    capabilities={{
      heading: 'What Awa Can Do.',
      body: 'Awa is more than a generation box. She has the tools a working creative needs on real client projects.',
      items: [
        'Image generation and surgical image-to-image editing',
        'Prompt enhancement with structured Visual Syntax',
        'Vision critic for automated quality checks',
        'Brand awareness — reads your brand preferences, logos, and palettes',
        'Web search and screenshots for reference gathering',
        'Browser image sourcing that imports website images into Ingredients',
        'Model choice per generation: Nano Banana 2, Nano Banana Pro, or GPT Image 2',
        'Plan and Act modes — align on direction first, then execute',
      ],
    }}
    related={[
      {
        label: 'Studio Workspace',
        description: 'Chat, canvas, comparison, and favorites — the workspace where every Awa session happens.',
        to: '/features/studio',
      },
      {
        label: 'Recipes',
        description: 'Save the prompts and settings that worked, then reuse them on recurring client work.',
        to: '/features/recipes',
      },
      {
        label: 'Concepts',
        description: 'Get client sign-off on direction before you brief Awa on production.',
        to: '/features/concepts',
      },
    ]}
    ctaHeadline="Brief Awa On Your Next Shoot."
    ctaBody="Stop prompting blindly. Work with an assistant trained in AI photography."
  />
);

export default AwaAgentPage;
