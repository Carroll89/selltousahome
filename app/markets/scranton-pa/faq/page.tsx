/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { scrantonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/scranton-pa/faq`;

export const metadata: Metadata = {
  title: 'FAQs -- Selling a House in Scranton PA',
  description: 'Common questions about selling your house fast for cash in Scranton PA. Lackawanna County market specifics and process information.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Scranton PA?', answer: 'USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours. Call 888-274-5006.' },
  { question: 'How much will you pay for my Scranton home?', answer: 'For average-condition properties, cash offers typically land around 70–80% of fair market value — before factoring in repair costs, property condition, title issues, holding costs, and risk adjustments specific to your home. We cover all closing costs.' },
  { question: 'What closing costs apply when selling in Scranton PA?', answer: '3.7% total: 1% PA + 1% Lackawanna County + 1.7% City of Scranton. When you sell to USA Home Buyers, we cover all closing costs.' },
  { question: 'Do I need to make repairs?', answer: 'No. We buy in any condition -- no repairs, no cleaning, no staging required.' },
  { question: 'How does the PA foreclosure process work?', answer: 'Pennsylvania judicial foreclosure -- Lackawanna County Court of Common Pleas; ~9-18 months; mediation program available. Consult a licensed real estate attorney for your specific situation.' },
  { question: 'How does probate work in Lackawanna County?', answer: 'Lackawanna County Register of Wills, 123 Wyoming Ave Suite 521, Scranton PA 18503, (570) 963-6702. Cash buyers can purchase probate properties directly once the court authorizes the sale.' },
  { question: 'What happens after I submit the form?', answer: 'We call within business hours and send a written cash offer within 24 hours. No pressure.' },
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

export default function ScrantonFaqPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          scrantonLocalBusinessSchema,
          articleSchema('FAQs -- Selling a House Fast in Scranton PA', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/scranton-pa" className="hover:text-white">Scranton PA</Link>
              {' > '} Faq
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              FAQs -- Selling a House Fast in Scranton PA
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Common questions about selling your house fast for cash in Scranton PA. Lackawanna County market specifics and process information.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Scranton PA Cash Offer" sourcePage="/markets/scranton-pa/faq" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- FAQs -- Selling a House in Scranton PA" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Scranton PA Home?" sourcePage="/markets/scranton-pa/faq" />
      </div>
    </>
  );
}
