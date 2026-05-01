/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/norwich-ct-sell-house-fast-2026`;

export const metadata: Metadata = {
  title: 'How to Sell Your House Fast in Norwich CT in 2026',
  description:
    "Norwich CT homes averaged 52 days on market in March 2026 — but the fastest sold in 16 days. Learn which strategy gets you to closing quickly.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How long does it take to sell a house in Norwich, CT?', answer: 'According to Redfin data from March 2026, the average Norwich home took 52 days to find a buyer. The most competitive updated homes went under contract in about 16 days. Add attorney review and closing, and a traditional sale is often 75–120 days total. A cash buyer can typically close in two to three weeks.' },
  { question: 'Does Connecticut require an attorney to sell a house?', answer: 'Yes. Connecticut is an attorney-closing state, which means a licensed Connecticut attorney handles the closing regardless of whether a real estate agent is involved. This applies to both traditional and cash transactions.' },
  { question: 'What is strict foreclosure in Connecticut?', answer: "Connecticut uses strict foreclosure in many cases — a court process where the judge sets a hard deadline called a Law Day. If the homeowner doesn't pay off the debt by that date, the lender takes title directly. There's no public auction. Consult a Connecticut attorney for advice specific to your case." },
  { question: 'What conveyance tax do Norwich CT sellers pay?', answer: "Connecticut charges a state real estate conveyance tax of 0.75% on most residential sales under $800,000. Most towns add a municipal conveyance tax on top. Norwich's specific municipal rate is not confirmed — it may be higher than the standard 0.25% charged by many CT towns. Verify the current Norwich rate with your closing attorney before estimating your net proceeds." },
  { question: 'Can I sell a Norwich house with code violations?', answer: 'Traditional buyers using bank financing often cannot close until violations are resolved because lenders typically require a clean inspection. Cash buyers generally purchase as-is and handle violations after closing. If your home has open Building Department violations, a cash sale may be the most practical route.' },
  { question: 'What Norwich neighborhoods have the most inherited properties for sale?', answer: 'Taftville, Greeneville, and Norwichtown have the most older housing stock and tend to see more inherited and estate-sale situations. These neighborhoods have significant mill-era and colonial-era homes that have passed through multiple generations.' },
];

export default function NorwichCTBlogPost() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, articleSchema('How to Sell Your House Fast in Norwich, CT in 2026', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2"><Link href="/markets/norwich-ct" className="text-brand-primary hover:underline">Norwich CT</Link>{' '} · May 1, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link></div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">How to sell your house fast in Norwich, CT in 2026</h1>
          <p className="text-lg text-gray-600 leading-relaxed">According to Redfin, the median sale price in Norwich hit $310,000 in March 2026 — up 16.8% year over year. But that headline hides a split market: updated homes are moving fast while average homes sit much longer.</p>
        </header>
        <div className="prose prose-gray max-w-none">
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8"><p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p><p className="text-sm text-blue-900">If your Norwich house needs work, carries an inherited title, or you're facing a Connecticut strict-foreclosure Law Day, a cash buyer can often close in two to three weeks — no repairs, no agent commissions, no financing delays. Verify closing costs with a licensed Connecticut attorney before signing anything.</p></div>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Norwich market right now</h2>
          <p className="text-gray-700 mb-4">Norwich's housing market in early 2026 isn't one market — it's two. Redfin data from March 2026 shows a median sale price of $310,000, up 16.8% year over year. The typical home sold at 100.7% of asking price. For the right property, that is a seller's market.</p>
          <p className="text-gray-700 mb-4">But average days on market was 52 days. Hot, updated, move-in-ready homes went under contract in about 16 days — often at roughly 5% above list price. Everything else waited almost two months to find a buyer, before attorney review, inspections, and Connecticut's closing process even started.</p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Three ways to sell in Norwich — and when each one makes sense</h2>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">1. List with a real estate agent</h3>
          <p className="text-gray-700 mb-4">If your home is in good shape and you can wait 60 to 90 days or more, listing with a licensed agent gives you the best shot at a market-rate price. In Norwich's two-speed market, updated homes in areas like Laurel Hill and Chelsea can sell quickly. The cost is typically 5–6% in agent commissions plus closing costs.</p>
          <p className="text-gray-700 mb-4">The catch: if your home needs repairs first, you're adding time and money before the listing goes live. If it's the kind of house that lands in the slow half of the market, you might be looking at four months or more from decision to closing.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">2. Sell it yourself</h3>
          <p className="text-gray-700 mb-4">Selling without an agent saves the listing commission, but Connecticut is an attorney-closing state — a licensed Connecticut attorney still handles the closing regardless of whether an agent is involved. FSBO works best when you already know buyers, have time for showings and negotiations, and understand local pricing.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">3. Sell to a cash buyer</h3>
          <p className="text-gray-700 mb-4">A cash buyer skips the agent, the repair list, the bank appraisal, and most of the waiting. You pick a closing date — often two to three weeks out — and the buyer takes the property as-is. The trade-off is a lower sale price than a fully market-ready listing would get, but you also avoid agent commissions and financing delays.</p>
          <p className="text-gray-700 mb-4">Cash buyers make the most sense for homes needing significant repairs, inherited properties, code violations, tenant complications, or when a Connecticut foreclosure Law Day is approaching. <Link href="/resources/how-the-process-works/norwich-ct" className="text-brand-primary hover:underline">See how the process works for Norwich sellers →</Link></p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">When speed really matters in Norwich</h2>
          <p className="text-gray-700 mb-4"><strong>Inherited and probate properties.</strong> Norwich has older housing stock in Taftville, Greeneville, and Norwichtown. Taftville grew around French-Canadian textile mill workers in the late 1800s and early 1900s, and many homes have passed down through families. Out-of-state heirs cannot easily coordinate repairs or showings from a distance.</p>
          <p className="text-gray-700 mb-4">Norwich has its own Norwich Probate District, separate from the New London County probate court. If you're dealing with an inherited property, verify current probate court details at <a href="https://www.ctprobate.gov/Pages/Court-Locator.aspx" className="text-brand-primary hover:underline">ctprobate.gov/Pages/Court-Locator.aspx</a> before starting the process.</p>
          <p className="text-gray-700 mb-4"><strong>Connecticut strict foreclosure.</strong> Connecticut is one of the few states that uses strict foreclosure. The court can set a deadline called a Law Day. If the homeowner doesn't redeem the mortgage by that date, the lender takes title directly. There's no public auction, no sheriff sale, and no second chance once the Law Day passes.</p>
          <p className="text-gray-700 mb-4">The foreclosure process in Connecticut can take anywhere from several months to well over a year depending on how contested it is. But once Law Day is on the calendar, the deadline is fixed by court order. If you're in foreclosure, consult a licensed Connecticut attorney for advice on your situation. For a deeper overview, read our <Link href="/blog/connecticut-foreclosure-strict-vs-sale" className="text-brand-primary hover:underline">Connecticut strict foreclosure guide</Link>.</p>
          <p className="text-gray-700 mb-4"><strong>Code violations and as-is properties.</strong> Older homes in Taftville and Greeneville frequently have outdated electrical systems, unpermitted additions, or failing mechanical systems. Traditional buyers using bank financing often cannot close until violations are resolved. Cash buyers typically purchase as-is and deal with violations after closing.</p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Connecticut closing costs — what Norwich sellers pay</h2>
          <p className="text-gray-700 mb-4">Connecticut sellers pay two closing-related costs that catch people off guard: the state real estate conveyance tax and a municipal conveyance tax. The state rate is 0.75% of the sale price for most residential transactions under $800,000.</p>
          <p className="text-gray-700 mb-4">Most Connecticut towns also charge a municipal conveyance tax on top. The standard rate is 0.25%, but <strong>Norwich's municipal rate has not been confirmed</strong> — it may be higher than the standard. Do not assume 0.25% applies to Norwich without verifying with your closing attorney or the Norwich City Clerk.</p>
          <p className="text-gray-700 mb-4">In Connecticut, deeds are recorded with the Town Clerk, not at a county recorder's office. For a Norwich property, that means working through the Norwich City Clerk. Your closing attorney will handle this, but it is worth knowing that a New London County recorder is not part of the process.</p>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Norwich neighborhoods — where your house fits</h2>
          <ul className="space-y-2 text-gray-700 mb-4"><li>• <strong>Taftville:</strong> former textile mill community with older housing stock and many inherited-property situations.</li><li>• <strong>Greeneville:</strong> working-class residential neighborhood with older housing and as-is opportunities.</li><li>• <strong>Chelsea:</strong> downtown Norwich, with a mix of older residential and commercial properties.</li><li>• <strong>Laurel Hill:</strong> more move-in-ready postwar inventory, where the faster side of the market often lives.</li><li>• <strong>Norwichtown:</strong> original colonial settlement from the 1650s, with historic homes and probate sales.</li></ul>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What to do next</h2>
          <p className="text-gray-700 mb-4">If you want to explore a cash offer on your Norwich property, you can get a no-obligation offer with a decision within 24 hours.</p>
          <ul className="space-y-2 mb-8"><li><Link href="/markets/norwich-ct" className="text-brand-primary hover:underline">View your Norwich market options</Link></li><li><Link href="/markets/norwich-ct/resources" className="text-brand-primary hover:underline">Norwich seller resources and local contacts</Link></li></ul>
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">FAQs</h2>{FAQ_ITEMS.map((item) => (<section key={item.question} className="mb-6"><h3 className="text-lg font-semibold text-brand-dark mb-2">{item.question}</h3><p className="text-gray-700">{item.answer}</p></section>))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Norwich CT Home?" sourcePage="/blog/norwich-ct-sell-house-fast-2026" />
      </article>
    </>
  );
}
