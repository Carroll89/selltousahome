/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bloomington-il/probate`;

export const metadata: Metadata = {
  title: 'Sell Probate Property Bloomington IL',
  description:
    'Selling probate real estate in Bloomington IL? McLean County Circuit Court, 755 ILCS 5, independent administration. Written cash offer in 24 hours. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need court approval to sell a house in McLean County probate?',
    answer: "Under Illinois independent administration (755 ILCS 5/28-1 et seq.), the executor or administrator can sell real property without seeking per-transaction court approval. This is the standard path for most routine McLean County estates. Under supervised administration, the executor must petition the court and obtain an order authorizing each sale — adding 4-8 weeks per transaction. Independent administration is generally preferred for its speed and reduced court involvement; it's available unless the will requires supervised administration or a court orders it.",
  },
  {
    question: 'What is the McLean County Register in Probate?',
    answer: "McLean County's probate matters are handled by the Civil Division of the Circuit Court — 104 W. Front Street, 4th Floor, Room 404, Bloomington IL 61701, phone (309) 888-5350. The 11th Judicial Circuit handles all probate filings. The probate clerk at this office processes the initial petition, issues Letters of Office, and maintains the estate file. Hours: Monday-Friday, 8:30 AM – 4:30 PM. When filing, bring the original will (if one exists), the death certificate, and a list of known assets and heirs.",
  },
  {
    question: 'How long does it take to get Letters of Office in McLean County?',
    answer: "Under independent administration for an uncontested estate at McLean County Circuit Court, the typical timeline from filing to receiving Letters of Office runs 6-12 weeks. Once the court issues Letters Testamentary (under a will) or Letters of Administration (intestate), the executor has immediate authority to sell real property. The mandatory creditor notice period under 755 ILCS 5/18-3 runs 2.5 months from publication — this period can overlap with the Letters of Office process. We can have a written cash offer ready before you file, and coordinate closing once Letters are issued.",
  },
  {
    question: 'Can real property be sold during the creditor notice period?',
    answer: "Yes — with Letters of Office in hand, an executor under independent administration can sell real property during the creditor notice period. Sale proceeds are held as estate assets subject to valid creditor claims. The estate cannot be fully distributed to heirs until the creditor notice period expires and valid claims are paid, but the real property transaction itself can close. This is important for Bloomington estates where the primary asset is a home that needs to be sold promptly.",
  },
  {
    question: 'What happens if there is no will for the Bloomington property?',
    answer: "If the decedent died without a valid will (intestate), the Illinois Probate Act governs distribution of the estate. Per 755 ILCS 5/2-1, the estate passes to the decedent's heirs by statutory order: surviving spouse, then descendants (children, grandchildren), then parents, then siblings. The McLean County Circuit Court appoints an administrator (usually the closest heir who petitions). The administrator receives Letters of Administration with the same authority as an executor under a will. Under independent administration, the administrator can sell the property without additional court approval.",
  },
  {
    question: 'Is there a faster way to transfer property without formal probate in Illinois?',
    answer: "Several alternatives may apply depending on the circumstances: (1) Joint tenancy with right of survivorship — if the deceased held property as a joint tenant with another person, the surviving joint tenant takes the property automatically without probate by recording a death certificate and affidavit. (2) Transfer-on-death deed (TODD) — Illinois allows TODDs for real property; if the decedent executed one before death, the property passes directly to the named beneficiary without probate. (3) Trust ownership — property held in a revocable living trust passes according to trust terms without probate. If none of these apply to your Bloomington property, formal probate at McLean County Circuit Court is required.",
  },
];

export default function BloomingtonProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema("Selling Probate Property in Bloomington IL — McLean County Circuit Court Guide", pageUrl, '2026-04-19'),
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
            alt="Bloomington IL probate home sale"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
          </div>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Probate Property in Bloomington IL — McLean County Circuit Court
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Illinois probate is governed by 755 ILCS 5 (Illinois Probate Act). Real property always requires formal probate — the 2025 small-estate amendment ($150K) covers personal property only. McLean County Circuit Court, Civil Division: 104 W. Front St., Room 404, (309) 888-5350. Under independent administration (755 ILCS 5/28-1), executor can sell without per-transaction court approval. Typical timeline to Letters: 6-12 weeks. USA Home Buyers has written offer ready before you file. Call (888) 440-5250.
              </p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 (888) 440-5250 — 24/7
            </a>
          </div>
          <CashOfferForm
            variant="hero"
            headline="Get Your Probate Property Cash Offer"
            subheadline="We coordinate with McLean County probate timelines. Written offer in 24 hours."
            sourcePage="/markets/bloomington-il/probate"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Probate and Real Property — The Governing Framework</h2>
          <p className="text-gray-700 mb-4">
            The Illinois Probate Act of 1975, 755 ILCS 5, governs all probate administration in Illinois. For McLean County properties, the applicable court is the McLean County Circuit Court, Civil Division — 11th Judicial Circuit, 104 W. Front Street, 4th Floor, Room 404, Bloomington, IL 61701, phone (309) 888-5350.
          </p>
          <p className="text-gray-700 mb-4">
            The most important rule for Bloomington home sellers: <strong>real property always requires formal probate in Illinois</strong>. The 2025 amendment to 755 ILCS 5/25-1(a-5)(2)(A), as confirmed by Lavelle Law (February 2026), raised the small estate affidavit threshold from $100,000 to $150,000. But this applies exclusively to personal property — bank accounts, securities, personal effects, motor vehicles. Real estate is categorically excluded from the small estate procedure regardless of the property's value or the estate's total size.
          </p>
          <p className="text-gray-700 mb-4">
            A $90,000 house in Bloomington requires formal probate. A $500,000 house requires formal probate. The small estate threshold is irrelevant to real property. If the decedent died owning real estate in McLean County, Letters of Office from the Circuit Court are required before anyone has legal authority to convey title.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Two Administration Paths at McLean County Circuit Court</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 mb-2">Independent Administration (Preferred)</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Statute:</strong> 755 ILCS 5/28-1 et seq.</p>
              <p className="text-gray-700 text-sm mb-2">Executor manages and sells estate assets — including real property — without per-transaction court approval.</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Timeline to Letters:</strong> 6-12 weeks</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Full estate:</strong> 6-9 months (uncontested)</p>
              <p className="text-gray-700 text-sm"><strong>Use when:</strong> All interested parties agree; estate is not contested</p>
            </div>
            <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Supervised Administration</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Statute:</strong> 755 ILCS 5/ (court oversight provisions)</p>
              <p className="text-gray-700 text-sm mb-2">Executor must petition court and obtain an order authorizing each sale of real property.</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Timeline to close real estate:</strong> Add 4-8 weeks per sale for court approval</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Full estate:</strong> 12-18 months (uncontested); 18-36+ months (contested)</p>
              <p className="text-gray-700 text-sm"><strong>Required when:</strong> Court orders it, or any interested party requests supervision</p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The McLean County Probate Process — Step by Step</h2>
          <p className="text-gray-700 mb-4">
            Here is what a typical McLean County probate sale looks like from filing to closing:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>File the probate petition</strong> at McLean County Circuit Court, Civil Division, Room 404, 104 W. Front Street. Bring the original will (if any), death certificate, and list of known assets and heirs. The petition requests issuance of Letters of Office and opens the estate file.</li>
            <li><strong>Court hearing (short calendar matter)</strong> — the court holds a brief hearing to admit the will to probate (if testate), appoint the executor/administrator, and issue Letters of Office. In uncontested matters, this is typically a routine scheduling item, not a contested hearing.</li>
            <li><strong>Receive Letters of Office</strong> — Letters Testamentary (under a will) or Letters of Administration (intestate) are issued. Under independent administration, these letters give the executor immediate authority to sell real property.</li>
            <li><strong>Publish notice to creditors</strong> per 755 ILCS 5/18-3 — mandatory 2.5-month creditor notice period begins. Publication is in a McLean County newspaper of general circulation. Creditors have the notice period to file claims.</li>
            <li><strong>List or sell the real property</strong> — with Letters of Office in hand, the executor can execute a purchase agreement and close. USA Home Buyers can be under contract before the Letters are issued; closing is scheduled after.</li>
            <li><strong>Pay valid creditor claims</strong> from estate proceeds after the creditor notice period expires.</li>
            <li><strong>Final accounting and distribution</strong> to heirs/beneficiaries under the will or Illinois intestacy law.</li>
          </ol>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Bloomington Probate Properties — What We Typically See</h2>
          <p className="text-gray-700 mb-4">
            According to Illinois-demographics.com, Bloomington city's median household income is $77,384 (ACS 2024). The city's employment base — State Farm, Country Financial, ISU, IWU, Advocate BroMenn — has created a professional class that purchased homes in the 1970s-1990s and held them for decades. Many of these homes passed through one generation and are now entering probate for the second or third time since the original purchase.
          </p>
          <p className="text-gray-700 mb-4">
            Per Redfin (March 2026), the Bloomington median sale price is $300,000 — but probate properties frequently sell below median due to condition and the motivation profile of estate sellers. The most common Bloomington probate property profiles we encounter:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>Founders' Grove Victorians (1880s-1920s):</strong> High character, National Register properties. Deferred maintenance common. Pre-1978 lead paint disclosure mandatory. Pre-1980 asbestos exposure possible. Historic Preservation Commission approval required for exterior modifications — complicates conventional renovation financing. Cash buyers are often the only practical market for severely deferred properties.</li>
            <li><strong>North Bloomington colonials and ranches (1960s-1980s):</strong> Typically better maintained. Out-of-state heirs who can't manage renovation are the primary motivated-seller profile. Retail buyers exist for well-maintained examples; cash buyers serve the estates that can't fund pre-sale repairs.</li>
            <li><strong>West Bloomington pre-war homes (1920s-1940s):</strong> Highest concentration of condition issues. Code violations, balloon-frame construction, outdated systems. Often the most below-retail-market properties in the Bloomington portfolio.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Probate Sale Transfer Tax and Closing Costs</h2>
          <p className="text-gray-700 mb-4">
            Per the Illinois Department of Revenue (tax.illinois.gov), the transfer tax on a McLean County probate sale: IL state $0.50/$500 (35 ILCS 200/31-10) + McLean County $0.25/$500 = $300 on a $200,000 sale. No Bloomington municipal RETT. The estate is the seller and pays the transfer tax. When you sell to USA Home Buyers, we cover all closing costs — the estate receives the full agreed purchase price at closing.
          </p>
          <p className="text-gray-700 mb-4">
            Note: sales from an estate do not receive a capital-gains exclusion under IRC §121 (the $250,000/$500,000 primary-residence exclusion). However, the stepped-up basis to date-of-death fair market value under IRC §1014 typically reduces or eliminates capital gains on a near-term sale.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Intestate Succession in Illinois — What Happens Without a Will</h2>
          <p className="text-gray-700 mb-4">
            Many Bloomington probate properties arrive at the Circuit Court without a valid will. When a McLean County homeowner dies intestate — without a will — the Illinois Probate Act (755 ILCS 5/2-1) governs who inherits. The statutory order of succession: surviving spouse takes first; if no spouse, then surviving descendants (children, grandchildren); if no descendants, then surviving parents; then siblings; then more distant relatives by degree of consanguinity.
          </p>
          <p className="text-gray-700 mb-4">
            In practice, most intestate Bloomington estates involve adult children as heirs. When the decedent had multiple children — a common pattern in the older State Farm and Country Financial retiree generation — all surviving children take in equal shares as tenants in common. Every child must consent to a sale. If one heir refuses, the others must petition for partition in McLean County Circuit Court.
          </p>
          <p className="text-gray-700 mb-4">
            Partition proceedings are time-consuming, expensive, and unpredictable in outcome. The court may order a sale and divide proceeds, but the timeline adds months to what was already a 6-12 month probate process. A single, specific cash offer from USA Home Buyers often resolves multi-heir disagreements before they reach the partition stage — because the offer puts a concrete number on the table that each heir can individually evaluate without the uncertainty of a contested retail listing.
          </p>
          <p className="text-gray-700 mb-4">
            The practical advice for Bloomington intestate estates: engage a McLean County probate attorney early, file the administration petition promptly, and contact USA Home Buyers for a written offer you can use in heir coordination conversations before the Letter of Office are even issued. This positions the estate for the fastest possible clean sale once the court grants authority.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Probate in McLean County IL — Frequently Asked Questions" />

        <section className="my-8 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">McLean County Circuit Court — Probate Contact</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold">Civil / Probate Division</p>
              <p>104 W. Front Street, 4th Floor, Room 404</p>
              <p>Bloomington, IL 61701</p>
              <p>Phone: (309) 888-5350</p>
              <p>Hours: Mon-Fri 8:30 AM – 4:30 PM</p>
            </div>
            <div>
              <p className="font-semibold">Circuit Clerk (General Inquiries)</p>
              <p>104 W. Front Street, Room 303</p>
              <p>Bloomington, IL 61701</p>
              <p>Phone: (309) 888-5301</p>
              <p>Website: mcleancountyil.gov</p>
            </div>
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Bloomington IL Probate Property?" sourcePage="/markets/bloomington-il/probate" />
      </div>
    </>
  );
}
