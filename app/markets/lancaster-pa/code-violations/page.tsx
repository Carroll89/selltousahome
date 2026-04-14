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
  title: 'Sell House With Code Violations Lancaster PA',
  description:
    'Selling a Lancaster PA house with code violations? We buy properties with open violations, failed inspections, condemned status — as-is, cash, 24-hour offer. No repairs required.',
  alternates: { canonical: `${SITE_URL}/markets/lancaster-pa/code-violations` },
};

const articleSch = articleSchema(
  'Selling a House With Code Violations in Lancaster PA',
  `${SITE_URL}/markets/lancaster-pa/code-violations`,
  '2026-04-13'
);

const FAQ_ITEMS = [
  {
    question: 'Can I sell a Lancaster PA house with open code violations?',
    answer: 'Yes. There is no Pennsylvania state law that prohibits the sale of a property with open code violations. The violations and any associated municipal fines or liens typically transfer with the property or get resolved at closing. USA Home Buyers buys properties with code violations as-is — we handle the remediation after closing.',
  },
  {
    question: 'What types of code violations do you buy in Lancaster?',
    answer: 'All of them — structural issues, electrical (including knob-and-tube wiring common in pre-1940 Lancaster rowhouses), plumbing failures, HVAC non-compliance, exterior maintenance violations, roofing issues, fire code failures, and properties tagged as unsafe structures or ordered vacated by the City of Lancaster Code Enforcement Bureau.',
  },
  {
    question: 'Do code violation liens need to be paid off before I can sell?',
    answer: 'Municipal liens for code violations are typically paid off at closing from the sale proceeds. They don\'t need to be paid before the sale can happen — they\'re settled when title transfers. The title company handles lien resolution at closing. This is standard practice in Lancaster County.',
  },
  {
    question: 'What is Lancaster City\'s code enforcement process?',
    answer: 'The City of Lancaster\'s Bureau of Code Compliance and Licensing (cityoflancasterpa.gov) handles code enforcement. The bureau can issue violation notices, fines, and — in extreme cases — condemned or unsafe structure orders. Properties that have been ordered vacated or condemned can still be sold, though the buyer (us) takes on the remediation responsibility.',
  },
  {
    question: 'Will code violations affect my sale price?',
    answer: 'Yes — code violations factor into the cash offer because they represent real remediation costs. But a cash offer from us accounts for that honestly and upfront. There\'s no "surprise" renegotiation after the inspection the way there would be with a traditional buyer. The number we offer is the number you get.',
  },
];

export default function LancasterCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[lancasterLocalBusinessSchema, articleSch, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' → '}
          <Link href="/markets/lancaster-pa" className="hover:text-brand-primary">Lancaster PA</Link>
          {' → '}
          <span>Code Violations</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell Your Lancaster PA House With Code Violations — As-Is, Any Condition
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Lancaster City's pre-1940 rowhouse stock carries code issues that have accumulated over decades.
          Knob-and-tube wiring, lead pipes, failing roofs, and structural deterioration are common in Cabbage Hill,
          West End, and Southeast Lancaster. Open code violations don't disqualify a property from a cash sale.
          USA Home Buyers buys as-is, violation tags and all.
        </p>

        <CashOfferForm variant="inline" headline="Get a Cash Offer — Code Violations Included" sourcePage="/markets/lancaster-pa" />

        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Code Violations Are Common in Lancaster City</h2>
          <p className="text-gray-700 mb-4">
            According to the City of Lancaster's 2021 CRA Housing Report (cityoflancasterpa.gov), the majority of
            Lancaster City's housing stock is pre-1940 construction — single-family attached rowhouses and twins
            built when electrical codes, plumbing standards, and structural requirements were completely different.
            These buildings are solid. They were built to last. But they haven't been maintained to modern code —
            and many have passed through multiple owners without the investment needed to bring systems up to standard.
          </p>
          <p className="text-gray-700 mb-4">
            The City of Lancaster's Bureau of Code Compliance actively enforces standards on the rental and
            owner-occupied housing stock. Sellers who receive violation notices often face a choice: spend
            $20,000-$50,000 to remediate before listing, or sell to a cash buyer who buys as-is.
          </p>
        </section>

        <section className="my-10 bg-blue-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Common Code Issues We Buy Around</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Knob-and-tube wiring (pre-1940 rowhouses)',
              'Lead paint and lead plumbing',
              'Deteriorated roofing and flashing',
              'Structural violations — sagging floors, failing walls',
              'Boiler and HVAC non-compliance',
              'Condemned / unsafe structure orders',
              'Exterior maintenance violations',
              'Open permits from prior work',
              'Fire code violations',
              'Basement moisture and waterproofing failures',
            ].map((issue, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text-sm text-gray-700">{issue}</span>
              </div>
            ))}
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling With Code Violations in Lancaster PA" />

        <div className="my-8 flex flex-wrap gap-4 text-sm">
          <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">← Back to Lancaster PA</Link>
          <Link href="/markets/lancaster-pa/fire-damage" className="text-brand-primary hover:underline">Fire Damage →</Link>
          <Link href="/blog/sell-house-with-code-violations-pa" className="text-brand-primary hover:underline">PA Code Violations Guide →</Link>
        </div>

        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Lancaster Property — Any Condition" sourcePage="/markets/lancaster-pa" />
      </div>
    </>
  );
}
