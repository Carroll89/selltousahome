/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { madisonLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/madison-wi/faq`;

export const metadata: Metadata = {
  title: 'Madison WI Cash Home Buyer FAQ — Common Questions Answered',
  description: 'Answers to common questions about selling your Madison WI house for cash. Transfer fees, foreclosure, probate, and how the process works in Dane County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Madison WI?', answer: "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours of first contact. You pick the closing date — as fast as a week, or longer if you need time. Call 888-274-5006 to start." },
  { question: 'What is Wisconsin\'s real estate transfer fee?', answer: "According to the Wisconsin Department of Revenue (revenue.wi.gov), Wisconsin charges $3.00 per $1,000 of sale price (0.3%). Under Wisconsin Statute §77.256, no county or municipality may impose an additional transfer fee. On a $453,500 Madison home, that's $1,360 total. We cover all closing costs when you sell to us." },
  { question: 'How does Wisconsin foreclosure work?', answer: "Wisconsin requires judicial foreclosure — the lender must go through Dane County Circuit Court. After the court enters a judgment, there's a redemption period (typically 6–12 months) before the sheriff's sale. Total timeline: about 12 months from filing. A cash sale before judgment stops the process and preserves your equity. Consult a Wisconsin-licensed real estate attorney for your situation. Source: Wisconsin Statutes Ch. 846." },
  { question: 'Does Wisconsin require an attorney to close?', answer: "No. Wisconsin is a title company state — you don't need to hire an attorney to close a home sale. Title companies handle closings. You may choose to consult an attorney, which is always reasonable, but it's not legally required." },
  { question: 'Where is Dane County probate court?', answer: "Dane County Circuit Court Probate Division is at 215 S. Hamilton Street, Room 1005, Madison WI 53703, phone (608) 266-4331. Most uncontested estates in Wisconsin take 3–6 months through informal administration. You can accept a purchase offer during probate; the deed transfers after Letters Testamentary issue." },
  { question: 'What areas near Madison do you buy in?', answer: "All of Dane County: Madison, Fitchburg, Middleton, Sun Prairie, Monona, Verona, Stoughton, DeForest, McFarland, Cottage Grove, Waunakee, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area." },
  { question: 'Do I need to make repairs before selling?', answer: "No. We buy Madison homes in any condition — Craftsman bungalows with aging systems, older duplexes with deferred maintenance, properties with code issues, fire damage, or anything else. No repairs, no cleaning, no staging required." },
  { question: 'What happens after I call or submit the form?', answer: "We call within business hours, ask about the property and your situation, and send a written cash offer within 24 hours. No obligation. If it works, you pick the closing date. That's it." },
];

export default function MadisonFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[madisonLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/madison-wi" className="hover:text-white">Madison WI</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Madison WI Cash Home Buyer FAQ</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling in Madison WI" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[{ href: '/markets/madison-wi', label: 'Madison WI Market Page' }, { href: '/markets/madison-wi/market-report', label: 'Market Report' }, { href: '/markets/madison-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/madison-wi/probate', label: 'Probate' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-2 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Get Your Madison WI Cash Offer?" sourcePage="/markets/madison-wi/faq" />
      </div>
    </>
  );
}
