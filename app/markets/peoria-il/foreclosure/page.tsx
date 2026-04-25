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

const pageUrl = `${SITE_URL}/markets/peoria-il/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Peoria IL — Sell Before the Auction',
  description:
    'Facing foreclosure in Peoria IL? We buy before the Peoria County sheriff\'s sale (Mon/Wed, Courtroom 203). Written offer in 24 hours, close in 7 days. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Peoria IL?',
    answer: 'USA Home Buyers closes in as few as 7 days once you accept an offer. Illinois is a 100% judicial foreclosure state under 735 ILCS 5/15-1101 et seq. Every Peoria County foreclosure is filed at the Peoria County Circuit Court, 10th Judicial Circuit, 324 Main Street, Peoria, IL 61602, phone 309-672-6000. The typical Peoria County timeline from first missed payment to completed sheriff\'s sale is 12-18 months. Call 888-274-5006 the moment you receive foreclosure paperwork.',
  },
  {
    question: 'When does Peoria County hold foreclosure sales?',
    answer: 'According to the Peoria County Sheriff\'s Office (peoriacounty.gov/890/Foreclosure-Sales), foreclosure sales in Peoria County are held on Mondays at 8:30 AM and Wednesdays at 1:00 PM in Courtroom 203 at the Peoria County Courthouse, 324 Main Street, Peoria, IL 61602. Selling to USA Home Buyers before the sale date preserves your equity and stops the foreclosure clock.',
  },
  {
    question: 'What is the Illinois mortgage foreclosure process in Peoria County?',
    answer: 'Under the Illinois Mortgage Foreclosure Law (735 ILCS 5/15-1101 et seq.), every foreclosure is judicial — it goes through Peoria County Circuit Court. You are served summons and have 30 days to answer. You have a 3-month reinstatement right under 735 ILCS 5/15-1602 (pay all arrears and fees) and a 7-month redemption period under 735 ILCS 5/15-1603 (pay the full balance). After redemption expires, the property is sold at the Peoria County Sheriff\'s sale. Selling before that point captures whatever equity exists.',
  },
  {
    question: 'Will selling stop foreclosure proceedings in Peoria?',
    answer: 'Yes — a completed sale satisfies the mortgage and terminates the foreclosure action. The proceeds pay off the outstanding mortgage balance. Any surplus after the payoff goes to you. Once we close at a Peoria title company, the lender files a satisfaction of mortgage with the Peoria County Recorder (324 Main Street, Peoria, IL 61602) and the foreclosure action is dismissed. You must close before the sheriff\'s sale is confirmed — after confirmation, your redemption right is extinguished.',
  },
  {
    question: 'What if I owe more than my Peoria house is worth?',
    answer: 'A short sale may be possible — the lender agrees to accept less than the full payoff to release the lien. Short sales require lender approval and take longer than a standard cash sale, but they can eliminate or reduce a potential deficiency judgment. Deficiency judgments are permitted in most Illinois residential foreclosures under the IMFL when the sale proceeds don\'t cover the full loan balance. A short sale negotiated with deficiency waiver language can eliminate that liability. Call 888-274-5006 to discuss your situation.',
  },
  {
    question: 'What resources are available for Peoria homeowners facing foreclosure?',
    answer: 'The Illinois Attorney General\'s Homeowner Protection Program (HOP) connects distressed homeowners with HUD-approved housing counselors at no cost — visit illinoisattorneygeneral.gov or call 1-866-544-7684. The Illinois Housing Development Authority (ihda.org) administers the Illinois Homeowner Assistance Fund. Illinois Legal Aid Online (illinoislegalaid.org) provides free legal information on the foreclosure process. These resources are free and worth consulting alongside your options with USA Home Buyers.',
  },
];

export default function PeoriaForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Stop Foreclosure in Peoria IL — Sell Your House Fast Before the Peoria County Sheriff\'s Sale', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/peoria-il-hero-640.jpg 640w, /images/optimized/peoria-il-hero-828.jpg 828w, /images/optimized/peoria-il-hero-1080.jpg 1080w, /images/optimized/peoria-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/peoria-il-hero-1200.jpg"
            alt="Peoria IL homes — Stop Foreclosure — Sell Before the Peoria County Auction"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Peoria IL — Sell Fast Before the Sheriff's Sale
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
Facing foreclosure in Peoria IL? Per the Peoria County Sheriff's Office, sales are held Mon 8:30 AM and Wed 1:00 PM in Courtroom 203. According to 735 ILCS 5/15-1101, Peoria County's 10th Circuit runs 12-18 months. 3-month reinstatement, 7-month redemption. Sell before auction. Close in 7 days. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Facing foreclosure in Peoria County? We buy Peoria homes before the sheriff's sale — written offer in 24 hours, close in 7 days.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>

      <VideoEmbed
        src="/videos/peoria-il/foreclosure.mp4"
        title="Facing Foreclosure in Peoria IL?"
        poster="/videos/peoria-il/foreclosure-poster.jpg"
        subtitle="Sell before the Peoria County auction — protect your equity and credit"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Facing foreclosure in Peoria IL? Illinois judicial foreclosure — the clock starts at judgment. USA Home Buyers closes in 7 days, stops the process, protects your credit. Call 888-274-5006 right now.
        </div>
      </details>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer Now" subheadline="We close in 7 days. Written offer in 24 hours. Any condition." sourcePage="/markets/peoria-il/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria County Foreclosure Timeline — The Real Numbers</h2>
          <p className="text-gray-700 mb-4">
            Many Peoria homeowners in pre-foreclosure carry outdated information about the process. Illinois foreclosure is 100% judicial — there is no non-judicial or deed-in-lieu option that bypasses the circuit court. Every Peoria County foreclosure is filed, litigated, and resolved in the Peoria County Circuit Court, 10th Judicial Circuit, at 324 Main Street, Peoria, IL 61602.
          </p>
          <p className="text-gray-700 mb-4">
            According to foreclosure defense attorneys and circuit court practice data, the typical uncontested Peoria County foreclosure timeline runs 12-18 months from the first missed payment. Peoria County is a busier foreclosure circuit than downstate peers like McLean County (Bloomington), reflecting the city's higher poverty rate (14.1% of families per 2024 ACS), its distressed South Side and East Bluff inventory, and the continued legacy of manufacturing sector contraction.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Peoria County Timeline</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Missed payments → Notice of Default</td><td className="p-3">90-120 days after first missed payment</td><td className="p-3">Lender typically waits 3-5 missed payments before filing</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure complaint filed / summons served</td><td className="p-3">Month 3-4</td><td className="p-3">Filed at Peoria County Circuit Court, 324 Main St., Peoria, IL 61602</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Defendant answer period</td><td className="p-3">30 days after service</td><td className="p-3">Uncontested cases move to default judgment; contested cases to summary judgment</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Reinstatement right expires</td><td className="p-3">3 months after service (735 ILCS 5/15-1602)</td><td className="p-3">Pay all arrears, fees, and costs to cure default</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Default/summary judgment entered</td><td className="p-3">Month 4-8 (uncontested)</td><td className="p-3">Court enters judgment of foreclosure and sale</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Redemption period expires</td><td className="p-3">7 months from service OR 3 months from judgment (whichever later)</td><td className="p-3">735 ILCS 5/15-1603 — last chance to pay off full debt</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sheriff's sale scheduled</td><td className="p-3">45-day publication notice required</td><td className="p-3">Mon 8:30 AM or Wed 1:00 PM, Courtroom 203, 324 Main St.</td></tr>
                <tr className="bg-gray-50 font-medium"><td className="p-3">Total Peoria County timeline</td><td className="p-3 text-red-700">12–18 months (uncontested)</td><td className="p-3">10th Judicial Circuit; higher-volume foreclosure docket than McLean County</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Mortgage Foreclosure Law — Key Statutory Provisions</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Reinstatement Right (735 ILCS 5/15-1602)</h3>
          <p className="text-gray-700 mb-4">
            The Illinois reinstatement right allows a borrower to cure the default by paying all past-due principal, interest, late charges, insurance premiums, property taxes paid by the lender, and attorney's fees — catching the loan up as if the defaults never occurred. Under 735 ILCS 5/15-1602, the reinstatement period runs for 3 months after service of summons in the foreclosure proceeding, or until a later date specified in the judgment if extended by the court.
          </p>
          <p className="text-gray-700 mb-4">
            Once the reinstatement period expires, you cannot simply pay your arrears to stop the foreclosure. The only remaining options are: pay off the full mortgage balance (redemption), sell the property before the sheriff's sale is confirmed, or proceed to a consent foreclosure. For most Peoria homeowners in pre-foreclosure, the practical choice is to sell before the reinstatement period expires — contact USA Home Buyers at 888-274-5006 immediately.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Redemption Period (735 ILCS 5/15-1603)</h3>
          <p className="text-gray-700 mb-4">
            The redemption right allows the mortgagor to pay off the full outstanding mortgage balance and reclaim the property free and clear. In Illinois, the redemption period runs 7 months from the date of service of summons OR 3 months from entry of the judgment of foreclosure, whichever expires later. For most Peoria County uncontested cases, the 7-month period from service is the controlling deadline.
          </p>
          <p className="text-gray-700 mb-4">
            Practically, exercising the redemption right requires paying the full outstanding mortgage balance in a lump sum — which almost no Peoria homeowner in foreclosure can do without refinancing. The reason to track the redemption deadline is different: once it expires and the sheriff's sale is confirmed, you no longer own the property and cannot voluntarily sell it. Selling to USA Home Buyers before redemption expiration converts any remaining equity into cash you walk away with.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Consent Foreclosure (735 ILCS 5/15-1402)</h3>
          <p className="text-gray-700 mb-4">
            Under 735 ILCS 5/15-1402, a borrower may consent to entry of a judgment vesting absolute title in the lender. In exchange, the mortgage debt is typically fully satisfied — the lender cannot pursue a personal deficiency judgment after consent foreclosure. The consent foreclosure waives reinstatement and redemption rights. This is a last-resort exit for homeowners with zero equity who want a clean break without a deficiency judgment following them.
          </p>
          <p className="text-gray-700 mb-4">
            If you have any equity in your Peoria home — even $10,000 — a cash sale to USA Home Buyers is almost certainly the better path. Consent foreclosure surrenders any equity to the lender. A cash sale captures it for you.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria's Foreclosure Landscape — Why This Market Has More Distress</h2>
          <p className="text-gray-700 mb-4">
            Peoria carries a measurably higher foreclosure rate than most downstate Illinois cities, and the reasons are rooted in the city's structural economic narrative. Caterpillar's HQ departure in 2017 capped a multi-decade contraction of manufacturing employment that had been the backbone of Peoria's working-class homeownership. Workers who bought homes in South Peoria, East Bluff, and the Manual area during the peak manufacturing years — often modest $60,000–$120,000 homes — find themselves now on retirement income or reduced wages trying to maintain properties built before 1940.
          </p>
          <p className="text-gray-700 mb-4">
            According to the 2024 ACS Estimate, Peoria's family poverty rate is 14.1% — significantly above the Illinois state average. The concentration of poverty in specific neighborhoods — South Peoria, East Bluff, Manual area — creates geographic clusters of pre-foreclosure and tax-delinquent inventory that are familiar to any experienced Peoria investor or title company.
          </p>
          <p className="text-gray-700 mb-4">
            Per Zillow (February 2026), the Peoria city Home Value Index is $115,649 — less than half the Illinois state ZHVI of $282,909. For homeowners in the sub-$100,000 value range, even modest arrears accumulations can represent 15-25% of the total home value, making reinstatement economically marginal. In these situations, a cash sale captures the equity that exists above the mortgage balance before the foreclosure process eliminates it entirely.
          </p>
          <p className="text-gray-700 mb-4">
            The Peoria County Sheriff's Office conducts foreclosure sales on a fixed schedule: Mondays at 8:30 AM and Wednesdays at 1:00 PM in Courtroom 203, Peoria County Courthouse, 324 Main Street, Peoria, IL 61602. This is the hard deadline — once your property appears on that sale calendar and the sale is confirmed by the court, the foreclosure process is complete and your ownership rights are extinguished.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Happens at a Peoria County Foreclosure Auction</h2>
          <p className="text-gray-700 mb-4">
            Once the redemption period expires, the Peoria County Circuit Court authorizes a sheriff's sale. Illinois requires 45 days of publication notice before the auction. The sale is conducted by the Peoria County Sheriff's Office at Courtroom 203, 324 Main Street. The opening bid is typically set at or near the amount owed to the lender, or a lower minimum established by the court.
          </p>
          <p className="text-gray-700 mb-4">
            If the property sells for more than the outstanding debt at auction, you — as the former owner — are entitled to the surplus. In practice, distressed Peoria homes with deferred maintenance frequently sell at or near the opening bid. Any equity that existed above the mortgage balance is effectively lost at the auction.
          </p>
          <p className="text-gray-700 mb-4">
            Selling to USA Home Buyers before the auction preserves that equity by paying it directly to you at closing. The difference between a cash sale today and a $0 surplus after a Courtroom 203 auction can be tens of thousands of dollars for a homeowner with meaningful equity in a South Side or East Bluff property.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Buying at Sheriff's Sale — Why Pre-Sale Acquisition Is Cleaner</h2>
          <p className="text-gray-700 mb-4">
            Some investors consider buying at the Peoria County Sheriff's sale directly. It's worth understanding why this creates additional risk that pre-foreclosure acquisition avoids. When a property is purchased at a foreclosure auction, the foreclosure action eliminates the mortgage lien being foreclosed — but it does NOT eliminate other liens that may have attached to the property: IRS tax liens (federal tax liens survive most foreclosures), mechanic's liens filed before the mortgage was originated, judgment liens in some circumstances, and certain municipal code violation liens that the City of Peoria may have recorded.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-foreclosure acquisition from the defaulting homeowner — before the sheriff's sale — allows the buyer to conduct a full title search, identify all encumbrances, and structure the payoff to clear all liens at closing through a standard title company process. The Peoria 10-18 month foreclosure timeline gives a cash buyer a well-defined acquisition window before the auction eliminates this option.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Foreclosure Prevention Resources</h2>
          <p className="text-gray-700 mb-4">
            For Peoria homeowners who want to explore loan modification or reinstatement before selling:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Illinois Attorney General Homeowner Protection Program (HOP):</strong> Free HUD-approved housing counseling. Visit illinoisattorneygeneral.gov or call 1-866-544-7684.</li>
            <li><strong>Illinois Housing Development Authority:</strong> Administers the Illinois Homeowner Assistance Fund. Visit ihda.org for current program availability.</li>
            <li><strong>Illinois Legal Aid Online:</strong> Free legal information on the foreclosure process and referrals to legal aid attorneys in Peoria. Visit illinoislegalaid.org.</li>
            <li><strong>Peoria County Circuit Court:</strong> Court self-help resources at 324 Main Street, Peoria, IL 61602, phone 309-672-6000.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            These are legitimate resources worth consulting. For homeowners who have decided to sell — or who cannot qualify for assistance — USA Home Buyers provides a direct cash offer within 24 hours and a closing timeline fast enough to stop the foreclosure clock. Call 888-274-5006.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Peoria IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/peoria-il/probate', label: 'Probate Sale' },
              { href: '/markets/peoria-il/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/peoria-il/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Before the Peoria County Sheriff's Sale?" sourcePage="/markets/peoria-il/foreclosure" />
      </div>
    </>
  );
}
