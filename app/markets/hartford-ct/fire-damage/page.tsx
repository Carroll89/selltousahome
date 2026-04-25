/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { hartfordLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/hartford-ct/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Hartford CT — Cash Offer, Any Condition',
  description:
    'Fire or smoke damage to your Hartford CT home? We buy fire-damaged properties for cash, as-is. No cleanup, no restoration. Close in 7-14 days.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a fire-damaged house in Hartford CT?',
    answer: 'Yes. We buy fire-damaged houses in any condition — partial damage, total loss, smoke damage only. The Hartford Fire Department will issue a fire incident report, and your insurance company will make their assessment. Whether you settle with insurance or not, we can purchase the property as-is.',
  },
  {
    question: 'What if insurance doesn\'t cover the full cost of repairs?',
    answer: 'Insurance shortfalls are one of the most common reasons Hartford homeowners sell fire-damaged properties. If your insurer offers $30,000 and the contractor quotes $55,000, the gap makes restoration uneconomical. We buy the property as-is — you keep whatever insurance proceeds you receive, plus our purchase price.',
  },
  {
    question: 'Do I need to clean up before selling?',
    answer: 'No. We buy the property in its current state — fire debris, smoke damage, water damage from firefighting, structural issues. No cleanup, no restoration, no demolition required from you.',
  },
  {
    question: 'How fast can you close on a fire-damaged property?',
    answer: 'As fast as 7 days. Fire-damaged properties don\'t qualify for conventional mortgage financing, which means traditional buyers can\'t purchase them. Cash buyers like us are often the only option. We move fast because we don\'t need bank approval.',
  },
];

export default function HartfordFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        hartfordLocalBusinessSchema,
        articleSchema('Sell a Fire-Damaged House in Hartford CT — Cash Offer', pageUrl, '2026-04-20'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/hartford-ct" className="hover:text-white">Hartford CT</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Fire-Damaged House in Hartford CT — Cash Offer, Any Condition
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Fire or smoke damage to your Hartford home? USA Home Buyers purchases fire-damaged properties for cash, as-is. No cleanup, no restoration, no insurance settlement required first. Written offer in 24 hours. Close in 7-14 days. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Fire damage doesn't stop us. We buy as-is — no cleanup, no restoration required.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Fire damage? We buy as-is." sourcePage="/markets/hartford-ct/fire-damage" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Fire-Damaged Properties in Hartford CT</h2>
          <p className="text-gray-700 mb-4">
            Hartford's older housing stock — predominantly wood-frame triple-deckers and multi-families built before 1940 — is particularly vulnerable to fire. According to the <a href="https://www.usfa.fema.gov/statistics/residential-fires.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">U.S. Fire Administration (USFA)</a>, residential fires cause an estimated $8.5 billion in property damage annually nationwide, with older housing stock disproportionately affected due to outdated electrical systems, aging heating equipment, and pre-code construction.
          </p>
          <p className="text-gray-700 mb-4">
            The Hartford Fire Department responds to residential fires throughout the year, with winter months seeing increased incidents due to heating equipment failures — space heaters, old boilers, and wood stoves in homes not designed for modern safety standards. The <a href="https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">National Fire Protection Association (NFPA)</a> reports that heating equipment is the second leading cause of home fires nationally.
          </p>
          <p className="text-gray-700">
            Whether the damage is partial (kitchen fire, electrical fire in one room) or extensive (structural damage across multiple floors), we purchase the property as-is. You don't need to wait for insurance to settle, you don't need to hire a contractor, and you don't need to clean up debris. We handle everything after closing.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire-Damaged Property in Hartford CT" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Hartford CT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/hartford-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/hartford-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/hartford-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/hartford-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/hartford-ct/probate', label: 'Probate' },
              { href: '/markets/hartford-ct', label: '← Back to Hartford' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Hartford CT Property?" sourcePage="/markets/hartford-ct/fire-damage" />
      </div>
    </>
  );
}
