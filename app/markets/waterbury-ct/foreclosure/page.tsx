/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { waterburyLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/waterbury-ct/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Waterbury CT — Sell Before Law Day',
  description: "Facing foreclosure in Waterbury CT? Connecticut uses strict foreclosure — there's no auction, title passes to lender on Law Day. We buy houses fast for cash. Consult a CT attorney.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How does Connecticut strict foreclosure work?', answer: "Connecticut's strict foreclosure is unique nationally. The court sets a 'Law Day.' If the borrower doesn't pay off the mortgage by Law Day, title passes DIRECTLY to the lender — there's no auction, no redemption period after Law Day. Consult a Connecticut-licensed real estate attorney immediately if you're in foreclosure proceedings. USA Home Buyers can close in 7 days." },
  { question: 'Will selling stop the Connecticut foreclosure process?', answer: "Yes — a completed sale satisfies the mortgage and ends proceedings. The earlier you act before Law Day, the more time you have. Call 888-274-5006." },
  { question: 'How fast can I sell before foreclosure in Waterbury?', answer: "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours. We coordinate with your Connecticut attorney. Call 888-274-5006." },
  { question: 'What if I owe more than the house is worth?', answer: "A short sale may be possible. We have experience with short sales coordinated with Connecticut lenders. Call us and we'll discuss your options." },
];

const LINKS = [
  { href: '/markets/waterbury-ct/inherited-property', label: 'Inherited Property' },
  { href: '/markets/waterbury-ct/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/waterbury-ct/probate', label: 'Probate' },
  { href: '/markets/waterbury-ct/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/waterbury-ct/code-violations', label: 'Code Violations' },
  { href: '/markets/waterbury-ct', label: '← Back to Waterbury CT' },
];

export default function WaterburyForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, articleSchema('Stop Foreclosure in Waterbury CT', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Waterbury CT — Sell Before Law Day</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Connecticut strict foreclosure has no auction — title passes to the lender on Law Day. USA Home Buyers purchases houses from Waterbury homeowners facing foreclosure — written cash offer in 24 hours, close in 7–14 days. Consult a Connecticut-licensed attorney. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/waterbury-ct/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Connecticut Strict Foreclosure — The Law Day System</h2>
          <p className="text-gray-700 mb-4">Connecticut's strict foreclosure is the most unusual foreclosure system in the country. Unlike judicial foreclosure states where properties go to sheriff's sale, or non-judicial states where a trustee conducts a private auction, Connecticut courts simply set a date — Law Day. If the borrower doesn't pay off the mortgage by that date, title passes directly to the lender. No auction, no redemption period afterward. This creates urgency: once the foreclosure complaint is filed, every day matters. Consult a Connecticut-licensed real estate attorney for your specific situation and timeline.</p>
          <p className="text-gray-700 mb-4">A cash sale before Law Day is the most reliable way to end the foreclosure process, preserve equity, and avoid a title transfer to the lender. USA Home Buyers coordinates with your CT attorney, makes a written offer within 24 hours, and closes on your timeline.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Waterbury CT" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Waterbury CT Property?" sourcePage="/markets/waterbury-ct/foreclosure" />
      </div>
    </>
  );
}
