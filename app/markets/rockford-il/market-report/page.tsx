/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/market-report`;

export const metadata: Metadata = {
  title: 'Rockford IL Housing Market Report 2026',
  description:
    'Rockford IL housing market data: $170K median sale price, 14-day DOM, 89/100 compete score. Winnebago County investor analysis for 2026. Cash buyers: 888-440-5250.',
  alternates: { canonical: pageUrl },
};

export default function RockfordILMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Rockford IL Housing Market Report 2026 — Winnebago County Data', pageUrl, '2026-04-18'),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Rockford IL Housing Market Report 2026
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              According to Zillow (Feb 28, 2026), Rockford ZHVI: $142,859 (+4.8% YoY). Per Redfin (March 2026), median sale price: $170,000 (+17.2% YoY). Compete score 89/100. Median sold DOM: 14 days. RDC hotness rank #11. Transfer tax: $0.75/$500, no municipal RETT. Winnebago County foreclosure timeline 14-20 months. Cash offers 70-78% of FMV. USA Home Buyers: 888-440-5250.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford IL Key Market Metrics (March 2026)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">YoY Change</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow ZHVI (avg home value)</td><td className="p-3">$142,859</td><td className="p-3 text-green-700">+4.8%</td><td className="p-3 text-gray-500">Zillow (Feb 28, 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price</td><td className="p-3">$170,000</td><td className="p-3 text-green-700">+17.2%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per Square Foot</td><td className="p-3">$109</td><td className="p-3 text-green-700">+10.1%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median DOM (sold homes)</td><td className="p-3">14 days</td><td className="p-3">—</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">RDC Active Listing DOM</td><td className="p-3">34.5 days</td><td className="p-3">—</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">RDC Hotness Score</td><td className="p-3">93.645 — Rank #11 nationally</td><td className="p-3">—</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">89/100 — Very Competitive</td><td className="p-3">—</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-List Ratio</td><td className="p-3">100.2%</td><td className="p-3 text-green-700">+2.6 pts</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Homes Sold (March 2026)</td><td className="p-3">109</td><td className="p-3">—</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">IL State Median Home Price</td><td className="p-3">$299,000</td><td className="p-3">—</td><td className="p-3 text-gray-500">WIFR/Statewide (Feb 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Rockford discount to IL median</td><td className="p-3">$129,000 (43% below state median)</td><td className="p-3">—</td><td className="p-3 text-gray-500">Derived from above</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax — Winnebago County & Illinois State</h2>
          <p className="text-gray-700 mb-4">
            Illinois charges a state real estate transfer tax of $0.50 per $500 of consideration under 35 ILCS 200/31-10 — seller pays by custom. Winnebago County adds $0.25 per $500 under 55 ILCS 5/5-1031. The City of Rockford imposes no municipal real estate transfer tax (confirmed: ATG tax-ordinance directory returns no Rockford entry; Rockford Municode has no RETT chapter). Total combined rate: $0.75/$500 (0.15% of sale price).
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Sale Price</th>
                  <th className="text-left p-3">IL State Tax ($0.50/$500)</th>
                  <th className="text-left p-3">Winnebago Co. ($0.25/$500)</th>
                  <th className="text-left p-3">Municipal Tax</th>
                  <th className="text-left p-3">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">$83,093 (Jackson Oaks ZHVI)</td><td className="p-3">$83.09</td><td className="p-3">$41.55</td><td className="p-3">$0</td><td className="p-3 font-medium">$124.64</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$142,859 (ZHVI average)</td><td className="p-3">$142.86</td><td className="p-3">$71.43</td><td className="p-3">$0</td><td className="p-3 font-medium">$214.29</td></tr>
                <tr className="bg-white"><td className="p-3">$157,396 (Churchill Grove ZHVI)</td><td className="p-3">$157.40</td><td className="p-3">$78.70</td><td className="p-3">$0</td><td className="p-3 font-medium">$236.09</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$170,000 (Redfin median)</td><td className="p-3">$170.00</td><td className="p-3">$85.00</td><td className="p-3">$0</td><td className="p-3 font-medium">$255.00</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm">When you sell to USA Home Buyers, we cover all closing costs — transfer taxes, Winnebago County recording fees ($54 standard document), and title/settlement fees. Seller receives the agreed net price with no deductions at closing.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford vs. Springfield — Illinois Market Comparison</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Factor</th>
                  <th className="text-left p-3">Rockford (Winnebago Co.)</th>
                  <th className="text-left p-3">Springfield (Sangamon Co.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Population</td><td className="p-3">147,521</td><td className="p-3">113,330</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">RDC Hotness Rank (Mar 2026)</td><td className="p-3">#11 (93.645)</td><td className="p-3">#10 (93.979)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Median Sale Price</td><td className="p-3">$170,000 (+17.2% YoY)</td><td className="p-3">$187,000 (+23% YoY)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Zillow ZHVI</td><td className="p-3">$142,859</td><td className="p-3">$163,198</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">89/100</td><td className="p-3">78/100</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Dominant Economy</td><td className="p-3">Manufacturing/diversified</td><td className="p-3">State government</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure Timeline</td><td className="p-3">14–20 months</td><td className="p-3">12–15 months</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Municipal Transfer Tax</td><td className="p-3">$0 (none)</td><td className="p-3">$0 (none)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash Offer Range — Rockford IL</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Scenario</th>
                  <th className="text-left p-3">Typical Range</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Standard cash offer</td><td className="p-3">70–78% of FMV</td><td className="p-3">Standard IL investor range; Rockford's lower price point makes this accessible</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Distressed / major repairs needed</td><td className="p-3">60–70% of FMV</td><td className="p-3">Common in pre-1970 Rockford stock with deferred maintenance</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Competitive (multiple bidders)</td><td className="p-3">75–82% of FMV</td><td className="p-3">89/100 Redfin score drives competitive cash above typical range</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm mt-2">On the $142,859 ZHVI, a 70-78% range = $100,001-$111,430. On the $170,000 Redfin median, that's $119,000-$132,600. Actual offer depends on condition, neighborhood, and liens.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Winnebago County Recorder & Closing Costs</h2>
          <p className="text-gray-700 mb-4">
            The Winnebago County Clerk &amp; Recorder is Lori Gummow, located at 404 Elm Street, Room 104, Rockford IL 61101, phone (815) 319-4250. Website: wincoil.gov/departments/recorders-office. According to Winnebago County Recorder (2025), recording fees: standard documents (8.5×11", meets formatting requirements) = $54.00; non-standard documents = $66.00. (Effective January 1, 2025, Public Act 103-0884.) Illinois MyDec (Real Estate Transfer Declaration) must be filed at closing via mytax.illinois.gov — no separate fee.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford Market Context — The Rust Belt Story</h2>
          <p className="text-gray-700 mb-4">
            Rockford's manufacturing heritage defines its housing market in ways that don't apply to Springfield or Chicago suburbs. The city was once the world's largest producer of machine screws and a major furniture manufacturing center — Illinois Tool Works, Rockford Chair &amp; Furniture, and dozens of related suppliers employed generations of working-class families who purchased modest homes in the neighborhoods around their factories. When those industries contracted in the 1980s and 1990s, Rockford's homeowner base aged in place on fixed incomes, and deferred maintenance accumulated across a housing stock that was already aging.
          </p>
          <p className="text-gray-700 mb-4">
            Per Redfin (March 2026), Rockford’s median sale price ($170,000) is 43% below the Illinois state median ($299,000), where 14-day sold DOM signals genuine demand from conventional buyers, but where a significant share of the available housing stock — the pre-1970 bungalows, two-flats, and ranches that constitute the majority of Rockford's residential inventory — requires renovations that sellers can't fund and buyers can't finance through conventional channels.
          </p>
          <p className="text-gray-700 mb-4">
            That gap between market demand and financeable supply is where cash buyers operate. USA Home Buyers serves Rockford sellers who need speed, certainty, and a buyer who doesn't require inspection-contingency repairs or conventional financing approval.
          </p>
        </section>

        <section className="my-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-brand-light rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Data Sources</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Redfin Rockford market page (Mar 2026)</li>
                <li>• Zillow ZHVI Rockford (Feb 28, 2026)</li>
                <li>• Realtor.com Market Hotness Index (Mar 2026)</li>
                <li>• WIFR Rockford housing market (Apr 1, 2026)</li>
                <li>• ATG tax-ordinance directory (transfer tax)</li>
                <li>• wincoil.gov Recorder's Office (recording fees)</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Related Pages</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="/markets/rockford-il" className="text-brand-primary hover:underline">Rockford IL Main Page</Link></li>
                <li><Link href="/markets/rockford-il/neighborhoods" className="text-brand-primary hover:underline">Neighborhood Price Guide</Link></li>
                <li><Link href="/markets/rockford-il/foreclosure" className="text-brand-primary hover:underline">Foreclosure Help</Link></li>
                <li><Link href="/markets/springfield-il" className="text-brand-primary hover:underline">Springfield IL (our first IL market)</Link></li>
                <li><Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline">Illinois Seller's Legal Guide</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Rockford IL Home?" sourcePage="/markets/rockford-il/market-report" />
      </div>
    </>
  );
}
