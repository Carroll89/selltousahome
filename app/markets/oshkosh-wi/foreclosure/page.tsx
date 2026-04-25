/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { VideoEmbed } from '@/components/VideoEmbed';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Oshkosh WI',
  description:
    'Facing foreclosure in Oshkosh or Winnebago County WI? We buy before the sheriff\'s sale. Wis. Stat. Ch. 846 explained. Written offer in 24 hours. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Oshkosh WI?',
    answer: 'USA Home Buyers can close in as few as 7 days once you accept an offer. Wisconsin is a judicial foreclosure state under Wis. Stat. Ch. 846 — every Winnebago County foreclosure is filed at Winnebago County Circuit Court, 415 Jackson Street, Oshkosh WI 54901. Once judgment of foreclosure is entered, the statutory redemption period begins — 6 months for owner-occupied 1-4 family homes when the lender waives deficiency (Wis. Stat. § 846.101). Call 888-274-5006 the moment you receive foreclosure paperwork.',
  },
  {
    question: 'What is the foreclosure process in Winnebago County WI?',
    answer: 'Wisconsin judicial foreclosure (Wis. Stat. Ch. 846): lender files complaint in Winnebago County Circuit Court. Borrower is served (Wis. Stat. § 801.11). Judgment of foreclosure entered (§ 846.10). Then the redemption period: 6 months from judgment if lender waives deficiency for owner-occupied 1-4 family (§ 846.101), or 12 months if lender preserves deficiency right (§ 846.10). After redemption, sheriff\'s sale is held (§ 846.16), then a confirmation hearing (§ 846.17). Total: first missed payment to sheriff\'s sale is 12-15 months. Source: docs.legis.wisconsin.gov.',
  },
  {
    question: 'Will selling stop foreclosure proceedings in Oshkosh?',
    answer: 'Yes — a completed sale satisfies the mortgage and ends the foreclosure action. Proceeds pay off the outstanding balance. Any surplus after payoff is yours. Once we close at a Winnebago County title company, the lender files a satisfaction of mortgage with the Winnebago County Register of Deeds at 415 Jackson Street, (920) 232-3390, and the foreclosure action is dismissed. The critical requirement: you must close before the court confirms the foreclosure sale — after confirmation, your redemption right is extinguished.',
  },
  {
    question: 'What if I owe more than my Oshkosh house is worth?',
    answer: 'A short sale may be possible — the lender agrees to accept less than the full payoff to release the mortgage lien. Wisconsin allows deficiency judgments after foreclosure (unlike some states). A properly negotiated short sale with deficiency waiver language can eliminate that liability. We have experience with Winnebago County short sales and can help you understand whether the path works for your situation. Call 888-274-5006.',
  },
  {
    question: 'What resources does Wisconsin offer for homeowners facing foreclosure?',
    answer: 'Wisconsin does not have a mandatory pre-foreclosure mediation program (unlike Connecticut). However, the Wisconsin Department of Financial Institutions (dfi.wi.gov) provides homeowner resources, and HUD-approved housing counselors are available statewide. The Wisconsin Housing and Economic Development Authority (wheda.com) also administers assistance programs for qualifying homeowners. Wisconsin Legal Aid (legalaction.org and legal services organizations) provides free representation in some foreclosure cases. These are free state resources — use them in parallel with considering a cash sale.',
  },
];

