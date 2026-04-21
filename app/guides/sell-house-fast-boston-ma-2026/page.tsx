/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bostonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-boston-ma-2026`;

export const metadata: Metadata = {
  title: 'How to Sell Your House Fast in Boston MA (2026 Guide)',
  description: 'Complete guide to selling your Boston home fast in 2026. Cash offers, market data, closing costs, timeline, and your options explained.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What\'s the fastest way to sell in Boston?', answer: 'A direct cash sale. USA Home Buyers sends a written offer within 24 hours and closes in 7 days. No repairs, no listing, no financing contingency.' },
  { question: 'How much does it cost to sell in Boston?', answer: 'Traditional: 5-6% commission ($41K-$50K on $829K), deed excise stamps ($3,780), attorney fees, repairs. Cash sale to us: $0 — we cover everything.' },
  { question: 'Should I sell for cash or list?', answer: 'If you have time and the property is move-in ready — listing makes sense. If you need speed, can\'t afford repairs on Boston\'s older housing stock, or have tenant/estate/foreclosure complications — cash sale typically nets more after all costs.' },
];

export default function SellHouseFastBostonGuide() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, articleSchema('How to Sell Your House Fast in Boston MA — 2026 Guide', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">Guides</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell Your House Fast in Boston MA — 2026 Guide</h1>
          <p className="text-blue-100 text-lg">Your options, costs, and what works in Boston's market right now.</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Boston's Market in 2026</h2>
          <p className="text-gray-700 mb-4">Boston is the #15 hottest housing market nationally (Realtor.com, March 2026). Metro median listing: $829,000. But Boston is deeply neighborhood-dependent — a Mattapan triple-decker and a Back Bay brownstone exist in different price universes.</p>
          <p className="text-gray-700">For properties needing work, the traditional listing process often fails. Lead paint compliance ($8K-$15K/unit), old systems, structural issues — conventional lenders won't finance, so your buyer pool shrinks to cash investors. A direct cash sale may net you more after accounting for commission, repairs, and carrying costs.</p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Three Options</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">Option 1: List With an Agent</h3>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Timeline: 3-6 months</li><li>Cost: 5-6% commission + deed excise stamps + repairs</li>
                <li>Best for: Move-in-ready homes in hot neighborhoods</li><li>Risk: 15-20% of deals fall through</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">Option 2: FSBO</h3>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Timeline: Unpredictable</li><li>Cost: Still need buyer's agent commission + stamps</li>
                <li>Best for: Sellers with time and marketing skills</li><li>Risk: Legal exposure in MA attorney-state</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">Option 3: Sell Directly for Cash</h3>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Timeline: 7-14 days</li><li>Cost: $0 — we cover everything</li>
                <li>Best for: Properties needing work, estates, foreclosures, tenant situations</li><li>Trade-off: 65-78% of FMV instead of 85-92%</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Massachusetts-Specific Costs</h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li><strong>Deed excise stamps:</strong> $4.56 per $1,000 (seller pays). On $829K: $3,780.</li>
            <li><strong>Attorney fees:</strong> MA requires an attorney at closing. Expect $1,000-$2,500.</li>
            <li><strong>Lead paint compliance:</strong> MGL Ch. 111 §197A. Deleading: $8,000-$15,000 per unit.</li>
            <li><strong>Agent commission:</strong> 5-6% ($41K-$50K on $829K).</li>
            <li><strong>Non-judicial foreclosure:</strong> MGL Ch. 244 — lender can foreclose by power of sale in 4-7 months.</li>
          </ul>
        </section>
        <CashOfferForm variant="inline" headline="Get Your Boston Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/guides/sell-house-fast-boston-ma-2026" />
        <FAQSection items={FAQ_ITEMS} heading="Boston Home Selling FAQs" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/boston-ma', label: 'Boston Market' }, { href: '/markets/boston-ma/market-report', label: 'Market Report' }, { href: '/markets/boston-ma/neighborhoods', label: 'Neighborhoods' }, { href: '/markets/boston-ma/foreclosure', label: 'Foreclosure' }, { href: '/markets/boston-ma/inherited-property', label: 'Inherited Property' }, { href: '/sell-house-fast-massachusetts', label: 'Massachusetts Hub' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Boston Home?" sourcePage="/guides/sell-house-fast-boston-ma-2026" />
      </div>
    </>
  );
}
