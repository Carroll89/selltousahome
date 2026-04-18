/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Rockford IL',
  description:
    'Selling a Rockford IL home through Winnebago County probate? We work with the 17th Judicial Circuit timeline. Written offer in 24 hours. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does probate work in Winnebago County IL?',
    answer: 'Winnebago County probate is handled by the Winnebago County Circuit Court, Probate Division - 17th Judicial Circuit, 400 West State Street, Rockford IL 61101, phone 815-319-4500. Probate cases are filed under case category "PR" (since January 1, 2022). E-filing is mandatory via efile.illinoiscourts.gov. The personal representative receives Letters of Office (Letters Testamentary if there\'s a will, Letters of Administration for intestate estates), which authorize them to manage and sell estate assets including real property.',
  },
  {
    question: 'How long does probate take in Winnebago County?',
    answer: 'Under independent administration (755 ILCS 5/28-1), an uncontested estate typically takes 6-9 months from opening to final order. Under supervised administration, the timeline extends to 12-18+ months because each significant action - including a property sale - requires separate court approval. Contested estates can extend well beyond those ranges. USA Home Buyers can have a written offer ready before the estate is opened, so you can close the property quickly once Letters of Office are issued.',
  },
  {
    question: 'Can an executor sell a Rockford property without court approval?',
    answer: 'Under independent administration (755 ILCS 5/28-1 et seq.), yes - the executor has broad authority to sell estate real property without seeking court approval on each transaction. This is the fastest path. Under supervised administration, each sale requires a petition and court hearing. The difference between the two paths is significant for a seller who wants to close quickly. Most uncomplicated estates can elect independent administration at opening.',
  },
  {
    question: 'What happens to title when an estate property is sold in Illinois?',
    answer: 'The executor or administrator conveys title by executor\'s deed (or administrator\'s deed), signed in their representative capacity and supported by their Letters of Office. The title company performs a title search to confirm the chain of title, identify any outstanding liens, and issue title insurance to the buyer. Illinois title companies handle this routinely. The deed must be recorded with the Winnebago County Recorder - Lori Gummow, 404 Elm Street Room 104, Rockford IL 61101, 815-319-4250.',
  },
  {
    question: 'What if the Rockford probate property has outstanding liens?',
    answer: 'Outstanding liens - mortgages, tax liens, mechanic\'s liens - are typically satisfied from the sale proceeds at closing. The title company coordinates payoffs as part of the closing statement. If the liens exceed the sale proceeds, the estate may be insolvent, which requires a different legal approach. We\'ve worked through lien-heavy estate sales in Rockford before; call 888-440-5250 to discuss the specific situation.',
  },
  {
    question: 'Do I need an attorney to sell an estate property in Rockford IL?',
    answer: 'While Illinois doesn\'t require an attorney for residential sales generally, probate involves court proceedings where legal representation is strongly advisable. The Circuit Clerk\'s Office at Winnebago County cannot provide legal advice per 705 ILCS 110/1. Most Rockford probate attorneys have established relationships with title companies and can coordinate the property sale efficiently. We work directly with probate attorneys when that\'s the arrangement - providing our written offer to the attorney to include in estate planning.',
  },
];

