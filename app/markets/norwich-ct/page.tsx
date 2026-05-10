/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { norwichLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Norwich CT — Cash Offer in 24 Hours',
  description:
    'We buy houses in Norwich CT for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving New London County.',
  alternates: { canonical: `${SITE_URL}/markets/norwich-ct` },
};


const TESTIMONIALS = [
  {
    quote: "My brother and I inherited a house in Norwichtown. It needed a roof and the estate was moving slowly. They gave us a written offer, kept the same price after walking the house, and closed once the probate paperwork was ready.",
    name: "Janet F.",
    location: "Norwichtown, Norwich CT",
    situation: "Inherited Property",
    date: "March 2026",
  },
  {
    quote: "The foreclosure case was in Superior Court and the Law Day was the date I kept watching. I did not have time to repair the house for a listing. The cash sale closed before the deadline and paid off the loan.",
    name: "Luis M.",
    location: "Taftville, Norwich CT",
    situation: "Judicial Foreclosure",
    date: "February 2026",
  },
  {
    quote: "I had a tenant-occupied property in Greeneville with old plumbing and years of small repairs stacked up. They bought it with the tenant situation disclosed and did not ask me to make it market-ready.",
    name: "Renee C.",
    location: "Greeneville, Norwich CT",
    situation: "Tenant-Occupied Rental",
    date: "January 2026",
  },
  {
    quote: "We were moving closer to family and the Yantic house needed more work than we wanted to do. USA Home Buyers gave us one number and let us choose a closing date after the move was scheduled.",
    name: "Bill and Anne S.",
    location: "Yantic, Norwich CT",
    situation: "Relocation — As-Is Sale",
    date: "December 2025",
  },
];


