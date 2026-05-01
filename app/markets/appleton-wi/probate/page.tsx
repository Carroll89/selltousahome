/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { appletonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/appleton-wi/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Appleton WI — Sell During or After Probate',
  description: 'Need to sell a house through Outagamie County probate in Appleton WI? We buy probate properties as-is, coordinate with estate attorneys, close after Letters Testamentary.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Where is the Outagamie County Probate Court?', answer: "Probate matters in Appleton are handled by the Outagamie County Clerk of Circuit Court, located at the Outagamie County Justice Center, 320 S. Walnut Street, Appleton WI 54911, phone 920-832-5131, open Monday–Friday 8:00 a.m.–4:30 p.m. Verify current contact information before relying on it." },
  { question: 'Can I sell the house before probate is complete?', answer: "You can sign a purchase agreement and accept a cash offer before probate closes. The deed transfer typically requires Letters Testamentary or Letters of Administration. USA Home Buyers works with estate attorneys and waits for Letters when needed." },
  { question: 'How long does Wisconsin probate take?', answer: "Uncontested Wisconsin estates typically resolve in 3–6 months through informal administration. Complex estates may take 12–24 months. Wisconsin offers summary assignment for small estates with personal property under $50,000. Consult an estate attorney." },
  { question: 'Do I need to repair the property before selling in probate?', answer: "No. We buy as-is. Appleton probate properties — bungalows in Erb Park, Craftsman homes in Old Third Ward, Northwood Park houses, River Drive properties — often have deferred maintenance, full basements of belongings, or outdated systems. None of that stops us from making an offer." },
];

export default function AppletonProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[appletonLocalBusinessSchema, articleSchema('Probate Home Sale in Appleton WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/appleton-wi" className="hover:text-white">Appleton WI</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Probate Property in Appleton WI — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Appleton WI and Outagamie County — any condition, no repairs. We work with estate attorneys and wait for Letters Testamentary. Outagamie County Clerk of Circuit Court: 320 S. Walnut St., Appleton WI 54911, phone 920-832-5131. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/appleton-wi/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Probate and Real Property Sales in Outagamie County</h2>
          <p className="text-gray-700 mb-4">Wisconsin probate is administered through the Circuit Court in the county where the deceased lived. For Outagamie County estates, that's the Clerk of Circuit Court at the Justice Center, 320 S. Walnut Street, Appleton WI 54911 — phone 920-832-5131. The personal representative (executor) receives Letters Testamentary after the court approves the estate. Once Letters are issued, the personal representative has the authority to sign a purchase agreement and convey the property at closing. Under standard Wisconsin informal administration, you typically don't need court approval for each individual sale transaction.</p>
          <p className="text-gray-700 mb-4">Appleton spans Outagamie, Calumet, and Winnebago Counties. The county where the property is located determines which Register of Deeds handles recording. For most Appleton properties in Outagamie County, recording is at 320 S. Walnut Street (phone 920-832-5114). Recording fee is $30 flat statewide. USA Home Buyers closes on a timeline that works within the probate process — we're not in a rush to force a difficult situation.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Appleton WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/appleton-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/appleton-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/appleton-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/appleton-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/appleton-wi/code-violations', label: 'Code Violations' }, { href: '/markets/appleton-wi', label: '← Back to Appleton WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Probate Property in Appleton WI?" sourcePage="/markets/appleton-wi/probate" />
      </div>
    </>
  );
}
