import Link from 'next/link';
import { getPostsForMarket } from '@/lib/blog';

const STATE_HUBS: Record<string, { href: string; label: string }> = {
  pa: { href: '/sell-house-fast-pennsylvania', label: 'Pennsylvania seller resources' },
  de: { href: '/sell-house-fast-delaware', label: 'Delaware seller resources' },
  oh: { href: '/sell-house-fast-ohio', label: 'Ohio seller resources' },
  ma: { href: '/sell-house-fast-massachusetts', label: 'Massachusetts seller resources' },
  wi: { href: '/sell-house-fast-wisconsin', label: 'Wisconsin seller resources' },
  nh: { href: '/sell-house-fast-new-hampshire', label: 'New Hampshire seller resources' },
  ct: { href: '/sell-house-fast-connecticut', label: 'Connecticut seller resources' },
  ny: { href: '/sell-house-fast-new-york', label: 'New York seller resources' },
  il: { href: '/sell-house-fast-illinois', label: 'Illinois seller resources' },
  in: { href: '/sell-house-fast-indiana', label: 'Indiana seller resources' },
};

function getStateHub(marketSlug: string) {
  const state = marketSlug.split('-').at(-1) ?? '';
  return STATE_HUBS[state];
}

interface BlogClusterLinksProps {
  marketSlug: string;
  cityName: string;
}

export function BlogClusterLinks({ marketSlug, cityName }: BlogClusterLinksProps) {
  const allPosts = getPostsForMarket(marketSlug);
  const cityFirst = allPosts.filter((p) => p.markets[0] === marketSlug);
  const others = allPosts.filter((p) => p.markets[0] !== marketSlug);
  const posts = [...cityFirst, ...others].slice(0, 4);
  const stateHub = getStateHub(marketSlug);
  if (posts.length === 0 && !stateHub) return null;

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-brand-dark mb-4">Resources for {cityName} Sellers</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex items-center gap-2 text-brand-primary hover:underline font-medium"
            >
              <span className="text-brand-secondary">→</span>
              {post.title}
            </Link>
          </li>
        ))}
        {stateHub && (
          <li>
            <Link
              href={stateHub.href}
              className="flex items-center gap-2 text-brand-primary hover:underline font-medium"
            >
              <span className="text-brand-secondary">→</span>
              {stateHub.label}
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
