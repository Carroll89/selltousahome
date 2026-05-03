/* eslint-disable react/no-unescaped-entities */
/**
 * Batch 004 Phase 0 — Cleveland, OH primary market landing page
 * Guardrails active (Vigil audit 2026-05-01):
 *  - Cuyahoga County conveyance fee $4.00/1,000: NOT PUBLISHED (NEAR-BLOCKER — pending cuyahogacounty.gov official confirmation)
 *  - Recording fee schedule: NOT PUBLISHED (not captured — pending official fetch)
 *  - Probate Court address: NOT PUBLISHED (NEEDS_OFFICIAL_CONFIRMATION)
 *  - Ohio judicial foreclosure process (general): PUBLIC_READY — safe to reference factually; no timelines
 *  - DTE 100 form / Fiscal Office process: PUBLIC_READY
 *  - Sheriff's sale / Daily Legal News publication: PUBLIC_READY
 *  - No right of redemption (Ohio): PUBLIC_READY
 *  - Foreclosure timelines: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Seller closing cost percentages: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Neighborhood quality claims: NOT PUBLISHED
 *  - Geographic scope: City of Cleveland ONLY — NOT Parma, Lakewood, Euclid, Shaker Heights
 */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { clevelandOHLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'We Buy Cleveland Houses | USA Home Buyers',
  description:
    'Sell your Cleveland home fast for cash. Colonials, bungalows, Cape Cods — any condition, East or West Side. No repairs, no agent fees. We handle Cuyahoga County paperwork. Call 888-274-5006.',
  alternates: { canonical: `${SITE_URL}/sell-my-house-fast-cleveland-oh` },
};

const PHONE = '888-274-5006';

const FAQ_ITEMS = [
  {
    question: 'How quickly can you close on my Cleveland home?',
    answer:
      'Typically 14–21 days from accepted offer. No lender approvals, no financing contingencies, no delays waiting on an appraisal. We set the closing date around your schedule.',
  },
  {
    question: 'Do you buy homes in foreclosure in Cleveland?',
    answer:
      'We can help — but time matters in Ohio. Once a Cuyahoga County sheriff\'s sale is confirmed, there is no redemption period. The sooner you reach out, the more options you have. Contact us early to understand what is possible.',
  },
  {
    question: 'Do I need to make repairs before selling to you?',
    answer:
      'No. We buy Cleveland homes as-is — foundation problems, old wiring, deferred maintenance, flood damage. You pay nothing to fix it before closing. Any condition, any part of the city.',
  },
  {
    question: 'What happens with the Ohio conveyance process?',
    answer:
      'Ohio requires a DTE 100 Real Property Conveyance Fee Statement filed with the Cuyahoga County Fiscal Office before a deed can be recorded. We coordinate this — sellers do not have to figure out county forms on their own.',
  },
  {
    question: 'Will you buy a Cleveland property with back taxes or unpaid liens?',
    answer:
      'Delinquent taxes must be resolved before a Cuyahoga County deed transfer can proceed — that is Ohio law. We work with title companies to address outstanding taxes and liens at or before closing when possible.',
  },
  {
    question: 'I inherited a Cleveland house. Can you buy an estate property?',
    answer:
      'Yes. We have experience with inherited and estate properties. If the estate requires probate in Cuyahoga County, we coordinate with estate attorneys to ensure the title is clear before close.',
  },
  {
    question: 'How is your offer calculated for a Cleveland home?',
    answer:
      'We look at current Cuyahoga County comparable sales, condition, and location. Cleveland\'s median sale price was $135,000 in March 2026 (Redfin). We make a fair offer based on real data, not a lowball algorithm.',
  },
];

const localBusinessSchema = {
  ...clevelandOHLocalBusinessSchema,
  telephone: PHONE,
  url: `${SITE_URL}/sell-my-house-fast-cleveland-oh`,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Ohio', item: `${SITE_URL}/sell-house-fast-ohio` },
    { '@type': 'ListItem', position: 3, name: 'Sell My House Fast Cleveland OH', item: `${SITE_URL}/sell-my-house-fast-cleveland-oh` },
  ],
};

