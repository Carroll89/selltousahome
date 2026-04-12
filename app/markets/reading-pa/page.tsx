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
import { readingLocalBusinessSchema, readingFAQSchema, howToSchema, videoObjectSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Reading PA | Cash Offer in 24 Hours',
  description:
    'We buy houses in Reading PA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Hablamos español. Serving Berks County.',
  alternates: { canonical: `${SITE_URL}/markets/reading-pa` },
  openGraph: {
    images: [{ url: '/images/reading-landmark-hero.jpg', width: 1200, height: 630, alt: 'Reading PA brick row homes — Sell Your House Fast in Reading PA' }],
  },
};

const TESTIMONIALS = [
  {
    quote: 'My mother left us her house on Hampden Boulevard after she passed. It needed a new roof, the electrical was old, and none of us had the money to fix it up for the market. USA Home Buyers gave us a fair cash offer and closed in 10 days. We didn\'t touch a thing.',
    name: 'Maria R.',
    location: 'Hampden Heights, Reading PA',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
  },
  {
    quote: 'I was three months behind on my mortgage on my row home in East Reading. I didn\'t know I could sell and still walk away with money. The process was explained in Spanish, which made a huge difference. We closed before anything got worse.',
    name: 'Carlos V.',
    location: 'East Reading, PA',
    situation: 'Pre-Foreclosure — Behind on Mortgage',
    date: 'February 2026',
  },
  {
    quote: 'I had a rental property near GoggleWorks with a tenant who hadn\'t paid rent in four months and wouldn\'t leave. USA Home Buyers bought it with the tenant still inside. Done. That was it.',
    name: 'Patricia M.',
    location: 'Reading, PA',
    situation: 'Rental Property — Problem Tenant',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$9,000-$13,000)' },
  { label: 'Reading transfer tax (5%)', cashBuyer: 'We cover everything', traditional: 'Seller owes ~$7,400 city portion' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% of FMV (before costs)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Reading PA?',
    answer: 'Once you accept a written offer, we typically close in 7-14 days. We send the written offer within 24 hours of your inquiry. Because we pay cash — no bank financing, no mortgage contingency — there\'s no waiting on lender approval.',
  },
  {
    question: 'What is Reading PA\'s transfer tax and how does it affect sellers?',
    answer: 'Reading PA has one of the highest transfer taxes in Pennsylvania — 5% total (4% City of Reading local tax + 1% PA state tax). On a $185,000 home, that\'s $9,250 in transfer taxes alone. Most of Berks County outside Reading pays only 2%. By convention, the seller pays the local portion (4% = $7,400) and the buyer pays state (1%). When you sell to us, we cover all closing costs including transfer taxes. That\'s a meaningful savings compared to listing on the MLS.',
  },
  {
    question: '¿Hablan español? / Do you have Spanish-speaking staff?',
    answer: 'Sí, hablamos español. We serve Reading\'s majority-Hispanic community and can handle the entire process in English or Spanish — from the initial call through closing. Call us at (717) 576-8192.',
  },
  {
    question: 'How much will you pay for my Reading house?',
    answer: 'We pay 70-80% of fair market value. Reading\'s Zillow ZHVI is $227,041 and the Redfin median sale price is $185,000 (Feb 2026). Cash offers for typical Reading homes typically range from $130,000-$182,000. There are no agent commissions, no closing costs, and no repair expenses — we cover all of that.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Reading\'s housing stock is 56% pre-1939 — lead paint, aging electrical, old plumbing, and deferred maintenance are the rule here, not the exception. We buy in any condition. You don\'t need to repair, clean, or stage anything. Take what you want, leave the rest.',
  },
  {
    question: 'What neighborhoods in Reading do you buy in?',
    answer: 'All of Reading and Berks County — College Heights, Hampden Heights, Centre Park Historic District, Millmont, East Reading, Downtown Reading, GoggleWorks/Callowhill, and Mount Penn. We also serve Wyomissing, Shillington, Sinking Spring, Muhlenberg, Kutztown, Boyertown, and Pottstown.',
  },
  {
    question: 'What if my Reading row home has code violations?',
    answer: 'We buy houses with open code violations. Reading\'s pre-war housing stock often has unpermitted work, outdated electrical, lead paint, or structural issues that trigger city code notices. These don\'t prevent a cash sale — they just get factored into our offer.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company in Reading PA?',
    answer: 'We\'re a BBB-accredited business with a verifiable history of closed sales in Berks County. Every offer we make is in writing — a formal purchase agreement with price, terms, and closing date. You can verify our Pennsylvania business registration at corporations.pa.gov.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call you within hours during business hours (English or Spanish). We\'ll ask 5-10 questions about the property — condition, situation, timeline. Within 24 hours, you receive a written cash offer. No pressure. The offer stands on its own.',
  },
];