const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($10K–$40K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$13,500–$16,200 on $270,000)' },
  { label: 'CT conveyance tax', cashBuyer: 'We cover everything', traditional: '~0.75% seller-paid on first $800K (CGS §12-494, ~$2,025 on $270K)' },
  { label: 'Attorney fee', cashBuyer: 'We cover everything', traditional: '$600–$1,200 (CT requires attorney)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–80% of FMV before property-specific adjustments', traditional: '85–92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Norwich CT?',
    answer: "USA Home Buyers can close in as few as 7 days in Norwich. Written cash offer within 24 hours. Connecticut foreclosure is judicial and handled through Superior Court, so deadlines depend on the case schedule and court orders. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Norwich CT home?',
    answer: "For average-condition properties, cash offers typically land around 70–80% of fair market value — before factoring in repair costs, property condition, title issues, holding costs, and risk adjustments specific to your home. Norwich's median home value is approximately $270,000 per local market data (2026). We provide a written offer based on comparable sales and property condition. We cover all closing costs including Connecticut's conveyance tax (CGS §12-494) and required attorney fees.",
  },
  {
    question: 'What is the transfer tax when selling in Connecticut?',
    answer: "Connecticut has a real estate transfer tax of state and municipal conveyance taxes that vary by price point and municipality. The closing attorney confirms the exact amount. When you sell to USA Home Buyers, we cover ordinary closing costs.",
  },
  {
    question: 'Does Connecticut require an attorney for a real estate closing?',
    answer: "Yes. Connecticut is an attorney state — a licensed CT attorney must examine title and certify that it is marketable before a lender will issue a mortgage. Even in cash transactions, an attorney is typically required by title insurance companies to prepare the deed and closing documents. This adds $600–$1,200 to seller closing costs on a traditional sale. We cover attorney fees when you sell to us.",
  },
  {
    question: 'How does foreclosure work in Connecticut?',
    answer: "Connecticut foreclosure is judicial and handled through Superior Court. Timing depends on filings, court orders, law days, or a sale schedule. A cash sale before a court deadline or sale date may resolve the case if completed in time; consult a Connecticut-licensed attorney.",
  },
  {
    question: 'What areas near Norwich do you buy in?',
    answer: "New London County communities including Norwich, New London, Groton, Waterford, Montville, Preston, Ledyard, Griswold, Stonington, East Lyme, Lisbon, Sprague, Voluntown, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Norwich's older housing stock includes many colonial, cape cod, and Victorian-era homes that carry significant deferred maintenance. We buy in any condition — no repairs, no staging, no cleaning required.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function NorwichCTMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Norwich CT',
    description: 'Step-by-step process for selling your Norwich home for cash in New London County, Connecticut',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Norwich property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the New London County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          norwichLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Norwich CT — USA Home Buyers',
            description: 'Cash offers for Norwich and New London County homes — any condition',
            contentUrl: `${SITE_URL}/videos/norwich-ct/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/images/video-posters/norwich-ct-main-poster.jpg`,
            uploadDate: '2026-05-02',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/norwich-ct-hero-640.jpg 640w, /images/optimized/norwich-ct-hero-828.jpg 828w, /images/optimized/norwich-ct-hero-1080.jpg 1080w, /images/optimized/norwich-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/norwich-ct-hero-1200.jpg"
            alt="Norwich CT homes — older New England residential neighborhoods in New London County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Connecticut Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Norwich CT — Cash Offer in 24 Hours
            </h1>
            {/* MOBILE_FORM_ABOVE_FOLD_FIX: keep form-start before summary block on mobile Template A pages. */}
            <div className="lg:hidden mb-4">
              <CashOfferForm variant="hero" headline="Get Your Norwich CT Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/norwich-ct" />
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Norwich CT and throughout New London County —
                Downtown Norwich, Norwichtown, Taftville, Greeneville, Yantic, and nearby New London County communities. Written cash
                offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. CT
                foreclosure timelines can move quickly once a sale is scheduled — act early. We cover all
                closing costs including transfer tax and required attorney fees. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Norwich and New London County in any condition — colonials, capes,
              Victorians, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="hidden lg:block w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Norwich CT Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/norwich-ct" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-02 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Lens */}
        <VideoEmbed
          src="/videos/norwich-ct/landing.mp4"
          title="Sell My House Fast Norwich CT — USA Home Buyers"
          poster="/images/video-posters/norwich-ct-main-poster.jpg"
          captionsSrc="/videos/norwich-ct/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for Norwich CT homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you need to sell your house fast in Norwich, Connecticut, USA Home Buyers can make the process simpler. We buy houses as-is in Norwich and New London County, including Taftville, Greeneville, Chelsea, Norwichtown, Bean Hill, and Laurel Hill.</p>
            <p className="mb-3">Some Norwich homes are difficult to sell the traditional way. The property may be inherited, older, vacant, tenant-occupied, facing repair issues, or caught in a deadline where waiting months is not practical. Older mill-era houses in Taftville or Greeneville can also need careful as-is handling. You do not have to renovate, stage the house, or keep negotiating after inspections.</p>
            <p className="mb-3">Start by telling us about the property and what you need to solve. We review the home, answer your questions, and give you a written cash offer. If it works for you, you choose the closing date. If you need time for family, probate, or moving details, we can talk through that too.</p>
            <p className="mb-3">We do not charge commissions, and there is no obligation to accept. Our job is to give Norwich homeowners a clear as-is option when speed, certainty, and less hassle matter more than a conventional listing. For a no-pressure cash offer, call USA Home Buyers at 888-274-5006. We will explain the next step in plain English.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Norwich CT Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Norwich is a New London County city in southeastern Connecticut.
            Government, healthcare (Backus Hospital), and education anchor the local economy.
            The housing stock spans colonial and cape cod homes from the 19th and early 20th century
            in neighborhoods like Downtown Norwich, Norwichtown, Taftville, and Greeneville, to mid-century and newer construction
            throughout the metro. Boston-area demand overflow has driven significant price appreciation
            across southeastern Connecticut.
          </p>
          <p className="text-gray-700 mb-4">
            Connecticut imposes a <strong>real property conveyance tax</strong> under CGS §12-494, with the state rate at <strong>0.75% of the sale price</strong> for residential properties under $800,000, paid entirely by the seller. Municipalities may add a local surcharge (typically 0.25%). This is confirmed through the Connecticut closing process and registry of deeds. On a $270,000 Norwich home, the state conveyance tax is approximately $2,025 (seller-paid); total with local surcharge may be higher. Connecticut is an <strong>attorney state</strong>
            — a licensed CT attorney must certify title marketability; attorney fees on traditional sales
            typically run $600–$1,200. USA Home Buyers covers all closing costs when we purchase.
          </p>
          <p className="text-gray-700 mb-4">
            Connecticut foreclosure is <strong>judicial (strict foreclosure)</strong>, handled through Superior Court. Lenders must file suit and the court sets a <strong>Law Day</strong> — the deadline by which the borrower must pay off the debt or lose title. Unlike non-judicial states, there is no public auction; title transfers directly to the lender after the Law Day passes. The typical timeline from filing to Law Day is 90–180 days. Borrowers retain the right to redeem by paying the full debt before the Law Day. If you've received a foreclosure notice, time matters.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Norwich CT</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">~$270,000</td><td className="p-3 text-gray-500">Local market data (2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">CT conveyance tax</td><td className="p-3">State: 0.75% seller-paid on first $800K (CGS §12-494), ~$2,025 on $270K; plus municipal surcharge (typically 0.25%)</td><td className="p-3 text-gray-500">Connecticut Department of Revenue Services (portal.ct.gov/DRS), CGS §12-494</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney required?</td><td className="p-3">Yes — CT is an attorney state (title certification required)</td><td className="p-3 text-gray-500">CT bar requirements</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial strict foreclosure — Superior Court sets Law Day; title transfers to lender if not redeemed; no public auction; typical timeline 90–180 days</td><td className="p-3 text-gray-500">Connecticut CGS §49-1 et seq.; CT Judicial Branch (jud.ct.gov)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redemption right?</td><td className="p-3">Yes — borrower may redeem by paying debt in full before the court-set Law Day; no redemption after Law Day passes</td><td className="p-3 text-gray-500">Connecticut CGS §49-15; CT strict foreclosure process</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Norwich Probate District, Norwich CT 06360</td><td className="p-3 text-gray-500">CT Probate Court (ctprobate.gov)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">New London County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Norwich CT in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/norwich-ct/inherited-property', description: 'Sell an inherited Norwich home through New London County Probate Division' },
            { label: 'Going Through Divorce', href: '/markets/norwich-ct/divorce-sale', description: 'One offer, one closing, clean split — CT divorce decree sales' },
            { label: 'Facing Foreclosure', href: '/markets/norwich-ct/foreclosure', description: 'Connecticut judicial foreclosure deadlines can move quickly — sell before the sale date' },
            { label: 'Probate Sale', href: '/markets/norwich-ct/probate', description: 'We work with New London County Probate Division cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/norwich-ct/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/norwich-ct/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/norwich-ct/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />
        <section className="my-12 rounded-xl border border-gray-200 bg-gray-50 p-6"><h2 className="text-2xl font-bold text-brand-dark mb-3">Why Norwich sellers use a direct cash offer</h2><p className="text-gray-700">Norwich sellers often call when the house needs work and the clock is real: a Law Day, probate paperwork, a tenant move-out, or repairs around Taftville, Greeneville, Yantic, and Norwichtown. We review the house, the title situation, and your closing date. Then we give one written offer without repair demands.</p></section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Norwich CT</h2>
          <TestimonialBlock testimonials={TESTIMONIALS} heading="What Norwich CT Homeowners Are Saying" />

          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $270,000 Norwich median home, a 5–6% agent commission runs $13,500–$16,200. Add
            CT's conveyance tax (~$2,025 seller-paid on $270K state rate, CGS §12-494), required attorney fees
            ($600–$1,200), and carrying costs during the listing period. A direct cash sale eliminates
            all of those costs. Connecticut foreclosure deadlines can move once court orders or sale scheduling are in place —
            acting early preserves the most equity.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Norwich CT Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Norwich and the surrounding New London County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Downtown Norwich', 'Norwichtown', 'Taftville', 'Greeneville', 'Yantic', 'Laurel Hill', 'New London', 'Groton', 'Waterford', 'Montville', 'Preston', 'Ledyard'].map((n) => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Norwich CT" />

        <BlogClusterLinks marketSlug="norwich-ct" cityName="Norwich CT" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Norwich CT mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Norwich CT homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Norwich CT section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/norwich-ct/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Norwich CT Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-norwich-ct-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Norwich CT Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/norwich-ct"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
