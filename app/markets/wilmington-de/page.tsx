/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { wilmingtonLocalBusinessSchema, wilmingtonFAQSchema, wilmingtonHowToSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Wilmington DE',
  description:
    'We buy houses in Wilmington DE for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving all of New Castle County.',
  alternates: { canonical: `${SITE_URL}/markets/wilmington-de` },
  openGraph: {
    images: [{ url: '/images/wilmington-de-hero.jpg', width: 1200, height: 630, alt: 'Wilmington DE brick row homes — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    quote: "My aunt owned a row home on West 4th Street in Southbridge for decades. After she passed, I inherited a property with a leaking roof, outdated knob-and-tube wiring, and a basement that flooded every spring. I'm in New York — managing a Wilmington property remotely was unsustainable. USA Home Buyers made a written offer within 24 hours and closed in 10 days. I left everything. No regrets.",
    name: 'Marcus D.',
    location: 'Southbridge, Wilmington DE',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
  },
  {
    quote: "After losing my job at ChristianaCare, I fell three months behind on my mortgage. The lender filed a complaint in NCC Superior Court — I had no idea Delaware foreclosure moved that fast. USA Home Buyers explained the judicial timeline, made a written offer the next morning, and we closed before the case progressed. I walked away with $38,000 instead of nothing.",
    name: 'Denise W.',
    location: 'West Center City, Wilmington DE',
    situation: 'Foreclosure — Pre-Sheriff Sale',
    date: 'February 2026',
  },
  {
    quote: "Our divorce settlement required the house on Shallcross Avenue to be sold. My ex and I couldn't agree on anything. USA Home Buyers handled the whole transaction through our attorneys — one number, one closing, proceeds split cleanly the day we signed. Fastest part of the whole divorce.",
    name: 'Patricia R.',
    location: 'Trolley Square area, Wilmington DE',
    situation: 'Divorce Sale — Clean Settlement',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($8K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$10,500-$12,600 on $210K home)' },
  { label: 'Transfer tax (4% total in Wilmington)', cashBuyer: 'We cover all closing costs', traditional: 'Seller pays ~2% of sale price ($4,200)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '65-75% of ARV (no deductions)', traditional: '85-90% FMV minus repairs, commissions, tax' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Wilmington DE?',
    answer: "Once you accept a written offer, we close in 7-14 days. We send the written offer within 24 hours of your inquiry. According to Redfin, Wilmington homes spend a median of 72 days on market when listed — that path requires showings, inspections, and waiting on mortgage lender approval. A cash sale eliminates the bank wait, the inspection contingency, and the showing calendar entirely.",
  },
  {
    question: 'What is the transfer tax when selling in Wilmington DE?',
    answer: "Wilmington has one of the higher transfer tax rates on the East Coast — 4% total. The breakdown: 2.5% Delaware state tax (Delaware Code Title 30, Ch. 54) plus 1.5% City of Wilmington local tax. By custom, buyer and seller split it 50/50 — each paying 2%. On a $210,000 home, the total is $8,400. When you sell to us, we cover all closing costs including the full transfer tax. Source: Delaware Division of Revenue (financefiles.delaware.gov); New Castle County (newcastlede.gov/138).",
  },
  {
    question: 'How much will you pay for my Wilmington DE house?',
    answer: "Cash offers for Wilmington city homes typically range from 65-75% of after-repair value. According to Redfin, Wilmington's median sale price is $210,000 (February 2026, down 6.7% YoY). The Zillow ZHVI for the area is $326,763. Row homes in Southbridge and West Side often yield offers in the $130,000-$165,000 range when we cover all closing costs — nothing deducted from your number.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Wilmington's housing stock is predominantly pre-1940 brick row homes — built for DuPont-era industrial workers in the late 1800s and early 1900s. According to the U.S. Census ACS, the majority of Wilmington's housing units were built before 1970. Aging electrical, outdated plumbing, deferred maintenance, and foundation wear are standard on these Southbridge, Brandywine Village, and West Center City row homes. That's exactly what we buy.",
  },
  {
    question: 'What neighborhoods in Wilmington do you buy in?',
    answer: "All of Wilmington city and New Castle County — Southbridge, West Center City, West Side Wilmington, Brandywine Village, Quaker Hill, Little Italy, Trolley Square, and beyond. We also serve Newark, New Castle, Elsmere, Claymont, Bear, Middletown, Hockessin, Arden, Edgemoor, Glasgow, Pike Creek, and Wilmington Manor.",
  },
  {
    question: 'How does foreclosure work in Delaware?',
    answer: "Delaware is a judicial foreclosure state. The lender files a complaint in New Castle County Superior Court, homeowners have 20 days to respond, and proceedings continue through a court-ordered sheriff's sale. The statutory timeline is 170-210 days, though 6-9 months is common in practice depending on NCC court backlog. Delaware has no post-sale right of redemption — once the sheriff sells the property, there is no getting it back. Source: amerinotexchange.com; Nolo Delaware Foreclosure Laws.",
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: "We're an LLC. Every offer is a written purchase agreement — price, terms, and closing date. No verbal promises. We've purchased homes throughout Delaware and Pennsylvania. You can review our offer at your leisure and walk away with no penalty.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: "We call within hours during business hours. We'll ask about the property — condition, situation, your timeline. Within 24 hours you receive a written cash offer. The offer stands on its own — no pressure, no obligation. If you accept, we pick a closing date that works for you.",
  },
];

export default function WilmingtonMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[wilmingtonLocalBusinessSchema, wilmingtonFAQSchema, wilmingtonHowToSchema]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/wilmington-de-hero-640.jpg 640w, /images/optimized/wilmington-de-hero-828.jpg 828w, /images/optimized/wilmington-de-hero-1080.jpg 1080w, /images/optimized/wilmington-de-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/wilmington-de-hero-1200.jpg"
            alt="Wilmington DE brick row homes — sell your house fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in Wilmington, DE — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases houses throughout Wilmington DE and New Castle County for cash in any
              condition — Southbridge row homes, West Center City brick two-stories, Brandywine Village
              Victorians, Quaker Hill pre-wars. No repairs, no cleaning, no agent fees. Written cash offer
              within 24 hours, close in as few as 7 days.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-4">
              <span>✓ No repairs</span>
              <span>✓ No commissions</span>
              <span>✓ We pay all closing costs</span>
              <span>✓ Close in 7 days</span>
              <span>✓ Any condition</span>
              <span>✓ Delaware's 4% transfer tax — covered</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3">
              📞 Call Now — We Answer 24/7
            </a>
            <p className="text-blue-200 text-sm">
              Serving Wilmington · Newark · New Castle · Elsmere · Claymont · Bear · Middletown and all of New Castle County
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/wilmington-de" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Wilmington context — DuPont heritage, Brandywine Valley, I-95 corridor */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Wilmington DE: Delaware's Largest City and a Housing Market Built on Industry
          </h2>
          <p className="text-gray-700 mb-4">
            Wilmington isn't just Delaware's largest city — it's the corporate capital of America. More than
            65% of Fortune 500 companies are incorporated in Delaware, drawn by the state's business-friendly
            Court of Chancery. That corporate heritage is woven into Wilmington's built environment: the DuPont
            Company's original powder yards along the Brandywine Creek date to 1802, and the industrial
            expansion of the 19th and early 20th centuries produced the dense brick row homes that define
            Southbridge, West Center City, and Brandywine Village today.
          </p>
          <p className="text-gray-700 mb-4">
            The I-95 corridor runs directly through Wilmington, making it one of the most strategically located
            cities on the East Coast — 30 minutes from Philadelphia, 90 minutes from New York, 2 hours from
            Washington D.C. That location drives a dual dynamic: some homeowners are corporate employees who've
            been transferred and need to exit fast, while others are long-time residents whose pre-war row homes
            have outpaced their capacity to maintain them. According to{' '}
            <a href="https://www.neighborhoodscout.com/de/wilmington/real-estate" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">NeighborhoodScout</a>,
            approximately 55% of Wilmington's residents are renters — a high ratio that reflects the city's
            aging owner-occupied housing stock and the investor activity that's followed.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Median sale price', value: '$210,000', note: 'Redfin, February 2026' },
              { label: 'Median days on market', value: '72 days', note: 'Redfin, February 2026' },
              { label: 'Transfer tax (Wilmington)', value: '4% total', note: '2.5% DE state + 1.5% city' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-blue-100 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-brand-dark">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            The Wilmington Riverfront redevelopment and Trolley Square's restaurant corridor draw younger
            residents and rising prices in select pockets. But the city's overall median sale price of $210,000
            — down 6.7% year-over-year as of February 2026 — reflects a market where many sellers face genuine
            urgency, and where a cash buyer's certainty of close is more valuable than holding out for retail.
          </p>
        </section>

        {/* Market Data Table */}
        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Wilmington DE Housing Market — 2026 Data
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Median sale price — Wilmington City (Redfin, Feb 2026)', '$210,000'],
                  ['YoY change — city sale price (Redfin)', '-6.7%'],
                  ['Median home value (Zillow ZHVI, Feb 2026)', '$326,763'],
                  ['YoY change — ZHVI (Zillow)', '+3.0%'],
                  ['Price per square foot (Redfin, Feb 2026)', '$170/sqft'],
                  ['YoY change — price/sqft (Redfin)', '+6.3%'],
                  ['Median days on market (Redfin, Feb 2026)', '72 days'],
                  ['Sale-to-list ratio (Redfin, Feb 2026)', '98.7% (+0.5 pt YoY)'],
                  ['Redfin Compete Score', '61/100 — Somewhat Competitive'],
                  ['Homes sold monthly (Feb 2026)', '53 homes'],
                  ['Average offers per home', '2'],
                  ['Cash offer range (Wilmington city)', '65-75% of after-repair value (ARV)'],
                  ['Transfer tax — Wilmington DE', '4.0% total (2.5% DE state + 1.5% City of Wilmington)'],
                  ['Transfer tax — typical split', 'Buyer and seller each pay 2%'],
                  ['Example — $210,000 sale', 'Total tax: $8,400 (seller pays $4,200)'],
                  ['Agent commission (typical)', '5-6% (~$10,500-$12,600 on $210K home)'],
                  ['Owner vs. renter', '~45% owner / ~55% renter'],
                  ['Population — City of Wilmington', '~70,655 (2024 est., U.S. Census Bureau)'],
                  ['Median household income', '$58,671 (delaware-demographics.com, 2024)'],
                ].map(([metric, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark rounded-l">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary rounded-r">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400">Market data last updated: April 2026</p>
          <p className="mt-2 text-sm text-gray-600">
            Wilmington's 72-day median DOM is significantly longer than surrounding suburbs — reflecting a
            buyer pool that moves carefully on aging city stock. For sellers who need speed, the gap between
            a cash offer's 7-day close and a traditional listing's 72+ day pending period is the difference
            between resolution and months of carrying costs, showings, and uncertainty.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/markets/wilmington-de/market-report" className="text-brand-primary hover:underline">
              See the full Wilmington DE market report →
            </Link>
          </p>
        </section>

        {/* How It Works */}
        <HowItWorks heading="How Selling Your Wilmington DE House for Cash Works" />

        {/* Situations */}
        <SituationLinks
          heading="We Buy Houses in Wilmington in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/wilmington-de/inherited-property', description: 'Sell an inherited Wilmington home through the New Castle County Register of Wills process' },
            { label: 'Going Through Divorce', href: '/markets/wilmington-de/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing' },
            { label: 'Facing Foreclosure', href: '/markets/wilmington-de/foreclosure', description: 'Delaware judicial foreclosure timeline is 6-9 months — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/wilmington-de/probate', description: 'We work with the NCC Register of Wills and Delaware Court of Chancery regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/wilmington-de/tenant-occupied', description: 'We buy with tenants still in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/wilmington-de/code-violations', description: 'Open permits, failed inspections, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/wilmington-de/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Wilmington DE Homeowners Are Saying" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Wilmington DE
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $210,000 Wilmington home, a 5-6% agent commission runs $10,500-$12,600. Add Delaware's 4%
            transfer tax (seller's 2% share = $4,200), inspection repairs on a pre-1940 Southbridge row home,
            72+ days of carrying costs, and potential listing price reductions — the real gap between a cash
            offer and a traditional listing is narrower than sellers expect. And the certainty of a cash close
            is worth more than the math suggests when your situation requires resolution.
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Wilmington DE Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including Delaware's 4% transfer tax."
            sourcePage="/markets/wilmington-de"
          />
        </section>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Wilmington DE Home for Cash" />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Wilmington and New Castle County
          </h2>
          <p className="text-gray-700 mb-4">
            Our Wilmington market covers every neighborhood in the city — Southbridge, West Center City,
            West Side Wilmington, Brandywine Village, Quaker Hill, Little Italy, and even Trolley Square's
            Victorian row homes along Delaware Avenue. We know these blocks: the pre-war brick two-stories
            off Maryland Avenue, the American Foursquares in South Wilmington, the tight row homes of the
            Eastside where the stoops meet the sidewalk.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve New Castle County's surrounding communities. From Wilmington, we reach Newark
            (home of the University of Delaware, ~15 miles southwest), New Castle (the historic colonial
            town on the Delaware River, ~8 miles south), Claymont (~8 miles north near the PA border),
            and the fast-growing suburbs of Bear and Middletown in southern New Castle County. If you're
            in a rural New Castle County township with a farmhouse that's been in the family for
            generations — we handle those estate situations too.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'Southbridge', 'West Center City', 'West Side Wilmington', 'Brandywine Village',
              'Quaker Hill', 'Little Italy', 'Trolley Square', 'Downtown Wilmington',
              'Newark', 'New Castle', 'Elsmere', 'Claymont', 'Bear', 'Middletown',
              'Hockessin', 'Arden', 'Edgemoor', 'Glasgow', 'Pike Creek', 'Wilmington Manor',
            ].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        {/* Neighborhoods link */}
        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Wilmington DE Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">
            From Southbridge's dense row homes to Trolley Square's renovated Victorians — we buy in every Wilmington neighborhood and New Castle County township.
          </p>
          <Link href="/markets/wilmington-de/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">
            See neighborhood-by-neighborhood price ranges and investor data →
          </Link>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks marketSlug="wilmington-de" cityName="Wilmington" />

        {/* Guided Survey Form */}
        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for your Wilmington DE home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/wilmington-de" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Wilmington DE Home?" sourcePage="/markets/wilmington-de" />
        </section>
      </div>
    </>
  );
}
