/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { madisonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/madison-wi/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Madison WI — We Buy With Tenants',
  description: 'Selling a rental property in Madison WI with tenants in place? We buy tenant-occupied houses as-is. No eviction needed, no repairs. Serving Dane County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can you buy my Madison rental property with a tenant living there?', answer: "Yes. We purchase tenant-occupied properties throughout Madison and Dane County. We don't require vacant possession at closing. The lease transfers to us as the new owner." },
  { question: 'Do I need to evict the tenant first?', answer: "No. We buy with tenants in place. Madison has strong tenant protections — eviction through small claims court takes time even in clear non-payment cases. We handle the tenant relationship after closing." },
  { question: 'How does Wisconsin eviction work if I do need to go that route?', answer: "Wisconsin eviction requires a court order from Dane County Circuit Court. The process starts with a 5-day notice (non-payment) or 14-day notice (other violations), then a court filing, then a hearing, then a writ of restitution. Total: typically 3–6 weeks minimum. Consult a Wisconsin-licensed attorney for your specific situation. Source: Wisconsin Statutes Ch. 799." },
  { question: 'What if the tenant has damaged the property?', answer: "We factor condition into our offer. Damaged units, unpaid rent, security deposit disputes — these don't stop us from making an offer. We buy as-is." },
];

export default function MadisonTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, articleSchema('Sell a Tenant-Occupied Property in Madison WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/madison-wi" className="hover:text-white">Madison WI</Link> › Tenant-Occupied</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Tenant-Occupied Rental in Madison WI — No Eviction Needed</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases tenant-occupied rental properties in Madison WI — no eviction required, no repairs, we buy as-is. Madison has significant rental stock near UW-Madison and throughout Dane County. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/madison-wi/tenant-occupied" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Madison's Rental Market — What Tired Landlords Face</h2>
          <p className="text-gray-700 mb-4">Madison has a large rental market driven by the University of Wisconsin's approximately 47,000 students, plus state government employees and growing tech sector workers. Many rental properties near campus — older duplexes on Atwood Avenue, multi-units in the Marquette and Schenk neighborhoods — have been landlord-owned for 20–30 years. When the owners are ready to exit, tenant complications are the most common reason a conventional sale becomes difficult.</p>
          <p className="text-gray-700 mb-4">Madison has local tenant protections that go beyond Wisconsin state minimums — consult a Wisconsin-licensed attorney for current Madison-specific tenant protection ordinances before taking any action involving your tenants. We buy with tenants in place, so you don't have to navigate those ordinances yourself.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Madison WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/madison-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/madison-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/madison-wi/probate', label: 'Probate' }, { href: '/markets/madison-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/madison-wi/code-violations', label: 'Code Violations' }, { href: '/markets/madison-wi', label: '← Back to Madison WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Madison WI Rental Property?" sourcePage="/markets/madison-wi/tenant-occupied" />
      </div>
    </>
  );
}
