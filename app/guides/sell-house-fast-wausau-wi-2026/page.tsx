/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wausauLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-wausau-wi-2026`;

export const metadata: Metadata = {
  title: 'How to Sell Your House Fast in Wausau WI (2026 Guide)',
  description: 'Complete guide to selling your Wausau WI home fast in 2026. Cash offers, market data, costs, timeline, and your options.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What\'s the fastest way to sell in Wausau?', answer: 'A direct cash sale. Written offer in 24 hours, close in 7 days. No repairs, no listing, no financing contingency.' },
  { question: 'How much does it cost to sell in Wausau?', answer: 'Traditional: 5-6% commission ($18K-$22K on $366K), WI transfer fee (0.3%), repairs. Cash sale to us: $0.' },
  { question: 'Should I sell for cash or list?', answer: 'If you have time and the property is move-in ready — listing makes sense. If you need speed, can\'t afford winter repairs, or have complications — cash sale typically nets more after all costs.' },
];

export default function SellHouseFastWausauGuide() {
  return (
    <>
      <SchemaMarkup schema={[wausauLocalBusinessSchema, articleSchema('How to Sell Your House Fast in Wausau WI — 2026 Guide', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">Guides</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell Your House Fast in Wausau WI — 2026 Guide</h1>
          <p className="text-blue-100 text-lg">Your options, costs, and what works in central Wisconsin right now.</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wausau's Market in 2026</h2>
          <p className="text-gray-700 mb-4">Wausau is the #18 hottest housing market nationally (Realtor.com, March 2026). Metro median listing: $366,000. As the economic hub of central Wisconsin and Marathon County seat, Wausau serves a wide surrounding area. The market is hot, but properties with deferred winter maintenance face a narrower buyer pool.</p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Three Options</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">Option 1: List With an Agent</h3>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Timeline: 3-6 months</li><li>Cost: 5-6% commission + transfer fee + repairs</li>
                <li>Best for: Move-in-ready homes</li><li>Risk: 15-20% of deals fall through</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">Option 2: FSBO</h3>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Timeline: Unpredictable</li><li>Cost: Buyer's agent commission + transfer fee</li>
                <li>Best for: Sellers with time and marketing skills</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">Option 3: Sell Directly for Cash</h3>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Timeline: 7-14 days</li><li>Cost: $0</li>
                <li>Best for: Properties needing work, estates, foreclosures, tenant situations</li><li>Trade-off: 65-78% of FMV</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin-Specific Costs</h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li><strong>Transfer fee:</strong> 0.3% ($3/$1,000). Seller pays. On $366K: $1,098.</li>
            <li><strong>Agent commission:</strong> 5-6% ($18,300-$21,960 on $366K).</li>
            <li><strong>Judicial foreclosure:</strong> ~12 months through Marathon County Circuit Court + sheriff sale. WI Statutes Ch. 846.</li>
            <li><strong>Winter maintenance:</strong> Furnace, roof, insulation, ice dam, and moisture repairs common in central WI.</li>
          </ul>
        </section>
        <CashOfferForm variant="inline" headline="Get Your Wausau Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/guides/sell-house-fast-wausau-wi-2026" />
        <FAQSection items={FAQ_ITEMS} heading="Wausau Home Selling FAQs" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/wausau-wi', label: 'Wausau Market' }, { href: '/markets/wausau-wi/market-report', label: 'Market Report' }, { href: '/markets/wausau-wi/neighborhoods', label: 'Neighborhoods' }, { href: '/markets/wausau-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/wausau-wi/inherited-property', label: 'Inherited Property' }, { href: '/sell-house-fast-wisconsin', label: 'Wisconsin Hub' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Wausau Home?" sourcePage="/guides/sell-house-fast-wausau-wi-2026" />
      </div>
    </>
  );
}
