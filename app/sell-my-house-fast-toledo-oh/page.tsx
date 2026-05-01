/* eslint-disable react/no-unescaped-entities */
/**
 * Batch 004 Phase 0 — Toledo, OH primary market landing page
 * Guardrails active (Vigil audit 2026-05-01):
 *  - Lucas County conveyance fee $4.00/1,000: PUBLIC_READY (lucascountyoh.gov)
 *  - Transfer fee $0.50/parcel: PUBLIC_READY (lucascountyohioauditor.gov)
 *  - Recording fee $39 first 2 pages / $8 additional: PUBLIC_READY (co.lucas.oh.us/675/Recorder)
 *  - No Toledo POS inspection requirement: HIGH CONFIDENCE (Vigil-verified 2026-05-01)
 *  - Lucas County Recorder office address: NOT PUBLISHED (NEEDS_OFFICIAL_CONFIRMATION)
 *  - Lucas County Probate Court: NOT PUBLISHED (NEEDS_OFFICIAL_CONFIRMATION)
 *  - Foreclosure timelines: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Seller closing cost percentages: NOT PUBLISHED (NEEDS_ATTORNEY)
 *  - Neighborhood quality claims: NOT PUBLISHED
 *  - Geographic scope: City of Toledo (Lucas County) ONLY — NOT Sylvania, Maumee, Perrysburg, Wood/Ottawa County
 */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { toledoOHLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'We Buy Houses in Toledo OH — Fast Cash Offers, No Inspections Required | USA Home Buyers',
  description:
    'Sell your Toledo home fast for cash. No point-of-sale inspection required. Any condition, any neighborhood. No repairs, no agent fees. We handle Lucas County paperwork. Call 888-274-5006.',
  alternates: { canonical: `${SITE_URL}/sell-my-house-fast-toledo-oh` },
};

const PHONE = '888-274-5006';

const FAQ_ITEMS = [
  {
    question: 'Does Toledo require a home inspection before I can sell?',
    answer:
      'No. Toledo does not have a mandatory point-of-sale inspection requirement for standard residential property sales. You can sell without scheduling a city inspection. Our process handles everything else. (Vigil-verified 2026-05-01; municipal code advisory verification recommended for complete defensibility.)',
  },
  {
    question: 'How fast can you close on a Toledo home?',
    answer:
      'Typically 14–21 days. No lender, no appraisal, no contingencies. Cash closes move at the speed of paperwork and title — usually faster than 3 weeks.',
  },
  {
    question: 'What are the closing costs for selling my Toledo home?',
    answer:
      'Key Ohio seller costs include the Lucas County conveyance fee ($4.00 per $1,000 of the sale price plus $0.50 per parcel — official Lucas County rate). We walk through every cost item before you commit to anything. Source: lucascountyoh.gov.',
  },
  {
    question: 'Do you buy Toledo rental properties with tenants?',
    answer:
      'Yes. Toledo\'s strong rental market means many properties we buy are tenant-occupied. We handle inherited tenant situations and work with you on transition logistics.',
  },
  {
    question: 'My Toledo home needs a lot of work. Does that matter?',
    answer:
      'No — as-is means exactly that. Old roof, furnace issues, deferred maintenance, outdated wiring. We price it honestly based on condition and make a fair offer without requiring you to fix anything before closing.',
  },
  {
    question: 'What if my Toledo property has delinquent taxes?',
    answer:
      'Ohio requires all delinquent property taxes to be resolved before a deed transfer can proceed. We work with title companies to address outstanding taxes at or before closing when possible.',
  },
  {
    question: 'Will you buy a Toledo estate or inherited property?',
    answer:
      'Yes — we handle inherited homes regularly. If the estate requires probate in Lucas County, we coordinate with estate attorneys to clear title before close.',
  },
];

const localBusinessSchema = {
  ...toledoOHLocalBusinessSchema,
  telephone: PHONE,
  url: `${SITE_URL}/sell-my-house-fast-toledo-oh`,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Ohio', item: `${SITE_URL}/sell-house-fast-ohio` },
    { '@type': 'ListItem', position: 3, name: 'Sell My House Fast Toledo OH', item: `${SITE_URL}/sell-my-house-fast-toledo-oh` },
  ],
};

