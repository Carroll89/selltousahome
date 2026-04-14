/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { lancasterLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Lancaster PA — Cash Offer',
  description:
    'Selling a fire-damaged house in Lancaster PA? We buy properties with fire or smoke damage as-is. No repairs, no cleanup. Cash offer in 24 hours. Lancaster rowhouses, any condition.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/fire-damage` },
};

const articleSch = articleSchema(
  'Selling a Fire-Damaged House in Lancaster PA',
  `${SITE_URL}/markets/lancaster-pa/fire-damage`,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'Can I sell a fire-damaged house in Lancaster PA as-is?',
    answer: 'Yes. You can sell a fire-damaged property in Pennsylvania regardless of damage extent. You\'re required to disclose known material defects (including fire damage) to any buyer under Pennsylvania disclosure law (68 Pa.C.S. § 7301-7315). USA Home Buyers buys fire-damaged properties knowing the full condition — no inspection surprise, no renegotiation after the fact.',
  },
  {
    question: 'Do I need to board up or secure the property before selling?',
    answer: 'Only if required by Lancaster City code enforcement or your insurance company. The City of Lancaster can order emergency boarding or stabilization of unsafe structures. Beyond any required safety measures, you don\'t need to clean up or repair anything before a cash sale to us.',
  },
  {
    question: 'What about the insurance claim — does it affect the sale?',
    answer: 'Insurance proceeds belong to you (or your lender if there\'s a mortgage). A fire insurance payout doesn\'t prevent a sale — it may actually help you cover the mortgage payoff at closing. If there\'s an open insurance claim, we can coordinate the sale timing with your claim. Your insurance company and ours are separate from the purchase transaction.',
  },
  {
    question: 'How do you determine a cash offer for a fire-damaged Lancaster property?',
    answer: 'We assess the after-repair value of the property (what it\'s worth fully restored), then subtract the realistic cost of fire damage remediation — smoke cleanup, structural repair, electrical replacement, reconstruction — plus our holding costs and margin. The result is our cash offer. For Lancaster rowhouses, where shared walls and dense construction can complicate fire spread, we account for party wall and adjacent unit impact.',
  },
  {
    question: 'What if fire damage affected neighboring rowhouses in Lancaster?',
    answer: 'Lancaster\'s Cabbage Hill and West End rowhouses share party walls — fire in one unit can damage adjacent properties. If your property caused or was affected by neighboring fire damage, there may be insurance and liability questions that your attorney and insurance company should address. We can still buy the property; our offer reflects the actual condition and any unresolved damage.',
  },
];

export default function LancasterFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>Fire Damage</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell a Fire-Damaged House in Lancaster PA — As-Is, No Cleanup Required
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Fire damage in a Lancaster rowhouse is especially complicated — shared party walls mean smoke and structural
          damage can spread to adjacent units. Restoration costs in pre-1940 brick construction are real. If you're
          dealing with a fire-damaged property and don't want to manage a restoration project, USA Home Buyers
          buys fire-damaged houses as-is in Lancaster City and throughout Lancaster County.
        </p>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for the Fire-Damaged Lancaster Property" sourcePage="/markets/lancaster-pa" />

        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Fire Damage Is Complex in Lancaster Rowhouses</h2>
          <p className="text-gray-700 mb-4">
            Lancaster City's Cabbage Hill and West End neighborhoods are defined by dense rowhouse blocks —
            attached 2-3 story brick buildings sharing party walls on both sides. Fire in one unit can structurally
            compromise adjacent properties. Smoke and water damage spread quickly in shared construction.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-1940 construction also means wiring, plumbing, and structural elements that are often uncataloged —
            restoration contractors face unknowns that add cost and time. For many Lancaster rowhouse owners,
            the estimated restoration cost exceeds the margin that makes restoration worthwhile. A cash sale
            at as-is value is the cleaner exit.
          </p>
        </section>

        <section className="my-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Pennsylvania Disclosure Requirements</h2>
          <p className="text-gray-700 mb-3">
            Under Pennsylvania's Real Estate Seller Disclosure Law (68 Pa.C.S. § 7301-7315), sellers are required to
            disclose known material defects — including fire and smoke damage — on the Seller's Property Disclosure
            Statement. This applies to all sales, including cash sales.
          </p>
          <p className="text-gray-700">
            When you sell to USA Home Buyers, we purchase with full knowledge of the damage. We conduct our own
            assessment; there's no surprise inspection that triggers renegotiation. The disclosure obligation is
            satisfied, and the sale closes on the agreed terms.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Fire Damage Sales in Lancaster PA" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA</Link>
          <Link href="/markets/lancaster-pa/code-violations" className="text-brand-primary hover:underline">Code Violations →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Fire-Damaged Lancaster Property" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
