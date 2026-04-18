/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { wilmingtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/market-report`;

export const metadata: Metadata = {
  title: 'Wilmington DE Housing Market 2026',
  description:
    'Wilmington DE housing market data 2026: median prices, days on market, neighborhoods, transfer tax. Wilmington city and New Castle County real estate trends.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: "Is Wilmington DE a buyer's or seller's market in 2026?",
    answer: "Wilmington DE is a somewhat competitive market. According to Redfin (March 2026), Wilmington has a Compete Score of 59/100. Homes are selling at 98.7% of list price with a median of 61 days on market. That 61-day DOM is significantly longer than most PA markets — reflecting a buyer pool that negotiates carefully on aging urban housing stock.",
  },
  {
    question: 'What is the average home price in Wilmington DE?',
    answer: "Wilmington's median sale price is $251,200 (Redfin, March 2026), up 12.1% year-over-year. The Zillow ZHVI for the broader area is $326,763 (+3.0% YoY). The price discrepancy reflects Redfin's city-limits transaction data versus Zillow's broader geographic index that includes surrounding suburbs at higher price points.",
  },
  {
    question: 'What neighborhoods in Wilmington are most affordable?',
    answer: "Southbridge and West Side Wilmington have the lowest median prices — typically $100,000-$200,000 — with very high investor activity. West Center City has seen the fastest appreciation (+24.6% YoY as of late 2024, Redfin). Quaker Hill runs around $271,655 median. Trolley Square and Downtown Riverfront are the most expensive pockets at $350,000+.",
  },
  {
    question: 'What is the real estate transfer tax in Wilmington DE?',
    answer: "Wilmington DE has a 4% total transfer tax — 2.5% Delaware state tax plus 1.5% City of Wilmington local tax. By convention, buyer and seller split it 50/50, each paying 2%. On a $210,000 home, the total is $8,400. This is the highest transfer tax rate in Delaware (New Castle County overall = 4%; Kent County = 3%; Sussex County = 3.5%). Source: Delaware Division of Revenue (financefiles.delaware.gov); newcastlede.gov/138.",
  },
];

export default function WilmingtonMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        wilmingtonLocalBusinessSchema,
        articleSchema('Wilmington DE Housing Market Report 2026 — New Castle County', pageUrl, '2026-04-13', '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer: Wilmington DE Housing Market 2026</h2>
          <p className="text-gray-700 text-sm leading-relaxed">According to Redfin (March 2026), Wilmington's median home sale price is $251,200 (+12.1% year-over-year), with a median 61 days on market and a Redfin Compete Score of 59/100 ('Somewhat Competitive'). The Zillow Home Value Index shows $326,763 (+3.0% year-over-year) — the gap between Redfin's sale price and Zillow's ZHVI reflects Wilmington's mix of city-limit and suburban New Castle County properties. Delaware's total transfer tax is 4% (2.5% state + 1.5% city of Wilmington). Cash buyers cover all closing costs and close in 7–14 days as-is.</p>
        </div>

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/markets/wilmington-de" className="hover:text-brand-primary">Wilmington DE</Link>
          {' › '}
          <span>Market Report</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Wilmington DE Housing Market Report — 2026
        </h1>
        <p className="text-gray-600 text-sm mb-8">Market data last updated: April 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Stats</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['Median sale price — Wilmington City', '$251,200', 'Redfin, Mar 2026'],
                  ['YoY change — sale price', '+12.1%', 'Redfin, Mar 2026'],
                  ['Median home value (Zillow ZHVI)', '$326,763', 'Zillow, Feb 2026'],
                  ['YoY change — ZHVI', '+3.0%', 'Zillow, Feb 2026'],
                  ['Price per square foot', '$169/sqft', 'Redfin, Mar 2026'],
                  ['YoY change — price/sqft', '+5.6%', 'Redfin, Mar 2026'],
                  ['Median days on market', '61 days', 'Redfin, Mar 2026'],
                  ['Sale-to-list ratio', '98.7%', 'Redfin, Mar 2026'],
                  ['Redfin Compete Score', '59/100 — Somewhat Competitive', 'Redfin, Mar 2026'],
                  ['Homes sold monthly', '53', 'Redfin, Feb 2026'],
                  ['Transfer tax — Wilmington', '4.0% total', 'DE Division of Revenue'],
                  ['Cash offer range', '65-75% of ARV', 'Market estimate, April 2026'],
                ].map(([metric, value, source], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border border-gray-100">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary border border-gray-100">{value}</td>
                    <td className="py-3 px-4 text-xs text-gray-500 border border-gray-100">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Price Guide</h2>
          <p className="text-gray-700 mb-4">
            Wilmington's neighborhoods vary widely in price and investor activity. The city's pre-war brick row
            home stock concentrates in Southbridge, West Center City, and West Side Wilmington — where investor
            demand is highest and cash buyers are most active.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left">Neighborhood</th>
                  <th className="py-3 px-4 text-left">Price Range</th>
                  <th className="py-3 px-4 text-left">Housing Type</th>
                  <th className="py-3 px-4 text-left">Investor Activity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Trolley Square', '$350K–$500K+', 'Victorian row homes, brownstones, condos', 'Moderate'],
                  ['Quaker Hill', '~$271,655', 'Pre-war two-stories, Victorian row homes', 'High'],
                  ['West Center City', '~$218,000', 'Dense row homes, some detached', 'High (fastest-appreciating)'],
                  ['West Side Wilmington', '~$198,000', 'Brick row homes, pre-war housing', 'Very High'],
                  ['Southbridge / South Wilmington', '$100K–$200K', 'Brick row homes, American Foursquare', 'Very High'],
                  ['Brandywine Village', '$150K–$250K', 'Victorian two-stories, brick row homes', 'High'],
                  ['Little Italy', '$180K–$280K', 'Brick row homes, traditional two-stories', 'High'],
                  ['Downtown / Riverfront', '$250K–$500K', 'Condos, lofts, modern construction', 'Low for wholesale'],
                ].map(([nbhd, price, type, inv], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border border-gray-100">{nbhd}</td>
                    <td className="py-3 px-4 text-brand-primary font-semibold border border-gray-100">{price}</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-100">{type}</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-100">{inv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Sources: Redfin neighborhood data; Ark7 Wilmington investment guide (ark7.com, Feb 2026); homes.com neighborhood guides
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Delaware Transfer Tax — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Wilmington has one of the higher real estate transfer tax rates on the East Coast. Unlike Pennsylvania
            markets where the standard rate is 2%, Wilmington sellers face a 4% total transfer tax:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Delaware state tax:</strong> 2.5% (per Delaware Code Title 30, Ch. 54 — the state rate drops from 3% to 2.5% when a local tax applies)</li>
            <li><strong>City of Wilmington local tax:</strong> 1.5%</li>
            <li><strong>Total: 4.0%</strong> — split 50/50 by convention (buyer and seller each pay 2%)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            On the Wilmington median sale price of $251,200, the total transfer tax is $10,048 — the seller's
            conventional share is $5,024. When you sell to USA Home Buyers, we cover all closing costs including
            the full transfer tax.
          </p>
          <p className="text-sm text-gray-500">
            Sources:{' '}
            <a href="https://financefiles.delaware.gov/docs/rtt.pdf" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Delaware Division of Revenue (RTT PDF)</a>
            {' | '}
            <a href="https://www.newcastlede.gov/138/Transfer-Tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">New Castle County Transfer Tax</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Recording Fees — New Castle County</h2>
          <p className="text-gray-700 mb-4">
            Per the{' '}
            <a href="https://www.newcastlede.gov/136/Recorder-of-Deeds" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">NCC Recorder of Deeds</a>
            {' '}(800 N. French Street, Wilmington DE 19801):
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Statewide document fee: $30.00</li>
            <li>Technology fee: $5.00</li>
            <li>Recording fee per page (deed/mortgage): $13.00/page</li>
            <li>Each parcel description: $3.00</li>
            <li>Typical 2-page deed, 1 parcel: $30 + $5 + $26 + $3 = <strong>$64 total</strong></li>
          </ul>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Wilmington DE Home"
          subheadline="We cover all closing costs — including Delaware's 4% transfer tax. Written offer in 24 hours."
          sourcePage="/markets/wilmington-de"
        />

        <section className="mt-12 mb-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-brand-dark mb-2">{item.question}</h3>
                <p className="text-gray-700 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <nav className="border-t pt-6 text-sm text-gray-500">
          <Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">← Back to Wilmington DE</Link>
        </nav>
      </div>
    </>
  );
}
