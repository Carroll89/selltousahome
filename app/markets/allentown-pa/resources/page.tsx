import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Allentown PA Seller Resources — Guides, Market Data & Situation Help',
  description:
    'Allentown-specific seller resources: market report, situation guides for foreclosure, divorce, inherited property, probate, code violations, tenant-occupied homes, and the 2026 market guide.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa/resources` },
};

const SITUATION_PAGES = [
  {
    href: '/markets/allentown-pa/foreclosure',
    label: 'Facing Foreclosure',
    desc: 'Sell before the Lehigh County sheriff sale. We close in 7–14 days to protect your equity.',
    icon: '🏚️',
  },
  {
    href: '/markets/allentown-pa/inherited-property',
    label: 'Inherited Property',
    desc: 'Estate sales, out-of-state heirs, and probate complications — we handle them all.',
    icon: '🗝️',
  },
  {
    href: '/markets/allentown-pa/probate',
    label: 'Probate Property',
    desc: 'We work around Lehigh County probate timelines and coordinate with the Register of Wills.',
    icon: '⚖️',
  },
  {
    href: '/markets/allentown-pa/divorce-sale',
    label: 'Divorce Sale',
    desc: 'A cash sale closes fast so both spouses can move forward without months of showings.',
    icon: '📋',
  },
  {
    href: '/markets/allentown-pa/code-violations',
    label: 'Code Violations / Serious Disrepair',
    desc: 'City citations, condemned properties, or homes the city has flagged — we buy them as-is.',
    icon: '🔧',
  },
  {
    href: '/markets/allentown-pa/tenant-occupied',
    label: 'Tenant-Occupied Property',
    desc: 'No eviction required. We buy tenant-occupied rentals in Allentown — a city that\'s 58% renter-occupied.',
    icon: '🏘️',
  },
];

const RESOURCE_LINKS = [
  {
    href: '/guides/sell-house-fast-allentown-pa-2026',
    label: 'Allentown Seller Guide 2026',
    desc: 'Complete guide to selling fast in Allentown — cash buyers vs. agents, real Lehigh Valley numbers, and your options.',
    badge: 'Guide',
  },
  {
    href: '/markets/allentown-pa/market-report',
    label: 'Allentown Monthly Market Report',
    desc: 'Current market data: median prices, days on market, cash offer ranges, and Lehigh County trends.',
    badge: 'Market Data',
  },
  {
    href: '/blog/allentown-pa-sell-house-fast-2026',
    label: 'Sell Your House Fast in Allentown PA (2026)',
    desc: "Allentown's hot market averages 6 offers on updated homes — but the South Side tells a different story.",
    badge: 'Article',
  },
  {
    href: '/resources/cash-offer-vs-listing',
    label: 'Cash Offer vs. Listing — Full Comparison',
    desc: 'Side-by-side numbers for Allentown: what you net with a cash buyer vs. listing with an agent after commissions, repairs, and closing costs.',
    badge: 'Comparison',
  },
  {
    href: '/blog/sell-flood-damaged-house-allentown-pa',
    label: 'Selling a Flood-Damaged House in Allentown PA',
    desc: 'Jordan Creek and Little Lehigh flood zones, PA disclosure requirements, FEMA lookup, and why cash buyers can simplify the sale.',
    badge: 'Article',
  },
];

export default function AllentownResourcesPage() {
  const schema = articleSchema(
    'Allentown PA Seller Resources — Guides, Market Data & Situation Help',
    `${SITE_URL}/markets/allentown-pa/resources`,
    '2026-04-30',
    '2026-04-30',
  );

  return (
    <>
      <SchemaMarkup schema={[schema]} />

      {/* Header */}
      <section className="bg-brand-dark text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/allentown-pa" className="hover:text-white transition-colors">
              ← Back to Allentown, PA
            </Link>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Allentown PA Seller Resources
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Everything you need if you&apos;re selling a home in Allentown or Lehigh County — market data,
            situation-specific guides, and local articles. No generic content from other markets.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Market Resources */}
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Allentown Market Guides &amp; Reports</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {RESOURCE_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-white border border-gray-200 hover:border-brand-primary hover:shadow-md rounded-xl p-5 transition group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-brand-primary group-hover:underline leading-snug">{item.label}</p>
                  <span className="shrink-0 text-xs font-medium bg-blue-50 text-brand-primary px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Situation Pages */}
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Your Situation in Allentown</h2>
          <p className="text-gray-600 mb-6">
            Select the page that matches your situation for Allentown-specific information, timelines, and options.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITUATION_PAGES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition"
              >
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="font-semibold text-brand-primary mb-1">{item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Get Offer */}
        <section className="bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-2 text-center">Ready to Get Your Allentown Cash Offer?</h2>
          <p className="text-gray-600 text-center mb-8">No obligation. Written offer in 24 hours. Close in as few as 7 days.</p>
          <CashOfferForm variant="inline" sourcePage="/markets/allentown-pa/resources" />
        </section>

        {/* Breadcrumb footer nav */}
        <nav className="text-sm text-gray-500 border-t pt-6">
          <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Allentown, PA</Link>
          <span className="mx-2">›</span>
          <span>Seller Resources</span>
        </nav>
      </div>
    </>
  );
}
