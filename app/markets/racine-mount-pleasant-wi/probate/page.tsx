/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { racineWILocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/probate`;

export const metadata: Metadata = {
  title: 'Sell House in Probate Racine WI | Wis. Stat. Ch. 851–879',
  description:
    'Selling a Racine WI house through probate. Wisconsin informal vs formal administration (Ch. 856), Racine County Register in Probate filing, fast cash close. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Where is probate filed for a Racine WI decedent?',
    answer: 'All Racine County probate matters are filed with the Racine County Register in Probate, located in the Racine County Courthouse at 730 Wisconsin Avenue, Racine WI 53403. Register in Probate direct line: (262) 636-3868. Main Racine County Circuit Court number: (262) 636-3333. This office handles probate for all decedents who owned real property in the City of Racine, Mount Pleasant, Caledonia, Sturtevant, Union Grove, Burlington, Wind Point, Raymond, Waterford, and Rochester (WI).',
  },
  {
    question: 'What is the difference between informal and formal administration in Wisconsin?',
    answer: 'Wisconsin offers two main probate paths under Wis. Stat. Ch. 856 (Informal Administration) and Ch. 857-879 (Formal Administration). Informal administration is handled by the Register in Probate without judicial hearings — it is faster and cheaper, typically 6-12 months, and is the default for uncontested estates where the will is clear and all heirs are known and cooperative. Formal administration requires judicial supervision and is used when the will is contested, an heir is a minor, an inventory is disputed, or creditors exceed the probate estate. Formal takes 12-24 months. Most Racine County estates proceed informally under Ch. 856.',
  },
  {
    question: 'Can I sell a Racine probate house before probate is complete?',
    answer: 'Yes. Under Wis. Stat. § 860.01, a personal representative has the power to sell real property held in the probate estate. In informal administration, the personal representative receives Domiciliary Letters from the Register in Probate authorizing the sale, typically within 4-8 weeks of opening the estate. You can sign a purchase agreement before the Letters are issued, with closing contingent on the court granting authority. Under Wis. Stat. § 860.13, the sale must be at a reasonable price — a written cash offer from USA Home Buyers supported by recent Racine comps typically satisfies that standard without requiring court approval of the specific price in informal administration.',
  },
  {
    question: 'Is there a small estate procedure in Wisconsin?',
    answer: 'Yes — Wisconsin allows two simplified procedures for small estates. Under Wis. Stat. § 867.01 (Summary Settlement), if the total probate estate (net of funeral, administration, and debts) does not exceed $50,000, the court can order summary settlement without a full probate. Under Wis. Stat. § 867.03, transfer by affidavit is available for estates of personal property under $50,000 — this does not cover real estate. For a Racine home of any meaningful value, you will almost always need full informal administration to transfer title.',
  },
  {
    question: 'How long does Wisconsin probate take?',
    answer: 'Uncontested Racine County informal administration estates typically close in 6-12 months from the petition filing. Wis. Stat. § 859.01 requires creditors be given at least 3 months from the date of first publication of the notice to creditors to file claims, which is the floor on timeline. Formal administration for contested estates in Racine County Circuit Court ranges from 12-24 months. Selling the house can happen mid-probate — the personal representative does not have to wait for final discharge. That\'s often the cleanest way to handle the biggest probate asset.',
  },
  {
    question: 'Do I need to clean out the Racine house before selling?',
    answer: 'No. We buy Racine probate properties as-is. Leave everything you don\'t want — estate furniture, old appliances, paperwork, personal items. We handle the cleanout after closing. For older homes in the Northside or Southside Historic Districts with decades of accumulated belongings, cream brick cottages from the 1890s where grandparents lived their whole lives, this is typically the biggest practical benefit of selling to a cash buyer versus listing traditionally.',
  },
  {
    question: 'What happens to the mortgage on a probate property in Racine?',
    answer: 'The mortgage stays on the property and must be paid at closing from the sale proceeds. Federal law (the Garn-St Germain Depository Institutions Act) prevents the lender from calling the loan due solely because of the owner\'s death when the property passes to a relative — so heirs can make payments during probate without triggering acceleration. But any existing mortgage must be satisfied at closing. If the mortgage exceeds the Racine home\'s value, a short sale may be possible; we can coordinate with the lender.',
  },
  {
    question: 'What about the transfer fee and estate tax on a Racine probate sale?',
    answer: 'Wisconsin has no state estate tax or inheritance tax. Federal estate tax only applies to estates over $13.61 million (2026 exemption). The Wisconsin realty transfer fee under Wis. Stat. § 77.22 applies to probate sales — $3.00 per $1,000 of consideration (0.30%), paid by the seller estate. On a $205,000 Racine sale: $615. Racine County adds no surcharge. Wisconsin Real Estate Transfer Return (RETR) must be filed at recording. When you sell to USA Home Buyers we cover all closing costs.',
  },
];

export default function RacineProbatePage() {
  return (
    <>
      <SchemaMarkup schema={[
        racineWILocalBusinessSchema,
        articleSchema('Sell Your Racine WI Probate Property — Wis. Stat. Ch. 856 Informal Administration, Fast Close', pageUrl, '2026-04-17'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/racine-mount-pleasant-wi-hero-640.jpg 640w, /images/optimized/racine-mount-pleasant-wi-hero-828.jpg 828w, /images/optimized/racine-mount-pleasant-wi-hero-1080.jpg 1080w, /images/optimized/racine-mount-pleasant-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/racine-mount-pleasant-wi-hero-1200.jpg"
            alt="Racine WI homes — Sell Your Racine WI Probate Property — As-Is, Fast Close"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/racine-mount-pleasant-wi" className="hover:text-white">Racine WI</Link> › Probate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Racine WI Probate Property — Fast, As-Is, No Cleanout
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases probate real estate filed with the Racine County Register in Probate. Wisconsin informal administration (Wis. Stat. Ch. 856) typically issues Domiciliary Letters in 4-8 weeks, authorizing the personal representative to sell under Wis. Stat. § 860.01. We give a written cash offer in 24 hours and can close once Letters issue. Any condition, no cleanout. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days after Letters issue. No repairs, no cleanout, no waiting for full probate discharge.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/racine-mount-pleasant-wi/probate" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Probate in Racine County — The Two Paths</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin probate is governed by Wis. Stat. Chapters 851 (general provisions), 853 (wills), 856 (informal administration), and 857-879 (formal administration, claims, distribution, and closing). For most Racine County estates, the informal track under Ch. 856 is the default — it skips judicial hearings and runs through the Racine County Register in Probate on the 6th floor of the Racine County Courthouse at 730 Wisconsin Avenue.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Feature</th>
                  <th className="text-left p-3">Informal Administration (Ch. 856)</th>
                  <th className="text-left p-3">Formal Administration (Ch. 857-879)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Who supervises</td><td className="p-3">Racine County Register in Probate (administrative)</td><td className="p-3">Racine County Circuit Court Judge</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Typical timeline</td><td className="p-3">6-12 months</td><td className="p-3">12-24 months</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">When used</td><td className="p-3">Uncontested, will is clear, heirs cooperate</td><td className="p-3">Contested will, minor heir, disputed inventory, creditor issues</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Court hearings required</td><td className="p-3">None unless objection filed</td><td className="p-3">Multiple — opening, inventory, accounting, closing</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Real estate sale authority</td><td className="p-3">Letters grant authority; no separate court order needed for sale at reasonable price</td><td className="p-3">Court order to sell often required</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Filing fee</td><td className="p-3">$262 + publication (2026 Racine County)</td><td className="p-3">$262 + publication + hearing fees</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">
            Source: Wisconsin Statutes Ch. 856, 857, 859, 860 (docs.legis.wisconsin.gov). Racine County Register in Probate: (262) 636-3868.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Racine Probate House-Sale Timeline</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>Petition filed with Racine County Register in Probate</strong> — Form PR-1801 (Informal) or PR-1806 (Formal). Filing fee $262. Day 0.</li>
            <li><strong>Domiciliary Letters issued</strong> — the Register in Probate reviews the petition, publishes notice to creditors (a 3-month minimum claim period begins), and issues Letters authorizing the personal representative. Typically 4-8 weeks in Racine County.</li>
            <li><strong>Marketing / offer acceptance</strong> — the personal representative can list or accept cash offers immediately. A cash offer from USA Home Buyers can be ready in 24 hours; we generally hold offers open 14-30 days so the estate has time to review.</li>
            <li><strong>Closing at a Racine title company</strong> — Knight Barry Title (800 Wisconsin Ave) and First American Title are the two most common in Racine. Closing can occur any time after Letters issue; the claims period does not block closing but sale proceeds may be held pending claim resolution.</li>
            <li><strong>Distribution at estate closing</strong> — after the claims period, final accounting, and any fiduciary bond discharge, the court authorizes distribution to heirs per the will or intestate succession (Wis. Stat. Ch. 852).</li>
          </ol>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Racine Market Data for Probate Sales</h2>
          <p className="text-gray-700 mb-4">
            Per the Zillow Home Value Index (February 2026): typical Racine home value is $171,496, up 4.4% YoY. Per Redfin (March 2026): Racine median sale price is $205,000, 35 days on market, 8 offers per listing average. Per Realtor.com (April 2026): Racine-Mount Pleasant metro hotness median is $347,720. The Wisconsin realty transfer fee is $3.00 per $1,000 (Wis. Stat. § 77.22) — $615 on a $205,000 sale. Wisconsin has no state estate tax or inheritance tax.
          </p>
          <p className="text-gray-700 mb-4">
            Most probate properties in Racine are older — the Northside and Southside Historic Districts are full of 1890s-1920s cream brick workers\' cottages, Victorians, and early-20th-century bungalows. Knob-and-tube wiring, galvanized plumbing, lead paint, and original slate or asbestos-shingle roofs are the norm, not the exception. These properties rarely qualify for conventional or FHA financing, which means the true buyer pool for a traditional listing is small and cash-heavy anyway. A direct cash sale to a professional buyer compresses the timeline and eliminates the risk of a financing-contingent offer falling through mid-probate.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Probate in Racine WI" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Racine WI</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/racine-mount-pleasant-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/racine-mount-pleasant-wi/foreclosure', label: 'Foreclosure' },
              { href: '/markets/racine-mount-pleasant-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/racine-mount-pleasant-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/racine-mount-pleasant-wi/code-violations', label: 'Code Violations' },
              { href: '/markets/racine-mount-pleasant-wi', label: '← Back to Racine' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Racine WI Probate Property?" sourcePage="/markets/racine-mount-pleasant-wi/probate" />
      </div>
    </>
  );
}
