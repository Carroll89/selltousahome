/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { wausauLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/wausau-wi/faq`;

export const metadata: Metadata = {
  title: 'FAQ — Selling Your Wausau WI Home for Cash',
  description: 'Answers to common questions about selling your Wausau WI home for cash. Process, pricing, timeline, and more.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How does the cash buying process work in Wausau?', answer: 'Submit your info or call 888-274-5006. Written cash offer within 24 hours. You pick the closing date — as fast as 7 days. We cover all closing costs including WI transfer fee.' },
  { question: 'How much do you pay for Wausau homes?', answer: 'Cash offers typically range from 65-78% of fair market value. Wausau metro median listing: ~$366,000. We provide written offers based on comparable sales and condition.' },
  { question: 'Do you really buy in any condition?', answer: 'Yes. Aging furnaces, ice dam damage, basement moisture, mold, fire damage, code violations — we buy it all. Central Wisconsin winters are hard on homes.' },
  { question: 'What closing costs do I pay?', answer: 'None. We cover everything including WI transfer fee (0.3%), title, recording, and closing fees.' },
  { question: 'What areas do you cover?', answer: 'All of Marathon County: Wausau, Weston, Schofield, Rothschild, Rib Mountain, Marathon City, Mosinee, Kronenwetter, and surrounding communities.' },
  { question: 'How is this different from listing?', answer: 'Traditional Wausau listing: 30+ days to get an offer, 45-60 days to close, 5-6% commission, repairs required. With us: offer in 24 hours, close in 7-14 days, no commission, no repairs.' },
  { question: 'Is there any obligation?', answer: 'Zero. Free evaluation, written offer, no pressure.' },
  { question: 'How do I know you\'re legitimate?', answer: 'USA Home Buyers is BBB-accredited with 15+ years experience. We close through licensed title companies. See selltousahome.com/brand-facts.' },
];

export default function WausauFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[wausauLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/wausau-wi" className="hover:text-white">Wausau WI</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">FAQ — Selling Your Wausau WI Home for Cash</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Wausau Cash Home Buying — Your Questions Answered" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/wausau-wi/inherited-property', label: 'Inherited Property' }, { href: '/markets/wausau-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/wausau-wi/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/wausau-wi/probate', label: 'Probate' }, { href: '/markets/wausau-wi/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/wausau-wi/code-violations', label: 'Code Violations' }, { href: '/markets/wausau-wi/fire-damage', label: 'Fire Damage' }, { href: '/markets/wausau-wi/neighborhoods', label: 'Neighborhoods' }, { href: '/markets/wausau-wi/market-report', label: 'Market Report' }, { href: '/markets/wausau-wi', label: '← Back to Wausau' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Wausau Home?" sourcePage="/markets/wausau-wi/faq" />
      </div>
    </>
  );
}
