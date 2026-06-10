// Prerenders every URL in public/sitemap.xml to a static HTML file in dist/.
// Runs after `vite build` (see package.json). Crawlers get full HTML + meta +
// JSON-LD instead of an empty SPA shell; the React bundle still hydrates on top.
// Fails soft: if Chrome can't launch (e.g. an unsupported CI image), the build
// continues and the site ships as a plain SPA.
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
// Serial on purpose: react-helmet-async flushes head tags via requestAnimationFrame,
// which only fires on the foreground tab — concurrent background tabs snapshot
// before their <title>/JSON-LD land.
const CONCURRENCY = 1;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.pdf': 'application/pdf',
};

function serveDist() {
  const server = createServer((req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = join(dist, path);
    if (!extname(file)) file = join(dist, 'index.html'); // SPA fallback
    try {
      const body = readFileSync(file);
      res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end('not found');
    }
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

const defaultTitle = (readFileSync(join(dist, 'index.html'), 'utf8').match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? '';
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/dezygn\.com([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
if (routes.length === 0) throw new Error('no routes found in dist/sitemap.xml');

let puppeteer;
try {
  puppeteer = (await import('puppeteer')).default;
} catch {
  console.warn('prerender: puppeteer not installed — skipping, shipping SPA shell only');
  process.exit(0);
}

const server = await serveDist();
const port = server.address().port;
let browser;
try {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu',
      // helmet-async applies head tags via requestAnimationFrame, which Chrome
      // throttles in background tabs — these keep all worker tabs running.
      '--disable-background-timer-throttling',
      '--disable-renderer-backgrounding',
      '--disable-backgrounding-occluded-windows',
    ],
  });
} catch (err) {
  console.warn(`prerender: could not launch Chrome (${err.message}) — skipping, shipping SPA shell only`);
  server.close();
  process.exit(0);
}

let failed = 0;
const queue = [...routes];
async function worker() {
  const page = await browser.newPage();
  // Keep prerendering offline: block analytics/fonts/API calls. The tags stay
  // in the captured HTML; they just don't execute during the snapshot.
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const url = new URL(req.url());
    url.hostname === '127.0.0.1' ? req.continue() : req.abort();
  });
  for (let route; (route = queue.shift()) !== undefined; ) {
    try {
      await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.bringToFront();
      await page.waitForSelector('#root *', { timeout: 10000 });
      // react-helmet-async applies head tags in an effect after paint — wait for
      // the per-page title to land (homepage legitimately keeps the default).
      if (route !== '/') {
        await page
          .waitForFunction((t) => document.title !== t, { timeout: 3000 }, defaultTitle)
          .catch(() => {});
      }
      const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));
      const outDir = route === '/' ? dist : join(dist, route.slice(1));
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), html);
    } catch (err) {
      failed++;
      console.warn(`prerender: FAILED ${route} — ${err.message}`);
    }
  }
  await page.close();
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
await browser.close();
server.close();
console.log(`prerender: ${routes.length - failed}/${routes.length} routes written to dist/`);
if (failed > 0) process.exitCode = 0; // soft-fail by design
