import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Facing Foreclosure in Pennsylvania — Sell Before Sheriff Sale',
  description:
    'Behind on mortgage in Pennsylvania? PA is a judicial foreclosure state with 12-18 month timelines. Learn how to sell before the sheriff sale and protect your equity.',
  alternates: { canonical: 'https://selltousahome.com/guides/foreclosure' },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Pennsylvania?',
    answer:
      'Pennsylvania is a judicial foreclosure state. The process averages 12-18 months from the first missed payment to a completed sheriff sale. You have rights throughout this process, including a mandatory Act 91 notice and a 30-day right of redemption after the sheriff sale.',
  },
  {
    question: 'Can I sell my house if I\'m already in foreclosure?',
    answer:
      'Yes. As long as the sheriff sale has not been completed, you can sell the property and use the proceeds to pay off the mortgage and any arrears. A cash buyer can close in 7-14 days — fast enough to beat most foreclosure sale deadlines.',
  },
  {
    question: 'What is an Act 91 notice in Pennsylvania?',
    answer:
      'Act 91 is a Pennsylvania law requiring lenders to send homeowners a specific notice before filing foreclosure. The notice gives you 33 days to apply for assistance through the Pennsylvania Housing Finance Agency (PHFA). This is a mandatory step — foreclosure cannot proceed until Act 91 requirements are met.',
  },
  {
    question: 'What happens to my equity if I sell before foreclosure?',
    answer:
      'Any amount above what you owe on the mortgage (plus any arrears and closing costs) goes to you at closing. For example, if your home sells for $130,000 and you owe $90,000 including back payments, you walk away with $40,000 minus closing costs (which we cover). If a foreclosure sale completes, the lender takes what they\'re owed and any excess goes back to you — but the foreclosure also destroys your credit for 7 years.',
  },
  {
    question: 'Will selling before foreclosure affect my credit?',
    answer:
      'Less than a completed foreclosure. Missed payments will appear on your credit report regardless, but a pre-foreclosure sale (or even a short sale) has significantly less negative impact than a completed foreclosure. A foreclosure stays on your credit report for 7 years and can make it difficult to get financing, housing, or even employment.',
  },
];

const pageUrl = `${SITE_URL}/guides/foreclosure`;

