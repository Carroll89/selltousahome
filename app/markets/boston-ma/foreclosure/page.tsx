/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bostonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Boston MA — Sell Before the Auction',
  description: 'Facing foreclosure in Boston MA? Massachusetts non-judicial foreclosure moves fast. We buy houses for cash before auction. Close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell before foreclosure in Boston?', answer: 'We can close in as few as 7 days when title is clear. Per Massachusetts General Laws Chapter 244, Massachusetts power-of-sale foreclosure includes statutory notice and sale-publication steps; overall timing varies by notice, cure, publication, contest, and lender schedule. Call 888-274-5006 immediately.' },
  { question: 'What is the foreclosure process in Suffolk County?', answer: 'Massachusetts uses non-judicial foreclosure by power of sale. The lender sends a right-to-cure notice (150 days), then publishes auction notice for 3 consecutive weeks. No court involvement unless the homeowner files to contest. Source: MGL Ch. 244; Massachusetts Trial Court (mass.gov/courts).' },
  { question: 'Will selling stop foreclosure?', answer: 'Yes — a completed sale satisfies the mortgage and ends foreclosure. Proceeds pay the outstanding balance. You keep remaining equity.' },
  { question: 'What if I owe more than the house is worth?', answer: 'A short sale may be possible — the lender agrees to accept less than payoff. We have experience with short sales in Suffolk County and can help you explore options.' },
];

export default function BostonForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, articleSchema('Stop Foreclosure in Boston MA', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Boston MA — Sell Your House Before the Auction</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Per Massachusetts General Laws Chapter 244, power-of-sale foreclosure can proceed through statutory notices and sale publication without a court case. USA Home Buyers purchases houses from Boston homeowners facing foreclosure. Written cash offer in 24 hours, close in 7-14 days when title is clear. We cover all closing costs. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/boston-ma/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Non-Judicial Foreclosure Works in Massachusetts</h2>
          <p className="text-gray-700 mb-4">
            Per Massachusetts General Laws Chapter 244, Massachusetts allows foreclosure by power of sale without court
            involvement — one of the faster non-judicial processes in the Northeast:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
            <li>Under Chapter 244, the lender sends a right-to-cure notice before acceleration or foreclosure.</li>
            <li>Per Chapter 244's sale-notice provisions, the lender publishes notice before the auction.</li>
            <li>Public auction is held at or near the property.</li>
            <li>If no bidder meets the minimum, the lender takes title.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Massachusetts foreclosure timing varies by notice, cure, publication, contest, and lender schedule. According to MGL Chapter 244,
            the power-of-sale process includes right-to-cure and sale-notice requirements; many cases run several
            months before auction. A completed direct sale before the auction can pay off the mortgage, preserve remaining equity,
            and avoid a completed foreclosure sale record.
          </p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Boston MA" />
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Boston MA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/boston-ma/inherited-property', label: 'Inherited Property' }, { href: '/markets/boston-ma/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/boston-ma/probate', label: 'Probate' }, { href: '/markets/boston-ma/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/boston-ma/code-violations', label: 'Code Violations' }, { href: '/markets/boston-ma', label: '← Back to Boston' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Boston MA Property?" sourcePage="/markets/boston-ma/foreclosure" />
      </div>
    </>
  );
}
