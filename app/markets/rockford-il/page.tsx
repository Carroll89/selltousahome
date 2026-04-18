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
  title: 'Sell My House Fast Rockford IL',
  description:
    'We buy houses in Rockford IL for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Winnebago County. Call 888-440-5250.',
  alternates: { canonical: `${SITE_URL}/markets/rockford-il` },
  openGraph: {
    images: [{ url: '/images/rockford-il-hero.jpg', width: 1200, height: 630, alt: 'Rockford IL home — Sell Your House Fast for Cash' }],
  },
};

const rockfordILLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'RealEstateAgent'],
  '@id': `${SITE_URL}/#business-rockford-il`,
  name: 'USA Home Buyers — Rockford IL',
  description: 'Cash home buyers serving Rockford IL and Winnebago County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
  url: `${SITE_URL}/markets/rockford-il`,
  telephone: '+18884405250',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rockford',
    addressRegion: 'IL',
    postalCode: '61101',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 42.2594, longitude: -89.0644 },
  areaServed: [
    { '@type': 'City', name: 'Rockford', sameAs: 'https://en.wikipedia.org/wiki/Rockford,_Illinois' },
    { '@type': 'City', name: 'Loves Park' },
    { '@type': 'City', name: 'Machesney Park' },
    { '@type': 'City', name: 'Roscoe' },
    { '@type': 'City', name: 'Rockton' },
    { '@type': 'City', name: 'Cherry Valley' },
    { '@type': 'City', name: 'Belvidere' },
    { '@type': 'County', name: 'Winnebago County' },
  ],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  priceRange: '$$',
  image: `${SITE_URL}/images/rockford-il-hero.jpg`,
};

