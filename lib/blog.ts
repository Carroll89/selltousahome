/**
 * lib/blog.ts — Blog content registry
 * 
 * Source of truth for all blog post metadata.
 * Existing 3 posts: static TSX in app/blog/[slug]/
 * New posts: rendered via dynamic [slug]/page.tsx using content from this registry
 */

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  datePublished: string;
  category: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  description: string;
  primaryKeyword: string;
  markets: string[];
  /** true = uses static TSX page, false = uses dynamic renderer */
  isStatic?: boolean;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'sell-inherited-house-pennsylvania',
    title: 'How to Sell an Inherited House in Pennsylvania',
    excerpt:
      "Inheriting a house is equal parts gift and burden. Here's what you need to know about probate, taxes, multiple heirs, and selling as-is.",
    date: 'April 9, 2026',
    datePublished: '2026-04-09',
    category: 'Inherited Property',
    readTime: '8 min',
    heroImage: '/images/harrisburg-hero.jpg',
    heroAlt: 'Pennsylvania home — inherited property sale',
    description:
      'Inherited a house in Pennsylvania? Learn your options — sell as-is, probate requirements, tax implications, and how to close fast without family drama.',
    primaryKeyword: 'sell inherited house Pennsylvania',
    markets: ['harrisburg-pa', 'allentown-pa'],
    isStatic: true,
  },
  {
    slug: 'sell-house-with-code-violations-pa',
    title: 'Selling a House With Code Violations in Pennsylvania',
    excerpt:
      "Open permits, point-of-sale inspections, failed systems — code violations don't have to stop your sale. Learn how cash buyers handle them.",
    date: 'April 10, 2026',
    datePublished: '2026-04-10',
    category: 'Code Violations',
    readTime: '7 min',
    heroImage: '/images/harrisburg-hero.jpg',
    heroAlt: 'Pennsylvania house with code violations',
    description:
      'Selling a house with code violations in PA? Cash buyers purchase as-is — no repairs required. Learn about point-of-sale inspections, open permits, and your options.',
    primaryKeyword: 'sell house with code violations Pennsylvania',
    markets: ['harrisburg-pa', 'allentown-pa'],
    isStatic: true,
  },
  {
    slug: 'cash-buyer-vs-realtor-pennsylvania',
    title: "Cash Buyer vs. Realtor in Pennsylvania: What's the Real Difference?",
    excerpt:
      'An honest, numbers-based comparison of cash buyers vs. real estate agents in PA. When each option wins — no spin.',
    date: 'April 11, 2026',
    datePublished: '2026-04-11',
    category: 'Comparison',
    readTime: '9 min',
    heroImage: '/images/harrisburg-hero.jpg',
    heroAlt: 'Comparing cash buyer vs realtor in Pennsylvania',
    description:
      'Cash buyer or realtor — which gets you more in Pennsylvania? Real numbers, real timelines, and an honest breakdown of when each option makes sense.',
    primaryKeyword: 'cash buyer vs realtor Pennsylvania',
    markets: ['harrisburg-pa'],
    isStatic: true,
  },
  {
    slug: 'probate-timeline-pennsylvania',
    title: 'How Long Does Probate Take in Pennsylvania? County-by-County Breakdown',
    excerpt:
      'Pennsylvania probate takes 9-18 months for simple estates. Here\'s what actually drives the timeline — and how to sell a house before probate closes.',
    date: 'April 15, 2026',
    datePublished: '2026-04-15',
    category: 'Probate',
    readTime: '7 min',
    heroImage: '/images/harrisburg-hero.jpg',
    heroAlt: 'Pennsylvania probate courthouse — Dauphin County Register of Wills',
    description:
      'How long does probate take in Pennsylvania? County-by-county breakdown of timelines, what drives delays, and how to sell a house during or after probate.',
    primaryKeyword: 'how long does probate take in Pennsylvania',
    markets: ['harrisburg-pa', 'lancaster-pa'],
    isStatic: false,
  },
  {
    slug: 'closing-costs-selling-house-pennsylvania',
    title: 'What Are Closing Costs When Selling a House in PA? [2026 Numbers]',
    excerpt:
      'Real closing cost numbers for Pennsylvania sellers in 2026. Transfer taxes, agent commissions, title fees — here\'s what actually comes out of your check.',
    date: 'April 16, 2026',
    datePublished: '2026-04-16',
    category: 'Education',
    readTime: '8 min',
    heroImage: '/images/harrisburg-hero.jpg',
    heroAlt: 'Pennsylvania home sale closing costs breakdown',
    description:
      'What are closing costs when selling a house in PA? Real 2026 numbers — transfer tax, commissions, title fees, and how cash buyers handle costs differently.',
    primaryKeyword: 'closing costs selling house Pennsylvania',
    markets: ['harrisburg-pa'],
    isStatic: false,
  },
  {
    slug: 'sell-house-foreclosure-pennsylvania',
    title: 'Can You Sell a House in Foreclosure in Pennsylvania?',
    excerpt:
      "Yes — up until the sheriff's sale. Pennsylvania's 12-24 month judicial foreclosure process gives you time to sell. Here's exactly how it works.",
    date: 'April 17, 2026',
    datePublished: '2026-04-17',
    category: 'Foreclosure',
    readTime: '8 min',
    heroImage: '/images/harrisburg-hero.jpg',
    heroAlt: 'Pennsylvania home in foreclosure — sell before sheriff sale',
    description:
      "Can you sell a house in foreclosure in Pennsylvania? Yes — right up until the sheriff's sale. Learn how to stop foreclosure with a fast sale.",
    primaryKeyword: 'sell house in foreclosure Pennsylvania',
    markets: ['harrisburg-pa'],
    isStatic: false,
  },
  {
    slug: 'sell-house-tax-lien-pennsylvania',
    title: 'Selling a House with a Tax Lien in PA: Your Options',
    excerpt:
      "A tax lien doesn't mean you can't sell — it means the lien gets paid at closing. Here's how federal, state, and local liens work in Pennsylvania.",
    date: 'April 18, 2026',
    datePublished: '2026-04-18',
    category: 'Education',
    readTime: '7 min',
    heroImage: '/images/harrisburg-hero.jpg',
    heroAlt: 'Pennsylvania property with tax lien — selling options',
    description:
      'Selling a house with a tax lien in PA? Federal, state, and local liens all get paid at closing. Learn your options and how cash buyers simplify the process.',
    primaryKeyword: 'sell house with tax lien Pennsylvania',
    markets: ['harrisburg-pa'],
    isStatic: false,
  },
];

/** Get all posts sorted by date (newest first) */
export function getAllPosts(): BlogPostMeta[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

/** Get a single post by slug */
export function getPostMeta(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Get slugs for dynamic posts only (used for generateStaticParams) */
export function getDynamicPostSlugs(): string[] {
  return BLOG_POSTS.filter((p) => !p.isStatic).map((p) => p.slug);
}
