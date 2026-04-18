/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Oshkosh WI',
  description:
    'We buy houses in Oshkosh WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Winnebago County WI. Call 888-440-5250.',
  alternates: { canonical: `${SITE_URL}/markets/oshkosh-wi` },
  openGraph: {
    images: [{ url: '/images/oshkosh-wi-hero.jpg', width: 1200, height: 630, alt: 'Oshkosh WI home — Sell Your House Fast for Cash' }],
  },
};

const oshkoshWILocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'RealEstateAgent'],
  '@id': `${SITE_URL}/#business-oshkosh-wi`,
  name: 'USA Home Buyers — Oshkosh WI',
  description: 'Cash home buyers serving Oshkosh WI and Winnebago County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
  url: `${SITE_URL}/markets/oshkosh-wi`,
  telephone: '+18884405250',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oshkosh',
    addressRegion: 'WI',
    postalCode: '54901',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 44.0247, longitude: -88.5426 },
  areaServed: [
    { '@type': 'City', name: 'Oshkosh', sameAs: 'https://en.wikipedia.org/wiki/Oshkosh,_Wisconsin' },
    { '@type': 'City', name: 'Neenah' },
    { '@type': 'City', name: 'Menasha' },
    { '@type': 'City', name: 'Winneconne' },
    { '@type': 'City', name: 'Omro' },
    { '@type': 'County', name: 'Winnebago County, WI' },
  ],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  priceRange: '$$',
  image: `${SITE_URL}/images/oshkosh-wi-hero.jpg`,
};