export default function ForeclosureGuidePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Facing Foreclosure in Pennsylvania? Here\'s What You Can Do', pageUrl),
          faqSchema(FAQ_ITEMS),
        ]}
      />

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
              <Link href="/guides" className="hover:text-white">Guides</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Facing Foreclosure in Pennsylvania? Here&apos;s What You Can Do
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Pennsylvania is a judicial foreclosure state — the process takes 12-18 months, and you have rights
              throughout. If you have equity, selling before the sheriff sale protects it. Written cash offer
              in 24 hours.
            </p>
            <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-red-200 mb-1">Time-sensitive situation?</p>
              <p className="text-red-100">If you have a sheriff sale date scheduled, call us immediately at <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a>. We may be able to close before the sale date.</p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer</h2>
            <p className="text-gray-700 text-sm">
              If you&apos;re facing foreclosure in Pennsylvania, you likely have more time and more options than you
              think. PA&apos;s judicial foreclosure process takes 12-18 months minimum. As long as the sheriff sale
              hasn&apos;t completed, you can sell the property and keep any equity above what you owe. A cash buyer
              can close in 7-14 days — fast enough to beat most deadlines.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Pennsylvania Foreclosure Timeline — Month by Month
            </h2>
            <div className="space-y-3">
              {[
                { months: 'Month 1', label: 'First Missed Payment', desc: 'The clock starts. Your lender will contact you. Many lenders won\'t begin formal action until you\'re 3+ months behind.' },
                { months: 'Month 1-3', label: 'Grace Period / Loss Mitigation', desc: 'You\'re in default but the lender is legally required to explore loss mitigation options (forbearance, modification, repayment plan) before filing. This is your best window to negotiate directly with the lender.' },
                { months: 'Month 3-4', label: 'Act 91 Notice', desc: 'The lender must send an Act 91 notice before filing foreclosure. You have 33 days to apply for PHFA (PA Housing Finance Agency) assistance. The lender cannot file until this period expires.' },
                { months: 'Month 4-6', label: 'Complaint Filed in Court', desc: 'The lender files a foreclosure complaint in your county Court of Common Pleas. You must be personally served. You have 20 days to file an answer.' },
                { months: 'Month 6-12', label: 'Court Process', desc: 'If you file an answer, the case proceeds through the court system. Many PA counties have mandatory conciliation conferences where lenders must negotiate. This can add months to the timeline.' },
                { months: 'Month 9-15', label: 'Judgment & Sheriff Sale Scheduling', desc: 'If the lender wins judgment, they can schedule a sheriff sale. PA requires at least 30 days notice of the sale date. Sheriff sales are often postponed once or twice.' },
                { months: 'Month 12-18', label: 'Sheriff Sale', desc: 'The property is auctioned at sheriff sale. After the sale, you have a 30-day right of redemption in some PA counties. The buyer takes possession after the deed is recorded.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border border-gray-200 rounded-lg p-4">
                  <div className="text-xs font-bold text-brand-primary bg-blue-50 rounded px-2 py-1 shrink-0 w-24 text-center">{item.months}</div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.label}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Rights Under Pennsylvania Law
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Act 91 — Homeowner Emergency Mortgage Assistance</h3>
                <p className="text-gray-700 text-sm">
                  Under Pennsylvania&apos;s Act 91, your lender must send you an Act 91 notice before filing foreclosure.
                  The notice gives you 33 days to apply for PHFA&apos;s Homeowner&apos;s Emergency Mortgage Assistance Program
                  (HEMAP). HEMAP can provide temporary loans to help you catch up on payments. Your lender cannot
                  file for foreclosure until after this 33-day period expires.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Act 6 — Right to Cure Default</h3>
                <p className="text-gray-700 text-sm">
                  Under Act 6, you have the right to cure a residential mortgage default by paying all past-due amounts
                  plus costs. You can exercise this right up to one hour before the sheriff sale. This provides a
                  last-resort option if you can come up with the arrears.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                <h3 className="font-semibold text-brand-dark mb-2">Mandatory Conciliation</h3>
                <p className="text-gray-700 text-sm">
                  Many Pennsylvania counties (including Dauphin) require foreclosure conciliation conferences — court-supervised
                  meetings where the lender and borrower must attempt to reach a resolution before the case can proceed.
                  These often result in repayment plans, loan modifications, or short sale agreements.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Options When Behind on Payments
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Sell to a Cash Buyer',
                  tag: 'Best for speed & equity protection',
                  desc: 'If you have equity (home worth more than you owe), selling to a cash buyer is the fastest way to pay off the mortgage, stop the foreclosure, and keep your remaining equity. Close in 7-14 days.',
                  pros: 'Fast, certain, protects equity and credit',
                  tagColor: 'text-brand-primary',
                },
                {
                  title: 'Loan Modification',
                  tag: 'Best if you want to keep the home',
                  desc: 'Ask your lender to permanently change your loan terms — lower interest rate, extended term, or reduced principal. Requires income documentation and lender approval. Can take 3-6 months.',
                  pros: 'Keep the home; potentially lower payment',
                  tagColor: 'text-gray-600',
                },
                {
                  title: 'Forbearance Agreement',
                  tag: 'Temporary relief only',
                  desc: 'Your lender temporarily pauses or reduces payments. Missed payments are added to the end of the loan. Provides breathing room but doesn\'t solve the underlying problem if payments are unaffordable.',
                  pros: 'Buys time; easier to get than modification',
                  tagColor: 'text-gray-600',
                },
                {
                  title: 'Short Sale',
                  tag: 'If you owe more than the home is worth',
                  desc: 'The lender agrees to accept less than the full mortgage balance. You avoid foreclosure, but the lender must approve the sale and buyer. Takes 2-6 months with no guarantee of approval.',
                  pros: 'Avoids foreclosure; better for credit than sheriff sale',
                  tagColor: 'text-gray-600',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className={`font-bold mb-1 ${item.tagColor}`}>{item.title}</h3>
                  <p className="text-xs text-gray-500 mb-2 italic">{item.tag}</p>
                  <p className="text-gray-700 text-sm mb-2">{item.desc}</p>
                  <p className="text-xs font-semibold text-green-700">+ {item.pros}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              How Selling Before Foreclosure Protects You
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Protect your equity', desc: 'If your home is worth more than you owe, you keep the difference. A foreclosure sale doesn\'t always return excess proceeds efficiently.' },
                { title: 'Protect your credit', desc: 'A completed foreclosure stays on your credit report for 7 years. A pre-foreclosure sale has significantly less impact.' },
                { title: 'Stop the legal process', desc: 'Once the sale closes and the mortgage is paid off, the foreclosure case is dismissed. No more court dates, no more notices.' },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer Before Your Sheriff Sale"
            subheadline="We move fast. Written offer in 24 hours, close in 7-14 days."
            sourcePage="/guides/foreclosure"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions — Foreclosure in Pennsylvania"
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">PA Foreclosure Resources</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Housing Finance Agency (PHFA) — HEMAP</p>
                <p><a href="https://www.phfa.org/mhp/hemap.aspx" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">phfa.org</a> — Emergency mortgage assistance for PA homeowners</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Pennsylvania Legal Aid Network</p>
                <p><a href="https://palawhelp.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">palawhelp.org</a> — Free foreclosure legal help for qualifying PA residents</p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/behind-on-payments" className="text-brand-primary hover:underline">Behind on Payments Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/foreclosure" className="text-brand-primary hover:underline">Harrisburg Foreclosure (Dauphin County)</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
