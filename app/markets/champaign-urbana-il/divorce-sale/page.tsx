/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Champaign-Urbana IL',
  description:
    'Selling a house during divorce in Champaign or Urbana IL? Equitable distribution under 750 ILCS 5, Champaign County Family Division. Cash offer in 24 hours. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How is marital property divided in an Illinois divorce?',
    answer: 'Illinois uses equitable distribution under the Illinois Marriage and Dissolution of Marriage Act, 750 ILCS 5/503. "Equitable" does not mean equal — the court considers factors including the length of the marriage, each party\'s economic circumstances, contributions to marital property, and the value of non-marital property. For real estate, the court has several options: award the property to one spouse with a buyout obligation, order a partition (sale) with proceeds divided, or award a deferred sale under specific circumstances. A cash sale to a third party is often the cleanest resolution because both spouses receive their share without ongoing entanglement.',
  },
  {
    question: 'Where are divorce proceedings filed in Champaign County?',
    answer: 'Champaign County Circuit Court handles divorce and dissolution proceedings. The county seat is Urbana — all filings go to 101 E. Main Street, Urbana IL 61802, phone 217-384-3725. The court has a Family Law Division that handles divorce, property division, and related matters. Even if both spouses live in Champaign city, the divorce petition is filed in Urbana.',
  },
  {
    question: 'Can one spouse force a sale of the marital home in Illinois?',
    answer: 'Yes. Under 750 ILCS 5/503, the court can order the sale of marital real estate as part of the property division process. Either party can petition the court to order a sale if the parties can\'t agree on disposition of the property. A judge-ordered sale typically means selling through a court-supervised process at market value — adding time and complexity. A voluntary sale to a cash buyer, agreed by both parties, avoids court intervention and is usually faster.',
  },
  {
    question: 'What if my spouse won\'t agree to sell during the divorce?',
    answer: 'If both spouses are on title and one refuses to sell, you generally need either a court order or your spouse\'s cooperation. Your divorce attorney can petition the Champaign County Circuit Court Family Division for an order compelling the sale as part of property division. In contested situations, a cash buyer provides a concrete offer that often resolves the impasse: when both parties see a specific number from a buyer ready to close, the math of the split often clarifies the decision.',
  },
  {
    question: 'How does a cash sale help with the UIUC-couple divorce situation?',
    answer: 'UIUC faculty and Research Park professional divorces often involve one party who wants to remain in Champaign-Urbana and another who doesn\'t. The party staying can pursue a buyout; the party leaving wants liquidity to establish a new household elsewhere. A cash offer provides a specific market-tested value for the home that both attorneys can use in settlement discussions — faster than a formal appraisal and without the listing and showing process that extends the entanglement.',
  },
];