const TESTIMONIALS = [
  {
    quote: "Dad worked at Oshkosh Corporation for 31 years — the house on the Far North Side was everything he saved for. After he passed, we were trying to handle the estate from Phoenix and the Winnebago County probate timeline was longer than any of us expected. USA Home Buyers made us an offer two days after we called and closed seventeen days later. They never once asked us to come back and deal with the cleanout. The simplest part of the whole estate process.",
    name: 'Gary T.',
    location: 'Far North Side, Oshkosh WI',
    situation: 'Inherited Estate — Former Oshkosh Corporation Employee',
    date: 'March 2026',
  },
  {
    quote: "We had a brick bungalow in the Menominee Park neighborhood — solid house, but the roof needed replacing and the furnace was on its last season. Our neighbor's EAA AirVenture short-term rental next door had dragged our comparable values around a bit. We didn't want to pour another $20,000 into a home we were leaving anyway. USA Home Buyers gave us a real number the next morning. Closed in twelve days. No inspector parade, no repair credits.",
    name: 'Susan L.',
    location: 'Menominee Park, Oshkosh WI',
    situation: 'As-Is Sale — Deferred Maintenance Bungalow',
    date: 'February 2026',
  },
  {
    quote: "Lake Winnebago flooding had gotten into our South Shore basement twice in four years. The flood insurance was expensive, the buyers who looked at it all walked once they found out the flood history. USA Home Buyers already knew the South Shore flood-plain dynamics — no surprises, no renegotiating after inspection. Written offer, fair number, closed on our schedule. That's what we needed.",
    name: 'Karen and Tom R.',
    location: 'South Shore, Oshkosh WI',
    situation: 'Flood-Plain Property — Lake Winnebago Drainage Zone',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '44-59 days (61-day Oshkosh median DOM + 30-45 close)' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg on pre-1960 stock)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$10,600-$12,700 on Oshkosh ZHVI)' },
  { label: 'WI transfer tax (0.30%)', cashBuyer: 'We cover everything', traditional: '$3.00/$1,000 — seller pays ~$633 on $211K Redfin median' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs (well-maintained only)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Oshkosh WI?',
    answer: 'USA Home Buyers can close in as few as 7 days in Oshkosh and throughout Winnebago County WI. We send a written cash offer within 24 hours of your inquiry. Wisconsin is a judicial foreclosure state under Wis. Stat. Ch. 846 — once a lender files in Winnebago County Circuit Court, the process typically runs 12-15 months total. If you\'re behind on payments, selling before the sheriff\'s sale preserves whatever equity remains. Call 888-440-5250.',
  },
  {
    question: 'How much will you pay for my Oshkosh WI house?',
    answer: 'Cash offers for Oshkosh homes typically run 70-80% of fair market value, depending on condition, location, and any liens. Zillow\'s Home Value Index for Oshkosh is $250,967 (+5.2% YoY, April 2026). Redfin puts the March 2026 median sale price at $211,000. A typical cash offer on a Merritt area bungalow or Algoma mid-century ranch runs in the $148K-$169K range on a home at median condition. We cover all closing costs including Wisconsin state real estate transfer fee ($3.00/$1,000 under Wis. Stat. § 77.22) — no additional Winnebago County WI or City of Oshkosh transfer tax.',
  },
  {
    question: 'What is the transfer tax when selling a house in Oshkosh WI?',
    answer: 'Wisconsin charges a Real Estate Transfer Fee under Wis. Stat. § 77.22 of $3.00 per $1,000 of sale price (0.30%). Winnebago County WI does NOT add a county surcharge — the state fee is the only transfer tax. The City of Oshkosh also imposes no municipal transfer tax. Total: $3.00/$1,000 — seller pays by custom. On the $211,000 Redfin median, that\'s $633. A Wisconsin Real Estate Transfer Return (RETR form) must accompany any deed at recording at Winnebago County Register of Deeds, 415 Jackson Street, (920) 232-3390. When you sell to USA Home Buyers, we cover all closing costs.',
  },
  {
    question: 'How does foreclosure work in Winnebago County WI?',
    answer: 'Wisconsin is a 100% judicial foreclosure state under Wis. Stat. Ch. 846. Every foreclosure must go through Winnebago County Circuit Court — 415 Jackson Street, Oshkosh WI 54901. The typical Winnebago County WI timeline from first missed payment to completed foreclosure sale is 12-15 months. Under Wis. Stat. § 846.101, owner-occupied 1-4 family homes (where the lender waives deficiency) have a 6-month redemption period from judgment. Call 888-440-5250 immediately if you\'re behind on payments.',
  },
  {
    question: 'What areas near Oshkosh do you buy in?',
    answer: 'All of Winnebago County WI. That includes Oshkosh proper (Lake Shore, Merritt, Algoma, Center City/Downtown, Sawyer Creek, Southwest Oshkosh/Oakwood — ZIPs 54901, 54902, 54904), Neenah, Menasha, Winneconne, Omro, Oshkosh Township, and the Town of Black Wolf. We also cover adjacent areas including Fond du Lac County to the southwest (Fond du Lac city) and Fox Cities to the northeast. Call 888-440-5250 if you\'re unsure whether we serve your address.',
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: 'No. Oshkosh\'s housing stock is predominantly pre-1960 construction — brick bungalows in the Merritt and Algoma neighborhoods, Victorian-era wood-frame homes on the Lake Shore waterfront, early-20th-century two-stories in Center City, mid-century Cape Cods and ranches on the southwest side. Many don\'t qualify for conventional or FHA financing in their current state due to knob-and-tube wiring, galvanized plumbing, or deferred maintenance. We buy in any condition. Leave whatever you don\'t want behind.',
  },
  {
    question: 'How does selling an inherited Oshkosh house work if it\'s in probate?',
    answer: 'Inherited Wisconsin real estate must go through probate at Winnebago County Circuit Court — Register in Probate, 415 Jackson Street, Room 242, Oshkosh WI 54901, (920) 236-4808. Wisconsin has two probate paths under Wis. Stat. Ch. 856: informal probate for uncontested estates (typically 4-8 months) and formal probate under Ch. 857-879 for contested or complex estates (9-18 months). A small estate affidavit is only available for estates under $50,000 with no real property — real estate always requires the probate process. We can have a written offer ready before you even open the probate file.',
  },
  {
    question: 'Is Oshkosh a good market to sell a home quickly?',
    answer: 'Yes. Realtor.com ranked Oshkosh #13 hottest housing market nationally in March 2026 (hotness score 92.809, median active listing DOM 36.0 days). Redfin compete score is 60/100 (somewhat competitive). Median sold DOM is 61 days. The hot-home segment goes pending in 42 days. Cash sales cut through that competition entirely — no mortgage contingency, no inspection renegotiation, no waiting for the buyer\'s loan to clear. For sellers in time-sensitive situations, cash is faster and more certain than retail.',
  },
];

