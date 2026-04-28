import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blog';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.selltousahome.com';

type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

const marketSlugs = [
  'allentown-pa',
  'bethlehem-pa',
  'bloomington-il',
  'boston-ma',
  'bridgeport-ct',
  'champaign-urbana-il',
  'erie-pa',
  'harrisburg-pa',
  'hartford-ct',
  'kenosha-wi',
  'king-of-prussia-pa',
  'lancaster-pa',
  'manchester-nh',
  'new-haven-ct',
  'oshkosh-wi',
  'peoria-il',
  'racine-mount-pleasant-wi',
  'reading-pa',
  'rochester-ny',
  'rockford-il',
  'springfield-il',
  'springfield-ma',
  'state-college-pa',
  'wausau-wi',
  'wilmington-de',
  'worcester-ma',
  'york-pa',
  'youngstown-oh',
];

const marketSubpages = [
  'market-report',
  'inherited-property',
  'foreclosure',
  'divorce-sale',
  'probate',
  'tenant-occupied',
  'code-violations',
  'fire-damage',
  'property-liens',
  'faq',
  'neighborhoods',
];

const cityGuideSlugs = [
  'sell-house-fast-allentown-pa-2026',
  'sell-house-fast-bethlehem-pa-2026',
  'sell-house-fast-bloomington-il-2026',
  'sell-house-fast-boston-ma-2026',
  'sell-house-fast-bridgeport-ct-2026',
  'sell-house-fast-champaign-urbana-il-2026',
  'sell-house-fast-harrisburg-pa-2026',
  'sell-house-fast-hartford-ct-2026',
  'sell-house-fast-kenosha-wi-2026',
  'sell-house-fast-king-of-prussia-pa-2026',
  'sell-house-fast-lancaster-pa-2026',
  'sell-house-fast-manchester-nh-2026',
  'sell-house-fast-new-haven-ct-2026',
  'sell-house-fast-oshkosh-wi-2026',
  'sell-house-fast-peoria-il-2026',
  'sell-house-fast-racine-mount-pleasant-wi-2026',
  'sell-house-fast-rochester-ny-2026',
  'sell-house-fast-rockford-il-2026',
  'sell-house-fast-springfield-il-2026',
  'sell-house-fast-springfield-ma-2026',
  'sell-house-fast-state-college-pa-2026',
  'sell-house-fast-wausau-wi-2026',
  'sell-house-fast-wilmington-de-2026',
  'sell-house-fast-worcester-ma-2026',
  'sell-house-fast-york-pa-2026',
  'sell-house-fast-youngstown-oh-2026',
];

const staticEntries: SitemapEntry[] = [
  { path: '', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/reviews', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/brand-facts', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/press', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/sell-house-fast-pennsylvania', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sell-house-fast-delaware', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sell-house-fast-ohio', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sell-house-fast-massachusetts', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sell-house-fast-wisconsin', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sell-house-fast-new-hampshire', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sell-house-fast-connecticut', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sell-house-fast-new-york', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sell-house-fast-illinois', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/guides', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/guides/behind-on-payments', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/guides/sell-as-is', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/back-taxes', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/foreclosure', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/vacant-property', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/relocation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/inherited-property', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/divorce-sale', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/tenant-occupied', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/hoarding-property', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/selling-parents-house-nursing-home', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides/probate', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/resources/how-much-do-cash-buyers-pay', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/are-cash-home-buyers-legit', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/cash-offer-vs-listing', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/how-the-process-works', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/sell-house-without-repairs', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/how-fast-can-i-sell-for-cash', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/compare/usa-home-buyers-vs-opendoor', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/compare/usa-home-buyers-vs-homevestors', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/compare/usa-home-buyers-vs-listing-with-agent', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: SitemapEntry[] = [
    ...staticEntries,
    ...marketSlugs.flatMap((marketSlug) => [
      { path: `/markets/${marketSlug}`, priority: 1.0, changeFrequency: 'monthly' as const },
      ...marketSubpages.map((subpage) => ({
        path: `/markets/${marketSlug}/${subpage}`,
        priority: subpage === 'faq' || subpage === 'neighborhoods' ? 0.8 : 0.9,
        changeFrequency: 'monthly' as const,
      })),
    ]),
    ...cityGuideSlugs.map((slug) => ({
      path: `/guides/${slug}`,
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    })),
    ...BLOG_POSTS.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: post.datePublished >= '2026-04-20' ? 0.8 : 0.7,
      changeFrequency: 'monthly' as const,
    })),
  ];

  const uniqueEntries = Array.from(
    new Map(entries.map((entry) => [entry.path, entry])).values()
  );

  return uniqueEntries.map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
