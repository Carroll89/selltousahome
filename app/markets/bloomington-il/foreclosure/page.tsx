/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bloomington-il/foreclosure`;

export const metadata: Metadata = {
  title: 'Sell Before Foreclosure Bloomington IL',
  description:
    'Facing foreclosure in Bloomington IL? Illinois judicial foreclosure (735 ILCS 5/15-1101) runs 12-16 months in McLean County. Sell fast, preserve equity. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in McLean County IL?',
    answer: "Illinois is a 100% judicial foreclosure state under 735 ILCS 5/15-1101 et seq. Every foreclosure must proceed through McLean County Circuit Court — 11th Judicial Circuit, 104 W. Front Street, Room 303, Bloomington IL 61701, phone (309) 888-5301. The typical uncontested McLean County foreclosure runs 12-16 months from first missed payment. That's longer than the bare statutory minimum (10-12 months) due to court scheduling, but far shorter than Cook County (24-36 months). Don't assume Bloomington operates on a Chicago timeline. If you're behind on payments, you have a real window to act before the auction.",
  },
  {
    question: 'What is the reinstatement period in Illinois foreclosure?',
    answer: "Under 735 ILCS 5/15-1602, a borrower may reinstate a foreclosed loan — pay all arrears, late fees, attorney fees, and costs — at any time until the later of: (a) 90 days from the date the borrower was served with summons, or (b) the date the court enters an order confirming the sale. In practice, for a typical McLean County uncontested foreclosure, the reinstatement window runs roughly 3 months from service. After the reinstatement period closes, you can no longer cure the arrears and reinstate the loan — your only options are full payoff, redemption, or sale before the redemption deadline.",
  },
  {
    question: 'What is the redemption period in Illinois foreclosure?',
    answer: "Under 735 ILCS 5/15-1603, the right of redemption expires the LATER of: (a) 7 months from the date the mortgagor was served with the foreclosure summons, or (b) 3 months from the date of entry of the judgment of foreclosure. During the redemption period, the homeowner can sell the property and use proceeds to pay off the mortgage debt in full — preserving any equity above the payoff amount. Selling to USA Home Buyers during the redemption window allows you to capture that equity rather than letting the lender take the property at auction.",
  },
  {
    question: 'What is consent foreclosure and should I consider it?',
    answer: "Consent foreclosure under 735 ILCS 5/15-1402 allows a borrower to consent to a judgment that vests absolute title in the lender. Upon entry of a consent foreclosure judgment, the borrower's reinstatement AND redemption rights are eliminated. In exchange, the debt is satisfied — the lender typically cannot pursue a personal deficiency judgment after consent foreclosure. Consent foreclosure is a tool for homeowners with no equity who want a clean exit without enduring the full foreclosure timeline. However, if you have equity in your Bloomington home, selling before the auction preserves that equity in a way consent foreclosure does not. Call (888) 440-5250 to evaluate your specific position.",
  },
  {
    question: 'Can I sell my Bloomington house after foreclosure has started?',
    answer: "Yes — as long as the redemption period has not expired. Once the lender files the foreclosure complaint in McLean County Circuit Court, the clock runs on the 7-month redemption period from service of summons. During that window, you retain the right to sell the property. The sale proceeds pay off the mortgage at closing; any equity above the payoff amount belongs to you. USA Home Buyers can close in 7-14 days — well within the redemption window in most cases. The key is not to wait: the closer you get to the redemption deadline, the fewer options you have.",
  },
  {
    question: 'Does State Farm workforce restructuring create more foreclosures in Bloomington?',
    answer: "State Farm undertook significant workforce reductions in 2020-2023, transitioning many Bloomington-area employees to remote work or early retirement packages. Some employees who purchased homes at Bloomington's market peak in expectation of continued employment income found themselves managing mortgage payments on reduced or fixed income. This is a real dynamic in the Bloomington market — though it's less acute than the distress levels seen in manufacturing-dependent markets like Rockford or Peoria. If you're in mortgage distress following an employment change at State Farm or Country Financial, call (888) 440-5250.",
  },
];

export default function BloomingtonForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema("Selling Before Foreclosure in Bloomington IL — McLean County Guide", pageUrl, '2026-04-19'),
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
            alt="Bloomington IL home — Sell Before Foreclosure"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
          </div>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Facing Foreclosure in Bloomington IL? Sell Before the Auction.
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Illinois is a 100% judicial foreclosure state under 735 ILCS 5/15-1101 et seq. McLean County foreclosures run 12-16 months from first missed payment — 11th Judicial Circuit, 104 W. Front Street, Bloomington. Borrowers have a 3-month reinstatement right (735 ILCS 5/15-1602) and a 7-month redemption period (735 ILCS 5/15-1603). Selling during the redemption window preserves equity. USA Home Buyers closes in 7-14 days. Call (888) 440-5250.
              </p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 (888) 440-5250 — 24/7
            </a>
          </div>
          <CashOfferForm
            variant="hero"
            headline="Get Your Cash Offer — Before the Auction"
            subheadline="Written offer in 24 hours. Close before the McLean County foreclosure deadline."
            sourcePage="/markets/bloomington-il/foreclosure"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Is a Judicial Foreclosure State — What That Means for Bloomington Homeowners</h2>
          <p className="text-gray-700 mb-4">
            Every residential mortgage foreclosure in Illinois must proceed through the court system. There is no power-of-sale or non-judicial foreclosure option for Illinois residential mortgages. The governing statute is the Illinois Mortgage Foreclosure Law, 735 ILCS 5/15-1101 et seq. For McLean County properties, this means the McLean County Circuit Court — 11th Judicial Circuit, 104 W. Front Street, Room 303, Bloomington, IL 61701.
          </p>
          <p className="text-gray-700 mb-4">
            The fact that Illinois requires judicial foreclosure is actually protective for homeowners. It means that before a lender can take your home at auction, they must file a complaint, serve you with process, obtain a court judgment, and allow the statutory redemption period to expire. That sequence takes 12-16 months in McLean County for an uncontested foreclosure — a window during which you have meaningful options.
          </p>
          <p className="text-gray-700 mb-4">
            Per the Illinois Legal Aid Online foreclosure guide (illinoislegalaid.org), the two most significant protections are the reinstatement period under 735 ILCS 5/15-1602 and the redemption period under 735 ILCS 5/15-1603. Understanding these two provisions is essential to evaluating your options as a Bloomington homeowner in distress.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The McLean County Foreclosure Timeline — Typical Milestones</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Milestone</th>
                  <th className="text-left p-3">Typical Timing</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">First missed payment</td><td className="p-3">Day 0</td><td className="p-3">Your action window begins here</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Lender sends breach letter</td><td className="p-3">Days 90-120</td><td className="p-3">Formal notice of default</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure complaint filed in McLean County Circuit Court</td><td className="p-3">Days 120-180</td><td className="p-3">11th Judicial Circuit at 104 W. Front Street</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Summons served</td><td className="p-3">Days 130-200</td><td className="p-3">Redemption period clock starts from service date</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Reinstatement period expires</td><td className="p-3">~90 days from service</td><td className="p-3">735 ILCS 5/15-1602 — last chance to cure arrears</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Default judgment entered (uncontested)</td><td className="p-3">Months 6-9</td><td className="p-3">If you don't respond to the complaint</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Judgment of foreclosure entered</td><td className="p-3">Months 8-11</td><td className="p-3">Court formally enters foreclosure judgment</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redemption period expires</td><td className="p-3">7 months from service OR 3 months from judgment (whichever is later)</td><td className="p-3">735 ILCS 5/15-1603 — last chance to sell</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sheriff's sale</td><td className="p-3">Months 12-16</td><td className="p-3">McLean County Sheriff's auction</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Deed to purchaser; potential eviction</td><td className="p-3">Months 13-16+</td><td className="p-3">New owner takes title; occupant may face eviction</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">Per foreclosuredefenselawoffice.com: "The statutory foreclosure timeline for an uncontested foreclosure in Illinois is 10 to 12 months from a borrower's first missed payment." McLean County's 11th Judicial Circuit processes with less backlog than Cook County, but administrative scheduling extends total timelines to 12-16 months for most uncontested cases.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Reinstatement vs. Redemption — Two Different Rights</h2>
          <p className="text-gray-700 mb-4">
            Two statutory rights protect Illinois borrowers in foreclosure, and they are often confused. Understanding the distinction is critical.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Reinstatement (735 ILCS 5/15-1602)</h3>
              <p className="text-gray-700 text-sm mb-2">The right to catch up on all past-due amounts (arrears, fees, attorney costs) and restore the loan to current standing — as if the default never happened.</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Window:</strong> Until 90 days from service of summons OR the date the court confirms the sale, whichever is later.</p>
              <p className="text-gray-700 text-sm"><strong>Practical use:</strong> If you can come up with all missed payments plus fees, you keep the home with the original mortgage terms continuing. If you can't, look at selling instead.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-brand-dark mb-2">Redemption (735 ILCS 5/15-1603)</h3>
              <p className="text-gray-700 text-sm mb-2">The right to pay off the entire mortgage balance (not just arrears — the full payoff amount) and recover the property outright.</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Window:</strong> Until the LATER of 7 months from service of summons OR 3 months from entry of the judgment of foreclosure.</p>
              <p className="text-gray-700 text-sm"><strong>Practical use:</strong> You could sell the property to a cash buyer and use proceeds to pay off the mortgage in full during the redemption window, capturing any equity above the payoff. This is the most common pre-foreclosure sale strategy.</p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Consent Foreclosure — The Option When There's No Equity</h2>
          <p className="text-gray-700 mb-4">
            For homeowners whose Bloomington property is worth less than the outstanding mortgage balance — or who have no equity after accounting for all liens — consent foreclosure under 735 ILCS 5/15-1402 may be a viable path. Per Justia's citation of the Illinois statute, consent foreclosure allows a borrower to consent to a judgment vesting absolute title in the lender. Upon entry of a consent foreclosure judgment:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>The borrower's reinstatement right is eliminated</li>
            <li>The borrower's redemption right is eliminated</li>
            <li>The mortgage debt is satisfied — the lender typically cannot pursue a personal deficiency judgment after consent foreclosure</li>
            <li>The borrower exits the property cleanly without the full foreclosure timeline</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Consent foreclosure is not appropriate if you have equity. If the Bloomington ZHVI for your property type is above your mortgage payoff, selling is a better outcome than consent foreclosure because selling preserves that equity for you. USA Home Buyers can evaluate your equity position and help you determine whether a cash sale or consent foreclosure better serves your situation.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Bloomington's Foreclosure Landscape — The State Farm Employment Factor</h2>
          <p className="text-gray-700 mb-4">
            Bloomington's foreclosure rate is meaningfully lower than most downstate Illinois cities. The insurance-capital employment base — State Farm, Country Financial, ISU — is substantially more recession-resistant than the manufacturing employment that drives Rockford's distress inventory. According to Illinois-demographics.com (ACS 2024), the city's median household income is $77,384 — the highest of any market in our IL portfolio, creating a homeowner population with greater reserves to weather payment disruptions.
          </p>
          <p className="text-gray-700 mb-4">
            That said, mortgage distress is not absent. State Farm's post-pandemic workforce restructuring created early-retirement and buyout scenarios where employees who purchased homes expecting continued income faced mortgage obligations on reduced fixed income. Some of these homeowners are now 12-18 months into financial pressure. Additionally, the Bloomington-Normal market experienced rapid appreciation — the Redfin median sale price jumped from approximately $252,000 to $300,000 in a single month per Redfin data, a figure that partly reflects thin-market volatility. Homeowners who purchased at peak values with adjustable-rate financing may be underwater.
          </p>
          <p className="text-gray-700 mb-4">
            Per Zillow (February 2026), the typical Bloomington home goes pending in 4 days — which means retail-ready homes move quickly. But homes in financial distress are often not retail-ready. Deferred maintenance accumulated during a period of financial pressure makes the 4-day pending pace irrelevant for a property that can't pass a conventional lender's inspection.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Happens If You Don't Act Before the Auction</h2>
          <p className="text-gray-700 mb-4">
            If the redemption period expires without a sale or redemption, the McLean County Sheriff conducts the auction. The winning bidder receives a certificate of sale. A confirmation hearing follows; the court confirms the sale. After confirmation, the deed transfers to the purchaser, and any remaining occupant faces eviction proceedings under 735 ILCS 5/9 (Forcible Entry and Detainer).
          </p>
          <p className="text-gray-700 mb-4">
            The auction price may or may not exceed your mortgage balance. If auction proceeds exceed the total debt, the surplus belongs to you — but the process of claiming that surplus requires a court petition and significant delay. If auction proceeds fall short, the lender may pursue a deficiency judgment for the remaining balance.
          </p>
          <p className="text-gray-700 mb-4">
            Selling before the auction eliminates the deficiency risk (assuming sale proceeds cover the payoff), preserves whatever equity exists above the mortgage balance, and avoids the psychological and practical burden of a court-auction process.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Steps to Take Right Now If You&apos;re Behind on Your Bloomington Mortgage</h2>
          <p className="text-gray-700 mb-4">
            If you have missed payments or are anticipating missed payments on a Bloomington property, take these steps immediately. Time is the only non-renewable resource in a foreclosure situation. Every month that passes without action reduces your options and compresses the window for a voluntary resolution.
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>Determine where you are in the process:</strong> Has the lender filed a complaint in McLean County Circuit Court? Have you been served with summons? The answers determine how much of the reinstatement and redemption windows remain. If you haven&apos;t been served yet, you&apos;re in the best position.</li>
            <li><strong>Calculate your equity:</strong> What is your property worth vs. your total mortgage payoff? Per Zillow (February 2026), the Bloomington ZHVI is $228,634. A cash offer in the 70-78% range would be $160,044-$178,335. If your payoff is below those numbers, you have equity worth preserving through a voluntary sale.</li>
            <li><strong>Contact USA Home Buyers:</strong> Call (888) 440-5250 for a no-obligation assessment of your situation. We can tell you within 24 hours what a cash offer looks like for your specific property and help you evaluate whether a sale makes sense given your mortgage balance and the remaining redemption window.</li>
          </ol>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Foreclosure in McLean County IL — Frequently Asked Questions" />

        <CashOfferForm variant="footer" headline="Facing Foreclosure in Bloomington IL? Call Now." sourcePage="/markets/bloomington-il/foreclosure" />
      </div>
    </>
  );
}
