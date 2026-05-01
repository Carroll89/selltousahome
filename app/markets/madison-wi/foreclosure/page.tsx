/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { madisonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/madison-wi/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Madison WI — Sell Before Sheriff Sale',
  description: 'Facing foreclosure in Madison WI? Wisconsin judicial foreclosure takes ~12 months through Dane County Circuit Court. We buy houses for cash before the sheriff sale. Close in 7 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell before foreclosure in Madison WI?', answer: "USA Home Buyers closes in as few as 7 days in Madison. Wisconsin judicial foreclosure (Ch. 846) runs through Dane County Circuit Court. After judgment, there's a redemption period of 6 months to 1 year, then sheriff's sale. A cash sale before judgment preserves your equity and your credit. Call 888-274-5006. Consult a Wisconsin-licensed real estate attorney for guidance specific to your case." },
  { question: 'Will selling stop the foreclosure in Wisconsin?', answer: "Yes — a completed sale satisfies the mortgage and ends proceedings. You keep any equity above your payoff amount. The earlier you act, the more options you have." },
  { question: 'What is the foreclosure process in Dane County?', answer: "Wisconsin requires judicial foreclosure. The lender files in Dane County Circuit Court. After judgment, Wisconsin law provides a redemption period — typically 6–12 months — then a sheriff's sale. Total timeline from filing: approximately 12 months. Source: Wisconsin Statutes Ch. 846. Consult a Wisconsin-licensed real estate attorney for your specific situation." },
  { question: 'What if I owe more than the house is worth?', answer: "A short sale may be possible. We have experience coordinating short sales with lenders in Madison. Call us and we'll tell you honestly whether a cash sale or short sale makes more sense." },
];

export default function MadisonForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, articleSchema('Stop Foreclosure in Madison WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/madison-wi" className="hover:text-white">Madison WI</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Madison WI — Sell Before the Sheriff Sale</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Wisconsin judicial foreclosure takes about 12 months through Dane County Circuit Court. USA Home Buyers purchases houses from Madison homeowners facing foreclosure — written cash offer in 24 hours, close in 7–14 days. We cover all closing costs. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/madison-wi/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Judicial Foreclosure Works in Wisconsin</h2>
          <p className="text-gray-700 mb-4">Wisconsin requires judicial foreclosure — the lender must file in Dane County Circuit Court. After the court enters a judgment of foreclosure, Wisconsin law provides a redemption period (typically 6 months to 1 year) before the sheriff's sale. A direct cash sale before judgment preserves your equity and credit. Consult a Wisconsin-licensed real estate attorney for advice specific to your situation and timeline. Source: <a href="https://docs.legis.wisconsin.gov/statutes/statutes/846" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Statutes Ch. 846</a>.</p>
          <p className="text-gray-700 mb-4">Madison homeowners facing pre-foreclosure face a dual challenge: the state capital's higher home values mean more equity at stake, while older Craftsman and Foursquare homes often have deferred maintenance that complicates a quick retail sale. A cash offer gets you out of the foreclosure process entirely — on your timeline, not the court's.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Madison WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/madison-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/madison-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/madison-wi/probate', label: 'Probate' }, { href: '/markets/madison-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/madison-wi/code-violations', label: 'Code Violations' }, { href: '/markets/madison-wi', label: '← Back to Madison WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Madison WI Property?" sourcePage="/markets/madison-wi/foreclosure" />
      </div>
    </>
  );
}
