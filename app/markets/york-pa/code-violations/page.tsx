/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/code-violations`;

export const metadata: Metadata = {
  title: 'Code Violations York PA',
  description:
    'Selling a York PA home with code violations? Open permits, failed inspections, condemned properties — we buy them as-is. Cash offer in 24 hours, York County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a York PA house with open code violations?',
    answer: "Yes. We buy properties with open code violations, failed inspections, and outstanding permits throughout York County. Code violations don't prevent a cash sale — they get factored into our offer rather than blocking the transaction. We take responsibility for the violations after closing.",
  },
  {
    question: 'What kind of code violations are common in York PA?',
    answer: "York's pre-1940 row homes commonly have: knob-and-tube or aluminum wiring (flagged under NEC standards), aging plumbing with cast iron or lead pipes, inadequate egress windows, unpermitted additions, exterior facade deterioration, and heating system failures. These are standard in 100-year-old industrial-era housing — not disqualifying for a cash sale.",
  },
  {
    question: 'Will code violations reduce my York offer price?',
    answer: "Yes, proportionally. We estimate the cost to remediate the violations and factor that into our offer. The alternative — fronting $15,000-$40,000 in repairs to satisfy code before listing — carries its own cost and timeline risk. For most sellers, accepting a lower as-is cash offer is more practical than investing in a property they're trying to exit.",
  },
  {
    question: 'What if the City of York has placed a lien on the property?',
    answer: "Municipal liens for code violations or unpaid citations get resolved at closing from the sale proceeds. The title company handles the lien payoff. You don't need to resolve them before selling — just disclose them. We factor lien amounts into our analysis.",
  },
  {
    question: 'How does York City enforce code violations?',
    answer: "According to the City of York (yorkcity.org), York City has an active code enforcement program under the PA Uniform Construction Code. Properties that receive notices of violation or are under active enforcement action can still be sold to a cash buyer — we take on those obligations at closing.",
  },
];

export default function YorkCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('Selling a House with Code Violations in York PA — York County', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/york-pa-hero-640.jpg 640w, /images/optimized/york-pa-hero-828.jpg 828w, /images/optimized/york-pa-hero-1080.jpg 1080w, /images/optimized/york-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/york-pa-hero-1200.jpg"
            alt="York PA home with code violations — sell as-is for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/york-pa" className="hover:text-white">York PA</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a York PA Home With Code Violations
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Open permits, failed inspections, active violations, condemned properties — we buy York
              homes in any code compliance situation. No repairs required before closing.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ Open violations — no problem</span>
              <span>✓ We take on the liens</span>
              <span>✓ Close in 7-14 days</span>
              <span>✓ No repairs before closing</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/york-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, USA Home Buyers purchases houses with code violations in York, PA — as-is, with no repairs required before closing. York's historic row home neighborhoods (Northeast York, Southwest York, and South Penn) carry York City Bureau of Code Enforcement violations for deferred maintenance, exterior disrepair, or open permit work. When we buy, violations transfer with the deed — you close without addressing them. Written cash offer in 24 hours.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Code Violations Are Common in York's Pre-War Housing Stock
          </h2>
          <p className="text-gray-700 mb-3">
            York City's row home stock is predominantly built between 1890 and 1930. A century of aging
            brings code compliance challenges that modern inspectors flag regularly: knob-and-tube wiring,
            aging cast-iron plumbing, undersized egress windows, and facades that haven't seen tuckpointing
            since the Eisenhower administration.
          </p>
          <p className="text-gray-700 mb-3">
            Retail buyers using mortgage financing can't close on properties with active code violations in
            many cases — lenders require inspections to be cleared. A cash buyer operates outside that
            requirement. We evaluate the property as-is, offer on that basis, and take responsibility for
            remediation after closing.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.dli.pa.gov/Businesses/Construction-Accreditation/UCC/Pages/default.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">PA Department of Labor &amp; Industry — Uniform Construction Code (dli.pa.gov)</a>,
            Pennsylvania's UCC applies statewide, setting minimum standards for all residential structures.
            Properties in violation of the UCC can still be sold — the buyer assumes responsibility for
            bringing the property into compliance after closing.
          </p>
          <p className="text-gray-700 mb-4">
            According to the{' '}
            <a href="https://yorkcity.org/government/authorities-boards-and-commissions/codified-ordinances/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">City of York Codified Ordinances (yorkcity.org)</a>,
            York City has local property maintenance standards in addition to the statewide UCC.
            Sellers can request a violation status summary from York City's code enforcement office —
            or simply disclose known violations to us and close without remediation.
          </p>
        </section>

        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">City of York Code Enforcement</h2>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-sm">
            <p className="font-semibold text-brand-dark">City of York — Code Enforcement</p>
            <p className="text-gray-600">101 S. George Street, York, PA 17401</p>
            <p className="text-gray-600 mt-1">
              Enforces the Pennsylvania Uniform Construction Code and local property maintenance standards.
            </p>
            <p className="text-gray-600 mt-1">
              <a href="https://yorkcity.org" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                yorkcity.org →
              </a>
            </p>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your York Home — Violations Included"
          subheadline="We handle code compliance after closing. No repairs before we buy."
          sourcePage="/markets/york-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Code Violations in York PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/york-pa" className="text-brand-primary hover:underline">York PA market overview →</Link></li>
            <li><Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Selling a house as-is in Pennsylvania →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your York Home Despite Code Violations?" sourcePage="/markets/york-pa" />
      </div>
    </>
  );
}
