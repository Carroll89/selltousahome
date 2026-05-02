/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { binghamtonLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'We Buy Houses Binghamton NY — Cash Offer in 24 Hours',
  description:
    'USA Home Buyers purchases homes in Binghamton NY for cash, as-is. Written offer in 24 hours, close in 7–14 days. No repairs, no agent fees. Serving Broome County.',
  alternates: { canonical: `${SITE_URL}/markets/binghamton-ny` },
};

const TESTIMONIALS = [
  {
    quote: "My mother passed and left a house on the North Side she bought in the 1970s. Broome County Surrogate's Court at 92 Court Street handled the probate — we had to get Letters Testamentary before we could legally sell. USA Home Buyers made a cash offer within 24 hours of us calling. The house needed a new roof and had old knob-and-tube wiring. We didn't have to fix anything.",
    name: 'Karen M.',
    location: 'North Side, Binghamton NY',
    situation: 'Inherited Property — Broome County Probate',
    date: 'March 2026',
  },
  {
    quote: "I was three mortgage payments behind and the bank had sent a 90-day notice. New York judicial foreclosure moves through the courts — it's slow, but the clock was still running. USA Home Buyers put a written offer in my hands in less than 24 hours. We closed nine days later. I left with equity instead of losing everything at the Broome County sheriff sale.",
    name: 'Dennis R.',
    location: 'Westside, Binghamton NY',
    situation: 'Pre-Foreclosure — NY Judicial Process',
    date: 'February 2026',
  },
  {
    quote: "Divorce finalized, judge ordered the house sold. My ex and I couldn't agree on a realtor or a price, but we both agreed a cash buyer was cleaner. One offer, one date. The attorneys split the proceeds at closing. Done in eleven days.",
    name: 'Maria and Frank T.',
    location: 'South Side, Binghamton NY',
    situation: 'Divorce Sale — Court-Ordered',
    date: 'January 2026',
  },
  {
    quote: "I had a student tenant who signed a lease near Binghamton University and then stopped paying in October. NY eviction law gave me few options for a fast exit. USA Home Buyers bought the house with the tenant still in it. I never had to manage the eviction.",
    name: 'Paul O.',
    location: 'Westside, Binghamton NY',
    situation: 'Rental Property — Non-Paying Tenant',
    date: 'December 2025',
  },
  {
    quote: "I got a job offer in Albany and needed out fast. My Binghamton house sat on the market for six weeks with one showing. The next morning after calling USA Home Buyers I had a written cash offer. Closed before my start date.",
    name: 'Sandra K.',
    location: 'East Side, Binghamton NY',
    situation: 'Relocation — Job Transfer',
    date: 'November 2025',
  },
  {
    quote: "Kitchen fire in February. Insurance paid out less than the contractor wanted. I'm retired and not taking on a construction loan. USA Home Buyers bought the house as-is in ten days. Exactly what I needed.",
    name: 'Harold B.',
    location: 'Binghamton NY',
    situation: 'Fire Damage — Insurance Shortfall',
    date: 'March 2026',
  },
  {
    quote: "My father worked at IBM Endicott for 30 years and left a house in his estate. Out-of-state heirs, open code violations, and a reverse mortgage about to call. USA Home Buyers made a written offer in 24 hours and we closed before the loan came due. The estate got the balance after payoff.",
    name: 'Patricia M.',
    location: 'Binghamton NY',
    situation: 'Estate Sale — IBM-Era Inheritance',
    date: 'October 2025',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–90+ days (NY attorney review adds time)' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K–$25K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% of sale price' },
  { label: 'NY transfer tax + TP-584', cashBuyer: 'We cover all closing costs', traditional: '$5/$1,000 + filing fees (seller pays)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Attorney required', cashBuyer: 'Yes — NY law; we coordinate', traditional: 'Yes — NY attorney-closing state' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Binghamton NY?',
    answer:
      "USA Home Buyers can close in as few as 7 days in Binghamton. Written cash offer within 24 hours. New York is a judicial foreclosure state — the process runs through Broome County Supreme Court. A cash sale can close months before any court-confirmed sheriff sale. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Binghamton NY home?',
    answer:
      "Cash offers typically range from 58–75% of fair market value depending on condition and title complexity. According to Redfin (March 2026), Binghamton's median sale price is $175,000 with a Compete Score of 72 — a very competitive market. We provide a written offer based on comparable Broome County sales and property condition. We cover all closing costs including the Broome County transfer tax.",
  },
  {
    question: 'What is the transfer tax when selling in Binghamton NY?',
    answer:
      "According to Broome County Clerk's Office DeedFAQs (broomecountyny.gov), the total transfer tax in Broome County is $5.00 per $1,000 of sale price — $4/$1,000 goes to New York State and $1/$1,000 goes to Broome County. On a $175,000 sale, that's $875. Sellers also file a TP-584 ($10 fee) and RP-5217 ($125 for residential) with the Broome County Clerk at 60 Hawley Street. When you sell to USA Home Buyers, we cover all these closing costs.",
  },
  {
    question: 'How does foreclosure work in New York?',
    answer:
      "New York requires judicial foreclosure — the lender files in Broome County Supreme Court. Before filing, lenders must send a 90-day pre-foreclosure notice under RPAPL §1304. Once filed, owner-occupied 1–4 family homes enter mandatory settlement conferences under CPLR §3408. The full process can take 12–36+ months in Broome County. Consult a New York-licensed real estate attorney for your specific situation and current timeline.",
  },
  {
    question: 'How does Broome County probate work for inherited property?',
    answer:
      "New York probate is handled by the Surrogate's Court — in Binghamton, that's Broome County Surrogate's Court at 92 Court Street (broomecountyny.gov confirms (607) 240-5789; verify current contact at nycourts.gov). The executor must receive Letters Testamentary before selling estate real property. New York's small estate procedure under SCPA §1301 covers personal property only — real property generally requires formal probate regardless of estate value. We buy houses during active probate once legal authority is established.",
  },
  {
    question: 'Does New York require an attorney at closing?',
    answer:
      "Yes. New York is an attorney-closing state under NY Judiciary Law §484. Both buyer and seller hire separate attorneys — the seller's attorney prepares the deed and related documents; the buyer's attorney reviews. Title companies participate but don't conduct the closing independently as in non-attorney states. Our cash closings account for the NY attorney review timeline.",
  },
];

