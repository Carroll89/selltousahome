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
    answer: 'Yes. You can usually sell a fire-damaged property in Pennsylvania. Under Pennsylvania\'s Real Estate Seller Disclosure Law (68 Pa.C.S. § 7301-7315), sellers must disclose known material defects unless an exemption applies. USA Home Buyers buys fire-damaged properties knowing the full condition — no inspection surprise, no renegotiation after the fact.',
  },
  {
    question: 'Do I need to board up or secure the property before selling?',
    answer: 'Only if required by Lancaster City code enforcement, your insurer, or another authority. City code officials may require emergency boarding or stabilization of unsafe structures. Beyond any required safety measures, you don\'t need to clean up or repair anything before a cash sale to us.',
  },
  {
    question: 'What about the insurance claim — does it affect the sale?',
    answer: 'Insurance proceeds depend on the policy, lender requirements, and claim status. A fire insurance payout does not automatically prevent a sale, but coordinate the claim with your insurer, lender, and closing team. If there\'s an open insurance claim, we can coordinate the sale timing with your claim. Your insurance company and ours are separate from the purchase transaction.',
  },
  {
    question: 'How do you determine a cash offer for a fire-damaged Lancaster property?',
    answer: 'We assess the after-repair value of the property (what it\'s worth fully restored), then subtract the realistic cost of fire damage remediation — smoke cleanup, structural repair, electrical replacement, reconstruction — plus our holding costs and margin. The result is our cash offer. For Lancaster rowhouses, where shared walls and dense construction can complicate fire spread, we account for party wall and adjacent unit impact.',
  },
  {
    question: 'What if fire damage affected neighboring rowhouses in Lancaster?',
    answer: 'Lancaster rowhouses in neighborhoods like Cabbage Hill and West End often share party walls, so fire in one unit can affect adjacent properties. If your property caused or was affected by neighboring fire damage, there may be insurance and liability questions that your attorney and insurance company should address. We can still buy the property; our offer reflects the actual condition and any unresolved damage.',
  },
];

export default function LancasterFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, USA Home Buyers buys fire-damaged houses in Lancaster, PA — as-is, regardless of the extent of damage. Whether it's smoke damage, water damage from fire suppression, or a major structural loss, we assess and purchase in current condition. You don't need to coordinate with your insurance company, open a claim, or make any repairs before closing. We handle everything from acquisition forward. Written cash offer within 24 hours.</p>
        </div>

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
            attached brick buildings sharing party walls on both sides. In shared construction, fire, smoke,
            and water damage can affect adjacent properties.
          </p>
          <p className="text-gray-700 mb-4">
            Older construction can mean wiring, plumbing, and structural unknowns that add cost and time
            for restoration contractors. For some Lancaster rowhouse owners, estimated restoration cost
            can make restoration less practical. A cash sale
            at as-is value is the cleaner exit.
          </p>
        </section>

        <section className="my-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Pennsylvania Disclosure Requirements</h2>
          <p className="text-gray-700 mb-3">
            According to Pennsylvania's Real Estate Seller Disclosure Law (68 Pa.C.S. § 7301-7315), sellers are generally required to
            disclose known material defects — including fire and smoke damage — on the Seller's Property Disclosure
            Statement. Review exemptions with a Pennsylvania real estate professional or attorney because the statute lists exceptions.
          </p>
          <p className="text-gray-700">
            When you sell to USA Home Buyers, we purchase with full knowledge of the damage. We conduct our own
            assessment; there's no surprise inspection that triggers renegotiation. The disclosure issue is
            addressed up front, and the sale closes on the agreed terms.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Fire Damage Sales in Lancaster PA" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA</Link>
          <Link href="/markets/lancaster-pa/code-violations" className="text-brand-primary hover:underline">Code Violations →</Link>
        
          <Link href="/blog/destroyed-rental-property-case-study" className="text-brand-primary hover:underline">Case Study: Destroyed Rental → $50K →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Fire-Damaged Lancaster Property" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
