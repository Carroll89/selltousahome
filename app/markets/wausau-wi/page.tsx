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
import { wausauLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Wausau WI — Cash Offer in 24 Hours',
  description:
    'We buy houses in Wausau WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Marathon County.',
  alternates: { canonical: `${SITE_URL}/markets/wausau-wi` },
};

const TESTIMONIALS = [
  {
    "quote": "My parents owned a house on Thomas Street for over forty years. After my father passed, probate through Marathon County took about four months. The house needed a new roof and the furnace was on its last legs. USA Home Buyers closed eight days after we got the court paperwork done. Didn't touch a thing.",
    "name": "Lisa M.",
    "location": "Downtown Wausau, WI",
    "situation": "Inherited Property — Probate Sale",
    "date": "March 2026"
  },
  {
    "quote": "I was five months behind on the mortgage. In Wisconsin, foreclosure goes through court and takes about a year — but I couldn't keep paying. USA Home Buyers gave me a written offer in less than a day. We closed in ten days. I got out with money in my pocket instead of losing it all at sheriff's sale.",
    "name": "Derek S.",
    "location": "Weston, WI",
    "situation": "Pre-Foreclosure — Judicial",
    "date": "February 2026"
  },
  {
    "quote": "Divorce was final and the judge ordered the house sold. Neither of us wanted to deal with a six-month listing. USA Home Buyers gave one number, one closing date. The attorneys handled the split. Two weeks from first call to done.",
    "name": "Jennifer and Mark T.",
    "location": "Rib Mountain, WI",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "November 2025"
  },
  {
    "quote": "Owned a duplex on Scott Street for seven years. Downstairs tenant stopped paying and Wisconsin eviction through small claims court takes weeks, then you still have to wait for the sheriff. USA Home Buyers bought it with the tenant still there. Nine days, start to finish.",
    "name": "Brad K.",
    "location": "East Side, Wausau WI",
    "situation": "Rental Property — Non-Paying Tenant",
    "date": "July 2025"
  },
  {
    "quote": "Got a job at Marshfield Clinic in Marshfield and needed to move fast. The house in Schofield had been listed for five weeks — one showing, no offers. USA Home Buyers had a written offer the next morning and we closed before my start date.",
    "name": "Amy P.",
    "location": "Schofield, WI",
    "situation": "Relocation — Job Transfer",
    "date": "September 2025"
  },
  {
    "quote": "Chimney fire in January. Took out part of the attic and the second floor had smoke damage. Insurance covered $18,000 — contractor said $34,000 minimum. I'm retired and not financing that. USA Home Buyers bought it as-is. Seven days.",
    "name": "Gerald W.",
    "location": "Rothschild, WI",
    "situation": "Fire Damage — Insurance Shortfall",
    "date": "January 2026"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$18,000-$22,000)' },
  { label: 'WI transfer fee', cashBuyer: 'We cover everything', traditional: '0.3% of sale price (seller pays)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Wausau WI?',
    answer: 'USA Home Buyers can close in as few as 7 days in Wausau. Written cash offer within 24 hours. Wisconsin uses judicial foreclosure — which takes about 12 months from filing to sheriff\'s sale. If you\'re behind on payments, a cash sale gets you out months before the court process plays out. Call 888-440-5250.',
  },
  {
    question: 'How much will you pay for my Wausau home?',
    answer: 'Cash offers typically range from 65-78% of fair market value. Wausau metro median listing price is approximately $366,000. We provide a written offer based on comparable sales and property condition. We cover all closing costs including Wisconsin\'s transfer fee.',
  },
  {
    question: 'What is the transfer fee when selling in Wausau WI?',
    answer: 'Wisconsin charges a real estate transfer fee of $3.00 per $1,000 of sale price (0.3%). On a $366,000 home, that\'s $1,098. The seller pays. When you sell to USA Home Buyers, we cover all closing costs including the transfer fee. Source: Wisconsin Department of Revenue (revenue.wi.gov).',
  },
  {
    question: 'How does foreclosure work in Wisconsin?',
    answer: 'Wisconsin uses judicial foreclosure. The lender files in Marathon County Circuit Court. After a judgment of foreclosure, there\'s typically a 6-12 month redemption period, then a sheriff\'s sale. Total timeline: about 12 months from filing. Source: Wisconsin Statutes Ch. 846.',
  },
  {
    question: 'What areas near Wausau do you buy in?',
    answer: 'All of Marathon County: Wausau, Weston, Schofield, Rothschild, Rib Mountain, Marathon City, Mosinee, Kronenwetter, and surrounding communities. Call 888-440-5250 if you\'re not sure we cover your area.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Central Wisconsin homes deal with harsh winters — aging furnaces, ice dam damage, basement moisture, old insulation. We buy in any condition. No repairs, no cleaning, no staging.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function WausauWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Wausau WI',
    description: 'Step-by-step process for selling your Wausau home for cash in Marathon County, Wisconsin',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Wausau property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Marathon County title company, walk away with cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[wausauLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Wausau WI — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Wausau WI and throughout Marathon County — downtown Wausau, Weston, Schofield, Rothschild, Rib Mountain, and the broader metro. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. Wausau metro median listing price is approximately $366,000. We cover all closing costs including WI transfer fee. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Wausau and Marathon County in any condition — ranch homes, duplexes, older Victorians, estates, foreclosures, tenant-occupied. No repairs, no agent fees.
            </p>
            <a href="tel:+18884405250" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Wausau WI Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/wausau-wi" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Wausau WI Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Wausau is the economic hub of central Wisconsin and the county seat of Marathon County — the largest county by area in the state. The city sits along the Wisconsin River and serves as the commercial center for a wide surrounding rural area. Housing stock ranges from early 1900s Victorians and Craftsman homes near downtown to post-war ranch homes and split-levels in the outer neighborhoods and surrounding communities of Weston, Schofield, and Rib Mountain.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Wausau WI Metro</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median listing price (metro)</td><td className="p-3">$366,000</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hotness rank</td><td className="p-3">#18 nationally</td><td className="p-3 text-gray-500">Realtor.com Hotness Index</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Transfer fee</td><td className="p-3">0.3% ($3/$1,000, seller pays)</td><td className="p-3 text-gray-500">WI DOR (revenue.wi.gov)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (12-month process, sheriff's sale)</td><td className="p-3 text-gray-500">WI Statutes Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Primary county</td><td className="p-3">Marathon County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Wausau WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/wausau-wi/inherited-property', description: 'Sell an inherited Wausau home through Marathon County probate' },
            { label: 'Going Through Divorce', href: '/markets/wausau-wi/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/wausau-wi/foreclosure', description: 'Wisconsin judicial foreclosure takes 12 months — sell now, keep your equity' },
            { label: 'Probate Sale', href: '/markets/wausau-wi/probate', description: 'We work with Marathon County probate cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/wausau-wi/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/wausau-wi/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/wausau-wi/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Wausau WI Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Wausau WI</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $366,000 Wausau home, a 5-6% agent commission runs $18,300-$21,960. Add Wisconsin's 0.3% transfer fee ($1,098), carrying costs during 30+ days on market, and repairs. Central Wisconsin winters are hard on homes — aging furnaces, ice dam damage, and basement moisture are common issues that conventional buyers demand fixed before closing. A direct cash sale eliminates those costs.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm variant="inline" headline="Get Your Wausau WI Cash Offer" subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including WI transfer fee." sourcePage="/markets/wausau-wi" />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Wausau WI Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">We Buy Houses Throughout Wausau and Marathon County</h2>
          <p className="text-gray-700 mb-4">
            Our Wausau coverage includes the entire metro — downtown Wausau's older Victorians and Craftsman homes along the river, the East Side's residential grid, Weston's newer subdivisions to the west, Schofield's working-class neighborhoods, Rothschild along the Business 51 corridor, and Rib Mountain's residential areas south of the ski hill.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve the surrounding Marathon County communities: Marathon City, Mosinee, Kronenwetter, Edgar, Athens, Spencer, and Stratford. If you're in Marathon County, we buy there.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Downtown Wausau', 'East Side', 'Weston', 'Schofield', 'Rothschild', 'Rib Mountain', 'Marathon City', 'Mosinee', 'Kronenwetter', 'Edgar', 'Athens'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Wausau WI Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From downtown Victorians to Weston subdivisions — we buy in every Wausau neighborhood and Marathon County community.</p>
          <Link href="/markets/wausau-wi/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood details →</Link>
        </section>

        <BlogClusterLinks marketSlug="wausau-wi" cityName="Wausau" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Wausau WI home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/wausau-wi" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Wausau WI Home?" sourcePage="/markets/wausau-wi" />
        </section>
      </div>
    </>
  );
}
