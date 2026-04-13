import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, erieLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Fire Damage House Erie PA — Sell Your House Fast',
  description:
    'Selling a fire-damaged house in Erie PA? We buy fire-damaged properties as-is for cash. No repairs, no remediation required. Written offer in 24 hours. Serving Erie County.',
  alternates: { canonical: `${SITE_URL}/markets/erie-pa/fire-damage` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a fire-damaged house in Erie PA?',
    answer:
      "Yes. We buy fire-damaged properties as-is in Erie and Erie County. You don't need to remediate, repair, or even clean out the property before selling to us. We factor the fire damage into our offer.",
  },
  {
    question: 'What if my homeowners insurance paid out — does that affect the sale?',
    answer:
      "If you've received an insurance payout for the fire damage but haven't done the repairs, you can still sell the house. The sale is based on the property's current as-is condition and the after-repair value. The insurance proceeds are yours — separate from the sale.",
  },
  {
    question: 'How is a fire-damaged Erie home priced for a cash sale?',
    answer:
      "We estimate the after-repair value (ARV) of the property, subtract the cost to remediate and restore, and factor in our holding costs and margin. Fire damage that affects structure, electrical, or plumbing will result in a lower offer than cosmetic smoke damage. We'll be transparent about the calculation.",
  },
  {
    question: 'Does the city have to sign off before I can sell a fire-damaged property in Erie?',
    answer:
      "In some cases, the City of Erie may have placed a posting or condemnation order on a severely fire-damaged property. This doesn't prevent a sale, but it does add steps — the buyer inherits the remediation obligation. We've purchased properties with condemnation orders before and can walk you through the process.",
  },
  {
    question: 'Do I have to disclose fire damage to a buyer in Pennsylvania?',
    answer:
      "Pennsylvania requires disclosure of known material defects. Fire damage is a material defect that must be disclosed. When you sell to USA Home Buyers, we buy with full knowledge of the damage — no disclosure surprises, no post-inspection renegotiation.",
  },
];

const pageUrl = `${SITE_URL}/markets/erie-pa/fire-damage`;

export default function ErieFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        erieLocalBusinessSchema,
        articleSchema('Selling a Fire-Damaged House in Erie PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/erie-pa-hero.jpg"
          alt="Erie PA home — sell fire-damaged house for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/erie-pa" className="hover:text-white">Erie PA</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Fire-Damaged House in Erie PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              You don&apos;t have to rebuild. You don&apos;t have to remediate. We buy fire-damaged properties in
              Erie and Erie County as-is for cash — smoke damage, partial damage, or total loss.
              Written offer in 24 hours. Close in 7-14 days.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-white text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Call {PHONE} — Talk to Someone Today
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/erie-pa/fire-damage" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-brand-light/20 p-6 rounded-xl mb-8">
            <h2 className="text-lg font-bold mb-3">TL;DR</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• We buy <strong>fire-damaged properties in Erie as-is</strong> — no remediation required before selling</li>
              <li>• <strong>Smoke damage, partial fire, or total loss</strong> — we buy all levels of damage</li>
              <li>• Insurance payout doesn&apos;t affect the sale — you <strong>keep both proceeds separately</strong></li>
              <li>• We cover all closing costs — 2% transfer tax, title fees, everything</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Types of Fire Damage We Buy</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Smoke and soot damage', desc: "Cosmetic but extensive — smoke penetrates walls, insulation, HVAC systems. Expensive to remediate. We buy it as-is." },
                { title: 'Partial structural fire damage', desc: "Kitchen fires, electrical fires, room-level damage. Structure affected but not a total loss. We assess and offer." },
                { title: 'Total loss / burned out shell', desc: "Foundation and lot may retain value for tear-down and rebuild. We purchase total-loss properties in Erie." },
                { title: 'Water damage from fire suppression', desc: "Firefighting water damage — mold, structural saturation, ruined contents. Combined fire/water damage properties." },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-dark mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why Erie&apos;s Old Housing Stock Has Higher Fire Risk</h2>
            <p className="text-gray-700 mb-4">
              Erie&apos;s pre-1970 housing has a higher structural fire risk than newer construction.
              Knob-and-tube wiring (common in pre-1950 Erie homes) is a known fire hazard. Older heating
              systems are less safe than modern units. And dense urban neighborhoods where homes are close
              together mean fire can spread. These structural realities mean fire-damaged properties are more
              common in Erie than in newer suburban markets.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer for Your Fire-Damaged Erie PA Property"
            subheadline="Any level of fire damage. Written offer in 24 hours. We cover all closing costs."
            sourcePage="/markets/erie-pa/fire-damage"
          />

          <FAQSection items={FAQ_ITEMS} heading="Fire-Damaged House Erie PA — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>Market data last updated: April 2026</p>
            <p className="mt-2">
              Related:{' '}
              <Link href="/markets/erie-pa/code-violations" className="text-brand-primary hover:underline">Code Violations Erie PA</Link>{' '}
              ·{' '}
              <Link href="/markets/erie-pa" className="text-brand-primary hover:underline">Sell Your Erie House Fast</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
