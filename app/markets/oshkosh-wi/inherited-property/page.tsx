/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/inherited-property`;

export const metadata: Metadata = {
  title: 'Sell Inherited House Oshkosh WI',
  description:
    'Sell an inherited home in Oshkosh WI as-is. Winnebago County WI probate process explained. Wis. Stat. Ch. 856 informal & Ch. 857-879 formal. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell an inherited house in Oshkosh before probate is complete?',
    answer: 'Generally, no — Wisconsin requires that title be transferred properly through the probate process before the property can be sold to a third party. However, USA Home Buyers can make a written offer before probate is opened, allowing you to know your number as you start the process. In informal probate under Wis. Stat. Ch. 856, an appointed personal representative can often authorize a sale within 4-8 months. We\'ll work on your timeline. Call 888-440-5250.',
  },
  {
    question: 'What is informal probate vs. formal probate for an Oshkosh estate?',
    answer: 'Wisconsin informal probate (Wis. Stat. Ch. 856) is available for uncontested estates with a valid will or clear intestate heirs — no will contest, no significant creditor disputes. The Register in Probate at Winnebago County Circuit Court handles it without requiring extensive court hearings. Timeline: 4-8 months. Formal probate (Wis. Stat. Ch. 857-879) is required when the will is contested, creditors are disputing claims, or the court needs to supervise distribution. Timeline: 9-18 months. Real property always requires one of these paths — the small estate affidavit (under $50K, no real property) doesn\'t apply to houses.',
  },
  {
    question: 'Do heirs all need to agree to sell the inherited Oshkosh property?',
    answer: 'In most cases, yes. If multiple heirs inherited the property, all must agree on the sale unless the court-appointed personal representative has independent authority to sell under the will or probate order. Wisconsin allows a personal representative to sell estate real property to pay debts or facilitate distribution — but heir disputes can slow or block the sale. We\'ve worked with families navigating heir disagreements and can explain the options. Call 888-440-5250.',
  },
  {
    question: 'What is a step-up in basis and how does it affect an inherited Oshkosh home?',
    answer: 'Federal tax law provides that inherited property receives a "step-up" in basis to the fair market value at the date of the decedent\'s death. If your parent purchased their Oshkosh brick bungalow for $45,000 in 1975 and it\'s worth $210,000 when you inherit it, your basis is $210,000 — not $45,000. If you sell within a year at or near fair market value, capital gains tax is minimal or zero on the inherited portion. This is a significant advantage of selling inherited property versus selling a property you\'ve owned for decades. Consult a tax professional for advice specific to your situation.',
  },
  {
    question: 'How does Winnebago County WI probate work for recording the deed after sale?',
    answer: 'After probate closes, the personal representative records a certified copy of the Letters Testamentary (for testate estates) or Letters of Administration (for intestate) at the Winnebago County Register of Deeds, 415 Jackson Street, Oshkosh WI 54901, (920) 232-3390. The recording fee is $30 flat per document under Wisconsin Act 314. The Wisconsin Real Estate Transfer Return (RETR form) must accompany the deed at recording. If the transfer is exempt from the transfer fee (estate-related transfers may qualify), the RETR still must be filed showing a zero-value transaction.',
  },
];

export default function OshkoshInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling an Inherited House in Oshkosh WI — Winnebago County Probate Guide', pageUrl, '2026-04-18'),
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
            alt="Oshkosh WI inherited home — Sell As-Is, Any Condition"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell an Inherited House in Oshkosh WI — As-Is, No Repairs
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Sell an inherited Oshkosh WI home as-is. Winnebago County WI probate: informal (Wis. Stat. Ch. 856) 4-8 months; formal (Ch. 857-879) 9-18 months. Register in Probate: 415 Jackson Street Room 242, (920) 236-4808. Real property always requires probate — small estate affidavit only for under $50K with no real estate. USA Home Buyers makes written offers before probate closes. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Inherited a house in Oshkosh or Winnebago County WI? We buy estate properties as-is — Victorian lakefront homes, brick bungalows, mid-century ranches — and work with your probate timeline.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer on an Oshkosh Inherited Property" subheadline="Written offer in 24 hours. We work with Winnebago County WI probate timelines." sourcePage="/markets/oshkosh-wi/inherited-property" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Probate for Inherited Oshkosh Real Estate — The Winnebago County Process</h2>
          <p className="text-gray-700 mb-4">
            Inherited real estate in Wisconsin cannot change ownership by heirs simply deciding to sell it. Title must pass through the legal probate process before a deed can be transferred to a buyer. In Winnebago County WI, all probate matters are handled by the Winnebago County Circuit Court, Register in Probate — located at 415 Jackson Street, Room 242, Oshkosh WI 54901, phone (920) 236-4808. The probate judge and Register in Probate work together to ensure debts are paid and assets distributed lawfully.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin offers two main probate pathways under state statute. Understanding which one applies to your parent's or relative's estate directly determines your timeline for selling the Oshkosh property and moving on.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Informal Probate — Wis. Stat. Ch. 856</h3>
          <p className="text-gray-700 mb-4">
            Wisconsin's informal probate process under Wis. Stat. Ch. 856 is available when: the decedent had a valid will, or the estate can be distributed to clear intestate heirs under the Wisconsin intestacy statutes; there is no will contest; and there are no significant creditor disputes requiring court resolution. In informal probate, the Register in Probate handles the administrative steps without requiring full court hearings at each stage. A personal representative (executor) is appointed, inventory is filed, creditors are notified, and after the claims period passes, the estate assets — including the Oshkosh real property — can be distributed or sold.
          </p>
          <p className="text-gray-700 mb-4">
            According to Wis. Stat. Ch. 856 (Wisconsin Legislature), the typical informal probate timeline in Winnebago County WI is 4–8 months from opening to final distribution. The personal representative must publish a notice to creditors in a local newspaper, and creditors have a limited window to file claims (typically 3 months after publication). Once the claims period closes and creditors are addressed, the personal representative can convey the real property.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Formal Probate — Wis. Stat. Ch. 857-879</h3>
          <p className="text-gray-700 mb-4">
            Formal probate is required when: the will is contested by one or more heirs; significant creditor claims are disputed; the personal representative's authority is challenged; or the court determines that court supervision of the estate is necessary to protect interested parties. Wis. Stat. Ch. 857-879 covers the formal proceedings, including supervised administration, inventory requirements, and final account hearings before the court.
          </p>
          <p className="text-gray-700 mb-4">
            Formal probate in Winnebago County typically runs 9-18 months — longer if contested. The critical difference from informal probate is that each major action (sale of real property, distribution) may require court approval rather than just the personal representative's signature. This adds time but doesn't prevent the ultimate sale.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Small Estate Affidavit — What It Covers and What It Doesn't</h3>
          <p className="text-gray-700 mb-4">
            Wisconsin provides a simplified small estate procedure for estates below $50,000 in value with no real property. Under this path, an affidavit signed by the heirs can be used to collect personal property (bank accounts, vehicles, personal effects) without formal probate. However — and this is the critical limitation — real property is excluded. If the estate includes an Oshkosh house or any other Wisconsin real estate, the full probate process is required regardless of the overall estate value. There is no small estate shortcut for real estate.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Personal Representative Authority to Sell Real Property</h3>
          <p className="text-gray-700 mb-4">
            Under Wisconsin law, a personal representative appointed in a probate proceeding has authority to manage and dispose of estate assets, including real property. In many Winnebago County informal probate cases, the personal representative can execute a deed to transfer the property to a buyer without a separate court order on each transaction — the probate appointment itself provides the authority. In formal probate cases, or when the will specifies, court approval of the sale may be required before closing.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers can make a written cash offer and sign a purchase agreement before the probate is fully closed. We build in the necessary time for probate proceedings and can close on your schedule once title is clear and the personal representative has authority to execute the deed. Many estate families appreciate having a firm number in hand before the probate process is complete.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Path</th>
                  <th className="text-left p-3">Statute</th>
                  <th className="text-left p-3">Typical Timeline</th>
                  <th className="text-left p-3">Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Informal Probate</td><td className="p-3">Wis. Stat. Ch. 856</td><td className="p-3">4-8 months</td><td className="p-3">Uncontested will/intestacy, no creditor disputes</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Formal Probate</td><td className="p-3">Wis. Stat. Ch. 857-879</td><td className="p-3">9-18 months</td><td className="p-3">Contested will, complex creditor issues, court supervision</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Small Estate Affidavit</td><td className="p-3">WI statute (personal property only)</td><td className="p-3">Days-weeks</td><td className="p-3">Under $50K, NO real property — houses excluded</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Inherited Oshkosh Property Situations</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Former Factory-Worker Bungalows</h3>
          <p className="text-gray-700 mb-4">
            Oshkosh's manufacturing heritage — Oshkosh Corporation, Mercury Marine, Kimberly-Clark, and dozens of Fox Valley supplier businesses — produced generations of working-class homeowners who purchased brick bungalows in Merritt, Algoma, and Fair Acres neighborhoods in the 1940s-1960s. These properties have been in families for decades. When the original owners pass, heirs who've moved to Phoenix, Florida, or the Twin Cities face a remote estate management challenge.
          </p>
          <p className="text-gray-700 mb-4">
            The homes are structurally solid — Oshkosh brick bungalows were built well — but they carry original systems: knob-and-tube wiring, galvanized or lead service lines in some cases, aging oil-to-gas conversion furnaces, and sometimes asbestos insulation in basements or attic spaces. These issues are red flags for retail buyers' home inspectors and conventional lenders. We buy these properties exactly as they stand, no updates required.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Lake Shore Victorian Estate Sales</h3>
          <p className="text-gray-700 mb-4">
            Lake Winnebago waterfront Victorian homes in the Lake Shore and Lakeview neighborhoods represent Oshkosh's architectural crown jewels — Queen Anne and Colonial Revival homes from the 1880s-1920s that command the highest prices in the city. When these come to market through estate sales, they attract significant retail interest. But "estate" condition on an 1890s Victorian can mean century-old windows, original knob-and-tube wiring behind plaster walls, foundation settling, and significant exterior wood-siding deferred maintenance.
          </p>
          <p className="text-gray-700 mb-4">
            We buy Lake Shore Victorians in estate condition without requiring restoration. The offer reflects the as-is state of the property — we price in the renovation work rather than asking the estate to fund it. Estate families avoid the alternative: months of contractor bids, permit pulls, and staged showings while the estate remains open and carrying costs accumulate.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">UW Oshkosh Faculty and Staff Retirement Properties</h3>
          <p className="text-gray-700 mb-4">
            UW Oshkosh's ~12,000-student campus creates a significant professional housing market in the Merritt neighborhood. Faculty who purchased near-campus homes in the 1970s-1990s at modest prices have seen values rise considerably. When these homeowners pass or move to assisted living, heirs often face a well-located property with dated interiors and systems — livable but not retail-ready without investment.
          </p>
          <p className="text-gray-700 mb-4">
            We buy near-campus Merritt and Algoma properties in any condition. Estate heirs don't need to fund kitchen renovations or bathroom updates before selling. One call, one visit, one written offer — and you can close on the schedule that works for the estate.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Winnebago County Register in Probate — Contact and Process</h2>
          <p className="text-gray-700 mb-4">
            The Winnebago County Circuit Court Register in Probate is the administrative arm of the probate court. The Register receives probate filings, maintains estate records, and works with the probate judge on formal proceedings. For estates going through informal probate, the Register often handles much of the process without requiring court appearances.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Address:</strong> 415 Jackson Street, Room 242, Oshkosh, WI 54901</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Phone:</strong> (920) 236-4808</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Website:</strong> winnebagocountywi.gov</div></li>
            <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span><div><strong>Recording (after probate):</strong> Deed recorded at Winnebago County Register of Deeds, 415 Jackson Street, (920) 232-3390 — $30 flat recording fee per document</div></li>
          </ul>
          <p className="text-gray-700 mb-4">
            After probate closes and the personal representative executes a deed, the deed must be recorded with the Winnebago County Register of Deeds (separate office from the Register in Probate). According to the Winnebago County Register of Deeds fee schedule (winnebagocountywi.gov, 2026), the recording fee is $30 flat per document under Wisconsin Act 314. A Wisconsin Real Estate Transfer Return (RETR form) must accompany the deed — estate transfers may qualify for a fee exemption, but the RETR form is still required.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Managing an Oshkosh Inherited Property From Out of State</h2>
          <p className="text-gray-700 mb-4">
            Many Oshkosh estate sellers are managing the process from Arizona, Florida, Texas, or other states where the original owners retired or where adult children live. Remote estate management creates a specific set of challenges: the property may be vacant and at risk of vandalism or weather damage; utilities must be maintained or winterized; property taxes continue accruing; and coordination with Winnebago County probate requires signed documents, notarizations, and sometimes hearings.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers works with out-of-state estate sellers regularly. We can assess the property with minimal or no on-site presence from heirs, provide a written offer, and coordinate closing through a title company that can handle remote signings. Many Oshkosh estate closings happen entirely by mail or with a single trip to Wisconsin for the estate heirs.
          </p>
          <p className="text-gray-700 mb-4">
            If the property has been vacant for an extended period — common when the original owner moved to assisted living before passing — we handle the as-is condition without complaint. We don't require cleanout, and we don't renegotiate based on whatever we find inside. The offer is the offer.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Tax Considerations for Selling an Inherited Oshkosh Property</h2>
          <p className="text-gray-700 mb-4">
            The federal step-up in basis rule is significant for inherited property sellers. When you inherit a property, your tax basis is the fair market value at the date of the decedent's death — not the price paid decades ago. An Oshkosh brick bungalow purchased in 1962 for $18,000 that's worth $195,000 at death passes to you with a $195,000 basis. If you sell within a year at or near fair market value, capital gains tax is minimal.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin does not have a separate state inheritance tax or estate tax for estates of typical Oshkosh-area size (the Wisconsin estate tax was repealed). Federal estate tax only applies to estates exceeding the federal exemption ($13.6 million as of 2024). Most Oshkosh residential estate sales fall well below any estate tax threshold.
          </p>
          <p className="text-gray-700 mb-4">
            These are general observations — consult a tax professional or estate attorney for advice specific to your situation. USA Home Buyers does not provide tax advice, but we can give you a firm sale price within 24 hours so your advisors have a concrete number to work with.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling an Inherited Oshkosh WI House" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Back to Oshkosh WI' },
              { href: '/markets/oshkosh-wi/probate', label: 'Probate Sale' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/oshkosh-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/oshkosh-wi/fire-damage', label: 'Fire Damage' },
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

        <CashOfferForm variant="footer" headline="Ready to Sell Your Inherited Oshkosh WI Property?" sourcePage="/markets/oshkosh-wi/inherited-property" />
      </div>
    </>
  );
}
