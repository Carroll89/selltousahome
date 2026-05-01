/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { akronLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/akron-oh/faq`;

export const metadata: Metadata = {
  title: 'Akron OH Cash Home Buyer FAQ — Common Questions Answered',
  description:
    'Answers to common questions about selling your Akron OH house for cash. Summit County conveyance fee, foreclosure, probate, and how the process works.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Akron OH?',
    answer:
      "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours of first contact. You pick the closing date — as fast as a week, or longer if you need time. Call 888-274-5006 to start.",
  },
  {
    question: "What is Ohio's conveyance fee and how does it work in Summit County?",
    answer:
      "Ohio charges a conveyance fee rather than a transfer tax. Summit County charges $4.00 per $1,000 of sale price (rounded up to the next $100) plus $0.50 per lot, paid to the Summit County Fiscal Office Recording Division (175 S. Main St., 4th Floor, Akron OH 44308, Mon–Fri 7:30 AM–4:00 PM). DTE Forms 100 and 100(EX) are required; forms received by 3:30 PM process same business day. On a $151,750 Akron median-sale home, that's approximately $607. We cover all closing costs when you sell to us. Source: Summit County Fiscal Office.",
  },
  {
    question: 'How does Ohio foreclosure work in Summit County?',
    answer:
      "Ohio requires judicial foreclosure — the lender files in Summit County Common Pleas Court. After the court enters a judgment, mortgage sheriff sales go online through RealAuction every Friday at 10:00 a.m.; delinquent tax sales go Tuesdays at 10:00 a.m. Starting bid is 2/3 of appraised value. A cash sale before judgment stops the process. Consult an Ohio-licensed real estate attorney for your situation. Source: Summit County Sheriff foreclosure page.",
  },
  {
    question: 'Does Ohio require an attorney to close?',
    answer:
      "No. Ohio is a title company state — you don't need to hire an attorney for a residential real estate closing. Title companies handle closings. You may choose to consult an attorney for probate, divorce, or complex situations, but it's not legally required.",
  },
  {
    question: 'Where is Summit County Probate Court?',
    answer:
      "Summit County Court of Common Pleas — Probate Division, Judge Elinore Marsh Stormer. 209 South High Street, Akron OH 44308, phone 330-643-2350. Open Monday–Friday. The court handles wills, estate administration, guardianship, and related matters in Summit County.",
  },
  {
    question: 'What areas near Akron do you buy in?',
    answer:
      "All of Summit County: Akron, Cuyahoga Falls, Barberton, Stow, Tallmadge, Fairlawn, Green, Norton, Portage Lakes, Mogadore, Hudson, Munroe Falls, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer:
      "No. Akron's housing stock is among Ohio's oldest — 34.1% built in 1939 or earlier. Goodyear Heights, East Akron, Kenmore, Firestone Park, and Highland Square are full of rubber-era bungalows and foursquares with deferred maintenance, lead paint, and aging mechanicals. We buy in any condition.",
  },
  {
    question: 'What happens after I call or submit the form?',
    answer:
      "We call within business hours, ask about the property and your situation, and send a written cash offer within 24 hours. No obligation. If it works, you pick the closing date. That's it.",
  },
];

export default function AkronFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[akronLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/akron-oh" className="hover:text-white">Akron OH</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Akron OH Cash Home Buyer FAQ</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling in Akron OH" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { href: '/markets/akron-oh', label: 'Akron OH Market Page' },
            { href: '/markets/akron-oh/market-report', label: 'Market Report' },
            { href: '/markets/akron-oh/foreclosure', label: 'Foreclosure' },
            { href: '/markets/akron-oh/probate', label: 'Probate' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-brand-light rounded-lg px-4 py-2 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Get Your Akron OH Cash Offer?" sourcePage="/markets/akron-oh/faq" />
      </div>
    </>
  );
}
