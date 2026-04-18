/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/springfield-il/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Springfield IL',
  description:
    'Inherited a house in Springfield IL? We buy inherited properties as-is through Sangamon County Circuit Court Probate Division. Written offer in 24 hours. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does inheriting a house work in Sangamon County IL?',
    answer: 'When someone dies owning real estate in Sangamon County, the property goes through the Sangamon County Circuit Court — Probate Division, 7th Judicial Circuit, located at 200 South 9th Street, 7th Floor, Springfield IL 62701, phone (217) 753-6674. The court issues Letters of Office (Letters Testamentary or Letters of Administration) giving the executor or administrator authority to deed the property. Unlike a small estate affidavit — which applies only to personal property under 755 ILCS 5/25-1 — real property in Illinois always requires formal probate regardless of the estate\'s total value.',
  },
  {
    question: 'Can I sell an inherited Springfield house before probate is complete?',
    answer: 'You can sign a purchase agreement contingent on the executor receiving Letters of Office. This is common practice in Sangamon County and lets you lock in a buyer and price now, so you close quickly once the court grants authority. Under independent administration (755 ILCS 5/28-1 et seq.), the executor can sell real property without seeking additional court approval on each transaction — significantly faster than supervised administration. We can draft a written contract today and adjust the closing date as probate progresses.',
  },
  {
    question: 'What is the Illinois small estate affidavit and does it cover real property?',
    answer: 'The Illinois small estate affidavit under 755 ILCS 5/25-1 allows heirs to collect personal property (bank accounts, securities, personal effects) without going through formal probate when the total personal property value is $150,000 or less. The 2025 amendment to 755 ILCS 5/25-1(a-5)(2)(A) raised this threshold from $100,000 to $150,000. However, real property — houses, land, condos — is completely excluded from the small estate affidavit procedure regardless of estate size. If the decedent owned real estate in Springfield, formal probate at Sangamon County Circuit Court is required to establish authority to convey title.',
  },
  {
    question: 'Do I need to make repairs on an inherited Springfield property?',
    answer: 'No. Many inherited properties we buy in Springfield are older homes with decades of deferred maintenance. Enos Park Victorians with original 1900s frame construction, Aristocracy Hill mansions with aging mechanical systems, Harvard Park bungalows with galvanized plumbing and knob-and-tube wiring — we buy all of it as-is. Leave belongings behind. We handle the cleanout after closing.',
  },
  {
    question: 'What are the tax implications of selling an inherited house in Illinois?',
    answer: 'Inherited property receives a stepped-up cost basis to fair market value at the date of death under IRC § 1014. That generally eliminates or dramatically reduces capital gains tax on a near-term sale. Illinois does NOT impose a state estate tax or inheritance tax. Transfer tax at closing: state $0.50/$500 + Sangamon County $0.25/$500 = $0.75/$500 combined, seller pays. When you sell to USA Home Buyers, we cover all closing costs. Consult a CPA for your specific federal and state tax situation.',
  },
  {
    question: 'What if there are multiple heirs on the Springfield inherited property?',
    answer: 'All heirs with an ownership interest must agree to the sale and sign the deed — or the executor must have Letters of Office authorizing the sale. If heirs can\'t agree, a partition action can be filed in Sangamon County Circuit Court under Illinois law. We\'ve worked through multi-heir transactions before. A single written cash offer often breaks the deadlock because every heir sees the same price without the negotiation complexity of a retail listing. Call 888-440-5250 to discuss your situation.',
  },
];

