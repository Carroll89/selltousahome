/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { VideoEmbed } from '@/components/VideoEmbed';
import Link from 'next/link';
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
  title: 'Sell My House Fast Bloomington IL',
  description:
    'We buy houses in Bloomington IL for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving McLean County. Call 888-440-5250.',
  alternates: { canonical: `${SITE_URL}/markets/bloomington-il` },
  openGraph: {
    images: [{ url: '/images/bloomington-il-hero.jpg', width: 1200, height: 630, alt: 'Bloomington IL home — Sell Your House Fast for Cash' }],
  },
};

const bloomingtonILLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'RealEstateAgent'],
  '@id': `${SITE_URL}/#business-bloomington-il`,
  name: 'USA Home Buyers — Bloomington IL',
  description: 'Cash home buyers serving Bloomington IL and McLean County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
  url: `${SITE_URL}/markets/bloomington-il`,
  telephone: '+18884405250',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bloomington',
    addressRegion: 'IL',
    postalCode: '61701',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 40.4798, longitude: -88.9939 },
  areaServed: [
    { '@type': 'City', name: 'Bloomington', sameAs: 'https://en.wikipedia.org/wiki/Bloomington,_Illinois' },
    { '@type': 'City', name: 'Normal' },
    { '@type': 'City', name: 'Heyworth' },
    { '@type': 'City', name: 'LeRoy' },
    { '@type': 'City', name: 'Lexington' },
    { '@type': 'County', name: 'McLean County' },
  ],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  priceRange: '$$',
  image: `${SITE_URL}/images/bloomington-il-hero.jpg`,
};

