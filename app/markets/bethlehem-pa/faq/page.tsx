import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/faq`;

export const metadata: Metadata = {
  title: 'FAQ — Sell House Fast Bethlehem PA',
  description:
    'Frequently asked questions about selling your house fast for cash in Bethlehem PA — transfer tax, probate, timelines, offers, and more. Northampton County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Bethlehem PA?',
    answer: "Once you accept a written offer from USA Home Buyers, we typically close in 7-14 days. We send the written offer within 24 hours of learning about your property. According to Redfin, Bethlehem homes sell in about 10 days on the open market — but that path requires showings, inspections, and waiting on lender approval. With a cash sale, none of that applies.",
  },
  {
    question: 'How much will you pay for my Bethlehem PA house?',
    answer: "Cash offers for Bethlehem homes typically range from 70-80% of fair market value, depending on condition and location. According to Redfin (February 2026), Bethlehem's median sale price is $320,000 — a cash offer on a median home would be approximately $224,000-$256,000. South Side row homes near $245,000 median yield offers of roughly $172,000-$196,000. We cover all closing costs — no agent commissions or fees come out of your number.",
  },
  {
    question: 'What is Bethlehem PA\'s transfer tax?',
    answer: "Bethlehem PA has a standard 2% total real estate transfer tax — 1% Pennsylvania state tax plus 1% City of Bethlehem local tax. By convention, buyer and seller split this 50/50. On a $320,000 home, the total is $6,400 with each party paying $3,200. When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax. Source: City of Bethlehem Ordinance Article 335.",
  },
  {
    question: 'Do I need to make repairs before selling to you?',
    answer: "No. We buy Bethlehem properties in any condition — no repairs, no cleaning, no staging. Bethlehem's housing stock is predominantly pre-war row homes and twins; deferred maintenance, aging electrical, and outdated systems are common and expected. Take what you want, leave the rest.",
  },
  {
    question: 'What areas near Bethlehem do you buy in?',
    answer: "We serve all of Bethlehem — South Side, Central, Northeast, West Side, and the Historic North Side — plus surrounding communities: Fountain Hill, Hellertown, Bethlehem Township, Hanover Township, Freemansburg, Nazareth, Northampton Borough, Palmer Township, Wilson Borough, Easton, Emmaus, Whitehall Township, and Catasauqua.",
  },
  {
    question: '¿Hablamos español? / Do you work with Spanish-speaking sellers?',
    answer: "Sí, hablamos español. According to the U.S. Census Bureau ACS 2024, 31.3% of Bethlehem residents are Hispanic or Latino. We serve Bethlehem's South Side community in English and Spanish. Call us to discuss your property in whichever language you prefer.",
  },
  {
    question: 'What if I owe more than my Bethlehem house is worth?',
    answer: "If you owe more than the property's value (negative equity), a standard sale may not cover your mortgage balance. Options include short sale, deed in lieu of foreclosure, or loan modification. We can advise on what makes sense for your situation. Northampton County Legal Aid also provides free guidance at (610) 317-8757.",
  },
  {
    question: 'Is USA Home Buyers a legitimate company?',
    answer: "We're a legitimate Pennsylvania LLC with a verifiable history of closed sales across Northampton County and the Lehigh Valley. Every offer is in writing — a formal purchase agreement with price, terms, and closing date. No verbal promises. You can verify our Pennsylvania business registration at corporations.pa.gov.",
  },
  {
    question: 'What closing costs do I pay when selling to USA Home Buyers?',
    answer: "None. We cover all closing costs: transfer tax, recording fees, title insurance, attorney fees, and any other transaction costs. What we offer is what you walk away with — no deductions at closing.",
  },
  {
    question: 'What happens after I submit the form?',
    answer: "We call you within hours during business hours. We'll ask about the property — address, condition, your timeline, and your situation. Within 24 hours, you receive a written cash offer. The offer is yours to review at your own pace — no pressure, no expiration games.",
  },
];

export default function BethlehemFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        faqSchema(FAQ_ITEMS),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' › '}
          <Link href="/markets/bethlehem-pa" className="hover:text-brand-primary">Bethlehem PA</Link>
          {' › '}
          <span>FAQ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Frequently Asked Questions — Selling Your Bethlehem PA House for Cash
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Everything you need to know about selling your home for cash in Bethlehem PA and Northampton County —
          offer timelines, transfer tax, probate, neighborhoods, and how the process works.
        </p>

        <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="font-semibold text-brand-dark mb-1">Have a question not answered here?</p>
          <p className="text-sm text-gray-700 mb-2">Call us directly — we answer 24/7.</p>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-4 py-2 text-sm transition-colors">
            📞 {PHONE}
          </a>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="" />

        <section className="my-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Explore by Situation</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Inherited Property', href: '/markets/bethlehem-pa/inherited-property' },
              { label: 'Foreclosure', href: '/markets/bethlehem-pa/foreclosure' },
              { label: 'Divorce Sale', href: '/markets/bethlehem-pa/divorce-sale' },
              { label: 'Probate', href: '/markets/bethlehem-pa/probate' },
              { label: 'Tenant-Occupied', href: '/markets/bethlehem-pa/tenant-occupied' },
              { label: 'Code Violations', href: '/markets/bethlehem-pa/code-violations' },
              { label: 'Fire Damage', href: '/markets/bethlehem-pa/fire-damage' },
              { label: 'Market Report', href: '/markets/bethlehem-pa/market-report' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-brand-light hover:bg-blue-50 rounded-xl p-4 text-brand-primary font-medium text-sm transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Get Your Bethlehem PA Cash Offer?" sourcePage="/markets/bethlehem-pa/faq" />
      </div>
    </>
  );
}
