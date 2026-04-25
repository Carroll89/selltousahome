/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { FAQSection } from '@/components/FAQSection';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/faq`;

export const metadata: Metadata = {
  title: 'Sell House Fast Rockford IL — FAQ',
  description:
    'Answers to common questions about selling your house fast for cash in Rockford IL. Transfer taxes, foreclosure timelines, probate, and more. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Rockford IL?',
    answer: 'USA Home Buyers closes in as few as 7 days in Rockford and throughout Winnebago County. We send a written cash offer within 24 hours of your inquiry. There are no financing contingencies, no appraisal delays, and no inspector repair lists. You pick the closing date — as fast as 7 days or as far out as your situation requires. Call 888-274-5006 to start.',
  },
  {
    question: 'What is the transfer tax when selling a house in Rockford IL?',
    answer: 'The Rockford transfer tax stack: Illinois state $0.50 per $500 of consideration (35 ILCS 200/31-10) + Winnebago County $0.25 per $500 (55 ILCS 5/5-1031) = $0.75 per $500 combined (0.15% of sale price), seller pays. The City of Rockford imposes NO municipal real estate transfer tax — confirmed absent from ATG\'s tax-ordinance directory and Rockford\'s Municode. On the $170,000 Redfin March 2026 median: $255.00 total. When you sell to USA Home Buyers, we cover all closing costs — transfer taxes, recording fees, title. You pay nothing at closing.',
  },
  {
    question: 'Does Rockford IL have a municipal transfer tax?',
    answer: 'No. Rockford is one of the larger Illinois cities with no municipal real estate transfer tax. The ATG (Attorneys\' Title Guaranty Fund) tax-ordinance directory, which catalogs every Illinois municipality\'s RETT, returns no entry for Rockford. Rockford\'s Municode under Chapter 5 has only a Home Rule Municipal Occupation Tax (a sales/use tax) — no RETT chapter. The only transfer taxes on a Rockford sale are the state ($0.50/$500) and county ($0.25/$500) layers.',
  },
  {
    question: 'How does foreclosure work in Winnebago County IL?',
    answer: 'Illinois is a 100% judicial foreclosure state under 735 ILCS 5/15-1101 et seq. Every Winnebago County foreclosure is filed at the Winnebago County Circuit Court, 17th Judicial Circuit, 400 West State Street, Rockford IL 61101, phone 815-319-4500. Typical Winnebago County timeline from first missed payment to completed sale: 14-20 months. This is longer than Springfield/Sangamon County (12-15 months) due to higher circuit volume, but far shorter than Cook County (24-36 months) — don\'t assume Rockford works like Chicago. You have a 3-month reinstatement right (735 ILCS 5/15-1602) and a 7-month redemption period (735 ILCS 5/15-1603). Selling to USA Home Buyers before the auction preserves your equity.',
  },
  {
    question: 'Is Rockford\'s foreclosure timeline the same as Cook County\'s?',
    answer: 'No — and this misconception affects many Rockford sellers. Cook County (Chicago) foreclosures take 24-36 months due to massive court backlog. Winnebago County is a mid-sized circuit — the 17th Judicial Circuit covers Winnebago and Boone counties — with a typical timeline of 14-20 months. That\'s meaningfully faster. The practical difference: Rockford sellers often have more time to make a decision than they expect, but less time than a Chicago comparison would suggest. If you\'re in pre-foreclosure in Rockford, call 888-274-5006 — the window is real.',
  },
  {
    question: 'How does Illinois probate work for a Rockford inherited property?',
    answer: 'Inherited Illinois real estate must go through formal probate at Winnebago County Circuit Court, Probate Division — 400 West State Street, Rockford IL 61101, 815-319-4500, 17th Judicial Circuit. E-filing mandatory via efile.illinoiscourts.gov. The Illinois small estate affidavit (755 ILCS 5/25-1) — even after the 2025 amendment raising the threshold to $150,000 — covers personal property only. Real estate in any amount always requires formal probate. Under independent administration (755 ILCS 5/28-1), the executor can sell without court approval on each transaction, typically 6-9 months total. We can have a written offer ready before you file.',
  },
  {
    question: 'What is the $150,000 small estate affidavit in Illinois?',
    answer: 'The 2025 amendment to 755 ILCS 5/25-1(a-5)(2)(A) raised Illinois\'s small estate affidavit threshold from $100,000 to $150,000. This lets heirs collect personal property (bank accounts, vehicles, personal effects) without opening a formal probate estate when total personal property is $150,000 or less. However, real property — houses, land, condos — is completely excluded from this procedure regardless of the estate\'s size or the property\'s value. A Rockford home must go through formal probate at Winnebago County Circuit Court. There\'s no shortcut around this in Illinois law.',
  },
  {
    question: 'Do I need a real estate attorney to sell my house in Rockford IL?',
    answer: 'No — Illinois is not an attorney-closing state. Title companies handle the vast majority of residential closings in Rockford. An attorney is helpful for complex situations (multi-heir estates, contested titles, short sales) but is not required for a straightforward sale. When you sell to USA Home Buyers, we close at a licensed Illinois title company. You don\'t need to retain an attorney unless your specific situation involves legal complexity.',
  },
  {
    question: 'What if my Rockford house has code violations or needs significant repairs?',
    answer: 'We buy Rockford properties in any condition, including those with open City of Rockford code violations, condemned properties, and homes with significant structural or system deficiencies. Rockford\'s pre-1970 housing stock is where most violations originate — lead paint (pre-1978 construction), knob-and-tube wiring, foundation issues from Rock River alluvial soil settling, plumbing deficiencies. A code violation doesn\'t prevent a sale, but it requires disclosure under Illinois law. We\'ve seen it all. Call 888-274-5006.',
  },
];

export default function RockfordILFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, faqSchema(FAQ_ITEMS)]} />

      <section className="relative text-white py-14 px-4 bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Selling Your Rockford IL Home — Frequently Asked Questions
          </h1>
          <p className="text-blue-100 text-lg mb-4">
            Honest answers to what Rockford and Winnebago County sellers ask most often — transfer taxes, foreclosure timelines, probate, and the cash-sale process.
          </p>
          <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg transition-colors">
            📞 Call Now — 888-274-5006 (24/7)
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="All Questions — Selling a Rockford IL Home for Cash" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/rockford-il', label: '← Back to Rockford IL' },
              { href: '/markets/rockford-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/rockford-il/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/rockford-il/probate', label: 'Probate Sale' },
              { href: '/markets/rockford-il/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/rockford-il/market-report', label: 'Market Report' },
              { href: '/markets/springfield-il', label: 'Springfield IL' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Rockford IL Home?" sourcePage="/markets/rockford-il/faq" />
      </div>
    </>
  );
}