export default function ChampaignUrbanaDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House During Divorce in Champaign-Urbana IL — Equitable Distribution Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1200px)" srcSet="/images/optimized/champaign-urbana-il-hero-1200.jpg" />
          <source media="(min-width: 1080px)" srcSet="/images/optimized/champaign-urbana-il-hero-1080.jpg" />
          <source media="(min-width: 828px)" srcSet="/images/optimized/champaign-urbana-il-hero-828.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/champaign-urbana-il-hero-640.jpg"
            alt="Champaign-Urbana IL home — Sell Fast During Divorce"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Champaign-Urbana House During Divorce — One Offer, Clean Split
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Illinois uses equitable distribution under 750 ILCS 5/503. Champaign County Family Division: 101 E. Main St., Urbana IL 61802. A cash sale provides one concrete number both parties can divide — no listing delays, no showing conflicts, no buyer financing contingencies. Written offer in 24 hours. Close in 7-14 days. Call (888) 440-5250.
              </p>
            </div>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call (888) 440-5250 — 24/7
            </a>
          </div>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Divorce Sale Cash Offer"
              subheadline="One number. One closing. Both parties move forward."
              sourcePage="/markets/champaign-urbana-il/divorce-sale"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Divorce Property Division — The Legal Framework</h2>
          <p className="text-gray-700 mb-4">
            Illinois governs marital property division under the Illinois Marriage and Dissolution of Marriage Act, codified at 750 ILCS 5. Illinois is an equitable distribution state — marital property is divided equitably, which means fairly given the circumstances, not necessarily 50/50. The court has broad discretion in determining what's equitable.
          </p>
          <p className="text-gray-700 mb-4">
            Per 750 ILCS 5/503, when dividing marital real estate, the court considers: the duration of the marriage, each spouse's economic circumstances, contributions to marital property (including homemaking contributions), whether awarding the marital home to a custodial parent is appropriate for the children, the tax consequences of the division, and any dissipation of marital assets. Neither spouse has an automatic right to the marital home.
          </p>
          <p className="text-gray-700 mb-4">
            The court has several options for the marital home: award it to one spouse who buys out the other's interest, order a sale with proceeds split per the court's determination, grant a deferred sale until children reach a certain age, or in rare cases award the property entirely to one spouse as part of an offsetting division. In contested divorces, the uncertainty about which outcome will occur keeps both parties in limbo — sometimes for months or years.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Champaign County Family Division — Where Divorces Are Filed</h2>
          <p className="text-gray-700 mb-4">
            Champaign County Circuit Court handles all family law matters, including divorce and dissolution of marriage. All filings go to the county seat: 101 E. Main Street, Urbana IL 61802, phone 217-384-3725. The Family Law Division (sometimes called the Domestic Relations Division) handles property division, maintenance, and child-related matters within the divorce proceeding.
          According to the Illinois Courts directory (illinoiscourts.gov), the 6th Judicial Circuit serves Champaign County with all civil and family proceedings heard in Urbana.
          </p>
          <p className="text-gray-700 mb-4">
            Champaign County has a moderately active family court docket. UIUC creates a specific profile of divorce situations — dual-career academic couples navigating competing tenure offers, international faculty with complex asset structures, graduate student couples finishing their PhDs and beginning separate professional lives. The county seat in Urbana handles all of these regardless of which city the marital home sits in.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The UIUC Divorce Situation — Academic Career Complexity</h2>
          <p className="text-gray-700 mb-4">
            Champaign-Urbana has a distinctive divorce profile driven by UIUC's academic employment structure. According to the University of Illinois Research Park (researchpark.illinois.edu), the C-U metro also employs 3,000+ tech workers in 100+ companies. Together, these populations create several recurring divorce scenarios with specific real estate implications:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">The Dual-Academic Career Couple</h3>
          <p className="text-gray-700 mb-4">
            Two faculty members or researchers, both employed at or near UIUC, who bought a home during their shared Champaign chapter. When the relationship ends — especially when one party receives a better academic offer elsewhere — one party wants to stay in Champaign-Urbana and the other wants to leave. The party leaving needs liquidity from the home sale to establish a new household at the next institution. The party staying may want to buy out the other, but needs to qualify for a new mortgage while the existing one is still joint.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale resolves this cleanly: the offer value sets the market price, both parties receive their court-determined share at closing, and both can move forward with certainty. No showing schedule to negotiate. No buyer financing contingency that might collapse after both parties have already made plans.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">The Graduate Student Couple</h3>
          <p className="text-gray-700 mb-4">
            Some married graduate students buy modest homes in the University District Urbana or Southwest Champaign area, often during the third or fourth year of a PhD program when one partner has a stipend and the other is employed at UIUC or locally. When the relationship ends — especially as graduation and relocation approach — both parties want a quick, clean resolution. The home equity may be modest (a $140,000 Urbana house purchased with a small down payment), but the desire for speed is high.
          </p>
          <p className="text-gray-700 mb-4">
            For this profile, the primary value of a cash buyer is speed and simplicity: one offer, one closing, proceeds divided as agreed. No drawn-out retail listing process with showings and back-and-forth while both parties are trying to wrap up dissertations and job searches.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">The Research Park Tech Worker Divorce</h3>
          <p className="text-gray-700 mb-4">
            Research Park employees often have a combination of home equity and RSU/stock compensation that's illiquid. When a divorce occurs, both parties may be eager to convert the home equity to cash quickly to fund the transition. Speed — closing in 7-14 days rather than the 44-59 days of a retail listing — can make a meaningful difference in getting both parties financially independent.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why a Cash Sale Simplifies Divorce Property Division</h2>
          <p className="text-gray-700 mb-4">
            A retail listing during a divorce creates multiple friction points that don't exist in a cash sale:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Showing coordination.</strong> If both parties still occupy the home, every showing requires both to vacate simultaneously — or one party to be present during showings with the other's possessions in plain view.</li>
            <li><strong>Repair decisions.</strong> Pre-listing repair requests require both parties to agree on expenditures from a joint account that's often already contested.</li>
            <li><strong>Financing contingency risk.</strong> If a retail buyer's financing falls through after 30 days, the whole process restarts. Both parties pay carrying costs during the delay and their attorneys bill for the time.</li>
            <li><strong>Offer negotiation.</strong> Both parties' attorneys review and advise on every offer and counter-offer — multiplying legal fees and time.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            A cash sale eliminates all of these. We provide one written offer. If both parties and their attorneys agree to accept it, we close in 7-14 days. The title company distributes proceeds per the divorce agreement or court order. The house is out of the picture. Both parties can move on.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How We Work with Divorce Situations</h2>
          <p className="text-gray-700 mb-4">
            USA Home Buyers works with divorce sales regularly. We can issue a written offer to both parties simultaneously, present it to both attorneys if requested, and structure closing to distribute proceeds according to an agreed split or a court order. We don't take sides — we're the buyer; both spouses are the sellers.
          </p>
          <p className="text-gray-700 mb-4">
            If one party has been awarded the home and needs to pay out the other's equity, we can sometimes structure a delayed closing that gives the buying party time to arrange their own financing while the selling party has a committed contract.
          </p>
          <p className="text-gray-700 mb-4">
            All closings happen at a neutral title company in Champaign County. Both parties' attorneys can review the settlement statement before closing. We don't rush, and we don't disappear — a committed cash offer is exactly what it says.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Property Division — What "Equitable" Really Means</h2>
          <p className="text-gray-700 mb-4">
            Illinois courts applying 750 ILCS 5/503 do not start from a 50-50 presumption the way some community property states do. "Equitable" means fair given the specific facts of the marriage, and the court has broad discretion in determining what's fair. Factors the court weighs include: the duration of the marriage, each spouse's economic circumstances, each spouse's contributions to the marital estate (including unpaid domestic work), whether one party dissipated marital assets, and the tax consequences of different division approaches.
          </p>
          <p className="text-gray-700 mb-4">
            For shorter marriages (less than 5 years), courts often lean toward giving each spouse back roughly what they brought in. For longer marriages, particularly those where one spouse made career sacrifices to support the other's career advancement — a common pattern in academic couples where one partner relocated from a better position to follow the other to UIUC — the division may heavily favor the supporting spouse.
          </p>
          <p className="text-gray-700 mb-4">
            The marital home is typically the largest single marital asset. How the court treats it depends on the specific circumstances: whether it was purchased before or after marriage, whether one party contributed separate property (a pre-marital down payment, for example), whether children are involved and a custodial parent has a preference for remaining in the home, and the respective incomes and financial positions of each party.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Practical Timeline — How Long Does a Divorce Sale Take?</h2>
          <p className="text-gray-700 mb-4">
            A cash sale to USA Home Buyers can close in 7-14 days once both parties agree. In practice, the timeline for a divorce sale depends on how quickly both parties and their attorneys can reach agreement. Here's a realistic breakdown:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Typical Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">Call USA Home Buyers; receive written offer</td><td className="p-3">24 hours</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Both parties and attorneys review offer</td><td className="p-3">1-5 business days</td></tr>
                <tr className="bg-white"><td className="p-3">Both parties sign purchase agreement</td><td className="p-3">Once agreed</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Title search and commitment</td><td className="p-3">3-7 days</td></tr>
                <tr className="bg-white"><td className="p-3">Closing at Champaign County title company</td><td className="p-3">7-14 days from agreement</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Proceeds distributed per divorce agreement</td><td className="p-3">At closing</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            The fastest divorce sales close when both parties have already agreed in principle to sell and simply need a buyer. The slowest are when one party is using the sale negotiation to delay other divorce proceedings — a pattern that a neutral third-party offer often disrupts by making the math concrete.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Children and the Marital Home</h2>
          <p className="text-gray-700 mb-4">
            When minor children are involved in a Champaign-Urbana divorce, the Champaign County Family Division judge may consider awarding a deferred sale — keeping the family home occupied by the custodial parent until children reach a certain age, at which point the home is sold and proceeds divided. This is more common when a custodial parent needs housing stability and cannot immediately qualify for a mortgage on their own.
          </p>
          <p className="text-gray-700 mb-4">
            A deferred sale is sometimes contested by the non-custodial spouse who needs the equity to establish a new household. If you're in a situation where a deferred sale is being proposed but you need the equity now, call (888) 440-5250 — we can discuss whether a structured transaction with a delayed payout could address both parties' needs.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Divorce Sale in Champaign-Urbana IL" />

        <section className="my-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-brand-light rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Champaign County Family Division</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Champaign County Circuit Court</li>
                <li>101 E. Main Street, Urbana IL 61802</li>
                <li>Phone: 217-384-3725</li>
                <li>Statute: 750 ILCS 5 (IL Marriage and Dissolution Act)</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Related Pages</h3>
              <ul className="text-sm space-y-1">
                <li><Link href="/markets/champaign-urbana-il/market-report" className="text-brand-primary hover:underline">Market Report →</Link></li>
                <li><Link href="/markets/champaign-urbana-il/foreclosure" className="text-brand-primary hover:underline">Foreclosure Help →</Link></li>
                <li><Link href="/markets/champaign-urbana-il" className="text-brand-primary hover:underline">Champaign-Urbana IL Main →</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Resolve Your Champaign-Urbana Divorce Sale?" sourcePage="/markets/champaign-urbana-il/divorce-sale" />
      </div>
    </>
  );
}
