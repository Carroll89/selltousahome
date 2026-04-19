/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bloomington-il/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Bloomington IL',
  description:
    'Sell a tenant-occupied property in Bloomington IL as-is. Illinois FED law (735 ILCS 5/9), ISU rental market, McLean County eviction timeline. Call 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Bloomington rental property with tenants still living there?',
    answer: "Yes. Under Illinois law, a landlord can sell a tenant-occupied property at any time. The buyer takes the property subject to the existing lease. Tenants retain their lease rights after the sale — the new owner becomes the new landlord and is bound by the existing lease terms until it expires. USA Home Buyers purchases tenant-occupied properties throughout Bloomington and McLean County. We buy with tenants in place — no eviction required before closing. Call (888) 440-5250.",
  },
  {
    question: 'Do I need to evict my tenants before selling the Bloomington property?',
    answer: "No — at least not to complete the sale. You can sell the property to a cash buyer with tenants in place. The buyer takes the property subject to the existing lease. However, if the buyer wants vacant possession at closing (to owner-occupy or renovate), either party must comply with the lease terms and Illinois notice requirements before the tenant can be required to vacate. USA Home Buyers typically purchases ISU-area and Bloomington rental properties with tenants in place and manages the tenant relationship post-closing.",
  },
  {
    question: 'How long does eviction take in McLean County IL?',
    answer: "Illinois Forcible Entry and Detainer (FED) proceedings are governed by 735 ILCS 5/9. An eviction for nonpayment of rent requires a 5-day written notice under 735 ILCS 5/9-209. An eviction for lease violation requires a 10-day written notice. After the notice period, the landlord files an eviction complaint with McLean County Circuit Court — Small Claims Division (money damages ≤$10,000) or Civil Division for possessory relief. McLean County's eviction docket is significantly faster than Cook County's — typical uncontested McLean County eviction: 3-6 weeks from filing to judgment. Contested eviction: 2-4 months. Exact McLean County filing fees: contact the Circuit Clerk at (309) 888-5340; state range is approximately $287-$379 per Illinois Legal Aid Online.",
  },
  {
    question: 'What are my rights as a landlord selling an ISU-area rental in Bloomington?',
    answer: "Under Illinois law, a landlord has the right to sell the property at any time, regardless of an existing tenant lease. Illinois does not have a right-of-first-refusal law requiring landlords to offer the property to tenants before selling. The landlord must provide the tenant with reasonable notice of any showings per the lease or standard Illinois practice (typically 24-48 hours). The tenant's right to quiet enjoyment is protected — they cannot be harassed into vacating. If the property sells to an owner who wants vacant possession, the new owner must honor the existing lease until its expiration date, unless the lease was month-to-month, in which case a 30-day written notice terminates the tenancy under 735 ILCS 5/9-207.",
  },
  {
    question: 'What notice is required to end a month-to-month tenancy in Illinois?',
    answer: "For a month-to-month tenancy in Illinois, the landlord must provide a minimum 30-day written notice of termination under 735 ILCS 5/9-207. Notice must be delivered at least 30 days before the next rent payment due date. For example, if rent is due on the 1st, notice delivered on March 15 terminates the tenancy effective May 1. Illinois does not require cause for terminating a month-to-month tenancy. If the tenant doesn't vacate after the notice period, the landlord can file an FED eviction action at McLean County Circuit Court.",
  },
  {
    question: 'How does the ISU rental market affect Bloomington investment property values?',
    answer: "Illinois State University in adjacent Normal, combined with Illinois Wesleyan University within Bloomington city limits, creates sustained year-round rental demand in the ISU-adjacent corridors — Veterans Parkway Corridor, Indiana Ave, and eastern Bloomington generally. According to Redfin (March 2026), the Bloomington city median sale price is $300,000 — but ISU-corridor properties typically trade at investor-market values (70-80% of comparable owner-occupant value) due to their rental character and tenant-wear condition. This discount is the primary driver of tired-landlord exit sales in Bloomington.",
  },
];

