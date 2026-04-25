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
import { springfieldLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';
import { VideoEmbed } from '@/components/VideoEmbed';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Springfield MA',
  description:
    'We buy houses in Springfield MA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving all of Hampden County. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/springfield-ma` },
  openGraph: {
    images: [{ url: '/images/springfield-ma-hero.jpg', width: 1200, height: 630, alt: 'Springfield MA triple-decker homes — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    "quote": "My uncle left me a three-family on Oak Street — built in 1922, hadn't been updated since the 1970s. I'm in Florida and couldn't manage it from down here. USA Home Buyers sent a written offer the next day and we closed in 10 days. I didn't have to fly up, didn't have to clean a thing.",
    "name": "Carmen R.",
    "location": "Forest Park, Springfield MA",
    "situation": "Inherited Property — Estate Sale",
    "date": "March 2026"
  },
  {
    "quote": "I got behind after losing my job at MassMutual. The mortgage servicer was already sending notices. USA Home Buyers explained the Massachusetts foreclosure process — it moves fast here — and we closed before it got to auction. I walked away with money I didn't know I could keep.",
    "name": "Darnell W.",
    "location": "Six Corners, Springfield MA",
    "situation": "Pre-Foreclosure — Behind on Payments",
    "date": "February 2026"
  },
  {
    "quote": "Hampden County probate court said sell. Neither of us had the money to buy out the other and the back-and-forth about repairs was getting expensive. USA Home Buyers gave us one written number. Both of us said yes, separately, that same evening. Closed in fourteen days. Our attorneys handled the rest.",
    "name": "Nicole and Jeff A.",
    "location": "East Springfield, MA",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "July 2025"
  },
  {
    "quote": "I owned a two-family on Bay Street with a problem tenant who hadn't paid rent in four months. Under Massachusetts law, eviction can take months and is expensive. USA Home Buyers bought the property with the tenant still in it. The whole thing took 12 days from first call to closing.",
    "name": "Rosa M.",
    "location": "Pine Point, Springfield MA",
    "situation": "Rental Property — Problem Tenant",
    "date": "January 2026"
  },
  {
    "quote": "Big Y corporate transferred me to their Connecticut headquarters and gave me a month. My house in Sixteen Acres was a good property but I needed certainty, not a listing that might take three months. USA Home Buyers closed eight days after I accepted their offer. I made it to CT on time.",
    "name": "Marcus L.",
    "location": "Sixteen Acres, Springfield MA",
    "situation": "Relocation — Corporate Transfer",
    "date": "April 2025"
  },
  {
    "quote": "The boiler in my three-decker failed in January 2025 and the pipes froze. Three units, two of them with water damage in the ceilings. My insurance deductible was $8,000 and the remaining repair quote was $44,000. I'm sixty-three and I can't carry that kind of project. USA Home Buyers bought the building as-is. Closed in eleven days.",
    "name": "Elena R.",
    "location": "Indian Orchard, Springfield MA",
    "situation": "Water Damage — Frozen Pipes",
    "date": "March 2025"
  },
  {
    "quote": "Both retired, house too big, property taxes $5,200 a year. The house on Belmont Avenue had been good to us but it was time. Our financial advisor suggested we downsize and put the equity to work. USA Home Buyers were straightforward — offer, agreement, closing. Done in nine days. We moved to a condo in West Springfield.",
    "name": "Bill and Mary C.",
    "location": "Liberty Heights, Springfield MA",
    "situation": "Downsizing — Retirement",
    "date": "January 2026"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$25K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$9,000-$11,000)' },
  { label: 'MA deed excise stamps', cashBuyer: 'We cover everything', traditional: 'Seller pays $4.56 per $1,000' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Springfield MA?',
    answer: 'USA Home Buyers can close in as few as 7 days in Springfield MA. We send a written cash offer within 24 hours. Massachusetts uses non-judicial foreclosure — once a lender files for foreclosure, the process can move in as little as 75 days. If you\'re facing foreclosure, speed matters. With us, there\'s no bank, no contingency wait, no delays.',
  },
  {
    question: 'How much will you pay for my Springfield MA house?',
    answer: 'Cash offers for Springfield homes typically range from 65-78% of fair market value. According to Zillow, the Springfield median home value is approximately $178,000. A typical cash offer on a Forest Park or Pine Point triple-decker near the $160,000-$200,000 range runs $112,000-$156,000. We cover all closing costs including Massachusetts deed excise stamps ($4.56 per $1,000 — seller pays on traditional sales).',
  },
  {
    question: 'What is the deed excise tax when selling a house in Springfield MA?',
    answer: 'Massachusetts uses deed excise stamps instead of a transfer tax. The rate is $4.56 per $1,000 of consideration — entirely paid by the seller. On a $178,000 sale, the deed excise is approximately $812. When you sell to USA Home Buyers, we cover all closing costs including the excise stamps. Source: Massachusetts Department of Revenue (mass.gov).',
  },
  {
    question: '¿Compran casas en Springfield MA? / Do you work with Spanish-speaking sellers?',
    answer: 'Sí, hablamos español. According to the U.S. Census Bureau, approximately 48% of Springfield residents identify as Hispanic or Latino, with a large Puerto Rican community. We work with sellers in English and Spanish. Llámenos — entendemos los vecindarios y el proceso de venta.',
  },
  {
    question: 'What areas near Springfield do you buy in?',
    answer: 'All of Hampden County. That includes West Springfield, Agawam, Chicopee, Ludlow, Wilbraham, East Longmeadow, Longmeadow, Westfield, Holyoke, and Ware. If you\'re not sure whether we cover your area, call us at 888-274-5006.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Springfield\'s housing stock is predominantly pre-1950 — triple-deckers, two-families, and Victorian singles with lead paint, aging plumbing, and deferred maintenance. That\'s exactly what we buy. No repairs, no cleaning, no staging.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'We can still help. If you\'re underwater — mortgage balance higher than market value — a short sale may be possible, where the lender accepts less than the full payoff. Call us and we\'ll talk through what\'s realistic for your Springfield property.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within hours during business hours. We\'ll ask 5-10 questions about the property. Within 24 hours you get a written cash offer — a real number, not a range. No pressure. If it works for you, we pick a closing date.',
  },
];

export default function SpringfieldMAMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Springfield MA',
    description: 'Step-by-step process for selling your Springfield home for cash in Hampden County, Massachusetts',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Springfield property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours — no obligation, no pressure.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for your schedule.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Hampden County title company, walk away with your cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[
        springfieldLocalBusinessSchema,
        faqSchema(FAQ_ITEMS),
        howToSchema,
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/springfield-ma-hero-640.jpg 640w, /images/optimized/springfield-ma-hero-828.jpg 828w, /images/optimized/springfield-ma-hero-1080.jpg 1080w, /images/optimized/springfield-ma-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/springfield-ma-hero-1200.jpg"
            alt="Springfield MA triple-decker and two-family homes — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Massachusetts Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Springfield MA — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Springfield MA and throughout Hampden County — Forest Park, Pine Point, Six Corners, Hungry Hill, and surrounding towns. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Zillow, Springfield median home values are around $178,000. We buy at fair value and cover all closing costs including Massachusetts deed excise stamps. Call 888-274-5006. Hablamos español.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Springfield MA and Hampden County in any condition — triple-deckers, two-families, single-family homes, estates, foreclosures, tenant-occupied properties. No repairs, no agent fees, no waiting.
            </p>
            <a
              href={`tel:+18882745006`}
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Springfield MA Cash Offer"
              subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs."
              sourcePage="/markets/springfield-ma"
            />
          </div>
        </div>
      </section>

        <VideoEmbed
        src="/videos/springfield-ma/landing.mp4"
        title="Sell My House Fast Springfield MA — USA Home Buyers"
        subtitle="Cash offers for Springfield and Hampden County homes — any condition"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
        📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
        If you need to sell your house fast in Springfield, Massachusetts — you've found the right team. We're USA Home Buyers, and we purchase houses as-is, for cash, throughout Hampden County. Whether your home needs repairs, you're behind on payments, going through a divorce, or you've inherited a property you don't know what to do with — we make the process simple. No agents. No fees. No repairs needed. We buy Springfield homes in any condition — from Forest Park and Indian Orchard to the South End. Written cash offer within 24 hours. Close in as few as seven days on your schedule. Call us now at 888-274-5006. That's 888-274-5006.
        </div>
        </details>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* How It Works */}
        <HowItWorks />

        {/* Market Stats */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Springfield MA Real Estate Market — What Sellers Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            Springfield is the economic hub of the Pioneer Valley and the third-largest city in Massachusetts. The city's housing stock is predominantly pre-World War II — Victorian-era triple-deckers, two-family brick homes, and workers' cottages built during the city's industrial peak. According to the U.S. Census Bureau, Springfield's housing units have a median age among the oldest in Massachusetts, with a large share built before 1939.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Springfield MA</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$178,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$185,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">~32 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax (deed excise)</td><td className="p-3">$4.56 per $1,000 (seller pays)</td><td className="p-3 text-gray-500">MA Dept. of Revenue</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial (power of sale, ~75-90 days)</td><td className="p-3 text-gray-500">MA General Laws Ch. 183</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hispanic/Latino population</td><td className="p-3">~48% of city</td><td className="p-3 text-gray-500">U.S. Census Bureau ACS</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Primary county</td><td className="p-3">Hampden County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm">
            <strong>Note on Springfield MA foreclosure:</strong> Massachusetts is a non-judicial foreclosure state. Under Massachusetts General Laws Chapter 183 §27, lenders can foreclose via power of sale without going to court — making the timeline from default to auction significantly faster than judicial states. A Springfield homeowner facing foreclosure typically has 75-90 days from first published notice before their property goes to auction. If you're behind on your mortgage, the window to act is narrow.
          </p>
        </section>

        {/* Situation Links */}
        <SituationLinks
          heading="We Buy Houses in Springfield MA in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/springfield-ma/inherited-property', description: 'Sell an inherited Springfield MA home through Hampden County Probate Court' },
            { label: 'Going Through Divorce', href: '/markets/springfield-ma/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/springfield-ma/foreclosure', description: 'Massachusetts non-judicial foreclosure (power of sale, ~75-120 days) — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/springfield-ma/probate', description: 'We work with Hampden County Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/springfield-ma/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/springfield-ma/code-violations', description: 'Open violations, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/springfield-ma/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Springfield MA Homeowners Are Saying" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Springfield MA
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $185,000 Springfield home, a 5-6% agent commission runs $9,250-$11,100. Add Massachusetts deed excise stamps (~$844), any required repairs on pre-1950 triple-decker stock, carrying costs during 32+ days on market, and potential price cuts if the property needs work. Most Springfield triple-deckers require lead paint compliance testing and often remediation under Massachusetts lead paint law (MGL Ch. 111 §197A) before traditional sale. That's an expense that disappears with a direct cash sale.
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Springfield MA Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including MA deed excise stamps."
            sourcePage="/markets/springfield-ma"
          />
        </section>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Springfield MA Home for Cash" />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Springfield and Hampden County MA
          </h2>
          <p className="text-gray-700 mb-4">
            Our Springfield market covers every neighborhood in the city — Forest Park's dense grid of Victorian two-families and triple-deckers near Forest Park itself, Pine Point's working-class neighborhood on the eastern edge of the city, Six Corners at the historic commercial intersection, Hungry Hill's Irish-American triple-decker neighborhood to the west, McKnight Historic District with its ornate late-Victorian singles, and East Springfield's industrial corridor housing.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the full Pioneer Valley metro. West Springfield and Agawam directly across the Connecticut River have similar housing stock and seller profiles. Chicopee to the north, Ludlow and Wilbraham to the east, and Longmeadow and East Longmeadow to the south are all part of our Hampden County coverage area. Westfield and Holyoke round out western Massachusetts. If you have a property anywhere in the Pioneer Valley corridor, call us.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'Forest Park', 'Pine Point', 'Six Corners', 'Hungry Hill', 'McKnight',
              'East Springfield', 'Indian Orchard', 'Bay', 'North End', 'South End',
              'West Springfield', 'Agawam', 'Chicopee', 'Ludlow', 'Wilbraham',
              'Longmeadow', 'East Longmeadow', 'Westfield', 'Holyoke', 'Ware',
            ].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Springfield MA Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">
            From Forest Park Victorians to Pine Point triple-deckers — we buy in every Springfield neighborhood and Hampden County community.
          </p>
          <Link href="/markets/springfield-ma/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">
            See neighborhood-by-neighborhood price ranges and investor data →
          </Link>
        </section>

        <BlogClusterLinks marketSlug="springfield-ma" cityName="Springfield" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for your Springfield MA home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/springfield-ma" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Springfield MA Home?" sourcePage="/markets/springfield-ma" />
        </section>
      </div>
    </>
  );
}
