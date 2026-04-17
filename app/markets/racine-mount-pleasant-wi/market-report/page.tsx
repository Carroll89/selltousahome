/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { racineWILocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/market-report`;

export const metadata: Metadata = {
  title: 'Racine WI Housing Market Report 2026',
  description:
    'Racine and Mount Pleasant WI real estate market data: median prices, days on market, Wisconsin transfer fee, and neighborhood breakdowns. Updated 2026.',
  alternates: { canonical: pageUrl },
};

export default function RacineMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        racineWILocalBusinessSchema,
        articleSchema('Racine-Mount Pleasant WI Housing Market Report 2026', pageUrl, '2026-04-17', '2026-04-17'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/racine-mount-pleasant-wi" className="hover:underline">Racine WI</Link> › Market Report
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Racine &amp; Mount Pleasant WI Housing Market Report — 2026
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm font-medium text-blue-800 mb-1">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            According to the Zillow Home Value Index (February 2026), the typical Racine home value is $171,496, up 4.4% year over year. Redfin reports a March 2026 median sale price of $205,000 with 35 days on market and 8 offers per home. The Racine-Mount Pleasant metro area scored #8 on the April 2026 Realtor.com Market Hotness Index (median $347,720, 30 days on market). Wisconsin realty transfer fee is $3.00 per $1,000 (seller pays, state-only, no county surcharge). Foreclosure is judicial, filed at Racine County Circuit Court, 10-14 months typical. For a cash offer based on current Racine County conditions, call USA Home Buyers at 888-440-5250.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Metrics — Racine &amp; Mount Pleasant</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Racine typical home value (ZHVI)</td><td className="p-3">$171,496 (+4.4% YoY)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Racine median sale price</td><td className="p-3">$205,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Mount Pleasant median $/sqft</td><td className="p-3">$174 (+6.7% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Racine County median $/sqft</td><td className="p-3">$184 (+9.2% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Metro hotness median (RDC)</td><td className="p-3">$347,720</td><td className="p-3 text-gray-500">Realtor.com (Apr 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market (Racine city)</td><td className="p-3">35 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Average offers per home</td><td className="p-3">8 offers</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin compete score</td><td className="p-3">82 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Typical cash offer range</td><td className="p-3">68-80% of FMV</td><td className="p-3 text-gray-500">Local investor norms</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Wisconsin realty transfer fee</td><td className="p-3">$3.00 per $1,000 (seller pays)</td><td className="p-3 text-gray-500">Wis. Stat. § 77.22</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure process</td><td className="p-3">Judicial (Racine Co. Circuit Court, 10-14 months)</td><td className="p-3 text-gray-500">Wis. Stats. Ch. 846</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Breakdown — City of Racine</h2>
          <p className="text-gray-700 text-sm mb-4">Racine's historic neighborhoods span a century of housing stock. Cream brick workers' cottages on the Northside, Victorian and Gothic Revival singles on the Southside, mid-century bungalows in West Racine and Garden City. Price ranges below reflect March 2026 sales data.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Neighborhood</th>
                  <th className="text-left p-3">Character</th>
                  <th className="text-left p-3">Typical Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Downtown Racine / Old Main Street</td><td className="p-3">Lakefront, historic district, lofts + singles</td><td className="p-3">$150,000-$280,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Northside Historic District</td><td className="p-3">1870s-1910s cream brick workers' cottages (National Register)</td><td className="p-3">$90,000-$180,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Southside Historic District</td><td className="p-3">Victorian, Gothic Revival, Mid-Century Modern</td><td className="p-3">$120,000-$240,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">West Racine</td><td className="p-3">Early-1900s and mid-century, many updated</td><td className="p-3">$140,000-$220,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Garden City</td><td className="p-3">1920s-1940s bungalows, Washington Avenue corridor</td><td className="p-3">$130,000-$200,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Historic Sixth Street District</td><td className="p-3">Victorian commercial + residential</td><td className="p-3">$160,000-$300,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Melvin Avenue Historic District</td><td className="p-3">Mid-1900s residential, preserved</td><td className="p-3">$170,000-$260,000</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Breakdown — Mount Pleasant &amp; Surrounding Racine County</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Community</th>
                  <th className="text-left p-3">Character</th>
                  <th className="text-left p-3">Typical Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Central Mount Pleasant</td><td className="p-3">Post-war ranches, split-levels, suburban cul-de-sacs</td><td className="p-3">$250,000-$400,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Mount Pleasant I-94 / Microsoft Corridor</td><td className="p-3">New subdivisions, tech-park demand</td><td className="p-3">$350,000-$550,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Racine Country Club area</td><td className="p-3">Older larger homes, golf frontage</td><td className="p-3">$400,000-$800,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Caledonia</td><td className="p-3">Suburban ranches, newer singles</td><td className="p-3">$260,000-$420,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sturtevant</td><td className="p-3">Small village, working-class singles</td><td className="p-3">$180,000-$275,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Union Grove</td><td className="p-3">Village, mixed singles, small-town character</td><td className="p-3">$200,000-$310,000</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Burlington</td><td className="p-3">Historic downtown, older singles, rural edges</td><td className="p-3">$220,000-$360,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Wind Point</td><td className="p-3">Lakefront village, lighthouse, higher-end</td><td className="p-3">$350,000-$700,000+</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Context — Racine &amp; Mount Pleasant WI</h2>
          <p className="text-gray-700 mb-4">
            Racine sits on Lake Michigan between Milwaukee (25 miles north) and Kenosha (10 miles south). The city of ~77,000 grew as an industrial center — SC Johnson (global HQ), Modine Manufacturing, and Case/CNH Industrial are all headquartered or operating here. That industrial heritage shaped the housing stock: cream brick workers' cottages on the Northside, Victorian singles on the Southside, mid-century bungalows in West Racine and Garden City. Much of this inventory predates 1940 and carries pre-war systems (knob-and-tube wiring, galvanized plumbing, original slate or clay tile roofs) that limit conventional-financing pools.
          </p>
          <p className="text-gray-700 mb-4">
            Mount Pleasant, the adjacent village of ~27,000, has a very different profile — post-war ranches and splits, 1990s-2000s subdivisions, and new construction along the I-94 corridor. The Foxconn → Microsoft development pivot (Mount Pleasant Village Board approved Microsoft's data center deal on former Foxconn land in January 2024) is an active tailwind for suburban home values. According to Racine County Eye, Foxconn made a $15 million make-up property-tax payment to Mount Pleasant in 2025 alone.
          </p>
          <p className="text-gray-700 mb-4">
            According to U.S. Census Bureau American Community Survey data, Racine County (population ~197,000) is 68.6% White, 15.1% Hispanic, and 10.3% Black. The City of Racine is more diverse — 49% White, 24.4% Hispanic, 20.2% Black. Median household income in the city was $57,740 in 2024.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What This Means for Racine-Mount Pleasant Sellers</h2>
          <p className="text-gray-700 mb-4">
            With 35 median days on market and 8 offers per home (Redfin, March 2026), Racine is a technically competitive market — but that velocity hides a bifurcation. Move-in-ready Mount Pleasant suburban homes in the I-94 corridor move fast at full asking. Pre-1940 Racine city homes in the historic districts often sit longer or see deeper price cuts because their buyer pool is limited to cash investors, FHA 203(k) renovation buyers, or conventional loans with major contingencies.
          </p>
          <p className="text-gray-700 mb-4">
            A direct cash sale to USA Home Buyers closes in 7–14 days with no repairs required. We cover all closing costs including the Wisconsin realty transfer fee. Cash offers typically run 68–80% of fair market value — but on pre-war Racine inventory where conventional financing is already a non-starter, the implied discount is much smaller than the headline number suggests.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer Based on Current Racine Market Data" subheadline="Written offer in 24 hours based on current Racine County comps. We cover all closing costs." sourcePage="/markets/racine-mount-pleasant-wi/market-report" />

        <div className="mt-8 text-sm text-gray-500">
          <p>Data sources: Zillow Home Value Index (ZHVI), Redfin market statistics, U.S. Census Bureau American Community Survey, Realtor.com Market Hotness Index, Racine County Eye, WPR. Market data reflects conditions as of March–April 2026. Individual property values vary. Contact us for a property-specific assessment.</p>
        </div>
      </div>
    </>
  );
}
