/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { stLouisLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/st-louis-mo/neighborhoods`;

export const metadata: Metadata = {
  title: 'St. Louis MO Neighborhoods -- We Buy Houses in Every Area',
  description: 'USA Home Buyers purchases homes in all St. Louis MO neighborhoods and St. Louis City (independent city) communities -- any condition, any situation.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What neighborhoods in St. Louis do you buy in?', answer: 'USA Home Buyers purchases homes throughout all St. Louis MO neighborhoods and St. Louis City (independent city) communities. No area is excluded. Call 888-274-5006.' },
  { question: 'Does the neighborhood affect your offer?', answer: 'Yes -- the offer is based on comparable sales in your specific neighborhood, the condition of the property, and the current market.' },
  { question: 'Do you buy in the suburbs of St. Louis?', answer: 'Yes. We serve St. Louis proper and the surrounding St. Louis City (independent city) communities. Call 888-274-5006.' },
  { question: 'What closing costs apply in St. Louis MO?', answer: 'No Missouri state or local transfer tax. USA Home Buyers covers all closing costs when we purchase.' },
  { question: 'How fast can you close?', answer: 'As few as 7 days from accepted offer. Call 888-274-5006.' },
];

const LINKS = [
  { href: '/markets/st-louis-mo/inherited-property', label: 'Inherited Property' },
  { href: '/markets/st-louis-mo/foreclosure', label: 'Foreclosure' },
  { href: '/markets/st-louis-mo/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/st-louis-mo/probate', label: 'Probate' },
  { href: '/markets/st-louis-mo/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/st-louis-mo/code-violations', label: 'Code Violations' },
  { href: '/markets/st-louis-mo/fire-damage', label: 'Fire Damage' },
  { href: '/markets/st-louis-mo', label: '<- Back to St. Louis MO' },
];

export default function StLouisNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          stLouisLocalBusinessSchema,
          articleSchema('St. Louis MO Neighborhoods -- Cash Home Buyers in Every Area', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/st-louis-mo" className="hover:text-white">St. Louis MO</Link>
              {' > '} Neighborhoods
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              St. Louis MO Neighborhoods -- Cash Home Buyers in Every Area
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases homes in all St. Louis MO neighborhoods and St. Louis City (independent city) communities -- any condition, any situation.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your St. Louis MO Cash Offer" sourcePage="/markets/st-louis-mo/neighborhoods" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- St. Louis MO Neighborhoods -- We Buy Houses in Every Area" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your St. Louis MO Home?" sourcePage="/markets/st-louis-mo/neighborhoods" />
      </div>
    </>
  );
}