export default function OshkoshWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Oshkosh WI',
    description: 'Step-by-step process for selling your Oshkosh or Winnebago County WI home for cash',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Oshkosh or Winnebago County WI property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours — no obligation.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for your schedule.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at an Oshkosh WI title company of your choice, walk away with your cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[oshkoshWILocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/oshkosh-wi-hero-640.jpg 640w, /images/optimized/oshkosh-wi-hero-828.jpg 828w, /images/optimized/oshkosh-wi-hero-1080.jpg 1080w, /images/optimized/oshkosh-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/oshkosh-wi-hero-1200.jpg"
            alt="Oshkosh WI brick bungalow neighborhood near Lake Winnebago — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers — Market #13 Nationally (RDC March 2026)</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Oshkosh WI — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Oshkosh WI and throughout Winnebago County — Lake Shore Victorians, Merritt brick bungalows, Algoma mid-century ranches, Center City urban-core homes, estate sales, foreclosures, divorce situations. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no agent fees. Oshkosh Zillow ZHVI $250,967 (+5.2% YoY, Apr 2026); Redfin median sale $211,000. WI state transfer fee $3.00/$1,000 — no county or municipal add-on. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Oshkosh WI, Neenah, Menasha, and all of Winnebago County — any condition, any situation. No repairs, no agent fees, no waiting.
            </p>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <VideoEmbed
              src="/videos/oshkosh-wi/landing.mp4"
              title="Sell My House Fast Oshkosh WI — USA Home Buyers"
              poster="/videos/oshkosh-wi/landing-poster.jpg"
              subtitle="Cash offers for Oshkosh and Winnebago County WI homes — any condition"
            />
            <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
              <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                📝 Video Transcript
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                If you need to sell your house fast in Oshkosh, Wisconsin — you've found the right team. We're USA Home Buyers, and we purchase houses as-is, for cash, throughout Winnebago County. No agents. No fees. No repairs needed. Written cash offer within 24 hours, close in as few as seven days. Call us at 888-440-5250.
              </div>
            </details>
            <CashOfferForm
              variant="hero"
              headline="Get Your Oshkosh WI Cash Offer"
              subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs."
              sourcePage="/markets/oshkosh-wi"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Oshkosh WI Real Estate Market — What Sellers Need to Know in 2026
          </h2>
          <p className="text-gray-700 mb-4">
            Oshkosh is Winnebago County's seat, a Lake Winnebago port city of 67,242 residents on Wisconsin's Fox River, and the host of EAA AirVenture — the world's largest airshow, drawing 500,000-plus attendees annually to an event that puts the city on a global map most Rust Belt markets never reach. Realtor.com ranked Oshkosh the #13 hottest housing market in the country as of March 2026 (hotness score 92.809, median active listing DOM 36.0 days) — a figure driven by Winnebago County's tight inventory and the Fox Cities' strong employment base including Oshkosh Corporation, Mercury Marine, and UW Oshkosh.
          </p>
          <p className="text-gray-700 mb-4">
            Oshkosh built its identity on manufacturing, lake commerce, and education. The housing stock that grew from that history is visually distinctive and structurally specific: Victorian-era wood-frame homes on the Lake Winnebago waterfront dating to the 1880s, early-20th-century brick bungalows in the Merritt and Algoma neighborhoods near UW Oshkosh, mid-century Cape Cods and ranches scattered across the southwest and southeast sides, and the historic two-story frame homes of Center City and Downtown. The dominant theme is pre-war construction — and pre-war construction is where the cash buyer opportunity lives.
          </p>
          <p className="text-gray-700 mb-4">
            Oshkosh's housing stock regularly presents the conditions that keep conventional and FHA financing off the table: original knob-and-tube wiring in brick bungalows, galvanized plumbing in pre-war homes, basement moisture issues tied to Lake Winnebago's flood-plain drainage zones, and deferred maintenance on roofs and mechanicals that owners — particularly retirees and estate heirs — don't want to fund. A Redfin compete score of 60/100 tells you that retail-ready homes move (median 61 days on market, with hot homes going pending in 42 days), but the key is "retail-ready." Many of Oshkosh's most interesting homes aren't, and they need a cash buyer.
          </p>
          <p className="text-gray-700 mb-4">
            The Fox Valley manufacturing cycle and UW Oshkosh faculty retirement pipeline produce a steady distressed-seller profile unique to this market. When a former Kimberly-Clark or Oshkosh Corporation employee on a fixed pension faces a major repair bill on a 1940s brick bungalow they've owned for decades, or when adult children in Arizona manage an estate that includes a Lake Winnebago-adjacent Victorian, the decision to sell for cash rather than fund a renovation they can't supervise is straightforward. USA Home Buyers serves exactly these sellers.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Oshkosh WI</th>
                  <th className="text-left p-3">Source / Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow Home Value Index (ZHVI)</td><td className="p-3">$250,967 (+5.2% YoY)</td><td className="p-3 text-gray-500">Zillow (Apr 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price</td><td className="p-3">$211,000 (-1.1% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per Square Foot</td><td className="p-3">$137 (-2.8% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median Days on Market (sold)</td><td className="p-3">61 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Hot Homes Pending</td><td className="p-3">~42 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">RDC Active Listing DOM</td><td className="p-3">36.0 days (Rank #13 nationally)</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">60/100 — Somewhat Competitive</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale-to-List Price Ratio</td><td className="p-3">99.5% (+0.2 pt YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Homes Sold (Mar 2026)</td><td className="p-3">53 (up from 52 Mar 2025)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">WI Transfer Fee (state only)</td><td className="p-3">$3.00/$1,000 (0.30%) — no county or municipal add-on</td><td className="p-3 text-gray-500">Wis. Stat. § 77.22</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — Wis. Stat. Ch. 846 (12-15 mos typical)</td><td className="p-3 text-gray-500">Wisconsin Statutes</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Winnebago Co. Circuit Court, Register in Probate, 415 Jackson St, (920) 236-4808</td><td className="p-3 text-gray-500">Wis. Stat. Ch. 856</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">What this means for Oshkosh sellers: the RDC #13 ranking reflects countywide competitiveness including Neenah's stronger submarket. City-level Redfin data shows 61-day median DOM — solid but not instant. Cash buyers sidestep the retail competition entirely. At 5-6% commission on a $211,000 median, you're looking at $10,550-$12,660 before repair requests, closing costs, and carrying time. On pre-war Oshkosh housing stock, repair requests are common.</p>
        </section>

        <SituationLinks
          heading="We Buy Houses in Oshkosh WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/oshkosh-wi/inherited-property', description: 'Sell an inherited Oshkosh home — we work with Winnebago County Register in Probate timelines (Wis. Stat. Ch. 856)' },
            { label: 'Going Through Divorce', href: '/markets/oshkosh-wi/divorce-sale', description: 'One offer, one closing — equitable distribution under Wis. Stat. § 767.61 without the delay' },
            { label: 'Facing Foreclosure', href: '/markets/oshkosh-wi/foreclosure', description: 'WI judicial foreclosure (Wis. Stat. Ch. 846) — sell before the Winnebago County sheriff\'s sale' },
            { label: 'Probate Sale', href: '/markets/oshkosh-wi/probate', description: 'We work with Winnebago County Register in Probate cases, informal and formal (Wis. Stat. Ch. 856-879)' },
            { label: 'Tenant-Occupied Property', href: '/markets/oshkosh-wi/tenant-occupied', description: 'We buy with tenants in place — Wis. Stat. Ch. 704 lease survival on sale; no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/oshkosh-wi/code-violations', description: 'City of Oshkosh open violations, raze orders (Wis. Stat. § 66.0413) — we buy anyway, as-is' },
            { label: 'Fire Damage', href: '/markets/oshkosh-wi/fire-damage', description: 'Fire or smoke damage in Oshkosh? We purchase as-is with no cleanup required — WI Ch. 709 disclosure handled' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Oshkosh WI Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Oshkosh WI
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $211,000 Oshkosh home, a 5-6% agent commission runs $10,550-$12,660. Add Wisconsin's transfer fee (~$633), carrying costs during 61-day median DOM, and repair requests on pre-war housing stock. Oshkosh brick bungalows and Lake Shore Victorians frequently have deferred-maintenance issues — knob-and-tube wiring, galvanized plumbing, foundation moisture near Lake Winnebago drainage zones — that conventional lenders flag. A cash offer eliminates the inspection contingency and repair negotiation entirely. At $250,967 ZHVI, every commission dollar matters.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Oshkosh WI Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including WI state transfer fee."
            sourcePage="/markets/oshkosh-wi"
          />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Oshkosh WI Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Winnebago County WI
          </h2>
          <p className="text-gray-700 mb-4">
            Our Oshkosh coverage includes the entire city — the Lake Shore and Lakeview waterfront with its Victorian-era Queen Anne and Foursquare homes, the Merritt neighborhood near UW Oshkosh with its brick bungalows and student-rental stock, the Algoma and Fair Acres established residential areas, Center City and Downtown with mixed urban residential, Sawyer Creek and newer southwest suburban development, and the Southwest Oshkosh/Oakwood corridor of mid-century ranches. ZIPs 54901, 54902, and 54904 all covered.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the full Winnebago County WI footprint — Neenah (Kimberly-Clark home base, ~9 miles NE), Menasha (Fox River industrial town, ~11 miles NE), Winneconne (~15 miles west), Omro (~12 miles west), the Town of Black Wolf, and the unincorporated Winnebago County townships. We also serve adjacent Fond du Lac County to the southwest.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Lake Shore', 'Merritt / Near UW', 'Algoma', 'Fair Acres', 'Center City', 'Downtown Oshkosh', 'Sawyer Creek', 'Southwest Oshkosh', 'Oakwood', 'South Shore', 'Far North Side', 'Menominee Park', 'Westhaven', 'Neenah', 'Menasha', 'Winneconne', 'Omro'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Oshkosh WI Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Lake Shore Victorians to Merritt brick bungalows to Algoma mid-century ranches — we buy in every Oshkosh neighborhood and every Winnebago County community.</p>
          <Link href="/markets/oshkosh-wi/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See Oshkosh neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <section className="my-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Our Third Wisconsin Market</h2>
          <p className="text-gray-700 text-sm mb-3">Oshkosh is our third Wisconsin market, joining Kenosha (#9, Kenosha County) and Racine (#10, Racine County). For statewide Wisconsin legal context — transfer fees, foreclosure law, probate procedures — see our Wisconsin state guide. For our other WI operations, see the market pages below.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/sell-house-fast-wisconsin" className="text-brand-primary hover:underline font-medium text-sm">Wisconsin Seller's Legal Guide →</Link>
            <Link href="/markets/kenosha-wi" className="text-brand-primary hover:underline font-medium text-sm">Kenosha WI Market →</Link>
            <Link href="/markets/racine-mount-pleasant-wi" className="text-brand-primary hover:underline font-medium text-sm">Racine WI Market →</Link>
          </div>
        </section>

        <BlogClusterLinks marketSlug="oshkosh-wi" cityName="Oshkosh" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Oshkosh WI or Winnebago County home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/oshkosh-wi" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Oshkosh WI Home?" sourcePage="/markets/oshkosh-wi" />
        </section>
      </div>
    </>
  );
}
