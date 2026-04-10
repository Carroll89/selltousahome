import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog | Selling Your House in Pennsylvania',
  description:
    'Guides, tips, and real talk for Pennsylvania homeowners selling in tough situations. Foreclosure, probate, inherited property, divorce, code violations — we cover it all.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'USA Home Buyers Blog',
  description: 'Guides for Pennsylvania homeowners in tough selling situations.',
  url: `${SITE_URL}/blog`,
  publisher: {
    '@type': 'Organization',
    name: 'USA Home Buyers',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
};

const POSTS = [
  {
    slug: 'sell-inherited-house-pennsylvania',
    title: 'How to Sell an Inherited House in Pennsylvania',
    excerpt:
      'Inheriting a house is equal parts gift and burden. Here\'s what you need to know about probate, taxes, multiple heirs, and selling as-is.',
    date: 'April 9, 2026',
    category: 'Inherited Property',
    readTime: '8 min',
  },
  {
    slug: 'sell-house-with-code-violations-pa',
    title: 'Selling a House With Code Violations in Pennsylvania',
    excerpt:
      'Open permits, point-of-sale inspections, failed systems — code violations don\'t have to stop your sale. Learn how cash buyers handle them.',
    date: 'April 10, 2026',
    category: 'Code Violations',
    readTime: '7 min',
  },
  {
    slug: 'cash-buyer-vs-realtor-pennsylvania',
    title: 'Cash Buyer vs. Realtor in Pennsylvania: What\'s the Real Difference?',
    excerpt:
      'An honest, numbers-based comparison of cash buyers vs. real estate agents in PA. When each option wins — no spin.',
    date: 'April 11, 2026',
    category: 'Comparison',
    readTime: '9 min',
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
  'Education': 'bg-gray-100 text-gray-700',
};

export default function BlogIndexPage() {
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
            Selling a House in Pennsylvania
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Real information for homeowners in tough situations. No fluff, no generic advice — just practical 
            guidance on what actually happens when you sell a Pennsylvania home under pressure.
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
          <p className="text-sm text-gray-600 mb-4">
            We buy houses in Harrisburg PA, Allentown PA, and surrounding communities throughout Central PA and the Lehigh Valley.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/markets/harrisburg-pa" className="text-sm font-medium text-brand-primary hover:underline">
              Harrisburg PA →
            </Link>
            <Link href="/markets/allentown-pa" className="text-sm font-medium text-brand-primary hover:underline">
              Allentown PA →
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
