/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { chambersburgLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/chambersburg-pa/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Chambersburg PA — We Buy With Tenants',
  description: 'Selling a rental property in Chambersburg PA with tenants in place? We buy tenant-occupied houses as-is — no eviction needed, no repairs. Serving Franklin County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can you buy my Chambersburg rental property with tenants in place?', answer: "Yes. We purchase tenant-occupied properties throughout Chambersburg and Franklin County. We don't require vacant possession at closing. The lease transfers to us as the new owner." },
  { question: 'How does Pennsylvania eviction work?', answer: "Pennsylvania eviction requires a Magisterial District Court judgment. The landlord serves notice (typically 10 days for non-payment), then files in Magisterial District Court, then attends a hearing, then executes a writ of possession through the Franklin County Sheriff's office. Consult a Pennsylvania-licensed attorney for your specific situation." },
  { question: 'What if the tenant has caused significant damage?', answer: "We factor condition into our offer. Damaged units, unpaid rent, security deposit disputes — these don't stop us from making an offer. We buy as-is." },
  { question: 'Do I need a rent roll or lease documents to sell?', answer: "Helpful but not required. We can make an offer based on what you know about the tenancy. If we need documentation, we'll tell you specifically what helps." },
];

const LINKS = [
  { href: '/markets/chambersburg-pa/inherited-property', label: 'Inherited Property' },
  { href: '/markets/chambersburg-pa/foreclosure', label: 'Foreclosure' },
  { href: '/markets/chambersburg-pa/probate', label: 'Probate' },
  { href: '/markets/chambersburg-pa/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/chambersburg-pa/code-violations', label: 'Code Violations' },
  { href: '/markets/chambersburg-pa', label: '← Back to Chambersburg PA' },
];

export default function ChambersburgTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, articleSchema('Sell a Tenant-Occupied Property in Chambersburg PA', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › Tenant-Occupied</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Tenant-Occupied Rental in Chambersburg PA — No Eviction Needed</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases tenant-occupied rental properties in Chambersburg PA and Franklin County — no eviction required, no repairs, we buy as-is. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/chambersburg-pa/tenant-occupied" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Chambersburg Rental Market — Tired Landlord Situations</h2>
          <p className="text-gray-700 mb-4">Chambersburg has a working-class rental market driven by its role as Franklin County's commercial center and proximity to the Maryland border. Older rental homes in the Borough — brick row properties, frame duplexes, and mid-century ranch conversions — often come with long-term tenancy relationships that make traditional listings complicated. When a landlord is ready to exit and the tenant relationship is difficult, a cash buyer who doesn't need vacant possession is the simplest path.</p>
          <p className="text-gray-700 mb-4">We buy with tenants in place. The existing lease transfers to us as the new owner. You're done at closing.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Chambersburg PA" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map(link => <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>)}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Chambersburg PA Rental Property?" sourcePage="/markets/chambersburg-pa/tenant-occupied" />
      </div>
    </>
  );
}
