// Generates public/sitemap.xml from static routes + slugs in src/data/*.ts.
// Runs automatically before `npm run build` (see package.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://dezygn.com';

const staticRoutes = [
  '/',
  '/pricing',
  '/features',
  '/features/awa',
  '/features/studio',
  '/features/brand-import',
  '/features/recipes',
  '/features/outreach',
  '/features/opportunities',
  '/features/concepts',
  '/features/feedback',
  // Compiler-generated feature pages (Feature Content System)
  '/features/prompt-canvas',
  '/features/awa-chat',
  '/features/awa-video',
  '/features/new-brand-import',
  '/features/gallery-share',
  '/features/brands',
  '/features/gallery',
  '/features/home',
  '/features/settings',
  '/features/ingredients',
  '/features/product-prep',
  '/features/variant-board',
  '/features/apply-kit',
  '/features/outreach-factory',
  '/webinar',
  '/free-report',
  // '/client-system', // TEMPORARY: redirects to /proof-before-pitch until the tripwire page ships
  '/aipa',
  '/apply',
  '/community',
  '/playbook',
  '/case-studies',
  '/about',
  '/contact',
  '/faq',
  '/help',
  '/shot-types',
  '/use-cases',
  '/industries',
  '/compare',
  '/resources',
  '/glossary',
  '/privacy',
  '/terms',
  '/earnings-disclaimer',
  '/accessibility',
];

// data file -> route prefix
const dynamicSources = {
  'shot-types.ts': '/shot-types',
  'use-cases.ts': '/use-cases',
  'industries.ts': '/industries',
  'comparisons.ts': '/compare',
  'alternatives.ts': '/alternatives',
  'resources.ts': '/resources',
  'glossary.ts': '/glossary',
  'help.ts': '/help',
  'help-content.generated.ts': '/help',
};

const urls = [...staticRoutes];
for (const [file, prefix] of Object.entries(dynamicSources)) {
  const source = readFileSync(join(root, 'src/data', file), 'utf8');
  for (const match of source.matchAll(/slug:\s*["']([a-z0-9-]+)["']/g)) {
    urls.push(`${prefix}/${match[1]}`);
  }
}

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${BASE}${url}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
