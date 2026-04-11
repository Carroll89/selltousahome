import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ComparisonTable } from '@/components/ComparisonTable';
import { articleSchema, faqSchema, allentownLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell House Fast Allentown PA 2026 — Guide',
  description:
    'Complete 2026 guide to selling your house fast in Allentown PA. Honest comparison of cash buyers, agents, and iBuyers with real Lehigh Valley numbers.',
  alternates: { canonical: 'https://selltousahome.com/guides/sell-house-fast-allentown-pa-2026' },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can you sell a house in Allentown PA?',
    answer:
      'Cash buyers can close in 7-14 days. Listed homes take 45-60+ days after going pending. The Allentown market averaged 29 days on market in February 2026.',
  },
  {
    question: 'How much do cash buyers pay in Allentown PA?',
    answer:
      'Typically 70-80% of fair market value — roughly $172,000–$196,000 on a $245,000 median Allentown home. Distressed properties in Center City or Jordan Heights may fall in the 60-70% range.',
  },
  {
    question: 'Are cash home buyers in Allentown legitimate?',
    answer:
      'Yes — verify via BBB, PA Dept of State (corporations.pa.gov), and Lehigh County deed records (lehighcounty.org).',
  },
  {
    question: "What's the fastest way to sell a house in Allentown PA?",
    answer:
      'Selling to a local cash buyer like USA Home Buyers. Written offer within 24 hours, close in 7-14 days — no repairs, no agent fees.',
  },
  {
    question: 'Do cash buyers buy houses that need repairs in Allentown?',
    answer:
      "Yes. Allentown has significant older housing stock — nearly 40% was built before 1939. Cash buyers specifically seek as-is properties that traditional buyers and lenders won't finance.",
  },
  {
    question: 'What is the transfer tax rate in Allentown PA?',
    answer:
      "As of January 1, 2026, Allentown's total transfer tax is 2.5% — PA state 1.0% plus Allentown city 1.5% (increased from 1.0% effective Jan 1, 2026). Customarily split 50/50: buyer pays 1.25%, seller pays 1.25%. This is higher than the standard 2.0% rate elsewhere in Pennsylvania.",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days after pending' },
  { label: 'Repairs required', cashBuyer: 'None — buy as-is', traditional: 'Typically $5K-$20K avg' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$12,000-$15,000)' },
  { label: 'Closing costs', cashBuyer: 'We pay everything', traditional: '~1-3% + 1.25% Allentown transfer tax (seller share)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed written contract', traditional: '15-20% fall-through rate' },
  { label: 'Net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% of FMV after all costs' },
];

const pageUrl = `${SITE_URL}/guides/sell-house-fast-allentown-pa-2026`;

