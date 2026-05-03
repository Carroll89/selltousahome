/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { stLouisLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/st-louis-mo/faq`;

export const metadata: Metadata = {
  title: 'FAQs -- Selling a House in St. Louis MO',
  description: 'Common questions about selling your house fast for cash in St. Louis MO. St. Louis City (independent city) market specifics and process information.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in St. Louis MO?', answer: 'USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours. Call 888-274-5006.' },
  { question: 'How much will you pay for my St. Louis home?', answer: 'Cash offers typically range from 70-82% of fair market value. We cover all closing costs.' },
  { question: 'What closing costs apply when selling in St. Louis MO?', answer: 'No Missouri state or local transfer tax. When you sell to USA Home Buyers, we cover all closing costs.' },
  { question: 'Do I need to make repairs?', answer: 'No. We buy in any condition -- no repairs, no cleaning, no staging required.' },
  { question: 'How does the MO foreclosure process work?', answer: 'Missouri non-judicial foreclosure via deed of trust -- RSMo 443.310; ~60-90 days. Consult a licensed real estate attorney for your specific situation.' },
  { question: 'How does probate work in St. Louis City (independent city)?', answer: 'St. Louis City Circuit Court (22nd Judicial Circuit), 10 N. Tucker Blvd., St. Louis MO 63101, (314) 622-4498. Cash buyers can purchase probate properties directly once the court authorizes the sale.' },
  { question: 'What happens after I submit the form?', answer: 'We call within business hours and send a written cash offer within 24 hours. No pressure.' },
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

export default function StLouisFaqPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          stLouisLocalBusinessSchema,
          articleSchema('FAQs -- Selling a House Fast in St. Louis MO', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/st-louis-mo" className="hover:text-white">St. Louis MO</Link>
              {' > '} Faq
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              FAQs -- Selling a House Fast in St. Louis MO
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Common questions about selling your house fast for cash in St. Louis MO. St. Louis City (independent city) market specifics and process information.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your St. Louis MO Cash Offer" sourcePage="/markets/st-louis-mo/faq" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- FAQs -- Selling a House in St. Louis MO" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your St. Louis MO Home?" sourcePage="/markets/st-louis-mo/faq" />
      </div>
    </>
  );
}
