/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell My House Fast Wisconsin',
  description:
    'We buy houses for cash across Wisconsin — Kenosha, Racine-Mount Pleasant, and Oshkosh (Winnebago County). Written offer in 24 hours, close in 7 days. Any condition, no repairs.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-wisconsin` },
};

export default function SellHouseFastWisconsinPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Wisconsin', item: `${SITE_URL}/sell-house-fast-wisconsin` },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumb]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Sell My House Fast Wisconsin — Cash Home Buyers
        </h1>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-2">TL;DR</p>
          <p className="text-sm text-blue-900 leading-relaxed">
            USA Home Buyers purchases houses for cash across Wisconsin — currently serving Kenosha, Racine-Mount Pleasant, and Oshkosh (Winnebago County). Written offer in 24 hours, close in 7–14 days, any condition, no repairs, no fees. Wisconsin realty transfer fee ($3 per $1,000, state-only, seller pays) covered by us on every deal. Call 888-274-5006.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Markets We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/markets/racine-mount-pleasant-wi" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Racine &amp; Mount Pleasant, WI</h3>
              <p className="text-sm text-gray-600">Racine County · Zillow ZHVI $171,496 (Racine city) / RDC metro $347,720 · 35 days avg DOM · Microsoft data center tailwind in Mount Pleasant</p>
              <p className="text-xs text-brand-primary mt-2">See Racine-Mount Pleasant market →</p>
            </Link>
            <Link href="/markets/kenosha-wi" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Kenosha, WI</h3>
              <p className="text-sm text-gray-600">Kenosha County · Zillow ZHVI $268,793 · 36 days avg DOM · Chicago-Milwaukee corridor growth</p>
              <p className="text-xs text-brand-primary mt-2">See Kenosha market →</p>
            </Link>
            <Link href="/markets/oshkosh-wi" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Oshkosh, WI</h3>
              <p className="text-sm text-gray-600">Winnebago County · Zillow ZHVI $250,967 · RDC hotness rank #13 (score 92.809) · 36 days avg DOM · EAA AirVenture city, UW Oshkosh anchor</p>
              <p className="text-xs text-brand-primary mt-2">See Oshkosh market →</p>
            </Link>
            <Link href="/markets/wausau-wi" className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary transition-colors group">
              <h3 className="font-bold text-brand-dark group-hover:text-brand-primary mb-1">Wausau, WI</h3>
              <p className="text-sm text-gray-600">Marathon County · Median $366,000 metro · #18 Hottest Market</p>
              <p className="text-xs text-brand-primary mt-2">See Wausau market →</p>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 1: Wisconsin Home Sale — Legal Overview</h2>
          <p className="text-gray-700 mb-4">
            Selling a home in Wisconsin involves specific legal requirements that differ from other states. Wisconsin is <strong>not an attorney state</strong> — title companies and closing agents routinely handle real estate closings without attorney involvement, though buyer-side lenders often bring their own counsel. Standard practice is for the seller to sign the deed at the title company and the buyer to bring funds.
          </p>
          <p className="text-gray-700 mb-4">
            Each county has its own Register of Deeds. For Racine County properties, recording is at 730 Wisconsin Avenue, Racine WI 53403, (262) 636-3208. For Kenosha County, recording is at 1010 56th Street, Kenosha WI 53140, (262) 653-2444. Recording fee is $30 per document statewide (flat).
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin market values vary widely within the Racine-Mount Pleasant-Kenosha corridor. According to the Zillow Home Value Index (February 2026), the typical Racine home value is $171,496 (+4.4% YoY) and Kenosha is $268,793 (+4.6% YoY). Mount Pleasant runs substantially higher — median sale price per square foot of $174 (Redfin, March 2026) and a metro median of $347,720 on the Realtor.com Market Hotness Index (April 2026). The Microsoft data center development on former Foxconn land is an active tailwind for Mount Pleasant valuations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 2: Wisconsin Transfer Tax &amp; Closing Costs</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin charges a state <strong>Real Estate Transfer Fee</strong> of $3.00 per $1,000 of consideration ($0.30 per $100) on every conveyance — this is set by Wis. Stat. § 77.22. The fee applies statewide. <strong>There is no county or municipal surcharge</strong> anywhere in Wisconsin. Entirely paid by the seller (grantor) by statute. A Wisconsin Real Estate Transfer Return (RETR) form must accompany every deed.
          </p>
          <p className="text-gray-700 mb-4">
            Examples:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
            <li>On a $171,496 Racine city sale: <strong>$515 transfer fee</strong></li>
            <li>On a $205,000 Racine median sale: <strong>$615 transfer fee</strong></li>
            <li>On a $268,793 Kenosha sale: <strong>$806 transfer fee</strong></li>
            <li>On a $347,720 Mount Pleasant metro sale: <strong>$1,043 transfer fee</strong></li>
          </ul>
          <p className="text-gray-700 mb-4">
            When you sell to USA Home Buyers, we cover all closing costs including the Wisconsin realty transfer fee. Source: <a href="https://www.revenue.wi.gov/Pages/FAQS/slf-retr-retr-n-p.aspx" className="text-brand-primary hover:underline" target="_blank" rel="noopener">Wisconsin Department of Revenue — Real Estate Transfer Fee FAQ</a>; statutory text at <a href="https://docs.legis.wisconsin.gov/statutes/statutes/77/ii/22" className="text-brand-primary hover:underline" target="_blank" rel="noopener">Wis. Stat. § 77.22</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 3: Wisconsin Foreclosure Process</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin is a <strong>judicial foreclosure state</strong>. Every foreclosure must be filed in the Circuit Court of the county where the property sits (Wis. Stat. Ch. 846). For Racine County properties, that's Racine County Circuit Court, 730 Wisconsin Avenue, Racine WI 53403, (262) 636-3333. For Kenosha County, it's Kenosha County Circuit Court, 912 56th Street, Kenosha WI 53140. For Winnebago County (Oshkosh) properties, it's Winnebago County Circuit Court, 415 Jackson St, Oshkosh WI 54901, (920) 236-4848.
          </p>
          <p className="text-gray-700 mb-4">
            Typical timeline from first filing to confirmation of sheriff's sale: <strong>10–14 months</strong>. After the judgment of foreclosure is entered, a statutory redemption period begins. Under Wis. Stat. § 846.101, 1–4 family owner-occupied homes have a <strong>6-month redemption period when the lender waives the right to a deficiency judgment</strong> (the common path). If the lender preserves the deficiency right, the redemption is 12 months. Commercial and multifamily foreclosures are governed by § 846.103 with different timelines.
          </p>
          <p className="text-gray-700 mb-4">
            Once the sheriff's sale is confirmed by the court, the sale is final. Selling before the sale is the cleanest way for a distressed Wisconsin homeowner to preserve equity. Source: <a href="https://docs.legis.wisconsin.gov/statutes/statutes/846.pdf" className="text-brand-primary hover:underline" target="_blank" rel="noopener">Wis. Stat. Ch. 846 (docs.legis.wisconsin.gov)</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 4: Wisconsin Probate Overview</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin probate is handled by the <strong>Circuit Court, Probate Division</strong> in each county. When someone dies owning real estate in Wisconsin, the estate typically goes through probate (unless the property was held in a trust, as joint tenancy with right of survivorship, or via a transfer-on-death deed).
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin offers three main probate tracks under Ch. 851–882:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-4">
            <li><strong>Transfer by Affidavit</strong> — estates under $50,000 with no real estate needing transfer. Fast, no formal probate.</li>
            <li><strong>Informal Administration</strong> — most common for estates with real property. 3–12 months typical.</li>
            <li><strong>Formal Administration</strong> — contested estates, ambiguous wills, or creditor disputes. 12–24+ months.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            In Wisconsin, a personal representative (executor or administrator) can sell real estate during informal or formal administration with court approval. We frequently structure deals where the purchase contract is signed before the estate closes, with closing contingent on the personal representative receiving Domiciliary Letters.
          </p>
          <p className="text-gray-700 mb-4"><strong>Probate courts for our Wisconsin markets:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
            <li><strong>Racine County Circuit Court — Probate Division</strong>, 730 Wisconsin Avenue, 6th Floor, Racine WI 53403. Main: (262) 636-3333 · Register in Probate: (262) 636-3868</li>
            <li><strong>Kenosha County Circuit Court — Probate Division</strong>, 912 56th Street, Kenosha WI 53140. Phone: (262) 653-2678</li>
            <li><strong>Winnebago County Circuit Court — Register in Probate</strong> (Oshkosh), 415 Jackson St, Room 242, Oshkosh WI 54901. Phone: (920) 236-4808</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Source: <a href="https://docs.legis.wisconsin.gov/statutes/statutes/851" className="text-brand-primary hover:underline" target="_blank" rel="noopener">Wis. Stat. Ch. 851–882 (docs.legis.wisconsin.gov)</a>; <a href="https://wilawlibrary.gov/topics/wills/probate.php" className="text-brand-primary hover:underline" target="_blank" rel="noopener">Wisconsin State Law Library probate guide</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 5: Wisconsin Market Snapshot</h2>
          <p className="text-gray-700 mb-4">
            USA Home Buyers serves three Wisconsin counties across two distinct regions. Kenosha and Racine counties anchor our southeast WI footprint in the Chicago-Milwaukee corridor on Lake Michigan. Winnebago County (Oshkosh) anchors our Fox Valley presence in central-northeast Wisconsin — a nationally hot market at RDC rank #13.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Market</th>
                  <th className="text-left p-3">County</th>
                  <th className="text-left p-3">Zillow ZHVI</th>
                  <th className="text-left p-3">Avg DOM</th>
                  <th className="text-left p-3">Distinctive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="p-3"><Link href="/markets/racine-mount-pleasant-wi" className="text-brand-primary hover:underline">Racine &amp; Mount Pleasant</Link></td>
                  <td className="p-3">Racine County</td>
                  <td className="p-3">$171,496 (+4.4% YoY)</td>
                  <td className="p-3">~35 days</td>
                  <td className="p-3 text-xs">Northside cream brick cottages (1870s-1910s); Microsoft data center in Mount Pleasant</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3"><Link href="/markets/kenosha-wi" className="text-brand-primary hover:underline">Kenosha</Link></td>
                  <td className="p-3">Kenosha County</td>
                  <td className="p-3">$268,793 (+4.6% YoY)</td>
                  <td className="p-3">~36 days</td>
                  <td className="p-3 text-xs">Post-war bungalows, Chicago-commute growth, lakefront</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3"><Link href="/markets/oshkosh-wi" className="text-brand-primary hover:underline">Oshkosh</Link></td>
                  <td className="p-3">Winnebago County</td>
                  <td className="p-3">$250,967 (Apr 2026)</td>
                  <td className="p-3">36.0 days</td>
                  <td className="p-3 text-xs">RDC hotness rank #13; EAA AirVenture city; UW Oshkosh anchor; Lake Winnebago waterfront premium</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">Data: Zillow ZHVI (Feb 2026 for Racine/Kenosha; Apr 2026 for Oshkosh) and Redfin/Realtor.com market statistics (Mar–Apr 2026). Racine-Mount Pleasant metro median $347,720 per Realtor.com Market Hotness Index (April 2026, rank #8). Oshkosh hotness rank #13 (score 92.809, RDC March 2026).</p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Wisconsin Home" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/sell-house-fast-wisconsin" />
      </div>
    </>
  );
}
