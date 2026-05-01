/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { chambersburgLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/chambersburg-pa/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Chambersburg PA — Cash, As-Is',
  description: 'Have code violations on your Chambersburg PA property? We buy houses with open violations as-is, for cash. No repairs required. Serving Franklin County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a house with code violations in Chambersburg PA?', answer: 'Yes. Code violations travel with the property, not the seller. We buy as-is, including open violations, and take responsibility for remediation after closing.' },
  { question: 'Do I have to fix violations before selling?', answer: 'Not when selling to us. We factor open violations and repair costs into our offer. You do nothing.' },
  { question: 'What kinds of code violations do you buy?', answer: 'Unpermitted additions, electrical violations, structural concerns, HVAC deficiencies, failed inspections, lead paint disclosures, zoning violations — we buy in any condition.' },
  { question: 'What if I have a municipal lien from the Borough?', answer: 'Liens are addressed at closing from sale proceeds. We review open liens before making an offer. Many lien situations are resolvable.' },
];

const LINKS = [
  { href: '/markets/chambersburg-pa/inherited-property', label: 'Inherited Property' },
  { href: '/markets/chambersburg-pa/foreclosure', label: 'Foreclosure' },
  { href: '/markets/chambersburg-pa/probate', label: 'Probate' },
  { href: '/markets/chambersburg-pa/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/chambersburg-pa/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/chambersburg-pa', label: '← Back to Chambersburg PA' },
];

export default function ChambersburgCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, articleSchema('Sell a House With Code Violations in Chambersburg PA', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › Code Violations</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Chambersburg PA House With Code Violations — Cash, As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases Chambersburg PA properties with open code violations — as-is, for cash, no repairs required. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/chambersburg-pa/code-violations" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Chambersburg's Older Housing Stock</h2>
          <p className="text-gray-700 mb-4">Chambersburg's historic district and older Borough neighborhoods have housing stock from the 19th and early 20th centuries. Federal-style and Colonial homes with original systems, unpermitted basement conversions, and outdated electrical panels are common. Borough code enforcement flags these issues, and they create real obstacles to a traditional retail sale. A cash buyer doesn't need bank financing — so no appraisal, no inspection contingency, no demand to clear violations before closing.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Chambersburg PA" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Chambersburg PA Property?" sourcePage="/markets/chambersburg-pa/code-violations" />
      </div>
    </>
  );
}
