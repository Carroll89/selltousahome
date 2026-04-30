/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { articleSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/sell-flood-damaged-house-allentown-pa`;

export const metadata: Metadata = {
  title: 'Selling a Flood-Damaged House in Allentown PA — Jordan Creek, Little Lehigh, and What Sellers Can Do',
  description:
    'Selling a flood-damaged house in Allentown PA? Jordan Creek and Little Lehigh flood zones, PA disclosure law, FEMA lookup, and why cash buyers can simplify the sale.',
  alternates: { canonical: pageUrl },
};

export default function SellFloodDamagedHouseAllentownPA() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema(
          'Selling a Flood-Damaged House in Allentown PA — Jordan Creek, Little Lehigh, and What Sellers Can Do',
          pageUrl,
          '2026-04-30',
        ),
      ]} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Allentown PA</Link>
            {' '}·{' '}April 30, 2026{' '}·{' '}
            <Link href="/markets/allentown-pa/resources" className="text-brand-primary hover:underline">Allentown Resources</Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            Selling a flood-damaged house in Allentown PA — Jordan Creek, Little Lehigh, and what sellers can do
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            If you own a house near Jordan Creek, Little Lehigh Creek, or one of the low-lying pockets that drain
            toward the Lehigh River, water is not an abstract problem. It can be the reason a finished basement
            becomes unusable, a buyer&apos;s inspection report gets ugly, or a lender starts asking questions
            before closing.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          <p className="text-gray-700 mb-4">
            Allentown has older housing and creek corridors where one heavy storm can expose years of hidden
            moisture issues. Sometimes the damage is obvious: soaked drywall, a failed sump pump, mold smell,
            warped flooring. Sometimes it is quieter: staining on block walls or repeated seepage.
          </p>
          <p className="text-gray-700 mb-4">
            That is where sellers get stuck. Repairing everything before listing may sound clean on paper, but
            the money and time can get out of hand fast. In one Allentown seller story already referenced on our
            site, a Jordan Creek basement flooding issue came with a $34,000 remediation estimate. That number
            is not a citywide average or a statistic. It is just a real example of the kind of decision sellers
            face: repair first and hope the market rewards it, or sell the house as-is and move on.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What flood damage does to a normal sale</h2>
          <p className="text-gray-700 mb-4">
            Flood damage changes how buyers look at a house. A traditional buyer may like the price, then get
            nervous after the inspection. Their lender may also care if the home is in a mapped flood hazard area.
          </p>
          <p className="text-gray-700 mb-4">
            Insurance can be another problem. FEMA explains that properties in high-risk flood areas with
            government-backed mortgages generally need flood insurance. Some lenders can require flood insurance
            outside those areas too. Sellers should expect flood history and map status to come up during a
            financed sale.
          </p>
          <p className="text-gray-700 mb-4">
            Disclosure matters too. Pennsylvania&apos;s Real Estate Seller Disclosure Law, 68 Pa.C.S. §§ 7301–7315,
            especially §§ 7303–7304, requires sellers to disclose known material defects through the seller
            disclosure statement. The law&apos;s categories include areas that can overlap with water problems, such
            as roofs, basements and crawl spaces, plumbing, soils and drainage, storm-water facilities, and legal
            or use issues. In plain English: if you know about water intrusion, drainage trouble, or basement
            flooding, document it and disclose what you know.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Checking FEMA and Allentown floodplain information</h2>
          <p className="text-gray-700 mb-4">
            Before you decide how to sell, check the property against official floodplain tools. The City of
            Allentown points property owners to FEMA floodplain mapping, including FEMA&apos;s Flood Map Service
            Center and the National Flood Hazard Layer viewer. The city also maintains floodplain information
            through its open data tools.
          </p>
          <p className="text-gray-700 mb-4">
            For Allentown sellers, the important thing is not guessing from a creek name alone. Jordan Creek is
            monitored by the U.S. Geological Survey at the Allentown station. County planning materials note
            that Jordan Creek and Little Lehigh Creek meet within the city before flowing toward the Lehigh River.
          </p>
          <p className="text-gray-700 mb-4">
            But a blog post should not tell you that your exact street, lot, or house is in a specific flood zone.
            That requires an address-level lookup in FEMA&apos;s Flood Map Service Center or NFHL viewer. Two homes
            near the same creek can have different elevations, drainage, and map status.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Why a cash buyer can be cleaner for flood-damaged homes</h2>
          <p className="text-gray-700 mb-4">
            A cash buyer does not have a lender imposing loan conditions. That is the main difference.
          </p>
          <p className="text-gray-700 mb-4">
            If there is no lender, there is no lender-required flood insurance condition tied to the buyer&apos;s
            mortgage. There is also no lender-ordered appraisal repair list holding up the sale. The buyer still
            needs to understand the risk. The owner may still choose flood insurance for risk management, and
            insurance may matter later if the property is refinanced or resold. But the sale is not waiting on
            a mortgage underwriter.
          </p>
          <p className="text-gray-700 mb-4">
            That can help when the house needs more work than a normal buyer can handle. Flood damage often touches
            several parts of the home at once: basement walls, electrical, HVAC, flooring, and sometimes code
            issues. If the home is inherited, the family may not have time or money to manage remediation before
            selling. That is why estate sellers sometimes pair this decision with the options on our{' '}
            <Link href="/markets/allentown-pa/inherited-property" className="text-brand-primary hover:underline">
              Allentown inherited property page
            </Link>.
          </p>
          <p className="text-gray-700 mb-4">
            A cash sale is not magic. The damage still affects the offer. A buyer has to price the cleanup and
            the risk. But an as-is offer can remove the repair-then-list cycle. For a seller who needs certainty,
            avoiding months of cleanup may be worth more than chasing a higher list price.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What to do before you call anyone</h2>
          <p className="text-gray-700 mb-4">
            Start by documenting the damage. Take clear photos of the water line, damaged materials, exterior
            drainage, sump pump area, and any contractor estimates you already have.
          </p>
          <p className="text-gray-700 mb-4">
            Next, separate the cause as clearly as you can. Was it outside floodwater? A sewer backup? A burst
            pipe? A failed sump pump? Repeated seepage through basement walls? The answer can affect disclosure,
            insurance, and buyer expectations.
          </p>
          <p className="text-gray-700 mb-4">
            Check whether the property has an existing flood insurance policy. If it does, ask the insurer what
            can and cannot transfer, and what the buyer would need to know. Do not assume the answer.
          </p>
          <p className="text-gray-700 mb-4">
            Also, be careful with quick cosmetic repairs. Painting over staining or removing damaged materials
            without photos can create bigger problems later. If you are not going to repair, preserve the facts
            so a buyer can evaluate the house honestly.
          </p>
          <p className="text-gray-700 mb-4">
            For broader local sale timing and closing-cost context, read our{' '}
            <Link href="/guides/sell-house-fast-allentown-pa-2026" className="text-brand-primary hover:underline">
              guide to selling a house fast in Allentown PA
            </Link>.
            If water damage has created city repair notices or unsafe conditions, our Pennsylvania article on{' '}
            <Link href="/blog/sell-house-with-code-violations-pa" className="text-brand-primary hover:underline">
              selling a house with code violations
            </Link>{' '}
            explains the general as-is framework.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Selling as-is in Allentown</h2>
          <p className="text-gray-700 mb-4">
            USA Home Buyers buys houses in Allentown as-is, including homes with basement flooding, water damage,
            inherited-property complications, and repair estimates that do not make sense for the seller. We are
            not going to tell you every flood-damaged house should be sold for cash. Some sellers should repair
            and list, especially if the damage is minor.
          </p>
          <p className="text-gray-700 mb-4">
            But if the house is near Jordan Creek, Little Lehigh Creek, or another flood-prone part of Lehigh
            County, and the repair math looks worse than the sale itself, it is reasonable to compare both paths.
          </p>
          <p className="text-gray-700 mb-6">
            You can start with the local Allentown page here:{' '}
            <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">
              Get a no-obligation cash offer on your Allentown home
            </Link>.
            We will look at the house, account for the water damage, and give you an as-is number without asking
            you to clean it up first.
          </p>

        </div>

        {/* CTA form */}
        <div className="mt-10 border-t pt-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-2 text-center">Get Your Allentown Cash Offer</h2>
          <p className="text-gray-600 text-center mb-8">No obligation. Written offer in 24 hours. Close in as few as 7 days.</p>
          <CashOfferForm variant="inline" sourcePage="/blog/sell-flood-damaged-house-allentown-pa" />
        </div>

        {/* Breadcrumb footer nav */}
        <nav className="text-sm text-gray-500 border-t pt-6 mt-10">
          <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Allentown, PA</Link>
          <span className="mx-2">›</span>
          <Link href="/markets/allentown-pa/resources" className="text-brand-primary hover:underline">Seller Resources</Link>
          <span className="mx-2">›</span>
          <span>Flood-Damaged House</span>
        </nav>
      </article>
    </>
  );
}
