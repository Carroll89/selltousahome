import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'How Fast Can I Sell My House for Cash? Real Timelines Explained',
  description:
    'A cash home sale can close in as little as 7 days. Here\'s what the actual timeline looks like, what causes delays, and how to move as fast as possible.',
  alternates: { canonical: `${SITE_URL}/resources/how-fast-can-i-sell-for-cash` },
};

const FAQ_ITEMS = [
  {
    question: 'What is the fastest possible cash home sale?',
    answer:
      'The absolute fastest: 3-5 business days, if the title search comes back clean, you\'re current on taxes, and all paperwork is in order. Most cash sales close in 7-14 days. If something unexpected comes up in title — old liens, estate issues, unclear ownership — it can take longer, but these are resolvable.',
  },
  {
    question: 'Can I choose my closing date with a cash buyer?',
    answer:
      'Yes. Cash buyers don\'t have financing contingencies, so closing timing is flexible. You can choose a date that works for you — whether that\'s as fast as possible or a few weeks out to give you time to move.',
  },
  {
    question: 'What slows down a cash home sale?',
    answer:
      'The most common delays: title issues (old liens, probate complications, unclear ownership), estate/legal complications that require court action, and buyer due diligence if the property has unusual issues. These are typically resolvable — they just add days or weeks.',
  },
  {
    question: 'Do I need a home inspection for a cash sale?',
    answer:
      'Most cash buyers will do their own walkthrough or inspection as part of their due diligence — but this is typically faster than a traditional buyer\'s inspection process, and it\'s for their information rather than a negotiation tool.',
  },
  {
    question: 'How does closing work in a cash sale?',
    answer:
      'A licensed title company handles the closing. They do a title search, prepare documents, collect and distribute funds. You sign at a title office (or sometimes remotely). The whole process takes about an hour. You receive funds by wire or check the same day.',
  },
];

const pageUrl = `${SITE_URL}/resources/how-fast-can-i-sell-for-cash`;

export default function HowFastCashSalePage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema('How Fast Can I Sell My House for Cash?', pageUrl), faqSchema(FAQ_ITEMS)]} />

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
              <Link href="/resources" className="hover:text-white">Resources</Link> › How Fast Can I Sell for Cash?
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              How Fast Can I Sell My House for Cash?
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Most cash sales close in 7-14 days. Some close in less. Here&apos;s exactly what happens, when,
              and what can speed things up or slow them down.
            </p>
            <div className="bg-blue-800/50 border border-blue-600/30 rounded-lg p-4 text-sm">
              <p className="font-semibold text-blue-200 mb-1">Have a hard deadline?</p>
              <p className="text-blue-100">Sheriff sale, estate deadline, or relocation date? Call us at <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a> and we&apos;ll tell you immediately if we can hit it.</p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/resources/how-fast-can-i-sell-for-cash" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer</h2>
            <p className="text-gray-700 text-sm">
              A cash sale can close in 7 days if everything is clean. Most close in 7-14 days. The main
              variable is the title search — a clean title speeds things up, while old liens or estate
              complications add time (though they&apos;re usually resolvable). You pick the closing date.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Cash Sale Timeline — Day by Day</h2>
            <div className="space-y-3">
              {[
                {
                  day: 'Day 1',
                  label: 'Initial Contact',
                  desc: 'You call or submit the form. We ask basic questions about the property — address, condition, situation. This takes 10-15 minutes.',
                },
                {
                  day: 'Day 1-2',
                  label: 'We Research the Property',
                  desc: 'We pull comparable sales, tax records, and property data. If needed, we schedule a quick walkthrough (typically 20-30 minutes).',
                },
                {
                  day: 'Day 1-2',
                  label: 'Written Cash Offer',
                  desc: 'We send you a written offer with our math. No obligation. You can accept, counter, or decline.',
                },
                {
                  day: 'Day 2-4',
                  label: 'Contract Signed',
                  desc: 'If you accept, we send a purchase agreement. You can have an attorney review it. Once both parties sign, the title company opens escrow.',
                },
                {
                  day: 'Day 3-7',
                  label: 'Title Search',
                  desc: 'The title company searches public records to confirm ownership, check for liens, and verify taxes are current. This is the main variable in timing.',
                },
                {
                  day: 'Day 5-10',
                  label: 'Title Insurance & Documents Prepared',
                  desc: 'Title company prepares the deed, closing disclosure, and other transfer documents.',
                },
                {
                  day: 'Day 7-14',
                  label: 'Closing Day',
                  desc: 'You sign at the title company (or remotely). Takes about an hour. Funds are wired to you the same day.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border border-gray-200 rounded-lg p-4">
                  <div className="text-xs font-bold text-brand-primary bg-blue-50 rounded px-2 py-1 shrink-0 w-20 text-center">{item.day}</div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.label}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Traditional Sale vs. Cash Sale: Timeline Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left p-3">Stage</th>
                    <th className="text-left p-3">Cash Sale</th>
                    <th className="text-left p-3">Traditional MLS Sale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { stage: 'Getting an offer', cash: '1-2 days', trad: '14-60+ days on market' },
                    { stage: 'Financing contingency', cash: 'None', trad: '21-30 days for lender approval' },
                    { stage: 'Inspection period', cash: '3-7 days (buyer due diligence)', trad: '10-14 days + renegotiation' },
                    { stage: 'Appraisal', cash: 'Not required', trad: '2-3 weeks, can kill the deal' },
                    { stage: 'Title & closing', cash: '3-7 days', trad: '2-3 weeks after all contingencies clear' },
                    { stage: 'Total timeline', cash: '7-14 days', trad: '45-90+ days' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 font-medium text-brand-dark border-b border-gray-100">{row.stage}</td>
                      <td className="p-3 text-green-700 font-semibold border-b border-gray-100">{row.cash}</td>
                      <td className="p-3 text-gray-600 border-b border-gray-100">{row.trad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What Can Slow Down a Cash Sale</h2>
            <p className="text-gray-700 mb-4">
              Most delays in cash sales come from title issues, not the buyer or seller:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  issue: 'Old liens or judgments',
                  impact: 'Add 1-3 weeks',
                  detail: 'Tax liens, contractor liens, or court judgments on the property must be paid off or resolved before the title company will insure the transfer.',
                },
                {
                  issue: 'Estate / probate complications',
                  impact: 'Add 2-6 weeks',
                  detail: 'If the property is part of an estate and Letters Testamentary haven\'t been issued yet, the executor can\'t legally sign the deed. An experienced title attorney can often expedite this.',
                },
                {
                  issue: 'Unknown ownership issues',
                  impact: 'Varies',
                  detail: 'Property transferred without proper deeds in the past, missing heir interests, or deed errors can complicate the title search. Usually resolvable — just takes time.',
                },
                {
                  issue: 'Back taxes',
                  impact: 'Add 1-2 weeks',
                  detail: 'Delinquent property taxes are paid from sale proceeds at closing. The delay is getting the exact payoff amount from the taxing authority.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-brand-dark text-sm">{item.issue}</p>
                    <span className="text-xs text-orange-600 font-medium">{item.impact}</span>
                  </div>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              These issues are common and usually resolvable. They add time, but they don&apos;t necessarily kill the sale.
              We work with experienced title companies in PA who handle these situations regularly.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Find Out How Fast We Can Close on Your Property"
            subheadline="Tell us about your situation and we'll give you a realistic timeline."
            sourcePage="/resources/how-fast-can-i-sell-for-cash"
          />

          <FAQSection items={FAQ_ITEMS} heading="Common Questions About Cash Sale Speed" />
        </article>
      </div>
    </>
  );
}
