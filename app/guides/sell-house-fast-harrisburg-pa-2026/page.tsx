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
  title: 'Sell House Fast Harrisburg PA 2026 — Complete Guide',
  description:
    'Complete 2026 guide to selling your house fast in Harrisburg PA. Honest comparison of cash buyers, agents, and iBuyers with real Harrisburg numbers.',
  alternates: { canonical: 'https://selltousahome.com/guides/sell-house-fast-harrisburg-pa-2026' },
  openGraph: {
    images: [{ url: '/images/harrisburg-hero.jpg', width: 1200, height: 630, alt: 'Sell Your House Fast in Harrisburg PA' }],
  },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can you sell a house in Harrisburg PA?',
    answer:
      'Cash buyers can close in 7-14 days. Listed homes take 45-60+ days after going pending.',
  },
  {
    question: 'How much do cash buyers pay in Harrisburg PA?',
    answer:
      '70-80% of fair market value, typically $100,000-$187,000 on a median Harrisburg home.',
  },
  {
    question: 'Are cash home buyers in Harrisburg legitimate?',
    answer:
      'Yes — verify via BBB, PA Dept of State (corporations.pa.gov), and county deed records.',
  },
  {
    question: "What's the fastest way to sell a house in Harrisburg PA?",
    answer:
      'Selling to a local cash buyer like USA Home Buyers. Written offer in 24 hours, close in 7-14 days.',
  },
  {
    question: 'Do cash buyers buy houses that need repairs in Harrisburg?',
    answer:
      'Yes. Cash buyers specifically seek as-is properties that traditional buyers won\'t finance.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days after pending' },
  { label: 'Repairs required', cashBuyer: 'None — buy as-is', traditional: 'Typically $5K-$20K avg' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$7,000-$14,000)' },
  { label: 'Closing costs', cashBuyer: 'We pay everything', traditional: '~1-3% + 1% PA transfer tax' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed written contract', traditional: '15-20% fall-through rate' },
  { label: 'Net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% of FMV after all costs' },
];

const pageUrl = `${SITE_URL}/guides/sell-house-fast-harrisburg-pa-2026`;

