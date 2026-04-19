/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bloomington-il/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House Fast Bloomington IL Divorce',
  description:
    'Divorce home sale in Bloomington IL? Illinois equitable distribution (750 ILCS 5), McLean County Family Division. One cash offer, one closing. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Does Illinois require equal 50/50 split of a marital home in divorce?',
    answer: "No. Illinois is an equitable distribution state, not a community property state. Under 750 ILCS 5/503 (Illinois Marriage and Dissolution of Marriage Act), the court divides marital property 'in just proportions' considering factors including duration of the marriage, each spouse's economic circumstances, contributions to marital property, and the value of non-marital property assigned to each spouse. A 50/50 split is common but not mandatory. The court has broad discretion. If you and your spouse can agree on the division, you avoid judicial determination and control the outcome. A cash sale with a specific dollar amount often facilitates that agreement.",
  },
  {
    question: 'What happens to the marital home in a McLean County divorce?',
    answer: "McLean County Family Division of the Circuit Court (11th Judicial Circuit, 104 W. Front Street, Bloomington IL 61701) handles dissolution of marriage proceedings. The marital home is typically marital property subject to equitable distribution under 750 ILCS 5/503. Options: (1) One spouse buys out the other's interest and refinances the mortgage; (2) The home is sold and proceeds divided; (3) The court orders a deferred sale (less common). For couples who need to resolve the home without prolonged litigation, a cash sale to USA Home Buyers often provides the most straightforward path — one offer, one closing, proceeds distributed per the marital settlement agreement.",
  },
  {
    question: 'Can we sell the house before the divorce is finalized in Illinois?',
    answer: "Yes, if both spouses agree. You can list and sell the property and hold proceeds in escrow pending entry of the final dissolution judgment. Both spouses must sign the deed at closing — neither can convey the property without the other's signature as long as both hold an interest. A marital settlement agreement (MSA) that specifies how the sale proceeds will be divided allows the sale to proceed and closes the property question before the final decree. We can execute a purchase agreement with both spouses signing now; closing can be scheduled around your MSA timeline.",
  },
  {
    question: 'What if one spouse won\'t agree to sell the Bloomington house?',
    answer: "If your spouse refuses to agree to a sale, the court can compel a sale as part of equitable distribution. Under 750 ILCS 5/503(d)(5), the court may order the sale of marital property and divide proceeds. A court-ordered sale may be required if the parties cannot agree on the disposition of the home. However, court-ordered sales typically take longer and give you less control over the outcome than a negotiated sale. A specific cash offer from USA Home Buyers often resolves the impasse by replacing an abstract negotiation with a concrete dollar amount. Call (888) 440-5250.",
  },
  {
    question: 'How does the Bloomington home value affect division in our divorce?',
    answer: "Bloomington home values have appreciated significantly — per Zillow (February 2026), the ZHVI is $228,634, up 7.5% year over year. Per Redfin (March 2026), the city median sale price reached $300,000. In an equitable distribution proceeding, the court will consider the fair market value of the home in allocating marital assets. A formal appraisal is often required. For couples who want to move efficiently, a cash sale at a specific dollar amount — agreed upon by both parties — eliminates the appraisal dispute, the contingency period, and the uncertainty of the retail listing process.",
  },
  {
    question: 'Do both spouses need to be present at closing for a divorce home sale?',
    answer: "Both spouses who hold title must sign the deed and closing documents. This can be done at the same closing, in separate signings at the same title company, or via mail/notary from different locations if one spouse is out of state. Illinois law does not require attorneys at closing (Illinois is not an attorney state), but divorce attorneys for both parties typically review the marital settlement agreement before the sale is authorized. McLean County title companies handle coordination of multi-party signings routinely.",
  },
];

