/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { milwaukeeLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/milwaukee-wi/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire Damaged House Milwaukee WI — Cash, As-Is',
  description: 'Need to sell a fire-damaged house in Milwaukee WI? We buy fire and smoke damaged properties as-is, for cash. No repairs required. Serving Milwaukee County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a fire-damaged house in Milwaukee WI?', answer: "Yes. Fire damage doesn't prevent a sale. USA Home Buyers purchases fire-damaged properties as-is — smoke damage, structural damage, partial destruction. You don't need to rebuild or repair anything before selling to us." },
  { question: 'What if insurance only partially covered the damage?', answer: "This is common in Milwaukee's older building stock. Insurance pays one amount; the contractor bids another — especially on Cream City brick buildings, older duplexes, and pre-war structures with original materials and old wiring. If the gap is too large to bridge, a cash sale lets you take the insurance payout and move on." },
  { question: 'Do I need to disclose fire damage when selling in Wisconsin?', answer: "Wisconsin requires sellers to disclose known material defects, including fire damage history, on real estate disclosure forms. With USA Home Buyers, we buy with full knowledge of the damage — no disclosure surprises affect our offer after the fact." },
  { question: 'What happens if a Milwaukee duplex unit has fire damage?', answer: "We can purchase a duplex or multifamily property even when one unit has fire damage. We evaluate the entire property as-is and make a single written offer. Tenant status in undamaged units is factored into our evaluation." },
];

export default function MilwaukeeFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[milwaukeeLocalBusinessSchema, articleSchema('Sell a Fire Damaged House in Milwaukee WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/milwaukee-wi" className="hover:text-white">Milwaukee WI</Link> › Fire Damage</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell Your Fire-Damaged Milwaukee WI House — Cash, As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases fire-damaged and smoke-damaged properties in Milwaukee WI and Milwaukee County — as-is, for cash, no repairs or rebuild required. Single-family, duplex, multifamily — any condition. Written offer in 24 hours of walkthrough. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/milwaukee-wi/fire-damage" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a Fire-Damaged Property in Milwaukee</h2>
          <p className="text-gray-700 mb-4">Fire damage in an older Milwaukee property — a German duplex in Sherman Park, a Cream City brick building in Riverwest, a Queen Anne single-family in Bay View — creates a complex gap between insurance payouts and real repair costs. The combination of original materials, old building systems, and the complexity of duplex or multifamily reconstruction frequently pushes contractor bids well above insurance settlements.</p>
          <p className="text-gray-700 mb-4">A cash sale to USA Home Buyers eliminates that gap. We buy the property as-is: fire damage, smoke damage, water damage from suppression, structural compromise. We evaluate single-family, duplex, and multifamily properties. You take the insurance proceeds you have, we close in 7–14 days, and you're done.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire Damaged Property in Milwaukee WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/milwaukee-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/milwaukee-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/milwaukee-wi/probate', label: 'Probate' }, { href: '/markets/milwaukee-wi/code-violations', label: 'Code Violations' }, { href: '/markets/milwaukee-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/milwaukee-wi', label: '← Back to Milwaukee WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Milwaukee WI Property?" sourcePage="/markets/milwaukee-wi/fire-damage" />
      </div>
    </>
  );
}
