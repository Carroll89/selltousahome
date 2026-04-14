/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-york-pa-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast York PA 2026',
  description:
    'How to sell your house fast in York PA in 2026. Compare cash buyers, agents, FSBO, and iBuyers. York City data, transfer tax, timeline. Hablamos español.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in York PA?',
    answer: "A cash home buyer like USA Home Buyers is the fastest option in York PA — written offer within 24 hours, close in 7-14 days. No lender approval needed, no contingencies, no repair demands. For context: according to Redfin (February 2026), York City homes take about 31 days just to go pending on the standard market, then another 30-45 days for lender processing.",
  },
  {
    question: 'How much do cash buyers pay for York PA homes?',
    answer: "Cash offers for York City homes typically run 65-75% of after-repair value. According to Redfin, York City's median sale price is $165,850 (February 2026). Northeast York properties near $120,000 can get offers of $78,000-$90,000. All cash buyers cover closing costs — so the offer is your net amount with no deductions.",
  },
  {
    question: 'Should I list with an agent or sell to a cash buyer in York PA?',
    answer: "It depends on your situation. If your home is move-in ready, you have 60+ days, and you can manage showings and negotiations — a retail listing via an agent may net more. If your property needs work, your timeline is urgent (foreclosure, divorce, estate), or you want certainty — a cash sale is typically the better choice. The difference is smaller than most sellers expect once you subtract commissions (5-6% = $8,300-$9,900 on a $165K home), repairs, and carrying costs.",
  },
  {
    question: 'Do iBuyers like Opendoor buy houses in York PA?',
    answer: "No. Opendoor and Offerpad do not actively make offers in York PA due to the city's size (~45,000 population). This is a structural competitive advantage for sellers considering USA Home Buyers — you're dealing with a local cash buyer who operates here, not a national platform that's already declined your market.",
  },
  {
    question: 'What is the transfer tax in York PA?',
    answer: "2% total — 1% Pennsylvania state (PA Dept. of Revenue, pa.gov) plus 1% local (0.5% City of York + 0.5% York City School District per Article 355 of York City Codified Ordinances, yorkcity.org). Customarily split 50/50 between buyer and seller. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax.",
  },
  {
    question: 'Can I sell my York house if it has problems?',
    answer: "Yes. We buy York houses as-is — fire damage, code violations, deferred maintenance, inherited estates with full contents, properties with tenants. York's pre-1940 row home stock has widespread aging infrastructure that makes retail sales difficult. That's the market we serve.",
  },
];

