import { existsSync, readdirSync } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { BLOG_POSTS } from '@/lib/blog';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.selltousahome.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const APP_DIR = path.join(process.cwd(), 'app');

interface ImageEntry {
  pageUrl: string;
  imageUrl: string;
  title: string;
}

type ImageCandidate = {
  publicPath: string;
  score: number;
};

function readRouteSlugs(parentDir: string): string[] {
  const absoluteDir = path.join(APP_DIR, parentDir);
  if (!existsSync(absoluteDir)) return [];

  return readdirSync(absoluteDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(path.join(absoluteDir, entry.name, 'page.tsx')))
    .map((entry) => entry.name)
    .sort();
}

function readMarketSubpages(marketSlug: string): string[] {
  const marketDir = path.join(APP_DIR, 'markets', marketSlug);
  if (!existsSync(marketDir)) return [];

  return readdirSync(marketDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(path.join(marketDir, entry.name, 'page.tsx')))
    .map((entry) => entry.name)
    .sort();
}

function stripStateSuffix(slug: string): string {
  return slug.replace(/-(pa|de|oh|ma|wi|nh|ct|ny|il)$/, '');
}

function formatTitle(slug: string): string {
  return slug
    .split('-')
    .map((part) => {
      const upper = part.toUpperCase();
      if (['PA', 'DE', 'OH', 'MA', 'WI', 'NH', 'CT', 'NY', 'IL'].includes(upper)) return upper;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(' ')
    .replace('Racine Mount Pleasant', 'Racine-Mount Pleasant')
    .replace('Champaign Urbana', 'Champaign-Urbana');
}

function scoreImage(relativePath: string, keys: string[]): number | null {
  const basename = path.basename(relativePath).toLowerCase();
  const lowerPath = relativePath.toLowerCase();
  const matchedKey = keys.find((key) => basename.startsWith(key));
  if (!matchedKey) return null;
  if (!/\.(jpg|jpeg|png|webp)$/.test(basename)) return null;
  if (!basename.includes('hero')) return null;

  let score = 0;
  if (matchedKey === keys[0]) score += 50;
  if (lowerPath.includes('/optimized/')) score += 30;
  if (basename.includes('-1200')) score += 20;
  if (basename.includes('-xl')) score += 18;
  if (basename.includes('-1080')) score += 15;
  if (basename.includes('landmark')) score += 8;
  if (basename.endsWith('-hero.jpg')) score += 10;
  return score;
}

function listImageFiles(dir: string, prefix = ''): string[] {
  const absoluteDir = path.join(PUBLIC_DIR, dir);
  if (!existsSync(absoluteDir)) return [];

  return readdirSync(absoluteDir, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.join(prefix, entry.name);
    if (entry.isDirectory()) return listImageFiles(path.join(dir, entry.name), relative);
    if (entry.isFile()) return [`/${path.join(dir, relative).replace(/\\/g, '/')}`];
    return [];
  });
}

const IMAGE_FILES = listImageFiles('images');

function marketHeroImage(slug: string): string | null {
  const keys = [slug, stripStateSuffix(slug)];
  const candidates: ImageCandidate[] = IMAGE_FILES
    .map((publicPath) => {
      const score = scoreImage(publicPath, keys);
      return score === null ? null : { publicPath, score };
    })
    .filter((candidate): candidate is ImageCandidate => candidate !== null)
    .sort((a, b) => b.score - a.score || a.publicPath.localeCompare(b.publicPath));

  return candidates[0]?.publicPath ?? null;
}

function absolute(publicOrAbsolutePath: string): string {
  if (publicOrAbsolutePath.startsWith('http')) return publicOrAbsolutePath;
  return `${BASE_URL}${publicOrAbsolutePath.startsWith('/') ? publicOrAbsolutePath : `/${publicOrAbsolutePath}`}`;
}

function buildImageEntries(): ImageEntry[] {
  const marketSlugs = readRouteSlugs('markets');
  const guideSlugs = readRouteSlugs('guides').filter((slug) => slug.startsWith('sell-house-fast-'));

  const entries: ImageEntry[] = [];

  for (const slug of marketSlugs) {
    const heroImage = marketHeroImage(slug);
    if (!heroImage) continue;

    const marketTitle = formatTitle(slug);
    entries.push({
      pageUrl: `${BASE_URL}/markets/${slug}`,
      imageUrl: absolute(heroImage),
      title: `Sell Your House Fast in ${marketTitle}`,
    });

    for (const subpage of readMarketSubpages(slug)) {
      entries.push({
        pageUrl: `${BASE_URL}/markets/${slug}/${subpage}`,
        imageUrl: absolute(heroImage),
        title: `${formatTitle(subpage)} in ${marketTitle}`,
      });
    }
  }

  for (const guideSlug of guideSlugs) {
    const marketSlug = guideSlug.replace(/^sell-house-fast-/, '').replace(/-2026$/, '');
    const heroImage = marketHeroImage(marketSlug);
    if (!heroImage) continue;

    entries.push({
      pageUrl: `${BASE_URL}/guides/${guideSlug}`,
      imageUrl: absolute(heroImage),
      title: `How to Sell Your House Fast in ${formatTitle(marketSlug)} — 2026 Guide`,
    });
  }

  for (const post of BLOG_POSTS) {
    if (!post.heroImage) continue;
    entries.push({
      pageUrl: `${BASE_URL}/blog/${post.slug}`,
      imageUrl: absolute(post.heroImage),
      title: post.heroAlt || post.title,
    });
  }

  return entries;
}

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const byPage = new Map<string, ImageEntry[]>();

  for (const entry of buildImageEntries()) {
    const pageEntries = byPage.get(entry.pageUrl) ?? [];
    if (!pageEntries.some((existing) => existing.imageUrl === entry.imageUrl)) {
      pageEntries.push(entry);
    }
    byPage.set(entry.pageUrl, pageEntries);
  }

  const urlBlocks = Array.from(byPage.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([pageUrl, images]) => {
      const imageBlocks = images
        .map(
          (img) => `    <image:image>
      <image:loc>${escape(img.imageUrl)}</image:loc>
      <image:title>${escape(img.title)}</image:title>
    </image:image>`
        )
        .join('\n');
      return `  <url>\n    <loc>${escape(pageUrl)}</loc>\n${imageBlocks}\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlBlocks}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
