/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/foreclosure`;

export const metadata: Metadata = {
  title: 'Stop Foreclosure Rockford IL',
  description:
    'Facing foreclosure in Rockford IL? We buy before the Winnebago County auction. Written offer in 24 hours, close in 7 days. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell before foreclosure in Rockford IL?',
    answer: 'USA Home Buyers closes in as few as 7 days once you accept an offer. Illinois is a 100% judicial foreclosure state under 735 ILCS 5/15-1101 et seq. Every Winnebago County foreclosure is filed at the Winnebago County Circuit Court, 17th Judicial Circuit, 400 West State Street, Rockford IL 61101, phone 815-319-4500. The typical timeline from first missed payment to completed foreclosure sale is 14-20 months in Winnebago County — not the 24-36 months you may have heard about from Cook County. Call 888-440-5250 the moment you receive foreclosure paperwork.',
  },
  {
    question: 'What is the Illinois foreclosure process in Winnebago County?',
    answer: 'Under the Illinois Mortgage Foreclosure Law (735 ILCS 5/15-1101 et seq.), every residential foreclosure in Illinois proceeds through the Circuit Court. The lender files a complaint in Winnebago County Circuit Court. You\'re served with summons. You have a right to reinstate the loan (pay all arrears and fees) for 3 months after judgment under 735 ILCS 5/15-1602. The redemption period — your right to pay off the full mortgage balance and reclaim the property — runs 7 months from date of service of summons or 3 months from entry of judgment of foreclosure, whichever is later (735 ILCS 5/15-1603). After the redemption period expires, the property is sold at a court-ordered public auction in Winnebago County.',
  },
  {
    question: 'Will selling stop foreclosure proceedings in Rockford?',
    answer: 'Yes — a completed sale satisfies the mortgage and terminates the foreclosure action. The proceeds pay off the outstanding mortgage balance. Any surplus after paying off the loan goes to you. Once we close at a Rockford title company, the lender files a satisfaction of mortgage with the Winnebago County Recorder (Lori Gummow, 404 Elm Street Room 104, 815-319-4250) and the foreclosure action is dismissed. The critical requirement: you must close before the court confirms the foreclosure sale. Once the sale is confirmed, your right to redeem the property is extinguished.',
  },
  {
    question: 'Is Rockford\'s foreclosure timeline the same as Chicago\'s?',
    answer: 'No — and this is one of the most common misconceptions Rockford sellers carry into the process. Cook County (Chicago metro) foreclosures routinely take 24-36 months due to extreme docket backlog in one of the country\'s largest circuit courts. Winnebago County, while larger than Springfield\'s Sangamon County, is a mid-sized circuit — the 17th Judicial Circuit handles Winnebago and Boone counties combined. The Winnebago County foreclosure timeline is 14-20 months. That\'s about 5-7 months longer than Sangamon/Springfield (12-15 months) but far shorter than Cook. If you\'re in pre-foreclosure in Rockford, you have more time than a Chicago comparison suggests — but less than you might hope.',
  },
  {
    question: 'What resources does Illinois offer for homeowners facing foreclosure?',
    answer: 'The Illinois Attorney General\'s office offers the Homeowner Protection Program (HOP) — connecting distressed homeowners with HUD-approved housing counselors. Visit illinoisattorneygeneral.gov or call 1-866-544-7684. Illinois Legal Aid Online (illinoislegalaid.org) provides free legal information on the foreclosure process. The Illinois Housing Development Authority (ihda.org) also administers assistance programs. These resources are free and don\'t require an attorney. Separately, selling to USA Home Buyers may allow you to exit the property with remaining equity before the foreclosure auction eliminates it.',
  },
  {
    question: 'What if I owe more than my Rockford house is worth?',
    answer: 'A short sale may be possible — the lender agrees to accept less than the full payoff to release the mortgage lien. Short sales require lender approval and take longer than a standard cash sale, but they can eliminate or reduce a potential deficiency judgment. Deficiency judgments are permitted in most Illinois residential foreclosures under IMFL — if the foreclosure sale proceeds don\'t cover the full loan balance, the lender can pursue the remainder. A short sale negotiated with deficiency waiver language can eliminate that liability. Call 888-440-5250 to discuss your specific situation.',
  },
];

export default function RockfordForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Stop Foreclosure in Rockford IL — Sell Your House Fast Before the Winnebago County Auction', pageUrl, '2026-04-18'),
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
            alt="Rockford IL homes — Stop Foreclosure — Sell Before Auction"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Stop Foreclosure in Rockford IL — Sell Fast Before the Auction
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Facing foreclosure in Rockford IL? Winnebago County's judicial process runs 14–20 months under 735 ILCS 5/15-1101 — not the 24-36 months of Cook County. Selling before the auction preserves your equity. USA Home Buyers closes in 7 days. Written offer in 24 hours. 3-month reinstatement right, 7-month redemption under Illinois law. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Facing foreclosure in Winnebago County? We buy Rockford homes before the auction — written offer in 24 hours, close in 7 days.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer Now" subheadline="We close in 7 days. Written offer in 24 hours. Any condition." sourcePage="/markets/rockford-il/foreclosure" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Winnebago County Foreclosure Timeline — The Real Numbers</h2>
          <p className="text-gray-700 mb-4">
            Many Rockford homeowners in pre-foreclosure assume they're on Chicago's timeline. They're not. Cook County's extreme docket backlog produces 24-36 month foreclosure timelines. According to Vantage Group Legal (2026), Winnebago County's 17th Judicial Circuit (400 West State Street, Rockford IL 61101) operates on a 14-20 month foreclosure timeline — meaningfully different. Understanding exactly where you are in that timeline is critical to making the right decision.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Winnebago County Timeline</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Missed payments → Notice of Default</td><td className="p-3">90-120 days after first missed payment</td><td className="p-3">Lender typically waits ~5 missed payments before filing</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure complaint filed / summons served</td><td className="p-3">120-175 days after first missed</td><td className="p-3">Filed at Winnebago County Circuit Court, 400 W State St</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Default judgment (if no answer)</td><td className="p-3">~230 days after first missed</td><td className="p-3">Contested cases proceed to summary judgment</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Reinstatement right expires</td><td className="p-3">3 months after service (735 ILCS 5/15-1602)</td><td className="p-3">Pay all arrears and fees to cure the default</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Redemption period expires</td><td className="p-3">7 months from service OR 3 months from Judgment (whichever later)</td><td className="p-3">Last chance to pay off full debt and reclaim property</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Foreclosure auction / sheriff's sale</td><td className="p-3">Coincides with redemption expiration</td><td className="p-3">45-day publication requirement applies</td></tr>
                <tr className="bg-white font-medium"><td className="p-3">Total Winnebago County timeline</td><td className="p-3 text-red-700">14–20 months</td><td className="p-3">Mid-sized 17th Circuit; longer than Sangamon (12-15 mo), shorter than Cook (24-36 mo)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford vs. Springfield vs. Cook County — Why the Comparison Matters</h2>
          <p className="text-gray-700 mb-4">
            The circuit court you're in determines your timeline. There is no statewide Illinois foreclosure timeline — each county's docket volume drives the pace. Here's how Winnebago County compares:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">County</th>
                  <th className="text-left p-3">Circuit</th>
                  <th className="text-left p-3">Typical Timeline</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Sangamon (Springfield)</td><td className="p-3">7th Judicial Circuit</td><td className="p-3">12-15 months</td><td className="p-3">Lighter caseload; smaller circuit; faster processing</td></tr>
                <tr className="bg-gray-50 font-medium"><td className="p-3">Winnebago (Rockford)</td><td className="p-3">17th Judicial Circuit</td><td className="p-3 text-amber-700">14-20 months</td><td className="p-3">Mid-sized circuit; larger than Sangamon; handles Winnebago + Boone counties</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Cook (Chicago metro)</td><td className="p-3">Circuit Court of Cook Co.</td><td className="p-3 text-red-700">24-36 months</td><td className="p-3">Extreme docket backlog; do NOT apply Cook assumptions to Winnebago cases</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            For Rockford homeowners, the practical implication is this: you have more time than Chicago sellers in the same situation, but you're not on Chicago's extended timeline. According to Steven Grace Law (2024), the 14-20 month window is real, and the stages within it — particularly the reinstatement deadline and redemption expiration — create hard cutoffs that don't wait on your decision-making timeline.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Mortgage Foreclosure Law — Key Provisions</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Reinstatement Right (735 ILCS 5/15-1602)</h3>
          <p className="text-gray-700 mb-4">
            The Illinois reinstatement right allows a borrower to cure the default by paying all past-due principal, interest, late charges, insurance premiums, property taxes, and attorney's fees — essentially catching the loan up as if the defaults never happened. The reinstatement period in Illinois runs for 3 months after the service of summons in the foreclosure proceeding, or until a later date specified in the judgment (if extended). Once this period expires, the option to reinstate is gone — you cannot simply catch up on missed payments to stop the foreclosure.
          </p>
          <p className="text-gray-700 mb-4">
            For Rockford sellers who are deep into the foreclosure timeline, the reinstatement right may already have expired. If that's your situation, selling before the foreclosure auction is the remaining option that can preserve any equity in the property. Call 888-440-5250 immediately to discuss your specific stage.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Redemption Period (735 ILCS 5/15-1603)</h3>
          <p className="text-gray-700 mb-4">
            The redemption right allows the mortgagor to pay off the full outstanding mortgage balance (not just arrears) and reclaim the property. In Illinois, the redemption period runs 7 months from the date of service of summons OR 3 months from the entry of the judgment of foreclosure, whichever period expires later. For most Winnebago County cases, the 7-month-from-service period is the controlling one.
          </p>
          <p className="text-gray-700 mb-4">
            Practically: by the time the redemption period expires, almost no homeowner can exercise the redemption right without outside financing help. The purpose of tracking this date for sellers is different — once the redemption period expires and the foreclosure sale is confirmed, you no longer own the property and cannot voluntarily sell it. Selling to USA Home Buyers before redemption expiration converts that potential equity into cash you walk away with.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Consent Foreclosure (735 ILCS 5/15-1402)</h3>
          <p className="text-gray-700 mb-4">
            Under 735 ILCS 5/15-1402, a borrower may consent to entry of a judgment that vests absolute title in the lender. In exchange, the debt is typically satisfied — the lender cannot pursue a personal deficiency judgment after consent foreclosure. The consent foreclosure eliminates the redemption and reinstatement rights. This is a last-resort exit for homeowners with no equity who want a clean break from a property they cannot sell and cannot maintain. It's not the right path if you have any equity — selling to a cash buyer first captures that equity rather than surrendering it to the lender.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford's Manufacturing Heritage and Foreclosure Risk</h2>
          <p className="text-gray-700 mb-4">
            Rockford's foreclosure pipeline has specific characteristics that don't exist in Springfield or suburban Illinois markets. The manufacturing sector that defined Rockford's 20th century economy has contracted significantly — the former Chrysler FCA plant in adjacent Belvidere, Illinois Tool Works, and dozens of related suppliers have reduced employment or closed entirely over the past two decades. Workers who bought homes during peak manufacturing employment now face retirement on reduced incomes, pension disputes, or outright job loss in their 50s and 60s.
          </p>
          <p className="text-gray-700 mb-4">
            Deferred maintenance is a structural feature of Rockford's pre-foreclosure pipeline, not just an individual circumstance. A working-class family that bought a Signal Hill ranch in 1975 for $40,000 and has been managing declining factory income since 2001 is going to have deferred $80,000-$100,000 in major systems maintenance over that period — roof, HVAC, electrical, plumbing. By the time foreclosure proceedings start, the property needs significant work that the seller cannot fund from their position.
          </p>
          <p className="text-gray-700 mb-4">
            This is exactly the situation USA Home Buyers is designed for. We buy pre-foreclosure Rockford homes in as-is condition, with no repair contingencies, and close fast enough to stop the foreclosure timeline in its tracks. Call 888-440-5250.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Foreclosure Prevention Resources</h2>
          <p className="text-gray-700 mb-4">
            The Illinois Attorney General's office offers the Homeowner Protection Program (HOP) — connecting distressed homeowners with HUD-approved housing counselors at no cost. Visit illinoisattorneygeneral.gov or call 1-866-544-7684. The Illinois Housing Development Authority (ihda.org) administers assistance programs including the Illinois Homeowner Assistance Fund. Illinois Legal Aid Online (illinoislegalaid.org) provides free legal information on the foreclosure process and referrals to legal aid attorneys in Rockford and Winnebago County.
          </p>
          <p className="text-gray-700 mb-4">
            These resources are useful for homeowners who want to attempt a loan modification or reinstatement. For homeowners who have decided to sell and move on — or who can't qualify for assistance — USA Home Buyers provides a direct alternative: a written cash offer within 24 hours and a closing timeline fast enough to stop the foreclosure proceeding. Both options are available. Call 888-440-5250 to discuss which path fits your situation.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Happens at a Winnebago County Foreclosure Auction</h2>
          <p className="text-gray-700 mb-4">
            Once the redemption period expires without the mortgage being paid in full, the Winnebago County Circuit Court authorizes a sheriff's sale of the property. Illinois requires 45 days of publication notice before the auction. The sale is conducted by the Winnebago County Sheriff's Office and typically held at the courthouse or a designated location. The opening bid is typically the amount owed to the lender (or a lower minimum set by the court).
          </p>
          <p className="text-gray-700 mb-4">
            If the property sells for more than what's owed on the mortgage at the auction, you — as the former owner — are entitled to the surplus. But in practice, distressed Rockford properties with significant deferred maintenance often sell at or near the opening bid, leaving no surplus. Any equity that existed above the mortgage balance is effectively lost once the property goes to auction.
          </p>
          <p className="text-gray-700 mb-4">
            Selling to USA Home Buyers before the auction preserves that equity by paying it directly to you at closing. The difference between a $120,000 cash offer today and a $0 surplus after a foreclosure auction is significant — and it's the core reason pre-foreclosure sellers contact us. Call 888-440-5250.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Foreclosure in Rockford IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/rockford-il', label: '← Back to Rockford IL' },
              { href: '/markets/rockford-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/rockford-il/probate', label: 'Probate Sale' },
              { href: '/markets/rockford-il/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/rockford-il/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
              { href: '/markets/springfield-il/foreclosure', label: 'Springfield IL Foreclosure' },
              { href: '/markets/rockford-il', label: 'Rockford IL Main Page' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Before the Winnebago County Auction?" sourcePage="/markets/rockford-il/foreclosure" />
      </div>
    </>
  );
}