export default function RockfordProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Home Through Probate in Rockford IL - Winnebago County 17th Judicial Circuit Guide', pageUrl, '2026-04-18'),
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
            alt="Rockford IL home - Probate Sale - Sell Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › Probate Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Rockford IL Home Through Probate
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Winnebago County probate for Rockford IL real estate runs through the 17th Judicial Circuit - 400 West State Street, 815-319-4500. Under independent administration (755 ILCS 5/28-1), the executor can sell without court approval on each transaction. USA Home Buyers has a written offer ready before you file. No repairs. Close in 7 days after Letters issue. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We work with Winnebago County Circuit Court probate timelines - both independent and supervised administration. Written offer ready before you file.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now - 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Probate Property Cash Offer" subheadline="Written offer in 24 hours. We work around your probate timeline." sourcePage="/markets/rockford-il/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Winnebago County Circuit Court Probate Division - Essential Facts</h2>
          <p className="text-gray-700 mb-4">
            The Winnebago County Circuit Court Probate Division is the authority for all probate proceedings involving decedents who owned real property in Winnebago County at death. The court sits at 400 West State Street, Rockford IL 61101. General Circuit Clerk phone: 815-319-4500. Probate Division website: circuitclerk.wincoil.gov/civil-information/probate/probate/. The 17th Judicial Circuit covers Winnebago and Boone counties.
          </p>
          <p className="text-gray-700 mb-4">
            Probate cases are filed under case category "PR" (effective January 1, 2022 - previously filed as "P"). Guardianship cases use "GR." E-filing is mandatory via Illinois eCourts (efile.illinoiscourts.gov). Rockford probate attorneys who practice regularly in the 17th Circuit have established workflows and know the local judges and staff - local representation matters in Winnebago County probate proceedings.
          </p>
          <p className="text-gray-700 mb-4">
            A law library is available on the 3rd floor of the Winnebago County Courthouse, 400 West State Street, for self-represented filers. Court forms are available at cc.co.winnebago.il.us/court-forms-winnebagocounty. However, the Circuit Clerk's Office cannot provide legal advice under 705 ILCS 110/1 - self-represented filers handle the procedural steps, not the legal strategy.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate - Independent vs. Supervised Administration</h2>
          <p className="text-gray-700 mb-4">
            The single most important decision in any Illinois probate proceeding affecting real property is whether to pursue independent or supervised administration. The difference in timeline and flexibility is substantial.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Independent Administration (755 ILCS 5/28-1 et seq.)</h3>
          <p className="text-gray-700 mb-4">
            Under independent administration, the executor or administrator has authority to manage and sell estate assets - including real property - without seeking court approval for each individual transaction. The personal representative can list the estate property (or accept a cash offer), sign a purchase contract, and close without petitioning the court for authorization. Court involvement is limited to the initial proceeding (opening the estate and appointing the representative), the final accounting, and any situations where an interested party objects to an estate action.
          </p>
          <p className="text-gray-700 mb-4">
            For a Rockford property sale, independent administration means: once Letters of Office are issued, the executor can proceed to closing within 7-14 days. The total uncontested timeline from opening the estate to final closing: 6-9 months, with the property sale occurring whenever within that period the parties choose to execute.
          </p>
          <p className="text-gray-700 mb-4">
            To elect independent administration, the executor or administrator files a petition at the time the estate is opened. If no interested party objects within 30 days, the court grants the election. An experienced Illinois probate attorney typically includes the independent administration election as a routine part of opening any uncontested estate.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Supervised Administration</h3>
          <p className="text-gray-700 mb-4">
            Under supervised administration, every significant estate action requires prior court approval via petition and hearing. For a real property sale, that means petitioning the court, waiting for a hearing date, presenting the proposed sale, getting court approval, and then proceeding to closing. In Winnebago County, this process can add 4-8 weeks per transaction on top of the underlying closing timeline.
          </p>
          <p className="text-gray-700 mb-4">
            Supervised administration is appropriate when the estate is complex, when there are creditor disputes, when beneficiaries are in conflict, or when the court determines supervision is warranted. For straightforward Rockford estate sales - a bungalow, a ranch, a modest Midwest home - supervised administration is generally avoidable.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Factor</th>
                  <th className="text-left p-3">Independent Admin</th>
                  <th className="text-left p-3">Supervised Admin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Typical total timeline</td><td className="p-3">6-9 months</td><td className="p-3">12-18+ months</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Court approval per property sale</td><td className="p-3">Not required</td><td className="p-3">Required - petition + hearing</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Executor's flexibility</td><td className="p-3">High - broad authority</td><td className="p-3">Limited - each action needs court OK</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Best for</td><td className="p-3">Uncontested estates, cooperative beneficiaries</td><td className="p-3">Complex estates, beneficiary disputes, creditor conflicts</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Election process</td><td className="p-3">File at time of opening estate; 30-day objection window</td><td className="p-3">Default if no election made, or if court orders it</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Title Transfer - How a Probate Sale Moves Title in Illinois</h2>
          <p className="text-gray-700 mb-4">
            When an estate property sells in Illinois, title transfers via an executor's deed (when a will exists) or an administrator's deed (intestate estate). The deed is signed by the personal representative in their representative capacity - "John Smith, Executor of the Estate of [Decedent], deceased" - rather than as an individual. The deed must be supported by the Letters of Office attached or referenced, confirming the signer's authority.
          </p>
          <p className="text-gray-700 mb-4">
            The title company performs a complete chain-of-title search, including a probate search to confirm that the court has issued proper authority and that no other claims exist against the property. They issue a title insurance commitment insuring both lender (if any) and buyer. For a cash buyer like USA Home Buyers, the closing process is straightforward: the title company confirms Letters of Office, prepares the executor's deed, handles the closing statement, and records the deed with Winnebago County Recorder Lori Gummow, 404 Elm Street Room 104, Rockford IL 61101, phone 815-319-4250.
          </p>
          <p className="text-gray-700 mb-4">
            Recording fees at the Winnebago County Recorder: $54.00 for standard documents meeting formatting requirements (8.5×11", black ink, white paper, 3"×5" blank space in upper right corner of first page) under Public Act 103-0884 (effective January 1, 2025). Non-standard documents: $66.00.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Real Property vs. Personal Property - The Illinois Probate Distinction</h2>
          <p className="text-gray-700 mb-4">
            Illinois distinguishes sharply between personal property and real property in probate proceedings. The small estate affidavit procedure under 755 ILCS 5/25-1 - which allows heirs to collect personal property without opening formal probate when the total is $150,000 or less (as amended in 2025) - applies exclusively to personal property. Real estate is completely outside this procedure.
          </p>
          <p className="text-gray-700 mb-4">
            This means: even if a Rockford decedent owned an $85,000 Signal Hill ranch and nothing else, that property requires formal probate at Winnebago County Circuit Court. The $150,000 small estate threshold is irrelevant to the real estate determination. There is no value threshold below which Illinois real property avoids formal probate - the statutory rule is categorical.
          </p>
          <p className="text-gray-700 mb-4">
            The practical consequence for families inheriting Rockford properties: the probate process is unavoidable, and planning around it - by electing independent administration and having a cash offer ready - is the fastest path to converting the inherited property to cash and closing the estate.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Working With USA Home Buyers During Rockford Probate</h2>
          <p className="text-gray-700 mb-4">
            We've worked with dozens of estate situations across Illinois. Our process with probate situations:
          </p>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <div><strong className="text-brand-dark">Call or submit the form.</strong> Tell us the property address, condition, and where you are in probate (pre-filing, Letters issued, in process). We send a written cash offer within 24 hours - no inspection required.</div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <div><strong className="text-brand-dark">Accept the offer contingent on Letters of Office.</strong> If Letters haven't been issued yet, we write the contract with a contingency: the sale is subject to the executor receiving Letters from Winnebago County Circuit Court. This gives both parties certainty - price and terms are locked in advance.</div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <div><strong className="text-brand-dark">Probate attorney coordinates with title company.</strong> Our preferred title company in the Rockford area handles the probate title search, executor's deed preparation, and closing statement. The probate attorney reviews and approves the closing package.</div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <div><strong className="text-brand-dark">Close once Letters are in hand.</strong> 7-14 days from the date Letters of Office are issued. The estate receives the net proceeds, distributed to heirs per will or intestacy. The executor files a final accounting to close the estate.</div>
            </li>
          </ol>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford Probate Properties - Common Housing Situations</h2>
          <p className="text-gray-700 mb-4">
            The Rockford probate property pipeline is shaped by the city's demographics. Median age 37.7 years (ACS 2024), but the homeowner demographic skews older - union retirees and long-tenured manufacturing workers who bought homes in the 1950s-1970s and have aged in place. The homes they're leaving behind are predominantly pre-1970 construction in working-class and lower-middle-class neighborhoods.
          </p>
          <p className="text-gray-700 mb-4">
            According to Zillow (2026), Signal Hill ranches and Jackson Oaks post-war homes have ZHVI indexes of $83,000-$86,000, making them the most common probate property type in Rockford. These properties have been maintained with progressively less investment as the original owners aged, and the deferred maintenance is significant - sometimes exceeding the property's market value. For estate administrators whose beneficiaries live outside Rockford and have no interest in renovating a 70-year-old ranch, a direct cash sale is the obvious path.
          </p>
          <p className="text-gray-700 mb-4">
            Churchill Grove craftsmans and Haight Historic District Victorians represent a higher-value segment of the probate pipeline, where renovation upside exists but heirs don't have the capital or the timeline to capture it. Per Zillow (2026), the $157,396 Churchill Grove ZHVI represents genuine value, but getting to that value requires investment and time that most out-of-state heirs can’t provide. A direct sale to USA Home Buyers captures market value quickly without the renovation risk.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs - Probate Sale in Rockford IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/rockford-il', label: '← Back to Rockford IL' },
              { href: '/markets/rockford-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/rockford-il/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/rockford-il/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/rockford-il/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Seller Guide' },
              { href: '/markets/springfield-il/probate', label: 'Springfield IL Probate' },
              { href: '/markets/rockford-il/faq', label: 'Rockford IL FAQ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Rockford IL Probate Property?" sourcePage="/markets/rockford-il/probate" />
      </div>
    </>
  );
}
