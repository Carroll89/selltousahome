/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/probate`;

export const metadata: Metadata = {
  title: 'Sell House in Probate Champaign-Urbana IL',
  description:
    'Selling a house in probate in Champaign or Urbana IL? Champaign County Circuit Court Probate, 755 ILCS 5, 101 E. Main St. Urbana. Cash offer in 24 hours. 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Does every Illinois estate require probate to sell real estate?',
    answer: 'Yes. Under 755 ILCS 5 (the Illinois Probate Act of 1975), real property always requires formal probate regardless of the estate\'s total value. The small estate affidavit procedure under 755 ILCS 5/25-1 — threshold raised to $150,000 by 2025 amendment — covers only personal property (bank accounts, securities, household goods). A house in Champaign or Urbana valued at $50,000, $150,000, or $500,000 all require the same formal probate process at Champaign County Circuit Court.',
  },
  {
    question: 'Where do I file probate for a Champaign County property?',
    answer: 'Champaign County Circuit Court, Probate Division, 6th Judicial Circuit. The county seat is Urbana — all filings go to 101 E. Main Street, Urbana IL 61802, phone 217-384-3725. This is a common source of confusion because Champaign city is larger and better known, but Urbana has been the county seat since Champaign County was organized. The Circuit Clerk (not the City of Champaign) handles probate filings in Urbana.',
  },
  {
    question: 'How long does probate take in Champaign County?',
    answer: 'For an uncontested estate under independent administration (755 ILCS 5/28-1), typical Champaign County probate runs 6-12 months from filing to final distribution. The binding constraint is usually the 2.5-month creditor notice period (755 ILCS 5/18-3) — published notice to creditors; creditors have this period to file claims. After creditors are resolved, the executor can sell real estate and distribute proceeds relatively quickly. Contested estates or supervised administration cases can run 12 months to several years.',
  },
  {
    question: 'Can I receive a cash offer before probate is complete?',
    answer: 'Yes. We can issue a written cash offer at any point — before probate is filed, while it\'s pending, or once Letters of Office are issued. A purchase agreement contingent on the executor receiving Letters of Office is standard practice in Illinois. Having a committed buyer at a specific price often makes the probate process more straightforward and can provide a reference for court valuation purposes. Call (888) 440-5250.',
  },
  {
    question: 'What is the difference between a personal representative and an executor?',
    answer: 'In Illinois, "personal representative" is the formal term under 755 ILCS 5. An executor is a personal representative named in a will (testamentary executor). An administrator is a personal representative appointed by the court when someone dies without a will (intestate). Both receive Letters of Office from Champaign County Circuit Court and have the same authority to sell real estate under independent administration. The terms are sometimes used interchangeably in casual conversation.',
  },
  {
    question: 'What happens to tenant-occupied rental properties in a Champaign County probate?',
    answer: 'Rental properties owned by the decedent become estate assets and the estate becomes the landlord. Existing leases continue under their original terms — Illinois law does not permit lease termination based solely on the landlord\'s death. The executor must manage or delegate rental operations during the probate period. A cash buyer (USA Home Buyers) will purchase the property tenant-occupied, taking on the landlord role at closing. This often simplifies administration for estate attorneys managing Campustown or University District rental portfolios in probate.',
  },
];

export default function ChampaignUrbanaProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House in Probate in Champaign-Urbana IL — Complete Guide', pageUrl, '2026-04-18'),
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
            alt="Champaign-Urbana IL home — Sell in Probate Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › Probate Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Champaign-Urbana Probate Property — Cash Buyer, No Delays
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                All Champaign County probate filings go to Champaign County Circuit Court at 101 E. Main Street, Urbana IL 61802 — the county seat is Urbana, not Champaign. Under 755 ILCS 5, real property always requires formal probate. Per the 2025 amendment to 755 ILCS 5/25-1, small estate affidavits cover personal property up to $150,000 — not real estate. Written cash offer in 24 hours; we work with the estate timeline. Call (888) 440-5250.
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
              headline="Get Your Probate Property Cash Offer"
              subheadline="Written offer in 24 hours. We work with Champaign County estate timelines."
              sourcePage="/markets/champaign-urbana-il/probate"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Champaign County Probate — The Critical Detail: Urbana Is the County Seat</h2>
          <p className="text-gray-700 mb-4">
            The most important practical detail for anyone dealing with a Champaign County probate: the county seat is Urbana, not Champaign. All probate filings, court hearings, and related proceedings are handled at the Champaign County Circuit Court, 101 E. Main Street, Urbana IL 61802. The Circuit Clerk's phone is 217-384-3725. Deed recording after the sale goes to the Champaign County Recorder, 1776 E. Washington Street, Urbana IL 61802, phone 217-384-3774.
          </p>
          <p className="text-gray-700 mb-4">
            This surprises many out-of-state heirs who assume court proceedings are in "Champaign" and look for the courthouse in Champaign city. The correct address has been 101 E. Main Street in Urbana since Champaign County was organized in the 19th century. Getting this right the first time avoids wasted trips and filing delays.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate — Governing Statute and Process</h2>
          <p className="text-gray-700 mb-4">
            Illinois probate is governed by the Illinois Probate Act of 1975, codified at 755 ILCS 5. This statute covers the entire process from petition to final distribution. Key provisions relevant to selling real estate in probate:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">755 ILCS 5/25-1 — Small Estate Affidavit (What It Doesn't Cover)</h3>
          <p className="text-gray-700 mb-4">
            The small estate affidavit allows heirs to transfer personal property — financial accounts, household goods, vehicles — without formal probate when total personal property value is $150,000 or less. The 2025 amendment raised this threshold from $100,000. However, real estate is explicitly excluded from this procedure. A house in Champaign or Urbana requires formal probate regardless of its value and regardless of the rest of the estate's size. This is not a gray area — it is a clear statutory rule.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">755 ILCS 5/28-1 — Independent Administration</h3>
          <p className="text-gray-700 mb-4">
            Independent administration allows the personal representative (executor or administrator) to manage and liquidate estate assets without obtaining court approval for each transaction. The executor can sell the home, negotiate contracts, accept offers, and execute deeds without returning to court for a specific sale order. This is a critical distinction from supervised administration, which requires court approval for property sales.
          </p>
          <p className="text-gray-700 mb-4">
            According to Illinois Legal Aid Online (illinoislegalaid.org), most uncontested Illinois estates proceed under independent administration. If you're setting up a new estate in Champaign County, specifically requesting independent administration in the petition (unless your attorney advises otherwise) significantly speeds the real estate sale timeline.
          </p>
          <p className="text-gray-700 mb-4">
            Per Illinois (755 ILCS 5/28-1), independent administration allows the personal representative to manage and sell estate assets without individual court approval orders — the executor can accept an offer, negotiate price, and execute a deed without returning to Champaign County Circuit Court for each transaction.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">755 ILCS 5/18-3 — Creditor Notice Period</h3>
          <p className="text-gray-700 mb-4">
            After the court issues Letters of Office, the executor must publish a notice to creditors in a newspaper of general circulation in Champaign County. Creditors have 2.5 months from the date of first publication to file claims against the estate. This is a statutory waiting period that cannot be waived.
          </p>
          <p className="text-gray-700 mb-4">
            From a practical standpoint: the creditor notice period is usually the single largest constraint on selling estate real estate quickly. The executor can sign a purchase agreement and accept an offer during this period — closing can be scheduled for any time after the 2.5-month window closes and creditor claims are resolved. Having a committed buyer at a locked price eliminates uncertainty during the waiting period.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Letters of Office — Required to Deed the Property</h3>
          <p className="text-gray-700 mb-4">
            Letters of Office (formerly Letters Testamentary when named in a will, Letters of Administration when not) is the court document that grants the personal representative legal authority to act on behalf of the estate. Without Letters of Office, the executor cannot sign a deed conveying title. The title company will require certified copies of Letters of Office before closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The UIUC Faculty Estate Pattern in Champaign County Probate</h2>
          <p className="text-gray-700 mb-4">
            Champaign County has a distinctive probate profile tied directly to UIUC's employment history. Professors who joined the university in the 1960s, 1970s, and 1980s bought homes in what are now the established neighborhoods of Old West Urbana, Southwest Champaign, and Lincolnshire. Forty years of academic employment — and modest but steady appreciation from $60,000 to $180,000-$280,000 — has created a significant estate-sale cohort.
          </p>
          <p className="text-gray-700 mb-4">
            What makes these estates distinctive: heirs who were raised in Champaign-Urbana but have since dispersed nationally and internationally. Former UIUC graduate students who became faculty at Stanford, MIT, or the University of Tokyo. Faculty children who pursued their own careers in Chicago, New York, or abroad. The heirs know the Alma Mater statue and the smell of October football games, but they haven't lived in Champaign in 20 years and have no desire to manage a rental from 1,500 miles away.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers is set up to work with exactly this profile: remote executors, estate attorneys managing the process locally, and heirs who want a clean, documented transaction that closes on a predictable date. We can participate in estate planning discussions, provide a written offer as a reference value, and structure the purchase agreement around the probate timeline.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Champaign-Urbana Probate Sale — Practical Timeline</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Typical Timing</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Call USA Home Buyers</td><td className="p-3">Any time</td><td className="p-3">Written offer within 24 hours — before or during probate</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">File petition at Champaign County Circuit Court</td><td className="p-3">As soon as practical after death</td><td className="p-3">101 E. Main St., Urbana IL 61802</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Court issues Letters of Office</td><td className="p-3">2-6 weeks from filing</td><td className="p-3">Uncontested; independent admin</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Publish creditor notice</td><td className="p-3">After Letters issued</td><td className="p-3">2.5-month clock begins (755 ILCS 5/18-3)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sign purchase agreement</td><td className="p-3">Any time after Letters issued</td><td className="p-3">Contingent on clear title; closing date post-creditor period</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Creditor notice period expires</td><td className="p-3">~Month 3-4 from filing</td><td className="p-3">Creditor claims resolved; clear to close</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Close sale</td><td className="p-3">Month 3-6 from filing</td><td className="p-3">At Champaign County title company; executor executes deed</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Record deed</td><td className="p-3">At closing</td><td className="p-3">Champaign County Recorder, 1776 E. Washington St., Urbana</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Happens When Heirs Disagree About Selling?</h2>
          <p className="text-gray-700 mb-4">
            When an estate has multiple heirs and they can't agree on whether to sell or what price to accept, the personal representative (executor or administrator) generally has the authority to sell under independent administration without getting each heir's consent on every transaction — provided the estate is authorized for independent administration under 755 ILCS 5/28-1.
          </p>
          <p className="text-gray-700 mb-4">
            If heirs are engaged in formal dispute about the estate, the Champaign County Circuit Court supervises the matter. A dissenting heir can file a citation or objection, which may require a court hearing. In contested estates, the judge may order a formal appraisal and set a minimum acceptable sale price. USA Home Buyers works with contested estate sales — our written offer can serve as evidence of market value in Champaign County Circuit Court proceedings if needed.
          </p>
          <p className="text-gray-700 mb-4">
            Partition actions — where co-owners of real property petition the court to divide or order a sale — are available under Illinois law when heirs who inherit as tenants-in-common cannot agree on disposition. A partition sale is court-ordered and supervised, usually slower than a negotiated sale, but it resolves the impasse definitively.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">PTAX-203 — The Illinois Real Estate Transfer Declaration</h2>
          <p className="text-gray-700 mb-4">
            At every Illinois real estate closing, the buyer and seller jointly complete Form PTAX-203, the Illinois Real Estate Transfer Declaration. This form is submitted to the county recorder at the time of deed recording. For Champaign County, that means the Champaign County Recorder at 1776 E. Washington Street, Urbana IL 61802 (phone 217-384-3774).
          </p>
          <p className="text-gray-700 mb-4">
            The PTAX-203 captures the sale price, the relationship between buyer and seller (arm's-length vs. non-arm's-length), and other transaction characteristics used to calculate transfer tax and property assessment records. Estate sales (executor selling to an unrelated buyer) are typically arm's-length transactions and reported as such. If heirs are buying out other heirs, that is a non-arm's-length transaction and reported differently.
          </p>
          <p className="text-gray-700 mb-4">
            Illinois now offers electronic PTAX-203 filing via the MyDec system (mytax.illinois.gov), which many Champaign County title companies use routinely. The title company typically completes and files the PTAX-203 on behalf of both parties at closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Lead Paint, Radon, and the Inherited Property Disclosure</h2>
          <p className="text-gray-700 mb-4">
            Inherited properties in Champaign-Urbana — particularly those in Old West Urbana, the University District, and Crystal Lake Park built before 1978 — have specific disclosure obligations that new executors sometimes overlook.
          </p>
          <p className="text-gray-700 mb-4">
            Under federal law (42 U.S.C. §4852d, implemented by 40 CFR Part 745), sellers of pre-1978 homes must disclose any known information about lead-based paint and provide a specific Lead Disclosure form. The seller must also provide the EPA pamphlet "Protect Your Family From Lead in Your Home." This applies to estate sales as well as conventional sales. For estate executors who inherited a pre-1978 home and have limited knowledge of its condition, the disclosure form can reflect that limited knowledge — but the form must still be completed and delivered.
          </p>
          <p className="text-gray-700 mb-4">
            Champaign County is in a moderate radon risk zone. Radon testing disclosure is standard practice in C-U transactions. The executor does not have to test the property — they can disclose that no test was performed and sell as-is. Buyers (including cash buyers) accept the property understanding no test was conducted.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Champaign County Probate Sales" />

        <CashOfferForm variant="footer" headline="Ready to Sell Your Champaign-Urbana Probate Property?" sourcePage="/markets/champaign-urbana-il/probate" />
      </div>
    </>
  );
}
