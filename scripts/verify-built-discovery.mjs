import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(readFileSync('/Users/agents/.openclaw/workspace/artifacts/current-market-coverage-manifest-2026-04-28.json', 'utf8'));
const sitemap = readFileSync(join(root, 'out/sitemap.xml'), 'utf8');
const blogIndex = readFileSync(join(root, 'out/blog.html'), 'utf8');
const blogTs = readFileSync(join(root, 'lib/blog.ts'), 'utf8');
const slugs = [...blogTs.matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);
const stateHubByAbbr = {
  pa: 'sell-house-fast-pennsylvania', de: 'sell-house-fast-delaware', oh: 'sell-house-fast-ohio',
  ma: 'sell-house-fast-massachusetts', wi: 'sell-house-fast-wisconsin', nh: 'sell-house-fast-new-hampshire',
  ct: 'sell-house-fast-connecticut', ny: 'sell-house-fast-new-york', il: 'sell-house-fast-illinois',
};
const failures = [];
for (const slug of manifest.marketRoutes) {
  if (!sitemap.includes(`/markets/${slug}`)) failures.push(`${slug}: missing market root from built sitemap`);
  const marketHtmlPath = join(root, 'out/markets', `${slug}.html`);
  if (!existsSync(marketHtmlPath)) failures.push(`${slug}: missing built market html`);
  else {
    const html = readFileSync(marketHtmlPath, 'utf8');
    if (!html.includes('Resources for') || !html.includes('/blog/')) failures.push(`${slug}: built market html missing resource/blog block`);
    const state = slug.split('-').at(-1);
    if (!html.includes(`/${stateHubByAbbr[state]}`)) failures.push(`${slug}: built market html missing state hub link`);
  }
  const stateHubPath = join(root, 'out', `${stateHubByAbbr[slug.split('-').at(-1)]}.html`);
  if (!existsSync(stateHubPath)) failures.push(`${slug}: missing built state hub html`);
  else if (!readFileSync(stateHubPath, 'utf8').includes(`/markets/${slug}`)) failures.push(`${slug}: built state hub missing link to market`);
}
for (const slug of slugs) {
  if (!sitemap.includes(`/blog/${slug}`)) failures.push(`${slug}: missing blog URL from built sitemap`);
  if (!blogIndex.includes(`/blog/${slug}`)) failures.push(`${slug}: missing blog URL from built /blog index`);
}
console.log(JSON.stringify({
  checkedMarkets: manifest.marketRoutes.length,
  checkedBlogPosts: slugs.length,
  builtSitemapMarketRoots: manifest.marketRoutes.filter((slug) => sitemap.includes(`/markets/${slug}`)).length,
  builtSitemapBlogUrls: slugs.filter((slug) => sitemap.includes(`/blog/${slug}`)).length,
  builtBlogIndexUrls: slugs.filter((slug) => blogIndex.includes(`/blog/${slug}`)).length,
  failures,
}, null, 2));
if (failures.length) process.exit(1);
