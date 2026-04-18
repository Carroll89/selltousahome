/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/springfield-il/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Springfield IL',
  description:
    'Facing foreclosure in Springfield IL? We buy before the Sangamon County auction. Written offer in 24 hours, close in 7 days. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Springfield IL?',
    answer: 'We can close in as few as 7 days once you accept an offer. Illinois is a 100% judicial foreclosure state under 735 ILCS 5/15-1101 et seq. Every Sangamon County foreclosure is filed at the Sangamon County Circuit Court, 200 South 9th Street, Springfield IL 62701, (217) 753-6674. The typical timeline from first missed payment to completed foreclosure sale is 12-15 months uncontested. But once judgment is entered and the reinstatement period expires, events move quickly. Call 888-440-5250 the moment you receive foreclosure paperwork.',
  },
  {
    question: 'What is the Illinois foreclosure process in Sangamon County?',
    answer: 'Under the Illinois Mortgage Foreclosure Law (735 ILCS 5/15-1101 et seq.), every residential foreclosure in Illinois proceeds through the Circuit Court. The lender files a complaint in Sangamon County Circuit Court. You\'re served with summons. You have a right to reinstate the loan (pay all arrears and fees) for 3 months after judgment under 735 ILCS 5/15-1602. The redemption period — your right to pay off the full balance and reclaim the property — runs 7 months from the date of service of summons or 3 months from entry of judgment of foreclosure, whichever is later (735 ILCS 5/15-1603). After the redemption period expires, the property is sold at a court-ordered public auction.',
  },
  {
    question: 'Will selling stop foreclosure proceedings in Springfield?',
    answer: 'Yes — a completed sale satisfies the mortgage and terminates the foreclosure action. The proceeds pay off the outstanding mortgage balance. Any surplus after paying off the loan goes to you. Once we close at a Springfield title company, the lender files a satisfaction of mortgage with the Sangamon County Recorder (Frank J. Lesko, 217-535-3150) and the foreclosure action is dismissed. The key is timing — you must close before the court confirms the foreclosure sale.',
  },
  {
    question: 'What is a consent foreclosure under Illinois law?',
    answer: 'Under 735 ILCS 5/15-1402, a borrower may consent to entry of a judgment that vests absolute title in the lender. In exchange, the debt is typically satisfied — the lender cannot pursue a personal deficiency judgment after consent foreclosure. The consent foreclosure also eliminates the redemption and reinstatement rights. This is a last-resort option for homeowners with no equity who simply want a clean exit from a property they cannot sell conventionally. It\'s not the right path if you have equity — selling to a cash buyer first preserves whatever equity remains.',
  },
  {
    question: 'What if I owe more than my Springfield house is worth?',
    answer: 'A short sale may be possible — the lender agrees to accept less than the full payoff to release the mortgage lien. Short sales require lender approval and take longer than a standard cash sale, but they can eliminate or reduce a potential deficiency judgment. Deficiency judgments are permitted in most Illinois residential foreclosures under IMFL — if the foreclosure sale proceeds don\'t cover the full loan balance, the lender can sue for the remainder. A short sale negotiated properly can include deficiency waiver language. Call us to discuss your specific situation; we\'ve worked through distressed transactions in Sangamon County.',
  },
  {
    question: 'What resources does Illinois offer for homeowners facing foreclosure?',
    answer: 'The Illinois Attorney General\'s office offers the Homeowner Protection Program (HOP) — a foreclosure prevention program connecting distressed homeowners with HUD-approved housing counselors. Visit illinoisattorneygeneral.gov or call 1-866-544-7684. Illinois Legal Aid Online (illinoislegalaid.org) provides free legal information on the foreclosure process. HUD-approved housing counselors are also available through the Illinois Housing Development Authority (ihda.org). These resources are free and do not require an attorney.',
  },
];

