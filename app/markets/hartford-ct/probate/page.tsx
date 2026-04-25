/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { hartfordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/probate`;

export const metadata: Metadata = {
  title: 'Sell Probate Property Hartford CT — Cash Offer After Court Approval',
  description:
    'Need to sell a probate property in Hartford CT? We buy houses from estates for cash, as-is. Close quickly after Hartford Probate Court appointment.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does probate work in Hartford CT?',
    answer: 'When someone passes away owning property in Hartford, the estate typically goes through Hartford Probate Court. An executor (named in the will) or administrator (appointed by the court) is given fiduciary authority to manage and sell estate assets. Connecticut does not require separate court approval for real property sales — once appointed, the fiduciary can accept our offer and close. Source: Connecticut Probate Courts (ctprobate.gov).',
  },
  {
    question: 'How long does Hartford probate take?',
    answer: 'Standard Hartford Probate Court cases take 3-6 months for the fiduciary appointment. Complex or contested estates can take longer. Once you have your fiduciary letters, we can close in as few as 7 days.',
  },
  {
    question: 'Can I sell the house before probate is finished?',
    answer: 'You need the fiduciary appointment before you can legally sell. However, we can start the evaluation and have a written offer ready so you can close immediately once appointed. This is especially useful when carrying costs (taxes, insurance, utilities) are mounting.',
  },
  {
    question: 'What if there are liens or back taxes on the estate property?',
    answer: 'We buy properties with liens and back taxes. Outstanding obligations are typically settled at closing from the sale proceeds. Hartford property taxes, water/sewer liens, and any mortgages are all addressed through the title company.',
  },
];

export default function HartfordProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        hartfordLocalBusinessSchema,
        articleSchema('Sell a Probate Property in Hartford CT — Cash Offer', pageUrl, '2026-04-20'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Probate Property in Hartford CT — Cash Offer, Close Quickly
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Handling a Hartford estate? USA Home Buyers purchases probate properties for cash, as-is. Once you have your fiduciary appointment from Hartford Probate Court, we can close in 7-14 days. No repairs, no cleanout, no agent commissions. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Cash offer in 24 hours. Close in 7–14 days after probate appointment. No repairs, no cleanout.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Probate property? Written offer in 24 hours." sourcePage="/markets/hartford-ct/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Estate Property Through Hartford Probate Court</h2>
          <p className="text-gray-700 mb-4">
            Probate in Hartford County follows Connecticut's streamlined process — the state does not require court approval for the sale of estate real property. Once Hartford Probate Court appoints you as executor or administrator and issues your fiduciary letters, you have full authority to sell. Source: Connecticut Probate Courts (<a href="https://ctprobate.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">ctprobate.gov</a>).
          </p>
          <p className="text-gray-700 mb-4">
            Many estate properties in Hartford sit vacant during the probate period — racking up property taxes, insurance costs, and potential code violations from the City of Hartford. Pipes freeze in winter, yards get cited in summer. A quick cash sale after appointment eliminates these carrying costs and gets proceeds distributed to heirs faster.
          </p>
          <p className="text-gray-700">
            We buy estate properties in any condition across Hartford County — from Barry Square multi-families to Blue Hills colonials. Full of belongings, outdated systems, structural issues, liens — we handle it all.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate Sales in Hartford CT" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Hartford CT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/hartford-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/hartford-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/hartford-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/hartford-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/hartford-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/hartford-ct', label: '← Back to Hartford' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Hartford CT Estate Property?" sourcePage="/markets/hartford-ct/probate" />
      </div>
    </>
  );
}
