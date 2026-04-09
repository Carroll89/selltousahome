import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell House with Code Violations in Harrisburg PA | Cash Offer',
  description:
    'Selling a house with code violations in Harrisburg PA? We buy properties with open violations, municipal liens, and city citations as-is. Cash offer in 24 hours, close in 7–14 days.',
  alternates: { canonical: `${SITE_URL}/markets/harrisburg-pa/code-violations` },
};

const FAQ_ITEMS = [
  {
    question: 'Can you sell a house with code violations in Harrisburg, PA?',
    answer:
      'Yes. Pennsylvania law does not prohibit selling a property with open code violations. Violations must be disclosed to the buyer, and they are either resolved at closing (paid from proceeds) or transferred to the buyer as-is. Cash buyers like us purchase with open violations — we price the cost of remediation into our offer so you don\'t have to spend a dollar fixing anything.',
  },
  {
    question: 'What are common code violations in Harrisburg, PA?',
    answer:
      'Harrisburg\'s older housing stock — particularly in Allison Hill, Uptown, and Midtown — frequently generates violations for: deteriorating roofs and gutters, broken or boarded windows, failing exterior facades, overgrown lots, structural concerns, electrical system deficiencies, plumbing failures, and non-compliance with the City of Harrisburg Bureau of Codes Enforcement\'s vacant property registry. Many properties in the city\'s older residential corridors carry multiple open citations.',
  },
  {
    question: 'Will code violations stop my house from selling?',
    answer:
      'Code violations typically block conventional mortgage financing — lenders require issues to be resolved before approving a loan. However, a cash buyer doesn\'t use financing, so those contingencies don\'t apply. We can close on a property with active citations, liens, or unresolved inspection findings.',
  },
  {
    question: 'Can code violations become liens in Harrisburg?',
    answer:
      'Yes. In Harrisburg, unresolved code violations can escalate into municipal liens filed against the property. These liens attach to the title and must be addressed at or before closing — typically paid from sale proceeds. Our title company runs a full lien search so nothing surprises us at closing.',
  },
  {
    question: 'What is Harrisburg\'s vacant property ordinance?',
    answer:
      'Harrisburg requires vacant properties to be registered with the Bureau of Codes Enforcement and maintained to specific standards. Failure to register generates fines that can grow into liens. If your property is vacant or unregistered, we can still purchase it — registration and outstanding fines are resolved as part of the closing process.',
  },
  {
    question: 'Do I need to fix anything before selling to you?',
    answer:
      'No. We buy entirely as-is. Our offer reflects the property\'s current condition and the estimated cost of bringing it into compliance. You don\'t repair a thing. We handle violations after we take ownership.',
  },
  {
    question: 'How quickly can we close on a property with violations?',
    answer:
      'Typically 7–14 days from accepted offer. The main timeline factor is the title search, which surfaces all liens and violations. Once that\'s clear, we can close quickly — faster if you have a fine deadline or a city-ordered timeline.',
  },
];

const pageUrl = `${SITE_URL}/markets/harrisburg-pa/code-violations`;

