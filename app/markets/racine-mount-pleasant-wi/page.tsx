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
import { racineWILocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';
import { VideoEmbed } from '@/components/VideoEmbed';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Racine WI',
  description:
    'We buy houses in Racine and Mount Pleasant WI for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Racine County.',
  alternates: { canonical: `${SITE_URL}/markets/racine-mount-pleasant-wi` },
  openGraph: {
    images: [{ url: '/images/racine-mount-pleasant-wi-hero.jpg', width: 1200, height: 630, alt: 'Racine WI cream brick cottage neighborhood — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    "quote": "We inherited my aunt's cream brick cottage on the Northside — one of those 1890s workers' houses off Main Street. The wiring was still knob-and-tube, the roof was original slate that was about to go, and nobody in the family lived in Racine anymore. I reached out Tuesday evening. USA Home Buyers had a written cash offer at my email Wednesday morning. We closed in 11 days at the title company on Wisconsin Avenue.",
    "name": "Thomas H.",
    "location": "Northside Historic District, Racine WI",
    "situation": "Inherited Cream Brick Cottage — Estate Sale",
    "date": "March 2026"
  },
  {
    "quote": "Foreclosure in Racine County moves slow — Wisconsin is judicial, so the bank has to go through Circuit Court. Mine was already 9 months in when I finally called USA Home Buyers. They put a written offer on my West Racine bungalow in 24 hours, closed before the sheriff's sale, and I walked away with enough equity to put a deposit on an apartment in Kenosha.",
    "name": "Jennifer M.",
    "location": "West Racine, WI",
    "situation": "Pre-Foreclosure — Racine County Circuit Court",
    "date": "February 2026"
  },
  {
    "quote": "Racine County family court ordered the house sold. We bought it in 2017 and hadn't agreed on much since then. USA Home Buyers gave us one written number. Neither of us had to negotiate repairs or wait on inspections. Closed in twelve days. Split the proceeds through our attorneys and that was it.",
    "name": "Sandra and Chris F.",
    "location": "Downtown Racine, WI",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "June 2025"
  },
  {
    "quote": "I had a two-unit rental on Case Avenue in Uptown for eight years. The downstairs tenant was fourteen months behind when I finally decided I was done. Wisconsin eviction is long — it can take three to five months minimum. USA Home Buyers bought the property with both tenants in place. From my first call to closing: ten days.",
    "name": "Leon R.",
    "location": "Uptown, Racine WI",
    "situation": "Rental Property — Non-Paying Tenant",
    "date": "September 2025"
  },
  {
    "quote": "My Mount Pleasant house was a split-level near the I-94 corridor, and with all the Microsoft data center news driving prices up, a wholesaler I knew tried to lowball me. I called USA Home Buyers for a second opinion. Their written offer was $28K higher and they closed on my timeline — three weeks because I was moving to Arizona.",
    "name": "Robert K.",
    "location": "Central Mount Pleasant, WI",
    "situation": "Relocation — Suburban Sale",
    "date": "January 2026"
  },
  {
    "quote": "Our Southside house had storm drain flooding in the basement two years running — Racine County has been working on the infrastructure but it wasn't fixed yet. The second time, we had mold in the walls and the furnace sat in standing water and died. Repair estimate was $31,000. USA Home Buyers bought it as-is, knew the local flood situation, no surprises. Closed in seven days.",
    "name": "Diane W.",
    "location": "Southside, Racine WI",
    "situation": "Flood Damage — Basement Flooding",
    "date": "October 2025"
  },
  {
    "quote": "Seventy-two and seventy-four. We'd been happy in our house near the SC Johnson campus for twenty-eight years. But my wife's mobility isn't what it was and we needed one floor, no stairs. USA Home Buyers gave us a fair offer and closed in eight days. We're in a ranch in Caledonia now and it's exactly right.",
    "name": "Arthur and Dolores K.",
    "location": "Northside, Racine WI",
    "situation": "Downsizing — Accessibility",
    "date": "February 2025"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$10,250-$12,300 on Racine median)' },
  { label: 'WI realty transfer fee', cashBuyer: 'We cover everything', traditional: 'Seller pays $3 per $1,000' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Racine WI?',
    answer: 'USA Home Buyers can close in as few as 7 days in Racine and Mount Pleasant WI. We send a written cash offer within 24 hours. Wisconsin is a judicial foreclosure state — once a lender files in Racine County Circuit Court at 730 Wisconsin Avenue, the process can take 10-14 months, but once judgment is entered the bank controls the timeline. If you\'re behind on payments, selling before the sheriff\'s sale is the cleanest path to walking away with your equity intact.',
  },
  {
    question: 'How much will you pay for my Racine WI house?',
    answer: 'Cash offers for Racine homes typically range from 68-80% of fair market value. According to the Zillow Home Value Index (February 2026), the typical home value in Racine is $171,496, up 4.4% year over year. A typical cash offer on a Northside cream brick cottage or a West Racine bungalow runs $117,000-$137,000. Mount Pleasant suburban homes closer to the I-94 / Microsoft corridor see higher numbers — the Realtor.com hotness index pegs the Racine-Mount Pleasant metro median at $347,720 (April 2026), with cash offers in the $236K-$278K range. We cover all closing costs including the Wisconsin realty transfer fee.',
  },
  {
    question: 'What is the realty transfer fee when selling a house in Racine WI?',
    answer: 'Wisconsin charges a state real estate transfer fee of $3.00 per $1,000 of consideration (0.30%) on every real estate sale. This is set by Wis. Stat. § 77.22. Racine County does not add a local surcharge — neither does the City of Racine or the Village of Mount Pleasant. Entirely paid by the seller (grantor). On a $205,000 Racine home: $615. On a $347,720 Mount Pleasant sale: $1,043. A Wisconsin Real Estate Transfer Return (RETR) form must accompany the deed at recording. When you sell to USA Home Buyers, we cover all closing costs. Source: Wisconsin Department of Revenue (revenue.wi.gov).',
  },
  {
    question: 'How does foreclosure work in Racine County WI?',
    answer: 'Wisconsin is a judicial foreclosure state (Wis. Stat. Ch. 846). Every foreclosure must be filed in the Circuit Court of the county where the property sits — for Racine County properties that\'s Racine County Circuit Court, 730 Wisconsin Avenue, Racine WI 53403, (262) 636-3333. Typical timeline from first filing to confirmation of sheriff\'s sale is 10-14 months. Wisconsin provides a 6-month statutory redemption period for 1-4 family owner-occupied homes when the lender waives the deficiency judgment (the common path), or 12 months if the lender preserves that right. Source: Wis. Stats. Ch. 846 (docs.legis.wisconsin.gov).',
  },
  {
    question: 'What areas near Racine do you buy in?',
    answer: 'All of Racine County. That includes the City of Racine (Downtown, Northside, Southside, West Racine, Garden City), the Village of Mount Pleasant, Caledonia, Sturtevant, Union Grove, Burlington, Wind Point, Raymond, Waterford, and Rochester (WI). We also cover Kenosha County to the south (Kenosha, Pleasant Prairie, Somers, Bristol). If you\'re not sure, call 888-274-5006.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: 'No. Racine\'s housing stock leans heavily on pre-1970 construction — cream brick workers\' cottages on the Northside (often with original knob-and-tube wiring, galvanized plumbing, lead paint), Victorian frame houses in the Southside Historic District, mid-century brick ranches in West Racine and Mount Pleasant. We buy in any condition. Most of our Racine purchases are properties that wouldn\'t qualify for conventional or FHA financing. Leave whatever you don\'t want.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company in Racine WI?',
    answer: 'Yes. We provide a written purchase agreement — a legally binding contract with price, terms, and closing date. We have 15+ years of experience buying houses and have closed transactions throughout Racine County and the surrounding Great Lakes region. Our parent company, USA Home Buyers LLC, is registered in Pennsylvania (founded October 2024). You can verify Wisconsin business filings at the Wisconsin Department of Financial Institutions (wdfi.wi.gov) and request our written references.',
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'One of our managers calls you within business hours, asks 5-10 questions about the property and your situation, and sends a written cash offer within 24 hours. No pressure. The offer is a real number, not a range. If it works for you, you pick the closing date. We close at the title company of your choice in Racine or Mount Pleasant.',
  },
];

export default function RacineMountPleasantWIMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Racine-Mount Pleasant WI',
    description: 'Step-by-step process for selling your Racine or Mount Pleasant home for cash in Racine County, Wisconsin',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Racine or Mount Pleasant property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours — no obligation.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for your schedule.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at a title company of your choice in Racine or Mount Pleasant, walk away with your cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[racineWILocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/racine-mount-pleasant-wi-hero-640.jpg 640w, /images/optimized/racine-mount-pleasant-wi-hero-828.jpg 828w, /images/optimized/racine-mount-pleasant-wi-hero-1080.jpg 1080w, /images/optimized/racine-mount-pleasant-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/racine-mount-pleasant-wi-hero-1200.jpg"
            alt="Racine WI cream brick cottage neighborhood on a clear day — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Wisconsin Cash Home Buyers</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Racine &amp; Mount Pleasant WI — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Racine, Mount Pleasant, and throughout Racine County — from Northside cream brick cottages to Mount Pleasant suburban splits near the I-94 Microsoft corridor. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. According to the Zillow Home Value Index (February 2026), the typical Racine home value is $171,496, up 4.4% YoY. We cover all closing costs including Wisconsin's realty transfer fee ($3 per $1,000). Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Racine WI, Mount Pleasant, and all of Racine County in any condition — cream brick cottages, Victorian singles, suburban splits, rentals, estates, foreclosures. No repairs, no agent fees, no waiting.
            </p>
            <a
              href="tel:+18882745006"
              className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50"
            >
              📞 Call 888-274-5006 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Racine WI Cash Offer"
              subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs."
              sourcePage="/markets/racine-mount-pleasant-wi"
            />
          </div>
        </div>
      </section>

        <VideoEmbed
        src="/videos/racine-mount-pleasant-wi/landing.mp4"
        title="Sell My House Fast Racine WI — USA Home Buyers"
        subtitle="Cash offers for Racine, Mount Pleasant, and Racine County homes — any condition"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
        📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
        If you need to sell your house fast in Racine or Mount Pleasant, Wisconsin — you've found the right team. We're USA Home Buyers, and we purchase houses as-is, for cash, throughout Racine County. Whether your home needs repairs, you're behind on payments, going through a divorce, or you've inherited a property you don't know what to do with — we make the process simple. No agents. No fees. No repairs needed. We buy homes in Racine and Mount Pleasant in any condition. Written cash offer within 24 hours. Close in as few as seven days on your schedule. Call us now at 888-274-5006. That's 888-274-5006.
        </div>
        </details>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Racine-Mount Pleasant WI Real Estate Market — What Sellers Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            Racine sits on Lake Michigan between Milwaukee (25 miles north) and Kenosha (10 miles south), with the Village of Mount Pleasant hugging its western edge along I-94. The city grew up around industry — SC Johnson, Modine, Case (now CNH Industrial), and a century of lakefront shipping. That heritage shows in the housing stock. Most of Racine's historic residential neighborhoods — the Northside, Southside, West Racine, Garden City — are lined with cream brick workers' cottages, Victorians, and mid-century bungalows built from the 1870s through the 1960s for generations of factory families. Mount Pleasant, the surrounding village, is very different: post-war suburban split-levels, 1990s-2000s subdivisions, and newer development along the I-94 corridor where the former Foxconn parcels are becoming a Microsoft data center campus.
          </p>
          <p className="text-gray-700 mb-4">
            That split — a 77,000-person lakefront city with century-old housing stock, bolted to a 27,000-person suburb with new construction and a major tech tailwind — is what makes the Racine-Mount Pleasant market unique. Cash buyers dominate the historic-district trade (pre-1940 wiring and plumbing rarely qualifies for conventional financing), while Mount Pleasant's market leans suburban-retail.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Racine-Mount Pleasant WI</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Racine typical home value (ZHVI)</td><td className="p-3">$171,496 (+4.4% YoY)</td><td className="p-3 text-gray-500">Zillow (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Racine median sale price</td><td className="p-3">$205,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Mount Pleasant median $/sqft</td><td className="p-3">$174 (+6.7% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Racine-Mount Pleasant metro hotness median</td><td className="p-3">$347,720</td><td className="p-3 text-gray-500">Realtor.com (Apr 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market (Racine)</td><td className="p-3">~35 days (8 offers avg)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin compete score</td><td className="p-3">82/100 — very competitive</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Realty transfer fee</td><td className="p-3">$3.00 per $1,000 (seller pays, state only)</td><td className="p-3 text-gray-500">Wis. Stat. § 77.22</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial (Racine Co. Circuit Court, 10-14 months)</td><td className="p-3 text-gray-500">Wis. Stats. Ch. 846</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Probate court</td><td className="p-3">Racine Co. Circuit Court, 730 Wisconsin Ave, 6th Fl.</td><td className="p-3 text-gray-500">Wis. Stat. Ch. 851</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">What this means for Racine sellers: if you own a pre-1940 Northside or Southside cottage, your conventional-financing buyer pool is small — cash offers aren't a discount, they're the real market. For Mount Pleasant suburban owners, the Microsoft / I-94 corridor tailwind means 2026 is a sellers&rsquo; market for newer stock. Either way, a direct cash offer cuts out the 5-6% agent commission and the 45-60 day closing tail.</p>
        </section>

        <SituationLinks
          heading="We Buy Houses in Racine WI in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/racine-mount-pleasant-wi/inherited-property', description: 'Sell an inherited Racine or Mount Pleasant home through Racine County Circuit Court Probate Division' },
            { label: 'Going Through Divorce', href: '/markets/racine-mount-pleasant-wi/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/racine-mount-pleasant-wi/foreclosure', description: 'Wisconsin judicial foreclosure (Ch. 846, 10-14 months) — sell before the sheriff\'s sale' },
            { label: 'Probate Sale', href: '/markets/racine-mount-pleasant-wi/probate', description: 'We work with Racine County Circuit Court Probate Division cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/racine-mount-pleasant-wi/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/racine-mount-pleasant-wi/code-violations', description: 'City of Racine open violations, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/racine-mount-pleasant-wi/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Racine &amp; Mount Pleasant WI Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Racine-Mount Pleasant WI
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $205,000 Racine home, a 5-6% agent commission runs $10,250-$12,300. Add Wisconsin's realty transfer fee (~$615), carrying costs during 35+ days on market, and potential repairs on century-old housing stock. Many Racine cream brick cottages and Northside Victorians have original knob-and-tube wiring, galvanized plumbing, or lead paint — conventional and FHA lenders won't touch them, limiting your buyer pool to cash buyers regardless. On a $347,720 Mount Pleasant split-level, the commission hit alone is $17,000-$21,000 before closing costs and repairs. A direct cash offer eliminates that entire calculation.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Racine WI Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including WI realty transfer fee."
            sourcePage="/markets/racine-mount-pleasant-wi"
          />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Racine WI Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Racine County WI
          </h2>
          <p className="text-gray-700 mb-4">
            Our Racine coverage includes the entire City of Racine — Downtown and the Old Main Street Historic District along the lakefront, the Northside Historic District with its National Register cream brick workers' cottages, the Southside Historic District, West Racine, Garden City, and the Melvin Avenue and Historic Sixth Street districts.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the Village of Mount Pleasant throughout — central ranches and splits, the Racine Country Club area, and the newer development along the I-94 corridor near the Microsoft data center campus. We also buy in Caledonia, Sturtevant, Union Grove, Burlington, Wind Point, Raymond, Waterford, and Rochester (WI). To the south we overlap our Kenosha County coverage (Kenosha, Pleasant Prairie, Somers, Bristol).
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Downtown Racine', 'Northside Historic District', 'Southside Historic District', 'West Racine', 'Garden City', 'Sixth Street District', 'Mount Pleasant', 'Caledonia', 'Sturtevant', 'Union Grove', 'Burlington', 'Wind Point', 'Raymond', 'Waterford', 'Rochester WI'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Racine-Mount Pleasant WI Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Northside cream brick cottages to Mount Pleasant suburban splits — we buy in every Racine neighborhood and every Racine County community.</p>
          <Link href="/markets/racine-mount-pleasant-wi/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <BlogClusterLinks marketSlug="racine-mount-pleasant-wi" cityName="Racine" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Racine or Mount Pleasant WI home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/racine-mount-pleasant-wi" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Racine WI Home?" sourcePage="/markets/racine-mount-pleasant-wi" />
        </section>
      </div>
    </>
  );
}
