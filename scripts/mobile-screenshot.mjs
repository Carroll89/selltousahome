import { chromium, devices } from 'playwright';

const [url, outPath] = process.argv.slice(2);

if (!url || !outPath) {
  console.error('Usage: node mobile-screenshot.mjs <url> <out_path>');
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ ...devices['iPhone 14'] });
const page = await context.newPage();

try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
} catch (e) {
  console.error('Navigation failed:', e.message);
  await browser.close();
  process.exit(2);
}

await page.screenshot({ path: outPath, fullPage: false });
await browser.close();
console.log(`Saved ${outPath}`);