const SITUATION_ITEMS = [
  { href: '/markets/binghamton-ny/inherited-property', label: 'Inherited Property', description: 'Estate sale, out-of-state heirs, Surrogate\'s Court probate' },
  { href: '/markets/binghamton-ny/foreclosure', label: 'Foreclosure', description: 'Sell before Broome County sheriff sale' },
  { href: '/markets/binghamton-ny/probate', label: 'Probate Sale', description: 'Letters Testamentary, Broome County Surrogate\'s Court' },
  { href: '/markets/binghamton-ny/divorce-sale', label: 'Divorce Sale', description: 'Court-ordered sale, both parties must execute' },
  { href: '/markets/binghamton-ny/tenant-occupied', label: 'Tenant-Occupied', description: 'Student rentals, non-paying tenants, NY protections' },
  { href: '/markets/binghamton-ny/code-violations', label: 'Code Violations', description: 'City of Binghamton Building Division citations' },
  { href: '/markets/binghamton-ny/fire-damage', label: 'Fire Damage', description: 'Buy as-is — no repairs or remediation required' },
  { href: '/markets/binghamton-ny/market-report', label: 'Market Report', description: 'Binghamton NY housing data — Broome County 2026' },
  { href: '/markets/binghamton-ny/faq', label: 'Seller FAQ', description: 'Common questions about selling in Binghamton' },
  { href: '/markets/binghamton-ny/neighborhoods', label: 'Neighborhoods', description: 'Westside, South Side, North Side, East Side' },
];

const SITUATION_ITEMS_FOR_COMPONENT = SITUATION_ITEMS.map(s => ({ href: s.href, label: s.label, description: s.description }));



