import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { VideoEmbed } from '@/components/VideoEmbed';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ComparisonTable } from '@/components/ComparisonTable';
import { articleSchema, faqSchema, kingOfPrussiaLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'King of Prussia PA Home Selling Guide 2026',
  description:
    'Complete 2026 guide to selling your house fast in King of Prussia PA. Honest comparison of cash buyers, agents, and iBuyers with real Montgomery County numbers.',
  alternates: { canonical: `${SITE_URL}/guides/sell-house-fast-king-of-prussia-pa-2026` },
  openGraph: {
    images: [{ url: '/images/king-of-prussia-hero.jpg', width: 1200, height: 630, alt: 'Sell Your House Fast in King of Prussia PA' }],
  },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can you sell a house in King of Prussia PA?',
    answer:
      "Cash buyers like USA Home Buyers can close in 7–14 days. On the MLS, King of Prussia homes average 34 days to pending, then another 45–60 days to close — over three months total.",
  },
  {
    question: 'How much do cash buyers pay for King of Prussia PA homes?',
    answer:
      "Typically 70–75% of after-repair value. On a $500,000 KOP home, that's a cash offer range of $350,000–$400,000. The seller pays zero agent commissions (saving $27,500–$33,000), zero closing costs, and makes no repairs.",
  },
  {
    question: 'Are cash home buyers in King of Prussia PA legitimate?',
    answer:
      'Verify via BBB, PA Department of State (corporations.pa.gov), and Montgomery County deed records (propertyrecords.montcopa.org). Any legitimate buyer provides a written purchase agreement and closes through a licensed title company.',
  },
  {
    question: "What's the fastest way to sell a house in King of Prussia PA?",
    answer:
      'Selling to a local cash buyer like USA Home Buyers. Written offer within 24 hours, close in 7–14 days — no repairs, no agent fees, no showings. Call 888-440-5250.',
  },
  {
    question: 'Do cash buyers purchase King of Prussia homes that need repairs?',
    answer:
      "Yes. KOP has significant 1950s–1970s housing stock — split-levels and colonials that often need $40,000–$100,000 in updates. Cash buyers specifically acquire these as-is properties that traditional buyers and lenders won't finance.",
  },
  {
    question: 'What is the transfer tax rate when selling a house in King of Prussia PA?',
    answer:
      "The total realty transfer tax is 2% — 1% Pennsylvania state plus 1% Upper Merion Township local rate. Upper Merion Township follows the standard PA rate (no deviation). Customarily split: buyer pays 1%, seller pays 1%. On a $500,000 sale, the seller's share is $5,000.",
  },
  {
    question: 'Does USA Home Buyers operate in King of Prussia and Montgomery County?',
    answer:
      'Yes. USA Home Buyers LLC serves King of Prussia, all of Montgomery County, and surrounding communities including Norristown, Conshohocken, Plymouth Meeting, Wayne, Collegeville, and Bryn Mawr. Verify our registration at corporations.pa.gov.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days after pending' },
  { label: 'Repairs required', cashBuyer: 'None — buy as-is', traditional: 'Typically $15K–$40K+ avg in KOP' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$27K–$33K on $550K home)' },
  { label: 'Closing costs', cashBuyer: 'We pay everything', traditional: '~1–3% + 1% PA transfer tax (seller share)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed written contract', traditional: '15–20% fall-through rate' },
  { label: 'Net proceeds', cashBuyer: '70–75% of FMV', traditional: '85–90% of FMV after all costs' },
];

const pageUrl = `${SITE_URL}/guides/sell-house-fast-king-of-prussia-pa-2026`;