const TESTIMONIALS = [
  {
    quote: "My mother's bungalow in Churchill Grove sat vacant for eight months after she passed. The knob-and-tube wiring alone would have cost $18,000 to bring up to code — before touching the kitchen or the roof. I called USA Home Buyers on a Tuesday, had a written number in my email Wednesday morning, and closed seventeen days later. They handled the cleanout. I never even had to come back to Rockford from Columbus. Couldn't have been simpler.",
    name: 'Patricia K.',
    location: 'Churchill Grove, Rockford IL',
    situation: 'Inherited Estate — Pre-War Bungalow',
    date: 'March 2026',
  },
  {
    quote: "I'd worked at the Chrysler supplier in Belvidere for nineteen years when the plant shut down. Then a job offer came in from a manufacturer in Indianapolis — good opportunity, but I had four weeks to figure out the house. No time for an agent, no time for inspections and back-and-forth. USA Home Buyers gave me a real number the next day. We closed in ten days. I made the Indianapolis start date with a week to spare.",
    name: 'Dennis W.',
    location: 'Midtown, Rockford IL',
    situation: 'Manufacturing Relocation — Belvidere Plant Closure',
    date: 'February 2026',
  },
  {
    quote: "Signal Hill house, divorce situation, both of us needing the proceeds to move forward. Our attorneys kept warning us that contested litigation over the house would drag on for months. We got a single written offer from USA Home Buyers. My ex and I agreed on the number in one phone call — didn't need a judge. Closed three weeks later. That one decision probably saved us six months of back-and-forth.",
    name: 'Marlene O.',
    location: 'Signal Hill, Rockford IL',
    situation: 'Divorce Sale — Winnebago County',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '44-59 days (14 DOM + 30-45 close)' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg on pre-1970 stock)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$8,500-$10,200 on Rockford median)' },
  { label: 'IL transfer tax (state + county)', cashBuyer: 'We cover everything', traditional: '$0.75/$500 combined — seller pays ~$255 on median' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '65-75% of FMV', traditional: '85-92% after all costs (well-maintained only)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Rockford IL?',
    answer: 'USA Home Buyers can close in as few as 7 days in Rockford and throughout Winnebago County. We send a written cash offer within 24 hours of your inquiry. Illinois is a judicial foreclosure state under 735 ILCS 5/15-1101 — once a lender files in Winnebago County Circuit Court at 400 West State Street, the process typically runs 14-20 months (not the 24-36 months you may have heard about from Cook County cases). If you\'re behind on payments, selling before the foreclosure auction preserves whatever equity remains. Call 888-440-5250.',
  },
  {
    question: 'How much will you pay for my Rockford IL house?',
    answer: 'Cash offers for Rockford homes typically run 70-78% of fair market value, depending on condition, location, and any liens. Zillow\'s Home Value Index for Rockford is $142,859 (+4.8% YoY, February 2026). Redfin puts the March 2026 median sale price at $170,000 (+17.2% YoY). A typical cash offer on a Churchill Grove craftsman or Signal Hill ranch runs $99,000-$111,000 on a home at ZHVI. We cover all closing costs including Illinois state transfer tax and Winnebago County transfer tax — total $0.75/$500 combined (no municipal RETT in Rockford).',
  },
  {
    question: 'What is the transfer tax when selling a house in Rockford IL?',
    answer: 'Illinois charges a state real estate transfer tax of $0.50 per $500 of consideration under 35 ILCS 200/31-10. Winnebago County adds $0.25 per $500 under 55 ILCS 5/5-1031. Combined: $0.75 per $500 (0.15% of sale price), seller pays. The City of Rockford does NOT impose a municipal real estate transfer tax — confirmed: ATG\'s tax-ordinance directory returns no Rockford entry, and Rockford\'s Municode has no RETT chapter. On the $170,000 Redfin median: $255.00 total. When you sell to USA Home Buyers, we cover all closing costs — you pay nothing at closing.',
  },
  {
    question: 'How does foreclosure work in Winnebago County IL?',
    answer: 'Illinois is a 100% judicial foreclosure state under the Illinois Mortgage Foreclosure Law, 735 ILCS 5/15-1101 et seq. Every foreclosure must go through Winnebago County Circuit Court — 17th Judicial Circuit, 400 West State Street, Rockford IL 61101, phone 815-319-4500. The typical Winnebago County timeline from first missed payment to completed foreclosure sale is 14-20 months. That\'s longer than Springfield/Sangamon County (12-15 months) due to higher circuit volume, but far shorter than Cook County (24-36 months). Don\'t confuse Rockford\'s timeline with Chicago\'s. Borrowers have a 3-month reinstatement right (735 ILCS 5/15-1602) and a 7-month redemption period (735 ILCS 5/15-1603). Call 888-440-5250 immediately if you\'re behind on payments.',
  },
  {
    question: 'What areas near Rockford do you buy in?',
    answer: 'All of Winnebago County. That includes Rockford proper (Churchill Grove, Midtown, Signal Hill, Haight Historic District, Jackson Oaks, East Rockford, Northeast Rockford, West State corridor — ZIPs 61101 through 61109, 61112, 61114), Loves Park, Machesney Park, Roscoe, Rockton, Cherry Valley, New Milford, Winnebago Village, and Pecatonica. We also serve adjacent Boone County (Belvidere area) and southern Ogle County. If you\'re unsure whether we serve your address, call 888-440-5250.',
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: 'No. Rockford\'s housing stock is predominantly pre-1970 Rust Belt industrial-era construction — Craftsman bungalows in Churchill Grove and Midtown with original knob-and-tube wiring, pre-war two-flats on the West State corridor, working-class ranches in Signal Hill and Jackson Oaks, Victorian-era homes in the Haight Historic District dating to the 1840s. Many don\'t qualify for conventional or FHA financing in their current state. We buy in any condition. Leave whatever you don\'t want behind.',
  },
  {
    question: 'Is Rockford IL pricing similar to Chicago?',
    answer: 'No — and this is a common misconception worth correcting. Rockford is 90 miles west of Chicago. The median sale price in Rockford is $170,000 (Redfin, March 2026), compared to Chicago area medians that often run $300,000-$400,000+. The Rockford market is its own distinct metro (CBSA 40420, 337K metro population). Rockford\'s RDC hotness score of 93.645 puts it at #11 nationally — competitive for its price range, but independent of Cook County dynamics. Foreclosure timelines, transfer taxes, and investor pricing are all distinct from the Chicago market.',
  },
  {
    question: 'How does selling an inherited Rockford house work if it\'s in probate?',
    answer: 'Inherited Illinois real estate must go through formal probate at Winnebago County Circuit Court, Probate Division — 400 West State Street, Rockford IL 61101, phone 815-319-4500, 17th Judicial Circuit. The small estate affidavit under 755 ILCS 5/25-1 applies only to personal property (threshold raised to $150,000 by 2025 amendment) — real property always requires formal probate regardless of estate size. Under independent administration (755 ILCS 5/28-1), an executor can sell estate real estate without court approval on each transaction, typically within 6-9 months total. We can have a written offer ready before you even file the probate petition.',
  },
];

