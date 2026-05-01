/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { chambersburgLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/chambersburg-pa/faq`;

export const metadata: Metadata = {
  title: 'Chambersburg PA Cash Home Buyer FAQ — Common Questions Answered',
  description: 'Answers to common questions about selling your Chambersburg PA house for cash. Transfer taxes, foreclosure, probate, and how the process works in Franklin County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Chambersburg PA?', answer: "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours. Call 888-274-5006 to start." },
  { question: 'What is Pennsylvania\'s real estate transfer tax?', answer: "According to Pennsylvania Revenue (revenue.pa.gov), Pennsylvania charges a 1% state real estate transfer tax. The Borough of Chambersburg adds a 1% local transfer tax — total 2%. On a $228,975 home, total transfer tax is $4,579 (typically split 1%/1% between buyer and seller). We cover all closing costs when you sell to us." },
  { question: 'How does Pennsylvania foreclosure work?', answer: "Pennsylvania requires judicial foreclosure — the lender files in Franklin County Court of Common Pleas. After judgment, a sheriff's sale is scheduled. Timeline: 9–18 months from filing. Consult a Pennsylvania-licensed real estate attorney for your situation. A cash sale stops the process and preserves your equity." },
  { question: 'Does Pennsylvania require an attorney to close?', answer: "No — Pennsylvania is a title company state. You don't need to hire an attorney to close a home sale, though consulting one is always reasonable." },
  { question: 'Where is the Franklin County Register & Recorder?', answer: "157 Lincoln Way East, Chambersburg PA 17201, phone (717) 261-3872. This office handles deed recording and estate filings. Note: the Prothonotary (civil court filings) is a different office at (717) 261-3861." },
  { question: 'What areas near Chambersburg do you buy in?', answer: "All of Franklin County: Chambersburg Borough, Waynesboro, Greencastle, Mercersburg, Shippensburg, Carlisle, Fayetteville, and surrounding townships. Also neighboring Cumberland County communities. Call 888-274-5006 if you're not sure we cover your area." },
  { question: 'Do I need to make repairs before selling?', answer: "No. We buy in any condition — historic district homes, ranch homes, older systems, code issues, fire damage. No repairs, no cleaning, no staging." },
  { question: 'What happens after I call or submit the form?', answer: "We call within business hours, ask about the property and your situation, and send a written cash offer within 24 hours. No obligation. You pick the closing date." },
];

export default function ChambersburgFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[chambersburgLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/chambersburg-pa" className="hover:text-white">Chambersburg PA</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Chambersburg PA Cash Home Buyer FAQ</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling in Chambersburg PA" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[{ href: '/markets/chambersburg-pa', label: 'Chambersburg PA Market Page' }, { href: '/markets/chambersburg-pa/market-report', label: 'Market Report' }, { href: '/markets/chambersburg-pa/foreclosure', label: 'Foreclosure' }, { href: '/markets/chambersburg-pa/probate', label: 'Probate' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-2 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Get Your Chambersburg PA Cash Offer?" sourcePage="/markets/chambersburg-pa/faq" />
      </div>
    </>
  );
}
