import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/guides/sell-house-fast-cincinnati-oh-2026`;

export const metadata: Metadata = {
  title: 'How to Sell a House Fast in Cincinnati OH (2026 Guide)',
  description: 'Cincinnati OH seller guide for as-is cash sales, traditional listings, repairs, closing context, and when speed or certainty matters.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'What is the fastest way to sell a house in Cincinnati OH?', answer: 'A direct cash sale is usually the fastest route when the property needs repairs, the deadline is tight, or you want to avoid showings. USA Home Buyers can make a written offer in 24 hours and close once title is ready.' },
  { question: 'Do I need to list my Cincinnati house with an agent first?', answer: 'No. You can request a no-obligation cash offer before deciding whether listing makes sense. If the retail market is better for you, we will say so plainly.' },
  { question: 'Will you buy Cincinnati OH houses as-is?', answer: 'Yes. We buy Victorians, ranches, hillside homes, rentals, and older Hamilton County properties as-is. You do not need to make repairs, clean out the house, or manage repeated showings before getting an offer.' },
];

export default function CincinnatiGuidePage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema('How to Sell a House Fast in Cincinnati OH (2026)', pageUrl, '2026-05-02'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden"><div className="absolute inset-0 bg-brand-dark" /><div className="relative z-10 max-w-4xl mx-auto"><p className="text-blue-300 text-sm font-medium mb-2"><Link href="/sell-my-house-fast-cincinnati-oh" className="hover:text-white">Cincinnati OH</Link> › Seller Guide</p><h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Sell a House Fast in Cincinnati OH — 2026 Guide</h1><div className="bg-white/10 border border-white/20 rounded-xl p-4"><p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p><p className="text-white text-sm leading-relaxed">USA Home Buyers purchases Cincinnati OH houses for cash, as-is. Written offer in 24 hours, no repairs, no agent fees, and a closing date built around your timeline.</p></div></div></section>
      <div className="max-w-4xl mx-auto px-4 py-8"><section className="my-8"><h2 className="text-2xl font-bold text-brand-dark mb-4">Your options for selling in Cincinnati OH</h2><p className="text-gray-700 mb-4">A retail listing can work when a home is updated and you have time. A cash sale prioritizes speed, certainty, fewer contingencies, and no repair requirement.</p><ul className="text-gray-700 mb-4 space-y-2 list-disc list-inside"><li>City of Cincinnati / Hamilton County Ohio scope only; Kentucky and Indiana-side properties need separate review.</li><li>Primary route remains /sell-my-house-fast-cincinnati-oh with canonical pointing to the direct route.</li><li>Hamilton County conveyance and recording paperwork are coordinated through the title process.</li></ul></section><FAQSection items={FAQ_ITEMS} heading="FAQs — Selling in Cincinnati OH" /><section className="my-8"><h2 className="text-2xl font-bold text-brand-dark mb-4">Related Cincinnati OH resources</h2><div className="grid grid-cols-2 gap-3">{[{ href: '/sell-my-house-fast-cincinnati-oh', label: 'Cincinnati OH Market Page' },{ href: '/markets/cincinnati-oh/resources', label: 'Seller Resources' },{ href: '/resources/how-the-process-works/cincinnati-oh', label: 'How It Works' },{ href: '/about/cincinnati-oh', label: 'About USA Home Buyers' },{ href: '/reviews/cincinnati-oh', label: 'Reviews' },{ href: '/markets/cincinnati-oh/foreclosure', label: 'Foreclosure Help' }].map((link) => (<Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>))}</div></section><CashOfferForm variant="footer" headline="Ready to Get Your Cincinnati OH Cash Offer?" sourcePage="/guides/sell-house-fast-cincinnati-oh-2026" /></div>
    </>
  );
}
