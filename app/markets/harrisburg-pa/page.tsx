import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { harrisburgLocalBusinessSchema, harrisburgFAQSchema, howToSchema } from '@/lib/schema';
import { PHONE } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Harrisburg PA | Cash Offer in 24 Hours',
  description:
    'We buy houses in Harrisburg PA for cash, as-is, in any condition. Written offer in 24 hours, close in 7 days. No repairs, no fees.',
  alternates: { canonical: 'https://selltousahome.com/markets/harrisburg-pa' },
  openGraph: {
    images: [{ url: '/images/harrisburg-landmark-hero.jpg', width: 1200, height: 630, alt: 'Pennsylvania State Capitol and Harrisburg row homes — Sell Your House Fast in Harrisburg PA' }],
  },
};

const TESTIMONIALS = [
  {
    quote: 'After my mother passed, my brother and I inherited her house off Derry Street. Neither of us live in Harrisburg anymore, and the thought of cleaning it out and repairing it before listing felt impossible. USA Home Buyers made us a fair offer and closed in 12 days. We didn\'t have to do a thing.',
    name: 'Sandra M.',
    location: 'Paxtang, PA',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
  },
  {
    quote: 'I was four months behind on my mortgage and the letters were piling up. I didn\'t know I could sell and still come out with money. USA Home Buyers explained everything, the offer was fair, and we closed before things got any worse.',
    name: 'James R.',
    location: 'Steelton, PA',
    situation: 'Behind on Payments — Pre-Foreclosure',
    date: 'February 2026',
  },
  {
    quote: 'I had a tenant in my rental on Green Street who stopped paying rent and wouldn\'t leave. USA Home Buyers bought the property with the tenant still in it. That was it. Done.',
    name: 'Carol T.',
    location: 'Harrisburg, PA',
    situation: 'Rental Property — Problem Tenant',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$7,000-$14,000)' },
  { label: 'Seller closing costs', cashBuyer: 'We cover everything', traditional: '~1-3% + 1% PA transfer tax' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% of FMV (after all costs)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Harrisburg PA?',
    answer: 'Once you accept a written offer, we typically close in 7-14 days. We send the written offer within 24 hours of your inquiry. Because we pay cash — no bank financing, no mortgage contingency — there\'s no waiting on lender approval. Our fastest recorded close in the Harrisburg area was 5 days.',
  },
  {
    question: 'How much will you pay for my Harrisburg house?',
    answer: 'We pay 70-80% of fair market value. For a Harrisburg home in the $145,000-$234,000 range, that typically means a cash offer of $100,000-$187,000. There are no agent commissions (saving 5-6%), no closing costs (we cover everything), and no repair expenses.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. We buy in any condition — fire damage, foundation problems, mold, hoarding, unfinished renovations, severe deferred maintenance. You don\'t need to clean, fix, update, or stage anything. Take whatever you want from the property.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company in Harrisburg PA?',
    answer: 'We\'re a BBB-accredited business with a verifiable history of closed sales in Dauphin and Cumberland Counties. Every offer we make is in writing — a formal purchase agreement with price, terms, and closing date. You can verify our business registration through corporations.pa.gov.',
  },
  {
    question: 'What areas near Harrisburg do you buy in?',
    answer: 'All of Dauphin County and Cumberland County. That includes Camp Hill, Mechanicsburg, Carlisle, Lemoyne, Steelton, Hershey, Palmyra, Hummelstown, Middletown, Enola, New Cumberland, and Wormleysburg. If you\'re not sure whether we cover your area, call us.',
  },
  {
    question: 'What are my closing costs when selling to a cash buyer?',
    answer: 'Zero. We cover all closing costs — title fees, transfer taxes, recording fees, everything. The offer we make is what you walk away with. No surprises at the closing table.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'We can still have a conversation. If the property is underwater — meaning the mortgage balance is higher than the market value — a short sale may be an option, where the lender agrees to accept less than the full balance. Call us and we\'ll walk through what\'s possible.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call you within hours during business hours. We\'ll ask about 5-10 questions about the property — condition, situation, what you need from a timeline. Within 24 hours, you receive a written cash offer. No high-pressure sales calls. The offer stands on its own.',
  },
];

