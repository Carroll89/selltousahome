/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { hartfordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Hartford CT — Fast Cash Sale',
  description:
    'Going through a divorce in Hartford CT? We buy houses for cash. One offer, one closing, clean split. Close in 7-14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell the house during a divorce in Hartford CT?',
    answer: 'Yes — with either mutual agreement or a court order from Hartford Superior Court Family Division. Both spouses must sign at closing, or one spouse can sell if authorized by the court. A cash sale simplifies the process because there\'s no financing contingency, no appraisal delay, and a clear number both sides can work with.',
  },
  {
    question: 'How fast can we close?',
    answer: 'As fast as 7 days once both parties agree to accept the offer. We send a written cash offer within 24 hours. Proceeds are split per your agreement or court order at the closing table.',
  },
  {
    question: 'What if my spouse won\'t agree to sell?',
    answer: 'If you can\'t reach agreement, your attorney can petition Hartford Superior Court Family Division for a court-ordered sale. We\'ve bought properties under court order before — the process is straightforward once the order is in place.',
  },
  {
    question: 'Do both names need to be on the deed?',
    answer: 'We buy regardless of how title is held — joint tenants, tenants in common, one name only. Your divorce attorney can advise on what signatures are needed at closing.',
  },
];

export default function HartfordDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        hartfordLocalBusinessSchema,
        articleSchema('Sell Your House During Divorce in Hartford CT', pageUrl, '2026-04-20'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House During Divorce in Hartford CT — One Offer, Clean Split
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Divorce requires selling the house? USA Home Buyers makes one cash offer, sets one closing date, and the proceeds split cleanly through your attorneys. No listing, no showings, no drawn-out negotiation. Close in 7-14 days in Hartford CT. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              One cash offer. One closing date. Clean split. No drama.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="One number. Clean split. Close in days." sourcePage="/markets/hartford-ct/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a House During Divorce in Hartford CT</h2>
          <p className="text-gray-700 mb-4">
            Divorce is already hard enough without a six-month listing process on top of it. When the court or your agreement requires selling the marital home, a direct cash sale removes the biggest friction point — no repairs, no staging, no open houses, no waiting for a buyer's financing to come through.
          </p>
          <p className="text-gray-700 mb-4">
            We deal with Hartford Superior Court Family Division cases regularly. Whether the sale is by mutual agreement or court order, the process is the same: we make one written offer within 24 hours, both parties review it with their attorneys, and we close on a date that works. Proceeds split per your agreement or court order at the closing table.
          </p>
          <p className="text-gray-700">
            This works for any property in Hartford County — from Frog Hollow multi-families to West Hartford single-families. Condition doesn't matter. Tenants in place? Fine. Deferred maintenance? Expected. We buy as-is.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Sale in Hartford CT" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Hartford CT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/hartford-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/hartford-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/hartford-ct/probate', label: 'Probate' },
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

        <CashOfferForm variant="footer" headline="Ready to Sell Your Hartford CT Property?" sourcePage="/markets/hartford-ct/divorce-sale" />
      </div>
    </>
  );
}
