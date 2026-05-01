/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Concord NH — Sell During or After Probate',
  description: 'Need to sell a house through NH Circuit Court Probate Division in Concord NH? We buy probate properties as-is, coordinate with estate attorneys, close after authorization.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Where is the NH Circuit Court Probate Division for Concord?', answer: "NH Circuit Court, 6th Circuit – Probate Division – Concord is at 2 Charles Doe Drive, Suite 1, Concord NH 03301, Circuit Clerk Tracy L. Meyer, Deputy Clerk Robert Regal, phone 1-855-212-1234 (US/Canada) or 603-415-0162, hours Monday–Friday 8:00 a.m.–4:00 p.m. Source: courts.nh.gov. Verify current contact information before relying on it." },
  { question: 'Can I sell the house before probate is complete?', answer: "You can sign a purchase agreement and accept a cash offer during probate. The deed transfer requires estate authorization from the NH Circuit Court Probate Division. USA Home Buyers works with estate attorneys and waits for authorization when needed." },
  { question: 'How long does NH probate take?', answer: "NH probate timelines vary by estate complexity. Uncontested estates may resolve in 3–6 months. Complex estates with real property disputes, multiple heirs, or creditor claims can take 12–24 months. Consult an estate attorney for your specific situation." },
  { question: 'Do I need to repair the property before selling in probate?', answer: "No. We buy as-is. Concord probate properties — New England Colonial homes in Abbott-Downing, Cape Cods in Concord Heights, older properties in Penacook and West Concord — often have significant deferred maintenance. None of that stops us from making an offer." },
];

export default function ConcordProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[concordLocalBusinessSchema, articleSchema('Probate Home Sale in Concord NH', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Probate Property in Concord NH — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Concord NH and Merrimack County — any condition, no repairs. NH Circuit Court 6th Circuit Probate Division: 2 Charles Doe Drive, Suite 1, Concord NH 03301, phone 1-855-212-1234. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/concord-nh/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">NH Probate and Real Property Sales in Merrimack County</h2>
          <p className="text-gray-700 mb-4">NH probate is administered through the NH Circuit Court, Probate Division, in the county where the decedent lived. For Merrimack County estates, that's the 6th Circuit – Probate Division at 2 Charles Doe Drive, Suite 1, Concord NH 03301, phone 1-855-212-1234, hours Monday–Friday 8:00 a.m.–4:00 p.m. Source: <a href="https://www.courts.nh.gov/your-visit/find-court/6th-circuit-probate-division-concord" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">courts.nh.gov</a>.</p>
          <p className="text-gray-700 mb-4">USA Home Buyers closes on a timeline that works within the NH probate process. We coordinate with estate attorneys and don't rush the court's timeline. Recording routes through the Merrimack County Registry of Deeds (163 North Main St., Suite 103, Concord NH 03301, Register Samantha Morse). Recording requires separate checks for recording fee, transfer tax, and LCHIP — all covered by us.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Concord NH" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/concord-nh/inherited-property', label: 'Inherited Property' }, { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' }, { href: '/markets/concord-nh/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/concord-nh/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/concord-nh/code-violations', label: 'Code Violations' }, { href: '/markets/concord-nh', label: '← Back to Concord NH' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Probate Property in Concord NH?" sourcePage="/markets/concord-nh/probate" />
      </div>
    </>
  );
}
