import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Selling to Us vs. Listing with a Real Estate Agent | PA',
  description:
    'Cash offer vs. MLS listing in Pennsylvania. Honest comparison of net proceeds, timelines, certainty, and which option makes sense based on your situation.',
  alternates: { canonical: `${SITE_URL}/compare/usa-home-buyers-vs-listing-with-agent` },
};

const COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours after walkthrough', traditional: '14-60 days on market' },
  { label: 'Closing timeline', cashBuyer: '7-14 days (or your schedule)', traditional: '45-60+ days after accepted offer' },
  { label: 'Sale certainty', cashBuyer: 'Guaranteed — written contract, no financing contingency', traditional: '15-20% of MLS listings fall through' },
  { label: 'Repairs required', cashBuyer: 'None — we buy as-is', traditional: 'Pre-listing repairs + inspection negotiations' },
  { label: 'Showings required', cashBuyer: 'None', traditional: 'Ongoing — disruptive and time-consuming' },
  { label: 'Agent commission (5-6%)', cashBuyer: '$0', traditional: '$12,500 on a $250K home' },
  { label: 'Seller closing costs (1-2%)', cashBuyer: '$0 — we cover all', traditional: '$2,500-$5,000' },
  { label: 'PA transfer tax (1% seller)', cashBuyer: '$0 — we cover', traditional: '$2,500 on a $250K home' },
  { label: 'Staging / prep costs', cashBuyer: '$0', traditional: '$500-$3,000' },
  { label: 'Carrying costs during listing', cashBuyer: '$0', traditional: '$1,200-$2,500/month' },
];

const FAQ_ITEMS = [
  {
    question: 'Will I get more money listing with an agent?',
    answer:
      'The headline sale price is usually higher on the MLS — but the net to you is often closer than it appears. On a $250,000 home listed at full price, deduct: 5.5% agent commission ($13,750), 1% PA transfer tax ($2,500), closing costs ($3,000), pre-listing repairs ($8,000-$15,000), and 90 days of carrying costs ($3,500). Your net might be $213,000-$219,000. A cash offer at 75% FMV ($187,500) with zero deductions is $187,500 net. The gap is real — but smaller than the headline numbers suggest.',
  },
  {
    question: 'When does listing with an agent make more sense?',
    answer:
      'Traditional listing makes the most sense when: (1) your home is move-in ready with no significant issues, (2) you can wait 60-90 days and carry the costs, (3) you\'re in a high-demand neighborhood where bidding wars are common (Camp Hill, Mechanicsburg), and (4) you don\'t have complicating factors like tenants, probate, or code violations.',
  },
  {
    question: 'When does selling to a cash buyer make more sense?',
    answer:
      'A cash sale makes more sense when: (1) your home needs significant repairs you can\'t or don\'t want to do, (2) you need to close fast (foreclosure, divorce, relocation deadline), (3) you have complicating factors (tenants, probate, liens), (4) you can\'t handle the disruption of showings, or (5) you want certainty — no risk of the deal falling through due to financing.',
  },
  {
    question: 'What is the real cost of agent commissions in Pennsylvania?',
    answer:
      'In Pennsylvania, standard seller agent commissions run 2.5-3%, and buyer agent commissions add another 2.5-3% — for a total of 5-6%. On a $200,000 sale, that\'s $10,000-$12,000. Additionally, Pennsylvania sellers pay a 1% transfer tax at closing. Combined, commissions and transfer tax alone represent 6-7% of your sale price before repairs, staging, or carrying costs.',
  },
  {
    question: 'What is the risk of a traditional MLS listing falling through?',
    answer:
      'Nationally, approximately 15-20% of pending home sales fall through before closing. The most common reasons: financing denial, inspection findings leading to renegotiation failure, and appraisal gaps. A cash offer eliminates financing contingencies — the most common single cause of deal failure. If certainty matters to you, a cash sale has a near-100% close rate once you accept an offer.',
  },
  {
    question: 'Can I get a cash offer and also list with an agent?',
    answer:
      'Yes. Getting a cash offer costs you nothing and commits you to nothing. Many sellers get our offer first to establish a floor — then decide whether to list. If the home sells on the MLS for enough more to justify the time and costs, great. If not, you have our offer waiting. We don\'t ask for exclusivity or a holding fee.',
  },
];

