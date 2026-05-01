/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { greenBayLocalBusinessSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/faq`;

export const metadata: Metadata = {
  title: 'Green Bay WI Home Seller FAQ — Sell House Fast for Cash',
  description: "Answers to Green Bay WI homeowners' most common questions about selling a house for cash. Wisconsin transfer fee, Brown County probate, foreclosure, closing process.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  { question: 'How fast can I sell my house for cash in Green Bay WI?', answer: "USA Home Buyers closes in as few as 7 days in Green Bay. Written cash offer within 24 hours. If you need more time, we work with any closing date you choose." },
  { question: 'How much will you pay for my Green Bay WI home?', answer: "Cash offers typically range from 65–78% of fair market value. According to Redfin (March 2026), Green Bay's median sale price is $260,000 — about 42% below the national average. We provide a written offer based on comparable sales and property condition. We cover all closing costs." },
  { question: "What is Wisconsin's real estate transfer fee?", answer: "Wisconsin charges $3.00 per $1,000 of sale price. Under Wisconsin Statute §77.256, no county or municipality may add a local surcharge. On a $260,000 home, that's $780 total. When you sell to USA Home Buyers, we cover this fee. Source: Wisconsin Department of Revenue." },
  { question: 'Do I need an attorney to close in Wisconsin?', answer: "No. Wisconsin is not an attorney-closing state. Title companies and licensed closing agents routinely handle closings without attorney involvement. This reduces cost and complexity for both parties." },
  { question: 'What is the Brown County Register of Deeds?', answer: "The Brown County Register of Deeds at 305 E. Walnut Street, Room 260, Green Bay WI 54301 handles deed recording for all property transfers in Brown County. The Wisconsin recording fee is $30 flat per document (Wis. Stat. §59.43). We account for all recording fees in our offer." },
  { question: 'How does Wisconsin foreclosure work in Brown County?', answer: "Wisconsin uses judicial foreclosure — the lender files in Brown County Circuit Court. After judgment, Wisconsin law provides a redemption period (typically 6–12 months), then a sheriff's sale. Total timeline: about 12 months from filing. Consult a Wisconsin-licensed attorney for your specific situation. Source: Wisconsin Statutes Ch. 846." },
  { question: 'What areas near Green Bay do you buy in?', answer: "All of Brown County including the City of Green Bay, Howard, Bellevue, Suamico, and surrounding communities. Note: De Pere, Allouez, and Ashwaubenon are separate municipalities — we buy there too, but each has its own legal jurisdiction. Call 888-274-5006 to confirm." },
  { question: 'Do I need to make repairs before selling?', answer: "No. We buy in any condition. Green Bay's older housing stock — Craftsman bungalows, post-WWII ranches, manufacturing-era homes — often has aging systems, deferred maintenance, or deferred updates. We buy as-is. You do nothing." },
  { question: 'What is the difference between Green Bay and De Pere, Allouez, or Ashwaubenon?', answer: "De Pere is a separate city approximately 5 miles south of Green Bay. Allouez and Ashwaubenon are separate villages. Each has its own municipal government, zoning, and legal jurisdiction. Brown County is the county for all of these municipalities, so deed recording goes through the same Brown County Register of Deeds — but city-specific permits, inspections, and ordinances are handled by each municipality independently." },
];

export default function GreenBayFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, faqSchema(FAQ_ITEMS)]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Green Bay WI Home Seller FAQ</h1>
          <p className="text-blue-100">Common questions from Green Bay homeowners about selling a house for cash in Brown County, Wisconsin.</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Selling Your Green Bay WI Home" />
        <div className="my-8">
          <Link href="/markets/green-bay-wi" className="inline-block text-brand-primary hover:underline text-sm">← Back to Green Bay WI Market Page</Link>
        </div>
        <CashOfferForm variant="footer" headline="Ready to Get Your Green Bay WI Cash Offer?" sourcePage="/markets/green-bay-wi/faq" />
      </div>
    </>
  );
}
