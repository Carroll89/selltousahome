/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { hartfordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/code-violations`;

export const metadata: Metadata = {
  title: 'Sell House With Code Violations Hartford CT — We Buy As-Is',
  description:
    'Have code violations on your Hartford CT property? We buy houses with open violations for cash, as-is. No repairs needed. Close in 7-14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a house with code violations in Hartford CT?',
    answer: 'Yes. We buy houses with open code violations from the City of Hartford Department of Development Services. Blight citations, structural issues, lead paint orders, fire code violations — we purchase as-is and handle compliance after closing.',
  },
  {
    question: 'What are the most common violations in Hartford?',
    answer: 'Hartford\'s aging housing stock generates frequent violations for: lead paint (Connecticut has strict lead paint laws under CGS §47a-54f), boiler/heating system failures, electrical code issues (knob-and-tube in pre-1930 homes), structural deficiencies in triple-deckers, blight citations for exterior deterioration, and abandoned property registration requirements.',
  },
  {
    question: 'Will code violations affect the sale price?',
    answer: 'Code violations are factored into our offer, but they don\'t prevent a sale. We assess the cost to remedy and adjust accordingly. Many Hartford homeowners find that selling as-is nets more than spending months and thousands on repairs only to list traditionally.',
  },
  {
    question: 'What if the property is condemned?',
    answer: 'We buy condemned properties. If the City of Hartford has issued a condemnation order, the property can still be sold — you just can\'t occupy it. We purchase condemned homes for cash and handle the remediation.',
  },
];

export default function HartfordCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        hartfordLocalBusinessSchema,
        articleSchema('Sell a House With Code Violations in Hartford CT', pageUrl, '2026-04-20'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a House With Code Violations in Hartford CT — We Buy As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Open code violations from the City of Hartford? USA Home Buyers purchases properties with violations for cash — blight, lead paint, structural, fire code. No repairs, no remediation before selling. Written offer in 24 hours. Close in 7-14 days. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Code violations don't stop us. We buy as-is, close fast, handle compliance after.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Code violations? We buy as-is." sourcePage="/markets/hartford-ct/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Hartford CT — What Homeowners Face</h2>
          <p className="text-gray-700 mb-4">
            Hartford's housing stock is old — most of the city was built before 1940. That means lead paint in nearly every pre-1978 home, knob-and-tube wiring in many pre-1930 buildings, aging boilers, and multi-family structures that have been through decades of deferred maintenance. The City of Hartford Department of Development Services actively enforces housing and blight codes, and violations can escalate quickly.
          </p>
          <p className="text-gray-700 mb-4">
            Connecticut has some of the strictest lead paint laws in the country. Under CGS §47a-54f, landlords must provide lead-free certificates for units occupied by children under six. Lead abatement on a Hartford triple-decker can cost $15,000-$30,000 per unit. For many owners, that number is the breaking point.
          </p>
          <p className="text-gray-700">
            We buy properties with any type of code violation — and we handle compliance after closing. No remediation required from you. No fines to settle first (those are addressed at closing). No city inspections to pass before the sale.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Hartford CT" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Hartford CT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/hartford-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/hartford-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/hartford-ct/fire-damage', label: 'Fire Damage' },
              { href: '/markets/hartford-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/hartford-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/hartford-ct', label: '← Back to Hartford' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Hartford CT Property?" sourcePage="/markets/hartford-ct/code-violations" />
      </div>
    </>
  );
}