export default function SellHouseFastGuide() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling Your House Fast in Harrisburg, PA: The Complete 2026 Guide', pageUrl),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/guides" className="hover:text-white">Guides</Link> › 2026 Harrisburg Seller Guide
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your House Fast in Harrisburg, PA: The Complete 2026 Guide
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              An honest, numbers-driven comparison of every way to sell a house fast in Harrisburg — cash buyers,
              iBuyers, agents, and FSBO. Updated for 2026 market conditions.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Questions? Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/sell-house-fast-harrisburg-pa-2026" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TL;DR Callout */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            USA Home Buyers LLC is a cash home buyer serving Harrisburg, PA and surrounding Dauphin County. They purchase residential properties as-is — no repairs required, no agent fees, no showings. Sellers receive a written cash offer within 24 hours and can close in as few as 7–14 days. Best fit: homes needing repairs, inherited or estate properties, pre-foreclosure situations, divorce sales, and any circumstance requiring speed and certainty. Phone: (888) 440-5250.
          </p>
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            The 2026 Harrisburg PA Housing Market — What Sellers Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            Harrisburg&apos;s housing market in 2026 is moving quickly. The median home goes pending in about 5 days —
            which sounds fast. But &quot;pending&quot; isn&apos;t &quot;closed.&quot; After an offer is accepted, inspections,
            appraisals, mortgage underwriting, and title work still take 45-60 days. If financing falls through
            (15-20% of listings do), you start over.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 text-left">Harrisburg Market Data (2026)</th>
                  <th className="px-4 py-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median home value (ZHVI)', '$234,569'],
                  ['Median sale price — city limits', '~$145,000'],
                  ['Average days to pending', '5 days'],
                  ['Traditional sale timeline (offer to close)', '45-60 days'],
                  ['Cash offer range (typical home)', '$100,000–$190,000'],
                  ['PA transfer tax', '2% (split 1%/1% buyer-seller)'],
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

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">
            4 Ways to Sell a House Fast in Harrisburg — Ranked by Speed
          </h2>

          <div className="space-y-6 mb-10">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">1</span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Cash Buyer — 7-14 Days</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    A local cash buyer like USA Home Buyers purchases the property directly — no financing contingency,
                    no lender approval, no appraisal required. You get a written offer within 24 hours and can close
                    in as few as 7 days. The property sells as-is.
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
                    iBuyers use algorithms to make instant offers. Coverage in the Harrisburg PA market is limited —
                    most iBuyers focus on larger metros. When available, they typically offer 70-75% of FMV with
                    additional service fees (4-8%) on top.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-700">Pros</p>
                      <p className="text-gray-600">Faster than traditional, some certainty</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="font-semibold text-red-700">Cons</p>
                      <p className="text-gray-600">Limited Harrisburg coverage, high fees, picky on condition</p>
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
                    after you accept an offer (which may take weeks to arrive). Cost: 5-6% commission, 1%
                    transfer tax, potential repairs, staging, and carrying costs.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-700">Pros</p>
                      <p className="text-gray-600">Highest gross sale price</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="font-semibold text-red-700">Cons</p>
                      <p className="text-gray-600">Slowest, requires repairs/showings, 15-20% fall-through rate</p>
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
                    in Harrisburg&apos;s market. Less than 10% of FSBO sellers net more than they would have with an agent.
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
            Cash Buyer vs. Traditional Sale: The Real Math
          </h2>
          <p className="text-gray-700 mb-4">
            The gap between a cash offer and a traditional sale looks wider than it is. Here&apos;s the breakdown
            on a $175,000 Harrisburg home that needs $12,000 in repairs:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-brand-light rounded-xl p-5">
              <h3 className="font-bold text-brand-primary mb-3">Cash Sale</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Cash offer (75% FMV)</span><span className="font-bold">$131,250</span></div>
                <div className="flex justify-between text-gray-500"><span>Agent commission</span><span>$0</span></div>
                <div className="flex justify-between text-gray-500"><span>Transfer tax (1% seller)</span><span>$0 (we cover)</span></div>
                <div className="flex justify-between text-gray-500"><span>Closing costs</span><span>$0 (we cover)</span></div>
                <div className="flex justify-between text-gray-500"><span>Repairs</span><span>$0</span></div>
                <div className="flex justify-between text-gray-500"><span>Carrying costs (2 months)</span><span>$0</span></div>
                <div className="border-t pt-2 flex justify-between font-bold text-brand-dark"><span>Net to seller</span><span>$131,250</span></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-700 mb-3">Traditional MLS Sale</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>List price / sale price</span><span className="font-bold">$175,000</span></div>
                <div className="flex justify-between text-red-600"><span>Agent commission (5.5%)</span><span>-$9,625</span></div>
                <div className="flex justify-between text-red-600"><span>Transfer tax (1% seller)</span><span>-$1,750</span></div>
                <div className="flex justify-between text-red-600"><span>Title/closing costs</span><span>-$2,500</span></div>
                <div className="flex justify-between text-red-600"><span>Pre-listing repairs</span><span>-$12,000</span></div>
                <div className="flex justify-between text-red-600"><span>Carrying costs (75 days)</span><span>-$3,750</span></div>
                <div className="border-t pt-2 flex justify-between font-bold text-brand-dark"><span>Net to seller</span><span>$145,375</span></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-8">
            The difference in this example: $14,125 — or about $188/day. Whether that gap is worth 75 extra days
            depends entirely on your situation.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Full Comparison: Cash Buyer vs. Traditional Sale in Harrisburg
          </h2>
        </article>

        <ComparisonTable rows={COMPARISON_ROWS} />

        <div className="my-10">
          <CashOfferForm
            variant="inline"
            headline="Get Your Harrisburg Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. Close in 7-14 days."
            sourcePage="/guides/sell-house-fast-harrisburg-pa-2026"
          />
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            When Does a Cash Sale Make the Most Sense in Harrisburg?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Inherited or estate property', desc: 'Out-of-state heirs, probate situations, or homes needing significant work are ideal for cash buyers.' },
              { title: 'Foreclosure / behind on payments', desc: "PA's judicial foreclosure takes 12-18 months, but the clock is ticking. Selling before the sheriff sale protects your equity." },
              { title: 'Divorce', desc: 'Cash sales eliminate ongoing cooperation requirements — one decision, then done.' },
              { title: 'Problem tenants', desc: "Cash buyers purchase tenant-occupied properties. You don't need to wait for the lease to end." },
              { title: 'Properties needing major repairs', desc: 'Foundation issues, mold, fire damage, unfinished work — cash buyers take properties traditional buyers and lenders won\'t touch.' },
              { title: 'Relocation with a deadline', desc: 'Job starts in 3 weeks. A cash sale can close before you leave town.' },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            How to Verify a Cash Home Buyer in Harrisburg is Legitimate
          </h2>
          <p className="text-gray-700 mb-4">
            Not every company calling itself a &quot;cash buyer&quot; is equal. Here&apos;s how to verify any buyer:
          </p>
          <ol className="space-y-3 mb-6 text-gray-700 text-sm">
            <li><strong>1. Check BBB accreditation</strong> — Search the company name at bbb.org. Look for A or A+ rating and active accreditation.</li>
            <li><strong>2. Verify business registration</strong> — Check corporations.pa.gov to confirm the company is registered as an active PA LLC or corporation.</li>
            <li><strong>3. Request a written offer</strong> — Any legitimate buyer provides a formal purchase agreement with price, terms, and closing date. Verbal offers are a red flag.</li>
            <li><strong>4. Check deed records</strong> — Dauphin County deed records (dauphincounty.gov) show past purchases. A legitimate buyer has a history of closed transactions.</li>
            <li><strong>5. Ask about closing agent</strong> — Legitimate cash buyers always close through a licensed title company or real estate attorney. If they want to close without one, walk away.</li>
          </ol>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-dark mb-1">USA Home Buyers verification:</p>
            <p className="text-sm text-gray-700">BBB accredited · Registered LLC in PA · Written offers always provided · Closes through licensed title company · 200+ Harrisburg area transactions</p>
          </div>
        </article>

        <FAQSection
          items={FAQ_ITEMS}
          heading="Frequently Asked Questions — Selling Fast in Harrisburg PA"
        />

        <div className="mt-8 text-sm text-gray-500">
          <p className="mb-3">
            <strong>Sources:</strong>{' '}
            <a href="https://www.legis.state.pa.us/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PA Foreclosure Law — Title 68 (legis.state.pa.us)</a>{' '}·{' '}
            <a href="https://www.dauphincounty.gov/government/support-agencies/register-of-wills" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Dauphin County Register of Wills</a>{' '}·{' '}
            <a href="https://www.revenue.pa.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PA Inheritance Tax &amp; Transfer Tax — Revenue.PA.gov</a>{' '}·{' '}
            <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">NAR Market Statistics</a>
          </p>
          <p>
            Related:{' '}
            <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Harrisburg Market Page</Link>{' '}
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
