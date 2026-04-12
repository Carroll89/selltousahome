import Link from 'next/link';

const MARKET_BLOGS: Record<string, Array<{ title: string; href: string }>> = {
  'harrisburg-pa': [
    { title: 'How to Sell an Inherited House in Pennsylvania', href: '/blog/sell-inherited-house-pennsylvania' },
    { title: 'Selling a House With Code Violations in Pennsylvania', href: '/blog/sell-house-with-code-violations-pa' },
    { title: 'Cash Buyer vs. Realtor in Pennsylvania: What\'s the Real Difference?', href: '/blog/cash-buyer-vs-realtor-pennsylvania' },
  ],
  'allentown-pa': [
    { title: 'How to Sell an Inherited House in Pennsylvania', href: '/blog/sell-inherited-house-pennsylvania' },
    { title: 'Selling a House With Code Violations in Pennsylvania', href: '/blog/sell-house-with-code-violations-pa' },
    { title: 'Cash Buyer vs. Realtor in Pennsylvania: What\'s the Real Difference?', href: '/blog/cash-buyer-vs-realtor-pennsylvania' },
  ],
  'reading-pa': [
    { title: 'How to Sell an Inherited House in Pennsylvania', href: '/blog/sell-inherited-house-pennsylvania' },
    { title: 'Selling a House With Code Violations in Pennsylvania', href: '/blog/sell-house-with-code-violations-pa' },
    { title: 'Cash Buyer vs. Realtor in Pennsylvania: What\'s the Real Difference?', href: '/blog/cash-buyer-vs-realtor-pennsylvania' },
  ],
  'king-of-prussia-pa': [
    { title: 'How to Sell an Inherited House in Pennsylvania', href: '/blog/sell-inherited-house-pennsylvania' },
    { title: 'Selling a House With Code Violations in Pennsylvania', href: '/blog/sell-house-with-code-violations-pa' },
    { title: 'Cash Buyer vs. Realtor in Pennsylvania: What\'s the Real Difference?', href: '/blog/cash-buyer-vs-realtor-pennsylvania' },
  ],
  'state-college-pa': [
    { title: 'How to Sell an Inherited House in Pennsylvania', href: '/blog/sell-inherited-house-pennsylvania' },
    { title: 'Selling a House With Code Violations in Pennsylvania', href: '/blog/sell-house-with-code-violations-pa' },
    { title: 'Cash Buyer vs. Realtor in Pennsylvania: What\'s the Real Difference?', href: '/blog/cash-buyer-vs-realtor-pennsylvania' },
  ],
};

interface BlogClusterLinksProps {
  marketSlug: string;
  cityName: string;
}

export function BlogClusterLinks({ marketSlug, cityName }: BlogClusterLinksProps) {
  const posts = MARKET_BLOGS[marketSlug];
  if (!posts || posts.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-brand-dark mb-4">Resources for {cityName} Sellers</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.href}>
            <Link
              href={post.href}
              className="flex items-center gap-2 text-brand-primary hover:underline font-medium"
            >
              <span className="text-brand-secondary">→</span>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
