/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { northamptonLocalBusinessSchema, faqSchema, videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import Link from 'next/link';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Northampton MA — Cash Offer in 24 Hours',
  description:
    'We buy houses in Northampton MA for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Hampshire County.',
  alternates: { canonical: `${SITE_URL}/markets/northampton-ma` },
};


const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14–60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7–14 days', traditional: '45–60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($10K–$40K+)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5–6% (~$13,500–$16,200 on $270,000)' },
  { label: 'MA transfer tax', cashBuyer: 'We cover everything', traditional: '$0.75 per $100 (seller portion)' },
  { label: 'Attorney fee', cashBuyer: 'We cover everything', traditional: '$600–$1,200 (MA requires attorney)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15–20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '68–80% of FMV', traditional: '85–92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Northampton MA?',
    answer: "USA Home Buyers can close in as few as 7 days in Northampton. Written cash offer within 24 hours. Massachusetts non-judicial foreclosure (power of sale) under RSA 479:25 requires 25 days' published notice and 60 days' written notice to the borrower — the timeline moves fast once it starts. Call 888-274-5006.",
  },
  {
    question: 'How much will you pay for my Northampton MA home?',
    answer: "Cash offers typically range from 68–80% of fair market value. Northampton's median home value is approximately $270,000 per local market data (2026). We provide a written offer based on comparable sales and property condition. We cover all closing costs including Massachusetts's transfer tax ($0.75/$100 seller portion) and required attorney fees.",
  },
  {
    question: 'What is the transfer tax when selling in Massachusetts?',
    answer: "Massachusetts has a real estate transfer tax of $1.50 per $100 of consideration total — split equally between buyer and seller at $0.75 per $100 each. On a $270,000 Northampton home, the seller's share is $2,025. When you sell to USA Home Buyers, we cover all closing costs. Source: MA Department of Revenue Administration (revenue.nh.gov), RSA 78-B.",
  },
  {
    question: 'Does Massachusetts require an attorney for a real estate closing?',
    answer: "Yes. Massachusetts is an attorney state — a licensed MA attorney must examine title and certify that it is marketable before a lender will issue a mortgage. Even in cash transactions, an attorney is typically required by title insurance companies to prepare the deed and closing documents. This adds $600–$1,200 to seller closing costs on a traditional sale. We cover attorney fees when you sell to us.",
  },
  {
    question: 'How does foreclosure work in Massachusetts?',
    answer: "Massachusetts is a non-judicial foreclosure state. Under RSA 479:25, lenders can foreclose via power of sale without court involvement. The process requires published notice for three consecutive weeks and 60 days' written notice to the borrower. Total timeline from default to sale: typically 60–90 days — much faster than judicial states. There is no post-sale redemption period in MA. A cash sale before the foreclosure sale date stops the process. Source: MA RSA 479 (gencourt.state.nh.us).",
  },
  {
    question: 'What areas near Northampton do you buy in?',
    answer: "All of Hampshire County: Northampton, Bow, Pembroke, Hooksett, Canterbury, Dunbarton, Hopkinton, Loudon, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Northampton's older housing stock includes many colonial, cape cod, and Victorian-era homes that carry significant deferred maintenance. We buy in any condition — no repairs, no staging, no cleaning required.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours, ask about your property, and send a written cash offer within 24 hours. No pressure. If it works, you pick the closing date.',
  },
];

