/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/new-haven-ct/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied Property New Haven CT',
  description:
    'Selling a tenant-occupied rental in New Haven CT? We buy with tenants in place. CT landlord-tenant law Title 47a explained. Cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my New Haven rental property with tenants in place?',
    answer: "Yes. Connecticut law (CT Gen Stat Title 47a) allows a sale to proceed while tenants remain in the property. The new owner takes the property subject to any existing lease — the tenant's rights don't change just because the owner changes. USA Home Buyers buys tenant-occupied New Haven properties regularly. No eviction required before closing.",
  },
  {
    question: 'What does Connecticut landlord-tenant law say about selling a rented property?',
    answer: 'Under CT Gen Stat Title 47a (Landlord and Tenant), a tenant who has a valid lease continues to occupy under that lease after a sale — the sale transfers ownership but doesn\'t terminate the tenancy. If a tenant is on a month-to-month tenancy, the new owner inherits the month-to-month relationship. Notice requirements for terminating a month-to-month tenancy are governed by CT Gen Stat §47a-23. New Haven does not have rent control, unlike NYC — CT Gen Stat §7-148b preempts local rent ordinances.',
  },
  {
    question: 'What is New Haven\'s eviction process?',
    answer: 'Connecticut summary-process (eviction) proceedings are filed at New Haven Superior Court, which houses the housing court function. Under CT Gen Stat §47a-23, the landlord serves written notice to quit; then files a summary process complaint in Superior Court. New Haven Superior Court at 235 Church Street handles these cases. Timeline for uncontested eviction: 4–8 weeks minimum. USA Home Buyers buys without requiring eviction first.',
  },
  {
    question: 'Do you buy New Haven triple-deckers with all units occupied?',
    answer: "Yes — we specifically seek multi-family properties including triple-deckers and two-families with tenants in place. New Haven's triple-decker stock in Fair Haven, The Hill, and Newhallville is our primary target inventory. We close with the tenants in place; the new owner manages the tenant relationships post-closing.",
  },
  {
    question: 'What if my tenant has not paid rent in months?',
    answer: "Non-paying tenants are common in New Haven's investor market. We buy properties with problem tenants — even if you've already served notice but haven't filed for eviction, even if the eviction is in process. We assess the property's value accounting for the tenant situation and close without requiring you to complete the eviction. Call 888-440-5250.",
  },
  {
    question: '¿Compran propiedades con inquilinos en New Haven? / Tenant-occupied in Spanish?',
    answer: 'Sí, hablamos español. Compramos propiedades con inquilinos — incluyendo triple-deckers en Fair Haven y The Hill. Podemos ayudar a propietarios hispanohablantes a vender sus propiedades con inquilinos en lugar. Llámenos: 888-440-5250.',
  },
];

