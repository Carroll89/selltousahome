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
import { manchesterLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';
import { VideoEmbed } from '@/components/VideoEmbed';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Manchester NH',
  description:
    'We buy houses in Manchester NH for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Hillsborough County and the Manchester-Nashua metro.',
  alternates: { canonical: `${SITE_URL}/markets/manchester-nh` },
  openGraph: {
    images: [{ url: '/images/manchester-nh-hero.jpg', width: 1200, height: 630, alt: 'Manchester NH mill district homes — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    "quote": "My parents owned a house near the Millyard for 40 years. After my mother passed, my brother and I needed to settle the estate quickly — we both have jobs and families, neither of us lives in Manchester. USA Home Buyers had a written offer the next day and we closed in 11 days. The whole process was straightforward.",
    "name": "Kevin D.",
    "location": "Amoskeag, Manchester NH",
    "situation": "Inherited Property — Estate Sale",
    "date": "March 2026"
  },
  {
    "quote": "New Hampshire foreclosure doesn't use courts — the lender can foreclose by publication and it moves fast. I was three months behind and only found out how fast when I got the notice of sale in the mail. USA Home Buyers explained the NH non-judicial timeline, had a written offer within twenty-four hours, and we closed before the sale date. I walked out with $44,000 I almost lost.",
    "name": "Nathaniel R.",
    "location": "West Side, Manchester NH",
    "situation": "Pre-Foreclosure — Non-Judicial",
    "date": "July 2025"
  },
  {
    "quote": "Divorce decree in Hillsborough County, sale required. We'd owned the house on South Beech for eleven years, a lot of equity — but we couldn't stand to be in the same room. USA Home Buyers gave us a written offer both our attorneys approved. Closed in twelve days. Money split through escrow.",
    "name": "Shannon and Greg V.",
    "location": "South Beech Street, Manchester NH",
    "situation": "Divorce Sale — Court Decree",
    "date": "October 2025"
  },
  {
    "quote": "I inherited a three-unit on Bridge Street that I had no interest in managing. Two of the units needed serious work. USA Home Buyers bought the whole thing as-is, tenants and all. That was it.",
    "name": "Patricia M.",
    "location": "Beech Hill, Manchester NH",
    "situation": "Tenant-Occupied Multi-Family — Estate",
    "date": "January 2026"
  },
  {
    "quote": "I relocated to Boston for work and had my Manchester house on the market for three months with an agent — two failed offers, one buyer who couldn't get financing. USA Home Buyers gave me a written number the next morning and we closed before my lease on the new apartment ran out.",
    "name": "Lisa F.",
    "location": "North End, Manchester NH",
    "situation": "Relocation — Carrying Two Properties",
    "date": "September 2025"
  },
  {
    "quote": "The ice dam that winter ripped out the front gutter and when it melted, the water came in through the fascia and down the living room wall. Two rooms of water damage, some mold behind the drywall. Insurance covered removal but not reconstruction. USA Home Buyers came out two days after I called. Offer the next morning, closed in seven days.",
    "name": "Peter J.",
    "location": "Youngsville, Manchester NH",
    "situation": "Water Damage — Ice Dam",
    "date": "February 2025"
  },
  {
    "quote": "Sixty-six years old, widowed, and the house had more property taxes than I wanted to keep paying — $5,800 a year in NH on a fixed income. My son in Boston had been after me to move south. USA Home Buyers gave me a fair number, no open houses, no strangers in my house. Closed in eight days. I was in Massachusetts before spring.",
    "name": "Caroline F.",
    "location": "Hooksett Road, Manchester NH",
    "situation": "Downsizing — Fixed Income, Tax Relief",
    "date": "November 2025"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$25K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$18,000-$19,000)' },
  { label: 'NH transfer tax', cashBuyer: 'We cover everything', traditional: '$0.75 per $100 of consideration (seller portion)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Manchester NH?',
    answer: 'USA Home Buyers can close in as few as 7 days in Manchester NH. We send a written cash offer within 24 hours. New Hampshire is a non-judicial foreclosure state — lenders can foreclose without court action, making the timeline from default to auction shorter than in judicial states. If you\'re facing foreclosure or behind on payments, the window to act and walk away with equity is narrower here.',
  },
  {
    question: 'How much will you pay for my Manchester NH house?',
    answer: 'Cash offers for Manchester homes typically range from 68-80% of fair market value. According to Zillow, the Manchester median home value is approximately $310,000. A typical cash offer on an Amoskeag or North End multi-family or single-family ranges from $217,000-$248,000. We cover all closing costs including New Hampshire\'s real estate transfer tax (each party pays $0.75 per $100 of consideration on traditional sales).',
  },
  {
    question: 'What is the transfer tax when selling a house in Manchester NH?',
    answer: 'New Hampshire has a real estate transfer tax of $1.50 per $100 of consideration total — split equally between buyer and seller at $0.75 per $100 each. On a $310,000 home, the total tax is $4,650 ($2,325 each). When you sell to USA Home Buyers, we cover all closing costs. Source: New Hampshire Department of Revenue Administration (revenue.nh.gov).',
  },
  {
    question: 'How does foreclosure work in New Hampshire?',
    answer: 'New Hampshire is a non-judicial foreclosure state. Lenders can foreclose through power of sale without going to court. The process requires 25 days\' published notice and 60 days\' notice to the borrower, but the total timeline from default to foreclosure sale is typically 60-90 days — much faster than judicial states. Source: NH RSA 479:25 (nh.gov).',
  },
  {
    question: 'What areas near Manchester do you buy in?',
    answer: 'All of Hillsborough County including Nashua, Goffstown, Hooksett, Londonderry, Auburn, Bedford, Merrimack, Litchfield, and Derry. We also cover Rockingham County communities south and east of Manchester. If you\'re not sure, call 888-274-5006.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Manchester\'s mill-era housing stock — triple-deckers, two-families, and Victorian singles near the Millyard — often has deferred maintenance, older systems, and lead paint in pre-1978 units. We buy in any condition.',
  },
  {
    question: 'What areas in the Manchester-Nashua metro do you serve?',
    answer: 'We serve the entire Manchester-Nashua CBSA. Manchester is our primary market, but we also buy in Nashua, which is New Hampshire\'s second-largest city. Both cities have similar post-industrial housing profiles and similar seller needs. Same cash offer, same timeline, same process.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask 5-10 questions about the property, and send a written cash offer within 24 hours. No high-pressure tactics. The offer is a real number with a written purchase agreement.',
  },
];

export default function ManchesterNHMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Manchester NH',
    description: 'Step-by-step process for selling your Manchester home for cash in Hillsborough County, New Hampshire',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Manchester property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Hillsborough County title company, walk away with cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[manchesterLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/manchester-nh-hero-640.jpg 640w, /images/optimized/manchester-nh-hero-828.jpg 828w, /images/optimized/manchester-nh-hero-1080.jpg 1080w, /images/optimized/manchester-nh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/manchester-nh-hero-1200.jpg"
            alt="Manchester NH historic mill district and residential homes — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">New Hampshire Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Manchester NH — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Manchester NH and throughout Hillsborough County — Amoskeag, North End, Beech Hill, Elmwood, and the broader Manchester-Nashua metro including Nashua, Goffstown, and Londonderry. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Zillow, Manchester median home values are around $310,000. We cover all closing costs including NH transfer tax. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Manchester NH and Hillsborough County in any condition — mill-era multi-families, Victorian singles, ranches, estates, foreclosures, rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Manchester NH Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/manchester-nh" />
          </div>
        </div>
      </section>

        <VideoEmbed
        src="/videos/manchester-nh/landing.mp4"
        title="Sell My House Fast Manchester NH — USA Home Buyers"
        subtitle="Cash offers for Manchester and Hillsborough County homes — any condition"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
        📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
        If you need to sell your house fast in Manchester, New Hampshire — you've found the right team. We're USA Home Buyers, and we purchase houses as-is, for cash, throughout Hillsborough County. Whether your home needs repairs, you're behind on payments, going through a divorce, or you've inherited a property you don't know what to do with — we make the process simple. No agents. No fees. No repairs needed. We buy Manchester homes in any condition — from the North End to Beech Hill and beyond. Written cash offer within 24 hours. Close in as few as seven days on your schedule. Call us now at 888-274-5006. That's 888-274-5006.
        </div>
        </details>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Manchester NH Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Manchester is New Hampshire's largest city, situated on the Merrimack River. The city grew around the Amoskeag Manufacturing Company, once the world's largest textile mill complex, and the Millyard's brick mill buildings still define the city's character. Manchester's residential neighborhoods feature a mix of Victorian-era triple-deckers and two-families near downtown, post-war ranches and Cape Cods in the suburbs, and larger single-family homes in the northern neighborhoods.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Manchester NH</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$310,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$315,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">~25 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax</td><td className="p-3">$1.50 per $100 (split: each party pays $0.75 per $100)</td><td className="p-3 text-gray-500">NH DRA (revenue.nh.gov)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial (power of sale, ~60-90 days)</td><td className="p-3 text-gray-500">NH RSA 479:25</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Primary county</td><td className="p-3">Hillsborough County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Manchester NH in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/manchester-nh/inherited-property', description: 'Sell an inherited Manchester NH home through Hillsborough County Probate Court' },
            { label: 'Going Through Divorce', href: '/markets/manchester-nh/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/manchester-nh/foreclosure', description: 'New Hampshire non-judicial foreclosure (power of sale, ~60-90 days) — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/manchester-nh/probate', description: 'We work with Hillsborough County Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/manchester-nh/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/manchester-nh/code-violations', description: 'Open violations, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/manchester-nh/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Manchester NH Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Manchester NH</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $315,000 Manchester home, a 5-6% agent commission runs $15,750-$18,900. Add NH transfer tax (~$2,363 seller portion), carrying costs during 25+ days on market, and any repairs on mill-era multi-family stock. With low inventory in Manchester, the market can move quickly — but only for properties in good condition. Multi-families with deferred maintenance often sit or require significant price cuts.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm variant="inline" headline="Get Your Manchester NH Cash Offer" subheadline="No obligation. Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/manchester-nh" />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Manchester NH Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">We Buy Houses Throughout Manchester and Hillsborough County NH</h2>
          <p className="text-gray-700 mb-4">
            Manchester covers every neighborhood — Amoskeag near the historic Millyard, the dense North End with its triple-deckers and two-families, Beech Hill on the east side, Elmwood and Pinecrest in the south, and the Glen Lake and Upper Amoskeag neighborhoods near the river. We know the housing stock and the common issues: old mill-era plumbing, asbestos insulation, lead paint, and deferred capital improvements.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve the broader Manchester-Nashua metro. Nashua is New Hampshire's second-largest city and a natural extension of this market — similar post-industrial housing, similar price points, similar sellers. Goffstown to the west, Hooksett to the north, and the bedroom communities of Londonderry, Auburn, Bedford, Merrimack, and Litchfield are all in our coverage area.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Amoskeag', 'North End', 'Beech Hill', 'Elmwood', 'Pinecrest', 'Glen Lake', 'South Beech Street', 'Nashua', 'Goffstown', 'Hooksett', 'Londonderry', 'Auburn', 'Bedford', 'Merrimack', 'Litchfield', 'Derry'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Manchester NH Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Amoskeag mill-district homes to Beech Hill ranches — we buy in every Manchester neighborhood and Hillsborough County community.</p>
          <Link href="/markets/manchester-nh/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <BlogClusterLinks marketSlug="manchester-nh" cityName="Manchester" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Manchester NH home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/manchester-nh" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Manchester NH Home?" sourcePage="/markets/manchester-nh" />
        </section>
      </div>
    </>
  );
}