export default function HarrisburgMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[harrisburgLocalBusinessSchema, harrisburgFAQSchema, howToSchema]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-landmark-hero.jpg"
          alt="Harrisburg PA homes — we buy houses fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in Harrisburg, PA — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              USA Home Buyers purchases houses in Harrisburg, PA for cash in any condition — no repairs, no cleaning,
              no agent fees. We serve all of Dauphin County and Cumberland County, including Camp Hill, Mechanicsburg,
              Carlisle, and Steelton. Written cash offer within 24 hours, close in as few as 7 days.
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
            <CashOfferForm variant="hero" sourcePage="/markets/harrisburg-pa" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0fc/QS_oBfAsYUxtHMdVSx8CT_harrisburg-main.mp4"
        title="Sell Your House Fast in Harrisburg, PA"
        poster="/images/video-posters/harrisburg-main-poster.jpg"
        subtitle="See how we help homeowners in Harrisburg sell fast for cash"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Hey, if you&apos;re looking to sell your house fast in Harrisburg, PA, we can help. I&apos;m with USA Home Buyers — we buy houses right here in Harrisburg and all of Dauphin County, and we do it fast.</p>
            <p className="mb-3">Here&apos;s how it works. You call us or fill out our form online. We ask you maybe five or ten questions about the property — the condition, your situation, what kind of timeline you need. Within 24 hours, you get a written cash offer. No pressure, no obligation. If you accept, we set a closing date that works for you. We&apos;ve closed in as few as five days in the Harrisburg area.</p>
            <p className="mb-3">Why go the cash route? The Harrisburg market has a median home value around $234,000, and the average days to pending is just five days — so it&apos;s a fast market. But once you go pending on the MLS, you&apos;re still looking at 45 to 60 more days for inspections, appraisals, and mortgage underwriting. That&apos;s two months of uncertainty. If the financing falls through, you start over.</p>
            <p className="mb-3">We don&apos;t use financing. We pay cash. There&apos;s no appraisal contingency, no mortgage approval, no deal falling through at the last minute. No repairs, no cleaning, no agent commissions. We cover all closing costs.</p>
            <p className="mb-3">We serve all of Harrisburg — Camp Hill, Mechanicsburg, Carlisle, Steelton, and surrounding Dauphin County communities. Whatever your situation, we&apos;ve handled it before.</p>
            <p className="mb-3">Give us a call at 888-440-5250. We&apos;re here to make this as simple as possible.</p>
        </div>
      </details>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works */}
        <HowItWorks heading="How Selling Your Harrisburg House for Cash Works" />

        {/* Situations */}
        <SituationLinks heading="We Buy Houses in Harrisburg in Any Situation" />

        {/* Market Data */}
        <section className="my-12 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            What&apos;s the Harrisburg PA Housing Market Doing in 2026?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Median home value (Zillow ZHVI)', '$234,569'],
                  ['Median sale price — city limits (Redfin)', '~$145,000'],
                  ['Average days to pending', '5 days'],
                  ['Traditional sale timeline (offer to close)', '45-60 days'],
                  ['Cash offer range (typical Harrisburg home)', '$100,000–$190,000'],
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
            The Harrisburg market is fast — five days to pending is quick. But &quot;pending&quot; and &quot;closed&quot; are different.
            After an offer gets accepted, inspections, appraisals, and financing still take 45-60 days.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/markets/harrisburg-pa/market-report" className="text-brand-primary hover:underline">
              See the full Harrisburg monthly market report →
            </Link>
          </p>
        </section>

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Harrisburg Homeowners Are Saying" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Harrisburg: The Numbers
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            The math is more nuanced than it looks. If your home needs $12,000 in repairs, a buyer&apos;s inspector finds
            them and you negotiate — the gap between cash and traditional shrinks fast. A cash sale makes the most
            sense when speed, certainty, or condition is a problem.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              See full comparison: Cash Offer vs. Listing in Harrisburg →
            </Link>
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Harrisburg Cash Offer"
            subheadline="No obligation. Written offer in 24 hours."
            sourcePage="/markets/harrisburg-pa"
          />
        </section>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Harrisburg Home for Cash" />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout the Harrisburg Area
          </h2>
          <p className="text-gray-700 mb-4">
            Our primary market is Harrisburg proper and surrounding Dauphin County: Steelton, Penbrook, Paxtang,
            Highspire, Middletown, Hummelstown, Hershey, and Palmyra. We&apos;ve bought homes near the Capitol complex,
            along the Susquehanna waterfront, in Allison Hill, and throughout the city.
          </p>
          <p className="text-gray-700 mb-4">
            In Cumberland County: Camp Hill, Mechanicsburg, Carlisle, Lemoyne, New Cumberland, Wormleysburg, and Enola.
            Our reach extends into Perry County, Lebanon County, and York County.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Harrisburg', 'Steelton', 'Camp Hill', 'Mechanicsburg', 'Carlisle', 'Lemoyne', 'Hershey', 'Penbrook', 'Paxtang', 'Middletown', 'Hummelstown', 'Palmyra', 'Enola', 'New Cumberland'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks marketSlug="harrisburg-pa" cityName="Harrisburg" />

        {/* Guided Survey Form */}
        <section className="my-12 bg-brand-light rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for your Harrisburg home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/harrisburg-pa" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Harrisburg Home?" sourcePage="/markets/harrisburg-pa" />
        </section>
      </div>
    </>
  );
}
