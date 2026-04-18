/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ComparisonTable } from '@/components/ComparisonTable';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/guides/sell-house-fast-springfield-il-2026`;

export const metadata: Metadata = {
  title: 'Sell House Fast Springfield IL 2026 — Guide',
  description:
    'Complete 2026 guide to selling your house fast in Springfield IL. Honest comparison of cash buyers, agents, and iBuyers with real Springfield market data.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can you sell a house in Springfield IL?',
    answer: 'Cash buyers like USA Home Buyers close in 7-14 days. A traditional retail listing in Springfield averages 27 days on market (Redfin, March 2026) plus 30-45 days to close after accepted offer — totaling 57-72 days. The 27-day Springfield DOM is fast by national standards, but it assumes your home qualifies for conventional financing and passes inspection. Older Springfield homes (Enos Park Victorians, Harvard Park bungalows) frequently don\'t.',
  },
  {
    question: 'How much do cash buyers pay in Springfield IL?',
    answer: 'Cash offers typically run 65-75% of fair market value. On the Zillow ZHVI of $163,198, that\'s $106,000-$122,400. On the Redfin March 2026 median of $187,000, that\'s $121,550-$140,250. The actual offer depends on condition, location, and liens. The net comparison vs. a retail listing should factor in 5-6% agent commission ($9,350-$11,220 on median), closing costs, repairs, and carrying costs during the listing period.',
  },
  {
    question: 'Are iBuyers (Opendoor, Offerpad) operating in Springfield IL?',
    answer: 'Most likely not. Major iBuyers typically require metropolitan populations above 250,000 to operate profitably. Springfield at 113,330 population is below their threshold. No confirmed Opendoor or Offerpad presence in Springfield has been found in public sources as of April 2026. Your realistic options are local cash investors (S and Z Property Brothers, Simply Sold RE, USA Home Buyers) or retail listing with a local agent.',
  },
  {
    question: 'What are the closing costs when selling in Springfield IL?',
    answer: 'Key seller closing costs in Springfield: Illinois state transfer tax $0.50/$500 (35 ILCS 200/31-10); Sangamon County transfer tax $0.25/$500 (35 ILCS 200/31-55); total combined $0.75/$500 = $280.50 on $187K median. Recording fee: $64 (Sangamon County Recorder). Title insurance (seller\'s portion): varies by transaction. When selling to USA Home Buyers, we cover all closing costs — transfer taxes, recording, title. You pay nothing at closing.',
  },
  {
    question: 'What is Springfield IL\'s housing market like in 2026?',
    answer: 'Springfield is the #10 hottest market in the US as of March 2026 (Realtor.com, score 93.979). Redfin median sale price: $187,000 (+23% YoY). Zillow ZHVI: $163,198 (+8.2%). Compete score: 78/100 (Very Competitive). Median days on market: 27 days. The market is unusually hot for a downstate Illinois city — state-capital employment stability and limited new construction are key drivers.',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '57-72 days (27 DOM + 30-45 close)' },
  { label: 'Repairs required', cashBuyer: 'None', traditional: 'Average $5K-$20K in Springfield older stock' },
  { label: 'Agent commission', cashBuyer: '$0', traditional: '5-6% (~$9,350-$11,220 on median)' },
  { label: 'Transfer tax', cashBuyer: 'Covered by us', traditional: '$280.50 (0.15% on $187K median)' },
  { label: 'iBuyer availability', cashBuyer: 'N/A — we\'re local', traditional: 'Likely NOT available (pop < 250K threshold)' },
  { label: 'Net proceeds', cashBuyer: '65-75% of FMV', traditional: '85-91% after all costs (well-maintained only)' },
];

export default function SellHouseFastSpringfieldILGuide() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell House Fast Springfield IL 2026 — The Complete Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/springfield-il-hero-640.jpg 640w, /images/optimized/springfield-il-hero-828.jpg 828w, /images/optimized/springfield-il-hero-1080.jpg 1080w, /images/optimized/springfield-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/springfield-il-hero-1200.jpg"
            alt="Springfield IL — Sell House Fast 2026 Guide"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Sell House Fast Springfield IL 2026 — The Complete Guide
          </h1>
          <p className="text-lg text-blue-100 mb-4">Real market data. Honest comparison. Every Springfield seller option explained.</p>
          <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
            📞 Call 888-440-5250 — Get a Cash Offer in 24 Hours
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR — Sell House Fast Springfield IL 2026</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            Springfield IL is the #10 hottest market in the US (Realtor.com, March 2026). Redfin median sale price: $187,000 (+23% YoY). Zillow ZHVI: $163,198 (+8.2%). Median DOM: 27 days. The fastest path for an as-is sale: USA Home Buyers — written offer in 24 hours, close in 7-14 days, all closing costs covered. Illinois state + Sangamon County transfer tax: $0.75/$500 ($280.50 on median) — we cover it. For retail: list with a local agent, expect 27 days on market + 30-45 days to close. iBuyers: not operating in Springfield. Call 888-440-5250.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Springfield IL Housing Market in 2026</h2>
          <p className="text-gray-700 mb-4">
            Springfield isn't the first city that comes to mind when people think about hot real estate markets. It's a downstate Illinois city of 113,330 people, the state capital, dominated by government employment and a housing stock that skews heavily toward pre-1970 construction. But Realtor.com's March 2026 data ranked Springfield the #10 hottest market in the United States — ahead of far larger and more widely discussed metros — with a hotness score of 93.979 and active listing days on market of 31.5 days.
          </p>
          <p className="text-gray-700 mb-4">
            Redfin's March 2026 data confirms the heat: median sale price of $187,000, up 23% year over year. Price per square foot: $112, up 24.4%. Compete score: 78 out of 100 (Very Competitive). Sale-to-list ratio: 98.4%. 113 homes sold in March alone. The Zillow Home Value Index (ZHVI) sits at $163,198, up 8.2% YoY — more than double the Illinois statewide ZHVI appreciation rate of 3.8%.
          </p>
          <p className="text-gray-700 mb-4">
            What's driving this? Three things: limited new construction (Springfield's older housing stock isn't being replaced by new supply), a stable employment base (the Illinois state government employs a significant fraction of the metro workforce, providing recession resistance), and price entry points that remain affordable relative to Chicago metro and the national average. At $163K average home value vs. $282K statewide Illinois average, Springfield represents accessible entry for investors and buyers priced out of larger Illinois markets.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Springfield Selling Options in 2026</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 1: Cash Sale (Fastest — 7-14 Days)</h3>
          <p className="text-gray-700 mb-4">
            A direct cash sale to an investor like USA Home Buyers is the fastest path from decision to closed transaction in Springfield. Written offer within 24 hours of inquiry, close in 7-14 days, no repairs, no agent fees, no financing contingencies. We cover all closing costs — state and county transfer taxes, recording fees, title fees. The trade-off: cash offers run 65-75% of FMV, compared to the theoretical maximum you'd get from a retail listing. But the "theoretical maximum" from a retail listing needs to be net of 5-6% agent commission ($9,350-$11,220 on the $187K median), repairs, carrying costs during the 27-day DOM period, and the risk of a 15-20% transaction fallthrough rate when financing contingencies fail.
          </p>
          <p className="text-gray-700 mb-4">
            Cash sales are the right choice for: distressed properties that don't qualify for conventional financing (Enos Park Victorians with original wiring, Harvard Park bungalows with galvanized plumbing), sellers who need speed (government employee relocations, pre-foreclosure situations, estate settlements), sellers in life-transition situations (divorce, probate), and sellers whose properties have significant code violations or deferred maintenance.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 2: Retail Listing with a Local Agent (Maximum Price for Right Properties)</h3>
          <p className="text-gray-700 mb-4">
            Springfield's 78/100 Redfin compete score means a well-maintained, conventionally financeable property listed at the right price will move — in about 27 days at 98.4% of list price. If your Springfield home is move-in ready, has updated electrical and plumbing, and will pass an FHA or conventional appraisal inspection, retail listing is worth considering. The 5-6% agent commission is a real cost, but the higher gross sale price can justify it.
          </p>
          <p className="text-gray-700 mb-4">
            The complication: most of Springfield's desirable-but-older housing stock doesn't meet conventional lender standards without work. Knob-and-tube wiring, galvanized plumbing, lead paint hazards, and deteriorated roofing are conditions that FHA appraisers flag. Fixing these issues before listing costs money and time — and often the post-fix value increase doesn't fully recover the repair investment.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 3: iBuyers — Probably Not Available in Springfield</h3>
          <p className="text-gray-700 mb-4">
            Major iBuyer platforms — Opendoor, Offerpad, Knock — have historically focused on metropolitan areas with populations above 250,000. Springfield at 113,330 is below this threshold. No confirmed iBuyer presence in Springfield has been found as of April 2026. If you've seen iBuyer advertising for Springfield, verify before pursuing — algorithmic offers for markets outside the platform's operational footprint may produce inaccurate valuations or require significant conditions.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Option 4: Local Cash Investors</h3>
          <p className="text-gray-700 mb-4">
            Springfield's primary local cash investors are S and Z Property Brothers (sandzpropertybrothers.com, rated #1 Springfield cash buyer by listwithclever.com) and Simply Sold RE (simplysoldre.com, rated runner-up by both listwithclever.com and realestatewitch.com with a 4.6/5 average review). Both are active with Google Business Profile presence and published review history. USA Home Buyers is our entry into the Springfield market — we're newer to Illinois but operate with the same written-offer-in-24-hours, close-in-7-days model.
          </p>
          <p className="text-gray-700 mb-4">
            Getting multiple cash offers is a reasonable strategy if time allows — the offers may vary, and the spread between competing cash buyers can be meaningful on a $163K-$187K home. Call 888-440-5250 to get our written offer.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing — Springfield IL Numbers</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            The net proceeds comparison is the right way to think about this decision, not the gross sale price. A retail listing at $187,000 less 5.5% commission ($10,285), less repair requests ($5,000-$15,000 typical for older Springfield stock), less 90 days of carrying costs (mortgage, taxes, utilities), nets considerably less than the gross price suggests. A cash offer at 70% of $163,198 ZHVI = $114,239 — no repairs, no commission, no carrying costs, closed in 14 days. The gap often narrows to single digits when measured against net retail proceeds on as-is properties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Closing Costs and Transfer Tax — What Sellers Pay</h2>
          <p className="text-gray-700 mb-4">
            Illinois is one of the more seller-friendly states for closing costs — the state transfer tax rate ($0.50/$500) is lower than New York ($4.00/$1,000), Pennsylvania ($1/$1,000 + local), or New Jersey. Sangamon County adds $0.25/$500. Combined Springfield seller transfer tax: $0.75/$500 ($1.50/$1,000 = 0.15%). No Springfield municipal add-on — confirmed from the City of Springfield's official tax rate document.
          </p>
          <p className="text-gray-700 mb-4">
            Illinois property taxes are paid in arrears — at closing, the seller typically provides a prorated credit to the buyer for the current year's property taxes accrued but not yet due. Sangamon County property tax rates are among the higher effective rates in Illinois. This is a meaningful closing cost item; work with your title company to calculate the exact proration based on your property's most recent tax bill.
          </p>
          <p className="text-gray-700 mb-4">
            Illinois is not an attorney state. Title companies handle closings in Springfield without attorney involvement required. This keeps closing fees lower and timelines faster than in attorney-state markets like New York. See our <Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline">Illinois legal guide</Link> for full statewide closing cost breakdown.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Situation-Specific Guides — Springfield IL</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/markets/springfield-il/inherited-property', label: 'Inherited Property', desc: 'Selling through Sangamon County Probate Division' },
              { href: '/markets/springfield-il/foreclosure', label: 'Facing Foreclosure', desc: '735 ILCS 5/15-1101 — sell before the auction' },
              { href: '/markets/springfield-il/divorce-sale', label: 'Divorce Sale', desc: 'Equitable distribution under 750 ILCS 5/503' },
              { href: '/markets/springfield-il/probate', label: 'Probate Sale', desc: 'Independent vs. supervised administration' },
              { href: '/markets/springfield-il/tenant-occupied', label: 'Tenant-Occupied', desc: 'Sell with tenants in place — no eviction required' },
              { href: '/markets/springfield-il/code-violations', label: 'Code Violations', desc: 'City of Springfield violations — we buy as-is' },
              { href: '/markets/springfield-il/fire-damage', label: 'Fire Damage', desc: 'Total or partial loss — sell as-is for cash' },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="bg-brand-light rounded-xl p-4 hover:bg-blue-100 transition-colors">
                <p className="font-bold text-brand-dark">{label}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Springfield IL Home Selling FAQ — 2026" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Key Resources for Springfield IL Sellers</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Sangamon County Circuit Court (Probate, Foreclosure, Family Law):</strong> 200 S 9th Street, Springfield IL 62701 — (217) 753-6674</li>
            <li><strong>Sangamon County Recorder (Frank J. Lesko):</strong> (217) 535-3150 — sangamonil.gov/departments/m-r/recorder</li>
            <li><strong>Illinois Attorney General Homeowner Protection Program:</strong> 1-866-544-7684 — illinoisattorneygeneral.gov</li>
            <li><strong>Illinois Legal Aid Online (foreclosure, eviction, probate):</strong> illinoislegalaid.org</li>
            <li><strong>IL IDOR Transfer Tax Information:</strong> tax.illinois.gov/research/taxinformation/property/rett.html</li>
            <li><Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline"><strong>USA Home Buyers Illinois Legal Guide →</strong></Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Springfield IL Home?" sourcePage="/guides/sell-house-fast-springfield-il-2026" />
      </div>
    </>
  );
}