export default function ClevelandOHPage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, faqSchema(FAQ_ITEMS), breadcrumbSchema]} />

      {/* Hero Section */}
      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-blue-950 to-brand-dark opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Ohio Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              We Buy Houses in Cleveland — Cash Offers for Colonials, Bungalows, and Everything In Between
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases homes throughout Cleveland — Ohio City, Tremont, Glenville, Slavic Village,
                Mount Pleasant, Collinwood, Old Brooklyn, Kamm's Corners, and across the East and West Side.
                Cash offer in 24 hours. Close in 14–21 days. No repairs, no agent fees.
                We handle the Cuyahoga County DTE 100 conveyance process. Call {PHONE}.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              Beat the 33–37 day average. We close in days — not months — with no open houses, no showings, no waiting.
            </p>
            <ul className="space-y-2 mb-6 text-blue-100 text-sm">
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Beat the 33–37 day average.</strong> Cleveland homes averaged 33–37 days on market in March 2026 (Redfin). We close in days — not months.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">We buy Cleveland homes as-is.</strong> No inspection requirements, no repair demands. Whether it is a 1940s Colonial or a Cape Cod in need of work.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Real Cleveland market knowledge.</strong> Cleveland's median sale price was $135,000 in March 2026 (+3.3% YoY, Redfin).</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">We know the Cuyahoga County closing process.</strong> Ohio closings involve the DTE 100 conveyance form and Cuyahoga County Fiscal Office. We have done it before.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Cost of living advantage.</strong> Cleveland's cost of living runs 7% below the national average. Your real purchasing power from a cash sale goes further here.</span></li>
            </ul>
            <a
              href={`tel:+1${PHONE.replace(/-/g, '')}`}
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call {PHONE} — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Cleveland Cash Offer"
              subheadline="Written offer in 24 hours. Close in 14–21 days. We handle the Cuyahoga County paperwork."
              sourcePage="/sell-my-house-fast-cleveland-oh"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        {/* Market Context */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Cleveland Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            According to <a href="https://www.redfin.com/city/4145/OH/Cleveland/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>,
            Cleveland's median sale price is $135,000 (+3.3% year-over-year), with 33–37 days on market and a Compete
            Score of 69/100. Hot homes go pending in ~10 days. Average homes sell about 3% below list price.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio uses a <strong>DTE 100 Real Property Conveyance Fee Statement</strong> process. This form must be
            filed with the Cuyahoga County Fiscal Office before any deed can be recorded. We coordinate every step —
            you do not navigate county paperwork on your own.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio is a <strong>judicial foreclosure state</strong>. Once a Cuyahoga County sheriff's sale is confirmed,
            there is no redemption period. If you are behind on payments and watching a court process advance, a fast
            cash sale may be an option worth exploring — the sooner you reach out, the more options you have.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Cleveland, OH</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$135,000 (+3.3% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$89/sq ft</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Avg days on market</td><td className="p-3">33–37 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">96.8%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">69 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Conveyance form</td><td className="p-3">DTE 100 — filed with Cuyahoga County Fiscal Office</td><td className="p-3 text-gray-500">Ohio law</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Cuyahoga County Common Pleas; Daily Legal News sheriff sale publication; no right of redemption after confirmed sale</td><td className="p-3 text-gray-500">Ohio law / Cuyahoga County</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Cost of living</td><td className="p-3">7% below national average</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Cuyahoga County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Market data: Redfin March 2026. Conveyance fee amounts pending official cuyahogacounty.gov confirmation — not published per Vigil audit guardrails.</p>
        </section>

        {/* Trust Signals */}
        <section className="my-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Cleveland Sellers Choose USA Home Buyers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">East Side and West Side expertise</h3>
              <p className="text-gray-700 text-sm">
                Whether you are on the East Side or the West Side, we buy houses across all of Cleveland. We understand
                both sides of the city — Ohio City, Tremont, Glenville, Slavic Village, and everywhere in between.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Cuyahoga County closing expertise</h3>
              <p className="text-gray-700 text-sm">
                We file the DTE 100 Real Property Conveyance Form and coordinate directly with the Cuyahoga County
                Fiscal Office — you do not have to navigate county paperwork on your own.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Ohio foreclosure awareness</h3>
              <p className="text-gray-700 text-sm">
                In Ohio, once a sheriff's sale is confirmed, there is no redemption period. If you are in foreclosure,
                time is a real constraint. A fast cash sale may give you more options — reach out early.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">No iBuyer algorithms</h3>
              <p className="text-gray-700 text-sm">
                At Cleveland's $135,000 median price point, major iBuyers do not operate here. We are real local
                buyers making fair offers based on actual Cuyahoga County comparable sales — not out-of-state
                algorithms.
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cleveland Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout all of Cleveland — East Side, West Side, and city-wide:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              'Ohio City', 'Tremont', 'Detroit Shoreway', 'Glenville', 'Slavic Village',
              'Mount Pleasant', 'Collinwood', 'Old Brooklyn', "Kamm's Corners", 'Hough',
              'Buckeye-Woodhill', 'West Boulevard', 'Clark-Fulton', 'Stockyards',
              'Goodrich-Kirtland Park', 'Broadway-Slavic Village',
            ].map((n) => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <BlogClusterLinks marketSlug="cleveland-oh" cityName="Cleveland" />

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Cleveland, OH" />



        {/* Local resources hub */}
        <section className="my-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Cleveland OH mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Cleveland OH homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Cleveland OH section for local seller resources, situation pages, the cash-sale process,
              reviews, and about pages before you decide whether a cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="/markets/cleveland-oh/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Cleveland OH Resources
            </a>
            <a
              href="/guides/sell-house-fast-cleveland-oh-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </a>
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Cleveland Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours. We handle the Cuyahoga County paperwork."
          sourcePage="/sell-my-house-fast-cleveland-oh"
        />
      </div>
    </>
  );
}
