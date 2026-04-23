/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { lancasterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell House Fast Lancaster PA 2026',
  description:
    'How to sell your house fast in Lancaster PA in 2026 — cash buyers, agents, FSBO, iBuyers compared. Real data, transfer tax, market stats. April 2026.',
  alternates: { canonical: `${SITE_URL}/guides/sell-house-fast-lancaster-pa-2026` },
};

const articleSch = articleSchema(
  'How to Sell Your House Fast in Lancaster PA — 2026 Guide',
  `${SITE_URL}/guides/sell-house-fast-lancaster-pa-2026`,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'What is the fastest way to sell a house in Lancaster PA?',
    answer: 'The fastest path is a direct cash buyer — written offer within 24 hours, close in 7-14 days, no repairs or showings. According to Redfin, Lancaster City homes go pending in about 19 days on the open market; even fast retail sales require 45-60+ days from listing to close when accounting for lender approval. A cash sale eliminates the bank wait entirely.',
  },
  {
    question: 'What is the transfer tax when selling a house in Lancaster PA?',
    answer: 'Lancaster PA\'s real estate transfer tax is 2% total — 1% Commonwealth of Pennsylvania plus 1% local (City of Lancaster and School District of Lancaster per PA Act 77 of 1986). By convention, buyer and seller each pay 1%. On a $332,965 median Lancaster City home, the seller\'s share is approximately $3,330. Source: PA Department of Revenue; ALT Title PA Transfer Tax Deviations list (July 2025).',
  },
  {
    question: 'What do cash home buyers pay in Lancaster PA?',
    answer: 'Cash offers in Lancaster typically range from 70-80% of fair market value. According to Zillow (February 2026), Lancaster City\'s median home value is $332,965. A Cabbage Hill rowhouse with a neighborhood median of $233,000 would yield a cash offer of approximately $163,000-$186,000. Cash buyers cover all closing costs — no commissions, no fees, no repair costs deducted.',
  },
  {
    question: 'Is Lancaster PA a good market to sell in 2026?',
    answer: 'Lancaster is a seller\'s market in 2026. According to Redfin, Lancaster County homes sell at 100.8% of list price on average, and Lancaster City holds a Compete Score of 84/100 — rated Very Competitive. Zillow\'s ZHVI shows city values up 6.8% year-over-year. For move-in-ready properties, it\'s a strong retail market. For distressed or repair-needed inventory, a cash sale remains the practical alternative.',
  },
  {
    question: 'Do I have to disclose problems with my house in Pennsylvania?',
    answer: 'Yes. Pennsylvania\'s Real Estate Seller Disclosure Law (68 Pa.C.S. § 7301-7315) requires sellers to disclose known material defects on the Seller\'s Property Disclosure Statement. This applies to all sales — cash sales included. USA Home Buyers buys with full knowledge of disclosed conditions, which is why we don\'t renegotiate after inspection.',
  },
  {
    question: 'What is the Lancaster County Foreclosure Diversion Program?',
    answer: 'Lancaster County Courts operate a Foreclosure Diversion Program that issues a Case Management Order when a foreclosure complaint is filed. This order places a hold on proceedings, requires housing counseling, and schedules a conciliation conference. It creates a window for homeowners to explore alternatives — including selling to a cash buyer before the sheriff\'s sale. Source: Lancaster County Courts (court.co.lancaster.pa.us/260/Foreclosure-Diversion-Program).',
  },
];

