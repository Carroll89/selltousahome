import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, bethlehemFAQSchema, bethlehemHowToSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Bethlehem PA',
  description:
    'We buy houses in Bethlehem PA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Northampton County — South Side row homes, any condition. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/bethlehem-pa` },
  openGraph: {
    images: [{ url: '/images/bethlehem-pa-hero.jpg', width: 1200, height: 630, alt: 'Bethlehem PA South Side homes — Sell Your House Fast' }],
  },
};

const TESTIMONIALS = [
  {
    quote: "My grandmother's row home on Hayes Street sat vacant for three years after she passed. South Side, built in the 1920s, knob-and-tube wiring, boiler that hadn't run in two winters. The family was scattered — nobody wanted to manage it from out of state. USA Home Buyers made a fair cash offer and closed in 10 days. We left everything. They handled the rest.",
    name: 'Patricia M.',
    location: 'South Side, Bethlehem PA',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
  },
  {
    quote: "I owned a rental on West 4th Street, tenant stopped paying during COVID and I never got fully caught up with the mortgage after. When I found out about the foreclosure timeline in Northampton County I knew I needed to move fast. Got a written offer in 20 hours, closed before the sheriff sale was scheduled.",
    name: 'Marcus T.',
    location: 'West Side, Bethlehem PA',
    situation: 'Pre-Foreclosure — Behind on Mortgage',
    date: 'February 2026',
  },
  {
    quote: "Going through a divorce, we needed to sell the house on Prospect Avenue quickly and split the money cleanly. No arguments about repairs, no real estate agent drama. USA Home Buyers gave us one written number, we both signed, and it was done in 12 days.",
    name: 'Denise R.',
    location: 'Central Bethlehem, PA',
    situation: 'Divorce Sale — Splitting Assets',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($8K-$25K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$16,000-$19,200 on $320K home)' },
  { label: 'Transfer tax (2%)', cashBuyer: 'We cover all closing costs', traditional: 'Seller pays ~1% local portion ($3,200)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV (no deductions)', traditional: '85-90% FMV minus repairs, commissions, costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Bethlehem PA?',
    answer: "Once you accept a written offer, we typically close in 7-14 days. We send the written offer within 24 hours of your inquiry. According to Redfin, Bethlehem homes sell in about 10 days on the open market — but that path requires showings, inspections, and waiting on mortgage lender approval. With a cash sale, there's no bank involved, no contingency waiting period.",
  },
  {
    question: 'What is the transfer tax when selling in Bethlehem PA?',
    answer: "Bethlehem PA has a 2% total real estate transfer tax — 1% Pennsylvania state tax plus 1% City of Bethlehem local tax. By convention, buyer and seller each pay half (1% each). On a $320,000 home, the total is $6,400 — seller's share is $3,200. When you sell to us, we cover all closing costs including the full transfer tax. Source: City of Bethlehem Ordinance Article 335.",
  },
  {
    question: 'How much will you pay for my Bethlehem house?',
    answer: "Cash offers for Bethlehem homes typically range from 70-80% of fair market value. According to Redfin, Bethlehem's median sale price is $320,000 (February 2026), with a Zillow home value of $350,600. For a South Side row home near the $245,000 median, a cash offer is approximately $172,000-$196,000. We cover all closing costs — no agent commissions, no fees deducted from your number.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Bethlehem's housing stock is dominated by pre-war row homes and twins — 30.8% of the city's housing units are attached structures, most built between 1890 and 1930 for Bethlehem Steel workers. Deferred maintenance, aging systems, and code issues are common. We buy in any condition. Leave whatever you don't want.",
  },
  {
    question: 'What neighborhoods in Bethlehem do you buy in?',
    answer: "All of Bethlehem and the surrounding area — South Side, Central Bethlehem, West Side, Northeast Bethlehem, and the Historic North Side. We also serve Fountain Hill, Hellertown, Hanover Township, Bethlehem Township, Freemansburg, Nazareth, Palmer Township, Easton, Northampton, Emmaus, Whitehall Township, Catasauqua, and Wilson Borough.",
  },
  {
    question: '¿Compran casas en Bethlehem PA? / Do you work with Spanish-speaking sellers?',
    answer: "Sí, hablamos español. According to the U.S. Census Bureau ACS 2024, 31.3% of Bethlehem residents identify as Hispanic or Latino. We serve Bethlehem's South Side community — call us in English or Spanish. We understand the neighborhood, the housing stock, and the process.",
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: "We're a legitimate Pennsylvania LLC. Every offer is in writing — a formal purchase agreement with price, terms, and closing date. No verbal promises. You can verify our Pennsylvania business registration at corporations.pa.gov. We've closed sales across Northampton County and the Lehigh Valley.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: "We call you within hours during business hours. We'll ask about the property — condition, situation, your timeline. Within 24 hours you receive a written cash offer. The offer stands on its own — no pressure, no obligation. If you accept, we pick a closing date that works for you.",
  },
];

export default function BethlehemMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[bethlehemLocalBusinessSchema, bethlehemFAQSchema, bethlehemHowToSchema]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/bethlehem-pa-hero-640.jpg 640w, /images/optimized/bethlehem-pa-hero-828.jpg 828w, /images/optimized/bethlehem-pa-hero-1080.jpg 1080w, /images/optimized/bethlehem-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bethlehem-pa-hero-1200.jpg"
            alt="South Side Bethlehem PA brick row homes — sell your house fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in Bethlehem, PA — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases houses throughout Bethlehem PA and Northampton County for cash in any condition —
              South Side row homes, twins, single-family. No repairs, no cleaning, no agent fees.
              Written cash offer within 24 hours, close in as few as 7 days.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-4">
              <span>✓ No repairs</span>
              <span>✓ No commissions</span>
              <span>✓ We pay all closing costs</span>
              <span>✓ Close in 7 days</span>
              <span>✓ Any condition</span>
              <span>✓ Hablamos español</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3">
              📞 Call Now — We Answer 24/7
            </a>
            <p className="text-blue-200 text-sm">
              Serving Bethlehem · Fountain Hill · Hellertown · Easton · Nazareth · Northampton and all of Northampton County
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/bethlehem-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Steel City context — unique to Bethlehem */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Bethlehem&apos;s Housing Stock: Built for Steel, Aging Fast
          </h2>
          <p className="text-gray-700 mb-4">
            Bethlehem isn&apos;t a suburb. It&apos;s a former industrial city — home to Bethlehem Steel, once the second-largest
            steel producer in the world. The South Side neighborhoods were built almost entirely between 1890 and 1930
            to house steelworkers and their families. According to the U.S. Census Bureau, 30.8% of Bethlehem&apos;s
            housing units are attached row homes — a density unusual outside Philadelphia.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Attached row homes', value: '30.8%', note: 'Of all housing units — Census 2020' },
              { label: 'Compete Score (Redfin)', value: '89/100', note: 'Very competitive seller\'s market' },
              { label: 'Hispanic residents', value: '31.3%', note: 'Hablamos español — ACS 2024' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-blue-100 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-brand-dark">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            These homes have character — brick facades, front stoops, narrow lots. They also have aging electrical,
            original plumbing, and deferred maintenance that&apos;s common when properties pass through generations.
            That&apos;s exactly the kind of house we buy every week.
          </p>
        </section>

        {/* Market Data */}
        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Bethlehem PA Housing Market — 2026 Data
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Avg home value (Zillow ZHVI, April 2026)', '$350,600'],
                  ['YoY change (Zillow)', '+2.9%'],
                  ['Median sale price (Redfin, Feb 2026)', '$320,000'],
                  ['YoY change (Redfin)', '+16.6%'],
                  ['Price per sq ft (Redfin)', '$178'],
                  ['Median days on market (Redfin)', '10 days'],
                  ['Sale-to-list ratio (Redfin)', '100.5%'],
                  ['Redfin Compete Score', '89/100 — Very Competitive'],
                  ['Avg offers per home (Redfin)', '5 offers'],
                  ['Hot homes sell in', '~6 days, ~4% above list'],
                  ['Cash offer range (typical)', '$224,000–$256,000 (70-80% of $320K median)'],
                  ['South Side row home range', '$172,000–$196,000 (70-80% of ~$245K)'],
                  ['Transfer tax', '2% total (1% PA state + 1% City of Bethlehem)'],
                  ['Typical realtor commission', '5–6% (~$16,000-$19,200 on $320K home)'],
                  ['Housing composition', '30.8% attached row homes — Census 2020'],
                  ['Hispanic population', '31.3% — ACS 2024'],
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
            Bethlehem&apos;s market is highly competitive — homes receive an average of 5 offers and sell at 100.5% of list price.
            But that&apos;s only for move-in-ready properties. South Side row homes with deferred maintenance, code issues,
            or complicated ownership situations sit longer. For those sellers, a cash offer provides certainty the retail
            market can&apos;t match.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/markets/bethlehem-pa/market-report" className="text-brand-primary hover:underline">
              See the full Bethlehem PA market report →
            </Link>
          </p>
        </section>

        {/* How It Works */}
        <HowItWorks heading="How Selling Your Bethlehem PA House for Cash Works" />

        {/* Situations */}
        <SituationLinks
          heading="We Buy Houses in Bethlehem in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/bethlehem-pa/inherited-property', description: 'Sell an inherited South Side row home without cleanout or repairs' },
            { label: 'Going Through Divorce', href: '/markets/bethlehem-pa/divorce-sale', description: 'Close quickly, split proceeds cleanly — minimal conflict' },
            { label: 'Facing Foreclosure', href: '/markets/bethlehem-pa/foreclosure', description: 'Northampton County foreclosure timeline is 12-18 months — sell now' },
            { label: 'Tenant-Occupied Property', href: '/markets/bethlehem-pa/tenant-occupied', description: 'We buy with tenants still in place — no eviction needed' },
            { label: 'Code Violations', href: '/markets/bethlehem-pa/code-violations', description: 'Open permits, failed inspections — we buy it anyway' },
            { label: 'Fire Damage', href: '/markets/bethlehem-pa/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
            { label: 'Probate Sale', href: '/markets/bethlehem-pa/probate', description: 'We work with Northampton County estate executors regularly' },
            { label: 'Needs Repairs (Sell As-Is)', href: '/guides/sell-as-is', description: 'Foundation, roof, plumbing — we buy it anyway' },
            { label: 'Back Taxes or Liens', href: '/guides/back-taxes', description: 'Unpaid taxes and liens get handled at closing' },
          ]}
        />

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Bethlehem PA Homeowners Are Saying" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Bethlehem PA
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $320,000 Bethlehem home, a 5-6% agent commission is $16,000-$19,200. Add inspection repairs on a
            100-year-old South Side row home, 45-60 days of carrying costs, and transfer tax — the real gap between
            a cash offer and a traditional listing is smaller than most sellers expect, and the certainty is incomparable.
          </p>
        </section>

        {/* Hablamos Español Section */}
        <section className="my-10 bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Hablamos Español — Servimos a la Comunidad de Bethlehem
          </h2>
          <p className="text-gray-700 mb-3">
            According to the U.S. Census Bureau, 31.3% of Bethlehem residents are Hispanic or Latino. The South Side
            has a vibrant Puerto Rican and Dominican community that has called this neighborhood home for generations.
          </p>
          <p className="text-gray-700 mb-4">
            Vendemos casas en Bethlehem, PA. Si necesita vender su casa rápido — sin reparaciones, sin agentes, sin complicaciones —
            llámenos. Ofrecemos efectivo en 24 horas y cerramos en 7 días. Hablamos español.
          </p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-5 py-3 transition-colors">
            📞 Llámenos — Se Habla Español
          </a>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Bethlehem PA Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs."
            sourcePage="/markets/bethlehem-pa"
          />
        </section>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Bethlehem PA Home for Cash" />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Bethlehem and Northampton County
          </h2>
          <p className="text-gray-700 mb-4">
            Our primary market is the City of Bethlehem — South Side, Central Bethlehem, West Side, Northeast Bethlehem,
            and the Historic North Side. We know these neighborhoods: the dense row homes near SteelStacks, the brick
            twins on the West Side, the Victorian-era houses near Moravian University.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve the surrounding communities throughout Northampton and Lehigh counties: Fountain Hill (adjacent borough),
            Hellertown, Bethlehem Township, Hanover Township, Freemansburg, Nazareth, Northampton Borough, Palmer Township,
            Wilson Borough, Easton, Emmaus, Whitehall Township, and Catasauqua.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'South Side Bethlehem', 'Central Bethlehem', 'West Side', 'Northeast Bethlehem', 'Fountain Hill',
              'Hellertown', 'Bethlehem Township', 'Hanover Township', 'Nazareth', 'Northampton',
              'Palmer Township', 'Wilson Borough', 'Freemansburg', 'Easton', 'Emmaus', 'Whitehall Township', 'Catasauqua',
            ].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        {/* Neighborhoods link */}
        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Bethlehem Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">
            From South Side row homes near SteelStacks to the Historic District on the North Side — we buy in every Bethlehem neighborhood.
          </p>
          <Link href="/markets/bethlehem-pa/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">
            See neighborhood-by-neighborhood price ranges and market data →
          </Link>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks marketSlug="bethlehem-pa" cityName="Bethlehem" />

        {/* Guided Survey Form */}
        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for your Bethlehem PA home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/bethlehem-pa" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Bethlehem PA Home?" sourcePage="/markets/bethlehem-pa" />
        </section>
      </div>
    </>
  );
}
