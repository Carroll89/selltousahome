/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wausauLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/wausau-wi/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Wausau WI — Sell Before Sheriff Sale',
  description: 'Facing foreclosure in Wausau WI? Wisconsin judicial foreclosure takes 12 months. We buy houses for cash before the sheriff sale. Close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell before foreclosure in Wausau?', answer: 'We close in as few as 7 days. Wisconsin judicial foreclosure (Ch. 846) goes through Marathon County Circuit Court. After judgment, there\'s a 6-12 month redemption period, then sheriff\'s sale. Total: ~12 months. Call 888-440-5250.' },
  { question: 'What is the foreclosure process in Marathon County?', answer: 'Wisconsin uses judicial foreclosure. Lender files in Marathon County Circuit Court. After judgment: 6-12 month redemption period, then sheriff\'s sale. Source: WI Statutes Ch. 846.' },
  { question: 'Will selling stop foreclosure?', answer: 'Yes — a completed sale satisfies the mortgage and ends proceedings. You keep any remaining equity.' },
  { question: 'What if I owe more than the house is worth?', answer: 'A short sale may be possible. We have experience with short sales in Marathon County.' },
];

export default function WausauForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[wausauLocalBusinessSchema, articleSchema('Stop Foreclosure in Wausau WI', pageUrl, '2026-04-20'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/wausau-wi" className="hover:text-white">Wausau WI</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Wausau WI — Sell Before the Sheriff Sale</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Wisconsin judicial foreclosure takes about 12 months. USA Home Buyers purchases houses from Wausau homeowners facing foreclosure — written cash offer in 24 hours, close in 7-14 days. We cover all closing costs. Serving Marathon County. Call 888-440-5250.</p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-440-5250 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/wausau-wi/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Judicial Foreclosure Works in Wisconsin</h2>
          <p className="text-gray-700 mb-4">Wisconsin requires judicial foreclosure — the lender must go through Marathon County Circuit Court. After filing, the court issues a judgment of foreclosure. Wisconsin law then provides a redemption period (typically 6-12 months) before the sheriff\'s sale. A direct cash sale before judgment preserves your equity and credit.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Wausau WI" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/wausau-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/wausau-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/wausau-wi/probate', label: 'Probate' }, { href: '/markets/wausau-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/wausau-wi/code-violations', label: 'Code Violations' }, { href: '/markets/wausau-wi', label: '← Back to Wausau' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Wausau WI Property?" sourcePage="/markets/wausau-wi/foreclosure" />
      </div>
    </>
  );
}
