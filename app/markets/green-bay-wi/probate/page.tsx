/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { greenBayLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Green Bay WI — Sell During or After Probate',
  description: 'Need to sell a house through Brown County Circuit Court probate in Green Bay WI? We buy probate properties as-is, coordinate with estate attorneys.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "Where is Brown County Probate Court?", answer: "Brown County Circuit Court Probate Division: 100 S. Jefferson Street, Green Bay WI 54301, phone (920) 448-4275. Confirmed via browncountywi.gov. Verify current contact before relying on it. The Brown County Register of Deeds (deed recording) is at 305 E. Walnut Street, Room 260, (920) 448-4470." },
  { question: "Can I sell the house before Wisconsin probate is complete?", answer: "You can sign a purchase agreement and accept a cash offer during probate. The deed transfer requires Letters Testamentary or Letters of Administration from Brown County Circuit Court. USA Home Buyers works with estate attorneys and waits for Letters when needed." },
  { question: "How long does Wisconsin probate take?", answer: "Uncontested Wisconsin estates typically resolve in 3–6 months through informal administration. Complex estates with multiple heirs or disputes take longer. Consult an estate attorney for your specific situation." },
  { question: "Do I need to repair the inherited Green Bay property?", answer: "No. We buy as-is. Ranch homes and Cape Cods with original systems, Astor Park Craftsman bungalows with deferred maintenance, full basements of belongings — none of that stops us." },
];

const LINKS = [
  { href: '/markets/green-bay-wi/inherited-property', label: 'Inherited Property' },
  { href: '/markets/green-bay-wi/foreclosure', label: 'Foreclosure' },
  { href: '/markets/green-bay-wi/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/green-bay-wi/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/green-bay-wi/code-violations', label: 'Code Violations' },
  { href: '/markets/green-bay-wi', label: '← Back to Green Bay WI' },
];

export default function GreenBayProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('Probate Home Sale in Green Bay WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Probate Property in Green Bay WI — Brown County Circuit Court</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Green Bay WI and Brown County — any condition, no repairs. Brown County Probate: 100 S. Jefferson St., (920) 448-4275. Register of Deeds: 305 E. Walnut St., Room 260, (920) 448-4470. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/green-bay-wi/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Probate and Real Property Sales in Brown County</h2>
          <p className="text-gray-700 mb-4">Wisconsin probate is administered through the Circuit Court Probate Division. In Brown County, the Probate Division is at 100 S. Jefferson Street, Green Bay WI 54301, phone (920) 448-4275 — confirmed via browncountywi.gov. The personal representative receives Letters Testamentary after the court approves the estate. Once Letters issue, the personal representative may sign a purchase agreement and convey the property. No individual court approval is needed for each sale transaction under standard Wisconsin informal administration. Source: <a href="https://docs.legis.wisconsin.gov/statutes/statutes/856" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Statutes Chapter 856</a>.</p>
          <p className="text-gray-700 mb-4">The <strong>Brown County Register of Deeds</strong> at 305 E. Walnut Street, Room 260, (920) 448-4470 handles deed recording. The $30 flat Wisconsin recording fee applies. USA Home Buyers works with estate attorneys throughout Brown County and coordinates closings around the probate timeline.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Green Bay WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Probate Property in Green Bay WI?" sourcePage="/markets/green-bay-wi/probate" />
      </div>
    </>
  );
}
