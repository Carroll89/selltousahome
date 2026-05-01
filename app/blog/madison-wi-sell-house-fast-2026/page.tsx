/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/madison-wi-sell-house-fast-2026`;

export const metadata: Metadata = {
  title: 'How to Sell Your House Fast in Madison WI in 2026',
  description:
    "Need to sell your Madison, WI house fast in 2026? Median prices hit $453,500 in March — but fast sales still take preparation. Here's what your options actually look like.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How long does it take to sell a house in Madison, WI?', answer: 'The average was 41 days on market in March 2026, but total time from decision to closing is typically 75–90 days when you include prep, listing, under-contract, and financing periods. A cash sale can close in 2–3 weeks.' },
  { question: 'Do I need a realtor to sell my house in Wisconsin?', answer: "No. Wisconsin allows FSBO sales without an agent. You'll need to handle your own disclosures, negotiations, and closing coordination, or hire a real estate attorney for the closing portion." },
  { question: "What is Wisconsin's real estate transfer fee?", answer: "Wisconsin charges $3 per $1,000 of the sale price statewide. On a $453,500 home, that's about $1,360. There's no additional City of Madison or Dane County transfer tax because state law prohibits local conveyance fees." },
  { question: 'Can I sell a house with tenants in Madison?', answer: 'Yes. A cash buyer will generally purchase tenant-occupied properties. Listing with a realtor is harder because most retail buyers want vacant possession, which can mean waiting for a lease to expire or negotiating a buyout. Wisconsin tenant protections apply regardless of sale method.' },
  { question: 'What happens to my house if it goes into foreclosure in Wisconsin?', answer: "Wisconsin uses judicial foreclosure — the lender files a lawsuit in Dane County Circuit Court. The process includes a redemption period and can take well over a year. If you're behind on payments, selling before a sheriff sale gives you more control. Talk to a Wisconsin-licensed attorney about your specific timeline." },
  { question: 'How does probate work when selling an inherited house in Madison?', answer: 'Probate in Madison runs through the Dane County Circuit Court Probate Division. For most estates, a personal representative must obtain Letters Testamentary before the property can be sold. Wisconsin allows informal probate for simpler estates. A cash buyer can close as soon as the personal representative has authority to sell.' },
];

export default function MadisonWIBlogPost() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, articleSchema('How to Sell Your House Fast in Madison, WI in 2026', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2"><Link href="/markets/madison-wi" className="text-brand-primary hover:underline">Madison WI</Link>{' '} · May 1, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link></div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">How to sell your house fast in Madison, WI in 2026</h1>
          <p className="text-lg text-gray-600 leading-relaxed">Madison's housing market is strong — homes sold at 100.9% of list price in March 2026, with a median price of $453,500, according to Redfin. But "strong market" doesn't mean fast or simple for every seller.</p>
        </header>
        <div className="prose prose-gray max-w-none">
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8"><p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p><p className="text-sm text-blue-900">If you're dealing with an inherited property, a tenant-occupied rental near campus, a foreclosure timeline, or a house that needs serious work, listing with a realtor isn't always the fastest path. This guide breaks down your three real options and where each one makes sense.</p></div>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Madison's market in 2026: strong, but not friction-free</h2>
          <p className="text-gray-700 mb-4">In March 2026, the median sale price in Madison was $453,500 — up 5.8% from a year earlier, according to Redfin. The typical home sold in about 41 days, and the average sale closed at 100.9% of asking price. The most competitive homes went under contract in roughly 24 days.</p>
          <p className="text-gray-700 mb-4">That looks like a seller's market on paper. For a move-in-ready west side home, it probably is. But those averages cover Dudgeon-Monroe Craftsmans, new-build isthmus condos, and beat-up Near East Side rentals that have been in the same family since the 1970s. Those aren't the same sale.</p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Three ways to sell fast in Madison</h2>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">1. List with a realtor</h3>
          <p className="text-gray-700 mb-4">This is the right answer for most sellers in a functioning market. At a $453,500 median and a 100.9% sale-to-list ratio, a well-prepared Madison listing can move fast and net close to full value. The real timeline is longer than 41 days, though: cleaning, repairs, staging, offer negotiation, inspection contingencies, and a 30–45 day financing period often mean 75–90 days from decision to check.</p>
          <p className="text-gray-700 mb-4">Agent commission runs 5–6% on most Madison sales. Add Wisconsin's real estate transfer fee — $3 per $1,000 of sale price — which on a $453,500 home comes to about $1,360. Wisconsin law prohibits cities and counties from adding their own conveyance tax, so there's no City of Madison add-on. The Dane County Register of Deeds charges a flat $30 deed recording fee.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">2. For sale by owner</h3>
          <p className="text-gray-700 mb-4">FSBO can save the listing-agent commission, but the tradeoff is exposure. Homes listed without MLS access get less traffic, and many buyers already work with buyer's agents who expect a commission. You're also handling disclosures, negotiations, and paperwork yourself.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">3. Sell to a cash buyer</h3>
          <p className="text-gray-700 mb-4">A cash buyer purchases the house as-is, skips the financing contingency, and closes on your timeline — often in two to three weeks. No repairs, no showings, no buyer loan fall-throughs. The price is lower than what you'd get on the open market. That's the honest trade.</p>
          <p className="text-gray-700 mb-4">At a $453,500 median, even a 20% discount means roughly $360,000 before transfer fee — without paying agent commissions, making repairs, carrying the property for 90 days, or navigating a conventional buyer's inspection demands. For the right situation, that calculation can make sense.</p>
          <p className="text-gray-700 mb-4"><Link href="/resources/how-the-process-works/madison-wi" className="text-brand-primary hover:underline">See how the process works for Madison homeowners →</Link></p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">When a cash sale is most relevant in Madison</h2>
          <p className="text-gray-700 mb-4"><strong>Inherited properties and estate sales.</strong> UW-Madison faculty and state government workers often own homes bought decades ago. When those properties pass through estates, out-of-state heirs may not want to manage rehab or tenants from across the country. Dane County probate cases run through the Dane County Circuit Court Probate Division, Room 1005, 215 South Hamilton Street — (608) 266-4331. Verify current contact details before relying on them. A cash buyer can close after Letters Testamentary are issued, with no repairs required.</p>
          <p className="text-gray-700 mb-4"><strong>Tenant-occupied rentals near campus.</strong> Marquette, Willy Street, Vilas, and Near West have older rental stock from the 1950s–1970s. Inherited or accidental landlords dealing with lease complications, deferred maintenance, or code issues often find the standard listing route closed until the property is vacant and repaired.</p>
          <p className="text-gray-700 mb-4"><strong>Older homes with major repair needs.</strong> Near East Side Foursquares, South Madison bungalows, and Tenney-Lapham ranches can carry knob-and-tube wiring, aging roofs, old plumbing, and lead paint. Sellers who can't front $30,000–$50,000 in pre-sale repairs have a legitimate reason to consider an as-is route.</p>
          <p className="text-gray-700 mb-4"><strong>Foreclosure situations.</strong> Wisconsin uses judicial foreclosure. The lender files a lawsuit in Dane County Circuit Court, and the process including redemption can take well over a year from the first missed payment. Specific timeline details vary; verify with a Wisconsin-licensed attorney.</p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What about the costs either way?</h2>
          <ul className="space-y-2 text-gray-700 mb-4"><li>• <strong>Transfer fee:</strong> $3 per $1,000 of sale price, paid by the seller. On $453,500, that's about $1,360.</li><li>• <strong>No local transfer tax:</strong> Wisconsin prohibits municipal conveyance taxes. No City of Madison add-on.</li><li>• <strong>Recording fee:</strong> $30 flat, paid at the Dane County Register of Deeds.</li><li>• <strong>Agent commission:</strong> 5–6% if you use a realtor; $0 on a direct cash sale.</li></ul>
          <p className="text-gray-700 mb-4">On a $453,500 sale with a 6% commission plus transfer fee and recording, you're netting about $425,000 before repair credits or carrying costs. On a cash sale at 80% of value, you'd net around $361,000 after the transfer fee and close in weeks rather than months. The gap is real; whether it's worth it depends on your situation.</p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Madison seller resources</h2>
          <ul className="space-y-2 mb-8"><li><Link href="/markets/madison-wi" className="text-brand-primary hover:underline">Madison WI market overview and cash offer</Link></li><li><Link href="/markets/madison-wi/resources" className="text-brand-primary hover:underline">Madison WI seller resources</Link></li><li><Link href="/markets/madison-wi/inherited-property" className="text-brand-primary hover:underline">Selling an inherited house in Madison WI</Link></li></ul>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">FAQs</h2>
          {FAQ_ITEMS.map((item) => (<section key={item.question} className="mb-6"><h3 className="text-lg font-semibold text-brand-dark mb-2">{item.question}</h3><p className="text-gray-700">{item.answer}</p></section>))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Madison WI Home?" sourcePage="/blog/madison-wi-sell-house-fast-2026" />
      </article>
    </>
  );
}
