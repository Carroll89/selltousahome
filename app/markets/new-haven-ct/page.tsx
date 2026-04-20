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
import { organizationSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';
import { VideoEmbed } from '@/components/VideoEmbed';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast New Haven CT',
  description:
    'We buy houses in New Haven CT for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving New Haven County. Hablamos español.',
  alternates: { canonical: `${SITE_URL}/markets/new-haven-ct` },
  openGraph: {
    images: [{ url: '/images/optimized/new-haven-ct-hero-1200.jpg', width: 1200, height: 630, alt: 'New Haven CT Victorian homes — Sell Your House Fast for Cash' }],
  },
};

const TESTIMONIALS = [
  {
    "quote": "Mi abuela nos dejó su casa en Fair Haven — una triple-decker de los años 1920 con el techo viejo y la electricidad desactualizada. Ninguno de nosotros tenía el dinero para arreglarla. USA Home Buyers nos dio una oferta justa y cerramos en diez días. No tocamos nada.",
    "name": "Rosa C.",
    "location": "Fair Haven, New Haven CT",
    "situation": "Inherited Property — Estate Sale",
    "date": "March 2026"
  },
  {
    "quote": "Connecticut strict foreclosure moved faster than I thought. The bank filed in Superior Court and I didn't realize there was no auction — they just set a law day to take title. USA Home Buyers explained how it worked and moved fast. Written offer in twenty-four hours, closed before the law day. I walked away with $29,000 instead of losing everything.",
    "name": "Antoine B.",
    "location": "Dixwell, New Haven CT",
    "situation": "Pre-Foreclosure — Strict Foreclosure",
    "date": "June 2025"
  },
  {
    "quote": "The New Haven family court ordered the Westville house sold as part of the divorce decree. We both agreed on exactly one thing: get it done fast. USA Home Buyers had a written offer the next day. We both signed, closed in eleven days, money split through our attorneys.",
    "name": "Yolanda and Marcus S.",
    "location": "Westville, New Haven CT",
    "situation": "Divorce Sale — Court-Ordered",
    "date": "September 2025"
  },
  {
    "quote": "I owned a rental on Howe Street near Yale — grad students for 11 years, and by the time the last lease ended the place needed a new boiler, new floors, and a full kitchen. I didn't want to manage a $40,000 renovation at my age. USA Home Buyers bought it as-is. I had a check in two weeks.",
    "name": "Gerald W.",
    "location": "Dwight, New Haven CT",
    "situation": "Rental Property — Deferred Maintenance",
    "date": "February 2026"
  },
  {
    "quote": "Yale offered me a research position and my house in East Rock had been rented for three years. My tenant's lease was up but the place needed work. USA Home Buyers bought it vacant, as-is, in eight days. I came back to New Haven for work, not for a renovation project.",
    "name": "Dr. Amara O.",
    "location": "East Rock, New Haven CT",
    "situation": "Relocation — Return to City",
    "date": "April 2025"
  },
  {
    "quote": "My family bought in Newhallville after my father worked at Winchester. When he passed, the house had been sitting empty for two years. None of us lived close by. USA Home Buyers made it simple — one phone call, one offer, one closing. No cleanout, no repairs.",
    "name": "Darnell H.",
    "location": "Newhallville, New Haven CT",
    "situation": "Vacant Inherited Property — Post-Estate",
    "date": "November 2025"
  },
  {
    "quote": "Seventy years old, my husband had a stroke, and we needed the equity from the house to pay for his care at a rehab facility on Whalley Avenue. I couldn't take on a four-month listing process. USA Home Buyers gave me a fair offer and we closed in ten days. I got my husband into the right facility and I could breathe again.",
    "name": "Frances W.",
    "location": "Beaver Hills, New Haven CT",
    "situation": "Downsizing — Medical Transition",
    "date": "January 2026"
  }
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$25K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$18,000-$22,000)' },
  { label: 'CT conveyance tax', cashBuyer: 'We cover everything', traditional: '1.25% (New Haven Targeted Investment muni)' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in New Haven CT?',
    answer: 'USA Home Buyers can close in as few as 7 days in New Haven CT. We send a written cash offer within 24 hours. Connecticut uses strict foreclosure — a unique process where the lender petitions the Superior Court and the judge sets a "Law Day" by which you must pay off the debt or lose title entirely to the lender. There is no public auction. Once a Law Day is set, acting fast is critical. A direct cash sale before that date is often the only way to recover any equity. Call 888-440-5250.',
  },
  {
    question: 'How much will you pay for my New Haven CT house?',
    answer: "Cash offers for New Haven homes typically range from 65-80% of fair market value. According to Zillow, the typical New Haven home value is $323,843 (Feb 2026). Redfin's median sale price is $365,000 (Mar 2026). A typical cash offer on a Fair Haven triple-decker or Hill neighborhood row home runs $208,000–$259,000. We cover all closing costs including Connecticut's conveyance tax — 1.25% total (state 0.75% + municipal 0.50% for New Haven's Targeted Investment status). Source: Connecticut DRS (ct.gov/drs).",
  },
  {
    question: 'What is the conveyance tax when selling a house in New Haven CT?',
    answer: "New Haven has a higher-than-average conveyance tax because it's one of 18 Targeted Investment municipalities in Connecticut. Total: 1.25% of sale price on transactions under $800,000. That's the state 0.75% plus New Haven's municipal 0.50% (standard 0.25% base + additional 0.25% Targeted Investment rate). On a $365,000 home, the conveyance tax is $4,563. The seller pays all of it. When you sell to USA Home Buyers, we cover all closing costs. Source: CT Gen Stat Chapter 223 (ct.gov).",
  },
  {
    question: 'How does foreclosure work in Connecticut?',
    answer: 'Connecticut uses strict foreclosure — one of the most unusual foreclosure systems in the country. The lender files in Superior Court. If the court grants the foreclosure, it sets a "Law Day" — a date by which you must pay the full debt or lose title entirely to the lender. There is no public auction, no bidding. Title vests directly in the lender on Law Day. New Haven homeowners in foreclosure have 5-9 months from first missed payment to title transfer — faster than most states. Source: CT Gen Stat §§49-1 through 49-31; CT Judicial Branch (jud.ct.gov).',
  },
  {
    question: '¿Compran casas en New Haven CT? / Do you work with Spanish-speaking sellers?',
    answer: 'Sí, hablamos español. New Haven tiene una comunidad hispana del 31% — la mayoría puertorriqueña y ecuatoriana en Fair Haven y The Hill. Podemos manejar todo el proceso en español o inglés, desde la llamada inicial hasta el cierre. We serve New Haven\'s majority-Hispanic community and can handle the entire transaction in English or Spanish. Call us at 888-440-5250.',
  },
  {
    question: 'What areas near New Haven do you buy in?',
    answer: 'All of New Haven County. That includes West Haven, Hamden, East Haven, Milford, Shelton, Branford, North Haven, Orange, Guilford, Derby, Ansonia, Naugatuck, and Wallingford. We also cover New Haven County communities of Wooster Square, Edgewood, Beaver Hills, and beyond. Call 888-440-5250 if you\'re not sure we cover your area.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer: "No. New Haven's housing stock is predominantly pre-WWII — Victorian wood-frames in East Rock and Westville, triple-deckers in Fair Haven and The Hill, brick row homes in Newhallville and Dixwell. Lead paint, knob-and-tube wiring, aging boilers, and deferred maintenance are the norm. We buy in any condition. No repairs, no cleaning, no staging.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: 'We call within business hours (English or Spanish), ask about your property, and send a written cash offer within 24 hours. No pressure. If it works for you, you pick the closing date.',
  },
];

