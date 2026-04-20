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
import { yorkLocalBusinessSchema, yorkFAQSchema, yorkHowToSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast York PA',
  description:
    'We buy houses in York PA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. York County. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/york-pa` },
  openGraph: {
    images: [{ url: '/images/york-pa-hero.jpg', width: 1200, height: 630, alt: 'York PA historic row homes — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    quote: "My grandfather built that row home on East Market Street in 1952. After he passed, I inherited a property with a bad roof, outdated wiring, and a tenant who hadn't paid in months. I'm in New Jersey — managing a York property remotely was killing me. USA Home Buyers made a written offer in under 24 hours and closed in 9 days. I left the furniture. No regrets.",
    name: 'Marcus T.',
    location: 'Northeast York, PA',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
  },
  {
    quote: "Received an Act 91 notice in January. I had no idea I had maybe six months before a sheriff sale. USA Home Buyers explained everything — the timeline, the options — and had a written offer the next morning. We closed before any court filings. I walked away with $41,000 instead of nothing.",
    name: 'Denise H.',
    location: 'Southwest York, PA',
    situation: 'Foreclosure — Pre-Sheriff Sale',
    date: 'February 2026',
  },
  {
    quote: "Divorce settlement required the house on King Street to be sold. My ex and I couldn't even be in the same room. USA Home Buyers handled everything through our attorneys. One number, one closing, proceeds split the day we signed. Cleanest part of the whole process.",
    name: 'Carlos R.',
    location: 'Downtown York, PA',
    situation: 'Divorce Sale — Clean Split',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($8K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$8,300-$9,900 on $165K home)' },
  { label: 'Transfer tax (2%)', cashBuyer: 'We cover all closing costs', traditional: 'Seller pays ~1% local portion ($1,650)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '65-75% of ARV (no deductions)', traditional: '85-90% FMV minus repairs, commissions' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in York PA?',
    answer: "Once you accept a written offer, we close in 7-14 days. We send the written offer within 24 hours of your inquiry. According to Redfin, York City homes go pending in about 31 days on the open market — that path requires showings, inspections, and waiting on mortgage lender approval. With a cash sale, there's no bank involved, no contingency period, no repair demands.",
  },
  {
    question: 'What is the transfer tax when selling in York PA?',
    answer: "York PA has a 2% total real estate transfer tax — 1% Commonwealth of Pennsylvania plus 1% local (0.5% City of York + 0.5% York City School District, per Article 355 of York City Codified Ordinances). By convention, buyer and seller each pay 1%. On a $165,000 home, the total is $3,300 — seller's share is $1,650. When you sell to us, we cover all closing costs including the full transfer tax. Source: PA Dept. of Revenue (pa.gov); City of York (yorkcity.org).",
  },
  {
    question: 'How much will you pay for my York PA house?',
    answer: "Cash offers for York City homes typically range from 65-75% of after-repair value. According to Redfin, York City's median sale price is $165,850 (February 2026, +10.6% YoY). Northeast York properties under the $120,000 range can still get fair offers — we cover all closing costs, so nothing comes out of your number.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. York City's housing stock is predominantly pre-1940 brick row homes — built for factory workers in the late 1800s and early 1900s. According to the U.S. Census Bureau ACS, York's median housing age skews heavily pre-1960, with widespread deferred maintenance, aging systems, and structural wear. That's exactly what we buy every week.",
  },
  {
    question: 'What neighborhoods in York do you buy in?',
    answer: "All of York City and York County — Downtown, Northeast York, Southwest York, Springdale, East Side, and surrounding areas. We also serve Hanover, Red Lion, Dallastown, Spring Grove, Dover, Shrewsbury, New Freedom, Glen Rock, Dillsburg, Manchester, Windsor, Seven Valleys, Jacobus, West York, North York, Wrightsville, and Mount Wolf.",
  },
  {
    question: '¿Compran casas en York PA? / Do you work with Spanish-speaking sellers?',
    answer: "Sí, hablamos español. According to the U.S. Census Bureau ACS, 36.6% of York City residents are Hispanic or Latino — the second-highest of any market we serve. We serve the York community in both English and Spanish. Call us, fill out the form, or stop by. Entendemos el vecindario y el proceso.",
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: "We're a Pennsylvania LLC. Every offer is in writing — a formal purchase agreement with price, terms, and closing date. No verbal promises. You can verify our Pennsylvania business registration at corporations.pa.gov. We've closed sales throughout York County.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: "We call you within hours during business hours. We'll ask about the property — condition, situation, your timeline. Within 24 hours you receive a written cash offer. The offer stands on its own — no pressure, no obligation. If you accept, we pick a closing date that works for you.",
  },
];

export default function YorkMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[yorkLocalBusinessSchema, yorkFAQSchema, yorkHowToSchema]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/york-pa-hero-640.jpg 640w, /images/optimized/york-pa-hero-828.jpg 828w, /images/optimized/york-pa-hero-1080.jpg 1080w, /images/optimized/york-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/york-pa-hero-1200.jpg"
            alt="York PA historic red brick row homes — sell your house fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in York, PA — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases houses throughout York PA and York County for cash in any
              condition — Northeast York row homes, Downtown historic properties, Southwest York worker cottages.
              No repairs, no cleaning, no agent fees. Written cash offer within 24 hours, close in as few as 7 days.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-4">
              <span>✓ No repairs</span>
              <span>✓ No commissions</span>
              <span>✓ We pay all closing costs</span>
              <span>✓ Close in 7 days</span>
              <span>✓ Any condition</span>
              <span>✓ Hablamos español</span>
            </div>
            <a href={`tel:${PHONE}`} className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
            <p className="text-blue-200 text-sm">
              Serving York City · Hanover · Red Lion · Dallastown · Spring Grove · Dover and all of York County
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/york-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* York-specific context — First US Capital + Industrial Heritage */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            York PA: America's First Capital, Industrial Heritage, and a Housing Market That Moves Fast
          </h2>
          <p className="text-gray-700 mb-4">
            York isn't just another Pennsylvania city. From September 1777 to June 1778, York served as the
            temporary capital of the Continental Congress — where the Articles of Confederation were drafted
            and adopted. That history is written into the city's bones: Federal and Colonial row homes dating
            to the 1700s line the downtown streets, some of the oldest residential structures in the Mid-Atlantic.
          </p>
          <p className="text-gray-700 mb-4">
            York also carries an industrial legacy — York Barbell, York International, and the manufacturing
            belt that powered South Central Pennsylvania through the 20th century. The worker housing from
            that era dominates the Northeast York and Southwest York neighborhoods: attached red brick row homes
            built between 1890 and 1930, tight lots, concrete stoops, and decades of deferred maintenance.
            According to the{' '}
            <a href="https://datausa.io/profile/geo/york-pa" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">U.S. Census Bureau ACS via DataUSA</a>,
            York City's homeownership rate is just 43.7% — meaning over half the city rents, and
            many owner-occupied properties are held by aging or distressed sellers who need a fast, certain exit.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Redfin Compete Score', value: '86/100', note: 'Very Competitive — York City (Feb 2026)' },
              { label: 'Hispanic residents', value: '36.6%', note: 'Second-highest of any market we serve — ACS 2024' },
              { label: 'City median sale price', value: '$165,850', note: 'Redfin, +10.6% YoY (Feb 2026)' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-blue-100 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-brand-dark">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            Unlike Lancaster or Bethlehem, York has no major iBuyer presence. According to our competitor research,
            Opendoor and Offerpad do not actively make offers in York PA due to city size. Sellers in York
            who want speed have fewer credible options — which is exactly where we step in.
          </p>
        </section>

        {/* Market Data Table */}
        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            York PA Housing Market — 2026 Data
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['City median home value (Zillow ZHVI, Feb 2026)', '$246,248'],
                  ['YoY change — city area (Zillow)', '+6.6%'],
                  ['York County median home value (Zillow, Feb 2026)', '$303,399'],
                  ['York County YoY change (Zillow)', '+5.1%'],
                  ['Median sale price — York City (Redfin, Feb 2026)', '$165,850'],
                  ['YoY change — city sale price (Redfin)', '+10.6%'],
                  ['ACS median property value (city residents, 2024)', '$119,700'],
                  ['Price per sq ft — York City (Redfin)', '$99/sqft'],
                  ['Price per sq ft — York County (Redfin)', '$158/sqft'],
                  ['Median days on market — avg (Redfin Feb 2026)', '31 days (hot homes: ~5 days)'],
                  ['Sale-to-list ratio (Redfin Feb 2026)', '96.9% — seller\'s market'],
                  ['Redfin Compete Score', '86/100 — Very Competitive'],
                  ['Homes sold Feb 2026', '49 (+19.5% YoY)'],
                  ['Cash offer range (typical York City)', '65-75% of ARV (after repair value)'],
                  ['Transfer tax', '2% total (1% PA state + 0.5% City of York + 0.5% York City School District)'],
                  ['Transfer tax — typical split', 'Buyer and seller each pay 1%'],
                  ['Typical realtor commission', '5–6% (~$8,300-$9,900 on $165K home)'],
                  ['Hispanic population — city', '36.6% — ACS 2024'],
                  ['Homeownership rate — city', '43.7% (DataUSA, ACS)'],
                  ['Poverty rate — city', '21.1% (DataUSA, ACS 2024)'],
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
            York City's $165,850 median sale price is 59% lower than the national average according to Redfin —
            making it one of the most accessible cash buyer markets in Pennsylvania. But "accessible" cuts both ways:
            aging housing stock, high investor activity in Northeast York, and a 21.1% poverty rate mean many sellers
            are in situations where certainty matters more than squeezing every dollar from a retail listing.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/markets/york-pa/market-report" className="text-brand-primary hover:underline">
              See the full York PA market report →
            </Link>
          </p>
        </section>

        {/* Hablamos Español — prominent */}
        <section className="my-10 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Hablamos Español — Servimos a la Comunidad de York
          </h2>
          <p className="text-gray-700 mb-3">
            According to the U.S. Census Bureau ACS, 36.6% of York City residents are Hispanic or Latino —
            the second-highest concentration of any market we serve. York's Spanish-speaking community,
            primarily from Puerto Rico, the Dominican Republic, and Mexico, has been woven into this city
            for generations. Many families own the row homes in Northeast and Southwest York.
          </p>
          <p className="text-gray-700 mb-4">
            Compramos casas en York, PA. Si necesita vender su casa rápido — sin reparaciones, sin agentes,
            sin complicaciones — llámenos. Ofrecemos una oferta en efectivo en 24 horas y cerramos en 7 días.
            Hablamos español y entendemos su situación. No competitors in York appear to offer Spanish-language service.
          </p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-3 transition-colors">
            📞 Llámenos — Se Habla Español
          </a>
        </section>

        {/* How It Works */}
        <HowItWorks heading="How Selling Your York PA House for Cash Works" />

        {/* Situations */}
        <SituationLinks
          heading="We Buy Houses in York in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/york-pa/inherited-property', description: 'Sell an inherited York row home through the York County Register of Wills process' },
            { label: 'Going Through Divorce', href: '/markets/york-pa/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing' },
            { label: 'Facing Foreclosure', href: '/markets/york-pa/foreclosure', description: 'York County foreclosure timeline is ~270 days — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/york-pa/probate', description: 'We work with York County Register of Wills and estate executors regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/york-pa/tenant-occupied', description: 'We buy with tenants still in place — no eviction required' },
            { label: 'Code Violations', href: '/markets/york-pa/code-violations', description: 'Open permits, failed inspections, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/york-pa/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What York PA Homeowners Are Saying" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in York PA
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $165,850 York City home, a 5-6% agent commission is $8,300-$9,900. Add inspection repairs on
            a pre-1940 Northeast York row home, 31 days of carrying costs, and transfer tax — the real gap
            between a cash offer and a traditional listing is much narrower than sellers expect, and the
            certainty of a cash close is incomparable.
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your York PA Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs."
            sourcePage="/markets/york-pa"
          />
        </section>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your York PA Home for Cash" />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout York City and York County
          </h2>
          <p className="text-gray-700 mb-4">
            Our primary market is York City — Downtown, Northeast York, Southwest York, Springdale, East Side,
            and the historic districts near Continental Square. We know these streets: the dense row home blocks
            off East Market Street, the Colonials near Penn Park, the worker cottages in Fairmount.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve all of York County. York is the county seat of a 909-square-mile county. From our
            York City base, we reach Hanover (~22 miles southwest), Red Lion (~10 miles southeast),
            Shrewsbury (~18 miles south), and Dillsburg (~18 miles northwest). If you're in a rural York
            County township with a farmhouse that's been in the family for generations — we handle those
            estate situations too.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'Downtown York', 'Northeast York', 'Southwest York', 'Springdale', 'East Side',
              'Hanover', 'Red Lion', 'Dallastown', 'Spring Grove', 'Dover',
              'Shrewsbury', 'New Freedom', 'Glen Rock', 'Dillsburg', 'York Haven',
              'Manchester', 'Windsor', 'Seven Valleys', 'Jacobus', 'West York',
              'North York', 'Wrightsville', 'Mount Wolf', 'East York', 'Shiloh',
            ].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        {/* Neighborhoods link */}
        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">York PA Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">
            From Downtown Colonial-era properties to Northeast York row homes — we buy in every York City neighborhood and township.
          </p>
          <Link href="/markets/york-pa/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">
            See neighborhood-by-neighborhood price ranges and investor data →
          </Link>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks marketSlug="york-pa" cityName="York" />

        {/* Guided Survey Form */}
        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for your York PA home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/york-pa" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your York PA Home?" sourcePage="/markets/york-pa" />
        </section>
      </div>
    </>
  );
}
