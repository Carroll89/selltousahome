/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/youngstown-oh/market-report`;

export const metadata: Metadata = {
  title: 'Youngstown OH Housing Market 2026',
  description:
    'Youngstown OH housing market data 2026: median sale price $129,200, 70 days on market, $73/sqft. Neighborhood breakdowns and Rust Belt context for sellers.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the median home price in Youngstown OH?',
    answer: 'According to Redfin, the Youngstown median sale price is $102,000 as of March 2026. The Zillow ZHVI for the city is $51,815 — reflecting the vast inventory of distressed and vacant properties that pulls the overall average down. Mahoning County as a whole has a ZHVI of $149,008 (Zillow, 2025), reflecting the higher values in suburban Boardman and Austintown.',
  },
  {
    question: 'How long does it take to sell a house in Youngstown OH?',
    answer: 'According to Redfin, Youngstown homes spend a median of 70 days on market as of March 2026. Many city-core properties sit longer because they don\'t qualify for conventional financing — reducing the buyer pool to cash investors only.',
  },
  {
    question: 'Is Youngstown a buyer\'s or seller\'s market?',
    answer: 'Youngstown scores 69/100 on the Redfin Compete Score as of 2026 — Somewhat Competitive at the county level. But within city limits, the picture splits sharply: habitable properties in decent condition generate competitive interest, while distressed properties may sit for months. The sale-to-list ratio of 97.0% suggests sellers are getting close to asking price on homes that do sell.',
  },
  {
    question: 'What are recording fees in Mahoning County?',
    answer: 'Recording fees in Mahoning County are $39 for the first two pages plus $8 per additional page, effective January 1, 2026 under Ohio Senate Bill 94. The buyer typically pays the deed recording fee. Source: Mahoning County Recorder\'s Office (mahoningcountyoh.gov/215).',
  },
];

export default function YoungstownMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('Youngstown OH Housing Market Report 2026 — Mahoning County Data', pageUrl, '2026-04-14', '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/youngstown-oh-hero-640.jpg 640w, /images/optimized/youngstown-oh-hero-828.jpg 828w, /images/optimized/youngstown-oh-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-hero-1200.jpg"
            alt="Youngstown OH housing market 2026"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/youngstown-oh" className="hover:text-white">Youngstown OH</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Youngstown OH Housing Market Report — 2026
          </h1>
          <p className="text-lg text-blue-100">
            Current data on prices, days on market, neighborhoods, and what it means for sellers in Mahoning County.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Overview — March 2026</h2>
          <p className="text-gray-700 mb-4">
            Youngstown's housing market operates in two parallel realities. The{' '}
            <a href="https://www.redfin.com/city/21075/OH/Youngstown/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin median sale price of $102,000</a>{' '}
            reflects actual transactions — the subset of habitable properties that changed hands
            in March 2026. The{' '}
            <a href="https://www.zillow.com/home-values/28060/youngstown-oh/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Zillow ZHVI of $51,815</a>{' '}
            captures the typical value across all housing units — including the estimated 30-40%
            of parcels that are vacant, demolished, or held by the Mahoning County Land Bank.
            That gap between "what sells" and "what exists" defines this market.
          </p>
          <p className="text-gray-700 mb-4">
            March 2026 data shows the median sale price at $102,000 (-0.98% YoY), reflecting stabilization
            in actual transaction pricing as the market normalizes from prior-period small-sample volatility.
            For pricing context, neighboring{' '}
            <a href="https://www.zillow.com/home-values/2399/mahoning-county-oh/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County as a whole has a ZHVI of $149,008</a>,
            reflecting the stronger suburban values in Boardman and Austintown.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Metrics</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Median sale price (Redfin, Mar 2026)', '$102,000'],
                  ['YoY change — sale price', '-0.98%'],
                  ['Zillow ZHVI — city of Youngstown (2025)', '$51,815 (-2.2% YoY)'],
                  ['Zillow ZHVI — Mahoning County (2025)', '$149,008 (+4.5% YoY)'],
                  ['Price per square foot (Redfin, Mar 2026)', '$92/sqft'],
                  ['Median days on market', '70 days (up from 58 YoY)'],
                  ['Sale-to-list ratio', '97.0% (+2.7 pts YoY)'],
                  ['Redfin Compete Score', '69/100 — Somewhat Competitive'],
                  ['Homes sold — Feb 2026', '30 homes (down from 53 YoY)'],
                  ['Cash offer range', '65-75% of after-repair value'],
                  ['Ohio conveyance fee (Mahoning County)', '$4.00/1,000 + $0.50/parcel (seller pays)'],
                  ['Recording fee (as of Jan 2026)', '$39 base + $8/additional page'],
                  ['City population (2024 est.)', '59,331 — declining (-8.4% since 2019)'],
                  ['Median household income', '$34,408'],
                  ['Poverty rate', '31.2%'],
                ].map(([metric, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border border-gray-100">{metric}</td>
                    <td className="py-3 px-4 text-brand-primary font-bold border border-gray-100">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Sources: <a href="https://www.redfin.com/city/21075/OH/Youngstown/housing-market" className="hover:underline" target="_blank" rel="noopener noreferrer">Redfin Youngstown Market</a> ·{' '}
            <a href="https://www.zillow.com/home-values/28060/youngstown-oh/" className="hover:underline" target="_blank" rel="noopener noreferrer">Zillow ZHVI</a> ·{' '}
            <a href="https://www.ohio-demographics.com/youngstown-demographics" className="hover:underline" target="_blank" rel="noopener noreferrer">Ohio Demographics (ACS)</a> ·{' '}
            <a href="https://www.mahoningcountyoh.gov/788/Schedule-of-Fees" className="hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County Recorder Fee Schedule</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Price Breakdown</h2>
          <p className="text-gray-700 mb-4">
            Youngstown has over 25 recognized neighborhoods. Price ranges vary dramatically based on
            proximity to Youngstown State University, intact block fabric, and distance from the highest-vacancy
            areas of the North and South Sides.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left">Neighborhood</th>
                  <th className="py-3 px-4 text-left">Median Price Range</th>
                  <th className="py-3 px-4 text-left">Investor Interest</th>
                  <th className="py-3 px-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Wick Park', '~$89,900', 'High', 'Near YSU; mix of restored Victorians and deferred-maintenance homes. Most stable neighborhood in the city.'],
                  ['Belle Vista', '$70,000–$110,000', 'Medium', 'Near Mill Creek Metro Park. Craftsman bungalows, brick homes. One of the more stable city neighborhoods.'],
                  ['Brownlee Woods / Pleasant Grove', '$55,000–$95,000', 'Medium', 'South Youngstown near Boardman border. Better-maintained stock, more intact block fabric.'],
                  ['Idora', '$40,000–$75,000', 'Medium-High', 'Named for Idora Park (closed 1984). South Youngstown mix of conditions. Some renovation from YSU proximity.'],
                  ['South Side', '$30,000–$65,000', 'High', 'Classic steel-worker residential grid. High vacancy, significant demolition. Strong cash buyer activity.'],
                  ['Brier Hill', '$30,000–$55,000', 'High', 'Historical Italian-American neighborhood. Significant vacancy, many deferred-maintenance properties.'],
                  ['West Side / Mahoning Ave', '$25,000–$60,000', 'High', 'Working-class corridor with blight. Formerly dense housing stock, commercial/residential mix.'],
                  ['North Side', '$20,000–$50,000', 'High', 'Highest distress in the city. Many vacant lots. Land Bank involvement common. Very low entry price, high rehab cost.'],
                ].map(([neighborhood, price, interest, notes], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border border-gray-100">{neighborhood}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary border border-gray-100">{price}</td>
                    <td className="py-3 px-4 border border-gray-100">{interest}</td>
                    <td className="py-3 px-4 text-gray-600 border border-gray-100 text-xs">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Sources: <a href="https://www.homes.com/youngstown-oh/" className="hover:underline" target="_blank" rel="noopener noreferrer">Homes.com neighborhood listings</a> ·{' '}
            Zillow active listing analysis · Redfin sold comps · Mahoning County Auditor
          </p>
        </section>

        <section className="mb-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Ohio Conveyance Fee — Mahoning County</h2>
          <p className="text-gray-700 mb-3">
            Ohio doesn't use a "transfer tax." It uses a conveyance fee system under the Ohio Revised Code.
            In Mahoning County, the total conveyance fee is <strong>$4.00 per $1,000</strong> of sale price,
            plus $0.50 per parcel for the transfer fee. The seller pays this at closing via the title company
            on DTE Form 100, filed with the{' '}
            <a href="https://auditor.mahoningcountyoh.gov/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County Auditor</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="py-2 px-4 text-left font-semibold text-brand-dark">Component</th>
                  <th className="py-2 px-4 text-left font-semibold text-brand-dark">Rate</th>
                  <th className="py-2 px-4 text-left font-semibold text-brand-dark">Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-t border-gray-200">
                  <td className="py-2 px-4">State conveyance fee</td>
                  <td className="py-2 px-4 font-bold">$1.00/1,000</td>
                  <td className="py-2 px-4 text-gray-600">ORC § 319.202</td>
                </tr>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td className="py-2 px-4">Mahoning County permissive fee</td>
                  <td className="py-2 px-4 font-bold">$3.00/1,000</td>
                  <td className="py-2 px-4 text-gray-600">ORC § 322.02</td>
                </tr>
                <tr className="bg-white border-t border-gray-200">
                  <td className="py-2 px-4 font-semibold">Total</td>
                  <td className="py-2 px-4 font-bold text-brand-primary">$4.00/1,000 + $0.50/parcel</td>
                  <td className="py-2 px-4 text-gray-600">Mahoning County Auditor</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-3 text-sm">
            On a $102,000 sale: $408 conveyance fee + $0.50 parcel fee = <strong>~$408.50 total</strong> (seller-paid).
            When you sell to USA Home Buyers, we cover all closing costs — this fee comes out of our side, not yours.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Youngstown OH Home"
          subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs."
          sourcePage="/markets/youngstown-oh"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Youngstown OH Housing Market" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/neighborhoods" className="text-brand-primary hover:underline">Youngstown Neighborhoods Guide →</Link></li>
            <li><Link href="/guides/sell-house-fast-youngstown-oh-2026" className="text-brand-primary hover:underline">2026 Seller Guide: Youngstown OH →</Link></li>
            <li><Link href="/sell-house-fast-ohio" className="text-brand-primary hover:underline">Sell Your House Fast in Ohio →</Link></li>
          </ul>
        </section>

        <section className="mt-10">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Youngstown OH Home?" sourcePage="/markets/youngstown-oh" />
        </section>
      </div>
    </>
  );
}
