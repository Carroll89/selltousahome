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
  { question: 'How fast can I sell before foreclosure in Boston?', answer: 'We can close in as few as 7 days. Massachusetts non-judicial foreclosure (power of sale under MGL Ch. 244) allows lenders to foreclose without court action. After the 150-day right-to-cure period, the lender publishes sale notice for 3 weeks, then auctions. Total timeline: 4-7 months from default. Call 888-440-5250 immediately.' },
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
              <p className="text-white text-sm leading-relaxed">Massachusetts non-judicial foreclosure can complete in 4-7 months — no court required. USA Home Buyers purchases houses from Boston homeowners facing foreclosure. Written cash offer in 24 hours, close in 7-14 days. We cover all closing costs. Call 888-440-5250.</p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-440-5250 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/boston-ma/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Non-Judicial Foreclosure Works in Massachusetts</h2>
          <p className="text-gray-700 mb-4">Massachusetts foreclosure by power of sale (MGL Ch. 244) proceeds without court involvement:</p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
            <li>Lender sends a right-to-cure notice — you have 150 days to cure the default.</li>
            <li>If not cured, lender publishes a notice of sale in a local newspaper for 3 consecutive weeks.</li>
            <li>Public auction is held at or near the property.</li>
            <li>If no bidder meets the minimum, the lender takes title.</li>
          </ol>
          <p className="text-gray-700">Total timeline from default to auction: typically 4-7 months. A direct cash sale before the auction preserves your equity and avoids a foreclosure on your credit for seven years.</p>
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
