/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { lancasterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Lancaster PA Housing Market Report 2026',
  description:
    'Lancaster PA housing market data for 2026 — median prices, days on market, neighborhood breakdowns, transfer tax, and what sellers need to know. Updated April 2026.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/market-report` },
};

const articleSch = articleSchema(
  'Lancaster PA Housing Market Report 2026',
  `${SITE_URL}/markets/lancaster-pa/market-report`,
  '2026-04-13',
  '2026-04-16'
);

const faqItems = [
  {
    question: 'Is Lancaster PA a buyer\'s or seller\'s market in 2026?',
    answer: 'Lancaster is a seller\'s market in 2026. According to Redfin, Lancaster County homes sell at 100.8% of list price on average, and Lancaster City holds a Compete Score of 84/100 — rated Very Competitive. Most retail-ready homes receive multiple offers. The exception is distressed or repair-needed inventory, which tends to sit longer.',
  },
  {
    question: 'What is the median home price in Lancaster PA?',
    answer: 'According to Zillow (February 2026), the median home value in Lancaster City is $332,965 (+6.8% year-over-year). Lancaster County\'s Zillow median is $332,414 (+6.3% YoY). Redfin tracks median sale price at $347,838 for Lancaster County based on 312 closed sales in February 2026.',
  },
  {
    question: 'What are recording fees when selling in Lancaster County?',
    answer: 'According to the Lancaster County Recorder of Deeds fee schedule (lancasterdeeds.com), recording a standard deed costs $71.25 for up to 4 pages, plus $2.00 per additional page. The office accepts electronic recording. Recordings conclude at 4:30 p.m.',
  },
];