export default function ReadingMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[readingLocalBusinessSchema, readingFAQSchema, howToSchema, videoObjectSchema({ name: 'Sell Your House Fast in Reading, PA', description: 'USA Home Buyers explains how to sell your house fast in Reading, PA for cash — no repairs, no agent fees, covering Reading&apos;s 5% transfer tax.', contentUrl: `${SITE_URL}/videos/reading-pa-main.mp4`, thumbnailUrl: `${SITE_URL}/videos/reading-pa-main-poster.jpg`, uploadDate: '2026-04-12' })]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <Image
          src="/images/reading-landmark-hero.jpg"
          alt="Reading PA brick row homes — we buy houses fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-semibold mb-3 uppercase tracking-wide">
              🇵🇷 Hablamos español — call us for help in Spanish
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in Reading, PA — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              USA Home Buyers purchases houses throughout Reading PA and Berks County for cash in any condition —
              no repairs, no cleaning, no agent fees. Brick row homes, twins, and single-family houses.
              Written cash offer within 24 hours, close in as few as 7 days.
              <strong className="block mt-2 text-yellow-300">
                ⚠️ Reading&apos;s 5% transfer tax adds $9,250+ in costs to a traditional sale. We cover everything.
              </strong>
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ No repairs</span>
              <span>✓ No commissions</span>
              <span>✓ We pay all closing costs (incl. 5% transfer tax)</span>
              <span>✓ Close in 7 days</span>
              <span>✓ Hablamos español</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/reading-pa" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/reading-pa-main.mp4"
        title="Sell Your House Fast in Reading, PA"
        poster="/videos/reading-pa-main-poster.jpg"
        subtitle="See how we help homeowners in Reading sell fast for cash"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">Looking to sell your house fast in Reading, Pennsylvania? We&apos;re USA Home Buyers, local cash buyers serving Reading and all of Berks County. We buy houses as-is, in any condition. No repairs, no agent fees, and we can close in as little as seven days.</p>
          <p className="mb-3">Here&apos;s something most sellers don&apos;t realize: Reading has one of the highest transfer taxes in Pennsylvania at five percent. That&apos;s over nine thousand dollars on a typical home sale. When you sell to us, we help you avoid those hidden costs.</p>
          <p>Call us today for a free cash offer. Hablamos español.</p>
        </div>
      </details>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Transfer Tax Callout — Reading's Biggest Differentiator */}
        <section className="my-10 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            ⚠️ Reading PA&apos;s 5% Transfer Tax — What Sellers Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            Reading, PA has one of the highest real estate transfer taxes in Pennsylvania.
            The total rate is <strong>5%</strong> — a 4% City of Reading tax plus 1% PA state tax.
            By comparison, every other Berks County municipality pays just 2% total.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Reading PA transfer tax', value: '5.0% total', note: '4% city + 1% state', highlight: true },
              { label: 'Rest of Berks County', value: '2.0% total', note: '1% local + 1% state', highlight: false },
              { label: 'On a $185K Reading home', value: '$9,250', note: 'transfer taxes alone', highlight: true },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-4 text-center ${item.highlight ? 'bg-yellow-100 border border-yellow-300' : 'bg-white border border-gray-200'}`}>
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-brand-dark">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            By convention, the seller pays the city portion (4% = <strong>$7,400 on a $185K sale</strong>),
            plus agent commissions (5-6%), plus other closing costs. A traditional listing in Reading easily
            costs sellers <strong>$20,000–$25,000</strong> in fees and taxes before they walk away.{' '}
            <strong>When you sell to USA Home Buyers, we cover all closing costs — including the full 5% transfer tax.</strong>
          </p>
          <p className="text-xs text-gray-400 mt-3">
            Source:{' '}
            <a href="https://www.berkspa.gov/departments/recorder-of-deeds/fee-schedule" target="_blank" rel="noopener noreferrer" className="underline">
              Berks County Recorder of Deeds Fee Schedule (eff. 2025-01-01)
            </a>
          </p>
        </section>

        {/* How It Works */}
        <HowItWorks heading="How Selling Your Reading PA House for Cash Works" />

        {/* Situations */}
        <SituationLinks heading="We Buy Houses in Reading in Any Situation" />

        {/* Market Data */}
        <section className="my-12 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Reading PA Housing Market — 2026 Data
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Median home value — Zillow ZHVI', '$227,041'],
                  ['Median sale price — Redfin (Feb 2026)', '$185,000'],
                  ['Year-over-year price change', '-1.1% (Redfin)'],
                  ['Median days on market', '24 days'],
                  ['Sale-to-list ratio', '96.6%'],
                  ['Compete Score (Redfin)', '80/100 — Very Competitive'],
                  ['Average offers per home', '6'],
                  ['Cash offer range (typical home)', '$130,000–$182,000'],
                  ['Reading PA transfer tax', '5% total (4% city + 1% state) — vs. 2% in rest of Berks County'],
                  ['Typical realtor commission', '5–6%'],
                  ['Housing stock age', '56% built before 1939'],
                  ['Primary housing type', '52% row homes / attached'],
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
            Reading is a competitive market — homes average 24 days on market and sell at 96.6% of list price.
            But the 5% transfer tax, high percentage of distressed older stock, and long traditional closing timelines
            make cash buyers especially valuable here.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/markets/reading-pa/market-report" className="text-brand-primary hover:underline">
              See the full Reading PA market report →
            </Link>
          </p>
        </section>

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Reading PA Homeowners Are Saying" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Reading PA: The Real Numbers
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            Reading&apos;s 5% transfer tax changes the math significantly compared to other PA markets. When you
            factor in 5% transfer tax, 5-6% commissions, inspection repairs on pre-1939 housing stock, and
            45-60 days of carrying costs, the gap between a cash offer and a traditional listing narrows
            considerably — or disappears entirely.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              See full comparison: Cash Offer vs. Listing in Reading PA →
            </Link>
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Reading PA Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including the 5% transfer tax."
            sourcePage="/markets/reading-pa"
          />
        </section>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Reading PA Home for Cash" />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Reading and Berks County
          </h2>
          <p className="text-gray-700 mb-4">
            Our primary market is Reading proper — College Heights, Hampden Heights, Centre Park Historic District,
            Millmont, East Reading, GoggleWorks/Callowhill, and Downtown Reading. We know these neighborhoods,
            the row homes and brick twins, the pre-war construction, and the challenges that come with it.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve the surrounding Berks County communities: Wyomissing, Shillington, Sinking Spring,
            Muhlenberg, and Mount Penn (immediately adjacent), plus Kutztown, Boyertown, and Pottstown further out.
            Our reach extends into Lancaster County, Lehigh County, and Montgomery County.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'Reading', 'Wyomissing', 'Shillington', 'Sinking Spring', 'Muhlenberg', 'Mount Penn',
              'Kutztown', 'Boyertown', 'Pottstown', 'Exeter Township', 'Laureldale', 'Temple',
              'Kenhorst', 'Mohnton', 'Bern Township',
            ].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        {/* Neighborhoods link */}
        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Reading Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">
            From College Heights to Downtown Reading to the historic Centre Park district — we buy in every Reading neighborhood.
          </p>
          <Link href="/markets/reading-pa/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">
            See neighborhood-by-neighborhood price ranges and market data →
          </Link>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks marketSlug="reading-pa" cityName="Reading" />

        {/* Guided Survey Form */}
        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for your Reading PA home.
              <span className="block text-sm mt-1 text-gray-500">¿Prefiere español? Llámenos al {PHONE}</span>
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/reading-pa" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Reading PA Home?" sourcePage="/markets/reading-pa" />
        </section>
      </div>
    </>
  );
}