export default function SpringfieldInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling an Inherited House in Springfield IL — Sangamon County Probate Guide', pageUrl, '2026-04-18'),
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
            alt="Springfield IL inherited property — sell fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/springfield-il" className="hover:text-white">Springfield IL</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Inherited Springfield IL House — Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases inherited properties in Springfield IL through Sangamon County Circuit Court Probate Division. Written cash offer in 24 hours, close after the executor has Letters of Office. Real property always requires formal probate in Illinois — the small estate affidavit covers personal property only per Illinois law. Any condition, no repairs. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Inherited a property through Sangamon County Circuit Court Probate Division? We buy inherited houses in any condition and work around Illinois probate timelines.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="We work with estates and probate timelines. Written offer in 24 hours." sourcePage="/markets/springfield-il/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Sangamon County Circuit Court — Probate Division — What You Need to Know</h2>
          <p className="text-gray-700 mb-4">
            The probate court for Sangamon County is the Sangamon County Circuit Court, Probate Division — part of Illinois's 7th Judicial Circuit. The court is located at 200 South 9th Street, 7th Floor, Springfield IL 62701. Direct probate line: (217) 753-6674. Hours: Monday through Friday, 8:30 AM to 4:30 PM. The 7th Judicial Circuit covers six Illinois counties — Greene, Jersey, Macoupin, Morgan, Sangamon, and Scott — with Springfield serving as the circuit headquarters.
          </p>
          <p className="text-gray-700 mb-4">
            This court handles all probate proceedings for decedents who owned real property in Sangamon County. Whether the home was a Victorian-era frame house in Enos Park, a mid-century brick bungalow in Harvard Park, a West Side ranch, or a suburban home in Chatham or Rochester, the path to conveying title runs through this court. Once the personal representative receives Letters of Office from the court, they have authority to sell and deed the property.
          </p>
          <p className="text-gray-700 mb-4">
            We regularly work with estates throughout Sangamon County. We can have a written offer in place before you even file the probate petition — so the moment Letters are issued, you're ready to close. Illinois title companies can handle the closing in 7-14 days from authorization.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate Law — The Key Rules for Inherited Real Estate</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Rule #1: Real Property Always Requires Formal Probate</h3>
          <p className="text-gray-700 mb-4">
            This is the most important thing to understand about Illinois inheritance. The small estate affidavit under 755 ILCS 5/25-1 — even after the 2025 amendment raising the threshold to $150,000 — applies only to personal property: bank accounts, investment accounts, vehicles (with separate title procedures), personal effects. Real estate, regardless of its value, is excluded entirely. If the decedent owned a $90,000 bungalow in Springfield, formal probate is required. If the estate's total personal property is $40,000 but includes one parcel of real estate, formal probate is required for the land.
          </p>
          <p className="text-gray-700 mb-4">
            There's no shortcut around this in Illinois. Joint tenancy with right of survivorship or a living trust can pass property outside probate, but if the property was solely in the decedent's name, the Circuit Court must be involved.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Rule #2: Independent Administration Makes the Process Faster</h3>
          <p className="text-gray-700 mb-4">
            Illinois offers two paths for formal probate: supervised administration and independent administration. Under supervised administration, every significant estate action — including selling real property — requires prior court approval. That adds weeks to each step. Under independent administration (755 ILCS 5/28-1 et seq.), the executor or administrator has broad authority to manage and sell estate assets, including real property, without seeking court approval for each transaction. Court involvement is limited to the final accounting or when an interested party objects.
          </p>
          <p className="text-gray-700 mb-4">
            For heirs wanting to sell an inherited Springfield property quickly, independent administration is the right path when the estate is uncontested. An experienced Illinois probate attorney can file for independent administration simultaneously with opening the estate. The typical uncontested timeline under independent administration is 6-9 months from filing to final order.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Rule #3: The $150,000 Small Estate Affidavit (Personal Property Only)</h3>
          <p className="text-gray-700 mb-4">
            The 2025 amendment to 755 ILCS 5/25-1(a-5)(2)(A) raised Illinois's small estate affidavit threshold from $100,000 to $150,000. This allows heirs to collect personal property — savings accounts, brokerage accounts, certain personal items — without opening a formal probate estate, as long as the total personal property doesn't exceed $150,000 and no letters of office have been issued. There's no court filing involved. The affiant simply prepares the affidavit, pays valid claims, and distributes to heirs.
          </p>
          <p className="text-gray-700 mb-4">
            But again: this procedure has no application to real estate. A Springfield house, condo, or parcel of land cannot transfer via small estate affidavit. This is a hard rule under Illinois statute, not a gray area.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Administration Type</th>
                  <th className="text-left p-3">Typical Timeline</th>
                  <th className="text-left p-3">Court Approval for Property Sale?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Independent Administration (755 ILCS 5/28-1)</td><td className="p-3">6-9 months (uncontested)</td><td className="p-3">No — executor has authority</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Supervised Administration</td><td className="p-3">12-18 months (uncontested)</td><td className="p-3">Yes — petition required for each sale</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Contested Estate</td><td className="p-3">18-36+ months</td><td className="p-3">Yes — and contested at each step</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Small Estate Affidavit (755 ILCS 5/25-1)</td><td className="p-3">Days (no court filing)</td><td className="p-3">N/A — personal property only, real estate excluded</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield's Inherited Housing Stock — What We See Most Often</h2>
          <p className="text-gray-700 mb-4">
            Springfield's older neighborhoods generate a significant share of estate-sale properties. The Enos Park neighborhood — bounded roughly by North 5th Street, North Grand Avenue, Carpenter Street, and Miller Street — is one of Springfield's most historic districts, with a housing stock that dates predominantly from the 1880s through the 1920s. These are frame and brick Victorian-era cottages and bungalows, many with original or near-original electrical systems, galvanized or lead plumbing, and plaster walls over wood lath. NeighborhoodScout puts the Enos Park median at $118,495 — below Springfield's overall median, reflecting both the older stock and the renovation costs involved.
          </p>
          <p className="text-gray-700 mb-4">
            Harvard Park, on Springfield's south side, is another common source of estate properties. The Harvard Park housing stock is predominantly Craftsman bungalows and Cape Cods built in the 1940s and 1950s — homes that have been in the same family for 60-80 years in many cases. NeighborhoodScout data puts the Harvard Park median at $92,550, and homes.com shows a typical on-market time of around 16 days — faster than the national average. The buyer pool for these homes skews heavily toward cash investors because conventional lenders often require condition upgrades the sellers aren't in a position to make during probate.
          </p>
          <p className="text-gray-700 mb-4">
            The Aristocracy Hill neighborhood near downtown Springfield — the Victorian mansion corridor along South 6th Street and adjacent blocks — produces estate sales at higher price points, though the complexity of those properties (large square footage, aging mechanicals, sometimes converted to multi-family) means they often sit longer on the retail market than comparable suburban homes.
          </p>
          <p className="text-gray-700 mb-4">
            For all of these situations, the practical reality is the same: inherited properties in Springfield often need a buyer who can close without financing contingencies, who won't require inspection-contingency repairs, and who can work around the probate timeline. That's exactly what we do.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax and Closing Costs on a Springfield Inherited Property Sale</h2>
          <p className="text-gray-700 mb-4">
            Illinois charges a state real estate transfer tax of $0.50 per $500 of consideration under 35 ILCS 200/31-10. Sangamon County adds $0.25 per $500 under 35 ILCS 200/31-55. Combined: $0.75 per $500 ($1.50 per $1,000, 0.15% of sale price), paid by the seller. The City of Springfield does not impose a municipal real estate transfer tax. Form PTAX-203 (Illinois Real Estate Transfer Declaration) is filed at the county recorder at closing — Frank J. Lesko, Sangamon County Recorder, (217) 535-3150.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Sale Price</th>
                  <th className="text-left p-3">IL State Tax ($0.50/$500)</th>
                  <th className="text-left p-3">Sangamon Co. Tax ($0.25/$500)</th>
                  <th className="text-left p-3">Total Transfer Tax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">$92,550 (Harvard Park median)</td><td className="p-3">$92.55</td><td className="p-3">$46.28</td><td className="p-3 font-medium">$138.83</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$118,495 (Enos Park median)</td><td className="p-3">$118.50</td><td className="p-3">$59.25</td><td className="p-3 font-medium">$177.74</td></tr>
                <tr className="bg-white"><td className="p-3">$163,198 (ZHVI avg)</td><td className="p-3">$163.20</td><td className="p-3">$81.60</td><td className="p-3 font-medium">$244.80</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$187,000 (Redfin median)</td><td className="p-3">$187.00</td><td className="p-3">$93.50</td><td className="p-3 font-medium">$280.50</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, we cover all closing costs — transfer taxes, recording fees ($64 standard document, Sangamon County Recorder), title search, and settlement fees. The estate receives the net price we agree on with no deductions at closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Out-of-State Heirs — Managing a Springfield Property Remotely</h2>
          <p className="text-gray-700 mb-4">
            A significant share of inherited Springfield properties are managed by out-of-state heirs. Government employment history means many Springfield families have children who relocated to Chicago, St. Louis, or elsewhere for work. When a parent passes and leaves behind a Harvard Park bungalow or an Enos Park Victorian, the heirs often have no practical ability to renovate the property, coordinate contractors in Springfield, or manage the retail listing process from three states away.
          </p>
          <p className="text-gray-700 mb-4">
            We handle the remote-heir situation routinely. The executor can sign closing documents via remote notarization (Illinois allows remote online notarization under the Illinois Electronic Commerce Security Act), or by traveling to Springfield for a single closing appointment at the title company. There's no need for the heirs to be physically present for repairs, showings, or cleanouts — we take the property in its current condition and manage everything post-closing.
          </p>
          <p className="text-gray-700 mb-4">
            If you're managing a Springfield estate from out of state, call 888-440-5250. We can discuss the property condition, timing, and the probate stage you're at, and have a written offer ready before your next appointment with the probate attorney.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Step-by-Step: Selling Inherited Springfield Real Estate Through Probate</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <strong className="text-brand-dark">Open probate at Sangamon County Circuit Court.</strong> File a petition for administration with the Probate Division, 200 S 9th St, 7th Floor, Springfield IL 62701. Attach the original will (if any) and a certified copy of the death certificate. Filing fee varies — confirm with the Clerk of Circuit Court at (217) 753-6674.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <strong className="text-brand-dark">Request independent administration.</strong> Under 755 ILCS 5/28-1, petition for independent administration at the time the estate is opened. This gives the executor authority to sell real property without court approval on each transaction. If unopposed, the court typically grants this at the initial hearing.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <strong className="text-brand-dark">Receive Letters of Office.</strong> The court issues Letters Testamentary (if there's a will) or Letters of Administration (intestate). These Letters authorize the executor or administrator to sign deeds and other instruments conveying estate real property.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <strong className="text-brand-dark">Accept the USA Home Buyers written offer.</strong> We can have a written offer ready before step 1. Once you have Letters, you accept the offer, sign the contract, and schedule closing at an Illinois title company. We work on your timeline.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <strong className="text-brand-dark">Close and distribute to heirs.</strong> The title company coordinates the closing, pays off any estate debts from proceeds, and distributes the net balance to heirs per the will or Illinois intestacy law. The executor files a final accounting with the Sangamon County Probate Division to close the estate.
              </div>
            </li>
          </ol>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Inherited Property in Springfield IL" />

        <section className="my-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">Related Situations in Springfield IL</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/springfield-il/probate', label: 'Probate Sale' },
              { href: '/markets/springfield-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/springfield-il/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/springfield-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/springfield-il/code-violations', label: 'Code Violations' },
              { href: '/markets/springfield-il/fire-damage', label: 'Fire Damage' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Seller Guide' },
              { href: '/markets/springfield-il', label: '← Back to Springfield IL' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Springfield IL Property?" sourcePage="/markets/springfield-il/inherited-property" />
      </div>
    </>
  );
}