const TESTIMONIALS = [
  {
    quote: "My father worked at State Farm for thirty-one years and bought his Founders' Grove home in 1974. When he passed, my siblings and I were scattered across four states — none of us wanted to manage a Victorian-era house with deferred maintenance from three states away. USA Home Buyers gave us a written number within a day, handled all the coordination with the McLean County probate attorney, and closed in eighteen days. The cleanout alone would have cost us a weekend and a dumpster rental. We never had to come back to Bloomington.",
    name: 'Sandra M.',
    location: "Founders' Grove, Bloomington IL",
    situation: 'Inherited Estate — State Farm Retiree Property',
    date: 'March 2026',
  },
  {
    quote: "I'd been an ISU adjunct for six years when a tenure-track offer came in from a university in Arizona. I had to be there in five weeks. My house in the Veterans Parkway corridor was tenant-occupied — the lease wasn't up for four months. USA Home Buyers bought it with the tenant in place. I didn't have to evict anyone, didn't miss the Arizona start date, and didn't lose six months to a listing process. Exactly what I needed.",
    name: 'Robert A.',
    location: 'Veterans Parkway, Bloomington IL',
    situation: 'Faculty Relocation — Tenant-Occupied Property',
    date: 'February 2026',
  },
  {
    quote: "Country Financial restructured my department and offered early retirement. At 58, with a home that needed a new roof and electrical updates, I wasn't going to find a conventional buyer who'd overlook those issues. USA Home Buyers came in, assessed the property, gave me a real number the next morning. I was at a title company signing papers within two weeks. No repairs, no agents, no waiting.",
    name: 'Linda K.',
    location: 'North Bloomington, Bloomington IL',
    situation: 'Corporate Restructuring — Condition Sale',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '50-80 days (50 DOM + 30-45 close)' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$25K avg on older Bloomington stock)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$15,000-$18,000 on Redfin $300K median)' },
  { label: 'IL transfer tax (state + McLean County)', cashBuyer: 'We cover everything', traditional: '$300 on a $200K sale — no Bloomington municipal RETT' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-78% of FMV', traditional: '85-91% after all costs (well-maintained only)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Bloomington IL?',
    answer: "USA Home Buyers can close in as few as 7 days in Bloomington and throughout McLean County. We send a written cash offer within 24 hours of your inquiry. According to Zillow (February 2026), the typical Bloomington home goes pending in just 4 days — this is one of the fastest-moving markets in downstate Illinois. If you're facing foreclosure, Illinois is a judicial foreclosure state under 735 ILCS 5/15-1101 — once a lender files in McLean County Circuit Court at 104 W. Front Street, the process typically runs 12-16 months. Selling before the auction preserves your equity. Call (888) 440-5250.",
  },
  {
    question: 'How much will you pay for my Bloomington IL house?',
    answer: "Cash offers for Bloomington homes typically run 70-78% of fair market value, depending on condition, location, and any liens. According to Zillow (February 2026), the Bloomington Home Value Index (ZHVI) is $228,634 — up 7.5% year over year. Per Redfin (March 2026), the city median sale price is $300,000, up 33% year over year. A cash offer on a typical Bloomington home at ZHVI runs $160,000-$178,335. We cover all closing costs including Illinois state transfer tax ($0.50/$500) and McLean County transfer tax ($0.25/$500) — total $300 on a $200,000 sale. No Bloomington municipal RETT.",
  },
  {
    question: 'What is the transfer tax when selling a house in Bloomington IL?',
    answer: "Illinois charges a state real estate transfer tax of $0.50 per $500 of consideration under 35 ILCS 200/31-10. McLean County adds $0.25 per $500. Combined: $0.75 per $500 (0.15% of sale price), seller pays. The City of Bloomington does NOT impose a municipal real estate transfer tax — confirmed: the ATG tax-ordinance directory returns a 404 for Bloomington, meaning no municipal RETT ordinance is registered with Illinois's primary title industry registry. On a $200,000 sale: $300.00 total. When you sell to USA Home Buyers, we cover all closing costs — you pay nothing at closing.",
  },
  {
    question: 'How does foreclosure work in McLean County IL?',
    answer: "Illinois is a 100% judicial foreclosure state under the Illinois Mortgage Foreclosure Law, 735 ILCS 5/15-1101 et seq. Every foreclosure must go through McLean County Circuit Court — 11th Judicial Circuit, 104 W. Front Street, Room 303, Bloomington IL 61701, phone (309) 888-5301. The typical McLean County uncontested foreclosure timeline runs 12-16 months from first missed payment. Borrowers have a 3-month reinstatement right under 735 ILCS 5/15-1602 and a 7-month redemption period under 735 ILCS 5/15-1603. Don't confuse McLean County's timeline with Cook County's 24-36 months. Call (888) 440-5250 if you're behind on payments.",
  },
  {
    question: 'What areas near Bloomington do you buy in?',
    answer: "All of McLean County. That includes Bloomington proper — Founders' Grove, Downtown, Alton-Oakland, Holiday Knolls, Sherwood Forest, West Bloomington, Veterans Parkway Corridor, North Bloomington, Pepper Ridge, Indiana Ave Corridor — plus the Bloomington-Normal MSA including Normal (home of ISU), Heyworth, LeRoy, Lexington, Towanda, Hudson, and other McLean County communities. If you're unsure whether we serve your address, call (888) 440-5250.",
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: "No. Bloomington's housing stock spans Victorian-era Founders' Grove homes from the 1880s-1920s to mid-century ranches in Holiday Knolls and Sherwood Forest to 1970s-1980s colonials in North Bloomington. Older properties often have deferred maintenance, outdated electrical, or balloon-frame construction that deter conventional buyers. Homes near ISU may have tenant-caused wear. We buy all of it as-is. Leave whatever you don't want behind.",
  },
  {
    question: 'How does selling an inherited Bloomington house work if it\'s in probate?',
    answer: "Inherited Illinois real estate must go through formal probate at McLean County Circuit Court, Civil/Probate Division — 104 W. Front Street, 4th Floor, Room 404, Bloomington IL 61701, phone (309) 888-5350. The small estate affidavit under 755 ILCS 5/25-1 applies only to personal property (threshold raised to $150,000 by 2025 amendment) — real property always requires formal probate regardless of estate size. Under independent administration (755 ILCS 5/28-1), an executor can sell estate real estate without court approval on each transaction, typically within 6-9 months. We can have a written offer ready before you file the probate petition.",
  },
  {
    question: "Is the Bloomington IL housing market really as hot as I've heard?",
    answer: "Yes, and the data is specific. According to Zillow (February 2026), Bloomington homes go pending in just 4 days on average — faster than most downstate IL markets. The ZHVI is $228,634 (+7.5% YoY), and per Redfin (March 2026), the median sale price hit $300,000 (+33% YoY). That 33% Redfin jump reflects a thin market where individual large transactions move the monthly median. Realtor.com ranked the Bloomington-Normal MSA #27 hottest nationally. The market is driven by State Farm's world headquarters, Country Financial, ISU employment, and a high median household income of $77,384 — one of the strongest employment bases of any downstate IL city.",
  },
];

