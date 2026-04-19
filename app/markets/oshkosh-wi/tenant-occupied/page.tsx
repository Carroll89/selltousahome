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

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied Home Oshkosh WI',
  description:
    'Sell your tenant-occupied Oshkosh WI rental as-is. Wis. Stat. Ch. 704 lease survival on sale, § 704.09, WI FED via Ch. 799 at Winnebago County Court. 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Oshkosh WI rental with tenants still in it?',
    answer: 'Yes — Wisconsin law (Wis. Stat. § 704.09) requires existing leases to survive a sale of the property. The buyer steps into the landlord\'s shoes with the same lease obligations. USA Home Buyers purchases tenant-occupied Oshkosh properties without requiring eviction first. We close, take over the landlord role, and handle the tenant relationship from that point. Call 888-440-5250.',
  },
  {
    question: 'Does a lease survive the sale of a Winnebago County rental property?',
    answer: 'Yes. Under Wis. Stat. § 704.09, when a leased property is sold, the buyer acquires it subject to any existing lease terms. A fixed-term lease continues under its full duration with the new owner. A month-to-month tenancy continues subject to proper notice termination by the new owner. Tenants cannot be evicted solely because the property changed ownership — the sale itself is not a valid basis for eviction under Wisconsin law.',
  },
  {
    question: 'What notice must I give tenants before selling the Oshkosh property?',
    answer: 'Wisconsin law doesn\'t require sellers to give tenants advance notice of a sale, though the lease may contain a notice provision. Sellers must provide the required notice to terminate a tenancy if they\'re seeking vacant possession before sale — 28-day minimum notice for month-to-month tenancies in Wisconsin (Wis. Stat. § 704.19). Fixed-term leases cannot be terminated early except for cause (nonpayment, lease violations, etc.) or by mutual agreement. USA Home Buyers does not require vacant possession — we take the property with tenants in place.',
  },
  {
    question: 'How does Wisconsin\'s eviction (FED) process work if I need to remove a tenant?',
    answer: 'Wisconsin eviction (called Forcible Entry and Detainer, or FED) proceedings are filed in circuit court under Wis. Stat. Ch. 799. In Winnebago County, FED actions are filed at Winnebago County Circuit Court, 415 Jackson Street, Oshkosh WI 54901. The process: serve a notice to quit/cure; file FED complaint if tenant doesn\'t cure or vacate; hearing typically scheduled 4-21 days after service; if judgment for landlord, writ of restitution issued; sheriff enforces. Total timeline: 4-8 weeks in a non-contested FED. USA Home Buyers takes the property with tenants and handles any eviction process after closing — you don\'t have to.',
  },
  {
    question: 'Do I have to return the security deposit when selling a tenant-occupied Oshkosh rental?',
    answer: 'No — the security deposit obligation transfers to the buyer at closing. Under Wisconsin law, the landlord at the time of sale must either transfer the security deposit to the new landlord or return it to the tenant with written notice to both the tenant and the new landlord. In practice, most Oshkosh rental sales handled by USA Home Buyers address security deposit transfer as part of the closing settlement. The deposit becomes the new landlord\'s (USA Home Buyers\') obligation.',
  },
];

