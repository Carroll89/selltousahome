import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/market-report`;

export const metadata: Metadata = {
  title: 'Bethlehem PA Housing Market 2026',
  description:
    'Bethlehem PA housing market data for 2026 — median prices, days on market, neighborhood breakdown, transfer tax, and what sellers need to know. Northampton County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Is Bethlehem PA a good time to sell in 2026?',
    answer: "Yes — according to Redfin, Bethlehem's Compete Score is 89/100 (Very Competitive) and homes are selling at 99.6% of list price in an average of 21 days. The median sale price rose 14.0% year-over-year to $313,500 as of March 2026. However, that performance is for move-in-ready homes. Properties with deferred maintenance, code issues, or complicated ownership often sit longer or require price reductions.",
  },
  {
    question: 'What is the median home price in Bethlehem PA?',
    answer: "According to Redfin (March 2026), Bethlehem's median sale price is $313,500, up 14.0% year-over-year. Zillow's home value estimate (ZHVI) is $350,600, up 2.9% annually. South Bethlehem has a lower median near $245,000, reflecting the dense pre-war row home stock on the South Side.",
  },
  {
    question: 'What is the transfer tax in Bethlehem PA?',
    answer: "Bethlehem charges the standard Pennsylvania rate — 2% total (1% PA state + 1% City of Bethlehem local tax). By convention this is split 50/50 between buyer and seller. On a $320,000 home, the total transfer tax is $6,400, with each party paying $3,200. Source: City of Bethlehem Ordinance Article 335.",
  },
  {
    question: 'How does Bethlehem compare to the broader Lehigh Valley market?',
    answer: "Bethlehem is one of the most competitive markets in the Lehigh Valley. Its Redfin Compete Score of 89/100 reflects strong demand from Philadelphia and NYC buyers priced out of those markets. Homes receive an average of 5 offers and hot homes go in about 6 days at roughly 4% above list price — tighter than most Lehigh Valley submarkets.",
  },
];

export default function BethlehemMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('Bethlehem PA Housing Market Report 2026', pageUrl, '2026-04-13', '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer: Bethlehem PA Housing Market 2026</h2>
          <p className="text-gray-700 text-sm leading-relaxed">According to Redfin (March 2026), Bethlehem's median home sale price is $313,500, up 14.0% year-over-year. The Zillow Home Value Index (ZHVI) for Bethlehem is $350,600 (+2.9% annually). Homes go pending in ~21 days and sell near list price (99.6% sale-to-list ratio, per Redfin) — a very competitive seller's market. Cash buyers typically offer 70–80% of fair market value, closing in 7–14 days without repairs, showings, or agent commissions.</p>
        </div>

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' › '}
          <Link href="/markets/bethlehem-pa" className="hover:text-brand-primary">Bethlehem PA</Link>
          {' › '}
          <span>Market Report</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Bethlehem PA Housing Market Report — 2026
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Current market data for Bethlehem PA and Northampton County — median prices, days on market,
          neighborhood breakdown, and what the numbers mean for sellers.
        </p>

        {/* Key Metrics */}
        <section className="bg-brand-light rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Key Market Metrics — Bethlehem PA</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Avg home value (Zillow ZHVI)', '$350,600', 'April 2026'],
                  ['YoY change (Zillow)', '+2.9%', 'April 2026'],
                  ['Median sale price (Redfin)', '$313,500', 'March 2026'],
                  ['YoY change (Redfin)', '+14.0%', 'March 2026'],
                  ['Alternate median (Rocket Homes)', '$330,774', 'March 2025'],
                  ['Price per sq ft', '$178', 'Redfin, Feb 2026'],
                  ['Median days on market', '21 days', 'Redfin, Mar 2026'],
                  ['Sale-to-list ratio', '99.6%', 'Redfin, Mar 2026'],
                  ['Redfin Compete Score', '89/100 — Very Competitive', 'Feb 2026'],
                  ['Avg offers per listing', '5 offers', 'Redfin, Feb 2026'],
                  ['Hot homes sell in', '~6 days at ~4% above list', 'Redfin, Feb 2026'],
                  ['Transfer tax', '2.0% total (1% PA + 1% City)', 'City of Bethlehem Ordinance'],
                  ['Deed recording — first 4 pages', '$75.25', 'Northampton County Recorder'],
                  ['Owner-occupied rate', '~60.9%', 'Census data via BestNeighborhood.org'],
                  ['Renter-occupied rate', '~39.1%', 'Census data via BestNeighborhood.org'],
                ].map(([metric, value, source], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark rounded-l">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary">{value}</td>
                    <td className="py-3 px-4 text-xs text-gray-400 rounded-r">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Sources: Zillow (zillow.com/home-values/17008/bethlehem-pa/), Redfin (redfin.com/city/1616/PA/Bethlehem/housing-market),
            Rocket Homes, City of Bethlehem Ordinance Article 335, Northampton County Recorder of Deeds.
            Market data last updated: April 2026.
          </p>
        </section>

        {/* Neighborhood Breakdown */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Bethlehem Neighborhood Price Breakdown</h2>
          <p className="text-gray-700 mb-4">
            Bethlehem&apos;s market is not uniform. Prices vary significantly by neighborhood, reflecting the
            city&apos;s distinct character from the pre-war South Side row homes to the Moravian historic district
            on the North Side.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Neighborhood</th>
                  <th className="py-3 px-4 text-left">Median Price</th>
                  <th className="py-3 px-4 text-left">Stock Type</th>
                  <th className="py-3 px-4 text-left">Investor Activity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['South Bethlehem (South Side)', '~$245,000', 'Row homes & twins, 1890s–1930s', '🔴 Very High'],
                  ['Central Bethlehem', '~$300,000', 'Victorian-era, brick row houses', '🟡 High'],
                  ['Northeast Bethlehem', '~$325,000', 'Postwar ranch homes, 1950s–1980s', '🟡 Medium'],
                  ['Historic District / North Side', '$380K–$450K+', '18th–19th c. Moravian stone/brick', '🟢 Lower'],
                  ['Fountain Hill (adjacent borough)', '~$228,000', 'Cape Cods, townhomes, twins', '🔴 High'],
                  ['West Side', '$250K–$290,000', 'Row homes, mid-century mix', '🟡 High'],
                  ['Bethlehem Township (adjacent)', '$340K–$390,000', 'Suburban single-family, 1970s–2000s', '🟢 Low'],
                ].map(([name, price, stock, activity], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{name}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary">{price}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{stock}</td>
                    <td className="py-3 px-4">{activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Sources: Redfin neighborhood pages (South Bethlehem, Central Bethlehem, Northeast Bethlehem);
            Lehigh Valley Just Listed (Fountain Hill); BestNeighborhood.org. Data accessed April 2026.
          </p>
        </section>

        {/* Steel City Context */}
        <section className="mb-10 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">
            What the Data Means for Bethlehem Sellers
          </h2>
          <p className="text-gray-700 mb-3">
            Bethlehem&apos;s 89/100 Compete Score and 21-day median DOM reflect strong demand — but that demand is
            concentrated in move-in-ready properties. According to the U.S. Census Bureau, 30.8% of Bethlehem&apos;s
            housing units are attached structures (row homes and twins), the majority built between 1890 and 1930
            for Bethlehem Steel workers.
          </p>
          <p className="text-gray-700 mb-3">
            These homes — while often charming — frequently have deferred maintenance: original cast-iron plumbing,
            pre-1950 electrical, unreinforced masonry, and 100-year-old rooflines. A property in this condition
            typically requires $15,000-$40,000 in work before it competes for retail buyers. For owners who
            can&apos;t or don&apos;t want to front that cost, a cash sale at 70-80% of FMV is a rational choice.
          </p>
          <p className="text-gray-700 mb-3">
            The 14.0% year-over-year price increase (Redfin, March 2026) is also worth context: it reflects the Lehigh Valley&apos;s
            continued attraction to buyers from Philadelphia and the New York metro. That buyer pool wants turnkey,
            not project homes. Sellers with older properties or complicated situations are often better served
            by a direct cash sale than by competing for a narrower slice of the retail market.
          </p>
        </section>

        {/* Transfer Tax Deep Dive */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Bethlehem PA Transfer Tax — The Full Breakdown
          </h2>
          <p className="text-gray-700 mb-4">
            According to City of Bethlehem Ordinance Article 335, Bethlehem charges the standard Pennsylvania
            local transfer tax rate of 1%. Combined with the 1% Pennsylvania state realty transfer tax,
            the total is 2% of the sale price.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Component</th>
                  <th className="py-3 px-4 text-left">Rate</th>
                  <th className="py-3 px-4 text-left">Who Pays</th>
                  <th className="py-3 px-4 text-left">On $313.5K Home</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 px-4">Pennsylvania State RTT</td>
                  <td className="py-3 px-4">1.0%</td>
                  <td className="py-3 px-4">Split 50/50</td>
                  <td className="py-3 px-4">$3,135 total</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4">City of Bethlehem Local RTT</td>
                  <td className="py-3 px-4">1.0%</td>
                  <td className="py-3 px-4">Split 50/50</td>
                  <td className="py-3 px-4">$3,135 total</td>
                </tr>
                <tr className="bg-white font-bold">
                  <td className="py-3 px-4">TOTAL</td>
                  <td className="py-3 px-4">2.0%</td>
                  <td className="py-3 px-4">Seller pays 1%</td>
                  <td className="py-3 px-4">$6,270 total ($3,135 seller)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax — nothing comes
            out of your proceeds. Source: City of Bethlehem (bethlehem-pa.gov); PA Transfer Tax Deviation List confirmed
            Bethlehem is not a deviation municipality.
          </p>
        </section>

        {/* Recording Fees */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Northampton County Recording Fees</h2>
          <p className="text-gray-700 mb-3">
            According to the Northampton County Recorder of Deeds (669 Washington Street, Easton, PA 18042),
            the recording fee schedule for real estate transactions includes:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">Document</th>
                  <th className="py-2 px-4 text-left">Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Deed (first 4 pages)', '$75.25'],
                  ['Mortgage (first 4 pages)', '$75.25'],
                  ['Satisfaction of Mortgage', '$60.75'],
                  ['Assignment/Release of Mortgage', '$60.75'],
                  ['Pages over 4', '$2.00 each'],
                  ['Parcel Certification Fee', '$10.00 per parcel'],
                ].map(([doc, fee], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 text-gray-700">{doc}</td>
                    <td className="py-2 px-4 font-medium">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Bethlehem PA Housing Market" />

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Interested in a Cash Offer for Your Bethlehem Home?</h2>
          <p className="text-gray-700 mb-4">
            We buy houses in any condition in Bethlehem PA and throughout Northampton County. Written offer in 24 hours.
          </p>
          <Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline font-medium">
            ← Back to Bethlehem PA market overview
          </Link>
        </section>

        <CashOfferForm variant="footer" headline="Get Your Bethlehem PA Cash Offer" sourcePage="/markets/bethlehem-pa/market-report" />
      </div>
    </>
  );
}
