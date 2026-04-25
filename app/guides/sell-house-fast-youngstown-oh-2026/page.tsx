/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { youngstownLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-youngstown-oh-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast Youngstown OH 2026',
  description:
    'How to sell your house fast in Youngstown OH in 2026. Compare cash buyers, agents, FSBO. Ohio conveyance fees, probate, foreclosure explained. Real data.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Youngstown OH?',
    answer: "A cash home buyer is the fastest exit for most Youngstown sellers. USA Home Buyers makes a written offer within 24 hours and closes in 7-14 days. Traditional listing in Youngstown takes a median 70 days on market (Redfin, Feb 2026), plus inspection, lender approval, and closing — typically 3-4 months total. Many Youngstown properties don't qualify for FHA or conventional financing due to condition, making cash buyers the only realistic option for large portions of the city's housing stock.",
  },
  {
    question: 'How do cash buyers calculate their offer in Youngstown?',
    answer: "Cash buyers base offers on after-repair value (ARV) minus estimated renovation costs, holding costs, and margin. In Youngstown, ARV is low and rehab costs are high relative to value, which is why cash offers typically run 65-75% of FMV. On a $129,200 median-priced home, a cash offer of $84,000-$97,000 before costs is typical. The seller pays no agent commission, no closing costs, and no conveyance fee — which narrows the gap vs. a traditional sale net.",
  },
  {
    question: 'What are the closing costs when selling a house in Ohio?',
    answer: "The seller's primary closing cost in Ohio is the conveyance fee: $4.00 per $1,000 in Mahoning County ($1/1,000 state + $3/1,000 county permissive) plus $0.50 per parcel. Recording fees are paid by the buyer. Ohio does not require attorneys at closing. On a $129,200 sale, total seller closing costs are approximately $517 for the conveyance fee. When you sell to USA Home Buyers, we cover all of this. Source: Mahoning County Auditor (auditor.mahoningcountyoh.gov); ORC § 319.202.",
  },
  {
    question: 'Should I use a real estate agent to sell my Youngstown house?',
    answer: "A traditional listing makes sense when the property is in saleable condition and you have time. According to Redfin, Youngstown homes spend 70 days on market — and that's for properties that do sell. Many Youngstown city-core homes don't qualify for FHA or conventional financing, which eliminates most buyers from your pool. For distressed properties, inherited estates, or sellers with an urgent timeline, a cash buyer is typically the better path.",
  },
  {
    question: 'How does probate work when selling a house in Youngstown OH?',
    answer: "Inherited property in Ohio goes through Mahoning County Probate Court (120 Market Street, Youngstown, OH 44503, (330) 740-2310) — NOT a Register of Wills (that's a Pennsylvania system). The personal representative gains authority to sell the property after the court opens the estate. Ohio typically requires full probate for estates over $35,000. We work with estates and probate attorneys regularly. Source: mahoningcountyoh.gov/962.",
  },
  {
    question: 'Is Youngstown a good market to sell a house in?',
    answer: "It depends on the property. Youngstown has a Redfin Compete Score of 69/100 — Somewhat Competitive at the county level. But within city limits, the market splits sharply: habitable properties in good condition generate competitive interest, while distressed or pre-1950 properties requiring significant rehab may sit for months with a limited buyer pool. The 97.0% sale-to-list ratio (Redfin, Feb 2026) shows that sellers who do find buyers get close to asking price.",
  },
];

