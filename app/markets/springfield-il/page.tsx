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
import { faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Springfield IL',
  description:
    'We buy houses in Springfield IL for cash, as-is. Written offer in 24 hours, close in 7 days. No repairs, no fees. Serving Sangamon County. Call 888-440-5250.',
  alternates: { canonical: `${SITE_URL}/markets/springfield-il` },
  openGraph: {
    images: [{ url: '/images/springfield-il-hero.jpg', width: 1200, height: 630, alt: 'Springfield IL home — Sell Your House Fast for Cash' }],
  },
};

const springfieldILLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'RealEstateAgent'],
  '@id': `${SITE_URL}/#business-springfield-il`,
  name: 'USA Home Buyers — Springfield IL',
  description: 'Cash home buyers serving Springfield IL and Sangamon County. We buy houses as-is in any condition — no repairs, no agent fees, close in 7-14 days.',
  url: `${SITE_URL}/markets/springfield-il`,
  telephone: '+18884405250',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Springfield',
    addressRegion: 'IL',
    postalCode: '62701',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 39.7833, longitude: -89.6504 },
  areaServed: [
    { '@type': 'City', name: 'Springfield', sameAs: 'https://en.wikipedia.org/wiki/Springfield,_Illinois' },
    { '@type': 'City', name: 'Chatham' },
    { '@type': 'City', name: 'Rochester' },
    { '@type': 'City', name: 'Sherman' },
    { '@type': 'City', name: 'Riverton' },
    { '@type': 'City', name: 'Leland Grove' },
    { '@type': 'City', name: 'Jerome' },
    { '@type': 'City', name: 'Auburn' },
    { '@type': 'County', name: 'Sangamon County' },
  ],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
  priceRange: '$$',
  image: `${SITE_URL}/images/springfield-il-hero.jpg`,
};

