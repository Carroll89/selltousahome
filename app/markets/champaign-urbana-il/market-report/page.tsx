/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/market-report`;

export const metadata: Metadata = {
  title: 'Champaign-Urbana IL Housing Market Report 2026',
  description:
    'Champaign-Urbana IL housing market data: Champaign city ZHVI $231,273, Urbana city $199,534, Champaign metro ZHVI $229,687. Transfer tax clarification: 0.15% not 1.5%. Cash buyers: 888-274-5006.',
  alternates: { canonical: pageUrl },
};

export default function ChampaignUrbanaMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Champaign-Urbana IL Housing Market Report 2026 — Champaign County Data', pageUrl, '2026-04-18'),

        videoObjectSchema({
          name: 'Champaign-Urbana IL Real Estate Market Report 2026',
          description: 'University of Illinois anchor, tech sector growth, steady appreciation in Champaign County',
          contentUrl: `${SITE_URL}/videos/champaign-urbana-il/market-report.mp4`,
          thumbnailUrl: `${SITE_URL}/videos/champaign-urbana-il/market-report-poster.jpg`,
        }),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Champaign-Urbana IL Housing Market Report 2026
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              According to Zillow Research (2026-03-31), Champaign city ZHVI is $231,273 (+5.7% YoY), Urbana city is $199,534 (+7.2%), Champaign County is $231,346 (+6.9%), and Champaign metro is $229,687 (+6.8%). Per Redfin (Mar 2026), Champaign County median sale price is $228,000 (-3.8%). Transfer tax: 0.15% combined — $300 on $200K. Note: the Champaign County Clerk's website shows "1.5%" — that is a decimal-point typo; the correct rate is 0.15% per 35 ILCS 200/31-10 + 55 ILCS 5/5-1031.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Champaign-Urbana Key Market Metrics (March 2026 source data)</h2>
          <p className="text-gray-700 mb-4">
            The Champaign-Urbana MSA is a single-county metropolitan area anchored by the University of Illinois Urbana-Champaign. According to Zillow Research (2026-03-31), the Champaign metro ZHVI — the broadest measure of typical home values — stands at $229,687, up 6.8% year over year. This metro figure includes suburban Savoy, newer Research Park-adjacent construction, and communities across Champaign County that collectively sit above both cities' individual averages.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Champaign City</th>
                  <th className="text-left p-3">Urbana City</th>
                  <th className="text-left p-3">Metro / County</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow ZHVI (Research CSV, 2026-03-31)</td><td className="p-3">$231,273 (+5.7%)</td><td className="p-3">$199,534 (+7.2%)</td><td className="p-3">$229,687 (+6.8% metro) / $231,346 (+6.9% county)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price (Mar 2026)</td><td className="p-3">$222,500 (-2.6%)</td><td className="p-3">$212,000 (-1.4%)</td><td className="p-3">$228,000 (-3.8% county)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sold DOM / sale-to-list</td><td className="p-3">58 days / 98.6%</td><td className="p-3">62 days / 98.2%</td><td className="p-3">58 days / 98.3% county</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">RDC Hotness Rank</td><td className="p-3">—</td><td className="p-3">—</td><td className="p-3">#77 nationally</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FRED/Realtor CBSA listing support (Mar 2026)</td><td className="p-3">—</td><td className="p-3">—</td><td className="p-3">$276,675 listing price / 45.75 active-listing DOM</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic mb-4">
            Urbana's current Redfin figure (-1.4% YoY) reflects normal thin-sample volatility, while Zillow Research shows Urbana city ZHVI up +7.2% YoY. Keep Urbana city metrics separate from Champaign city, Champaign County, and metro context.
          </p>
          <p className="text-sm text-gray-600 italic">
            Note: ZHVI (Zillow Home Value Index) is a smoothed estimate of typical home values — it is NOT a median sale price. Redfin reports actual transaction medians. Use county-level Redfin ($228,000) as the primary transaction benchmark and metro ZHVI ($229,687) as the trend indicator. Redfin closed-sale metrics are March 2026; Zillow Research values use the 2026-03-31 CSV vintage.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Champaign vs. Urbana — Why the Prices Differ</h2>
          <p className="text-gray-700 mb-4">
            Champaign city trades at a premium to Urbana city for structural reasons that have nothing to do with short-term market conditions. Champaign's housing stock is newer on average — according to NeighborhoodScout, approximately 11.29% of Champaign's housing stock pre-dates 1939, compared to a higher proportion in Urbana's University District and Downtown. Champaign also hosts the Research Park's southwest corridor and Savoy-adjacent newer construction, which pulls the city-level average upward.
          </p>
          <p className="text-gray-700 mb-4">
            Urbana's lower price point reflects its older housing stock (University District pre-war homes, Crystal Lake Park 1950s ranches, South Urbana working-class neighborhoods) and the concentrated effect of UIUC grad-student rental demand, which keeps rental yields high but sale values lower relative to comparable Champaign properties. The county seat — and all legal infrastructure — is in Urbana at 101 E. Main Street.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Factor</th>
                  <th className="text-left p-3">Champaign</th>
                  <th className="text-left p-3">Urbana</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">ZHVI (Zillow Research CSV, 2026-03-31)</td><td className="p-3">$231,273</td><td className="p-3">$199,534</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Population</td><td className="p-3">89,996 (2024 ACS)</td><td className="p-3">~39,831 (2024 ACS)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Pre-1939 Housing %</td><td className="p-3">~11.29%</td><td className="p-3">Higher (University District)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County Seat / Courts</td><td className="p-3">No</td><td className="p-3">Yes — 101 E. Main St.</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Primary Character</td><td className="p-3">Growing college town, Research Park tech</td><td className="p-3">Historic county seat, UIUC-adjacent</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Dominant Neighborhoods</td><td className="p-3">Campustown, Stone Creek, Southwest</td><td className="p-3">University District, Old West Urbana, Downtown</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax — Champaign County & Illinois State</h2>
          <p className="text-gray-700 mb-4">
            According to the Illinois Department of Revenue (tax.illinois.gov), the state real estate transfer tax is $0.50 per $500 of consideration under 35 ILCS 200/31-10 — seller pays by custom. Per 55 ILCS 5/5-1031, Champaign County adds $0.25 per $500 (Atlas verified via Champaign County Ordinance 96). Neither the City of Champaign nor the City of Urbana imposes a municipal real estate transfer tax (both ATG-404 confirmed). Total combined rate: $0.75/$500 (0.15% of sale price).
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-6">
            <h3 className="font-bold text-amber-900 mb-2">⚠️ Common Misconception: 1.5% vs. 0.15%</h3>
            <p className="text-amber-800 text-sm mb-3">
              The Champaign County Clerk's website states: "Real Estate Transfer tax assessed in the amount of 1.5% of the value of the property." This is a decimal-point typo on an official .gov website. The actual rate is 0.15% — a 10x error.
            </p>
            <p className="text-amber-800 text-sm mb-3">
              The Clerk's own math confirms the correct rate: "Of this, 2/3 is given to the State of Illinois. 1/3 remains in the County." Illinois state rate = $0.50/$500. County rate = $0.25/$500. Combined = $0.75/$500. $0.50/$0.75 = 2/3 (state share). $0.25/$0.75 = 1/3 (county share). That math works at 0.15% total — not 1.5%.
            </p>
            <p className="text-amber-800 text-sm font-medium">
              Per Champaign County Clerk (retrieved April 2026), 35 ILCS 200/31-10, and 55 ILCS 5/5-1031, the correct combined state + county transfer tax is 0.15% ($300 on a $200,000 sale), not 1.5% as stated on the Clerk's website.
            </p>
            <p className="text-amber-700 text-xs mt-2">Source: champaigncountyclerkil.gov/recorder-deeds/about-office; tax.illinois.gov/research/taxinformation/property/realestate.html; Champaign County Ordinance 96 (champaigncountyclerk.com/countyboard/ordinances/o00001_01000/o00096.pdf)</p>
          </div>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Sale Price</th>
                  <th className="text-left p-3">IL State ($0.50/$500)</th>
                  <th className="text-left p-3">Champaign Co. ($0.25/$500)</th>
                  <th className="text-left p-3">Municipal</th>
                  <th className="text-left p-3">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">$199,534 (Urbana ZHVI)</td><td className="p-3">$199.53</td><td className="p-3">$99.77</td><td className="p-3">$0</td><td className="p-3 font-medium">$299.30</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$231,273 (Champaign ZHVI)</td><td className="p-3">$231.27</td><td className="p-3">$115.64</td><td className="p-3">$0</td><td className="p-3 font-medium">$346.91</td></tr>
                <tr className="bg-white"><td className="p-3">$200,000 (round example)</td><td className="p-3">$200.00</td><td className="p-3">$100.00</td><td className="p-3">$0</td><td className="p-3 font-bold">$300.00</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$228,000 (county Redfin median)</td><td className="p-3">$228.00</td><td className="p-3">$114.00</td><td className="p-3">$0</td><td className="p-3 font-medium">$342.00</td></tr>
                <tr className="bg-white"><td className="p-3">$222,500 (Champaign city Redfin median)</td><td className="p-3">$222.50</td><td className="p-3">$111.25</td><td className="p-3">$0</td><td className="p-3 font-medium">$333.75</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm">When you sell to USA Home Buyers, we cover all closing costs — transfer taxes, recording fees at the Champaign County Recorder (1776 E. Washington Street, Urbana IL 61802, phone 217-384-3774), and title/settlement fees. Seller receives the agreed net price with no deductions at closing.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Champaign-Urbana vs. Other Illinois Markets</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Factor</th>
                  <th className="text-left p-3">Champaign-Urbana</th>
                  <th className="text-left p-3">Springfield</th>
                  <th className="text-left p-3">Rockford</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Metro ZHVI</td><td className="p-3">$229,687</td><td className="p-3">$163,198</td><td className="p-3">$142,859</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County Median Sale</td><td className="p-3">$228,000 (-3.8%)</td><td className="p-3">$187,000 (+23%)</td><td className="p-3">$170,000 (+17.2%)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">RDC Hotness Rank</td><td className="p-3">#77</td><td className="p-3">#10</td><td className="p-3">#11</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Economy Driver</td><td className="p-3">UIUC + Research Park</td><td className="p-3">State government</td><td className="p-3">Manufacturing/diversified</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure Timeline</td><td className="p-3">12-16 months</td><td className="p-3">12-15 months</td><td className="p-3">14-20 months</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Municipal Transfer Tax</td><td className="p-3">$0 (none)</td><td className="p-3">$0 (none)</td><td className="p-3">$0 (none)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The UIUC Market Dynamic — What Sets C-U Apart</h2>
          <p className="text-gray-700 mb-4">
            According to UIUC (illinois.edu), fall 2024 enrollment was approximately 57,000 students — a figure larger than the entire City of Urbana's population. This creates a housing market that behaves unlike any other downstate Illinois metro. The academic calendar drives a predictable May-August motivated-seller window as departing faculty and finishing PhD students try to sell before the next academic year begins.
          </p>
          <p className="text-gray-700 mb-4">
            The Research Park (researchpark.illinois.edu), home to 100+ tech companies including State Farm's innovation lab, Abbott, and Caterpillar Digital, adds a second demand driver: Research Park employment is more volatile than UIUC's academic employment — when startup funding ends or a company is acquired, affected employees need to sell quickly to relocate to their next opportunity.
          </p>
          <p className="text-gray-700 mb-4">
            Per the Champaign-Urbana Association of REALTORS (misturat.com, 2025 annual data), Champaign city full-year 2025 median was $237,500 (+1.1%) and Urbana city was $225,000 (+13.5%). These REALTOR association figures diverge from Redfin's monthly snapshots — the discrepancy reflects different sample periods and methodologies.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash Offer Range — Champaign-Urbana IL</h2>
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
                <tr className="bg-white"><td className="p-3 font-medium">Standard cash offer</td><td className="p-3">68-76% of FMV</td><td className="p-3">Standard IL investor range for Champaign-Urbana price tier</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Distressed / major repairs</td><td className="p-3">60-68% of FMV</td><td className="p-3">Common in pre-1940 University District and South Urbana stock</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Clean, well-maintained</td><td className="p-3">72-80% of FMV</td><td className="p-3">Research Park-adjacent newer construction; Southwest Champaign ranches</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm mt-2">On the $228,000 county Redfin median, a 68-76% range = $155,040-$173,280. On the Champaign city ZHVI of $231,273, that's $157,266-$175,767. Actual offer depends on condition, neighborhood, and liens. We cover all closing costs — zero deductions at closing.</p>
        </section>

        <section className="my-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-brand-light rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Data Sources</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Zillow Research ZHVI — Champaign city, Urbana city, County, Metro (2026-03-31)</li>
                <li>• Redfin — Champaign city, Urbana city, Champaign County (Mar 2026)</li>
                <li>• FRED MEDLISPRI16580 / MEDAONMAMSA16580, 2026-03-01 (CBSA listing price and active-listing DOM)</li>
                <li>• Champaign-Urbana Association of REALTORS / misturat.com (2025 annual)</li>
                <li>• ATG tax-ordinance directory (municipal transfer tax verification)</li>
                <li>• Champaign County Clerk / Recorder (1776 E. Washington, Urbana)</li>
                <li>• 35 ILCS 200/31-10; 55 ILCS 5/5-1031 (transfer tax statutes)</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Related Pages</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="/markets/champaign-urbana-il" className="text-brand-primary hover:underline">Champaign-Urbana IL Main Page</Link></li>
                <li><Link href="/markets/champaign-urbana-il/neighborhoods" className="text-brand-primary hover:underline">Neighborhood Price Guide</Link></li>
                <li><Link href="/markets/champaign-urbana-il/foreclosure" className="text-brand-primary hover:underline">Foreclosure Help</Link></li>
                <li><Link href="/markets/springfield-il" className="text-brand-primary hover:underline">Springfield IL (first IL market)</Link></li>
                <li><Link href="/markets/rockford-il" className="text-brand-primary hover:underline">Rockford IL (second IL market)</Link></li>
                <li><Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline">Illinois Seller's Legal Guide</Link></li>
              </ul>
            </div>
          </div>
        </section>

      {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
      <VideoEmbed
        src="/videos/champaign-urbana-il/market-report.mp4"
        title="Champaign-Urbana IL Real Estate Market Report 2026"
        poster="/videos/champaign-urbana-il/market-report-poster.jpg"
        subtitle="University of Illinois anchor, tech sector growth, steady appreciation in Champaign County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Champaign-Urbana IL market 2026: University of Illinois drives consistent demand and a strong rental market. Tech sector growth in Research Park. Steady appreciation while remaining affordable. USA Home Buyers gives you a cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Champaign-Urbana Home?" sourcePage="/markets/champaign-urbana-il/market-report" />
      </div>
    </>
  );
}
