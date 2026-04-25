/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { racineWILocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House in Divorce Racine WI | Wisconsin Marital Property',
  description:
    'Selling a house in divorce in Racine WI. Wisconsin is a marital property state (Ch. 767). Racine County Family Court timeline, fast cash close, clean split. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Racine WI house during a divorce?',
    answer: 'Yes. Both spouses can agree to sell at any point during the Racine County Family Court proceedings. If one spouse refuses, Wisconsin Stat. § 767.61 (division of property) gives the Racine County Circuit Court (730 Wisconsin Avenue, Racine WI 53403) authority to order the sale as part of the final property division, or to appoint a receiver to list the property. A voluntary cash sale is almost always faster than waiting for a court-ordered sale after judgment.',
  },
  {
    question: 'Is Wisconsin a community property state?',
    answer: 'Yes — Wisconsin is one of only nine community property (called "marital property") states under the Wisconsin Marital Property Act (Wis. Stat. Ch. 766), effective since January 1, 1986. Any Racine property acquired during the marriage is presumptively marital property owned 50/50 by both spouses, regardless of whose name is on the deed. At divorce, Wis. Stat. § 767.61(3) presumes an equal division of marital property, although the court can deviate based on factors like contribution, duration of marriage, and economic circumstances.',
  },
  {
    question: 'How do proceeds split when selling during divorce in Racine County?',
    answer: 'At closing, the title company pays off any mortgage balance and any liens, then distributes the net proceeds according to your Marital Settlement Agreement (MSA) or the Racine County Circuit Court order. Because Wisconsin is a marital property state, the default is a 50/50 split of the net equity unless the MSA or court order specifies otherwise. The title company handles the split at closing — the parties do not have to trust each other. We can close in 7-14 days at any title company in Racine or Mount Pleasant.',
  },
  {
    question: 'What is the Racine County divorce timeline?',
    answer: 'Wisconsin requires a 120-day waiting period from service of the summons before the court can finalize a divorce (Wis. Stat. § 767.335). Racine County Circuit Court Family Division contested divorces typically take 9-14 months depending on whether custody, maintenance, and property division are contested. Uncontested divorces with a stipulated MSA can close in about 4-6 months. Selling the house during the pendency of the case — either by agreement or on a temporary order — is often the cleanest path because it converts the biggest disputed asset into cash that can be escrowed or split immediately.',
  },
  {
    question: 'What if my spouse won\'t agree to sell?',
    answer: 'Either spouse can file a motion in Racine County Circuit Court requesting a temporary order under Wis. Stat. § 767.225 to authorize the sale, or ask the court to order the sale as part of the property division at final judgment. If one spouse remains in the home and refuses to cooperate, the court can also impose use-and-occupancy credits or compel the sale through a receiver. Speak with a Wisconsin family law attorney about filing the appropriate motion — we can have a written cash offer ready to present to the court within 24 hours.',
  },
  {
    question: 'Do we both need to be present at closing?',
    answer: 'No. With a power of attorney executed in advance or with prior-signed documents held in escrow, one spouse can complete closing on behalf of both. In Racine County, this is common when one spouse has already moved out of state. Your closing attorney at the title company (most Racine closings happen at Knight Barry Title on Wisconsin Avenue or First American Title) can coordinate the mechanics.',
  },
  {
    question: 'What about property tax and transfer fee at closing?',
    answer: 'Wisconsin charges a state realty transfer fee of $3.00 per $1,000 of consideration (0.30%) under Wis. Stat. § 77.22, paid by the seller. Racine County does not add a surcharge. On a $205,000 Racine home, that\'s $615. A Wisconsin Real Estate Transfer Return (RETR) must be filed electronically with the Wisconsin Department of Revenue at the time of recording — both spouses typically sign unless one has power of attorney. When you sell to USA Home Buyers we cover all closing costs.',
  },
];