export default function NorthamptonMAMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Northampton MA',
    description: 'Step-by-step process for selling your Northampton home for cash in Hampshire County, Massachusetts',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Northampton property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for you.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at the Hampshire County title company, walk away with cash. No repairs, no cleanout required.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup
        schema={[
          northamptonLocalBusinessSchema,
          faqSchema(FAQ_ITEMS),
          howToSchema,
          videoObjectSchema({
            name: 'Sell My House Fast Northampton MA — USA Home Buyers',
            description: 'Cash offers for Northampton and Hampshire County homes — any condition',
            contentUrl: `${SITE_URL}/videos/northampton-ma/landing.mp4`,
            thumbnailUrl: `${SITE_URL}/images/video-posters/northampton-ma-main-poster.jpg`,
            uploadDate: '2026-05-02',
          }),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/northampton-ma-hero-640.jpg 640w, /images/optimized/northampton-ma-hero-828.jpg 828w, /images/optimized/northampton-ma-hero-1080.jpg 1080w, /images/optimized/northampton-ma-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/northampton-ma-hero-1200.jpg"
            alt="Northampton MA homes — older New England residential neighborhoods in Hampshire County"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Massachusetts Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Northampton MA — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Northampton MA and throughout Hampshire County —
                Penacook, East Northampton, West Northampton, and surrounding communities. Written cash
                offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. MA
                non-judicial foreclosure moves fast (60–90 days total) — act early. We cover all
                closing costs including transfer tax and required attorney fees. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Northampton and Hampshire County in any condition — colonials, capes,
              Victorians, estates, foreclosures, tenant-occupied rentals. No repairs, no agent fees.
            </p>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div className="w-full lg:sticky lg:top-24">
            <CashOfferForm variant="hero" headline="Get Your Northampton MA Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/northampton-ma" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* VIDEO_CAPTION_EXCEPTION: estimated captions pending human timing review — date:2026-05-02 approver:Dan; Adam voice ID Ib97zM6uFBc71OWgj75I verified by Lens */}
        <VideoEmbed
          src="/videos/northampton-ma/landing.mp4"
          title="Sell My House Fast Northampton MA — USA Home Buyers"
          poster="/images/video-posters/northampton-ma-main-poster.jpg"
          captionsSrc="/videos/northampton-ma/landing-captions.vtt"
          captionsLabel="English captions"
          subtitle="A short overview for Northampton MA homeowners considering a direct as-is cash sale."
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            📝 Video Transcript
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">If you need to sell your house fast in Northampton, Massachusetts, USA Home Buyers gives you a simpler option than listing, repairing, and waiting. We buy houses as-is for cash in Northampton and throughout Hampshire County.</p>
            <p className="mb-3">This is built for homeowners who want certainty. The house might need repairs, have old systems, be part of an estate, have tenants, or simply be a property you no longer want to manage. You do not have to paint, clean out every room, schedule open houses, or keep renegotiating after inspections.</p>
            <p className="mb-3">Our process is direct. Tell us about the property, share the basics, and we will review it with you. Then we make a written cash offer. If it fits what you need, you pick the closing date. If it does not fit, you can walk away with no pressure and no fee.</p>
            <p className="mb-3">We are not agents, and we do not charge commissions. We buy Northampton-area homes in their current condition and focus on making the sale predictable, including the closing timeline and next steps for your family. For a no-obligation cash offer, call USA Home Buyers at 888-274-5006. We will listen first, explain the process clearly, and help you decide the best next move.</p>
          </div>
        </details>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Northampton MA Real Estate Market — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Northampton is the state capital of Massachusetts and the county seat of Hampshire County.
            Government, healthcare (Northampton Hospital), and education anchor the local economy.
            The housing stock spans colonial and cape cod homes from the 19th and early 20th century
            in neighborhoods like Penacook and South End, to mid-century and newer construction
            throughout the metro. Boston-area demand overflow has driven significant price appreciation
            across southern Massachusetts.
          </p>
          <p className="text-gray-700 mb-4">
            Massachusetts charges a real estate transfer tax of <strong>$1.50 per $100 of consideration</strong>
            (total) — split evenly between buyer and seller at <strong>$0.75/$100 each</strong>. This is
            collected by the MA Department of Revenue Administration (RSA 78-B). On a $270,000 Northampton
            home, the seller's share is approximately $2,025. Massachusetts is an <strong>attorney state</strong>
            — a licensed MA attorney must certify title marketability; attorney fees on traditional sales
            typically run $600–$1,200. USA Home Buyers covers all closing costs when we purchase.
          </p>
          <p className="text-gray-700 mb-4">
            Massachusetts foreclosure is <strong>non-judicial</strong> under RSA 479:25. Lenders can
            foreclose via power of sale without court involvement, requiring 25 days' published notice
            and 60 days' written notice to the borrower. The total timeline from default to sale is
            typically 60–90 days — much faster than judicial states. There is no post-sale redemption
            period. If you've received a foreclosure notice, time matters.
          </p>
          <p className="text-xs text-gray-400 mb-4">Market data last updated: 2026</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Northampton MA</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median home value</td><td className="p-3">~$270,000</td><td className="p-3 text-gray-500">Local market data (2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">MA transfer tax</td><td className="p-3">$1.50/$100 total; $0.75/$100 seller share (RSA 78-B)</td><td className="p-3 text-gray-500">MA Dept. of Revenue Administration</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Attorney required?</td><td className="p-3">Yes — MA is an attorney state (title certification required)</td><td className="p-3 text-gray-500">MA bar requirements</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Non-judicial (power of sale) — RSA 479:25; 25 days published + 60 days written notice; ~60–90 days total</td><td className="p-3 text-gray-500">MA RSA 479</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Post-sale redemption?</td><td className="p-3">No — no statutory redemption period after foreclosure sale</td><td className="p-3 text-gray-500">MA RSA 479</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Hampshire County Circuit Court — Probate Division, 163 North Main Street, Northampton MA 03301, phone (603) 271-6400</td><td className="p-3 text-gray-500">MA Circuit Court</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">County</td><td className="p-3">Hampshire County</td><td className="p-3 text-gray-500">—</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <SituationLinks
          heading="We Buy Houses in Northampton MA in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/northampton-ma/inherited-property', description: 'Sell an inherited Northampton home through Hampshire County Probate Division' },
            { label: 'Going Through Divorce', href: '/markets/northampton-ma/divorce-sale', description: 'One offer, one closing, clean split — MA divorce decree sales' },
            { label: 'Facing Foreclosure', href: '/markets/northampton-ma/foreclosure', description: 'MA non-judicial foreclosure moves in 60–90 days — sell before the sale date' },
            { label: 'Probate Sale', href: '/markets/northampton-ma/probate', description: 'We work with Hampshire County Probate Division cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/northampton-ma/tenant-occupied', description: 'We buy with tenants in place' },
            { label: 'Code Violations', href: '/markets/northampton-ma/code-violations', description: 'Open violations? We buy anyway' },
            { label: 'Fire Damage', href: '/markets/northampton-ma/fire-damage', description: 'Fire or smoke damage? We purchase as-is' },
          ]}
        />
        <section className="my-12 rounded-xl border border-gray-200 bg-gray-50 p-6"><h2 className="text-2xl font-bold text-brand-dark mb-3">Why sellers use a direct cash offer here</h2><p className="text-gray-700">Every property is different: repairs, title, liens, tenants, probate timing, and closing date all affect the offer. We give a written number after reviewing the actual house, then you choose whether it is easier than listing, repairing, staging, and waiting for a financed buyer.</p></section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Northampton MA</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $270,000 Northampton median home, a 5–6% agent commission runs $13,500–$16,200. Add
            MA's transfer tax (seller's $0.75/$100 share = ~$2,025), required attorney fees
            ($600–$1,200), and carrying costs during the listing period. A direct cash sale eliminates
            all of those costs. MA non-judicial foreclosure can move in as little as 60 days —
            acting early preserves the most equity.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Northampton MA Neighborhoods We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes throughout Northampton and the surrounding Hampshire County communities:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Penacook', 'East Northampton', 'West Northampton', 'South End', 'Downtown Northampton', 'Bow', 'Pembroke', 'Hooksett', 'Canterbury', 'Dunbarton', 'Hopkinton', 'Loudon'].map((n) => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a House in Northampton MA" />

        <BlogClusterLinks marketSlug="northampton-ma" cityName="Northampton MA" />

      {/* Local resources hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">
              Northampton MA mini-site
            </p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Seller resources for Northampton MA homeowners
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Stay in the Northampton MA section for local market data, situation
              pages, seller guides, and articles before you decide whether a
              cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/markets/northampton-ma/resources"
              className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors"
            >
              Northampton MA Resources
            </Link>
            <Link
              href="/guides/sell-house-fast-northampton-ma-2026"
              className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors"
            >
              Local Guide
            </Link>
          </div>
        </div>
      </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Northampton MA Cash Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/markets/northampton-ma"
        />
      </div>
    </>
  );
}
