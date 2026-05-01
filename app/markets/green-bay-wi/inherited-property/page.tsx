/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { greenBayLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Green Bay WI — Cash, Any Condition',
  description: 'Inherited a house in Green Bay WI? We buy inherited properties through Brown County Circuit Court probate, as-is. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "Can I sell an inherited house during Wisconsin probate?", answer: "Yes — you can accept an offer during probate. The Brown County Circuit Court Probate Division (100 S. Jefferson St., Green Bay WI, (920) 448-4275) handles estate administration. You'll need Letters Testamentary or Letters of Administration before closing on the deed transfer. USA Home Buyers works with estates and waits for Letters when needed." },
  { question: "How long does Brown County probate take?", answer: "Uncontested Wisconsin estates typically take 3–6 months through informal administration. Complex estates may take longer. Consult an estate attorney for your specific situation. USA Home Buyers can sign a purchase agreement now and coordinate the closing around the probate timeline." },
  { question: "Do I need to clean out the inherited Green Bay property?", answer: "No. Leave whatever you don't want — furniture, belongings, decades of contents. We handle the cleanout after closing. We've purchased Brown County estates in every condition." },
  { question: "What if the inherited property is in the Astor Park or Fort Howard neighborhood?", answer: "We buy throughout Green Bay and all of Brown County — Astor Park, Fort Howard, downtown, the outer neighborhoods. As-is, any condition." },
];

const LINKS = [
  { href: '/markets/green-bay-wi/probate', label: 'Probate' },
  { href: '/markets/green-bay-wi/foreclosure', label: 'Foreclosure' },
  { href: '/markets/green-bay-wi/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/green-bay-wi/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/green-bay-wi/code-violations', label: 'Code Violations' },
  { href: '/markets/green-bay-wi', label: '← Back to Green Bay WI' },
];

export default function GreenBayInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('Sell an Inherited House in Green Bay WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Inherited Property</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell an Inherited House in Green Bay WI — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases inherited houses in Green Bay WI and Brown County — any condition, no repairs. We work with estates and wait for Letters Testamentary. Brown County Probate: 100 S. Jefferson St., Green Bay, (920) 448-4275. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/green-bay-wi/inherited-property" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Home Through Brown County Probate</h2>
          <p className="text-gray-700 mb-4">Wisconsin probate runs through the Circuit Court in the county where the deceased lived. For Brown County estates, that's the Probate Division at 100 S. Jefferson Street, Green Bay WI 54301, phone (920) 448-4275 — confirmed via browncountywi.gov. Verify current contact information before relying on it. Most uncontested Wisconsin estates resolve in 3–6 months through informal administration. You can accept a cash offer before Letters Testamentary issue; the deed transfers at closing after Letters are granted.</p>
          <p className="text-gray-700 mb-4">Green Bay's manufacturing-heritage housing stock — Ranch homes, Cape Cods, older Craftsman bungalows near Astor Park — often has deferred maintenance, original 1950s–1970s systems, and basements full of decades of belongings. None of that stops us from making an offer. We buy as-is and handle everything after closing.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Green Bay WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Green Bay WI Property?" sourcePage="/markets/green-bay-wi/inherited-property" />
      </div>
    </>
  );
}
