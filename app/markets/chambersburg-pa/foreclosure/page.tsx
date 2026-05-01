/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { chambersburgLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/chambersburg-pa/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Chambersburg PA — Sell Before Sheriff Sale',
  description: 'Facing foreclosure in Chambersburg PA? Pennsylvania judicial foreclosure runs through Franklin County Court of Common Pleas. We buy houses for cash before the sheriff sale.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell before foreclosure in Chambersburg PA?', answer: "USA Home Buyers closes in as few as 7 days. Pennsylvania judicial foreclosure runs through Franklin County Court of Common Pleas and typically takes 9–18 months from filing to sheriff's sale. Consult a Pennsylvania-licensed real estate attorney for your specific situation. Call 888-274-5006." },
  { question: 'Will selling stop the Pennsylvania foreclosure process?', answer: "Yes — a completed sale satisfies the mortgage and ends proceedings. You keep any equity above the mortgage payoff. The earlier you act, the more options you have." },
  { question: 'What if I owe more than the house is worth?', answer: "A short sale may be possible. We have experience coordinating short sales with lenders in Franklin County. Call us and we'll walk through your options honestly." },
  { question: 'Can I sell during Pennsylvania foreclosure proceedings?', answer: "Yes, up until the sheriff's sale. Even after a judgment of foreclosure, there may be time to negotiate a sale. Consult a Pennsylvania-licensed real estate attorney for your situation." },
];

const LINKS = [
  { href: '/markets/chambersburg-pa/inherited-property', label: 'Inherited Property' },
  { href: '/markets/chambersburg-pa/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/chambersburg-pa/probate', label: 'Probate' },
  { href: '/markets/chambersburg-pa/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/chambersburg-pa/code-violations', label: 'Code Violations' },
  { href: '/markets/chambersburg-pa', label: '← Back to Chambersburg PA' },
];

export default function ChambersburgForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, articleSchema('Stop Foreclosure in Chambersburg PA', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › Foreclosure</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Stop Foreclosure in Chambersburg PA — Sell Before the Sheriff Sale</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Pennsylvania judicial foreclosure takes 9–18 months through Franklin County Court of Common Pleas. USA Home Buyers purchases houses from Chambersburg homeowners facing foreclosure — written cash offer in 24 hours, close in 7–14 days. We cover all closing costs. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/chambersburg-pa/foreclosure" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Pennsylvania Judicial Foreclosure — Franklin County</h2>
          <p className="text-gray-700 mb-4">Pennsylvania requires judicial foreclosure. The lender files in Franklin County Court of Common Pleas. After judgment, a sheriff's sale is scheduled. The total timeline from filing to sheriff's sale is typically 9–18 months, though it varies by case and court calendar. Consult a Pennsylvania-licensed real estate attorney for advice specific to your situation. Source: Pennsylvania Rules of Civil Procedure.</p>
          <p className="text-gray-700 mb-4">A direct cash sale before the sheriff's sale preserves your equity and your credit. USA Home Buyers makes a written offer within 24 hours, coordinates with the title company, and closes on your timeline.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Chambersburg PA" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Chambersburg PA Property?" sourcePage="/markets/chambersburg-pa/foreclosure" />
      </div>
    </>
  );
}
