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

const pageUrl = `${SITE_URL}/markets/springfield-il/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Springfield IL',
  description:
    'Selling a house during divorce in Springfield IL? One offer, one closing date - equitable distribution without the delay. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How is the marital home handled during an Illinois divorce?',
    answer: 'Illinois is an equitable distribution state under 750 ILCS 5/503. Courts divide marital property in a "fair and equitable" manner - not necessarily 50/50, though equal splits are common for a primary marital residence. The court considers factors including each spouse\'s economic circumstances, contributions to the marriage, the length of the marriage, and custodial arrangements if children are involved. In Sangamon County, divorce proceedings are handled by the Family Law Division of the Sangamon County Circuit Court, 200 South 9th Street, Springfield IL 62701.',
  },
  {
    question: 'Can I sell my house before the divorce is finalized in Sangamon County?',
    answer: 'Yes - with both spouses\' agreement (or a court order authorizing the sale). Both spouses must sign the deed to convey marital property, regardless of whose name is on the title alone. The most common approach is an agreement to sell entered as part of the divorce settlement - both parties agree on a buyer, price, and closing date, and the net proceeds are distributed per the court decree. We can draft a written offer both spouses can review and agree to without requiring a court order, which simplifies the process significantly.',
  },
  {
    question: 'What if one spouse refuses to agree to sell the house?',
    answer: 'If one spouse won\'t sign the deed voluntarily, the other can petition the Sangamon County Circuit Court for a court order authorizing the sale. The court can compel a sale when it\'s determined to be equitable under 750 ILCS 5/503. Illinois courts have broad authority over marital property. This path adds time - typically several months - but it\'s available. In practice, a specific written cash offer on the table often motivates a reluctant spouse to agree, since both parties can see exactly what they\'ll walk away with.',
  },
  {
    question: 'How are proceeds divided when selling a house during Springfield divorce?',
    answer: 'Net proceeds (sale price minus mortgage payoff, closing costs, and any liens) are typically divided per the divorce settlement agreement or the court\'s equitable distribution order. Marital home equity is usually split equally in Illinois, though the settlement may adjust for one spouse\'s larger contribution to the down payment or mortgage payments. A cash sale produces a clean, definite number - no appraisal disputes, no inspection repair negotiations, no financing contingencies that can delay the final decree.',
  },
  {
    question: 'Does the divorce process in Illinois take long when a house is involved?',
    answer: 'An uncontested divorce in Sangamon County where both parties agree on all issues - including the house - can be finalized in as few as 2-3 months from filing. A contested divorce with a disputed marital home typically adds significantly more time - 6-18+ months. Agreeing on a cash sale upfront, before contested litigation begins, is one of the most effective ways to accelerate the process. When both parties have a specific number in hand from a written offer, there\'s less to litigate.',
  },
];

export default function SpringfieldDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House During Divorce in Springfield IL - Equitable Distribution Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/springfield-il-hero-640.jpg 640w, /images/optimized/springfield-il-hero-828.jpg 828w, /images/optimized/springfield-il-hero-1080.jpg 1080w, /images/optimized/springfield-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/springfield-il-hero-1200.jpg"
            alt="Springfield IL home - Sell Your House During Divorce"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/springfield-il" className="hover:text-white">Springfield IL</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House During Divorce in Springfield IL
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases marital homes in Springfield IL during divorce proceedings - one offer, one closing, proceeds split per your divorce settlement. Illinois equitable distribution under 750 ILCS 5/503 handles property division in Sangamon County Circuit Court. A specific cash number in hand simplifies settlement negotiations. Written offer in 24 hours, close on the court's timeline. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              One offer both parties can agree to. One closing date. Net proceeds split per your divorce decree - no staging, no showings, no contingencies to derail the settlement.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now - 888-274-5006 (24/7)
            </a>
          </div>
          <div>

      <VideoEmbed
        src="/videos/springfield-il/divorce-sale.mp4"
        title="Selling a House During Divorce in Springfield IL"
        poster="/videos/springfield-il/divorce-sale-poster.jpg"
        subtitle="One offer, one closing, clean split of proceeds in Sangamon County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Going through a divorce in Springfield? The family home doesn't have to become a battleground. At USA Home Buyers, we help couples in Sangamon County sell quickly and cleanly - so both parties can move on. We buy the house as-is, for cash, with no agents, no showings, and no delays. Call 888-274-5006 today for a free cash offer.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="We close on the court's timeline. Written offer in 24 hours." sourcePage="/markets/springfield-il/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Equitable Distribution - How It Works in Sangamon County</h2>
          <p className="text-gray-700 mb-4">
            Illinois divides marital property under the Illinois Marriage and Dissolution of Marriage Act, 750 ILCS 5/503, using an equitable distribution framework. "Equitable" means fair - which in practice usually means close to equal for a primary marital residence, adjusted for factors the court considers relevant. Those factors include the duration of the marriage, each spouse's economic contributions, the value of each spouse's non-marital property, any custodial arrangements for children, and the economic circumstances each spouse faces after the divorce.
          </p>
          <p className="text-gray-700 mb-4">
            Sangamon County divorce cases are handled by the Family Law Division of the Sangamon County Circuit Court, 7th Judicial Circuit, at 200 South 9th Street, Springfield IL 62701. Illinois does not require an attorney at real estate closings - title companies handle the mechanics of transferring the deed and distributing proceeds. But both spouses do need independent legal advice on the property division, and both must sign the deed to convey marital property.
          </p>
          <p className="text-gray-700 mb-4">
            The marital home is typically one of the largest assets in a Sangamon County divorce. Springfield's market appreciation has increased the equity in homes purchased before 2022 significantly - According to Redfin (March 2026), the 23% year-over-year increase in the median sale price means even modest bungalows in Harvard Park and on the West Side have built substantial equity. Getting that equity out cleanly requires a buyer, and a cash sale is the fastest path when both parties are ready to move on.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why a Cash Sale Works Better Than a Retail Listing During Divorce</h2>
          <p className="text-gray-700 mb-4">
            A retail listing during an active divorce introduces multiple variables that can complicate - and sometimes blow up - the proceedings. Staging and showing the property requires coordinating between two parties who may not be speaking directly. Buyers making offers often include financing contingencies, inspection repair requests, and closing date flexibility demands. Each of these negotiation points between buyer and listing agent becomes another potential disagreement between the divorcing spouses.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale collapses all of that complexity into a single number. We present one written offer. Both spouses review the same specific price. If the number works for the divorce settlement, you accept it and move toward closing. The closing date can flex to match the court's timeline - if the divorce decree finalizes on a specific date, we can schedule closing for that day or the day after.
          </p>
          <p className="text-gray-700 mb-4">
            We've closed divorce-related transactions in situations ranging from fully cooperative (both parties communicating, just wanting to close quickly) to highly contested (working through attorneys, court-ordered sale). We can work with either scenario.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Factor</th>
                  <th className="text-left p-3">Cash Sale (USA Home Buyers)</th>
                  <th className="text-left p-3">Retail Listing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Time to close</td><td className="p-3">7-14 days from accepted offer</td><td className="p-3">45-90+ days</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Agent commission</td><td className="p-3">$0</td><td className="p-3">5-6% (~$9,350-$11,220 on median)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Repairs required</td><td className="p-3">None</td><td className="p-3">Often $5K-$20K+ requested</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Price certainty</td><td className="p-3">Firm written contract price</td><td className="p-3">Variable - offer, counter-offer, inspection reduction</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Points of spouse disagreement</td><td className="p-3">One: accept/reject the offer</td><td className="p-3">Many: list price, showing schedule, offers, repair terms</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Closing flexibility</td><td className="p-3">Matches court timeline</td><td className="p-3">Dependent on buyer and lender</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield IL Divorce and the Marital Home - Practical Scenarios</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Scenario 1: Cooperative Sale Before Final Decree</h3>
          <p className="text-gray-700 mb-4">
            Both spouses agree to sell and distribute proceeds per the settlement. We present a written offer. Both parties sign the contract. Closing is scheduled after the divorce is finalized (or the court approves the sale as part of the decree). Both spouses sign the deed at the title company - or via remote notarization if one party has already relocated. Net proceeds are distributed per the agreed split. This is the cleanest path and the most common scenario we handle.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Scenario 2: One Spouse Wants to Buy Out the Other</h3>
          <p className="text-gray-700 mb-4">
            If one spouse wants to keep the home, our offer provides a market-based reference point for the buyout price. The staying spouse can use our offer as a benchmark for refinancing into their name and paying the leaving spouse their share. Our offer reflects current cash-market value - which in Springfield's current market is a real, actionable number.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Scenario 3: Court-Ordered Sale</h3>
          <p className="text-gray-700 mb-4">
            The Sangamon County Circuit Court has authority under 750 ILCS 5/503 to order the sale of marital property and direct distribution of proceeds. If one spouse won't cooperate with a voluntary sale, the court can compel it. We've worked in these situations - the court order authorizes the executor (or petitioning spouse's attorney) to proceed with the sale without the uncooperative spouse's signature on each document. Call us if your attorney is considering this path; we can have a written offer ready to present to the court as part of the motion.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax and Net Proceeds on a Springfield Divorce Sale</h2>
          <p className="text-gray-700 mb-4">
            Illinois state transfer tax: $0.50 per $500 (35 ILCS 200/31-10). Sangamon County transfer tax: $0.25 per $500 (35 ILCS 200/31-55). Combined: $0.75 per $500 ($1.50/$1,000), seller pays. No Springfield municipal transfer tax. Recording fee: $64 per standard document at the Sangamon County Recorder's office.
          </p>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, we cover all closing costs including transfer taxes and recording fees. The agreed purchase price is what both spouses receive - no deductions at closing. At the Redfin March 2026 median of $187,000, on a 50/50 split, each spouse receives roughly $93,500 before the mortgage payoff. If the outstanding mortgage is $120,000, the net equity of $67,000 splits to roughly $33,500 each - clean, definite, done.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield Market Context - Equity in a Hot Market</h2>
          <p className="text-gray-700 mb-4">
            Springfield's housing market appreciation makes the divorce home sale conversation more consequential than it was a few years ago. Per Redfin (March 2026), the median sale price of $187,000 — up 23% year over year — means that many Springfield couples who bought before 2022 are sitting on substantially more equity than when they purchased. On a home bought in 2018 or 2019 at $130,000 with a remaining balance of $100,000, current market value around $163,000-$187,000 creates $63,000-$87,000 in equity to divide.
          </p>
          <p className="text-gray-700 mb-4">
            That equity is meaningful for both parties - it represents a financial foundation for the next chapter. The faster and more cleanly the home sells, the sooner both spouses can access their share and move on. A cash sale closes that chapter in 7-14 days from accepted offer. A contested retail listing can drag on for months while both parties continue paying a mortgage on a home neither is living in.
          </p>
          <p className="text-gray-700 mb-4">
            It's worth calculating the real carrying cost of a retail listing during an active Sangamon County divorce. If the mortgage payment is $900/month, property taxes are accruing at $300/month, and utilities run $200/month, the carrying cost during a 27-day DOM + 45-day close period is roughly $2,100-$3,500. Every month the retail listing sits on the market is money that could have been in both parties' pockets. A cash sale eliminates that clock entirely.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-3">Capital Gains Tax Considerations in Divorce Sales</h3>
          <p className="text-gray-700 mb-4">
            Federal tax law provides a significant benefit for selling the marital home during divorce: the primary residence exclusion under IRC §121 allows exclusion of up to $250,000 of capital gains per person ($500,000 for a married couple filing jointly). If you've owned and lived in the home for 2 of the last 5 years, this exclusion applies. For most Springfield homes at current values, the capital gains on a sale will be well within the exclusion limit.
          </p>
          <p className="text-gray-700 mb-4">
            The exclusion is particularly important in divorce: if neither spouse has yet moved out, both may still qualify for the exclusion on their individual shares if they sell within the qualifying period. The tax rules here interact with the divorce timeline in ways that are worth reviewing with a CPA before finalizing the sale structure. This isn't our area of expertise - consult a tax advisor - but it's a factor that often makes selling during (rather than after) divorce the better tax outcome.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What We Need From You to Make a Springfield Divorce Sale Work</h2>
          <p className="text-gray-700 mb-4">
            A divorce sale is more administratively involved than a straightforward single-owner sale, but we've navigated these transactions before. Here's what we need:
          </p>
          <ol className="space-y-3 text-gray-700 mb-4">
            <li className="flex gap-3"><span className="text-brand-primary font-bold">1.</span><span><strong>Both spouses' agreement to the offer price.</strong> Both need to sign the contract. We can send the offer to both parties (or their respective attorneys) simultaneously for review.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">2.</span><span><strong>Clear understanding of the mortgage payoff.</strong> Call your servicer for the current payoff figure. We need to know whether the sale proceeds cover the mortgage before we can close.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">3.</span><span><strong>Confirmation of any other liens.</strong> Judgment liens, tax liens, or mechanic's liens must be addressed at closing. The title company will find them in the title search; knowing about them upfront helps structure the offer correctly.</span></li>
            <li className="flex gap-3"><span className="text-brand-primary font-bold">4.</span><span><strong>A closing timeline that fits the court schedule.</strong> If the decree is expected to be entered on a specific date, we can schedule closing for that day or within days after. We're flexible on timeline within reason.</span></li>
          </ol>
          <p className="text-gray-700 mb-4">
            Call 888-274-5006. We'll walk through the specifics of your situation and have a written offer in your hands within 24 hours.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs - Divorce Sale in Springfield IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/springfield-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/springfield-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/springfield-il/probate', label: 'Probate Sale' },
              { href: '/markets/springfield-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/springfield-il/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Seller Guide' },
              { href: '/markets/springfield-il', label: '← Back to Springfield IL' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Springfield IL House During Divorce?" sourcePage="/markets/springfield-il/divorce-sale" />
      </div>
    </>
  );
}
