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

const pageUrl = `${SITE_URL}/markets/springfield-il/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Springfield IL',
  description:
    'Selling a rental property with tenants in Springfield IL? We buy with tenants in place — no eviction required. Written offer in 24 hours. 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Springfield rental property without evicting tenants first?',
    answer: 'Yes. We buy tenant-occupied properties in Springfield IL with tenants still in place. You don\'t need to evict anyone before closing. The sale transfers ownership, and the new owner (us) inherits the lease. Tenants have legal rights to remain in the property under their existing lease terms — their lease survives the sale. We handle the tenant relationship post-closing.',
  },
  {
    question: 'What Illinois eviction law applies to Springfield — is Chicago\'s RLTO relevant?',
    answer: 'No. Chicago\'s Residential Landlord and Tenant Ordinance (RLTO) is a Chicago-only ordinance and has no application to Springfield or anywhere outside the City of Chicago. Springfield does not have a comparable local tenant protection ordinance. Illinois statewide landlord-tenant law applies, with evictions governed by the Forcible Entry and Detainer Act (735 ILCS 5/9-101 et seq.). Sangamon County eviction cases are filed at the Sangamon County Circuit Court, 200 S 9th Street, Springfield IL 62701.',
  },
  {
    question: 'What is the Illinois eviction process in Sangamon County?',
    answer: 'Under the Illinois Forcible Entry and Detainer Act (735 ILCS 5/9-101 et seq.), a landlord must provide written notice before filing an eviction action. For non-payment: 5-day notice to pay or vacate. For lease violations: 10-day notice to cure or vacate. For month-to-month tenancies: 30-day notice to terminate. After the notice period, the landlord files a Forcible Entry and Detainer complaint in Sangamon County Circuit Court. A hearing is typically scheduled within 3-5 weeks. If the court enters an eviction judgment, the tenant has additional time before the sheriff enforces the order. Total timeline from notice to sheriff enforcement: 2-4 months typical in Sangamon County.',
  },
  {
    question: 'Do tenants have to be notified before I sell the property?',
    answer: 'Illinois law does not require a landlord to give tenants advance notice of an intent to sell. However, tenants do have a right to remain in the property under their existing lease terms after the sale — the lease transfers with the property to the new owner. We handle all tenant communications after closing. We\'ll notify the tenants of the ownership change and arrange the post-closing relationship. You don\'t need to do anything beyond completing the sale.',
  },
  {
    question: 'What if my tenant has stopped paying rent?',
    answer: 'Sell to us with the non-paying tenant still in place. We factor the non-payment situation into our offer. After closing, we handle the eviction process if needed — that\'s our responsibility, not yours. You get your cash at closing and walk away. We handle the tenant issue on our own timeline.',
  },
];

export default function SpringfieldTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Tenant-Occupied Property in Springfield IL — Landlord Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/springfield-il-hero-640.jpg 640w, /images/optimized/springfield-il-hero-828.jpg 828w, /images/optimized/springfield-il-hero-1080.jpg 1080w, /images/optimized/springfield-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/springfield-il-hero-1200.jpg"
            alt="Springfield IL rental property — Sell with tenants in place"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/springfield-il" className="hover:text-white">Springfield IL</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Tenant-Occupied Springfield IL Rental Property
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases tenant-occupied rental properties in Springfield IL with tenants still in place — no eviction required before closing. Chicago's RLTO doesn't apply in Springfield; Illinois Forcible Entry and Detainer Act (735 ILCS 5/9-101) governs. We handle the tenant relationship after closing. Written offer in 24 hours, close in 7-14 days. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Tenants in place? No problem. We buy rental properties with occupied units — no eviction required before closing. We inherit the tenant relationship.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/springfield-il/tenant-occupied.mp4"
        title="Sell a Rental Property in Springfield IL"
        poster="/videos/springfield-il/tenant-occupied-poster.jpg"
        subtitle="Done with being a landlord? We buy tenant-occupied homes as-is"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Trying to sell a rental property in Springfield with tenants still living there? At USA Home Buyers, we purchase tenant-occupied properties throughout Sangamon County, as-is. You don't have to evict anyone or wait for a lease to expire. Ready to exit your rental? Call us at 888-440-5250.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Tenants in place, no problem. Written offer in 24 hours." sourcePage="/markets/springfield-il/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Tenant-Occupied Property Sales — What Springfield Landlords Need to Know</h2>
          <p className="text-gray-700 mb-4">
            Springfield has a renter-occupied housing rate of roughly 36% — somewhat higher than the national average. The city's rental stock is a mix of Victorian-era multi-family buildings in Enos Park and the North Side, post-war duplexes and small apartment buildings on the West Side and South Side, and single-family rentals throughout the older neighborhoods. Many Springfield landlords are accidental investors — they inherited a property that's now rented, or they moved away for work but kept the house and rented it out.
          </p>
          <p className="text-gray-700 mb-4">
            When it's time to sell, the presence of tenants doesn't have to complicate the transaction. We buy Springfield rental properties with tenants occupying them — current on rent, behind on rent, month-to-month, or under a fixed-term lease. You don't need to manage the tenant relationship through a sale process; we take that over at closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Tenant Protections — Springfield vs. Chicago</h2>
          <p className="text-gray-700 mb-4">
            The most important thing for Springfield landlords to understand: Chicago's Residential Landlord and Tenant Ordinance (RLTO) does not apply to Springfield. The Chicago RLTO is a Chicago city ordinance — it applies to rental properties within the City of Chicago only. Springfield has no comparable local ordinance. Illinois statewide landlord-tenant law — primarily the Forcible Entry and Detainer Act (735 ILCS 5/9-101 et seq.) — governs residential tenancies in Springfield.
          </p>
          <p className="text-gray-700 mb-4">
            This matters because Chicago's RLTO imposes significant additional requirements on landlords — specific notice requirements, security deposit return procedures, and tenant remedies not required by state law. None of those Chicago-specific requirements apply in Springfield. Springfield landlords operate under the more straightforward statewide framework.
          </p>
          <p className="text-gray-700 mb-4">
            Under Illinois statewide law, tenants have the right to remain in the property under their existing lease after a sale. The lease "runs with the land" — it transfers to the new owner automatically. Tenants cannot be evicted simply because the property changes hands; their existing lease terms must be honored by the new owner for its remaining duration.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Eviction Process in Sangamon County (For Context)</h2>
          <p className="text-gray-700 mb-4">
            If the new owner (us) needs to address a tenant situation post-closing, the Illinois Forcible Entry and Detainer Act (735 ILCS 5/9-101 et seq.) governs the eviction process. Sangamon County eviction cases are filed in the Sangamon County Circuit Court at 200 South 9th Street, Springfield IL 62701. The process in Sangamon County typically runs significantly faster than in Cook County (Chicago) — the Cook County docket is severely backlogged, while Sangamon County's smaller caseload allows faster scheduling.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Situation</th>
                  <th className="text-left p-3">Required Notice</th>
                  <th className="text-left p-3">Statute</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Non-payment of rent</td><td className="p-3">5-day notice to pay or vacate</td><td className="p-3">735 ILCS 5/9-209</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Lease violation (curable)</td><td className="p-3">10-day notice to cure or vacate</td><td className="p-3">735 ILCS 5/9-210</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Month-to-month tenancy termination</td><td className="p-3">30-day notice to vacate</td><td className="p-3">735 ILCS 5/9-207</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">End of fixed-term lease (no renewal)</td><td className="p-3">Notice per lease terms or 30 days</td><td className="p-3">Lease terms + ILCS 5/9-207</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            Once the notice period expires, the landlord files a Forcible Entry and Detainer (FED) complaint at the Sangamon County Circuit Court clerk's office, 200 S. 9th Street, Springfield. Filing fees for residential evictions run $200-$250. The clerk's office sets a hearing date, and the tenant is served a summons — service must be completed at least 3 days before the hearing date under 735 ILCS 5/9-107. If the tenant does not appear, the court typically enters a default judgment. If the tenant contests the action, the court may grant a single continuance; contested FED hearings in Sangamon County rarely extend beyond two court dates. After judgment, the landlord files for a writ of possession with the Sangamon County Sheriff's Office, which typically executes the writ within 5-10 business days of receipt. If you're already months into this process with a non-paying tenant, selling to us short-circuits the entire timeline — we buy the property, inherit the tenant situation, and you walk away at closing with cash.
          </p>
          <p className="text-gray-700 mb-4">
            After the notice period expires, a Forcible Entry and Detainer complaint can be filed in Sangamon County Circuit Court. A hearing is typically scheduled within 3-5 weeks. If the court enters an eviction judgment, the tenant has 7 days to voluntarily vacate before the landlord can request a sheriff's writ of possession. Total timeline from notice to physical eviction: 2-4 months typical in Sangamon County. This is all post-closing, and it's our responsibility — not yours.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield Rental Property Market — Value Context</h2>
          <p className="text-gray-700 mb-4">
            Springfield's rental market reflects the city's state-government employment base. A significant portion of tenants are state employees or university-affiliated workers who value stable, affordable housing near the Capitol complex and downtown. The 36% renter rate and the city's stock of older multi-family buildings in Enos Park and near-downtown create a steady rental demand.
          </p>
          <p className="text-gray-700 mb-4">
            For landlords, Springfield's current market appreciation is worth noting. The Redfin median sale price hit $187,000 in March 2026 — up 23% year-over-year. Even properties that need significant work are worth more than they were in 2022 or 2023. If you've been holding a rental property for 5-10 years, the equity you've built may be substantial. A cash sale captures that equity cleanly without the carrying costs and tenant-management burden of a retail listing.
          </p>
          <p className="text-gray-700 mb-4">
            We factor the current occupancy situation into our offer. A property with a reliable paying tenant may command a slightly higher offer than a vacant property because rental income reduces carry costs during renovation. A property with a non-paying tenant or significant arrears gets priced accordingly — but we still buy it.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Security Deposits — Illinois Requirements and What Happens at Sale</h2>
          <p className="text-gray-700 mb-4">
            Illinois statewide law governs security deposits for residential tenancies outside Chicago. There's no interest payment requirement on deposits under Illinois statewide law (Chicago's RLTO requires interest — but again, that doesn't apply in Springfield). The security deposit must be held separate from personal funds and returned within 30 days of the tenant vacating (45 days if itemized deductions are claimed), under 765 ILCS 710/ (Landlord and Tenant Act) and 765 ILCS 720/ (Security Deposit Return Act).
          </p>
          <p className="text-gray-700 mb-4">
            At a property sale, security deposits transfer to the new owner. The seller (you) should provide us with documentation of all security deposits held — amount, tenant name, and unit — at closing. We credit the buyer (us) for the deposit amounts at closing, and we assume responsibility for returning the deposits to tenants when they vacate. You receive the full purchase price; the deposit transfer is handled as a closing adjustment. This is standard practice in Illinois residential tenant-occupied sales.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-3">What Happens to Existing Leases After the Sale?</h3>
          <p className="text-gray-700 mb-4">
            Under Illinois law, a tenant's lease survives a property sale — it "runs with the land" to the new owner. The new owner (us) takes the property subject to the existing lease terms. Tenants cannot be required to vacate simply because the property changed hands; their lease continues under its existing terms for its full remaining duration.
          </p>
          <p className="text-gray-700 mb-4">
            For month-to-month tenants, the new owner can terminate the tenancy with proper 30-day notice under 735 ILCS 5/9-207. For tenants under a fixed-term lease, the tenancy continues until the lease expires — at which point the new owner can choose to renew or not.
          </p>
          <p className="text-gray-700 mb-4">
            We handle all of this post-closing. You provide us with copies of the leases (or describe the arrangements if they're informal month-to-month), we notify the tenants of the ownership change after closing, and we manage the tenant relationship from there. Your only obligation is completing the sale — we take it from there.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Springfield Multi-Family Properties — We Buy Those Too</h2>
          <p className="text-gray-700 mb-4">
            We purchase single-family rentals, duplexes, and small multi-family buildings (2-4 units) throughout Springfield and Sangamon County. Multi-family sales with multiple occupied units are more complex than single-family sales, but we handle them routinely. We need information on each unit — lease terms, rent amounts, any arrears, security deposits — and we price the property as an investment based on current occupancy and income.
          </p>
          <p className="text-gray-700 mb-4">
            Many Springfield multi-family landlords are reluctant sellers who've inherited a building or have been managing a property for decades and are ready to exit. If that's your situation, call 888-440-5250. We'll walk through the specifics of your building, the tenancy situations, and make a written offer within 24 hours.
          </p>
          <p className="text-gray-700 mb-4">
            Springfield's Victorian-era multi-family stock — particularly the larger converted mansions in Enos Park and Aristocracy Hill that have been split into 2-4 unit buildings — is a specific category we deal with regularly. These buildings have the same age-related challenges as single-family Victorians (original electrical, aging plumbing, deferred exterior maintenance) plus the additional complexity of multiple tenants. We price these based on actual condition and income, not wishful renovation math.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Springfield IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/springfield-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/springfield-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/springfield-il/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/springfield-il/probate', label: 'Probate Sale' },
              { href: '/markets/springfield-il/code-violations', label: 'Code Violations' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Seller Guide' },
              { href: '/markets/springfield-il', label: '← Back to Springfield IL' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Springfield IL Rental Property?" sourcePage="/markets/springfield-il/tenant-occupied" />
      </div>
    </>
  );
}
