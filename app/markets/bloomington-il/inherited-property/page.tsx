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

const pageUrl = `${SITE_URL}/markets/bloomington-il/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Bloomington IL',
  description:
    "Inherited a house in Bloomington IL? We buy inherited properties as-is through McLean County Circuit Court Probate. State Farm retiree estates welcome. Call 888-274-5006.",
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How does inheriting a house work in McLean County IL?',
    answer: "When someone dies owning real estate in McLean County, the property must pass through the McLean County Circuit Court, Civil/Probate Division — 104 W. Front Street, 4th Floor, Room 404, Bloomington IL 61701, phone (309) 888-5350. This is the 11th Judicial Circuit. The court issues Letters of Office (Letters Testamentary under a will or Letters of Administration for intestate estates) giving the executor or administrator legal authority to deed the property. Per 755 ILCS 5/25-1, the Illinois small estate affidavit applies only to personal property — real property in Illinois always requires formal probate regardless of the estate's total value, regardless of the 2025 amendment raising the personal-property threshold to $150,000.",
  },
  {
    question: 'Can I sell an inherited Bloomington house before probate is complete?',
    answer: "You can sign a purchase agreement contingent on the executor receiving Letters of Office. This is standard practice in McLean County and lets you lock in a buyer and price before the court grants authority. Under Illinois independent administration (755 ILCS 5/28-1 et seq.), the executor can sell real property without seeking additional court approval for each transaction — significantly faster than supervised administration. We can have a written cash offer ready today; you set the closing date once Letters of Office are issued. Call (888) 274-5006.",
  },
  {
    question: 'Does the 2025 Illinois small estate affidavit amendment help with real estate?',
    answer: "Not for real property. The 2025 amendment to 755 ILCS 5/25-1(a-5)(2)(A) raised the small estate affidavit threshold from $100,000 to $150,000. This helps heirs collect personal property — bank accounts, securities, personal effects — without formal probate when total personal property is $150,000 or less. But real estate is categorically excluded from the small estate affidavit procedure regardless of estate size or value. A Bloomington house worth $150,000 or $500,000 still requires formal probate at McLean County Circuit Court. Sources: Lavelle Law (February 2026), Black Black & Brown (September 2025) confirming the $150,000 threshold.",
  },
  {
    question: 'Do I need to make repairs on an inherited Bloomington IL property?',
    answer: "No. Many inherited Bloomington properties are older homes with deferred maintenance accumulated over decades. Founders' Grove Victorians with original 1880s-1920s construction, West Bloomington pre-war homes with outdated electrical and plumbing, mid-century ranches in Holiday Knolls with aging HVAC, ISU-area rental properties with tenant wear — we buy all of it as-is. Leave belongings behind. We handle the cleanout after closing. You never need to touch a paintbrush.",
  },
  {
    question: 'What are the tax implications of selling an inherited Bloomington house?',
    answer: "Inherited property receives a stepped-up cost basis to fair market value at the date of death under IRC §1014. That generally eliminates or dramatically reduces capital gains tax on a near-term sale — particularly valuable in Bloomington, where State Farm retirees who bought homes in the 1970s for $40,000 may have properties now worth $200,000+. Illinois does not impose a state estate tax or inheritance tax. Transfer tax at closing: IL state $0.50/$500 + McLean County $0.25/$500 = $300 on a $200,000 sale. When you sell to USA Home Buyers, we cover all closing costs. Consult a CPA for your specific situation.",
  },
  {
    question: 'What if there are multiple heirs on the Bloomington inherited property?',
    answer: "All heirs with an ownership interest must agree to the sale and sign the deed, or the executor must have Letters of Office authorizing the sale. If heirs can't agree, a partition action can be filed in McLean County Circuit Court under Illinois law. Multi-heir coordination is one of the most common complications in Bloomington inherited-property sales — State Farm and Country Financial families frequently have adult children scattered across multiple states. A single written cash offer resolves the coordination challenge because every heir evaluates the same specific number. Call (888) 274-5006.",
  },
];

export default function BloomingtonInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema("Selling an Inherited House in Bloomington IL — McLean County Probate Guide", pageUrl, '2026-04-19'),
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
            alt="Bloomington IL inherited home — Sell Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
          </div>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Inherited Bloomington IL House — Fast, As-Is, Any Condition
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Sell an inherited Bloomington IL house as-is through McLean County Circuit Court probate. Illinois requires formal probate for all real property (755 ILCS 5) — the 2025 small-estate amendment ($150K threshold) covers personal property only. McLean County Probate: 104 W. Front St., Room 404, (309) 888-5350. Under independent administration (755 ILCS 5/28-1), an executor can sell without per-transaction court approval. Written cash offer in 24 hours. Call (888) 274-5006.
              </p>
            </div>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 (888) 274-5006 — 24/7
            </a>
          </div>

      <VideoEmbed
        src="/videos/bloomington-il/inherited-property.mp4"
        title="Sell Inherited House in Bloomington IL"
        poster="/videos/bloomington-il/inherited-property-poster.jpg"
        subtitle="We work with McLean County probate timelines — as-is, any condition"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Inherit a property in Bloomington or McLean County? USA Home Buyers specializes in estate sales and works with Illinois probate timelines. Buy as-is, any condition. Written cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
          <CashOfferForm
            variant="hero"
            headline="Get Your Inherited Property Cash Offer"
            subheadline="Written offer in 24 hours. We coordinate with McLean County probate timelines."
            sourcePage="/markets/bloomington-il/inherited-property"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Inherited Property in Bloomington IL — The State Farm Retiree Context</h2>
          <p className="text-gray-700 mb-4">
            Bloomington has a distinctive inherited-property landscape. State Farm Insurance has been headquartered in this city since 1922. Generations of employees who spent their careers at State Farm purchased homes in Bloomington's established neighborhoods — Founders' Grove Victorians, North Bloomington colonials, Holiday Knolls ranches — and stayed for decades. According to statefarm.com, State Farm is the largest mutual insurer in the United States; its Bloomington employment base, while reduced from its peak of 18,000+ McLean County employees, remains the dominant private employer in the region.
          </p>
          <p className="text-gray-700 mb-4">
            When these long-tenured homeowners pass, their adult children — who typically relocated for their own careers — inherit properties they've never lived in and may have visited infrequently for years. The estate of a State Farm employee who retired in 1990 and purchased a Founders' Grove home in 1974 might involve siblings in Chicago, Phoenix, and Atlanta who need to settle the estate without any of them managing a property from three states away.
          </p>
          <p className="text-gray-700 mb-4">
            Country Financial (Country Companies), also headquartered in Bloomington, creates a similar pattern. Illinois Wesleyan University faculty who spent decades in the city and Illinois State University staff who purchased homes near the Veterans Parkway corridor contribute to the same inheritance pipeline. The common thread: equity-rich properties owned outright or with minimal remaining mortgage, passed to beneficiaries who need a certain, quick transaction.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate Law — What Governs Your Inherited Bloomington Property</h2>
          <p className="text-gray-700 mb-4">
            Illinois probate is governed by the Illinois Probate Act of 1975, 755 ILCS 5 (Illinois Compiled Statutes). Every county's Circuit Court has probate jurisdiction. For McLean County properties, that means the McLean County Circuit Court, Civil Division, 11th Judicial Circuit — located at 104 W. Front Street, 4th Floor, Room 404, Bloomington, IL 61701, phone (309) 888-5350.
          </p>
          <p className="text-gray-700 mb-4">
            The critical point that surprises many heirs: <strong>real property always requires formal probate in Illinois</strong>. The small estate affidavit under 755 ILCS 5/25-1 — which was amended in 2025 to raise the threshold from $100,000 to $150,000 — applies only to personal property. Per Lavelle Law (February 2026) and confirmed by Black Black & Brown (September 2025), the $150,000 threshold covers personal property (bank accounts, securities, personal effects) but real estate is categorically excluded regardless of the estate's total value or the property's value.
          </p>
          <p className="text-gray-700 mb-4">
            This means: if your parent died owning a Bloomington house worth $180,000 and a bank account with $50,000 — the bank account can be collected by small estate affidavit; the house requires formal probate at 104 W. Front Street.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate Administration — Two Paths</h2>
          <p className="text-gray-700 mb-4">
            Illinois offers two forms of administration for estates requiring formal probate. The path chosen significantly affects how quickly an inherited Bloomington property can be sold.
          </p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Path 1: Independent Administration (755 ILCS 5/28-1 et seq.)</h3>
          <p className="text-gray-700 mb-4">
            Under independent administration — the preferred path for most routine estates — the executor or administrator has authority to manage and sell estate assets, including real property, without seeking court approval for each individual transaction. This is significantly faster than supervised administration. The executor can list the property, sign a purchase agreement, and close once Letters of Office are issued.
          </p>
          <p className="text-gray-700 mb-4">
            Typical timeline for uncontested independent administration at McLean County Circuit Court: 6-12 weeks from filing to receiving Letters of Office. The mandatory creditor notice period runs 2.5 months under 755 ILCS 5/18-3. In practice, an uncontested independent administration allows an executor to sell the property within 6-9 months of filing, often sooner.
          </p>
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Path 2: Supervised Administration</h3>
          <p className="text-gray-700 mb-4">
            Under supervised administration, the executor must petition the court for authorization to sell real property. This adds approximately 4-8 weeks per transaction and requires a court hearing. Supervised administration is required when the court orders it or when an interested party (heir or creditor) requests it. For contested estates with disagreeing beneficiaries, supervised administration may be unavoidable.
          </p>
          <p className="text-gray-700 mb-4">
            Total timeline for uncontested supervised administration: 12-18 months. Contested: 18-36+ months.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Before Letters of Office Are Issued</h2>
          <p className="text-gray-700 mb-4">
            You don't need to wait for Letters of Office to start the process with USA Home Buyers. We can evaluate the property, make a written cash offer, and execute a purchase agreement with a closing date contingent on issuance of Letters of Office. This is standard practice in Illinois probate transactions — you lock in the price and buyer today; closing adjusts to the court timeline.
          </p>
          <p className="text-gray-700 mb-4">
            This approach is particularly valuable in multi-sibling situations. A written cash offer with a specific number resolves the coordination challenge before it becomes a contentious negotiation. Every beneficiary sees the same contract; no one sibling can hold the others hostage to a different retail listing strategy.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">McLean County Probate — Practical Details</h2>
          <div className="bg-brand-light rounded-xl p-5 mb-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-1">McLean County Circuit Court — Civil/Probate Division</p>
                <p>104 W. Front Street, 4th Floor, Room 404</p>
                <p>Bloomington, IL 61701</p>
                <p>Phone: (309) 888-5350 (direct probate line)</p>
                <p>Hours: Mon-Fri, 8:30 AM – 4:30 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Administration Timelines</p>
                <p>Letters of Office (independent): 6-12 weeks</p>
                <p>Full estate (uncontested): 6-9 months</p>
                <p>Supervised (uncontested): 12-18 months</p>
                <p>Creditor notice period: 2.5 months (755 ILCS 5/18-3)</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Probate filing fees in McLean County are not published on the circuit clerk website in a downloadable schedule. Atlas note: confirm current probate petition filing fee directly with the court at (309) 888-5350. State guidance suggests typical downstate IL probate petition fees range from $200-$400 for supervised administration; small estate affidavit filings are typically $25-$75. These figures should be verified with the McLean County Circuit Clerk before quoting to sellers.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Inherited Property Condition — What We Commonly See in Bloomington</h2>
          <p className="text-gray-700 mb-4">
            Per Zillow (February 2026), the Bloomington ZHVI is $228,634 — but underlying that figure is a wide range of conditions across the city's inherited-property inventory. Inherited properties in Bloomington typically fall into one of several condition profiles based on the neighborhood and the prior owner's maintenance history:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>Founders' Grove Historic District:</strong> Victorian and Craftsman construction from the 1880s-1920s. Original balloon-frame framing in pre-1910 examples. Knob-and-tube wiring common in pre-1940 homes. Lead paint mandatory disclosure for pre-1978 construction (federal requirement). Asbestos insulation possible in pre-1980 homes. Historic preservation rules restrict exterior modifications — renovation financing complicated for conventional buyers.</li>
            <li><strong>North Bloomington colonials and ranches (1960s-1980s):</strong> Generally better maintained. Primary issues: aging HVAC systems, original windows, possible galvanized supply lines in 1960s homes. These properties frequently sell retail if well-maintained; cash-buyer scenarios here involve estate with out-of-state heirs who can't manage renovation.</li>
            <li><strong>Holiday Knolls / Sherwood Forest (1960s-1970s ranches):</strong> Mid-century construction with routine deferred maintenance. Foundation issues uncommon. Cosmetic rehab candidates when priced right.</li>
            <li><strong>West Bloomington / Sunset Hills (pre-1950s):</strong> Highest deferred-maintenance concentration. Code violation exposure common. Balloon-frame construction in earliest sections. These properties are typically the furthest from retail-ready and most frequently require cash-buyer pricing.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Per the Illinois Residential Real Property Disclosure Act (765 ILCS 77/), sellers must complete and deliver a disclosure form even in an as-is sale. This does not require repairs — it requires disclosure of known conditions. When selling to USA Home Buyers, you disclose what you know; we assess the property ourselves, and the offer price reflects the as-is condition.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax on Inherited Bloomington Property Sales</h2>
          <p className="text-gray-700 mb-4">
            The seller's transfer tax obligation on a Bloomington home sale: Illinois state real estate transfer tax of $0.50 per $500 (35 ILCS 200/31-10) plus McLean County's $0.25 per $500 = $0.75 per $500 combined. No City of Bloomington municipal real estate transfer tax exists. On a $200,000 sale: $300.00 total. Per the Illinois Department of Revenue (tax.illinois.gov), the transfer tax is paid via revenue stamps at the county recorder's office using the MyDec electronic system for PTAX-203 filing.
          </p>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, we cover all closing costs — transfer taxes, McLean County recording fees, and title company fees. The estate receives the agreed net price with no deductions at closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Stepped-Up Basis Tax Advantage</h2>
          <p className="text-gray-700 mb-4">
            Inherited property receives a stepped-up cost basis to fair market value at the date of death under Internal Revenue Code §1014. This provision is particularly valuable in Bloomington, where a State Farm employee who purchased a Founders' Grove home in 1974 for $38,000 may have a property worth $195,000 at the time of death. Without the step-up, heirs would face capital gains tax on roughly $157,000 of appreciation. With the step-up, the basis resets to $195,000 at death — a near-term sale at or near that value generates little or no capital gains tax liability.
          </p>
          <p className="text-gray-700 mb-4">
            Illinois does not impose a state estate tax or inheritance tax. Transfer tax at closing runs $300 on a $200,000 Bloomington sale, covered by USA Home Buyers. Consult a licensed CPA or estate attorney for guidance specific to your situation.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Inherited Property in Bloomington IL — Frequently Asked Questions" />

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Bloomington IL Property?" sourcePage="/markets/bloomington-il/inherited-property" />
      </div>
    </>
  );
}
