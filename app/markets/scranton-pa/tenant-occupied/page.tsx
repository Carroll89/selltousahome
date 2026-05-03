/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { scrantonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/scranton-pa/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Scranton PA -- Cash Buyers',
  description: 'Tenant-occupied rental in Scranton PA? USA Home Buyers purchases with tenants in place as-is -- cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Will you buy a house with tenants still in it in Scranton?', answer: 'Yes. USA Home Buyers purchases tenant-occupied properties as-is. We deal with the tenant situation after closing -- you don\'t need to handle eviction, lease termination, or relocation. Call 888-274-5006.' },
  { question: 'Do I need to give the tenant notice before selling?', answer: 'Selling the property itself does not require eviction. The tenant\'s lease follows the property to the new owner. We account for tenant occupancy in our offer pricing and handle the transition.' },
  { question: 'What if the tenant is behind on rent?', answer: 'We buy regardless of rental payment status. Unpaid rent, lease violations, and difficult tenant situations are factored into our as-is offer. Call 888-274-5006.' },
  { question: 'How fast can you close on a tenant-occupied property?', answer: 'As few as 7 days from accepted offer. Call 888-274-5006.' },
];

const LINKS = [
  { href: '/markets/scranton-pa/inherited-property', label: 'Inherited Property' },
  { href: '/markets/scranton-pa/foreclosure', label: 'Foreclosure' },
  { href: '/markets/scranton-pa/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/scranton-pa/probate', label: 'Probate' },
  { href: '/markets/scranton-pa/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/scranton-pa/code-violations', label: 'Code Violations' },
  { href: '/markets/scranton-pa/fire-damage', label: 'Fire Damage' },
  { href: '/markets/scranton-pa', label: '<- Back to Scranton PA' },
];

export default function ScrantonTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          scrantonLocalBusinessSchema,
          articleSchema('Sell a Tenant-Occupied House in Scranton PA -- We Buy Rentals As-Is', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/scranton-pa" className="hover:text-white">Scranton PA</Link>
              {' > '} Tenant Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Tenant-Occupied House in Scranton PA -- We Buy Rentals As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Tenant-occupied rental in Scranton PA? USA Home Buyers purchases with tenants in place as-is -- cash offer in 24 hours.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Scranton PA Cash Offer" sourcePage="/markets/scranton-pa/tenant-occupied" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- Sell Tenant-Occupied House Scranton PA -- Cash Buyers" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Scranton PA Home?" sourcePage="/markets/scranton-pa/tenant-occupied" />
      </div>
    </>
  );
}
