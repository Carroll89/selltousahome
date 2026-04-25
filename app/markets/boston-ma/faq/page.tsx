/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bostonLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/boston-ma/faq`;

export const metadata: Metadata = {
  title: 'FAQ — Selling Your Boston MA Home for Cash',
  description: 'Answers to common questions about selling your Boston home for cash. Process, pricing, timeline, closing costs, and more.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How does the cash buying process work in Boston?', answer: 'Submit your property info or call 888-274-5006. We review and send a written cash offer within 24 hours. You pick the closing date — as fast as 7 days. We cover all closing costs including MA deed excise stamps. Your attorney reviews everything at closing.' },
  { question: 'How much do you pay for Boston homes?', answer: 'Cash offers typically range from 65-78% of fair market value. Boston neighborhoods vary enormously — Mattapan homes may list at $450K-$600K while Back Bay exceeds $1M. We provide written offers based on comparable sales and condition.' },
  { question: 'Do you really buy in any condition?', answer: 'Yes. Lead paint, old wiring, failed boilers, fire damage, code violations, foundation issues, mold, hoarding — we buy it all. Boston\'s housing stock ranges from 200+ year old row houses to early 1900s triple-deckers.' },
  { question: 'What closing costs do I pay?', answer: 'None. We cover everything including MA deed excise stamps ($4.56 per $1,000), title, recording, and attorney fees. On a traditional sale, the seller pays stamps plus 5-6% commission.' },
  { question: 'Do I need a lawyer?', answer: 'Massachusetts is an attorney state — both buyer and seller have their own attorney at closing. We cover your attorney costs.' },
  { question: 'How is this different from listing?', answer: 'Traditional Boston listing: 30+ days to get an offer, 45-60 days to close, 5-6% commission ($41K-$50K on an $829K home), repairs required. With us: offer in 24 hours, close in 7-14 days, no commission, no repairs, no financing risk.' },
  { question: 'What areas do you cover?', answer: 'All of Greater Boston: every Boston neighborhood, Cambridge, Somerville, Quincy, Brookline, Chelsea, Revere, Winthrop. Suffolk, Middlesex, and Norfolk Counties.' },
  { question: 'Is there any obligation?', answer: 'Zero. The form and call are free. We send a written offer — take it, leave it, or think about it.' },
  { question: 'How do I know you\'re legitimate?', answer: 'USA Home Buyers is BBB-accredited with 15+ years experience. We close through licensed attorneys, and you have your own legal representation. See selltousahome.com/brand-facts for verified company info.' },
];

export default function BostonFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[bostonLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/boston-ma" className="hover:text-white">Boston MA</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">FAQ — Selling Your Boston MA Home for Cash</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Boston Cash Home Buying — Your Questions Answered" />
        <section className="my-8"><div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[{ href: '/markets/boston-ma/inherited-property', label: 'Inherited Property' }, { href: '/markets/boston-ma/foreclosure', label: 'Foreclosure' }, { href: '/markets/boston-ma/divorce-sale', label: 'Divorce Sale' }, { href: '/markets/boston-ma/probate', label: 'Probate' }, { href: '/markets/boston-ma/tenant-occupied', label: 'Tenant-Occupied' }, { href: '/markets/boston-ma/code-violations', label: 'Code Violations' }, { href: '/markets/boston-ma/fire-damage', label: 'Fire Damage' }, { href: '/markets/boston-ma/neighborhoods', label: 'Neighborhoods' }, { href: '/markets/boston-ma/market-report', label: 'Market Report' }, { href: '/markets/boston-ma', label: '← Back to Boston' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div></section>
        <CashOfferForm variant="footer" headline="Ready to Sell Your Boston Home?" sourcePage="/markets/boston-ma/faq" />
      </div>
    </>
  );
}
