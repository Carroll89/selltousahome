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

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Champaign-Urbana IL — Sell Fast',
  description:
    'Facing foreclosure in Champaign or Urbana IL? Sell before the sheriff\'s sale. Illinois judicial foreclosure (735 ILCS 5/15-1101), 12-16 month Champaign County timeline. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does foreclosure work in Champaign County IL?',
    answer: 'Illinois uses 100% judicial foreclosure under the Illinois Mortgage Foreclosure Law (735 ILCS 5/15-1101 et seq.) — every foreclosure must go through the court system. In Champaign County, that means the 6th Judicial Circuit Court, 101 E. Main Street, Urbana IL 61802. The county seat is Urbana, so all filings are in Urbana regardless of whether the property is in Champaign city. The typical uncontested timeline from first missed payment to completed sale is 12-16 months in Champaign County — less than Cook County\'s 24-36 months but longer than some smaller Illinois markets.',
  },
  {
    question: 'What is the reinstatement period in Illinois?',
    answer: 'Under 735 ILCS 5/15-1602, the borrower can reinstate the mortgage — pay all past-due amounts, fees, and costs — at any time until 90 days from when they were served with the foreclosure summons. After that, reinstatement is no longer available. If you\'re in the reinstatement window but can\'t pay the lump sum, selling the house before reinstatement expires is the fastest way to preserve equity and stop the process.',
  },
  {
    question: 'What is the redemption period in Illinois?',
    answer: 'Under 735 ILCS 5/15-1603, the right of redemption expires the LATER of: (a) 7 months from service of the foreclosure summons, or (b) 3 months from entry of the judgment of foreclosure. After the redemption period expires, the property can be sold at sheriff\'s sale and the borrower loses the right to buy it back. Selling before the redemption period expires lets you capture the net equity instead of losing the house at auction.',
  },
  {
    question: 'Will selling stop a Champaign County foreclosure?',
    answer: 'Yes, if you close before the sheriff\'s sale is confirmed. Once you sell the property and the lender is paid off from proceeds at closing, the foreclosure action is dismissed. If proceeds don\'t cover the full balance, you may need to negotiate a deficiency waiver with the lender — something to discuss with your attorney. USA Home Buyers can close in 7-14 days, which is often fast enough to stop a pending sheriff\'s sale if you act before the auction date.',
  },
  {
    question: 'What if I owe more than the house is worth?',
    answer: 'If you\'re underwater — the mortgage balance exceeds the home\'s value — a traditional sale still requires lender approval via short sale. We work with sellers in this situation. A short sale avoids foreclosure on your credit report (a critical difference) and typically results in a better settlement agreement with the lender than post-foreclosure collection. Call (888) 440-5250 immediately if you\'re in this position — timing matters.',
  },
];