const pageUrl = `${SITE_URL}/compare/usa-home-buyers-vs-listing-with-agent`;

export default function VsListingWithAgentPage() {
  return (
    <>
      <SchemaMarkup schema={[
        articleSchema('Selling to USA Home Buyers vs. Listing with a Real Estate Agent', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/" className="hover:text-white">USA Home Buyers</Link> › Compare
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Cash Offer vs. Listing with a Real Estate Agent — An Honest Comparison
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              The MLS listing will net more in many situations. In others, a cash sale nets more after you
              account for all the real costs. Here&apos;s the honest math — and a framework for deciding.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Get Our Cash Offer First: {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/compare/usa-home-buyers-vs-listing-with-agent" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">We&apos;ll tell you when a traditional sale is better</h2>
            <p className="text-gray-700 text-sm">
              If your home is in excellent condition, in a hot neighborhood, and you can wait 60-90 days,
              the MLS will likely net you more. We&apos;re not going to pretend otherwise. What we can offer
              is certainty, speed, and the elimination of all the costs and risks that erode a traditional
              sale — which matters a lot depending on your situation.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Real Cost of Listing — PA Specifics</h2>
            <p className="text-gray-700 mb-4">
              Pennsylvania sellers face costs that reduce their net significantly from the headline MLS price:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="px-4 py-3 text-left">Cost Item</th>
                    <th className="px-4 py-3 text-left">Typical Amount (on a $200K sale)</th>
                    <th className="px-4 py-3 text-left">With USA Home Buyers</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Agent commission (5-6%)', '$10,000–$12,000', '$0'],
                    ['PA transfer tax (1% seller)', '$2,000', '$0 — we cover'],
                    ['Title / closing costs', '$2,000–$3,000', '$0 — we cover'],
                    ['Pre-listing repairs', '$5,000–$20,000', '$0 — we buy as-is'],
                    ['Staging / cleaning', '$500–$2,000', '$0'],
                    ['Carrying costs (3 months)', '$3,000–$5,000', '$0 — fast close'],
                    ['Inspection concessions', '$1,000–$8,000', '$0 — no inspection renegotiation'],
                  ].map(([item, traditional, cash], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 text-brand-dark border-b border-gray-100">{item}</td>
                      <td className="py-3 px-4 text-red-600 font-medium border-b border-gray-100">{traditional}</td>
                      <td className="py-3 px-4 text-green-700 font-medium border-b border-gray-100">{cash}</td>
                    </tr>
                  ))}
                  <tr className="bg-brand-light">
                    <td className="py-3 px-4 font-bold text-brand-dark">Total deductions</td>
                    <td className="py-3 px-4 font-bold text-red-600">$23,500–$50,000+</td>
                    <td className="py-3 px-4 font-bold text-green-700">$0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500">
              Amounts vary by property condition, neighborhood, and agent. On a $200,000 home needing significant
              repairs, traditional sale deductions of $35,000+ are common. On a move-in ready home in a fast market,
              deductions may be lower. Always model your specific situation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Net Proceeds Example — Side by Side</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-700 mb-1 text-sm">Traditional MLS Listing</h3>
                <p className="text-xs text-gray-500 mb-3">$200,000 home needing $15K in repairs</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>List/sale price</span><span className="font-bold">$200,000</span></div>
                  <div className="flex justify-between text-red-600"><span>Agent commission (5.5%)</span><span>−$11,000</span></div>
                  <div className="flex justify-between text-red-600"><span>PA transfer tax (1%)</span><span>−$2,000</span></div>
                  <div className="flex justify-between text-red-600"><span>Closing costs</span><span>−$2,500</span></div>
                  <div className="flex justify-between text-red-600"><span>Pre-listing repairs</span><span>−$15,000</span></div>
                  <div className="flex justify-between text-red-600"><span>Carrying costs (75 days)</span><span>−$3,750</span></div>
                  <div className="flex justify-between text-red-600"><span>Inspection concessions</span><span>−$2,000</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-brand-dark">
                    <span>Net to seller</span><span>$163,750</span>
                  </div>
                  <div className="text-xs text-gray-500 pt-1">Timeline: 90+ days · 15-20% fall-through risk</div>
                </div>
              </div>
              <div className="bg-brand-light rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-1 text-sm">USA Home Buyers Cash Offer</h3>
                <p className="text-xs text-gray-500 mb-3">Same $200,000 home</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>Cash offer (75% FMV)</span><span className="font-bold">$150,000</span></div>
                  <div className="flex justify-between text-gray-500"><span>Agent commission</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Transfer tax</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Closing costs</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Repairs</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Carrying costs</span><span>$0</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-brand-dark">
                    <span>Net to seller</span><span>$150,000</span>
                  </div>
                  <div className="text-xs text-gray-500 pt-1">Timeline: 7-14 days · Near-100% close rate</div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-700">
              <strong>The gap in this example: $13,750</strong> — about $183/day of waiting time.
              Whether that&apos;s worth 75+ days depends entirely on your situation. If you can&apos;t afford
              repairs upfront, can&apos;t wait, or need certainty — the cash sale likely makes more sense.
              If your home is move-in ready and you can wait comfortably, listing usually nets more.
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Side-by-Side Comparison</h2>
            <ComparisonTable rows={COMPARISON_ROWS} />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">A Simple Decision Framework</h2>
            <div className="space-y-3">
              {[
                {
                  scenario: 'Your home needs significant repairs',
                  answer: 'Cash sale likely makes sense. Upfront repair costs reduce your net, and lender-required repairs can kill a traditional deal mid-stream.',
                  rec: 'Cash sale',
                },
                {
                  scenario: 'You need to close in under 30 days',
                  answer: 'Cash sale is the only realistic option. Traditional sales can\'t close this fast reliably.',
                  rec: 'Cash sale',
                },
                {
                  scenario: 'You\'re facing foreclosure, divorce, or probate',
                  answer: 'Cash sale strongly preferred. Complicating factors make traditional listings harder and slower to execute.',
                  rec: 'Cash sale',
                },
                {
                  scenario: 'Your home is move-in ready in a competitive neighborhood',
                  answer: 'Traditional listing likely nets more. Strong demand + no repairs = traditional sale advantage.',
                  rec: 'Consider listing',
                },
                {
                  scenario: 'You need certainty more than maximum proceeds',
                  answer: 'Cash sale eliminates the 15-20% fall-through risk. If you can\'t afford a deal to fall apart, certainty has real value.',
                  rec: 'Cash sale',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border border-gray-200 rounded-lg p-4">
                  <div className={`shrink-0 text-xs font-bold px-2 py-1 rounded self-start ${item.rec === 'Cash sale' ? 'bg-brand-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {item.rec}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm mb-1">{item.scenario}</p>
                    <p className="text-xs text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — No Commitment Required"
            subheadline="Know your floor before you decide. Written offer in 24 hours."
            sourcePage="/compare/usa-home-buyers-vs-listing-with-agent"
          />

          <FAQSection items={FAQ_ITEMS} heading="Cash Offer vs. Agent Listing — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/compare/usa-home-buyers-vs-opendoor" className="text-brand-primary hover:underline">USA Home Buyers vs. Opendoor</Link>{' '}
              ·{' '}
              <Link href="/compare/usa-home-buyers-vs-homevestors" className="text-brand-primary hover:underline">USA Home Buyers vs. HomeVestors</Link>{' '}
              ·{' '}
              <Link href="/resources/cash-offer-vs-listing" className="text-brand-primary hover:underline">Full Cash Offer vs. MLS Analysis</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
