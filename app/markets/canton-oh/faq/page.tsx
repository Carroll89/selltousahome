/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { cantonLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/canton-oh/faq`;

export const metadata: Metadata = {
  title: 'Canton OH Cash Home Buyer FAQ — Common Questions Answered',
  description: 'Answers to common questions about selling your Canton OH house for cash. Conveyance fees, foreclosure, probate, and how the process works in Stark County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Canton OH?', answer: "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours of first contact. You pick the closing date — as fast as a week, or longer if you need time. Call 888-274-5006 to start." },
  { question: 'What is Ohio\'s conveyance fee and how does it work in Stark County?', answer: "Ohio calls it a conveyance fee rather than a transfer tax. Stark County charges $4.00 per $1,000 of sale price (rounded up to the next $100) plus $0.50 per parcel, collected by the Stark County Auditor (110 Central Plaza South, Suite 220, Canton OH 44702). Deeds must be stamped by the Auditor and DTE Form 100 submitted before recording at the Stark County Recorder (Suite 170). On a $127,000 Canton home, that's approximately $508 in conveyance fee. We cover all closing costs when you sell to us. Source: Stark County Auditor transfer department." },
  { question: 'How does Ohio foreclosure work in Stark County?', answer: "Ohio requires judicial foreclosure — the lender files in Stark County Common Pleas Court. After the court enters a judgment, the property goes to online sheriff sale through Realauction (sheriffsales.starkcountyohio.gov) every Monday at 10:00 a.m. Eastern. After the sale, the sheriff has up to 60 days to report and the court up to 30 days to confirm. A cash sale before judgment stops the process. Consult an Ohio-licensed real estate attorney for your situation. Source: Stark County Sheriff foreclosure page." },
  { question: 'Does Ohio require an attorney to close?', answer: "No. Ohio is a title company state — you don't need to hire an attorney to close a home sale. Title companies handle residential closings. You may choose to consult an attorney for complex situations, but it's not legally required." },
  { question: 'Where is the Stark County Probate Court?', answer: "Stark County Probate Court is at 110 Central Plaza South, Suite 501, Canton OH 44702 — Judge Curt Werren, phone 330-451-7755, open Monday–Friday 8:30 a.m.–4:30 p.m. The initial minimum deposit to open an estate is $125.00 and average court costs are usually less than $200. You can accept a purchase offer during probate; deed transfer requires estate authorization." },
  { question: 'What areas near Canton do you buy in?', answer: "All of Stark County: Canton, Massillon, North Canton, Louisville, Alliance, Jackson Township, Perry Township, Plain Township, East Canton, Hartville, Navarre, Canal Fulton, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area." },
  { question: 'Do I need to make repairs before selling?', answer: "No. Canton has one of the oldest housing stocks in Ohio — 41.5% of housing units were built in 1939 or earlier (2024 ACS Census data). Pre-1940 brick colonials and bungalows often have lead paint, aging electrical, plumbing, and foundation issues. We buy in any condition. No repairs, no cleaning, no staging required." },
  { question: 'What happens after I call or submit the form?', answer: "We call within business hours, ask about the property and your situation, and send a written cash offer within 24 hours. No obligation. If it works, you pick the closing date. That's it." },
];

export default function CantonFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[cantonLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/canton-oh" className="hover:text-white">Canton OH</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Canton OH Cash Home Buyer FAQ</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling in Canton OH" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[{ href: '/markets/canton-oh', label: 'Canton OH Market Page' }, { href: '/markets/canton-oh/market-report', label: 'Market Report' }, { href: '/markets/canton-oh/foreclosure', label: 'Foreclosure' }, { href: '/markets/canton-oh/probate', label: 'Probate' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-2 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Get Your Canton OH Cash Offer?" sourcePage="/markets/canton-oh/faq" />
      </div>
    </>
  );
}
