/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { greenBayLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Green Bay WI — Sell Before Brown County Sheriff Sale',
  description: "Facing foreclosure in Green Bay WI? Wisconsin judicial foreclosure takes ~12 months through Brown County Circuit Court. We buy houses for cash before the sheriff's sale.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "How fast can I sell before foreclosure in Green Bay WI?", answer: "USA Home Buyers closes in as few as 7 days. Wisconsin judicial foreclosure (Ch. 846) runs through Brown County Circuit Court. After judgment, there's typically a 6-month to 1-year redemption period, then a sheriff's sale. A cash sale before judgment preserves your equity and credit. Consult a Wisconsin-licensed real estate attorney for your specific situation. Call 888-274-5006." },
  { question: "Will selling stop the Wisconsin foreclosure process?", answer: "Yes — a completed sale satisfies the mortgage and ends proceedings. You keep any equity above your payoff amount. Act early to maximize your options." },
  { question: "What is the foreclosure process in Brown County?", answer: "Wisconsin requires judicial foreclosure through Brown County Circuit Court. After judgment, there's a redemption period (6 months to 1 year), then a sheriff's sale. Total timeline from filing: about 12 months. Consult a Wisconsin-licensed real estate attorney for your situation. Source: Wisconsin Statutes Ch. 846." },
  { question: "What if I owe more than the house is worth?", answer: "A short sale may be possible. We have experience coordinating short sales with lenders in Brown County. Call us and we'll walk through your options." },
];

const LINKS = [
  { href: '/markets/green-bay-wi/inherited-property', label: 'Inherited Property' },
  { href: '/markets/green-bay-wi/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/green-bay-wi/probate', label: 'Probate' },
  { href: '/markets/green-bay-wi/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/green-bay-wi/code-violations', label: 'Code Violations' },
  { href: '/markets/green-bay-wi', label: '← Back to Green Bay WI' },
];

export default function GreenBayForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('Stop Foreclosure in Green Bay WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Green Bay WI — Sell Before the Sheriff Sale</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Wisconsin judicial foreclosure takes about 12 months through Brown County Circuit Court. USA Home Buyers purchases houses from Green Bay homeowners facing foreclosure — written cash offer in 24 hours, close in 7–14 days. We cover all closing costs. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/green-bay-wi/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Judicial Foreclosure Works in Brown County WI</h2>
          <p className="text-gray-700 mb-4">Wisconsin requires judicial foreclosure — the lender must file in Brown County Circuit Court. After the court enters a judgment, Wisconsin provides a redemption period (typically 6 months to 1 year) before the sheriff's sale. A direct cash sale before judgment preserves your equity and credit. Consult a Wisconsin-licensed real estate attorney for advice specific to your situation and timeline. Source: <a href="https://docs.legis.wisconsin.gov/statutes/statutes/846" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Statutes Ch. 846</a>.</p>
          <p className="text-gray-700 mb-4">Green Bay's manufacturing-heritage housing stock — Ranch homes and Cape Cods from the 1950s–1970s — often carries deferred maintenance that complicates a quick retail sale. A cash offer gets you out before the Brown County court's timeline forces the decision.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Green Bay WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Green Bay WI Property?" sourcePage="/markets/green-bay-wi/foreclosure" />
      </div>
    </>
  );
}