export default function BloomingtonILMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Bloomington IL',
    description: 'Step-by-step process for selling your Bloomington or McLean County home for cash',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Bloomington or McLean County property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours — no obligation.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for your schedule.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at a Bloomington IL title company of your choice, walk away with your cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[bloomingtonILLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1200px)" srcSet="/images/optimized/bloomington-il-hero-1200.jpg" />
          <source media="(min-width: 1080px)" srcSet="/images/optimized/bloomington-il-hero-1080.jpg" />
          <source media="(min-width: 828px)" srcSet="/images/optimized/bloomington-il-hero-828.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bloomington-il-hero-640.jpg"
            alt="Bloomington IL historic neighborhood — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Illinois Cash Home Buyers — RDC #27 Nationally (Bloomington-Normal MSA)</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Bloomington IL — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Bloomington IL and throughout McLean County — Founders&apos; Grove Victorians, North Bloomington colonials, ISU-area rentals, State Farm retiree estates, foreclosures, divorce situations. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no agent fees. According to Zillow (February 2026), Bloomington ZHVI is $228,634 (+7.5% YoY) with homes pending in just 4 days — the fastest-appreciating downstate IL market in our Illinois portfolio. Transfer tax: $300 on a $200,000 sale (IL state + McLean County; no Bloomington municipal RETT). Call (888) 440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Bloomington, Normal, and all of McLean County — any condition, any situation. No repairs, no agent fees, no waiting.
            </p>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call Now — (888) 440-5250 (24/7)
            </a>
          </div>
          <div>
      <VideoEmbed
        src="/videos/bloomington-il/landing.mp4"
        title="Sell My House Fast Bloomington IL — USA Home Buyers"
        poster="/videos/bloomington-il/landing-poster.jpg"
        subtitle="Cash offers for Bloomington, Normal, and McLean County homes — any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Need to sell your house fast in Bloomington, Illinois? USA Home Buyers purchases homes as-is for cash throughout McLean County. No agents, no fees, no repairs. Written cash offer in 24 hours, close in 7 days. Call 888-440-5250.
        </div>
      </details>
      <CashOfferForm
              variant="hero"
              headline="Get Your Bloomington IL Cash Offer"
              subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs."
              sourcePage="/markets/bloomington-il"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Bloomington IL Real Estate Market — What Sellers Need to Know in 2026
          </h2>
          <p className="text-gray-700 mb-4">
            Bloomington is the insurance capital of downstate Illinois — and that distinction shapes its housing market in ways that set it apart from every other city in our Illinois portfolio. State Farm Insurance, founded here in 1922, operates its world headquarters in Bloomington, making it the largest mutual insurer in the United States by premium volume. Country Financial, another major national property-and-casualty insurer, also maintains its headquarters here. Together with Illinois State University in adjacent Normal and Illinois Wesleyan University within Bloomington city limits, the city has built an employment base unlike anything you find in a comparably sized downstate market.
          </p>
          <p className="text-gray-700 mb-4">
            That employment base drives the housing market data. According to Zillow (February 2026), the Bloomington Home Value Index (ZHVI) stands at $228,634 — up 7.5% year over year, the fastest appreciation rate of any market in our three-city Illinois batch. Per Redfin (March 2026), the city median sale price reached $300,000, a 33% year-over-year jump reflecting both genuine price increases and the thin-market mix-effects of just 83 transactions in one month. Homes go pending in roughly 4 days on average per Zillow — a pace that puts Bloomington among the most competitive mid-size Midwest markets.
          </p>
          <p className="text-gray-700 mb-4">
            The median household income in Bloomington is $77,384 (2024 ACS estimate), the highest of any city in our IL market set and well above the Illinois statewide median of roughly $72,000. McLean County's median property tax rate runs 2.62% of assessed value — significantly above the national median — which creates seller motivation among fixed-income homeowners, particularly retirees who carry low or no mortgages but face mounting annual property tax bills.
          </p>
          <p className="text-gray-700 mb-4">
            Bloomington's motivated-seller profile is distinct from Rockford's or Springfield's. Here, the drivers are State Farm and Country Financial retirees whose estates pass to out-of-state adult children, ISU-adjacent landlords tired of managing student rental properties, professionals relocating when insurance industry restructuring creates early-retirement packages, and owners of older homes in Founders' Grove and West Bloomington who face deferred maintenance on historic stock they can't afford to remediate. These are equity-rich sellers — many with 30-40 years of ownership — who need a clean, certain transaction more than the last dollar of retail price.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Bloomington IL</th>
                  <th className="text-left p-3">Source / Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow ZHVI (home value index)</td><td className="p-3">$228,634 (+7.5% YoY)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price</td><td className="p-3">$300,000 (+33% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Avg. Days to Pending</td><td className="p-3">~4 days</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">61/100 — Somewhat Competitive</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-List Ratio</td><td className="p-3">99.2%</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Homes Sold (Mar 2026)</td><td className="p-3">83</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">RDC Hotness Rank</td><td className="p-3">#27 (Bloomington-Normal MSA)</td><td className="p-3 text-gray-500">Realtor.com (Apr 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median Household Income (city)</td><td className="p-3">$77,384</td><td className="p-3 text-gray-500">ACS 2024</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">IL Transfer Tax (state + McLean Co.)</td><td className="p-3">$300 on $200K sale (0.15%) — no municipal RETT</td><td className="p-3 text-gray-500">35 ILCS 200/31-10; McLean Co. Code</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — 735 ILCS 5/15-1101 (12-16 mos typical)</td><td className="p-3 text-gray-500">IL Mortgage Foreclosure Law</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Probate court</td><td className="p-3">McLean Co. Circuit Court, 104 W. Front St Rm 404, (309) 888-5350</td><td className="p-3 text-gray-500">11th Judicial Circuit</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">What this means for Bloomington sellers: this is not a distress market — it is a professional-class market with a distinct motivated-seller population. Equity-rich estates, landlord exits, and insurance-industry early-retirement packages drive the cash-buyer pipeline here more than financial hardship. A 4-day pending pace means retail-ready homes move fast; but Founders' Grove Victorians with deferred maintenance, ISU-area rental conversions, and West Bloomington code-issue properties represent a meaningful share of the seller pool that needs a buyer who doesn't require a financing contingency.</p>
        </section>

        <SituationLinks
          heading="We Buy Houses in Bloomington IL in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/bloomington-il/inherited-property', description: "Sell an inherited Bloomington home — we work with McLean County Circuit Court Probate Division timelines and State Farm retiree estate scenarios" },
            { label: 'Going Through Divorce', href: '/markets/bloomington-il/divorce-sale', description: 'One offer, one closing — equitable distribution without the delay under 750 ILCS 5/503' },
            { label: 'Facing Foreclosure', href: '/markets/bloomington-il/foreclosure', description: 'IL judicial foreclosure (735 ILCS 5/15-1101) — sell before the McLean County auction' },
            { label: 'Probate Sale', href: '/markets/bloomington-il/probate', description: 'We work with McLean County Circuit Court Probate Division — independent and supervised administration' },
            { label: 'Tenant-Occupied Property', href: '/markets/bloomington-il/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing; ISU-area rentals welcome' },
            { label: 'Code Violations', href: '/markets/bloomington-il/code-violations', description: 'City of Bloomington open violations, Neighborhood Services Division — we buy anyway, as-is' },
            { label: 'Fire Damage', href: '/markets/bloomington-il/fire-damage', description: "Fire or smoke damage — Founders' Grove balloon-frame included, no cleanup required" },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Bloomington IL Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Bloomington IL
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            Per Redfin (March 2026), the Bloomington median sale price is $300,000. A 5-6% agent commission runs $15,000-$18,000. Add Illinois&apos;s combined transfer tax ($300 on a $200K sale), Redfin&apos;s 50-day average days on market, and repair requests on older Bloomington housing stock. Founders&apos; Grove Victorians and West Bloomington pre-1950s homes frequently carry deferred maintenance — original wiring, aging plumbing, historic-district exterior restrictions — that conventional buyers flag and require repair credits on. A cash offer eliminates inspection contingencies entirely. At $228,634 ZHVI average, every dollar of commission and carrying cost is meaningful relative to the net proceeds.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Bloomington IL Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including IL state + McLean County transfer tax."
            sourcePage="/markets/bloomington-il"
          />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Bloomington IL Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout McLean County IL
          </h2>
          <p className="text-gray-700 mb-4">
            Our Bloomington coverage includes the entire city — Founders&apos; Grove Historic District on the east side with its Victorian and Craftsman homes dating to the 1880s-1920s, Downtown Bloomington along the Washington Street corridor with older worker-class housing stock, Alton-Oakland on the east side with 1940s-1960s bungalows, Holiday Knolls and Holiday Acres in the mid-city with established mid-century homes, Sherwood Forest in the northeast with 1950s-1970s ranches, West Bloomington and Sunset Hills in the southwest with the city&apos;s highest concentration of pre-1950 housing, the Veterans Parkway Corridor and Eastview near ISU with its rental-heavy grad student population, North Bloomington&apos;s executive-commuter ranch and colonial homes, and the newer Pepper Ridge and Northbrook subdivisions in the northeast.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the surrounding McLean County communities — Normal (immediately north, home of ISU), Heyworth, LeRoy, Lexington, Towanda, Hudson, Downs, Gridley, and rural McLean County parcels. McLean County is the largest county by land area in Illinois — we cover it entirely.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Founders' Grove", "Downtown Bloomington", "Alton-Oakland", "Holiday Knolls", "Sherwood Forest", "West Bloomington", "Veterans Parkway", "North Bloomington", "Pepper Ridge", "Indiana Ave Corridor", "Normal", "Heyworth", "LeRoy", "Lexington", "Towanda", "Hudson"].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Bloomington IL Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Founders&apos; Grove Victorians to North Bloomington colonials to ISU-area rentals — we buy in every Bloomington neighborhood and every McLean County community.</p>
          <Link href="/markets/bloomington-il/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See Bloomington neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <section className="my-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Our Third Illinois Market</h2>
          <p className="text-gray-700 text-sm mb-3">Bloomington is our third Illinois market, following Springfield (Sangamon County) and Rockford (Winnebago County). For statewide Illinois legal context — transfer taxes, foreclosure law, probate procedures — see our Illinois state guide.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline font-medium text-sm">Illinois Seller&apos;s Legal Guide →</Link>
            <Link href="/markets/springfield-il" className="text-brand-primary hover:underline font-medium text-sm">Springfield IL Market →</Link>
            <Link href="/markets/rockford-il" className="text-brand-primary hover:underline font-medium text-sm">Rockford IL Market →</Link>
          </div>
        </section>

        <BlogClusterLinks marketSlug="bloomington-il" cityName="Bloomington" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Bloomington IL or McLean County home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/bloomington-il" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Bloomington IL Home?" sourcePage="/markets/bloomington-il" />
        </section>
      </div>
    </>
  );
}
