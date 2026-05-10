/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { richmondLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/richmond-va/faq`;

export const metadata: Metadata = {
  title: 'FAQs -- Selling a House in Richmond VA',
  description: 'Common questions about selling your house fast for cash in Richmond VA. Richmond City (independent city) market specifics and process information.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Richmond VA?', answer: 'USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours. Call 888-274-5006.' },
  { question: 'How much will you pay for my Richmond home?', answer: 'For average-condition properties, cash offers typically land around 70–80% of fair market value — before factoring in repair costs, property condition, title issues, holding costs, and risk adjustments specific to your home. We cover all closing costs.' },
  { question: 'What closing costs apply when selling in Richmond VA?', answer: 'State grantor\'s tax $0.50/$500 (seller); state recordation $0.25/$100 (buyer); Richmond City local add-on -- verify with settlement agent. When you sell to USA Home Buyers, we cover all closing costs.' },
  { question: 'Do I need to make repairs?', answer: 'No. We buy in any condition -- no repairs, no cleaning, no staging required.' },
  { question: 'How does the VA foreclosure process work?', answer: 'Virginia non-judicial foreclosure via deed of trust -- VA Code 55.1-321; ~45-60 days; no post-sale redemption. Consult a licensed real estate attorney for your specific situation.' },
  { question: 'How does probate work in Richmond City (independent city)?', answer: 'Richmond City Circuit Court Clerk, 400 N. 9th St., Richmond VA 23219, (804) 646-6505. Cash buyers can purchase probate properties directly once the court authorizes the sale.' },
  { question: 'What happens after I submit the form?', answer: 'We call within business hours and send a written cash offer within 24 hours. No pressure.' },
];

const LINKS = [
  { href: '/markets/richmond-va/inherited-property', label: 'Inherited Property' },
  { href: '/markets/richmond-va/foreclosure', label: 'Foreclosure' },
  { href: '/markets/richmond-va/divorce-sale', label: 'Divorce Sale' },
  { href: '/markets/richmond-va/probate', label: 'Probate' },
  { href: '/markets/richmond-va/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/richmond-va/code-violations', label: 'Code Violations' },
  { href: '/markets/richmond-va/fire-damage', label: 'Fire Damage' },
  { href: '/markets/richmond-va', label: '<- Back to Richmond VA' },
];

export default function RichmondFaqPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          richmondLocalBusinessSchema,
          articleSchema('FAQs -- Selling a House Fast in Richmond VA', pageUrl, '2026-05-03'),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/richmond-va" className="hover:text-white">Richmond VA</Link>
              {' > '} Faq
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              FAQs -- Selling a House Fast in Richmond VA
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">Quick Answer</p>
              <p className="text-white text-sm leading-relaxed">Common questions about selling your house fast for cash in Richmond VA. Richmond City (independent city) market specifics and process information.</p>
            </div>
            <a href="tel:+18882745006" className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call 888-274-5006 -- We Answer 24/7
            </a>
          </div>
          <div className="w-full">
            <CashOfferForm variant="hero" headline="Get Your Richmond VA Cash Offer" sourcePage="/markets/richmond-va/faq" />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="FAQs -- FAQs -- Selling a House in Richmond VA" />
        <nav className="my-8 flex flex-wrap gap-3">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">{l.label}</Link>
          ))}
        </nav>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Richmond VA Home?" sourcePage="/markets/richmond-va/faq" />
      </div>
    </>
  );
}
