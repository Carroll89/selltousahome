/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bloomington-il/faq`;

export const metadata: Metadata = {
  title: 'Bloomington IL Cash Home Buyer FAQ 2026',
  description:
    'Answers to the most common questions from Bloomington IL home sellers. McLean County probate, transfer taxes, foreclosure timelines, ISU-area rentals. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How do I sell my house fast in Bloomington IL without making repairs?',
    answer: "USA Home Buyers purchases Bloomington homes as-is — no repairs, no cleanout, no staging. We evaluate the property based on its current condition and location. Common situations we handle: Founders' Grove Victorians with deferred maintenance, West Bloomington pre-1950s homes with structural or mechanical issues, ISU-area rental properties with tenant wear, and North Bloomington homes facing estate or relocation pressure. We send a written cash offer within 24 hours of your inquiry. According to Zillow (February 2026), typical Bloomington homes go pending in just 4 days in the retail market — our cash process is faster than that. Call (888) 274-5006.",
  },
  {
    question: 'How long does probate take at McLean County Circuit Court in Bloomington?',
    answer: "Illinois probate is handled by the McLean County Circuit Court, Civil Division — 104 W. Front Street, 4th Floor, Room 404, Bloomington IL 61701, phone (309) 888-5350. This is the 11th Judicial Circuit. Under Illinois independent administration (755 ILCS 5/28-1 et seq.), an executor can manage and sell real property without court approval for each transaction. Typical timeline for uncontested independent administration in McLean County: 6-12 weeks from filing to receiving Letters of Office, with the full estate settled in 6-9 months. The mandatory creditor notice period runs 2.5 months (755 ILCS 5/18-3). We can provide a written offer before you file the probate petition and coordinate closing around your Letters of Office timeline.",
  },
  {
    question: "What makes Bloomington's housing market different from Chicago's?",
    answer: "Almost everything. Bloomington is 135 miles south of Chicago and operates as a completely independent housing market. The Bloomington-Normal MSA (CBSA 14010) is anchored by State Farm Insurance world headquarters, Country Financial headquarters, Illinois State University, and Illinois Wesleyan University — not Chicago's finance, tech, or commodity-trading sectors. Per Zillow (February 2026), the Bloomington ZHVI is $228,634, while greater Chicago metro values often run $300,000-$500,000+. Foreclosure timelines are 12-16 months in McLean County vs. 24-36 months in Cook County. Transfer taxes are $0.75/$500 combined (no Bloomington municipal RETT) vs. Chicago's $5.50/$500 combined stack. Don't apply Chicago assumptions to a Bloomington sale.",
  },
  {
    question: 'How does the ISU rental market affect Bloomington home values?',
    answer: "Illinois State University is located in Normal, immediately north of Bloomington. The ISU-adjacent corridors within Bloomington — particularly the Veterans Parkway area and the Indiana Ave corridor — have above-average tenant-occupancy rates. This creates two distinct effects: rental demand support (students and young professionals rent in these areas year-round) and landlord-exit pressure (investors who bought rental properties in the 1990s-2010s reach the tired-landlord stage). Per Redfin (March 2026), the Bloomington median sale price is $300,000 — but ISU-corridor properties typically trade below the city median due to higher tenant wear and lower owner-occupancy buyer demand. Cash buyers are often the practical market for ISU-area landlord exits.",
  },
  {
    question: "What are Bloomington's historic districts and do they affect a cash sale?",
    answer: "Bloomington has five designated historic districts: the Bloomington Downtown Historic District, Founders' Grove Historic District (National Register of Historic Places), North Side Residential Historic District, Alton-Oakland Historic District, and West Washington Street Historic District. Historic district properties require Bloomington Historic Preservation Commission approval for exterior modifications — which can complicate conventional renovation financing when lenders require improvements that the Historic Preservation Commission won't approve in the same form. Cash buyers like USA Home Buyers don't require lender-mandated repairs, making us an attractive buyer for historic-district sellers with deferred maintenance. We buy as-is regardless of historic district status.",
  },
  {
    question: "What is McLean County's property tax rate and how does it affect motivated sellers?",
    answer: "According to Ownwell (April 2026), McLean County's median effective property tax rate is 2.62% of assessed value — significantly above the national median of approximately 1.02%. On a $228,634 ZHVI home, that's approximately $5,990 per year in property taxes. For fixed-income homeowners — particularly State Farm retirees and older residents — a $5,000-$6,000 annual property tax burden on a fully paid-off home creates real financial pressure. This is one driver of the motivated-seller pipeline in North Bloomington and Founders' Grove, where long-tenured homeowners with high-equity, low-mortgage situations face a property tax burden their retirement income can't comfortably absorb. A cash sale eliminates the ongoing tax exposure.",
  },
];

export default function BloomingtonILFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, faqSchema(FAQ_ITEMS)]} />

      <section className="relative text-white py-16 px-4 bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Bloomington IL Cash Home Buyer — Frequently Asked Questions
          </h1>
          <p className="text-blue-100 text-lg">
            Specific answers for Bloomington and McLean County sellers — not generic real estate FAQ copy.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-6 bg-brand-light rounded-xl p-5">
          <p className="text-gray-700 text-sm">
            <strong>Quick answer:</strong> USA Home Buyers purchases houses in Bloomington IL and throughout McLean County — any condition, any situation, any neighborhood. Written cash offer in 24 hours. Close in 7-14 days. We cover all closing costs. Call <a href="tel:+18882745006" className="text-brand-primary font-medium">(888) 274-5006</a> or use the form below.
          </p>
        </section>


      <VideoEmbed
        src="/videos/bloomington-il/faq.mp4"
        title="Bloomington IL Home Selling FAQ"
        poster="/videos/bloomington-il/faq-poster.jpg"
        subtitle="Foreclosure timelines, probate, code violations, closing speed — answered"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Questions about selling in Bloomington IL? Illinois judicial foreclosure runs 12-16 months in McLean County. Inherited property needs probate. We buy with code violations, tenant-occupied, any condition. Close in 7 days. Call 888-274-5006.
        </div>
      </details>
        <FAQSection items={FAQ_ITEMS} heading="Your Bloomington IL Selling Questions, Answered" />

        <section className="my-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">More Resources for Bloomington Sellers</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Situation-Specific Guides</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/markets/bloomington-il/inherited-property" className="text-brand-primary hover:underline">Inherited Property in Bloomington →</Link></li>
                <li><Link href="/markets/bloomington-il/foreclosure" className="text-brand-primary hover:underline">Facing Foreclosure in McLean County →</Link></li>
                <li><Link href="/markets/bloomington-il/probate" className="text-brand-primary hover:underline">McLean County Probate Sale Guide →</Link></li>
                <li><Link href="/markets/bloomington-il/divorce-sale" className="text-brand-primary hover:underline">Divorce Sale in Bloomington →</Link></li>
                <li><Link href="/markets/bloomington-il/tenant-occupied" className="text-brand-primary hover:underline">Tenant-Occupied Property →</Link></li>
                <li><Link href="/markets/bloomington-il/code-violations" className="text-brand-primary hover:underline">Code Violations in Bloomington →</Link></li>
                <li><Link href="/markets/bloomington-il/fire-damage" className="text-brand-primary hover:underline">Fire-Damaged Property →</Link></li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Market Data</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/markets/bloomington-il/market-report" className="text-brand-primary hover:underline">Full Bloomington Market Report →</Link></li>
                <li><Link href="/markets/bloomington-il/neighborhoods" className="text-brand-primary hover:underline">Neighborhood Price Guide →</Link></li>
                <li><Link href="/guides/sell-house-fast-bloomington-il-2026" className="text-brand-primary hover:underline">Complete 2026 Seller&apos;s Guide →</Link></li>
                <li><Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline">Illinois Legal Context →</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Contact McLean County Circuit Court Directly</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-1">Circuit Clerk (General)</p>
              <p>104 W. Front Street, Room 303</p>
              <p>Bloomington, IL 61701</p>
              <p>Phone: (309) 888-5301</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Civil / Probate Division</p>
              <p>104 W. Front Street, 4th Floor, Room 404</p>
              <p>Bloomington, IL 61701</p>
              <p>Phone (Probate): (309) 888-5350</p>
            </div>
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Get Your Bloomington IL Cash Offer" sourcePage="/markets/bloomington-il/faq" />
      </div>
    </>
  );
}
