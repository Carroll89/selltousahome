/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bloomington-il/market-report`;

export const metadata: Metadata = {
  title: 'Bloomington IL Housing Market Report 2026',
  description:
    'Bloomington IL housing market data: $228,634 ZHVI (+7.5%), $300K median sale, 4-day pending pace. McLean County investor analysis for 2026. Cash buyers: 888-274-5006.',
  alternates: { canonical: pageUrl },
};

export default function BloomingtonILMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Bloomington IL Housing Market Report 2026 — McLean County Data', pageUrl, '2026-04-19'),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Bloomington IL Housing Market Report 2026
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
              According to Zillow (February 2026), Bloomington ZHVI: $228,634 (+7.5% YoY) — homes pending in ~4 days. Per Redfin (March 2026), median sale price: $300,000 (+33% YoY); 83 homes sold; sale-to-list 99.2%. Source: Realtor.com — Bloomington-Normal MSA ranked #27 hottest nationally. Transfer tax: $300 on $200K sale (IL state + McLean County; no Bloomington municipal RETT). Insurance capital narrative: State Farm world HQ, Country Financial HQ, ISU. Call (888) 274-5006.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Bloomington IL Key Market Metrics (March 2026)</h2>
          <p className="text-gray-700 mb-4">
            Two data sources tell the Bloomington story, and they need to be read together. According to Zillow (February 2026), the Bloomington Home Value Index (ZHVI) — a smoothed measure of the 50th percentile home value — stands at $228,634, up 7.5% year over year. Per Redfin (March 2026), the median sale price for Bloomington city hit $300,000, up 33% year over year based on 83 transactions. These figures measure different things: ZHVI is a methodologically stable index of typical home value across the full housing stock; the Redfin median reflects only homes that actually sold in a given month and is more volatile in a thin market with 83 monthly transactions.
          </p>
          <p className="text-gray-700 mb-4">
            The most operationally significant Zillow data point for sellers is the pending timeline: homes in Bloomington go pending in roughly 4 days on average — a pace that signals genuine, strong demand from qualified buyers. This is not a soft market.
          </p>
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
                <tr className="bg-white"><td className="p-3 font-medium">Zillow ZHVI (typical home value)</td><td className="p-3">$228,634</td><td className="p-3 text-green-700">+7.5%</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price</td><td className="p-3">$300,000</td><td className="p-3 text-green-700">+33.0%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Avg. Days to Pending</td><td className="p-3">~4 days</td><td className="p-3">—</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Days on Market</td><td className="p-3">50 days</td><td className="p-3">—</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">61/100 — Somewhat Competitive</td><td className="p-3">—</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-List Ratio</td><td className="p-3">99.2%</td><td className="p-3">—</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Homes Sold (March 2026)</td><td className="p-3">83</td><td className="p-3">—</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">RDC Hotness Rank</td><td className="p-3">#27 (Bloomington-Normal MSA)</td><td className="p-3">—</td><td className="p-3 text-gray-500">Realtor.com (Apr 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median Household Income (city)</td><td className="p-3">$77,384</td><td className="p-3">—</td><td className="p-3 text-gray-500">ACS 2024</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Bloomington City Population</td><td className="p-3">78,907</td><td className="p-3">—</td><td className="p-3 text-gray-500">ACS 2024</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">McLean County Population</td><td className="p-3">171,556</td><td className="p-3">—</td><td className="p-3 text-gray-500">ACS 2024</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">IL Statewide ZHVI (comparison)</td><td className="p-3">$282,909 (+3.8%)</td><td className="p-3">—</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic mb-4">
            Note on ZHVI vs. Redfin median: these are different measurements. ZHVI ($228,634) is a stable, algorithmically smoothed index of the typical home across all of Bloomington. The Redfin median sale price ($300,000) reflects only homes that closed in March 2026 — in a market of 83 monthly transactions, a few high-value sales can significantly move the monthly median. Use ZHVI as the primary "what is a typical Bloomington home worth" figure; use Redfin median for "what have homes been selling for recently."
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Insurance-Capital Economic Driver</h2>
          <p className="text-gray-700 mb-4">
            Bloomington's housing market cannot be understood without understanding its economic structure. No other downstate Illinois city of comparable size (78,907 city population) has this concentration of financial services employment. State Farm Insurance, which has operated its world headquarters in Bloomington since 1922, is the largest mutual property and casualty insurer in the United States. At its peak, State Farm employed more than 18,000 people in McLean County. Post-pandemic restructuring has reduced that on-site headcount, but State Farm remains the dominant private employer in the region by a wide margin. Country Financial, another national insurer, operates its headquarters from Bloomington as well, adding approximately 1,200 local jobs.
          </p>
          <p className="text-gray-700 mb-4">
            According to Illinois State University's human resources data, ISU employs approximately 4,200 people — the largest single employer in the Bloomington-Normal twin-city area when counting Normal-city employees alongside Bloomington residents. Illinois Wesleyan University adds approximately 300 faculty and staff within Bloomington's city limits. Rivian Automotive's electric vehicle assembly plant in Normal, though not directly in Bloomington, anchors a supply-chain employment base that reverberates across the MSA.
          </p>
          <p className="text-gray-700 mb-4">
            The practical implication for the housing market: Bloomington buyers are predominantly insurance professionals, university faculty and staff, and healthcare workers at Advocate BroMenn Medical Center. This is a professional-class buyer pool that drives demand for homes priced in the $200,000-$350,000 range — which is precisely why both ZHVI and Redfin median figures have appreciated faster here than in Rockford or Springfield.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax — McLean County & Illinois State</h2>
          <p className="text-gray-700 mb-4">
            Per the Illinois Department of Revenue (tax.illinois.gov), Illinois charges a state real estate transfer tax of $0.50 per $500 of consideration under 35 ILCS 200/31-10 — seller pays by convention. McLean County adds $0.25 per $500 under its County Code, Article III: Real Estate Transfer Tax (confirmed via ecode360.com). The City of Bloomington imposes no municipal real estate transfer tax — confirmed: the ATG tax-ordinance directory returns a 404 for Bloomington, indicating no municipal RETT ordinance is registered. Bloomington is a home rule municipality under Illinois Constitution Art. VII, §6 and legally could enact a municipal RETT but has not done so. Total combined rate: $0.75/$500 (0.15% of sale price).
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Sale Price</th>
                  <th className="text-left p-3">IL State ($0.50/$500)</th>
                  <th className="text-left p-3">McLean Co. ($0.25/$500)</th>
                  <th className="text-left p-3">Municipal Tax</th>
                  <th className="text-left p-3">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">$150,000</td><td className="p-3">$150.00</td><td className="p-3">$75.00</td><td className="p-3">$0</td><td className="p-3 font-medium">$225.00</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$200,000</td><td className="p-3">$200.00</td><td className="p-3">$100.00</td><td className="p-3">$0</td><td className="p-3 font-medium">$300.00</td></tr>
                <tr className="bg-white"><td className="p-3">$228,634 (ZHVI)</td><td className="p-3">$228.63</td><td className="p-3">$114.32</td><td className="p-3">$0</td><td className="p-3 font-medium">$342.95</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$300,000 (Redfin median)</td><td className="p-3">$300.00</td><td className="p-3">$150.00</td><td className="p-3">$0</td><td className="p-3 font-medium">$450.00</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm">When you sell to USA Home Buyers, we cover all closing costs — transfer taxes, McLean County recording fees, and title/settlement fees. Seller receives the agreed net price with no deductions at closing.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Bloomington vs. Illinois Peer Markets — Comparison</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Factor</th>
                  <th className="text-left p-3">Bloomington (McLean Co.)</th>
                  <th className="text-left p-3">Rockford (Winnebago Co.)</th>
                  <th className="text-left p-3">Springfield (Sangamon Co.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow ZHVI</td><td className="p-3">$228,634</td><td className="p-3">$142,859</td><td className="p-3">$163,198</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">ZHVI YoY Change</td><td className="p-3 text-green-700 font-medium">+7.5%</td><td className="p-3">+4.8%</td><td className="p-3">+8.2%</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Median Sale</td><td className="p-3">$300,000</td><td className="p-3">$170,000</td><td className="p-3">$187,000</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Avg. Days to Pending</td><td className="p-3 text-green-700 font-medium">~4 days</td><td className="p-3">~14 days</td><td className="p-3">~27 days</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median HH Income</td><td className="p-3 text-green-700 font-medium">$77,384</td><td className="p-3">~$48,000</td><td className="p-3">$66,064</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Dominant Economy</td><td className="p-3">Insurance/university</td><td className="p-3">Manufacturing/diversified</td><td className="p-3">State government</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure Timeline</td><td className="p-3">12–16 months</td><td className="p-3">14–20 months</td><td className="p-3">12–15 months</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">McLean/County RETT</td><td className="p-3">$0.25/$500 (county only; no municipal)</td><td className="p-3">$0.25/$500 (county only; no municipal)</td><td className="p-3">$0.25/$500 (county; no confirmed municipal)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash Offer Range — Bloomington IL</h2>
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
                <tr className="bg-white"><td className="p-3 font-medium">Standard cash offer</td><td className="p-3">70–78% of FMV</td><td className="p-3">Bloomington's higher price point means more absolute dollars vs. Rockford/Springfield</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Distressed / major deferred maintenance</td><td className="p-3">60–70% of FMV</td><td className="p-3">Common in Founders&apos; Grove Victorians and West Bloomington pre-1950 stock</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">ISU-area rental (tenant-occupied)</td><td className="p-3">68–76% of FMV</td><td className="p-3">Tenant-in-place factor; Indiana Ave and Veterans Pkwy corridors</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm mt-2">On the $228,634 ZHVI, a 70-78% range = $160,044-$178,335. On the $300,000 Redfin median, that's $210,000-$234,000. Actual offer depends on condition, neighborhood, and liens.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Motivated-Seller Profile — Who Sells to Cash Buyers in Bloomington</h2>
          <p className="text-gray-700 mb-4">
            Bloomington's motivated-seller population differs significantly from Rockford's or Springfield's. Because the median household income is $77,384 and the dominant employment base is recession-resistant insurance and education, pure financial distress is a smaller share of the cash-buyer pipeline here than in manufacturing-dependent Rockford. Instead, the Bloomington cash-buyer market is driven by:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>State Farm and Country Financial retiree estates:</strong> Employees who spent 20-35 years at State Farm often own homes they purchased in the 1970s-1990s. When these homeowners pass, their adult children — who relocated for their own careers — need to sell an out-of-state property quickly. According to statefarm.com, State Farm has been headquartered in Bloomington since 1922; the company's decades of local employment created a large cohort of long-tenure homeowners whose estates are now cycling through McLean County probate.</li>
            <li><strong>ISU-area landlord exits:</strong> The Veterans Parkway corridor and Indiana Ave areas host high concentrations of rental properties serving ISU students and young professionals. Landlords who acquired these properties in the 1990s-2010s — often ISU-affiliated individuals themselves — reach a point of tired-landlord exit where the management burden outweighs the returns. These are often tenant-occupied at the time of sale.</li>
            <li><strong>Insurance-industry restructuring:</strong> State Farm undertook significant workforce reductions in 2020-2023. Country Financial has undergone similar restructuring. Early-retirement package recipients who purchased North Bloomington executive-commuter homes in the $250,000-$350,000 range sometimes need to liquidate assets quickly when transitioning to a fixed retirement income. A cash offer that closes in 14 days fits that timeline far better than a 50-day retail listing process.</li>
            <li><strong>Historic-district maintenance burden:</strong> Founders&apos; Grove Historic District and the four other Bloomington historic districts require Historic Preservation Commission approval for exterior modifications. This restricts renovation financing options (conventional lenders sometimes require improvements that the Historic Preservation Commission won't allow in the same form) and makes cash buyers attractive to owners of historic-district properties facing significant deferred maintenance.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">McLean County Recorder & Closing Logistics</h2>
          <p className="text-gray-700 mb-4">
            The McLean County Recorder of Deeds is located at 104 W. Front Street, Bloomington, IL 61701 — the same courthouse complex as the Circuit Clerk and Civil/Probate Division. Illinois uses the MyDec electronic system for filing Form PTAX-203 (Real Estate Transfer Declaration) at closing, per the Illinois Department of Revenue (tax.illinois.gov). No paper PTAX-203 is required at the recorder's office when using MyDec; the transfer tax stamps are generated electronically.
          </p>
          <p className="text-gray-700 mb-4">
            Typical cash close timeline in McLean County: 14-21 days from accepted offer. Title companies active in the Bloomington market include Attorneys&apos; Title Guaranty Fund (ATG), Old Republic National Title, and Fidelity National Title. Illinois is not an attorney-required state per legal convention; title companies run the closing independently.
          </p>
        </section>

        <section className="my-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-brand-light rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Data Sources</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Zillow Bloomington ZHVI (Feb 2026)</li>
                <li>• Redfin Bloomington market page (Mar 2026)</li>
                <li>• Realtor.com Market Hotness Index (Apr 2026)</li>
                <li>• Illinois-demographics.com (ACS 2024)</li>
                <li>• ATG tax-ordinance directory (transfer tax)</li>
                <li>• McLean County Code, ecode360.com (county RETT)</li>
                <li>• Illinois IDOR, tax.illinois.gov (state transfer tax)</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Related Pages</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="/markets/bloomington-il" className="text-brand-primary hover:underline">Bloomington IL Main Page</Link></li>
                <li><Link href="/markets/bloomington-il/neighborhoods" className="text-brand-primary hover:underline">Neighborhood Price Guide</Link></li>
                <li><Link href="/markets/bloomington-il/foreclosure" className="text-brand-primary hover:underline">Foreclosure Help</Link></li>
                <li><Link href="/markets/bloomington-il/inherited-property" className="text-brand-primary hover:underline">Inherited Property</Link></li>
                <li><Link href="/markets/springfield-il" className="text-brand-primary hover:underline">Springfield IL (our first IL market)</Link></li>
                <li><Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline">Illinois Seller&apos;s Legal Guide</Link></li>
              </ul>
            </div>
          </div>
        </section>


      <VideoEmbed
        src="/videos/bloomington-il/market-report.mp4"
        title="Bloomington IL Real Estate Market Report 2026"
        poster="/videos/bloomington-il/market-report-poster.jpg"
        subtitle="State Farm headquarters, Illinois State University, steady appreciation in McLean County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Bloomington IL market 2026: State Farm headquarters and Illinois State University anchor steady demand. Strong appreciation, affordable vs. Chicago. USA Home Buyers gives you a cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Bloomington IL Home?" sourcePage="/markets/bloomington-il/market-report" />
      </div>
    </>
  );
}