export default function NewHavenTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell Your Tenant-Occupied New Haven CT Property — Cash Offer with Tenants in Place', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/new-haven-ct-hero-640.jpg 640w, /images/optimized/new-haven-ct-hero-828.jpg 828w, /images/optimized/new-haven-ct-hero-1080.jpg 1080w, /images/optimized/new-haven-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/new-haven-ct-hero-1200.jpg"
            alt="New Haven CT rental homes — Sell Tenant-Occupied Property Fast"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/new-haven-ct" className="hover:text-white">New Haven CT</Link> › Tenant-Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Tenant-Occupied New Haven CT Property — No Eviction Required
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
                Own a tenant-occupied rental in New Haven CT? We buy with tenants in place — no eviction required. CT Gen Stat Title 47a protects tenant rights through ownership change. New Haven has no rent control. USA Home Buyers closes in 7–14 days around your tenant situation. Triple-deckers, two-families, single-family rentals. Written offer in 24 hours. Call 888-440-5250. Hablamos español.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-4">
              Triple-deckers, two-families, single-family rentals — we buy with tenants in place.
            </p>
            <p className="text-blue-100 text-sm mb-4">Hablamos español — llamar para ayuda en español. 888-440-5250.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer — Tenants In Place OK" subheadline="We close with tenants in place. No eviction required." sourcePage="/markets/new-haven-ct/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">New Haven's Rental Market — Why Landlords Are Selling</h2>
          <p className="text-gray-700 mb-4">
            New Haven is a 70% renter city. The triple-decker and two-family housing stock that makes up the bulk of Fair Haven, The Hill, and Newhallville was built for exactly this — owner-occupied with rental units above or below, providing income to offset the mortgage. Decades later, many of these properties have passed through several owners and now carry the accumulated wear of decades of rental use.
          </p>
          <p className="text-gray-700 mb-4">
            Landlords in New Haven who are ready to exit face a fundamental problem: a property with tenants in place is much harder to sell on the MLS than a vacant property. Most retail buyers want to occupy the home or do a full renovation before renting it; they don't want to inherit active tenancies, manage existing lease agreements, or deal with tenants who may not cooperate with showings. This pushes tenant-occupied New Haven properties squarely into the cash buyer market.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases New Haven rental properties with tenants in place across all neighborhoods. Fair Haven triple-deckers with three occupied units. Hill neighborhood two-families with long-term Section 8 tenants. Newhallville single-families with problem tenants three months into non-payment. We close without requiring eviction.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Connecticut Landlord-Tenant Law — CT Gen Stat Title 47a</h2>
          <p className="text-gray-700 mb-4">
            Connecticut's landlord-tenant statute (CT Gen Stat Title 47a) governs every residential rental in New Haven. Understanding what this law requires — and what it permits a buyer to do after closing — is relevant to any landlord considering a cash sale.
          </p>
          <p className="text-gray-700 mb-4">
            Under CT law, a sale of rental property does not terminate an existing lease. The lease runs with the property — the new owner steps into the prior owner's shoes as landlord. If a tenant has 8 months remaining on a one-year lease, those 8 months survive the closing. The new owner cannot simply remove the tenant because they bought the building.
          </p>
          <p className="text-gray-700 mb-4">
            For month-to-month tenants, the new owner can serve notice to terminate the tenancy under CT Gen Stat §47a-23. Connecticut requires a minimum notice period before a summary process action can be filed — the notice to quit must be properly served and the waiting period observed before any eviction filing.
          </p>
          <p className="text-gray-700 mb-4">
            One important clarification: New Haven does not have rent control. According to CT Gen Stat §7-148b (Connecticut General Assembly), Connecticut preempts local rent regulation ordinances — municipalities cannot impose rent control. Unlike New York City, where rent-controlled and rent-stabilized units create complex transfer restrictions, a New Haven rental property can be sold to any buyer without rent control complications.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Summary-Process Eviction — What Landlords Face Without a Cash Sale</h2>
          <p className="text-gray-700 mb-4">
            If you decide to evict before selling rather than sell with tenants in place, New Haven's summary-process timeline is the relevant framework. Connecticut summary process is handled at New Haven Superior Court (235 Church Street, New Haven, CT 06510), which houses the housing court function.
          </p>
          <p className="text-gray-700 mb-4">
            The process: serve a notice to quit with the statutory waiting period; if the tenant doesn't vacate, file a summary process complaint at Superior Court; serve the tenant with the complaint; attend a hearing; obtain a judgment; issue execution (writ of possession); marshal executes the writ. Each step has waiting periods and potential delays if the tenant contests. Even an uncontested eviction in New Haven runs 4–8 weeks minimum. Contested cases can take 3–5 months.
          </p>
          <p className="text-gray-700 mb-4">
            For a landlord who wants to close as quickly as possible, waiting for eviction adds months to the timeline. Selling to USA Home Buyers with tenants in place closes in 7–14 days — months faster than the eviction-then-list-then-close path.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Yale Town Rental Dynamics — Grad Student Tenants in Dwight and Wooster Square</h2>
          <p className="text-gray-700 mb-4">
            New Haven's Yale University anchor creates a distinct rental sub-market in the neighborhoods surrounding Yale's main campus — Dwight, Wooster Square, East Rock adjacent, and the Chapel Street corridor. Landlords in these areas have historically rented to Yale graduate students, medical students, and hospital staff — a tenant pool that churns annually as students graduate or rotations end.
          </p>
          <p className="text-gray-700 mb-4">
            After 10–15 years of annual turnover, Yale-adjacent rentals typically show the wear of high-turnover occupancy: painted-over original woodwork, patched walls, aging kitchen and bathroom fixtures, deferred maintenance on systems the owner couldn't justify updating given the tenant churn. These properties often need $30,000–$60,000 in renovation to reset for either owner-occupancy or long-term rental use at premium rates.
          </p>
          <p className="text-gray-700 mb-4">
            A landlord who has owned a Dwight or Wooster Square multi-family for 15 years and is ready to exit faces this choice: fund the renovation, or sell as-is. USA Home Buyers provides the as-is path — we account for the deferred maintenance in our offer and close without requiring any work. You walk away with cash; we take on the renovation.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Fair Haven Triple-Deckers — The Core of New Haven's Investor Market</h2>
          <p className="text-gray-700 mb-4">
            Fair Haven's triple-decker stock — three-story wood-frame three-family homes built between 1900 and 1930 — is the archetype of New Haven rental housing. Three units, three income streams, and three sets of maintenance obligations on building systems that are 80–120 years old. Many Fair Haven triple-deckers are owned by aging homeowners or their estates: the original owner-occupant who lived on the first floor and rented the upper two units has either passed or moved to a care facility.
          </p>
          <p className="text-gray-700 mb-4">
            These properties are among the best candidates for a cash sale with tenants in place. They have active rental income (which we factor into our assessment), they're in a neighborhood with consistent demand, and they typically have deferred maintenance that makes conventional financing difficult. USA Home Buyers buys Fair Haven triple-deckers with all units occupied, partially occupied, or vacant. We close around the tenant situation, whatever it is.
          </p>
          <p className="text-gray-700 mb-4">
            New Haven's Hispanic community in Fair Haven — 30%+ of the neighborhood is Hispanic — means many triple-decker owners are Puerto Rican or Ecuadorian families who speak Spanish. Hablamos español — we serve Fair Haven's community in both languages. Call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">Section 8 and Subsidized Tenants in New Haven — What Landlords Face</h2>
          <p className="text-gray-700 mb-4">
            New Haven has a significant Section 8 Housing Choice Voucher population. The Housing Authority of New Haven (HANH) administers vouchers that subsidize rents in private rental units throughout the city. Landlords who have participated in the Section 8 program often find it a reliable income source — until the property needs major rehabilitation that disqualifies it from the Housing Authority's inspection standards, or until the landlord is simply ready to exit.
          </p>
          <p className="text-gray-700 mb-4">
            Selling a property with active Section 8 tenants involves the same Connecticut landlord-tenant law considerations as any rental — the tenancy survives the sale. The new owner may continue the Section 8 arrangement or, once the lease term ends, can choose not to renew participation in the program. USA Home Buyers buys properties with Section 8 tenants in place. We evaluate the rental income, the tenant's standing, and the property condition as a whole — and make a written offer accordingly.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Rental Market Context — Why Landlord Exits Are Increasing</h2>
          <p className="text-gray-700 mb-4">
            New Haven's 70% renter concentration creates an enormous demand for rental housing — but managing that rental housing profitably has become more challenging. Property taxes have increased. Maintenance costs on pre-war stock have risen with construction labor prices. Insurance premiums on older New Haven properties have climbed as insurers price the city's fire risk and housing age into their underwriting. And Connecticut's landlord-tenant law provides meaningful tenant protections that make problem-tenant situations time-consuming and expensive to resolve.
          </p>
          <p className="text-gray-700 mb-4">
            The combination of rising costs and tenant-protective law is driving more New Haven landlords to consider exit. For those who want to close quickly rather than manage a listing with tenants in place, USA Home Buyers provides the cleanest path. We close in 7–14 days, handle the tenant relationship ourselves post-closing, and pay cash at closing with no financing contingency. Call 888-440-5250.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mb-4 mt-8">New Haven Rental Market Numbers — What Landlords Are Working With</h2>
          <p className="text-gray-700 mb-4">
            According to U.S. Census Bureau American Community Survey (census.gov), New Haven's rental market serves a city where approximately 70% of residents rent and the median household income is $56,851. Rents in Fair Haven and The Hill for a three-bedroom unit typically run $1,400–$1,900 per month; higher in Wooster Square and East Rock. A Fair Haven triple-decker generating $4,200–$5,700 in monthly gross rent sounds attractive on paper — but subtract property taxes ($6,000–$10,000 per year), insurance ($3,000–$5,000 on an older structure), heat (many landlords pay for tenant heat in triple-deckers), and maintenance ($5,000–$15,000 in an average year with an older building), and the net cash flow is thinner than the gross rents suggest.
          </p>
          <p className="text-gray-700 mb-4">
            Landlords who bought New Haven triple-deckers in the early 2000s for $120,000–$160,000 are sitting on significant appreciation — current values of $200,000–$280,000 for similar properties represent a 40–75% gain. For those who are ready to convert that equity to liquid capital and exit the landlord role, USA Home Buyers provides the mechanism: written cash offer in 24 hours, close in 7–14 days with tenants in place. Call 888-440-5250.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant-Occupied Property in New Haven CT" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/new-haven-ct', label: '← Back to New Haven CT' },
              { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/new-haven-ct/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/new-haven-ct/code-violations', label: 'Code Violations' },
              { href: '/markets/new-haven-ct/probate', label: 'Probate Sale' },
              { href: '/sell-house-fast-connecticut', label: 'CT State Hub' },
              { href: '/markets/bridgeport-ct', label: 'Bridgeport CT' },
              { href: '/guides/sell-house-fast-new-haven-ct-2026', label: 'New Haven Seller Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your New Haven CT Rental Property?" sourcePage="/markets/new-haven-ct/tenant-occupied" />
      </div>
    </>
  );
}
