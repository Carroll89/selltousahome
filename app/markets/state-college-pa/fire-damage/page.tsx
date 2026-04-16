import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { articleSchema, faqSchema, stateCollegeLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House State College PA',
  description:
    'Fire-damaged property in State College or Centre County PA? We buy fire-damaged houses as-is — no repairs, no restoration required. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/markets/state-college-pa/fire-damage` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a fire-damaged house in State College without repairing it?',
    answer:
      "Yes. We buy fire-damaged properties as-is — structural damage, smoke damage, water damage from firefighting, partial restoration, whatever the condition is. You don't need to restore, clean, or repair anything. We assess the property and make an offer based on actual condition.",
  },
  {
    question: 'How does insurance money interact with a cash sale of a fire-damaged property?',
    answer:
      "If you've received an insurance payout for the damage, it's yours to keep — it doesn't reduce our offer. Our offer is based on the as-is value of the real estate. If you haven't filed a claim yet, you can still sell. The insurance settlement (if any) is separate from the real estate transaction.",
  },
  {
    question: 'What if Centre County condemned the property after the fire?',
    answer:
      "Condemnation orders don't prevent a sale — they transfer to the new owner along with the property. We buy condemned and uninhabitable structures. The condemnation and required remediation become our responsibility after closing.",
  },
  {
    question: 'The mortgage company is holding my insurance proceeds. Can I still sell?',
    answer:
      "Lenders often hold insurance proceeds in escrow when the property securing the loan is damaged. The title company handles this at closing: the remaining mortgage balance is paid from sale proceeds, and the lender releases any held insurance funds. An experienced PA title company has processed these closings many times.",
  },
  {
    question: 'What if the fire involved a rental property with a Penn State student tenant?',
    answer:
      "If a tenant was in the property, their renters insurance (if they had it) covers their personal belongings — not the structure. The building damage is covered by your property insurance. The lease is typically suspended or terminated if the property is uninhabitable. We buy fire-damaged rental properties in State College regardless of the tenant situation.",
  },
];

const pageUrl = `${SITE_URL}/markets/state-college-pa/fire-damage`;

