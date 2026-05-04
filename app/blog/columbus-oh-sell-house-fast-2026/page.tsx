/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/columbus-oh-sell-house-fast-2026`;

export const metadata: Metadata = {
  title: 'How to Sell Your House Fast in Columbus OH in 2026',
  description:
    'Need to sell a house fast in Columbus, OH? Compare listing, FSBO, and as-is cash sale options using 2026 Columbus and Franklin County details.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell a house in Columbus, OH?',
    answer:
      'A listed Columbus house can still take weeks for prep, showings, inspection, appraisal, financing, and closing. A cash sale can move faster because it does not depend on retail-buyer financing or lender-required repairs. Title, liens, probate, tenants, and foreclosure deadlines can still affect the timeline.',
  },
  {
    question: 'Can I sell a Columbus house as-is without repairs?',
    answer:
      'Yes, if the buyer agrees to purchase the property in its current condition. An as-is buyer prices around repair needs instead of requiring you to fix the roof, electrical, plumbing, cleanout, code issues, or cosmetic problems before closing.',
  },
  {
    question: 'What is the Franklin County conveyance fee?',
    answer:
      "The Columbus market page cites Franklin County's conveyance fee at $3.00 per $1,000 of sale price, made up of the state and county portions. Your title company should confirm the final settlement costs for your specific transaction.",
  },
  {
    question: 'Can a cash buyer help before a Franklin County sheriff sale?',
    answer:
      'Sometimes, if there is enough time to confirm payoff, review title, and close. Ohio mortgage foreclosure is judicial, and Franklin County mortgage sheriff sales are handled online through RealAuction on Fridays at 10:00 a.m. Start early because options narrow once a sale date is close.',
  },
  {
    question: 'What areas around Columbus do you buy in?',
    answer:
      'USA Home Buyers buys houses in Columbus and surrounding Franklin County communities including Westerville, Dublin, Hilliard, Grove City, Gahanna, Worthington, Upper Arlington, Reynoldsburg, Pickerington, Canal Winchester, and nearby Central Ohio areas.',
  },
];

export default function ColumbusOHBlogPost() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, articleSchema('How to Sell Your House Fast in Columbus, OH in 2026', pageUrl, '2026-05-03'), faqSchema(FAQ_ITEMS)]} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2"><Link href="/markets/columbus-oh" className="text-brand-primary hover:underline">Columbus OH</Link>{' '} · May 3, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link></div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">How to sell your house fast in Columbus, OH in 2026</h1>
          <p className="text-lg text-gray-600 leading-relaxed">If you need to sell your house fast in Columbus, OH, compare your real deadline, repair burden, and likely net proceeds before choosing a listing, FSBO sale, or direct as-is cash offer.</p>
        </header>

        <div className="prose prose-gray max-w-none">
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8"><p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p><p className="text-sm text-blue-900">Columbus is an active Central Ohio market, but speed still depends on condition, title, access, and the seller's deadline. A clean, financeable house may do well on the open market. A property with deferred maintenance, tenants, probate, foreclosure pressure, or a full cleanout may be better suited for a direct as-is sale that skips repairs, showings, lender conditions, and long inspection negotiations.</p></div>

          <p className="text-gray-700 mb-4">Useful local pages: <Link href="/markets/columbus-oh" className="text-brand-primary hover:underline">sell your Columbus house for cash</Link>, <Link href="/markets/columbus-oh/resources" className="text-brand-primary hover:underline">Columbus seller resources</Link>, <Link href="/markets/columbus-oh/market-report" className="text-brand-primary hover:underline">Columbus housing market report</Link>, and the <Link href="/guides/sell-house-fast-columbus-oh-2026" className="text-brand-primary hover:underline">2026 Columbus seller guide</Link>.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Columbus's 2026 market is active, but condition still controls speed</h2>
          <p className="text-gray-700 mb-4">The Columbus market page cites Redfin March 2026 data showing a <strong>$290,000 median sale price</strong>, <strong>47 median days on market</strong>, a <strong>98.5% sale-to-list ratio</strong>, <strong>787 homes sold</strong>, and a <strong>65 out of 100 “Somewhat Competitive”</strong> score.</p>
          <p className="text-gray-700 mb-4">Those citywide numbers are helpful, but they do not sell a specific house. A move-in-ready home in a strong Columbus pocket can attract normal retail buyers. A house with old wiring, roof issues, tenants, inherited-owner coordination, code concerns, or a large cleanout can still stall even when the broader market is healthy.</p>
          <p className="text-gray-700 mb-4">Columbus also has many older neighborhoods and varied housing conditions. The local market page specifically notes Franklinton, Linden, Hilltop, South Side, the Near East Side, Clintonville, the University District, German Village, and Short North as areas where seller situations and property condition can differ sharply.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The three main ways to sell fast in Columbus</h2>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">1. List with a local real estate agent</h3>
          <p className="text-gray-700 mb-4">A traditional listing can make sense if the house is clean, financeable, accessible, and you have enough time for photos, showings, inspection negotiations, appraisal, and buyer financing. It may produce the highest price, but your net depends on repairs, commissions, concessions, carrying costs, and whether the buyer closes.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">2. Sell by owner</h3>
          <p className="text-gray-700 mb-4">For-sale-by-owner can work if you already understand pricing, disclosures, paperwork, calls, showings, title coordination, and buyer follow-up. It is harder when the property has tenants, probate authority questions, repairs, or an urgent foreclosure or relocation deadline.</p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">3. Sell as-is to a cash buyer</h3>
          <p className="text-gray-700 mb-4">A direct cash sale is built around speed and certainty. The buyer reviews the house in its current condition and makes a written offer that does not require you to repair, clean out, stage, or wait on retail-buyer financing. The offer may be below a fully repaired retail price, so compare net proceeds rather than headline price.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Columbus situations where cash can make sense</h2>
          <p className="text-gray-700 mb-4"><strong>Inherited or probate property.</strong> The Columbus market page lists Franklin County Probate Court at <strong>373 S. High St., 22nd Floor, Columbus OH 43215</strong>. If an estate is involved, confirm who has authority to sign before entering a sale contract. Start with the <Link href="/markets/columbus-oh/probate" className="text-brand-primary hover:underline">Columbus probate sale resource</Link>.</p>
          <p className="text-gray-700 mb-4"><strong>Foreclosure or sheriff-sale pressure.</strong> Ohio foreclosure is judicial. Franklin County mortgage sheriff sales are online through RealAuction on Fridays at 10:00 a.m., while delinquent tax sales are Tuesdays at 10:00 a.m. If timing is tight, review the <Link href="/markets/columbus-oh/foreclosure" className="text-brand-primary hover:underline">Columbus foreclosure resource</Link> early.</p>
          <p className="text-gray-700 mb-4"><strong>Tenant-occupied rentals.</strong> Columbus has many rental and landlord situations. A cash buyer can often evaluate the property with tenants in place, but lease terms, access, notice, deposits, and closing logistics still need careful handling. See <Link href="/markets/columbus-oh/tenant-occupied" className="text-brand-primary hover:underline">tenant-occupied property options</Link>.</p>
          <p className="text-gray-700 mb-4"><strong>Repairs, code issues, or fire damage.</strong> Retail buyers and lenders may push back on roof life, electrical, plumbing, foundation, fire damage, or open violations. A direct buyer can price those issues into the offer instead of requiring you to complete the work before closing.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Franklin County costs to factor into your net</h2>
          <p className="text-gray-700 mb-4">The local Columbus page cites a Franklin County conveyance fee of <strong>$3.00 per $1,000</strong> of sale price and recording through the Franklin County Recorder at <strong>373 S. High St., 18th Floor, Columbus OH 43215</strong>. It also cites a recording fee of <strong>$34 for the first two pages</strong> and <strong>$8 for each additional page</strong>.</p>
          <p className="text-gray-700 mb-4">Your actual net can also change because of payoff amounts, taxes, liens, title issues, negotiated seller costs, repair credits, and holding costs. Ask the title company for the final settlement statement before comparing offers.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Fast-sale checklist before you choose a path</h2>
          <ul className="space-y-2 text-gray-700 mb-4"><li>• Property address and basic condition notes.</li><li>• Mortgage payoff, tax, lien, or HOA information.</li><li>• Probate, divorce, tenant, or foreclosure paperwork if applicable.</li><li>• Your ideal closing date and minimum acceptable net.</li><li>• A repair or cleanout list if the house needs work.</li><li>• Photos or access instructions if you are out of town.</li></ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">How USA Home Buyers handles a Columbus cash offer</h2>
          <p className="text-gray-700 mb-4">USA Home Buyers buys Columbus and Franklin County houses as-is. You can start at the <Link href="/markets/columbus-oh" className="text-brand-primary hover:underline">Columbus market page</Link>, review <Link href="/markets/columbus-oh/resources" className="text-brand-primary hover:underline">Columbus seller resources</Link>, or read <Link href="/resources/how-the-process-works/columbus-oh" className="text-brand-primary hover:underline">how the Columbus cash-offer process works</Link>.</p>
          <p className="text-gray-700 mb-4">The process is straightforward: tell us about the property, get a no-obligation written offer, and close with a title company if the number works. You do not need to repair, clean out, or host weeks of showings. Call <strong>888-274-5006</strong> if timing is urgent.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">FAQs</h2>
          {FAQ_ITEMS.map((item) => (<section key={item.question} className="mb-6"><h3 className="text-lg font-semibold text-brand-dark mb-2">{item.question}</h3><p className="text-gray-700">{item.answer}</p></section>))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Columbus OH Home?" sourcePage="/blog/columbus-oh-sell-house-fast-2026" />
      </article>
    </>
  );
}
