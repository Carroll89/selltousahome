/* eslint-disable react/no-unescaped-entities */
/**
 * G1_REWORK_MARKETS_ROUTE: actual /markets route now renders the above-fold form page directly.
 * Prior 2026-05-09 pass patched only legacy /sell-my-house-fast-* aliases; BrowserStack target was /markets/<slug>.
 */
/**
 * Batch 004 Phase 0 — Chicago, IL primary market landing page
 * Guardrails active (Vigil audit 2026-05-01):
 *  - City of Chicago transfer tax CTA portion ($1.50/$500 seller) PUBLIC_READY
 *  - Illinois state transfer tax rate: NOT PUBLISHED (SNIPPET_ONLY — pending tax.illinois.gov)
 *  - Cook County recording fees: NOT PUBLISHED (pending Cook County Clerk official verification)
 *  - Foreclosure timelines: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Seller closing cost percentages: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Neighborhood quality/condition claims: NOT PUBLISHED (no current sourced data)
 *  - Geographic scope: City of Chicago (Cook County core) ONLY — NOT Naperville, Elgin, collar counties
 */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { chicagoILLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'We Buy Chicago Houses Fast | USA Home Buyers',
  description:
    'Sell your Chicago home fast for cash. Bungalows, 2-flats, greystones — any neighborhood, any condition. No repairs, no agent fees. We handle Cook County paperwork. Call 888-274-5006.',
  alternates: { canonical: `${SITE_URL}/markets/chicago-il` },
};

const PHONE = '888-274-5006';

const FAQ_ITEMS = [
  {
    question: 'How fast can you close on my Chicago home?',
    answer:
      'We set the timeline around your needs — typically 14–21 days once the offer is accepted. No waiting on lender approval, no contingencies. We work with experienced Chicago-area real estate attorneys and coordinate the closing process from start to finish.',
  },
  {
    question: 'Do I need a real estate attorney for a Chicago home sale?',
    answer:
      'In Illinois, attorney representation at closing is standard practice and expected. We connect you with experienced Chicago-area real estate attorneys and coordinate the process — you are covered without having to find an attorney on your own.',
  },
  {
    question: 'What is the City of Chicago transfer tax, and who pays it?',
    answer:
      'Chicago has a local transfer tax on top of standard state and county taxes. The seller pays the CTA portion ($1.50 per $500 of the sale price). We explain all closing taxes in detail before you sign anything. Source: chicago.gov.',
  },
  {
    question: 'Do you buy homes that need major repairs or updating?',
    answer:
      'Yes. We buy Chicago homes as-is — fire damage, foundation issues, outdated kitchens, unfinished rehabs. You do not spend a dollar before closing. No repairs, no cleaning, no staging required.',
  },
  {
    question: 'Will you buy a Chicago 2-flat or multi-unit building?',
    answer:
      'Yes — 2-flats and 3-flats are some of the most common properties we buy in Chicago. Tenant-occupied or vacant, we handle it. We are experienced with the 2-flat and greystone building type that defines Chicago neighborhoods.',
  },
  {
    question: 'What if my Chicago property has back taxes or liens?',
    answer:
      'We can work with properties that have outstanding Cook County property taxes, liens, or judgments. Our team coordinates with title to resolve encumbrances at or before closing when possible.',
  },
  {
    question: 'How is a cash sale different from listing with an agent in Chicago?',
    answer:
      'Chicago homes averaged 50–52 days on market in March 2026 (Redfin). No 50-day average market wait. No repairs. No agent commissions. No open houses. No financing contingency fallouts. One offer, one closing date, done.',
  },
];

const localBusinessSchema = {
  ...chicagoILLocalBusinessSchema,
  telephone: PHONE,
  url: `${SITE_URL}/markets/chicago-il`,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Illinois', item: `${SITE_URL}/sell-house-fast-illinois` },
    { '@type': 'ListItem', position: 3, name: 'Sell My House Fast Chicago IL', item: `${SITE_URL}/markets/chicago-il` },
  ],
};

