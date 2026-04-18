/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rockford-il/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied Property Rockford IL',
  description:
    'Selling a tenant-occupied rental in Rockford IL? We buy with tenants in place — no eviction required before closing. IL Forcible Entry and Detainer law applies. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to evict my Rockford tenants before selling?',
    answer: 'No — USA Home Buyers purchases tenant-occupied properties without requiring you to evict first. We close with tenants in place and take over the landlord-tenant relationship post-closing. You do not need to initiate Forcible Entry and Detainer proceedings before selling to us. This is one of the primary advantages of a cash sale in the landlord-exit scenario.',
  },
  {
    question: 'What is the Illinois Forcible Entry and Detainer process in Winnebago County?',
    answer: 'Illinois governs eviction through the Forcible Entry and Detainer Act, 735 ILCS 5/9-101 et seq. Landlords must provide proper notice before filing: for non-payment of rent, a 5-day written notice under 735 ILCS 5/9-209 before filing an eviction complaint. For lease violations, a 10-day notice (or 30-day notice for material violations) under 735 ILCS 5/9-210. Month-to-month tenancies require a 30-day written notice to terminate. After proper notice, the landlord files a complaint in Winnebago County Circuit Court at 400 West State Street, Rockford IL 61101. Hearing is typically scheduled 7-21 days after filing. A writ of possession is issued after a favorable judgment; the Winnebago County Sheriff executes the writ to physically remove the tenant.',
  },
  {
    question: 'How long does eviction take in Winnebago County IL?',
    answer: 'An uncontested eviction in Winnebago County typically takes 4-8 weeks from initial notice to writ of possession. Contested cases can take 2-4 months or longer if tenants raise defenses or request continuances. Filing fees in the Circuit Court are typically $180-$250 depending on the claim amount. The writ of possession is executed by the Winnebago County Sheriff, which adds additional scheduling time. If you want to avoid this process entirely, selling to USA Home Buyers — which closes with tenants in place — is the faster alternative.',
  },
  {
    question: 'What notice must I give a Rockford tenant before selling?',
    answer: 'Illinois law does not require you to give a tenant advance notice before selling the property, as long as the sale doesn\'t terminate the lease early. Under Illinois law, when a rental property sells, the buyer generally takes the property subject to existing leases. A tenant with a written lease can remain through the lease term; a month-to-month tenant can be given proper notice by the new owner. USA Home Buyers, as the buyer, handles all post-closing tenant matters. Your obligation is simply to disclose the tenancy and provide access for our assessment.',
  },
  {
    question: 'Does a tenant have the right to buy the Rockford rental property first?',
    answer: 'Illinois does not have a statewide right of first refusal for residential tenants. Unless the lease specifically grants the tenant a right of first refusal, you\'re not legally required to offer the property to your tenant before selling to a third party. Some local ordinances in other IL cities create tenant purchase rights, but Rockford has no such ordinance as of 2026. Review the lease for any contractual right-of-first-refusal clause.',
  },
  {
    question: 'What happens to the tenant\'s security deposit when I sell the Rockford property?',
    answer: 'Illinois law requires the landlord to either transfer the security deposit to the new owner or return it to the tenant at closing. Under common Illinois practice, the security deposit is credited to the buyer (USA Home Buyers) at closing through the closing statement — reducing our net payment by the deposit amount, which we then hold for the tenant under Illinois law. This is handled as a standard closing adjustment; your attorney or title company will include it in the closing statement.',
  },
];

