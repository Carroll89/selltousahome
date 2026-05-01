/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { waterburyLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/waterbury-ct/faq`;

export const metadata: Metadata = {
  title: 'Waterbury CT Cash Home Buyer FAQ — Common Questions Answered',
  description: 'Answers to common questions about selling your Waterbury CT house for cash. CT strict foreclosure, probate, attorney closing requirements, and how we work in New Haven County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Waterbury CT?', answer: "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours. Connecticut is an attorney-closing state — we coordinate the closing attorney on our side. Call 888-274-5006 to start." },
  { question: 'What is the Waterbury CT conveyance tax?', answer: "Waterbury is a Connecticut Targeted Investment Community (TIC) under CGS §12-494. The TIC designation affects the conveyance tax structure. Verify the exact current rate with a Connecticut-licensed real estate attorney before closing. USA Home Buyers covers all closing costs when we purchase, so the tax structure doesn't reduce your net proceeds." },
  { question: 'How does Connecticut strict foreclosure work?', answer: "Connecticut strict foreclosure is unique nationally. The court sets a 'Law Day.' If the borrower can't pay off the mortgage by Law Day, title passes DIRECTLY to the lender — no auction, no redemption period afterward. Consult a Connecticut-licensed attorney for your situation. A cash sale before Law Day is the most reliable way to end the process." },
  { question: 'Does Connecticut require an attorney to close?', answer: "Yes — Connecticut is an attorney-closing state. Both buyer and seller must be represented by licensed CT attorneys at closing. We coordinate the buyer-side attorney. You need your own closing attorney (or your estate attorney for probate situations)." },
  { question: 'Where is Waterbury Probate Court?', answer: "49 Leavenworth Street, Waterbury CT 06702, phone (203) 755-1127. Confirmed via ctprobate.gov. NOT City Hall at 235 Grand Street. Verify current contact information before relying on specific details." },
  { question: 'What areas near Waterbury do you buy in?', answer: "All of New Haven County: Waterbury, Naugatuck, Wolcott, Cheshire, Prospect, Middlebury, Oakville, Ansonia, Shelton, and surrounding communities. Call 888-274-5006 if you're not sure." },
  { question: 'Do I need to make repairs before selling?', answer: "No. We buy in any condition — compact frame homes, two-family properties, older systems, code issues, fire damage. No repairs, no cleaning, no staging." },
  { question: 'What happens after I call or submit the form?', answer: "We call within business hours, ask about the property, and send a written cash offer within 24 hours. No obligation. You pick the closing date. We coordinate the CT attorney closing." },
];

export default function WaterburyFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Waterbury CT Cash Home Buyer FAQ</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling in Waterbury CT" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[{ href: '/markets/waterbury-ct', label: 'Waterbury CT Market Page' }, { href: '/markets/waterbury-ct/market-report', label: 'Market Report' }, { href: '/markets/waterbury-ct/foreclosure', label: 'Foreclosure' }, { href: '/markets/waterbury-ct/probate', label: 'Probate' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-2 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Get Your Waterbury CT Cash Offer?" sourcePage="/markets/waterbury-ct/faq" />
      </div>
    </>
  );
}
