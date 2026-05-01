/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { cantonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/canton-oh/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Canton OH — Sell During or After Probate',
  description: 'Need to sell a house through Stark County Probate Court in Canton OH? We buy probate properties as-is, coordinate with estate attorneys, close after authorization.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Where is the Stark County Probate Court?', answer: "Stark County Probate Court is at 110 Central Plaza South, Suite 501, Canton, Ohio 44702 — Judge Curt Werren, phone 330-451-7755, open Monday–Friday 8:30 a.m.–4:30 p.m. Source: starkcountyohio.gov. Verify current contact information before relying on it." },
  { question: 'Can I sell the house before probate is complete?', answer: "You can sign a purchase agreement and accept a cash offer during probate. The deed transfer requires estate authorization. USA Home Buyers works with estate attorneys and waits for the appropriate court authorization when needed." },
  { question: 'How much does Stark County probate cost?', answer: "According to the Stark County Probate Court decedent estate FAQ, the initial minimum deposit to open an estate is $125.00 and average estate court costs are usually less than $200, though total costs vary by pleadings and actions. Consult an estate attorney for a full cost estimate." },
  { question: 'Do I need to repair the property before selling in probate?', answer: "No. We buy as-is. Canton probate properties — older brick colonials in Central Canton, pre-war bungalows in Southwest Canton, and historic properties near Ridgewood — often have significant deferred maintenance. None of that stops us from making an offer." },
];

export default function CantonProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[cantonLocalBusinessSchema, articleSchema('Probate Home Sale in Canton OH', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/canton-oh" className="hover:text-white">Canton OH</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Probate Property in Canton OH — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Canton OH and Stark County — any condition, no repairs. Stark County Probate Court: 110 Central Plaza South, Suite 501, Canton OH 44702, phone 330-451-7755. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/canton-oh/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Ohio Probate and Real Property Sales in Stark County</h2>
          <p className="text-gray-700 mb-4">Ohio probate is administered by the Probate Court in the county where the deceased was domiciled. For Stark County estates, that's the Stark County Probate Court at 110 Central Plaza South, Suite 501, Canton OH 44702, phone 330-451-7755. The executor or administrator receives Letters of Authority, which authorize the estate to act including selling real estate. According to the <a href="https://www.starkcountyohio.gov/government/legal___judicial/probate_court/faqs/decedents_estate.php" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Stark County Probate Court decedent estate FAQ</a>, the initial minimum deposit to open an estate is $125.00 and average estate court costs are usually less than $200.</p>
          <p className="text-gray-700 mb-4">USA Home Buyers closes on a timeline that works within the Ohio probate process. We're not in a rush to force a difficult situation. For Canton properties, closing involves the deed being stamped by the Stark County Auditor (Suite 220, same building) and DTE Form 100 submitted before recording at the Stark County Recorder (Suite 170). The $4.00/$1,000 conveyance fee plus $0.50/parcel and recording fees are covered by us.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Canton OH" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/canton-oh/inherited-property', label: 'Inherited Property' }, { href: '/markets/canton-oh/foreclosure', label: 'Foreclosure' }, { href: '/markets/canton-oh/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/canton-oh/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/canton-oh/code-violations', label: 'Code Violations' }, { href: '/markets/canton-oh', label: '← Back to Canton OH' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Probate Property in Canton OH?" sourcePage="/markets/canton-oh/probate" />
      </div>
    </>
  );
}
