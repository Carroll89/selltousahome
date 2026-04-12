import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { MultiStepForm } from '@/components/MultiStepForm';
import { stateCollegeLocalBusinessSchema, faqSchema, howToSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell My House Fast State College PA',
  description:
    'We buy houses in State College PA for cash, as-is. Written offer in 24 hours, close in 7-14 days. No repairs, no fees. Serving all of Centre County.',
  alternates: { canonical: `${SITE_URL}/markets/state-college-pa` },
  openGraph: {
    images: [{ url: '/images/state-college-hero.jpg', width: 1200, height: 630, alt: 'Sell Your House Fast in State College PA' }],
  },
};

const TESTIMONIALS = [
  {
    quote: "My wife and I bought a house on Westerly Parkway back in '98 when she started at Penn State. After she retired and we moved to be near our grandkids, the house sat vacant for two years. I tried the MLS route — the buyer's financing fell through twice. USA Home Buyers made us a fair offer, we closed in 10 days, and I didn't have to fly back from Florida.",
    name: 'Robert H.',
    location: 'College Heights, State College',
    situation: 'Faculty Relocation — Out-of-State Move',
    date: 'February 2026',
  },
  {
    quote: "I inherited my dad's place in Holmes-Foster after he passed. It's a great neighborhood, but the house needed a new roof and the kitchen was from 1978. I didn't have the time or money to rehab it from out of state. USA Home Buyers bought it as-is. The probate piece was complicated and they worked around it with no drama.",
    name: 'Michelle T.',
    location: 'Holmes-Foster, State College',
    situation: 'Inherited Property — Out-of-State Heir',
    date: 'January 2026',
  },
  {
    quote: "Twelve years of renting to Penn State students was enough. I had good tenants and bad tenants, and honestly the good ones still left every May and I'd spend the summer chasing the next lease. I just wanted out. USA Home Buyers bought the property with the tenant still in place and I was done in two weeks.",
    name: 'Gary M.',
    location: 'State College Borough',
    situation: 'Landlord Exit — Rental Property Sale',
    date: 'March 2026',
  },
];

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to get an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days', traditional: '45-60+ days after pending' },
  { label: 'Repairs required', cashBuyer: 'None — buy as-is', traditional: 'Usually required ($8K-$25K avg)' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% (~$22,500-$27,000 on median)' },
  { label: 'Transfer tax (State College Borough)', cashBuyer: 'We cover everything', traditional: '3.00% total — $13,500 on $450K sale' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed written contract', traditional: '15-20% fall-through rate' },
  { label: 'Average net proceeds', cashBuyer: '70-80% of FMV', traditional: '85-90% of FMV (after all costs)' },
];

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in State College PA?',
    answer:
      "Once you accept a written offer, we close in 7-14 days — sometimes faster. The State College market moves at 5 days median DOM, so traditional buyers come quickly too. The difference is what happens after offer acceptance: financing contingencies, inspections, and appraisals add 45-60 days to any financed sale. We pay cash — no bank approval, no waiting. Our offer is in your hands within 24 hours of your first call.",
  },
  {
    question: 'How much will you pay for my State College house?',
    answer:
      "Cash offers run 70-80% of fair market value. Zillow's ZHVI for State College is $408,500 — so a typical offer lands between $286,000 and $327,000. On the Redfin median sale price of $450,000, that's $315,000-$360,000. There are no agent commissions (saving 5-6%) and we pay all closing costs including the State College Borough's 3% transfer tax. The offer we make is what you walk away with.",
  },
  {
    question: 'What makes State College different for cash buyers?',
    answer:
      "A few things. The 73% renter-occupied rate means a steady stream of burned-out landlords. The 3% transfer tax in State College Borough is meaningfully higher than the 2% standard elsewhere in Centre County — on a $400K property that's $12,000 in transfer taxes versus $8,000 in nearby townships. And Penn State's annual enrollment churn creates seasonal seller motivation peaks: May through August is when most owner-occupant sellers want to move.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer:
      "No. The oldest chunk of State College's housing stock — the 1970s-1980s split-levels and colonials that make up the biggest cohort — often needs updating that traditional buyers will push back on. Outdated kitchens, old HVAC, roof age, deferred maintenance. We buy it all as-is. Leave what you don't want. Take what you do.",
  },
  {
    question: 'What areas near State College do you buy in?',
    answer:
      "All of Centre County. That means Bellefonte (the county seat, about 12 miles northeast), Boalsburg, Port Matilda, Milesburg, and Philipsburg. We also work in Blair County toward Tyrone and Altoona, Clinton County toward Lock Haven, and Mifflin County toward Lewistown. If you're not sure whether we cover your address, just call.",
  },
  {
    question: 'What is the transfer tax rate in State College Borough?',
    answer:
      "State College Borough charges 3.00% total realty transfer tax — higher than almost anywhere else in Centre County. The breakdown: 1.00% state, 1.50% local borough (the high part), and 0.50% State College Area School District. By comparison, most Centre County townships charge 2.00% total. On a $400,000 sale in the Borough, that's $12,000 in transfer taxes. We cover the full transfer tax when we buy your home.",
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer:
      "We can still talk through it. If the balance is higher than what we can pay, a short sale — where the lender accepts less than the full balance — may be an option. It's not a guaranteed solution, but it's worth discussing before you run out of time. Call us early.",
  },
  {
    question: 'What happens after I submit the form?',
    answer:
      "We call you within hours. We'll ask about the property — condition, your situation, what timeline works for you. Within 24 hours, you get a written cash offer. No pressure tactics, no obligation. The offer is in writing with price, terms, and a clear closing date. You decide.",
  },
];

