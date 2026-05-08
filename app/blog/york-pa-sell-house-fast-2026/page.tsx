/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { articleSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/york-pa-sell-house-fast-2026`;

export const metadata: Metadata = {
  title: 'Sell Your House Fast in York PA (2026)',
  description:
    'York PA median $172,500, 84/100 Compete Score, 56% renters, pre-1940 row homes. What sellers need to know about pricing, transfer tax, and York County closing.',
  alternates: { canonical: pageUrl },
};

export default function YorkPABlogPost() {
  return (
    <>
      <SchemaMarkup
        schema={[
          organizationSchema,
          articleSchema(
            "Sell Your House Fast in York PA — The 2026 Seller's Guide",
            pageUrl,
            '2026-05-08'
          ),
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/markets/york-pa" className="text-brand-primary hover:underline">
              York PA
            </Link>
            {' '}·{' '}
            <Link href="/blog" className="text-brand-primary hover:underline">
              Blog
            </Link>
            {' '}· May 8, 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            Sell Your House Fast in York PA — The 2026 Seller&apos;s Guide
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            York is one of the most competitive mid-size housing markets in south-central Pennsylvania — Redfin scores it 84 out of 100 — but that headline obscures a city split between two very different seller experiences. An updated row home in the East Side can move in under three weeks. A Northeast York property with deferred maintenance and a long-inactive water heater may not attract a single retail showing. Which side of that divide your property sits on shapes everything.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">York&apos;s numbers — and the two markets inside them</h2>
          <p className="text-gray-700 mb-4">
            According to Redfin, the York city median sale price was $172,500 in March 2026, with homes averaging 27 days on market and a 99.0% sale-to-list ratio. That Compete Score of 84/100 places York firmly in "Very Competitive" territory — meaning most clean, ready listings attract multiple offers and go at or above ask.
          </p>
          <p className="text-gray-700 mb-4">
            But the city median and the county median are not the same thing. York County as a whole ran a $290,000 median in March 2026 — nearly $120,000 higher than the city figure. That gap reflects what&apos;s actually going on: suburban York County townships like Springettsbury, West Manchester, and Spring Garden attract a very different buyer pool than York City proper. When a news headline says "York PA home prices up 9.4%," it almost certainly means the county, not the city. York City&apos;s own appreciation has been more modest and uneven by neighborhood.
          </p>
          <p className="text-gray-700 mb-4">
            Zillow&apos;s Home Value Index for York sits at $246,248 with +6.6% growth year-over-year as of February 2026 — a figure that pulls from the broader metro area and blends city and suburban data. The American Community Survey pegs the city proper median owner-occupied value at $119,700. None of these numbers are wrong; they&apos;re measuring different slices of the same geography. For a seller, the question isn&apos;t what the county is doing — it&apos;s what&apos;s comparable on your block.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Pre-1940 row home stock — what age means for your sale</h2>
          <p className="text-gray-700 mb-4">
            York City&apos;s housing stock is old. The majority of the city&apos;s row homes were built between roughly 1880 and 1940 — the period when York was a manufacturing powerhouse, home to industrial operations in textiles, stoves, and refrigerators. What that means for a seller in 2026: lead paint disclosure is legally required for any home built before 1978, which covers nearly the entire city. Most properties have electrical panels that have been updated at some point but may still carry mixed generations of wiring. Original cast-iron drain stacks, galvanized supply lines, and oil or coal-converted heating systems are common.
          </p>
          <p className="text-gray-700 mb-4">
            These issues don&apos;t automatically kill a retail deal — but they do narrow the financing path. FHA and VA loans require properties to meet minimum condition standards, and an inspector flagging original knob-and-tube wiring or a cracked masonry foundation will trigger that process. Conventional financing survives inspection issues more readily, but the buyer still has leverage to negotiate credits. Every dollar of credit comes out of the seller&apos;s net.
          </p>
          <p className="text-gray-700 mb-4">
            York also has an active code enforcement system through the City of York. Properties with open violations — structural, electrical, plumbing, or unsafe occupancy — may require a Use and Occupancy inspection before transfer is allowed. If there are open enforcement files on your property, closing cannot happen until either the violations are resolved or the buyer agrees in writing to assume responsibility for clearing them. Most retail buyers won&apos;t take that on.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">York neighborhoods — Northeast, East Side, Downtown, Springdale</h2>
          <p className="text-gray-700 mb-4">
            York is a small city — roughly 44,900 residents — but it covers distinct neighborhoods with meaningfully different price ranges. Northeast York runs the lowest city prices, around $120,000 for standard row homes, with the highest concentration of distressed and investor-targeted inventory. If your property is in Northeast York and it needs work, the realistic buyer pool is other investors and landlords, not owner-occupants stretching a purchase budget.
          </p>
          <p className="text-gray-700 mb-4">
            The East Side tracks closer to the city median — Redfin has shown that neighborhood at around $160,000 with an average of 17 days on market. It moves faster than most of the city. Southwest York has seen recent appreciation of around 10.8% and sits near $175,000 for typical row homes. Springdale, in the northwest part of the city, runs closer to $209,000 and has a mixed owner-occupant and investor buyer pool. Downtown York — the Colonial and Federal architecture zone around Continental Square — is genuinely interesting for renovated properties, with prices pushing toward $183,000, but the older stock in poorer condition can still be problematic to sell retail.
          </p>
          <p className="text-gray-700 mb-4">
            One note: if your property address says "York, PA" but is technically in West York Borough or Spring Garden Township, you&apos;re in a different market. West York prices are higher, the school district is different, and the buyer pool skews more owner-occupant. York City comparables don&apos;t apply.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Pennsylvania transfer tax — York City&apos;s breakdown</h2>
          <p className="text-gray-700 mb-4">
            Pennsylvania charges a statewide Realty Transfer Tax of 1.0% of the sale price. On top of that, York City levies its own local RTT: 0.5% under City of York Article 355, and an additional 0.5% for the York City School District. Total transfer tax in York City: 2.0%.
          </p>
          <p className="text-gray-700 mb-4">
            By Pennsylvania custom, transfer tax is split evenly — seller pays 1%, buyer pays 1%. On a $172,500 York City sale, that&apos;s $3,450 total, with $1,725 coming out of the seller&apos;s proceeds. Add deed recording at the York County Recorder of Deeds (base fee $86.25 for a standard 4-page deed as of November 2025, plus $20 per additional parcel ID), title insurance, and settlement fees, and the gap between your contract price and your net check is real. On lower-priced city assets, these closing costs represent a higher percentage of the sale than they would in a $400,000 suburban transaction.
          </p>
          <p className="text-gray-700 mb-4">
            The York County Recorder of Deeds is located at 45 N. George Street, York, PA 17401 — in the York County Judicial Center at Continental Square. Recording fees are set by the county; the current schedule took effect November 14, 2025.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Foreclosure in York — York County Court of Common Pleas</h2>
          <p className="text-gray-700 mb-4">
            Pennsylvania uses judicial foreclosure, which means the lender must file in court, serve notice, and get a judgment before a sheriff&apos;s sale can be scheduled. According to York County records, that process takes approximately 270 days from the first missed payment to a completed sheriff&apos;s auction — and that&apos;s the minimum under a clean filing with no delays. Federal loss mitigation requirements add a mandatory 120-day pre-filing window, and Pennsylvania&apos;s Act 6 and Act 91 protections require additional notices before the complaint can be filed.
          </p>
          <p className="text-gray-700 mb-4">
            York County tax and judicial sales run through GovEase, an online auction platform. Properties reach GovEase after years of delinquency and a court judgment — by that point, the homeowner has typically lost significant equity, if there was any remaining. There is no right of redemption in Pennsylvania after the sheriff&apos;s sale is completed. Once the auction closes, the homeowner cannot buy the property back.
          </p>
          <p className="text-gray-700 mb-4">
            If you&apos;re behind on payments and a sale is on the table, the relevant math is how much equity you have versus how much the foreclosure process will consume in time, missed payment arrears, and legal fees. A private sale at any point before the sheriff&apos;s auction converts remaining equity into proceeds and stops the clock. See the <Link href="/markets/york-pa/foreclosure" className="text-brand-primary hover:underline">York foreclosure guide</Link> for a breakdown of where you are in the process and what each stage looks like.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Inherited property in York — York County Register of Wills</h2>
          <p className="text-gray-700 mb-4">
            York County estate real property goes through the Register of Wills at 45 North George Street, Suite 2, York, PA 17401 — phone (717) 771-9607, open Monday through Friday 8:00 AM to 4:15 PM. The Register issues Letters Testamentary when a valid will names an executor, or Letters of Administration when there is no will. Either way, those letters must be issued before an executor has legal authority to sign a deed on behalf of an estate.
          </p>
          <p className="text-gray-700 mb-4">
            York has a significant inherited property inventory. The combination of pre-1940 row homes, a 21.1% poverty rate, and a working-class owner demographic means that inherited properties here often come with deferred maintenance, outdated mechanicals, and long histories of minimal investment. Families who inherit a York City row home frequently inherit a property that needs $15,000 to $35,000 in repairs before it would qualify for FHA financing — which is often the only loan product the city&apos;s buyer pool can access. Managing that renovation while settling an estate is difficult. Managing it from out of state is harder.
          </p>
          <p className="text-gray-700 mb-4">
            A cash buyer can close after Letters Testamentary issue and take the property in any condition, with tenants in place if the estate includes a rental. That means the executor doesn&apos;t have to fund repairs, stage the property, or wait through a retail listing cycle to settle the estate. Visit the <Link href="/markets/york-pa/inherited-property" className="text-brand-primary hover:underline">York inherited property page</Link> for detail on the Register of Wills process and what executors need before closing.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">When a cash sale makes sense in York</h2>
          <p className="text-gray-700 mb-4">
            Not every York property should go the cash route. An updated East Side row home — clean systems, no open violations, priced correctly — can genuinely compete on the retail market. With an 84/100 Compete Score and 27-day average DOM, York&apos;s active market means well-positioned listings do move. The 56.3% renter population also means there&apos;s an active landlord/investor buyer pool, which creates demand even for modest properties.
          </p>
          <p className="text-gray-700 mb-4">
            The calculation shifts when the retail path has real friction. Pre-1940 properties with electrical or structural issues that will fail FHA inspection narrow the buyer pool to cash or conventional buyers only. Tenant-occupied homes where tenants won&apos;t cooperate with showings. Northeast York properties where the price ceiling is $120,000 and repairs eat most of the margin. Estate properties where the executor is managing a timeline from out of state. Active code violations that require remediation before a U&O inspection passes. In those situations, the headline sale price of a retail listing rarely nets more after repairs, holding costs, agent commission (typically 5-6%), buyer concessions, and transfer tax than a clean cash offer at a lower number.
          </p>
          <p className="text-gray-700 mb-4">
            One thing worth knowing: Opendoor and Offerpad do not operate in York. If you&apos;ve seen iBuyer advertising, it isn&apos;t for this market. Your options in York are a retail listing via an agent, an FSBO, or a local cash buyer. USA Home Buyers purchases properties throughout York City and York County — all conditions, all neighborhoods, including tenant-occupied, estate sales, and properties with open violations. Written cash offer within 24 hours. Close in 7 to 14 days. No repairs, no cleanout, no agent commission. We close after Letters Testamentary issue and work directly with executors and attorneys on timing. Call (888) 274-5006 or fill out the form below.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">¿Necesita vender su casa en York, PA? Hablamos español.</h2>
          <p className="text-gray-700 mb-4">
            Más del 36% de los residentes de York City son hispanos — la proporción más alta de cualquiera de nuestros mercados en Pensilvania. Si usted prefiere hablar en español sobre su propiedad, podemos ayudarlo. Llámenos al (888) 274-5006 para hablar con alguien de nuestro equipo. Compramos casas en York en cualquier condición — sin reparaciones, sin comisiones, y con cierre en 7 a 14 días.
          </p>

        </div>

        <div className="mt-10 border-t pt-8">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Related resources</h2>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/markets/york-pa" className="text-brand-primary hover:underline">
                Sell Your House Fast in York PA →
              </Link>
            </li>
            <li>
              <Link href="/markets/york-pa/foreclosure" className="text-brand-primary hover:underline">
                Foreclosure Help in York PA →
              </Link>
            </li>
            <li>
              <Link href="/markets/york-pa/inherited-property" className="text-brand-primary hover:underline">
                Inherited Property in York PA →
              </Link>
            </li>
            <li>
              <Link href="/markets/lancaster-pa" className="text-brand-primary hover:underline">
                Sell Your House Fast in Lancaster PA →
              </Link>
            </li>
            <li>
              <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">
                Sell Your House Fast in Harrisburg PA →
              </Link>
            </li>
            <li>
              <Link href="/markets/reading-pa" className="text-brand-primary hover:underline">
                Sell Your House Fast in Reading PA →
              </Link>
            </li>
            <li>
              <Link href="/blog/sell-inherited-house-pennsylvania" className="text-brand-primary hover:underline">
                Selling an Inherited House in Pennsylvania →
              </Link>
            </li>
            <li>
              <Link href="/blog/selling-house-during-divorce-pennsylvania" className="text-brand-primary hover:underline">
                Selling a House During Divorce in Pennsylvania →
              </Link>
            </li>
            <li>
              <Link href="/blog/sell-house-with-code-violations-pa" className="text-brand-primary hover:underline">
                Selling a House With Code Violations in PA →
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
            headline="Get a Cash Offer — York PA"
            sourcePage="/blog/york-pa-sell-house-fast-2026"
          />
        </div>
      </article>
    </>
  );
}
