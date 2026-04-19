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

const pageUrl = `${SITE_URL}/markets/champaign-urbana-il/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Champaign-Urbana IL',
  description:
    'Sell your Champaign or Urbana IL rental property with tenants in place. UIUC student rentals, 735 ILCS 5/9 eviction law, Champaign County eviction timeline. 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Champaign-Urbana rental property with tenants still in place?',
    answer: 'Yes. USA Home Buyers purchases tenant-occupied properties throughout Champaign and Urbana. You do not need to evict your tenants before selling. We take over as the new landlord at closing, and existing leases continue under their original terms. This is especially relevant for UIUC-area student rentals with active 11-month or 12-month leases.',
  },
  {
    question: 'How does Illinois landlord-tenant law affect a sale?',
    answer: 'Under Illinois law (765 ILCS 720, the Landlord-Tenant Act), existing leases survive a sale — they transfer to the new owner. The new buyer takes the property subject to the lease terms, including the security deposit obligations. We factor the existing lease terms into our offer. You don\'t need to break any leases to sell to us.',
  },
  {
    question: 'What is the eviction process in Champaign County if needed?',
    answer: 'Illinois evictions (Forcible Entry and Detainer, FED) proceed under 735 ILCS 5/9-101 et seq. In Champaign County, eviction actions are filed in the 6th Judicial Circuit Court at 101 E. Main Street, Urbana IL 61802. The typical uncontested eviction timeline in Champaign County is 30-60 days from service to possession order. Non-paying or lease-violating tenants: 5-day pay-or-quit notice (735 ILCS 5/9-209), then court filing. If you need tenants out before selling, we can advise on timing — or we can buy with tenants in place and handle it ourselves.',
  },
  {
    question: 'Do both Champaign and Urbana have rental licensing requirements?',
    answer: 'Yes, and they\'re separate systems. The City of Champaign requires rental property registration through the Champaign Building Safety Division (champaignil.gov). The City of Urbana operates a Residential Rental Inspection Program through the Urbana Community Development Department (urbanaillinois.us). If you have rentals in both cities, you\'re dealing with two separate licensing frameworks. We are aware of both systems; our offer accounts for any compliance status.',
  },
  {
    question: 'What about the UIUC academic year lease cycle?',
    answer: 'UIUC-area rentals predominantly run on 11-month leases from August 15 to July 15, aligning with the academic year. This creates a predictable annual cycle: leases expire in July, new leases start in August, and the gap period (mid-July to mid-August) is when properties are vacant and most accessible. If you\'re planning to sell, the late spring to early summer window is ideal for listing timing — you capture the remaining term before the lease renews. We buy at any point in the cycle, including mid-lease.',
  },
];

export default function ChampaignUrbanaTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Tenant-Occupied Rental Property in Champaign-Urbana IL', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(min-width: 1200px)" srcSet="/images/optimized/champaign-urbana-il-hero-1200.jpg" />
          <source media="(min-width: 1080px)" srcSet="/images/optimized/champaign-urbana-il-hero-1080.jpg" />
          <source media="(min-width: 828px)" srcSet="/images/optimized/champaign-urbana-il-hero-828.jpg" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/champaign-urbana-il-hero-640.jpg"
            alt="Champaign-Urbana IL rental property — Sell With Tenants In Place"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/champaign-urbana-il" className="hover:text-white">Champaign-Urbana IL</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Champaign-Urbana Rental Property — Tenants Stay, You Get Paid
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                USA Home Buyers purchases tenant-occupied rental properties in Champaign and Urbana IL — Campustown student rentals, Old West Urbana houses, University District multi-family, Section 8 Urbana properties. No eviction required. Per 765 ILCS 720, existing leases transfer to the new owner. Champaign County eviction (if needed post-closing): 735 ILCS 5/9 FED, 30-60 days typical. Written offer in 24 hours. Call (888) 440-5250.
              </p>
            </div>
            <a
              href="tel:+18884405250"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors"
            >
              📞 Call (888) 440-5250 — 24/7
            </a>
          </div>
      <VideoEmbed
        src="/videos/champaign-urbana-il/tenant-occupied.mp4"
        title="Sell a Rental Property in Champaign-Urbana IL"
        poster="/videos/champaign-urbana-il/tenant-occupied-poster.jpg"
        subtitle="Done with landlording? We buy tenant-occupied homes as-is in Champaign County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Done being a landlord near U of I? USA Home Buyers buys student rentals, duplexes, and single-families in Champaign-Urbana with tenants in place — no eviction, no waiting. We handle everything after closing. Call 888-440-5250.
        </div>
      </details>
          <div>
            <CashOfferForm
              variant="hero"
              headline="Get Your Rental Property Cash Offer"
              subheadline="No eviction required. We buy with tenants in place."
              sourcePage="/markets/champaign-urbana-il/tenant-occupied"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The UIUC Rental Market — Why Landlords Exit</h2>
          <p className="text-gray-700 mb-4">
            Champaign-Urbana has one of the highest renter concentrations of any Illinois metro its size — a direct function of UIUC's 57,000-student enrollment. According to data from Illinois Demographics (illinois-demographics.com), Champaign city's owner-occupancy rate is significantly below the state average, driven by student renters who have no interest in homeownership and graduate every four years. Urbana is similarly renter-dominated.
          </p>
          <p className="text-gray-700 mb-4">
            This creates a large landlord class — many of whom have been in the rental business since the 1990s or early 2000s and are now ready to exit. The decision to sell is rarely about the market; it's about landlord fatigue. After ten or fifteen years of the August move-in cycle — cleaning after departing tenants, making repairs before incoming tenants, dealing with late-night noise complaints and property damage during football weekends — many landlords have simply had enough.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Old West Urbana — The Tired Landlord's Neighborhood</h2>
          <p className="text-gray-700 mb-4">
            Old West Urbana is ground zero for tired-landlord exits in the C-U market. The neighborhood sits within walking distance of the UIUC campus on the Urbana side — close enough that students will pay a premium to live there, far enough from campus that properties can still be purchased at reasonable prices relative to Campustown.
          </p>
          <p className="text-gray-700 mb-4">
            The housing stock in Old West Urbana is predominantly 1920s-1940s construction: Prairie Style houses, Craftsman bungalows, and some Tudor Revival homes that have been converted to rental use over the decades. Many were single-family homes owned by UIUC faculty families in the 1950s and 1960s, gradually acquired by investors as the original owners aged out. The properties have character — original hardwood floors, built-in cabinetry, mature landscaping — but also the deferred maintenance that comes with 80-100 year old building systems.
          </p>
          <p className="text-gray-700 mb-4">
            For an Old West Urbana landlord, the decision to sell to a cash buyer means not having to present the property for conventional buyer showings (which require vacating tenants, showing a house in student-rental condition, and managing tenant schedules). It means not needing to evict before selling. It means a straightforward transaction that ends the landlord relationship without the complexity of a retail listing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Campustown Rentals — The Student Housing Portfolio</h2>
          <p className="text-gray-700 mb-4">
            Campustown (the Green Street corridor in Champaign, immediately adjacent to the UIUC main campus) is the densest rental market in the metro. Properties here are almost exclusively investor-owned. Single-family homes have been converted to multi-room rentals; commercial-adjacent buildings hold student apartments above ground-floor retail.
          </p>
          <p className="text-gray-700 mb-4">
            The Campustown rental market has its own rhythms. Per champaignil.gov, the City of Champaign's rental registration program requires landlords to register all rental properties and maintain them to city code standards. The annual August move-in/move-out cycle concentrates property damage claims, security deposit disputes, and code compliance inspections in a three-week window. Landlords who own multiple Campustown properties often describe the month of August as a period of near-constant crisis management.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases Campustown rentals in any condition, with any tenants in place. We are aware of the City of Champaign's rental registration requirements and factor code compliance status into our offer.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Landlord-Tenant Law — What Governs Your Rental Sale</h2>
          <p className="text-gray-700 mb-4">
            Illinois landlord-tenant law is primarily codified at 765 ILCS 720 (the Landlord and Tenant Act) for statewide baseline protections. Individual cities — Champaign and Urbana both have more expansive local ordinances than the state baseline:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>City of Champaign Residential Landlord-Tenant Ordinance:</strong> Provides tenant protections beyond the state baseline, including specific security deposit handling requirements and just-cause eviction provisions for certain tenants. Source: champaignil.gov</li>
            <li><strong>City of Urbana Residential Landlord-Tenant Ordinance:</strong> Urbana has similar tenant protections; the Urbana ordinance is among the stronger local landlord-tenant frameworks in Illinois. Source: urbanaillinois.us</li>
          </ul>
          <p className="text-gray-700 mb-4">
            A sale does not terminate existing leases in Illinois. Under the general principle of 765 ILCS 720, leases are contractual obligations that run with the property — when you sell, the buyer steps into the landlord position for the remainder of each lease. Security deposit obligations also transfer. We account for all of this in our purchase offer.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Eviction Law — If You Need Tenants Out First</h2>
          <p className="text-gray-700 mb-4">
            If you prefer to sell vacant, or if you have problem tenants you want removed before closing, Illinois evictions proceed under the Forcible Entry and Detainer statute, 735 ILCS 5/9-101 et seq. The process in Champaign County:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li>Serve appropriate notice: 5-day notice for non-payment (735 ILCS 5/9-209), 10-day notice for lease violations, or 30-day notice to terminate a month-to-month tenancy.</li>
            <li>File the FED complaint in Champaign County Circuit Court, 101 E. Main Street, Urbana IL 61802.</li>
            <li>Serve the summons on the tenant.</li>
            <li>Court date (typically 7-21 days after filing). If uncontested, judgment for possession entered.</li>
            <li>Writ of possession issued; sheriff enforces if tenant doesn't vacate.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Typical Champaign County eviction timeline (uncontested): 30-60 days from serving the initial notice to possession. The Urbana and Champaign city local ordinances may require additional steps for covered properties. For most situations, it's faster and simpler to sell to us with tenants in place rather than going through the eviction process first.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">South Urbana Section 8 Properties</h2>
          <p className="text-gray-700 mb-4">
            South Urbana and Dodds Park have a higher concentration of Housing Choice Voucher (Section 8) tenants than other parts of the metro. Landlords with Section 8 tenants face a specific motivation for exit: the combination of below-market rent caps (HUD payment standards for Champaign County), annual inspection requirements, and administrative overhead of the voucher program. When a Section 8 landlord in South Urbana decides to exit the business, they often can't sell retail — the tenant occupancy, property condition, and neighborhood profile limit the conventional buyer pool.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases Section 8 and voucher-assisted properties. We are familiar with HCV program obligations and the transition from one landlord to another. Tenants' rights are protected regardless of who owns the property.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Security Deposits — How They Transfer at Closing</h2>
          <p className="text-gray-700 mb-4">
            Security deposits are a critical item in any tenant-occupied sale. Under Illinois law (765 ILCS 710), the landlord must hold security deposits in a federally-insured interest-bearing account. When a property sells with tenants in place, the seller transfers all held security deposits to the buyer at closing — either by direct credit or separate check. This is reflected in the closing statement.
          </p>
          <p className="text-gray-700 mb-4">
            Both the City of Champaign and the City of Urbana have local landlord-tenant ordinances that impose additional requirements on security deposit handling beyond the state baseline. Champaign's ordinance requires written receipts for deposits and specific accounting upon return. Urbana's ordinance has similar requirements. Failure to comply with local ordinance requirements can expose the prior landlord to liability even after the sale.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers handles the security deposit transfer at closing through our standard transaction process. We receive the deposits from the seller (credited at closing), take over the landlord obligations, and manage deposits under applicable Champaign or Urbana ordinance requirements going forward.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Academic Year Lease Cycle — Timing Your Sale</h2>
          <p className="text-gray-700 mb-4">
            UIUC student rentals operate on a distinctive annual rhythm. Most student leases in Champaign and Urbana run from August 15 to July 15 (11-month leases) or August 15 to August 14 (12-month leases). This means:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Mid-July to mid-August:</strong> Peak vacancy window. Outgoing tenants have moved out; incoming tenants haven't arrived. This is when the property is most accessible for showings and inspection. It's also when a conventional buyer would have the clearest view of the property's condition.</li>
            <li><strong>August-September:</strong> New leases begin; property is occupied through the following summer.</li>
            <li><strong>October-May:</strong> Mid-lease; tenants are in place and stable. Best time for a landlord to sell to a cash buyer who will take the lease as-is.</li>
            <li><strong>May-July:</strong> End-of-lease window; some tenants preparing to move, some renewing. Uncertainty about next lease can create complications for a retail sale but not a cash sale.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            USA Home Buyers buys at any point in this cycle. If you're mid-lease and the academic year just started, we take the property with the lease in place and start collecting rent at closing. If you're in the July vacancy window and the property is between tenants, we can close in 7-14 days and have the property ready for the next cycle.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Multi-Unit Properties in Champaign-Urbana Probate</h2>
          <p className="text-gray-700 mb-4">
            Several Campustown and University District investors who accumulated multi-unit rental portfolios in the 1990s-2010s have now passed or are planning their estates. Multi-unit rental properties in probate present specific complexity: each unit may have its own lease, its own tenant, and its own security deposit. The estate becomes the landlord across all units simultaneously.
          </p>
          <p className="text-gray-700 mb-4">
            For estate attorneys managing a Champaign-Urbana rental portfolio in probate, a cash sale to USA Home Buyers simplifies the entire estate: one transaction, one closing date, one distribution. We take over the full portfolio with tenants in place. The executor's job is to deed the properties; we handle everything else.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Tenant-Occupied Properties in Champaign-Urbana IL" />

        <CashOfferForm variant="footer" headline="Ready to Exit the Champaign-Urbana Landlord Business?" sourcePage="/markets/champaign-urbana-il/tenant-occupied" />
      </div>
    </>
  );
}
