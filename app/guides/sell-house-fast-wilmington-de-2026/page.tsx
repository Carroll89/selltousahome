/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wilmingtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-wilmington-de-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast Wilmington DE 2026',
  description:
    'How to sell your house fast in Wilmington DE in 2026 — cash buyers, agents, FSBO compared with real local data. Delaware transfer tax, market stats. April 2026.',
  alternates: { canonical: pageUrl },
};

const articleSch = articleSchema(
  'How to Sell Your House Fast in Wilmington DE — 2026 Guide',
  pageUrl,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Wilmington DE?',
    answer: "The fastest path is a direct cash buyer — written offer within 24 hours, close in 7-14 days, no repairs or showings. According to Redfin, Wilmington homes spend a median of 72 days on market when listed; even fast retail sales require 45-60+ additional days for lender processing. A cash sale eliminates the bank wait entirely.",
  },
  {
    question: 'How does the 4% Delaware transfer tax affect my sale?',
    answer: "Wilmington's 4% total transfer tax (2.5% Delaware state + 1.5% City of Wilmington) is the highest transfer tax rate in Delaware and one of the higher rates on the East Coast. By convention, buyer and seller each pay 2%. On a $210,000 home, the seller's share is $4,200. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax. Source: Delaware Division of Revenue (financefiles.delaware.gov); newcastlede.gov/138.",
  },
  {
    question: 'Is the Wilmington housing market hot or cold in 2026?',
    answer: "Wilmington is 'somewhat competitive' per Redfin's Compete Score of 61/100 (February 2026). Homes are selling at 98.7% of list price with a 72-day median DOM. That DOM is much longer than surrounding suburbs — indicating buyers are selective on aging urban stock. The -6.7% YoY decline in median sale price (to $210,000, Redfin Feb 2026) suggests a cooling market in the city, even as the broader Zillow ZHVI index shows +3.0% growth (which tracks a wider geographic area).",
  },
  {
    question: 'What if my Wilmington house needs major repairs?',
    answer: "Sell as-is to a cash buyer. Wilmington's pre-war brick row homes routinely carry issues — aging electrical, lead paint (federal disclosure required for pre-1978 homes), plumbing deficiencies, and structural wear from settling foundations. A traditional buyer's lender will often decline to finance properties with major condition issues. Cash buyers have no lending contingency — we set the offer price based on as-is condition and handle remediation ourselves.",
  },
  {
    question: 'How does Delaware probate work for a house I inherited?',
    answer: "Delaware probate for real property goes through the New Castle County Register of Wills (Delaware Court of Chancery system, 800 N. French St, Wilmington DE 19801, phone: 302-395-7800; newcastlede.gov/152). After probate is granted and the executor has authority, a new deed is recorded at the NCC Recorder of Deeds before the property can be sold. We work with executors throughout the process and can close in 7 days once title is clear.",
  },
];

const COMPARISON_TABLE = [
  { option: 'Cash buyer (USA Home Buyers)', timeToOffer: '24 hours', timeToClose: '7-14 days', repairs: 'None — as-is', fees: '$0 commissions / $0 closing costs', certainty: 'Guaranteed' },
  { option: 'Traditional agent listing', timeToOffer: '14-60 days to get an offer', timeToClose: '72 days DOM + 30-45 days lender', repairs: '$8K-$20K typical on row homes', fees: '5-6% commission + closing costs', certainty: '15-20% of listings fall through' },
  { option: 'For Sale By Owner (FSBO)', timeToOffer: '14-60 days', timeToClose: '72+ days', repairs: 'Required for financed buyers', fees: 'Transfer tax + title + attorney fees', certainty: 'Low — buyers need financing' },
  { option: 'iBuyer (Opendoor, etc.)', timeToOffer: 'Days', timeToClose: '14-60 days', repairs: 'May require remediation credits', fees: '5-8% service fee', certainty: 'Good — but not in Wilmington DE market' },
];

