/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/peoria-il/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Peoria IL — Cash Buyer, No Eviction Required',
  description:
    'Sell a tenant-occupied rental property in Peoria IL. We buy with tenants in place. IL eviction law (735 ILCS 5/9), Peoria County Circuit Court. Call (888) 440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Will you buy a tenant-occupied house in Peoria IL?',
    answer: 'Yes. USA Home Buyers purchases tenant-occupied properties in Peoria and throughout Peoria County — with tenants in place, no eviction required before closing. We close on a mutually agreed timeline that respects any applicable lease terms. Call (888) 440-5250.',
  },
  {
    question: 'Does the lease survive the sale when I sell a Peoria rental property?',
    answer: 'Yes — in Illinois, an existing lease survives the sale by default. The buyer (USA Home Buyers) steps into the seller\'s shoes as landlord. Any lease in effect at closing continues under its original terms. Month-to-month tenants can be served notice to vacate under 735 ILCS 5/9-207 — typically 30 days for residential month-to-month tenancies. Fixed-term leases continue until their natural expiration unless the tenant agrees to early termination.',
  },
  {
    question: 'What is the eviction process in Peoria County?',
    answer: 'Illinois eviction (Forcible Entry and Detainer) is governed by 735 ILCS 5/9. To evict a tenant in Peoria County, the landlord must serve the appropriate notice (5-day notice for non-payment of rent under 735 ILCS 5/9-209; 10-day notice for lease violations; 30-day notice for month-to-month termination). If the tenant does not comply, the landlord files an eviction complaint in Peoria County Circuit Court, 324 Main Street, Peoria, IL 61602. A court date is set, and if the landlord prevails, a writ of possession is issued. Total timeline is typically 6-12 weeks in Peoria County.',
  },
  {
    question: 'Do I need to tell my tenant I\'m selling?',
    answer: 'Illinois law does not specifically require notice to tenants that a sale is occurring, but the lease may include notice requirements. Practically, tenants will be aware when a sale occurs because the buyer becomes the new landlord. USA Home Buyers handles tenant communication professionally and is experienced with occupied properties. We do not require you to evict tenants or notify them of any specific terms of the sale.',
  },
  {
    question: 'What if my Peoria tenant is on Section 8 / HUD assistance?',
    answer: 'Section 8 (Housing Choice Voucher Program) tenancies require compliance with the HUD Housing Assistance Payments (HAP) contract terms. The HAP contract is between the landlord and the local housing authority. When the property sells, the buyer assumes the landlord obligations under the HAP contract for the remaining lease term. USA Home Buyers is experienced with Section 8 properties in the Peoria market.',
  },
  {
    question: 'How do I sell if my tenants won\'t cooperate with showings?',
    answer: 'You don\'t need showings. USA Home Buyers buys tenant-occupied properties without traditional showings. We assess the property using exterior evaluation, records, and limited interior access as the lease permits. This eliminates the conflict and friction of trying to schedule showings with non-cooperative tenants.',
  },
];

