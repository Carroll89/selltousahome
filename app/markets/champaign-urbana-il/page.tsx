/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Champaign-Urbana IL',
  description:
    'We buy houses in Champaign-Urbana IL for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Champaign County. Call 888-274-5006.',
  alternates: { canonical: `${SITE_URL}/markets/champaign-urbana-il` },
  openGraph: {
    images: [{ url: '/images/champaign-urbana-il-hero.jpg', width: 1200, height: 630, alt: 'Champaign-Urbana IL home — Sell Your House Fast for Cash' }],
  },
};

const champaignUrbanaLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'RealEstateAgent'],
  '@id': `${SITE_URL}/#business-champaign-urbana-il`,
  name: 'USA Home Buyers — Champaign-Urbana IL',
  description: 'Cash home buyers serving Champaign-Urbana IL and Champaign County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
  url: `${SITE_URL}/markets/champaign-urbana-il`,
  telephone: '+18882745006',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Champaign',
    addressRegion: 'IL',
    postalCode: '61820',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 40.1164, longitude: -88.2434 },
  areaServed: [
    { '@type': 'City', name: 'Champaign', sameAs: 'https://en.wikipedia.org/wiki/Champaign,_Illinois' },
    { '@type': 'City', name: 'Urbana', sameAs: 'https://en.wikipedia.org/wiki/Urbana,_Illinois' },
    { '@type': 'City', name: 'Savoy' },
    { '@type': 'City', name: 'Rantoul' },
    { '@type': 'County', name: 'Champaign County' },
  ],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  priceRange: '$$',
  image: `${SITE_URL}/images/champaign-urbana-il-hero.jpg`,
};

