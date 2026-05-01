/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { madisonLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/madison-wi/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Madison WI — Cash, As-Is',
  description: 'Selling a fire-damaged house in Madison WI? We buy fire and smoke-damaged properties as-is, for cash. No repairs, no cleanup required. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Will you buy a fire-damaged house in Madison WI?', answer: "Yes. We purchase fire-damaged, smoke-damaged, and water-damaged properties throughout Madison and Dane County as-is. We factor the damage and repair cost into our offer. You don't repair or clean anything." },
  { question: 'Do I need to work with my insurance company first?', answer: "You can. Some sellers coordinate a cash sale after the insurance settlement — or instead of pursuing a large claim. We work with whatever situation you're in. Call us and we'll walk through the options." },
  { question: 'What if the city has condemned the property?', answer: "We've purchased condemned properties. A condemnation creates complications but doesn't prevent a sale. Call us — we'll review the specific situation." },
  { question: 'How quickly can we close?', answer: "As few as 7 days. Fire situations are time-sensitive — carrying a damaged property costs money every month in insurance, taxes, and potential liability. We move fast." },
];

export default function MadisonFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, articleSchema('Sell a Fire-Damaged House in Madison WI', pageUrl, '2026-05-01'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/madison-wi" className="hover:text-white">Madison WI</Link> › Fire Damage</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Sell a Fire-Damaged House in Madison WI — Cash, As-Is</h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases fire-damaged and smoke-damaged houses in Madison WI and Dane County — no repairs, no cleanup, as-is. Written offer in 24 hours, close in 7–14 days. Call 888-274-5006.</p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a>
          </div>
          <div><CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours." sourcePage="/markets/madison-wi/fire-damage" /></div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Fire-Damaged Properties in Madison</h2>
          <p className="text-gray-700 mb-4">Wisconsin winters are hard on older homes. Chimney fires, electrical fires in knob-and-tube wiring, heating equipment failures — Madison's inventory of Craftsman bungalows and older rental duplexes faces real fire risk. When a fire happens, the choice is between a long restoration project, a difficult insurance claim, or a fast sale. Many sellers find that the insurance payout doesn't cover the full cost of restoration, and carrying a damaged property is not sustainable.</p>
          <p className="text-gray-700 mb-4">We buy fire-damaged properties throughout Madison and Dane County. We assess the damage ourselves, make a written offer, and close on your timeline. You take what you want and leave the rest.</p>
        </section>
        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire Damage in Madison WI" />
        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[{ href: '/markets/madison-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/madison-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/madison-wi/probate', label: 'Probate' }, { href: '/markets/madison-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/madison-wi/code-violations', label: 'Code Violations' }, { href: '/markets/madison-wi', label: '← Back to Madison WI' }].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Madison WI Property?" sourcePage="/markets/madison-wi/fire-damage" />
      </div>
    </>
  );
}
