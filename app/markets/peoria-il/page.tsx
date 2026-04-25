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
  title: 'Sell My House Fast Peoria IL — Cash Offer in 24 Hours',
  description:
    'We buy houses in Peoria IL for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Peoria County. Call 888-274-5006.',
  alternates: { canonical: `${SITE_URL}/markets/peoria-il` },
  openGraph: {
    images: [{ url: '/images/peoria-il-hero.jpg', width: 1200, height: 630, alt: 'Peoria IL home — Sell Your House Fast for Cash' }],
  },
};

const peoriaILLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'RealEstateAgent'],
  '@id': `${SITE_URL}/#business-peoria-il`,
  name: 'USA Home Buyers — Peoria IL',
  description: 'Cash home buyers serving Peoria IL and Peoria County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
  url: `${SITE_URL}/markets/peoria-il`,
  telephone: '+18882745006',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Peoria',
    addressRegion: 'IL',
    postalCode: '61602',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 40.6936, longitude: -89.5890 },
  areaServed: [
    { '@type': 'City', name: 'Peoria', sameAs: 'https://en.wikipedia.org/wiki/Peoria,_Illinois' },
    { '@type': 'City', name: 'Peoria Heights' },
    { '@type': 'City', name: 'East Peoria' },
    { '@type': 'City', name: 'Dunlap' },
    { '@type': 'City', name: 'Chillicothe' },
    { '@type': 'County', name: 'Peoria County' },
  ],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  priceRange: '$$',
  image: `${SITE_URL}/images/peoria-il-hero.jpg`,
};