export default function RacineDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        racineWILocalBusinessSchema,
        articleSchema('Sell Your Racine WI House in Divorce — Wisconsin Marital Property, Fast Clean Close', pageUrl, '2026-04-17'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/racine-mount-pleasant-wi-hero-640.jpg 640w, /images/optimized/racine-mount-pleasant-wi-hero-828.jpg 828w, /images/optimized/racine-mount-pleasant-wi-hero-1080.jpg 1080w, /images/optimized/racine-mount-pleasant-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/racine-mount-pleasant-wi-hero-1200.jpg"
            alt="Racine WI homes — Sell Your House in Divorce — Wisconsin Marital Property"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/racine-mount-pleasant-wi" className="hover:text-white">Racine WI</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Racine WI House in Divorce — Wisconsin Marital Property, One Closing, Clean Split
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">Wisconsin is a marital property state (Wis. Stat. Ch. 766). Racine County Circuit Court Family Division divorces presume 50/50 division of marital property under Wis. Stat. § 767.61. USA Home Buyers gives one written cash offer, one closing date, and proceeds split at the title company per your Marital Settlement Agreement or court order. Written offer in 24 hours. Close in 7-14 days. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              One offer. One closing. One split. Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no arguments.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/racine-mount-pleasant-wi/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Marital Property — What Divorcing Racine Homeowners Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin is one of only nine community property states, and the only one in the Great Lakes region. Under the Wisconsin Marital Property Act (Wis. Stat. Ch. 766), effective January 1, 1986, any property acquired during the marriage is presumed marital property — owned 50/50 by both spouses, regardless of whose name appears on the deed. That includes the Racine house. Even if one spouse bought the home before the marriage, any mortgage paydown, improvements, or appreciation during the marriage can create a marital interest in the property.
          </p>
          <p className="text-gray-700 mb-4">
            At divorce, Wis. Stat. § 767.61(3) directs the Racine County Circuit Court to start from a presumption of equal division of marital property. The court can deviate based on factors listed in § 767.61(3)(a)-(m): length of the marriage, contribution of each party, age and health, earning capacity, tax consequences, and any written agreement. For most Racine homeowners, the practical result is a 50/50 split of the net equity — which is why selling during the pendency of the divorce is usually cleaner than fighting over who "gets" the house.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale converts an illiquid, emotionally charged asset into a bank wire. The title company distributes the net proceeds at closing according to the Marital Settlement Agreement (MSA) or a Racine County Circuit Court order — neither spouse has to trust the other to follow through. That is usually far easier than one spouse refinancing to buy the other out (requires qualifying for the full mortgage on one income and producing the buyout cash), or listing traditionally (30-60 additional days of coordinating showings, repairs, and negotiations while the divorce is pending).
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Racine County Divorce — The Actual Court Timeline</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Typical Racine County Timeline</th>
                  <th className="text-left p-3">House Implications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="p-3 font-medium">Petition filed with Racine County Clerk of Courts</td>
                  <td className="p-3">Day 0</td>
                  <td className="p-3">Automatic financial restraining order (Wis. Stat. § 767.117) takes effect — neither spouse can sell or encumber the home without consent or court order</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium">Summons served on other spouse</td>
                  <td className="p-3">Days 1-30</td>
                  <td className="p-3">120-day waiting period starts at service under Wis. Stat. § 767.335</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-medium">Temporary Order hearing (if needed)</td>
                  <td className="p-3">30-60 days after filing</td>
                  <td className="p-3">Court can authorize the sale during pendency under Wis. Stat. § 767.225; both parties sign the listing/contract or one by POA</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium">Financial disclosure exchange</td>
                  <td className="p-3">60-120 days</td>
                  <td className="p-3">House value is disclosed on each party\'s Financial Disclosure Statement (required by Wis. Stat. § 767.127)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-medium">Uncontested divorce — hearing and judgment</td>
                  <td className="p-3">4-6 months</td>
                  <td className="p-3">House sale finalized before or at judgment per the MSA</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium">Contested divorce — trial and judgment</td>
                  <td className="p-3">9-14 months typical</td>
                  <td className="p-3">Court orders division or sale at trial; carrying costs during pendency are often shared</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">
            For Racine County-specific family court filings, the Clerk of Courts office is at 730 Wisconsin Avenue, Racine WI 53403, (262) 636-3333. Filing fees and forms are available at the Wisconsin Court System website (wicourts.gov). Source: Wisconsin Statutes Ch. 767 (docs.legis.wisconsin.gov).
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Racine-Mount Pleasant Market Data — Divorce Sale Context</h2>
          <p className="text-gray-700 mb-4">
            Per the Zillow Home Value Index (February 2026), the typical home value in Racine is $171,496, up 4.4% year over year. Per Redfin (March 2026), the Racine median sale price is $205,000, with homes receiving 8 offers on average and selling in around 35 days. Per Realtor.com (April 2026), the Racine-Mount Pleasant metro hotness index median is $347,720 — Mount Pleasant\'s newer stock near the I-94 / Microsoft corridor pulls the metro median up. The Wisconsin realty transfer fee under Wis. Stat. § 77.22 is $3.00 per $1,000 ($615 on a $205,000 sale); Racine County does not add a surcharge.
          </p>
          <p className="text-gray-700 mb-4">
            In a divorce context, the 35-day median days on market is best-case — most divorcing sellers add weeks of coordination with the other spouse, the attorneys, and Racine County family court calendars. A cash sale compresses that to 7-14 days and eliminates the risk of a listing falling through mid-divorce (roughly 15-20% of traditional listings fall through).
          </p>
        </section>

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How the USA Home Buyers Divorce Sale Works in Racine</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Same-day call.</strong> One spouse, or both, or an attorney. We take the property details, discuss the Racine County case number if a divorce is pending, and confirm the Marital Settlement Agreement status.</li>
            <li><strong>Written cash offer within 24 hours.</strong> A real dollar figure in writing — not a range, not a "we\'ll get back to you." The offer is valid for 14 days so attorneys have time to review.</li>
            <li><strong>Present to court if needed.</strong> If the divorce is contested and a judge needs to approve the sale under Wis. Stat. § 767.225, the offer can be attached to the motion. We\'ve closed deals on temporary order authorization multiple times.</li>
            <li><strong>Sign at a Racine title company.</strong> Knight Barry Title (800 Wisconsin Ave), First American Title, or any other Racine or Mount Pleasant title company of your choice. One or both spouses sign — power of attorney works if needed.</li>
            <li><strong>Proceeds split at closing.</strong> The title company pays off the mortgage and any liens, then wires the net proceeds per the MSA or court order. No one has to trust the other spouse.</li>
          </ol>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling Your Racine WI House in Divorce" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Racine WI</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/racine-mount-pleasant-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/racine-mount-pleasant-wi/foreclosure', label: 'Foreclosure' },
              { href: '/markets/racine-mount-pleasant-wi/probate', label: 'Probate' },
              { href: '/markets/racine-mount-pleasant-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/racine-mount-pleasant-wi/code-violations', label: 'Code Violations' },
              { href: '/markets/racine-mount-pleasant-wi', label: '← Back to Racine' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Racine WI Property?" sourcePage="/markets/racine-mount-pleasant-wi/divorce-sale" />
      </div>
    </>
  );
}