const TESTIMONIALS = [
  {
    "quote": "My father was a UIUC engineering professor for 28 years. When he passed, my brother and I were in Seattle and Boston — neither of us had been back to Champaign in years. The house in Southwest Champaign had original 1970s HVAC and a basement with water intrusion. USA Home Buyers had a written number within 24 hours and we closed without either of us flying back.",
    "name": "Carol H.",
    "location": "Southwest Champaign, IL",
    "situation": "Inherited Estate — Out-of-State Heirs",
    "date": "March 2026"
  },
  {
    "quote": "After the property management company I worked for closed, I never got fully caught back up. By the time the Champaign County case was filed, I was six months behind. USA Home Buyers got me a written offer within forty-eight hours and closed in thirteen days before summary judgment. I had $31,000 in equity I almost lost.",
    "name": "Darius M.",
    "location": "North Champaign, IL",
    "situation": "Pre-Foreclosure — Behind on Payments",
    "date": "May 2025"
  },
  {
    "quote": "The Champaign County divorce decree required the house to be sold. It's in Savoy, near the university, good area — but we couldn't agree on anything. One offer was already written up for us and both of us just had to sign. Twelve days and it was done. The attorneys took care of the rest.",
    "name": "Wendy and Scott A.",
    "location": "Savoy, IL",
    "situation": "Divorce Sale — Court Decree",
    "date": "August 2025"
  },
  {
    "quote": "I'd been renting to UIUC students in Old West Urbana for eleven years. Every August it was the same: new tenants, new damage, new headaches. Last summer I decided I was done. USA Home Buyers bought the place tenant-occupied. Closed in twelve days. I'm out of the landlord business.",
    "name": "Robert T.",
    "location": "Old West Urbana, IL",
    "situation": "Tired Landlord — Student Rental Exit",
    "date": "February 2026"
  },
  {
    "quote": "Tenure-track couple, both of us got offers in different states. We had four weeks to figure out the Champaign house before our start dates. No time for an agent, inspections, back-and-forth. USA Home Buyers had a written offer the next day. We closed in ten days. Made both start dates.",
    "name": "Dr. Priya N.",
    "location": "Campustown area, Champaign IL",
    "situation": "Faculty Relocation — Dual Tenure Offer",
    "date": "January 2026"
  },
  {
    "quote": "Tornado touched down two blocks away in June and our fence, garage, and back half of the roof were destroyed. Insurance took three weeks to send someone. USA Home Buyers was there in two days, made a fair cash offer accounting for the damage, and closed while we were still arguing with the insurance adjuster. The settlement check was mine to keep.",
    "name": "Bernard O.",
    "location": "Southeast Champaign, IL",
    "situation": "Storm Damage — Tornado",
    "date": "July 2025"
  },
  {
    "quote": "I retired from Carle Hospital after thirty-three years as a nurse and decided to move to Arizona to be near my son. My house in Lincolnwood had been good to me but it needed some work I wasn't willing to do. USA Home Buyers made an offer the day after we spoke. I was in Tucson six weeks later.",
    "name": "Helen S.",
    "location": "Lincolnwood, Urbana IL",
    "situation": "Downsizing — Retirement Move",
    "date": "February 2025"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '~46-59 days (DOM + close)' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required on older C-U stock' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$11,500-$13,800 on county median)' },
  { label: 'IL transfer tax (state + county)', cashBuyer: 'We cover everything', traditional: '$300 on $200K sale (0.15% combined)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '68-76% of FMV', traditional: '85-92% after all costs (well-maintained only)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Champaign-Urbana IL?',
    answer: 'USA Home Buyers can close in as few as 7 days in Champaign, Urbana, and throughout Champaign County. We send a written cash offer within 24 hours of your inquiry. Illinois uses judicial foreclosure under 735 ILCS 5/15-1101 — once a lender files in Champaign County Circuit Court at 101 E. Main Street, Urbana IL 61802 (the county seat is Urbana, not Champaign), the process typically runs 12-16 months. Selling before the auction preserves whatever equity remains. Call (888) 274-5006.',
  },
  {
    question: 'How much will you pay for my Champaign-Urbana house?',
    answer: 'According to Zillow (Feb 2026), the Champaign-Urbana Metro ZHVI is $226,978 (+5.0% YoY); Champaign city ZHVI is $199,076 (+3.3%); Urbana city ZHVI is $168,903 (+4.8%). Per Redfin (Feb 2026), the Champaign County median sale price is $230,000 (+4.3% YoY). Cash offers typically run 68-76% of fair market value depending on condition, location, and liens. We cover all closing costs — Illinois state transfer tax ($0.50/$500) plus Champaign County transfer tax ($0.25/$500), no municipal RETT in either city.',
  },
  {
    question: 'What is the real estate transfer tax when selling in Champaign-Urbana?',
    answer: 'The combined transfer tax stack is $300 on a $200,000 sale (0.15%). That breaks down as: $200 IL state (35 ILCS 200/31-10 at $0.50/$500) + $100 Champaign County ($0.25/$500 per 55 ILCS 5/5-1031) + $0 Champaign city municipal + $0 Urbana city municipal (both ATG-404 confirmed). Important note: the Champaign County Clerk website states "1.5%" — that is a decimal-point typo on the official site. The correct rate is 0.15%, confirmed by the Clerk\'s own "2/3 state, 1/3 county" math. When you sell to USA Home Buyers, we cover all closing costs.',
  },
  {
    question: 'Why is the county seat in Urbana, not Champaign?',
    answer: 'Urbana is the county seat of Champaign County — all county courts, the Circuit Clerk, probate, and property recording are in Urbana at the Champaign County Courthouse (101 E. Main Street, Urbana IL 61802) and the County Clerk/Recorder (1776 E. Washington Street, Urbana IL 61802). This surprises many people because Champaign is the larger, better-known city. But for probate filings, foreclosure proceedings, and deed recording, the address is always Urbana.',
  },
  {
    question: 'What areas in Champaign County do you buy in?',
    answer: 'All of Champaign County. In Champaign: Campustown, Southwest Champaign, Stone Creek/Savoy area, Robeson Woods, Presidents Neighborhoods, Country Fair/Neil Street corridor, Lincolnshire/Pheasant Ridge. In Urbana: University District, Old West Urbana, Lincoln Square/Downtown Urbana, Crystal Lake Park, Dodds Park/South Urbana, Busey Woods/Carle Hospital area. Also Savoy, Rantoul, Mahomet, Tolono, and all outlying Champaign County communities. Call (888) 274-5006 if unsure whether we serve your address.',
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: 'No. Champaign-Urbana\'s housing stock ranges from 1920s-30s Prairie Style and Tudor Revival homes near the UIUC campus, to postwar ranches on the periphery, to purpose-built student housing in Campustown. Pre-1940 homes in the University District and Old West Urbana frequently have deferred maintenance, outdated wiring, and issues that disqualify them for FHA or conventional financing. We buy in any condition. Leave whatever you don\'t want behind.',
  },
];

