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
import { bridgeportLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Bridgeport CT',
  description:
    'We buy houses in Bridgeport CT for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Fairfield County. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/bridgeport-ct` },
  openGraph: {
    images: [{ url: '/images/bridgeport-ct-hero.jpg', width: 1200, height: 630, alt: 'Bridgeport CT neighborhood homes — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    quote: "I inherited my aunt's house on the East Side — built in the 1920s, plaster walls, older electrical. I live in New York and couldn't manage it from a distance. The Bridgeport Probate Court process was easier than I expected, and USA Home Buyers closed the week after probate was settled. I didn't have to make a single repair.",
    name: 'Isabella R.',
    location: 'East Side, Bridgeport CT',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
  },
  {
    quote: "I was three months behind and the bank had already filed in Superior Court. A friend told me Connecticut uses strict foreclosure — there's no auction, the bank can just take title on the law day. USA Home Buyers moved fast and we closed before the law day was set. I walked away with money instead of nothing.",
    name: 'Marcus T.',
    location: 'North End, Bridgeport CT',
    situation: 'Pre-Foreclosure — Strict Foreclosure',
    date: 'February 2026',
  },
  {
    quote: "My divorce required selling the house in Black Rock. My ex and I couldn't agree on anything. USA Home Buyers gave one offer, one closing date, and the proceeds split through our attorneys. Three weeks from first call to cash in hand.",
    name: 'Ana M.',
    location: 'Black Rock, Bridgeport CT',
    situation: 'Divorce Sale',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$25K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$12,500-$15,000)' },
  { label: 'CT conveyance tax', cashBuyer: 'We cover everything', traditional: '1% of sale price (seller pays state + municipal)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Bridgeport CT?',
    answer: 'USA Home Buyers can close in as few as 7 days in Bridgeport CT. We send a written cash offer within 24 hours. Connecticut uses strict foreclosure — a unique process where the lender petitions the Superior Court and the judge sets a "Law Day" by which you must pay off the debt or lose title entirely. There is no auction. Once a Law Day is set, acting fast is critical. A direct cash sale before that date is often the only way to recover any equity.',
  },
  {
    question: 'How much will you pay for my Bridgeport CT house?',
    answer: 'Cash offers for Bridgeport homes typically range from 65-78% of fair market value. According to Zillow, the Bridgeport median home value is approximately $240,000. A typical cash offer on an East Side or North End two-family or single-family runs $156,000-$187,000. We cover all closing costs including Connecticut\'s conveyance tax (state 0.75% + municipal 0.25% = 1.0% — entirely seller-paid on traditional sales).',
  },
  {
    question: 'What is the conveyance tax when selling a house in Bridgeport CT?',
    answer: 'Connecticut has a real estate conveyance tax consisting of a 0.75% state portion plus a 0.25% municipal portion — totaling 1.0% for properties under $800,000. The City of Bridgeport collects the municipal portion. The seller pays both. On a $240,000 home, the conveyance tax is $2,400. When you sell to USA Home Buyers, we cover all closing costs. Source: Connecticut Department of Revenue Services (ct.gov/drs).',
  },
  {
    question: 'How does foreclosure work in Connecticut?',
    answer: "Connecticut uses strict foreclosure — one of the most unusual foreclosure systems in the country. The lender files in Superior Court, and if the court grants the foreclosure, it sets a \"Law Day\" — a date by which you must pay the full debt or lose title entirely. There is no public auction, no bidding, no redemption period after the Law Day passes. Title vests directly in the lender. This means homeowners in CT foreclosure have less time and fewer options than in other states. Source: Connecticut Judicial Branch (jud.ct.gov).",
  },
  {
    question: '¿Compran casas en Bridgeport CT? / Do you work with Spanish-speaking sellers?',
    answer: 'Sí, hablamos español. According to the U.S. Census Bureau, approximately 41% of Bridgeport residents identify as Hispanic or Latino. We serve Bridgeport\'s diverse community in English and Spanish. Llámenos — entendemos el vecindario y el proceso.',
  },
  {
    question: 'What areas near Bridgeport do you buy in?',
    answer: 'All of Fairfield County. That includes Stamford, Danbury, Stratford, Milford, Shelton, Trumbull, Fairfield, Derby, Ansonia, Naugatuck, and Westport. We also cover New Haven County communities to the east. Call 888-440-5250 if you\'re not sure we cover your area.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Bridgeport's housing stock is predominantly pre-WWII — brick two-families, Victorian singles, and early 20th-century worker cottages. Lead paint, old electrical, aging boilers, and deferred maintenance are the norm. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works for you, you pick the closing date.',
  },
];

export default function BridgeportCTMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Bridgeport CT',
    description: 'Step-by-step process for selling your Bridgeport home for cash in Fairfield County, Connecticut',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Bridgeport property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Fairfield County title company, walk away with cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[bridgeportLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/bridgeport-ct-hero-640.jpg 640w, /images/optimized/bridgeport-ct-hero-828.jpg 828w, /images/optimized/bridgeport-ct-hero-1080.jpg 1080w, /images/optimized/bridgeport-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bridgeport-ct-hero-1200.jpg"
            alt="Bridgeport CT homes on a bright sunny day — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Connecticut Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Bridgeport CT — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Bridgeport CT and throughout Fairfield County — East Side, Black Rock, North End, South End, and the broader metro including Stamford and Danbury. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Zillow, Bridgeport median home values are around $240,000. We cover all closing costs including CT conveyance tax. Call 888-440-5250. Hablamos español.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Bridgeport CT and Fairfield County in any condition — two-families, Victorians, bungalows, multi-families, estates, foreclosures, tenant-occupied. No repairs, no agent fees.
            </p>
            <a href="tel:+18884405250" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Bridgeport CT Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/bridgeport-ct" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Bridgeport CT Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Bridgeport is Connecticut's largest city and the economic anchor of Fairfield County — though it sits in stark contrast to Fairfield County's wealthy suburbs of Greenwich and Westport. The city's housing stock reflects its industrial past: pre-World War II two-families, Victorian-era singles, brick worker cottages, and early 20th-century apartment buildings. According to the U.S. Census Bureau, Bridgeport is one of the more densely populated cities in New England, with housing predominantly built before 1940.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Bridgeport CT</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">$240,000</td><td className="p-3 text-gray-500">Zillow ZHVI (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$252,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">~38 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Conveyance tax</td><td className="p-3">1.0% (0.75% state + 0.25% municipal, seller pays)</td><td className="p-3 text-gray-500">CT DRS (ct.gov/drs)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Strict foreclosure (unique — no auction, Law Day)</td><td className="p-3 text-gray-500">CT Judicial Branch</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Hispanic/Latino population</td><td className="p-3">~41% of city</td><td className="p-3 text-gray-500">U.S. Census Bureau ACS</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Primary county</td><td className="p-3">Fairfield County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Bridgeport CT in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/bridgeport-ct/inherited-property', description: 'Sell an inherited Bridgeport CT home through Bridgeport Probate Court' },
            { label: 'Going Through Divorce', href: '/markets/bridgeport-ct/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/bridgeport-ct/foreclosure', description: 'Connecticut strict foreclosure (Superior Court, Law Day — no auction) — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/bridgeport-ct/probate', description: 'We work with Bridgeport Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/bridgeport-ct/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/bridgeport-ct/code-violations', description: 'Open violations, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/bridgeport-ct/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Bridgeport CT Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Bridgeport CT</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $252,000 Bridgeport home, a 5-6% agent commission runs $12,600-$15,120. Add Connecticut's 1% conveyance tax (~$2,520), carrying costs during 38+ days on market, and repairs on pre-WWII housing stock. Many Bridgeport two-families have lead paint issues, old boilers, and outdated plumbing that conventional lenders require addressed before closing. That's a real cost that disappears with a direct cash sale.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm variant="inline" headline="Get Your Bridgeport CT Cash Offer" subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including CT conveyance tax." sourcePage="/markets/bridgeport-ct" />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Bridgeport CT Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">We Buy Houses Throughout Bridgeport and Fairfield County CT</h2>
          <p className="text-gray-700 mb-4">
            Our Bridgeport coverage includes every neighborhood — East Side's dense two-family and triple-decker blocks, Black Rock on the western waterfront with its mix of Victorian and post-war homes, the North End's working-class grid, the South End along Long Island Sound, the Upper East Side's larger single-family homes, the Hollow neighborhood downtown, and East End near the Pequonnock River.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the full Bridgeport-Stamford-Danbury CBSA. Stamford to the southwest has a very different price profile ($500K-$700K median) but similar seller situations — divorce, estate, relocation. Danbury to the north covers the Naugatuck Valley. Stratford, Milford, Shelton, Trumbull, Fairfield, Derby, Ansonia, and Naugatuck are all in our Fairfield County coverage.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['East Side', 'Black Rock', 'North End', 'South End', 'Upper East Side', 'Hollow', 'East End', 'Stratford', 'Milford', 'Shelton', 'Trumbull', 'Fairfield', 'Stamford', 'Danbury', 'Derby', 'Ansonia'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Bridgeport CT Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From East Side two-families to Black Rock Victorians — we buy in every Bridgeport neighborhood and Fairfield County community.</p>
          <Link href="/markets/bridgeport-ct/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <BlogClusterLinks marketSlug="bridgeport-ct" cityName="Bridgeport" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Bridgeport CT home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/bridgeport-ct" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Bridgeport CT Home?" sourcePage="/markets/bridgeport-ct" />
        </section>
      </div>
    </>
  );
}