export default function NewHavenCTMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in New Haven CT',
    description: 'Step-by-step process for selling your New Haven home for cash in New Haven County, Connecticut',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your New Haven property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign with a New Haven real estate attorney, walk away with cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[organizationSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/new-haven-ct-hero-640.jpg 640w, /images/optimized/new-haven-ct-hero-828.jpg 828w, /images/optimized/new-haven-ct-hero-1080.jpg 1080w, /images/optimized/new-haven-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/new-haven-ct-hero-1200.jpg"
            alt="New Haven CT Victorian homes on tree-lined Elm City streets — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Connecticut Cash Home Buyers — New Haven County</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast New Haven CT — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in New Haven CT and throughout New Haven County — Fair Haven, East Rock, Westville, The Hill, Newhallville, Wooster Square, plus West Haven, Hamden, and East Haven. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no fees. Zillow typical value: $323,843. We cover all closing costs including CT conveyance tax (1.25% Targeted Investment rate). Call 888-440-5250. Hablamos español — servimos a la comunidad hispana del 31% de New Haven.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              We buy houses in New Haven CT and New Haven County in any condition — Victorian wood-frames, triple-deckers, brick row homes, multi-families, estates, foreclosures, tenant-occupied. No repairs, no agent fees.
            </p>
            <ul className="text-blue-100 text-sm space-y-1 mb-6">
              <li>✓ Written cash offer in 24 hours</li>
              <li>✓ Close in 7–14 days</li>
              <li>✓ No repairs, no cleaning, no staging</li>
              <li>✓ We cover CT conveyance tax + all closing costs</li>
              <li>✓ Hablamos español</li>
            </ul>
            <a href="tel:+18884405250" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              📞 Call 888-440-5250 — We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited · 15+ Years Experience · Hundreds of Homes Purchased</p>
            <p className="text-blue-100 text-xs mt-2">🇵🇷 Hablamos español — llámenos para ayuda en español</p>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your New Haven CT Cash Offer" subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs." sourcePage="/markets/new-haven-ct" />
          </div>
        </div>
      </section>

        <VideoEmbed
        src="/videos/new-haven-ct/landing.mp4"
        title="Sell My House Fast New Haven CT — USA Home Buyers"
        subtitle="Cash offers for New Haven and New Haven County homes — any condition"
        />
        <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
        📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
        If you need to sell your house fast in New Haven, Connecticut — you've found the right team. We're USA Home Buyers, and we purchase houses as-is, for cash, throughout New Haven County. Whether your home needs repairs, you're behind on payments, going through a divorce, or you've inherited a property you don't know what to do with — we make the process simple. No agents. No fees. No repairs needed. We buy New Haven homes in any condition — from Fair Haven and The Hill to Newhallville and beyond. Written cash offer within 24 hours. Close in as few as seven days on your schedule. Call us now at 888-440-5250. That's 888-440-5250.
        </div>
        </details>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">New Haven CT Real Estate Market — What Sellers Need to Know in 2026</h2>
          <p className="text-gray-700 mb-4">
            New Haven is the Elm City — Connecticut's second-largest city and home to Yale University, but the neighborhoods where motivated sellers live are far from Yale's Gothic spires. Fair Haven's triple-deckers, The Hill's dense urban blocks, and Newhallville's pre-war wood-frame homes tell a different story: a city where 70% of residents rent, median household income is $56,851, and housing stock that hasn't seen meaningful capital investment since the 1950s dominates the market.
          </p>
          <p className="text-gray-700 mb-4">
            Realtor.com ranks New Haven-Milford MSA #12 nationally for hotness (score 93.645, March 2026). That hotness signal is real — but it doesn't apply equally across every neighborhood or every home condition. The city's median days on market is 65 days (up 19 days year-over-year per Redfin March 2026 data), meaning listed homes are sitting longer than last year. Hot homes still close in 28 days at 6% above list. Distressed properties in Newhallville, The Hill, and West River sit much longer — and are exactly what cash buyers are built for.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">New Haven CT</th>
                  <th className="text-left p-3">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow typical home value</td><td className="p-3">$323,843</td><td className="p-3 text-gray-500">Zillow ZHVI (Feb 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin median sale price</td><td className="p-3">$365,000</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Median days on market</td><td className="p-3">65 days (+19 YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin compete score</td><td className="p-3">51 / 100 (Somewhat Competitive)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Conveyance tax</td><td className="p-3">1.25% total (seller pays) — Targeted Investment muni</td><td className="p-3 text-gray-500">CT Gen Stat Ch. 223 (ct.gov)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Strict foreclosure — no auction, Law Day</td><td className="p-3 text-gray-500">CT Gen Stat §§49-1 to 49-31</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Hispanic/Latino population</td><td className="p-3">31% of city</td><td className="p-3 text-gray-500">U.S. Census ACS (census.gov)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Renter-occupied</td><td className="p-3">~70%</td><td className="p-3 text-gray-500">Census ACS</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">RDC hotness rank</td><td className="p-3">#12 (score 93.645)</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            New Haven's conveyance tax deserves special attention. The city sits among 18 Connecticut municipalities designated as Targeted Investment Communities — a list that includes Bridgeport, Hartford, and Waterbury. That designation means the municipal conveyance tax is 0.50% instead of Connecticut's standard 0.25%. Combined with the state's 0.75% rate, New Haven sellers pay 1.25% of the sale price in transfer taxes. On a $365,000 home, that's $4,563 — money that disappears entirely when you sell to USA Home Buyers, because we cover all closing costs. Source: CT DRS (ct.gov/drs).
          </p>
        </section>

        <SituationLinks
          heading="We Buy Houses in New Haven CT in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/new-haven-ct/inherited-property', description: 'Sell an inherited New Haven CT home through New Haven Probate Court' },
            { label: 'Going Through Divorce', href: '/markets/new-haven-ct/divorce-sale', description: 'Close quickly, split proceeds cleanly — one offer, one closing date' },
            { label: 'Facing Foreclosure', href: '/markets/new-haven-ct/foreclosure', description: 'CT strict foreclosure — no auction, Law Day, 5-9 months. Sell now, protect your equity' },
            { label: 'Probate Sale', href: '/markets/new-haven-ct/probate', description: 'New Haven Probate Court cases — we work with estates regularly' },
            { label: 'Tenant-Occupied Property', href: '/markets/new-haven-ct/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing' },
            { label: 'Code Violations', href: '/markets/new-haven-ct/code-violations', description: 'LCI open violations, condemned properties — we buy anyway' },
            { label: 'Fire Damage', href: '/markets/new-haven-ct/fire-damage', description: 'Fire or smoke damage? We purchase as-is with no cleanup required' },
          ]}
        />

        <TestimonialBlock testimonials={TESTIMONIALS} heading="What New Haven CT Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in New Haven CT</h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $365,000 New Haven home, a 5-6% agent commission runs $18,250–$21,900. Add Connecticut's 1.25% conveyance tax ($4,563), carrying costs during 65+ days on market, and repairs on New Haven's pre-WWII housing stock — lead paint remediation, boiler replacement, knob-and-tube rewiring. That's a real total cost that disappears with a direct cash sale to USA Home Buyers.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm variant="inline" headline="Get Your New Haven CT Cash Offer" subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including CT conveyance tax. Hablamos español." sourcePage="/markets/new-haven-ct" />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your New Haven CT Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">We Buy Houses Throughout New Haven and New Haven County CT</h2>
          <p className="text-gray-700 mb-4">
            Our New Haven coverage includes every neighborhood — Fair Haven's triple-decker blocks with their active Hispanic homeowner community, East Rock's Victorian single-families on tree-lined streets, Westville's large Craftsman homes in the arts district, Wooster Square's historic brownstones near the green, The Hill's dense urban multi-family stock, Newhallville's pre-war wood-frame homes near the Winchester arms district, Dixwell's brick row homes, Dwight's Yale-adjacent rentals, and Edgewood's transitional blocks.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the full New Haven County market. West Haven, directly to the west, offers beach-proximate homes with coastal maintenance challenges. Hamden to the north is itself a Targeted Investment municipality with the same 1.25% conveyance tax structure. East Haven to the east draws working-class buyers seeking affordability. Milford, Shelton, Branford, Guilford along the shoreline, Derby and Ansonia in the Naugatuck Valley — we cover the full county.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Fair Haven', 'East Rock', 'Westville', 'The Hill', 'Wooster Square', 'Newhallville', 'Dixwell', 'Dwight', 'Edgewood', 'West Haven', 'Hamden', 'East Haven', 'Milford', 'Shelton', 'Branford', 'Derby', 'Ansonia', 'Naugatuck', 'Wallingford'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">New Haven CT Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Fair Haven triple-deckers to East Rock Victorians — we buy in every New Haven neighborhood and New Haven County community.</p>
          <Link href="/markets/new-haven-ct/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <section className="my-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">🇵🇷 Hablamos Español — Servimos a la Comunidad de New Haven</h2>
          <p className="text-gray-700 text-sm mb-3">
            New Haven tiene una comunidad hispana del 31% — una de las más altas de Connecticut. La mayoría vive en Fair Haven y The Hill, con raíces puertorriqueñas y ecuatorianas. Podemos manejar todo el proceso de venta en español: desde la oferta inicial hasta el cierre con el abogado de bienes raíces.
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Llámenos:</strong> 888-440-5250 — atención en español disponible.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Connecticut State Hub</h2>
          <p className="text-gray-700 text-sm mb-3">We buy houses throughout Connecticut. New Haven and Bridgeport are our two largest CT markets.</p>
          <Link href="/sell-house-fast-connecticut" className="text-brand-primary hover:underline font-medium text-sm">View all Connecticut markets →</Link>
          {' | '}
          <Link href="/markets/bridgeport-ct" className="text-brand-primary hover:underline font-medium text-sm ml-2">Bridgeport CT →</Link>
        </section>

        <BlogClusterLinks marketSlug="new-haven-ct" cityName="New Haven" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your New Haven CT home. <span className="text-blue-600">Hablamos español.</span></p>
          </div>
          <MultiStepForm sourcePage="/markets/new-haven-ct" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your New Haven CT Home?" sourcePage="/markets/new-haven-ct" />
        </section>
      </div>
    </>
  );
}
