/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/faq`;

export const metadata: Metadata = {
  title: 'Champaign-Urbana IL Home Selling FAQ 2026',
  description:
    'Answers to Champaign-Urbana IL home selling questions: county seat in Urbana, UIUC rental market, transfer tax 0.15% vs 1.5% clarification, probate, foreclosure. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Why is the county seat in Urbana, not Champaign?',
    answer: 'Urbana is and has always been the county seat of Champaign County. When Champaign County was organized in 1833, Urbana was designated the county seat — the city that predated modern Champaign (which incorporated in 1855). This means all county-level legal infrastructure is in Urbana: the Champaign County Circuit Court (101 E. Main Street, Urbana IL 61802, phone 217-384-3725), the County Clerk/Recorder (1776 E. Washington Street, Urbana IL 61802, phone 217-384-3774), and the Register in Probate. If you are selling an inherited property, dealing with foreclosure, or recording a deed — everything goes through Urbana, not Champaign. This is a common source of confusion because Champaign is the larger, better-known city.',
  },
  {
    question: 'Is the Champaign County transfer tax really 1.5%? The county website says so.',
    answer: 'No. The Champaign County Clerk\'s website contains a decimal-point typo. The actual transfer tax rate is 0.15% — a 10x difference. Per 35 ILCS 200/31-10, the Illinois state transfer tax is $0.50 per $500 (0.10%). Per 55 ILCS 5/5-1031 and Champaign County Ordinance 96, the county adds $0.25 per $500 (0.05%). Combined: $0.75 per $500 = 0.15%. The Clerk\'s own "2/3 state, 1/3 county" description confirms this math: $0.50 is 2/3 of $0.75, and $0.25 is 1/3 of $0.75 — which equals 0.15% total, not 1.5%. On a $200,000 sale, the correct transfer tax is $300, not $3,000. Neither the City of Champaign nor the City of Urbana imposes a municipal transfer tax (both confirmed via ATG 404).',
  },
  {
    question: 'How does selling a UIUC-area rental property work differently from a regular home sale?',
    answer: 'Several things are specific to UIUC-adjacent rentals. First, tenant occupancy: if you have tenants on a lease, Illinois law under 765 ILCS 720 (Landlord-Tenant Act) governs the notice and transition obligations. In Champaign and Urbana, both cities have additional rental licensing ordinances beyond state law — Champaign requires rental property registration and Urbana has a residential rental inspection program. Second, disclosure: you must complete the Illinois Residential Real Property Disclosure Act form (765 ILCS 77) regardless of condition — "as-is" doesn\'t waive disclosure. Third, buyer profile: most cash investors buying UIUC rentals will continue leasing to students, so the existing tenant situation often stays in place post-sale. USA Home Buyers purchases tenant-occupied properties without requiring you to evict first.',
  },
  {
    question: 'How does probate work for a Champaign-Urbana property?',
    answer: 'All Illinois probate is handled through the Circuit Court in the county where the decedent resided. For Champaign County properties, that means Champaign County Circuit Court, Probate Division, 101 E. Main Street, Urbana IL 61802, phone 217-384-3725. Under the Illinois Probate Act (755 ILCS 5), real property always requires formal probate regardless of estate size — the small estate affidavit under 755 ILCS 5/25-1 (threshold raised to $150,000 in 2025) covers only personal property. Under independent administration (755 ILCS 5/28-1), an executor can sell real estate without court approval on each transaction. Typical uncontested timeline: 6-12 months from filing to close. We can have a written offer ready before probate is filed.',
  },
  {
    question: 'How does foreclosure work in Champaign County?',
    answer: 'Illinois uses 100% judicial foreclosure — every foreclosure must go through the court under 735 ILCS 5/15-1101 et seq. (the Illinois Mortgage Foreclosure Law). Champaign County is in the 6th Judicial Circuit; all foreclosure proceedings are filed with the Circuit Clerk at 101 E. Main Street, Urbana IL 61802. The typical uncontested timeline in Champaign County is 12-16 months from first missed payment. Borrowers have a 3-month reinstatement right (735 ILCS 5/15-1602) and a 7-month redemption period (735 ILCS 5/15-1603). Selling before the sheriff\'s sale preserves whatever equity remains and avoids a deficiency judgment.',
  },
  {
    question: 'Does it matter whether my property is in Champaign city or Urbana city for the sale?',
    answer: 'For the sale price and transfer tax, Champaign and Urbana properties use the same county infrastructure (Champaign County Recorder at 1776 E. Washington St., Urbana) and the same tax stack ($0.75/$500 = 0.15%). The practical differences: city code enforcement is handled separately (City of Champaign Building Safety Division vs. City of Urbana Community Development Department — they have distinct ordinances and violation procedures). For rental properties, Champaign and Urbana each have their own licensing requirements. And some buyer demand factors differ: Research Park-adjacent properties in southwest Champaign draw a different buyer pool than University District Urbana rental stock.',
  },
];

export default function ChampaignUrbanaFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, faqSchema(FAQ_ITEMS)]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Champaign-Urbana IL Home Selling FAQ — Your Questions Answered
          </h1>
          <p className="text-blue-100 text-lg mb-6">
            C-U-specific answers: county seat confusion, UIUC rental dynamics, transfer-tax clarification, probate, foreclosure. Call (888) 440-5250 for your situation.
          </p>
          <a
            href="tel:+18884405250"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg transition-colors"
          >
            📞 (888) 440-5250 — Get Answers Now
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Champaign-Urbana IL" />

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Have a question not covered here?</h2>
          <p className="text-gray-700 text-sm mb-4">Every property situation is different. Call us and we'll answer honestly — no obligation, no pressure.</p>
          <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white font-bold px-5 py-2 rounded-xl text-sm transition-colors">
            📞 Call (888) 440-5250
          </a>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Situation Pages — More Detail by Topic</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              ['Inherited Property', '/markets/champaign-urbana-il/inherited-property'],
              ['Foreclosure', '/markets/champaign-urbana-il/foreclosure'],
              ['Divorce Sale', '/markets/champaign-urbana-il/divorce-sale'],
              ['Probate', '/markets/champaign-urbana-il/probate'],
              ['Tenant-Occupied', '/markets/champaign-urbana-il/tenant-occupied'],
              ['Code Violations', '/markets/champaign-urbana-il/code-violations'],
              ['Fire Damage', '/markets/champaign-urbana-il/fire-damage'],
              ['Market Report', '/markets/champaign-urbana-il/market-report'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-brand-primary hover:underline font-medium">{label} →</Link>
              </li>
            ))}
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Champaign-Urbana Home?" sourcePage="/markets/champaign-urbana-il/faq" />
      </div>
    </>
  );
}
