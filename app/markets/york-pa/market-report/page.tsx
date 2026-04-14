/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/market-report`;

export const metadata: Metadata = {
  title: 'York PA Housing Market Report 2026',
  description:
    'York PA housing market data 2026: median prices, days on market, neighborhoods, transfer tax. York City and York County real estate trends.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Is York PA a buyer\'s or seller\'s market in 2026?',
    answer: "York PA is a seller's market. According to Redfin (February 2026), York City has a Compete Score of 86/100 with homes selling at 96.9% of list price and a median of 31 days on market. Hot homes in York sell in approximately 5 days. Buyer demand outpaces available inventory in the city's lower price tiers.",
  },
  {
    question: 'What is the average home price in York PA?',
    answer: "York City's median sale price is $165,850 (Redfin, February 2026), up 10.6% year-over-year. The Zillow ZHVI for the broader York city area is $246,248 (+6.6% YoY). The ACS median property value for city residents is $119,700. York County (including suburbs) has a Zillow ZHVI of $303,399.",
  },
  {
    question: 'What neighborhoods in York PA are most affordable?',
    answer: "Northeast York has the lowest median prices in the city, around $120,000 (November 2025 data), with very high investor activity. Southwest York and the East Side also offer entry-level prices with active investor markets. Downtown York properties range higher due to the Colonial-era historic structures.",
  },
  {
    question: 'What is the real estate transfer tax in York PA?',
    answer: "York PA has a 2% total transfer tax — 1% Pennsylvania state (PA Dept. of Revenue) plus 1% local (0.5% City of York + 0.5% York City School District, per Article 355 of York City Codified Ordinances). It is customarily split 50/50 between buyer and seller. York City is not on Pennsylvania's deviation list, confirming the standard 2% rate. Source: pa.gov; yorkcity.org.",
  },
];

export default function YorkMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('York PA Housing Market Report 2026 — York City and York County', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/markets/york-pa" className="hover:text-brand-primary">York PA</Link>
          {' › '}
          <span>Market Report</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          York PA Housing Market Report — 2026
        </h1>
        <p className="text-gray-600 text-sm mb-8">Market data last updated: April 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Summary</h2>
          <p className="text-gray-700 mb-3">
            York City is a very competitive seller's market. According to{' '}
            <a href="https://www.redfin.com/city/21030/PA/York/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (February 2026)</a>,
            the city's Compete Score is 86/100 with homes receiving an average of 2 offers and selling in
            31 days. Hot homes go under contract in approximately 5 days. The median sale price of $165,850
            is 59% below the national average — creating an accessible entry point that fuels both
            investor and owner-occupant demand.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://yorkcountypa.gov/512/Assessment-Tax-Claim-Office" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">York County Assessment & Tax Claim Office (yorkcountypa.gov)</a>,
            the county's Common Level Ratio is 50.46 as of July 2025 — meaning assessed values run
            approximately half of current market value. A property with an assessed value of $65,000
            has an estimated market value of ~$129,000 under current CLR calculations.
          </p>
        </section>

        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-4">York City Housing Metrics (Redfin, Feb 2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Median sale price', '$165,850'],
                  ['YoY change', '+10.6%'],
                  ['Price per sq ft', '$99'],
                  ['Median days on market', '31 days (hot homes: ~5 days)'],
                  ['Sale-to-list ratio', '96.9%'],
                  ['Compete Score', '86/100 — Very Competitive'],
                  ['Homes sold (Feb 2026)', '49 (+19.5% YoY)'],
                  ['Avg offers per home', '2'],
                  ['Zillow ZHVI (city area)', '$246,248 (+6.6% YoY)'],
                  ['ACS median property value (city)', '$119,700 (DataUSA/ACS 2024)'],
                  ['York County ZHVI', '$303,399 (+5.1% YoY)'],
                  ['York County price/sqft', '$158 (Redfin)'],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium text-brand-dark rounded-l">{label}</td>
                    <td className="py-2 px-4 font-bold text-brand-primary rounded-r">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Price Breakdown</h2>
          <p className="text-gray-700 mb-4">
            York City's neighborhoods vary significantly in price and investor activity. According to{' '}
            <a href="https://www.redfin.com/city/21030/PA/York/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin neighborhood data</a>:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left rounded-tl">Neighborhood</th>
                  <th className="py-3 px-4 text-left">Median Price</th>
                  <th className="py-3 px-4 text-left">YoY</th>
                  <th className="py-3 px-4 text-left rounded-tr">Investor Interest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Downtown York', '$183,000', '-11.0%', 'Medium-High'],
                  ['Springdale', '$209,000', '-12.9%', 'Medium'],
                  ['Southwest York', '$175,000', '+10.8%', 'High'],
                  ['East Side', '$160,000', '+3.2%', 'High'],
                  ['Northeast York', '$120,000', '-10.3%', 'Very High'],
                  ['North York Borough', '$180,000', '-0.1%', 'Medium'],
                ].map(([neighborhood, price, yoy, interest], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{neighborhood}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary">{price}</td>
                    <td className="py-3 px-4 text-gray-700">{yoy}</td>
                    <td className="py-3 px-4 text-gray-700">{interest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Northeast York is the primary target for distressed cash buyers — prices $40K+ below city median,
            heavily renter-occupied, aging infrastructure with high deferred maintenance.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax & Closing Costs</h2>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue (pa.gov)</a>,
            the state realty transfer tax is 1% of the sale price. The City of York collects an additional
            1% local tax under Article 355 of the York City Codified Ordinances (0.5% City + 0.5% York City
            School District), per{' '}
            <a href="https://yorkcity.org/government/authorities-boards-and-commissions/codified-ordinances/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">yorkcity.org</a>.
            Total transfer tax in York PA: <strong>2.0%</strong>, customarily split 50/50 between buyer and seller.
          </p>
          <p className="text-gray-700 mb-3">
            Recording fees are collected by the{' '}
            <a href="https://yorkcountypa.gov/561/Recording-Fees" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">York County Recorder of Deeds (yorkcountypa.gov)</a>.
            Deed recording: $86.25 base (4 pages, 4 names) + $20 per additional parcel identifier (effective Jan 1, 2025).
          </p>
          <div className="bg-brand-light rounded-xl p-4 text-sm">
            <p className="font-bold text-brand-dark mb-2">Example: $165,000 sale in York PA</p>
            <ul className="space-y-1 text-gray-700">
              <li>PA state transfer tax (1%): $1,650</li>
              <li>City of York local tax (0.5%): $825</li>
              <li>York City School District (0.5%): $825</li>
              <li><strong>Total transfer tax: $3,300</strong> (each party conventionally pays $1,650)</li>
              <li>Deed recording: $86.25 + additional fees</li>
              <li>When you sell to USA Home Buyers: we cover all closing costs — $0 out of your pocket</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">York County Assessor & Probate Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-sm">
              <p className="font-semibold text-brand-dark mb-1">York County Assessment & Tax Claim</p>
              <p className="text-gray-600">45 N. George Street, York, PA 17401</p>
              <p className="text-gray-600">(717) 771-9232</p>
              <a href="https://yorkcountypa.gov/512/Assessment-Tax-Claim-Office" className="text-brand-primary hover:underline text-xs mt-1 block" target="_blank" rel="noopener noreferrer">yorkcountypa.gov/512 →</a>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-sm">
              <p className="font-semibold text-brand-dark mb-1">York County Register of Wills</p>
              <p className="text-gray-600">45 North George Street, Suite 2, York, PA 17401</p>
              <p className="text-gray-600">(717) 771-9607 · M-F 8am-4:15pm</p>
              <a href="https://yorkcountypa.gov/385/Register-of-Wills" className="text-brand-primary hover:underline text-xs mt-1 block" target="_blank" rel="noopener noreferrer">yorkcountypa.gov/385 →</a>
            </div>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your York PA Property"
          subheadline="Written offer in 24 hours based on current York market data."
          sourcePage="/markets/york-pa"
        />

        <section className="mt-8 mb-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            {FAQ_ITEMS.map((item, i) => (
              <li key={i} className="text-gray-700"><strong>{item.question}</strong></li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">York PA Market FAQ</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <p className="font-semibold text-brand-dark mb-1">{item.question}</p>
                <p className="text-gray-700 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm mt-8">
          <Link href="/markets/york-pa" className="text-brand-primary hover:underline">← York PA market overview</Link>
          <Link href="/markets/york-pa/neighborhoods" className="text-brand-primary hover:underline">York neighborhoods →</Link>
          <Link href="/guides/sell-house-fast-york-pa-2026" className="text-brand-primary hover:underline">York PA seller guide 2026 →</Link>
        </div>
      </div>
    </>
  );
}
