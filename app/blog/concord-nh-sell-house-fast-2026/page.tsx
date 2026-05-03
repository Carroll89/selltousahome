/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/concord-nh-sell-house-fast-2026`;

export const metadata: Metadata = {
  title: 'Sell Your House Fast in Concord NH — Cash Buyer, Any Condition',
  description:
    'Need to sell your Concord NH home fast? Get a no-obligation cash offer within 24 hours. Any condition, any situation — close on your schedule.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Do you buy houses in bad condition in Concord?', answer: 'Yes. We buy as-is. That includes homes with deferred maintenance, code violations, fire or water damage, lead paint, old systems, or major cleanout needs.' },
  { question: 'How fast can you close?', answer: 'Typically two to three weeks when title is clean and the seller is ready. If a foreclosure auction date has been set, tell us immediately so we can assess the timeline.' },
  { question: 'Do I need a real estate agent?', answer: 'No. A direct cash sale does not involve listing agents, MLS exposure, public showings, or agent commissions.' },
  { question: 'What areas around Concord do you serve?', answer: 'We buy throughout Merrimack County, including Concord, Bow, Pembroke, Hooksett, Loudon, Boscawen, Canterbury, Dunbarton, Chichester, Allenstown, Epsom, and Henniker.' },
  { question: 'Is your offer negotiable?', answer: 'We make a fair offer based on the property and current market context. You are never obligated to accept, and there is no cost to get an offer.' },
];

export default function ConcordNHBlogPost() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, articleSchema('Sell Your House Fast in Concord NH — Cash Buyer, Any Condition', pageUrl, '2026-05-02'), faqSchema(FAQ_ITEMS)]} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2"><Link href="/markets/concord-nh" className="text-brand-primary hover:underline">Concord NH</Link>{' '} · May 2, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link></div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">Sell your house fast in Concord, NH — cash buyers ready to close</h1>
          <p className="text-lg text-gray-600 leading-relaxed">If you need to sell your house fast in Concord, NH, we buy homes as-is for cash — no repairs, no agent commissions, and no open houses.</p>
        </header>

        <div className="prose prose-gray max-w-none">
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
            <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
            <p className="text-sm text-blue-900">Concord is very competitive in 2026, but older housing, fast New Hampshire foreclosure timelines, probate, and repair-heavy homes can still make certainty more valuable than listing exposure. A cash sale can move without repairs, showings, or buyer financing.</p>
          </div>

          <p className="text-gray-700 mb-4">Whether you are dealing with a foreclosure notice, an inherited property, a divorce, or a home that needs more work than you want to take on, there is a straightforward path forward. Call <strong>888-274-5006</strong> or submit your address on our <Link href="/markets/concord-nh" className="text-brand-primary hover:underline">Concord NH seller page</Link> to get started.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Concord is competitive, but every home does not sell easily</h2>
          <p className="text-gray-700 mb-4">According to Redfin, Concord posted a median sale price of <strong>$419,500 in March 2026</strong>, up 1.1% year over year, with homes averaging 34 days on market, a sale-to-list ratio of 99.0%, and a Compete Score of <strong>86 out of 100</strong>, rated “Very Competitive.”</p>
          <p className="text-gray-700 mb-4">Strong averages do not tell the whole story. Concord is New Hampshire's state capital and has some of the oldest housing stock in New England. According to 2024 American Community Survey 5-year Census data, <strong>33% of Concord's housing units were built in 1939 or earlier</strong>, and 66% were built before 1980.</p>
          <p className="text-gray-700 mb-4">That means lead paint, old wiring, aging oil boilers, older roofs, and foundation work are not unusual. Buyers using conventional financing often cannot close on homes with major deferred maintenance. A cash buyer prices the property as-is and removes inspection and lender repair conditions from the process.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">New Hampshire foreclosure moves fast</h2>
          <p className="text-gray-700 mb-4">New Hampshire uses non-judicial, power-of-sale foreclosure for many residential mortgages. According to 603 Legal Aid, Concord homeowners can lose a home in less than 120 days if no action is taken. The lender generally must send a notice of sale at least 45 days before the auction date and publish notice in a local newspaper for three consecutive weeks before the sale.</p>
          <p className="text-gray-700 mb-4">No court involvement is required unless the borrower seeks an injunction or files for bankruptcy. Once the auction happens, the window to act is effectively closed. If you have received a notice of default or notice of sale, a cash sale may be able to close before the auction date if there is enough time. For local next steps, read our <Link href="/markets/concord-nh/foreclosure" className="text-brand-primary hover:underline">Concord foreclosure resource</Link>.</p>
          <p className="text-gray-700 mb-4 text-sm italic">Foreclosure information is general. Speak with a New Hampshire attorney or housing counselor about your specific case.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Selling an old Concord home as-is</h2>
          <p className="text-gray-700 mb-4">Common as-is situations in Concord include lead paint in pre-1978 homes, knob-and-tube or early aluminum wiring, outdated heating, roof or foundation issues, abandoned accessory buildings, and code violations. We buy these homes. You do not need to repair the roof, upgrade the electrical, clean everything out, or wonder if a buyer's inspector will derail the sale.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Inherited a house in Concord?</h2>
          <p className="text-gray-700 mb-4">When a Concord home passes through an estate, the executor may need probate authority through the NH Circuit Court, 6th Circuit – Probate Division before the property can legally be sold. The court is located at 2 Charles Doe Drive, Suite 1, Concord, NH 03301, with statewide phone support at 855-212-1234.</p>
          <p className="text-gray-700 mb-4">Once authority is in hand, a cash buyer can close without requiring you to coordinate repairs, manage showings of a vacant property, or negotiate inspection credits on a home that has not been updated in years.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What a cash sale in Concord looks like</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Contact us</strong> by phone or online form.</li>
            <li><strong>Property review</strong> by quick walk-through, photos, or seller-provided details.</li>
            <li><strong>Offer within 24 hours</strong> in many cases, with no pressure.</li>
            <li><strong>Choose your closing date</strong> based on your timeline.</li>
            <li><strong>Closing and payment</strong> through a licensed title or escrow company.</li>
          </ol>
          <p className="text-gray-700 mb-4">New Hampshire's Real Estate Transfer Tax is $0.75 per $100 from the seller and $0.75 per $100 from the buyer. On a $419,500 sale, that is roughly $3,146 per side. We cover our side and explain how seller costs apply before you sign anything.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">FAQs</h2>
          {FAQ_ITEMS.map((item) => (<section key={item.question} className="mb-6"><h3 className="text-lg font-semibold text-brand-dark mb-2">{item.question}</h3><p className="text-gray-700">{item.answer}</p></section>))}

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Get a Concord NH cash offer</h2>
          <p className="text-gray-700 mb-4">See what your Concord home is worth in a cash sale on our <Link href="/markets/concord-nh" className="text-brand-primary hover:underline">Concord NH seller page</Link>, or call <strong>888-274-5006</strong>.</p>
        </div>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Concord NH Home" sourcePage="/blog/concord-nh-sell-house-fast-2026" />
      </article>
    </>
  );
}
