import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://selltousahome.com';

interface ImageEntry {
  pageUrl: string;
  imageUrl: string;
  title: string;
}

const IMAGE_ENTRIES: ImageEntry[] = [
  // Market hero images
  {
    pageUrl: `${BASE_URL}/markets/harrisburg-pa`,
    imageUrl: `${BASE_URL}/images/harrisburg-hero.jpg`,
    title: 'Sell Your House Fast in Harrisburg PA',
  },
  {
    pageUrl: `${BASE_URL}/markets/allentown-pa`,
    imageUrl: `${BASE_URL}/images/allentown-hero.jpg`,
    title: 'Sell Your House Fast in Allentown PA',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'Sell Your House Fast in King of Prussia PA',
  },
  // Guide pages (reuse market hero images)
  {
    pageUrl: `${BASE_URL}/guides/sell-house-fast-harrisburg-pa-2026`,
    imageUrl: `${BASE_URL}/images/harrisburg-hero.jpg`,
    title: 'How to Sell Your House Fast in Harrisburg PA — 2026 Guide',
  },
  {
    pageUrl: `${BASE_URL}/guides/sell-house-fast-allentown-pa-2026`,
    imageUrl: `${BASE_URL}/images/allentown-hero.jpg`,
    title: 'How to Sell Your House Fast in Allentown PA — 2026 Guide',
  },
  {
    pageUrl: `${BASE_URL}/guides/sell-house-fast-king-of-prussia-pa-2026`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'How to Sell Your House Fast in King of Prussia PA — 2026 Guide',
  },
  // Market report pages
  {
    pageUrl: `${BASE_URL}/markets/harrisburg-pa/market-report`,
    imageUrl: `${BASE_URL}/images/harrisburg-hero.jpg`,
    title: 'Harrisburg PA Housing Market Report 2026',
  },
  {
    pageUrl: `${BASE_URL}/markets/allentown-pa/market-report`,
    imageUrl: `${BASE_URL}/images/allentown-hero.jpg`,
    title: 'Allentown PA Housing Market Report 2026',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/market-report`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'King of Prussia PA Housing Market Report 2026',
  },
  // KOP situation pages — hero image
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/foreclosure`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'Sell Before Foreclosure in King of Prussia PA',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/code-violations`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'Sell a Home with Code Violations in King of Prussia PA',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/divorce-sale`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'Sell Your Home During Divorce in King of Prussia PA',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/fire-damage`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'Sell a Fire-Damaged House in King of Prussia PA',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/inherited-property`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'Sell an Inherited Home in King of Prussia PA',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/probate`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'Sell a Probate Property in King of Prussia PA',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/tenant-occupied`,
    imageUrl: `${BASE_URL}/images/king-of-prussia-hero.jpg`,
    title: 'Sell a Tenant-Occupied Property in King of Prussia PA',
  },
  // KOP situation pages — video poster images
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/foreclosure`,
    imageUrl: `${BASE_URL}/images/video-posters/kop-foreclosure.jpg`,
    title: 'Stop Foreclosure in King of Prussia PA — Video',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/code-violations`,
    imageUrl: `${BASE_URL}/images/video-posters/kop-code-violations.jpg`,
    title: 'Sell a Home with Code Violations in King of Prussia PA — Video',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/divorce-sale`,
    imageUrl: `${BASE_URL}/images/video-posters/kop-divorce.jpg`,
    title: 'Sell Your Home During Divorce in King of Prussia PA — Video',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/fire-damage`,
    imageUrl: `${BASE_URL}/images/video-posters/kop-fire-damage.jpg`,
    title: 'Sell a Fire-Damaged House in King of Prussia PA — Video',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/inherited-property`,
    imageUrl: `${BASE_URL}/images/video-posters/kop-inherited.jpg`,
    title: 'Sell an Inherited Home in King of Prussia PA — Video',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/probate`,
    imageUrl: `${BASE_URL}/images/video-posters/kop-probate.jpg`,
    title: 'Sell a Probate Property in King of Prussia PA — Video',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa/tenant-occupied`,
    imageUrl: `${BASE_URL}/images/video-posters/kop-tenant.jpg`,
    title: 'Sell a Tenant-Occupied Property in King of Prussia PA — Video',
  },
  // Video poster images
  {
    pageUrl: `${BASE_URL}/markets/harrisburg-pa`,
    imageUrl: `${BASE_URL}/images/video-posters/harrisburg-main.jpg`,
    title: 'Sell Your House Fast in Harrisburg PA — Video',
  },
  {
    pageUrl: `${BASE_URL}/markets/allentown-pa`,
    imageUrl: `${BASE_URL}/images/video-posters/allentown-main.jpg`,
    title: 'Sell Your House Fast in Allentown PA — Video',
  },
  {
    pageUrl: `${BASE_URL}/markets/king-of-prussia-pa`,
    imageUrl: `${BASE_URL}/images/video-posters/kop-guide.jpg`,
    title: 'Sell Your House Fast in King of Prussia PA — Video',
  },
];

function escape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  // Group entries by page URL
  const byPage = new Map<string, ImageEntry[]>();
  for (const entry of IMAGE_ENTRIES) {
    if (!byPage.has(entry.pageUrl)) byPage.set(entry.pageUrl, []);
    byPage.get(entry.pageUrl)!.push(entry);
  }

  const urlBlocks = Array.from(byPage.entries())
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