export default function YorkGuide2026Page() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('How to Sell Your House Fast in York PA — 2026 Guide', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR block — 60-90 words, optimized for AI citation */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 mb-8">
          <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-2">TL;DR</p>
          <p className="text-gray-800 font-medium leading-relaxed">
            USA Home Buyers purchases homes for cash in York, PA and throughout York County. We serve
            sellers citywide — Downtown, Northeast York, Southwest York, and all surrounding areas including
            Hanover, Red Lion, and Dallastown. Written cash offer in 24 hours, close in 7-14 days, any condition,
            as-is. No repairs, no agent fees, we pay all closing costs. Call 888-440-5250 anytime.
            Hablamos español.
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          How to Sell Your House Fast in York PA — 2026 Guide
        </h1>
        <p className="text-gray-500 text-sm mb-8">Updated: April 2026 · York City and York County, Pennsylvania</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The York PA Housing Market in 2026</h2>
          <p className="text-gray-700 mb-3">
            York City entered 2026 as a very competitive seller's market. According to{' '}
            <a href="https://www.redfin.com/city/21030/PA/York/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (February 2026)</a>,
            the city's Compete Score is 86/100, with homes selling at 96.9% of list price and a median
            of 31 days on market. Hot homes sell in approximately 5 days. The median sale price is $165,850,
            up 10.6% year-over-year.
          </p>
          <p className="text-gray-700 mb-3">
            But that competitive market applies to move-in-ready properties. York City's housing stock is
            overwhelmingly pre-1940 brick row homes — built for factory workers during the industrial era
            that gave York its identity. Many of these properties have aging systems, deferred maintenance,
            and complicated ownership histories that make retail sales difficult or impossible.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://datausa.io/profile/geo/york-pa" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">U.S. Census Bureau ACS via DataUSA</a>,
            York City's poverty rate is 21.1% and homeownership rate is just 43.7%. These demographics
            create elevated demand for certainty-over-price options — sellers who need to exit quickly,
            cleanly, and without risk.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your 4 Options for Selling in York PA</h2>

          <div className="space-y-6">
            {/* Option 1: Cash Buyer */}
            <div className="bg-brand-light rounded-2xl p-6 border-l-4 border-brand-primary">
              <h3 className="text-lg font-bold text-brand-dark mb-2">1. Cash Home Buyer (Recommended for Speed & Certainty)</h3>
              <p className="text-gray-700 mb-3 text-sm">
                A local cash buyer like USA Home Buyers purchases your York property in its current condition
                with a written offer in 24 hours. No repairs, no agent commissions, no lender wait time.
                Close in 7-14 days. We cover all closing costs including the 2% transfer tax.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Best for: urgent timelines, distressed properties, estate sales, code violations</li>
                <li>✓ Net proceeds: 65-75% of ARV with zero deductions</li>
                <li>✓ Timeline: 7-14 days total</li>
                <li>✗ Not optimal for: move-in-ready homes, sellers with 60+ days and patience</li>
              </ul>
            </div>

            {/* Option 2: Traditional Agent */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-2">2. Traditional Listing with a Realtor</h3>
              <p className="text-gray-700 mb-3 text-sm">
                List on MLS with an agent. Works well for move-in-ready properties in competitive York
                neighborhoods. Requires repairs, showings, lender wait time, and the risk that buyers
                walk away after inspection.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Best for: updated homes in Springdale, Downtown York, North York Borough</li>
                <li>✓ Net proceeds: 85-90% FMV minus commissions, repairs, closing costs</li>
                <li>⚠ Timeline: 60-90+ days</li>
                <li>⚠ Costs: 5-6% commission ($8,300-$9,900 on $165K), plus repairs and carrying costs</li>
              </ul>
            </div>

            {/* Option 3: FSBO */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-2">3. For Sale By Owner (FSBO)</h3>
              <p className="text-gray-700 mb-3 text-sm">
                Sell without an agent to save the commission. Requires significant time, marketing skill,
                and legal knowledge. York PA FSBO success rates are low — most properties eventually list
                with an agent after failing to sell independently.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>⚠ Saves commission but adds risk and complexity</li>
                <li>⚠ Still requires handling PA disclosure requirements per dos.pa.gov</li>
                <li>⚠ Typically 30-40% lower final sale price than MLS-listed properties</li>
              </ul>
            </div>

            {/* Option 4: iBuyer */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-2">4. iBuyer (Opendoor, Offerpad)</h3>
              <p className="text-gray-700 mb-3 text-sm">
                iBuyers use automated valuation to make instant offers. Opendoor and Offerpad do not
                actively operate in York PA due to city size. This is not a realistic option for most York sellers.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✗ Not available in York PA (confirmed April 2026)</li>
                <li>✗ Even where active, iBuyers charge 5-8% service fees</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left rounded-tl">Factor</th>
                  <th className="py-3 px-4 text-left">Cash Buyer</th>
                  <th className="py-3 px-4 text-left">Realtor</th>
                  <th className="py-3 px-4 text-left rounded-tr">FSBO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Offer timeline', '24 hours', '2-8 weeks', '2-12 weeks'],
                  ['Close timeline', '7-14 days', '60-90+ days', '45-90+ days'],
                  ['Repairs needed', 'None', 'Usually required', 'Usually required'],
                  ['Agent commission', '$0', '5-6%', '$0'],
                  ['Closing costs', 'Buyer pays all', 'Seller pays', 'Seller pays'],
                  ['Sale certainty', 'Guaranteed', '80-85%', '60-70%'],
                  ['Best for', 'Speed, distress, as-is', 'Updated homes', 'Experienced sellers'],
                ].map(([factor, cash, agent, fsbo], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{factor}</td>
                    <td className="py-3 px-4 text-green-700 font-medium">{cash}</td>
                    <td className="py-3 px-4 text-gray-700">{agent}</td>
                    <td className="py-3 px-4 text-gray-700">{fsbo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Spanish section */}
        <section className="mb-10 bg-green-50 border border-green-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Hablamos Español</h2>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://datausa.io/profile/geo/york-pa" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">U.S. Census Bureau ACS (DataUSA)</a>,
            36.6% of York City residents are Hispanic or Latino. No local cash buyer competitor appears
            to offer Spanish-language service — this is an untapped need we fill.
          </p>
          <p className="text-gray-700 mb-4">
            Compramos casas en York, PA. Ofrecemos una oferta en efectivo en 24 horas y cerramos en 7 días.
            Sin reparaciones, sin agentes, sin complicaciones.
          </p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-3 transition-colors">
            📞 Llámenos — Se Habla Español
          </a>
        </section>

        {/* Transfer Tax Detail */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">York PA Transfer Tax — What You Need to Know</h2>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue (pa.gov)</a>,
            the state realty transfer tax is 1% of the sale price. The City of York collects an additional
            1% local tax under Article 355 of the York City Codified Ordinances — split 0.5% to the city
            and 0.5% to the York City School District, as confirmed at{' '}
            <a href="https://yorkcity.org/government/authorities-boards-and-commissions/codified-ordinances/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">yorkcity.org</a>.
            York City is not on Pennsylvania's transfer tax deviation list, confirming the standard 2% total rate.
          </p>
          <div className="bg-brand-light rounded-xl p-4 text-sm">
            <p className="font-bold text-brand-dark mb-2">Example: $165,000 York PA sale</p>
            <ul className="space-y-1 text-gray-700">
              <li>PA state (1%): $1,650</li>
              <li>City of York (0.5%): $825</li>
              <li>York City School District (0.5%): $825</li>
              <li><strong>Total: $3,300</strong></li>
              <li>Convention: each party pays $1,650</li>
              <li className="text-green-700 font-medium">When you sell to USA Home Buyers: we pay 100% of all closing costs</li>
            </ul>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get Your York PA Cash Offer Today"
          subheadline="No obligation. Written offer within 24 hours. We cover all closing costs."
          sourcePage="/markets/york-pa"
        />

        {/* FAQ */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-bold text-brand-dark mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm mt-8">
          <Link href="/markets/york-pa" className="text-brand-primary hover:underline">York PA market overview →</Link>
          <Link href="/markets/york-pa/market-report" className="text-brand-primary hover:underline">York market report →</Link>
          <Link href="/markets/york-pa/inherited-property" className="text-brand-primary hover:underline">Inherited property →</Link>
          <Link href="/markets/york-pa/foreclosure" className="text-brand-primary hover:underline">Foreclosure help →</Link>
        </div>
      </div>
    </>
  );
}
