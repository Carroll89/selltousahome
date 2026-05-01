/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { chambersburgLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/chambersburg-pa/probate`;

export const metadata: Metadata = {
  title: "Probate Home Sale Chambersburg PA — Franklin County Orphans' Court",
  description: "Selling a house through Franklin County Orphans' Court in Chambersburg PA? We buy probate properties as-is, coordinate with estate attorneys, close after Letters Testamentary.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "Where is Franklin County Orphans' Court?", answer: "Franklin County probate is handled through the Court of Common Pleas at the Franklin County courthouse in Chambersburg. Contact (717) 261-3805 — verify current contact information at franklincountypa.gov before relying on any specific number. The Register & Recorder at 157 Lincoln Way East, (717) 261-3872, handles deed recording." },
  { question: 'Can I sell the house before Pennsylvania probate is complete?', answer: "You can sign a purchase agreement during probate. The deed transfer requires Letters Testamentary or Letters of Administration issued by the Orphans' Court. USA Home Buyers works with estate attorneys and coordinates around the court's timeline." },
  { question: 'How long does Pennsylvania probate take?', answer: "Uncontested Pennsylvania estates typically take 3–9 months. Complex estates with contested wills, multiple heirs, or outstanding debts can take 12–24 months. Pennsylvania does not have simplified small estate procedures for real property. Consult an estate attorney." },
  { question: 'Do I need to repair the inherited property?', answer: "No. We buy as-is. Franklin County probate properties — historic district Colonials in Chambersburg Borough, older ranch homes in township areas, Waynesboro properties — often have deferred maintenance or full contents left behind. None of that stops us." },
];

const LINKS = [
  { href: '/markets/chambersburg-pa/inherited-property', label: 'Inherited Property' },
  { href: '/markets/chambersburg-pa/foreclosure', label: 'Foreclosure' },
  { href: '/markets/chambersburg-pa/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/chambersburg-pa/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/chambersburg-pa/code-violations', label: 'Code Violations' },
  { href: '/markets/chambersburg-pa', label: '← Back to Chambersburg PA' },
];

export default function ChambersburgProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, articleSchema("Probate Home Sale in Chambersburg PA", pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › Probate</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Probate Property in Chambersburg PA — Franklin County Orphans' Court</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate properties in Chambersburg PA and Franklin County — any condition, no repairs. We work with estate attorneys and wait for Letters Testamentary. Franklin County Register & Recorder: 157 Lincoln Way East, (717) 261-3872. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/chambersburg-pa/probate" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How Pennsylvania Probate and Real Property Sales Work</h2>
          <p className="text-gray-700 mb-4">Pennsylvania probate runs through the Orphans' Court division of the Court of Common Pleas. In Franklin County, the personal representative must obtain Letters Testamentary (if there is a will) or Letters of Administration (if there is no will) before the estate can convey real property. Once Letters issue, the personal representative may sign a purchase agreement and close the sale — no individual court approval is needed for the sale transaction under standard administration.</p>
          <p className="text-gray-700 mb-4">The distinction between the <strong>Register & Recorder</strong> (157 Lincoln Way East, (717) 261-3872 — deed recording, estate document filings) and the <strong>Prothonotary</strong> ((717) 261-3861 — civil court filings) matters when coordinating estate paperwork. USA Home Buyers works with estate attorneys throughout Franklin County and can coordinate the closing around any probate timeline.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Chambersburg PA" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Probate Property in Chambersburg PA?" sourcePage="/markets/chambersburg-pa/probate" />
      </div>
    </>
  );
}
