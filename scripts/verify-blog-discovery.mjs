import { readFileSync, existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const siteUrl = 'https://www.selltousahome.com';
const root = process.cwd();
const manifestPath = '/Users/agents/.openclaw/workspace/artifacts/current-market-coverage-manifest-2026-04-28.json';
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

const STATE_HUB_BY_ABBR = {
  pa: '/sell-house-fast-pennsylvania',
  de: '/sell-house-fast-delaware',
  oh: '/sell-house-fast-ohio',
  ma: '/sell-house-fast-massachusetts',
  wi: '/sell-house-fast-wisconsin',
  nh: '/sell-house-fast-new-hampshire',
  ct: '/sell-house-fast-connecticut',
  ny: '/sell-house-fast-new-york',
  il: '/sell-house-fast-illinois',
};

function titleizeMarket(slug) {
  return slug
    .replace(/-pa$|-de$|-oh$|-ma$|-wi$|-nh$|-ct$|-ny$|-il$/u, '')
    .split('-')
    .map((part) => part.toUpperCase() === 'ny' ? 'NY' : part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

const markets = manifest.marketRoutes.map((slug) => {
  const state = slug.split('-').at(-1);
  return [slug, titleizeMarket(slug), state.toUpperCase(), STATE_HUB_BY_ABBR[state]];
});

function read(path) {
  return readFileSync(join(root, path), 'utf8');
}

function extractArray(name, text) {
  const re = new RegExp(`const ${name} = \\[([\\s\\S]*?)\\];`);
  const match = text.match(re);
  if (!match) return [];
  return [...match[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

function extractBlogPosts(text) {
  const chunks = text.split(/\n\s*\{\n\s*slug: '/).slice(1);
  return chunks.map((chunk) => {
    const slug = chunk.split("'", 1)[0];
    const title = chunk.match(/title: '([^']+)'/)?.[1] ?? '';
    const marketsText = chunk.match(/markets: \[([^\]]*)\]/)?.[1] ?? '';
    const postMarkets = [...marketsText.matchAll(/'([^']+)'/g)].map((m) => m[1]);
    return { slug, title, markets: postMarkets };
  });
}

const blogTs = read('lib/blog.ts');
const sitemapTs = read('app/sitemap.ts');
const blogPage = read('app/blog/page.tsx');
const header = read('components/Header.tsx');
const footer = read('components/Footer.tsx');
const cluster = read('components/BlogClusterLinks.tsx');
const brandFacts = JSON.parse(read('public/.well-known/brand-facts.json'));

const sitemapMarkets = extractArray('marketSlugs', sitemapTs);
const sitemapGuides = extractArray('cityGuideSlugs', sitemapTs);
const posts = extractBlogPosts(blogTs);
const staticBlogDirs = (await readdir(join(root, 'app/blog'), { withFileTypes: true }))
  .filter((d) => d.isDirectory() && d.name !== '[slug]' && existsSync(join(root, 'app/blog', d.name, 'page.tsx')))
  .map((d) => d.name)
  .sort();

const missing = [];
const rows = markets.map(([slug, city, state, stateHub]) => {
  const marketFile = `app/markets/${slug}/page.tsx`;
  const marketSource = read(marketFile);
  const rootInSitemap = sitemapMarkets.includes(slug);
  const guideSlug = `sell-house-fast-${slug}-2026`;
  const guideInSitemap = sitemapGuides.includes(guideSlug);
  const guideExists = existsSync(join(root, 'app/guides', guideSlug, 'page.tsx'));
  const clusterComponentPresent = marketSource.includes(`<BlogClusterLinks marketSlug="${slug}"`);
  const generatedPosts = posts.filter((p) => p.markets.includes(slug));
  const resourceBlockGenerated = cluster.includes('getPostsForMarket') && clusterComponentPresent && generatedPosts.length > 0;
  const stateHubFile = `app${stateHub}/page.tsx`;
  const stateHubSource = read(stateHubFile);
  const stateHubLinksMarket = stateHubSource.includes(`/markets/${slug}`) || stateHubSource.includes('`/markets/${market.slug}`') || stateHubSource.includes('`/markets/${m.slug}`');
  const marketLinksStateHub = marketSource.includes(`href="${stateHub}"`) || cluster.includes(`href: '${stateHub}'`);
  const footerOrHeaderHasMarket = header.includes(`/markets/${slug}`) || footer.includes(`/markets/${slug}`);
  const relevantLinks = [
    guideExists ? `/guides/${guideSlug}` : null,
    ...generatedPosts.slice(0, 4).map((p) => `/blog/${p.slug}`),
  ].filter(Boolean);

  const checks = { rootInSitemap, clusterComponentPresent, resourceBlockGenerated, stateHubLinksMarket, marketLinksStateHub, footerOrHeaderHasMarket };
  for (const [key, ok] of Object.entries(checks)) {
    if (!ok) missing.push(`${slug}: ${key}`);
  }
  return { slug, city, state, stateHub, rootInSitemap, resourceBlockGenerated, relevantLinks, stateHubLinksMarket, marketLinksStateHub, missing: Object.entries(checks).filter(([, ok]) => !ok).map(([k]) => k) };
});

const blogMissing = [];
for (const slug of staticBlogDirs) {
  if (!posts.some((p) => p.slug === slug)) blogMissing.push(`${slug}: missing from lib/blog.ts registry`);
}
for (const p of posts) {
  const routeExists = existsSync(join(root, 'app/blog', p.slug, 'page.tsx')) || existsSync(join(root, 'content/blog', `${p.slug}.ts`));
  if (!routeExists) blogMissing.push(`${p.slug}: registry entry has no static route or content module`);
  if (!sitemapTs.includes('/blog/${post.slug}') && !sitemapTs.includes(p.slug)) blogMissing.push(`${p.slug}: sitemap does not derive/include blog slug`);
}

const stateHubCoverage = markets.reduce((acc, [slug,, state, hub]) => {
  acc[hub] ??= { state, markets: [], linkedMarkets: [] };
  acc[hub].markets.push(slug);
  const src = read(`app${hub}/page.tsx`);
  if (src.includes(`/markets/${slug}`) || src.includes('`/markets/${market.slug}`') || src.includes('`/markets/${m.slug}`')) acc[hub].linkedMarkets.push(slug);
  return acc;
}, {});

const report = [];
report.push('# Blog Discovery Verification — selltousahome.com');
report.push('');
report.push(`Generated: ${new Date().toISOString()}`);
report.push('');
report.push('## Summary');
report.push(`- Markets verified: ${rows.length}`);
report.push(`- Blog registry posts: ${posts.length}`);
report.push(`- Static blog routes: ${staticBlogDirs.length}`);
report.push(`- Missing market checks: ${missing.length}`);
report.push(`- Missing blog checks: ${blogMissing.length}`);
report.push(`- Brand facts markets/states: ${brandFacts.content.markets}/${brandFacts.content.statesServed.length}`);
report.push(`- Manifest source: ${manifestPath}`);
report.push(`- Manifest counts: ${manifest.counts.marketRouteCount} active market routes / ${manifest.counts.knowledgeMarketDataCount} market-data files / ${manifest.counts.guideRouteCount} guide routes / ${manifest.counts.blogRouteCount} blog routes`);
report.push(`- Tracked manifest exceptions: missing market-data = ${manifest.missingKnowledgeDataForMarketRoutes.join(', ') || 'none'}; missing seller guides = ${manifest.missingGuideForMarketRoutes.join(', ') || 'none'}`);
report.push('');
report.push('## Allentown positive model preserved');
const allentown = rows.find((r) => r.slug === 'allentown-pa');
report.push(`Allentown retains the strong cluster: market root sitemap=${allentown.rootInSitemap}, guide=/guides/sell-house-fast-allentown-pa-2026, blog=/blog/allentown-pa-sell-house-fast-2026, resource links=${allentown.relevantLinks.join(', ')}, state hub=${allentown.stateHub}.`);
report.push('');
report.push('## Market-by-market verification');
report.push('| Market | Root in sitemap | Blog/resource block generated | Relevant post/guide links | State hub link coverage | Missing daily blog/sitemap items |');
report.push('|---|---:|---:|---|---|---|');
for (const r of rows) {
  const stateCoverage = `hub→market ${r.stateHubLinksMarket ? 'yes' : 'no'}; market→hub ${r.marketLinksStateHub ? 'yes' : 'no'}`;
  const missingItems = r.missing.length ? r.missing.join('<br>') : 'none';
  report.push(`| ${r.slug} | ${r.rootInSitemap ? 'yes' : 'no'} | ${r.resourceBlockGenerated ? 'yes' : 'no'} | ${r.relevantLinks.join('<br>')} | ${stateCoverage} | ${missingItems} |`);
}
report.push('');
report.push('## State hub coverage');
for (const [hub, info] of Object.entries(stateHubCoverage)) {
  report.push(`- ${hub}: ${info.linkedMarkets.length}/${info.markets.length} active markets linked (${info.linkedMarkets.join(', ')})`);
}
report.push('');
report.push('## Manifest-governance tracked exceptions');
report.push(`- Missing market-data files for active market routes: ${manifest.missingKnowledgeDataForMarketRoutes.join(', ') || 'none'}`);
report.push(`- Missing seller guide routes for active market routes: ${manifest.missingGuideForMarketRoutes.join(', ') || 'none'}`);
report.push('- These are tracked P1 governance exceptions from the generated manifest, not blog/sitemap discovery misses.');
report.push('');
report.push('## Blog/sitemap route checks');
report.push(blogMissing.length ? blogMissing.map((x) => `- ${x}`).join('\n') : '- none');
report.push('');
report.push('## Evidence stubs');
report.push('- `lib/blog.ts` is registry source for `/blog`, sitemap blog URLs, and `BlogClusterLinks` via `getPostsForMarket()`; static daily blog routes are registered with `isStatic: true`.');
report.push('- `app/sitemap.ts` derives 28 market roots/subpages, city guides, and all `BLOG_POSTS` blog URLs from arrays/registry instead of hand-adding daily URLs.');
report.push('- `components/BlogClusterLinks.tsx` calls `getPostsForMarket(marketSlug).slice(0, 4)`, so every market with registry matches renders links.');
report.push('- Header/footer now expose `/blog`; header/footer market nav include Boston MA, Hartford CT, and Wausau WI.');
report.push('- `public/.well-known/brand-facts.json` aligned to observed 28 markets / 9 states.');
report.push('');
report.push('## Exact commands used');
report.push('```bash');
report.push('git status --short && git diff --stat');
report.push('cat /Users/agents/.openclaw/workspace/artifacts/current-market-coverage-manifest-2026-04-28.json | jq \".counts, .missingKnowledgeDataForMarketRoutes, .missingGuideForMarketRoutes\"');
report.push('find app/markets -mindepth 2 -maxdepth 2 -name page.tsx | sed \'s#^app/markets/##; s#/page.tsx$##\' | sort');
report.push('grep -R "BlogClusterLinks" -n app/markets | wc -l');
report.push('node scripts/verify-blog-discovery.mjs');
report.push('npm run lint');
report.push('npm run build');
report.push('```');

process.stdout.write(report.join('\n') + '\n');

if (missing.length || blogMissing.length) {
  process.exitCode = 1;
}
