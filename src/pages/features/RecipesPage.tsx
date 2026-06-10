import FeaturePageLayout from './FeaturePageLayout';

const RecipesPage = () => (
  <FeaturePageLayout
    slug="recipes"
    metaTitle="Recipes — Reusable AI Photography Templates | Dezygn"
    metaDescription="Dezygn Recipes are reusable AI photography templates: a base prompt, ingredient slots for your product shots, and guided composition settings. Save your own and reuse winning setups on recurring client work."
    eyebrow="Recipes"
    headline="Reuse Winning Prompts."
    intro="A recipe is a saved setup: prompt, ingredient slots, and guided composition settings. Pick one, drop in the client's product, and generate — no prompt writing, no starting from zero on recurring work."
    image={{
      src: '/assets/images/landing-v4/recipes-winning-prompts.png',
      alt: 'Dezygn recipes screen showing reusable prompt templates, image inputs, guided settings, and generated fashion output',
    }}
    stepsHeading="From Template To Output."
    stepsBody="Recipes turn one-off wins into a repeatable production system."
    steps={[
      {
        title: 'Pick a recipe',
        body: 'Open the recipe picker in chat and browse ready-made templates — or your own saved recipes.',
      },
      {
        title: 'Drop in your product',
        body: 'Each recipe has ingredient slots — product photo, model image, logo. Fill them from your brand library.',
      },
      {
        title: 'Tune the guided settings',
        body: 'Adjust composition through guided dropdowns — subject, action, environment, lighting, camera — instead of rewriting the prompt.',
      },
      {
        title: 'Save your own',
        body: 'When a setup wins with a client, save it: name, base prompt, ingredient slots, and guided parameters. Private to you, ready for next month.',
      },
    ]}
    capabilities={{
      heading: 'What A Recipe Stores.',
      body: 'Everything a setup needs to be repeatable — not just the prompt.',
      items: [
        'A base prompt that captures the look that worked',
        'Ingredient slots for the images each shot needs',
        'Guided composition: subject, action, environment, lighting, camera',
        'Custom dropdown parameters you define, like style or lighting options',
        'Extra instructions typed in the composer get appended per run',
      ],
    }}
    related={[
      {
        label: 'Awa',
        description: 'Recipes feed straight into the AI creative assistant as structured briefs.',
        to: '/features/awa',
      },
      {
        label: 'Brand Import',
        description: 'Ingredient slots pull from each brand’s prepped asset library.',
        to: '/features/brand-import',
      },
      {
        label: 'Studio Workspace',
        description: 'Run recipes inside the campaign workspace and QA the output on the canvas.',
        to: '/features/studio',
      },
    ]}
    ctaHeadline="Systemize Your Best Work."
    ctaBody="Save the setups that win clients. Reuse them every month."
  />
);

export default RecipesPage;