export default function StateCollegeFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        stateCollegeLocalBusinessSchema,
        articleSchema('Selling a Fire-Damaged House in State College, PA', pageUrl, '2026-04-12'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/state-college-hero.jpg"
          alt="State College PA fire-damaged property — sell as-is"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/state-college-pa" className="hover:text-white">State College</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged House in State College, PA — As-Is, Fast
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              A house fire in State College is stressful enough without a 6-month restoration project
              on top of it. If you&apos;d rather sell than rebuild — whether it&apos;s a rental near Penn State
              or your own home — we buy fire-damaged properties as-is throughout Centre County.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — We&apos;ve Bought Fire-Damaged Homes Before
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/state-college-fire-damage.mp4"
        title="Sell a Fire-Damaged House in State College PA"
        poster="/videos/state-college-fire-damage-poster.jpg"
        subtitle="No restoration required — we buy fire-damaged homes as-is"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Fire damage doesn&apos;t mean you&apos;re stuck. We buy fire-damaged houses in State College and Centre County as-is. No restoration required, no insurance runaround. Fair cash offer in 24 hours.
        </div>
      </details>
          <CashOfferForm variant="hero" sourcePage="/markets/state-college-pa/fire-damage" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-base font-bold text-brand-dark mb-2">TL;DR — The Short Answer</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Mortgage lenders won&apos;t finance fire-damaged properties, so traditional buyers are out
              of the picture anyway. We buy fire-damaged houses throughout Centre County — structural
              damage, smoke and water damage, partial restoration, condemned structures, all of it.
              Insurance proceeds you&apos;ve already received are yours to keep; our offer is based on the
              as-is real estate value. One written offer, one closing, 7–14 days.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              What Selling a Fire-Damaged Property Looks Like With Us
            </h2>
            <p className="text-gray-700 mb-4">
              The standard real estate process doesn&apos;t work well for fire-damaged properties. Traditional
              buyers finance through mortgage lenders, and lenders won&apos;t approve loans on uninhabitable
              or significantly damaged structures. That limits your buyer pool to cash buyers anyway —
              you just don&apos;t get to choose who they are.
            </p>
            <p className="text-gray-700 mb-4">
              According to State College Borough Code Enforcement (statecollegepa.us), fire-damaged
              structures are subject to mandatory inspection and may receive condemnation orders if
              deemed unsafe. According to the Centre County Recorder of Deeds (centrecountypa.gov),
              all deeds — including those on damaged or condemned properties — require a Uniform
              Parcel Identifier (UPI) stamp before recording. We handle both at closing.
            </p>
            <p className="text-gray-700 mb-4">
              We evaluate the property on what&apos;s there: the land value, the remaining structure, the
              scope of damage, and the Centre County market. We make one offer that accounts for all
              of it. You don&apos;t need contractor estimates, restoration coordination, or to deal with
              insurance adjusters on our behalf.
            </p>
            <div className="space-y-3">
              {[
                { step: '1', label: 'Call or fill out the form', detail: "Tell us about the fire — when it happened, the scope of damage, and whether there's been any insurance claim or restoration work." },
                { step: '2', label: 'We assess the property', detail: "We look at the property in its current condition. Depending on the damage, we may do a brief walkthrough or work from photos and your description. No obligation." },
                { step: '3', label: 'Written offer within 24 hours', detail: "A single, written cash offer based on the as-is condition. No post-inspection renegotiation." },
                { step: '4', label: 'Close in 7-14 days', detail: "Pick a closing date that works. Insurance coordination, mortgage payoff, and title are handled by the title company. You show up and sign." },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.label}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Insurance, Liens, and the State College Market
            </h2>
            <p className="text-gray-700 mb-4">
              If you received an insurance payout for the fire, that money is yours. Our offer is
              based on the as-is real estate value — independent of any insurance settlement. If the
              mortgage company is holding insurance proceeds in escrow (a common lender practice when
              the collateral property is damaged), those funds are handled at closing: the title company
              pays off the remaining mortgage balance and the lender releases the held proceeds.
            </p>
            <p className="text-gray-700 mb-4">
              In State College, fire damage in the rental zones near Penn State sometimes involves
              complicated tenant situations — student lease questions, displaced tenants, renters
              insurance claims. None of that affects your ability to sell. If the property is uninhabitable,
              the lease is typically suspended. We buy it as-is regardless of the tenant situation.
            </p>
            <p className="text-gray-700">
              State College Borough has a 3.00% total realty transfer tax — the highest in Centre County.
              We cover it when we buy. You don&apos;t carry that cost.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your Fire-Damaged Property"
            subheadline="No repairs needed. We buy in any condition. Centre County and beyond."
            sourcePage="/markets/state-college-pa/fire-damage"
          />

          <FAQSection items={FAQ_ITEMS} heading="Fire-Damaged Property in State College PA — FAQ" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/state-college-pa/code-violations" className="text-brand-primary hover:underline">Code Violations in State College</Link>
              {' '}·{' '}
              <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">Sell Your State College House for Cash</Link>
            </p>
            <p className="mt-3 text-xs text-gray-400">
              Sources:{' '}
              <a href="https://www.statecollegepa.us/203/Code-Enforcement" target="_blank" rel="noopener noreferrer" className="underline">State College Borough Code Enforcement</a>
              {' '}·{' '}
              <a href="https://centrecountypa.gov/418/Recorder-of-Deeds" target="_blank" rel="noopener noreferrer" className="underline">Centre County Recorder of Deeds</a>
            
              {'·'}{' '}
              <Link href="/blog/destroyed-rental-property-case-study" className="text-brand-primary hover:underline">Case Study: Destroyed Rental, $50K Cash Out</Link></p>
          </div>
        </article>
      </div>
    </>
  );
}