export default function OshkoshTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a Tenant-Occupied Rental in Oshkosh WI — Wisconsin Landlord-Tenant Law Guide', pageUrl, '2026-04-18'),
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
            alt="Oshkosh WI rental property — Sell Tenant-Occupied"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Tenant-Occupied Oshkosh WI Rental — No Eviction Required
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Sell your Oshkosh WI rental with tenants in place — Wisconsin law (Wis. Stat. § 704.09) requires leases to survive sale; buyer becomes new landlord. FED process (Wis. Stat. Ch. 799) at Winnebago County Circuit Court if eviction needed post-sale. USA Home Buyers takes the property with tenants, handles lease transition. No eviction before closing. Call 888-440-5250.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              No eviction required. We buy Oshkosh rental properties with tenants in place — near UW Oshkosh student rentals, EAA area STRs, and long-term tenancies.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
  
      <VideoEmbed
        src="/videos/oshkosh-wi/tenant-occupied.mp4"
        title="Sell a Rental Property in Oshkosh WI"
        poster="/videos/oshkosh-wi/tenant-occupied-poster.jpg"
        subtitle="Done with landlording? We buy tenant-occupied homes as-is in Winnebago County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Done being a landlord in Oshkosh? USA Home Buyers buys tenant-occupied properties — no eviction needed, no waiting for leases. We handle everything after closing. Call 888-440-5250 for a fast cash offer.
        </div>
      </details>
          <CashOfferForm variant="hero" headline="Get Your Oshkosh Rental Property Cash Offer" subheadline="Written offer in 24 hours. Tenants can stay until we close." sourcePage="/markets/oshkosh-wi/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Landlord-Tenant Law for Oshkosh Rental Sales — Wis. Stat. Ch. 704</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin's landlord-tenant statute, Wis. Stat. Ch. 704, governs the rights and obligations of landlords and tenants for all residential rental properties in Wisconsin including Oshkosh and Winnebago County. The key provision for sellers: Wis. Stat. § 704.09 establishes that existing leases survive a sale of the property. When a rental property is sold, the buyer acquires it subject to all existing lease obligations. The tenant's rights don't change because the property changed ownership.
          </p>
          <p className="text-gray-700 mb-4">
            This is important for Oshkosh landlords trying to sell because it means you don't need to evict your tenants or wait for their lease to expire before selling to USA Home Buyers. We purchase the property with whatever tenancy is in place — month-to-month, fixed-term, even problematic tenancies — and handle the landlord relationship from closing forward.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Lease Survival Under Wis. Stat. § 704.09</h3>
          <p className="text-gray-700 mb-4">
            Section 704.09 of Wisconsin Statutes makes explicit what common law often leaves ambiguous: when a landlord sells a residential rental property, all covenants in the existing lease that run with the land bind the new owner. The buyer steps into the former landlord's shoes with the full obligations of the lease — the right to collect rent, the obligation to maintain the property, the duty to provide required notice before entering, and the responsibility to return the security deposit at lease end per § 704.28.
          </p>
          <p className="text-gray-700 mb-4">
            For the tenant, nothing changes. Their rent amount stays the same. Their lease terms stay the same. Their right to occupy the property through the lease term is fully protected. The only change is who they send the rent check to.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Month-to-Month vs. Fixed-Term Tenancies</h3>
          <p className="text-gray-700 mb-4">
            Month-to-month tenancies in Oshkosh can be terminated by either party with proper notice. According to Wis. Stat. § 704.19 (Wisconsin Legislature), the required notice for termination of a month-to-month residential tenancy is 28 days. This means a new owner who purchases a month-to-month Oshkosh rental can serve a 28-day notice to terminate the tenancy after closing — a straightforward process compared to a full eviction.
          </p>
          <p className="text-gray-700 mb-4">
            Fixed-term leases — leases with a defined end date — cannot be terminated early except for cause. A tenant with a lease running through August 2026 has the right to occupy through that date even if the property sells in April 2026. USA Home Buyers purchases fixed-term leased properties knowing we're acquiring the tenancy along with the property.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Wisconsin FED Process — Wis. Stat. Ch. 799 at Winnebago County Circuit Court</h3>
          <p className="text-gray-700 mb-4">
            If eviction becomes necessary after purchase — for nonpayment of rent, lease violations, or termination of a month-to-month tenancy following proper notice — Wisconsin's eviction process (Forcible Entry and Detainer, or FED) is governed by Wis. Stat. Ch. 799. FED actions are filed in small claims court at Winnebago County Circuit Court, 415 Jackson Street, Oshkosh WI 54901.
          </p>
          <p className="text-gray-700 mb-4">
            The Wisconsin FED process for cause (nonpayment, violation): (1) serve a written 5-day notice to pay/cure or quit; (2) if tenant doesn't cure or vacate, file FED complaint in Winnebago County Circuit Court — small claims filing fee applies; (3) hearing typically scheduled 4-21 days after service on the tenant; (4) if judgment for landlord, a writ of restitution issues; (5) Winnebago County sheriff executes the writ and removes the tenant. Total contested FED timeline in Winnebago County: 4-8 weeks. Uncontested (tenant doesn't appear): often resolved faster.
          </p>
          <p className="text-gray-700 mb-4">
            For sellers: you don't deal with any of this. USA Home Buyers takes the property as-is with whatever tenancy is in place. We handle any FED process that's necessary after closing.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh Rental Market — Who's Selling Tenant-Occupied Properties</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Near-UW Oshkosh Student Rental Landlords</h3>
          <p className="text-gray-700 mb-4">
            UW Oshkosh's 12,000-plus students create one of Winnebago County's strongest rental markets in the Merritt neighborhood and surrounding areas. Brick bungalows converted to two- and three-bedroom student rentals are common — often with original systems, minimal amenities, and the kind of deferred maintenance that accumulates when annual tenant turnover is the norm. Landlords who've owned these for 20-30 years are aging out: they don't want to manage student tenants anymore, can't fund major repairs, or want to retire on a cash-out sale.
          </p>
          <p className="text-gray-700 mb-4">
            We buy UW Oshkosh-area student rentals with tenants in place — no need to wait for the end of the lease or coordinate an eviction. We step in as the new landlord, the students keep their housing, and you walk away at closing.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">EAA AirVenture Short-Term Rental Exits</h3>
          <p className="text-gray-700 mb-4">
            The EAA AirVenture annual event (500,000+ attendees, late July-early August) has driven short-term rental investment in properties near Wittman Regional Airport and surrounding Oshkosh neighborhoods. Some of these STR investors are now exiting — changing regulations, increased carrying costs at current interest rates, or simple burnout from managing a hospitality-type property. STR properties may have lease agreements, management agreements, or no formal tenancy at all. We evaluate each situation and make an offer accordingly.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Long-Term Factory-Worker Tenancies</h3>
          <p className="text-gray-700 mb-4">
            Some Oshkosh rental properties have long-term tenants who've been in place for years — sometimes decades. These tenants typically have month-to-month arrangements at below-market rents that a new owner would want to address. Long-term tenants on month-to-month leases can be transitioned with proper 28-day notice post-closing. USA Home Buyers has experience with long-term tenant situations and can structure the purchase and post-closing transition professionally.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Tenant Rights During a Property Sale — What Oshkosh Landlords Must Know</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin landlord-tenant law under Wis. Stat. Ch. 704 is explicit about tenant rights when a rental property is sold. Tenants are not required to vacate simply because the property sold. Their lease survives under § 704.09. Their security deposit is held in trust and must be transferred to the new landlord or returned to the tenant with proper notice. They retain all rights under the lease and Wisconsin law — the same required notice before entry (§ 704.05(2) — 12 hours minimum except in emergency), the same habitability standards, and the same right to quiet enjoyment.
          </p>
          <p className="text-gray-700 mb-4">
            Landlords who attempt to pressure tenants to vacate in connection with a sale — through harassment, utility shutoffs, or constructive eviction tactics — face significant legal exposure under Wisconsin's tenant protection provisions. USA Home Buyers does not require or recommend any pressure tactics on tenants. We take the property with the tenancy in place and handle the tenant relationship professionally from closing forward.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Security Deposit Transfer on Oshkosh Rental Sales</h2>
          <p className="text-gray-700 mb-4">
            Under Wisconsin law, when a rental property is sold, the outgoing landlord must either: (1) transfer the security deposit funds to the new landlord (USA Home Buyers) at closing, with written notice to the tenant identifying the new landlord; or (2) return the security deposit to the tenant and provide written notice that the new landlord has no security deposit obligation. The most common approach in Oshkosh rental sales handled by USA Home Buyers is a credit at closing — the security deposit amount is credited against the purchase price, and we take on the deposit obligation directly.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin's security deposit rules under Wis. Stat. § 704.28 require return of the deposit within 21 days of lease termination, with an itemized accounting of any deductions. Normal wear and tear cannot be deducted — only actual damage beyond normal use. When USA Home Buyers takes over a tenancy, we handle the deposit obligations from closing forward per these statutory requirements.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Oshkosh Rental Market Context — Why Landlords Are Selling in 2026</h2>
          <p className="text-gray-700 mb-4">
            According to U.S. Census Bureau American Community Survey data (census.gov), the Oshkosh rental market is substantial — about 45% of city households are renter-occupied, driven by UW Oshkosh's student population, Fox Valley manufacturing workforce, and the significant portion of the housing stock that's better suited to rental than owner-occupation in its current condition. This creates a large pool of rental properties in Winnebago County — and a consistent flow of landlord exits.
          </p>
          <p className="text-gray-700 mb-4">
            Landlords selling in 2026 cite several common drivers: accumulated deferred maintenance on older rental properties that would require significant capital investment; rising property insurance costs, particularly on pre-war construction with aging electrical systems; the exhaustion of managing student tenants through the annual UW Oshkosh academic cycle; tax liability considerations as depreciation schedules run out on older rental properties; and estate situations where inherited rental properties don't align with the heirs' investment goals.
          </p>
          <p className="text-gray-700 mb-4">
            Wisconsin's landlord-tenant framework, while fair to both parties, creates specific compliance obligations that many small Oshkosh landlords find increasingly burdensome: required habitability standards, the 12-hour notice requirement before entry, specific procedures for security deposit handling, and the FED process for eviction that — while not unusually slow — requires filing in Winnebago County Circuit Court, paying filing fees, and potentially appearing at a hearing. Selling to USA Home Buyers removes all of these ongoing obligations at closing.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Multi-Unit Properties in Oshkosh — Two-Flats and Small Multi-Family</h2>
          <p className="text-gray-700 mb-4">
            Oshkosh has a significant supply of two-flat and small multi-family properties — two-unit and three-unit buildings that were common in the early-20th-century development of Merritt, Center City, and Near Downtown neighborhoods. Many of these were originally single-family homes converted to multiple units during the post-war housing shortage. They operate under the same Wisconsin landlord-tenant law (§ 704 et seq.) as single-family rentals.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases multi-unit Oshkosh rental properties with tenants in place across all units. We assess the rent roll, lease terms, and condition; make a single written offer for the property; and close on your schedule. You don't need to vacate any unit, manage any eviction, or coordinate between tenants before the sale. One closing, one payment, done.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Selling Tenant-Occupied Property in Oshkosh WI" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Back to Oshkosh WI' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/oshkosh-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/oshkosh-wi/code-violations', label: 'Code Violations' },
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

        <CashOfferForm variant="footer" headline="Ready to Sell Your Tenant-Occupied Oshkosh WI Rental?" sourcePage="/markets/oshkosh-wi/tenant-occupied" />
      </div>
    </>
  );
}