export default function ChicagoILPage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, faqSchema(FAQ_ITEMS), breadcrumbSchema]} />

      {/* Hero Section */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-blue-950 to-brand-dark opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Illinois Cash Home Buyers</p>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
              We Buy Houses in Chicago — Cash Offers for Any Condition, Any Neighborhood
            </h1>
            {/* MOBILE_FORM_ABOVE_FOLD_FIX: keep form-start before summary block on mobile Template A pages. */}
            <div className="lg:hidden mb-4">
              <CashOfferForm
                variant="hero"
                headline="Get Your Chicago Cash Offer"
                subheadline="Written offer in 24 hours. Close in 14–21 days. We handle the attorney review and closing paperwork."
                sourcePage="/markets/chicago-il"
              />
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases bungalows, 2-flats, greystones, and single-family homes across all Chicago
                neighborhoods — Bridgeport, Pilsen, Roseland, Austin, Humboldt Park, Logan Square, Hyde Park, Lakeview,
                and beyond. Cash offer in 24 hours. Close in 14–21 days. No repairs, no agent fees. We work with
                Chicago-area real estate attorneys and handle all Cook County paperwork. Call {PHONE}.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              Skip the 50-day Chicago listing average. We buy homes as-is — from North Side brick bungalows to South
              Side two-flats — without requiring a single improvement.
            </p>
            <ul className="space-y-2 mb-6 text-blue-100 text-sm">
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Skip the 50-day wait.</strong> Chicago homes averaged 50–52 days on market in March 2026 (Redfin). Our cash offers close on your schedule.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">No repairs, no staging, no agent fees.</strong> We buy Chicago homes as-is — from brick bungalows to two-flats.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">We handle the Chicago closing process.</strong> Illinois closings involve attorney review, deed recording, and the City of Chicago transfer tax. We coordinate it all.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Fair price backed by local data.</strong> Chicago's median sale price was $410,100 in March 2026 (+5.2% YoY, Redfin). Our offers reflect real market conditions.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Competitive market, certain offer.</strong> Chicago's Redfin Compete Score is 62/100. Listing means uncertainty. Our offer is certain.</span></li>
            </ul>
            <a
              href={`tel:+1${PHONE.replace(/-/g, '')}`}
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call {PHONE} — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="hidden lg:block">
            <CashOfferForm
              variant="hero"
              headline="Get Your Chicago Cash Offer"
              subheadline="Written offer in 24 hours. Close in 14–21 days. We handle the attorney review and closing paperwork."
              sourcePage="/markets/chicago-il"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        {/* Market Context */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Chicago Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            According to <a href="https://www.redfin.com/city/29470/IL/Chicago/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>,
            Chicago's median sale price is $410,100 (+5.2% year-over-year) with a Compete Score of 62/100 and average
            days on market of 50–52 days. Hot homes go pending in ~31 days. Average homes sell at about 100.4% of
            list price, while those needing work often sit longer or require price cuts.
          </p>
          <p className="text-gray-700 mb-4">
            Illinois closings are distinct from much of the country: <strong>attorney representation at closing is
            customary and expected</strong> in Illinois. We work with experienced Chicago-area real estate attorneys
            and coordinate the Cook County deed recording process — standard for Illinois closings.
          </p>
          <p className="text-gray-700 mb-4">
            The City of Chicago imposes its own Real Property Transfer Tax (Tax 7551) on top of state and county
            layers. Sellers pay the CTA portion: <strong>$1.50 per $500 of the sale price</strong>. We explain every
            closing cost before you sign anything.{' '}
            <a href="https://www.chicago.gov/city/en/depts/fin/supp_info/revenue/tax_list/real_property_transfertax.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Source: chicago.gov</a>.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Chicago, IL</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$410,100 (+5.2% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$293 (+4.6% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Avg days on market</td><td className="p-3">50–52 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">100.4%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">62 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">City transfer tax (seller)</td><td className="p-3">$1.50 per $500 (CTA portion) — seller pays</td><td className="p-3 text-gray-500">chicago.gov</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Illinois Circuit Court</td><td className="p-3 text-gray-500">Illinois law (735 ILCS 5/15-1101)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney closing?</td><td className="p-3">Yes — customary and expected in Illinois</td><td className="p-3 text-gray-500">Illinois closing custom</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Cook County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Market data: Redfin March 2026. Transfer tax: chicago.gov (official). Illinois state and Cook County recording fee details pending official verification — not published per Vigil audit guardrails.</p>
        </section>

        {/* Trust Signals */}
        <section className="my-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Chicago Sellers Choose USA Home Buyers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">We know Chicago housing stock</h3>
              <p className="text-gray-700 text-sm">
                We buy Chicago bungalows, 2-flats, 3-flats, and greystones — the property types that define
                Chicago neighborhoods. Signals that we actually know the market vs. a national algorithm that treats
                every city the same.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Illinois closing fluency</h3>
              <p className="text-gray-700 text-sm">
                "We work with Chicago-area real estate attorneys and coordinate the Cook County deed recording process — standard for Illinois closings." You do not navigate the paperwork alone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">City transfer tax transparency</h3>
              <p className="text-gray-700 text-sm">
                We handle the City of Chicago transfer tax paperwork at closing. The seller pays the CTA portion
                ($1.50 per $500 of sale price) — no surprise closing-day scramble. Source: chicago.gov.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Cook County property tax context</h3>
              <p className="text-gray-700 text-sm">
                Chicago-area properties carry some of the highest property tax rates in the country. We factor Cook County tax proration into our offers — no unpleasant surprises at the closing table.
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Chicago Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout all of Chicago — every neighborhood, every condition:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              'Bridgeport', 'Pilsen', 'Roseland', 'Englewood', 'Beverly', 'Lincoln Square',
              'Avondale', 'Logan Square', 'Hyde Park', 'Bronzeville', 'Austin', 'Humboldt Park',
              'Lakeview', 'Wicker Park', 'Bucktown', 'West Garfield Park', 'South Shore',
              'Chatham', 'Auburn Gresham', 'Jefferson Park',
            ].map((n) => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Whether you are on the North Side, South Side, or West Side, we buy houses across all of Chicago. Our cash
            process covers the entire city — including neighborhoods where national iBuyers and traditional agents do
            not typically operate.
          </p>
        </section>

        <BlogClusterLinks marketSlug="chicago-il" cityName="Chicago" />

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Chicago, IL" />

        {/* Footer CTA */}


        {/* Local resources hub */}
        <section className="my-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Chicago IL mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Chicago IL homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Chicago IL section for local seller resources, situation pages, the cash-sale process,
              reviews, and about pages before you decide whether a cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="/markets/chicago-il/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Chicago IL Resources
            </a>
            <a
              href="/guides/sell-house-fast-chicago-il-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </a>
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Chicago Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours. We handle the Illinois attorney review and Cook County paperwork."
          sourcePage="/markets/chicago-il"
        />
      </div>
    </>
  );
}
