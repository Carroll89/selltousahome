/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { akronLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/akron-oh/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Akron OH — We Buy As-Is Cash',
  description:
    'Need to sell a fire-damaged or smoke-damaged house in Akron OH? USA Home Buyers purchases fire-damaged homes as-is in Summit County — cash offer in 24 hours, no repairs required.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a fire-damaged house in Akron OH?',
    answer:
      "Yes. We purchase fire-damaged and smoke-damaged homes throughout Akron and Summit County as-is. No cleanup, no repairs, no board-up required on your end. We make an offer based on current condition and close quickly. Call 888-274-5006.",
  },
  {
    question: 'Can I sell a fire-damaged house if the insurance claim isn\'t settled?',
    answer:
      "Yes — but timing matters. If you have an active insurance claim, consult your insurance agent before signing a purchase contract. In many cases, the insurance payout and the sale can be structured so you receive the insurance proceeds and we purchase the property in its damaged state. We have experience with these situations. Call us to discuss your specific case.",
  },
  {
    question: 'What if the city has red-tagged or condemned the property?',
    answer:
      "We buy condemned and red-tagged properties. A condemnation order means the city has determined the structure is unsafe for occupancy — it does not prevent a sale. We can move quickly if there's a city demolition timeline in play. Call 888-274-5006 immediately.",
  },
  {
    question: 'Do I need to clean out the fire-damaged contents before selling?',
    answer:
      "No. We purchase with all contents in place — fire debris, smoke-damaged belongings, ruined fixtures. You take what you want and leave the rest. We handle the cleanup as the new owner.",
  },
  {
    question: 'What does a fire-damaged house in Akron typically sell for?',
    answer:
      "It depends on the extent of damage, the underlying property value, and the lot. Fire damage ranges from minor smoke/soot on one room to total structural loss. Our offer reflects current as-is condition. With Akron's median at $151,750 (Redfin, Mar 2026), even significantly damaged properties in good neighborhoods retain land value. Call 888-274-5006 for a specific assessment.",
  },
];

const LINKS = [
  { href: '/markets/akron-oh/code-violations', label: 'Code Violations' },
  { href: '/markets/akron-oh/inherited-property', label: 'Inherited Property' },
  { href: '/markets/akron-oh/foreclosure', label: 'Foreclosure' },
  { href: '/markets/akron-oh/probate', label: 'Probate' },
  { href: '/markets/akron-oh/tenant-occupied', label: 'Tenant-Occupied' },
  { href: '/markets/akron-oh', label: '← Back to Akron OH' },
];

export default function AkronFireDamagePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          akronLocalBusinessSchema,
          articleSchema('Sell a Fire-Damaged House in Akron OH', pageUrl, '2026-05-01'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/akron-oh" className="hover:text-white">Akron OH</Link>{' '}
              › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Fire-Damaged House in Akron OH — Cash As-Is Buyer
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases fire-damaged and smoke-damaged homes throughout Akron
                and Summit County — any level of damage, any condition. No repairs, no cleanup,
                no board-up required on your end. We coordinate with insurance where applicable.
                Written cash offer in 24 hours. Close in 7–14 days. Call 888-274-5006.
              </p>
            </div>
            <a
              href="tel:+18882745006"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Cash Offer"
              subheadline="Fire damage welcome — cash offer in 24 hours."
              sourcePage="/markets/akron-oh/fire-damage"
            />
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-green-600 text-white p-3 flex items-center justify-center gap-3 shadow-lg">
        <a href="tel:+18882745006" className="font-bold text-base">
          📞 Call 888-274-5006 — Get Cash Offer
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            Selling a Fire-Damaged Property in Akron — What You Need to Know
          </h2>
          <p className="text-gray-700 mb-4">
            Fire damage is among the most stressful situations a homeowner can face. Beyond the
            immediate loss, the path forward can feel unclear: insurance adjusters, contractor
            estimates, city inspections, city board-up orders, and an uncertain timeline for
            restoration or sale.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale to USA Home Buyers cuts through that complexity. We assess the property
            in its current damaged state, make a written cash offer within 24 hours, and close
            in 7–14 days. You don't need to board up, haul out debris, remediate smoke damage,
            or get any contractor bids. We buy the property as it sits.
          </p>
          <p className="text-gray-700 mb-4">
            Akron's rubber-era housing stock — dense bungalows, two-stories, and foursquares
            in Goodyear Heights, Kenmore, and East Akron — often has knob-and-tube wiring and
            aging mechanicals that contributed to the fire risk in the first place. Restoration
            costs in these homes can easily exceed the property's post-repair market value,
            making a cash as-is sale the most economically rational exit.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire-Damaged Home Sales in Akron OH" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Fire-Damaged Akron OH Property?"
          sourcePage="/markets/akron-oh/fire-damage"
        />
      </div>
    </>
  );
}
