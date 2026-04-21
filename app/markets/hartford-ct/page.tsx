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
import { hartfordLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Hartford CT — Cash Offer in 24 Hours',
  description:
    'We buy houses in Hartford CT for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Hartford County. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/hartford-ct` },
};

const TESTIMONIALS = [
  {
    "quote": "My mother lived on Wethersfield Avenue for thirty-two years. After she passed, I went through Hartford Probate Court — took about five months. The house needed a new roof, the boiler was shot, and the basement had moisture issues. USA Home Buyers closed nine days after probate was settled. I never touched a single thing in that house.",
    "name": "Carlos M.",
    "location": "South End, Hartford CT",
    "situation": "Inherited Property — Probate Sale",
    "date": "March 2026"
  },
  {
    "quote": "I was four months behind on the mortgage and the bank had already filed in Hartford Superior Court. My attorney told me Connecticut uses strict foreclosure — no auction, they just take the house on the law day. USA Home Buyers closed before the law day hearing. I walked away with enough to start over.",
    "name": "Denise R.",
    "location": "Barry Square, Hartford CT",
    "situation": "Pre-Foreclosure — Strict Foreclosure",
    "date": "February 2026"
  },
  {
    "quote": "The divorce was complicated enough without fighting about a three-family on Park Street. The judge wanted the property sold. USA Home Buyers gave us one number, one closing date. Proceeds split through our attorneys. Done in two weeks.",
    "name": "Miguel and Laura T.",
    "location": "Frog Hollow, Hartford CT",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "November 2025"
  },
  {
    "quote": "I owned a two-family near Trinity College for nine years. The downstairs tenant stopped paying and Connecticut eviction takes months. Between carrying costs, legal fees, and the stress — I was done. USA Home Buyers bought it with the tenant still in the unit. Eleven days, start to finish.",
    "name": "Frank P.",
    "location": "Behind the Rocks, Hartford CT",
    "situation": "Rental Property — Non-Paying Tenant",
    "date": "July 2025"
  },
  {
    "quote": "Got transferred to the Travelers office in New York. Had three weeks to relocate. My house in West End had been on the market for six weeks with no solid offers — the old knob-and-tube wiring scared buyers off. USA Home Buyers made a written offer in 24 hours and closed before my start date.",
    "name": "Angela W.",
    "location": "West End, Hartford CT",
    "situation": "Relocation — Job Transfer",
    "date": "September 2025"
  },
  {
    "quote": "Kitchen fire in January — damage spread to the second floor. Insurance offered $28,000, contractor quoted $52,000. I'm sixty-three and not taking out a loan for that. USA Home Buyers bought the house as-is. Eight days from first call to closing.",
    "name": "Robert H.",
    "location": "Parkville, Hartford CT",
    "situation": "Fire Damage — Insurance Shortfall",
    "date": "January 2026"
  },
  {
    "quote": "My husband passed last spring. The house in Blue Hills was too much for me alone — three bedrooms, big yard, and the furnace needed replacing. My son in Glastonbury wanted me closer. USA Home Buyers made a fair offer and I didn't have to deal with showings or strangers walking through. Closed in ten days.",
    "name": "Patricia L.",
    "location": "Blue Hills, Hartford CT",
    "situation": "Downsizing — Widowed, Relocating to Family",
    "date": "October 2025"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$25K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$14,000-$17,000)' },
  { label: 'CT conveyance tax', cashBuyer: 'We cover everything', traditional: '0.75% state + municipal (seller pays)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Hartford CT?',
    answer: 'USA Home Buyers can close in as few as 7 days in Hartford CT. We send a written cash offer within 24 hours. Connecticut uses strict foreclosure — the lender petitions Hartford Superior Court and the judge sets a "Law Day." If you don\'t pay the full debt by that date, title transfers to the lender. No auction. Once a Law Day is set, acting fast is critical. A direct cash sale before that date is often the only way to preserve equity.',
  },
  {
    question: 'How much will you pay for my Hartford CT house?',
    answer: 'Cash offers for Hartford homes typically range from 65-78% of fair market value. Hartford metro median listing price is approximately $455,000, though city neighborhoods vary widely — Barry Square and Frog Hollow homes may list at $180,000-$250,000 while West Hartford averages over $400,000. We cover all closing costs including Connecticut\'s conveyance tax.',
  },
  {
    question: 'What is the conveyance tax when selling a house in Hartford CT?',
    answer: 'Connecticut charges a real estate conveyance tax of 0.75% on the first $800,000 of the sale price, with additional rates above that threshold. The City of Hartford may collect a municipal portion as well. The seller pays. When you sell to USA Home Buyers, we cover all closing costs. Source: Connecticut Department of Revenue Services (ct.gov/drs).',
  },
  {
    question: 'How does foreclosure work in Hartford CT?',
    answer: 'Connecticut uses strict foreclosure — one of the most unusual systems in the country. The lender files in Hartford Superior Court. If the court grants foreclosure, it sets a "Law Day" — a deadline to pay the full debt or lose title. There is no auction, no bidding, no redemption period after the Law Day passes. Title goes directly to the lender. This gives Connecticut homeowners less time and fewer options than most states. Source: Connecticut Judicial Branch (jud.ct.gov).',
  },
  {
    question: '¿Compran casas en Hartford CT? / Do you work with Spanish-speaking sellers?',
    answer: 'Sí, hablamos español. According to the U.S. Census Bureau, approximately 44% of Hartford residents identify as Hispanic or Latino — making Hartford one of the most Latino cities in New England. We serve Hartford\'s community in English and Spanish. Llámenos al 888-440-5250.',
  },
  {
    question: 'What areas near Hartford do you buy in?',
    answer: 'The entire Hartford metro. That includes West Hartford, East Hartford, New Britain, Manchester, Glastonbury, Wethersfield, Newington, Rocky Hill, Cromwell, Bristol, Enfield, Windsor, South Windsor, and Farmington. If you\'re in Hartford County, we buy there. Call 888-440-5250.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Hartford\'s housing stock dates heavily to the late 1800s and early 1900s — brick triple-deckers, Victorian singles, and wood-frame multi-families. Lead paint, knob-and-tube wiring, aging boilers, and deferred maintenance are common. We buy in any condition. No repairs, no cleaning, no staging.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works for you, you pick the closing date.',
  },
];

