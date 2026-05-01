/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { waterburyLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/waterbury-ct/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Waterbury CT — Sell During or After Probate',
  description: 'Need to sell a house through Waterbury Probate Court (49 Leavenworth St.)? We buy probate properties as-is, coordinate with CT estate attorneys, close on your timeline.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Where is Waterbury Probate Court?', answer: "Waterbury Probate Court: 49 Leavenworth Street, Waterbury CT 06702, phone (203) 755-1127. Confirmed via ctprobate.gov. This is the correct address — NOT City Hall at 235 Grand Street. Verify current information before relying on any specific contact details." },
  { question: 'Can I sell the house before Connecticut probate is complete?', answer: "You can accept an offer during probate. The deed transfer requires executor authorization and typically Letters Testamentary. Connecticut is an attorney-closing state — your estate attorney handles the closing coordination. USA Home Buyers works around your probate timeline." },
  { question: 'How long does Connecticut probate take?', answer: "Connecticut estates typically take 6–12 months. Simple uncontested estates with efficient administration can close faster. Complex estates with multiple heirs or disputes take longer. The Waterbury Probate Court handles New Haven County Waterbury probate matters. Consult your estate attorney." },
  { question: 'Do I need to repair the inherited property?', answer: "No. We buy as-is. Waterbury probate properties — compact frame homes, two-family structures, older bungalows with full basements of belongings — are exactly what we purchase. No cleanout required." },
];

const LINKS = [
  { href: '/markets/waterbury-ct/inherited-property', label: 'Inherited Property' },
  { href: '/markets/waterbury-ct/foreclosure', label: 'Foreclosure' },
  { href: '/markets/waterbury-ct/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/waterbury-ct/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/waterbury-ct/code-violations', label: 'Code Violations' },
  { href: '/markets/waterbury-ct', label: '← Back to Waterbury CT' },
];

export default function WaterburyProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, articleSchema('Probate Home Sale in Waterbury CT', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Probate Property in Waterbury CT — 49 Leavenworth Street Probate Court</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Waterbury CT — any condition, no repairs. Waterbury Probate Court: 49 Leavenworth St. (NOT City Hall), (203) 755-1127. CT attorney-closing state — we coordinate with your estate attorney. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/waterbury-ct/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Waterbury CT Probate Court and Real Property Sales</h2>
          <p className="text-gray-700 mb-4">The <a href="https://ctprobate.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Waterbury Probate Court</a> is at 49 Leavenworth Street — confirmed by ctprobate.gov. This is a common point of confusion: Waterbury Probate Court is NOT at City Hall (235 Grand Street). Getting this wrong causes delays in estate administration. Phone: (203) 755-1127. Verify current contact information before relying on it.</p>
          <p className="text-gray-700 mb-4">Connecticut probate runs through the Probate Courts Act (CGS §45a). The executor or administrator receives authorization from the court to convey real property. Connecticut is an attorney-closing state — both the estate and the buyer are represented by licensed CT attorneys at closing. USA Home Buyers coordinates the buyer-side attorney, so the only requirement on your side is your estate attorney's involvement.</p>
          <p className="text-gray-700 mb-4">Many Waterbury estates involve heirs who have moved to Miami, Boston, or Philadelphia — the top out-migration destinations from Waterbury per Redfin data. We work with out-of-state heirs routinely and can close with minimal in-person requirements on your part.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Waterbury CT" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Probate Property in Waterbury CT?" sourcePage="/markets/waterbury-ct/probate" />
      </div>
    </>
  );
}
