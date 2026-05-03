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
import { richmondLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Richmond VA — Cash Offer in 24 Hours',
  description:
    'We buy houses in Richmond VA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Richmond City — independent city with no county layer.',
  alternates: { canonical: `${SITE_URL}/markets/richmond-va` },
};

const TESTIMONIALS = [
  {
    quote: "I inherited a Church Hill row house from my aunt. Richmond Circuit Court probate took several months, but USA Home Buyers gave me a written offer upfront and waited for letters testamentary. They bought the Victorian brick as-is — original radiators and all. Closed within two weeks of authorization.",
    name: "Patricia H.",
    location: "Church Hill, Richmond VA",
    situation: "Inherited Property — Richmond Circuit Court Probate",
    date: "March 2026",
  },
  {
    quote: "I had a Fan District rental that had seen better days. Tenant out, house needed work I wasn't going to do. USA Home Buyers made an offer in 24 hours and we closed in 11 days. No showings, no inspections — just cash.",
    name: "Robert K.",
    location: "The Fan District, Richmond VA",
    situation: "Rental Property — Landlord Exit",
    date: "February 2026",
  },
  {
    quote: "PCS orders came through — I had 6 weeks. Richmond is a competitive market but I needed certainty, not the highest bid. USA Home Buyers closed in 9 days. No contingencies, no drama.",
    name: "SSgt Marcus W.",
    location: "Highland Park, Richmond VA",
    situation: "Military Relocation — PCS Sale",
    date: "January 2026",
  },
  {
    quote: "Divorce decree said sell the house. My ex and I chose the cash offer because it was the only thing we agreed on. USA Home Buyers handled the title work through the Richmond Circuit Court Clerk. Twelve days.",
    name: "Jennifer and David L.",
    location: "North Church Hill, Richmond VA",
    situation: "Divorce Sale — Court-Ordered",
    date: "December 2025",
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($10K–$40K+ for older stock)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$20,725–$24,870 on $414,500)' },
  { label: 'VA grantor\'s tax', cashBuyer: 'We cover everything', traditional: '$0.50/$500 of value (§ 58.1-802, seller pays)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70–82% of FMV', traditional: '84–90% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Richmond VA?',
    answer: "USA Home Buyers can close in as few as 7 days in Richmond. Written cash offer within 24 hours. Virginia primarily uses non-judicial (deed of trust) foreclosure — typical timeline 45–60 days from notice. A cash sale before foreclosure protects your equity and credit. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Richmond VA home?',
    answer: "Cash offers typically range from 70–82% of fair market value. According to Redfin (March 2026), Richmond's median sale price is $414,500 — with a Compete Score of 82/100 and 24 days on market. Sellers are getting about 100.4% of list price on average. We provide a written offer based on comparable sales and condition.",
  },
  {
    question: 'What are the transfer taxes when selling in Richmond VA?',
    answer: "Virginia charges a state grantor's tax of $0.50 per $500 of value (approximately 0.10%) under VA Code § 58.1-802 — the seller pays. State recordation tax of $0.25 per $100 (0.25%) is paid by the buyer/grantee under § 58.1-801. Richmond City may levy a local recordation fee under § 58.1-814 — verify the current local rate with your settlement agent or title company before closing. When you sell to USA Home Buyers, we cover all closing costs.",
  },
  {
    question: 'How does foreclosure work in Virginia?',
    answer: "Virginia primarily uses non-judicial foreclosure via deed of trust — the trustee can sell without court involvement under VA Code § 55.1-321. Typical timeline: 45–60 days after acceleration. There is no post-sale right of redemption in Virginia — once the foreclosure sale is complete, it is final. Selling before the trustee sale preserves equity and avoids the foreclosure record. Consult a Virginia-licensed real estate attorney for your specific situation.",
  },
  {
    question: 'Do I need an attorney to sell my house in Richmond VA?',
    answer: "Virginia does not require an attorney to sell a home — title companies are authorized as settlement agents under the Virginia Consumer Real Estate Settlement Protection Act (CRESPA), VA Code § 55.1-1000 et seq. Sellers may retain their own attorney at their option. Note: Richmond City Circuit Court Clerk handles all deed recording for Richmond (an independent city — there is no Richmond County).",
  },
  {
    question: 'What is the probate process for selling a house in Richmond?',
    answer: "Richmond is an independent city — probate is handled by the Richmond City Circuit Court Clerk's Office, not a county court. Address: John Marshall Courts Building, 400 N. 9th St., Richmond VA 23219; phone (804) 646-6505. Virginia small estate affidavit is available for estates under $50,000 (VA Code § 64.2-601). Cash buyers can purchase estate properties directly once authority is granted.",
  },
  {
    question: 'What areas in Richmond do you buy in?',
    answer: "All of Richmond City and surrounding areas: The Fan District, Church Hill, Scott's Addition, Manchester, Northside, Highland Park, Oregon Hill, Carver, Barton Heights, Ginter Park, and surrounding Henrico and Chesterfield communities. Call 888-274-5006.",
  },
];

