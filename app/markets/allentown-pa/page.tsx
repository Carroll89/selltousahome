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
import { faqSchema, howToSchema, allentownLocalBusinessSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Allentown PA | Cash Offer in 24 Hours',
  description:
    'We buy houses in Allentown PA for cash, as-is, in any condition. Written offer in 24 hours, close in 7 days. No repairs, no fees. Hablamos español. Serving all of Lehigh County.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa` },
  openGraph: {
    images: [{ url: '/images/allentown-pa-representative-hero.jpg', width: 1200, height: 630, alt: 'Representative Allentown PA brick rowhouses — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    "quote": "My uncle left me a row home on the South Side — built in the 1920s, plaster walls, older electrical. I live in Philadelphia and had no way to manage it from there. USA Home Buyers made a fair offer, closed in 11 days, and I never had to deal with the maintenance or the tenant situation.",
    "name": "Marcus D.",
    "location": "South Side, Allentown PA",
    "situation": "Inherited Property — Out-of-State Heir",
    "date": "March 2026"
  },
  {
    "quote": "I was behind on my mortgage and getting letters from the bank. I didn't realize I could sell and still protect my credit and walk away with something. The offer was fair and we closed in 10 days. I wish I had called sooner.",
    "name": "Rosa V.",
    "location": "Allentown, PA",
    "situation": "Behind on Payments — Pre-Foreclosure",
    "date": "October 2025"
  },
  {
    "quote": "Me and my ex-husband couldn't be in the same house, let alone agree on repairs. The judge said we had ninety days to sell the property on Hamilton Boulevard or he'd appoint a commissioner. USA Home Buyers gave us a written offer the same week. My ex signed, I signed, we closed in thirteen days.",
    "name": "Yolanda F.",
    "location": "West Park, Allentown PA",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "July 2025"
  },
  {
    "quote": "I had a rental on the West End with a non-paying tenant and code violations piling up. I just wanted out. USA Home Buyers bought it tenant-occupied, violations and all. Done in two weeks.",
    "name": "Thomas K.",
    "location": "West End, Allentown PA",
    "situation": "Rental Property — Code Violations",
    "date": "January 2026"
  },
  {
    "quote": "Air Products transferred me to their Houston office and gave me four weeks to report. My wife and I had the house listed briefly but the market didn't move fast enough. USA Home Buyers made an offer we could live with. Closed ten days later and I started in Houston on time.",
    "name": "Craig W.",
    "location": "Trexlertown, PA",
    "situation": "Relocation — Corporate Transfer",
    "date": "June 2025"
  },
  {
    "quote": "Jordan Creek flooded our basement twice in three years. The last time, water came up through the floor drain and destroyed the furnace and water heater. The remediation estimate was $34,000. USA Home Buyers came out, knew exactly what they were looking at, and had a written offer the next morning. Closed in eleven days.",
    "name": "Brenda K.",
    "location": "South Allentown, PA",
    "situation": "Flood Damage — Repeated Basement Flooding",
    "date": "November 2025"
  },
  {
    "quote": "My wife passed and I was rattling around a three-bedroom house on Brodhead Avenue by myself. Seventy-four years old, arthritis, couldn't keep up with the yard or the repairs. USA Home Buyers closed in eight days. I moved into the senior community the following week.",
    "name": "Frank D.",
    "location": "Fountain Hill, PA",
    "situation": "Downsizing — Widowed, Senior Transition",
    "date": "February 2025"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$12,000-$15,000)' },
  { label: 'Seller closing costs', cashBuyer: 'We cover everything', traditional: '~1-3% + 1% PA transfer tax' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% of FMV (after all costs)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Allentown PA?',
    answer: 'Once you accept a written offer, we typically close in 7-14 days. We send the written offer within 24 hours of your inquiry. Because we pay cash — no bank financing, no mortgage contingency — there\'s no waiting on lender approval. Our fastest recorded close in the Lehigh Valley was 6 days.',
  },
  {
    question: 'How much will you pay for my Allentown house?',
    answer: 'We pay 70-80% of fair market value. With Allentown median sale prices around $255,000, that typically means a cash offer of roughly $178,500-$204,000 for a median-priced home before property-specific adjustments. There are no agent commissions (saving 5-6%), no closing costs (we cover everything), and no repair expenses.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. We buy in any condition — fire damage, foundation problems, mold, code violations, hoarding, unfinished renovations. Allentown has a large stock of older homes (pre-1960) with deferred maintenance — we buy them all. You don\'t need to clean, fix, update, or stage anything.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company in Allentown PA?',
    answer: 'We\'re a BBB-accredited business with a verifiable history of closed sales in Lehigh and Northampton Counties. Every offer we make is in writing — a formal purchase agreement with price, terms, and closing date. You can verify our business registration through corporations.pa.gov.',
  },
  {
    question: 'What areas near Allentown do you buy in?',
    answer: 'All of Lehigh County and Northampton County. That includes Bethlehem, Easton, Whitehall Township, Northampton Borough, Emmaus, Catasauqua, Fountain Hill, Coplay, and Slatington. We serve the full Lehigh Valley metro area.',
  },
  {
    question: 'What are my closing costs when selling to a cash buyer?',
    answer: 'Zero. We cover all closing costs — title fees, transfer taxes, recording fees, everything. The offer we make is what you walk away with. No surprises at the closing table.',
  },
  {
    question: 'I\'m a landlord with a rental property in Allentown — do you buy tenant-occupied homes?',
    answer: 'Yes. Allentown is 58% renter-occupied — one of the highest rates in PA — and we regularly buy tenant-occupied rental properties throughout the city and Lehigh Valley. You don\'t need the tenant to leave before closing. We take over the tenant relationship after closing. No eviction process required.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call you within hours during business hours. We\'ll ask about 5-10 questions about the property — condition, situation, what you need from a timeline. Within 24 hours, you receive a written cash offer. No high-pressure sales calls. The offer stands on its own.',
  },
  {
    question: '¿Hablan español? / Do you have Spanish-speaking staff?',
    answer: 'Sí, hablamos español. Allentown\'s Hispanic community makes up over 50% of the population — we serve the entire community and can handle the process in English or Spanish, from the first call through closing. Call us at (888) 274-5006.',
  },
];

const allentownFAQSchema = faqSchema(
  FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
);

export default function AllentownMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[
        allentownLocalBusinessSchema,
        allentownFAQSchema,
        howToSchema,
        videoObjectSchema({
          name: 'Sell Your House Fast in Allentown, PA',
          description:
            'A short overview of how USA Home Buyers helps Allentown, PA homeowners sell as-is for cash with no repairs, no agent commissions, and a no-obligation offer.',
          contentUrl: `${SITE_URL}/videos/allentown-pa/landing.mp4`,
          thumbnailUrl: `${SITE_URL}/videos/allentown-pa/landing-poster.jpg`,
          uploadDate: '2026-05-10',
        }),
      ]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/allentown-pa-representative-hero-640.jpg 640w, /images/optimized/allentown-pa-representative-hero-828.jpg 828w, /images/optimized/allentown-pa-representative-hero-1080.jpg 1080w, /images/optimized/allentown-pa-representative-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/allentown-pa-representative-hero-1200.jpg"
            alt="Representative Allentown PA brick rowhouses — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 ring-1 ring-white/20 mb-3">
              Allentown cash home buyer · Written offer in 24 hours
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Sell Your House Fast in Allentown, PA — Cash Offer in 24 Hours
            </h1>
            <p className="text-base md:text-lg text-blue-100 lg:hidden">
              Get a written cash offer for your Allentown house in any condition — no repairs, no cleaning, no agent fees.
            </p>
          </div>
          <div className="order-2 w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24">
            <CashOfferForm
              variant="hero"
              headline="Get Your Allentown Cash Offer"
              subheadline="Tell us where the property is. We’ll call quickly and send a written offer within 24 hours."
              sourcePage="/markets/allentown-pa"
            />
          </div>
          <div className="order-3 lg:col-start-1 lg:row-start-2">
            <p className="hidden lg:block text-base md:text-lg text-blue-100 mb-4">
              Get a written cash offer for your Allentown house in any condition — no repairs, no cleaning, no agent fees.
              Serving Lehigh County and Northampton County, including Bethlehem, Easton, Whitehall, and Fountain Hill.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 text-blue-50 text-sm mb-4">
              <span>✓ No repairs or cleaning</span>
              <span>✓ No commissions</span>
              <span>✓ We pay closing costs</span>
              <span>✓ Close in as few as 7 days</span>
            </div>
            <a href={`tel:${PHONE}`} className="flex w-full sm:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">Quick Answer: Sell Your House Fast in Allentown, PA</h2>
          <p className="text-gray-700 leading-relaxed">USA Home Buyers purchases houses in Allentown, PA for cash — as-is, in any condition, with no repairs and no agent fees. According to Zillow Research city ZHVI (2026-03-31), the typical Allentown home value is $309,699 (+3.8% YoY); Redfin city housing-market data for March 2026 shows a $255,000 median sale price (+5.2% YoY), $167 per square foot, and 15 median days on market. We skip the market process entirely — written offer within 24 hours, closing in as few as 7 days. We serve all of Allentown, Bethlehem, Easton, and Lehigh and Northampton Counties.</p>
        </section>

        {/* VIDEO_CAPTION_EXCEPTION: captions pending transcript/audio review — date:2026-04-28 approver:Dan */}
        <VideoEmbed
          src="/videos/allentown-pa/landing.mp4"
          title="Sell Your House Fast in Allentown, PA"
          poster="/videos/allentown-pa/landing-poster.jpg"
          captionsSrc="/videos/allentown-pa/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for Allentown, PA homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p>If you need to sell a house in Allentown, PA, USA Home Buyers can make a no-obligation cash offer. We buy houses as-is, so you do not have to make repairs, clean out the property, or pay agent commissions. Tell us about the house and your timeline. We review the property, answer your questions, and put the offer in writing. If the offer works for you, you choose the closing date. Call 888-274-5006 to get started.</p>
          </div>
        </details>




        {/* How It Works */}
        <HowItWorks heading="How Selling Your Allentown House for Cash Works" />

        {/* Situations */}
        <SituationLinks heading="We Buy Houses in Allentown in Any Situation" />

        {/* Situation-Specific Links */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Situations We Handle in Allentown</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Facing foreclosure', href: '/markets/allentown-pa/foreclosure', desc: 'Sell before the Lehigh County sheriff sale and protect your equity. We close in 7-14 days.' },
              { label: 'Inherited a property', href: '/markets/allentown-pa/inherited-property', desc: 'Estate sales, out-of-state heirs, probate complications — we handle them all.' },
              { label: 'Probate property', href: '/markets/allentown-pa/probate', desc: 'We work around probate timelines and coordinate directly with Lehigh County Register of Wills.' },
              { label: 'Going through divorce', href: '/markets/allentown-pa/divorce-sale', desc: 'A cash sale closes fast and lets both spouses move forward without months of showings in a shared home.' },
              { label: 'Code violations or serious disrepair', href: '/markets/allentown-pa/code-violations', desc: 'City code violations, condemned properties, or houses the city has cited — we buy them as-is.' },
              { label: 'Landlord with tenants who won\'t leave', href: '/markets/allentown-pa/tenant-occupied', desc: 'We buy tenant-occupied properties in Allentown — no eviction required. Ideal in a city that\'s 58% renter-occupied.' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition">
                <p className="font-semibold text-brand-primary mb-1">{item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Market Data */}
        <section className="my-12 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            What&apos;s the Allentown PA Housing Market Doing in 2026?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Median home value (Zillow ZHVI)', '$309,699'],
                  ['Median sale price (Redfin)', '$255,000'],
                  ['Year-over-year price change', '+3.8% (Zillow city ZHVI, 2026-03-31) / +5.2% (Redfin city, Mar 2026)'],
                  ['Average days on market', '15 days'],
                  ['Redfin Compete Score', '88/100 — Very Competitive'],
                  ['Active distress listings', '783+ (ForeclosureListings.com, April 2026)'],
                  ['Cash offer range (typical Allentown home)', '$178,500–$204,000'],
                  ['PA transfer tax', '2% (split buyer/seller — 1% each)'],
                  ['Typical realtor commission', '5–6%'],
                ].map(([metric, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark rounded-l">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary rounded-r">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400">Provider data: Redfin city March 2026; Zillow Research city ZHVI 2026-03-31. Distress listing count is April 2026 source-specific.</p>
          <p className="mt-2 text-sm text-gray-600">
            Allentown is a competitive seller&apos;s market — 88/100 Redfin Compete Score, averaging 6 offers per home. But competitive doesn&apos;t mean easy: 15 days on market, then 30-45 days for financing contingency. A cash sale closes the whole thing in 7-14 days.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/markets/allentown-pa/market-report" className="text-brand-primary hover:underline">
              See the full Allentown monthly market report →
            </Link>
          </p>
        </section>

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Allentown Homeowners Are Saying" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Allentown: The Numbers
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            Allentown&apos;s older housing stock means inspectors frequently find issues on older row homes and duplexes. When a buyer&apos;s inspector finds $15,000 in deferred maintenance and the seller has to negotiate mid-deal, the gap between cash and traditional shrinks fast. A cash sale makes the most sense when speed, certainty, or condition is a factor.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              See full comparison: Cash Offer vs. Listing in Allentown →
            </Link>
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Allentown Cash Offer"
            subheadline="No obligation. Written offer in 24 hours."
            sourcePage="/markets/allentown-pa"
          />
        </section>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Allentown Home for Cash" />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout the Lehigh Valley
          </h2>
          <p className="text-gray-700 mb-4">
            Our Allentown market covers the full city — South Side (18102), Center City, West End, East Side — plus Fountain Hill Borough, which is surrounded by Allentown and has high distress inventory. We&apos;ve purchased homes throughout the city: row homes on the South Side, single-families in the West End, duplexes in Center City.
          </p>
          <p className="text-gray-700 mb-4">
            Beyond Allentown city limits: Bethlehem, Easton, Whitehall Township, Northampton Borough, Emmaus, Catasauqua, Coplay, Slatington, and Coopersburg. The entire Lehigh Valley metro is our market.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Allentown', 'Bethlehem', 'Easton', 'Whitehall Township', 'Fountain Hill', 'Northampton', 'Emmaus', 'Catasauqua', 'Coplay', 'South Bethlehem', 'Slatington', 'Coopersburg', 'Macungie', 'Nazareth'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        {/* Allentown Seller Resources Hub */}
        <section className="my-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Allentown Seller Resources</h2>
          <p className="text-gray-600 mb-6">
            Guides, market data, and situation-specific help for Allentown and Lehigh County homeowners — no content from other markets.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              { href: '/markets/allentown-pa/resources', label: 'All Allentown Seller Resources →', primary: true },
              { href: '/guides/sell-house-fast-allentown-pa-2026', label: 'Allentown Seller Guide 2026', primary: false },
              { href: '/markets/allentown-pa/market-report', label: 'Allentown Market Report', primary: false },
              { href: '/blog/allentown-pa-sell-house-fast-2026', label: 'Allentown 2026 Market Article', primary: false },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-4 py-3 font-medium transition text-sm ${
                  item.primary
                    ? 'bg-brand-primary text-white hover:bg-brand-dark col-span-full text-center text-base py-4'
                    : 'bg-white border border-gray-200 text-brand-primary hover:border-brand-primary hover:shadow-sm'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            All links above go to Allentown-specific content. The resources hub also lists foreclosure, divorce, probate, code violations, inherited, and tenant-occupied guides for Allentown.
          </p>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks marketSlug="allentown-pa" cityName="Allentown" />

        {/* Guided Survey Form */}
        <section className="my-12 bg-brand-light rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for your Allentown home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/allentown-pa" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Allentown Home?" sourcePage="/markets/allentown-pa" />
        </section>
      </div>
    </>
  );
}
