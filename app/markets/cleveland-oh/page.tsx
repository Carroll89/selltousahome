import type { Metadata } from 'next';
import Link from 'next/link';

import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const canonicalPath = '/sell-my-house-fast-cleveland-oh';
const canonicalUrl = `${SITE_URL}/sell-my-house-fast-cleveland-oh`;

export const metadata: Metadata = {
  title: 'Sell My House Fast Cleveland OH — Canonical Market Page',
  description:
    'This noindex alias points Cleveland OH sellers to the canonical USA Home Buyers cash-offer page at /sell-my-house-fast-cleveland-oh.',
  alternates: { canonical: canonicalUrl },
  robots: { index: false, follow: true },
};

export default function ClevelandMarketAliasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-sm font-semibold text-brand-primary mb-3">Cleveland OH market alias</p>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
        Sell My House Fast Cleveland OH
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This /markets/cleveland-oh page is an alias for our canonical Cleveland OH cash-offer page. The primary URL for
        Cleveland and Cuyahoga County sellers is{' '}
        <Link href={canonicalPath} className="text-brand-primary hover:underline font-semibold">
          {canonicalPath}
        </Link>
        .
      </p>
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-brand-dark mb-2">Continue to the canonical Cleveland OH page</h2>
        <p className="text-gray-700 mb-4">
          Use the direct market page for the current offer form, local selling details, FAQs, and canonical search URL.
          This alias is noindex/follow so search engines consolidate signals on the direct route.
        </p>
        <Link
          href={canonicalPath}
          className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-6 py-3 font-bold text-white hover:bg-brand-dark transition"
        >
          Go to the Cleveland OH cash-offer page
        </Link>
      </div>
      <p className="text-sm text-gray-600">
        Canonical URL: <span className="font-mono">{canonicalUrl}</span>
      </p>
    </div>
  );
}
