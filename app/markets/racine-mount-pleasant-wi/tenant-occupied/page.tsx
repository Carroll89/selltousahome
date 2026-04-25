/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { racineWILocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Racine WI | Wis. Stat. Ch. 704',
  description:
    'Selling a tenant-occupied rental in Racine or Mount Pleasant WI. We buy with tenants in place — no eviction required. Wisconsin landlord-tenant law (Ch. 704) explained. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a tenant-occupied house in Racine WI without evicting?',
    answer: 'Yes — we specialize in buying tenant-occupied rentals with tenants in place. You do not need to end the lease or pursue eviction before closing. Wisconsin law (Wis. Stat. § 704.09) preserves an existing written lease after a sale: the new owner takes title subject to the tenant\'s lease, with all the original terms. For month-to-month tenancies, the lease also continues — the new owner simply inherits the existing monthly tenancy. We keep the tenant, take over as landlord, and continue the same arrangement.',
  },
  {
    question: 'What does Wisconsin law say about the lease surviving a sale?',
    answer: 'Under Wis. Stat. § 704.09(1), a purchaser of Wisconsin rental property takes the property subject to any existing lease. The tenant\'s rights continue without interruption. Under § 704.09(3), the new owner is entitled to receive rent from the date of sale and is bound by the lease terms going forward. Security deposits transfer with the property — the seller must either return deposits to tenants at closing with a written accounting, or transfer them to the new owner under Wis. Admin. Code ATCP 134.06. We handle the deposit transfer at closing.',
  },
  {
    question: 'How long does it take to evict a tenant in Racine County if we need to?',
    answer: 'Wisconsin evictions are governed by Wis. Stat. Ch. 799 (small claims procedure) and Ch. 704 (landlord-tenant substantive law). Non-payment evictions require a 5-day notice (Wis. Stat. § 704.17(1p)(a)) if the lease is month-to-month or unwritten, or 5-day / 14-day depending on lease terms. After the notice period expires, the landlord files in Racine County Circuit Court — Small Claims Division (730 Wisconsin Avenue). Return date is typically 8-25 days after filing. If contested, trial is set within 30 days. If uncontested, judgment of restitution issues that day, and the Racine County Sheriff can post a writ of restitution 7-10 business days later. Total timeline: 30-60 days typical. Selling with the tenant in place avoids this entire process.',
  },
  {
    question: 'Can the tenant block the sale of a Racine rental?',
    answer: 'No. The tenant has a right to continued occupancy under the existing lease, but they do not have a right to block the sale. Wis. Stat. § 704.07 requires a landlord to provide 12 hours\' advance notice before entering for any purpose including showings, unless the tenant consents. We minimize disruption — we do not require showings before we write the offer. A drive-by exterior review plus photos from the owner is usually enough for us to commit in writing. The tenant continues to pay rent to the seller through closing; we take over as landlord the day title transfers.',
  },
  {
    question: 'What about problem tenants or non-paying tenants in Racine?',
    answer: 'We buy rentals with problem tenants, non-paying tenants, and tenants in the middle of eviction. Wisconsin\'s landlord-tenant framework under Ch. 704 and Wis. Admin. Code ATCP 134 can make eviction slow — many Racine landlords prefer to transfer the problem to a buyer rather than fight it. We price the offer to reflect the tenancy status. For rentals with judgments of eviction already pending, we can often close before the writ of restitution is served.',
  },
  {
    question: 'Do I need to give my Racine tenant notice that I\'m selling?',
    answer: 'Wisconsin law does not require you to give the tenant notice of the sale itself — the lease simply transfers to the new owner. However, you should notify the tenant in writing of the new owner\'s name, mailing address for rent, and contact information at or before closing (Wis. Stat. § 704.19 and common practice). We provide a tenant-notification letter template at closing that meets Wisconsin standards.',
  },
  {
    question: 'Do you buy small multi-unit rentals in Racine?',
    answer: 'Yes — we buy single-family rentals, duplexes, triplexes, and four-unit buildings. Racine\'s Northside and Southside have a heavy stock of two-family flats and converted duplexes built 1900-1940, along with a meaningful inventory of small apartment buildings. We handle the rent roll review, lease audit, and security deposit transfer as part of our diligence. Larger multi-family (5+ units) is case-by-case.',
  },
];

