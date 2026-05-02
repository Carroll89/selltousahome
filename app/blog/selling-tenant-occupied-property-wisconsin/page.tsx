/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { articleSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/selling-tenant-occupied-property-wisconsin`;

export const metadata: Metadata = {
  title: 'Selling a Tenant-Occupied House in Wisconsin (2026)',
  description:
    'Wisconsin lease survives the sale — your buyer inherits your tenant. What Kenosha, Racine, and Oshkosh landlords need to know before listing.',
  alternates: { canonical: pageUrl },
};

export default function WITenantOccupiedBlogPost() {
  return (
    <>
      <SchemaMarkup
        schema={[
          organizationSchema,
          articleSchema(
            'Selling a Tenant-Occupied House in Wisconsin — 2026 Landlord\'s Guide',
            pageUrl,
            '2026-05-02'
          ),
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/markets/kenosha-wi" className="text-brand-primary hover:underline">Kenosha WI</Link>
            {' '}·{' '}
            <Link href="/markets/racine-mount-pleasant-wi" className="text-brand-primary hover:underline">Racine WI</Link>
            {' '}·{' '}
            <Link href="/markets/oshkosh-wi" className="text-brand-primary hover:underline">Oshkosh WI</Link>
            {' '}·{' '}
            <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link>
            {' '}· May 2, 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            Selling a Tenant-Occupied House in Wisconsin — 2026 Landlord&apos;s Guide
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Most Wisconsin landlords think selling a rental property works like selling any other house. It doesn&apos;t. The lease follows the property to whoever buys it, showings require advance coordination with a tenant who might not want to help, and the buyer pool shrinks to investors the moment there&apos;s an occupant. Here&apos;s what the process actually looks like in Kenosha, Racine, and Oshkosh — and where things typically get complicated.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The rule that trips up most Wisconsin landlords: the lease survives the sale</h2>
          <p className="text-gray-700 mb-4">
            When you sell a tenant-occupied property in Wisconsin, the buyer inherits your existing lease. This is a core principle of property law — leases run with the land — and it applies regardless of what the purchase agreement says between you and your buyer. If your tenant is on a written fixed-term lease with six months remaining, whoever closes on that property must honor those six months on the same terms. They can&apos;t raise the rent. They can&apos;t evict the tenant simply because they purchased the property. A tenant who understands Wisconsin Statute Chapter 704 can stay through the end of their lease term regardless of ownership changes.
          </p>
          <p className="text-gray-700 mb-4">
            What this means in practice: a fixed-term lease turns your property into an investor-only sale. Owner-occupants — the buyers who make up most of the retail market in Kenosha, Racine, and Oshkosh — generally want to move in after closing. They can&apos;t do that if there&apos;s a tenant with four months left on a lease. The moment you list with an occupant in place, you&apos;ve already narrowed your buyer pool by a significant margin.
          </p>
          <p className="text-gray-700 mb-4">
            The exception is a month-to-month tenant. According to the Wisconsin Tenant Resource Center, month-to-month tenancies under Wis. Stat. 704.19 can be ended by either party with at least 28 days&apos; written notice. So if your tenant is month-to-month and you want to sell vacant, you can give notice, wait 28 days, and list. On paper. What actually happens is covered below.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The 28-day notice in practice — why "simple" rarely is</h2>
          <p className="text-gray-700 mb-4">
            Twenty-eight days sounds clean. Give written notice, tenant leaves, you sell. But the 28-day clock assumes the tenant leaves on day 28. Many don&apos;t. A tenant who wants to stay, or who doesn&apos;t have somewhere to go, may remain past the notice date. At that point, the landlord must file for eviction in Wisconsin Circuit Court — Kenosha County, Racine County, or Winnebago County depending on the property location. The Circuit Court eviction process adds weeks to months once you account for filing, service, and the actual hearing.
          </p>
          <p className="text-gray-700 mb-4">
            Even when a tenant leaves promptly, there&apos;s the unit itself. Post-move-out damage assessments, security deposit return timelines (Wisconsin requires return within 21 days of lease end under Wis. Stat. 704.28), and any repairs needed before a retail listing take additional time. The total gap between deciding to sell and having a vacant, market-ready property can stretch to 60-90 days in the most cooperative scenarios, and much longer when complications arise.
          </p>
          <p className="text-gray-700 mb-4">
            For landlords who&apos;ve been considering an exit for a while, this timeline is worth planning. For landlords dealing with a financial pressure point — a repair cost you can&apos;t cover, rising property taxes, a difficult tenant situation — a 60-90 day runway to vacant is a long time to carry the property.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The 12-hour showing rule — what scheduling showings with a tenant actually looks like</h2>
          <p className="text-gray-700 mb-4">
            If you decide to list with the tenant in place rather than waiting for vacancy, Wisconsin law governs how you can show the property. Under ATCP 134.09(2)(a)2 and Wis. Stat. 704.05(2), landlords must give at least 12 hours&apos; advance notice before entering a dwelling unit, including for showings. The tenant can consent to shorter notice, but they&apos;re not required to.
          </p>
          <p className="text-gray-700 mb-4">
            Twelve hours is shorter than the 24-hour requirement some states impose, but it still means every showing requires advance coordination. An agent calls to book a 2:00 PM Saturday showing; you must notify the tenant by 2:00 AM Saturday at the latest. For an occupied rental that gets three or four showing requests per week from a retail listing, this means near-daily contact with the tenant about scheduling — assuming the tenant is cooperative. If they&apos;re not, they can be present during showings, visibly unhappy, and answer questions from buyers in ways that don&apos;t help your sale.
          </p>
          <p className="text-gray-700 mb-4">
            This isn&apos;t a hypothetical. Tenants who don&apos;t want to leave, or who know the sale means the end of their tenancy, have legitimate reasons to be less than helpful during showings. They don&apos;t have to lie, damage the property, or do anything wrong to make a retail buyer walk away — they just have to be present and unhappy, which most buyers pick up on immediately.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Kenosha, Racine, and Oshkosh rental market context</h2>
          <p className="text-gray-700 mb-4">
            All three of these cities have substantial rental stock rooted in their manufacturing histories, and tenant-occupied sales are common in each market. The investor buyer pool is real — but investor pricing reflects the work involved in handling an existing tenancy.
          </p>
          <p className="text-gray-700 mb-4">
            According to Redfin (March 2026), Kenosha&apos;s median sale price was $279,500 — up significantly year over year, driven partly by demand from Chicago and Milwaukee commuters and remote workers. The Zillow Home Value Index (March 2026) puts Kenosha&apos;s typical home value at $273,053. The rental stock in Downtown and Uptown Kenosha — two-bedroom ranches and single-family homes built during the AMC Motors manufacturing era — trades at a meaningful discount to vacant retail because the buyer pool for those properties is investor-focused.
          </p>
          <p className="text-gray-700 mb-4">
            Racine runs hotter than Kenosha on the retail side: according to Redfin (March 2026), the median sale price was $219,000 with a Redfin Compete Score of 84 out of 100. The Zillow Home Value Index for Racine city (March 2026) is $208,908, up 4.9% year over year. That 84/100 compete score reflects the owner-occupant market — buyers waiving contingencies on clean, vacant, retail-ready listings in the $200K-$250K range. A tenant-occupied rental in the Root River corridor neighborhoods doesn&apos;t participate in that competition; it trades in a separate investor pool at different terms.
          </p>
          <p className="text-gray-700 mb-4">
            Oshkosh has a more investor-friendly market for tenant-occupied sales, partly because of the workforce and student rental population near UW Oshkosh. According to Redfin (March 2026), the median sale price was $211,000 with 61 days on market — notably slower than Kenosha or Racine. The Zillow Home Value Index (March 2026) shows $253,810, up 5.4% year over year. Investors in Oshkosh are accustomed to buying occupied rentals; the ask is finding one priced realistically. More on the Oshkosh tenant-occupied market is on our <Link href="/markets/oshkosh-wi/tenant-occupied" className="text-brand-primary hover:underline">Oshkosh tenant-occupied page</Link>.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The three paths — and the real tradeoffs</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin landlords selling a tenant-occupied property have three realistic options, and each involves tradeoffs that aren&apos;t visible in the headline description.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Option 1: Wait for vacancy.</strong> If the tenant is month-to-month, give 28 days&apos; written notice and wait for them to leave. If the tenant is on a fixed-term lease, wait for the lease to expire. Once vacant, clean, and repaired, you can list on the retail market and access the full buyer pool. This is the highest-price path — but it&apos;s also the slowest, and it requires that the vacancy process goes cleanly. If it doesn&apos;t, the cost overruns and timeline extension can eat the price difference.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Option 2: List occupied and sell to an investor.</strong> List the property with the tenant in place, accept that you&apos;re selling to an investor, and price accordingly. An investor buying a cash-flowing rental will pay based on the income the property generates and the cap rate they&apos;re targeting — not based on what the property would sell for vacant. For a well-maintained rental with a reliable tenant at market rent, this can work. For a property with a below-market lease, a difficult tenant, or deferred maintenance, the investor&apos;s offer reflects all of that.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Option 3: Cash buyer, tenant stays.</strong> A cash buyer who specifically purchases tenant-occupied properties buys the property as-is with the tenant in place. You don&apos;t manage showings. You don&apos;t give 12-hour notices. You don&apos;t wait for the lease to expire. You sign a purchase agreement, close in 7-14 days, and hand over the keys. The new owner handles the tenant relationship going forward. The price reflects the occupied status, but you eliminate months of carrying costs, coordination, and uncertainty.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">When Option 3 makes the most sense</h2>
          <p className="text-gray-700 mb-4">
            A cash sale with tenant in place makes the most sense when the situation creates friction that would drag out a traditional sale: a fixed-term lease with months remaining, a difficult tenant, a below-market lease that depresses investor bids, deferred maintenance that&apos;s hard to address with an occupant in place, or a timeline that won&apos;t support waiting through vacancy.
          </p>
          <p className="text-gray-700 mb-4">
            The math varies by situation. If you&apos;re carrying a Kenosha rental at $1,800/month in expenses, and the vacant-listing path takes four months from notice to close, that&apos;s $7,200 in carrying costs before you factor in repairs, agent commission (5-6% on a $279,500 sale is $14,000-$16,700), and any inspection concessions. Against that, a cash offer that closes in two weeks with no commissions and no repairs can net a comparable result even at a lower headline number.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers purchases tenant-occupied properties throughout Wisconsin — Kenosha, Racine, Mount Pleasant, and Oshkosh. We handle the tenant transition after closing. Written offer within 24 hours, close in 7-14 days. Call (888) 274-5006 or fill out the form below. For process specifics in each market, see our <Link href="/markets/kenosha-wi/tenant-occupied" className="text-brand-primary hover:underline">Kenosha tenant-occupied page</Link> and <Link href="/markets/racine-mount-pleasant-wi/tenant-occupied" className="text-brand-primary hover:underline">Racine tenant-occupied page</Link>.
          </p>

        </div>

        <div className="mt-10 border-t pt-8">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Related resources</h2>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/markets/kenosha-wi" className="text-brand-primary hover:underline">
                Sell Your House Fast in Kenosha WI →
              </Link>
            </li>
            <li>
              <Link href="/markets/racine-mount-pleasant-wi" className="text-brand-primary hover:underline">
                Sell Your House Fast in Racine WI →
              </Link>
            </li>
            <li>
              <Link href="/markets/oshkosh-wi" className="text-brand-primary hover:underline">
                Sell Your House Fast in Oshkosh WI →
              </Link>
            </li>
            <li>
              <Link href="/markets/kenosha-wi/tenant-occupied" className="text-brand-primary hover:underline">
                Tenant-Occupied Sales — Kenosha →
              </Link>
            </li>
            <li>
              <Link href="/markets/racine-mount-pleasant-wi/tenant-occupied" className="text-brand-primary hover:underline">
                Tenant-Occupied Sales — Racine →
              </Link>
            </li>
            <li>
              <Link href="/markets/oshkosh-wi/tenant-occupied" className="text-brand-primary hover:underline">
                Tenant-Occupied Sales — Oshkosh →
              </Link>
            </li>
            <li>
              <Link href="/markets/kenosha-wi/foreclosure" className="text-brand-primary hover:underline">
                Foreclosure Help in Kenosha →
              </Link>
            </li>
            <li>
              <Link href="/markets/racine-mount-pleasant-wi/inherited-property" className="text-brand-primary hover:underline">
                Inherited Property in Racine →
              </Link>
            </li>
            <li>
              <Link href="/sell-house-fast-wisconsin" className="text-brand-primary hover:underline">
                Wisconsin Seller&apos;s Legal Guide →
              </Link>
            </li>
            <li>
              <Link href="/blog/kenosha-vs-racine-housing-market-2026" className="text-brand-primary hover:underline">
                Kenosha vs. Racine: 2026 Market Comparison →
              </Link>
            </li>
            <li>
              <Link href="/blog/what-happens-after-accepting-cash-offer" className="text-brand-primary hover:underline">
                What Happens After You Accept a Cash Offer? →
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <CashOfferForm
            variant="footer"
            headline="Get Your Wisconsin Cash Offer — Tenant-Occupied OK"
            sourcePage="/blog/selling-tenant-occupied-property-wisconsin"
          />
        </div>
      </article>
    </>
  );
}
