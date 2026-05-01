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
  description: 'Answers to common questions about selling your Concord NH house for cash. Transfer tax, foreclosure, probate, and how the process works in Merrimack County.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Concord NH?', answer: "USA Home Buyers closes in as few as 7 days. Written cash offer within 24 hours of first contact. You pick the closing date. Call 888-274-5006 to start." },
  { question: 'What is New Hampshire\'s real estate transfer tax and how does it work in Concord?', answer: "NH charges a Real Estate Transfer Tax (RETT) of $0.75 per $100 from the buyer and $0.75 per $100 from the seller — total 1.5% of the sale price. Buyer and seller each purchase stamps from the Merrimack County Registry of Deeds (163 North Main St., Suite 103, Concord NH 03301, phone 603-228-0101, Mon–Fri 8:30–3:30) at closing. On a $419,500 Concord home, the total tax is approximately $6,293 — $3,146 per side. We cover the seller's share and all closing costs when you sell to us. Source: NH DRA RETT FAQ; Merrimack County Registry." },
  { question: 'How does foreclosure work in New Hampshire?', answer: "NH is a non-judicial foreclosure state — most mortgages have a power-of-sale clause allowing the lender to foreclose without court action. The lender must send 45-day advance notice; advertise the sale once a week for 3 weeks. 603 Legal Aid warns homeowners can lose a home in less than 120 days. After the sale, the buyer has 60 days to record the deed at the Merrimack County Registry. Consult a NH-licensed attorney for your situation. Source: 603 Legal Aid; NH RSA 479:25." },
  { question: 'Does NH require an attorney to close a real estate transaction?', answer: "NH cash transactions don't have a statutory attorney requirement, though attorney-owned title firms (such as Capital Title & Escrow in Concord) commonly perform closings and deed preparation for both cash and financed transactions. We work with NH title/closing professionals on all our purchases." },
  { question: 'Where is the NH Circuit Court Probate Division for Concord?', answer: "NH Circuit Court, 6th Circuit – Probate Division – Concord is at 2 Charles Doe Drive, Suite 1, Concord NH 03301, Circuit Clerk Tracy L. Meyer, phone 1-855-212-1234, hours Monday–Friday 8:00 a.m.–4:00 p.m. You can accept a purchase offer during probate; deed transfer requires estate authorization." },
  { question: 'What areas near Concord do you buy in?', answer: "All of Merrimack County: Concord, Bow, Pembroke, Boscawen, Canterbury, Loudon, Hopkinton, Dunbarton, Chichester, Allenstown, Epsom, Hooksett, Henniker, and surrounding communities. Call 888-274-5006 if you're not sure we cover your area." },
  { question: 'Do I need to make repairs before selling?', answer: "No. We buy Concord homes in any condition — 33% of housing units were built in 1939 or earlier, 66% before 1980 (2024 ACS). New England Colonial homes, older Cape Cods, and multifamily properties often have aging systems and deferred maintenance. No repairs, no cleaning, no staging required." },
  { question: 'What happens after I call or submit the form?', answer: "We call within business hours, ask about the property and your situation, and send a written cash offer within 24 hours. No obligation. If it works, you pick the closing date. That's it." },
];

export default function ConcordFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[concordLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Concord NH Cash Home Buyer FAQ</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling in Concord NH" />
        <div className="mt-8 flex flex-wrap gap-3">
          {[{ href: '/markets/concord-nh', label: 'Concord NH Market Page' }, { href: '/markets/concord-nh/market-report', label: 'Market Report' }, { href: '/markets/concord-nh/foreclosure', label: 'Foreclosure' }, { href: '/markets/concord-nh/probate', label: 'Probate' }].map(link => (
            <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-2 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">{link.label}</Link>
          ))}
        </div>
        <CashOfferForm variant="footer" headline="Ready to Get Your Concord NH Cash Offer?" sourcePage="/markets/concord-nh/faq" />
      </div>
    </>
  );
}
