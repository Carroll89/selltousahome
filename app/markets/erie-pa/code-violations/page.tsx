import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Code Violations Erie PA — Sell As-Is',
  description:
    'Selling a house with code violations in Erie PA? We buy properties with open code violations as-is. No repairs, no city compliance required first. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/code-violations` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Erie PA house with open code violations?',
    answer:
      "Yes. We buy properties with open code violations in Erie. Code violations are factored into our offer — they don't prevent the sale. You don't have to remediate violations before selling to us.",
  },
  {
    question: 'What are the most common code violations in Erie PA?',
    answer:
      "Erie's 77% pre-1970 housing stock generates common violations including: outdated electrical systems (knob-and-tube or 60-amp fuse boxes), failing or non-existent smoke/CO detectors, roof condition violations, foundation or structural issues, lead paint in pre-1978 homes, deteriorated siding or exterior, and unaddressed water damage from ice dams or roof failures.",
  },
  {
    question: 'Do open code violations affect the sale price?',
    answer:
      "Yes, open violations factor into our offer — but they don't prevent the sale. The more violations and the more severe, the lower our offer will be, reflecting the repair costs we'll need to address. We give you a transparent offer that accounts for the property's actual condition.",
  },
  {
    question: 'What if the city has placed a lien for unpaid violation fines?',
    answer:
      "Code violation liens are typically handled at closing — paid from the sale proceeds before you receive your net amount. They don't prevent a cash sale, and we've dealt with them many times in Erie. We factor outstanding fines into our analysis.",
  },
  {
    question: 'What if the property has been condemned or declared unsafe in Erie?',
    answer:
      "Even condemned or declared-unsafe properties can be sold. The process is more complex and requires coordination with the City of Erie's Department of Public Works/Code Enforcement, but it's possible. Call us to discuss your specific situation.",
  },
];

const pageUrl = `${SITE_URL}/markets/erie-pa/code-violations`;

export default function ErieCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Selling a House with Code Violations in Erie PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/erie-pa-hero.jpg"
          alt="Erie PA home — sell with code violations for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/erie-pa" className="hover:text-white">Erie PA</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Erie PA House with Code Violations
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Open code violations don&apos;t have to stop a sale. We buy Erie properties with violations
              as-is — no required remediation, no city compliance sign-off before closing.
              Code violations are factored into our offer, not used as a reason to decline.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/erie-pa/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• We buy Erie properties <strong>with open code violations</strong> — no required remediation first</li>
              <li>• Erie&apos;s <strong>77% pre-1970 housing stock</strong> makes code violations extremely common here</li>
              <li>• Violations are <strong>factored into the offer</strong>, not used as a reason to decline</li>
              <li>• Outstanding violation fines and liens are <strong>handled at closing from proceeds</strong></li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Code Violations Are Common in Erie</h2>
            <p className="text-gray-700 mb-4">
              Erie&apos;s aging housing stock is the root cause. 77% of Erie homes were built before 1970 —
              systems that were up to code in 1960 are often not compliant with today&apos;s standards. Add
              104+ inches of annual snowfall that accelerates roof and structural wear, and a 23% poverty rate
              that makes it hard for homeowners to keep up with maintenance and permits, and you get a city
              with a high concentration of code-violation properties.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Electrical', desc: "Knob-and-tube wiring (pre-1950s), 60-amp fuse boxes, ungrounded outlets, and aluminum wiring (1960s-70s) are common in Erie homes and frequently cited in code inspections." },
                { title: 'Roof and structural', desc: "Erie's lake-effect snow loads (104+ inches annually) cause accelerated roof wear, ice dam damage, and structural issues in older housing." },
                { title: 'Lead paint', desc: "Pre-1978 homes contain lead paint. Erie's urban core is overwhelmingly pre-1978. Lead paint violations are extremely common in estate and distressed properties." },
                { title: 'Exterior / siding', desc: "Deteriorated siding, rotting wood, and failing stucco are common code triggers in Erie's older neighborhoods." },
                { title: 'Unpermitted work', desc: "Many Erie homeowners over the decades did their own repairs without permits. These unpermitted modifications can trigger violations at inspection time." },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-brand-dark mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer for Your Erie PA Property with Code Violations"
            subheadline="No remediation required. Written offer in 24 hours. We cover all closing costs."
            sourcePage="/markets/erie-pa/code-violations"
          />

          <FAQSection items={FAQ_ITEMS} heading="Code Violations Erie PA — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/markets/erie-pa/fire-damage" className="text-brand-primary hover:underline">Fire Damage Erie PA</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa/property-liens" className="text-brand-primary hover:underline">Property Liens Erie PA</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
