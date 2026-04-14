/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { lancasterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Lancaster PA',
  description:
    'Selling a house during divorce in Lancaster PA? We buy as-is, close fast, split proceeds cleanly. Cash offer in 24 hours. No agent drama, no repair arguments.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/divorce-sale` },
};

const articleSch = articleSchema(
  'How to Sell Your House During Divorce in Lancaster PA',
  `${SITE_URL}/markets/lancaster-pa/divorce-sale`,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'Do both spouses have to agree to sell the house during divorce in Pennsylvania?',
    answer: 'In most cases, yes — both spouses must agree to a voluntary sale if the home is marital property. Under Pennsylvania\'s Divorce Code (23 Pa. C.S. § 3501), marital property is subject to equitable distribution. Lancaster County Court of Common Pleas (50 N. Duke St., Lancaster) handles divorce proceedings. A family law attorney can advise on your specific situation, including whether a court order can compel a sale if one party objects.',
  },
  {
    question: 'How does a cash home sale simplify divorce proceedings in Lancaster?',
    answer: 'A cash sale eliminates most of the variables that complicate selling during a divorce. No repair negotiations between parties, no agent-managed showings with scheduling conflicts, no 45-60 day wait for a mortgage-contingent buyer. We provide one written number — price, closing date, terms. Both parties review it, sign it, and close. Proceeds are divided at the closing table per the divorce agreement.',
  },
  {
    question: 'How fast can we close on a Lancaster divorce sale?',
    answer: 'As fast as 7-14 days once both parties agree and the property title is clear. If there\'s a court order or divorce agreement in progress, we coordinate with the attorneys. Our goal is to fit your legal timeline, not ours.',
  },
  {
    question: 'What if one spouse lives in the house and the other doesn\'t?',
    answer: 'Common situation. We work with both parties — we can communicate with each through their attorneys if needed. The spouse in the home doesn\'t need to do any cleanup or repairs. We buy as-is. The other spouse doesn\'t need to be present for anything beyond signing the purchase agreement and attending closing.',
  },
  {
    question: 'What happens if the house has a mortgage and we\'re divorcing?',
    answer: 'The mortgage gets paid off at closing from the sale proceeds. Any remaining equity is then divided between parties per your divorce agreement or court order. If the home is underwater (owed more than it\'s worth), that\'s a short sale situation requiring lender approval — call us early, as that takes more time.',
  },
  {
    question: 'Do you work with divorce attorneys in Lancaster County?',
    answer: 'Yes. We\'re familiar with Lancaster County Court of Common Pleas procedures and work alongside family law attorneys regularly. We can provide documentation for the court, adjust closing timing to align with settlement agreements, and communicate with counsel directly when parties prefer it.',
  },
];

export default function LancasterDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>Divorce Sale</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Selling a House During Divorce in Lancaster PA
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Dividing a house in a Lancaster divorce is one of the most contentious parts of any settlement.
          Repair disagreements, showing schedules, pricing conflicts — a traditional listing adds months of
          friction to an already difficult process. A cash sale to USA Home Buyers removes most of those
          variables. One written number, one closing date, proceeds split at the table.
        </p>

        <CashOfferForm variant="inline" headline="Get a Clean Cash Offer for Your Lancaster Home" sourcePage="/markets/lancaster-pa" />

        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Cash Sales Work Better in Divorce Situations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'No repair negotiations', desc: 'Cash buyers take properties as-is. No argument about who pays for the roof or the HVAC. The house sells in its current condition.' },
              { title: 'Fixed closing timeline', desc: 'We close in 7-14 days. No mortgage contingency waiting period, no buyer financing fallthrough, no 60-day uncertainty.' },
              { title: 'One written number', desc: 'Both parties see the same offer. No agent commissions muddying the net. No post-inspection renegotiation after both signatures are on the contract.' },
              { title: 'Attorneys stay in control', desc: 'We work with your legal team. The purchase agreement, closing date, and fund distribution all align with your divorce agreement terms.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-light rounded-xl p-5">
                <p className="font-bold text-brand-dark mb-2">{item.title}</p>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Pennsylvania Divorce and Property Division</h2>
          <p className="text-gray-700 mb-3">
            Pennsylvania divides marital property under equitable distribution (23 Pa. C.S. § 3501) —
            not necessarily 50/50, but what the court determines is fair based on factors including length of marriage,
            contributions of each party, and economic circumstances. Lancaster County Court of Common Pleas
            (50 N. Duke St., Lancaster, 717-299-8000) handles divorce proceedings.
          </p>
          <p className="text-gray-700 mb-3">
            The marital home is typically the largest single asset to divide. A clean cash sale with a defined
            closing date removes the asset from contention — proceeds replace a complicated piece of jointly held property
            with liquid funds that are easier to divide.
          </p>
          <p className="text-sm text-gray-500">
            This page provides general information, not legal advice. Consult a Lancaster County family law
            attorney for guidance on your specific situation.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Divorce Sales in Lancaster PA" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA</Link>
          <Link href="/guides/divorce-sale" className="text-brand-primary hover:underline">Full Divorce Sale Guide →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Get One Clean Number for Your Lancaster Home" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