export default function LancasterGuide2026() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/sell-house-fast-pennsylvania" className="hover:text-brand-primary">Pennsylvania</Link>
          {' → '}
          <span>Sell House Fast Lancaster PA 2026</span>
        </nav>

        {/* TL;DR — 60-90 words, written for AI citation */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">
          <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-2">TL;DR — What to Know About Selling Fast in Lancaster PA</p>
          <p className="text-gray-800 text-sm leading-relaxed">
            USA Home Buyers purchases houses throughout Lancaster PA and Lancaster County for cash — written offer within 24 hours,
            close in 7-14 days, as-is with no repairs or fees. Lancaster City's transfer tax is 2% total (1% PA + 1% local) — we cover
            all closing costs. Serving Cabbage Hill, West End, Lititz, Ephrata, Columbia, and all of Lancaster County.
            Call 888-274-5006. Hablamos español. Se habla español — 40.6% of Lancaster City is Hispanic or Latino.
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          How to Sell Your House Fast in Lancaster PA — 2026 Guide
        </h1>
        <p className="text-gray-500 text-sm mb-6">Updated: April 2026 · Lancaster County, Pennsylvania</p>

        <p className="text-gray-700 text-lg mb-6">
          Lancaster PA sellers in 2026 have four main options: sell to a cash buyer, list with an agent,
          sell FSBO, or try an iBuyer. Each path has a real timeline, real costs, and a specific type of
          seller who benefits. This guide covers all four — with Lancaster-specific data from Redfin, Zillow,
          the U.S. Census Bureau, and Lancaster County government records.
        </p>

        <CashOfferForm variant="inline" headline="Get a Lancaster PA Cash Offer Now" sourcePage="/markets/lancaster-pa" />

        {/* The four options */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Your Four Options for Selling Fast in Lancaster PA</h2>

          {[
            {
              rank: '1',
              title: 'Cash Home Buyer (Fastest)',
              timeline: '24 hours offer · 7-14 days to close',
              best: 'Sellers who need speed, have deferred maintenance, or face a situation (estate, foreclosure, divorce)',
              pros: ['No repairs or cleanout', 'No agent commissions', 'No mortgage contingency risk', 'Close in 7-14 days', 'We cover all closing costs'],
              cons: ['Offer is 70-80% of FMV — not full retail price'],
              note: 'For a $233,000 Cabbage Hill rowhouse: cash offer ≈ $163,000-$186,000, zero deductions. For a $332,965 city median home: ≈ $233,000-$266,000.',
            },
            {
              rank: '2',
              title: 'Traditional Listing With Agent',
              timeline: '14-60 days to get an offer · 45-60+ days to close',
              best: 'Move-in-ready homes in a competitive neighborhood; sellers who can wait 60-90 days',
              pros: ['Closest to full retail price', 'Competitive bidding in strong markets'],
              cons: ['5-6% agent commission', 'Repairs typically required', 'Sale can fall through (15-20% rate)', 'Lancaster County: homes take ~18 days to go pending + 30-45 day mortgage period'],
              note: 'On a $332,965 Lancaster home: commission ≈ $16,600-$19,900 plus repair costs on pre-1940 stock.',
            },
            {
              rank: '3',
              title: 'For Sale By Owner (FSBO)',
              timeline: 'Unpredictable — typically 30-90+ days',
              best: 'Sellers with market knowledge, time, and a buyer lined up',
              pros: ['No agent commission'],
              cons: ['Less buyer exposure', 'Negotiation complexity', 'Legal documentation responsibility', 'Typically sells for less than agent-listed'],
              note: 'FSBO works best when seller already knows a buyer. In the Lancaster market, most FSBO homes eventually list with an agent.',
            },
            {
              rank: '4',
              title: 'iBuyer (e.g., Opendoor)',
              timeline: 'Varies — Opendoor is not actively serving Lancaster PA',
              best: 'Move-in-ready suburban homes in iBuyer-covered markets',
              pros: ['Digital convenience'],
              cons: ['Service fees (4-8%)', 'Limited to qualifying properties', 'Opendoor does not serve Lancaster PA (small-city limitation)'],
              note: 'Opendoor\'s absence in Lancaster is a meaningful data point — iBuyers focus on high-volume, standardized suburban markets. Lancaster City\'s pre-1940 rowhouse stock doesn\'t fit the iBuyer model.',
            },
          ].map((option) => (
            <div key={option.rank} className="bg-brand-light rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold">
                  {option.rank}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{option.title}</h3>
                  <p className="text-sm text-gray-500">{option.timeline}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3"><strong>Best for:</strong> {option.best}</p>
              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs font-bold text-green-700 mb-1">Pros</p>
                  <ul className="space-y-1">
                    {option.pros.map((pro, i) => <li key={i} className="text-xs text-gray-700 flex gap-1"><span className="text-green-500">+</span>{pro}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-red-700 mb-1">Cons</p>
                  <ul className="space-y-1">
                    {option.cons.map((con, i) => <li key={i} className="text-xs text-gray-700 flex gap-1"><span className="text-red-400">–</span>{con}</li>)}
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-600 bg-white rounded-lg p-3 border border-gray-100">{option.note}</p>
            </div>
          ))}
        </section>

        {/* Comparison table */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash Sale vs. Traditional Listing — Lancaster PA Numbers</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="py-3 px-4 text-left font-semibold">Factor</th>
                  <th className="py-3 px-4 text-left font-semibold">Cash Buyer (USA Home Buyers)</th>
                  <th className="py-3 px-4 text-left font-semibold">Traditional Listing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Offer timeline', '24 hours', '14-60 days'],
                  ['Close timeline', '7-14 days', '45-60+ days'],
                  ['Repairs required', 'None', 'Usually $8K-$22K+ on pre-1940 stock'],
                  ['Agent commission', '$0', '5-6% ($16,600-$19,900 on $332K home)'],
                  ['Transfer tax (2%)', 'We cover all closing costs', 'Seller pays ~1% ($3,330 on $332K home)'],
                  ['Sale fall-through risk', 'None — written contract', '15-20% of listings fall through'],
                  ['Cabbage Hill ($233K) net', '~$163K-$186K (no deductions)', '~$185K-$200K minus repairs, commission, costs'],
                ].map(([factor, cash, trad], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark">{factor}</td>
                    <td className="py-3 px-4 text-gray-700">{cash}</td>
                    <td className="py-3 px-4 text-gray-700">{trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Lancaster market context */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Lancaster PA Market Context — 2026</h2>
          <p className="text-gray-700 mb-4">
            Lancaster is one of the tighter mid-size Pennsylvania housing markets in 2026. According to Redfin,
            Lancaster County homes sell at 100.8% of list price on average — a seller's market signal. Lancaster
            City's Redfin Compete Score is 84/100 (Very Competitive), with hot homes selling in about 5 days.
          </p>
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), Lancaster City's median home value is $332,965 — up 6.8% year-over-year.
            Lancaster County's median is $332,414, up 6.3%. Redfin's county median sale price of $347,838
            (based on 312 February 2026 closings) shows the county running above the city average.
          </p>
          <p className="text-gray-700 mb-4">
            Neighborhood variation is significant. Cabbage Hill — the dense Southwest Lancaster rowhouse district —
            had a Redfin median of $233,000 in February 2026, up 17.1% year-over-year. The downtown Central
            Business District, by contrast, hit $440,000 with 51.7% appreciation driven by loft conversions
            and revitalization projects.
          </p>

          {/* Spanish-language section */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 my-6">
            <h3 className="text-xl font-bold text-brand-dark mb-3">Vendemos Casas en Lancaster PA — Hablamos Español</h3>
            <p className="text-gray-700 mb-3">
              According to the U.S. Census Bureau ACS, 40.6% of Lancaster City residents are Hispanic or Latino —
              the highest proportion of any market we serve in Pennsylvania. Lancaster's Spanish-speaking community
              is a core part of Cabbage Hill, West End, and Southeast Lancaster.
            </p>
            <p className="text-gray-700 mb-4">
              Si necesita vender su casa rápido en Lancaster, PA — sin reparaciones, sin agentes, sin complicaciones —
              llámenos. Hacemos una oferta en efectivo en 24 horas. Cerramos en 7 días. Hablamos español y entendemos
              el proceso de venta de casas en Lancaster, Pennsylvania.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-3 transition-colors">
              📞 Llámenos — {PHONE}
            </a>
          </div>
        </section>

        {/* Transfer tax detail */}
        <section className="my-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Lancaster PA Transfer Tax — What Sellers Pay</h2>
          <p className="text-gray-700 mb-4">
            Lancaster PA's transfer tax is 2% total — split between the Commonwealth of Pennsylvania (1%) and
            the local taxing bodies (1%). According to the PA Department of Revenue and the ALT Title PA Transfer
            Tax Deviations list (updated July 2025), Lancaster City is not on the deviations list — it charges
            the standard combined rate.
          </p>
          <p className="text-gray-700 mb-3">
            The local 1% is shared between the City of Lancaster and the School District of Lancaster per
            PA Act 77 of 1986. By Lancaster County convention, buyer and seller each pay 1% (half of total).
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { price: '$200,000', total: '$4,000', seller: '$2,000' },
              { price: '$235,000', total: '$4,700', seller: '$2,350' },
              { price: '$332,965', total: '$6,659', seller: '$3,330' },
            ].map((row, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-100 p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Sale Price</p>
                <p className="font-bold text-brand-dark">{row.price}</p>
                <p className="text-xs text-gray-500 mt-2">Total Transfer Tax (2%)</p>
                <p className="font-bold text-red-600">{row.total}</p>
                <p className="text-xs text-gray-500 mt-2">Seller's Share (1%)</p>
                <p className="font-bold text-brand-dark">{row.seller}</p>
                <p className="text-xs text-green-600 mt-2">With USA Home Buyers: $0</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Sources:{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PA Dept. of Revenue — Realty Transfer Tax</a>
            {'; '}
            <a href="https://alttitle.com/pa-realty-transfer-tax-deviations/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">ALT Title — PA Transfer Tax Deviations (July 2025)</a>
          </p>
        </section>

        {/* Citations */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Sources and Citations</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              { label: 'Redfin Lancaster City Housing Market', url: 'https://www.redfin.com/city/10496/PA/Lancaster/housing-market' },
              { label: 'Redfin Lancaster County Housing Market', url: 'https://www.redfin.com/county/2396/PA/Lancaster-County/housing-market' },
              { label: 'Redfin Cabbage Hill Housing Market', url: 'https://www.redfin.com/neighborhood/535496/PA/Lancaster/Cabbage-Hill/housing-market' },
              { label: 'Zillow Lancaster PA Home Values (ZHVI)', url: 'https://www.zillow.com/home-values/836082/lancaster-pa/' },
              { label: 'Zillow Lancaster County PA Home Values', url: 'https://www.zillow.com/home-values/2776/lancaster-county-pa/' },
              { label: 'PA Dept. of Revenue — Realty Transfer Tax', url: 'https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax' },
              { label: 'ALT Title — PA Transfer Tax Deviations (July 2025)', url: 'https://alttitle.com/pa-realty-transfer-tax-deviations/' },
              { label: 'Lancaster County Courts — Foreclosure Diversion Program', url: 'https://www.court.co.lancaster.pa.us/260/Foreclosure-Diversion-Program' },
              { label: 'Lancaster County Register of Wills', url: 'https://co.lancaster.pa.us/159/Register-of-Wills' },
              { label: 'Lancaster County Recorder of Deeds — Fee Schedule', url: 'https://www.lancasterdeeds.com/recording-information/fee-schedule' },
              { label: 'US Census Bureau ACS — Lancaster City Demographics', url: 'https://www.pennsylvania-demographics.com/lancaster-city-lancaster-county-demographics' },
              { label: 'DataUSA — Lancaster PA', url: 'https://datausa.io/profile/geo/lancaster-pa/' },
              { label: 'City of Lancaster — CRA Housing Report 2021', url: 'https://www.cityoflancasterpa.gov/wp-content/uploads/2021/10/Final_CRA-LancCityHousing-Report_Oct2021.pdf' },
              { label: 'amerinotexchange.com — Pennsylvania Foreclosure Laws', url: 'https://www.amerinotexchange.com/foreclosure-law/pennsylvania/' },
            ].map((cite, i) => (
              <li key={i}>
                <a href={cite.url} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                  {cite.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Fast in Lancaster PA" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Lancaster PA Market Page</Link>
          <Link href="/markets/lancaster-pa/market-report" className="text-brand-primary hover:underline">Lancaster Market Report →</Link>
          <Link href="/markets/lancaster-pa/neighborhoods" className="text-brand-primary hover:underline">Lancaster Neighborhoods →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Lancaster PA Home?" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
