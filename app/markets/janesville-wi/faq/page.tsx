/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { janesvilleLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/janesville-wi/faq`;

export const metadata: Metadata = {
  title: 'Janesville WI Cash Home Buyer FAQ — Common Questions Answered',
  description: 'Answers to common questions about selling your Janesville WI house for cash. Transfer fees, foreclosure, probate, and how the process works in Rock County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Janesville WI?', answer: "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours of first contact. You pick the closing date — as fast as a week, or longer if you need time. Call 888-274-5006 to start." },
  { question: 'What is Wisconsin\'s real estate transfer fee and how does it apply in Janesville?', answer: "Wisconsin charges $3.00 per $1,000 of sale price (0.3%). The fee is collected through the Rock County Register of Deeds (verify current county office location before relying on it) when the deed is recorded. On a $275,000 Janesville home, that's $855 total. We cover all closing costs when you sell to us. Source: Wisconsin DOR / Wis. Stat. §77.22." },
  { question: 'How does Wisconsin foreclosure work in Rock County?', answer: "Wisconsin requires judicial foreclosure — the lender must go through Rock County Circuit Court . After the court enters a judgment, there's a redemption period (typically 3–6 months for newer mortgages) before the sheriff's sale. Rock County sheriff-sale schedules and locations should be confirmed from the current county posting before relying on them. Total timeline: 6–18 months from filing. A cash sale before judgment stops the process and preserves your equity. Consult a Wisconsin-licensed real estate attorney for your situation. Source: Wisconsin Law Help; county sheriff-sale details should be verified for the parcel." },
  { question: 'Does Wisconsin require an attorney to close?', answer: "No. Wisconsin is a title company state — you don't need to hire an attorney to close a home sale. Title companies handle closings throughout Janesville and Rock County. You may choose to consult an attorney, which is always reasonable, but it's not legally required." },
  { question: 'Where is the Rock County probate court?', answer: "Probate matters in Janesville are handled by the Rock County Clerk of Circuit Court at the Justice Center, the appropriate county circuit court office.m.–4:30 p.m. Most uncontested estates take 3–6 months through informal administration. You can accept a purchase offer during probate; the deed transfers after Letters Testamentary issue." },
  { question: 'What areas near Janesville do you buy in?', answer: "All of Rock County and Janesville neighborhoods: Janesville, Courthouse Hill, Old Fourth Ward, Downtown Janesville, Rockport, and Monterey. Call 888-274-5006 if you're not sure we cover your area." },
  { question: 'Do I need to make repairs before selling?', answer: "No. We buy Janesville homes in any condition — bungalows with aging electrical, older homes with deferred roofing, properties with code issues, fire damage, or anything else. About 19% of Janesville's housing units were built in 1939 or earlier. We've seen everything. No repairs, no cleaning, no staging required." },
  { question: 'What happens after I call or submit the form?', answer: "We call within business hours, ask about the property and your situation, and send a written cash offer within 24 hours. No obligation. If it works, you pick the closing date. That's it." },
];

export default function JanesvilleFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[janesvilleLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/janesville-wi" className="hover:text-white">Janesville WI</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Janesville WI Cash Home Buyer FAQ</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling in Janesville WI" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[{ href: '/markets/janesville-wi', label: 'Janesville WI Market Page' }, { href: '/markets/janesville-wi/market-report', label: 'Market Report' }, { href: '/markets/janesville-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/janesville-wi/probate', label: 'Probate' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-2 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Get Your Janesville WI Cash Offer?" sourcePage="/markets/janesville-wi/faq" />
      </div>
    </>
  );
}
