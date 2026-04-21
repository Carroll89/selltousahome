/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { hartfordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Hartford CT — Cash Offer, No Repairs',
  description:
    'Inherited a house in Hartford CT? We buy inherited properties for cash, as-is. No repairs, no cleaning. Close in 7-14 days after probate.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How do I sell an inherited house in Hartford CT?',
    answer: 'If the property must go through probate, you\'ll need a fiduciary appointment from Hartford Probate Court before selling. Once appointed, you can accept our cash offer and close. If the property was in a trust or joint tenancy, probate may not be required. We work with both situations regularly.',
  },
  {
    question: 'How long does probate take in Hartford CT?',
    answer: 'Hartford Probate Court typically takes 3-6 months for standard estates, though contested or complex estates can take longer. Connecticut does not require court approval for real property sales by an executor or administrator — you just need the fiduciary appointment. Source: Connecticut Probate Courts (ctprobate.gov).',
  },
  {
    question: 'Do I need to clean out the house before selling?',
    answer: 'No. We buy houses in any condition — full of belongings, deferred maintenance, outdated systems. Many inherited Hartford homes have decades of accumulated contents. We handle everything after closing.',
  },
  {
    question: 'What if there are multiple heirs?',
    answer: 'All heirs or the court-appointed fiduciary must agree to the sale. We\'ve closed many multi-heir sales in Hartford County — our process is designed to be clean and transparent so all parties see the same numbers.',
  },
];

export default function HartfordInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        hartfordLocalBusinessSchema,
        articleSchema('Sell an Inherited House in Hartford CT — Cash Offer, No Repairs', pageUrl, '2026-04-20'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in Hartford CT — Cash Offer, No Repairs
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases inherited houses in Hartford CT — after probate through Hartford Probate Court or via trust/joint tenancy. Cash offer in 24 hours. Close in 7-14 days. Any condition, no repairs, no cleanout. We cover all closing costs. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no cleanout, no agent fees.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Inherited property? Written offer in 24 hours." sourcePage="/markets/hartford-ct/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Inherited Property in Hartford CT</h2>
          <p className="text-gray-700 mb-4">
            Inheriting a house in Hartford often means inheriting problems — deferred maintenance on a home built before 1940, lead paint, an aging boiler, property taxes piling up while probate moves through Hartford Probate Court. If you live out of state or simply don't want to manage a renovation and listing process, a direct cash sale gets you proceeds without the headaches.
          </p>
          <p className="text-gray-700 mb-4">
            Connecticut does not require court approval for the sale of real property by an executor or administrator — once you have your fiduciary appointment from Hartford Probate Court, you're authorized to sell. Source: Connecticut Probate Courts (<a href="https://ctprobate.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">ctprobate.gov</a>).
          </p>
          <p className="text-gray-700">
            We regularly close inherited property sales across Hartford County — from Frog Hollow triple-deckers to Blue Hills colonials to West End Victorians. The condition of the home doesn't matter. Full of belongings, outdated systems, structural issues — we buy as-is.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Hartford CT" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Hartford CT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/hartford-ct/probate', label: 'Probate Sale' },
              { href: '/markets/hartford-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/hartford-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/hartford-ct/fire-damage', label: 'Fire Damage' },
              { href: '/markets/hartford-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/hartford-ct', label: '← Back to Hartford' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Hartford CT Property?" sourcePage="/markets/hartford-ct/inherited-property" />
      </div>
    </>
  );
}