export default function HarrisburgCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        articleSchema('Selling a House with Code Violations in Harrisburg, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/harrisburg-pa" className="hover:text-white">Harrisburg</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a House with Code Violations in Harrisburg, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Open code violations don&apos;t have to stop your sale. We buy properties throughout Harrisburg and
              Dauphin County with city citations, municipal liens, and unresolved violations — in any condition,
              completely as-is.
            </p>
            <div className="bg-yellow-900/50 border border-yellow-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-yellow-200 mb-1">Violations escalating?</p>
              <p className="text-yellow-100">
                Daily fines add up fast. Call <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a>{' '}
                — we can often close before additional penalties pile up.
              </p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/harrisburg-pa/code-violations" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-1">TL;DR</p>
            <h2 className="text-lg font-bold text-brand-dark mb-2">What You Need to Know</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ You can sell a Harrisburg property with open code violations — no PA law prevents it</li>
              <li>✓ Cash buyers buy as-is; you don&apos;t repair anything</li>
              <li>✓ Municipal liens are resolved at closing from sale proceeds</li>
              <li>✓ Conventional buyers can&apos;t get financing on violation-heavy properties — cash is your best path</li>
              <li>✓ We close in 7–14 days, before fines escalate further</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">Why Code Violations Are Common in Harrisburg</h2>
            <p className="text-gray-700 mb-4">
              Harrisburg&apos;s residential neighborhoods — Allison Hill, Uptown, Midtown, the South End — contain
              significant pre-WWII housing stock. Many of these homes haven&apos;t seen substantial investment in
              decades. The City of Harrisburg Bureau of Codes Enforcement actively patrols for exterior
              maintenance issues, vacant property violations, and structural deficiencies.
            </p>
            <p className="text-gray-700">
              Properties near the Susquehanna waterfront, older row home blocks on Derry and Zarker Streets,
              and Allison Hill rentals are particularly common sources of code enforcement activity. If your
              property has accumulated citations — whether due to deferred maintenance, vacancy, or tenant
              damage — you&apos;re not alone, and you have options.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Harrisburg Code Violations We Buy Through</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Roofing and structural violations',
                  desc: 'Failed roof systems, structural deterioration, sagging floors, foundation concerns. Common in Harrisburg\'s older row homes and multi-unit properties. We buy these as-is.',
                },
                {
                  title: 'Exterior maintenance citations',
                  desc: 'Peeling paint, deteriorating facades, broken or boarded windows, overgrown lots. Harrisburg\'s codes enforcement actively enforces exterior appearance — especially on vacant and investor-owned properties.',
                },
                {
                  title: 'Electrical and mechanical systems',
                  desc: 'Outdated fuse boxes, knob-and-tube wiring, failing HVAC. These block conventional financing but don\'t stop a cash sale.',
                },
                {
                  title: 'Vacant property violations',
                  desc: 'Failure to register with Harrisburg\'s vacant property program, security violations, failure to maintain a vacant structure. We can still buy — compliance is handled post-closing.',
                },
                {
                  title: 'Plumbing and sanitation',
                  desc: 'Failed plumbing systems, sewage backups, non-functioning bathrooms. We buy properties with active plumbing violations throughout Dauphin County.',
                },
                {
                  title: 'Municipal and tax liens',
                  desc: 'Escalated violations become liens. They\'re also joined by water/sewer delinquencies and delinquent property taxes. All surfaced at title and resolved at closing.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How a Cash Sale Works When There Are Violations</h2>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  title: 'We assess the property and violations',
                  detail: 'We review available city records through Harrisburg\'s Bureau of Codes Enforcement and conduct a walkthrough. We identify all open citations and estimate remediation costs.',
                },
                {
                  step: '2',
                  title: 'We make a written cash offer',
                  detail: 'Our offer reflects the as-is value after factoring in violation remediation and any lien payoffs. No financing contingency — our offer is firm.',
                },
                {
                  step: '3',
                  title: 'Title search identifies all liens',
                  detail: 'The title company runs a full search including Harrisburg city liens, Dauphin County tax liens, and water/sewer delinquencies. Everything surfaces before closing.',
                },
                {
                  step: '4',
                  title: 'Liens are resolved at closing',
                  detail: 'Outstanding municipal liens and delinquent taxes are paid from closing proceeds. Property transfers with clear title.',
                },
                {
                  step: '5',
                  title: 'We handle violations after closing',
                  detail: 'Once we own the property, remediation and code compliance are our responsibility. You\'re completely free of the citations.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">We Know Harrisburg&apos;s Neighborhoods</h2>
            <p className="text-gray-700 mb-4">
              We buy properties throughout Harrisburg city and Dauphin County — Allison Hill, Uptown, Midtown,
              Penbrook, Paxtang, Steelton, Swatara Township, Lower Paxton, and surrounding communities.
              We know the city&apos;s enforcement patterns, the typical violation types by neighborhood, and what
              it takes to close on a property with active citations.
            </p>
            <p className="text-gray-700">
              ZIP codes 17103, 17104, and 17110 are areas we know well. If your property is in these areas,
              call us directly for the fastest assessment — we can often evaluate the situation and present
              an offer same day.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — Violations and All"
            subheadline="No repairs required. We handle violations after closing. Close in 7–14 days."
            sourcePage="/markets/harrisburg-pa/code-violations"
          />

          <FAQSection items={FAQ_ITEMS} heading="Harrisburg Code Violations — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Harrisburg Code Enforcement Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">City of Harrisburg — Bureau of Codes Enforcement</p>
                <p className="text-gray-600">
                  <a href="https://www.harrisburgpa.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">harrisburgpa.gov</a>{' '}
                  — Violation lookup, permit applications, inspection scheduling, and vacant property registration
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Dauphin County Tax Claim Bureau</p>
                <p className="text-gray-600">For delinquent tax status and tax lien information — Dauphin County Courthouse, 101 Market Street, Harrisburg PA 17101</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Harrisburg Authority (Water/Sewer)</p>
                <p className="text-gray-600">
                  Outstanding water and sewer balances can become liens. Contact the Harrisburg Authority at{' '}
                  <a href="https://www.harrisburgauthority.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">harrisburgauthority.org</a>{' '}
                  to check account status.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Sell Your Harrisburg House</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/property-liens" className="text-brand-primary hover:underline">Property Liens in Harrisburg</Link>{' '}
              ·{' '}
              <Link href="/guides/sell-as-is" className="text-brand-primary hover:underline">Selling As-Is in PA</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