export default function YoungstownGuidePage() {
  return (
    <>
      <SchemaMarkup schema={[
        youngstownLocalBusinessSchema,
        articleSchema('How to Sell Your House Fast in Youngstown OH — 2026 Guide', pageUrl, '2026-04-14'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/youngstown-oh-hero-640.jpg 640w, /images/optimized/youngstown-oh-hero-828.jpg 828w, /images/optimized/youngstown-oh-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-hero-1200.jpg"
            alt="Sell house fast Youngstown OH 2026 guide"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            How to Sell Your House Fast in Youngstown OH — 2026 Guide
          </h1>
          <p className="text-lg text-blue-100 mb-4">
            Four options compared with real Mahoning County data. Ohio conveyance fees, probate,
            foreclosure, and what cash buyers actually pay in this market.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors"
          >
            📞 Call Now — We Answer 24/7
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — 60-90 words exactly for AI citation */}
        <section className="mb-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6">
          <h2 className="text-lg font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            USA Home Buyers LLC buys houses for cash in Youngstown, Ohio and throughout Mahoning County.
            Written offer within 24 hours, close in 7-14 days, purchase in any condition, no repairs
            required, no agent fees, we pay all closing costs including Ohio's conveyance fee. Call
            888-274-5006. For most Youngstown sellers dealing with distressed pre-1950 properties,
            inherited estates, or urgent timelines, a direct cash sale is the fastest and often the
            only realistic exit.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Youngstown Housing Market in 2026</h2>
          <p className="text-gray-700 mb-4">
            Youngstown's housing market is unlike any other in our service area. The median sale
            price of $129,200 (
            <a href="https://www.redfin.com/city/21075/OH/Youngstown/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin, February 2026</a>)
            reflects the 30 transactions that closed that month — the subset of habitable,
            mortgageable properties. The Zillow ZHVI of $51,815 captures the broader reality:
            most of the city's housing stock, including thousands of vacant and deteriorating
            properties, is worth far less.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://www.ohio-demographics.com/youngstown-demographics" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">U.S. Census Bureau ACS</a>,
            Youngstown has a 31.2% poverty rate, a median household income of $34,408, and a
            population that's declined 8.4% since 2019. An estimated 30-40% of residential parcels
            in the city core are vacant or demolished.
          </p>
          <p className="text-gray-700">
            That context shapes every seller decision in this market. Speed and certainty matter
            more here than anywhere else we serve. A 7-day cash close is not just convenient —
            for many Youngstown sellers, it's the difference between walking away with something
            and losing the property entirely to tax delinquency or the county land bank.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your 4 Options for Selling a House in Youngstown</h2>

          <div className="space-y-6">
            {[
              {
                rank: '1',
                title: 'Cash Home Buyer (Fastest — Recommended for Distressed Properties)',
                pros: ['Closes in 7-14 days', 'No repairs, no cleanout', 'We pay all closing costs (conveyance fee included)', 'Works for any condition — code violations, fire damage, vacant'],
                cons: ['Offer is 65-75% of ARV', 'Not the highest possible number if property is in top condition'],
                verdict: 'Best for: urgent timeline, distressed condition, inherited estate, foreclosure, properties that don\'t qualify for conventional financing.',
              },
              {
                rank: '2',
                title: 'Traditional Listing With a Real Estate Agent',
                pros: ['Higher potential sale price (if property qualifies for financing)', 'Agent handles marketing and showings'],
                cons: ['70 days median DOM (Redfin, Feb 2026)', '5-6% agent commission (~$6,460-$7,752 on $129K)', 'Many Youngstown properties fail FHA/conventional inspection', 'Sale certainty uncertain — 15-20% fall through'],
                verdict: 'Best for: properties in good condition that qualify for FHA or conventional financing and sellers who can wait 3-5 months.',
              },
              {
                rank: '3',
                title: 'For Sale By Owner (FSBO)',
                pros: ['No agent commission', 'Full control over timeline'],
                cons: ['All marketing, showings, paperwork on you', 'Same financing qualification issue as traditional listing', 'Lower visibility than MLS-listed properties'],
                verdict: 'Best for: sellers with real estate experience, properties in strong condition, and time to manage the process.',
              },
              {
                rank: '4',
                title: 'iBuyer / National Investor Programs',
                pros: ['Online convenience'],
                cons: ['Opendoor, Offerpad, Zillow Offers do NOT operate in Youngstown', 'No national iBuyer serves this market', 'This option is not available here'],
                verdict: 'Not applicable in Youngstown.',
              },
            ].map((option) => (
              <div key={option.rank} className="border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{option.rank}</span>
                  <h3 className="font-bold text-brand-dark">{option.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-1">Pros</p>
                    <ul className="space-y-1">
                      {option.pros.map((p, i) => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-green-500">✓</span>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-700 mb-1">Cons</p>
                    <ul className="space-y-1">
                      {option.cons.map((c, i) => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-red-400">✗</span>{c}</li>)}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-brand-primary font-medium bg-blue-50 rounded-lg px-3 py-2">{option.verdict}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ohio-Specific Closing Costs Explained</h2>
          <p className="text-gray-700 mb-4">
            Ohio's closing cost structure differs from Pennsylvania (our other primary market) in several key ways:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left">Cost Item</th>
                  <th className="py-3 px-4 text-left">Rate / Amount</th>
                  <th className="py-3 px-4 text-left">Who Pays</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Ohio conveyance fee (state)', '$1.00/1,000 (ORC § 319.202)', 'Seller'],
                  ['Mahoning County permissive fee', '$3.00/1,000 (ORC § 322.02)', 'Seller'],
                  ['Parcel transfer fee', '$0.50 per parcel', 'Seller'],
                  ['Recording fee (deed)', '$39 base + $8/additional page', 'Buyer (customary)'],
                  ['Title insurance (owner\'s policy)', '~0.5-1% of sale price', 'Seller (customary, negotiable)'],
                  ['Agent commission', '5-6% if using an agent', 'Seller'],
                  ['Attorney fee', 'Not required by Ohio law', 'Negotiated if used'],
                ].map(([item, rate, payer], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border border-gray-100">{item}</td>
                    <td className="py-3 px-4 border border-gray-100">{rate}</td>
                    <td className="py-3 px-4 border border-gray-100">{payer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Sources:{' '}
            <a href="https://auditor.mahoningcountyoh.gov/ConveyanceCalculator" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County Auditor Conveyance Calculator</a>{' '}
            ·{' '}
            <a href="https://www.mahoningcountyoh.gov/788/Schedule-of-Fees" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County Recorder Fee Schedule</a>{' '}
            ·{' '}
            <a href="https://codes.ohio.gov/ohio-revised-code/section-319.202" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">ORC § 319.202</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ohio Disclosure Requirements</h2>
          <p className="text-gray-700 mb-4">
            Ohio requires sellers to complete the{' '}
            <a href="https://codes.ohio.gov/ohio-revised-code/section-5302.30" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Ohio Residential Property Disclosure Form (ORC § 5302.30)
            </a>
            {' '}for most residential transactions. This form requires disclosure of known material defects —
            structural, plumbing, electrical, HVAC, roof, water/drainage, hazardous materials, zoning
            violations, and pending litigation.
          </p>
          <p className="text-gray-700">
            When selling to a cash buyer in an as-is transaction, the disclosure form is completed noting
            known issues. Cash buyers who waive inspection contingency accept the property in current
            condition. Lead paint disclosure is mandatory for pre-1978 homes under federal law
            (virtually all Youngstown city housing stock qualifies).
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get Your Youngstown OH Cash Offer"
          subheadline="Written offer in 24 hours. Close in 7 days. We cover all Ohio closing costs."
          sourcePage="/markets/youngstown-oh"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling a House in Youngstown OH" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Explore More</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH Cash Home Buyers →</Link></li>
            <li><Link href="/markets/youngstown-oh/market-report" className="text-brand-primary hover:underline">Youngstown Housing Market Report 2026 →</Link></li>
            <li><Link href="/markets/youngstown-oh/foreclosure" className="text-brand-primary hover:underline">Facing Foreclosure in Youngstown →</Link></li>
            <li><Link href="/markets/youngstown-oh/inherited-property" className="text-brand-primary hover:underline">Selling an Inherited House in Youngstown →</Link></li>
            <li><Link href="/sell-house-fast-ohio" className="text-brand-primary hover:underline">Sell Your House Fast in Ohio →</Link></li>
          </ul>
        </section>

        <section className="mt-10">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Youngstown OH Home?" sourcePage="/markets/youngstown-oh" />
        </section>
      </div>
    </>
  );
}