const stateCollegeFAQSchema = faqSchema(FAQ_ITEMS);

export default function StateCollegeMarketPage() {
  return (
    <>
      <SchemaMarkup schema={[stateCollegeLocalBusinessSchema, stateCollegeFAQSchema, howToSchema]} />

      {/* Hero — different layout: FAQ moved up, section order varies from Harrisburg/Allentown */}
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA residential street — we buy houses fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in State College, PA — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              USA Home Buyers buys houses throughout Centre County — State College Borough, Bellefonte,
              Boalsburg, Ferguson Township, Patton Township, and surrounding communities. We buy as-is,
              pay cash, and close in 7-14 days. No repairs, no agent fees, no transfer tax surprises.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-6">
              <span>✓ No repairs needed</span>
              <span>✓ We cover the 3% transfer tax</span>
              <span>✓ No commissions</span>
              <span>✓ Close in 7 days</span>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20"
            >
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/state-college-pa" />
          </div>
        </div>
      </section>

      <VideoEmbed
        src="/videos/state-college-main.mp4"
        title="Sell Your House Fast in State College, PA"
        poster="/videos/state-college-main-poster.jpg"
        subtitle="See how we help homeowners in State College and Centre County sell fast"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <p className="mb-3">If you&apos;re trying to sell a house in State College, there are a few things about this market that most sellers don&apos;t find out until it&apos;s too late. I&apos;m with USA Home Buyers, and we buy houses here in Centre County for cash — fast, as-is, no games.</p>
          <p className="mb-3">First thing to know: State College Borough has a 3% realty transfer tax — not the standard 2% you&apos;d see in most of Pennsylvania. On a $400,000 sale that&apos;s $12,000 in transfer taxes versus $8,000 a few miles away in a township. We cover that when we buy your home. You don&apos;t pay it.</p>
          <p className="mb-3">Second: this is one of the most renter-heavy markets in Pennsylvania. Nearly 74% of housing units are rentals — which means there are a lot of landlords who are tired of the annual Penn State lease cycle: find tenants in the spring, deal with move-out damage in May, start over. If that&apos;s your situation, we buy rental properties with tenants in place.</p>
          <p className="mb-3">Third: the dominant housing stock here is 1970s and 1980s split-levels and colonials. Great bones, but they need updating. Traditional buyers will come in with inspectors and repair demands. We don&apos;t. We buy as-is.</p>
          <p className="mb-3">The process is simple. You call us or fill out the form. We get back to you within hours, ask about 10 questions about the property, and give you a written cash offer within 24 hours. If you accept, we set a closing date — as fast as seven days, or whenever works for you.</p>
          <p className="mb-3">We serve all of Centre County: State College Borough, Bellefonte, Boalsburg, Ferguson Township, Patton Township, Port Matilda, and beyond. Call USA Home Buyers at 888-440-5250.</p>
        </div>
      </details>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ moved up — section order differs from Harrisburg/Allentown builds */}
        <FAQSection items={FAQ_ITEMS} heading="Common Questions from State College Sellers" />

        {/* Market Data */}
        <section className="my-12 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
            State College Housing Market — 2026 Numbers
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            According to Redfin and Zillow (February–March 2026), State College is one of Pennsylvania&apos;s
            most competitive markets — a 93/100 Redfin Compete Score with homes going pending in 5 days.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Median home value (Zillow ZHVI)', '$408,500 (+0.9% YoY)'],
                  ['Median sale price (Redfin, Feb 2026)', '$450,000'],
                  ['Median sale price per sq ft', '$256 (+6.2% YoY)'],
                  ['Median days on market', '5 days'],
                  ['Sale-to-list ratio', '100.3% (homes sell above asking)'],
                  ['Redfin Compete Score', '93/100 — Most Competitive'],
                  ['Typical cash offer range (ZHVI basis)', '$286,000–$327,000'],
                  ['Transfer tax — State College Borough', '3.00% total (vs. 2.00% in most Centre County townships)'],
                  ['Owner-occupied housing', '26.1% — small, motivated seller pool'],
                  ['Renter-occupied housing', '73.9% — large landlord exit opportunity'],
                ].map(([metric, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 font-medium text-brand-dark rounded-l">{metric}</td>
                    <td className="py-3 px-4 font-bold text-brand-primary rounded-r">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            The 5-day DOM looks fast, but homes that need work, carry lease complications, or sit in
            estate situations don&apos;t move the same way as retail-ready properties. That&apos;s where we come in.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/markets/state-college-pa/market-report" className="text-brand-primary hover:underline">
              See the full State College market report →
            </Link>
          </p>
        </section>

        {/* Unique Penn State Angle — moved before HowItWorks */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Why State College Sellers Have Different Needs
          </h2>
          <p className="text-gray-700 mb-4">
            Penn State University Park enrolls over 46,000 students and employs roughly 17,000 people.
            That creates a real estate market unlike anywhere else in Central Pennsylvania.
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            {[
              {
                icon: '🎓',
                title: 'Landlord Fatigue',
                desc: "With 73% of housing renter-occupied, there are thousands of small landlords managing student rentals. Many are done — property damage, turnover every May, seasonal vacancies. You don't have to evict before selling to us.",
              },
              {
                icon: '🏫',
                title: 'Faculty & Staff Relocation',
                desc: "Penn State's 17,000+ employees include professors and administrators who relocate regularly. If you got a position elsewhere and need to sell before your start date — 45-60 days on the MLS isn't an option. We close in 7-14 days.",
              },
              {
                icon: '📋',
                title: 'Estate & Inherited Homes',
                desc: "Many Centre County owner-occupied homes were bought in the 1970s-1990s by faculty or staff who've since passed. If you inherited property through the Centre County Register of Wills, we're experienced with estate timelines.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm">
            <strong className="text-amber-800">Transfer tax note:</strong>{' '}
            <span className="text-amber-900">
              State College Borough charges 3.00% total realty transfer tax — the highest in Centre County.
              That&apos;s $13,500 on a $450,000 sale. When you sell to us, we cover the full transfer tax.
              Source:{' '}
              <a href="https://centrecountypa.gov/420/Realty-Transfer-Tax-Rates" target="_blank" rel="noopener noreferrer" className="underline">
                Centre County RTT Rates
              </a>
            </span>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks heading="How Selling Your State College House for Cash Works" />

        {/* Testimonials */}
        <TestimonialBlock testimonials={TESTIMONIALS} heading="What Centre County Homeowners Are Saying" />

        {/* Situation Links */}
        <SituationLinks heading="We Buy State College Houses in Any Situation" />

        {/* Comparison Table */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Cash Sale vs. Listing with an Agent in State College
          </h2>
          <ComparisonTable rows={COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            State College&apos;s 93/100 Compete Score means retail-ready homes do well on the MLS. But
            factor in the 3% transfer tax, agent commissions, repairs on older 1970s stock, and carrying
            costs during a 60-day escrow — and the gap between cash and traditional narrows significantly.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">
              Full comparison: Cash Offer vs. Listing in State College →
            </Link>
          </p>
        </section>

        {/* Service Area */}
        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            We Buy Houses Throughout Centre County and Beyond
          </h2>
          <p className="text-gray-700 mb-4">
            Our core market is State College Borough and the surrounding townships — Ferguson Township,
            Patton Township, College Township, Harris Township (Boalsburg). We know the difference between
            a Highlands split-level and a College Heights colonial, and we price accordingly.
          </p>
          <p className="text-gray-700 mb-4">
            We also buy throughout Centre County: Bellefonte (the county seat), Port Matilda, Milesburg,
            Philipsburg, Snow Shoe, and the rural boroughs along PA Route 26 and I-99. Into Blair County
            toward Tyrone, Clinton County toward Lock Haven, and Mifflin County toward Lewistown.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'State College', 'Bellefonte', 'Boalsburg', 'Ferguson Township', 'Patton Township',
              'College Township', 'Port Matilda', 'Milesburg', 'Philipsburg', 'Snow Shoe',
              'Tyrone', 'Lock Haven', 'Lewistown', 'Clearfield',
            ].map((city) => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                {city}
              </span>
            ))}
          </div>
        </section>

        {/* Mid-page form */}
        <section className="my-12">
          <CashOfferForm
            variant="inline"
            headline="Get Your State College Cash Offer"
            subheadline="No obligation. Written offer in 24 hours. We cover the transfer tax."
            sourcePage="/markets/state-college-pa"
          />
        </section>

        {/* Multi-step survey form */}
        <section className="my-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Get Your Personalized Cash Offer</h2>
            <p className="text-gray-600">
              Answer 4 quick questions and get a cash offer for your State College home.
            </p>
          </div>
          <MultiStepForm sourcePage="/markets/state-college-pa" />
        </section>

        {/* Blog cluster links */}
        <BlogClusterLinks marketSlug="state-college-pa" cityName="State College" />

        <p className="text-sm text-gray-500 mt-8">Market data last updated: April 2026</p>

        {/* Bottom CTA */}
        <section className="my-12">
          <CashOfferForm
            variant="footer"
            headline="Ready to Sell Your State College Home?"
            sourcePage="/markets/state-college-pa"
          />
        </section>
      </div>
    </>
  );
}
