/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/code-violations`;

export const metadata: Metadata = {
  title: 'Code Violations Bethlehem PA',
  description:
    'Selling a Bethlehem PA home with code violations? Open permits, failed inspections, condemned properties — we buy them as-is. Cash offer in 24 hours, Northampton County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a Bethlehem house with open code violations?',
    answer: "Yes. We buy properties with open code violations, failed inspections, and outstanding permits throughout Northampton County. Code violations don't prevent a cash sale — they get factored into our offer rather than blocking the transaction. We take responsibility for the violations after closing.",
  },
  {
    question: 'What kind of code violations are common in Bethlehem PA?',
    answer: "Bethlehem's pre-war South Side row homes commonly have issues with: knob-and-tube or aluminum wiring (flagged under NEC standards), single-stack plumbing systems, inadequate egress windows, unpermitted additions or finished basements, exterior facade violations (crumbling mortar, deteriorated stoops), and heating system failures. These are common in 100-year-old housing stock — not disqualifying for a cash sale.",
  },
  {
    question: 'Will code violations reduce my offer price?',
    answer: "Yes, but proportionally. We estimate the cost to remediate the violations and factor that into our offer. The alternative — fronting $15,000-$40,000 in repairs to satisfy code before listing — carries its own cost and timeline risk. For most sellers, accepting a lower as-is cash offer is more practical than investing in a property they're trying to exit.",
  },
  {
    question: 'What if the City of Bethlehem has placed a lien on the property?',
    answer: "Municipal liens for code violations or unpaid citations get resolved at closing from the sale proceeds. The title company handles the lien payoff. You don't need to resolve them before selling — just disclose them. We factor lien amounts into our analysis.",
  },
  {
    question: 'Does the City of Bethlehem have an active code enforcement program?',
    answer: "Yes. Bethlehem has a Bureau of Inspection Services that enforces the Pennsylvania Uniform Construction Code and local property maintenance standards. Properties that have received notices of violation or are subject to active enforcement action can still be sold to a cash buyer. Contact the Bureau of Inspection Services at City Hall, 10 East Church Street, Bethlehem PA 18018 for a violation status check.",
  },
  {
    question: 'Can I sell a condemned house in Bethlehem PA?',
    answer: "In many cases, yes — even condemned properties can be sold. A condemnation order limits occupancy, not the owner's ability to sell. A cash buyer experienced with distressed properties can purchase a condemned Bethlehem home and handle the rehabilitation or demolition after closing.",
  },
];

export default function BethlehemCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('Selling a House with Code Violations in Bethlehem PA — Northampton County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/bethlehem-pa-hero-640.jpg 640w, /images/optimized/bethlehem-pa-hero-828.jpg 828w, /images/optimized/bethlehem-pa-hero-1080.jpg 1080w, /images/optimized/bethlehem-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bethlehem-pa-hero-1200.jpg"
            alt="Bethlehem PA home with code violations — sell as-is for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bethlehem-pa" className="hover:text-white">Bethlehem PA</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Bethlehem PA Home With Code Violations
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Open permits, failed inspections, active violations, condemned properties — we buy Bethlehem
              homes in any code compliance situation. No repairs required before closing.
              Written cash offer in 24 hours.
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
            <CashOfferForm variant="hero" sourcePage="/markets/bethlehem-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, USA Home Buyers purchases houses with code violations in Bethlehem, PA — as-is, with no repairs required before closing. Bethlehem's South Side row home stock (most built for Bethlehem Steel workers between 1890 and 1930) frequently has deferred maintenance violations, open permit issues, or City of Bethlehem Notice of Violation letters. When we buy your property, existing violations transfer with the deed. You close on your timeline without touching a single violation. Written cash offer in 24 hours.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Code Violations Are Common in Bethlehem&apos;s Pre-War Housing Stock
          </h2>
          <p className="text-gray-700 mb-3">
            According to U.S. Census Bureau data (2020), 30.8% of Bethlehem&apos;s housing units are attached row homes —
            the majority built between 1890 and 1930. A century of aging brings code compliance challenges that
            modern inspectors flag regularly: knob-and-tube wiring, single-stack DWV systems, undersized egress
            windows, and facades that haven&apos;t seen repointing since the Truman administration.
          </p>
          <p className="text-gray-700 mb-3">
            Retail buyers using mortgage financing can&apos;t close on properties with active code violations in many cases —
            lenders require inspections to be cleared. A cash buyer operates outside that requirement. We evaluate
            the property as-is, offer on that basis, and take responsibility for remediation after closing.
          </p>
          <p className="text-gray-700 mb-4">
            Common situations we handle: open demolition orders, active rental registration violations, failed
            electrical or plumbing inspections, outstanding permit violations from unpermitted work, and
            properties with municipal liens from years of citations.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.dli.pa.gov/Businesses/Construction-Accreditation/UCC/Pages/default.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">PA Department of Labor &amp; Industry — Uniform Construction Code (dli.pa.gov)</a>,
            Pennsylvania&apos;s UCC applies statewide, governing minimum standards for all residential structures.
            Properties in violation of the UCC can still be sold — the buyer assumes responsibility for
            bringing the property into compliance after closing.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.bethlehem-pa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">City of Bethlehem (bethlehem-pa.gov)</a>,
            the Bureau of Inspection Services enforces both the UCC and local property maintenance standards.
            Sellers can request a violation status summary from the Bureau before listing — or simply disclose
            known violations to a cash buyer like us and close without remediation.
          </p>
        </section>

        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">City of Bethlehem Code Enforcement</h2>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-sm">
            <p className="font-semibold text-brand-dark">Bureau of Inspection Services</p>
            <p className="text-gray-600">City Hall, 10 East Church Street, Bethlehem, PA 18018</p>
            <p className="text-gray-600 mt-1">
              Enforces the Pennsylvania Uniform Construction Code and local property maintenance standards.
            </p>
            <p className="text-gray-600 mt-1">
              <a href="https://www.bethlehem-pa.gov" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                bethlehem-pa.gov →
              </a>
            </p>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Bethlehem Home — Violations Included"
          subheadline="We handle the code compliance after closing. No repairs before we buy."
          sourcePage="/markets/bethlehem-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Code Violations in Bethlehem PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline">Bethlehem PA market overview →</Link></li>
            <li><Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Selling a house as-is in Pennsylvania →</Link></li>
            <li><Link href="/guides/back-taxes" className="text-brand-primary hover:underline">Selling with back taxes and liens →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Bethlehem Home Despite Code Violations?" sourcePage="/markets/bethlehem-pa" />
      </div>
    </>
  );
}
