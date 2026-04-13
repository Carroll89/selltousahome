import type { Metadata } from 'next';

import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { faqSchema, howToSchema, allentownLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Allentown PA | Cash Offer in 24 Hours',
  description:
    'We buy houses in Allentown PA for cash, as-is, in any condition. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving all of Lehigh County.',
  alternates: { canonical: `${SITE_URL}/markets/allentown-pa` },
  openGraph: {
    images: [{ url: '/images/allentown-landmark-hero.jpg', width: 1200, height: 630, alt: 'Allentown Steel Stacks and Victorian row homes — Sell Your House Fast in Allentown PA' }],
  },
};

const TESTIMONIALS = [
  {
    quote: 'My uncle left me a row home on the South Side — I live in Philadelphia and had no way to manage it from there. USA Home Buyers made me a fair offer, closed in 11 days, and I never had to deal with the maintenance or the tenant situation. Incredibly easy process.',
    name: 'Marcus D.',
    location: 'Lehigh Valley, PA',
    situation: 'Inherited Property — Out-of-State Heir',
    date: 'March 2026',
  },
  {
    quote: 'I was behind on my mortgage and getting letters from the bank. I didn\'t realize I could sell and still protect my credit and walk away with something. The offer was fair and we closed fast. I wish I had called sooner.',
    name: 'Rosa V.',
    location: 'Allentown, PA',
    situation: 'Behind on Payments — Pre-Foreclosure',
    date: 'February 2026',
  },
  {
    quote: 'I had a rental on the West End with a non-paying tenant and code violations piling up. I just wanted out. USA Home Buyers bought it tenant-occupied, violations and all. Done in two weeks.',
    name: 'Thomas K.',
    location: 'Allentown, PA',
    situation: 'Rental Property — Code Violations',
    date: 'January 2026',
  },
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
    answer: 'We pay 70-80% of fair market value. With Allentown median sale prices around $245,000, that typically means a cash offer of $172,000-$196,000 for a median-priced home. There are no agent commissions (saving 5-6%), no closing costs (we cover everything), and no repair expenses.',
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
];

const allentownFAQSchema = faqSchema(
  FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))
);

export default function AllentownMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[allentownLocalBusinessSchema, allentownFAQSchema, howToSchema]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/allentown-landmark-hero-640.jpg 640w, /images/optimized/allentown-landmark-hero-828.jpg 828w, /images/optimized/allentown-landmark-hero-1080.jpg 1080w, /images/optimized/allentown-landmark-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/allentown-landmark-hero-1200.jpg"
            alt="Allentown PA homes — we buy houses fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in Allentown, PA — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              USA Home Buyers purchases houses in Allentown, PA for cash in any condition — no repairs, no cleaning,
              no agent fees. We serve all of Lehigh County and Northampton County, including Bethlehem, Easton,
              Whitehall, and Fountain Hill. Written cash offer within 24 hours, close in as few as 7 days.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ No repairs</span>
              <span>✓ No commissions</span>
              <span>✓ We pay closing costs</span>
              <span>✓ Close in 7 days</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/allentown-pa" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0f8/zLYouEqILs7_2R7GIM9GB_allentown-main.mp4"
        title="Sell Your House Fast in Allentown, PA"
        poster="/images/video-posters/allentown-main-poster.jpg"
        subtitle="See how we help homeowners in Allentown sell fast for cash — no repairs, no fees"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Hey, if you need to sell your house fast in Allentown, PA, I want to tell you exactly how we work. I&apos;m with USA Home Buyers. We buy houses in Allentown and all of Lehigh County and Northampton County for cash, as-is, with no repairs and no agent fees.</p>
            <p className="mb-3">Here&apos;s the Allentown market right now in 2026. Median home value is around $267,000 per Zillow, with median sale prices on Redfin coming in around $245,000. Average days to pending is 29 days — it&apos;s an active market. But after you go pending, you&apos;re still 45 to 60 days from closing. That&apos;s two to three months from listing to keys changing hands.</p>
            <p className="mb-3">We short-circuit all of that. You contact us, we ask a few questions about your property and situation, and within 24 hours you have a written cash offer. If you accept, you choose the closing date. Our fastest close in the Lehigh Valley was six days.</p>
            <p className="mb-3">No repairs. No cleaning. No staging. No open houses. No agent commissions eating 5 to 6 percent of your sale price. We cover all closing costs.</p>
            <p className="mb-3">We serve all of Allentown — the South Side, West End, Fountain Hill, Whitehall, Bethlehem, Easton, Northampton Borough, Emmaus, Catasauqua, and every corner of Lehigh and Northampton County. Whatever your situation — estate, divorce, foreclosure, bad condition, problem tenant — we&apos;ve handled it before.</p>
            <p className="mb-3">Call 888-440-5250 to get your offer started. We&apos;re ready today.</p>
        </div>
      </details>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  ['Median home value (Zillow ZHVI)', '$267,465'],
                  ['Median sale price (Redfin)', '$245,000'],
                  ['Year-over-year price change', '+7.0% (Zillow) / +2.1% (Redfin)'],
                  ['Average days on market', '29 days'],
                  ['Redfin Compete Score', '88/100 — Very Competitive'],
                  ['Active distress listings', '783+ (ForeclosureListings.com, April 2026)'],
                  ['Cash offer range (typical Allentown home)', '$172,000–$196,000'],
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
          <p className="mt-4 text-xs text-gray-400">Market data last updated: April 2026</p>
          <p className="mt-2 text-sm text-gray-600">
            Allentown is a competitive seller&apos;s market — 88/100 Redfin Compete Score, averaging 6 offers per home. But competitive doesn&apos;t mean easy: 29 days on market, then 30-45 days for financing contingency. A cash sale closes the whole thing in 7-14 days.
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
