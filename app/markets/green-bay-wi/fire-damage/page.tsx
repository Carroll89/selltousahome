/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { greenBayLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire Damaged House Green Bay WI — Cash Buyer, As-Is',
  description: 'House damaged by fire or smoke in Green Bay WI? We buy fire-damaged properties for cash, as-is. No repairs, no insurance claim required. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can I sell a fire-damaged house in Green Bay?', answer: "Yes. USA Home Buyers purchases fire-damaged and smoke-damaged properties in Green Bay and throughout Brown County. You don't need to complete repairs or navigate insurance claims before selling. We buy as-is." },
  { question: 'Do I need to finish my insurance claim first?', answer: "No. We can work with open insurance claims, closed claims, or properties where no claim was filed. We make our offer based on current property condition. The insurance situation doesn't need to be resolved first — we'll explain how proceeds get structured." },
  { question: 'What kinds of fire damage do you buy?', answer: "Kitchen fires, electrical fires, chimney fires, smoke damage throughout, partial structural damage, total loss situations — we've purchased Green Bay properties with all of these. We're experienced with the Green Bay market and price accordingly." },
  { question: 'How do you determine the offer price on a fire-damaged home?', answer: "We assess current condition, the extent of structural and smoke damage, and comparable sales for the neighborhood. Our offer reflects as-is value — not what the home would be worth after repairs. We're transparent about how we arrived at the number." },
];

export default function GreenBayFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('Sell a Fire-Damaged House in Green Bay WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Fire Damage</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Fire-Damaged House in Green Bay WI — Cash, As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases fire-damaged and smoke-damaged properties in Green Bay WI and Brown County. No repairs, no completed insurance claim required. Written offer in 24 hours. Close in 7–14 days. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/green-bay-wi/fire-damage" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a Fire-Damaged Home in Green Bay</h2>
          <p className="text-gray-700 mb-4">Green Bay's older housing stock — particularly Craftsman bungalows and manufacturing-era homes from the early-to-mid 20th century — is prone to fire-related damage when systems age. Aging electrical wiring, deteriorating chimneys, and older heating systems are common fire causes in Green Bay's established residential neighborhoods. When insurance pays less than the cost of restoration, or when homeowners simply don't want to manage a major rebuild, selling as-is to a cash buyer is often the fastest path forward.</p>
          <p className="text-gray-700 mb-4">Traditional financed buyers can't purchase fire-damaged properties — lenders require properties to be habitable at closing. We have no such requirement. We close on properties with significant fire and smoke damage. There are no showings to coordinate, no repair estimates to manage, and no insurance claim timelines to wait on.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire-Damaged Properties in Green Bay WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/green-bay-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/green-bay-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/green-bay-wi/probate', label: 'Probate' }, { href: '/markets/green-bay-wi/code-violations', label: 'Code Violations' }, { href: '/markets/green-bay-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/green-bay-wi', label: '← Back to Green Bay WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Green Bay Property?" sourcePage="/markets/green-bay-wi/fire-damage" />
      </div>
    </>
  );
}
