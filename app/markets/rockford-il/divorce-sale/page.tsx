/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Rockford IL',
  description:
    'Selling a house during divorce in Rockford IL? One offer, one closing — equitable distribution without the delay. Winnebago County Family Law. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How is the marital home handled during an Illinois divorce?',
    answer: 'Illinois is an equitable distribution state under 750 ILCS 5/503. Courts divide marital property in a "fair and equitable" manner — not necessarily 50/50, though equal splits are common for a primary marital residence with no complicating factors. The court considers each spouse\'s economic circumstances, contributions to the marriage, its length, and custodial arrangements when children are involved. In Winnebago County, divorce proceedings are handled by the Family Law Division of the Winnebago County Circuit Court, 17th Judicial Circuit, 400 West State Street, Rockford IL 61101, phone 815-319-4500.',
  },
  {
    question: 'Can I sell my house before the divorce is finalized in Winnebago County?',
    answer: 'Yes — with both spouses\' agreement, or a court order authorizing the sale. Both spouses must sign the deed to convey marital property, regardless of whose name appears on the title. The most common approach: an agreement to sell entered as part of the divorce settlement — both parties agree on a buyer, price, and closing date, and the net proceeds are distributed per the court decree. We can draft a written offer both spouses can review and agree to without requiring a court order, which simplifies the process significantly.',
  },
  {
    question: 'What if one spouse refuses to agree to sell the Rockford house?',
    answer: 'If one spouse won\'t sign the deed voluntarily, the other can petition the Winnebago County Circuit Court for an order authorizing the sale. The court can compel a sale when it\'s determined to be equitable under 750 ILCS 5/503. Illinois courts have broad authority over marital property division. This path adds time — typically several months — but it\'s available. In practice, a specific written cash offer on the table often motivates a reluctant spouse to agree, because both parties can see exactly what they\'ll walk away with. Ambiguity about price is often what creates resistance.',
  },
  {
    question: 'How are proceeds divided when selling a Rockford house during divorce?',
    answer: 'Net proceeds (sale price minus mortgage payoff, closing costs, and any liens) are typically divided per the divorce settlement agreement or the court\'s equitable distribution order under 750 ILCS 5/503. The marital home equity is usually split equally in Illinois, though the settlement may adjust for one spouse\'s larger contribution to the down payment or mortgage payments. A cash sale produces a clean, definite number — no appraisal disputes, no inspection repair negotiations, no financing contingencies that could delay the final decree and extend the legal process.',
  },
  {
    question: 'How long does an Illinois divorce take when a house is involved?',
    answer: 'An uncontested divorce in Winnebago County where both parties agree on all issues — including the house — can be finalized in as few as 2-3 months from filing. A contested divorce with a disputed marital home typically adds significantly more time — 6-18+ months depending on the complexity and the court\'s docket. Agreeing on a cash sale upfront, before contested litigation begins, is one of the most effective ways to accelerate the process. When both parties have a specific number from a written offer, there\'s less to litigate.',
  },
  {
    question: 'Do we both have to be present at closing for a Rockford divorce sale?',
    answer: 'Both spouses (or the executor with proper authority) must sign the deed. In most cases, both parties appear at the title company for closing. Illinois allows remote online notarization, which can allow one or both parties to sign remotely. If one party\'s attorney is managing the process, the attorney may hold power of attorney for signature purposes. We work around whatever the attorneys and parties need — the goal is a clean, confirmed closing that divides the proceeds as agreed.',
  },
];

