import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/cincinnati-oh/code-violations`;

export const metadata: Metadata = {
  title: 'Code Violations Help in Cincinnati OH — Sell As-Is for Cash',
  description: 'Open violations, failed repairs, unsafe conditions, and major deferred maintenance are common reasons sellers choose an as-is cash buyer. USA Home Buyers buys Cincinnati OH houses as-is for cash. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'Can USA Home Buyers help with code violations in Cincinnati OH?', answer: 'Yes. We buy Cincinnati OH houses as-is and can evaluate the property quickly. Title, estate authority, tenant, lien, or court issues are confirmed before closing. Call 888-274-5006.' },
  { question: 'Do I need to repair the Cincinnati property before requesting an offer?', answer: 'No. We evaluate Victorians, ranches, hillside homes, rentals, and older Hamilton County properties in their current condition. You do not need to clean out, stage, list, or complete repairs before getting a written cash offer.' },
  { question: 'How fast can a Cincinnati OH cash sale close?', answer: 'Many direct cash purchases close in 14–21 days after an accepted offer, depending on title and paperwork. If you need more time, you choose the closing date that works for your situation.' },
];

export default function CincinnatiCodeViolationsPage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema('Code Violations Help in Cincinnati OH', pageUrl, '2026-05-02'), faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-16 px-4 overflow-hidden"><div className="absolute inset-0 bg-brand-dark" /><div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-blue-300 text-sm font-medium mb-2"><Link href="/sell-my-house-fast-cincinnati-oh" className="hover:text-white">Cincinnati OH</Link> › Code Violations</p><h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Code Violations Help in Cincinnati OH — Sell As-Is for Cash</h1><div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4"><p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p><p className="text-white text-sm leading-relaxed">Open violations, failed repairs, unsafe conditions, and major deferred maintenance are common reasons sellers choose an as-is cash buyer. USA Home Buyers buys Cincinnati OH houses as-is in Hamilton County. Written cash offer in 24 hours, no repairs, no agent fees, and a closing date built around your timeline. Call 888-274-5006.</p></div><a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">📞 Call Now — 888-274-5006 (24/7)</a></div><div><CashOfferForm variant="hero" headline="Get Your Cincinnati OH Cash Offer" subheadline="Written offer in 24 hours. No repairs required." sourcePage="/markets/cincinnati-oh/code-violations" /></div></div></section>
      <div className="max-w-7xl mx-auto px-4 py-8"><section className="my-8"><h2 className="text-2xl font-bold text-brand-dark mb-4">What this means for Cincinnati OH sellers</h2><p className="text-gray-700 mb-4">This page keeps you inside the Cincinnati OH mini-site while preserving the Batch 004 primary landing page at <Link href="/sell-my-house-fast-cincinnati-oh" className="text-brand-primary hover:underline">/sell-my-house-fast-cincinnati-oh</Link>.</p><p className="text-gray-700 mb-4">Common properties we review in Cincinnati include Victorians, ranches, hillside homes, rentals, and older Hamilton County properties. We look at condition, title requirements, payoff or lien issues, and your preferred timeline before making a written offer.</p><div className="border-l-4 border-blue-400 pl-4 mb-6"><h3 className="font-semibold text-brand-dark mb-1">Local guardrails for Cincinnati OH</h3><ul className="text-sm text-gray-700 space-y-1 list-disc list-inside"><li>City of Cincinnati / Hamilton County Ohio scope only; Kentucky and Indiana-side properties need separate review.</li><li>Primary route remains /sell-my-house-fast-cincinnati-oh with canonical pointing to the direct route.</li><li>Hamilton County conveyance and recording paperwork are coordinated through the title process.</li></ul></div></section><FAQSection items={FAQ_ITEMS} heading="FAQs — Code Violations in Cincinnati OH" /><section className="my-8"><h2 className="text-2xl font-bold text-brand-dark mb-4">More Cincinnati OH resources</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{[{ href: '/sell-my-house-fast-cincinnati-oh', label: 'Cincinnati OH Market Page' },{ href: '/markets/cincinnati-oh/resources', label: 'Seller Resources' },{ href: '/guides/sell-house-fast-cincinnati-oh-2026', label: 'Local Guide' },{ href: '/resources/how-the-process-works/cincinnati-oh', label: 'How It Works' },{ href: '/about/cincinnati-oh', label: 'About' },{ href: '/reviews/cincinnati-oh', label: 'Reviews' }].map((link) => (<Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>))}</div></section><CashOfferForm variant="footer" headline="Ready to Get Your Cincinnati OH Cash Offer?" sourcePage="/markets/cincinnati-oh/code-violations" /></div>
    </>
  );
}
