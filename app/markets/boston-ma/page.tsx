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
import { bostonLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Boston MA — Cash Offer in 24 Hours',
  description:
    'We buy houses in Boston MA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Suffolk County and Greater Boston.',
  alternates: { canonical: `${SITE_URL}/markets/boston-ma` },
};

const TESTIMONIALS = [
  {
    "quote": "My father owned a triple-decker in Dorchester for thirty-eight years. After he passed, probate through Suffolk County Probate and Family Court took about five months. The house needed a full gut — knob-and-tube, lead paint on every floor, and the boiler was from the 1970s. USA Home Buyers closed twelve days after I got my fiduciary appointment.",
    "name": "Keisha W.",
    "location": "Dorchester, Boston MA",
    "situation": "Inherited Property — Probate Sale",
    "date": "March 2026"
  },
  {
    "quote": "Massachusetts foreclosure is non-judicial — the bank can foreclose by power of sale without going to court, and the whole process can move in under four months. I was behind three months and got a notice of default. USA Home Buyers had a written offer the same day I called. We closed in nine days. Foreclosure stopped.",
    "name": "James D.",
    "location": "Mattapan, Boston MA",
    "situation": "Pre-Foreclosure — Non-Judicial Power of Sale",
    "date": "February 2026"
  },
  {
    "quote": "The divorce was ugly and the judge wanted the Southie house sold. Neither of us could afford to buy the other out — not at Boston prices. USA Home Buyers gave us one number, both attorneys signed off, and we closed in two weeks. Clean split.",
    "name": "Sean and Colleen M.",
    "location": "South Boston, Boston MA",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "November 2025"
  },
  {
    "quote": "I had a two-family in East Boston for twelve years. The tenant downstairs stopped paying in October and Massachusetts eviction through Housing Court takes months — you can't even file a summary process until after the 14-day notice expires. USA Home Buyers bought the property with the tenant in place. Ten days, done.",
    "name": "Anthony R.",
    "location": "East Boston, Boston MA",
    "situation": "Rental Property — Non-Paying Tenant",
    "date": "July 2025"
  },
  {
    "quote": "Got a VP role at a startup in Austin and had to be there in a month. My condo in Jamaica Plain had been listed for three weeks with one lowball offer. USA Home Buyers made a written offer in 24 hours and closed before my moving truck left. I didn't lose a single day of work.",
    "name": "Priya S.",
    "location": "Jamaica Plain, Boston MA",
    "situation": "Relocation — Career Move",
    "date": "September 2025"
  },
  {
    "quote": "Kitchen fire in February spread to the second floor. Older building in Roxbury — balloon framing meant the fire traveled fast. Insurance paid $35,000, contractor wanted $78,000. I wasn't financing that gap. USA Home Buyers bought it as-is. Seven days from call to closing.",
    "name": "Marcus J.",
    "location": "Roxbury, Boston MA",
    "situation": "Fire Damage — Insurance Shortfall",
    "date": "January 2026"
  },
  {
    "quote": "My wife and I are both retired — I did 30 years with the T. The Charlestown house was three floors and our knees couldn't do the stairs anymore. Our daughter found a ranch-style place for us in Quincy. USA Home Buyers bought the Charlestown house in eight days. No showings, no strangers walking through. We were in Quincy by March.",
    "name": "Robert and Helen K.",
    "location": "Charlestown, Boston MA",
    "situation": "Downsizing — Retirement",
    "date": "February 2026"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($10K-$40K avg in Boston)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$41,000-$50,000 on $829K)' },
  { label: 'MA deed excise stamps', cashBuyer: 'We cover everything', traditional: '$4.56 per $1,000 (seller pays)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Boston MA?',
    answer: 'USA Home Buyers can close in as few as 7 days in Boston. We send a written cash offer within 24 hours. Massachusetts uses non-judicial foreclosure by power of sale under MGL Ch. 244 — meaning lenders can foreclose without court action, and the process can complete in under four months. If you\'re facing foreclosure, speed matters. Call 888-440-5250 immediately.',
  },
  {
    question: 'How much will you pay for my Boston home?',
    answer: 'Cash offers typically range from 65-78% of fair market value. Boston metro median listing price is approximately $829,000, though neighborhoods vary enormously — Mattapan and Dorchester homes may list at $450,000-$600,000 while Back Bay condos exceed $1M. We provide a written offer based on comparable sales and property condition.',
  },
  {
    question: 'What are the transfer taxes when selling in Boston?',
    answer: 'Massachusetts charges deed excise stamps at $4.56 per $1,000 of sale price (seller pays). On an $829,000 home, that\'s $3,780. The city of Boston does not impose an additional transfer tax. When you sell to USA Home Buyers, we cover all closing costs including deed excise stamps. Source: Massachusetts Department of Revenue (mass.gov/dor).',
  },
  {
    question: 'How does foreclosure work in Massachusetts?',
    answer: 'Massachusetts uses non-judicial foreclosure by power of sale under MGL Ch. 244. The lender can foreclose without going to court if the mortgage contains a power of sale clause (most do). The process requires a 150-day right-to-cure period, then publication of sale notice for 3 consecutive weeks. Total timeline: typically 4-7 months from default to auction. Source: Massachusetts Trial Court (mass.gov/courts).',
  },
  {
    question: 'What areas in Greater Boston do you buy in?',
    answer: 'All of Suffolk County and the surrounding metro: Boston (every neighborhood), Cambridge, Somerville, Quincy, Brookline, Chelsea, Revere, Winthrop, and throughout Middlesex and Norfolk Counties. If you\'re in Greater Boston, we buy there. Call 888-440-5250.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Boston\'s housing stock ranges from 200-year-old row houses to triple-deckers built in the early 1900s. Lead paint (mandatory disclosure under MGL Ch. 111 §197A), old wiring, aging heating systems, and deferred maintenance are the norm. We buy in any condition.',
  },
  {
    question: 'Do I need a lawyer to sell my house in Massachusetts?',
    answer: 'Massachusetts is an attorney state for real estate closings. Both buyer and seller typically have their own attorney. When you sell to us, you\'ll have your own attorney at closing — we cover the cost.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function BostonMAMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Boston MA',
    description: 'Step-by-step process for selling your Boston home for cash in Suffolk County, Massachusetts',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Boston property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Suffolk County closing attorney\'s office, walk away with cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Massachusetts Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Boston MA — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Boston MA and throughout Suffolk County — Dorchester, Roxbury, Mattapan, East Boston, South Boston, Jamaica Plain, and the broader metro including Cambridge, Somerville, and Quincy. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. Boston metro median listing is approximately $829,000. We cover all closing costs including MA deed excise stamps. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Boston and Greater Boston in any condition — triple-deckers, brownstones, condos, multi-families, estates, foreclosures, tenant-occupied. No repairs, no agent fees.
            </p>
            <a href="tel:+18884405250" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Boston MA Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/boston-ma" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Boston MA Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Boston is one of the most expensive housing markets in the country and the #15 hottest market nationally per Realtor.com's March 2026 Hotness Index. The metro median listing price sits around $829,000 — driven by limited supply, institutional demand, and the concentration of universities and hospitals. But Boston's market is deeply neighborhood-dependent: a Mattapan triple-decker and a Back Bay brownstone exist in entirely different price universes.
          </p>
          <p className="text-gray-700 mb-4">
            For homeowners with properties that need significant work — lead paint compliance, old systems, structural issues — the traditional listing process can be a dead end. Conventional lenders often won't finance homes that fail inspection, which narrows the buyer pool to cash investors and renovation loan holders. A direct cash sale cuts through that entirely.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Boston MA Metro</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median listing price (metro)</td><td className="p-3">$829,000</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hotness rank</td><td className="p-3">#15 nationally</td><td className="p-3 text-gray-500">Realtor.com Hotness Index</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Deed excise stamps</td><td className="p-3">$4.56 per $1,000 (seller pays)</td><td className="p-3 text-gray-500">MA DOR (mass.gov/dor)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial (power of sale, MGL Ch. 244)</td><td className="p-3 text-gray-500">MA Trial Court</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney state</td><td className="p-3">Yes — attorney required at closing</td><td className="p-3 text-gray-500">—</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Primary county</td><td className="p-3">Suffolk County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Boston MA in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/boston-ma/inherited-property', description: 'Sell an inherited Boston home through Suffolk County Probate and Family Court' },
            { label: 'Going Through Divorce', href: '/markets/boston-ma/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/boston-ma/foreclosure', description: 'Massachusetts non-judicial foreclosure moves fast — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/boston-ma/probate', description: 'We work with Suffolk County Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/boston-ma/tenant-occupied', description: 'We buy with tenants in place — no eviction required' },
            { label: 'Code Violations', href: '/markets/boston-ma/code-violations', description: 'ISD violations, lead paint orders — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/boston-ma/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Boston MA Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Boston MA</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On an $829,000 Boston home, a 5-6% agent commission runs $41,450-$49,740. Add MA deed excise stamps ($3,780), carrying costs during 30+ days on market, and repairs on older housing. Many Boston triple-deckers require lead paint compliance under state law — deleading costs $8,000-$15,000 per unit. A direct cash sale eliminates those costs.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm variant="inline" headline="Get Your Boston MA Cash Offer" subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including MA deed excise stamps." sourcePage="/markets/boston-ma" />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Boston MA Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">We Buy Houses Throughout Boston and Greater Boston</h2>
          <p className="text-gray-700 mb-4">
            Our coverage spans every Boston neighborhood — Dorchester's sprawling triple-decker grid (the city's largest neighborhood by area and population), Roxbury's historic Victorian and multi-family homes, Mattapan's residential neighborhoods along Blue Hill Avenue, East Boston across the harbor with its growing market, South Boston's mix of row houses and newer condos, Jamaica Plain's diverse housing from Victorians to multi-families, Charlestown's historic row houses near the Navy Yard, and Brighton's student-heavy rental market near Boston College.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the full Greater Boston metro. Cambridge and Somerville to the north ($700K-$1M+ medians). Quincy, Brookline, Chelsea, Revere, and Winthrop in the inner ring. We cover Suffolk, Middlesex, and Norfolk Counties.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Dorchester', 'Roxbury', 'Mattapan', 'East Boston', 'South Boston', 'Jamaica Plain', 'Charlestown', 'Brighton', 'Allston', 'Hyde Park', 'Roslindale', 'West Roxbury', 'Cambridge', 'Somerville', 'Quincy', 'Brookline'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Boston MA Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Dorchester triple-deckers to Charlestown row houses — we buy in every Boston neighborhood and Greater Boston community.</p>
          <Link href="/markets/boston-ma/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood details →</Link>
        </section>

        <BlogClusterLinks marketSlug="boston-ma" cityName="Boston" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Boston MA home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/boston-ma" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Boston MA Home?" sourcePage="/markets/boston-ma" />
        </section>
      </div>
    </>
  );
}