export default function ChampaignUrbanaILMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Champaign-Urbana IL',
    description: 'Step-by-step process for selling your Champaign or Urbana IL home for cash',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Champaign or Urbana property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours — no obligation.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for your schedule.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at a Champaign County title company of your choice, walk away with your cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[champaignUrbanaLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1200px)" srcSet="/images/optimized/champaign-urbana-il-hero-1200.jpg" />
          <source media="(min-width: 1080px)" srcSet="/images/optimized/champaign-urbana-il-hero-1080.jpg" />
          <source media="(min-width: 828px)" srcSet="/images/optimized/champaign-urbana-il-hero-828.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/champaign-urbana-il-hero-640.jpg"
            alt="Champaign-Urbana IL neighborhood near UIUC — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Illinois Cash Home Buyers — Champaign County (RDC Rank #77)</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Champaign-Urbana IL — Cash Offer in 24 Hours
            </h1>
            <a
              href="tel:+18882745006"
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Champaign and Urbana IL — UIUC faculty relocations, tired student-rental landlords, inherited estates, foreclosure situations, divorce sales. Written cash offer in 24 hours, close in 7-14 days. According to Zillow (Feb 2026), Champaign-Urbana Metro ZHVI is $226,978 (+5.0% YoY); Champaign city $199,076; Urbana city $168,903. Per Redfin (Feb 2026), Champaign County median sale price is $230,000 (+4.3%). Transfer tax: $300 on $200K (0.15% combined state + county — no municipal RETT). We cover all closing costs. Call (888) 274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses throughout Champaign and Urbana — Campustown rentals, University District estates, Southwest Champaign faculty homes, Urbana working-class neighborhoods. Any condition, any situation.
            </p>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Champaign-Urbana Cash Offer"
              subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs."
              sourcePage="/markets/champaign-urbana-il"
            />
          </div>
        </div>
      </section>

        <VideoEmbed
        src="/videos/champaign-urbana-il/landing.mp4"
        title="Sell My House Fast Champaign-Urbana IL — USA Home Buyers"
        poster="/videos/champaign-urbana-il/landing-poster.jpg"
        subtitle="Cash offers for Champaign, Urbana, and Champaign County homes — any condition"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
        📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
        Need to sell your house fast in Champaign-Urbana, Illinois? USA Home Buyers purchases homes as-is for cash throughout Champaign County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call 888-274-5006.
        </div>
        </details>



      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Champaign-Urbana IL Real Estate Market — What Sellers Need to Know in 2026
          </h2>
          <p className="text-gray-700 mb-4">
            Champaign-Urbana is the most distinctive housing market in downstate Illinois. The University of Illinois Urbana-Champaign — 57,000 students, the state's flagship land-grant university — functions as a gravity well around which everything else orbits. According to UIUC (illinois.edu), UIUC is the largest employer in Champaign County by a wide margin, with 6,000-7,000 faculty and academic staff plus thousands of civil service employees. The Research Park on Champaign's southwest side adds 3,000+ private-sector tech workers from 100+ companies including State Farm's innovation lab, Abbott, Caterpillar Digital, and Sandia National Laboratories affiliates.
          </p>
          <p className="text-gray-700 mb-4">
            This creates a housing market with two distinct buyer-seller profiles that don't exist anywhere else in Illinois. On one end: UIUC faculty selling tenure-era homes to move to new academic positions, Research Park tech workers whose funding ended, and grad-student couples who finished their PhDs and need to move fast. On the other end: tired landlords exiting student-rental portfolios in Campustown and Old West Urbana, Urbana working-class homeowners facing distress in South Urbana and Dodds Park, and out-of-state heirs managing UIUC faculty estates from across the country.
          </p>
          <p className="text-gray-700 mb-4">
            The dual-city geography matters for sellers to understand. Champaign and Urbana are separate incorporated cities sharing the UIUC campus and a unified housing market. Per Redfin (Feb 2026), Champaign city median sale price is $243,000 while Urbana city is $175,000 — reflecting fundamentally different housing stocks and demand profiles within the same metro. Critically: the county seat is Urbana. All probate filings, foreclosure proceedings, deed recording, and county-level legal matters go to the Champaign County Courthouse at 101 E. Main Street, Urbana IL 61802. Not Champaign.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Value</th>
                  <th className="text-left p-3">Source / Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Metro ZHVI (Champaign-Urbana MSA)</td><td className="p-3">$226,978 (+5.0% YoY)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Champaign city ZHVI</td><td className="p-3">$199,076 (+3.3% YoY)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Urbana city ZHVI</td><td className="p-3">$168,903 (+4.8% YoY)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Champaign County Median Sale Price</td><td className="p-3">$230,000 (+4.3% YoY)</td><td className="p-3 text-gray-500">Redfin (Feb 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Champaign city Median Sale Price</td><td className="p-3">$243,000 (+2.9% YoY)</td><td className="p-3 text-gray-500">Redfin (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">RDC Hotness Rank</td><td className="p-3">#77 nationally (Champaign-Urbana MSA)</td><td className="p-3 text-gray-500">Realtor.com (2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">FRED Listing Price (Sep 2025)</td><td className="p-3">$272,450</td><td className="p-3 text-gray-500">FRED MEDLISPRI16580</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax (state + county)</td><td className="p-3">$300 on $200K sale (0.15%) — no municipal RETT</td><td className="p-3 text-gray-500">35 ILCS 200/31-10; 55 ILCS 5/5-1031</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — 735 ILCS 5/15-1101 (12-16 mos typical)</td><td className="p-3 text-gray-500">IL Mortgage Foreclosure Law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Champaign Co. Circuit Court, 101 E. Main St., Urbana IL 61802</td><td className="p-3 text-gray-500">6th Judicial Circuit</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">What this means for C-U sellers: the market is healthy and modestly appreciating. But a significant share of the housing stock — UIUC-adjacent homes built in the 1920s-1940s, student rental properties in Campustown, Urbana working-class neighborhoods — has deferred maintenance or condition issues that conventional lenders flag. A 5-6% agent commission on a $230,000 county median runs $11,500-$13,800. On lower-priced Urbana stock, that's a meaningful portion of the sale price.</p>
        </section>

        <SituationLinks
          heading="We Buy Houses in Champaign-Urbana IL in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/champaign-urbana-il/inherited-property', description: 'UIUC faculty estates, out-of-state heirs — we work with Champaign County Circuit Court Probate timelines' },
            { label: 'Going Through Divorce', href: '/markets/champaign-urbana-il/divorce-sale', description: 'One offer, one closing — equitable distribution without the delay under 750 ILCS 5/503' },
            { label: 'Facing Foreclosure', href: '/markets/champaign-urbana-il/foreclosure', description: 'IL judicial foreclosure (735 ILCS 5/15-1101) — sell before the Champaign County auction' },
            { label: 'Probate Sale', href: '/markets/champaign-urbana-il/probate', description: 'We work with Champaign County Circuit Court Probate cases — 101 E. Main St., Urbana' },
            { label: 'Tenant-Occupied Property', href: '/markets/champaign-urbana-il/tenant-occupied', description: 'Tired of student-rental turnover? We buy with tenants in place — no eviction required' },
            { label: 'Code Violations', href: '/markets/champaign-urbana-il/code-violations', description: 'Champaign or Urbana open violations — separate city codes, we buy anyway' },
            { label: 'Fire Damage', href: '/markets/champaign-urbana-il/fire-damage', description: 'Fire or smoke damage in Champaign-Urbana? We purchase as-is, no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Champaign-Urbana Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Champaign-Urbana IL
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
        </section>

        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Champaign-Urbana Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including IL state + Champaign County transfer tax."
            sourcePage="/markets/champaign-urbana-il"
          />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Champaign-Urbana Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Champaign County IL
          </h2>
          <p className="text-gray-700 mb-4">
            Our Champaign coverage includes the entire city — Campustown and the Green Street corridor adjacent to UIUC, Southwest Champaign and the Research Park area (Stone Creek, Savoy), Robeson Woods and Presidents Neighborhoods in central Champaign, Country Fair and the Neil Street corridor on the west side, and Lincolnshire/Pheasant Ridge in the northeast.
          </p>
          <p className="text-gray-700 mb-4">
            In Urbana — the county seat where all legal proceedings are filed — we cover the University District adjacent to UIUC's east campus, Old West Urbana with its pre-war housing stock, Downtown Urbana and Lincoln Square, Crystal Lake Park, Dodds Park and South Urbana, and the Busey Woods and Carle Hospital corridor.
          </p>
          <p className="text-gray-700 mb-4">
            Beyond the two cities, we serve Savoy, Rantoul, Mahomet, Tolono, St. Joseph, Ogden, and all Champaign County communities. Call (888) 274-5006 if you're unsure whether we serve your address.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Campustown', 'Southwest Champaign', 'Stone Creek', 'Robeson Woods', 'Presidents Neighborhoods', 'Country Fair', 'Lincolnshire', 'University District Urbana', 'Old West Urbana', 'Downtown Urbana', 'Crystal Lake Park', 'Dodds Park', 'South Urbana', 'Savoy', 'Rantoul', 'Mahomet'].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">The UIUC Factor — Why This Market Is Different</h2>
          <p className="text-gray-700 text-sm mb-3">UIUC creates a seasonal motivated-seller window (May-August) as departing faculty and finishing PhD students list before the academic year starts. The 57,000-student enrollment creates sustained rental demand regardless of broader economic cycles. Research Park volatility — when startup funding ends or a company is acquired — produces the occasional tech-worker motivated seller in Savoy and Southwest Champaign.</p>
          <Link href="/markets/champaign-urbana-il/market-report" className="text-brand-primary hover:underline font-medium text-sm">See full Champaign-Urbana market data report →</Link>
        </section>

        <section className="my-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Illinois Context</h2>
          <p className="text-gray-700 text-sm mb-3">Champaign-Urbana is our third Illinois market, following Springfield and Rockford. For statewide Illinois legal context — foreclosure law, probate procedures, transfer tax statutes — see our Illinois state guide.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline font-medium text-sm">Illinois Seller's Legal Guide →</Link>
            <Link href="/markets/springfield-il" className="text-brand-primary hover:underline font-medium text-sm">Springfield IL Market →</Link>
            <Link href="/markets/rockford-il" className="text-brand-primary hover:underline font-medium text-sm">Rockford IL Market →</Link>
          </div>
        </section>

        <BlogClusterLinks marketSlug="champaign-urbana-il" cityName="Champaign-Urbana" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Champaign-Urbana or Champaign County home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/champaign-urbana-il" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Champaign-Urbana Home?" sourcePage="/markets/champaign-urbana-il" />
        </section>
      </div>
    </>
  );
}
