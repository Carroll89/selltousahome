/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/springfield-il/market-report`;

export const metadata: Metadata = {
  title: 'Springfield IL Housing Market Report 2026',
  description:
    'Springfield IL housing market data for 2026. Median prices, days on market, hotness rankings, and what it means for sellers. Updated March 2026.',
  alternates: { canonical: pageUrl },
};

export default function SpringfieldILMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Springfield IL Housing Market Report 2026 — Data for Sellers', pageUrl, '2026-04-18'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm font-medium mb-2">
          <Link href="/markets/springfield-il" className="hover:underline">Springfield IL</Link> › Market Report
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Springfield IL Housing Market Report — 2026
        </h1>

        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR — Springfield IL Market Snapshot</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            According to Realtor.com (March 2026), Springfield IL is the #10 hottest market in the US (score 93.979). Per Redfin (March 2026), median sale price: $187,000 (+23% YoY). Per Zillow (3/31/2026), ZHVI: $163,198 (+8.2% YoY). Median days on market: 27 days (Redfin) / 31.5 days active listing (RDC). Compete score: 78/100 (Very Competitive). Sale-to-list ratio: 98.4%. 113 homes sold in March 2026. This is the best seller's market Springfield has seen in recent memory.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Market Metrics — March 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">YoY Change</th>
                  <th className="py-3 px-4 text-left">Source</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Zillow Home Value Index (ZHVI)', '$163,198', '+8.2%', 'Zillow (3/31/2026)'],
                  ['Redfin Median Sale Price', '$187,000', '+23.0%', 'Redfin (Mar 2026)'],
                  ['Price per Sq Ft', '$112', '+24.4%', 'Redfin (Mar 2026)'],
                  ['Median Days on Market (sold)', '27 days', 'Not disclosed', 'Redfin (Mar 2026)'],
                  ['RDC Active Listing DOM', '31.5 days', 'N/A', 'Realtor.com (Mar 2026)'],
                  ['RDC Hotness Score', '93.979 (Rank #10)', 'N/A', 'Realtor.com (Mar 2026)'],
                  ['Compete Score', '78/100 — Very Competitive', '+varies', 'Redfin (Mar 2026)'],
                  ['Sale-to-List Ratio', '98.4%', '+1.0 pt', 'Redfin (Mar 2026)'],
                  ['Homes Sold', '113', 'N/A', 'Redfin (Mar 2026)'],
                ].map(([metric, value, yoy, source], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium">{metric}</td>
                    <td className="py-2 px-4">{value}</td>
                    <td className="py-2 px-4 text-green-700 font-medium">{yoy}</td>
                    <td className="py-2 px-4 text-gray-500">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Note: Zillow ZHVI is an average home value index, not a sale price median. Redfin median sale price ($187K) reflects actual closed transactions. The divergence reflects different measurement methodologies, not data error. Use Redfin for transaction comps; use ZHVI for market trend context.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What's Driving Springfield's #10 National Ranking</h2>
          <p className="text-gray-700 mb-4">
            Realtor.com's Market Hotness Index ranks markets on two dimensions: demand (views per property, time on market) and supply (active inventory days on market). Springfield's 93.979 score and #10 national ranking as of March 2026 reflects a genuine supply-demand imbalance: the city has a historically large older housing stock with limited new construction, a stable employment base (state government), and increasing demand from buyers priced out of larger Illinois markets.
          </p>
          <p className="text-gray-700 mb-4">
            Per Redfin (March 2026), the 23% year-over-year appreciation in the median sale price is the headline number — but the 24.4% jump in price per square foot tells the fuller story. Price appreciation is broad-based across the market, not concentrated in high-end properties.
          </p>
          <p className="text-gray-700 mb-4">
            For sellers, this means the market will support a retail listing on a well-maintained property. The question is whether the property condition, your timeline, and the cost of the retail process (agent commission, repairs, carrying costs, potential fallthrough) make retail the right choice vs. a direct cash sale.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield vs. Illinois Statewide Market</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Springfield IL</th>
                  <th className="py-3 px-4 text-left">Illinois Statewide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Zillow ZHVI', '$163,198', '$282,909'],
                  ['ZHVI YoY Growth', '+8.2%', '+3.8%'],
                  ['Redfin Median Sale Price', '$187,000 (+23%)', '~$295,000'],
                  ['Median Days on Market', '27 days', '51 days'],
                  ['Hotness Rank', '#10 nationally', 'N/A'],
                ].map(([metric, spfld, il], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium">{metric}</td>
                    <td className="py-2 px-4 text-green-700 font-semibold">{spfld}</td>
                    <td className="py-2 px-4">{il}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">IL statewide figures: Zillow IL ZHVI and Redfin IL state market page, March 2026. Springfield's appreciation rate is more than double the statewide average.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax and Closing Costs in Springfield IL</h2>
          <p className="text-gray-700 mb-4">
            Illinois state transfer tax: $0.50 per $500 (35 ILCS 200/31-10). Sangamon County transfer tax: $0.25 per $500 (35 ILCS 200/31-55). Combined: $0.75 per $500 ($1.50/$1,000), seller pays. No Springfield municipal transfer tax (confirmed from City of Springfield official tax rate document). Recording fee: $64 per standard document (Sangamon County Recorder, Frank J. Lesko, 217-535-3150).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Sale Price</th>
                  <th className="py-3 px-4 text-left">IL State Tax</th>
                  <th className="py-3 px-4 text-left">Sangamon Co. Tax</th>
                  <th className="py-3 px-4 text-left">Total Transfer Tax</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$130,000', '$130', '$65', '$195'],
                  ['$163,198 (ZHVI)', '$163', '$81.60', '$244.80'],
                  ['$187,000 (Redfin median)', '$187', '$93.50', '$280.50'],
                  ['$250,000', '$250', '$125', '$375'],
                ].map(([price, state, county, total], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium">{price}</td>
                    <td className="py-2 px-4">{state}</td>
                    <td className="py-2 px-4">{county}</td>
                    <td className="py-2 px-4 font-semibold">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-10">

      <VideoEmbed
        src="/videos/springfield-il/market-report.mp4"
        title="Springfield IL Real Estate Market Report 2026"
        poster="/videos/springfield-il/market-report-poster.jpg"
        subtitle="Why now is a strong time to sell in Sangamon County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          As of early 2026, Springfield is one of the hottest small markets in the country — ranked #10 nationally. Per Redfin (March 2026), the median sale price hit $187,000, up 23% year-over-year. Homes are selling in just 27 days average. If you're thinking about selling in Springfield or anywhere in Sangamon County, this is a strong time to act. USA Home Buyers offers cash for homes in any condition. Call 888-274-5006.
        </div>
      </details>
          <CashOfferForm variant="inline" headline="Get Your Springfield IL Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/springfield-il/market-report" />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Neighborhood Price Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Neighborhood</th>
                  <th className="py-3 px-4 text-left">Median Price</th>
                  <th className="py-3 px-4 text-left">Housing Character</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Enos Park', '$118,495', '1880s-1920s Victorian frame and brick cottages; historic district'],
                  ['Harvard Park', '$92,550', '1940s-1960s Craftsman bungalows and Cape Cods'],
                  ['West Side', 'Below ZHVI avg', 'Post-war 1950s-1970s brick ranches'],
                  ['South Side', 'Below ZHVI avg', 'Mixed aging housing stock; higher investor concentration'],
                  ['Capitol / Downtown (62701)', 'Above avg (historic premium)', 'State government area; Lincoln tourist district'],
                  ['Aristocracy Hill', 'Above avg', 'Victorian mansion corridor near downtown'],
                  ['Chatham (suburb)', 'Near ZHVI avg', 'Growing suburban; newer construction mix'],
                  ['Rochester IL (suburb)', 'Near-to-above ZHVI avg', 'Commuter suburb east of Springfield'],
                ].map(([nbhd, price, char], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium">{nbhd}</td>
                    <td className="py-2 px-4 font-semibold">{price}</td>
                    <td className="py-2 px-4 text-gray-600">{char}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Enos Park and Harvard Park medians sourced from NeighborhoodScout and homes.com. Other neighborhood medians are characterizations based on available market data — specific sub-ZIP medians not independently confirmed. See <Link href="/markets/springfield-il/neighborhoods" className="text-brand-primary hover:underline">neighborhoods page</Link> for details.</p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/markets/springfield-il" className="text-brand-primary hover:underline font-medium">← Back to Springfield IL</Link>
          <Link href="/markets/springfield-il/neighborhoods" className="text-brand-primary hover:underline font-medium">Neighborhood Guide →</Link>
          <Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline font-medium">Illinois Legal Guide →</Link>
        </div>
      </div>
    </>
  );
}
