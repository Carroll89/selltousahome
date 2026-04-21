/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { hartfordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-hartford-ct-2026`;

export const metadata: Metadata = {
  title: 'How to Sell Your House Fast in Hartford CT (2026 Guide)',
  description:
    'Complete guide to selling your Hartford CT home fast in 2026. Cash offers, market data, costs, timeline, and your options explained.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What\'s the fastest way to sell a house in Hartford CT?',
    answer: 'A direct cash sale. USA Home Buyers sends a written offer within 24 hours and can close in 7 days. No repairs, no listing, no financing contingency. Traditional listings in Hartford average 40+ days to get an offer, then another 45-60 days to close.',
  },
  {
    question: 'How much does it cost to sell a house in Hartford CT?',
    answer: 'Traditional sale costs: 5-6% agent commission ($14,000-$17,000 on a $280,000 home), Connecticut conveyance tax (0.75% state + municipal), attorney fees, and any required repairs. On a cash sale to us: $0 — we cover all closing costs.',
  },
  {
    question: 'Should I sell for cash or list with an agent?',
    answer: 'It depends on your situation. If you have time, the property is in good condition, and you want maximum sale price — listing makes sense. If you need speed, certainty, or can\'t afford repairs on Hartford\'s older housing stock (lead paint, old boilers, knob-and-tube), a cash sale typically nets more after factoring in carrying costs and commission.',
  },
];

export default function SellHouseFastHartfordCTGuide() {
  return (
    <>
      <SchemaMarkup schema={[
        hartfordLocalBusinessSchema,
        articleSchema('How to Sell Your House Fast in Hartford CT — 2026 Guide', pageUrl, '2026-04-20'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">Guides</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How to Sell Your House Fast in Hartford CT — 2026 Guide
          </h1>
          <p className="text-blue-100 text-lg">Your options, costs, timeline, and what actually works in Hartford's market right now.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Hartford's Market in 2026</h2>
          <p className="text-gray-700 mb-4">
            Hartford is the #13 hottest housing market in the country according to Realtor.com's March 2026 Hotness Index (score: 92.8/100). The metro median listing price sits around $455,000 — though city properties run significantly lower. That gap between city and suburban values is one of the defining features of the Hartford market.
          </p>
          <p className="text-gray-700 mb-4">
            If you own a property in Hartford city proper — a Frog Hollow triple-decker, a Blue Hills colonial, a Barry Square two-family — the traditional listing process can be frustrating. Many city homes need $15,000-$40,000 in work before conventional lenders will finance them (lead paint compliance alone can run $15,000-$30,000 per unit under Connecticut law). That narrows your buyer pool to cash investors and renovation lenders.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Three Options</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">Option 1: List With a Real Estate Agent</h3>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Timeline: 3-6 months (listing + closing)</li>
                <li>Cost: 5-6% commission + conveyance tax + repairs</li>
                <li>Best for: Move-in-ready homes in desirable areas (West Hartford, Glastonbury)</li>
                <li>Risk: 15-20% of deals fall through; financing contingency on older homes</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">Option 2: Sell For Sale By Owner (FSBO)</h3>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Timeline: Unpredictable — average longer than agent-listed</li>
                <li>Cost: 2-3% buyer's agent commission (still expected) + conveyance tax</li>
                <li>Best for: Sellers with time, marketing skills, and move-in-ready homes</li>
                <li>Risk: Legal exposure without professional guidance in Connecticut</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">Option 3: Sell Directly for Cash (What We Do)</h3>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>Timeline: 7-14 days from offer to closing</li>
                <li>Cost: $0 — we cover all closing costs</li>
                <li>Best for: Properties needing work, estates, foreclosures, tenant situations, time-sensitive sales</li>
                <li>Trade-off: You net 65-78% of FMV instead of 85-92%</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Connecticut-Specific Costs Sellers Should Know</h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li><strong>Conveyance tax:</strong> 0.75% state portion on the first $800,000 (seller pays). Additional rates above $800K. Municipal portion varies.</li>
            <li><strong>Attorney fees:</strong> Connecticut requires an attorney for real estate closings. Expect $500-$1,500.</li>
            <li><strong>Lead paint compliance:</strong> Properties built before 1978 with units occupied by children under 6 require lead-free certification under CGS §47a-54f. Abatement costs: $15,000-$30,000 per unit.</li>
            <li><strong>Agent commission:</strong> 5-6% of sale price (seller typically pays both sides).</li>
            <li><strong>Strict foreclosure:</strong> If you're behind on payments, Connecticut's strict foreclosure process (no auction, Law Day deadline) means time is more valuable here than in most states.</li>
          </ul>
        </section>

        <CashOfferForm variant="inline" headline="Get Your Hartford CT Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/guides/sell-house-fast-hartford-ct-2026" />

        <FAQSection items={FAQ_ITEMS} heading="Hartford CT Home Selling FAQs" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Explore Hartford CT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/hartford-ct', label: 'Hartford CT Market' },
              { href: '/markets/hartford-ct/market-report', label: 'Market Report' },
              { href: '/markets/hartford-ct/neighborhoods', label: 'Neighborhoods' },
              { href: '/markets/hartford-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/hartford-ct/inherited-property', label: 'Inherited Property' },
              { href: '/sell-house-fast-connecticut', label: 'Connecticut Hub' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Hartford CT Home?" sourcePage="/guides/sell-house-fast-hartford-ct-2026" />
      </div>
    </>
  );
}
