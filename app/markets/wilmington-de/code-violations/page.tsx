/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wilmingtonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/wilmington-de/code-violations`;

export const metadata: Metadata = {
  title: 'Code Violation Home Wilmington DE',
  description:
    'Sell a house with code violations in Wilmington DE. Open permits, failed inspections, condemned properties — we buy as-is. Cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a house with code violations in Wilmington DE?',
    answer: "Yes. We purchase properties with open code violations, failed inspections, and outstanding permits throughout Wilmington and New Castle County. We buy as-is — the violations transfer with the property and we handle remediation after closing. You are not required to fix anything before selling to us.",
  },
  {
    question: 'Who handles code enforcement in Wilmington DE?',
    answer: "The City of Wilmington's Department of License and Inspection handles code enforcement within city limits. The City of Wilmington Division of Inspections is located at 800 N. French Street, Wilmington DE 19801. Properties in surrounding New Castle County (outside city limits) are subject to New Castle County's Department of Land Use code enforcement. Source: wilmingtonde.gov.",
  },
  {
    question: 'What are common code violations in Wilmington row homes?',
    answer: "Wilmington's pre-war brick row home stock typically generates violations related to: outdated electrical (knob-and-tube wiring), lead paint hazards (federal requirement for pre-1978 homes), plumbing deficiencies, inadequate egress, structural issues (roofline, foundation), exterior deterioration (pointing, gutters, siding), and unpermitted additions or conversions. Many are longstanding and don't get resolved through traditional sales.",
  },
  {
    question: 'What happens to code violations after I sell?',
    answer: "When we purchase the property, we take title with the violations in place. We handle remediation, permitting, and any required inspections after closing — that's our business model. You are not responsible for any code-related costs after the closing date.",
  },
  {
    question: 'Does Wilmington have a condemned property buyout program?',
    answer: "The City of Wilmington periodically operates programs targeting blighted and condemned properties through the Wilmington Housing Authority and city redevelopment initiatives. However, these programs have limited availability and specific eligibility requirements. A cash sale to a private buyer like USA Home Buyers is typically faster and more certain.",
  },
];

export default function WilmingtonCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        wilmingtonLocalBusinessSchema,
        articleSchema('Selling a House with Code Violations in Wilmington DE', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/wilmington-de-hero-640.jpg 640w, /images/optimized/wilmington-de-hero-828.jpg 828w, /images/optimized/wilmington-de-hero-1080.jpg 1080w, /images/optimized/wilmington-de-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/wilmington-de-hero-1200.jpg"
            alt="Wilmington DE code violation property — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/wilmington-de" className="hover:text-white">Wilmington DE</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Wilmington DE Property with Code Violations — We Buy As-Is
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Open permits, failed inspections, lead paint hazards, condemned status — we've seen it all
              in Wilmington's pre-war row homes. We purchase as-is and handle all remediation after closing.
              Written cash offer in 24 hours.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors"
            >
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/wilmington-de" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Code Violations in Wilmington's Row Homes — What We See</h2>
          <p className="text-gray-700 mb-4">
            Wilmington's housing stock is predominantly pre-1940 construction. According to the U.S. Census ACS,
            the majority of Wilmington's housing units were built before 1970, with a significant portion
            dating to the 1900-1940 DuPont industrial era. That vintage means specific code challenges that are
            routine in our work:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Knob-and-tube wiring:</strong> Common in Southbridge and West Center City row homes; fails modern electrical code</li>
            <li><strong>Lead paint:</strong> Federal law requires disclosure for pre-1978 homes; we handle it</li>
            <li><strong>Plumbing:</strong> Original cast iron drain lines, galvanized supply lines, inadequate water pressure</li>
            <li><strong>Structural:</strong> Foundation settling, compromised party walls, failing rooflines</li>
            <li><strong>Unpermitted work:</strong> Additions, basement apartments, garage conversions without permits</li>
            <li><strong>Exterior code:</strong> Pointing (brick repointing), window condition, exterior door requirements</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The City of Wilmington's Department of License and Inspection issues violation notices and can issue
            unsafe structure declarations for severely deteriorated properties. We purchase at every stage —
            from minor open permit to full condemned status. According to the{' '}
            <a href="https://www.wilmingtonde.gov/government/city-departments/license-and-inspection" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">City of Wilmington</a>,
            the Department of License and Inspection handles both licensing and code enforcement citywide.
          </p>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer — Code Violations No Problem"
          subheadline="We buy as-is. Written offer in 24 hours. We cover all closing costs."
          sourcePage="/markets/wilmington-de"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Code Violations in Wilmington DE" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Pages</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/wilmington-de/fire-damage" className="text-brand-primary hover:underline">Sell a Fire-Damaged Property in Wilmington DE →</Link></li>
            <li><Link href="/markets/wilmington-de" className="text-brand-primary hover:underline">Wilmington DE Cash Home Buyers →</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
