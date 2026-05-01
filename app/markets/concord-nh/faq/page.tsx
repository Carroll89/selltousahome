/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { concordLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/faq`;

export const metadata: Metadata = {
  title: 'Concord NH Cash Home Buyer FAQ — Common Questions Answered',
  description:
    'Answers to common questions about selling your Concord NH house for cash. NH transfer tax, attorney requirement, foreclosure, probate, and how the process works in Merrimack County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Concord NH?',
    answer:
      "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours of first contact. You pick the closing date. Call 888-274-5006 to start.",
  },
  {
    question: 'What is the NH real estate transfer tax and how does it work?',
    answer:
      "New Hampshire has a real estate transfer tax of $1.50 per $100 of consideration total — split equally between buyer and seller at $0.75 per $100 each. It is collected by the NH Department of Revenue Administration (RSA 78-B). On a $270,000 Concord home, the seller's share is $2,025. We cover all closing costs when you sell to us. Source: NH Dept. of Revenue Administration, revenue.nh.gov.",
  },
  {
    question: 'Does New Hampshire require an attorney to close a real estate sale?',
    answer:
      "Yes. New Hampshire is an attorney state — a licensed NH attorney must certify that title is marketable before a lender will issue a mortgage, and title insurance companies require attorney involvement even in cash transactions. Attorney fees on traditional NH sales typically run $600–$1,200. We cover all attorney and closing costs when we purchase your home.",
  },
  {
    question: 'How does foreclosure work in New Hampshire?',
    answer:
      "New Hampshire is a non-judicial foreclosure state. Under RSA 479:25, lenders foreclose via power of sale without court involvement. Requirements: 25 days' published notice plus 60 days' written notice to the borrower. Total timeline: typically 60–90 days from default to sale. No post-sale redemption period. A cash sale before the foreclosure date stops the process.",
  },
  {
    question: 'Where is Merrimack County Probate Division in Concord NH?',
    answer:
      "Merrimack County Circuit Court — Probate Division, 163 North Main Street, Concord NH 03301, phone (603) 271-6400. The court handles will probate, estate administration, and related matters in Merrimack County.",
  },
  {
    question: 'What areas near Concord do you buy in?',
    answer:
      "All of Merrimack County: Concord, Bow, Pembroke, Hooksett, Canterbury, Dunbarton, Hopkinton, Loudon, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area.",
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer:
      "No. Concord's older colonial, cape cod, and Victorian-era housing stock regularly carries deferred maintenance. We buy in any condition — no repairs, no cleaning, no staging required.",
  },
  {
    question: 'What happens after I call or submit the form?',
    answer:
      "We call within business hours, ask about the property and your situation, and send a written cash offer within 24 hours. No obligation. If it works, you pick the closing date. That's it.",
  },
];

export default function ConcordFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[concordLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Concord NH Cash Home Buyer FAQ</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling in Concord NH" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { href: '/markets/concord-nh', label: 'Concord NH Market Page' },
            { href: '/markets/concord-nh/market-report', label: 'Market Report' },
            { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' },
            { href: '/markets/concord-nh/probate', label: 'Probate' },
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
        <CashOfferForm variant="footer" headline="Ready to Get Your Concord NH Cash Offer?" sourcePage="/markets/concord-nh/faq" />
      </div>
    </>
  );
}
