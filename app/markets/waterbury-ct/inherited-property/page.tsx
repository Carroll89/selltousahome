/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { waterburyLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/waterbury-ct/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Waterbury CT — Cash, Any Condition',
  description: 'Inherited a house in Waterbury CT? We buy inherited properties through Connecticut Probate Court at 49 Leavenworth St., as-is. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell an inherited house during Connecticut probate?', answer: "Yes — you can accept an offer during probate. The Waterbury Probate Court (49 Leavenworth Street, (203) 755-1127) handles estate administration. The deed transfer typically requires executor approval and Letters Testamentary. USA Home Buyers works with estates and coordinates around the probate timeline. Connecticut is an attorney-closing state — your estate attorney coordinates the closing." },
  { question: 'How long does Connecticut probate take?', answer: "Uncontested Connecticut estates typically take 6–12 months. The Connecticut Probate Courts Act (CGS §45a) governs the process. The Waterbury Probate Court at 49 Leavenworth Street handles New Haven County estates for Waterbury properties. Consult an estate attorney for your situation." },
  { question: 'Do I need to clean out the inherited property?', answer: "No. Leave whatever you don't want. We handle the cleanout after closing. Waterbury's immigrant community estates often have full household contents, decades of belongings, and varied condition. None of that stops us." },
  { question: 'What if the inherited house is in the North End or Town Plot?', answer: "We buy throughout Waterbury regardless of neighborhood. Compact two-family homes, older frame bungalows, postwar Colonials — all as-is." },
];

const LINKS = [
  { href: '/markets/waterbury-ct/probate', label: 'Probate' },
  { href: '/markets/waterbury-ct/foreclosure', label: 'Foreclosure' },
  { href: '/markets/waterbury-ct/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/waterbury-ct/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/waterbury-ct/code-violations', label: 'Code Violations' },
  { href: '/markets/waterbury-ct', label: '← Back to Waterbury CT' },
];

export default function WaterburyInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, articleSchema('Sell an Inherited House in Waterbury CT', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › Inherited Property</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell an Inherited House in Waterbury CT — Cash, Any Condition</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases inherited houses in Waterbury CT and New Haven County — any condition, no repairs. Waterbury Probate Court: 49 Leavenworth St., (203) 755-1127 (not City Hall). Written offer in 24 hours. CT is an attorney-closing state. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/waterbury-ct/inherited-property" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling an Inherited Home Through Waterbury Probate Court</h2>
          <p className="text-gray-700 mb-4">The <a href="https://ctprobate.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Waterbury Probate Court</a> is at 49 Leavenworth Street, Waterbury CT 06702, phone (203) 755-1127. This is the correct address — not City Hall at 235 Grand Street. Connecticut requires attorney representation at closing (CT is an attorney-closing state), so estate sales coordinate through your estate attorney and the buyer's closing attorney.</p>
          <p className="text-gray-700 mb-4">Waterbury's housing stock reflects its Italian, Portuguese, and Cape Verdean immigrant community heritage — compact frame homes, two-family properties, modest bungalows from the early 20th century. Many Waterbury heirs live in Miami, Boston, or Philadelphia (the three top out-migration destinations per Redfin) and need a buyer who can handle the closing efficiently from a distance. USA Home Buyers coordinates the Connecticut attorney closing and works around your estate timeline.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Waterbury CT" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Waterbury CT Property?" sourcePage="/markets/waterbury-ct/inherited-property" />
      </div>
    </>
  );
}