const TESTIMONIALS = [
  {
    "quote": "My father worked at Caterpillar for thirty-one years and owned his East Bluff home outright. When he passed, four of us siblings had to decide what to do with a house that needed a new roof, electrical updates, and had been sitting empty for eight months. USA Home Buyers gave us a written offer two days after we called. We closed in sixteen days.",
    "name": "Loretta B.",
    "location": "East Bluff, Peoria IL",
    "situation": "Inherited Estate — Caterpillar-Era Retiree",
    "date": "March 2026"
  },
  {
    "quote": "I ran a food truck for five years and COVID basically ended that. The lender filed in Peoria County Circuit Court and I got a notice of the court date. USA Home Buyers explained where the timeline was and gave me a written offer in forty-eight hours. We closed in fifteen days before the judgment. I came out with $39,000.",
    "name": "Darnell F.",
    "location": "Peoria Heights, IL",
    "situation": "Pre-Foreclosure — Court Filing",
    "date": "April 2025"
  },
  {
    "quote": "We both worked at OSF Saint Francis. The divorce was final but neither of us could buy out the other and neither of us wanted to stay in the house. Our attorneys told us we'd need a standard listing and sixty to ninety days minimum. USA Home Buyers gave us one written number. We agreed in one phone call, closed in three weeks.",
    "name": "Renee and David H.",
    "location": "Richwoods, Peoria IL",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "January 2026"
  },
  {
    "quote": "I owned a rental on McClure Avenue for nine years. The last tenants left six months ago and the city has cited me twice for exterior violations since — mowing, boarded window, the usual. I never planned to be a long-distance landlord from Iowa City. USA Home Buyers bought it as-is, violations and all. Eleven days.",
    "name": "Maria V.",
    "location": "Moss-Bradley, Peoria IL",
    "situation": "Rental Property — Code Violations",
    "date": "July 2025"
  },
  {
    "quote": "Got a plant manager offer at a Caterpillar supplier in Nashville. I had five weeks. My North Peoria house was in decent shape but I couldn't do showings from Tennessee while I was starting a new job. USA Home Buyers closed ten days after I accepted the offer. I drove to Nashville with one less thing to think about.",
    "name": "Kevin S.",
    "location": "North Peoria, IL",
    "situation": "Relocation — Manufacturing Transfer",
    "date": "October 2025"
  },
  {
    "quote": "Balloon-frame construction from 1928. Kitchen fire spread to the back bedroom before they got it out. Insurance was offering me actual cash value — forty-two thousand dollars on a house that was worth ninety before the fire. I didn't want to fight a six-month insurance battle while paying property taxes on a gutted building. USA Home Buyers bought it in as-is condition, closed in twelve days.",
    "name": "Marcus T.",
    "location": "South Peoria, Peoria IL",
    "situation": "Fire-Damaged Home — Pre-1940 Balloon Frame",
    "date": "February 2026"
  },
  {
    "quote": "My husband retired from Methodist Medical Center and then his health declined fast. I needed the equity from the house to move both of us into continuing care. USA Home Buyers gave me a fair number and closed in eight days. We were both in care within a month.",
    "name": "Frances L.",
    "location": "Glen Oak, Peoria IL",
    "situation": "Downsizing — Health Transition",
    "date": "November 2025"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '44-59 days (DOM + 30-45 close)' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K on pre-1940 stock)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$7,000-$8,400 on Peoria median)' },
  { label: 'IL + County + City transfer tax', cashBuyer: 'We cover all closing costs', traditional: '$800 total on $200K sale (state $200 + county $100 + city $500)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '65-75% of FMV', traditional: '85-92% after all costs (well-maintained only)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Peoria IL?',
    answer: 'USA Home Buyers closes in as few as 7 days in Peoria and throughout Peoria County. We send a written cash offer within 24 hours of your inquiry. According to Zillow (February 2026), homes in Peoria are pending in approximately 5 days in the entry-level segment — the cash-buyer market here is active. Call 888-274-5006.',
  },
  {
    question: 'What transfer taxes will I pay when selling my Peoria house?',
    answer: 'Peoria has a three-layer transfer tax stack — one of the few downstate Illinois cities with a municipal RETT. On a $200,000 sale: Illinois state tax ($0.50/$500) = $200; Peoria County ($0.25/$500) = $100; Peoria City municipal ($2.50/$1,000, effective March 4, 2025) = $500. Total: $800. The city stamp is purchased at Peoria City Hall, 419 Fulton St. The county/state stamps are purchased at the Peoria County Clerk, 324 Main St., Room G4. When you sell to USA Home Buyers, we cover all closing costs including this full three-layer stack.',
  },
  {
    question: 'How much will you pay for my Peoria IL house?',
    answer: 'According to Zillow (February 2026), Peoria\'s Home Value Index is $115,649 (+3.7% YoY). Per Redfin (January 2026), the Peoria city median sale price is $139,000 (+8.2% YoY). Cash offers typically run 65-75% of fair market value depending on condition, location, and liens. Entry-level South Side and East Bluff homes — the segment with the highest distressed inventory — commonly receive offers in the $50,000-$95,000 range. We cover all closing costs including the $500 Peoria City transfer tax. Call 888-274-5006.',
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: 'No. Peoria\'s housing stock is the oldest of any major downstate Illinois market — 24.3% of all housing units were built before 1940 (Source: biggestuscities.com). Balloon-frame construction in South Peoria and East Bluff is common. We buy pre-1940 bungalows, fire-damaged properties, homes with open code violations, vacant structures, and properties in probate or foreclosure — all as-is. Leave whatever you don\'t want behind.',
  },
  {
    question: 'What neighborhoods in Peoria do you buy in?',
    answer: 'All of Peoria city and Peoria County. That includes Richwoods, Kellar Heights, Knoxville Avenue Corridor, Bradley Park/Northmoor, South Peoria/Manual Area, East Bluff, Taft Homes area, Sheridan Village, Grand View Drive, and Peoria Heights (independent village). We also serve Dunlap, Chillicothe, Washington, Morton, and other Peoria County communities.',
  },
  {
    question: 'How does foreclosure work in Peoria County IL?',
    answer: 'Illinois is a 100% judicial foreclosure state under 735 ILCS 5/15-1101 et seq. Every Peoria County foreclosure is filed at the Peoria County Circuit Court, 10th Judicial Circuit, 324 Main Street, Peoria, IL 61602, phone 309-672-6000. The typical timeline from first missed payment to completed foreclosure sale is 12-18 months. Peoria County Sheriff conducts sales on Mondays at 8:30 AM and Wednesdays at 1:00 PM in Courtroom 203 at 324 Main Street. Borrowers have a 3-month reinstatement right under 735 ILCS 5/15-1602 and a 7-month redemption period under 735 ILCS 5/15-1603. Call 888-274-5006 immediately if you\'re behind on payments.',
  },
  {
    question: 'What is the probate process for inherited Peoria property?',
    answer: 'Inherited Illinois real estate must go through formal probate at Peoria County Circuit Court, Civil Division, 324 Main Street, Room G-04, Peoria, IL 61602, phone 309-672-6000. The small estate affidavit under 755 ILCS 5/25-1 applies only to personal property under $150,000 — real property always requires formal probate. Under independent administration (755 ILCS 5/28-1), an executor can sell estate real estate without court approval on each transaction. We can have a written offer ready before you even file the probate petition.',
  },
  {
    question: 'What areas near Peoria do you buy in?',
    answer: 'All of Peoria County. That includes Peoria city proper (Richwoods, South Peoria, East Bluff, Knoxville Ave Corridor, Bradley Park, Grand View Drive area), the independent village of Peoria Heights, Dunlap, Chillicothe, Washington, Morton, and all unincorporated Peoria County communities. Call 888-274-5006 if unsure whether we serve your address.',
  },
];