export default function RichmondVAMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Richmond VA',
    description: 'Step-by-step process for selling your Richmond home for cash — independent city, no county layer',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Richmond property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at a Richmond settlement agent, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          richmondLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Richmond VA — USA Home Buyers',
            description: "Cash offers for Richmond City homes — The Fan, Church Hill, Scott's Addition, any condition",
            contentUrl: `${SITE_URL}/videos/richmond-va/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/videos/richmond-va/landing-poster.jpg`,
            uploadDate: '2026-05-03',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/richmond-va-hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/richmond-va-hero.webp"
            alt="Richmond VA homes — historic brick row houses in The Fan and Church Hill"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Virginia Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Richmond VA — Fast Cash Offers, Any Condition
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Richmond VA — The Fan, Church Hill, Scott's Addition, Manchester, Northside, Highland Park, and all Richmond City neighborhoods. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to Redfin (March 2026), Richmond's median sale price is $414,500 with 24 days on market and a Compete Score of 82. Richmond is an independent city — we handle all Richmond Circuit Court recording and title work. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Richmond City in any condition — Victorian row houses, historic brick colonials, rental properties, estates. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Richmond VA Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/richmond-va" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-03 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Max fallback generation */}
        <VideoEmbed
          src="/videos/richmond-va/landing.mp4"
          title='Sell My House Fast Richmond VA — USA Home Buyers'
          poster="/videos/richmond-va/landing-poster.jpg"
          captionsSrc="/videos/richmond-va/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="Cash offers for Richmond City homes — The Fan, Church Hill, Scott's Addition, any condition"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">Need to sell your house fast in Richmond, Virginia? USA Home Buyers purchases homes as-is for cash throughout Richmond City — The Fan, Church Hill, Scott's Addition, Manchester, Northside, Highland Park, and surrounding areas.</p>
            <p className="mb-3">No agents, no fees, no repairs.</p>
            <p className="mb-3">Virginia uses non-judicial foreclosure via deed of trust — the trustee's sale can happen in 45-60 days, with no right of redemption after.</p>
            <p className="mb-3">A cash sale before that date preserves your equity.</p>
            <p className="mb-3">We also handle estate properties, divorce sales, tenant-occupied rentals, and code-violation properties.</p>
            <p className="mb-3">Written cash offer in 24 hours.</p>
            <p className="mb-3">Close in 7 days.</p>
            <p className="mb-3">We cover all closing costs including Virginia's grantor's tax.</p>
            <p className="mb-3">Call 888-274-5006.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Richmond VA Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Richmond is an independent city in Virginia — it has no county layer. All deeds, court records, and probate filings go through the Richmond City Circuit Court Clerk's Office. According to <a href="https://www.redfin.com/city/16525/VA/Richmond/housing-market" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Redfin (March 2026)</a>, the median sale price is $414,500 — with 24 days on market, a sale-to-list ratio of 100.4%, and a Compete Score of 82. Homes receive an average of 3 offers. Richmond's historic housing stock — The Fan's Victorian row houses, Church Hill's Federal-style homes, Scott's Addition's converted industrial buildings — creates strong demand and significant rehabilitation costs for sellers who want to go the traditional route.
          </p>
          <p className="text-gray-700 mb-4">
            Virginia's state grantor's tax is <strong>$0.50 per $500 of value</strong> (~0.10% of sale price) under <a href="https://law.lis.virginia.gov/vacode/title58.1/chapter8/section58.1-802/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">VA Code § 58.1-802</a> — the seller pays. State recordation tax of $0.25/$100 is paid by the grantee under § 58.1-801. Richmond City may levy an additional local recordation fee under § 58.1-814 — verify the current city-specific amount with your settlement agent before closing, as the local add-on varies. Virginia primarily uses <strong>non-judicial foreclosure</strong> via deed of trust under VA Code § 55.1-321 — no court involvement, typical timeline 45–60 days from acceleration, and <strong>no post-sale right of redemption</strong>.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-amber-800 mb-1">Virginia Closing Note</p>
            <p className="text-sm text-amber-700">
              Virginia law does not require an attorney at real estate closings — title companies are authorized settlement agents under CRESPA (VA Code § 55.1-1000 et seq.). Sellers may retain their own attorney at their option. For complex transactions (probate, contested estates, foreclosure workouts), consulting a Virginia-licensed real estate attorney is advisable.
            </p>
          </div>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: March 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-primary text-white"><th className="text-left p-3">Metric</th><th className="text-left p-3">Richmond VA</th><th className="text-left p-3">Source</th></tr></thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$414,500</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">24 days</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">100.4%</td><td className="p-3 text-gray-500">Redfin city (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Compete Score</td><td className="p-3">82 / 100 (Very Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">State grantor's tax</td><td className="p-3">$0.50/$500 of value (~0.10%) — seller pays (VA Code § 58.1-802)</td><td className="p-3 text-gray-500">Virginia Code</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">State recordation tax</td><td className="p-3">$0.25/$100 — buyer/grantee pays (VA Code § 58.1-801)</td><td className="p-3 text-gray-500">Virginia Code</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Richmond City local fee</td><td className="p-3">Local add-on under § 58.1-814 — verify current rate with settlement agent</td><td className="p-3 text-gray-500">VA Code § 58.1-814</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial (deed of trust) — VA Code § 55.1-321; ~45–60 days from notice; no post-sale redemption</td><td className="p-3 text-gray-500">Virginia Code</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Probate court</td><td className="p-3">Richmond City Circuit Court Clerk — John Marshall Courts Building, 400 N. 9th St., Richmond VA 23219; (804) 646-6505</td><td className="p-3 text-gray-500">Richmond Circuit Court</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Attorney-closing required?</td><td className="p-3">No — title companies authorized under CRESPA (VA Code § 55.1-1000 et seq.)</td><td className="p-3 text-gray-500">Virginia State Bar / CRESPA</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Jurisdiction</td><td className="p-3">Richmond City — independent city, no county layer</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Richmond VA in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/richmond-va/inherited-property', description: 'Sell an inherited Richmond home through Richmond City Circuit Court' },
            { label: 'Going Through Divorce', href: '/markets/richmond-va/divorce-sale', description: 'One offer, one closing, clean split' },
            { label: 'Facing Foreclosure', href: '/markets/richmond-va/foreclosure', description: 'Virginia non-judicial — sell before the deed of trust trustee sale' },
            { label: 'Probate Sale', href: '/markets/richmond-va/probate', description: 'Richmond City Circuit Court Clerk — independent city probate' },
            { label: 'Tenant-Occupied Property', href: '/markets/richmond-va/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/richmond-va/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/richmond-va/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Richmond VA Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Richmond VA</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $414,500 Richmond median-sale home, a 5–6% agent commission runs $20,725–$24,870. Add Virginia's grantor's tax (~$414 on a $414,500 sale), carrying costs during 24 days on market, and repairs to Richmond's historic housing stock. Average Richmond homes sell at 100.4% of list — but that advantage disappears quickly when repairs, commissions, and carrying costs are factored in. A direct cash sale eliminates those costs entirely (Redfin, Mar 2026).
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Richmond VA Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Richmond City and the surrounding area:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["The Fan District", "Church Hill", "Scott's Addition", "Manchester", "Northside", "Highland Park", "Oregon Hill", "Carver", "Barton Heights", "Ginter Park", "Museum District", "Forest Hill", "Bon Air", "Henrico", "Chesterfield", "Midlothian", "Glen Allen", "Short Pump"].map(n => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Richmond City is an independent city — it shares no county government with Henrico County or Chesterfield County, which border the city. All Richmond City recordings and court filings go through the Richmond City Circuit Court Clerk (400 N. 9th St.).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Richmond VA" />

        <BlogClusterLinks marketSlug="richmond-va" cityName="Richmond VA" />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-sm font-semibold text-brand-primary mb-2">Richmond VA mini-site</p>
              <h2 className="text-2xl font-bold text-brand-dark mb-2">Seller resources for Richmond VA homeowners</h2>
              <p className="text-gray-700 max-w-3xl">
                Stay in the Richmond VA section for local market data, situation pages, seller guides, and articles before you decide whether a cash offer or listing makes more sense.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/markets/richmond-va/resources" className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors">
                Richmond VA Resources
              </Link>
              <Link href="/guides/sell-house-fast-richmond-va-2026" className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors">
                Local Guide
              </Link>
            </div>
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Richmond VA Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/richmond-va"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}