export default function SellHouseFastAllentownGuide() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling Your House Fast in Allentown, PA: The Complete 2026 Guide', pageUrl),
          faqSchema(FAQ_ITEMS),
          allentownLocalBusinessSchema,
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/allentown-hero.jpg"
          alt="Allentown PA home — sell your house fast for cash in the Lehigh Valley"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/guides" className="hover:text-white">Guides</Link> › 2026 Allentown Seller Guide
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your House Fast in Allentown, PA: The Complete 2026 Guide
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              An honest, numbers-driven comparison of every way to sell a house fast in Allentown and the Lehigh Valley
              — cash buyers, iBuyers, agents, and FSBO. Updated for 2026 market conditions.{' '}
              <span className="italic">Hablamos español.</span>
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Questions? Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/sell-house-fast-allentown-pa-2026" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TL;DR Callout */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            USA Home Buyers LLC is a cash home buyer serving Allentown, PA and the Lehigh Valley. They purchase
            residential properties as-is — no repairs, no agent fees, no showings. Sellers receive a written cash
            offer within 24 hours and can close in as few as 7–14 days. Best fit: homes needing repairs,
            inherited or estate properties, pre-foreclosure, divorce sales, and any situation requiring speed and
            certainty. Hablamos español. Phone: (888) 440-5250.
          </p>
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            The 2026 Allentown PA Housing Market — What Sellers Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            Allentown&apos;s housing market in 2026 is highly competitive. The Redfin Compete Score sits at 88–92 out of
            100 — hot homes sell in roughly 7 days and the typical home receives around 6 offers. But{' '}
            &quot;pending&quot; isn&apos;t &quot;closed.&quot; After an offer is accepted, inspections, appraisals, mortgage
            underwriting, and title work still take 45-60 days. If financing falls through (15-20% of listings do),
            you start over.
          </p>
          <p className="text-gray-700 mb-4">
            Allentown&apos;s median home is roughly 40% below the national average — making it a prime market for
            investors and cash buyers alike. With nearly 40% of the city&apos;s housing stock built before 1939 and a
            58% renter-occupied rate, as-is buyers are especially active here.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 text-left">Allentown Market Data (2026)</th>
                  <th className="px-4 py-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Zillow typical home value (ZHVI)', '$267,465'],
                  ['Redfin median sale price (Feb 2026)', '$245,000'],
                  ['Year-over-year price change', '+7.0% (Zillow) / +2.1% (Redfin)'],
                  ['Median days on market (Feb 2026)', '29 days'],
                  ['Sale-to-list price ratio', '98.9%'],
                  ['Redfin Compete Score', '88–92 / 100 (Very Competitive)'],
                  ['Cash offer range (typical home)', '~$172,000–$196,000 (70–80% FMV)'],
                  ['Allentown transfer tax (as of Jan 2026)', '2.5% total (above PA standard 2%)'],
                  ['Typical realtor commission', '5–6%'],
                ].map(([metric, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border-b border-gray-100">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary border-b border-gray-100">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Transfer tax callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-amber-900 mb-1">⚠️ Allentown Transfer Tax Update — January 2026</p>
            <p className="text-sm text-amber-800">
              Allentown City Council approved a transfer tax increase effective January 1, 2026. The local rate
              rose from 1.0% to <strong>1.5%</strong>, bringing the total (state + city) to <strong>2.5%</strong> —
              half a percentage point above the standard Pennsylvania rate. The increase is customarily split evenly:
              buyer pays 1.25%, seller pays 1.25%. When selling to USA Home Buyers, we cover our share of closing
              costs. Source:{' '}
              <a href="https://www.lehighvalleylive.com/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">
                Greater Lehigh Valley Realtors (GLVR)
              </a>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">
            4 Ways to Sell a House Fast in Allentown — Ranked by Speed
          </h2>

          <div className="space-y-6 mb-10">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">1</span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Cash Buyer — 7-14 Days</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    A local cash buyer like USA Home Buyers purchases the property directly — no financing
                    contingency, no lender approval, no appraisal required. You get a written offer within
                    24 hours and can close in as few as 7 days. The property sells as-is, making this
                    especially valuable in Allentown where older housing stock often can&apos;t pass traditional
                    financing inspections.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-700">Pros</p>
                      <p className="text-gray-600">Speed, certainty, no repairs, no fees</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="font-semibold text-red-700">Cons</p>
                      <p className="text-gray-600">70-80% of FMV (below market gross price)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">2</span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">iBuyer (Opendoor, etc.) — 2-4 Weeks</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    iBuyers use algorithms to make instant offers. Coverage in the Allentown / Lehigh Valley
                    market is limited — most iBuyers focus on larger metros. When available, they typically
                    offer 70-75% of FMV with additional service fees (4-8%) on top, and they&apos;re selective
                    on condition.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-700">Pros</p>
                      <p className="text-gray-600">Faster than traditional, some certainty</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="font-semibold text-red-700">Cons</p>
                      <p className="text-gray-600">Limited Lehigh Valley coverage, high fees, picky on condition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">3</span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Real Estate Agent (MLS) — 60-90 Days</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Listing on the MLS gets you the highest gross sale price — but the timeline is 45-60 days
                    after you accept an offer (which may take weeks to arrive). Cost: 5-6% commission,
                    1.25% Allentown transfer tax (seller share), potential repairs, staging, and carrying costs.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-700">Pros</p>
                      <p className="text-gray-600">Highest gross sale price</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="font-semibold text-red-700">Cons</p>
                      <p className="text-gray-600">Slowest, repairs/showings required, 15-20% fall-through rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">4</span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">FSBO (For Sale By Owner) — Variable</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Selling without an agent saves the commission but requires marketing expertise, legal knowledge,
                    and negotiation skills. FSBO homes typically sell for less than listed homes and take longer
                    to close. In Allentown&apos;s competitive market, under-marketed FSBO properties often sit while
                    properly listed homes move in days. Less than 10% of FSBO sellers net more than they would
                    have with an agent.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-700">Pros</p>
                      <p className="text-gray-600">No agent commission</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="font-semibold text-red-700">Cons</p>
                      <p className="text-gray-600">Often nets less, time-intensive, legal exposure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Cash Buyer vs. Traditional Sale: The Real Math in Allentown
          </h2>
          <p className="text-gray-700 mb-4">
            The gap between a cash offer and a traditional sale looks wider than it is. Here&apos;s the breakdown
            on a $200,000 Allentown home that needs $15,000 in repairs:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-brand-light rounded-xl p-5">
              <h3 className="font-bold text-brand-primary mb-3">Cash Sale</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Cash offer (75% FMV)</span><span className="font-bold">$150,000</span></div>
                <div className="flex justify-between text-gray-500"><span>Agent commission</span><span>$0</span></div>
                <div className="flex justify-between text-gray-500"><span>Transfer tax (seller share)</span><span>$0 (we cover)</span></div>
                <div className="flex justify-between text-gray-500"><span>Closing costs</span><span>$0 (we cover)</span></div>
                <div className="flex justify-between text-gray-500"><span>Repairs</span><span>$0</span></div>
                <div className="flex justify-between text-gray-500"><span>Carrying costs</span><span>$0</span></div>
                <div className="border-t pt-2 flex justify-between font-bold text-brand-dark"><span>Net to seller</span><span>$150,000</span></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-700 mb-3">Traditional MLS Sale</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>List price / sale price</span><span className="font-bold">$200,000</span></div>
                <div className="flex justify-between text-red-600"><span>Agent commission (5.5%)</span><span>-$11,000</span></div>
                <div className="flex justify-between text-red-600"><span>Transfer tax (1.25% seller)</span><span>-$2,500</span></div>
                <div className="flex justify-between text-red-600"><span>Title/closing costs</span><span>-$2,500</span></div>
                <div className="flex justify-between text-red-600"><span>Pre-listing repairs</span><span>-$15,000</span></div>
                <div className="flex justify-between text-red-600"><span>Carrying costs (75 days)</span><span>-$4,000</span></div>
                <div className="border-t pt-2 flex justify-between font-bold text-brand-dark"><span>Net to seller</span><span>$165,000</span></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-8">
            The difference in this example: $15,000 — or about $200/day. Whether that gap is worth 75 extra days
            depends entirely on your situation. For sellers who can&apos;t or won&apos;t make repairs, the gap narrows
            further.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Full Comparison: Cash Buyer vs. Traditional Sale in Allentown
          </h2>
        </article>

        <ComparisonTable rows={COMPARISON_ROWS} />

        <div className="my-10">
          <CashOfferForm
            variant="inline"
            headline="Get Your Allentown Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. Close in 7-14 days. Hablamos español."
            sourcePage="/guides/sell-house-fast-allentown-pa-2026"
          />
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Allentown Neighborhoods — Where Cash Buyers Are Most Active
          </h2>
          <p className="text-gray-700 mb-4">
            Allentown&apos;s neighborhoods vary dramatically in price, condition, and investor activity. Here&apos;s
            what sellers in each area should know:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 text-left">Neighborhood</th>
                  <th className="px-4 py-3 text-left">Median Sale Price</th>
                  <th className="px-4 py-3 text-left">Cash Buyer Interest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Jordan Heights', '~$100K–$140K', 'Very High — most distressed in Lehigh Valley'],
                  ['Old Allentown Historic District', '~$142,000', 'Very High — estate/probate activity'],
                  ['Center City', '~$172,000', 'High — investor-driven, high renter rate'],
                  ['East Side', '~$237,000', 'Moderate-High — workforce housing'],
                  ['Southside', '~$261,750', 'Moderate — improving area'],
                  ['West End', '$288K–$335K', 'Moderate-Low — owner-occupant dominated'],
                  ['South Allentown', '~$311,000', 'Low-Moderate — newer suburban stock'],
                  ['Midway Manor', '~$327,500', 'Low — suburban, low distress'],
                  ['Trexler Park', '~$650,250', 'Very Low — affluent, low distress'],
                ].map(([hood, price, interest], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark border-b border-gray-100">{hood}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary border-b border-gray-100">{price}</td>
                    <td className="py-3 px-4 text-gray-700 border-b border-gray-100">{interest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Source: Redfin neighborhood data (2024–2025). Jordan Heights, Center City, and Old Allentown Historic
            District have the highest concentration of as-is acquisition opportunities due to older housing stock,
            estate sales, and deferred maintenance.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Selling in Allentown&apos;s Hispanic Community — Hablamos Español
          </h2>
          <p className="text-gray-700 mb-4">
            Allentown is one of Pennsylvania&apos;s most culturally distinct cities. With{' '}
            <strong>56.3% of the population identifying as Hispanic or Latino</strong> (2024 Census data),
            many homeowners are more comfortable discussing real estate in Spanish. USA Home Buyers serves
            Allentown&apos;s full community — <em>hablamos español</em> and can walk through the entire sale
            process in the language you prefer.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you inherited a property from a family member, are navigating a divorce, or simply need
            to sell quickly — language should never be a barrier. Call us at{' '}
            <a href={`tel:${PHONE}`} className="text-brand-primary hover:underline font-semibold">{PHONE}</a>{' '}
            and we can connect you with a Spanish-speaking team member.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            When Does a Cash Sale Make the Most Sense in Allentown?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Inherited or estate property', desc: "Allentown's older housing stock — nearly 40% built before 1939 — generates significant estate activity. Out-of-state heirs or properties needing major work are ideal candidates for a cash sale." },
              { title: 'Foreclosure / behind on payments', desc: "PA's judicial foreclosure takes 12-18 months, but the clock is ticking. Selling before the sheriff sale protects your equity and avoids a foreclosure on your credit record." },
              { title: 'Divorce', desc: 'Cash sales eliminate ongoing cooperation requirements — one decision, one closing, then done. No joint showings, no shared proceeds timeline.' },
              { title: 'Problem tenants', desc: "Allentown is 58% renter-occupied. Cash buyers purchase tenant-occupied properties. You don't need to wait for the lease to end or deal with an eviction." },
              { title: 'Properties needing major repairs', desc: "Pre-1939 homes often have lead paint, knob-and-tube wiring, or deferred maintenance that prevents traditional financing. Cash buyers take as-is properties that lenders won't touch." },
              { title: 'Relocation or financial pressure', desc: "With a median household income of $55,494 and 16.6% of families in poverty, many Allentown sellers simply can't fund repairs before selling. A cash sale as-is is often the only viable option." },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            How to Verify a Cash Home Buyer in Allentown is Legitimate
          </h2>
          <p className="text-gray-700 mb-4">
            Not every company calling itself a &quot;cash buyer&quot; is equal. Here&apos;s how to verify any buyer:
          </p>
          <ol className="space-y-3 mb-6 text-gray-700 text-sm">
            <li><strong>1. Check BBB accreditation</strong> — Search the company name at bbb.org. Look for an A or A+ rating and active accreditation.</li>
            <li><strong>2. Verify business registration</strong> — Check corporations.pa.gov to confirm the company is registered as an active PA LLC or corporation.</li>
            <li><strong>3. Request a written offer</strong> — Any legitimate buyer provides a formal purchase agreement with price, terms, and closing date. Verbal offers are a red flag.</li>
            <li><strong>4. Check deed records</strong> — Lehigh County deed records (lehighcounty.org) show past purchases. A legitimate buyer has a verifiable history of closed transactions.</li>
            <li><strong>5. Ask about closing agent</strong> — Legitimate cash buyers always close through a licensed title company or real estate attorney. If they want to skip a title company, walk away.</li>
          </ol>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-dark mb-1">USA Home Buyers verification:</p>
            <p className="text-sm text-gray-700">BBB accredited · Registered LLC in PA · Written offers always provided · Closes through licensed title company · Active buyer in Allentown and Lehigh County</p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Lehigh County Probate &amp; Estate Sales — What Sellers Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            If you&apos;re selling an inherited or estate property in Allentown, you may need to navigate
            Lehigh County&apos;s probate process first. Key facts:
          </p>
          <ul className="space-y-2 mb-6 text-gray-700 text-sm list-disc pl-5">
            <li><strong>Lehigh County Register of Wills</strong> — 455 West Hamilton Street, Room 122, Allentown PA 18101. Phone: (610) 782-3000.</li>
            <li><strong>Small estates (under $50,000)</strong> may qualify for summary administration — typically 1-3 months.</li>
            <li><strong>Formal probate</strong> in PA typically takes 6-12 months, longer if contested or complex.</li>
            <li><strong>PA inheritance tax rates:</strong> 4.5% for lineal heirs (children/grandchildren), 12% for siblings, 15% for other beneficiaries. Surviving spouses pay 0%.</li>
            <li><strong>Assets with named beneficiaries</strong> or joint tenancy do not require probate under PA law.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Cash buyers can often work around probate timelines — making an offer contingent on court approval,
            then moving quickly once the estate clears. This can be faster than waiting for a traditional buyer
            to appear after probate concludes.
          </p>
        </article>

        <FAQSection
          items={FAQ_ITEMS}
          heading="Frequently Asked Questions — Selling Fast in Allentown PA"
        />

        <div className="mt-8 text-sm text-gray-500">
          <p className="mb-3">
            <strong>Sources:</strong>{' '}
            <a href="https://www.legis.state.pa.us/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PA Foreclosure Law — Title 68 (legis.state.pa.us)</a>{' '}·{' '}
            <a href="https://www.lehighcounty.org/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Lehigh County Register of Wills &amp; Deed Records</a>{' '}·{' '}
            <a href="https://www.revenue.pa.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PA Inheritance Tax &amp; Transfer Tax — Revenue.PA.gov</a>{' '}·{' '}
            <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">NAR Market Statistics</a>
          </p>
          <p>
            Related:{' '}
            <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Allentown Market Page</Link>{' '}
            ·{' '}
            <Link href="/resources/how-much-do-cash-buyers-pay" className="text-brand-primary hover:underline">How Much Do Cash Buyers Pay?</Link>{' '}
            ·{' '}
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">Cash Offer vs. Listing</Link>
          </p>
        </div>
      </div>
    </>
  );
}
