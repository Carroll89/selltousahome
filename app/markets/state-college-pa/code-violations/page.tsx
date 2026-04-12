import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, stateCollegeLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell House Code Violations State College PA',
  description:
    'Code violations in State College Borough? We buy houses as-is — open violations, failed inspections, unpermitted work. Cash offer in 24 hours',
  alternates: { canonical: `${SITE_URL}/markets/state-college-pa/code-violations` },
};

const FAQ_ITEMS = [
  {
    question: 'Who handles code enforcement in State College Borough?',
    answer:
      "Code enforcement in State College Borough is handled by the State College Borough Code Enforcement Office. The borough enforces the International Property Maintenance Code (IPMC) and Pennsylvania's Uniform Construction Code (UCC). Common violations include unsafe structures, exterior maintenance issues, unpermitted additions, and property maintenance standards — especially in the high-density rental zones near campus.",
  },
  {
    question: 'Can I sell a house with open code violations in State College?',
    answer:
      "Yes. There's no law preventing you from selling a property with open code violations — the violations transfer to the new owner. In a traditional sale, buyers will typically demand that violations be resolved before closing or request price reductions. We buy code-violation properties as-is: we purchase knowing about the violations and handle them after closing.",
  },
  {
    question: 'What are the most common code violations in State College rental properties?',
    answer:
      "In State College's high-density rental market, common violations include: unpermitted basement bedrooms or conversions (common in student rentals), missing or non-functional smoke and carbon monoxide detectors, exterior maintenance issues (peeling paint, rotted wood siding, deteriorated steps), electrical panel issues in older 1970s homes, and HVAC systems that haven't been maintained or permitted. Student rental properties sometimes accumulate violations over years of neglect.",
  },
  {
    question: 'Can code violations be cleared at closing?',
    answer:
      "Sometimes — if the violations have associated municipal fines or liens, they can be paid from proceeds at closing. The title company checks for recorded liens during the title search. However, if violations require physical repairs before a certificate of compliance can be issued, a traditional buyer won't close until repairs are complete. We don't require a certificate of compliance — we buy as-is and resolve violations after closing.",
  },
  {
    question: 'What if the house has unpermitted additions from the previous owner?',
    answer:
      "Unpermitted additions — finished basements, attic conversions, room additions without permits — are very common in State College's rental stock. Traditional buyers face lending complications: lenders won't finance properties with certain unpermitted work. Cash buyers don't have that constraint. We assess the actual condition and value the property accordingly.",
  },
];

const pageUrl = `${SITE_URL}/markets/state-college-pa/code-violations`;

export default function StateCollegeCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        stateCollegeLocalBusinessSchema,
        articleSchema('Selling a House with Code Violations in State College, PA', pageUrl, '2026-04-12'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA home with code violations — we buy as-is"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/state-college-pa" className="hover:text-white">State College</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your State College House with Code Violations — As-Is
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              State College Borough enforces strict property codes — especially in the rental zones near
              Penn State. If your property has open violations, failed inspections, or unpermitted work
              piling up, a traditional sale is going to be a fight. We buy as-is, violations and all.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — No Judgment, No Pressure
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/state-college-pa/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-base font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Open code violations in State College Borough don&apos;t prevent a sale — they transfer to the
              new owner. Traditional buyers with mortgage financing can&apos;t close on violation properties;
              lenders require clean inspections first. We don&apos;t. We make one offer that accounts for
              remediation cost upfront, you don&apos;t fix anything, and we close in 7–14 days. Recorded
              municipal fines and liens are resolved from proceeds at closing.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Code Violations Are Common in State College&apos;s Older Rental Stock
            </h2>
            <p className="text-gray-700 mb-4">
              State College Borough&apos;s housing stock is heavily weighted toward properties built between
              1940 and 1990 — over 45% was built in the 1970–1999 period alone. These homes are aging
              and many have been used as student rentals for 20–30 years, which accelerates wear and
              deferred maintenance.
            </p>
            <p className="text-gray-700 mb-4">
              According to Pennsylvania&apos;s Uniform Construction Code (dli.pa.gov), all residential
              structures must meet minimum habitability standards. According to State College Borough
              Code Enforcement (statecollegepa.us), the borough enforces the International Property
              Maintenance Code (IPMC) for all properties — with particular attention to rental housing
              near campus. Violations accumulate when landlords fall behind on maintenance or when
              unpermitted work surfaces during a sale.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                { title: 'Unpermitted basement bedrooms', desc: "Common in student rentals — converted basement space without proper egress, permits, or electrical work." },
                { title: 'Exterior maintenance violations', desc: "Peeling paint, deteriorated siding, rotted fascia, broken steps — Borough code requires maintenance of exterior building components." },
                { title: 'Electrical panel issues', desc: "1960s-1970s homes with outdated electrical panels, fuse boxes, or aluminum wiring don't meet current code and create sale complications." },
                { title: 'Deferred HVAC and plumbing', desc: "Systems that weren't replaced or maintained to current standards. Traditional buyers (with financing) can't close until these are resolved." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-dark mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">Why Traditional Buyers Can&apos;t Close on Violation Properties</h2>
            <p className="text-gray-700 mb-3 text-sm">
              Mortgage lenders won&apos;t fund loans on properties with certain code violations or unpermitted work.
              Their underwriters require a clean inspection or repairs as a condition of funding. That means
              a traditional buyer — even a motivated one — can&apos;t close until you fix the violations.
            </p>
            <p className="text-gray-700 text-sm mb-3">
              Cash buyers don&apos;t have lender requirements. We assess the property ourselves, make an offer
              that accounts for the violation remediation cost, and close without requiring you to fix
              anything first. You skip the repair process entirely.
            </p>
            <p className="text-gray-700 text-sm">
              Liens and fines that have been recorded with the Centre County Recorder of Deeds or the
              State College Borough are identified during the title search and paid from proceeds at closing.
              You don&apos;t have to resolve them separately before the sale. The title company handles the
              payoff.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">What Happens After We Buy</h2>
            <p className="text-gray-700 text-sm mb-3">
              Once we close, the property transfers to us and the violation responsibility transfers too.
              We work with State College Borough to bring the property into compliance — getting permits
              pulled for unpermitted work, scheduling required inspections, and completing any remediation.
              That process is ours to manage, not yours.
            </p>
            <p className="text-gray-700 text-sm">
              For sellers, that means you walk away clean. You don&apos;t carry the violation into your
              next chapter. The borough isn&apos;t chasing you for unresolved compliance orders.
              The property is sold, the proceeds are in your account, and you&apos;re done.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — Violations and All"
            subheadline="No repairs required. We account for violations in the offer price upfront."
            sourcePage="/markets/state-college-pa/code-violations"
          />

          <FAQSection items={FAQ_ITEMS} heading="Code Violations in State College PA — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/state-college-pa/fire-damage" className="text-brand-primary hover:underline">Fire-Damaged Property in State College</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">Sell Your State College House for Cash</Link>
            </p>
            <p className="mt-3 text-xs text-gray-400">
              Sources:{' '}
              <a href="https://www.statecollegepa.us/203/Code-Enforcement" target="_blank" rel="noopener noreferrer" className="underline">State College Borough Code Enforcement</a>
              {' '}·{' '}
              <a href="https://www.dli.pa.gov/Individuals/Labor-Management-Relations/bois/Pages/UCC.aspx" target="_blank" rel="noopener noreferrer" className="underline">PA Uniform Construction Code (dli.pa.gov)</a>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