export default function HartfordCTMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Hartford CT',
    description: 'Step-by-step process for selling your Hartford home for cash in Hartford County, Connecticut',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Hartford property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Hartford County title company, walk away with cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[hartfordLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Connecticut Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Hartford CT — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Hartford CT and throughout Hartford County — Frog Hollow, Barry Square, West End, Blue Hills, Parkville, and the broader metro including West Hartford, East Hartford, and New Britain. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. Hartford metro median listing price is approximately $455,000. We cover all closing costs including CT conveyance tax. Call 888-440-5250. Hablamos español.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Hartford CT and Hartford County in any condition — triple-deckers, Victorians, multi-families, estates, foreclosures, tenant-occupied. No repairs, no agent fees.
            </p>
            <a href="tel:+18884405250" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Hartford CT Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/hartford-ct" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Hartford CT Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Hartford is Connecticut's capital and was once known as the "Insurance Capital of the World" — home to Aetna, The Hartford, Travelers, and Lincoln Financial. The city's housing stock reflects over 150 years of development: brick triple-deckers from the early 1900s, Victorian-era single-families in the West End, wood-frame multi-families in Frog Hollow and Barry Square, and post-war housing in Blue Hills and North Meadows. Hartford's population is approximately 44% Hispanic and the city has a significantly lower median home price than its suburbs, creating a mixed market where city homes often sell well below the metro average.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Hartford CT Metro</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median listing price (metro)</td><td className="p-3">$455,000</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hotness rank</td><td className="p-3">#13 nationally</td><td className="p-3 text-gray-500">Realtor.com Hotness Index</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Conveyance tax</td><td className="p-3">0.75% state (first $800K) + municipal</td><td className="p-3 text-gray-500">CT DRS (ct.gov/drs)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Strict foreclosure (no auction — Law Day)</td><td className="p-3 text-gray-500">CT Judicial Branch</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Hispanic/Latino population</td><td className="p-3">~44% of city</td><td className="p-3 text-gray-500">U.S. Census Bureau ACS</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Primary county</td><td className="p-3">Hartford County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Hartford CT in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/hartford-ct/inherited-property', description: 'Sell an inherited Hartford CT home through Hartford Probate Court' },
            { label: 'Going Through Divorce', href: '/markets/hartford-ct/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/hartford-ct/foreclosure', description: 'Connecticut strict foreclosure (Superior Court, Law Day — no auction) — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/hartford-ct/probate', description: 'We work with Hartford Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/hartford-ct/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/hartford-ct/code-violations', description: 'Open violations, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/hartford-ct/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Hartford CT Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Hartford CT</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $280,000 Hartford home, a 5-6% agent commission runs $14,000-$16,800. Add Connecticut's conveyance tax, carrying costs during 40+ days on market, and repairs on housing built before 1940. Many Hartford triple-deckers have lead paint, old boilers, and knob-and-tube wiring that conventional lenders require addressed before closing. A direct cash sale eliminates those costs entirely.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm variant="inline" headline="Get Your Hartford CT Cash Offer" subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including CT conveyance tax." sourcePage="/markets/hartford-ct" />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Hartford CT Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">We Buy Houses Throughout Hartford and Hartford County CT</h2>
          <p className="text-gray-700 mb-4">
            Our Hartford coverage includes every neighborhood — Frog Hollow's dense grid of triple-deckers and multi-families southwest of downtown, Barry Square's mixed residential blocks, the West End's tree-lined streets with larger Victorians near Elizabeth Park, Asylum Hill's brownstones and apartments near the Mark Twain House, Blue Hills on the north side with post-war colonials and capes, Parkville's worker housing near the Park River, and Behind the Rocks between New Britain Avenue and the rail corridor.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the full Hartford metro. West Hartford to the west has higher values ($400K+) but the same seller situations — divorce, estate, relocation. East Hartford across the river. New Britain to the south. Manchester, Glastonbury, Wethersfield, Newington, Rocky Hill, Cromwell, Bristol, Enfield, Windsor, South Windsor, and Farmington are all in our Hartford County coverage.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['West End', 'Asylum Hill', 'Frog Hollow', 'South End', 'Barry Square', 'Parkville', 'Blue Hills', 'Behind the Rocks', 'Clay Arsenal', 'North Meadows', 'West Hartford', 'East Hartford', 'New Britain', 'Manchester', 'Glastonbury', 'Wethersfield'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Hartford CT Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Frog Hollow triple-deckers to West End Victorians — we buy in every Hartford neighborhood and Hartford County community.</p>
          <Link href="/markets/hartford-ct/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood details →</Link>
        </section>

        <BlogClusterLinks marketSlug="hartford-ct" cityName="Hartford" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Hartford CT home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/hartford-ct" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Hartford CT Home?" sourcePage="/markets/hartford-ct" />
        </section>
      </div>
    </>
  );
}