export default function LancasterMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(faqItems)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer: Lancaster PA Housing Market 2026</h2>
          <p className="text-gray-700 text-sm leading-relaxed">According to the Zillow Home Value Index, Lancaster City's typical home value is $332,965 (+6.8% year-over-year, February 2026). Redfin tracks Lancaster County's median sale price at $347,838 (+3.8% YoY) — the city-only figure fluctuates due to small monthly sample size. The market is very tight: Redfin Compete Score is 84/100. Lancaster County charges the standard Pennsylvania 2% transfer tax. Cash buyers typically offer 70–80% of FMV, closing in 7–14 days without repairs or fees.</p>
        </div>

        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/sell-house-fast-pennsylvania" className="hover:text-brand-primary">Pennsylvania</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>Market Report</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Lancaster PA Housing Market Report — 2026
        </h1>
        <p className="text-gray-500 text-sm mb-8">Market data last updated: April 2026</p>

        <p className="text-gray-700 text-lg mb-6">
          Lancaster PA's housing market in 2026 is tight, competitive, and split in character. The city core —
          dominated by pre-1940 brick rowhouses in neighborhoods like Cabbage Hill and West End — runs on different
          dynamics than the suburban townships and rural farmland that define the broader county. This report
          covers both, with sourced data from Redfin, Zillow, the U.S. Census Bureau, and Lancaster County
          government records.
        </p>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Lancaster Home" sourcePage="/markets/lancaster-pa" />

        {/* City vs County */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">City vs. County: Two Different Markets</h2>
          <p className="text-gray-700 mb-4">
            Lancaster City and Lancaster County behave differently. The city is dense urban rowhouse stock — 57,719
            residents, 48.6% homeownership rate, 40.6% Hispanic population, and a median home value that has risen
            6.8% year-over-year to $332,965 (Zillow, February 2026). The county is a mix of suburban townships,
            small boroughs like Lititz and Ephrata, and genuine Pennsylvania Dutch Country rural land.
          </p>
          <p className="text-gray-700 mb-4">
            According to Redfin, Lancaster County closed 312 homes in February 2026 at a median sale price of
            $347,838 — up 3.8% year-over-year. Price per square foot is $202 countywide, $178 in the city.
            These aren't just different price points — they're different buyer pools, different inventory
            challenges, and different reasons sellers need a fast exit.
          </p>
        </section>

        {/* Market Data Table */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Lancaster PA Market Data — February 2026</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left font-semibold">Metric</th>
                  <th className="py-3 px-4 text-left font-semibold">Lancaster City</th>
                  <th className="py-3 px-4 text-left font-semibold">Lancaster County</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median Home Value (Zillow ZHVI)', '$332,965', '$332,414'],
                  ['YoY Change (Zillow)', '+6.8%', '+6.3%'],
                  ['Median Sale Price (Redfin)', '$225,000 (47 sales — volatile)', '$347,838 (312 sales)'],
                  ['YoY Sale Price Change', '-27.4% (sample size issue)', '+3.8%'],
                  ['Price Per Sq Ft (Redfin)', '$178', '$202'],
                  ['Median Days on Market', '19 days (hot: ~5 days)', '18 days'],
                  ['Sale-to-List Ratio', '100.0%', '100.8%'],
                  ['Compete Score', '84/100 — Very Competitive', 'N/A (county average)'],
                  ['Transfer Tax', '2% total (1% PA + 1% local)', '2% total (standard PA rate)'],
                  ['Recording Fee (Deed)', '$71.25 (up to 4 pages)', 'Same — Lancaster Co. ROD'],
                ].map(([metric, city, county], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{metric}</td>
                    <td className="py-3 px-4 text-gray-700">{city}</td>
                    <td className="py-3 px-4 text-gray-700">{county}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            Sources: Redfin Lancaster City and County Housing Market pages (Feb 2026); Zillow ZHVI (Feb 2026);
            Lancaster County Recorder of Deeds fee schedule (lancasterdeeds.com); PA Dept. of Revenue transfer tax data.
          </p>
        </section>

        {/* Neighborhood Breakdown */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Price Breakdown — Lancaster City</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left font-semibold">Neighborhood</th>
                  <th className="py-3 px-4 text-left font-semibold">Median Price</th>
                  <th className="py-3 px-4 text-left font-semibold">YoY Change</th>
                  <th className="py-3 px-4 text-left font-semibold">Investor Interest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cabbage Hill (SW Lancaster)', '$233,000', '+17.1%', '⭐⭐⭐ Very High'],
                  ['West End (W Lancaster)', '~$195K–$245K', 'Strong appreciation', '⭐⭐⭐ Very High'],
                  ['Chestnut Hill (SE Lancaster)', '$377,000', 'Stable', '⭐⭐ Moderate'],
                  ['Musser Park / Old Town (NE)', '$280K–$380K', 'Stable', '⭐⭐ Moderate'],
                  ['Downtown / Central Business District', '$440,000', '+51.7%', '⭐ Lower'],
                  ['Manheim Township (NW suburb)', '$330K–$455K', 'Moderate growth', '⭐⭐ Moderate'],
                  ['Lancaster Township (S/SW suburb)', '~$300K+', 'Stable', '⭐⭐ Moderate'],
                ].map(([neighborhood, price, yoy, investor], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{neighborhood}</td>
                    <td className="py-3 px-4 text-gray-700">{price}</td>
                    <td className="py-3 px-4 text-gray-700">{yoy}</td>
                    <td className="py-3 px-4 text-gray-700">{investor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            Sources: Redfin Lancaster City neighborhood pages; Movoto Chestnut Hill; Redfin Cabbage Hill Housing Market (Feb 2026).
          </p>
        </section>

        {/* Transfer Tax Detail */}
        <section className="my-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Lancaster Transfer Tax — What Sellers Pay</h2>
          <p className="text-gray-700 mb-4">
            Lancaster City charges the standard Pennsylvania real estate transfer tax: 2% total.
            According to the PA Department of Revenue and the ALT Title Transfer Tax Deviations list
            (updated July 2025), the City of Lancaster is not on the deviations list — it charges the
            standard combined rate.
          </p>
          <div className="overflow-x-auto rounded-xl border border-blue-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left font-semibold">Portion</th>
                  <th className="py-3 px-4 text-left font-semibold">Rate</th>
                  <th className="py-3 px-4 text-left font-semibold">Recipient</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-medium">Commonwealth of Pennsylvania</td>
                  <td className="py-3 px-4">1.0%</td>
                  <td className="py-3 px-4">PA Dept. of Revenue</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Local (City + School District)</td>
                  <td className="py-3 px-4">1.0%</td>
                  <td className="py-3 px-4">City of Lancaster + School District of Lancaster (per PA Act 77)</td>
                </tr>
                <tr className="bg-white font-bold">
                  <td className="py-3 px-4">TOTAL</td>
                  <td className="py-3 px-4">2.0%</td>
                  <td className="py-3 px-4">Split 50/50 buyer/seller by convention</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            By Lancaster County convention, buyer and seller each pay 1% (half the total). On a $235,000 home,
            the seller's portion is $2,350. When you sell to USA Home Buyers, we cover all closing costs
            including the full transfer tax.
          </p>
        </section>

        {/* Foreclosure context */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Foreclosure in Lancaster County</h2>
          <p className="text-gray-700 mb-4">
            Pennsylvania is a judicial foreclosure state. According to amerinotexchange.com, the typical
            timeline from first missed payment to sheriff's sale is approximately 270 days (9 months).
            There is no right of redemption after the sheriff's sale is completed.
          </p>
          <p className="text-gray-700 mb-4">
            Lancaster County has its own wrinkle: the Lancaster County Courts operate a{' '}
            <strong>Foreclosure Diversion Program</strong>. When a foreclosure complaint is filed, the court
            issues a Case Management Order that places a hold on proceedings and requires the homeowner to
            attend housing counseling and a conciliation conference. This extends timelines — and creates a
            window for motivated sellers to exit cleanly before proceedings resume.
          </p>
          <p className="text-sm text-gray-500">
            Source:{' '}
            <a href="https://www.court.co.lancaster.pa.us/260/Foreclosure-Diversion-Program" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              Lancaster County Courts — Foreclosure Diversion Program
            </a>
            {'; '}
            <a href="https://www.amerinotexchange.com/foreclosure-law/pennsylvania/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              amerinotexchange.com — Pennsylvania Foreclosure Laws
            </a>
          </p>
        </section>

        {/* County Offices */}
        <section className="my-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Lancaster County Government Offices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Property Assessment Office</h3>
              <p className="text-sm text-gray-700">150 N. Queen St., Lancaster, PA 17603</p>
              <p className="text-sm text-gray-700">Mon–Fri, 8:30 a.m.–5:00 p.m.</p>
              <a href="https://co.lancaster.pa.us/154/Property-Assessment" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:underline">
                co.lancaster.pa.us/154/Property-Assessment
              </a>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Register of Wills / Orphans' Court</h3>
              <p className="text-sm text-gray-700">Lancaster County Courthouse, 50 N. Duke St.</p>
              <p className="text-sm text-gray-700">Phone: (717) 299-8243</p>
              <a href="https://co.lancaster.pa.us/159/Register-of-Wills" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:underline">
                co.lancaster.pa.us/159/Register-of-Wills
              </a>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Recorder of Deeds</h3>
              <p className="text-sm text-gray-700">E-recording accepted. Recordings close at 4:30 p.m.</p>
              <a href="https://www.lancasterdeeds.com" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:underline">
                lancasterdeeds.com
              </a>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Foreclosure Diversion Program</h3>
              <p className="text-sm text-gray-700">Lancaster County Courts</p>
              <a href="https://www.court.co.lancaster.pa.us/260/Foreclosure-Diversion-Program" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-primary hover:underline">
                court.co.lancaster.pa.us/260
              </a>
            </div>
          </div>
        </section>

        {/* Back to market */}
        <div className="my-8 flex flex-col sm:flex-row gap-4">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline font-medium">
            ← Back to Lancaster PA Market Page
          </Link>
          <Link href="/markets/lancaster-pa/neighborhoods" className="text-brand-primary hover:underline font-medium">
            View neighborhood price breakdowns →
          </Link>
        </div>

        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Lancaster PA Property" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
