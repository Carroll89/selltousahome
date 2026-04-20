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
import { kenoshWILocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';
import { VideoEmbed } from '@/components/VideoEmbed';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Kenosha WI',
  description:
    'We buy houses in Kenosha WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving all of Kenosha County.',
  alternates: { canonical: `${SITE_URL}/markets/kenosha-wi` },
  openGraph: {
    images: [{ url: '/images/kenosha-wi-hero.jpg', width: 1200, height: 630, alt: 'Kenosha WI lakefront neighborhood homes — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    "quote": "My father worked at AMC for 30 years. When he passed, I inherited the house on 52nd Street — three bedrooms, built in 1948, needed a new roof and furnace. I live in Chicago and couldn't manage it remotely. USA Home Buyers made a written offer the next morning and we closed in 9 days.",
    "name": "Michael T.",
    "location": "Allendale, Kenosha WI",
    "situation": "Inherited Property — Estate Sale",
    "date": "March 2026"
  },
  {
    "quote": "I worked at the Amazon distribution center in Kenosha and took a medical leave for six months. Fell behind on payments, the bank filed in Kenosha County Circuit Court — Wisconsin judicial foreclosure. USA Home Buyers explained exactly where the timeline was and moved fast. Written offer in twenty-four hours, closed in eleven days. Foreclosure dismissed.",
    "name": "Darren W.",
    "location": "Uptown, Kenosha WI",
    "situation": "Pre-Foreclosure — Behind on Payments",
    "date": "August 2025"
  },
  {
    "quote": "After my divorce, I needed to sell the house fast and split the proceeds cleanly. Wisconsin judicial foreclosure can drag on for a year — I didn't want it to come to that. USA Home Buyers gave us one written offer, one closing date, and the proceeds split through our attorneys the same day.",
    "name": "Sandra K.",
    "location": "Lincoln Park, Kenosha WI",
    "situation": "Divorce Sale — Clean Settlement",
    "date": "February 2026"
  },
  {
    "quote": "I had a rental on 22nd Avenue that I'd owned for 12 years. Problem tenant, code violations from the city, and I was done being a landlord. USA Home Buyers bought it as-is with the tenant still there. The city violations weren't my problem anymore the day we closed.",
    "name": "Jim B.",
    "location": "Downtown Kenosha, WI",
    "situation": "Rental Property — Code Violations",
    "date": "January 2026"
  },
  {
    "quote": "Snap-on promoted me to their Milwaukee division and I had four weeks to figure out the house in North Kenosha. I wasn't going to spend two months on a listing. USA Home Buyers made a fair offer the same day we talked. I closed eight days later and had a week to find an apartment in Milwaukee.",
    "name": "Yvonne A.",
    "location": "North Kenosha, WI",
    "situation": "Relocation — Corporate Transfer",
    "date": "June 2025"
  },
  {
    "quote": "We had a grease fire in the kitchen that spread to the wall and the cabinet above the range before we got it out. Insurance gave us actual cash value — $19,000 on a kitchen that would cost $35,000 to rebuild. I wasn't going to fight that for six months. USA Home Buyers bought the house as-is in nine days.",
    "name": "Anthony S.",
    "location": "Southside, Kenosha WI",
    "situation": "Fire Damage — Kitchen Fire",
    "date": "February 2025"
  },
  {
    "quote": "We owned our Lakeview property for twenty-six years and the property taxes hit $6,400 this year. Both retired, two incomes gone to one Social Security check. The house had too many stairs for my husband's knees anyway. USA Home Buyers gave us a fair number and closed in seven days. We moved to a one-floor condo in Waukegan.",
    "name": "Eleanor and Frank M.",
    "location": "Lakeview, Kenosha WI",
    "situation": "Downsizing — Retirement",
    "date": "October 2025"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$12,000-$14,000)' },
  { label: 'WI realty transfer fee', cashBuyer: 'We cover everything', traditional: 'Seller pays $3 per $1,000' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Kenosha WI?',
    answer: 'USA Home Buyers can close in as few as 7 days in Kenosha WI. We send a written cash offer within 24 hours. Wisconsin is a judicial foreclosure state — once a lender files in Kenosha County Circuit Court, the process can take 10-12 months, but the judgment auction is final. If you\'re behind on payments, selling before the sheriff\'s sale is your best path to walking away with something.',
  },
  {
    question: 'How much will you pay for my Kenosha WI house?',
    answer: 'Cash offers for Kenosha homes typically range from 68-80% of fair market value. According to Zillow, the Kenosha median home value is approximately $225,000. A typical cash offer on a post-war bungalow or brick ranch on the north or south side runs $157,000-$180,000. We cover all closing costs including Wisconsin\'s realty transfer fee ($3 per $1,000 — seller pays on traditional sales).',
  },
  {
    question: 'What is the realty transfer fee when selling a house in Kenosha WI?',
    answer: 'Wisconsin charges a realty transfer fee of $3.00 per $1,000 of consideration on all real estate sales. This is a state fee — Kenosha County does not add a local surcharge. Entirely paid by the seller. On a $225,000 home, the fee is $675. When you sell to USA Home Buyers, we cover all closing costs. Source: Wisconsin Department of Revenue (revenue.wi.gov).',
  },
  {
    question: 'How does foreclosure work in Kenosha WI?',
    answer: 'Wisconsin is a judicial foreclosure state. Every foreclosure must be filed in Kenosha County Circuit Court. The typical timeline from first missed payment to confirmation of sheriff\'s sale is 10-14 months. After the sale, Wisconsin provides a 6-month redemption period for owner-occupied homes. Source: Wisconsin State Legislature (docs.legis.wisconsin.gov, Ch. 846 Wis. Stats.).',
  },
  {
    question: 'What areas near Kenosha do you buy in?',
    answer: 'All of Kenosha County. That includes Pleasant Prairie, Somers, Bristol, Salem, Twin Lakes, Silver Lake, and the northern Illinois suburbs of Winthrop Harbor, Zion, Antioch, and Gurnee. We also cover Racine County to the north. If you\'re not sure, call 888-440-5250.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Kenosha\'s post-war housing stock — brick ranches, Cape Cods, and bungalows from the 1940s-1960s — often needs significant updating. We buy in any condition: outdated kitchens and baths, older HVAC, storm damage, fire damage, water damage. Leave whatever you don\'t want.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company in Kenosha WI?',
    answer: 'Yes. We provide a written purchase agreement — a legally binding contract with price, terms, and closing date. You can verify our business at the Wisconsin Department of Financial Institutions (wdfi.wi.gov). We\'ve closed transactions throughout Kenosha County and Racine County.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about 5-10 questions about the property, and send a written cash offer within 24 hours. No pressure. The offer is a real number, not a range. If it works for you, you pick the closing date.',
  },
];

export default function KenosaWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Kenosha WI',
    description: 'Step-by-step process for selling your Kenosha home for cash in Kenosha County, Wisconsin',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Kenosha property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours — no obligation.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for your schedule.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Kenosha County title company, walk away with your cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[kenoshWILocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/kenosha-wi-hero-640.jpg 640w, /images/optimized/kenosha-wi-hero-828.jpg 828w, /images/optimized/kenosha-wi-hero-1080.jpg 1080w, /images/optimized/kenosha-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/kenosha-wi-hero-1200.jpg"
            alt="Kenosha WI neighborhood homes on a clear day — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Kenosha WI — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Kenosha WI and throughout Kenosha County — Downtown Kenosha, Allendale, Lincoln Park, and surrounding communities in Racine County. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Zillow, Kenosha median home values are around $225,000. We cover all closing costs including Wisconsin's realty transfer fee. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Kenosha WI and Kenosha County in any condition — brick ranches, bungalows, post-war single-families, rentals, estates, foreclosures. No repairs, no agent fees, no waiting.
            </p>
            <a
              href="tel:+18884405250"
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Kenosha WI Cash Offer"
              subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs."
              sourcePage="/markets/kenosha-wi"
            />
          </div>
        </div>
      </section>

        <VideoEmbed
        src="/videos/kenosha-wi/landing.mp4"
        title="Sell My House Fast Kenosha WI — USA Home Buyers"
        subtitle="Cash offers for Kenosha and Kenosha County homes — any condition"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
        📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
        If you need to sell your house fast in Kenosha, Wisconsin — you've found the right team. We're USA Home Buyers, and we purchase houses as-is, for cash, throughout Kenosha County. Whether your home needs repairs, you're behind on payments, going through a divorce, or you've inherited a property you don't know what to do with — we make the process simple. No agents. No fees. No repairs needed. We buy Kenosha homes in any condition — from Uptown and Harbor Park to the South Side corridor. Written cash offer within 24 hours. Close in as few as seven days on your schedule. Call us now at 888-440-5250. That's 888-440-5250.
        </div>
        </details>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Kenosha WI Real Estate Market — What Sellers Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            Kenosha sits on Lake Michigan between Chicago and Milwaukee, 35 miles north of Chicago's O'Hare and 30 miles south of downtown Milwaukee. The city grew as an industrial center — American Motors Corporation operated its flagship plant here until 1988, and that industrial heritage shapes the housing stock. Most of Kenosha's residential neighborhoods consist of brick bungalows, Cape Cods, and ranch homes built from the 1920s through the 1960s for the factory workforce.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Kenosha WI</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$225,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$235,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">~35 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Realty transfer fee</td><td className="p-3">$3.00 per $1,000 (seller pays)</td><td className="p-3 text-gray-500">WI Dept. of Revenue</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (court action required, 10-14 months)</td><td className="p-3 text-gray-500">Wis. Stats. Ch. 846</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Primary county</td><td className="p-3">Kenosha County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Kenosha WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/kenosha-wi/inherited-property', description: 'Sell an inherited Kenosha WI home through Kenosha County Circuit Court Probate Division' },
            { label: 'Going Through Divorce', href: '/markets/kenosha-wi/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/kenosha-wi/foreclosure', description: 'Wisconsin judicial foreclosure (Ch. 846, 10-14 months) — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/kenosha-wi/probate', description: 'We work with Kenosha County Circuit Court Probate Division cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/kenosha-wi/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/kenosha-wi/code-violations', description: 'Open violations, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/kenosha-wi/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Kenosha WI Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Kenosha WI
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $235,000 Kenosha home, a 5-6% agent commission runs $11,750-$14,100. Add Wisconsin's realty transfer fee (~$705), carrying costs during 35+ days on market, and potential repairs on post-war housing stock. Many Kenosha bungalows have knob-and-tube or aluminum wiring that conventional lenders won't accept — limiting your buyer pool to cash buyers regardless. A direct cash offer from us eliminates that entire calculation.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Kenosha WI Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including WI realty transfer fee."
            sourcePage="/markets/kenosha-wi"
          />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Kenosha WI Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Kenosha and Kenosha County WI
          </h2>
          <p className="text-gray-700 mb-4">
            Our Kenosha coverage includes the entire city — Downtown Kenosha on the lakefront with its older Victorian-era homes, Uptown to the north, Allendale and Lincoln Park on the south and west sides with post-war brick ranches and bungalows, and Pleasant Prairie Township to the south with newer suburban development.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve Racine to the north, Somers and Bristol townships, Salem and Twin Lakes in the western part of the county, and the northern Illinois communities of Winthrop Harbor, Zion, Antioch, and Gurnee just across the state line.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Downtown Kenosha', 'Uptown', 'Allendale', 'Lincoln Park', 'Pleasant Prairie', 'Somers', 'Bristol', 'Salem', 'Twin Lakes', 'Silver Lake', 'Racine', 'Winthrop Harbor', 'Zion', 'Antioch'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Kenosha WI Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From lakefront Victorians to Allendale brick ranches — we buy in every Kenosha neighborhood and Kenosha County community.</p>
          <Link href="/markets/kenosha-wi/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <BlogClusterLinks marketSlug="kenosha-wi" cityName="Kenosha" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Kenosha WI home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/kenosha-wi" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Kenosha WI Home?" sourcePage="/markets/kenosha-wi" />
        </section>
      </div>
    </>
  );
}