export default function RockfordDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House During Divorce in Rockford IL — Winnebago County Equitable Distribution Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/rockford-il-hero-640.jpg 640w, /images/optimized/rockford-il-hero-828.jpg 828w, /images/optimized/rockford-il-hero-1080.jpg 1080w, /images/optimized/rockford-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/rockford-il-hero-1200.jpg"
            alt="Rockford IL home — Divorce Sale — Sell Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House During Divorce in Rockford IL
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Selling a house during divorce in Rockford IL? Illinois divides marital property under equitable distribution (750 ILCS 5/503). Winnebago County Family Law Division handles divorce proceedings. USA Home Buyers provides one written offer both spouses can accept — clean sale, clear proceeds, no retail showings. Close in 7–14 days. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Divorce in Winnebago County? One written offer. Both parties agree. One closing. We work around court timelines and attorney coordination.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get a Cash Offer for Your Divorce Property" subheadline="One offer both spouses can agree on. Close in 7-14 days. No repairs." sourcePage="/markets/rockford-il/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Property Division in Divorce — The Rules That Apply in Rockford</h2>
          <p className="text-gray-700 mb-4">
            Illinois is an equitable distribution state under 750 ILCS 5/503. Marital property — which generally includes the family home purchased or improved during the marriage — is divided in a manner the court determines is "fair and equitable" given all circumstances. Equitable does not mean equal, though in practice a 50/50 split of the marital home's equity is the most common outcome in Winnebago County when both spouses contributed to the home and no complicating factors exist.
          </p>
          <p className="text-gray-700 mb-4">
            The Winnebago County Circuit Court Family Law Division, 17th Judicial Circuit, handles divorce proceedings for Rockford and Winnebago County residents. The court sits at 400 West State Street, Rockford IL 61101, phone 815-319-4500. Family law matters in Winnebago County can be filed and partially managed through Illinois eCourts (efile.illinoiscourts.gov).
          </p>
          <p className="text-gray-700 mb-4">
            Under 750 ILCS 5/503(d), the factors the court considers when dividing the marital home include: each party's economic circumstances at the time of division; how long the marriage lasted; each party's contribution to the marital estate (including contributions as a homemaker); any prior marriages; whether a custody arrangement requires one parent to retain the home; and the tax consequences of the division. Most uncontested Rockford divorces with both parties agreeing to sell the home don't require the court to weigh these factors — the agreement itself constitutes the equitable distribution.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why a Cash Sale Simplifies Rockford Divorce Proceedings</h2>
          <p className="text-gray-700 mb-4">
            Retail listing a home during a divorce is complicated in ways that aren't obvious at the outset. Both parties typically need to agree on the listing agent, listing price, showing schedule, and how to handle repair requests after inspection. When the marriage is ending adversarially, each of those decision points becomes a negotiation — or a fight that goes back to the attorneys and potentially back to the court. The process can add months to a divorce that both parties want to finalize.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale eliminates most of that friction. There's one number — our written offer. Both parties review it. If it works, both parties sign the contract. There's no inspection contingency that requires negotiating who pays for the replacement roof or the HVAC repair. There's no financing contingency that can fall through on a Friday afternoon. There's no staging discussion about whether to leave the couch or take it. The contract is specific, the price is certain, and the closing timeline is set.
          </p>
          <p className="text-gray-700 mb-4">
            For Rockford's pre-1970 housing stock — where repair contingencies are almost inevitable in a retail transaction — this simplicity is particularly valuable. A Signal Hill ranch with original knob-and-tube wiring, or a Midtown bungalow with galvanized plumbing, is going to generate inspection repair requests from a conventional buyer. In a divorce situation, those repair negotiations are a pressure point neither party needs. We buy the property as-is and eliminate that friction entirely.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Divorce Sale Timeline in Winnebago County</h2>
          <p className="text-gray-700 mb-4">
            An uncontested divorce in Winnebago County where both parties agree on property division — including a cash sale of the marital home — can proceed on this rough timeline:
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <strong className="text-brand-dark">File Petition for Dissolution of Marriage.</strong> Either spouse files in Winnebago County Circuit Court at 400 West State Street. Illinois has a residency requirement — at least one party must have lived in Illinois for 90 days before filing. After filing, both parties are served and the case is assigned a case number.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <strong className="text-brand-dark">Agree to sell — call USA Home Buyers for a written offer.</strong> We can generate a written cash offer at any stage of the process — before filing, during discovery, or as part of a settlement negotiation. The offer is a binding contract subject to both parties signing. Attorneys can include the accepted offer in the settlement agreement.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <strong className="text-brand-dark">Both spouses sign the purchase contract.</strong> Both parties must execute the contract as sellers. Attorneys can facilitate signature coordination. The closing date is set per the contract — typically 7-21 days out.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <strong className="text-brand-dark">Close at a Rockford title company.</strong> The title company confirms the mortgage payoff, prepares the closing statement, and handles disbursement. Net proceeds are distributed per the parties' agreement — typically to each spouse's attorney's trust account for distribution per the decree.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <strong className="text-brand-dark">Finalize the divorce decree.</strong> With the house resolved, the remaining terms of the settlement can typically be finalized more quickly. An uncontested Winnebago County dissolution can reach final order within 2-3 months from filing when the parties agree on all issues, including the real estate.
              </div>
            </li>
          </ol>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax, Closing Costs, and Net Proceeds in a Rockford Divorce Sale</h2>
          <p className="text-gray-700 mb-4">
            Sellers in a Rockford divorce transaction pay the same transfer taxes as any other sale: Illinois state $0.50/$500 + Winnebago County $0.25/$500 = $0.75/$500 combined (0.15% of sale price). No municipal RETT in Rockford. On a $170,000 sale, that's $255 in transfer taxes total. Source: 35 ILCS 200/31-10 and 55 ILCS 5/5-1031, 2026. When you sell to USA Home Buyers, we cover all closing costs — transfer taxes, recording fees ($54 standard document at Winnebago County Recorder), title, and settlement. The net proceeds the estate receives are the agreed price with no deductions.
          </p>
          <p className="text-gray-700 mb-4">
            In contrast, Per Redfin (March 2026), a retail listing at the median of $170,000 generates $8,500-$10,200 in agent commissions (5-6%), plus closing costs, potential repair credits after inspection, and carrying costs during the listing period. On a $170,000 home, a 5.5% commission alone is $9,350. That's $9,350 the parties don't split — it comes off the top before either spouse sees a dollar. For Rockford homes at the lower end of the price range, commissions represent a significant percentage of total equity.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford Divorce Sale — Special Situations</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">One Spouse Wants to Keep the House</h3>
          <p className="text-gray-700 mb-4">
            If one spouse wants to buy out the other's share and keep the home, the buyout price is typically based on an appraisal or market analysis. Our written cash offer can serve as an independent data point for the fair market value discussion — not as an offer to a spouse, but as objective market evidence in the negotiation. If the buyout falls through and the parties decide to sell, our offer is already prepared.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Mortgage Still Owed on the Rockford Property</h3>
          <p className="text-gray-700 mb-4">
            Most divorce sales involve a mortgage payoff at closing. The title company handles the payoff directly — the mortgage lender receives their balance from proceeds before the net is distributed to the parties. Both spouses are typically released from the mortgage obligation upon payoff at closing. If both spouses are on the mortgage, this is the cleanest way to sever both parties' liability.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Short Sale Situations in Rockford Divorce</h3>
          <p className="text-gray-700 mb-4">
            If the outstanding mortgage balance exceeds the property's value, a short sale requires lender approval before proceeding. Short sales in divorce situations add complexity because the lender must agree to accept less than owed. This takes time — often 60-120 days for lender approval — and can delay the divorce finalization. If you're in this situation in Rockford, call 888-440-5250 to discuss the options; the approach depends on the specific lender, the loan type, and how far underwater the property is.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Sale in Rockford IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/rockford-il', label: '← Back to Rockford IL' },
              { href: '/markets/rockford-il/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/rockford-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/rockford-il/probate', label: 'Probate Sale' },
              { href: '/markets/rockford-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
              { href: '/markets/springfield-il/divorce-sale', label: 'Springfield IL Divorce' },
              { href: '/markets/rockford-il/faq', label: 'Rockford IL FAQ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Rockford IL Divorce Property?" sourcePage="/markets/rockford-il/divorce-sale" />
      </div>
    </>
  );
}