export default function SpringfieldForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Stop Foreclosure in Springfield IL — Sell Your House Fast Before the Auction', pageUrl, '2026-04-18'),
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
            alt="Springfield IL homes — Stop Foreclosure — Sell Your House Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/springfield-il" className="hover:text-white">Springfield IL</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Springfield IL — Sell Your House Fast
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases houses in Springfield IL from homeowners facing foreclosure — before the Sangamon County Circuit Court auction. Written cash offer in 24 hours, close in 7-14 days. Illinois judicial foreclosure (735 ILCS 5/15-1101) typically runs 12-15 months in Sangamon County — you have a 3-month reinstatement period (§15-1602) and 7-month redemption period (§15-1603). Sell before the auction; walk away with your equity. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees — sell before the auction and walk away with your equity.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="We stop foreclosure by closing before the auction. Written offer in 24 hours." sourcePage="/markets/springfield-il/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Judicial Foreclosure — The Sangamon County Timeline</h2>
          <p className="text-gray-700 mb-4">
            Illinois is a 100% judicial foreclosure state. Under the Illinois Mortgage Foreclosure Law (IMFL), 735 ILCS 5/15-1101 et seq., every residential foreclosure must proceed through the Circuit Court in the county where the property sits. For Sangamon County properties, that's the Sangamon County Circuit Court, 7th Judicial Circuit, at 200 South 9th Street, Springfield IL 62701. There is no power-of-sale or non-judicial foreclosure option in Illinois — lenders cannot bypass the court.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Approximate Timing</th>
                  <th className="text-left p-3">Statute / Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Missed payments — lender contact</td><td className="p-3">30–60 days late</td><td className="p-3">Per mortgage contract</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Breach letter / Notice of Default</td><td className="p-3">90–120 days late</td><td className="p-3">Per mortgage contract</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure summons served</td><td className="p-3">120–175 days late</td><td className="p-3">735 ILCS 5/15-1101</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Default judgment (if no response)</td><td className="p-3">~230 days late</td><td className="p-3">735 ILCS 5/15-1501</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">⚠️ Reinstatement period EXPIRES</td><td className="p-3">~3 months after judgment</td><td className="p-3">735 ILCS 5/15-1602</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">⚠️ Redemption period EXPIRES</td><td className="p-3">7 months from service OR 3 months from judgment (whichever later)</td><td className="p-3">735 ILCS 5/15-1603</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Notice of sale posted</td><td className="p-3">10 days before auction</td><td className="p-3">735 ILCS 5/15-1507</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Public auction (foreclosure sale)</td><td className="p-3">After redemption expires</td><td className="p-3">735 ILCS 5/15-1507</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Eviction proceedings begin</td><td className="p-3">15–30 days after sale</td><td className="p-3">735 ILCS 5/15-1701</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            The typical total timeline from first missed payment to completed foreclosure sale in Sangamon County is 12-15 months for an uncontested case. Contested cases extend to 18+ months. Cook County (Chicago) backlogs run 24-36+ months — Sangamon County moves faster. Source: Vantage Group Legal (2025/2026 IL foreclosure guide); Steven Grace Law (2024 IL foreclosure timeline); Illinois Legal Aid Online.
          </p>
          <p className="text-gray-700 mb-4">
            The window to act is the redemption period — 7 months from service of summons or 3 months from entry of judgment of foreclosure, whichever is later (735 ILCS 5/15-1603). During this window, you can sell the property, use the proceeds to pay off the mortgage, and the foreclosure action terminates. Once the redemption period expires and the court confirms the auction sale, your options disappear.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Three Key Rights Under Illinois Foreclosure Law</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-2">1. Right to Reinstate (735 ILCS 5/15-1602)</h3>
              <p className="text-gray-700 text-sm">
                You can reinstate the mortgage — stop the foreclosure cold — by paying all past-due payments, late fees, attorney fees, and court costs within 90 days of entry of the judgment of foreclosure. If you can access the funds (from a family member, liquidating another asset, or a refinance), reinstatement is the cleanest resolution. Most homeowners in foreclosure don't have that cash available, which is why selling is usually the more realistic path. The reinstatement amount is calculated by the lender and can be requested in writing.
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-2">2. Right of Redemption (735 ILCS 5/15-1603)</h3>
              <p className="text-gray-700 text-sm">
                The redemption period runs 7 months from the date you were served with the foreclosure summons OR 3 months from entry of judgment of foreclosure, whichever is later. During this window, you can redeem the property by paying the full mortgage payoff (not just arrears — the entire outstanding balance). Or you can sell the property to a cash buyer, use the sale proceeds to pay off the full balance, and pocket any equity above the payoff. Selling during redemption is how homeowners with equity protect it — the foreclosure auction rarely recovers full market value.
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-2">3. Consent Foreclosure (735 ILCS 5/15-1402)</h3>
              <p className="text-gray-700 text-sm">
                If you have no equity and no realistic path to reinstatement or redemption, consent foreclosure allows you to consent to a judgment vesting title directly in the lender. In exchange, the debt is typically satisfied — the lender waives the right to pursue you for a deficiency judgment. You give up the property and walk away clean, without a personal judgment hanging over you. This is appropriate only when the property's market value is genuinely below the outstanding debt. If there's any equity at all, selling to a cash buyer first almost always results in a better outcome.
              </p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield Market Data — Why Selling Beats the Auction</h2>
          <p className="text-gray-700 mb-4">
            Per Redfin (March 2026), Springfield's median sale price is $187,000 with homes selling in 27 days on average and a 98.4% sale-to-list ratio. Per the Zillow Home Value Index (March 2026), the typical Springfield home value is $163,198, up 8.2% year over year. This is important context for a foreclosure decision: Springfield's market is genuinely strong right now, and the spread between what a cash buyer will pay you versus what the lender typically recovers at auction is significant.
          </p>
          <p className="text-gray-700 mb-4">
            Foreclosure auctions in Sangamon County typically recover 60-75% of fair market value for the lender. Our cash offers for Springfield foreclosure properties run 65-75% of FMV, with the critical difference being that you — not the lender — receive the proceeds above the payoff. If your Springfield bungalow is worth $163,000 and you owe $130,000, selling to us at $122,000 nets you roughly $92,000 after paying off the loan (less closing costs, which we cover). Letting the auction happen means the lender collects, and if the auction price falls short, the lender can pursue a deficiency judgment for the difference.
          </p>
          <p className="text-gray-700 mb-4">
            The math is straightforward: sell before the auction and protect your equity. Call 888-440-5250. We can have an offer in your inbox within 24 hours of your call.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">State Government Employees and Foreclosure — A Springfield-Specific Pattern</h2>
          <p className="text-gray-700 mb-4">
            Springfield's largest employer is the Illinois state government. State employees — particularly those in mid-level administrative positions — face a financial pattern that's relatively unique to state-capital cities: the combination of pension reliance, periodic workforce reductions tied to state budget cycles, and the difficulty of transitioning to private-sector employment at equivalent compensation. When state budget cuts result in layoffs or voluntary separation incentives, the financial shock can push homeowners quickly toward mortgage default.
          </p>
          <p className="text-gray-700 mb-4">
            If you're a state employee facing foreclosure in Springfield, the Illinois Attorney General's Homeowner Protection Program (HOP) can connect you with HUD-approved housing counselors at no cost. Call 1-866-544-7684 or visit illinoisattorneygeneral.gov. These counselors can help you understand your options, communicate with your lender, and evaluate whether a loan modification, short sale, or cash sale is the right path.
          </p>
          <p className="text-gray-700 mb-4">
            We work alongside these resources — not against them. If a loan modification gets you stable, that's the right outcome. But if the numbers don't work for a modification and you need to sell fast, we can have an offer ready in 24 hours.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Springfield IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/springfield-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/springfield-il/probate', label: 'Probate Sale' },
              { href: '/markets/springfield-il/divorce-sale', label: 'Divorce Sale' },
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

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield Market Reality — Pre-Foreclosure Sellers Have More Options Than They Think</h2>
          <p className="text-gray-700 mb-4">
            Springfield's current market strength creates an option that wasn't available to distressed sellers three or four years ago: enough equity to cover the mortgage payoff AND walk away with something. The Redfin March 2026 median sale price of $187,000 represents 23% appreciation over the prior year — and Zillow's ZHVI of $163,198 reflects 8.2% growth. If you bought your home in 2019 or earlier at a price significantly below today's value, there may be real equity to protect.
          </p>
          <p className="text-gray-700 mb-4">
            The foreclosure auction is a bad place to preserve that equity. Lenders aren't running charity sales — the auction is designed to recover the outstanding mortgage balance, not to maximize what you walk away with. Our cash offers for Springfield pre-foreclosure properties run 65-75% of FMV; the auction typically returns the lender's costs and stops there. If there's $30,000 of equity in your Springfield bungalow, selling to a cash buyer before the auction is almost always better than letting the court confirm the sale.
          </p>
          <p className="text-gray-700 mb-4">
            If you don't know whether you have equity, start with a rough estimate: take your home's estimated current value (you can use Zillow's Zestimate as a starting point, but recognize it's an estimate), subtract your outstanding mortgage payoff amount (call your servicer for the payoff figure), and subtract any other liens on the property (judgment liens, tax liens, code violation liens). If there's a positive number after that calculation, you have equity worth protecting. Call us at 888-440-5250 — we'll give you a real number within 24 hours.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Credit Impact — Why Selling Before Foreclosure Matters Beyond the Equity</h2>
          <p className="text-gray-700 mb-4">
            A completed foreclosure is one of the most damaging events a credit report can carry. Under federal FCRA guidelines, a foreclosure can remain on your credit report for seven years from the date of the first delinquency. During that period, financing a car, renting an apartment, or qualifying for another mortgage is substantially more difficult and more expensive.
          </p>
          <p className="text-gray-700 mb-4">
            Selling the property before the court confirms the foreclosure sale — even in a short sale where you receive nothing after the mortgage payoff — avoids the formal foreclosure judgment on your credit history. The late payments and missed payments are still reported, but the foreclosure judgment itself doesn't appear. That distinction matters significantly for rebuilding after a financial difficulty.
          </p>
          <p className="text-gray-700 mb-4">
            This isn't legal or credit advice — consult a housing counselor or attorney for your specific situation. The Illinois Attorney General's Homeowner Protection Program can connect you with a HUD-approved counselor at no cost: 1-866-544-7684. But the general principle — that selling before foreclosure is better for your credit than waiting for the judgment — is well-established and worth factoring into your decision.
          </p>
        </section>

        <CashOfferForm variant="footer" headline="Stop Foreclosure — Sell Your Springfield IL House Before the Auction" sourcePage="/markets/springfield-il/foreclosure" />
      </div>
    </>
  );
}