export default function PeoriaTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Tenant-Occupied House in Peoria IL — Landlord Exit Guide', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/peoria-il-hero-640.jpg 640w, /images/optimized/peoria-il-hero-828.jpg 828w, /images/optimized/peoria-il-hero-1080.jpg 1080w, /images/optimized/peoria-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/peoria-il-hero-1200.jpg"
            alt="Peoria IL rental property — Sell Tenant-Occupied House Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a Tenant-Occupied Property in Peoria IL
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Selling a Peoria IL rental property? According to 735 ILCS 5/9 (Forcible Entry and Detainer), Illinois lease-survives-sale is the default. Per the Peoria County Circuit Court (324 Main St., 309-672-6000), uncontested evictions take 6-12 weeks when needed. USA Home Buyers buys with tenants in place — no eviction required before closing. Written offer in 24 hours. Call (888) 440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              We buy Peoria rental properties with tenants in place — Bradley University rentals, Section 8 properties, tired landlord exits. No eviction required.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — (888) 440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer Now" subheadline="We buy with tenants in place. No eviction required. Written offer in 24 hours." sourcePage="/markets/peoria-il/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria's Rental Market — Who's Renting and Why It Creates Selling Challenges</h2>
          <p className="text-gray-700 mb-4">
            Peoria's rental market is shaped by three primary demand drivers: Bradley University student housing, healthcare worker workforce housing near OSF Saint Francis and Methodist Medical Center, and Section 8 and low-income housing in South Peoria and East Bluff. Each driver creates a distinct landlord-seller profile.
          </p>
          <p className="text-gray-700 mb-4">
            Bradley University (approximately 5,000 students) anchors rental demand along the Knoxville Avenue corridor and in the Bradley Park and Northmoor neighborhoods adjacent to campus. Landlords in these areas often find that student-rental management — high turnover, end-of-lease damage, noise complaints, absentee coordination — has worn them down over years of ownership. The "tired landlord" profile is common in this sub-market.
          </p>
          <p className="text-gray-700 mb-4">
            Healthcare worker housing near the University Avenue/OSF corridor represents a more stable tenant base, but these properties are often 1960s–1980s construction with increasing maintenance demands. According to Zillow (February 2026), Peoria's ZHVI is $115,649 — at these price levels, rental yields can be thin, and major capital expenditure requirements make continued ownership less attractive.
          </p>
          <p className="text-gray-700 mb-4">
            The Section 8 / HUD-assisted tenant segment in South Peoria and East Bluff represents the highest complexity. HAP contract obligations, housing authority inspection requirements, and the pre-1940 housing stock (24.3% per biggestuscities.com) create a maintenance burden that many landlords in their 60s and 70s are no longer willing to carry. Per Redfin (January 2026), Peoria city's median sale price is $139,000 (+8.2% YoY) — but Section 8 properties in the southern neighborhoods are often priced $40,000–$80,000 in as-is condition.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Tenant Rights and Lease-Survives-Sale Default</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">The Lease Survives — What This Means for Sellers</h3>
          <p className="text-gray-700 mb-4">
            Under Illinois common law and the Illinois Residential Landlord and Tenant Act, an existing lease survives a property sale. When USA Home Buyers purchases a Peoria rental property with tenants in place, we step into the seller's position as landlord for the remaining term of any existing lease. The tenant's rights under the lease continue unaffected by the sale.
          </p>
          <p className="text-gray-700 mb-4">
            This means the seller does NOT need to evict tenants before closing. The transaction closes, the deed transfers, and the tenant remains in possession under the original lease terms with the buyer as their new landlord. This is the default rule — and it's why USA Home Buyers can close on tenant-occupied properties without requiring any pre-sale eviction action.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Month-to-Month Tenants — Notice Requirements</h3>
          <p className="text-gray-700 mb-4">
            For month-to-month tenants (no fixed lease term), either the landlord or tenant can terminate the tenancy on 30 days' written notice under 735 ILCS 5/9-207 for residential tenancies. If the seller wants to provide vacant possession to the buyer, the seller can serve 30-day notice to a month-to-month tenant at any time. The sale can be structured to close 30-45 days after notice, delivering vacant possession at closing.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers is flexible on both paths: we buy with tenants in place (they stay; we become the new landlord) or with vacant possession (seller serves notice before closing). Either approach works — call (888) 440-5250 to discuss which approach fits your specific property and tenant situation.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Eviction Process — 735 ILCS 5/9 in Peoria County</h2>
          <p className="text-gray-700 mb-4">
            Illinois eviction (called Forcible Entry and Detainer) is governed by 735 ILCS 5/9. The process in Peoria County:
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Step 1 — Serve Proper Notice</h3>
          <p className="text-gray-700 mb-4">
            The type of notice required depends on the reason for eviction:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Non-payment of rent:</strong> 5-day written notice under 735 ILCS 5/9-209. If the tenant pays within 5 days, the tenancy continues. If not, the landlord may file an eviction complaint.</li>
            <li><strong>Lease violations (other than non-payment):</strong> 10-day notice specifying the violation and demand for compliance or surrender.</li>
            <li><strong>Month-to-month termination (no cause):</strong> 30-day written notice under 735 ILCS 5/9-207.</li>
            <li><strong>Fixed-term lease — no renewal:</strong> Notice that the tenancy will not be renewed, typically required 30 days before lease expiration.</li>
          </ul>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Step 2 — File Eviction Complaint in Peoria County Circuit Court</h3>
          <p className="text-gray-700 mb-4">
            If the tenant does not comply with the notice, the landlord files a Forcible Entry and Detainer complaint at the Peoria County Circuit Court, 324 Main Street, Peoria, IL 61602, phone 309-672-6000. The filing fee for small claims / eviction in Peoria County was unavailable at the time of this page's preparation due to a county website access issue — the state range is $287–$379 per Illinois Legal Aid Online. The clerk assigns a court date, typically 1-3 weeks out.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Step 3 — Court Hearing and Order of Possession</h3>
          <p className="text-gray-700 mb-4">
            At the court hearing, both parties present their case. If the landlord prevails, the court issues an Order of Possession. The tenant has a brief period to vacate voluntarily (typically 7-14 days). If the tenant does not vacate, the landlord can request a Writ of Assistance from the court, directing the Peoria County Sheriff to enforce the eviction.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Total Peoria County Eviction Timeline</h3>
          <p className="text-gray-700 mb-4">
            An uncontested eviction in Peoria County typically takes 6-12 weeks from notice to possession. Contested evictions — where the tenant appears and raises defenses — can extend to 3-6 months. This is the timeline that makes pre-eviction selling to USA Home Buyers attractive: we eliminate the 6-12 week eviction process entirely by buying with tenants in place.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Section 8 Properties — What Sellers Need to Know</h2>
          <p className="text-gray-700 mb-4">
            The Housing Choice Voucher Program (Section 8) is administered in Peoria through the Housing Authority of the City of Peoria. Landlords who rent to Section 8 tenants have a Housing Assistance Payments (HAP) contract with the housing authority. When a Section 8 property sells, the buyer assumes the landlord obligations under the HAP contract for the remaining lease term.
          </p>
          <p className="text-gray-700 mb-4">
            Key considerations for Section 8 property sales in Peoria:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>The housing authority must be notified of the ownership change. The new owner (buyer) registers as the new HAP landlord.</li>
            <li>Section 8 leases are typically one-year terms. The buyer inherits the HAP contract for the remaining term.</li>
            <li>If the buyer intends to occupy the property or not continue the Section 8 tenancy after lease expiration, they must give the appropriate advance notice per HUD and Illinois law.</li>
            <li>Many Section 8 properties in South Peoria are in older pre-1940 stock that requires ongoing maintenance. USA Home Buyers buys these in as-is condition.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Tired Landlord Exit — Why Peoria Investors Sell</h2>
          <p className="text-gray-700 mb-4">
            The most common reason Peoria landlords contact USA Home Buyers is exhaustion. After 10-20 years of managing rental properties in a market with a 14.1% family poverty rate (2024 ACS), high pre-1940 maintenance demands, and tenant turnover driven by healthcare employment cycles and university schedules, the economics and energy of continued ownership tip the wrong direction.
          </p>
          <p className="text-gray-700 mb-4">
            The calculation changes when a major capital expenditure looms — a roof, an HVAC system, a plumbing overhaul on a pre-1940 balloon-frame building. At Peoria's ZHVI of $115,649, a $20,000 repair cost represents 17% of the typical home value. For a landlord nearing retirement, spending $20,000 on a rental that generates $700-$900/month in rent and requires ongoing management doesn't compute.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers provides the exit: a written cash offer within 24 hours, a closing timeline of 7-14 days, no repair requirements, and no eviction requirement. Call (888) 440-5250 to get started.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in Peoria IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/peoria-il/code-violations', label: 'Code Violations' },
              { href: '/markets/peoria-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/peoria-il/probate', label: 'Probate Sale' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Landlord-Tenant Law — Key Provisions for Sellers</h2>
          <h3 className="text-xl font-semibold text-brand-dark mb-3">Security Deposit Obligations</h3>
          <p className="text-gray-700 mb-4">
            Under the Illinois Security Deposit Return Act (765 ILCS 710), landlords must return security deposits within 30 days of the tenant vacating, with an itemized list of deductions for damages beyond normal wear and tear. At the time of sale, the seller must transfer the security deposit (with accrued interest for tenancies over 6 months under 765 ILCS 720) to the buyer. The title company typically handles this transfer at closing as part of the proration of rents and deposit amounts.
          </p>
          <p className="text-gray-700 mb-4">
            For USA Home Buyers transactions, security deposit transfer is handled at closing by the title company. The seller provides documentation of all current deposits held, and they are credited to the buyer on the closing statement. No separate action is required from the seller after closing.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Rent Proration at Closing</h3>
          <p className="text-gray-700 mb-4">
            Rent is prorated at the closing date. If you close on the 15th of the month and rent is paid monthly, the buyer receives a credit for the remaining 15 days of the month's rent that you already collected. This proration is standard in all tenant-occupied property sales and is handled by the title company on the closing statement. No separate collection or payment is required from the seller.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Notice Requirements to Tenants About New Ownership</h3>
          <p className="text-gray-700 mb-4">
            While Illinois does not impose a specific pre-sale notice requirement to tenants, the buyer typically sends a new-ownership notice to tenants within a few days of closing, identifying themselves as the new landlord and providing updated rent payment instructions. This notice is the buyer's (USA Home Buyers') responsibility after closing — not the seller's.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Habitability Standards — Illinois Property Condition</h3>
          <p className="text-gray-700 mb-4">
            Illinois imposes an implied warranty of habitability in residential rental agreements — the landlord must maintain the property in a condition fit for human habitation. In Peoria, this means maintaining functional heating (critical in an Illinois winter), working plumbing and electrical systems, and a weathertight structure. Properties with open code violations that affect habitability (inoperable heating system, water infiltration, structural collapse risk) expose the landlord to rent withholding claims by tenants under Illinois common law.
          </p>
          <p className="text-gray-700 mb-4">
            For landlords of deteriorating Peoria rental properties who are receiving or expecting habitability complaints, a cash sale to USA Home Buyers — with the buyer assuming the landlord obligations at closing — is the cleanest exit. We purchase habitability-impaired properties as-is and assume all post-closing obligations.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Property Tax Reality for Peoria Rental Properties</h3>
          <p className="text-gray-700 mb-4">
            Peoria County's median effective property tax rate is approximately 2.1–2.4% — above the national median. For a rental property worth $80,000 at the ZHVI-adjacent range, the annual property tax bill may run $1,680–$1,920. On a property generating $700–$800 per month in rent, the property tax represents 18–23% of gross rental income — before maintenance, insurance, vacancy, and management costs. This tax burden, combined with the high pre-1940 maintenance demands and tenant management complexity, is the third leg of the tired-landlord calculation in Peoria.
          </p>
          <p className="text-gray-700 mb-4">
            Per Redfin (January 2026), the Peoria city median sale price is $139,000. A landlord carrying a $90,000 rental property with $2,000 in annual taxes, aging systems, and a Section 8 or student tenant may find that a cash sale delivering $65,000–$75,000 in net proceeds — invested elsewhere — outperforms another decade of rental management. Call (888) 440-5250 for a written offer.
          </p>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Peoria IL Rental Property?" sourcePage="/markets/peoria-il/tenant-occupied" />
      </div>
    </>
  );
}