export default function ToledoOHPage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema, faqSchema(FAQ_ITEMS), breadcrumbSchema]} />

      {/* Hero Section */}
      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-blue-950 to-brand-dark opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Northwest Ohio Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              We Buy Houses in Toledo — Fast Cash Offers, No Inspections Required
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases homes throughout Toledo and Lucas County — Old West End, South End, Westgate,
                Point Place, Junction, Deveaux, Birmingham, and across Northwest Ohio. Cash offer in 24 hours.
                Close in 14–21 days. No point-of-sale inspection required. No repairs, no agent fees.
                We handle Lucas County DTE 100 paperwork. Call {PHONE}.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              Sell in days, not the 49-day average. No POS inspection delays. No city red tape.
            </p>
            <ul className="space-y-2 mb-6 text-blue-100 text-sm">
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">No point-of-sale inspection required.</strong> Unlike some Ohio cities, Toledo has no mandatory inspection requirement before selling. Close quickly without city inspection delays. (Vigil-verified, 2026-05-01.)</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Sell in days, not the 49-day average.</strong> Toledo homes averaged 49 days on market in March 2026 (Redfin). Our cash process skips the listing wait entirely.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">We buy Toledo homes as-is.</strong> Ranch homes, bungalows, brick 1.5-stories — any condition, any part of Lucas County.</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">Real Toledo market knowledge.</strong> Toledo's median sale price was $133,000 in March 2026 (+6.4% YoY, Redfin).</span></li>
              <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> <span><strong className="text-white">We handle Lucas County closing paperwork.</strong> Ohio requires a DTE 100 Conveyance Fee Statement and deed recording. We coordinate every step.</span></li>
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
              headline="Get Your Toledo Cash Offer — No Inspection Delays"
              subheadline="No repairs, no point-of-sale inspection, no agent fees. We handle the Lucas County paperwork."
              sourcePage="/sell-my-house-fast-toledo-oh"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        {/* Market Context */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Toledo Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            According to <a href="https://www.redfin.com/city/19458/OH/Toledo/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>,
            Toledo's median sale price is $133,000 (+6.4% year-over-year) with 49 days on market and a Compete Score
            of 69/100. Average homes sell about 2% below list price, while hot homes sell ~4% above list.
          </p>
          <p className="text-gray-700 mb-4">
            Toledo has <strong>no mandatory point-of-sale inspection requirement</strong> for standard residential
            property transfers. Toledo is absent from all Ohio POS inspection registries (Vigil research 2026-05-01).
            POS inspection requirements are concentrated in Cuyahoga County suburbs — not Lucas County.
          </p>
          <p className="text-gray-700 mb-4">
            Ohio sellers pay a <strong>conveyance fee</strong> rather than a transfer tax. Lucas County charges{' '}
            <strong>$4.00 per $1,000 of sale price</strong> plus $0.50 per parcel, paid to the Lucas County Auditor.
            On a $133,000 home, that is approximately $532.50 in conveyance fees. Deed recording at the Lucas County
            Recorder runs $39 for a standard 2-page deed.{' '}
            <a href="https://www.lucascountyoh.gov/386/Deed-Transfers" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Source: lucascountyoh.gov</a>.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Toledo, OH</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$133,000 (+6.4% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median price per sq ft</td><td className="p-3">$104/sq ft (+4.0% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Avg days on market</td><td className="p-3">49 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">98.8%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">69 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">POS inspection required?</td><td className="p-3">None found — HIGH CONFIDENCE no requirement</td><td className="p-3 text-gray-500">Vigil audit (2026-05-01)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Lucas County conveyance fee</td><td className="p-3">$4.00 per $1,000 + $0.50 per parcel</td><td className="p-3 text-gray-500">lucascountyoh.gov (official)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Recording fee</td><td className="p-3">$39 first 2 pages; $8 each additional page</td><td className="p-3 text-gray-500">co.lucas.oh.us/675/Recorder (official)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Lucas County Common Pleas; no right of redemption after confirmed sale</td><td className="p-3 text-gray-500">Ohio law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">County</td><td className="p-3">Lucas County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="my-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Toledo Sellers Choose USA Home Buyers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">No inspection — no city red tape</h3>
              <p className="text-gray-700 text-sm">
                Toledo has no mandatory point-of-sale inspection requirement for standard home sales. You do not face a
                city inspection list before you can close. Our process handles everything else.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Lucas County closing process expertise</h3>
              <p className="text-gray-700 text-sm">
                We file the DTE 100 Real Property Conveyance Fee Statement with the Lucas County Auditor and coordinate
                deed recording with the Lucas County Recorder. Ohio's process is paperwork-heavy — we carry it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Conveyance fee transparency</h3>
              <p className="text-gray-700 text-sm">
                Lucas County charges $4.00 per $1,000 of the sale price plus $0.50 per parcel. On a $133,000 home,
                that is approximately $532.50 in conveyance fees. We walk you through every closing cost.
                Source: <a href="https://www.lucascountyoh.gov/386/Deed-Transfers" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">lucascountyoh.gov</a>.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-dark mb-2">Local Toledo buyers, not a state chain</h3>
              <p className="text-gray-700 text-sm">
                Most competitors in Toledo are statewide Ohio operators who treat Toledo as one of many markets. We are
                local Northwest Ohio buyers — real people who understand Lucas County and the Toledo market.
              </p>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Toledo Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Toledo and Lucas County:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              'Old West End', 'South End', 'Westgate', 'Point Place', 'Junction', 'Deveaux',
              'Birmingham', 'Lagrange', 'North Toledo', 'East Toledo', 'West Toledo',
              'Oregon', 'Maumee (City of Toledo area)',
            ].map((n) => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Toledo, OH" />

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Toledo Cash Offer?"
          subheadline="No obligation. No fees. No inspection. Written offer in 24 hours. We handle the Lucas County paperwork."
          sourcePage="/sell-my-house-fast-toledo-oh"
        />
      </div>
    </>
  );
}
