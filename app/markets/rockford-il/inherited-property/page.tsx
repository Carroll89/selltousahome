/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Rockford IL',
  description:
    'Inherited a house in Rockford IL? We buy inherited properties as-is through Winnebago County Circuit Court Probate. Written offer in 24 hours. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does inheriting a house work in Winnebago County IL?',
    answer: 'When someone dies owning real estate in Winnebago County, the property must go through the Winnebago County Circuit Court - Probate Division, 17th Judicial Circuit, located at 400 West State Street, Rockford IL 61101, phone 815-319-4500. The court issues Letters of Office (Letters Testamentary or Letters of Administration) giving the executor or administrator authority to deed the property. Unlike a small estate affidavit - which applies only to personal property under 755 ILCS 5/25-1 - real property in Illinois always requires formal probate regardless of the estate\'s total value.',
  },
  {
    question: 'Can I sell an inherited Rockford house before probate is complete?',
    answer: 'You can sign a purchase agreement contingent on the executor receiving Letters of Office. This is common practice in Winnebago County and lets you lock in a buyer and price now, closing quickly once the court grants authority. Under independent administration (755 ILCS 5/28-1 et seq.), the executor can sell real property without seeking additional court approval on each transaction - significantly faster than supervised administration. We can draft a written contract today and adjust the closing date as probate progresses.',
  },
  {
    question: 'What is the Illinois small estate affidavit and does it cover real property?',
    answer: 'The Illinois small estate affidavit under 755 ILCS 5/25-1 allows heirs to collect personal property (bank accounts, securities, personal effects) without going through formal probate when the total personal property value is $150,000 or less. The 2025 amendment raised this threshold from $100,000 to $150,000. However, real property - houses, land, condos - is completely excluded from this procedure regardless of estate size. If the decedent owned real estate in Rockford, formal probate at Winnebago County Circuit Court is required to establish authority to convey title.',
  },
  {
    question: 'Do I need to make repairs on an inherited Rockford property?',
    answer: 'No. Many inherited properties in Rockford are older homes with decades of deferred maintenance. Churchill Grove craftsmans with original 1920s construction, Signal Hill ranches with galvanized plumbing, Midtown two-flats with knob-and-tube wiring, Haight Historic District Victorians with aging structural systems - we buy all of it as-is. Leave belongings behind. We handle the cleanout after closing.',
  },
  {
    question: 'What are the tax implications of selling an inherited house in Illinois?',
    answer: 'Inherited property receives a stepped-up cost basis to fair market value at the date of death under IRC § 1014. That generally eliminates or dramatically reduces capital gains tax on a near-term sale. Illinois does not impose a state estate tax or inheritance tax. Transfer tax at closing: state $0.50/$500 + Winnebago County $0.25/$500 = $0.75/$500 combined, seller pays. When you sell to USA Home Buyers, we cover all closing costs. Consult a CPA for your specific federal and state tax situation.',
  },
  {
    question: 'What if there are multiple heirs on the Rockford inherited property?',
    answer: 'All heirs with an ownership interest must agree to the sale and sign the deed - or the executor must have Letters of Office authorizing the sale. If heirs can\'t agree, a partition action can be filed in Winnebago County Circuit Court under Illinois law. We\'ve worked through multi-heir transactions before. A single written cash offer often resolves the impasse because every heir sees the same specific number without the negotiation complexity of a retail listing. Call 888-274-5006 to discuss your situation.',
  },
];

