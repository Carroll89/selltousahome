/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/green-bay-wi-sell-house-fast-2026`;

export const metadata: Metadata = {
  title: 'How to Sell Your House Fast in Green Bay WI in 2026',
  description: "Need to sell your house fast in Green Bay, WI? Learn what Green Bay's 2026 market looks like, your three selling options, and how a cash sale can skip the 50-day listing timeline.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house in Green Bay, WI?', answer: 'With a traditional listing, plan for 50+ days based on March 2026 Redfin data, plus the closing period. With a cash buyer, closings typically happen in 7–21 days, depending on your timeline and any title issues.' },
  { question: 'Do I need an attorney to sell a house in Wisconsin?', answer: 'No. Wisconsin does not require an attorney for real estate closings. A licensed title company can handle the closing from start to finish.' },
  { question: 'How much does it cost to sell a house in Green Bay?', answer: 'Wisconsin charges a $3 per $1,000 transfer fee — about $780 on a $260,000 sale — plus a $30 deed recording fee. There is no Green Bay or Brown County local transfer tax add-on under Wisconsin law. Agent commissions are typically 5–6% if you list with a realtor.' },
  { question: 'What if I need to sell an inherited house that needs major repairs?', answer: "Cash buyers purchase as-is. You do not need to fix the roof or replace the furnace before closing. The estate's personal representative handles the sale once Letters Testamentary are issued by Brown County Circuit Court, unless a valid non-probate transfer applies." },
  { question: 'Is Lambeau Field in Green Bay?', answer: 'Lambeau Field is in Ashwaubenon, a separate village — not the City of Green Bay. Properties near the stadium are in Ashwaubenon unless the address specifically falls within Green Bay city limits.' },
];

export default function GreenBayWIBlogPost() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, articleSchema('How to Sell Your House Fast in Green Bay, WI in 2026', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8"><div className="text-sm text-gray-500 mb-2"><Link href="/markets/green-bay-wi" className="text-brand-primary hover:underline">Green Bay WI</Link>{' '} · May 1, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link></div><h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">How to sell your house fast in Green Bay, WI in 2026</h1><p className="text-lg text-gray-600 leading-relaxed">Green Bay's housing market is competitive in 2026 — but if your house is older, in probate, or tied to a foreclosure clock, a 50-day listing timeline may not work.</p></header>
        <div className="prose prose-gray max-w-none">
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8"><p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p><p className="text-sm text-blue-900">Homes are selling at or above asking price and the median is up 4% year over year. Wisconsin's cash-closing process is simple: no attorney required, no local transfer-tax add-on, and one flat $30 deed recording fee. <Link href="/markets/green-bay-wi" className="text-brand-primary hover:underline">Get a cash offer for your Green Bay home →</Link></p></div>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Green Bay housing market in 2026</h2>
          <p className="text-gray-700 mb-4">According to Redfin, the median home sale price in Green Bay was $260,000 in March 2026, up 4.0% from the prior year. Homes are priced roughly 42% below the national median, which keeps Green Bay accessible even as values climb. A Green Bay Press Gazette report from April 27, 2026 also noted area home sales rose approximately 6% through the first quarter of 2026.</p>
          <p className="text-gray-700 mb-4">The competitive side is real: homes received an average of 3 offers and sold at 100.3% of list price. The most in-demand listings went under contract in roughly 35 days. But the typical home — not the hot one — sat for about 50 days before going pending, and March sales volume slipped from 79 to 74 transactions year over year.</p>
          <p className="text-gray-700 mb-4">That 50-day average matters when you need to close by a specific date, sell a property that needs work, or manage an estate from out of state.</p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Three ways to sell a house fast in Green Bay</h2>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">1. List with a real estate agent</h3><p className="text-gray-700 mb-4">A traditional listing gives you MLS exposure and, in a competitive market, a shot at multiple offers. If your home is market-ready, this is often the path to the highest price. The catch is staging, showings, inspection contingencies, buyer financing, and repair negotiations.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">2. For sale by owner</h3><p className="text-gray-700 mb-4">FSBO skips the listing commission, but the workload lands on you: pricing, marketing, showings, disclosures, and buyer coordination. Wisconsin does not require an attorney for closings, so title companies can handle the transaction, but FSBO still requires time and experience.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">3. Sell to a cash buyer</h3><p className="text-gray-700 mb-4">For Green Bay sellers dealing with an inherited property, foreclosure pressure, tenants, or major repairs, a cash offer is often the cleanest path. <Link href="/resources/how-the-process-works/green-bay-wi" className="text-brand-primary hover:underline">Here is how our cash buying process works for Green Bay sellers →</Link></p>
          <p className="text-gray-700 mb-4">No listing. No repairs. No 50-day wait. Cash buyers typically close in 7–21 days and buy as-is, which means you do not hire contractors or argue over inspection credits.</p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The situations where cash makes sense in Green Bay</h2>
          <p className="text-gray-700 mb-4"><strong>Inherited a manufacturing-era home.</strong> Green Bay's housing stock includes many Cape Cods, ranches, and split-levels from the 1950s through 1970s. Homes in Astor Park, Fort Howard, and east-side neighborhoods are passing through estates with aging roofs, older furnaces, or original plumbing. Probate cases are handled through Brown County Circuit Court at 100 South Jefferson Street; the Register in Probate can be reached at (920) 448-4275. <Link href="/markets/green-bay-wi/inherited-property" className="text-brand-primary hover:underline">Learn more about selling an inherited house in Green Bay →</Link></p>
          <p className="text-gray-700 mb-4">Wisconsin also permits Transfer-on-Death deeds. If the original owner set one up correctly, probate may not be required. If they did not, plan for the court process before any sale can close.</p>
          <p className="text-gray-700 mb-4"><strong>Facing foreclosure in Brown County.</strong> Wisconsin is a judicial foreclosure state, which means the lender must file a lawsuit in Brown County Circuit Court. The process, including Wisconsin's post-judgment redemption period, can take well over a year from the first missed payment. That timeline creates options, but it does not last forever. If you are in pre-foreclosure, <Link href="/markets/green-bay-wi/foreclosure" className="text-brand-primary hover:underline">review Green Bay foreclosure sale options</Link> and consult a Wisconsin-licensed attorney about your specific timeline.</p>
          <p className="text-gray-700 mb-4"><strong>Packers-area game-day rental properties.</strong> Homeowners near Lambeau Field sometimes use properties for NFL game-day rentals. It can be profitable, but it also creates lease, licensing, and remote-management questions. One important note: Lambeau Field is in Ashwaubenon, a separate village from the City of Green Bay. <Link href="/markets/green-bay-wi" className="text-brand-primary hover:underline">Confirm your address and cash-sale options before listing →</Link></p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What selling costs in Wisconsin</h2>
          <ul className="space-y-2 text-gray-700 mb-4"><li>• <strong>Transfer fee:</strong> $3 per $1,000 of sale price, paid by the seller. On a $260,000 sale, that is $780.</li><li>• <strong>No local add-on:</strong> Wisconsin law prohibits cities and counties from adding their own conveyance taxes.</li><li>• <strong>Deed recording fee:</strong> A flat $30 to record the deed. Brown County deeds are recorded through the Register of Deeds, Room 260, 305 East Walnut Street, Green Bay, WI 54301, phone (920) 448-4470. Verify contact details before relying on them.</li><li>• <strong>Attorney fee:</strong> None required. Wisconsin title companies can close the transaction from start to finish.</li></ul>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">A note on Green Bay's boundaries</h2>
          <p className="text-gray-700 mb-4">Green Bay is surrounded by independent municipalities that are often confused with the city itself. Ashwaubenon, De Pere, Allouez, Howard, Bellevue, Suamico, and Ledgeview have their own governments and rules. De Pere is a separate city, and Ashwaubenon is home to Lambeau Field. Always confirm the actual municipality before making city-specific claims about a property.</p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Green Bay seller resources</h2>
          <ul className="space-y-2 mb-8"><li><Link href="/markets/green-bay-wi" className="text-brand-primary hover:underline">Green Bay WI market overview and cash offer</Link></li><li><Link href="/markets/green-bay-wi/resources" className="text-brand-primary hover:underline">Green Bay WI seller resources</Link></li><li><Link href="/markets/green-bay-wi/inherited-property" className="text-brand-primary hover:underline">Green Bay inherited-property guide</Link></li><li><Link href="/markets/green-bay-wi/foreclosure" className="text-brand-primary hover:underline">Green Bay foreclosure guide</Link></li></ul>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">FAQs</h2>{FAQ_ITEMS.map((item) => (<section key={item.question} className="mb-6"><h3 className="text-lg font-semibold text-brand-dark mb-2">{item.question}</h3><p className="text-gray-700">{item.answer}</p></section>))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Green Bay WI Home?" sourcePage="/blog/green-bay-wi-sell-house-fast-2026" />
      </article>
    </>
  );
}
