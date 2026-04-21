/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { hartfordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied Property Hartford CT — No Eviction Needed',
  description:
    'Selling a rental property in Hartford CT with tenants? We buy tenant-occupied properties for cash, as-is. No eviction required. Close in 7-14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to evict tenants before selling in Hartford CT?',
    answer: 'No. We buy properties with tenants in place — paying or non-paying. Connecticut eviction through Housing Court can take 3-6 months or longer, especially in Hartford where the court docket is heavy. A direct cash sale skips that entire process.',
  },
  {
    question: 'How does Connecticut eviction affect the sale timeline?',
    answer: 'Connecticut requires a "Notice to Quit" followed by a summary process action in Housing Court. In Hartford, the timeline from notice to physical removal is typically 3-6 months minimum. Non-payment cases may move faster than lease violation cases, but neither is quick. We eliminate this delay by purchasing with tenants in place.',
  },
  {
    question: 'Will you buy even if the tenant isn\'t paying?',
    answer: 'Yes. Non-paying tenants, lease violations, unauthorized occupants — we\'ve handled all of these in Hartford County. The tenant situation is factored into our offer, but we buy regardless.',
  },
  {
    question: 'What happens to the tenants after you buy?',
    answer: 'That depends on the property and the tenants. We honor existing leases where legally required under Connecticut law. Our approach varies by situation — sometimes tenants stay, sometimes we work with them on a transition.',
  },
];

export default function HartfordTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        hartfordLocalBusinessSchema,
        articleSchema('Sell a Tenant-Occupied Property in Hartford CT — No Eviction Required', pageUrl, '2026-04-20'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Tenant-Occupied Property in Hartford CT — No Eviction Needed
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Tired of being a landlord in Hartford? USA Home Buyers purchases tenant-occupied properties for cash — tenants in place, no eviction required. Written offer in 24 hours. Close in 7-14 days. We handle the tenant situation after closing. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy rental properties with tenants in place. No eviction, no vacancy, no waiting.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Tenant-occupied? We buy as-is." sourcePage="/markets/hartford-ct/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Rental Property in Hartford CT</h2>
          <p className="text-gray-700 mb-4">
            Hartford has a high percentage of renter-occupied housing — over 70% of city households rent. That means a lot of landlords, and a lot of landlord fatigue. Between Hartford Housing Court's slow eviction docket, aging multi-family housing stock that needs constant repair, and tenants who stop paying, the math stops working.
          </p>
          <p className="text-gray-700 mb-4">
            We buy two-families, triple-deckers, and multi-unit properties across Hartford County with tenants in place. Non-paying tenants, Section 8, month-to-month, lease violations — we've seen it all and we buy regardless. You don't need to wait for an eviction, a vacancy, or a turnover to sell.
          </p>
          <p className="text-gray-700">
            The Connecticut eviction process requires a Notice to Quit followed by summary process in Housing Court. In Hartford, that timeline is typically 3-6 months minimum. A direct cash sale to us closes in 7-14 days — you're out of the landlord business by the end of the month.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Hartford CT" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Hartford CT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/hartford-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/hartford-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/hartford-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/hartford-ct/probate', label: 'Probate' },
              { href: '/markets/hartford-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/hartford-ct', label: '← Back to Hartford' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Hartford CT Rental Property?" sourcePage="/markets/hartford-ct/tenant-occupied" />
      </div>
    </>
  );
}