export default function RockfordInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling an Inherited House in Rockford IL - Winnebago County Probate Guide', pageUrl, '2026-04-18'),
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
            alt="Rockford IL home - Sell Inherited Property Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Inherited Rockford IL House - Fast, As-Is
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases inherited properties in Rockford IL through Winnebago County Circuit Court Probate Division - 400 West State Street, 815-319-4500. Written cash offer in 24 hours, close after the executor receives Letters of Office. Real property always requires formal probate in Illinois - the small estate affidavit covers personal property only. Any condition, no repairs. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Inherited a property through Winnebago County Circuit Court Probate Division? We buy inherited houses in any condition and work around Illinois probate timelines.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now - 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="We work with estates and probate timelines. Written offer in 24 hours." sourcePage="/markets/rockford-il/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Winnebago County Circuit Court - Probate Division - What You Need to Know</h2>
          <p className="text-gray-700 mb-4">
            The probate court for Winnebago County is the Winnebago County Circuit Court, Probate Division - part of Illinois's 17th Judicial Circuit. The court is located at 400 West State Street, Rockford IL 61101. General Circuit Clerk phone: 815-319-4500. Probate Division URL: circuitclerk.wincoil.gov/civil-information/probate/probate/. The 17th Judicial Circuit covers Winnebago and Boone counties, with Rockford serving as the circuit seat.
          </p>
          <p className="text-gray-700 mb-4">
            This court handles all probate proceedings for decedents who owned real property in Winnebago County. Whether the home was a Craftsman bungalow in Churchill Grove, a working-class ranch in Signal Hill or Jackson Oaks, a Victorian in the Haight Historic District, or a mid-century home in Northeast Rockford - the path to conveying title runs through 400 West State Street. Once the personal representative receives Letters of Office from the court, they have authority to sell and deed the property.
          </p>
          <p className="text-gray-700 mb-4">
            Probate cases in Winnebago County are filed under case category "PR" (as of January 1, 2022 - previously "P"). E-filing is mandatory via efile.illinoiscourts.gov. A law library is available on the 3rd floor of the Winnebago County Courthouse for self-represented filers, though the Clerk's Office cannot provide legal advice per 705 ILCS 110/1. For most estate situations, retaining an Illinois probate attorney is the right call.
          </p>
          <p className="text-gray-700 mb-4">
            We regularly work with estates throughout Winnebago County. We can have a written offer in place before you even file the probate petition - so the moment Letters are issued, you're ready to close. Illinois title companies can handle the Rockford closing in 7-14 days from authorization.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate Law - The Key Rules for Inherited Real Estate</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Rule #1: Real Property Always Requires Formal Probate</h3>
          <p className="text-gray-700 mb-4">
            The most important thing to understand about Illinois inheritance: the small estate affidavit under 755 ILCS 5/25-1 - even after the 2025 amendment raising the threshold to $150,000 - applies only to personal property. Bank accounts, investment accounts, vehicles (with separate title procedures), personal effects. Real estate, regardless of its value, is excluded entirely. If the decedent owned an $83,000 Signal Hill ranch, formal probate is required. If the estate's total personal property is $50,000 but includes one parcel of real estate, formal probate is required for the land.
          </p>
          <p className="text-gray-700 mb-4">
            There's no shortcut around this under Illinois law. Joint tenancy with right of survivorship or a living trust can pass property outside probate - but if the property was solely in the decedent's name at death, the Winnebago County Circuit Court must be involved before title can transfer.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Rule #2: Independent Administration Speeds the Process</h3>
          <p className="text-gray-700 mb-4">
            Illinois probate offers two paths: supervised administration and independent administration. Under supervised administration, every significant estate action - including selling real property - requires prior court approval on each transaction. That adds weeks, sometimes months, to each step. Under independent administration (755 ILCS 5/28-1 et seq.), the executor has broad authority to manage and sell estate assets, including real property, without seeking court approval for each deal. Court involvement is limited to the final accounting or when an interested party objects.
          </p>
          <p className="text-gray-700 mb-4">
            For heirs wanting to sell an inherited Rockford property quickly, independent administration is the right path when the estate is uncontested. An experienced Illinois probate attorney can file for independent administration simultaneously with opening the estate. The typical uncontested timeline under independent administration is 6-9 months from filing to final order - significantly faster than supervised administration at 12-18+ months.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Rule #3: The $150,000 Small Estate Threshold (Personal Property Only)</h3>
          <p className="text-gray-700 mb-4">
            The 2025 amendment to 755 ILCS 5/25-1(a-5)(2)(A) raised Illinois's small estate affidavit threshold from $100,000 to $150,000. This allows heirs to collect personal property without opening a formal probate estate, as long as total personal property doesn't exceed $150,000 and no letters of office have been issued. There's no court filing involved - the affiant prepares the affidavit, pays valid claims, and distributes to heirs.
          </p>
          <p className="text-gray-700 mb-4">
            But again: this has no application to real estate. A Rockford house, condo, or parcel of land cannot transfer via small estate affidavit. This is a hard statutory rule under Illinois law, not a judgment call. If you're dealing with an inherited property in Winnebago County, formal probate at 400 West State Street is the only path.
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
                <tr className="bg-white"><td className="p-3 font-medium">Independent Administration (755 ILCS 5/28-1)</td><td className="p-3">6-9 months (uncontested)</td><td className="p-3">No - executor has authority</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Supervised Administration</td><td className="p-3">12-18 months (uncontested)</td><td className="p-3">Yes - petition required for each sale</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Contested Estate</td><td className="p-3">18-36+ months</td><td className="p-3">Yes - and contested at each step</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Small Estate Affidavit (755 ILCS 5/25-1)</td><td className="p-3">Days (no court filing)</td><td className="p-3">N/A - personal property only; real estate excluded</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford's Inherited Housing Stock - What We See Most Often</h2>
          <p className="text-gray-700 mb-4">
            Rockford's Rust Belt history means a substantial share of its housing stock was built in the early-to-mid 20th century by manufacturing workers and union families who have since passed it down to children and grandchildren. The result is one of the most concentrated inherited-property pipelines of any mid-sized Midwest city.
          </p>
          <p className="text-gray-700 mb-4">
            Churchill Grove, northwest of downtown, is one of the most consistent sources of estate-sale properties. The neighborhood's pre-war craftsman bungalows and brick colonials - built primarily between 1910 and 1940 - represent Rockford's post-industrial prosperity at its peak. According to Zillow (2026), Churchill Grove’s ZHVI stands at $157,396, reflecting both the quality of the housing stock and the deferred maintenance that accumulated over decades of aging-in-place ownership. Original knob-and-tube wiring and galvanized plumbing are the rule, not the exception. These homes often don't qualify for conventional or FHA financing without significant remediation work.
          </p>
          <p className="text-gray-700 mb-4">
            Midtown, along the Rock River corridor near downtown Rockford, is another consistent inherited-property zone. Pre-war bungalows and two-flats built between 1900 and 1940 dominate the neighborhood. Per Redfin (February 2026), Midtown’s 38.8% year-over-year appreciation reflects genuine demand - but distressed examples with deferred maintenance still need a cash buyer who won't require condition remediation. The Redfin ZHVI for Midtown sits at $106,000.
          </p>
          <p className="text-gray-700 mb-4">
            Signal Hill and Jackson Oaks on the south and southwest sides produce estate sales at lower price points. ZHVI indexes of $85,792 (Signal Hill) and $83,093 (Jackson Oaks) mean cash buyers are frequently the only realistic buyer for these homes. Post-war ranches and modest SFRs from the 1950s-1970s, many with deferred maintenance accumulated over decades - these properties are where the inherited-home pipeline is most active.
          </p>
          <p className="text-gray-700 mb-4">
            The Haight Village Historic District produces a more complex situation. Victorian and Queen Anne homes dating to the 1840s-1890s occupy this district - the oldest residential neighborhood in Rockford, listed in the National Register of Historic Places. Values range from $75,000 for deteriorated examples to $300,000+ for restored showpieces. Historic designation creates additional considerations for rehabilitation; selling as-is to a cash buyer often makes more financial sense for an estate than attempting a restoration of a property the heirs have no intention of occupying.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax and Closing Costs on a Rockford Inherited Property Sale</h2>
          <p className="text-gray-700 mb-4">
            Illinois charges a state real estate transfer tax of $0.50 per $500 of consideration under 35 ILCS 200/31-10. Winnebago County adds $0.25 per $500 under 55 ILCS 5/5-1031. Combined: $0.75 per $500 (0.15% of sale price), paid by the seller. The City of Rockford does not impose a municipal real estate transfer tax (confirmed: no ATG directory entry, no Rockford Municode RETT chapter). Illinois MyDec (Real Estate Transfer Declaration) filing is required at mytax.illinois.gov at the time of recording - no separate fee. Winnebago County Recorder Lori Gummow, 404 Elm Street Room 104, Rockford IL 61101, phone 815-319-4250.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Sale Price</th>
                  <th className="text-left p-3">IL State Tax</th>
                  <th className="text-left p-3">Winnebago Co. Tax</th>
                  <th className="text-left p-3">Total Transfer Tax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">$83,093 (Jackson Oaks ZHVI)</td><td className="p-3">$83.09</td><td className="p-3">$41.55</td><td className="p-3 font-medium">$124.64</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$85,792 (Signal Hill ZHVI)</td><td className="p-3">$85.79</td><td className="p-3">$42.90</td><td className="p-3 font-medium">$128.69</td></tr>
                <tr className="bg-white"><td className="p-3">$142,859 (ZHVI avg)</td><td className="p-3">$142.86</td><td className="p-3">$71.43</td><td className="p-3 font-medium">$214.29</td></tr>
                <tr className="bg-gray-50"><td className="p-3">$157,396 (Churchill Grove ZHVI)</td><td className="p-3">$157.40</td><td className="p-3">$78.70</td><td className="p-3 font-medium">$236.09</td></tr>
                <tr className="bg-white"><td className="p-3">$170,000 (Redfin median)</td><td className="p-3">$170.00</td><td className="p-3">$85.00</td><td className="p-3 font-medium">$255.00</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, we cover all closing costs - transfer taxes, Winnebago County recording fees ($54 standard document per wincoil.gov Recorder's Office), title search, and settlement fees. The estate receives the net price we agree on with no deductions at closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Out-of-State Heirs - Managing a Rockford Property Remotely</h2>
          <p className="text-gray-700 mb-4">
            A significant share of inherited Rockford properties are managed by heirs who no longer live in the area. Manufacturing industry contraction over the past three decades sent many Rockford-area young adults to other Midwest cities for employment - Chicago, Milwaukee, Indianapolis, St. Louis - and when a parent passes and leaves behind a Signal Hill ranch or a Churchill Grove bungalow, the practical reality is that the heirs have neither the time nor the local presence to manage repairs, contractor coordination, and retail showings.
          </p>
          <p className="text-gray-700 mb-4">
            We handle the out-of-state heir situation routinely. The executor can sign closing documents via remote online notarization (Illinois allows this under the Illinois Electronic Commerce Security Act), or by making a single trip to Rockford for the closing appointment at the title company. There's no need to be physically present for repairs, showings, cleanouts, or contractor bids - we take the property in its current condition and manage everything post-closing.
          </p>
          <p className="text-gray-700 mb-4">
            If you're managing a Winnebago County estate from out of state, call 888-274-5006. We'll discuss the property, the probate stage you're at, and have a written offer ready before your next call with the probate attorney.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Manufacturing Legacy Properties - Rockford's Specific Inherited Home Profile</h2>
          <p className="text-gray-700 mb-4">
            Rockford's manufacturing heritage creates an inherited property profile that's distinct from Springfield or Chicago suburb estates. The typical Rockford inherited home isn't a recently maintained property that simply needs to be liquidated - it's a 70-90 year old bungalow or ranch that has been in the same family for generations, maintained with progressively less investment as the original owners aged, and now sits with deferred maintenance that accumulated over two or three decades of retirement income constraints.
          </p>
          <p className="text-gray-700 mb-4">
            Common conditions we buy in Rockford inherited properties: original knob-and-tube wiring (pre-1950 construction), galvanized plumbing from the 1940s-1960s, original single-pane windows, deteriorated roofing, unfinished or partially finished basements with moisture intrusion from Rock River alluvial soil, outdated HVAC systems, and cosmetic deferred maintenance throughout. These conditions don't disqualify a sale - they define the as-is price. We assess accurately and make a fair written offer.
          </p>
          <p className="text-gray-700 mb-4">
            Multi-generational ownership in Rockford manufacturing families also creates more complex title situations than typical inherited properties. Long-tenured marriages where both spouses are now deceased, properties that passed informally through a family without formal probate at the first death, and situations where the decedent's estate includes both Winnebago County property and assets in other states - all of these situations require careful title work at closing, which an experienced Illinois title company handles. We work with title companies who understand the Rockford market and the specific challenges of manufacturing-era estate properties.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Step-by-Step: Selling Inherited Rockford Real Estate Through Probate</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <strong className="text-brand-dark">Open probate at Winnebago County Circuit Court.</strong> File a petition for administration with the Probate Division, 400 West State Street, Rockford IL 61101. Attach the original will (if any) and a certified copy of the death certificate. E-filing is mandatory via efile.illinoiscourts.gov. Court forms available at cc.co.winnebago.il.us/court-forms-winnebagocounty.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <strong className="text-brand-dark">Request independent administration.</strong> Under 755 ILCS 5/28-1, petition for independent administration at the time the estate is opened. This gives the executor authority to sell real property without court approval on each transaction. If unopposed, the court typically grants this at the initial hearing. The practical effect is a 6-9 month total timeline instead of 12-18+ months under supervised administration.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <strong className="text-brand-dark">Receive Letters of Office.</strong> The court issues Letters Testamentary (if there's a will) or Letters of Administration (intestate). These authorize the executor or administrator to sign deeds and other instruments conveying estate real property in Rockford and Winnebago County.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <strong className="text-brand-dark">Accept the USA Home Buyers written offer.</strong> We can have a written offer ready before step 1. Once you have Letters, you accept, sign the contract, and schedule closing at an Illinois title company. We work on your timeline - 7 days from authorization is possible.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <strong className="text-brand-dark">Close and distribute to heirs.</strong> The title company coordinates closing, pays off any estate debts from proceeds, and distributes the net balance to heirs per the will or Illinois intestacy law. The executor files a final accounting with the Winnebago County Probate Division to close the estate.
              </div>
            </li>
          </ol>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs - Inherited Property in Rockford IL" />

        <section className="my-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800">Related Situations in Rockford IL</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/rockford-il/probate', label: 'Probate Sale' },
              { href: '/markets/rockford-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/rockford-il/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/rockford-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/rockford-il/code-violations', label: 'Code Violations' },
              { href: '/markets/rockford-il/fire-damage', label: 'Fire Damage' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Seller Guide' },
              { href: '/markets/springfield-il/inherited-property', label: 'Springfield IL Inherited' },
              { href: '/markets/rockford-il', label: '← Back to Rockford IL' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Rockford IL Property?" sourcePage="/markets/rockford-il/inherited-property" />
      </div>
    </>
  );
}
