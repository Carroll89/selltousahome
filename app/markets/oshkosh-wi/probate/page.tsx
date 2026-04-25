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

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/probate`;

export const metadata: Metadata = {
  title: 'Probate Home Sale Oshkosh WI',
  description:
    'Sell a probate property in Oshkosh WI. Winnebago County Circuit Court Register in Probate. Wis. Stat. Ch. 856 informal + Ch. 857-879 formal. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can USA Home Buyers purchase a home still in Oshkosh probate?',
    answer: 'Yes. We make written offers on Oshkosh probate properties before the estate is closed. The personal representative (executor) can sign the purchase agreement once they have authority from the Winnebago County Register in Probate. We then coordinate the closing timeline to align with the estate\'s completion. Many families find it helpful to have a firm offer price in hand while working through probate proceedings. Call 888-274-5006.',
  },
  {
    question: 'How long does Winnebago County WI probate take for a house sale?',
    answer: 'Informal probate under Wis. Stat. Ch. 856: typically 4-8 months from filing to final distribution — this is the path for uncontested estates with a valid will or clear intestate heirs. Formal probate under Wis. Stat. Ch. 857-879: 9-18 months, required for contested wills, creditor disputes, or court-supervised administration. The creditor notice period runs 3 months from publication; creditors cannot file claims after that period closes, which clears the path for distribution including a real estate sale.',
  },
  {
    question: 'Does the probate court need to approve the sale price in Winnebago County?',
    answer: 'In informal probate (Wis. Stat. Ch. 856), the personal representative typically has independent authority to sell estate real property without a separate court approval order on each transaction — the probate appointment provides the authority. In formal probate (Wis. Stat. Ch. 857-879), or where the will specifically requires court approval, the sale may need to be presented to the Winnebago County Circuit Court for authorization. We\'re familiar with both paths and can work within your estate\'s specific requirements.',
  },
  {
    question: 'What documents does the Winnebago County Register of Deeds need to record a probate deed?',
    answer: 'After the estate closes, the personal representative records a deed transferring title to the buyer along with a certified copy of the Letters Testamentary or Letters of Administration from the Winnebago County Circuit Court. The Winnebago County Register of Deeds (415 Jackson Street, Oshkosh WI, (920) 232-3390) charges a $30 flat recording fee per document under Wisconsin Act 314. A Wisconsin Real Estate Transfer Return (RETR form) must accompany the deed — estate transfers may qualify for a fee exemption, but the RETR must still be filed.',
  },
  {
    question: 'What happens if the Oshkosh estate has debts that exceed the property value?',
    answer: 'If the estate\'s debts exceed its assets, the estate is insolvent. Under Wisconsin probate law, creditors are paid in a priority order defined in the statute — administration expenses and court costs first, then funeral expenses, then family allowances, then tax claims, then other debts. If the house sale proceeds don\'t cover all debts, some creditors may go unpaid — but the heirs typically have no personal liability for estate debts beyond the estate assets themselves. We can still purchase an insolvent estate\'s property; the proceeds go to creditors per Wisconsin priority rules.',
  },
];

export default function OshkoshProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Probate Property in Oshkosh WI — Winnebago County Circuit Court Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/oshkosh-wi-hero-640.jpg 640w, /images/optimized/oshkosh-wi-hero-828.jpg 828w, /images/optimized/oshkosh-wi-hero-1080.jpg 1080w, /images/optimized/oshkosh-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/oshkosh-wi-hero-1200.jpg"
            alt="Oshkosh WI probate property — Sell As-Is"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Probate Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell a Probate Property in Oshkosh WI — Winnebago County Process
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Sell an Oshkosh WI probate property through Winnebago County Circuit Court Register in Probate, 415 Jackson Street Room 242, (920) 236-4808. Informal probate (Wis. Stat. Ch. 856): 4-8 months. Formal probate (Wis. Stat. Ch. 857-879): 9-18 months. USA Home Buyers makes offers before probate closes — personal representative signs. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy Oshkosh probate properties in any condition — before or after the estate closes. No repairs, no cleanout, work on the estate's timeline.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/oshkosh-wi/probate.mp4"
        title="Selling Probate Property in Oshkosh WI"
        poster="/videos/oshkosh-wi/probate-poster.jpg"
        subtitle="Working with personal representatives and Winnebago County Circuit Court"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Oshkosh property in Wisconsin probate? USA Home Buyers works with personal representatives and estate attorneys in Winnebago County. We buy as-is once the court grants authority. Written cash offer in 24 hours. Call 888-274-5006.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Oshkosh Probate Property Cash Offer" subheadline="Written offer in 24 hours. We work with Winnebago County WI probate timelines." sourcePage="/markets/oshkosh-wi/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Probate Process for Oshkosh Real Estate — Winnebago County</h2>
          <p className="text-gray-700 mb-4">
            When a Winnebago County homeowner dies and leaves real property, that property cannot pass to heirs or be sold to a third party without going through Wisconsin's probate process. Probate is the court-supervised legal process by which a decedent's debts are paid and assets distributed to rightful heirs or beneficiaries. In Winnebago County, all probate proceedings are handled by the Winnebago County Circuit Court, Register in Probate — 415 Jackson Street, Room 242, Oshkosh, WI 54901, (920) 236-4808.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin provides two primary probate pathways: informal probate under Wis. Stat. Ch. 856 for straightforward estates, and formal probate under Wis. Stat. Ch. 857-879 for complex or contested matters. Understanding which path applies determines how quickly the Oshkosh property can be sold and proceeds distributed.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Wisconsin Informal Probate — Wis. Stat. Ch. 856</h3>
          <p className="text-gray-700 mb-4">
            Informal probate is the more common path for Oshkosh estate properties where: there is a valid will with no contest, or the estate distributes to clear intestate heirs under Wisconsin's intestacy statutes; creditors' claims are not significantly disputed; and no beneficiary requires court-supervised administration. The Register in Probate administers informal probate proceedings with minimal court appearances.
          </p>
          <p className="text-gray-700 mb-4">
            The key milestone in informal probate is the creditor notice period. The personal representative must publish notice of the estate to creditors in a local newspaper. Creditors then have a defined window — typically 3 months from publication — to file claims against the estate. Once that window closes and valid claims are addressed, the estate can distribute assets including real property.
          </p>
          <p className="text-gray-700 mb-4">
            According to Wis. Stat. Ch. 856 (Wisconsin Legislature), the timeline for informal probate in Winnebago County WI is typically 4–8 months from opening to final distribution, assuming no complications. An experienced personal representative with competent legal counsel can move through the process efficiently. USA Home Buyers can execute a purchase agreement during this period and schedule the closing for after the estate has authority to convey title.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Wisconsin Formal Probate — Wis. Stat. Ch. 857-879</h3>
          <p className="text-gray-700 mb-4">
            Formal probate is required in Winnebago County when: a beneficiary or creditor requests supervised administration; the will is contested; significant creditor claims require court resolution; or the personal representative's authority is challenged. Wis. Stat. Ch. 857-879 covers the detailed procedural requirements for formal proceedings — inventory, accountings, hearings, and judicial approval at key stages.
          </p>
          <p className="text-gray-700 mb-4">
            In formal probate, a sale of estate real property may require court approval. The personal representative presents the proposed sale terms to the Winnebago County Circuit Court, which reviews whether the price is fair and the sale is in the estate's best interest. USA Home Buyers can provide a written offer that the personal representative presents to the court as part of the approval process.
          </p>
          <p className="text-gray-700 mb-4">
            Timeline for formal probate in Winnebago County: 9-18 months, sometimes longer in contested cases. The duration reflects the additional court proceedings required at each major estate decision point.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">The Register in Probate's Role</h3>
          <p className="text-gray-700 mb-4">
            The Register in Probate is the administrative officer of the probate court. In Winnebago County, the Register receives probate filings, maintains estate records, issues certified copies of letters testamentary and letters of administration, and works with the circuit judge on contested proceedings. For sellers navigating an Oshkosh estate, the Register in Probate office is the first contact point for opening an estate and tracking progress.
          </p>
          <p className="text-gray-700 mb-4">
            The Winnebago County Register in Probate can be reached at (920) 236-4808. The office is located at 415 Jackson Street, Room 242, Oshkosh, WI 54901. Wisconsin courts also maintain online case access at wicourts.gov where estate docket information can be reviewed.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Recording the Deed After Winnebago County Probate</h3>
          <p className="text-gray-700 mb-4">
            After the estate closes and the personal representative executes a deed conveying the Oshkosh property to the buyer, the deed must be recorded with the Winnebago County Register of Deeds — a separate office from the Register in Probate. The Register of Deeds is located at 415 Jackson Street, Oshkosh, WI 54901, (920) 232-3390. The recording fee is $30 flat per document under Wisconsin Act 314. A certified copy of the Letters Testamentary or Decree of Final Distribution is typically recorded alongside the deed to establish chain of title.
          </p>
          <p className="text-gray-700 mb-4">
            A Wisconsin Real Estate Transfer Return (RETR form) must accompany any deed at recording. According to Wis. Stat. § 77.22 and the Winnebago County Register of Deeds fee schedule (winnebagocountywi.gov, 2026), estate transfers may qualify for exemption from the $3.00/$1,000 state transfer fee, but the RETR form must still be filed — showing a zero or exempt-basis valuation.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh Probate Properties We Buy</h2>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases all types of Oshkosh and Winnebago County estate properties going through probate:
          </p>
          <ul className="space-y-3 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Brick bungalows (Merritt, Algoma, Fair Acres):</strong> The primary estate-sale housing type in Oshkosh. Solid structure, aging systems. We buy as-is without repair requirements.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Lake Shore Victorian homes:</strong> High-value estate properties requiring significant restoration — we buy these in estate condition.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Mid-century ranches and Cape Cods (Southwest, Oakwood):</strong> Common in Oshkosh estate inventories from the 1950s-1970s homeowner generation.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Vacant properties:</strong> Homes that sat vacant while the owner was in assisted living — common in Oshkosh estate situations. Deferred maintenance, possible vandalism or weather damage. We buy regardless.</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Multi-family / rental properties:</strong> Two-flats and small multi-units in probate. We buy with or without tenants in place (Wis. Stat. § 704.09 — lease survival on sale).</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Properties with code violations or open permits:</strong> We buy properties with unresolved City of Oshkosh code violations, open building permits, or raze order risk under Wis. Stat. § 66.0413.</div></li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Costs of Maintaining an Oshkosh Estate Property During Probate</h2>
          <p className="text-gray-700 mb-4">
            While the Winnebago County probate process runs its 4-18 month course, the estate property continues to accrue costs. Property taxes in Winnebago County WI are levied annually — Oshkosh residential properties pay the City of Oshkosh mill rate plus Winnebago County levy. On a $211,000 Oshkosh home, annual property taxes typically run $4,500-$6,000 depending on specific assessment and local mill rates. That's $375-$500 per month of carrying cost, paid by the estate, while the probate proceedings continue.
          </p>
          <p className="text-gray-700 mb-4">
            Add homeowner's insurance (which should be maintained on vacant or estate properties — vacant home policies are available but often more expensive than standard homeowner's policies), utility costs to prevent winterization damage in Wisconsin's cold winters, and lawn maintenance to comply with City of Oshkosh property maintenance code. A conservative estimate for maintaining a vacant Oshkosh estate property runs $800-$1,200 per month.
          </p>
          <p className="text-gray-700 mb-4">
            Over a 12-month formal probate proceeding, that's $9,600-$14,400 in estate carrying costs — money that comes directly out of the eventual sale proceeds that heirs were expecting to receive. A cash buyer who can close quickly after the estate has authority to sell minimizes this carrying cost drain.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Wisconsin Intestate Succession — What Happens Without a Will in Oshkosh</h2>
          <p className="text-gray-700 mb-4">
            If the Oshkosh property owner died without a will — intestate — Wisconsin's intestacy statutes determine who inherits the estate. Wisconsin's intestacy rules under Wis. Stat. Ch. 852 establish a hierarchy: surviving spouse first, then children, then parents, then siblings, and more distant relatives in sequence if closer heirs don't exist.
          </p>
          <p className="text-gray-700 mb-4">
            In Wisconsin's marital property framework, the surviving spouse receives a share of the decedent's individual property plus retains their own share of marital property — the details depend on whether there are also surviving children and how property was titled. For intestate Oshkosh estates, the Winnebago County Register in Probate guides heirs through the administration process.
          </p>
          <p className="text-gray-700 mb-4">
            Intestate probate can be more complex than testate (with-will) probate because there's no document expressing the decedent's wishes to resolve disputes. Heir disagreements about whether to sell, who manages the estate, and at what price to accept an offer are more common in intestate cases. USA Home Buyers has worked through intestate estate sales in Winnebago County and can provide a written offer that gives the heirs a concrete starting point for reaching consensus.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Oshkosh Estate Property Liens and Title Issues</h2>
          <p className="text-gray-700 mb-4">
            Estate properties in Oshkosh sometimes carry unresolved title issues that complicate a sale. Common issues include: unpaid property taxes that have become a lien on the property; deferred mortgage payments or home equity lines of credit with outstanding balances; municipal liens for unpaid code violation fines or special assessments; mechanic's liens from contractors who performed work but weren't paid; and estate debts that creditors have recorded as judgment liens against the property.
          </p>
          <p className="text-gray-700 mb-4">
            All liens on the Oshkosh property must be satisfied at closing before clear title can transfer. In most cases, the sale proceeds pay off the liens in order of priority, and the heirs receive whatever remains. USA Home Buyers works with Winnebago County WI title companies experienced in clearing estate liens — we've handled Oshkosh estate closings with multiple liens, back taxes, and complex title issues. If you're unsure what liens exist on the property, a preliminary title search from a Winnebago County title company will surface them.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Working With an Oshkosh Probate Attorney</h2>
          <p className="text-gray-700 mb-4">
            For most Winnebago County WI estate sales, engaging a Wisconsin probate attorney to navigate the Register in Probate process is advisable — particularly for estates with significant assets, multiple heirs, or any complexity. The attorney's fees are paid by the estate and are typically a reasonable percentage of the estate value. Winnebago County has probate-experienced attorneys familiar with the local court's procedures and timelines.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers works cooperatively with estate attorneys — we provide a written offer that the attorney can review and advise their client on, we coordinate the purchase agreement and closing with whatever timeframe the probate proceedings require, and we don't pressure heirs or attorneys to deviate from proper probate procedure. The probate process has to happen correctly; we work within it, not around it.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Oshkosh WI Probate Property Sales" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Back to Oshkosh WI' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/oshkosh-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/oshkosh-wi/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-wisconsin', label: 'WI Legal Guide' },
              { href: '/markets/kenosha-wi', label: 'Kenosha WI Market' },
              { href: '/markets/racine-mount-pleasant-wi', label: 'Racine WI Market' },
              { href: '/markets/oshkosh-wi/faq', label: 'Oshkosh WI FAQ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Oshkosh WI Probate Property?" sourcePage="/markets/oshkosh-wi/probate" />
      </div>
    </>
  );
}