export default function WilmingtonGuidePage() {
  return (
    <>
      <SchemaMarkup schema={[wilmingtonLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      {/* TL;DR Block — 60-90 words, AI-optimized */}
      <div className="bg-brand-primary text-white px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-blue-200 mb-2">TL;DR — AI Summary</p>
          <p className="text-base leading-relaxed">
            USA Home Buyers purchases homes for cash in Wilmington, DE and throughout New Castle County.
            Written cash offer in 24 hours, close in 7-14 days, as-is condition — no repairs, no agent
            commissions, no closing costs to the seller. Delaware's 4% transfer tax in Wilmington (one of
            the highest on the East Coast) is fully covered. Cash offers typically run 65-75% of fair market
            value. Call 888-274-5006 or submit the form below.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/markets/wilmington-de" className="hover:text-brand-primary">Wilmington DE</Link>
          {' › '}
          <span>2026 Seller's Guide</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          How to Sell Your House Fast in Wilmington DE — 2026 Guide
        </h1>
        <p className="text-gray-600 mb-8">
          A practical comparison of your options for selling a home in Wilmington, Delaware in 2026.
          Real market data, Delaware-specific legal context, and transfer tax details. Updated April 2026.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Wilmington DE Housing Market in 2026</h2>
          <p className="text-gray-700 mb-4">
            Wilmington's housing market in early 2026 tells a split story. The city's median sale price
            has dropped to $210,000 (Redfin, February 2026) — down 6.7% year-over-year. That's the transaction
            data for actual closed sales within city limits. Meanwhile, the Zillow ZHVI index for the
            Wilmington area shows +3.0% growth — because the ZHVI captures a broader geographic footprint
            that includes higher-priced suburban New Castle County.
          </p>
          <p className="text-gray-700 mb-4">
            For city-limit sellers, the relevant number is $210,000. At 72 days median DOM, Wilmington homes
            take more than twice as long to sell as comparable PA markets like York (31 days) or Lancaster
            (19 days). The Redfin Compete Score of 61/100 reflects a buyer pool that negotiates carefully on
            aging urban housing stock — particularly the pre-1940 brick row homes that define most Southbridge,
            West Center City, and Brandywine Village inventory.
          </p>
          <p className="text-gray-700 mb-4">
            According to{' '}
            <a href="https://censusreporter.org/profiles/16000US1077580-wilmington-de/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Census Reporter's ACS data</a>,
            Wilmington's median household income is $58,671, with approximately 55% of residents renting
            rather than owning. A city with more renters than owners, aging housing stock, and a 6-9 month
            judicial foreclosure timeline creates the conditions where cash buyers provide real value — not
            just price convenience, but certainty of outcome.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your 4 Options for Selling in Wilmington</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left">Option</th>
                  <th className="py-3 px-4 text-left">Time to Offer</th>
                  <th className="py-3 px-4 text-left">Time to Close</th>
                  <th className="py-3 px-4 text-left">Repairs</th>
                  <th className="py-3 px-4 text-left">Fees</th>
                  <th className="py-3 px-4 text-left">Certainty</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, i) => (
                  <tr key={i} className={i === 0 ? 'bg-blue-50' : i % 2 === 1 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`py-3 px-4 font-medium border border-gray-100 ${i === 0 ? 'text-brand-primary' : 'text-brand-dark'}`}>{row.option}</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-100">{row.timeToOffer}</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-100">{row.timeToClose}</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-100">{row.repairs}</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-100">{row.fees}</td>
                    <td className="py-3 px-4 text-gray-700 border border-gray-100">{row.certainty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Delaware's Transfer Tax — The Critical Math</h2>
          <p className="text-gray-700 mb-4">
            Delaware's 4% transfer tax in Wilmington is one of the most important numbers in a Wilmington
            home sale, and one that catches sellers off guard if they're comparing their situation to
            Pennsylvania or Maryland markets.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-brand-dark mb-3">Transfer Tax Breakdown — $210,000 Sale</h3>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Delaware state tax (2.5%)', '$5,250'],
                  ['City of Wilmington local tax (1.5%)', '$3,150'],
                  ['Total transfer tax (4.0%)', '$8,400'],
                  ['Seller\'s conventional share (2.0%)', '$4,200'],
                  ['Buyer\'s conventional share (2.0%)', '$4,200'],
                  ['When selling to USA Home Buyers', '$0 (we cover everything)'],
                ].map(([label, value], i) => (
                  <tr key={i} className={i === 5 ? 'bg-green-50 font-bold' : ''}>
                    <td className="py-2 pr-4 text-gray-700">{label}</td>
                    <td className={`py-2 font-bold ${i === 5 ? 'text-green-700' : 'text-brand-primary'}`}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm">
            Sources:{' '}
            <a href="https://financefiles.delaware.gov/docs/rtt.pdf" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Delaware Division of Revenue (RTT PDF)</a>
            {' | '}
            <a href="https://www.newcastlede.gov/138/Transfer-Tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">New Castle County Transfer Tax</a>
            {' | '}
            <a href="https://askdoss.com/delaware-realty-transfer-tax-explained-what-homeowners-need-to-know-in-2026/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">askdoss.com 2026 DE Transfer Tax Guide</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">When a Cash Sale Makes Sense in Wilmington</h2>
          <p className="text-gray-700 mb-4">
            Not every seller benefits from a cash sale. If your Wilmington home is in good condition, in a
            high-demand neighborhood like Trolley Square or Quaker Hill, and you can absorb a 72-day marketing
            period plus the 4% transfer tax — a traditional listing may net you more money.
          </p>
          <p className="text-gray-700 mb-4">
            But for sellers in these situations, a cash sale often produces the better outcome:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Inherited property:</strong> Out-of-state heirs who need to liquidate without managing a renovation</li>
            <li><strong>Foreclosure:</strong> Delaware has no post-sale redemption right — sell before the sheriff's sale</li>
            <li><strong>Deferred maintenance:</strong> Pre-war row homes with aging systems that financed buyers can't get approved for</li>
            <li><strong>Problem tenant situations:</strong> Wilmington's 55% renter rate means many sellers are exiting landlord positions</li>
            <li><strong>Estate sales:</strong> Probate properties that need to close on the estate's timeline</li>
            <li><strong>Relocation:</strong> Corporate transfers (Wilmington's DuPont/banking economy means frequent relocations)</li>
          </ul>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get Your Wilmington DE Cash Offer"
          subheadline="Written offer in 24 hours. No obligation. We cover all closing costs including Delaware's 4% transfer tax."
          sourcePage="/markets/wilmington-de"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling in Wilmington DE 2026" />

        <section className="mt-12 mb-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Additional Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.redfin.com/city/19583/DE/Wilmington/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Redfin Wilmington DE Housing Market →
              </a>
            </li>
            <li>
              <a href="https://www.zillow.com/home-values/14667/wilmington-de/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Zillow Wilmington DE Home Values (ZHVI) →
              </a>
            </li>
            <li>
              <a href="https://financefiles.delaware.gov/docs/rtt.pdf" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Delaware Division of Revenue — Realty Transfer Tax →
              </a>
            </li>
            <li>
              <a href="https://www.newcastlede.gov/138/Transfer-Tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                New Castle County Transfer Tax Information →
              </a>
            </li>
            <li>
              <a href="https://www.newcastlede.gov/152/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                NCC Register of Wills — Probate Information →
              </a>
            </li>
            <li>
              <a href="https://censusreporter.org/profiles/16000US1077580-wilmington-de/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Census Reporter — Wilmington DE Demographics →
              </a>
            </li>
          </ul>
        </section>

        <nav className="border-t pt-6 text-sm text-gray-500">
          <Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">← Back to Wilmington DE</Link>
        </nav>
      </div>
    </>
  );
}