export default function ChampaignUrbanaForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Stop Foreclosure in Champaign-Urbana IL — Sell Before the Sheriff\'s Sale', pageUrl, '2026-04-18'),
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
            alt="Champaign-Urbana IL home — Stop Foreclosure, Sell Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Champaign-Urbana IL — Sell Before the Sheriff's Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Illinois uses 100% judicial foreclosure under 735 ILCS 5/15-1101. Champaign County foreclosures are filed in Urbana (101 E. Main St.) — the county seat. Typical 12-16 month timeline. Borrowers have a 3-month reinstatement right (735 ILCS 5/15-1602) and 7-month redemption period (735 ILCS 5/15-1603). Selling before the auction preserves equity and avoids foreclosure on your credit. We close in 7-14 days. Call (888) 440-5250 immediately if you're behind on payments.
              </p>
            </div>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call (888) 440-5250 — Act Now
            </a>
          </div>
      <VideoEmbed
        src="/videos/champaign-urbana-il/foreclosure.mp4"
        title="Facing Foreclosure in Champaign-Urbana IL?"
        poster="/videos/champaign-urbana-il/foreclosure-poster.jpg"
        subtitle="Sell before the Champaign County auction — protect your equity and credit"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Facing foreclosure in Champaign-Urbana? Illinois judicial foreclosure — the clock starts at judgment. USA Home Buyers closes in 7 days, stops the process, protects your credit. Call 888-440-5250 right now.
        </div>
      </details>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Stop Your Champaign-Urbana Foreclosure"
              subheadline="Written offer in 24 hours. Close in 7-14 days. Time matters — call now."
              sourcePage="/markets/champaign-urbana-il/foreclosure"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Judicial Foreclosure — How It Works in Champaign County</h2>
          <p className="text-gray-700 mb-4">
            Illinois is a 100% judicial foreclosure state. Per the Illinois Mortgage Foreclosure Law (735 ILCS 5/15-1101 et seq.), every residential foreclosure must go through the court system — there is no power-of-sale or non-judicial foreclosure option for residential mortgages in Illinois. This is meaningfully different from states like Missouri or Indiana where lenders can foreclose without a court proceeding.
          </p>
          <p className="text-gray-700 mb-4">
            In Champaign County, all foreclosure actions are filed with the 6th Judicial Circuit Court, located at 101 E. Main Street, Urbana IL 61802 (Circuit Clerk phone: 217-384-3725). This is the county seat — Urbana, not Champaign. Lenders' attorneys file in Urbana; summons is served on the borrower at the property address; all court dates are held in Urbana. If you've received a foreclosure summons, check the court location: it will reference the Champaign County Courthouse in Urbana.
          </p>
          <p className="text-gray-700 mb-4">
            According to the Illinois Legal Aid Online (illinoislegalaid.org), the statutory foreclosure timeline for an uncontested Illinois foreclosure runs approximately 10-12 months from first missed payment to completed sale — with county-specific variations. Champaign County's 6th Judicial Circuit runs a moderately active foreclosure docket. UIUC's stable institutional employment base keeps Champaign County foreclosure rates lower than Rockford or Peoria, but Urbana's South Side and working-class neighborhoods see elevated rates relative to Champaign's Research Park corridor.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Champaign County Foreclosure Timeline — Step by Step</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Typical Timing</th>
                  <th className="text-left p-3">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">First missed payment</td><td className="p-3">Day 0</td><td className="p-3">Clock starts. Call your lender and call us.</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Lender default notice</td><td className="p-3">Day 60-90</td><td className="p-3">Breach letter from lender; formal notice of default</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Foreclosure filed</td><td className="p-3">Day 90-120</td><td className="p-3">Lender's attorney files complaint in Champaign County Circuit Court, Urbana</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Summons served</td><td className="p-3">Day 120-150</td><td className="p-3">You are served; 3-month reinstatement clock begins (735 ILCS 5/15-1602)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Answer / default</td><td className="p-3">Day 150-210</td><td className="p-3">If no response, default judgment entered; uncontested cases proceed faster</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Reinstatement expires</td><td className="p-3">~Month 7-8</td><td className="p-3">90 days from service; paying the full arrears stops the foreclosure</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Judgment of foreclosure</td><td className="p-3">Month 6-9</td><td className="p-3">Court enters judgment; 7-month redemption clock may begin (735 ILCS 5/15-1603)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redemption expires</td><td className="p-3">Month 9-12</td><td className="p-3">Later of: 7 months from summons service, or 3 months from foreclosure judgment</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sheriff's sale</td><td className="p-3">Month 10-14</td><td className="p-3">Champaign County Sheriff's sale; auction at county courthouse in Urbana</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Sale confirmation & deed</td><td className="p-3">Month 12-16</td><td className="p-3">Court confirms sale; deed to purchaser; eviction proceedings if needed</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">Timeline is for uncontested foreclosures. Contested proceedings (filing an answer, asserting defenses) extend the timeline significantly. Source: Per the Illinois foreclosure defense overview at foreclosuredefenselawoffice.com, the statutory Illinois foreclosure timeline runs approximately 10-12 months for uncontested cases; Champaign County volume adds 2-4 months in practice.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Two Critical Rights: Reinstatement and Redemption</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Reinstatement — 735 ILCS 5/15-1602</h3>
          <p className="text-gray-700 mb-4">
            The right to reinstate a mortgage means paying all past-due amounts — missed payments, late fees, attorney fees, and costs — in a lump sum that brings the loan current. Under 735 ILCS 5/15-1602, this right exists until 90 days after the borrower is served with the foreclosure summons.
          </p>
          <p className="text-gray-700 mb-4">
            If you can come up with the reinstatement amount, reinstatement is the cleanest solution — you keep the house and the foreclosure stops. The problem is that reinstatement is a large lump sum requirement for most borrowers. On a mortgage that's 6 months in default, the reinstatement amount includes 6 months of missed payments plus the lender's attorney fees plus late charges — often $15,000-$25,000 or more on a typical Champaign-Urbana home.
          </p>
          <p className="text-gray-700 mb-4">
            If you can't make reinstatement work, selling before the reinstatement window closes is the next best option. It preserves more equity than waiting for the redemption period or — worst case — the sheriff's sale.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Redemption — 735 ILCS 5/15-1603</h3>
          <p className="text-gray-700 mb-4">
            The redemption right expires the LATER of: 7 months from service of the foreclosure summons, or 3 months from entry of the foreclosure judgment. Redemption requires paying the full mortgage balance plus costs — not just the arrears. This is a much higher bar than reinstatement and is rarely practical for a borrower facing foreclosure due to financial hardship.
          </p>
          <p className="text-gray-700 mb-4">
            The practical value of the redemption period for most Champaign-Urbana borrowers is as a selling window, not as an actual redemption vehicle. During the redemption period, you can still sell the property, pay off the mortgage from proceeds, and keep the difference. Once the redemption period expires and the sheriff's sale is confirmed, that option is gone.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Who Faces Foreclosure in Champaign-Urbana?</h2>
          <p className="text-gray-700 mb-4">
            The Champaign-Urbana market has lower foreclosure rates than Peoria or Rockford because UIUC and Carle Health provide a stable institutional employment base. But specific segments of the market face elevated foreclosure risk:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Over-leveraged student-rental landlords.</strong> Campustown and University District Urbana investors who bought multiple properties during the 2010s UIUC enrollment growth, leveraged on short-term rental income. When enrollment shifts or a key property goes vacant, the whole portfolio can tip into default.</li>
            <li><strong>Working-class Urbana homeowners.</strong> South Urbana and Dodds Park have a higher concentration of fixed-income homeowners who face foreclosure when unexpected expenses — medical bills, job loss — hit. These properties often have limited equity, making refinancing unavailable.</li>
            <li><strong>Research Park employees.</strong> When a startup loses funding or a major tech tenant leaves the Research Park, employees on aggressive mortgages in Southwest Champaign may face payment shock. The Research Park's tech economy is more volatile than UIUC's stable academic employment.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Before the Sheriff's Sale — How It Works</h2>
          <p className="text-gray-700 mb-4">
            If you have equity in the property — the sale price exceeds the mortgage payoff amount plus closing costs — you can sell at any point before the sheriff's sale is confirmed. The proceeds pay off the lender; you keep whatever is left. USA Home Buyers can close in 7-14 days.
          </p>
          <p className="text-gray-700 mb-4">
            If the foreclosure is already filed, your attorney (or you, pro se) should notify the lender's attorney that a sale is pending. In most cases, the lender will agree to a brief continuance of the court proceedings while the sale closes. Lenders generally prefer a sale to a foreclosure auction — they recover more, and faster.
          </p>
          <p className="text-gray-700 mb-4">
            The sale is structured as a normal arm's-length transaction. The title company handles the payoff to the lender at closing. The foreclosure case is then dismissed. Your credit report shows a paid-off mortgage rather than a completed foreclosure — a meaningful difference in future borrowing capacity.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Consent Foreclosure Option — 735 ILCS 5/15-1402</h2>
          <p className="text-gray-700 mb-4">
            Illinois law provides a specific mechanism for borrowers who have no equity and want to end the foreclosure process quickly without a drawn-out court timeline: the consent foreclosure under 735 ILCS 5/15-1402. In a consent foreclosure, the borrower agrees to a judgment that immediately vests absolute title in the lender. In exchange, the borrower's reinstatement and redemption rights are eliminated, and the lender typically cannot pursue a personal deficiency judgment.
          </p>
          <p className="text-gray-700 mb-4">
            Consent foreclosure is rarely the right choice for Champaign-Urbana homeowners who have equity — selling before the sheriff's sale is almost always a better financial outcome. But for borrowers who are deeply underwater (owe more than the home's value) and simply want to exit cleanly, consent foreclosure can shorten the timeline significantly versus waiting out the full judicial process.
          </p>
          <p className="text-gray-700 mb-4">
            Before agreeing to a consent foreclosure, consult a Champaign County attorney. Deficiency judgment exposure after consent foreclosure is not guaranteed — the lender's ability to pursue a deficiency depends on specific statutory conditions and the language of the consent agreement. Get written confirmation of the deficiency waiver before signing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Foreclosure Impact on Your Credit — Why Selling First Matters</h2>
          <p className="text-gray-700 mb-4">
            A completed foreclosure — one where the lender takes the property at sheriff's sale — stays on your credit report for seven years as a serious negative item. It affects your ability to obtain credit, rent housing, and in some cases, employment in financial services fields.
          </p>
          <p className="text-gray-700 mb-4">
            A sale that pays off the mortgage in full, even through a cash buyer at below-market value, closes out the mortgage as "paid in full." It does not appear on your credit report as a foreclosure. The delinquency history may still appear (missed payments always report), but the outcome is a paid mortgage rather than a repossession. This is a meaningful distinction for anyone planning to purchase another home or otherwise need credit within the next five to seven years.
          </p>
          <p className="text-gray-700 mb-4">
            For Champaign-Urbana homeowners facing foreclosure — particularly UIUC faculty or Research Park employees who expect to purchase a home in another market when they relocate — the credit impact difference between "sold before foreclosure" and "foreclosure completed" can affect their ability to buy in their next location for years. Speed matters.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Information You Need Before Calling</h2>
          <p className="text-gray-700 mb-4">
            When you call USA Home Buyers at (888) 440-5250, it helps to have this information available:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Property address (in Champaign or Urbana — we serve all of Champaign County)</li>
            <li>Current mortgage balance (approximate is fine)</li>
            <li>Whether a foreclosure complaint has been filed yet (check your mail and any notices served on you)</li>
            <li>The approximate date of your first missed payment (this determines your position in the timeline)</li>
            <li>Any knowledge of the property's current condition</li>
          </ul>
          <p className="text-gray-700 mb-4">
            You don't need to have all of this information to call. We can help you figure out where you are in the process. The most important thing is to call before more of the timeline expires — every stage that passes narrows your options.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Champaign-Urbana IL Foreclosure" />

        <section className="my-8 bg-red-50 border border-red-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-red-900 mb-2">⏰ Act Before Time Runs Out</h2>
          <p className="text-red-800 text-sm mb-4">The foreclosure timeline in Champaign County runs 12-16 months from first missed payment. Every stage that passes narrows your options. Call us today — even if you're not sure whether selling makes sense.</p>
          <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2 rounded-xl text-sm transition-colors">
            📞 Call (888) 440-5250 — Immediate Help
          </a>
        </section>

        <CashOfferForm variant="footer" headline="Stop Your Champaign-Urbana Foreclosure" sourcePage="/markets/champaign-urbana-il/foreclosure" />
      </div>
    </>
  );
}
