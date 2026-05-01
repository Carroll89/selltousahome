/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { milwaukeeLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/milwaukee-wi/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Milwaukee WI — Cash Offer, Any Condition',
  description: 'Inherited a house in Milwaukee WI? We buy inherited properties through Milwaukee County probate, as-is. Written offer in 24 hours, close after authorization.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell an inherited house during probate in Wisconsin?', answer: "Yes — you can accept an offer and sign a purchase agreement during probate. The deed typically can't transfer until the personal representative is authorized. For Milwaukee County estates, that's the Milwaukee County Circuit Court Probate Division (Register in Probate, 901 N. 9th St., Room 207, Milwaukee WI 53233, phone (414) 278-4444, option 2). USA Home Buyers coordinates with estates and waits for authorization when needed." },
  { question: 'How long does Milwaukee County probate take?', answer: "Uncontested estates in Wisconsin typically resolve in 3–6 months through informal administration. Complex estates with multiple heirs, contested wills, or outstanding debts can take longer. Wisconsin offers summary assignment for small estates with personal property under $50,000. Consult an estate attorney for your specific situation." },
  { question: 'Do I need to clean out the inherited property?', answer: "No. Leave whatever you don't want — furniture, belongings, decades of contents. We handle the cleanout after closing. We've purchased Milwaukee estates in every condition." },
  { question: 'What if the inherited house is a duplex or multifamily?', answer: "We buy Milwaukee duplexes, German duplexes, Polish flats, and small multifamily buildings through probate just like single-family properties. Tenant-occupied or vacant — it doesn't matter. We handle all of it after closing." },
];

export default function MilwaukeeInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[milwaukeeLocalBusinessSchema, articleSchema('Sell an Inherited House in Milwaukee WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/milwaukee-wi" className="hover:text-white">Milwaukee WI</Link> › Inherited Property</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell an Inherited House in Milwaukee WI — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases inherited houses and duplexes in Milwaukee WI and Milwaukee County through probate — any condition, no repairs. Milwaukee County Probate/Register in Probate: 901 N. 9th St., Room 207, Milwaukee WI 53233, phone (414) 278-4444. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/milwaukee-wi/inherited-property" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Home Through Milwaukee County Probate</h2>
          <p className="text-gray-700 mb-4">Wisconsin probate is administered through the Circuit Court in the county where the deceased lived. For Milwaukee County estates, that's the Milwaukee County Circuit Court — Probate Court / Register in Probate at 901 N. 9th Street, Room 207, Milwaukee WI 53233, phone (414) 278-4444, option 2. The Register in Probate keeps records of wills admitted to probate, decedent estates, testamentary trusts, guardianships, and related matters. The personal representative receives Letters Testamentary after the court approves the estate, authorizing them to sign a purchase agreement and convey the property at closing. Source: <a href="https://www.wicourts.gov/services/public/selfhelp/probate.htm" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Wisconsin Court System self-help probate page</a>.</p>
          <p className="text-gray-700 mb-4">Milwaukee's older housing stock — 34% built in 1939 or earlier, 44.8% before 1950 (2024 ACS) — means inherited properties often come with significant deferred maintenance: knob-and-tube wiring, aging cast-iron plumbing, roofing, lead paint, and the complexity of duplex or multifamily ownership. Heirs living out of state, managing tenant-occupied properties, or simply not wanting the burden of repairs are exactly who we help.</p>
          <p className="text-gray-700 mb-4">The deed and Wisconsin Real Estate Transfer Return (eRETR) are recorded at the Milwaukee County Register of Deeds (901 N. 9th Street, Room 103, Milwaukee WI 53233, Register Israel Ramón). Wisconsin's $3/$1,000 transfer fee and $30 recording fee are covered by us.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Milwaukee WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/milwaukee-wi/probate', label: 'Probate' }, { href: '/markets/milwaukee-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/milwaukee-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/milwaukee-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/milwaukee-wi/code-violations', label: 'Code Violations' }, { href: '/markets/milwaukee-wi', label: '← Back to Milwaukee WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Milwaukee WI Property?" sourcePage="/markets/milwaukee-wi/inherited-property" />
      </div>
    </>
  );
}