export default function PeoriaILMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Peoria IL',
    description: 'Step-by-step process for selling your Peoria or Peoria County home for cash',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Peoria or Peoria County property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours — no obligation.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for your schedule.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at a Peoria title company of your choice, walk away with your cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[peoriaILLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/peoria-il-hero-640.jpg 640w, /images/optimized/peoria-il-hero-828.jpg 828w, /images/optimized/peoria-il-hero-1080.jpg 1080w, /images/optimized/peoria-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/peoria-il-hero-1200.jpg"
            alt="Peoria IL craftsman bungalow neighborhood on the bluff — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Illinois Cash Home Buyers — RDC Hotness Rank #29 (Peoria MSA)</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Peoria IL — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Peoria IL and throughout Peoria County — South Side bungalows, East Bluff ranches, Richwoods estates, Grand View Drive historics, Caterpillar-era retiree homes, inherited property, foreclosures, fire damage, divorce sales. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Zillow (February 2026), Peoria ZHVI is $115,649. We cover all closing costs including Peoria's three-layer $800 transfer tax stack. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Peoria IL, Peoria Heights, and all of Peoria County — any condition, any situation. No repairs, no agent fees, no waiting.
            </p>
            <a
              href="tel:+18882745006"
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Peoria IL Cash Offer"
              subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs including Peoria's city transfer tax."
              sourcePage="/markets/peoria-il"
            />
          </div>
        </div>
      </section>

        <VideoEmbed
        src="/videos/peoria-il/landing.mp4"
        title="Sell My House Fast Peoria IL — USA Home Buyers"
        poster="/videos/peoria-il/landing-poster.jpg"
        subtitle="Cash offers for Peoria and Peoria County homes — any condition"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
        📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
        Need to sell your house fast in Peoria, Illinois? USA Home Buyers purchases homes as-is for cash throughout Peoria County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call 888-274-5006.
        </div>
        </details>



      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Peoria IL Real Estate Market — What Sellers Need to Know in 2026
          </h2>
          <p className="text-gray-700 mb-4">
            Peoria is the county seat of Peoria County and the largest city on the Illinois River, with a population of 112,169 (2024 ACS estimate). Once the largest city in Illinois in the mid-20th century, Peoria's economy pivoted from heavy Caterpillar-anchored manufacturing toward a healthcare-education-logistics hybrid — a transition that shaped both the city's demographics and its housing market in ways that directly affect sellers today.
          </p>
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), Peoria's Home Value Index is $115,649 — among the lowest for any major Illinois metro, and less than half the statewide ZHVI of $282,909. Per Redfin (January 2026), the median sale price for Peoria city is $139,000, up 8.2% year-over-year despite a city population decline of approximately 1.2% since 2019. That combination — rising values despite population contraction — reflects strong investor and cash-buyer demand for Peoria's entry-level inventory.
          </p>
          <p className="text-gray-700 mb-4">
            The housing stock itself defines the market. Source: biggestuscities.com confirms that 24.3% of all Peoria housing units were built before 1940 — the highest percentage of any of the three Illinois markets in USA Home Buyers' portfolio. South Peoria, East Bluff, and the Manual area contain the densest concentrations of pre-war balloon-frame construction: 1910s–1930s workers' bungalows and two-stories originally built for Caterpillar and industrial employees. Many of these homes have deferred $60,000–$100,000 in maintenance over decades. They don't qualify for FHA or conventional financing. They need a cash buyer.
          </p>
          <p className="text-gray-700 mb-4">
            The Caterpillar HQ departure in 2017 — when Caterpillar moved its global headquarters from Peoria to Deerfield (a Chicago suburb) — removed a class of high-income executive buyers from the $300,000+ market segment. Caterpillar's manufacturing and engineering operations remain substantial in the Peoria area, but the executive professional housing demand that once supported above-$200K prices has softened. The cash-buyer opportunity is concentrated in the $30,000–$150,000 range where entry-level homes, distressed properties, probate estates, and pre-foreclosure acquisitions cluster.
          </p>
          <p className="text-gray-700 mb-4">
            OSF HealthCare (OSF Saint Francis Medical Center) and UnityPoint Health (Methodist Medical Center of Illinois) are now among the largest employers in the Peoria metro, alongside Bradley University. Healthcare worker demand supports a middle-market rental and entry-to-mid homeownership segment in the Kellar Heights and Knoxville Avenue corridor neighborhoods. For sellers, the presence of a stable healthcare employment base means motivated buyers exist — but so does a large inventory of competing distressed properties.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Peoria IL</th>
                  <th className="text-left p-3">Source / Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow Home Value Index (ZHVI)</td><td className="p-3">$115,649 (+3.7% YoY)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price (city)</td><td className="p-3">$139,000 (+8.2% YoY)</td><td className="p-3 text-gray-500">Redfin (Jan 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Median Sale Price (county)</td><td className="p-3">$163,000 (-1.4% YoY)</td><td className="p-3 text-gray-500">Redfin (Jan 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">FRED Listing Price/Sq Ft</td><td className="p-3">$104/sq ft</td><td className="p-3 text-gray-500">FRED (Feb 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Avg. Pending Timeline</td><td className="p-3">~5 days (entry-level segment)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Pre-1940 Housing Stock</td><td className="p-3">24.3%</td><td className="p-3 text-gray-500">biggestuscities.com</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">RDC Hotness Rank</td><td className="p-3">#29 (Peoria MSA)</td><td className="p-3 text-gray-500">Realtor.com</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer Tax (state + county + city)</td><td className="p-3">$800 total on $200K sale (0.40%)</td><td className="p-3 text-gray-500">35 ILCS 200/31-10; Peoria City Code §27-226</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — 735 ILCS 5/15-1101 (12-18 mos typical)</td><td className="p-3 text-gray-500">Illinois Mortgage Foreclosure Law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Peoria County Circuit Court, 324 Main St., 309-672-6000</td><td className="p-3 text-gray-500">10th Judicial Circuit</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Population (city)</td><td className="p-3">112,169 (declining trend)</td><td className="p-3 text-gray-500">2024 ACS Estimate</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">What this means for Peoria sellers: entry-level homes move fast (~5-day pending timeline), but the large volume of distressed inventory and the three-layer transfer tax create friction for conventional buyers. On a $139,000 city median home, a 5-6% agent commission runs $6,950-$8,340 before closing costs, the $800 transfer tax stack, and repair requests. At $115,649 ZHVI average, those costs represent a significant share of the sale price.</p>
        </section>

        <section className="my-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">⚠️ Peoria's Unique Three-Layer Transfer Tax</h2>
          <p className="text-gray-700 mb-3">
            Peoria City is one of only a handful of downstate Illinois cities with a confirmed municipal real estate transfer tax. On a $200,000 sale, sellers pay $800 total: $200 to the state, $100 to Peoria County, and $500 to the City of Peoria (at $2.50/$1,000, effective March 4, 2025, per Peoria City Code Article X, Section 27-226). The city stamp must be purchased at Peoria City Hall, 419 Fulton St. The state and county stamps are purchased separately at the Peoria County Clerk's office, 324 Main St. When you sell to USA Home Buyers, we cover all three layers — you pay zero at closing.
          </p>
          <Link href="/markets/peoria-il/market-report" className="text-brand-primary hover:underline font-medium text-sm">Full transfer tax breakdown in Peoria market report →</Link>
        </section>

        <SituationLinks
          heading="We Buy Houses in Peoria IL in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/peoria-il/inherited-property', description: 'Sell an inherited Peoria home — Caterpillar-era estates, South Side bungalows, Peoria County probate timelines' },
            { label: 'Going Through Divorce', href: '/markets/peoria-il/divorce-sale', description: 'One offer, one closing — equitable distribution under 750 ILCS 5/503, Peoria County Family Division' },
            { label: 'Facing Foreclosure', href: '/markets/peoria-il/foreclosure', description: 'IL judicial foreclosure — sell before the Peoria County sheriff\'s sale (Mon/Wed Courtroom 203)' },
            { label: 'Probate Sale', href: '/markets/peoria-il/probate', description: 'We work with Peoria County Circuit Court Probate, 10th Judicial Circuit, independent and supervised administration' },
            { label: 'Tenant-Occupied Property', href: '/markets/peoria-il/tenant-occupied', description: 'We buy with tenants in place — Bradley University rentals, Section 8, lease-survives-sale default' },
            { label: 'Code Violations', href: '/markets/peoria-il/code-violations', description: 'City of Peoria open violations, dangerous buildings, condemned structures — we buy anyway, as-is' },
            { label: 'Fire Damage', href: '/markets/peoria-il/fire-damage', description: 'Fire or smoke damage in Peoria? 24.3% pre-1940 balloon-frame stock — we purchase as-is, no cleanup required' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Peoria IL Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Peoria IL
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On the $139,000 Peoria city median, a 5-6% agent commission runs $6,950-$8,340. Add Peoria's three-layer transfer tax ($800 on a $200K sale), carrying costs during marketing, and repair requests on 24.3% pre-1940 housing stock. Balloon-frame construction, knob-and-tube wiring, and galvanized plumbing are common in South Peoria and East Bluff homes — exactly the conditions that flag FHA and conventional lenders. A cash offer eliminates the inspection contingency and repair negotiation entirely.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Peoria IL Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including Peoria's three-layer transfer tax."
            sourcePage="/markets/peoria-il"
          />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Peoria IL Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Peoria County IL
          </h2>
          <p className="text-gray-700 mb-4">
            Our Peoria coverage includes the entire city — Richwoods on the far north side with its forest views and top-rated schools, Kellar Heights and the Knoxville Avenue corridor where healthcare professionals commute to OSF Saint Francis and Methodist Medical, Bradley Park and Northmoor near Bradley University's campus with its active student rental market, South Peoria and the Manual area with the highest concentration of pre-1940 investor-grade inventory, the East Bluff neighborhood with its brick bungalows and motivated-seller profile, and the historic Grand View Drive corridor — the elevated bluff road that Theodore Roosevelt once called the world's most beautiful drive, overlooking the Illinois River valley.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the surrounding Peoria County communities — the independent village of Peoria Heights (Prospect Road arts district, $126K median), Dunlap to the north, Chillicothe, Washington, Morton, and all unincorporated Peoria County townships.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Richwoods', 'Kellar Heights', 'Knoxville Avenue', 'Bradley Park', 'Northmoor', 'South Peoria', 'East Bluff', 'Manual Area', 'Grand View Drive', 'Sheridan Village', 'Taft Homes Area', 'Peoria Heights', 'Dunlap', 'Chillicothe', 'Washington', 'Morton'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Peoria IL Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Richwoods ranch homes to South Peoria pre-war bungalows to Grand View Drive historic properties — we buy in every Peoria neighborhood and every Peoria County community.</p>
          <Link href="/markets/peoria-il/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See Peoria neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <section className="my-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Our Third Illinois Market</h2>
          <p className="text-gray-700 text-sm mb-3">Peoria is our third Illinois market, following Springfield and Rockford. For statewide Illinois legal context — transfer taxes, foreclosure law, probate procedures — see our Illinois state guide.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline font-medium text-sm">Illinois Seller's Legal Guide →</Link>
          </div>
        </section>

        <BlogClusterLinks marketSlug="peoria-il" cityName="Peoria" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Peoria IL or Peoria County home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/peoria-il" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Peoria IL Home?" sourcePage="/markets/peoria-il" />
        </section>
      </div>
    </>
  );
}