export default function OshkoshForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Stop Foreclosure in Oshkosh WI — Sell Your House Fast Before Sheriff\'s Sale', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/oshkosh-wi-hero-640.jpg 640w, /images/optimized/oshkosh-wi-hero-828.jpg 828w, /images/optimized/oshkosh-wi-hero-1080.jpg 1080w, /images/optimized/oshkosh-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/oshkosh-wi-hero-1200.jpg"
            alt="Oshkosh WI homes — Stop Foreclosure — Sell Before Sheriff's Sale"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Oshkosh WI — Sell Before the Sheriff's Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases Oshkosh WI homes from homeowners facing foreclosure — before the Winnebago County Circuit Court sheriff's sale. WI judicial foreclosure (Wis. Stat. Ch. 846): 6-month redemption from judgment (§ 846.101), ~12-15 months first-missed-payment to sale. Written cash offer in 24 hours, close in 7-14 days. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/oshkosh-wi/foreclosure.mp4"
        title="Facing Foreclosure in Oshkosh WI?"
        poster="/videos/oshkosh-wi/foreclosure-poster.jpg"
        subtitle="Sell before the sheriff's sale — protect your equity and credit in Winnebago County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Facing foreclosure in Oshkosh? Wisconsin gives you a redemption period under Chapter 846, but don't wait. USA Home Buyers closes in 7 days, stops the process, and protects your credit. Call 888-274-5006 right now.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/oshkosh-wi/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Judicial Foreclosure — The Winnebago County WI Timeline</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin is a judicial foreclosure state under Wis. Stat. Ch. 846. Every foreclosure on a Winnebago County WI property must be filed as a civil action in Winnebago County Circuit Court — 415 Jackson Street, Oshkosh, WI 54901. There is no non-judicial / trustee-sale path available in Wisconsin; lenders cannot bypass the court. This is the same framework that governs the Racine and Kenosha WI foreclosures USA Home Buyers handles in southern Wisconsin.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Typical Timeline</th>
                  <th className="text-left p-3">Statute</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Default / missed payments</td><td className="p-3">Months 1-3</td><td className="p-3">Per mortgage contract</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Notice of right to cure</td><td className="p-3">15-30 days before filing</td><td className="p-3">Wis. Stat. § 425.104</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Complaint filed (Winnebago Co. Circuit Court)</td><td className="p-3">Day 0 of lawsuit</td><td className="p-3">Wis. Stat. § 846.03</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Summons and complaint served on borrower</td><td className="p-3">Days 1-60</td><td className="p-3">Wis. Stat. § 801.11</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Answer due</td><td className="p-3">20 days after service</td><td className="p-3">Wis. Stat. § 802.06</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Judgment of foreclosure entered</td><td className="p-3">Months 3-6 after filing</td><td className="p-3">Wis. Stat. § 846.10</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redemption period — 6 months (owner-occupied 1-4 family, lender waives deficiency)</td><td className="p-3">6 months from judgment</td><td className="p-3">Wis. Stat. § 846.101</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redemption period — 12 months (lender preserves deficiency or non-owner-occ.)</td><td className="p-3">12 months from judgment</td><td className="p-3">Wis. Stat. § 846.10</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sheriff's sale (Winnebago County)</td><td className="p-3">After redemption expires</td><td className="p-3">Wis. Stat. § 846.16</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Confirmation of sale hearing</td><td className="p-3">15-30 days after sale</td><td className="p-3">Wis. Stat. § 846.17</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Writ of assistance (eviction)</td><td className="p-3">After confirmation</td><td className="p-3">Wis. Stat. § 846.185</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium font-bold">Total — first missed payment to sale</td><td className="p-3 font-bold">12-15 months</td><td className="p-3">Wis. Stat. Ch. 846</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            The 6-month redemption period under Wis. Stat. § 846.101 is the critical fork. If the lender waives its deficiency right — the most common approach for standard residential owner-occupied foreclosures — your redemption period is 6 months from judgment. If the lender preserves the deficiency right (meaning they intend to sue you for any remaining balance after the sheriff's sale), the period extends to 12 months. For Oshkosh homeowners, the lender's election on deficiency dramatically affects your timeline.
          </p>
          <p className="text-gray-700 mb-4">
            The redemption period is your window. During it, you can: (1) cure the default and reinstate the loan, (2) pay off the full balance and redeem the property (§ 846.13), (3) sell the property and pay the mortgage from proceeds, (4) negotiate a short sale with the lender, or (5) do nothing and lose the property at the sheriff's sale. Options 3 and 4 are where USA Home Buyers comes in. We close in 7-14 days; the proceeds satisfy the mortgage; the lender records a satisfaction at the Winnebago County Register of Deeds; the foreclosure action is dismissed.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh Foreclosure Market Context — Why Selling Beats the Sheriff's Sale</h2>
          <p className="text-gray-700 mb-4">
            Sheriff's sales at Winnebago County Circuit Court typically recover 60-75% of fair market value for the lender — and often less on deferred-maintenance pre-war Oshkosh bungalows where the pool of qualified bidders is small. USA Home Buyers' cash offers for distressed Oshkosh foreclosure properties typically run 70-80% of FMV for move-in-ready homes and 60-70% for properties with significant deferred maintenance.
          </p>
          <p className="text-gray-700 mb-4">
            If your Oshkosh brick bungalow in Merritt or Algoma has $40,000 of equity above the mortgage payoff and you're four months from the sheriff's sale, the math is clear: sell now and walk with the equity, or let the auction happen and receive nothing. Every month of carrying costs, HOA fees (if applicable), property taxes, and utility bills during the foreclosure process erodes what's left.
          </p>
          <p className="text-gray-700 mb-4">
            The foreclosure also permanently damages your credit — typically 7 years of reporting, affecting your ability to rent, borrow, or qualify for a mortgage again. Selling before the sheriff's sale confirmation, even in a short sale scenario, is far better for your credit recovery than a completed foreclosure.
          </p>
          <p className="text-gray-700 mb-4">
            Source: Wis. Stat. Ch. 846 (docs.legis.wisconsin.gov); Redfin.com Oshkosh housing data (March 2026); Winnebago County Circuit Court, 415 Jackson Street, Oshkosh WI 54901.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh Pre-Foreclosure Scenarios We See</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Manufacturing Job Loss</h3>
          <p className="text-gray-700 mb-4">
            Oshkosh's economy is tied to Fox Valley manufacturing — Oshkosh Corporation, Mercury Marine, and a network of supplier businesses employing thousands of Winnebago County residents. A layoff, plant closure, or disability at a key employer can trigger a mortgage default on a working-class Merritt or Algoma bungalow within months. These homeowners often have significant equity — they've owned the home for decades — but temporarily lack the income to cure a default. Selling for cash preserves that equity before the foreclosure process consumes it.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Fixed-Income Retirees</h3>
          <p className="text-gray-700 mb-4">
            Many Oshkosh homeowners who purchased in the 1980s-2000s are now retired on fixed Social Security and pension income. A major repair — a failed furnace, a roof replacement, a foundation drainage issue in a Lake Winnebago-adjacent home — can be enough to trigger financial hardship that leads to missed payments. Selling to USA Home Buyers is often faster, simpler, and less stressful than navigating a loan modification or forbearance process with a servicer.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">EAA Short-Term Rental Investors in Distress</h3>
          <p className="text-gray-700 mb-4">
            The EAA AirVenture annual event attracts short-term rental investors to Oshkosh, particularly in neighborhoods near Wittman Regional Airport. Some of these properties were purchased during the 2020-2022 rate environment at prices that no longer make financial sense at current carrying costs. Investor-owners who can't find year-round tenants or whose STR income doesn't cover the mortgage may face foreclosure on non-owner-occupied properties — where the redemption period extends to 12 months under Wis. Stat. § 846.10 (lender preserving deficiency). We buy investor-owned Oshkosh properties too.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Understanding Your Winnebago County WI Foreclosure Paperwork</h2>
          <p className="text-gray-700 mb-4">
            When the foreclosure process begins, you'll receive a series of legal documents. Understanding them helps you act before time runs out. The first document is the foreclosure complaint — the lender's formal filing with Winnebago County Circuit Court. It states the loan amount, the missed payments, and what the lender is seeking (typically judgment of foreclosure plus any deficiency). You'll also receive a summons requiring you to respond within 20 days of service.
          </p>
          <p className="text-gray-700 mb-4">
            The most important language in the complaint is the deficiency election. Look for whether the lender is waiving or preserving its right to a deficiency judgment. If the complaint states the lender waives deficiency — the most common approach for standard owner-occupied residential mortgages — your redemption period after judgment is 6 months under Wis. Stat. § 846.101. If the lender preserves the deficiency right, your period is 12 months under § 846.10. This election determines how much time you have to sell before the sheriff's sale.
          </p>
          <p className="text-gray-700 mb-4">
            After judgment, you'll receive notice of the redemption period expiration and the scheduled sheriff's sale date. In Winnebago County, sheriff's sales are published in a local newspaper of general circulation as required by Wis. Stat. § 846.16. The sale is a public auction — the lender typically bids the amount of the outstanding judgment, and third-party bidders may bid higher. If you're in the redemption period and want to sell, you must complete the closing before the sheriff's sale is confirmed by the court under § 846.17. After confirmation, your right to redeem is extinguished permanently.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Wisconsin Pre-Foreclosure Resources for Oshkosh Homeowners</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin does not have a mandatory pre-foreclosure mediation program the way Connecticut does. However, several state resources exist for Oshkosh homeowners in distress before or during the foreclosure process.
          </p>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Wisconsin Department of Financial Institutions (dfi.wi.gov):</strong> Information on mortgage servicer obligations and consumer rights in Wisconsin.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Wisconsin Housing and Economic Development Authority (wheda.com):</strong> Administers assistance programs for qualifying homeowners facing hardship.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>HUD-approved housing counselors:</strong> Free counseling available through HUD-certified agencies. Find counselors at hud.gov or call 1-800-569-4287.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Wisconsin Legal Aid:</strong> Legal Action of Wisconsin (legalaction.org) and other legal aid organizations provide free representation for qualifying homeowners in foreclosure proceedings.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Winnebago County Circuit Court Self-Help:</strong> The court clerk's office at 415 Jackson Street, Oshkosh WI 54901 provides procedural information to self-represented litigants.</div></li>
          </ul>
          <p className="text-gray-700 mb-4">
            These resources are free and don't conflict with considering a cash sale. Exploring a USA Home Buyers offer and consulting a HUD-approved counselor or Legal Aid attorney are not mutually exclusive — many Oshkosh homeowners do both simultaneously to understand all their options before making a decision.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">What Happens to Winnebago County WI Equity After the Sheriff's Sale</h2>
          <p className="text-gray-700 mb-4">
            At the Winnebago County sheriff's sale, the property is auctioned to the highest bidder. The lender typically enters a credit bid for the amount of the outstanding judgment — if no third-party bidder bids higher, the lender takes the property. If a third-party bids above the judgment amount, the surplus (after satisfying the judgment) goes to the homeowner's equity position.
          </p>
          <p className="text-gray-700 mb-4">
            The challenge: sheriff's sales rarely produce competitive bidding on distressed Oshkosh properties. Bidders at Winnebago County foreclosure auctions are typically institutional investors bidding at deep discounts to FMV. The surplus after a sheriff's sale — if there is any — is often far less than what a pre-sheriff's-sale cash sale would have netted. The math consistently favors selling during the redemption period over waiting for the auction.
          </p>
          <p className="text-gray-700 mb-4">
            Additionally, a completed foreclosure (vs. a pre-foreclosure sale) carries long-term credit consequences: a foreclosure typically reports on your credit for 7 years and can affect your ability to qualify for another mortgage for 3-7 years depending on the loan program and lender. A pre-foreclosure sale, executed before the sheriff's sale confirmation, is reported as a standard sale and has significantly less credit impact.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Winnebago County WI" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Back to Oshkosh WI' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/oshkosh-wi/probate', label: 'Probate Sale' },
              { href: '/markets/oshkosh-wi/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-wisconsin', label: 'WI Legal Guide' },
              { href: '/markets/kenosha-wi', label: 'Kenosha WI Market' },
              { href: '/markets/racine-mount-pleasant-wi', label: 'Racine WI Market' },
              { href: '/markets/oshkosh-wi/faq', label: 'Oshkosh WI FAQ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Oshkosh WI Property Before Foreclosure?" sourcePage="/markets/oshkosh-wi/foreclosure" />
      </div>
    </>
  );
}
