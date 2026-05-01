/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { milwaukeeLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/milwaukee-wi/faq`;

export const metadata: Metadata = {
  title: 'Milwaukee WI Cash Home Buyer FAQ — Common Questions Answered',
  description: 'Answers to common questions about selling your Milwaukee WI house for cash. Transfer fees, foreclosure, probate, and how the process works in Milwaukee County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Milwaukee WI?', answer: "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours of first contact. You pick the closing date — as fast as a week, or longer if you need time. Call 888-274-5006 to start." },
  { question: 'What is Wisconsin\'s real estate transfer fee and how does it apply in Milwaukee?', answer: "Wisconsin charges $3.00 per $1,000 of sale price (0.3%). The fee is collected by the Milwaukee County Register of Deeds (901 N. 9th Street, Room 103, Milwaukee WI 53233, Register Israel Ramón) when the deed is recorded. On a $235,000 Milwaukee home, that's $705 total. We cover all closing costs when you sell to us. Source: Wisconsin DOR / Wis. Stat. §77.22." },
  { question: 'How does Wisconsin foreclosure work in Milwaukee County?', answer: "Wisconsin requires judicial foreclosure — the lender files in Milwaukee County Circuit Court. After judgment, there's a redemption period (typically 3–6 months for post-April 2016 mortgages). Milwaukee County sheriff real estate auctions occur every Monday morning. Milwaukee also has a separate city in-rem tax foreclosure process for unpaid property taxes. Total timeline: 6–18 months from filing. Consult a Wisconsin-licensed real estate attorney for your situation. Source: Wisconsin Law Help, Milwaukee County." },
  { question: 'Does Wisconsin require an attorney to close?', answer: "No. Wisconsin is a title company state — you don't need to hire an attorney to close a home sale. Title companies handle closings throughout Milwaukee County. You may choose to consult an attorney, which is always reasonable, but it's not legally required." },
  { question: 'Where is the Milwaukee County Probate Court?', answer: "Milwaukee County Probate Court / Register in Probate is at Milwaukee County Courthouse, 901 N. 9th St., Room 207, Milwaukee WI 53233, phone (414) 278-4444, option 2. Most uncontested estates take 3–6 months through informal administration. You can accept a purchase offer during probate; the deed transfers after Letters Testamentary issue." },
  { question: 'What areas near Milwaukee do you buy in?', answer: "All of Milwaukee County: Milwaukee, West Allis, Wauwatosa, Shorewood, Whitefish Bay, Glendale, Greenfield, Greendale, Cudahy, South Milwaukee, Oak Creek, Brown Deer, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area." },
  { question: 'Do I need to make repairs before selling?', answer: "No. We buy Milwaukee homes in any condition — German duplexes with aging electrical, Cream City brick buildings with deferred maintenance, properties with code issues, fire damage, or anything else. 44.8% of Milwaukee city housing units were built before 1950. No repairs, no cleaning, no staging required." },
  { question: 'What happens after I call or submit the form?', answer: "We call within business hours, ask about the property and your situation, and send a written cash offer within 24 hours. No obligation. If it works, you pick the closing date. That's it." },
];

export default function MilwaukeeFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[milwaukeeLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/milwaukee-wi" className="hover:text-white">Milwaukee WI</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Milwaukee WI Cash Home Buyer FAQ</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling in Milwaukee WI" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[{ href: '/markets/milwaukee-wi', label: 'Milwaukee WI Market Page' }, { href: '/markets/milwaukee-wi/market-report', label: 'Market Report' }, { href: '/markets/milwaukee-wi/foreclosure', label: 'Foreclosure' }, { href: '/markets/milwaukee-wi/probate', label: 'Probate' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-2 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Get Your Milwaukee WI Cash Offer?" sourcePage="/markets/milwaukee-wi/faq" />
      </div>
    </>
  );
}
