import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, erieLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-erie-pa-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast Erie PA 2026',
  description:
    'How to sell your house fast in Erie PA in 2026. Compare cash buyers, agent listings, FSBO, and iBuyers with Erie housing data, transfer tax, and timelines.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Erie PA?',
    answer:
      'A direct cash sale is usually the fastest route in Erie PA: USA Home Buyers can make a written offer within 24 hours and close in 7-14 days. A traditional Erie listing can still require inspections, appraisal, underwriting, and title work after an offer is accepted.',
  },
  {
    question: 'How much do cash buyers pay for Erie PA houses?',
    answer:
      'Cash buyers commonly pay about 60-80% of fair market value depending on condition, repairs, title issues, and resale risk. Using the Erie market-data package, Redfin reported a $153,500 city median sale price in March 2026 and Zillow reported a $167,377 ZHVI, so a typical as-is offer often lands below retail but avoids repairs, commissions, and closing-cost deductions.',
  },
  {
    question: 'Do you buy Erie houses that need repairs?',
    answer:
      'Yes. Erie has substantial older housing stock, including pre-war and postwar homes with aging roofs, mechanical systems, wiring, and winter-weather wear. USA Home Buyers buys Erie houses as-is, including inherited homes, rental properties, code issues, and properties with deferred maintenance.',
  },
  {
    question: 'What transfer tax applies when selling a house in Erie PA?',
    answer:
      'Most Erie city and Erie County residential transfers use the standard Pennsylvania structure: 1% state realty transfer tax plus 1% local transfer tax, for a 2% total. Customarily this is split between buyer and seller, though it is negotiable. USA Home Buyers can cover closing costs in a direct cash purchase.',
  },
  {
    question: 'Are iBuyers like Opendoor a realistic option in Erie PA?',
    answer:
      'Usually no. National iBuyers tend to focus on larger, highly liquid metros and move-in-ready homes. Erie sellers with older, tenant-occupied, inherited, or repair-heavy properties are usually better served by a local cash buyer or a traditional agent listing.',
  },
  {
    question: 'Can I sell an inherited Erie County house before probate is finished?',
    answer:
      'Often yes, but the estate representative needs proper authority from the Erie County Register of Wills or the probate process before closing. USA Home Buyers can coordinate with your title company and estate attorney, but legal authority and title clearance still control the closing date.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '1-8 weeks to attract and negotiate offers' },
  { label: 'Closing timeline', cashBuyer: '7-14 days with clear title', traditional: '45-75+ days after accepted offer' },
  { label: 'Repairs required', cashBuyer: 'None — sold as-is', traditional: 'Often required before buyer financing' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% of sale price' },
  { label: 'Closing costs', cashBuyer: 'We can pay all closing costs', traditional: 'Seller share of transfer tax + fees' },
  { label: 'Sale certainty', cashBuyer: 'Cash contract, no lender contingency', traditional: 'Inspection/appraisal/financing risk' },
  { label: 'Best fit', cashBuyer: 'Speed, repairs, estates, tenants, uncertainty', traditional: 'Updated homes and flexible timelines' },
];

export default function ErieGuide2026Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          erieLocalBusinessSchema,
          articleSchema('How to Sell Your House Fast in Erie PA — 2026 Guide', pageUrl, '2026-04-29'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' › '}
          <Link href="/guides" className="hover:text-brand-primary">Guides</Link>
          {' › '}
          <span>Erie PA 2026</span>
        </nav>

        <section className="bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 mb-8">
          <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-2">TL;DR</p>
          <p className="text-gray-800 font-medium leading-relaxed">
            The fastest practical way to sell a house in Erie, PA is a direct cash sale. USA Home Buyers serves
            Erie and Erie County with written cash offers in 24 hours, 7-14 day closings when title is clear,
            no repairs, no showings, and no agent commissions. Call <a href={`tel:${PHONE}`} className="text-brand-primary hover:underline">{PHONE}</a>.
          </p>
        </section>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          How to Sell Your House Fast in Erie PA — 2026 Guide
        </h1>
        <p className="text-gray-500 text-sm mb-8">Updated: April 2026 · Erie City and Erie County, Pennsylvania</p>

        <article className="prose prose-lg max-w-none">
          <h2>The Erie PA Housing Market in 2026</h2>
          <p>
            Erie is a low-price, older-housing-stock market where speed depends heavily on condition. According to{' '}
            <a href="https://www.redfin.com/city/6172/PA/Erie/housing-market" target="_blank" rel="noopener noreferrer">Redfin Erie housing-market data</a>,
            the city median sale price was <strong>$153,500</strong> in March 2026, up <strong>13.3%</strong> year over year,
            with a <strong>$112</strong> median price per square foot and <strong>28</strong> median days on market.
          </p>
          <p>
            Zillow&apos;s Erie Home Value Index reported a <strong>$167,377</strong> typical home value and <strong>+6.5%</strong> year-over-year change
            for the Erie city geography in the source package (<a href="https://www.zillow.com/home-values/11335/erie-pa/" target="_blank" rel="noopener noreferrer">Zillow Erie ZHVI</a>).
            Zillow estimates typical values across the housing stock, while Redfin reflects closed-sale activity; both are useful but not interchangeable.
          </p>
          <p>
            Condition is the real split. The Erie market-data package cites NeighborhoodScout and ACS/City-Data context showing roughly
            <strong>77% of Erie housing was built before 1970</strong>. That means many sellers are dealing with roof age, outdated electrical,
            old plumbing, lead-paint concerns, winter damage, inherited contents, or tenant issues — exactly the cases where a retail buyer or lender can slow down or fail.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 text-left">Erie Market Data</th>
                  <th className="px-4 py-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Redfin median sale price — city (Mar 2026)', '$153,500'],
                  ['Redfin price per square foot — city (Mar 2026)', '$112'],
                  ['Redfin median days on market — city (Mar 2026)', '28 days'],
                  ['Redfin sale-to-list ratio — city (Mar 2026)', '97.7%'],
                  ['Redfin Compete Score — city (Mar 2026)', '78/100 Very Competitive'],
                  ['Zillow typical home value / ZHVI — city source page', '$167,377'],
                  ['Typical Erie transfer tax', '2% total: 1% PA + 1% local'],
                ].map(([metric, value], i) => (
                  <tr key={metric} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border-b border-gray-100">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary border-b border-gray-100">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>4 Ways to Sell a House Fast in Erie</h2>
          <div className="space-y-5 not-prose mb-8">
            <div className="bg-brand-light rounded-2xl p-6 border-l-4 border-brand-primary">
              <h3 className="text-lg font-bold text-brand-dark mb-2">1. Cash Home Buyer — Fastest and Most Certain</h3>
              <p className="text-gray-700 text-sm">
                A local cash buyer like USA Home Buyers can buy the property directly as-is, with no lender appraisal,
                inspection repairs, showings, or mortgage underwriting. This is strongest for Erie homes with old systems,
                probate issues, tenants, code concerns, or a deadline.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-2">2. Agent Listing — Best for Updated Homes</h3>
              <p className="text-gray-700 text-sm">
                Listing can produce the highest gross price for move-in-ready Erie homes, especially in stronger West Erie,
                Millcreek, and lakeshore-adjacent segments. The tradeoff is repairs, showings, commission, transfer tax share,
                and 45-75+ days after an accepted offer.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-2">3. FSBO — Possible, But Demanding</h3>
              <p className="text-gray-700 text-sm">
                Selling by owner saves commission but pushes pricing, disclosures, marketing, negotiations, and title coordination
                onto the seller. It is rarely the fastest route unless you already have a qualified buyer.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-2">4. iBuyer — Limited Fit for Erie</h3>
              <p className="text-gray-700 text-sm">
                National iBuyers generally prefer larger, more liquid metros and homes in predictable condition. Erie&apos;s older,
                highly local housing stock makes direct investor and agent-listing options more realistic.
              </p>
            </div>
          </div>

          <h2>Cash Buyer vs. Traditional Sale</h2>
        </article>

        <ComparisonTable rows={COMPARISON_ROWS} />

        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax, Probate, and Local Closing Context</h2>
          <p className="text-gray-700 mb-3">
            The <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue</a>{' '}
            sets a 1% state realty transfer tax. The Erie data package identifies the typical Erie city and Erie County local share as another 1%, for a <strong>2% total</strong>.
            By custom this is often split between buyer and seller, but a cash purchase can negotiate closing-cost responsibility.
          </p>
          <p className="text-gray-700 mb-3">
            Erie County probate runs through the Erie County Register of Wills within the Clerk of Records office. The source package lists
            the Erie County Courthouse at 140 West Sixth Street, Erie, PA 16501 and flags that exact department contact details should be verified directly at{' '}
            <a href="https://eriecountypa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">eriecountypa.gov</a>.
            Estate sales can close once the authorized representative can sign and title clears.
          </p>
          <p className="text-gray-700">
            Pennsylvania is a judicial foreclosure state. If you are trying to sell before an Erie County sheriff&apos;s sale, timing matters:
            a cash contract can remove lender delays, but payoff, title, and court deadlines still need to be handled quickly.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get Your Erie PA Cash Offer"
          subheadline="Written offer in 24 hours. Sell as-is with no repairs, showings, or agent fees."
          sourcePage="/guides/sell-house-fast-erie-pa-2026"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Erie PA House in 2026" />

        <section className="my-10 bg-gray-50 rounded-2xl p-6 text-sm">
          <h2 className="font-bold text-brand-dark mb-3">Sources</h2>
          <ul className="space-y-1 text-gray-600">
            <li>Redfin Erie PA Housing Market: <a href="https://www.redfin.com/city/6172/PA/Erie/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">redfin.com →</a></li>
            <li>Zillow Erie ZHVI: <a href="https://www.zillow.com/home-values/11335/erie-pa/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">zillow.com →</a></li>
            <li>PA Department of Revenue — Realty Transfer Tax: <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">pa.gov →</a></li>
            <li>Erie County government / courthouse context: <a href="https://eriecountypa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">eriecountypa.gov →</a></li>
            <li>NeighborhoodScout, DataUSA, City-Data excerpts from the Erie market-data package for housing-stock and demographic context.</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Explore Erie PA Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Erie PA market overview →</Link></li>
            <li><Link href="/markets/erie-pa/market-report" className="text-brand-primary hover:underline">Full Erie market report →</Link></li>
            <li><Link href="/markets/erie-pa/inherited-property" className="text-brand-primary hover:underline">Inherited property in Erie →</Link></li>
            <li><Link href="/markets/erie-pa/foreclosure" className="text-brand-primary hover:underline">Foreclosure help in Erie →</Link></li>
            <li><Link href="/markets/erie-pa/neighborhoods" className="text-brand-primary hover:underline">Erie neighborhood guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Erie PA Home?" sourcePage="/guides/sell-house-fast-erie-pa-2026" />
      </main>
    </>
  );
}
