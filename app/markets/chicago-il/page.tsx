import type { Metadata } from 'next';
import Link from 'next/link';

import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const canonicalPath = '/sell-my-house-fast-chicago-il';
const canonicalUrl = `${SITE_URL}/sell-my-house-fast-chicago-il`;

export const metadata: Metadata = {
  title: 'Sell My House Fast Chicago IL — Canonical Market Page',
  description:
    'This noindex alias points Chicago IL sellers to the canonical USA Home Buyers cash-offer page at /sell-my-house-fast-chicago-il.',
  alternates: { canonical: canonicalUrl },
  robots: { index: false, follow: true },
};

export default function ChicagoMarketAliasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-sm font-semibold text-brand-primary mb-3">Chicago IL market alias</p>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
        Sell My House Fast Chicago IL
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This /markets/chicago-il page is an alias for our canonical Chicago IL cash-offer page. The primary URL for
        Chicago and Cook County sellers is{' '}
        <Link href={canonicalPath} className="text-brand-primary hover:underline font-semibold">
          {canonicalPath}
        </Link>
        .
      </p>
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-dark mb-2">Continue to the canonical Chicago IL page</h2>
        <p className="text-gray-700 mb-4">
          Use the direct market page for the current offer form, local selling details, FAQs, and canonical search URL.
          This alias is noindex/follow so search engines consolidate signals on the direct route.
        </p>
        <Link
          href={canonicalPath}
          className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-6 py-3 font-bold text-white hover:bg-brand-dark transition"
        >
          Go to the Chicago IL cash-offer page
        </Link>
      </div>
      <p className="text-sm text-gray-600">
        Canonical URL: <span className="font-mono">{canonicalUrl}</span>
      </p>
    </div>
  );
}