export default function BloomingtonTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema("Selling a Tenant-Occupied Property in Bloomington IL — Landlord Exit Guide", pageUrl, '2026-04-19'),
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
            alt="Bloomington IL rental property — Sell with Tenant"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
          </div>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bloomington-il" className="hover:text-white">Bloomington IL</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Tenant-Occupied Bloomington IL Property — No Eviction Required
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Sell a tenant-occupied Bloomington IL property as-is with tenants in place. Illinois FED eviction process: 735 ILCS 5/9; McLean County Small Claims / Civil Division at 104 W. Front Street; uncontested FED typically 3-6 weeks. USA Home Buyers buys tenant-occupied ISU-area and Bloomington rentals without requiring eviction before closing. Per Redfin (March 2026), Bloomington median is $300,000 — rental properties in ISU corridors trade at investor values. Call (888) 440-5250.
              </p>
            </div>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 (888) 440-5250 — 24/7
            </a>
          </div>
          <CashOfferForm
            variant="hero"
            headline="Get Your Rental Property Cash Offer"
            subheadline="We buy tenant-occupied Bloomington rentals as-is. No eviction before closing."
            sourcePage="/markets/bloomington-il/tenant-occupied"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The ISU Rental Market — Bloomington's Tired-Landlord Pipeline</h2>
          <p className="text-gray-700 mb-4">
            Bloomington and adjacent Normal sit within reach of two universities. Illinois State University, located in Normal with approximately 4,200 employees and thousands of enrolled students per hr.illinoisstate.edu, creates sustained year-round rental demand in the corridors immediately adjacent to the ISU campus. Illinois Wesleyan University within Bloomington city limits adds additional demand. These students and young professionals disproportionately rent in the Veterans Parkway Corridor, Eastview, Indiana Ave, and parts of Sherwood Forest.
          </p>
          <p className="text-gray-700 mb-4">
            The market dynamic this creates: individual investors who purchased rental properties in these neighborhoods in the 1990s-2010s often held for 15-25+ years before reaching a tired-landlord threshold. These landlords — often ISU-affiliated individuals themselves, or Bloomington professionals who bought a rental as a supplementary investment — reach a point where the management burden of tenant placement, maintenance calls, lease enforcement, and property tax bills exceeds the return they're getting from the property.
          </p>
          <p className="text-gray-700 mb-4">
            Per Redfin (March 2026), the Bloomington median sale price is $300,000 — but ISU-area rental properties typically trade below that median because the buyer pool is investors, not owner-occupants. An investor evaluating a tenant-occupied property in the Veterans Parkway corridor doesn't pay owner-occupant values; they price based on cap rate and condition. For a tired landlord who wants a clean exit without managing a renovation between tenant cycles, a cash sale at investor pricing is often the fastest and most certain outcome.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Landlord-Tenant Law — Key Provisions for Bloomington Sellers</h2>
          <p className="text-gray-700 mb-4">
            Illinois landlord-tenant law does not require a landlord to wait for a lease to expire before selling. The sale of a tenant-occupied property is a property right of the owner. The buyer takes the property subject to existing leases — they become the new landlord, bound by lease terms until expiration.
          </p>
          <p className="text-gray-700 mb-4">
            The relevant Illinois statutory framework:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>Forcible Entry and Detainer (735 ILCS 5/9):</strong> The Illinois FED statute governs eviction proceedings. FED is the mechanism by which a landlord obtains a court order for possession when a tenant fails to vacate. McLean County Small Claims Division handles eviction claims where money damages are $10,000 or less; the Civil Division handles possessory relief and larger damage claims.</li>
            <li><strong>5-Day Notice for Nonpayment (735 ILCS 5/9-209):</strong> Before filing an eviction for nonpayment of rent, the landlord must serve a 5-day written demand for payment. After 5 days without cure, the landlord may file an FED complaint.</li>
            <li><strong>10-Day Notice for Lease Violations (735 ILCS 5/9-210):</strong> For lease violations other than nonpayment, a 10-day written notice is required before filing FED.</li>
            <li><strong>30-Day Notice for Month-to-Month Termination (735 ILCS 5/9-207):</strong> To terminate a month-to-month tenancy without cause, the landlord must serve a 30-day written notice before the next rent due date.</li>
            <li><strong>Chicago RLTO does NOT apply in Bloomington:</strong> The Chicago Residential Landlord-Tenant Ordinance (RLTO) — which imposes significantly stronger tenant protections — applies only within Chicago city limits. Bloomington does not have an equivalent ordinance. Illinois law governs.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">McLean County Eviction Process — Timeline and Logistics</h2>
          <p className="text-gray-700 mb-4">
            If you need to sell vacant and your tenant is not cooperating, here is the McLean County eviction process timeline:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Step</th>
                  <th className="text-left p-3">Timing</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3">Serve proper notice (5-day, 10-day, or 30-day)</td><td className="p-3">Day 0</td><td className="p-3">Written notice; delivery method per lease or state law</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Notice period expires</td><td className="p-3">Days 5, 10, or 30</td><td className="p-3">If tenant doesn't vacate/cure, proceed to court</td></tr>
                <tr className="bg-white"><td className="p-3">File FED complaint at McLean County Circuit Court</td><td className="p-3">Day 6/11/31</td><td className="p-3">Small Claims (≤$10K) or Civil Division; 104 W. Front Street; fee ~$287-$379 (confirm with clerk at (309) 888-5340)</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Serve summons on tenant</td><td className="p-3">Within 7-14 days of filing</td><td className="p-3">McLean County Sheriff's office serves process</td></tr>
                <tr className="bg-white"><td className="p-3">Court hearing</td><td className="p-3">Typically 14-21 days after filing</td><td className="p-3">McLean County court docket; uncontested matters move quickly</td></tr>
                <tr className="bg-gray-50"><td className="p-3">Judgment for possession (uncontested)</td><td className="p-3">At hearing or shortly after</td><td className="p-3">Court orders tenant to vacate within 5-7 days typically</td></tr>
                <tr className="bg-white"><td className="p-3">Writ of possession (if tenant doesn't leave)</td><td className="p-3">After judgment</td><td className="p-3">McLean County Sheriff enforces; forced removal</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm italic">Total uncontested McLean County FED timeline: 3-6 weeks from notice to possession. Contested evictions: 2-4 months. Exact filing fees confirmed via McLean County Circuit Clerk at (309) 888-5340 — state range per Illinois Legal Aid Online: $287-$379.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling Without Evicting — How It Works</h2>
          <p className="text-gray-700 mb-4">
            The most efficient path for most tired-landlord exits in Bloomington is selling with the tenant in place. USA Home Buyers acquires tenant-occupied properties regularly. Here's how the process works:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-4">
            <li><strong>We evaluate the property</strong> with tenants in place — we don't need access beyond a single exterior walk and whatever interior access you can reasonably arrange. We price on the assumption that we're acquiring a tenant-occupied rental.</li>
            <li><strong>Written offer includes tenant status</strong> — our offer letter notes that the property is tenant-occupied and includes any known lease terms you share with us.</li>
            <li><strong>Both parties sign the purchase agreement</strong> — standard Illinois assignment-of-landlord-rights clause; we assume the landlord role at closing.</li>
            <li><strong>You notify the tenant</strong> per the lease of the change in ownership — the lease itself doesn't change; only the identity of the landlord does.</li>
            <li><strong>Closing in 7-14 days</strong> — you receive your proceeds; we take over landlord responsibilities from that date forward.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            You exit cleanly. The tenant relationship, the maintenance calls, the rent collection — all of it transfers with the property. You owe nothing further to the tenant after closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Security Deposits and Rent Ledgers — What Transfers at Closing</h2>
          <p className="text-gray-700 mb-4">
            When a tenant-occupied Bloomington property sells, Illinois law requires the seller to either return security deposits to the tenant at closing or transfer them to the new owner. The buyer-landlord must provide written notice to the tenant of the change in ownership and the disposition of the security deposit within a reasonable period. The Illinois Security Deposit Return Act (765 ILCS 710/) governs this process — failure to properly transfer or return deposits can expose the landlord to statutory damages.
          </p>
          <p className="text-gray-700 mb-4">
            When you sell a tenant-occupied property to USA Home Buyers, we coordinate the security deposit transfer as part of the closing process. We review the lease and rent ledger before closing, confirm deposit amounts, and ensure the transfer is properly documented. You are not required to sort out a tenant dispute or accounting discrepancy as a condition of sale — we handle it as part of our standard acquisition process.
          </p>
          <p className="text-gray-700 mb-4">
            Rent arrears — situations where the tenant owes back rent at the time of sale — are also handled at closing. The purchase agreement typically allocates who receives any unpaid rent collected after closing: often the buyer who inherits the landlord role and the collection burden. We factor any known rent arrears into our pricing and don&apos;t require you to collect outstanding rents before the sale can proceed.
          </p>
          <p className="text-gray-700 mb-4">
            For ISU-area properties specifically: the student rental cycle in Bloomington-Normal follows the academic calendar closely. August is move-in; May is move-out. According to hr.illinoisstate.edu, ISU employs approximately 4,200 people, anchoring consistent rental demand year-round. If you&apos;re selling mid-lease-year with a long-term student tenant, the buyer inherits the remainder of that lease. If you&apos;re selling between academic years, the property may be vacant — making a standard as-is sale more straightforward. We buy in both situations.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Tenant-Occupied Property in Bloomington IL — Frequently Asked Questions" />

        <CashOfferForm variant="footer" headline="Ready to Sell Your Bloomington IL Rental Property?" sourcePage="/markets/bloomington-il/tenant-occupied" />
      </div>
    </>
  );
}
