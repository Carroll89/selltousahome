/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/eau-claire-wi-sell-house-fast-2026`;

export const metadata: Metadata = {
  title: 'How to Sell Your House Fast in Eau Claire WI in 2026',
  description:
    'Need to sell your Eau Claire house fast? We buy homes in Eau Claire County as-is, any condition. Cash offer in 24 hours, close in 7–14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I close in Eau Claire?', answer: 'If title is clear and both parties are ready, we can close in 7 days. Most cash sales close in 7–14 days. A traditional sale often takes 41 days to find a buyer, then another 30–45 days to close.' },
  { question: 'What does it cost me to sell?', answer: "Nothing out of pocket when you sell to USA Home Buyers. We cover closing costs including Wisconsin's $3.00 per $1,000 transfer fee and the $30 recording fee. No agent commission, no repair costs before closing." },
  { question: "Can I sell an Eau Claire house that's in probate?", answer: "Yes. Once the estate's executor has Letters Testamentary from Eau Claire County Circuit Court, the estate can sell real property. Your probate attorney should stay involved throughout the process." },
  { question: "What if I'm behind on my mortgage?", answer: "Wisconsin uses judicial foreclosure, and the redemption period after judgment is typically 3–6 months. Reaching out early gives you more options. A cash sale before the sheriff sale date may preserve equity you'd otherwise lose to auction." },
  { question: 'Do you buy in Randall Park, Third Ward, and other older Eau Claire neighborhoods?', answer: 'Yes. We buy throughout Eau Claire and Eau Claire County, including Randall Park, Third Ward, Eastside Hill, Putnam Heights, Dells Pond, North Side Hill, and surrounding areas.' },
  { question: 'Is this just for Eau Claire proper, or do you serve the surrounding area?', answer: "We buy in Eau Claire and throughout Eau Claire County. For properties in the Chippewa County portion of Eau Claire city, or in nearby Chippewa County communities, contact us and we'll confirm service area on a case-by-case basis." },
];

export default function EauClaireWIBlogPost() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, articleSchema('How to Sell Your House Fast in Eau Claire, WI in 2026', pageUrl, '2026-05-03'), faqSchema(FAQ_ITEMS)]} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2"><Link href="/markets/eau-claire-wi" className="text-brand-primary hover:underline">Eau Claire WI</Link>{' '} · May 3, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link></div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">How to sell your house fast in Eau Claire, WI in 2026</h1>
          <p className="text-lg text-gray-600 leading-relaxed">If you need to sell an Eau Claire house fast, a direct cash sale can skip repairs, showings, bank approvals, and the normal retail waiting period.</p>
        </header>

        <div className="prose prose-gray max-w-none">
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
            <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
            <p className="text-sm text-blue-900">You can sell your Eau Claire house fast with a cash buyer — written offer in 24 hours, close in 7–14 days, any condition, no repairs, no commissions. Redfin reported a $285,000 median sale price and 41 days on market in March 2026. If you can't wait, a direct cash sale skips the retail timeline. Call <a href="tel:+18882745006" className="text-brand-primary hover:underline">888-274-5006</a> or <Link href="/markets/eau-claire-wi" className="text-brand-primary hover:underline">visit our Eau Claire page</Link>.</p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The direct answer</h2>
          <p className="text-gray-700 mb-4">Selling your Eau Claire home fast means working with a direct cash buyer. No listing, no repair requests, no waiting on bank approvals. We make a written offer within 24 hours and can close in as few as 7 days.</p>
          <p className="text-gray-700 mb-4">The traditional path takes longer. Redfin reported a median of 41 days on market in Eau Claire in March 2026 — before another 30–45 days for title work, underwriting, and closing. For sellers who need speed or have a home that won't survive inspection, that isn't fast enough.</p>
          <p className="text-gray-700 mb-4">We buy Eau Claire homes in any condition: older Craftsman-era homes in Randall Park, UWEC-adjacent rentals, deferred-maintenance properties, and estate situations where the family needs to close and distribute.</p>
          <p className="text-gray-700 mb-4"><Link href="/markets/eau-claire-wi" className="text-brand-primary hover:underline">See how we buy houses in Eau Claire →</Link></p>
          <p className="text-gray-700 mb-4"><Link href="/resources/how-the-process-works/eau-claire-wi" className="text-brand-primary hover:underline">Review the Eau Claire cash-sale process →</Link></p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What the Eau Claire market looks like right now</h2>
          <p className="text-gray-700 mb-4">Eau Claire's market has improved noticeably over the past year. According to Redfin, homes in Eau Claire spent a median of 41 days on market in March 2026 — down from 60 days the year before. The median sale price reached $285,000 in March 2026, up 2.6% year over year, and sale prices came in at 99.7% of list on average.</p>
          <p className="text-gray-700 mb-4">The market rewards well-maintained, realistically priced homes. If you're dealing with deferred maintenance, an estate, foreclosure, or a tenant situation, the cash path removes the friction.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Three ways to sell</h2>
          <p className="text-gray-700 mb-4"><strong>List with a real estate agent.</strong> Best for homes in good condition with no time pressure. Expect commissions, potential repair requests after inspection, and a timeline of 3–4 months from listing to closed.</p>
          <p className="text-gray-700 mb-4"><strong>Sell it yourself.</strong> You handle marketing, showings, negotiations, and paperwork. FSBO can save the listing commission, but it is not suited for many distressed or time-sensitive situations.</p>
          <p className="text-gray-700 mb-4"><strong>Sell to a cash buyer.</strong> No repairs, no inspection contingencies, no agent commission. Written offer within 24 hours, close in 7–14 days. The trade-off is that cash offers come in below retail market value; the benefit is speed, certainty, and as-is convenience.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Eau Claire situations where a cash sale makes sense</h2>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Inherited and estate homes</h3>
          <p className="text-gray-700 mb-4">Older Eau Claire neighborhoods — Randall Park, Third Ward, and Eastside Hill — have housing stock going back to the early 1900s. When these properties pass through a Wisconsin estate, the executor needs authority before real estate can be sold. Once that paperwork is in hand, a cash buyer can close on the estate's schedule without repairs, showings, or months waiting for financed buyers.</p>
          <p className="text-gray-700 mb-4 text-sm italic">Probate information is general. For Eau Claire County matters, refer to the Eau Claire County Courthouse, 721 Oxford Ave, Eau Claire, WI 54703, and consult a licensed Wisconsin attorney.</p>

          <h3 className="text-lg font-semibold text-brand-dark mb-2">Pre-foreclosure and sheriff-sale deadlines</h3>
          <p className="text-gray-700 mb-4">Wisconsin is a judicial foreclosure state. After judgment, a redemption period often follows — commonly 3 months if the lender waives deficiency or 6 months if not. If you're behind on payments in Eau Claire, a cash sale before the sheriff sale date may preserve equity that would otherwise go through auction.</p>
          <p className="text-gray-700 mb-4 text-sm italic">Wisconsin foreclosure timelines are case-specific. Consult a licensed Wisconsin attorney before making decisions about your property.</p>

          <h3 className="text-lg font-semibold text-brand-dark mb-2">UWEC-area rentals and older homes</h3>
          <p className="text-gray-700 mb-4">University of Wisconsin–Eau Claire brings a steady student-rental population to the Third Ward, Putnam Heights, and Eastside Hill corridors. A cash buyer can purchase tenant-occupied properties as-is, without requiring vacancy. We also buy homes with ice-dam damage, frozen-pipe issues, aging HVAC, worn rooflines, cleanout needs, and other Wisconsin winter wear.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What it costs to close in Eau Claire</h2>
          <p className="text-gray-700 mb-4">Wisconsin's real estate transfer fee is $3.00 per $1,000 of sale price. On a $285,000 sale, that is $855. The standard recording fee for deeds is $30. In Wisconsin, sellers typically pay the transfer fee and any outstanding liens, while buyers typically pay recording fees. When you sell to USA Home Buyers, we cover closing costs; the offer we make is the number you walk away with.</p>
          <p className="text-gray-700 mb-4 text-sm italic">The City of Eau Claire extends partially into Chippewa County. If your property is in the Chippewa County portion, confirm your parcel's county before closing.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">How it works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Contact us.</strong> Call <a href="tel:+18882745006" className="text-brand-primary hover:underline">888-274-5006</a> or submit your address online.</li>
            <li><strong>Get a written offer in 24 hours.</strong> No obligation. Based on Eau Claire County market data and the property's as-is condition.</li>
            <li><strong>Close on your schedule.</strong> We can close in 7 days if needed, or work around your timeline.</li>
          </ol>
          <p className="text-gray-700 mb-4">No repairs. No agent fees.</p>
        </div>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Eau Claire WI Home" sourcePage="/blog/eau-claire-wi-sell-house-fast-2026" placeholderCity="Eau Claire" />

        <div className="prose prose-gray max-w-none mt-10">
          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Frequently asked questions</h2>
          {FAQ_ITEMS.map((item) => (<section key={item.question} className="mb-6"><h3 className="text-lg font-semibold text-brand-dark mb-2">{item.question}</h3><p className="text-gray-700">{item.answer}</p></section>))}
        </div>

      </article>
    </>
  );
}