export default function RockfordTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Tenant-Occupied Property in Rockford IL — Illinois Landlord Exit Guide', pageUrl, '2026-04-18'),
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
            alt="Rockford IL rental property — Sell With Tenant"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/rockford-il" className="hover:text-white">Rockford IL</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Tenant-Occupied Rockford IL Property
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Selling a tenant-occupied property in Rockford IL? Illinois law under 735 ILCS 5/9-101 et seq. governs eviction. USA Home Buyers purchases tenant-occupied homes without requiring you to evict first. We close with tenants in place, handle the landlord-tenant relationship post-closing. No court filings, no repairs. Written offer in 24 hours. Serving all of Winnebago County. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Want out of Rockford landlording without the eviction headache? We buy tenant-occupied properties as-is, with tenants in place.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Tenants in place — no eviction required. Written offer in 24 hours." sourcePage="/markets/rockford-il/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford's Rental Market — Why Landlords Want Out</h2>
          <p className="text-gray-700 mb-4">
            Rockford's renter population is significant — ACS 2024 data puts renter-occupied housing at roughly 38.5% of the city's housing units. That's a higher rental share than many comparable Midwest cities, driven by lower homeownership rates in working-class neighborhoods and a demographic profile that includes significant lower-income and fixed-income residents. For Rockford landlords who have owned rental properties for years, the exit options are complicated by the tenant situation.
          </p>
          <p className="text-gray-700 mb-4">
            Rockford landlords contact us for three main reasons. First: a retail buyer for a tenant-occupied property is rare. Most individual buyers want vacant possession at closing — they don't want to inherit a lease and a tenant relationship with someone they didn't choose. Second: the Forcible Entry and Detainer process, while workable, costs time and money — and if the tenant is difficult, it can take months. Third: many Rockford rental properties in the Jackson Oaks, Signal Hill, and West State corridor neighborhoods have deferred maintenance that's been accumulating alongside the management burden, creating a compounding problem.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers resolves all three issues: we buy with tenants in place, don't require repairs, and close in 7-14 days.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Forcible Entry and Detainer Act — Rockford Landlord Basics</h2>
          <p className="text-gray-700 mb-4">
            Illinois eviction law is codified in the Forcible Entry and Detainer Act, 735 ILCS 5/9-101 et seq. Every eviction in Rockford must follow this statutory framework — there's no self-help eviction in Illinois. A landlord cannot change locks, remove belongings, shut off utilities, or otherwise pressure a tenant to leave without following the legal process. The penalties for self-help eviction under Illinois law are significant.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Required Notice Periods for Rockford Landlords</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Reason for Eviction</th>
                  <th className="text-left p-3">Required Notice</th>
                  <th className="text-left p-3">Statute</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Non-payment of rent</td><td className="p-3">5-day written notice to pay or vacate</td><td className="p-3">735 ILCS 5/9-209</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Lease violation</td><td className="p-3">10-day notice to cure or vacate (material breach: 30 days)</td><td className="p-3">735 ILCS 5/9-210</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Month-to-month tenancy termination</td><td className="p-3">30-day written notice</td><td className="p-3">735 ILCS 5/9-207</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Fixed-term lease at expiration</td><td className="p-3">Notice per lease terms; or 30 days if not specified</td><td className="p-3">Lease terms / 735 ILCS 5/9-207</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Winnebago County FED Court Process</h3>
          <p className="text-gray-700 mb-4">
            After proper notice expires without compliance, the landlord files a Forcible Entry and Detainer complaint in Winnebago County Circuit Court, 400 West State Street, Rockford IL 61101. Filing fee for small evictions: typically $180-$250 (confirm current fee at the Circuit Clerk's Office, 815-319-4500). The court schedules a hearing, typically 7-21 days after filing. If the tenant doesn't appear or has no defense, the court enters a judgment for possession. The court then issues a writ of possession, which the Winnebago County Sheriff executes to physically remove the tenant — with additional scheduling time for the Sheriff's schedule.
          </p>
          <p className="text-gray-700 mb-4">
            Under 735 ILCS 5/9-107, the tenant can appear and raise defenses including habitability claims, retaliatory eviction claims, or procedural defects in the notice. Contested cases can take 2-4 months or longer. For a landlord who wants out of the property entirely, the prospect of a months-long eviction proceeding before the property can even be sold is a significant burden.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling vs. Evicting — The Rockford Landlord Exit Calculation</h2>
          <p className="text-gray-700 mb-4">
            Here's the math most Rockford landlords run when they're ready to exit a rental property:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Exit Path</th>
                  <th className="text-left p-3">Timeline to Sale</th>
                  <th className="text-left p-3">Costs</th>
                  <th className="text-left p-3">Net Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Evict, then retail list</td><td className="p-3">4-8 weeks eviction + 14 days DOM + 30-45 days close = 3-4 months min</td><td className="p-3">$180-$250 filing + attorney fees + lost rent during vacancy + 5-6% commission + repairs</td><td className="p-3">85-91% FMV after all costs (best case, well-maintained)</td></tr>
                <tr className="bg-gray-50 font-medium"><td className="p-3">Sell to USA Home Buyers (tenants in place)</td><td className="p-3">7-14 days from offer acceptance</td><td className="p-3">$0 — we cover all closing costs</td><td className="p-3">70-78% FMV; no timeline risk, no eviction cost</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mb-4">
            The right choice depends on your timeline, financial situation, and how the property's condition would perform in a retail inspection. For most Rockford landlords with older rental properties in Jackson Oaks, Signal Hill, or along West State — where deferred maintenance is likely and retail buyers expect concessions — the cash offer path produces a better net outcome than the evict-and-list path.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rockford's Rental Housing Stock — What We Buy</h2>
          <p className="text-gray-700 mb-4">
            Rockford's rental stock is predominantly working-class houses and smaller multi-family properties in the Jackson Oaks, Signal Hill, West State corridor, and Midtown neighborhoods. ZHVI data shows median values of $83,000-$106,000 in these areas — low enough that the economics of renovation don't pencil out for most landlords, but high enough that a direct cash sale produces meaningful proceeds.
          </p>
          <p className="text-gray-700 mb-4">
            The typical Rockford tenant-occupied property we buy: a 3-bedroom ranch in Signal Hill, vintage 1960s construction, month-to-month tenant who has been in the property for 5+ years at below-market rent, deferred maintenance throughout. The landlord inherited the property or purchased it as an investment 10-15 years ago, has managed it remotely or part-time, and wants a clean exit.
          </p>
          <p className="text-gray-700 mb-4">
            We also buy tenant-occupied two-flats and small multi-family in Midtown and along West State Street. If both units are occupied, we close with both tenancies in place. The sale price reflects the income stream and condition — we assess accurately and make a fair offer.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Security Deposit Rules — What Transfers at Closing</h2>
          <p className="text-gray-700 mb-4">
            Illinois law requires landlords to transfer security deposits to the new owner at closing or return them to the tenant. Under standard Illinois practice, the security deposit held for the tenant is credited to the buyer in the closing statement — it effectively reduces the seller's net proceeds by the deposit amount, and the buyer holds the deposit in trust for the tenant going forward.
          </p>
          <p className="text-gray-700 mb-4">
            Illinois security deposit law requires landlords to hold deposits in a federally insured interest-bearing account, separate from personal funds, and to provide the tenant with a written receipt and the identity of the bank (for deposits held more than 25 days). Failure to follow these requirements can result in landlord liability. At closing, the title company ensures the deposit transfer is handled correctly.
          </p>
          <p className="text-gray-700 mb-4">
            Practically: if you collected a $900 security deposit from your Rockford tenant, that $900 comes off your net at closing (or we credit it to you and you return it to the tenant — discussed at the time of closing). Your net proceeds are the agreed sale price minus the security deposit amount.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What Happens After the Sale — New Owner Rights in Illinois</h2>
          <p className="text-gray-700 mb-4">
            When USA Home Buyers closes on your Rockford tenant-occupied property, the tenant's rights under Illinois law do not change at the moment of sale. Existing written leases transfer with the property — the buyer (USA Home Buyers) steps into the landlord's position and must honor the lease terms until expiration. Month-to-month tenancies can be terminated by the new owner with proper notice under 735 ILCS 5/9-207 — typically a 30-day written notice.
          </p>
          <p className="text-gray-700 mb-4">
            This is important to understand when structuring the sale: the tenant's occupancy doesn't end at closing. USA Home Buyers takes over the landlord-tenant relationship post-closing and handles all subsequent tenant interactions, notices, and — if necessary — Forcible Entry and Detainer proceedings. Your obligation as seller ends at closing. The tenant is informed that ownership has changed, their lease rights are confirmed, and USA Home Buyers handles everything from that point forward.
          </p>
          <p className="text-gray-700 mb-4">
            Rockford's renter population (~38.5% of housing units per ACS 2024) and the concentration of working-class rental housing in Jackson Oaks, Signal Hill, and West State means the local market is accustomed to tenant-occupied transactions. Illinois title companies handle the security deposit transfer and lease assignment as routine closing items. There are no special local ordinances in Rockford that create additional sale restrictions for tenant-occupied properties — the standard Illinois framework applies.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling a Tenant-Occupied Property in Rockford IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/rockford-il', label: '← Back to Rockford IL' },
              { href: '/markets/rockford-il/code-violations', label: 'Code Violations' },
              { href: '/markets/rockford-il/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/rockford-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/rockford-il/fire-damage', label: 'Fire Damage' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
              { href: '/markets/springfield-il/tenant-occupied', label: 'Springfield IL Tenant' },
              { href: '/markets/rockford-il/faq', label: 'Rockford IL FAQ' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Exit Your Rockford IL Rental Property?" sourcePage="/markets/rockford-il/tenant-occupied" />
      </div>
    </>
  );
}