export default function BloomingtonDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema("Divorce Home Sale in Bloomington IL — McLean County Equitable Distribution Guide", pageUrl, '2026-04-19'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <picture>
          <source media="(min-width: 1200px)" srcSet="/images/optimized/bloomington-il-hero-1200.jpg" />
          <source media="(min-width: 1080px)" srcSet="/images/optimized/bloomington-il-hero-1080.jpg" />
          <source media="(min-width: 828px)" srcSet="/images/optimized/bloomington-il-hero-828.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bloomington-il-hero-640.jpg"
            alt="Bloomington IL home — Divorce Sale"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
          </div>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your Bloomington IL Home in a Divorce — One Offer, One Closing
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Illinois is an equitable distribution state (NOT community property) under 750 ILCS 5/503. McLean County Family Division handles dissolution proceedings at 104 W. Front Street, Bloomington. Per Redfin (March 2026), Bloomington median sale price is $300,000 — high-equity dual-income households are common in the insurance-professional community. USA Home Buyers provides one cash offer both spouses can evaluate. Written offer in 24 hours. Close in 7-14 days. Call (888) 440-5250.
              </p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 (888) 440-5250 — 24/7
            </a>
          </div>
          <CashOfferForm
            variant="hero"
            headline="Get Your Divorce Sale Cash Offer"
            subheadline="Written offer in 24 hours. One transaction both spouses can agree on."
            sourcePage="/markets/bloomington-il/divorce-sale"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Divorce Home Sales in Bloomington — The Insurance-Professional Context</h2>
          <p className="text-gray-700 mb-4">
            Bloomington's professional employment base creates a distinctive divorce home-sale profile. Dual-income households where both partners work at State Farm, Country Financial, ISU, or Advocate BroMenn often carry high equity in Bloomington homes purchased at earlier price points. Per Zillow (February 2026), the Bloomington ZHVI stands at $228,634. Per Redfin (March 2026), the city median sale price reached $300,000. A couple who purchased a North Bloomington home in 2010 at $180,000 may be dividing $120,000+ in equity at today's values.
          </p>
          <p className="text-gray-700 mb-4">
            ISU faculty divorces present a particular variant of this dynamic. University employment creates stable income that is not portable — one spouse who stays in Bloomington near the university may want to retain the home; the other may want proceeds to relocate. When both parties can agree on a sale price and division, a cash transaction closes that question faster and more cleanly than a retail listing with all its contingencies.
          </p>
          <p className="text-gray-700 mb-4">
            The insurance industry's professional culture in Bloomington also means that divorcing spouses are often sophisticated about financial transactions. They understand the math: a retail listing at $300,000 after 5-6% commission ($15,000-$18,000) and an average 50-day DOM process produces less net certainty than a cash offer that closes in 14 days with no commission deductions. Many Bloomington divorcing couples choose cash simply because the outcome is certain, the timeline is controlled, and both parties get their proceeds on a specific date.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Divorce Law — Equitable Distribution, Not Community Property</h2>
          <p className="text-gray-700 mb-4">
            Illinois is an equitable distribution state. This is a critical distinction for Bloomington couples who may have lived in community property states (California, Arizona, Texas) before relocating for insurance industry employment. Community property law divides marital assets 50/50 automatically. Illinois law does not.
          </p>
          <p className="text-gray-700 mb-4">
            Under 750 ILCS 5/503 of the Illinois Marriage and Dissolution of Marriage Act, the court divides marital property "in just proportions" — meaning equitable, not necessarily equal. The court considers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Duration of the marriage</li>
            <li>Each spouse's economic circumstances and income</li>
            <li>Each spouse's contribution to the acquisition, preservation, or increase in value of marital property</li>
            <li>The value of property assigned to each spouse as non-marital property</li>
            <li>Tax consequences of the distribution</li>
            <li>Whether the distribution is a settlement of spousal support in lieu of maintenance</li>
            <li>Covenants or other agreements between the parties</li>
          </ul>
          <p className="text-gray-700 mb-4">
            The practical implication: agreeing to sell the home and divide proceeds according to a negotiated marital settlement agreement is almost always faster and cheaper than letting the court determine the equitable distribution through contested proceedings. McLean County Family Division judges have full discretion — the outcome of a contested hearing is uncertain. A marital settlement agreement with a specific cash sale is not.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Marital Home vs. Non-Marital Property in Illinois</h2>
          <p className="text-gray-700 mb-4">
            Not all property owned by either spouse is marital property subject to equitable distribution. Under 750 ILCS 5/503(a), non-marital property includes property acquired before the marriage, property received as a gift or inheritance during the marriage, and property excluded by a valid prenuptial agreement.
          </p>
          <p className="text-gray-700 mb-4">
            For Bloomington couples, the relevant scenario is often: one spouse owned a home before the marriage; both spouses contributed mortgage payments and improvements during the marriage; the property has appreciated significantly. Illinois courts evaluate what portion of the appreciation or equity is attributable to marital contributions vs. what was pre-existing. This can be contested, time-consuming, and expensive to litigate.
          </p>
          <p className="text-gray-700 mb-4">
            A straightforward sale — one cash offer, proceeds divided by negotiated agreement — eliminates this dispute by creating a concrete number rather than an appraisal range that each side's attorneys argue over.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">McLean County Family Division — Practical Details</h2>
          <div className="bg-brand-light rounded-xl p-5 mb-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-1">McLean County Circuit Court — Family Division</p>
                <p>104 W. Front Street, Bloomington, IL 61701</p>
                <p>Phone (General): (309) 888-5301</p>
                <p>11th Judicial Circuit</p>
                <p>Hours: Mon-Fri, 8:30 AM – 4:30 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Dissolution Timeline (Uncontested)</p>
                <p>Illinois waiting period: 6 months from filing to final decree (with agreement)</p>
                <p>Contested: 12-24+ months</p>
                <p>Home sale can proceed before final decree if both parties agree</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Illinois imposes a mandatory 6-month waiting period between the filing of a dissolution petition and entry of a final divorce decree. This applies to contested and uncontested divorces alike. However, a home sale can proceed before the final decree if both parties consent and the marital settlement agreement authorizes it. Sale proceeds are typically held in escrow if the final decree has not been entered, then distributed upon entry.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How a Cash Sale Simplifies a Bloomington Divorce</h2>
          <p className="text-gray-700 mb-4">
            The conventional retail listing process introduces at least four sources of conflict in a divorce transaction: the listing price (each party may have a different number in mind), the broker selection (each party may prefer a different agent), inspection repair requests (each party may disagree on what repairs to allow), and the closing timing (each party may have different urgency). A cash sale to USA Home Buyers eliminates all four.
          </p>
          <p className="text-gray-700 mb-4">
            We provide a single written offer. Both parties evaluate the same specific number. If they agree, the sale proceeds on a fixed timeline — typically 7-14 days from execution of the purchase agreement. There are no broker commissions, no inspection contingencies, no repair negotiations, and no financing contingencies that can cause the deal to fall through at the last moment. The proceeds are available for distribution on a specific date.
          </p>
          <p className="text-gray-700 mb-4">
            For Bloomington divorcing couples who have already agreed in principle to sell, a cash offer is the fastest execution path. For couples still in negotiation, the concrete dollar amount of a written cash offer often breaks the impasse — it's harder to argue about a hypothetical retail listing price than it is to evaluate a specific offer on the table.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax and Closing Costs on a Bloomington Divorce Sale</h2>
          <p className="text-gray-700 mb-4">
            Per the Illinois Department of Revenue (tax.illinois.gov), the seller's transfer tax obligation: Illinois state $0.50 per $500 (35 ILCS 200/31-10) plus McLean County $0.25 per $500 = $300 on a $200,000 sale. No City of Bloomington municipal real estate transfer tax. When you sell to USA Home Buyers, we cover all closing costs — transfer taxes, McLean County recording fees, and title company fees. The net sale proceeds available for division between the spouses equal the agreed purchase price, with no closing-cost deductions.
          </p>
          <p className="text-gray-700 mb-4">
            Note on Illinois IDOR's PTAX-203 Real Estate Transfer Declaration: both buyer and seller (or their representatives) must complete the MyDec electronic filing at closing. In a divorce sale, this is handled by the title company; no special procedures are required for divorce-related transactions.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Children&apos;s Interests, School Districts, and Deferred Sales in Bloomington Divorces</h2>
          <p className="text-gray-700 mb-4">
            A small number of Bloomington divorces involve a deferred sale arrangement — where one spouse remains in the home (often the custodial parent) for a defined period before the property is sold. Under Illinois law, the court can order a deferred sale as part of an equitable distribution plan when it best serves the children&apos;s interests. Bloomington&apos;s school district geography can make a deferred sale arrangement attractive when one spouse wants to keep children in a particular elementary or middle school district during a transition period.
          </p>
          <p className="text-gray-700 mb-4">
            Deferred sale arrangements complicate the transaction for both parties. The occupying spouse maintains the home; the non-occupying spouse has an equity interest they cannot access until the sale date. For couples who prefer a clean break — and particularly for couples where neither party wants to remain in Bloomington (such as ISU faculty relocating to other institutions or insurance professionals who received packages to relocate) — an immediate cash sale resolves the deferred-equity uncertainty entirely. Both parties receive their proceeds on a specific closing date and move forward without ongoing financial entanglement.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Divorce Home Sale in Bloomington IL — Frequently Asked Questions" />

        <CashOfferForm variant="footer" headline="Ready to Close Your Bloomington Divorce Sale?" sourcePage="/markets/bloomington-il/divorce-sale" />
      </div>
    </>
  );
}
