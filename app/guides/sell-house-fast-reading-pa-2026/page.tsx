import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, readingLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-reading-pa-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast Reading PA 2026',
  description:
    'How to sell your house fast in Reading PA in 2026. Compare cash buyers, agents, FSBO, and iBuyers with Reading market data, 5% transfer tax context, and timelines.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Reading PA?',
    answer:
      'A direct sale to a cash buyer like USA Home Buyers is usually the fastest option in Reading PA: written offer within 24 hours and a 7-14 day close when title is clear. It avoids showings, repairs, lender underwriting, appraisal delays, and buyer financing fall-throughs.',
  },
  {
    question: 'How much do Reading PA cash buyers pay?',
    answer:
      'Cash buyers commonly pay about 70-80% of fair market value for average-condition homes, with lower percentages for heavy repairs or title risk. The Reading market-data package lists Zillow ZHVI at $227,041 and Redfin median sale price at $185,000 in March 2026, so many average as-is offers fall around $130,000-$160,000 depending on condition and exit strategy.',
  },
  {
    question: 'Why does Reading PA transfer tax matter so much?',
    answer:
      'Reading has a 5% total real estate transfer tax: 1% Pennsylvania state plus 4% City of Reading local tax, according to Berks County Recorder fee guidance and PA transfer-tax deviation references. On a $185,000 sale, that is $9,250 total before commissions, repairs, and other closing costs.',
  },
  {
    question: 'Do you buy Reading houses with tenants or old row-home repairs?',
    answer:
      'Yes. Reading has a high share of older attached row homes and a renter-heavy housing base. USA Home Buyers buys properties as-is, including tenant-occupied rentals, inherited homes, code issues, deferred maintenance, and homes that need major updates.',
  },
  {
    question: 'Do you speak Spanish for Reading PA sellers?',
    answer:
      'Yes. Hablamos español. Reading is majority Hispanic according to the market-data package, so Spanish-language communication is central to serving Reading homeowners clearly and respectfully.',
  },
  {
    question: 'Can I sell a Reading house before sheriff sale or during probate?',
    answer:
      'Often yes, but timing and authority matter. Pennsylvania is a judicial foreclosure state and probate authority runs through the Berks County Register of Wills. A cash buyer can move quickly, but title, payoff, estate authority, and court deadlines still control closing.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '1-8 weeks to attract and negotiate offers' },
  { label: 'Closing timeline', cashBuyer: '7-14 days with clear title', traditional: '45-75+ days after accepted offer' },
  { label: 'Repairs required', cashBuyer: 'None — sold as-is', traditional: 'Often required for retail buyers' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% of sale price' },
  { label: 'Transfer tax impact', cashBuyer: 'Can be negotiated/covered in offer', traditional: 'Reading total tax is 5%' },
  { label: 'Sale certainty', cashBuyer: 'Cash contract, no lender contingency', traditional: 'Inspection/appraisal/financing risk' },
  { label: 'Best fit', cashBuyer: 'Speed, repairs, estates, tenants, tax-sensitive sales', traditional: 'Updated homes and flexible timelines' },
];

export default function ReadingGuide2026Page() {
  return (
    <>
      <SchemaMarkup
        schema={[
          readingLocalBusinessSchema,
          articleSchema('How to Sell Your House Fast in Reading PA — 2026 Guide', pageUrl, '2026-04-29'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' › '}
          <Link href="/guides" className="hover:text-brand-primary">Guides</Link>
          {' › '}
          <span>Reading PA 2026</span>
        </nav>

        <section className="bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 mb-8">
          <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-2">TL;DR</p>
          <p className="text-gray-800 font-medium leading-relaxed">
            The fastest practical way to sell a house in Reading, PA is a direct cash sale. USA Home Buyers serves
            Reading and Berks County with written cash offers in 24 hours, 7-14 day closings when title is clear,
            no repairs, no showings, no agent commissions, and Spanish-language support. Call{' '}
            <a href={`tel:${PHONE}`} className="text-brand-primary hover:underline">{PHONE}</a>. Hablamos español.
          </p>
        </section>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          How to Sell Your House Fast in Reading PA — 2026 Guide
        </h1>
        <p className="text-gray-500 text-sm mb-8">Updated: April 2026 · Reading City and Berks County, Pennsylvania</p>

        <article className="prose prose-lg max-w-none">
          <h2>The Reading PA Housing Market in 2026</h2>
          <p>
            Reading is competitive, affordable, and repair-sensitive. According to{' '}
            <a href="https://www.redfin.com/city/16305/PA/Reading/housing-market" target="_blank" rel="noopener noreferrer">Redfin Reading housing-market data</a>,
            the city median sale price was <strong>$185,000</strong> in March 2026, up <strong>2.8%</strong> year over year,
            with <strong>40</strong> median days on market, about <strong>65</strong> homes sold, and a Redfin Compete Score of <strong>84/100</strong>.
          </p>
          <p>
            Zillow&apos;s Reading Home Value Index reported a <strong>$227,041</strong> typical home value and <strong>+7.8%</strong> year-over-year change
            for the Reading city geography (<a href="https://www.zillow.com/home-values/6696/reading-pa/" target="_blank" rel="noopener noreferrer">Zillow Reading ZHVI</a>).
            Zillow and Redfin measure different things: Zillow estimates typical values across the housing stock; Redfin reports recent closed-sale market activity.
          </p>
          <p>
            The Reading market-data package cites NeighborhoodScout showing <strong>52.17%</strong> attached/row homes,
            <strong>56.68%</strong> of housing built before 1939, and <strong>61.55%</strong> renter occupancy. That combination creates a large as-is seller pool:
            older brick homes, tenant-occupied rentals, inherited properties, deferred maintenance, and sellers who cannot wait through a retail process.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 text-left">Reading Market Data</th>
                  <th className="px-4 py-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Redfin median sale price — city (Mar 2026)', '$185,000'],
                  ['Redfin price per square foot — city (Mar 2026)', '$120'],
                  ['Redfin median days on market — city (Mar 2026)', '40 days'],
                  ['Redfin homes sold — city (Mar 2026)', '65'],
                  ['Redfin Compete Score — city (Mar 2026)', '84/100 Very Competitive'],
                  ['Zillow typical home value / ZHVI — city source page', '$227,041'],
                  ['Reading total transfer tax', '5%: 1% PA + 4% City of Reading local'],
                ].map(([metric, value], i) => (
                  <tr key={metric} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border-b border-gray-100">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary border-b border-gray-100">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Reading&apos;s 5% Transfer Tax Changes the Math</h2>
          <p>
            Reading&apos;s transfer tax is unusually high for Pennsylvania. The{' '}
            <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer">Berks County Recorder of Deeds fee schedule</a>{' '}
            states that the transfer-tax rate is <strong>5%</strong> in the City of Reading, while other Berks municipalities are <strong>2%</strong>.
            The Reading data package attributes the total to the standard <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer">1% Pennsylvania state tax</a>{' '}
            plus <strong>4%</strong> City of Reading local tax.
          </p>
          <p>
            On a <strong>$185,000</strong> Reading sale, 5% equals <strong>$9,250</strong> before agent commissions, repair credits, seller concessions, and carrying costs.
            That does not mean every seller pays the entire amount in every transaction, but it is a major closing-cost item to account for when comparing a retail listing against a direct cash sale.
          </p>

          <h2>4 Ways to Sell a House Fast in Reading</h2>
          <div className="space-y-5 not-prose mb-8">
            <div className="bg-brand-light rounded-2xl p-6 border-l-4 border-brand-primary">
              <h3 className="text-lg font-bold text-brand-dark mb-2">1. Cash Home Buyer — Fastest and Most Certain</h3>
              <p className="text-gray-700 text-sm">
                A local cash buyer like USA Home Buyers buys Reading houses directly as-is. This is strongest for brick row homes,
                tenant-occupied rentals, inherited properties, code issues, major repairs, or sellers who want certainty over maximizing gross price.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-2">2. Agent Listing — Best for Updated Homes</h3>
              <p className="text-gray-700 text-sm">
                A retail listing can work well for updated homes in stronger Reading neighborhoods and nearby suburbs. The tradeoff is preparation,
                showings, commissions, the 5% transfer-tax environment, inspection negotiations, and lender delays.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-2">3. FSBO — Possible, But Not Usually Fast</h3>
              <p className="text-gray-700 text-sm">
                For-sale-by-owner may save commission, but the seller must handle pricing, disclosures, buyer qualification,
                negotiations, and Berks County closing logistics. It is rarely ideal for distressed or urgent sales.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-brand-dark mb-2">4. iBuyer — Limited Fit for Reading</h3>
              <p className="text-gray-700 text-sm">
                National iBuyers prefer standardized homes in large liquid markets. Reading&apos;s older row-home stock,
                high repair variability, and tenant-heavy base make local cash buyers and agent listings more realistic.
              </p>
            </div>
          </div>

          <h2>Cash Buyer vs. Traditional Sale</h2>
        </article>

        <ComparisonTable rows={COMPARISON_ROWS} />

        <section className="my-10 bg-green-50 border border-green-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Hablamos Español — Reading Homeowners</h2>
          <p className="text-gray-700 mb-3">
            The Reading market-data package cites PA Demographics showing <strong>70.8%</strong> of Reading residents are Hispanic or Latino.
            We serve Reading homeowners in English and Spanish so sellers can understand the offer, timeline, closing costs, and documents clearly.
          </p>
          <p className="text-gray-700 mb-4">
            Compramos casas en Reading, PA. Oferta en efectivo en 24 horas, cierre rápido, sin reparaciones, sin agentes, y sin complicaciones.
          </p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-3 transition-colors text-sm">
            Llámenos — Se Habla Español
          </a>
        </section>

        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Probate, Foreclosure, and Berks County Closing Context</h2>
          <p className="text-gray-700 mb-3">
            Berks County records and recorder context come through the Berks County Recorder of Deeds at 633 Court Street, Reading, PA 19601.
            The market-data package cites the Berks County fee schedule and Deeds.com for a typical deed-recording base fee around <strong>$82</strong>,
            plus page/additional charges where applicable.
          </p>
          <p className="text-gray-700 mb-3">
            Probate matters run through the Berks County Register of Wills. The source package lists the office at 633 Court Street, Suite 2C,
            Reading, PA 19601 and phone <strong>(610) 478-6600</strong>, with online estate search at rwills.co.berks.pa.us.
          </p>
          <p className="text-gray-700">
            Pennsylvania is a judicial foreclosure state. If you are trying to sell before a Berks County sheriff&apos;s sale, a cash buyer can remove
            mortgage underwriting from the timeline, but payoff, title, court deadlines, and ownership authority still need to be handled precisely.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get Your Reading PA Cash Offer"
          subheadline="Written offer in 24 hours. Sell as-is with no repairs, showings, or agent fees."
          sourcePage="/guides/sell-house-fast-reading-pa-2026"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Reading PA House in 2026" />

        <section className="my-10 bg-gray-50 rounded-2xl p-6 text-sm">
          <h2 className="font-bold text-brand-dark mb-3">Sources</h2>
          <ul className="space-y-1 text-gray-600">
            <li>Redfin Reading PA Housing Market: <a href="https://www.redfin.com/city/16305/PA/Reading/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">redfin.com →</a></li>
            <li>Zillow Reading ZHVI: <a href="https://www.zillow.com/home-values/6696/reading-pa/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">zillow.com →</a></li>
            <li>Berks County Recorder fee schedule: <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">berkspa.gov →</a></li>
            <li>PA Department of Revenue — Realty Transfer Tax: <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">pa.gov →</a></li>
            <li>Berks County Register of Wills and Assessment details from berkspa.gov and WeAreAtticus excerpts in the Reading market-data package.</li>
            <li>NeighborhoodScout and PA Demographics excerpts from the Reading market-data package for housing-stock, renter, and Hispanic-population context.</li>
          </ul>
        </section>

        <section className="my-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Explore Reading PA Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/reading-pa" className="text-brand-primary hover:underline">Reading PA market overview →</Link></li>
            <li><Link href="/markets/reading-pa/market-report" className="text-brand-primary hover:underline">Full Reading market report →</Link></li>
            <li><Link href="/markets/reading-pa/inherited-property" className="text-brand-primary hover:underline">Inherited property in Reading →</Link></li>
            <li><Link href="/markets/reading-pa/foreclosure" className="text-brand-primary hover:underline">Foreclosure help in Reading →</Link></li>
            <li><Link href="/markets/reading-pa/neighborhoods" className="text-brand-primary hover:underline">Reading neighborhood guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Reading PA Home?" sourcePage="/guides/sell-house-fast-reading-pa-2026" />
      </main>
    </>
  );
}
