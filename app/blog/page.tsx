import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { SITE_URL } from '@/lib/utils';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Sell Your House Fast Resources',
  description:
    'Guides, market updates, and real talk for homeowners selling in tough situations across USA Home Buyers markets. Foreclosure, probate, inherited property, divorce, cash offers, and local housing data.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'USA Home Buyers Blog',
  description: 'Guides for homeowners in tough selling situations across USA Home Buyers markets.',
  url: `${SITE_URL}/blog`,
  publisher: {
    '@type': 'Organization',
    name: 'USA Home Buyers',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
};

const POSTS = getAllPosts();

const MARKET_GROUPS = [
  {
    state: 'Pennsylvania',
    markets: [
      { label: 'Allentown PA', href: '/markets/allentown-pa' },
      { label: 'Bethlehem PA', href: '/markets/bethlehem-pa' },
      { label: 'Erie PA', href: '/markets/erie-pa' },
      { label: 'Harrisburg PA', href: '/markets/harrisburg-pa' },
      { label: 'King of Prussia PA', href: '/markets/king-of-prussia-pa' },
      { label: 'Lancaster PA', href: '/markets/lancaster-pa' },
      { label: 'Reading PA', href: '/markets/reading-pa' },
      { label: 'State College PA', href: '/markets/state-college-pa' },
      { label: 'York PA', href: '/markets/york-pa' },
      { label: 'Chambersburg PA', href: '/markets/chambersburg-pa' },
    ],
  },
  {
    state: 'Connecticut',
    markets: [
      { label: 'Bridgeport CT', href: '/markets/bridgeport-ct' },
      { label: 'Hartford CT', href: '/markets/hartford-ct' },
      { label: 'New Haven CT', href: '/markets/new-haven-ct' },
      { label: 'Waterbury CT', href: '/markets/waterbury-ct' },
    ],
  },
  {
    state: 'Delaware',
    markets: [{ label: 'Wilmington DE', href: '/markets/wilmington-de' }],
  },
  {
    state: 'Illinois',
    markets: [
      { label: 'Bloomington IL', href: '/markets/bloomington-il' },
      { label: 'Champaign-Urbana IL', href: '/markets/champaign-urbana-il' },
      { label: 'Peoria IL', href: '/markets/peoria-il' },
      { label: 'Rockford IL', href: '/markets/rockford-il' },
      { label: 'Springfield IL', href: '/markets/springfield-il' },
    ],
  },
  {
    state: 'Massachusetts',
    markets: [
      { label: 'Boston MA', href: '/markets/boston-ma' },
      { label: 'Springfield MA', href: '/markets/springfield-ma' },
      { label: 'Worcester MA', href: '/markets/worcester-ma' },
    ],
  },
  {
    state: 'New Hampshire',
    markets: [{ label: 'Manchester NH', href: '/markets/manchester-nh' }],
  },
  {
    state: 'New York',
    markets: [{ label: 'Rochester NY', href: '/markets/rochester-ny' }],
  },
  {
    state: 'Ohio',
    markets: [{ label: 'Youngstown OH', href: '/markets/youngstown-oh' }],
  },
  {
    state: 'Wisconsin',
    markets: [
      { label: 'Kenosha WI', href: '/markets/kenosha-wi' },
      { label: 'Oshkosh WI', href: '/markets/oshkosh-wi' },
      { label: 'Racine / Mount Pleasant WI', href: '/markets/racine-mount-pleasant-wi' },
      { label: 'Wausau WI', href: '/markets/wausau-wi' },
      { label: 'Madison WI', href: '/markets/madison-wi' },
      { label: 'Green Bay WI', href: '/markets/green-bay-wi' },
    ],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Inherited Property': 'bg-purple-100 text-purple-700',
  'Code Violations': 'bg-orange-100 text-orange-700',
  'Comparison': 'bg-blue-100 text-blue-700',
  'Foreclosure': 'bg-red-100 text-red-700',
  'Probate': 'bg-amber-100 text-amber-700',
  'Divorce': 'bg-pink-100 text-pink-700',
  'Market Report': 'bg-green-100 text-green-700',
  'Market Guide': 'bg-emerald-100 text-emerald-700',
  'Process': 'bg-indigo-100 text-indigo-700',
  'Education': 'bg-gray-100 text-gray-700',
};

export default async function BlogIndexPage() {
  return (
    <>
      <SchemaMarkup schema={[blogSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Selling a House Fast — Market Guides & Seller Resources
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Real information for homeowners in tough situations. No fluff, no generic advice — just practical
            guidance on cash offers, local market conditions, probate, foreclosure, divorce, and as-is sales.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Featured post */}
        {POSTS.length > 0 && (
          <div className="mb-10">
            <Link href={`/blog/${POSTS[0].slug}`} className="block group">
              <div className="border border-gray-200 rounded-2xl p-8 hover:border-brand-primary transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${CATEGORY_COLORS[POSTS[0].category] || 'bg-gray-100 text-gray-600'}`}>
                    {POSTS[0].category}
                  </span>
                  <span className="text-xs text-gray-400">{POSTS[0].date}</span>
                  <span className="text-xs text-gray-400">· {POSTS[0].readTime} read</span>
                </div>
                <h2 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                  {POSTS[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{POSTS[0].excerpt}</p>
                <p className="text-brand-primary text-sm font-medium mt-4">Read article →</p>
              </div>
            </Link>
          </div>
        )}

        {/* Post grid */}
        {POSTS.length > 1 && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {POSTS.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="border border-gray-200 rounded-xl p-6 h-full hover:border-brand-primary transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${CATEGORY_COLORS[post.category] || 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <p className="text-brand-primary text-sm font-medium mt-4">Read → {post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Topic navigation */}
        <div className="border-t border-gray-100 pt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-6">Browse by Situation</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'Inherited Property', href: '/guides/inherited-property' },
              { label: 'Foreclosure', href: '/guides/foreclosure' },
              { label: 'Probate', href: '/guides/probate' },
              { label: 'Divorce Sale', href: '/guides/divorce-sale' },
              { label: 'Back Taxes', href: '/guides/back-taxes' },
              { label: 'Selling As-Is', href: '/guides/sell-as-is' },
              { label: 'Tenant-Occupied', href: '/guides/tenant-occupied' },
              { label: 'Nursing Home / Elder Care', href: '/guides/selling-parents-house-nursing-home' },
              { label: 'Vacant Property', href: '/guides/vacant-property' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm border border-gray-200 rounded-lg px-4 py-3 hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* Market links */}
        <div className="mt-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-brand-dark mb-3">Our Markets</h2>
          <p className="text-sm text-gray-600 mb-5">
            We buy houses across a growing list of local markets throughout the Northeast, Midwest, and Mid-Atlantic. Start with a local market page or read the latest seller guide for your city.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MARKET_GROUPS.map((group) => (
              <div key={group.state}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  {group.state}
                </h3>
                <div className="flex flex-col gap-2">
                  {group.markets.map((market) => (
                    <Link
                      key={market.href}
                      href={market.href}
                      className="text-sm font-medium text-brand-primary hover:underline"
                    >
                      {market.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
