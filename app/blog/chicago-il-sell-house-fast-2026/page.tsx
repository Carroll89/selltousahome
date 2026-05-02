/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/chicago-il-sell-house-fast-2026`;

export const metadata: Metadata = {
  title: 'How to Sell Your House Fast in Chicago IL in 2026',
  description:
    "Need to sell your house fast in Chicago, IL? Learn what Chicago's 2026 market data says, what your options are, and when an as-is cash sale makes sense.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house in Chicago, IL?',
    answer:
      'A traditional sale can take 50+ days to reach contract or pending on average, before prep, financing, and closing time. A cash sale can often close faster once title is clear, especially if the home is sold as-is.',
  },
  {
    question: 'Do I need to make repairs before selling a Chicago house?',
    answer:
      'Not if you sell as-is to a cash buyer. If you list traditionally, repairs, inspections, and buyer lender standards can affect price and timing.',
  },
  {
    question: "What is Chicago's median home price in 2026?",
    answer:
      'Redfin reported a Chicago median sale price of $410,100 in March 2026, up 5.2% year over year. Do not use that number as a neighborhood price. Chicago neighborhood values vary widely.',
  },
  {
    question: 'Can I sell a house in Cook County probate?',
    answer:
      "Usually yes, but the estate's legal authority matters. The personal representative may need Letters of Office before selling. Confirm your specific situation with an Illinois probate attorney or title company.",
  },
  {
    question: 'Can I sell before foreclosure in Chicago?',
    answer:
      'Often, yes, if there is enough time and equity to pay off the mortgage and closing costs. Illinois foreclosure is judicial, and timing depends on the case. If you have been served, talk with an Illinois-licensed attorney.',
  },
  {
    question: 'Does the City of Chicago transfer tax apply to Cook County suburbs?',
    answer:
      'No. The City of Chicago real property transfer tax applies to properties inside Chicago city limits. Cook County suburbs may have different local rules. Confirm the property municipality before using Chicago-specific tax numbers.',
  },
];

export default function ChicagoILBlogPost() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, articleSchema('How to Sell Your House Fast in Chicago, IL in 2026', pageUrl, '2026-05-02'), faqSchema(FAQ_ITEMS)]} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/sell-my-house-fast-chicago-il" className="text-brand-primary hover:underline">Chicago IL</Link>{' '} · May 2, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">How to sell your house fast in Chicago, IL in 2026</h1>
          <p className="text-lg text-gray-600 leading-relaxed">Compare listing, FSBO, and as-is cash sale options for Chicago sellers facing repairs, probate, tenants, code issues, or tight timing.</p>
        </header>
        <div className="prose prose-gray max-w-none">
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
            <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
            <p className="text-sm text-blue-900">If you need to sell your house fast in Chicago, IL, you have three realistic paths: list with an agent, try FSBO, or sell as-is to a cash buyer. Redfin reported Chicago's March 2026 median sale price at $410,100, up 5.2% year over year, with homes averaging about 50–52 days on market. That market can work well for clean, financeable homes. If the property needs repairs, is in probate, has code issues, or is near foreclosure, a cash sale can cut out repairs, showings, lender delays, and long negotiation cycles.</p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Chicago's 2026 market is competitive, but speed still depends on the house</h2>
          <p className="text-gray-700 mb-4">Chicago is not one simple housing market. A brick bungalow in Austin, an inherited two-flat in Pilsen, a greystone near Bronzeville, and a condo near the lake can all move very differently.</p>
          <p className="text-gray-700 mb-4">According to Redfin, Chicago homes had a <strong>$410,100 median sale price in March 2026</strong>, up <strong>5.2%</strong> from the prior year. Homes sold for <strong>100.4% of list price</strong> on average, received about <strong>3 offers</strong>, and had a <strong>62/100 “Somewhat Competitive”</strong> score.</p>
          <p className="text-gray-700 mb-4">Those numbers sound strong. But Redfin's same market page puts average homes near list price in roughly <strong>52 days</strong>, while hotter homes can go pending around <strong>31 days</strong>. If your house needs a roof, has old electrical, has tenants, or is tied up in an estate, the average listing timeline can stretch once inspections, buyer financing, and repair credits enter the deal.</p>
          <p className="text-gray-700 mb-4">That is where an as-is cash offer can make sense. It is not always the highest gross price. It is often the simpler net path when time, repairs, title, or court deadlines matter more.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Three ways to sell a Chicago house fast</h2>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">1. List with a real estate agent</h3>
          <p className="text-gray-700 mb-4">A traditional listing can work if the home is clean, vacant, financeable, and priced correctly. The tradeoff is time and prep: repairs, cleanout, showings, inspection negotiations, appraisal review, and buyer lender approval. In Chicago, that can be a lot for older bungalows, two-flats, and estate properties that have not been updated in years.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">2. Sell by owner</h3>
          <p className="text-gray-700 mb-4">FSBO can save a listing commission, but it puts the work on you: pricing, photos, buyer calls, showings, disclosures, contract coordination, and closing logistics. In Illinois, real estate attorneys are customary in many closings, especially when title, estate, foreclosure, or tenant issues are involved. A low-certainty buyer can cost you weeks.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">3. Sell as-is to a cash buyer</h3>
          <p className="text-gray-700 mb-4">A cash sale is built for problem-solving. You can skip repairs, skip showings, avoid inspection retrades, and close on a cleaner schedule once title is ready. That matters for Chicago sellers dealing with an inherited bungalow, vacant property, code violations, tenants, a foreclosure deadline, or an out-of-state heir who does not want to manage contractors. You can start with <Link href="/sell-my-house-fast-chicago-il" className="text-brand-primary hover:underline">our Chicago cash home buyer page</Link>, or read <Link href="/resources/how-the-process-works" className="text-brand-primary hover:underline">how the cash offer process works</Link>.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Local Chicago situations where speed matters</h2>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Inherited homes and Cook County probate</h3>
          <p className="text-gray-700 mb-4">Estate sales are common in Chicago because so much housing stock is older and multigenerational. South Side and West Side bungalows, two-flats, and greystones often pass to heirs who live elsewhere or cannot take on repairs.</p>
          <p className="text-gray-700 mb-4">Cook County Probate Division is at the Daley Center, <strong>50 W. Washington St., Room 1202, Chicago, IL 60602</strong>; confirm current phone/contact details on the court site. If real property is part of an Illinois estate, the personal representative may need Letters of Office before selling. A cash buyer can still move quickly once the legal authority is clear. Talk with an Illinois probate attorney or title company before signing if the owner has passed away. For broader state context, see <Link href="/blog/sell-inherited-house-illinois" className="text-brand-primary hover:underline">selling an inherited house in Illinois</Link>.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Pre-foreclosure in Cook County</h3>
          <p className="text-gray-700 mb-4">Illinois is a <strong>judicial foreclosure</strong> state. In Cook County, mortgage foreclosure cases go through the Circuit Court of Cook County, Chancery Division. The packet says Illinois homeowners typically have a redemption period of <strong>7 months from service of summons</strong> or <strong>3 months from entry of judgment of foreclosure</strong>, whichever is later. It also notes that uncontested Illinois foreclosures often take <strong>12–15 months</strong>, but that timing is case-specific.</p>
          <p className="text-gray-700 mb-4">Do not wait until the sheriff sale is close. If you still have equity, a cash sale before the process finishes may help you pay off the debt and choose your move-out date. This is legal information, not legal advice. Talk with an Illinois-licensed attorney if you have been served.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Code violations, vacant houses, and repair-heavy properties</h3>
          <p className="text-gray-700 mb-4">Chicago's Department of Buildings can create pressure for owners of vacant or unsafe properties. A house with open violations, old plumbing, roof damage, fire damage, or illegal units may be hard to finance. That can knock out ordinary buyers even when the market looks strong on paper.</p>
          <p className="text-gray-700 mb-4">Cash buyers usually price in the repairs and buy the property as-is. For sellers in Austin, Englewood, North Lawndale, Roseland, Pullman, South Shore, Bronzeville, Woodlawn, Pilsen, Little Village, or Humboldt Park, the point is not to make neighborhood price claims. The point is that Chicago has many older bungalows, two-flats, and small multifamily buildings where repair costs can block a normal sale.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Chicago transfer taxes and closing costs to plan for</h2>
          <p className="text-gray-700 mb-4">Chicago sellers should understand the tax stack before comparing offers. The packet flags four cost items:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Illinois state real estate transfer tax:</strong> $0.50 per $500 of sale price.</li>
            <li><strong>Cook County transfer tax:</strong> $0.25 per $500.</li>
            <li><strong>City of Chicago real property transfer tax:</strong> total $5.25 per $500. The packet says sellers typically pay $1.50 per $500 and buyers pay $3.75 per $500.</li>
            <li><strong>Cook County deed recording fee:</strong> $107 flat for deeds, effective April 1, 2024.</li>
          </ul>
          <p className="text-gray-700 mb-4">On a $410,000 sale, the seller-side city transfer tax alone is about <strong>$1,230</strong> using the packet's rate. That does not include agent commissions, attorney fees, title charges, payoff items, repairs, or credits negotiated after inspection.</p>
          <p className="text-gray-700 mb-8">Chicago transfer tax rules should be verified before closing, especially the city RPTT buyer/seller split. Use a closing attorney or title company for final numbers. For a no-pressure number, call <a href="tel:+18882745006" className="text-brand-primary hover:underline">888-274-5006</a> or start here: <Link href="/sell-my-house-fast-chicago-il" className="text-brand-primary hover:underline">sell your Chicago house fast</Link>.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Frequently asked questions</h2>
          {FAQ_ITEMS.map((item) => (
            <section key={item.question} className="mb-6">
              <h3 className="text-lg font-semibold text-brand-dark mb-2">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </section>
          ))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Chicago IL Home?" sourcePage="/blog/chicago-il-sell-house-fast-2026" />
      </article>
    </>
  );
}
