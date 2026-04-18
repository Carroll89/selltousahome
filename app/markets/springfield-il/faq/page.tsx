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

const pageUrl = `${SITE_URL}/markets/springfield-il/faq`;

export const metadata: Metadata = {
  title: 'Springfield IL Home Selling FAQ',
  description:
    'Frequently asked questions about selling your house fast in Springfield IL — transfer taxes, foreclosure, probate, as-is sales, and more. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'What is the transfer tax when selling a house in Springfield IL?',
    answer: 'Illinois state transfer tax is $0.50 per $500 of consideration (35 ILCS 200/31-10). Sangamon County adds $0.25 per $500 (35 ILCS 200/31-55). Combined: $0.75 per $500 ($1.50 per $1,000 = 0.15%), paid by the seller. The City of Springfield does NOT impose a municipal real estate transfer tax — confirmed from the City of Springfield\'s official tax rate document. On the Redfin March 2026 median of $187,000, total transfer tax = $280.50. When you sell to USA Home Buyers, we cover all closing costs including transfer taxes.',
  },
  {
    question: 'Does Illinois require an attorney to sell a house?',
    answer: 'No. Illinois is not an attorney state. Title companies handle residential closings in Springfield without attorney involvement required by law. This differs from New York, which requires licensed attorneys to prepare all real estate instruments (NY Judiciary Law §484). In Illinois, the title company manages escrow, prepares the closing disclosure, coordinates lien payoffs, collects transfer taxes, records the deed, and distributes proceeds. Buyers and sellers may hire attorneys for contract review, but it\'s optional.',
  },
  {
    question: 'How does Illinois foreclosure work in Sangamon County?',
    answer: 'Illinois is a 100% judicial foreclosure state under the Illinois Mortgage Foreclosure Law (735 ILCS 5/15-1101 et seq.). Every Sangamon County foreclosure is filed at the Sangamon County Circuit Court, 200 South 9th Street, Springfield IL 62701. Borrowers have a 3-month reinstatement period after judgment (§15-1602) and a 7-month redemption period from service of summons (§15-1603). Typical Sangamon County timeline: 12-15 months from first missed payment to completed sale. Call 888-440-5250 immediately if you\'ve received foreclosure paperwork.',
  },
  {
    question: 'What is Illinois\'s small estate affidavit threshold?',
    answer: 'The Illinois small estate affidavit under 755 ILCS 5/25-1 allows heirs to collect personal property without formal probate when total personal property does not exceed $150,000 (raised from $100,000 by 2025 amendment to 755 ILCS 5/25-1(a-5)(2)(A)). Critical: the small estate affidavit does NOT cover real property — houses, land, and condos require formal probate through Sangamon County Circuit Court regardless of estate size or value.',
  },
  {
    question: 'How long does probate take in Sangamon County IL?',
    answer: 'With independent administration (755 ILCS 5/28-1), uncontested estates typically close in 6-9 months. Supervised administration takes 12-18 months uncontested. The executor can sell estate real property as soon as Letters of Office are issued — which can happen at the initial court hearing. We can have a written offer ready before you file for probate, so you can close quickly once authority is granted. Sangamon County Circuit Court Probate Division: 200 S 9th Street, 7th Floor, (217) 753-6674.',
  },
  {
    question: 'What is the cash offer range for Springfield IL homes?',
    answer: 'Cash offers for Springfield homes typically run 65-75% of fair market value depending on condition, location, and any liens. On the Zillow ZHVI of $163,198, that\'s roughly $106,000-$122,400. On the Redfin median of $187,000, roughly $121,550-$140,250. Distressed properties (major repairs needed, code violations, fire damage) price lower; well-maintained properties in strong neighborhoods price toward the top of the range. We cover all closing costs — the offer is the net you receive.',
  },
  {
    question: 'Does the City of Springfield have a local landlord-tenant ordinance?',
    answer: 'No. Springfield does not have a Residential Landlord and Tenant Ordinance (RLTO) like Chicago does. Chicago\'s RLTO is a Chicago-only ordinance — it has no application outside the City of Chicago. Springfield landlords and tenants operate under Illinois statewide landlord-tenant law, including the Forcible Entry and Detainer Act (735 ILCS 5/9-101 et seq.) for eviction proceedings. Sangamon County eviction cases are filed at Sangamon County Circuit Court.',
  },
  {
    question: 'How do I sell my house fast in Springfield without making repairs?',
    answer: 'Contact USA Home Buyers. We buy Springfield homes as-is — no repairs, no staging, no inspections that result in repair demands. Fill out our form or call 888-440-5250. We ask 5-10 questions about the property, then send a written cash offer within 24 hours. If it works for you, pick a closing date. We close at a Springfield title company in 7-14 days. Leave whatever you don\'t want — we handle the cleanout after closing.',
  },
];

export default function SpringfieldFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, faqSchema(FAQ_ITEMS)]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm font-medium mb-2">
          <Link href="/markets/springfield-il" className="hover:underline">Springfield IL</Link> › FAQ
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Springfield IL Home Selling FAQ — Cash Buyers, Foreclosure, Probate & More
        </h1>

        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">Questions about selling your Springfield IL home?</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            We've answered the most common questions Springfield homeowners ask about cash sales, Illinois transfer tax, foreclosure, probate, and the as-is sale process. Can't find your answer? Call <strong>888-440-5250</strong> — we respond within business hours.
          </p>
        </div>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Springfield IL" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-4">
            The fastest way to get answers specific to your property and situation is to call us directly. One of our managers will walk through your specific circumstances, explain the process, and give you a real cash offer within 24 hours. No pressure, no obligation.
          </p>
          <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-xl text-lg transition-colors">
            📞 Call 888-440-5250
          </a>
        </section>

        <CashOfferForm variant="footer" headline="Get Your Springfield IL Cash Offer" sourcePage="/markets/springfield-il/faq" />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/markets/springfield-il" className="text-brand-primary hover:underline font-medium">← Back to Springfield IL</Link>
          <Link href="/markets/springfield-il/market-report" className="text-brand-primary hover:underline font-medium">Market Report →</Link>
          <Link href="/sell-house-fast-illinois" className="text-brand-primary hover:underline font-medium">Illinois Legal Guide →</Link>
        </div>
      </div>
    </>
  );
}