const TESTIMONIALS = [
  {
    quote: "I inherited my dad's place in Enos Park after he passed — one of those 1900s frame houses on North 5th Street with the wraparound porch. The electrical hadn't been touched since the 60s, the roof was shot, and I live in Bloomington now, so managing it remotely wasn't happening. USA Home Buyers had a written cash offer in my inbox the next morning. We closed fourteen days later. No cleanout, no repairs, no arguing with contractors about a property I'd never live in. They handled everything.",
    name: 'Karen M.',
    location: 'Enos Park, Springfield IL',
    situation: 'Inherited Estate — Victorian Frame House',
    date: 'March 2026',
  },
  {
    quote: "I'm a state employee — when my position got transferred to Chicago, I had about six weeks to sort out my house on the south side of Springfield before I needed to be up there. I didn't have time for showings, inspections, or waiting on a buyer's mortgage. USA Home Buyers gave me a written offer within 24 hours and we closed in ten days. Exactly what I needed.",
    name: 'James T.',
    location: 'South Springfield, IL',
    situation: 'State Employee Relocation',
    date: 'February 2026',
  },
  {
    quote: "Harvard Park bungalow, deferred maintenance for years, divorce situation making things complicated. My attorney told me we needed the house sold to finalize the decree. USA Home Buyers worked around the court timeline, gave us a single offer both parties agreed to, and closed the week after the judge signed off. One number, one closing, done.",
    name: 'Linda R.',
    location: 'Harvard Park, Springfield IL',
    situation: 'Divorce Sale — Sangamon County',
    date: 'January 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Usually required ($5K-$20K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$9,350-$11,220 on Springfield median)' },
  { label: 'IL transfer tax (state + county)', cashBuyer: 'We cover everything', traditional: '$0.75/$500 combined — seller pays ~$280 on median' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract', traditional: '15-20% of listings fall through' },
  { label: 'Average net proceeds', cashBuyer: '65-75% of FMV', traditional: '85-92% after all costs' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Springfield IL?',
    answer: 'USA Home Buyers can close in as few as 7 days in Springfield and throughout Sangamon County. We send a written cash offer within 24 hours of your inquiry. Illinois is a judicial foreclosure state under 735 ILCS 5/15-1101 — once a lender files in Sangamon County Circuit Court at 200 South 9th Street, the process typically runs 12-15 months. If you\'re behind on payments, selling before the foreclosure auction is the cleanest path to walking away with whatever equity remains. Call 888-440-5250.',
  },
  {
    question: 'How much will you pay for my Springfield IL house?',
    answer: 'Cash offers for Springfield homes typically run 65-75% of fair market value, depending on condition, location, and any liens. According to Zillow (March 2026), the Springfield IL Zillow Home Value Index is $163,198, up 8.2% year over year. Redfin puts the March 2026 median sale price at $187,000, up 23% YoY. A typical cash offer on a Harvard Park bungalow or Enos Park Victorian runs $106,000-$122,000 on a home at ZHVI. We cover all closing costs including Illinois state and Sangamon County transfer taxes ($0.75 per $500 of consideration).',
  },
  {
    question: 'What is the transfer tax when selling a house in Springfield IL?',
    answer: 'Illinois charges a state real estate transfer tax of $0.50 per $500 of consideration under 35 ILCS 200/31-10. Sangamon County adds $0.25 per $500 under 35 ILCS 200/31-55. Combined: $0.75 per $500 ($1.50 per $1,000 = 0.15% of sale price), seller pays. The City of Springfield does NOT impose a municipal real estate transfer tax — confirmed from Springfield\'s official tax rate document. On the $187,000 Redfin median: $280.50 total. When you sell to USA Home Buyers, we cover all closing costs — you pay nothing at closing.',
  },
  {
    question: 'How does foreclosure work in Sangamon County IL?',
    answer: 'Illinois is a 100% judicial foreclosure state under the Illinois Mortgage Foreclosure Law, 735 ILCS 5/15-1101 et seq. Every foreclosure must go through Sangamon County Circuit Court — 7th Judicial Circuit, 200 South 9th Street, Springfield IL 62701, (217) 753-6674. The typical Sangamon County timeline from first missed payment to completed foreclosure sale is 12-15 months uncontested. Borrowers have a 3-month reinstatement period (735 ILCS 5/15-1602) and a 7-month redemption period from service of summons (735 ILCS 5/15-1603). Selling to a cash buyer before the foreclosure auction preserves your equity — call 888-440-5250 immediately if you\'re behind.',
  },
  {
    question: 'What areas near Springfield do you buy in?',
    answer: 'All of Sangamon County. That includes Springfield (Enos Park, Harvard Park, Aristocracy Hill, West Side, South Side, downtown 62701), Chatham, Rochester, Sherman, Riverton, Leland Grove, Jerome, Auburn, Pawnee, New Berlin, Pleasant Plains, and Mechanicsburg. We also cover properties in adjacent Menard County (Petersburg area) due to proximity. If you\'re not sure whether we serve your address, call 888-440-5250.',
  },
  {
    question: 'Do I need to make repairs before selling to USA Home Buyers?',
    answer: 'No. Springfield\'s housing stock leans heavily on pre-1970 construction — Victorian-era frame houses in Enos Park (often with original knob-and-tube wiring and plaster walls), 1890s-1920s Aristocracy Hill mansions, mid-century brick ranches and Craftsman bungalows in Harvard Park and the West Side. Many don\'t qualify for conventional or FHA financing in their current state. We buy in any condition. Leave whatever you don\'t want — furniture, belongings, debris.',
  },
  {
    question: 'Is USA Home Buyers a legitimate company in Springfield IL?',
    answer: 'Yes. We provide a written purchase agreement — a legally binding contract with price, terms, and closing date. We close at a licensed Illinois title company. Our parent company, USA Home Buyers LLC, is registered in Pennsylvania (founded October 2024). This is our first Illinois market. You can request references from prior transactions or verify our business registration at the Illinois Secretary of State business search (ilsos.gov).',
  },
  {
    question: 'What happens after I submit the form or call?',
    answer: 'One of our managers calls you within business hours, asks 5-10 questions about the property condition and your situation, then sends a written cash offer within 24 hours. No pressure. The offer is a specific number, not a range. If it works for you, you pick the closing date and we close at a Springfield title company — Land of Lincoln Title and similar local providers handle Illinois cash closings. You receive your funds at closing and we handle everything from there.',
  },
  {
    question: 'How does selling an inherited Springfield house work if it\'s in probate?',
    answer: 'Inherited Illinois real estate must go through formal probate at Sangamon County Circuit Court, Probate Division — 200 South 9th Street, 7th Floor, Springfield IL 62701, (217) 753-6674. The small estate affidavit under 755 ILCS 5/25-1 applies only to personal property (threshold raised to $150,000 by 2025 amendment) — real property always requires formal probate regardless of estate size. Under independent administration (755 ILCS 5/28-1), an executor can sell estate real estate without court approval on each transaction, typically within 6-9 months total. We can have a written offer ready before you even file, so closing happens fast once authority is granted.',
  },
];

export default function SpringfieldILMarketPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Your House Fast for Cash in Springfield IL',
    description: 'Step-by-step process for selling your Springfield or Sangamon County home for cash',
    step: [
      { '@type': 'HowToStep', name: 'Submit Your Property Info', text: 'Fill out our 2-minute form with your Springfield or Sangamon County property address, condition, and timeline.', position: 1 },
      { '@type': 'HowToStep', name: 'Get Your Written Cash Offer', text: 'We review your property and send a written cash offer within 24 hours — no obligation.', position: 2 },
      { '@type': 'HowToStep', name: 'Choose Your Closing Date', text: 'Pick any date — as fast as 7 days or whenever works for your schedule.', position: 3 },
      { '@type': 'HowToStep', name: 'Get Paid at Closing', text: 'Sign at a Springfield IL title company of your choice, walk away with your cash. No repairs, no cleanout.', position: 4 },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[springfieldILLocalBusinessSchema, faqSchema(FAQ_ITEMS), howToSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/springfield-il-hero-640.jpg 640w, /images/optimized/springfield-il-hero-828.jpg 828w, /images/optimized/springfield-il-hero-1080.jpg 1080w, /images/optimized/springfield-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/springfield-il-hero-1200.jpg"
            alt="Springfield IL brick bungalow neighborhood — Sell Your House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">Illinois Cash Home Buyers — Market #10 Nationally (RDC March 2026)</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast Springfield IL — Cash Offer in 24 Hours
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases houses in Springfield IL and throughout Sangamon County — Enos Park Victorians, Harvard Park bungalows, West Side brick ranches, estate sales, foreclosures, divorce situations. Written cash offer in 24 hours. Close in 7–14 days. Any condition, no repairs, no agent fees. Springfield's Zillow Home Value Index is $163,198 (+8.2% YoY, March 2026); Redfin median sale price $187,000 (+23% YoY). We cover all closing costs including Illinois state transfer tax ($0.50/$500) and Sangamon County transfer tax ($0.25/$500). Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy houses in Springfield IL, Chatham, Rochester, Sherman, and all of Sangamon County — any condition, any situation. No repairs, no agent fees, no waiting.
            </p>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Springfield IL Cash Offer"
              subheadline="Written offer in 24 hours. Close in 7 days. We cover all closing costs."
              sourcePage="/markets/springfield-il"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Springfield IL Real Estate Market — What Sellers Need to Know in 2026
          </h2>
          <p className="text-gray-700 mb-4">
            Springfield is Illinois's state capital and Sangamon County's seat — a city of 113,330 people built on government employment, Lincoln-era history, and a housing stock that ranges from 1880s Victorian mansions in Enos Park and Aristocracy Hill to post-war brick ranches on the West Side. Realtor.com ranked Springfield the #10 hottest market in the country as of March 2026 (hotness score 93.979, median active listing days on market 31.5 days) — an unusual position for a downstate Midwest city of this size.
          </p>
          <p className="text-gray-700 mb-4">
            That heat comes from a specific combination: affordable entry prices, a stable government employment base (Illinois state government is Springfield's largest employer), and a significant volume of older housing stock in need of renovation that conventional buyers can't easily finance. Enos Park's Victorian-era cottages — some pre-dating 1900 — frequently have original knob-and-tube wiring, galvanized plumbing, and plaster walls that rule out FHA and conventional financing entirely. Harvard Park bungalows from the 1940s and '50s often carry the same limitations. That's where cash buyers operate.
          </p>
          <p className="text-gray-700 mb-4">
            State-capital dynamics add another seller motivation that's unique to Springfield: government employees subject to workforce reductions, inter-agency transfers, and pension-related financial stress need to move fast. When a position gets transferred to Chicago or downstate budget cuts result in layoffs, the time from decision to departure is short — and listing retail, staging, and waiting 27-45 days for a conventional buyer isn't practical.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Springfield IL</th>
                  <th className="text-left p-3">Source / Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Zillow Home Value Index (ZHVI)</td><td className="p-3">$163,198 (+8.2% YoY)</td><td className="p-3 text-gray-500">Zillow (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Median Sale Price</td><td className="p-3">$187,000 (+23.0% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Price per Square Foot</td><td className="p-3">$112 (+24.4% YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median Days on Market (sold)</td><td className="p-3">27 days</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">RDC Active Listing DOM</td><td className="p-3">31.5 days (Rank #10 nationally)</td><td className="p-3 text-gray-500">Realtor.com (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redfin Compete Score</td><td className="p-3">78/100 — Very Competitive</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-List Ratio</td><td className="p-3">98.4% (+1.0 pt YoY)</td><td className="p-3 text-gray-500">Redfin (Mar 2026)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">IL Transfer Tax (state + county)</td><td className="p-3">$0.75 per $500 (0.15%) — seller pays</td><td className="p-3 text-gray-500">35 ILCS 200/31-10; Sangamon Recorder</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure type</td><td className="p-3">Judicial — 735 ILCS 5/15-1101 (12-15 mos typical)</td><td className="p-3 text-gray-500">Illinois Mortgage Foreclosure Law</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Probate court</td><td className="p-3">Sangamon Co. Circuit Court, 200 S 9th St 7th Fl, (217) 753-6674</td><td className="p-3 text-gray-500">7th Judicial Circuit</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">What this means for Springfield sellers: the market is genuinely hot — a 27-day median DOM means the right retail listing moves fast. But "right retail listing" excludes most of Springfield's older housing stock. If your home needs significant work, has title complications (estate, foreclosure, divorce), or you simply need speed without the hassle of showings and contingencies, a direct cash offer is the practical path. The 5-6% agent commission on a $187,000 median home runs $9,350-$11,220 before closing costs and repair requests.</p>
        </section>

        <SituationLinks
          heading="We Buy Houses in Springfield IL in Any Situation"
          situations={[
            { label: 'Inherited or Estate Property', href: '/markets/springfield-il/inherited-property', description: 'Sell an inherited Springfield home — we work with Sangamon County Circuit Court Probate Division timelines' },
            { label: 'Going Through Divorce', href: '/markets/springfield-il/divorce-sale', description: 'One offer, one closing — equitable distribution without the delay under 750 ILCS 5/503' },
            { label: 'Facing Foreclosure', href: '/markets/springfield-il/foreclosure', description: 'IL judicial foreclosure (735 ILCS 5/15-1101) — sell before the Sangamon County auction' },
            { label: 'Probate Sale', href: '/markets/springfield-il/probate', description: 'We work with Sangamon County Circuit Court Probate Division cases, independent and supervised administration' },
            { label: 'Tenant-Occupied Property', href: '/markets/springfield-il/tenant-occupied', description: 'We buy with tenants in place — no eviction required before closing in Illinois' },
            { label: 'Code Violations', href: '/markets/springfield-il/code-violations', description: 'City of Springfield open violations, condemned properties — we buy anyway, as-is' },
            { label: 'Fire Damage', href: '/markets/springfield-il/fire-damage', description: 'Fire or smoke damage in Springfield? We purchase as-is with no cleanup required' },
          ]}
        />
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Springfield IL Homeowners Are Saying" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing With an Agent in Springfield IL
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $187,000 Springfield home, a 5-6% agent commission runs $9,350-$11,220. Add Illinois's combined transfer tax (~$280.50), carrying costs during 27+ days on market, and repair requests on pre-1970 housing stock. Enos Park Victorians and Harvard Park bungalows frequently have deferred-maintenance issues — original wiring, galvanized plumbing, cracked foundations — that conventional lenders flag and require remediation before closing. A cash offer eliminates the inspection contingency and the repair negotiation entirely. At $163,198 average home value, every dollar of commission and repair cost is significant.
          </p>
        </section>

        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your Springfield IL Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover all closing costs including IL state + Sangamon County transfer tax."
            sourcePage="/markets/springfield-il"
          />
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Springfield IL Home for Cash" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Sangamon County IL
          </h2>
          <p className="text-gray-700 mb-4">
            Our Springfield coverage includes the entire city — downtown Springfield and the Capitol neighborhood (ZIP 62701), Enos Park with its National Register Victorian-era homes, Aristocracy Hill and the Old Governor's Mansion corridor, Harvard Park and mid-century South Side bungalows, the West Side brick ranch neighborhoods, and the north side residential areas around Ridgely and North Grand Avenue.
          </p>
          <p className="text-gray-700 mb-4">
            We serve the surrounding Sangamon County communities throughout — Chatham (8 miles south), Rochester (8 miles east), Sherman (8 miles north along I-55), Riverton (7 miles north on the Sangamon River), Leland Grove, Jerome, Auburn, Pawnee, New Berlin, Pleasant Plains, and Mechanicsburg. We also cover properties in adjacent Menard County (Petersburg, New Salem area) due to market proximity.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Downtown Springfield', 'Enos Park', 'Aristocracy Hill', 'Harvard Park', 'West Side', 'South Side', 'Capitol Neighborhood', 'Chatham', 'Rochester IL', 'Sherman', 'Riverton', 'Leland Grove', 'Jerome', 'Auburn', 'Pawnee', 'New Berlin', 'Pleasant Plains'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Springfield IL Neighborhoods We Serve</h2>
          <p className="text-gray-700 text-sm mb-3">From Enos Park Victorians to Harvard Park bungalows to West Side brick ranches — we buy in every Springfield neighborhood and every Sangamon County community.</p>
          <Link href="/markets/springfield-il/neighborhoods" className="text-brand-primary hover:underline font-medium text-sm">See Springfield neighborhood-by-neighborhood price ranges →</Link>
        </section>

        <section className="my-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">New to Illinois? So Are We.</h2>
          <p className="text-gray-700 text-sm mb-3">Springfield is our first Illinois market. We chose it because of its #10 national hotness ranking, Springfield's state-capital employment dynamics, and the volume of older housing stock that needs a cash buyer. For statewide Illinois legal context — transfer taxes, foreclosure law, probate procedures — see our Illinois state guide.</p>
          <Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline font-medium text-sm">Read the Illinois Seller's Legal Guide →</Link>
        </section>

        <BlogClusterLinks marketSlug="springfield-il" cityName="Springfield" />

        <section className="my-12 bg-brand-light rounded-2xl p-8" id="survey-form">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Not sure where to start? Let us guide you.</h2>
            <p className="text-gray-600">Answer 4 quick questions and get a personalized cash offer for your Springfield IL or Sangamon County home.</p>
          </div>
          <MultiStepForm sourcePage="/markets/springfield-il" />
        </section>

        <section className="my-12">
          <CashOfferForm variant="footer" headline="Ready to Sell Your Springfield IL Home?" sourcePage="/markets/springfield-il" />
        </section>
      </div>
    </>
  );
}
