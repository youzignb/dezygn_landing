// Renders proof-before-pitch.html to public/downloads/proof-before-pitch.pdf.
// Run from the repo root: node docs/landingpage.v4/lead-magnet-pdf/render-pdf.mjs
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer';

const here = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(here, 'proof-before-pitch.html');
const outPath = path.resolve(here, '../../../public/downloads/proof-before-pitch.pdf');

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
await page.evaluateHandle('document.fonts.ready');

await page.pdf({
  path: outPath,
  format: 'A4',
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate: `
    <div style="width:100%; font-family:Helvetica,Arial,sans-serif; font-size:6.5px; letter-spacing:1.2px; color:#8B867B; padding:0 16mm; display:flex; justify-content:space-between; text-transform:uppercase;">
      <span>Proof Before Pitch &mdash; dezygn.com</span>
      <span class="pageNumber"></span>
    </div>`,
  margin: { top: '16mm', bottom: '18mm', left: '16mm', right: '16mm' },
});

await browser.close();
console.log(`PDF written to ${outPath}`);