export default function RockfordILMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Rockford IL',
    description: 'Step-by-step process for selling your Rockford or Winnebago County home for cash',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Rockford or Winnebago County property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours — no obligation.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for your schedule.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at a Rockford IL title company of your choice, walk away with your cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[rockfordILLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/rockford-il-hero-640.jpg 640w, /images/optimized/rockford-il-hero-828.jpg 828w, /images/optimized/rockford-il-hero-1080.jpg 1080w, /images/optimized/rockford-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/rockford-il-hero-1200.jpg"
            alt="Rockford IL craftsman bungalow neighborhood — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Illinois Cash Home Buyers — Market #11 Nationally (RDC March 2026)</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Rockford IL — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Rockford IL and throughout Winnebago County — Midtown bungalows, Churchill Grove craftsmans, Signal Hill ranches, Haight Historic District Victorians, estate sales, foreclosures, divorce situations. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no agent fees. Rockford Zillow ZHVI $142,859 (+4.8% YoY, Feb 2026); Redfin median sale price $170,000 (+17.2% YoY). We cover all closing costs — IL state transfer tax ($0.50/$500) plus Winnebago County ($0.25/$500), no municipal RETT. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Rockford IL, Loves Park, Machesney Park, and all of Winnebago County — any condition, any situation. No repairs, no agent fees, no waiting.
            </p>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
      <VideoEmbed
        src="/videos/rockford-il/landing.mp4"
        title="Sell My House Fast Rockford IL — USA Home Buyers"
        poster="/videos/rockford-il/landing-poster.jpg"
        subtitle="Cash offers for Rockford and Winnebago County homes — any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          If you need to sell your house fast in Rockford, Illinois — you've found the right team. We're USA Home Buyers, and we purchase houses as-is, for cash, throughout Winnebago County. No agents. No fees. No repairs needed. Written cash offer within 24 hours, close in as few as seven days. Call us at 888-440-5250.
        </div>
      </details>
            <CashOfferForm
              variant="hero"
              headline="Get Your Rockford IL Cash Offer"
              subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs."
              sourcePage="/markets/rockford-il"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Rockford IL Real Estate Market — What Sellers Need to Know in 2026
          </h2>
          <p className="text-gray-700 mb-4">
            Rockford is Illinois's fifth-largest city, Winnebago County's seat, and a 147,521-person Rust Belt metro 90 miles west of Chicago. Realtor.com ranked Rockford the #11 hottest housing market in the country as of March 2026 (hotness score 93.645, median active listing days on market 34.5 days) — a number that would surprise anyone who remembers Rockford's industrial decline in the 1980s and 1990s. The recovery is real, and it's driven by a combination of factors specific to this market.
          </p>
          <p className="text-gray-700 mb-4">
            Rockford built its economy on precision manufacturing — the city was once known as the screw capital of the world, with Illinois Tool Works and dozens of fastener, furniture, and machine-tool companies employing generations of working-class families. That industrial heritage created a distinctive housing stock: pre-war Craftsman bungalows in Churchill Grove and Midtown, working-class two-flats along West State Street, modest post-war ranches in Signal Hill and Jackson Oaks, and Victorian-era homes in the Haight Village Historic District dating back to the 1840s. The majority of Rockford's residential stock was built before 1970.
          </p>
          <p className="text-gray-700 mb-4">
            That housing stock is what drives the cash-buyer market here. Pre-1970 construction frequently carries original knob-and-tube wiring, galvanized plumbing, and foundation issues from Rock River alluvial soil settling — all red flags for FHA and conventional lenders. The Redfin compete score of 89/100 tells you that retail-ready homes move fast (median 14 days on market for sold homes), but the operative phrase is "retail-ready." Many Rockford homes aren't, and those require a cash buyer who doesn't need financing contingencies.
          </p>
          <p className="text-gray-700 mb-4">
            The manufacturing closure cycle also creates a steady distressed-seller pipeline that's distinct from Springfield's government-worker dynamics. When a supplier to the former Chrysler FCA plant in adjacent Belvidere closes, or a factory worker on a fixed union pension faces a major repair bill on a 1940s bungalow they inherited from their parents, the decision to sell for cash rather than fund a renovation they can't afford is straightforward. USA Home Buyers serves exactly this seller profile.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Rockford IL</th>
                  <th className="text-left p-3">Source / Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow Home Value Index (ZHVI)</td><td className="p-3">$142,859 (+4.8% YoY)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price</td><td className="p-3">$170,000 (+17.2% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per Square Foot</td><td className="p-3">$109 (+10.1% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median Days on Market (sold)</td><td className="p-3">14 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">RDC Active Listing DOM</td><td className="p-3">34.5 days (Rank #11 nationally)</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">89/100 — Very Competitive</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-List Ratio</td><td className="p-3">100.2% (+2.6 pt YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">IL Transfer Tax (state + county)</td><td className="p-3">$0.75 per $500 (0.15%) — seller pays; no municipal RETT</td><td className="p-3 text-gray-500">35 ILCS 200/31-10; 55 ILCS 5/5-1031</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — 735 ILCS 5/15-1101 (14-20 mos typical)</td><td className="p-3 text-gray-500">Illinois Mortgage Foreclosure Law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Winnebago Co. Circuit Court, 400 W State St, 815-319-4500</td><td className="p-3 text-gray-500">17th Judicial Circuit</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">What this means for Rockford sellers: the market is genuinely competitive — 14-day median DOM means the right retail listing moves fast. But older Rockford housing stock frequently doesn't qualify for FHA or conventional financing, which narrows the retail buyer pool significantly. A 5-6% agent commission on a $170,000 median home runs $8,500-$10,200 before closing costs and repair requests. On a $142,859 ZHVI home, every dollar saved on commissions and repairs is a meaningful portion of the sale price.</p>
        </section>

        <SituationLinks
          heading="We Buy Houses in Rockford IL in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/rockford-il/inherited-property', description: 'Sell an inherited Rockford home — we work with Winnebago County Circuit Court Probate Division timelines' },
            { label: 'Going Through Divorce', href: '/markets/rockford-il/divorce-sale', description: 'One offer, one closing — equitable distribution without the delay under 750 ILCS 5/503' },
            { label: 'Facing Foreclosure', href: '/markets/rockford-il/foreclosure', description: 'IL judicial foreclosure (735 ILCS 5/15-1101) — sell before the Winnebago County auction' },
            { label: 'Probate Sale', href: '/markets/rockford-il/probate', description: 'We work with Winnebago County Circuit Court Probate Division cases, independent and supervised administration' },
            { label: 'Tenant-Occupied Property', href: '/markets/rockford-il/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing in Illinois' },
            { label: 'Code Violations', href: '/markets/rockford-il/code-violations', description: 'City of Rockford open violations, condemned properties — we buy anyway, as-is' },
            { label: 'Fire Damage', href: '/markets/rockford-il/fire-damage', description: 'Fire or smoke damage in Rockford? We purchase as-is with no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Rockford IL Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Rockford IL
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $170,000 Rockford home, a 5-6% agent commission runs $8,500-$10,200. Add Illinois's combined transfer tax (~$255), carrying costs during 14+ days on market, and repair requests on pre-1970 Rust Belt housing stock. Churchill Grove craftsmen and Midtown bungalows frequently have deferred-maintenance issues — original wiring, galvanized plumbing, Rock River alluvial soil foundation settling — that conventional lenders flag and require remediation. A cash offer eliminates the inspection contingency and repair negotiation entirely. At $142,859 ZHVI average, every dollar of commission and repair cost is significant relative to the sale price.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Rockford IL Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including IL state + Winnebago County transfer tax."
            sourcePage="/markets/rockford-il"
          />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Rockford IL Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Winnebago County IL
          </h2>
          <p className="text-gray-700 mb-4">
            Our Rockford coverage includes the entire city — downtown Rockford and the 61101 ZIP corridor along West State Street, Churchill Grove on the northwest side with its tree-lined streets and craftsman bungalows, Midtown near the Rock River where pre-war bungalows and two-flats are concentrated, Signal Hill and Jackson Oaks on the south and southwest sides where post-war ranches dominate, Northeast Rockford with its higher-priced colonials and newer construction, and the Haight Village Historic District with Victorian and Queen Anne homes dating to the 1840s.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the surrounding Winnebago County communities — Loves Park (immediately north, pop ~23K), Machesney Park (northwest, pop ~23K), Roscoe, Rockton, Cherry Valley, New Milford, Winnebago Village, and Pecatonica. We also cover adjacent Boone County (Belvidere) and southern Ogle County due to market proximity.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Downtown Rockford', 'Churchill Grove', 'Midtown', 'Signal Hill', 'Jackson Oaks', 'Haight Historic District', 'Northeast Rockford', 'East Rockford', 'West State Corridor', 'Loves Park', 'Machesney Park', 'Roscoe', 'Rockton', 'Cherry Valley', 'Belvidere', 'Winnebago Village'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Rockford IL Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Churchill Grove craftsmans to Haight Historic District Victorians to Signal Hill ranches — we buy in every Rockford neighborhood and every Winnebago County community.</p>
          <Link href="/markets/rockford-il/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See Rockford neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <section className="my-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Our Second Illinois Market</h2>
          <p className="text-gray-700 text-sm mb-3">Rockford is our second Illinois market, following Springfield (#19, Sangamon County). For statewide Illinois legal context — transfer taxes, foreclosure law, probate procedures — see our Illinois state guide. For our Springfield IL operations, see the Springfield market page.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline font-medium text-sm">Illinois Seller's Legal Guide →</Link>
            <Link href="/markets/springfield-il" className="text-brand-primary hover:underline font-medium text-sm">Springfield IL Market →</Link>
          </div>
        </section>

        <BlogClusterLinks marketSlug="rockford-il" cityName="Rockford" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Rockford IL or Winnebago County home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/rockford-il" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Rockford IL Home?" sourcePage="/markets/rockford-il" />
        </section>
      </div>
    </>
  );
}