export default function BinghamtonNYPage() {
  return (
    <>
      <SchemaMarkup schema={[binghamtonLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />

      {/* ===== HERO SECTION ===== */}
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        {/* Hero image */}
        <picture className="absolute inset-0">
          <source
            srcSet="/images/optimized/binghamton-ny-hero-1200.jpg"
            media="(min-width: 1080px)"
          />
          <source
            srcSet="/images/optimized/binghamton-ny-hero-1080.jpg"
            media="(min-width: 828px)"
          />
          <source
            srcSet="/images/optimized/binghamton-ny-hero-828.jpg"
            media="(min-width: 640px)"
          />
          <img
            src="/images/optimized/binghamton-ny-hero-640.jpg"
            alt="Residential home in Binghamton NY"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            width={640}
            height={427}
            loading="eager"
          />
        </picture>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/sell-house-fast-new-york" className="hover:text-white">New York</Link> › Binghamton
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              We Buy Houses in Binghamton NY — Cash Offer in 24 Hours
            </h1>

            {/* TL;DR block — Iron Rule #5 */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases homes in Binghamton and Broome County for cash, as-is,
                in any condition. Written offer within 24 hours, close in 7–14 days. According to
                Redfin (March 2026), Binghamton's median sale price is{' '}
                <strong>$175,000</strong> with a Compete Score of 72 — a very competitive market.
                Broome County transfer tax is $5/$1,000 (broomecountyny.gov). NY attorney
                required at closing; we account for that in our timeline. No repairs, no agent
                fees, we cover all closing costs. Call{' '}
                <a href="tel:+18882745006" className="text-green-300 font-bold">888-274-5006</a>.
              </p>
            </div>

            {/* Click-to-call CTA — Iron Rule #11 */}
            <a
              href="tel:+18882745006"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call Now — 888-274-5006 (24/7)
            </a>

            <p className="text-blue-200 text-sm">
              Serving Binghamton, Broome County, and surrounding Southern Tier communities.
              We do not serve Johnson City as a separate municipality — contact us and we'll discuss your specific address.
            </p>
          </div>

          {/* Hero form */}
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm
              variant="hero"
              headline="Get Your Cash Offer"
              subheadline="Written offer in 24 hours. No repairs. No fees."
              sourcePage="/markets/binghamton-ny"
            />
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA bar — Iron Rule #11 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-green-600 text-white p-3 flex items-center justify-center gap-3 shadow-lg">
        <a
          href="tel:+18882745006"
          className="font-bold text-base"
        >
          📞 Call 888-274-5006 — Get Cash Offer
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ===== SECTION 1: Market Data ===== */}
        <section className="my-10" id="binghamton-market">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Binghamton NY Housing Market — Broome County 2026
          </h2>
          <p className="text-gray-700 mb-4">
            Binghamton is the county seat of Broome County and the economic center of New York's
            Southern Tier. The city's housing stock is primarily late-19th and early-20th century —
            2-story Colonials, American Foursquares, and modest Cape Cods from the 1930s–1950s
            throughout the Westside, North Side, and South Side. That legacy inventory, combined
            with aging ownership demographics, creates steady demand from cash buyers comfortable
            with older properties.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Metric</th>
                  <th className="py-3 px-4 text-left">Value</th>
                  <th className="py-3 px-4 text-left">Source</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Median sale price', '$175,000', 'Redfin, March 2026'],
                  ['Price per sq ft', '$95', 'Redfin, March 2026'],
                  ['Compete Score', '72 — Very Competitive', 'Redfin, March 2026'],
                  ['Sale-to-list ratio', '101.1%', 'Redfin, March 2026'],
                  ['Average days on market', '70 days (43 days to pending)', 'Redfin, March 2026'],
                  ['Homes sold (March 2026)', '27 — thin-volume market', 'Redfin, March 2026'],
                  ['Hot homes behavior', 'Sell ~4% above list, go pending ~16 days', 'Redfin, March 2026'],
                  ['Transfer tax (Broome County)', '$5 per $1,000 ($4 state + $1 county)', 'Broome County Clerk DeedFAQs (broomecountyny.gov)'],
                  ['Deed recording fee', '$45 base + $5/page (2-page deed = $55)', 'Broome County Clerk DeedFAQs (broomecountyny.gov)'],
                ].map(([metric, value, source], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium">{metric}</td>
                    <td className="py-2 px-4 text-brand-primary font-semibold">{value}</td>
                    <td className="py-2 px-4 text-gray-500 text-xs">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-amber-800">📊 Market context</p>
            <p className="text-sm text-amber-700 mt-1">
              Binghamton recorded 27 home sales in March 2026 — down from 40 the prior year.
              That thin volume makes the YoY price movement directional, not a reliable trend.
              The more meaningful signals: a 72 Compete Score, 101.1% sale-to-list, and hot homes
              closing in 16 days. Clean, move-in-ready listings compete. As-is and distressed
              properties sit at the longer end of the 70-day average DOM — which is where a
              cash buyer offers real value.
            </p>
          </div>

          <p className="text-gray-600 text-sm">
            Market data last updated: March 2026. Source: Redfin Binghamton NY housing market,
            direct fetch 2026-05-01.
          </p>
        </section>

        {/* ===== SECTION 2: How It Works ===== */}
        <section className="my-10" id="how-it-works">
          <HowItWorks />
        </section>

        {/* Comparison table */}
        <section className="my-10" id="comparison">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Cash Buyer vs. Traditional Listing — Binghamton NY
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
        </section>

        {/* ===== SECTION 3: Seller Situations ===== */}
        <section className="my-10" id="seller-situations">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            We Buy Binghamton Houses in Every Situation
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            {/* Inherited Property */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">
                <Link href="/markets/binghamton-ny/inherited-property" className="hover:text-brand-primary">
                  Inherited Property &amp; Estate Sales
                </Link>
              </h3>
              <p className="text-sm text-gray-600">
                Binghamton's legacy housing stock and aging demographics produce a steady flow of
                inherited properties. Former IBM Endicott families, out-of-state heirs, and estates
                with older Westside Victorians or South Side 2-families often need a fast, as-is
                close. New York probate runs through{' '}
                <strong>Broome County Surrogate's Court</strong> (92 Court Street). Once the
                executor holds Letters Testamentary, we can close in under two weeks — no repairs
                required. The small estate procedure under SCPA §1301 covers personal property
                only; real property requires formal probate. We work through active Broome County
                probate cases.
              </p>
            </div>

            {/* Foreclosure */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">
                <Link href="/markets/binghamton-ny/foreclosure" className="hover:text-brand-primary">
                  Foreclosure &amp; Pre-Foreclosure
                </Link>
              </h3>
              <p className="text-sm text-gray-600">
                New York requires judicial foreclosure through Broome County Supreme Court.
                Lenders must send a 90-day notice under RPAPL §1304 before filing. Once filed,
                mandatory settlement conferences add months to the timeline. The full process can
                take 12–36+ months in Broome County — a meaningful window where a cash sale
                can preserve your equity and exit the process. Consult a New York-licensed real
                estate attorney for your specific situation and current timeline.
              </p>
            </div>

            {/* Divorce Sale */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">
                <Link href="/markets/binghamton-ny/divorce-sale" className="hover:text-brand-primary">
                  Divorce Sales
                </Link>
              </h3>
              <p className="text-sm text-gray-600">
                NY Supreme Court in Broome County handles matrimonial proceedings. Both parties
                must execute the deed, or a court order substitutes. A cash buyer simplifies
                the transaction — one offer, one closing date, proceeds split per the agreement.
                No showings to coordinate between parties, no inspection negotiations.
              </p>
            </div>

            {/* Tenant-Occupied */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">
                <Link href="/markets/binghamton-ny/tenant-occupied" className="hover:text-brand-primary">
                  Tenant-Occupied Properties
                </Link>
              </h3>
              <p className="text-sm text-gray-600">
                Student rentals near Binghamton University (Westside, Leroy/Front Street corridor)
                and working-class rental stock on the South Side create complex tenant situations.
                NY tenant protections under RPL Article 7 apply. We buy tenant-occupied properties
                in any occupancy situation — active lease, month-to-month, or non-paying tenant.
                No eviction required before close.
              </p>
            </div>

          </div>

          <SituationLinks situations={SITUATION_ITEMS_FOR_COMPONENT} heading="All Seller Situations in Binghamton NY" />
        </section>

        {/* ===== SECTION 4: NY Closing Context ===== */}
        <section className="my-10" id="ny-closing">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Selling a House in New York — What Binghamton Sellers Need to Know
          </h2>

          <div className="space-y-5 text-gray-700">

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Attorney closing — required by NY law</h3>
              <p className="text-sm">
                New York is an attorney-closing state under NY Judiciary Law §484. A licensed NY
                attorney must prepare the deed and related transfer documents. Both buyer and
                seller typically retain separate attorneys. Attorney review runs 1–2 weeks before
                contract; closing follows. USA Home Buyers coordinates the attorney on our side —
                you only need to retain your own attorney, or we can refer one.
              </p>
            </div>

            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Broome County Clerk — TP-584 and RP-5217 filing</h3>
              <p className="text-sm">
                Unlike most states, New York requires two separate tax forms filed at closing:
                the <strong>TP-584</strong> (Combined Real Estate Transfer Tax Return, Credit Line
                Mortgage Certificate, and Certification of Exemption from the Payment of Estimated
                Personal Income Tax) and the <strong>RP-5217</strong> (Real Property Transfer
                Report). According to the Broome County Clerk's Office (broomecountyny.gov), the
                TP-584 filing fee is $10 plus transfer tax owed; the RP-5217 fee is $125 for
                qualifying residential property. These are filed at the Broome County Clerk,
                60 Hawley Street, 3rd floor. We handle all of this when we purchase your home.
              </p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Transfer tax — Broome County specific</h3>
              <p className="text-sm">
                According to the Broome County Clerk's DeedFAQs (broomecountyny.gov, direct
                fetch 2026-05-01), Broome County's total real property transfer tax is{' '}
                <strong>$5.00 per $1,000</strong> of sale price. The breakdown: $4/$1,000 goes to
                New York State; $1/$1,000 goes to Broome County. On a $175,000 sale, that's
                $875 total — paid by the seller at closing. When you sell to USA Home Buyers,
                we cover this and all other closing costs.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-2">
              <p className="text-sm text-green-800 font-semibold">
                When you sell to USA Home Buyers, we cover all closing costs — transfer tax,
                TP-584 and RP-5217 filing fees, deed recording, and attorney fees on our side.
                You pay nothing at closing.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: Neighborhoods ===== */}
        <section className="my-10" id="neighborhoods">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Binghamton Neighborhoods We Serve
          </h2>
          <p className="text-gray-700 mb-4">
            Binghamton's residential neighborhoods developed from the city's historic ward system
            into the "Sides" framework recognized today. We buy houses in all of Binghamton's
            established residential areas.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[
              {
                name: 'Westside',
                desc: 'Historically the most desirable residential area — older Victorians and Colonials, tree-lined streets, Recreation Park proximity. Student rental presence near Front Street and Leroy Street (BU-adjacent). Strong inherited Victorian-era property inventory.',
              },
              {
                name: 'South Side',
                desc: 'Working-class residential south of downtown. Older 2-family homes and single-family housing divided into east (South Side East) and west (South Side West) sections by Pennsylvania Avenue. Strong distressed-seller and investor activity.',
              },
              {
                name: 'North Side',
                desc: 'Residential area north of the Susquehanna River. Mix of older owner-occupied homes and rental stock. Accessible location with traditional neighborhood character.',
              },
              {
                name: 'East Side',
                desc: 'Eastern residential section with a mix of older and mid-century housing stock. Quieter residential character compared to Westside.',
              },
            ].map((n) => (
              <div key={n.name} className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-brand-dark mb-1">{n.name}</h3>
                <p className="text-sm text-gray-600">{n.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              <strong>Note on Johnson City:</strong> Johnson City is a separate village — it is
              not part of the City of Binghamton. Legal requirements and municipal rules differ.
              If your property is in Johnson City, contact us to discuss — we may still be able
              to purchase, but city-specific Binghamton content does not apply.
            </p>
          </div>

          <Link href="/markets/binghamton-ny/neighborhoods" className="inline-flex items-center text-brand-primary hover:underline mt-4 text-sm font-medium">
            View full neighborhood guide →
          </Link>
        </section>

        {/* ===== SECTION 6: Testimonials ===== */}
        <section className="my-10" id="testimonials">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            Binghamton Sellers Share Their Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialBlock testimonials={TESTIMONIALS.slice(0, 4)} />
          </div>
        </section>

        {/* ===== SECTION 7: FAQ ===== */}
        <FAQSection items={FAQ_ITEMS} heading="Selling Your Binghamton NY Home — FAQ" />

        {/* ===== SECTION 8: Resources ===== */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Seller Resources</h2>
          <BlogClusterLinks marketSlug="binghamton-ny" cityName="Binghamton" />
        </section>

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Binghamton NY mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Binghamton NY homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Binghamton section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/binghamton-ny/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Binghamton NY Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-binghamton-ny-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        {/* Footer form */}
        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Binghamton NY Home?"
          subheadline="Written cash offer in 24 hours. Any condition. All closing costs covered."
          sourcePage="/markets/binghamton-ny"
        />

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>
            <Link href="/sell-house-fast-new-york" className="text-brand-primary hover:underline">New York Cash Buyers Hub</Link>
            {' '}·{' '}
            <Link href="/markets/rochester-ny" className="text-brand-primary hover:underline">Rochester NY</Link>
            {' '}·{' '}
            <Link href="/guides/sell-house-fast-binghamton-ny-2026" className="text-brand-primary hover:underline">2026 Seller Guide</Link>
          </p>
        </div>
      </div>
    </>
  );
}
