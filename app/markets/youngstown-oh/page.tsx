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
import { youngstownLocalBusinessSchema, youngstownFAQSchema, youngstownHowToSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Youngstown OH',
  description:
    'We buy houses in Youngstown OH for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving all of Mahoning County.',
  alternates: { canonical: `${SITE_URL}/markets/youngstown-oh` },
  openGraph: {
    images: [{ url: '/images/youngstown-oh-hero.jpg', width: 1200, height: 630, alt: 'Youngstown OH Rust Belt homes — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    quote: "My father worked at Youngstown Sheet and Tube his whole life. When he passed, I inherited the house on the South Side — built in 1928, deferred maintenance for 20 years, code violations the city had flagged twice. I live in Cleveland now. USA Home Buyers made a written offer the next day, handled everything, and closed in 11 days. I didn't have to touch a single thing.",
    name: 'Gerald M.',
    location: 'South Side, Youngstown OH',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
  },
  {
    quote: "I got behind on payments after losing my warehouse job. The lender filed in Mahoning County Common Pleas Court and I didn't know what to do. USA Home Buyers explained the Ohio judicial foreclosure timeline, made a written offer the next morning, and we closed before the case moved to summary judgment. I walked away with money instead of losing everything at the sheriff's sale.",
    name: 'Denise K.',
    location: 'Brier Hill, Youngstown OH',
    situation: 'Foreclosure — Pre-Sheriff Sale',
    date: 'February 2026',
  },
  {
    quote: "Our divorce required the house on Wick Park to be sold. My ex and I couldn't agree on anything. USA Home Buyers gave us one number, one closing date, and the proceeds split cleanly through our attorneys on the same day. The house sold faster than our divorce was final.",
    name: 'Patricia V.',
    location: 'Wick Park, Youngstown OH',
    situation: 'Divorce Sale — Clean Settlement',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required (high cost on pre-1950 stock)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$6,460-$7,752 on $129K home)' },
  { label: 'Ohio conveyance fee ($4/1,000)', cashBuyer: 'We cover all closing costs', traditional: 'Seller pays ~$517 on $129,200 sale' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '65-75% of ARV (no deductions)', traditional: '85-90% FMV minus repairs, commissions, fee' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Youngstown OH?',
    answer: "Once you accept a written offer, we close in 7-14 days. We send the written offer within 24 hours of your inquiry. According to Redfin, Youngstown homes spend a median of 70 days on market when listed — that path requires showings, inspections, and waiting on mortgage lender approval. Many Youngstown properties don't qualify for conventional financing due to condition, making cash buyers the realistic exit for much of the city's housing stock.",
  },
  {
    question: 'What is the conveyance fee when selling a house in Youngstown OH?',
    answer: "Ohio uses a conveyance fee system instead of a transfer tax. In Mahoning County the total is $4.00 per $1,000 of sale price — $1/1,000 Ohio state conveyance fee (ORC § 319.202) plus $3/1,000 Mahoning County permissive fee (ORC § 322.02) — plus a $0.50 per-parcel transfer fee. The seller pays at closing via the title company on DTE Form 100. On the $129,200 median sale price, that's about $517. When you sell to us, we cover all closing costs. Source: Mahoning County Auditor (auditor.mahoningcountyoh.gov).",
  },
  {
    question: 'How much will you pay for my Youngstown OH house?',
    answer: "Cash offers for Youngstown homes typically run 65-75% of after-repair value. According to Redfin, the Youngstown median sale price is $129,200 (February 2026). The Zillow ZHVI for the city sits at $51,815 — reflecting the large stock of vacant and distressed properties. Most city-core homes receive offers in the $35,000-$90,000 range depending on neighborhood and condition; Boardman and Austintown properties are higher. We cover all closing costs — nothing deducted from your number.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. Youngstown's housing stock is predominantly pre-1950 wood-frame construction — American Foursquares, Craftsman bungalows, workers' cottages built for steelworkers in the 1910s-1940s. Lead paint (pre-1978) is nearly universal here. Deferred maintenance, structural settling, outdated electrical, and code violations are standard. That's exactly what we buy — as-is, no repairs, no cleanout required.",
  },
  {
    question: 'What areas near Youngstown do you buy in?',
    answer: "We serve all of Mahoning County and extend into Trumbull County — Warren, Boardman, Austintown, Niles, Campbell, Struthers, Girard, Hubbard, Canfield, Poland, Mineral Ridge, and Lowellville. If you're in the Youngstown-Warren MSA, we want to hear from you.",
  },
  {
    question: 'How does foreclosure work in Ohio?',
    answer: "Ohio is a judicial foreclosure state. All foreclosures go through the Mahoning County Court of Common Pleas — there is no non-judicial option. The process typically runs 6-24 months from first missed payment to sheriff's sale confirmation. Ohio also requires mediation referral under HB 130, which adds time but protects homeowners. You can sell at any point before the sheriff's sale to pay off the mortgage and walk away with equity. Source: Ohio Legal Help (ohiolegalhelp.org).",
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: "We're an LLC. Every offer is a written purchase agreement — price, terms, closing date. No verbal promises. We've purchased homes throughout Ohio and Pennsylvania. You can review the offer at your leisure and walk away with no penalty if it's not right for you.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: "We call within hours during business hours. We'll ask about the property — condition, situation, your timeline. Within 24 hours you receive a written cash offer. The offer stands on its own — no pressure, no obligation. If you accept, we pick a closing date that works for you.",
  },
];

export default function YoungstownMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[youngstownLocalBusinessSchema, youngstownFAQSchema, youngstownHowToSchema]} />

      {/* Hero */}
      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/youngstown-oh-hero-640.jpg 640w, /images/optimized/youngstown-oh-hero-828.jpg 828w, /images/optimized/youngstown-oh-hero-1080.jpg 1080w, /images/optimized/youngstown-oh-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/youngstown-oh-hero-1200.jpg"
            alt="Youngstown OH Rust Belt residential street — sell your house fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in Youngstown, OH — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases houses throughout Youngstown OH and Mahoning County for cash
              in any condition — South Side bungalows, Wick Park Foursquares, Brier Hill workers'
              cottages, Belle Vista Craftsmans. No repairs, no cleaning, no agent fees. Written cash
              offer within 24 hours, close in as few as 7 days.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-4">
              <span>✓ No repairs</span>
              <span>✓ No commissions</span>
              <span>✓ We pay all closing costs</span>
              <span>✓ Close in 7 days</span>
              <span>✓ Any condition</span>
              <span>✓ Ohio conveyance fee — covered</span>
            </div>
            <a href={`tel:${PHONE}`} className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
            <p className="text-blue-200 text-sm">
              Serving Youngstown · Warren · Boardman · Austintown · Niles · Campbell · Struthers · Girard and all of Mahoning County
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/youngstown-oh" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Youngstown context — steel collapse, Rust Belt, population decline */}
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Youngstown OH: Where Steel Defined a City — and Left a Housing Market Unlike Any Other
          </h2>
          <p className="text-gray-700 mb-4">
            On September 19, 1977 — a day Youngstown still calls Black Monday — Youngstown Sheet and Tube
            Company shut down the Campbell Works, eliminating 5,000 jobs overnight. It was the opening
            act of a deindustrialization that would strip the Mahoning Valley of over 50,000 manufacturing
            jobs across the following decade. The city's population, which peaked near 170,000 in 1950,
            had fallen to 59,331 by 2024. More than one in three residential parcels in the city core
            is now vacant, demolished, or held by the{' '}
            <a href="https://www.youngstownlandbank.com" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Mahoning County Land Reutilization Corporation</a>.
          </p>
          <p className="text-gray-700 mb-4">
            What that history leaves behind is a housing market defined by extraordinary affordability and
            extraordinary complexity. The median sale price of $129,200 (Redfin, February 2026) reflects
            genuine transactions — but the Zillow ZHVI of $51,815 for the city captures what most of the
            housing stock is actually worth across all parcels, including the vast pool of distressed and
            vacant properties. Many homes don't qualify for conventional mortgage financing at all — which
            makes cash buyers not just an option, but often the only realistic one.
          </p>
          <p className="text-gray-700 mb-4">
            The sellers who call us most often fit a recognizable pattern in Youngstown: they inherited a
            house from a parent or grandparent who worked the mills, the property has been sitting empty
            for years, and neither the family nor the market has the resources for a $40,000 renovation.
            That's a situation where a fast cash close — on any terms that net them something rather than
            nothing — is genuinely the best available outcome.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Median sale price', value: '$129,200', note: 'Redfin, February 2026' },
              { label: 'Median days on market', value: '70 days', note: 'Redfin, February 2026' },
              { label: 'Ohio conveyance fee', value: '$4/1,000', note: 'Seller pays — Mahoning County Auditor' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-blue-100 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-brand-dark">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            According to the{' '}
            <a href="https://www.ohio-demographics.com/youngstown-demographics" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">U.S. Census Bureau ACS</a>,
            Youngstown's poverty rate is 31.2% and the median household income is $34,408 — roughly half the
            Ohio state median. For a cash buyer, that economic reality creates a clear value: certainty of
            close, fast timeline, and zero seller costs matter far more here than chasing an extra $10,000
            on the open market through a process that may take four months and fall apart at inspection.
          </p>
        </section>

        {/* Market Data Table */}
        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Youngstown OH Housing Market — 2026 Data
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Median sale price — Youngstown (Redfin, Feb 2026)', '$129,200'],
                  ['YoY change — sale price (Redfin)', '+57.6% (small sample, 30 sales)'],
                  ['Median home value (Zillow ZHVI, city, 2025)', '$51,815'],
                  ['YoY change — city ZHVI (Zillow)', '-2.2%'],
                  ['Median home value (Zillow ZHVI, Mahoning County, 2025)', '$149,008'],
                  ['YoY change — county ZHVI (Zillow)', '+4.5%'],
                  ['Price per square foot (Redfin, Feb 2026)', '$73/sqft'],
                  ['Median days on market (Redfin, Feb 2026)', '70 days'],
                  ['Sale-to-list ratio (Redfin, Feb 2026)', '97.0% (+2.7 pts YoY)'],
                  ['Redfin Compete Score', '69/100 — Somewhat Competitive'],
                  ['Homes sold monthly (Feb 2026)', '30 homes'],
                  ['Cash offer range (Youngstown city)', '65-75% of after-repair value (ARV)'],
                  ['Ohio conveyance fee — Mahoning County', '$4.00/1,000 (state $1 + county $3) + $0.50/parcel'],
                  ['Who pays conveyance fee', 'Seller pays — standard throughout Ohio'],
                  ['Example — $129,200 sale', 'Conveyance fee: ~$517 (seller-paid)'],
                  ['Recording fee — Mahoning County (2026)', '$39 base + $8/additional page (Senate Bill 94)'],
                  ['Owner vs. renter', '~40% owner / ~60% renter'],
                  ['Population — City of Youngstown', '59,331 (2024 est., U.S. Census Bureau ACS)'],
                  ['Median household income', '$34,408 (Census ACS, ohio-demographics.com 2024)'],
                  ['Poverty rate', '31.2% (Census ACS, ohio-demographics.com)'],
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
            The 57.6% YoY price jump reflects statistical volatility on a small sample of 30 transactions —
            not a genuine market surge. For context, neighboring Boardman and Austintown transact at
            $140,000-$160,000 median, which is closer to the true regional baseline. City-core
            Youngstown properties in working condition typically sell in the $70,000-$120,000 range.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/markets/youngstown-oh/market-report" className="text-brand-primary hover:underline">
              See the full Youngstown OH market report →
            </Link>
          </p>
        </section>

        {/* How It Works */}
        <HowItWorks heading="How Selling Your Youngstown OH House for Cash Works" />

        {/* Situations */}
        <SituationLinks
          heading="We Buy Houses in Youngstown in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/youngstown-oh/inherited-property', description: 'Sell an inherited Youngstown home through the Mahoning County Probate Court process' },
            { label: 'Going Through Divorce', href: '/markets/youngstown-oh/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/youngstown-oh/foreclosure', description: 'Ohio judicial foreclosure runs 6-24 months — sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/youngstown-oh/probate', description: 'We work with Mahoning County Probate Court cases regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/youngstown-oh/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/youngstown-oh/code-violations', description: 'Open violations, demolition orders, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/youngstown-oh/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Youngstown OH Homeowners Are Saying" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Youngstown OH
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $129,200 Youngstown home, a 5-6% agent commission runs $6,460-$7,752. Add Ohio's
            conveyance fee (~$517), any required repairs on pre-1950 housing stock, 70+ days of
            carrying costs at the current DOM, and potential price reductions on a small buyer pool.
            Many Youngstown properties also can't pass FHA or conventional lending inspections
            without significant investment — which shrinks your buyer pool to cash buyers regardless.
            A direct cash offer from us eliminates every one of those variables.
          </p>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Youngstown OH Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including Ohio's conveyance fee."
            sourcePage="/markets/youngstown-oh"
          />
        </section>

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Youngstown OH Home for Cash" />

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Youngstown and Mahoning County
          </h2>
          <p className="text-gray-700 mb-4">
            Our Youngstown market covers every neighborhood in the city — the South Side's dense
            grid of workers' cottages and bungalows, Wick Park's early 20th-century Foursquares
            near Youngstown State University, Brier Hill's former Italian-American neighborhood,
            Belle Vista near Mill Creek Metro Park, and the Idora area on the south end of the city.
            We know these blocks and the condition issues that come with them.
          </p>
          <p className="text-gray-700 mb-4">
            We also serve the broader Youngstown-Warren MSA. Boardman Township and Austintown Township
            to the south and west have more intact suburban housing stock and higher values. Warren
            and Niles in Trumbull County are natural extensions of this market — similar steel-era
            housing, similar distress patterns, similar seller needs. If you're anywhere in the
            Mahoning Valley with a property you need to sell fast, we want to talk.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'South Side', 'North Side', 'Wick Park', 'Brier Hill', 'Belle Vista',
              'Idora', 'Brownlee Woods', 'West Side', 'Warren', 'Boardman',
              'Austintown', 'Niles', 'Campbell', 'Struthers', 'Girard',
              'Hubbard', 'Canfield', 'Poland', 'Mineral Ridge', 'Lowellville',
            ].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        {/* Neighborhoods link */}
        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Youngstown OH Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">
            From South Side workers' cottages to Wick Park Victorians — we buy in every Youngstown neighborhood and Mahoning County township.
          </p>
          <Link href="/markets/youngstown-oh/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">
            See neighborhood-by-neighborhood price ranges and investor data →
          </Link>
        </section>

        {/* Blog Cluster Links */}
        <BlogClusterLinks marketSlug="youngstown-oh" cityName="Youngstown" />

        {/* Guided Survey Form */}
        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
              Not sure where to start? Let us guide you.
            </h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a personalized cash offer for your Youngstown OH home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/youngstown-oh" />
        </section>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Youngstown OH Home?" sourcePage="/markets/youngstown-oh" />
        </section>
      </div>
    </>
  );
}
