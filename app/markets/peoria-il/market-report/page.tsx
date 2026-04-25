/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/peoria-il/market-report`;

export const metadata: Metadata = {
  title: 'Peoria IL Housing Market Report 2026 — Peoria County Data',
  description:
    'Peoria IL housing market data: $115,649 ZHVI, $139K Redfin median, $800 three-layer transfer tax. Peoria County investor analysis for 2026. Cash buyers: 888-274-5006.',
  alternates: { canonical: pageUrl },
};

export default function PeoriaILMarketReportPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Peoria IL Housing Market Report 2026 — Peoria County Data', pageUrl, '2026-04-18'),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › Market Report
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Peoria IL Housing Market Report 2026
          </h1>
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
            <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
            <p className="text-white text-sm leading-relaxed">
According to Zillow (February 2026), Peoria ZHVI: $115,649 (+3.7% YoY). Per Redfin (January 2026), city median: $139,000 (+8.2% YoY). Source: Peoria City Code §27-226 — Peoria's municipal RETT adds $500 on a $200K sale; $800 total three-layer stack. RDC rank #29. Cash offers 65-75% of FMV. Call 888-274-5006.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria IL Key Market Metrics (2026)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Peoria IL</th>
                  <th className="text-left p-3">Source / Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow Home Value Index (ZHVI)</td><td className="p-3">$115,649</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">ZHVI YoY Change</td><td className="p-3">+3.7%</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Median Sale Price (city)</td><td className="p-3">$139,000</td><td className="p-3 text-gray-500">Redfin (Jan 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale YoY (city)</td><td className="p-3">+8.2%</td><td className="p-3 text-gray-500">Redfin (Jan 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Median Sale Price (county)</td><td className="p-3">$163,000</td><td className="p-3 text-gray-500">Redfin (Jan 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale YoY (county)</td><td className="p-3">-1.4%</td><td className="p-3 text-gray-500">Redfin (Jan 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FRED Listing Price per Sq Ft</td><td className="p-3">$104/sq ft</td><td className="p-3 text-gray-500">FRED (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Avg. Pending Timeline</td><td className="p-3">~5 days (entry-level segment)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">RDC Hotness Rank</td><td className="p-3">#29 (Peoria MSA)</td><td className="p-3 text-gray-500">Realtor.com</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">IL State Transfer Tax</td><td className="p-3">$0.50/$500 (0.10%) — seller pays</td><td className="p-3 text-gray-500">35 ILCS 200/31-10</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Peoria County Transfer Tax</td><td className="p-3">$0.25/$500 (0.05%) — seller pays</td><td className="p-3 text-gray-500">55 ILCS 5/5-1031</td></tr>
                <tr className="bg-gray-50 font-semibold"><td className="p-3">Peoria City Municipal RETT</td><td className="p-3 text-red-700">$2.50/$1,000 (0.25%) — seller pays</td><td className="p-3 text-gray-500">Peoria City Code §27-226 (eff. 03/04/2025)</td></tr>
                <tr className="bg-white font-bold"><td className="p-3">Total Transfer Tax ($200K sale)</td><td className="p-3 text-red-700">$800.00 (0.40%)</td><td className="p-3 text-gray-500">All three layers combined</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Population (city)</td><td className="p-3">112,169 (-1.2% since 2019)</td><td className="p-3 text-gray-500">2024 ACS Estimate</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median Household Income (city)</td><td className="p-3">$59,410</td><td className="p-3 text-gray-500">2024 ACS Estimate</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Pre-1940 Housing Stock</td><td className="p-3">24.3%</td><td className="p-3 text-gray-500">biggestuscities.com</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure Type</td><td className="p-3">Judicial — 735 ILCS 5/15-1101</td><td className="p-3 text-gray-500">Illinois Mortgage Foreclosure Law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure Timeline</td><td className="p-3">12-18 months (Peoria County typical)</td><td className="p-3 text-gray-500">10th Judicial Circuit</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Understanding Peoria's Two-Index Price Difference</h2>
          <p className="text-gray-700 mb-4">
            Peoria shows a notable divergence between the Zillow Home Value Index and the Redfin median sale price — and understanding why matters for accurate seller expectations.
          </p>
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), the Peoria city ZHVI is $115,649. The ZHVI is a smoothed estimate of the typical home value across the full distribution of homes in the city — including the large volume of sub-$80,000 entry-level and distressed inventory concentrated in South Peoria and East Bluff.
          </p>
          <p className="text-gray-700 mb-4">
            Per Redfin (January 2026), the Peoria city median sale price is $139,000. The Redfin median reflects only homes that actually sold in the reporting period — which skews toward retail-ready properties that successfully completed transactions. Distressed homes that sold off-market, properties that were sold directly to investors without MLS exposure, and vacant lots don't always appear in Redfin's sold dataset.
          </p>
          <p className="text-gray-700 mb-4">
            The $23,351 gap between ZHVI and Redfin median tells you something specific: Peoria has a large inventory of low-value homes that pull down the overall value index, while the homes that sell on-market tend to be in better condition and command higher prices. For cash buyers, the ZHVI range is the relevant benchmark — it captures the typical home in Peoria, not just the ones that listed successfully.
          </p>
          <p className="text-gray-700 mb-4">
            The county comparison adds another layer. Per Redfin (January 2026), the Peoria County median sale price is $163,000 — $24,000 above the city median. Peoria County suburban communities (Dunlap, Peoria Heights, Chillicothe, Washington) have better-maintained housing stock and higher price points than Peoria city proper. When evaluating a Peoria city property, use city-level data, not county-level data.
          </p>
        </section>

        <section className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Peoria's Three-Layer Transfer Tax — A Downstate Rarity</h2>
          <p className="text-gray-700 mb-4">
            Most downstate Illinois cities do NOT impose a municipal real estate transfer tax. Peoria is the exception.
          </p>
          <p className="text-gray-700 mb-4">
            According to ATG (Attorneys' Title Guaranty Fund) and the City of Peoria government website (peoriagov.org/800/Real-Estate-Transfer-Tax), Peoria City imposes a municipal RETT at $2.50 per $1,000 of sale price under Peoria City Code, Article X, Section 27-226. The current ordinance rate was effective March 4, 2025.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Tax Layer</th>
                  <th className="text-left p-3">Rate</th>
                  <th className="text-left p-3">On $200,000 Sale</th>
                  <th className="text-left p-3">Where Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">Illinois State</td><td className="p-3">$0.50/$500 (0.10%)</td><td className="p-3">$200.00</td><td className="p-3">Peoria County Clerk, 324 Main St.</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Peoria County</td><td className="p-3">$0.25/$500 (0.05%)</td><td className="p-3">$100.00</td><td className="p-3">Peoria County Clerk, 324 Main St.</td></tr>
                <tr className="bg-amber-50 font-semibold"><td className="p-3">Peoria City Municipal</td><td className="p-3">$2.50/$1,000 (0.25%)</td><td className="p-3 text-red-700">$500.00</td><td className="p-3">Peoria City Hall, 419 Fulton St.</td></tr>
                <tr className="bg-white font-bold"><td className="p-3">TOTAL</td><td className="p-3">0.40%</td><td className="p-3 text-red-700">$800.00</td><td className="p-3">Two-stop closing process</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm mb-3">
            The two-stop process is important: the city stamp must be purchased at Peoria City Hall (419 Fulton St., Peoria, IL 61602) before the deed can be recorded. The state and county stamps are purchased at the Peoria County Clerk's Office (324 Main St., Room G4). Penalties for non-compliance: 2% per month interest plus a 20% penalty on the unpaid tax; the deed will NOT be recorded without the city stamp.
          </p>
          <p className="text-gray-700 text-sm font-medium">When you sell to USA Home Buyers, we handle both stops and cover all three layers of the transfer tax. You pay nothing at closing.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria's Economic Narrative — Caterpillar, Healthcare, and the Entry-Level Market</h2>
          <p className="text-gray-700 mb-4">
            Peoria's economic arc defines its housing market more directly than almost any other downstate Illinois city. For most of the 20th century, Peoria's identity was inseparable from Caterpillar Inc. — the industrial equipment manufacturer that employed tens of thousands at its local factories and whose executives populated Peoria's upper-end housing stock. When Caterpillar moved its global headquarters from Peoria to Deerfield (a Chicago suburb) in August 2017, the departure signaled the completion of a transition that had been underway for decades.
          </p>
          <p className="text-gray-700 mb-4">
            Caterpillar's manufacturing and engineering presence remains significant — the East Peoria facility and multiple local operations employ thousands of workers in the Peoria metro area. But the executive and professional housing demand that had supported $300,000+ properties on the north side has softened. The cash-buyer opportunity in Peoria is concentrated below $150,000 — in the entry-level and distressed segments that never relied on Caterpillar's executive class.
          </p>
          <p className="text-gray-700 mb-4">
            OSF HealthCare (OSF Saint Francis Medical Center) and UnityPoint Health (Methodist Medical Center of Illinois) have emerged as the dominant employment anchors, with thousands of healthcare workers spread across the Peoria metro. Bradley University adds a university-adjacent rental and entry-level homeownership demand base. These employers sustain reliable demand in the $80,000–$160,000 range — precisely where cash buyers operate.
          </p>
          <p className="text-gray-700 mb-4">
            Per the 2024 ACS Estimate, Peoria city's median household income is $59,410 — significantly below the Illinois state median. The family poverty rate is 14.1%. These metrics directly correlate with the prevalence of distressed property in the South Side and East Bluff, the concentration of pre-foreclosure and tax-delinquent inventory, and the motivated-seller profile that makes Peoria one of the most active cash-buyer markets in downstate Illinois.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria Housing Stock — 24.3% Pre-1940 and What It Means</h2>
          <p className="text-gray-700 mb-4">
            Source: biggestuscities.com confirms that 24.3% of all Peoria housing units were built before 1940 — the highest percentage among the three Illinois markets in USA Home Buyers' portfolio. This statistic has practical consequences for nearly every type of property transaction in Peoria.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-1940 Peoria construction is predominantly balloon-frame: a 19th and early 20th century technique in which continuous vertical studs run from foundation to roof without firestops at floor levels. Balloon-frame structures are highly susceptible to fire propagation — a fire starting in the basement can travel vertically through wall cavities to the attic without encountering structural breaks. In a fire-damage scenario on a pre-1940 Peoria home, the assessment is almost always worse than the visible damage suggests.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-1940 homes also commonly contain lead-based paint (federal disclosure required for all pre-1978 construction), asbestos in insulation and floor tiles (pre-1980 construction), and original knob-and-tube wiring that most insurers and lenders will not cover or finance without remediation. These characteristics eliminate a significant portion of the retail buyer pool — conventional and FHA lenders routinely condition on remediation that can cost $15,000–$40,000 before closing.
          </p>
          <p className="text-gray-700 mb-4">
            For sellers of pre-1940 Peoria homes, the cash-buyer market exists precisely because these properties don't qualify for conventional financing. USA Home Buyers purchases them as-is, in any condition, without requiring remediation.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria vs. Illinois State Benchmarks</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Peoria City</th>
                  <th className="text-left p-3">IL State</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">ZHVI</td><td className="p-3">$115,649</td><td className="p-3">$282,909</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median (city/state)</td><td className="p-3">$139,000</td><td className="p-3">~$280,000</td><td className="p-3 text-gray-500">Redfin (Jan 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">ZHVI YoY Change</td><td className="p-3">+3.7%</td><td className="p-3">+3.8%</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median HH Income</td><td className="p-3">$59,410</td><td className="p-3">~$72,000</td><td className="p-3 text-gray-500">2024 ACS</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Poverty Rate</td><td className="p-3">14.1%</td><td className="p-3">~11%</td><td className="p-3 text-gray-500">2024 ACS</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Pre-1940 Housing Stock</td><td className="p-3">24.3%</td><td className="p-3">~14%</td><td className="p-3 text-gray-500">biggestuscities.com</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash Offer Range for Peoria IL Homes</h2>
          <p className="text-gray-700 mb-4">
            Cash offers from USA Home Buyers typically run 65-75% of fair market value, depending on the property's condition, location within Peoria, existing liens, and required remediation. For context:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>South Peoria / East Bluff distressed homes:</strong> $30,000–$75,000 range (high deferred maintenance, significant rehab required)</li>
            <li><strong>Knoxville Ave / Bradley Park middle tier:</strong> $65,000–$100,000 range (moderate condition, rental history)</li>
            <li><strong>Kellar Heights / Richwoods motivated seller:</strong> $100,000–$150,000 range (better condition, motivated circumstance)</li>
            <li><strong>Caterpillar-era retiree estate (North Side):</strong> $90,000–$140,000 range (deferred maintenance on otherwise sound structure)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            We cover all closing costs on every Peoria transaction — including the full $800 three-layer transfer tax stack, title insurance, and recording fees. The offer price you receive is the amount that goes to you.
          </p>
        </section>

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/foreclosure', label: 'Foreclosure Info' },
              { href: '/markets/peoria-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/peoria-il/probate', label: 'Probate Sale' },
              { href: '/markets/peoria-il/fire-damage', label: 'Fire Damage' },
              { href: '/sell-house-fast-illinois', label: 'IL Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>


      <VideoEmbed
        src="/videos/peoria-il/market-report.mp4"
        title="Peoria IL Real Estate Market Report 2026"
        poster="/videos/peoria-il/market-report-poster.jpg"
        subtitle="Caterpillar headquarters, healthcare anchor, steady appreciation in Peoria County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Peoria IL market 2026: Caterpillar headquarters and OSF HealthCare anchor steady demand. Illinois River waterfront appeal. Steady appreciation. USA Home Buyers gives you a cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Peoria IL Home?" sourcePage="/markets/peoria-il/market-report" />
      </div>
    </>
  );
}
