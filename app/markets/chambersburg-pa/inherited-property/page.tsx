/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { chambersburgLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/chambersburg-pa/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Chambersburg PA — Cash, Any Condition',
  description: "Inherited a house in Chambersburg PA? We buy inherited properties through Franklin County Orphans' Court, as-is. Written offer in 24 hours. Franklin County estate specialists.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: "Can I sell an inherited house during Pennsylvania probate?", answer: "Yes — you can accept an offer and sign a purchase agreement during probate. The deed can't transfer until Letters Testamentary or Letters of Administration are issued by the Franklin County Orphans' Court. USA Home Buyers works with estates and waits for Letters when needed." },
  { question: "How long does Franklin County Orphans' Court probate take?", answer: "Uncontested Pennsylvania estates typically resolve in 3–9 months. Complex estates with multiple heirs, contested wills, or outstanding debts can take longer. Franklin County's Orphans' Court is part of the Court of Common Pleas. Consult an estate attorney for your specific situation." },
  { question: 'Do I need to clean out the inherited property?', answer: "No. Leave whatever you don't want — furniture, belongings, decades of contents. We handle the cleanout after closing. We've purchased Franklin County estates in every condition." },
  { question: 'What if the property is in the Chambersburg historic district?', answer: "Historic district properties often need significant updates to compete on the retail market. We buy them as-is — brick Colonials, Federal-style homes, older ranch homes — regardless of condition or historic designation." },
];

const LINKS = [
  { href: '/markets/chambersburg-pa/probate', label: 'Probate' },
  { href: '/markets/chambersburg-pa/foreclosure', label: 'Foreclosure' },
  { href: '/markets/chambersburg-pa/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/chambersburg-pa/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/chambersburg-pa/code-violations', label: 'Code Violations' },
  { href: '/markets/chambersburg-pa', label: '← Back to Chambersburg PA' },
];

export default function ChambersburgInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, articleSchema('Sell an Inherited House in Chambersburg PA', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › Inherited Property</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell an Inherited House in Chambersburg PA — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases inherited houses in Chambersburg PA and Franklin County — any condition, no repairs. We work with Orphans' Court estates and wait for Letters Testamentary. Register & Recorder: 157 Lincoln Way East, (717) 261-3872. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/chambersburg-pa/inherited-property" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Home Through Franklin County Orphans' Court</h2>
          <p className="text-gray-700 mb-4">Pennsylvania probate for estates involving real property runs through the Orphans' Court division of the Court of Common Pleas. In Franklin County, this is at the Franklin County courthouse. The personal representative (executor or administrator) receives Letters Testamentary or Letters of Administration, then has authority to sign a purchase agreement and convey the property at closing. You can accept a cash offer before Letters issue; we coordinate the timing around the court process.</p>
          <p className="text-gray-700 mb-4">The Franklin County Register & Recorder's office at 157 Lincoln Way East, Chambersburg PA 17201, phone (717) 261-3872, handles deed recording and estate document filings. Chambersburg's historic stock — Federal-style and Colonial homes from the 19th century, mid-century ranch homes on the borough edges, rural Franklin County properties with agricultural character — sells differently depending on condition. We buy all of it as-is.</p>
          <p className="text-gray-700 mb-4">Chambersburg also serves heirs who have relocated to Maryland, Virginia, or out of the region entirely — the Maryland border proximity means many out-of-state heirs inherit Franklin County properties. We make the process manageable from a distance.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Chambersburg PA" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Chambersburg PA Property?" sourcePage="/markets/chambersburg-pa/inherited-property" />
      </div>
    </>
  );
}
