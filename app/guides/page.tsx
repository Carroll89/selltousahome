import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Free Seller Guides — Sell Your House Fast | USA Home Buyers',
  description:
    'Free seller guides for homeowners across PA, DE, OH, MA, WI, NH, CT, NY, and IL. Learn how to sell your house fast for cash — by market or by your situation.',
  alternates: { canonical: `${SITE_URL}/guides` },
};

const marketGuides = [
  // Pennsylvania
  { href: '/guides/sell-house-fast-harrisburg-pa-2026', label: 'Harrisburg, PA' },
  { href: '/guides/sell-house-fast-allentown-pa-2026', label: 'Allentown, PA' },
  { href: '/guides/sell-house-fast-bethlehem-pa-2026', label: 'Bethlehem, PA' },
  { href: '/guides/sell-house-fast-king-of-prussia-pa-2026', label: 'King of Prussia, PA' },
  { href: '/guides/sell-house-fast-lancaster-pa-2026', label: 'Lancaster, PA' },
  { href: '/guides/sell-house-fast-state-college-pa-2026', label: 'State College, PA' },
  { href: '/guides/sell-house-fast-york-pa-2026', label: 'York, PA' },
  // Delaware
  { href: '/guides/sell-house-fast-wilmington-de-2026', label: 'Wilmington, DE' },
  // Ohio
  { href: '/guides/sell-house-fast-youngstown-oh-2026', label: 'Youngstown, OH' },
  // Massachusetts
  { href: '/guides/sell-house-fast-springfield-ma-2026', label: 'Springfield, MA' },
  { href: '/guides/sell-house-fast-worcester-ma-2026', label: 'Worcester, MA' },
  // Wisconsin
  { href: '/guides/sell-house-fast-kenosha-wi-2026', label: 'Kenosha, WI' },
  { href: '/guides/sell-house-fast-racine-mount-pleasant-wi-2026', label: 'Racine & Mount Pleasant, WI' },
  { href: '/guides/sell-house-fast-oshkosh-wi-2026', label: 'Oshkosh, WI' },
  // New Hampshire
  { href: '/guides/sell-house-fast-manchester-nh-2026', label: 'Manchester, NH' },
  // Connecticut
  { href: '/guides/sell-house-fast-bridgeport-ct-2026', label: 'Bridgeport, CT' },
  { href: '/guides/sell-house-fast-new-haven-ct-2026', label: 'New Haven, CT' },
  // New York
  { href: '/guides/sell-house-fast-rochester-ny-2026', label: 'Rochester, NY' },
  // Illinois
  { href: '/guides/sell-house-fast-springfield-il-2026', label: 'Springfield, IL' },
  { href: '/guides/sell-house-fast-rockford-il-2026', label: 'Rockford, IL' },
  { href: '/guides/sell-house-fast-peoria-il-2026', label: 'Peoria, IL' },
  { href: '/guides/sell-house-fast-bloomington-il-2026', label: 'Bloomington, IL' },
  { href: '/guides/sell-house-fast-champaign-urbana-il-2026', label: 'Champaign-Urbana, IL' },
];

const situationGuides = [
  { href: '/guides/foreclosure', label: 'Facing Foreclosure' },
  { href: '/guides/probate', label: 'Probate Sale' },
  { href: '/guides/divorce-sale', label: 'Divorce Sale' },
  { href: '/guides/inherited-property', label: 'Inherited Property' },
  { href: '/guides/back-taxes', label: 'Behind on Taxes' },
  { href: '/guides/behind-on-payments', label: 'Behind on Payments' },
  { href: '/guides/sell-as-is', label: 'Sell As-Is' },
  { href: '/guides/vacant-property', label: 'Vacant Property' },
  { href: '/guides/tenant-occupied', label: 'Tenant-Occupied Property' },
  { href: '/guides/hoarding-property', label: 'Hoarding / Major Clutter' },
  { href: '/guides/relocation', label: 'Relocation Sale' },
  { href: '/guides/selling-parents-house-nursing-home', label: "Selling a Parent’s House (Nursing Home)" },
];

export default function GuidesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Free Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Seller Guides</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about selling your house fast for cash — whether you&apos;re in a
            specific market or dealing with a challenging situation. No fluff, no jargon.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-14 space-y-16">
        {/* Section 1: Market Guides */}
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Seller Guides by Market</h2>
          <p className="text-gray-500 mb-8">
            Local market guides covering home values, days on market, and how to sell fast for cash
            in your city.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {marketGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-brand-primary transition-all"
              >
                <span className="text-brand-primary text-xl">📍</span>
                <span className="font-medium text-gray-800 group-hover:text-brand-primary transition-colors">
                  {guide.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: Situation Guides */}
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Guides by Situation</h2>
          <p className="text-gray-500 mb-8">
            Dealing with something specific? These guides walk through your exact situation — the
            timeline, your options, and what to watch out for.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {situationGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-brand-primary transition-all"
              >
                <span className="text-brand-primary text-xl">📖</span>
                <span className="font-medium text-gray-800 group-hover:text-brand-primary transition-colors">
                  {guide.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">
              Ready to Get a Cash Offer?
            </h2>
            <p className="text-gray-600 mb-4">
              You&apos;ve done the research. Now let us make you an offer — no obligation, no fees, no
              repairs needed. We close on your timeline.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                'No repairs or cleaning required',
                'Close in as little as 7 days',
                'We pay all closing costs',
                'No agent commissions',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-brand-secondary font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <CashOfferForm variant="inline" />
        </section>
      </div>
    </>
  );
}
