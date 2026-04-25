import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ComparisonTable } from '@/components/ComparisonTable';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell House Fast State College PA Guide',
  description:
    'Complete 2026 guide to selling fast in State College PA. Cash buyers vs. agents vs. FSBO with real Centre County data and transfer tax breakdown.',
  alternates: { canonical: `${SITE_URL}/guides/sell-house-fast-state-college-pa-2026` },
  openGraph: {
    images: [{ url: '/images/state-college-hero.jpg', width: 1200, height: 630, alt: 'Sell Your House Fast in State College PA' }],
  },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can you sell a house in State College PA?',
    answer:
      "Cash buyers can close in 7-14 days. The State College MLS is fast — median 5 days to pending — but financing adds 45-60 more days after offer acceptance before you see money.",
  },
  {
    question: 'How much do cash buyers pay in State College PA?',
    answer:
      "70-80% of fair market value. Based on Zillow's ZHVI of $408,500, that's $286,000-$327,000. Based on Redfin's median sale price of $450,000, that's $315,000-$360,000. No commissions, no closing costs — we cover everything including the 3% transfer tax.",
  },
  {
    question: 'What is the transfer tax rate in State College PA?',
    answer:
      "State College Borough charges 3.00% total — 1.00% state, 1.50% borough local, 0.50% school district. Most Centre County townships charge 2.00%. On a $400K sale in the Borough, that's $12,000 versus $8,000 elsewhere in the county.",
  },
  {
    question: 'Do cash home buyers in State College buy rental properties?',
    answer:
      "Yes. State College has a 73% renter-occupied rate — one of the highest in PA. We buy landlord properties with tenants in place, non-paying tenants, or just-vacated student rentals. No eviction required before closing.",
  },
  {
    question: 'Are cash home buyers in State College legitimate?',
    answer:
      "Verify via PA Dept of State business search at corporations.pa.gov and Centre County deed records. Ask for a written purchase agreement — legitimate buyers use contracts, not verbal promises. USA Home Buyers is registered in Pennsylvania and provides written offers only.",
  },
  {
    question: 'What\'s the fastest way to sell a Penn State-area house?',
    answer:
      "Selling to a local cash buyer. Written offer in 24 hours, close in 7-14 days, no repairs, no showings, no open houses. For a property with deferred maintenance, a non-paying tenant, or a complicated estate situation — it's usually the only realistic fast option.",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days after pending' },
  { label: 'Repairs required', cashBuyer: 'None — buy as-is', traditional: 'Usually required ($8K-$25K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% on median = $22,500-$27,000' },
  { label: 'Transfer tax (State College Borough)', cashBuyer: 'We pay all of it', traditional: '3% split: ~$6,750 seller share' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed written contract', traditional: '15-20% fall-through rate' },
  { label: 'Net proceeds estimate', cashBuyer: '70-80% of FMV', traditional: '85-90% of FMV after all costs' },
];

const pageUrl = `${SITE_URL}/guides/sell-house-fast-state-college-pa-2026`;

export default function SellHouseFastStateCollegeGuide() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling Your House Fast in State College, PA: The Complete 2026 Guide', pageUrl, '2026-04-12'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA homes — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/guides" className="hover:text-white">Guides</Link> › 2026 State College Seller Guide
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your House Fast in State College, PA: The Complete 2026 Guide
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              An honest, data-driven look at every way to sell a house fast in State College —
              cash buyers, MLS listing, iBuyers, and FSBO. Updated for 2026 with real Centre County
              numbers, the 3% transfer tax breakdown, and the Penn State market angle competitors ignore.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Questions? Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/sell-house-fast-state-college-pa-2026" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          {/* TL;DR Block — 60-90 words EXACTLY */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-base font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              To sell your house fast in State College, PA in 2026, USA Home Buyers offers the fastest
              path: written cash offer within 24 hours, close in 7-14 days, no repairs, no agent fees,
              and we cover the full 3% Centre County transfer tax. Call 888-274-5006 or submit the form
              above. For a retail-ready home with no complications, a traditional MLS listing can net
              more — but takes 50-65 days and carries a 15-20% fall-through risk.
            </p>
          </div>

          {/* Ranked Comparison */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your 4 Options to Sell Fast in State College — Ranked by Speed
            </h2>
            <div className="space-y-4">
              {[
                {
                  rank: '1',
                  option: 'Cash buyer (USA Home Buyers)',
                  speed: '7-14 days',
                  net: '70-80% of FMV',
                  best: 'As-is properties, landlord exits, estate sales, foreclosure, relocation',
                  downside: 'Lower gross number than retail — though net difference shrinks after costs',
                  badge: 'Fastest',
                },
                {
                  rank: '2',
                  option: 'Traditional MLS listing with agent',
                  speed: '50-65 days total',
                  net: '85-90% of FMV (after all costs)',
                  best: 'Retail-ready homes, patient sellers with no complications',
                  downside: "5-6% commissions + 3% transfer tax + repairs + 15-20% fall-through risk in Centre County's competitive market",
                  badge: 'Best net (if conditions are right)',
                },
                {
                  rank: '3',
                  option: 'FSBO (For Sale By Owner)',
                  speed: '30-90+ days',
                  net: '75-85% of FMV (saves commission, but longer time + more work)',
                  best: 'Sellers with time, real estate experience, and a retail-ready property',
                  downside: 'Limited buyer pool, slower, more legal exposure, no agent to manage negotiations',
                  badge: 'Middle ground',
                },
                {
                  rank: '4',
                  option: 'iBuyer (Opendoor, Offerpad)',
                  speed: '14-30 days',
                  net: '75-85% of FMV',
                  best: 'Newer, conforming homes in major metro areas',
                  downside: 'Opendoor and Offerpad do not serve State College — not available in this market',
                  badge: 'Not available here',
                },
              ].map((item) => (
                <div key={item.rank} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {item.rank}
                    </span>
                    <h3 className="font-bold text-brand-dark">{item.option}</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full ml-auto">{item.badge}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm">
                    <div><span className="text-gray-500">Speed:</span> <strong>{item.speed}</strong></div>
                    <div><span className="text-gray-500">Net proceeds:</span> <strong>{item.net}</strong></div>
                    <div className="sm:col-span-2"><span className="text-gray-500">Best for:</span> {item.best}</div>
                    <div className="sm:col-span-2"><span className="text-gray-500">Watch out for:</span> {item.downside}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Cash vs. Traditional in State College — The Numbers
            </h2>
            <ComparisonTable rows={COMPARISON_ROWS} />
            <p className="mt-4 text-sm text-gray-600">
              State College Borough&apos;s 3% transfer tax changes the math compared to most Pennsylvania markets.
              On a $450,000 sale, the total transfer tax bill is $13,500 — $4,500 more than the 2% standard
              in surrounding Centre County townships. We cover that cost entirely when you sell to us.
            </p>
          </section>

          {/* State College Market Context */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              What Makes State College Different in 2026
            </h2>
            <p className="text-gray-700 mb-4">
              State College doesn&apos;t behave like a typical Pennsylvania city. It&apos;s a company town — Penn State
              University Park drives demand, seasonality, and the demographic makeup of who owns property here.
            </p>
            <p className="text-gray-700 mb-4">
              According to Zillow and Redfin (February-March 2026), State College has a Redfin Compete Score
              of 93/100 — &quot;Most Competitive&quot; — with homes going pending in 5 days and a sale-to-list ratio
              of 100.3%. That means retail homes sell fast and above asking price.
            </p>
            <p className="text-gray-700 mb-4">
              But the retail market and the investment/distress market are different worlds here. Only 26.1%
              of housing units are owner-occupied (DataUSA, 2024) — a remarkably small pool of potential
              traditional sellers. The other 73.9% is rental housing. That 26% is mostly:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
              <li>Penn State faculty and staff who bought 10-30 years ago</li>
              <li>Empty nesters considering relocation after children left</li>
              <li>Families who received properties through Centre County estate processes</li>
              <li>Small landlords who got tired of the annual Penn State lease cycle</li>
            </ul>
            <p className="text-gray-700">
              For that seller pool, speed and certainty matter more than maximizing every dollar.
              A cash sale to USA Home Buyers — 7-14 days, no repairs, no transfer tax bill — is often
              the more practical choice.
            </p>
          </section>

          {/* The 3% Transfer Tax Section */}
          <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              The 3% Transfer Tax — The Number Most State College Sellers Don&apos;t Know
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              State College Borough charges 3.00% total realty transfer tax. Most PA sellers know about
              the 1% state portion — they often don&apos;t realize the borough and school district add another
              2%, bringing the total to 3.00%. By comparison, most Centre County townships charge 2.00%.
            </p>
            <div className="text-sm">
              <p className="mb-2"><strong>On a $450,000 sale in State College Borough:</strong></p>
              <p>Traditional sale: Seller pays ~$6,750 (half of 3%) + $22,500 agent commission + repairs</p>
              <p>Cash sale with us: You pay $0 in transfer tax, $0 in commission, $0 in repairs</p>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Source:{' '}
              <a href="https://centrecountypa.gov/420/Realty-Transfer-Tax-Rates" target="_blank" rel="noopener noreferrer" className="underline">
                Centre County Realty Transfer Tax Rates (centrecountypa.gov)
              </a>
            </p>
          </section>

          {/* How to Choose */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              How to Decide: Cash Sale vs. Traditional in State College
            </h2>
            <p className="text-gray-700 mb-4">
              Here&apos;s an honest framework. If your situation matches the left column, a cash sale makes sense.
              If it matches the right, the MLS might be worth it.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold text-green-700">Cash buyer makes sense</th>
                    <th className="py-3 px-4 text-left font-semibold text-blue-700">Traditional MLS might be better</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Property needs repairs or updating', 'Move-in ready, no deferred maintenance'],
                    ['Inherited or probate property', 'Simple, clean title situation'],
                    ['Tenant-occupied or rental property', 'Owner-occupied, vacant, clean'],
                    ['Need to close in under 30 days', 'Can wait 60+ days for top dollar'],
                    ['Already facing foreclosure', 'No financial pressure'],
                    ['Out-of-state or remote seller', 'Local and able to manage process'],
                    ["Can't afford repairs before listing", 'Budget for pre-listing work'],
                    ['Facing estate or probate complications', 'Simple single-ownership situation'],
                  ].map(([cash, trad], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 text-green-800">✓ {cash}</td>
                      <td className="py-2 px-4 text-blue-800">✓ {trad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <CashOfferForm
            variant="inline"
            headline="Get Your State College Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover the 3% transfer tax."
            sourcePage="/guides/sell-house-fast-state-college-pa-2026"
          />

          {/* FAQ */}
          <FAQSection items={FAQ_ITEMS} heading="State College PA Home Selling — FAQ" />

          {/* External Citations */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-sm">
            <p className="font-medium text-gray-700 mb-3">Related pages:</p>
            <p className="text-gray-500 mb-4">
              <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">Sell Your State College Home for Cash</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa/market-report" className="text-brand-primary hover:underline">State College Market Report</Link>
              {' '}·{' '}
              <Link href="/sell-house-fast-pennsylvania" className="text-brand-primary hover:underline">Sell House Fast Pennsylvania</Link>
              {' '}·{' '}
              <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">Cash Offer vs. MLS Listing</Link>
            </p>
            <p className="text-xs text-gray-400">
              <strong>External sources:</strong>{' '}
              <a href="https://www.zillow.com/home-values/47837/state-college-pa/" target="_blank" rel="noopener noreferrer" className="underline">Zillow ZHVI — State College</a>
              {' '}·{' '}
              <a href="https://www.redfin.com/city/18769/PA/State-College/housing-market" target="_blank" rel="noopener noreferrer" className="underline">Redfin — State College Housing Market</a>
              {' '}·{' '}
              <a href="https://centrecountypa.gov/420/Realty-Transfer-Tax-Rates" target="_blank" rel="noopener noreferrer" className="underline">Centre County RTT Rates</a>
              {' '}·{' '}
              <a href="https://datausa.io/profile/geo/state-college-pa/" target="_blank" rel="noopener noreferrer" className="underline">DataUSA — State College Demographics</a>
              {' '}·{' '}
              <a href="https://www.nolo.com/legal-encyclopedia/pennsylvania-foreclosure-laws-procedures.html" target="_blank" rel="noopener noreferrer" className="underline">PA Foreclosure Laws (Nolo)</a>
              {' '}·{' '}
              <a href="https://www.centrecountypa.gov/393/Register-of-Wills-Clerk-of-Orphans-Court" target="_blank" rel="noopener noreferrer" className="underline">Centre County Register of Wills</a>
              {' '}·{' '}
              <a href="https://www.neighborhoodscout.com/pa/state-college/real-estate" target="_blank" rel="noopener noreferrer" className="underline">NeighborhoodScout — State College Real Estate</a>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
