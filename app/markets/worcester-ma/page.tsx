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
import { worcesterLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';
import { VideoEmbed } from '@/components/VideoEmbed';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Worcester MA',
  description:
    'We buy houses in Worcester MA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving all of Worcester County.',
  alternates: { canonical: `${SITE_URL}/markets/worcester-ma` },
  openGraph: {
    images: [{ url: '/images/worcester-ma-hero.jpg', width: 1200, height: 630, alt: 'Worcester MA three-decker and neighborhood homes — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    "quote": "My parents owned a three-decker on Chandler Street for over 30 years. After my father passed, we went through Worcester Probate and Family Court — took about four months. USA Home Buyers was ready to close the day after probate cleared. We didn't have to touch anything inside.",
    "name": "Patrick F.",
    "location": "Main South, Worcester MA",
    "situation": "Inherited Property — Probate Sale",
    "date": "March 2026"
  },
  {
    "quote": "Massachusetts foreclosure is non-judicial — the lender can foreclose by advertisement without going to court, and it can happen in as little as three months. I was behind and didn't realize how fast it would move. USA Home Buyers explained the timeline and had a written offer the same day I called. Closed in eleven days. Foreclosure cancelled.",
    "name": "Dwayne A.",
    "location": "Great Brook Valley, Worcester MA",
    "situation": "Pre-Foreclosure — Non-Judicial",
    "date": "June 2025"
  },
  {
    "quote": "Worcester Probate and Family Court, sale required. The Tatnuck house had a lot of equity but we were not in a position to negotiate anything calmly. USA Home Buyers gave us a number and our attorneys both signed off. Closed in twelve days. Split proceeds through escrow.",
    "name": "Sandra and Mike O.",
    "location": "Tatnuck, Worcester MA",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "September 2025"
  },
  {
    "quote": "I had a rental on Grafton Street that I'd been managing for eight years. Problem tenant, lead paint issues, city notices piling up. I couldn't afford to fix it and didn't want to go through eviction. USA Home Buyers bought it as-is with the tenant still there. Done in 11 days.",
    "name": "Marie T.",
    "location": "Piedmont, Worcester MA",
    "situation": "Rental Property — Lead Paint Issues",
    "date": "February 2026"
  },
  {
    "quote": "Relocating to Connecticut for a new job. Had the house listed for six weeks, two buyers fell through — one couldn't get financing, one backed out after inspection. USA Home Buyers closed 8 days after I accepted their written offer. I made it to my start date with two weeks to spare.",
    "name": "Thomas C.",
    "location": "Burncoat, Worcester MA",
    "situation": "Relocation Sale",
    "date": "January 2026"
  },
  {
    "quote": "The three-decker on Charlton Street had a chimney collapse in February — took out the back wall of the second floor. Structural damage, water intrusion from the open wall. My insurance company offered $37,000. Contractor said $61,000. I'm not fighting that battle. USA Home Buyers made a fair offer the next day. Closed in nine days.",
    "name": "Bernard J.",
    "location": "Bell Hill, Worcester MA",
    "situation": "Structural Damage — Chimney Collapse",
    "date": "February 2026"
  },
  {
    "quote": "Arthur retired from Hanover Insurance and we decided we wanted to move to Florida. The house in Quinsigamond Village had been in the family for twenty years and we had a lot of equity. We didn't want to spend six months on a listing. USA Home Buyers closed eight days after we accepted their offer. We drove to Cape Coral in March.",
    "name": "Rose and Arthur K.",
    "location": "Quinsigamond Village, Worcester MA",
    "situation": "Downsizing — Retirement Move",
    "date": "March 2025"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$25K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$18,000-$19,000)' },
  { label: 'MA deed excise stamps', cashBuyer: 'We cover everything', traditional: 'Seller pays $4.56 per $1,000' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Worcester MA?',
    answer: 'USA Home Buyers can close in as few as 7 days in Worcester MA. We send a written cash offer within 24 hours. Massachusetts is a non-judicial foreclosure state — lenders can foreclose through power of sale without going to court, with the process moving in as little as 75-90 days from first published notice. If you\'re behind on payments in Worcester, acting fast is critical.',
  },
  {
    question: 'How much will you pay for my Worcester MA house?',
    answer: 'Cash offers for Worcester homes typically range from 68-80% of fair market value. According to Zillow, the Worcester median home value is approximately $310,000. A typical cash offer on a Main South or Piedmont three-decker or two-family runs $217,000-$248,000. We cover all closing costs including Massachusetts deed excise stamps ($4.56 per $1,000 — seller pays on traditional sales).',
  },
  {
    question: 'What is the deed excise tax when selling a house in Worcester MA?',
    answer: 'Massachusetts uses deed excise stamps instead of a transfer tax. The rate is $4.56 per $1,000 of consideration — entirely paid by the seller. On a $310,000 sale, the deed excise is approximately $1,414. When you sell to USA Home Buyers, we cover all closing costs including the excise stamps. Source: Massachusetts Department of Revenue (mass.gov).',
  },
  {
    question: 'How does foreclosure work in Worcester MA?',
    answer: 'Massachusetts is a non-judicial foreclosure state. Under Massachusetts General Laws Chapter 183 §27, lenders can foreclose via power of sale without court involvement. The process requires published notice in a local newspaper for three consecutive weeks, plus written notice to the borrower. The typical timeline from first missed payment to auction is 75-120 days — much faster than judicial states. Source: MGL Ch. 183 (malegislature.gov).',
  },
  {
    question: 'How does probate work in Worcester County MA?',
    answer: 'When someone dies owning real estate in Worcester County, the property typically goes through Worcester County Probate and Family Court at 225 Main Street, Worcester MA 01608. The court appoints a personal representative who has authority to sell the property. Massachusetts allows informal probate for straightforward estates, which moves faster than formal proceedings. We work with estates regularly and can structure the sale around your probate timeline.',
  },
  {
    question: 'What areas near Worcester do you buy in?',
    answer: 'All of Worcester County. That includes Shrewsbury, Auburn, Millbury, Grafton, Holden, Paxton, Leicester, Webster, Southbridge, Spencer, Fitchburg, and Leominster. If you\'re in central Massachusetts and need to sell fast, call 888-440-5250.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Worcester\'s housing stock is largely pre-1950 — three-deckers, two-families, and Victorian singles. Lead paint (pre-1978) is common under Massachusetts law (MGL Ch. 111 §197A), which requires compliance testing in rental properties. These compliance requirements add real cost and time to traditional sales. We buy as-is, no testing required.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about the property, and send a written cash offer within 24 hours. No high-pressure calls. The offer is a real number. If it works for you, you pick the closing date.',
  },
];

export default function WorcesterMAMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Worcester MA',
    description: 'Step-by-step process for selling your Worcester home for cash in Worcester County, Massachusetts',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Worcester property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Worcester County title company, walk away with cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[worcesterLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/worcester-ma-hero-640.jpg 640w, /images/optimized/worcester-ma-hero-828.jpg 828w, /images/optimized/worcester-ma-hero-1080.jpg 1080w, /images/optimized/worcester-ma-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/worcester-ma-hero-1200.jpg"
            alt="Worcester MA three-decker homes on a bright day — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Massachusetts Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Worcester MA — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Worcester MA and throughout Worcester County — Main South, Piedmont, Burncoat, Grafton Hill, Tatnuck, and surrounding towns including Shrewsbury, Auburn, and Millbury. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Zillow, Worcester median home values are around $310,000. We cover all closing costs including Massachusetts deed excise stamps. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Worcester MA and Worcester County in any condition — three-deckers, two-families, Victorian singles, rentals, estates, foreclosures. No repairs, no agent fees.
            </p>
            <a href="tel:+18884405250" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Worcester MA Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/worcester-ma" />
          </div>
        </div>
      </section>

        <VideoEmbed
        src="/videos/worcester-ma/landing.mp4"
        title="Sell My House Fast Worcester MA — USA Home Buyers"
        subtitle="Cash offers for Worcester and Worcester County homes — any condition"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
        📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
        If you need to sell your house fast in Worcester, Massachusetts — you've found the right team. We're USA Home Buyers, and we purchase houses as-is, for cash, throughout Worcester County. Whether your home needs repairs, you're behind on payments, going through a divorce, or you've inherited a property you don't know what to do with — we make the process simple. No agents. No fees. No repairs needed. We buy Worcester homes in any condition — from Main South and Great Brook Valley to Vernon Hill and beyond. Written cash offer within 24 hours. Close in as few as seven days on your schedule. Call us now at 888-440-5250. That's 888-440-5250.
        </div>
        </details>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Worcester MA Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Worcester is Massachusetts' second-largest city, located in the geographic center of the state at the convergence of several major interstates. Once a major industrial center, Worcester now anchors a significant college and medical sector with UMASS Memorial, UMass Medical School, Holy Cross, Clark University, WPI, and Assumption University all within the city. The housing stock reflects both the city's industrial past and its ongoing revitalization: pre-WWII three-deckers and two-families in urban neighborhoods, post-war ranches in the suburbs, and larger Victorians on the city's western hills.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Worcester MA</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$310,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$315,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">~24 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax (deed excise)</td><td className="p-3">$4.56 per $1,000 (seller pays)</td><td className="p-3 text-gray-500">MA Dept. of Revenue</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial (power of sale, ~75-120 days)</td><td className="p-3 text-gray-500">MGL Ch. 183 §27</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Primary county</td><td className="p-3">Worcester County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Worcester MA in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/worcester-ma/inherited-property', description: 'Sell an inherited Worcester MA home through Worcester County Probate and Family Court' },
            { label: 'Going Through Divorce', href: '/markets/worcester-ma/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/worcester-ma/foreclosure', description: 'Massachusetts non-judicial foreclosure (power of sale, ~75-120 days) — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/worcester-ma/probate', description: 'We work with Worcester County Probate and Family Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/worcester-ma/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/worcester-ma/code-violations', description: 'Open violations, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/worcester-ma/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Worcester MA Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Worcester MA</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $315,000 Worcester home, a 5-6% agent commission runs $15,750-$18,900. Add Massachusetts deed excise stamps (~$1,436), carrying costs during 24+ days on market, and lead paint compliance testing for pre-1978 rental properties. Massachusetts lead paint law (MGL Ch. 111 §197A) requires compliance inspections for properties with children under 6 — a real-cost item that disappears in a direct cash sale.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm variant="inline" headline="Get Your Worcester MA Cash Offer" subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including MA deed excise stamps." sourcePage="/markets/worcester-ma" />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Worcester MA Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">We Buy Houses Throughout Worcester and Worcester County MA</h2>
          <p className="text-gray-700 mb-4">
            Our Worcester coverage includes every neighborhood — Main South's dense three-decker grid near Clark University, Piedmont's mixed residential blocks, Grafton Hill on the east side, Belmont Hill and Tatnuck to the west with larger Victorians and Colonials, Burncoat on the north side, and Indian Hill and Vernon Hill neighborhoods. We know the condition issues specific to this market: old boilers, knob-and-tube wiring in pre-1930 homes, and lead paint compliance requirements under Massachusetts law.
          </p>
          <p className="text-gray-700 mb-4">
            We serve all of Worcester County — Shrewsbury and Auburn immediately to the east and south, Millbury and Grafton, Holden and Paxton to the north, Leicester and Spencer to the west, Webster and Southbridge in the south, and the Route 2 corridor through Fitchburg and Leominster.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Main South', 'Piedmont', 'Grafton Hill', 'Belmont Hill', 'Tatnuck', 'Burncoat', 'Indian Hill', 'Vernon Hill', 'Shrewsbury', 'Auburn', 'Millbury', 'Grafton', 'Holden', 'Leicester', 'Webster', 'Fitchburg'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Worcester MA Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Main South three-deckers to Tatnuck Victorians — we buy in every Worcester neighborhood and Worcester County community.</p>
          <Link href="/markets/worcester-ma/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <BlogClusterLinks marketSlug="worcester-ma" cityName="Worcester" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Worcester MA home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/worcester-ma" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Worcester MA Home?" sourcePage="/markets/worcester-ma" />
        </section>
      </div>
    </>
  );
}