export default function RacineTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        racineWILocalBusinessSchema,
        articleSchema('Sell Your Tenant-Occupied Racine WI Rental — No Eviction Required', pageUrl, '2026-04-17'),
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
            alt="Racine WI rental property — sell with tenants in place"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/racine-mount-pleasant-wi" className="hover:text-white">Racine WI</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Tenant-Occupied Racine WI Rental — No Eviction Required
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers buys tenant-occupied rentals in Racine and Mount Pleasant WI. Wisconsin landlord-tenant law (Wis. Stat. Ch. 704) preserves the existing lease at sale — the new owner takes title subject to the tenant\'s lease. No eviction required. Written cash offer in 24 hours. Close in 7-14 days. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. Tenant stays. No eviction. No showings required.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. No showings required." sourcePage="/markets/racine-mount-pleasant-wi/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Tenancy Law — What Racine Landlords Need to Know About Selling</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin landlord-tenant substantive law is codified at Wis. Stat. Ch. 704. Procedural rules for eviction run through Ch. 799 (small claims) and Racine County Circuit Court — Small Claims Division at 730 Wisconsin Avenue. The Wisconsin Department of Agriculture, Trade, and Consumer Protection also regulates residential rental practices through Wis. Admin. Code Ch. ATCP 134 — which governs security deposits, lease disclosures, and prohibited practices.
          </p>
          <p className="text-gray-700 mb-4">
            The core rule for selling an occupied rental is in Wis. Stat. § 704.09(1): a purchaser takes the property subject to any existing lease. The tenant cannot be required to vacate solely because the property changed hands. For month-to-month tenancies, the new owner inherits the existing monthly tenancy. For fixed-term leases, the new owner honors the remaining term. This means you can sell a Racine rental without disrupting the tenant — which is usually the fastest path.
          </p>
          <p className="text-gray-700 mb-4">
            Security deposits transfer under Wis. Admin. Code ATCP 134.06 and § 704.28. At closing, the seller either returns deposits to tenants with a written accounting, or transfers them to the buyer. We credit the deposits at closing and take over the landlord role. Prorated rent for the month of closing is split at the title company.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">If You Need to Evict — The Racine County Timeline</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Step</th>
                  <th className="text-left p-3">Timeline</th>
                  <th className="text-left p-3">Statute / Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Serve 5-day notice (non-payment, month-to-month)</td><td className="p-3">5 days</td><td className="p-3">Wis. Stat. § 704.17(1p)(a)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Serve 14-day notice (non-payment, lease with prior breach)</td><td className="p-3">14 days</td><td className="p-3">Wis. Stat. § 704.17(2)(b)</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Serve 28-day notice (end of month-to-month)</td><td className="p-3">28 days</td><td className="p-3">Wis. Stat. § 704.19(3)</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">File eviction in Racine County Circuit Court Small Claims</td><td className="p-3">Day of filing</td><td className="p-3">Wis. Stat. Ch. 799</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Return date hearing</td><td className="p-3">8-25 days after filing</td><td className="p-3">Wis. Stat. § 799.05</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Judgment of restitution issued (uncontested)</td><td className="p-3">At return date</td><td className="p-3">Wis. Stat. § 799.40</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Writ of restitution — Racine County Sheriff enforcement</td><td className="p-3">7-10 business days after judgment</td><td className="p-3">Wis. Stat. § 799.45</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">
            Contested evictions add 30+ days for trial. Total eviction timeline in Racine County typically runs 30-60 days uncontested, 60-120+ days contested. Source: Wisconsin Statutes Ch. 704 and Ch. 799 (docs.legis.wisconsin.gov); Racine County Clerk of Courts, (262) 636-3333.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Racine Rental Market Context</h2>
          <p className="text-gray-700 mb-4">
            Per the Zillow Home Value Index (February 2026), the typical home value in Racine is $171,496, up 4.4% YoY. Per Redfin (March 2026), the Racine median sale price is $205,000. Much of Racine\'s rental stock is in the Northside and Southside Historic Districts — two-family flats, converted Victorians, and the 1900-1940s workers\' cottages where the second floor was converted to a rental unit. These properties are cash-flow investments, not buy-and-flip candidates, which is why tenant-occupied sales typically trade at a different multiple than owner-occupied.
          </p>
          <p className="text-gray-700 mb-4">
            Mount Pleasant has a smaller rental market, concentrated in the mid-century ranch stock and newer I-94 corridor apartments. For Racine County tenant-occupied sales, we evaluate based on rent roll, lease remaining term, tenant payment history, and condition — and deliver a written offer in 24 hours without requiring tenant showings.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a Tenant-Occupied Rental in Racine WI" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Racine WI</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/racine-mount-pleasant-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/racine-mount-pleasant-wi/foreclosure', label: 'Foreclosure' },
              { href: '/markets/racine-mount-pleasant-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/racine-mount-pleasant-wi/probate', label: 'Probate' },
              { href: '/markets/racine-mount-pleasant-wi/code-violations', label: 'Code Violations' },
              { href: '/markets/racine-mount-pleasant-wi', label: '← Back to Racine' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Racine WI Rental?" sourcePage="/markets/racine-mount-pleasant-wi/tenant-occupied" />
      </div>
    </>
  );
}