export default function SellHouseFastKopGuide() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling Your House Fast in King of Prussia, PA: The Complete 2026 Guide', pageUrl),
          faqSchema(FAQ_ITEMS),
          kingOfPrussiaLocalBusinessSchema,
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/king-of-prussia-hero.jpg"
          alt="King of Prussia PA home — sell your house fast for cash in Montgomery County"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/guides" className="hover:text-white">Guides</Link> › 2026 King of Prussia Seller Guide
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your House Fast in King of Prussia, PA: The Complete 2026 Guide
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              An honest, numbers-driven comparison of every way to sell a house fast in King of Prussia
              and Montgomery County — cash buyers, iBuyers, agents, and FSBO. Updated for 2026 market conditions.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm"
            >
              Questions? Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/sell-house-fast-king-of-prussia-pa-2026" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/kop/kop-guide.mp4"
        title="How to Sell Your House Fast in King of Prussia (2026 Guide)"
        poster="/images/video-posters/kop-guide.jpg"
        subtitle="Cash offers, agents, iBuyers — honest comparison"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you&apos;re trying to sell your house fast in King of Prussia in 2026, you&apos;ve got a few real options — and I want to give you an honest comparison so you can decide what&apos;s right for your situation. I&apos;m with USA Home Buyers.</p>
            <p className="mb-3">Option one: traditional listing with an agent. In King of Prussia, the median home takes about 34 days to go pending, then another 45 to 60 days to close after that. You&apos;re looking at three to four months from listing to cash in hand. In a market with a Compete Score of 82 out of 100, well-priced homes in great condition do well. The trade-off is time, uncertainty, and the cost of repairs, staging, and agent commissions.</p>
            <p className="mb-3">Option two: iBuyers. Companies like Opendoor make instant offers on homes that fit their criteria — typically updated, well-maintained properties in certain price ranges. If your home qualifies, it can be convenient. But service fees often run 5 to 8 percent, and not all King of Prussia properties qualify.</p>
            <p className="mb-3">Option three: a local cash buyer like USA Home Buyers. We buy in any condition — no repairs, no staging, no showings. Written cash offer within 24 hours. Close in 7 to 14 days. We cover all closing costs. The trade-off is that we pay below full retail — typically 70 to 80 percent of market value. But with King of Prussia median values at $453,000 to $549,000, that&apos;s still a significant number.</p>
            <p className="mb-3">Which option is right for you depends on your timeline, your property&apos;s condition, and how much certainty matters. If you have time and a move-in-ready home, the MLS may serve you well. If you need speed, certainty, or if your property has complications, a cash sale is the move.</p>
            <p className="mb-3">Want to know what we&apos;d offer for your specific King of Prussia property? Call 888-440-5250 or fill out the form. You&apos;ll have a written offer in 24 hours.</p>
        </div>
      </details>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — MUST BE 60-90 words */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            USA Home Buyers LLC buys houses for cash in King of Prussia PA and Montgomery County. We purchase
            residential properties as-is — no repairs, no agent fees, no showings. Sellers get a written cash
            offer within 24 hours and can close in 7–14 days. Best fit for KOP homeowners facing estate sales,
            corporate relocations, or homes needing significant updates to compete at retail prices.
            Call {PHONE}.
          </p>
        </div>
        {/* Word count check: ~75 words ✓ */}

        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            The 2026 King of Prussia PA Housing Market — What Sellers Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            King of Prussia&apos;s housing market in 2026 is competitive — a Redfin Compete Score of 82 out
            of 100, with many homes receiving multiple offers. But &quot;competitive&quot; doesn&apos;t mean fast.
            The median King of Prussia home takes 34 days to go pending, then another 45–60 days to close.
            That&apos;s nearly three months from listing to receiving cash.
          </p>
          <p className="text-gray-700 mb-4">
            KOP is an affluent suburban Philadelphia market — median household income $117,912, median home
            values $453,560–$549,350. Sellers here typically have equity. The question is how much of that
            equity gets consumed by agent fees ($27,000–$33,000 on a $550K sale), transfer tax ($5,500),
            pre-listing repairs (potentially $40,000–$100,000 on 1960s–1970s housing stock), and three
            months of carrying costs.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 text-left">King of Prussia Market Data (2026)</th>
                  <th className="px-4 py-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Zillow ZHVI (median home value)', '$453,560'],
                  ['Redfin median sale price (Feb 2026)', '$549,350'],
                  ['Year-over-year price change (ZHVI)', '+5.9%'],
                  ['Year-over-year sale price change', '+3.7%'],
                  ['Median days to pending (Feb 2026)', '34 days'],
                  ['Total market time (list to close)', '79+ days'],
                  ['Sale-to-list price ratio', '97.6%'],
                  ['Redfin Compete Score', '82/100 — Very Competitive'],
                  ['Cash offer range (on $500K home)', '$350,000–$400,000 (70–80% FMV)'],
                  ['Transfer tax — Upper Merion Township', '2% total (standard PA rate)'],
                  ['Typical realtor commission', '5–6%'],
                  ['Median household income', '$117,912'],
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
            4 Ways to Sell a House Fast in King of Prussia — Ranked by Speed
          </h2>

          <div className="space-y-6 mb-10">
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">1</span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Cash Buyer — 7–14 Days</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    A local cash buyer like USA Home Buyers purchases the property directly — no financing
                    contingency, no lender approval, no appraisal. Written offer within 24 hours, close in
                    7–14 days. Property sells as-is, making this valuable in KOP where 1950s–1970s housing
                    stock often needs significant capital before it can compete on the open market.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-700">Pros</p>
                      <p className="text-gray-600">Speed, certainty, no repairs, no agent fees</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="font-semibold text-red-700">Cons</p>
                      <p className="text-gray-600">70–75% of FMV (below retail gross price)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">2</span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">iBuyer (Opendoor, etc.) — 2–4 Weeks</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    iBuyer coverage in King of Prussia and the suburban Philadelphia market is limited — most
                    focus on higher-volume metros. When available, they offer 70–75% of FMV with additional
                    service fees of 4–8%, and they&apos;re selective on condition. Older KOP housing stock often
                    doesn&apos;t qualify for iBuyer programs.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-700">Pros</p>
                      <p className="text-gray-600">Faster than traditional; some certainty</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="font-semibold text-red-700">Cons</p>
                      <p className="text-gray-600">Limited coverage, high fees, picky on condition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">3</span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Real Estate Agent (MLS) — 80–95 Days</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    A traditional MLS listing gets you the highest gross sale price — but the math is tighter
                    than it looks. After 5–6% commission ($27,500–$33,000 on a $550K sale), 1% transfer tax
                    ($5,500 seller share), pre-listing repairs, staging, and 80+ days of carrying costs, the
                    net gap vs. a cash sale narrows significantly.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-700">Pros</p>
                      <p className="text-gray-600">Highest gross sale price</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="font-semibold text-red-700">Cons</p>
                      <p className="text-gray-600">Slowest, repairs likely required, 15–20% fall-through rate</p>
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
                    Selling without an agent saves the commission but requires marketing, legal knowledge,
                    and negotiation skill. In KOP&apos;s competitive market, under-marketed FSBO properties
                    often sit while agent-listed homes move. FSBO sellers statistically net less than
                    listed homes in most markets. Less than 10% outperform what they would have received
                    with an agent.
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
            Cash Buyer vs. Traditional Sale: The Real Math in King of Prussia
          </h2>
          <p className="text-gray-700 mb-4">
            The gap between a cash offer and a traditional sale looks wide — but it narrows fast. Here&apos;s
            the breakdown on a $500,000 King of Prussia home that needs $45,000 in updates:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-brand-light rounded-xl p-5">
              <h3 className="font-bold text-brand-primary mb-3">Cash Sale (USA Home Buyers)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Cash offer (73% FMV)</span><span className="font-bold">$365,000</span></div>
                <div className="flex justify-between text-gray-500"><span>Agent commission</span><span>$0</span></div>
                <div className="flex justify-between text-gray-500"><span>Transfer tax (seller share)</span><span>$0 (we cover)</span></div>
                <div className="flex justify-between text-gray-500"><span>Closing costs</span><span>$0 (we cover)</span></div>
                <div className="flex justify-between text-gray-500"><span>Pre-listing repairs</span><span>$0</span></div>
                <div className="flex justify-between text-gray-500"><span>Carrying costs</span><span>$0</span></div>
                <div className="border-t pt-2 flex justify-between font-bold text-brand-dark"><span>Net to seller</span><span>$365,000</span></div>
                <div className="text-xs text-gray-500 pt-1">Timeline: 7–14 days</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-700 mb-3">Traditional MLS Sale</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>List price / sale price</span><span className="font-bold">$500,000</span></div>
                <div className="flex justify-between text-red-600"><span>Agent commission (5.5%)</span><span>−$27,500</span></div>
                <div className="flex justify-between text-red-600"><span>Transfer tax (seller 1%)</span><span>−$5,000</span></div>
                <div className="flex justify-between text-red-600"><span>Title / closing costs</span><span>−$6,000</span></div>
                <div className="flex justify-between text-red-600"><span>Pre-listing updates</span><span>−$45,000</span></div>
                <div className="flex justify-between text-red-600"><span>Carrying costs (90 days)</span><span>−$9,000</span></div>
                <div className="border-t pt-2 flex justify-between font-bold text-brand-dark"><span>Net to seller</span><span>$407,500</span></div>
                <div className="text-xs text-gray-500 pt-1">Timeline: 79–95 days (+ 15–20% fall-through risk)</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-8">
            The difference in this example: $42,500 — or about $472 per day of waiting and renovation management.
            For a seller who has the time, budget, and appetite to manage a full renovation and listing process,
            the MLS route nets more. For a seller who doesn&apos;t, the cash route is often the right call.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Full Comparison: Cash Buyer vs. Traditional Sale
          </h2>
        </article>

        <ComparisonTable rows={COMPARISON_ROWS} />

        <div className="my-10">
          <CashOfferForm
            variant="inline"
            headline="Get Your King of Prussia Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. Close in 7–14 days."
            sourcePage="/guides/sell-house-fast-king-of-prussia-pa-2026"
          />
        </div>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            When Does a Cash Sale Make the Most Sense in King of Prussia?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: 'Inherited or estate property',
                desc: "KOP's established neighborhoods — Henderson Road, Walker Road, Gulph Road — have significant boomer-era split-levels and colonials. Out-of-state heirs or executors managing estate properties are ideal candidates for a cash sale.",
              },
              {
                title: 'Corporate relocation',
                desc: "KOP is a major employment hub — pharma, tech, finance firms cluster along Route 202 and around the Town Center. Professionals accepting new positions in other markets often can't wait 90 days for a traditional sale.",
              },
              {
                title: 'Homes needing $40K+ in updates',
                desc: "A 1962 split-level that needs a new roof, kitchen, HVAC, and bathrooms may require $60,000–$90,000 before it competes at top retail prices. The renovation isn't always worth the management effort or the carrying costs.",
              },
              {
                title: 'Divorce or estate division',
                desc: "Cash sales eliminate ongoing joint decisions. One transaction, one closing. Proceeds split according to the agreement. Both parties move on without continued entanglement.",
              },
              {
                title: 'Foreclosure / behind on payments',
                desc: "Given KOP home values ($453K–$549K), there's real equity worth protecting. Selling before the Montgomery County sheriff sale preserves that equity — a foreclosure forfeits it.",
              },
              {
                title: 'Tenant-occupied or problem property',
                desc: "KOP crossed 50% renter-occupied in 2022. Landlords with difficult tenant situations or properties they no longer want to manage find cash sales the cleanest exit.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            How to Verify a Cash Home Buyer in King of Prussia Is Legitimate
          </h2>
          <ol className="space-y-3 mb-6 text-gray-700 text-sm">
            <li><strong>1. Check BBB</strong> — Search the company at bbb.org. Look for active accreditation and an A or A+ rating.</li>
            <li><strong>2. Verify PA registration</strong> — Confirm the company is an active PA LLC at corporations.pa.gov.</li>
            <li><strong>3. Request a written offer</strong> — Any legitimate buyer gives you a formal purchase agreement with price, terms, and closing date. Verbal offers only is a red flag.</li>
            <li><strong>4. Check deed records</strong> — Montgomery County property records are searchable at propertyrecords.montcopa.org. A legitimate buyer has a history of closed transactions.</li>
            <li><strong>5. Confirm title company</strong> — Every legitimate cash sale closes through a licensed PA title company or real estate attorney. If anyone suggests skipping the title company, walk away.</li>
          </ol>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="font-semibold text-brand-dark mb-1">USA Home Buyers verification:</p>
            <p className="text-sm text-gray-700">
              Registered LLC in PA · Written offers always provided · Closes through licensed title company ·
              Active buyer in King of Prussia and Montgomery County ·{' '}
              <a href="https://www.corporations.pa.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                Verify at corporations.pa.gov
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Montgomery County Probate &amp; Estate Sales — Key Facts
          </h2>
          <p className="text-gray-700 mb-4">
            Estate and inherited property sales are among the most common reasons KOP homeowners sell to
            cash buyers. If you&apos;re selling an inherited or probate property, here&apos;s what matters:
          </p>
          <ul className="space-y-2 mb-6 text-gray-700 text-sm list-disc pl-5">
            <li>
              <strong>Montgomery County Register of Wills</strong> — One Montgomery Plaza (4th Floor),
              425 Swede Street, Norristown PA 19401. Phone: 610-278-3400. Website:{' '}
              <a href="https://www.montgomerycountypa.gov/202/Register-of-Wills" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                montgomerycountypa.gov/202/Register-of-Wills
              </a>. E-Filing available.
            </li>
            <li>
              <strong>PA inheritance tax rates:</strong> 0% for surviving spouses; 4.5% for lineal heirs
              (children/grandchildren); 12% for siblings; 15% for others. Paid by the estate from proceeds
              before distribution.
            </li>
            <li>
              <strong>Executor authority:</strong> Once Letters Testamentary are issued, the executor can
              sell the property — before the entire estate settles. Cash buyers can close as soon as
              letters are in hand.
            </li>
            <li>
              <strong>Property records:</strong> Montgomery County property records searchable at{' '}
              <a href="https://propertyrecords.montcopa.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                propertyrecords.montcopa.org
              </a>.
            </li>
          </ul>
        </article>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Fast in King of Prussia PA" />

        <div className="mt-8 text-sm text-gray-500">
          <p className="mb-3">
            <strong>Sources:</strong>{' '}
            <a href="https://www.montgomerycountypa.gov/202/Register-of-Wills" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              Montgomery County Register of Wills
            </a>{' '}·{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              PA Realty Transfer Tax — Revenue.PA.gov
            </a>{' '}·{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/inheritance-tax" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              PA Inheritance Tax — Revenue.PA.gov
            </a>{' '}·{' '}
            <a href="https://data.census.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              U.S. Census — King of Prussia ACS Data
            </a>{' '}·{' '}
            <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              NAR Market Statistics
            </a>{' '}·{' '}
            <a href="https://www.corporations.pa.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              PA Business Entity Registration — corporations.pa.gov
            </a>
          </p>
          <p>
            Related:{' '}
            <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">
              King of Prussia Market Page
            </Link>{' '}
            ·{' '}
            <Link href="/markets/king-of-prussia-pa/market-report" className="text-brand-primary hover:underline">
              KOP Market Report
            </Link>{' '}
            ·{' '}
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              Cash Offer vs. MLS Listing
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
