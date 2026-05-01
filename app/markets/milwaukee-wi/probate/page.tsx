/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { milwaukeeLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/milwaukee-wi/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Milwaukee WI — Sell During or After Probate',
  description: 'Need to sell a house through Milwaukee County probate in Milwaukee WI? We buy probate properties as-is, coordinate with estate attorneys, close after Letters Testamentary.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Where is the Milwaukee County Probate Court?', answer: "Milwaukee County Probate Court / Register in Probate is at Milwaukee County Courthouse, 901 N. 9th St., Room 207, Milwaukee WI 53233, phone (414) 278-4444, option 2. Hours: Monday–Friday. The Register in Probate keeps records of decedent estates, wills admitted to probate, guardianships, and related matters. Verify current contact information before relying on it." },
  { question: 'Can I sell the house before probate is complete?', answer: "You can sign a purchase agreement and accept a cash offer before probate closes. The deed transfer typically requires Letters Testamentary or Letters of Administration. USA Home Buyers works with estate attorneys and waits for Letters when needed." },
  { question: 'How long does Wisconsin probate take?', answer: "Uncontested Wisconsin estates typically resolve in 3–6 months through informal administration. Complex estates may take 12–24 months. Wisconsin offers summary assignment for small estates with personal property under $50,000. Consult an estate attorney." },
  { question: 'Do I need to repair the property before selling in probate?', answer: "No. We buy as-is. Milwaukee probate properties — German duplexes in Sherman Park, Cream City brick buildings in Washington Heights, older frame houses in Bay View and Riverwest — often have significant deferred maintenance. None of that stops us from making an offer." },
];

export default function MilwaukeeProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[milwaukeeLocalBusinessSchema, articleSchema('Probate Home Sale in Milwaukee WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/milwaukee-wi" className="hover:text-white">Milwaukee WI</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Probate Property in Milwaukee WI — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Milwaukee WI and Milwaukee County — any condition, no repairs. Milwaukee County Register in Probate: 901 N. 9th St., Room 207, Milwaukee WI 53233, phone (414) 278-4444. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/milwaukee-wi/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Probate and Real Property Sales in Milwaukee County</h2>
          <p className="text-gray-700 mb-4">Wisconsin probate is administered through the Circuit Court Probate Division in the county where the deceased lived. For Milwaukee County estates, that's the Register in Probate at Milwaukee County Courthouse, 901 N. 9th Street, Room 207, Milwaukee WI 53233, phone (414) 278-4444, option 2 for Register in Probate. The Register in Probate keeps records of wills admitted to probate, decedent estates, testamentary trusts, and guardianships. Source: <a href="https://www.wicourts.gov/services/public/selfhelp/probate.htm" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Court System self-help probate</a>.</p>
          <p className="text-gray-700 mb-4">Milwaukee's older housing stock — duplexes, multifamily, and pre-war single-family homes throughout Sherman Park, Bay View, Riverwest, and Washington Heights — often comes with significant deferred maintenance in probate situations. USA Home Buyers closes on a timeline that works within the Wisconsin probate process. We coordinate with estate attorneys and don't rush the court's timeline. Recording routes through the Milwaukee County Register of Deeds (901 N. 9th Street, Room 103, Register Israel Ramón).</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Milwaukee WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/milwaukee-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/milwaukee-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/milwaukee-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/milwaukee-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/milwaukee-wi/code-violations', label: 'Code Violations' }, { href: '/markets/milwaukee-wi', label: '← Back to Milwaukee WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Probate Property in Milwaukee WI?" sourcePage="/markets/milwaukee-wi/probate" />
      </div>
    </>
  );
}
