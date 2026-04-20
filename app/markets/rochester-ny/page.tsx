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
import { rochesterLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Rochester NY',
  description:
    'We buy houses in Rochester NY for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Monroe County and surrounding areas.',
  alternates: { canonical: `${SITE_URL}/markets/rochester-ny` },
  openGraph: {
    images: [{ url: '/images/rochester-ny-hero.jpg', width: 1200, height: 630, alt: 'Rochester NY neighborhood homes near the Genesee River — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    quote: "My grandfather worked at Kodak his whole career. When he passed, I inherited the house in the 19th Ward — built in 1938, original kitchen, needed a new roof and furnace. I live in Albany and couldn't manage the property long-distance. USA Home Buyers had a written offer the next day and we closed in 10 days through Monroe County Surrogate's Court.",
    name: 'Robert S.',
    location: '19th Ward, Rochester NY',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
  },
  {
    quote: "I was behind on my mortgage after a medical situation. New York judicial foreclosure takes 12-24 months, but once the bank files in Monroe County Supreme Court, your options narrow fast. USA Home Buyers explained exactly where I stood and closed before the foreclosure judgment. I walked out with enough to start over.",
    name: 'Diana W.',
    location: 'South Wedge, Rochester NY',
    situation: 'Pre-Foreclosure — Behind on Payments',
    date: 'February 2026',
  },
  {
    quote: "I owned a rental on Clifford Avenue for six years. Water damage from a burst pipe, a non-paying tenant, city notices — I was done. USA Home Buyers bought it as-is with the tenant still in it, handled everything, and I didn't have to go to court for eviction or fix the water damage.",
    name: 'James K.',
    location: 'Dutchtown, Rochester NY',
    situation: 'Tenant-Occupied — Water Damage',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$8,000-$10,000)' },
  { label: 'NY transfer tax', cashBuyer: 'We cover everything', traditional: 'Seller pays $4 per $1,000 (NYS)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Rochester NY?',
    answer: 'USA Home Buyers can close in as few as 7 days in Rochester NY. We send a written cash offer within 24 hours. New York is a judicial foreclosure state — every foreclosure must go through Monroe County Supreme Court, a process that takes 12-24 months. But once the bank files, your options narrow progressively. If you\'re behind on payments, acting early gives you the most equity.',
  },
  {
    question: 'How much will you pay for my Rochester NY house?',
    answer: 'Cash offers for Rochester homes typically range from 65-78% of fair market value. According to Zillow, the Rochester median home value is approximately $155,000. A typical cash offer on a 19th Ward or South Wedge bungalow in the $130,000-$175,000 range runs $85,000-$137,000. We cover all closing costs including New York State\'s transfer tax ($4 per $1,000 — seller pays on traditional sales).',
  },
  {
    question: 'What is the transfer tax when selling a house in Rochester NY?',
    answer: 'New York State Real Property Transfer Tax is $4.00 per $1,000 of consideration (0.4%). In Monroe County, there is no additional county transfer tax beyond the state rate. The seller pays the NYS tax. On a $155,000 home, the transfer tax is $620. When you sell to USA Home Buyers, we cover all closing costs. Source: New York State Department of Taxation and Finance (tax.ny.gov).',
  },
  {
    question: 'How does foreclosure work in Rochester NY?',
    answer: 'New York is a judicial foreclosure state. Every foreclosure must be filed in Monroe County Supreme Court. The typical timeline from first missed payment to confirmation of referee\'s sale is 12-24 months. New York also requires lenders to send a 90-day pre-foreclosure notice before filing (RPAPL §1304). Source: NY Real Property Actions and Proceedings Law (nysenate.gov).',
  },
  {
    question: 'How does probate work in Monroe County NY?',
    answer: 'When someone dies owning real estate in Monroe County, the estate typically goes through Monroe County Surrogate\'s Court, located at 99 Exchange Blvd in Rochester (Hall of Justice), phone (585) 371-3310. The Surrogate appoints an executor or administrator who has authority to sell the property. New York has a voluntary administration procedure for small estates under $50,000. We work with estates regularly and can structure the sale around your probate timeline.',
  },
  {
    question: 'What areas near Rochester do you buy in?',
    answer: 'All of Monroe County. That includes Greece, Irondequoit, Brighton, Henrietta, Pittsford, Gates, Chili, Penfield, Webster, East Rochester, Fairport, and Victor. We also cover Ontario County communities to the southeast. Call 888-440-5250 if you\'re not sure.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Rochester\'s housing stock is largely post-war bungalows, Cape Cods, and brick ranches from the 1930s-1960s — Kodak-era worker housing. Deferred maintenance, old electrical, aging plumbing, and lead paint (pre-1978) are common. We buy in any condition.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about the property, and send a written cash offer within 24 hours. No pressure. The offer is a real number. If it works for you, you pick the closing date.',
  },
];

export default function RochesterNYMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Rochester NY',
    description: 'Step-by-step process for selling your Rochester home for cash in Monroe County, New York',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Rochester property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Monroe County title company, walk away with cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[rochesterLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/rochester-ny-hero-640.jpg 640w, /images/optimized/rochester-ny-hero-828.jpg 828w, /images/optimized/rochester-ny-hero-1080.jpg 1080w, /images/optimized/rochester-ny-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/rochester-ny-hero-1200.jpg"
            alt="Rochester NY 19th Ward and Genesee River neighborhood homes on a sunny day — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">New York Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Rochester NY — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Rochester NY and throughout Monroe County — 19th Ward, South Wedge, Park Avenue, Corn Hill, Maplewood, Charlotte, and surrounding communities including Greece, Irondequoit, and Brighton. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Zillow, Rochester median home values are around $155,000. We cover all closing costs including NY transfer tax. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Rochester NY and Monroe County in any condition — bungalows, Capes, brick ranches, multi-families, estates, foreclosures. No repairs, no agent fees.
            </p>
            <a href="tel:+18884405250" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Rochester NY Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/rochester-ny" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Rochester NY Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Rochester is New York's third-largest city, situated on the south shore of Lake Ontario where the Genesee River meets the lake. The city built its identity around precision manufacturing — Eastman Kodak, Xerox, Bausch & Lomb — and that industrial heritage created densely packed residential neighborhoods of bungalows, Cape Cods, and brick ranches built from the 1920s through the 1960s. Rochester has some of the most affordable housing prices of any major Northeastern city, with median values well below Boston, New York, and Philadelphia.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Rochester NY</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$155,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$162,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">~33 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Transfer tax</td><td className="p-3">$4.00 per $1,000 NYS (seller pays)</td><td className="p-3 text-gray-500">NY Tax Law §1402</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (Monroe County Supreme Court, 12-24 months)</td><td className="p-3 text-gray-500">RPAPL §1301 et seq.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Primary county</td><td className="p-3">Monroe County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Rochester NY in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/rochester-ny/inherited-property', description: 'Sell an inherited Rochester NY home through Monroe County Surrogate\'s Court' },
            { label: 'Going Through Divorce', href: '/markets/rochester-ny/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/rochester-ny/foreclosure', description: 'New York judicial foreclosure (Monroe County Supreme Court, 12-24 months) — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/rochester-ny/probate', description: 'We work with Monroe County Surrogate\'s Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/rochester-ny/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/rochester-ny/code-violations', description: 'Open violations, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/rochester-ny/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Rochester NY Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Rochester NY</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $162,000 Rochester home, a 5-6% agent commission runs $8,100-$9,720. Add NY State transfer tax (~$648), carrying costs during 33+ days on market, and repairs on post-war housing stock. Many Rochester bungalows and Capes have old knob-and-tube or aluminum wiring, aging oil-to-gas conversion systems, and asbestos insulation in pre-1980 homes — items that can disqualify buyers from FHA or conventional financing and shrink your effective buyer pool.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm variant="inline" headline="Get Your Rochester NY Cash Offer" subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including NY transfer tax." sourcePage="/markets/rochester-ny" />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Rochester NY Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">We Buy Houses Throughout Rochester and Monroe County NY</h2>
          <p className="text-gray-700 mb-4">
            Our Rochester coverage includes every neighborhood — the 19th Ward's dense grid of pre-war bungalows and Capes on the southwest side, South Wedge's eclectic Victorian and post-war mix near the Genesee River, Park Avenue's well-maintained craftsman homes, Corn Hill's historic district with 19th-century brick townhomes, Maplewood on the northwest side near the Lake, Charlotte at the lakefront, and Dutchtown along the Genesee.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve Monroe County's suburban communities — Greece to the northwest, Irondequoit on the east near the lake, Brighton and Pittsford to the south with higher price points, Henrietta, Gates, and Chili to the southwest, and Penfield, Webster, East Rochester, Fairport, and Victor to the east and southeast.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['19th Ward', 'South Wedge', 'Park Avenue', 'Corn Hill', 'Maplewood', 'Charlotte', 'Dutchtown', 'Brooks Landing', 'Greece', 'Irondequoit', 'Brighton', 'Henrietta', 'Pittsford', 'Gates', 'Chili', 'Penfield', 'Webster', 'Fairport'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Rochester NY Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From 19th Ward bungalows to Corn Hill townhomes — we buy in every Rochester neighborhood and Monroe County community.</p>
          <Link href="/markets/rochester-ny/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <BlogClusterLinks marketSlug="rochester-ny" cityName="Rochester" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Rochester NY home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/rochester-ny" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Rochester NY Home?" sourcePage="/markets/rochester-ny" />
        </section>
      </div>
    </>
  );
}
