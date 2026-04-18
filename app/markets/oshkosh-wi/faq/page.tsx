/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/faq`;

export const metadata: Metadata = {
  title: 'Oshkosh WI Home Selling FAQ 2026',
  description:
    'Answers to Oshkosh WI home selling questions: transfer tax, WI foreclosure law, probate, cash offers, Winnebago County. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Oshkosh WI?',
    answer: 'USA Home Buyers can close in as few as 7 days in Oshkosh and throughout Winnebago County WI. Written cash offer within 24 hours of your inquiry — no obligation. If you\'re in a time-sensitive situation (foreclosure, divorce, estate), we can move on your schedule. Call 888-440-5250.',
  },
  {
    question: 'What is the Wisconsin real estate transfer fee in Oshkosh?',
    answer: 'Wisconsin charges a state Real Estate Transfer Fee of $3.00 per $1,000 of sale price (0.30%) under Wis. Stat. § 77.22. Winnebago County WI adds nothing on top. The City of Oshkosh adds nothing on top. Total: $3.00/$1,000, seller-paid by custom. On $211,000 (Redfin median): $633 total. A Wisconsin Real Estate Transfer Return (RETR form) must accompany every deed at recording with the Winnebago County Register of Deeds, 415 Jackson Street, (920) 232-3390. When you sell to USA Home Buyers, we cover all closing costs.',
  },
  {
    question: 'How does Wisconsin foreclosure work in Winnebago County?',
    answer: 'Wisconsin is a 100% judicial foreclosure state under Wis. Stat. Ch. 846 — no non-judicial/trustee-sale path for residential mortgages. Every Winnebago County foreclosure is filed at Winnebago County Circuit Court, 415 Jackson Street, Oshkosh WI 54901. Timeline: once the judgment of foreclosure is entered, a 6-month statutory redemption period begins for owner-occupied 1-4 family homes where the lender waives deficiency (Wis. Stat. § 846.101). Total first-missed-payment to sheriff\'s sale: 12-15 months. Call 888-440-5250 the moment you receive foreclosure paperwork.',
  },
  {
    question: 'How does Oshkosh probate work for inherited homes?',
    answer: 'Inherited Wisconsin real estate must go through probate at Winnebago County Circuit Court — Register in Probate, 415 Jackson Street Room 242, Oshkosh WI 54901, (920) 236-4808. Wisconsin has two paths: informal probate (Wis. Stat. Ch. 856) for uncontested estates, typically 4-8 months; and formal probate (Wis. Stat. Ch. 857-879) for contested cases or where creditor issues exist, typically 9-18 months. Real property always requires the probate process — the small estate affidavit (under $50,000) only applies to personal property with no real estate. We can have a written offer ready before you even open the probate file.',
  },
  {
    question: 'Do you buy houses as-is in Oshkosh WI?',
    answer: 'Yes. We buy Oshkosh homes in any condition — knob-and-tube wiring in brick bungalows, galvanized plumbing in pre-war homes, foundation moisture issues near Lake Winnebago drainage zones, fire damage, code violations, tenant-occupied properties. Oshkosh\'s pre-war housing stock frequently has issues that disqualify it from FHA and conventional financing. That\'s exactly the kind of property we buy. No repairs, no cleanout required. Call 888-440-5250.',
  },
  {
    question: 'What neighborhoods in Oshkosh do you buy in?',
    answer: 'All of them. Lake Shore and Lakeview (Victorian lakefront homes), Merritt (brick bungalows near UW Oshkosh), Algoma and Fair Acres (mid-century ranches), Center City and Downtown, Sawyer Creek (newer suburban), Southwest Oshkosh and Oakwood (ranches), South Shore, Far North Side, Menominee Park, and Westhaven. ZIPs 54901, 54902, and 54904. Plus all surrounding Winnebago County communities — Neenah, Menasha, Winneconne, Omro, and the township areas.',
  },
  {
    question: 'Can you buy a house in Oshkosh WI during a divorce?',
    answer: 'Yes — and a cash sale is often the cleanest exit from a jointly-owned property during divorce. Wisconsin is a marital property state under Wis. Stat. Ch. 766, with an equal-division presumption under § 767.61. A single cash offer gives both parties a concrete number to negotiate around — no inspector parade, no contingency risk, no deal falling apart after you\'ve both emotionally committed to moving on. Both owners sign at closing; proceeds are divided per the Winnebago County Family Court order or mutual agreement. Call 888-440-5250.',
  },
  {
    question: 'What is the Oshkosh WI housing market like in 2026?',
    answer: 'Realtor.com ranked Oshkosh #13 hottest housing market nationally in March 2026 (hotness score 92.809, active listing DOM 36.0 days). Zillow ZHVI: $250,967 (+5.2% YoY). Redfin median sale: $211,000. Redfin compete score 60/100. Median sold DOM: 61 days (hot homes go pending in 42 days). The gap between active-listing DOM (36.0 days) and sold-home DOM (61 days) reflects a two-speed market: move-in-ready homes move quickly; older, deferred-maintenance homes sit longer and often sell to cash buyers.',
  },
  {
    question: 'Does EAA AirVenture affect Oshkosh real estate values?',
    answer: 'It affects the short-term rental market significantly. Properties within walking or short-drive distance of Wittman Regional Airport command premium AirVenture-week STR rates — some owners rent for $300-$500/night during the 7-day event. This has attracted investor interest in near-airport rental properties and influences how some sellers evaluate their options. For the broader Oshkosh market, EAA\'s 500,000+ annual visitors keep regional visibility high and support consistent demand from businesses and professionals relocating to the area.',
  },
  {
    question: 'How does selling a tenant-occupied Oshkosh home work?',
    answer: 'Wisconsin law (Wis. Stat. § 704.09) requires existing leases to survive a sale — the buyer steps into the landlord\'s shoes. Tenants cannot be evicted solely because the property sold. We buy tenant-occupied Oshkosh properties without requiring eviction first. We step in as the new landlord, handle the tenant relationship post-closing, and close on your schedule. Whether your tenant has a month-to-month or fixed-term lease, we can structure the transaction to work. Call 888-440-5250.',
  },
];

export default function OshkoshWIFAQPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Oshkosh WI Home Selling FAQ 2026 — Winnebago County Answers', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Oshkosh WI Home Selling FAQ — Winnebago County 2026
          </h1>
          <p className="text-lg text-blue-100">
            Answers to the most common questions about selling a house in Oshkosh WI — transfer tax, Wisconsin foreclosure law, probate process, cash offers, and more.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <FAQSection items={FAQ_ITEMS} heading="Oshkosh WI Frequently Asked Questions" />

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Still have questions about your Oshkosh WI property?</h2>
          <p className="text-gray-700 text-sm mb-3">Call us 24/7 at 888-440-5250 or fill out the form below. We'll respond within 24 hours with a written cash offer — no obligation.</p>
          <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-2.5 rounded-xl text-base transition-colors">
            📞 888-440-5250
          </a>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Explore Oshkosh WI Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Oshkosh WI Home' },
              { href: '/markets/oshkosh-wi/market-report', label: 'Market Report' },
              { href: '/markets/oshkosh-wi/neighborhoods', label: 'Neighborhoods' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/oshkosh-wi/probate', label: 'Probate Sale' },
              { href: '/markets/oshkosh-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/oshkosh-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/oshkosh-wi/code-violations', label: 'Code Violations' },
              { href: '/markets/oshkosh-wi/fire-damage', label: 'Fire Damage' },
              { href: '/sell-house-fast-wisconsin', label: 'WI Legal Guide' },
              { href: '/guides/sell-house-fast-oshkosh-wi-2026', label: 'Oshkosh Seller Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Oshkosh WI Home?" sourcePage="/markets/oshkosh-wi/faq" />
      </div>
    </>
  );
}
