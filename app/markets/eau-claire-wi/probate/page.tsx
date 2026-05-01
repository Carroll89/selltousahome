/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { eauClaireLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/eau-claire-wi/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Eau Claire WI — Sell During or After Probate',
  description: 'Need to sell a house through Eau Claire County probate in Eau Claire WI? We buy probate properties as-is, coordinate with estate attorneys, close after Letters Testamentary.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Where is the Eau Claire County Probate Court?', answer: "Probate matters in Eau Claire are handled by the Eau Claire County Clerk of Circuit Court, located at the Eau Claire County Justice Center, the appropriate county circuit court office.m.–4:30 p.m. Verify current contact information before relying on it." },
  { question: 'Can I sell the house before probate is complete?', answer: "You can sign a purchase agreement and accept a cash offer before probate closes. The deed transfer typically requires Letters Testamentary or Letters of Administration. USA Home Buyers works with estate attorneys and waits for Letters when needed." },
  { question: 'How long does Wisconsin probate take?', answer: "Uncontested Wisconsin estates typically resolve in 3–6 months through informal administration. Complex estates may take 12–24 months. Wisconsin offers summary assignment for small estates with personal property under $50,000. Consult an estate attorney." },
  { question: 'Do I need to repair the property before selling in probate?', answer: "No. We buy as-is. Eau Claire probate properties — bungalows in Randall Park, Craftsman homes in Third Ward, East Hill houses, North Side properties — often have deferred maintenance, full basements of belongings, or outdated systems. None of that stops us from making an offer." },
];

export default function EauClaireProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[eauClaireLocalBusinessSchema, articleSchema('Probate Home Sale in Eau Claire WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/eau-claire-wi" className="hover:text-white">Eau Claire WI</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Probate Property in Eau Claire WI — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Eau Claire WI and Eau Claire County — any condition, no repairs. We work with estate attorneys and wait for Letters Testamentary. Eau Claire County Clerk of Circuit Court: the appropriate county office. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/eau-claire-wi/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Probate and Real Property Sales in Eau Claire County</h2>
          <p className="text-gray-700 mb-4">Wisconsin probate is administered through the Circuit Court in the county where the deceased lived. For Eau Claire County estates, that's the Clerk of Circuit Court at the Justice Center, the appropriate county circuit court office— verify current contact before relying on it. The personal representative (executor) receives Letters Testamentary after the court approves the estate. Once Letters are issued, the personal representative has the authority to sign a purchase agreement and convey the property at closing. Under standard Wisconsin informal administration, you typically don't need court approval for each individual sale transaction.</p>
          <p className="text-gray-700 mb-4">Eau Claire County parcels usually record through Eau Claire County; parts of the city extend into Chippewa County, so parcel county must be verified before relying on county-specific recording or court details. For most Eau Claire properties in Eau Claire County, recording is handled by the county Register of Deeds; verify current office details before relying on them. Recording fee is $30 flat statewide. USA Home Buyers closes on a timeline that works within the probate process — we're not in a rush to force a difficult situation.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Eau Claire WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/eau-claire-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/eau-claire-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/eau-claire-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/eau-claire-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/eau-claire-wi/code-violations', label: 'Code Violations' }, { href: '/markets/eau-claire-wi', label: '← Back to Eau Claire WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Probate Property in Eau Claire WI?" sourcePage="/markets/eau-claire-wi/probate" />
      </div>
    </>
  );
}
