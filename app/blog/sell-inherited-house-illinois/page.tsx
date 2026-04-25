/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { articleSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/sell-inherited-house-illinois`;

export const metadata: Metadata = {
  title: 'Selling an Inherited House in Illinois (2026)',
  description:
    'Inherited a house in Illinois? Probate timelines, the no-inheritance-tax advantage, step-up in basis, and how to sell fast in Springfield, Bloomington, or Peoria.',
  alternates: { canonical: pageUrl },
};

export default function SellInheritedHouseIllinoisPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling an Inherited House in Illinois — Probate, Taxes, and Timeline in 2026', pageUrl, '2026-04-21'),
      ]} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/markets/springfield-il" className="text-brand-primary hover:underline">Springfield IL</Link>
            {' · '}
            <Link href="/markets/bloomington-il" className="text-brand-primary hover:underline">Bloomington IL</Link>
            {' · '}
            <Link href="/markets/peoria-il" className="text-brand-primary hover:underline">Peoria IL</Link>
            {' '} · April 21, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            Selling an Inherited House in Illinois — Probate, Taxes, and Timeline in 2026
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Illinois has no inheritance tax. That&apos;s the first thing most heirs get wrong when they start running the numbers on an inherited property. The second thing they get wrong is the probate timeline — assuming it takes years when it often doesn&apos;t have to.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Illinois Has No Inheritance Tax — But It Does Have an Estate Tax</h2>
          <p className="text-gray-700 mb-4">
            This distinction matters and causes real confusion. According to American Tax Service (January 2026), Illinois is one of the states that does not impose an inheritance tax — the tax paid by heirs based on the relationship to the deceased. You won&apos;t owe a percentage of what you receive just because you inherited it.
          </p>
          <p className="text-gray-700 mb-4">
            What Illinois does have is an estate tax — a tax on the estate itself before assets are distributed. The Illinois estate tax exemption sits at $4 million, per the Illinois Attorney General&apos;s office. Estates valued under $4 million owe nothing to the state. For context, the average home in Springfield is around $150,000-$200,000, a typical Bloomington property runs $200,000-$300,000, and the Peoria median sits in the $150,000-$200,000 range. Most downstate Illinois estates — especially when the primary asset is a single-family home — fall well under the $4 million threshold.
          </p>
          <p className="text-gray-700 mb-4">
            If the estate is over $4 million, the executor will need to file an Illinois estate tax return (Form IL-706) within 9 months of death. At that level, get an estate attorney involved — the graduated rate structure has real implications for distribution.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Federal Step-Up in Basis — What It Means for Your Sale</h2>
          <p className="text-gray-700 mb-4">
            Federal tax law resets your cost basis on inherited property to the fair market value at the date of death. Not what the original owner paid in 1983. Not the assessed value for property tax purposes. The current market value.
          </p>
          <p className="text-gray-700 mb-4">
            Here&apos;s what that looks like in practice. Your parent bought a house in Peoria for $55,000 in 1989. By the time they pass, the home is worth $170,000. Your inherited basis is $170,000 — not $55,000. If you sell it six months later for $175,000, your capital gain is $5,000. If you&apos;d been gifted the house while the parent was alive, you&apos;d have a $120,000 gain. The step-up is one of the most valuable tax provisions available to heirs, and it creates a real incentive to sell within a year of inheriting rather than holding.
          </p>
          <p className="text-gray-700 mb-4">
            Illinois follows federal rules for capital gains on real estate. There&apos;s no separate state capital gains rate — Illinois taxes all income, including capital gains, at a flat 4.95% (per 35 ILCS 5/201). For a $5,000 gain, that&apos;s $247.50. For a $50,000 gain on a property you&apos;ve held and appreciated since inheriting, it&apos;s $2,475. The numbers argue for selling sooner rather than later if the step-up benefit is still fresh.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Illinois Probate — How It Actually Works</h2>
          <p className="text-gray-700 mb-4">
            Illinois probate is governed by the Probate Act of 1975 (755 ILCS 5/). The process starts at the Circuit Court in the county where the deceased lived — Sangamon County for Springfield, McLean County for Bloomington, Peoria County for Peoria. The executor (or administrator, if no will) files a petition, the court issues Letters of Office, and administration begins.
          </p>
          <p className="text-gray-700 mb-4">
            The critical timeline anchor is the creditor claim period: under 755 ILCS 5/18-3, creditors have 6 months from the date of first publication of the estate notice to file claims. That 6-month window sets a practical floor on how quickly you can close an estate. You can sell the house before those 6 months are up — but the deed transfer and distribution of proceeds typically wait until the estate is ready to close.
          </p>
          <p className="text-gray-700 mb-4">
            The good news is Illinois offers independent administration under 755 ILCS 5/Article XXVIII. Under this option, an executor can administer the estate — including selling real property — without seeking court approval for each transaction. The sale still happens within the probate process, but the executor doesn&apos;t have to go back to the Circuit Court every time they want to sign a purchase agreement or accept an offer. This significantly reduces the friction of selling an inherited home in Illinois compared to states with more court-supervised administration requirements.
          </p>
          <p className="text-gray-700 mb-4">
            Realistic timelines: a straightforward estate with a single heir, a clear will, no creditor disputes, and a property that appraises cleanly can close in 8-12 months in downstate Illinois. Add complexity — multiple heirs, a contested will, outstanding liens, or a property with title issues — and 18-24 months becomes realistic. A cash buyer can have a written offer in hand before you&apos;ve filed the probate petition. Closing simply gets scheduled around when the executor has legal authority to convey title.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What It Costs to Sell — Transfer Taxes and Closing Math</h2>
          <p className="text-gray-700 mb-4">
            Illinois state real estate transfer tax is $0.50 per $500 of sale price under 35 ILCS 200/31-10 — that&apos;s 0.1% of the sale price. On a $180,000 Peoria home, the state transfer tax is $180. McLean County adds $0.25 per $500 on top of the state rate; Sangamon County and Peoria County rates vary by municipality. The City of Springfield imposes its own municipal transfer tax, so a Springfield sale carries slightly higher combined transfer taxes than an unincorporated county sale.
          </p>
          <p className="text-gray-700 mb-4">
            These are not large numbers. The bigger cost in a conventional retail sale is commission: 5-6% of the sale price, split between buyer&apos;s and seller&apos;s agents. On a $200,000 Bloomington home, that&apos;s $10,000-$12,000. Add the cost of repairs an inherited home typically needs — deferred maintenance, dated systems, cleanup — and a cash buyer&apos;s as-is offer often produces a comparable net, minus all the hassle.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Three Markets — How Seller Situations Differ</h2>

          <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-3">Springfield</h3>
          <p className="text-gray-700 mb-4">
            Springfield is the state capital. Like Harrisburg in Pennsylvania, it has a large base of state government employees who bought homes here over careers spanning 20-40 years. The heirs of those employees are often living in Chicago or out of state — they inherited a property they&apos;ve never had to manage, in a market they don&apos;t follow, and they need to resolve it cleanly without having to fly back and forth.
          </p>
          <p className="text-gray-700 mb-4">
            Springfield&apos;s housing stock includes a lot of mid-century homes in established neighborhoods — Lincoln Park, Ridgely, Iles Park — that are structurally sound but haven&apos;t been updated since the 1980s. A cash buyer absorbs all of that. No stager, no inspector hired by the buyer&apos;s lender, no negotiations over what the estate can&apos;t fund.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-3">Bloomington</h3>
          <p className="text-gray-700 mb-4">
            Bloomington&apos;s inherited-property market is heavily influenced by State Farm&apos;s decades-long presence in the city. Generations of State Farm employees bought homes here; the company&apos;s workforce restructuring in the early 2020s accelerated retirements and relocations. Add Illinois State University&apos;s retired faculty and staff, and Bloomington has a steady pipeline of estates — properties owned free and clear or with minimal mortgage, by heirs who are geographically scattered and need a clean, fast resolution.
          </p>
          <p className="text-gray-700 mb-4">
            Bloomington has been one of the hotter downstate Illinois markets on Realtor.com&apos;s hotness index. But &quot;hot market&quot; means different things depending on condition. A well-maintained North Bloomington colonial goes fast with an agent. A Holiday Knolls ranch with 1970s systems and a full basement of a recently-deceased retiree&apos;s belongings is a different conversation.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-3">Peoria</h3>
          <p className="text-gray-700 mb-4">
            Peoria&apos;s inherited-property volume is closely tied to the Caterpillar employment history in the region. CAT employed tens of thousands in the Peoria area at its peak; retirements over the past two decades produced a large cohort of equity-rich homeowners in Peoria&apos;s established neighborhoods — Knoxville Avenue corridor, Alta, Richwoods. Their estates are now cycling through Peoria County Circuit Court at a steady pace.
          </p>
          <p className="text-gray-700 mb-4">
            Peoria&apos;s housing market is affordable relative to the rest of Illinois — median home values in the $150,000-$200,000 range — but the homes often need work. Deferred maintenance on older properties is common, and the cost-benefit calculation for heirs who want to renovate before listing rarely pencils out when they&apos;re managing it remotely.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Multiple Heirs — The Partition Problem</h2>
          <p className="text-gray-700 mb-4">
            When there are multiple heirs and they don&apos;t agree, Illinois gives you a legal path: a partition action under 735 ILCS 5/17-101 et seq. Any co-owner can petition the Circuit Court to partition the property. Because real estate can&apos;t be physically divided, courts in Illinois typically order a judicial sale and distribute the proceeds proportionally. It works — but it&apos;s slow, expensive, and tends to leave family relationships worse than it found them.
          </p>
          <p className="text-gray-700 mb-4">
            The better path, when possible, is a negotiated agreement among heirs. Sometimes getting a concrete cash offer on the table makes it easier — everyone can see a real number, do the math, and decide. The heir who wants to keep the house can choose to buy out the others at that price. The heirs who want cash can see what they&apos;re actually getting. It moves the conversation from abstract disagreement to a specific decision.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Bottom Line for Illinois Heirs</h2>
          <p className="text-gray-700 mb-4">
            Illinois is actually a favorable state for inherited property sales — no inheritance tax, a practical independent administration framework that doesn&apos;t require court approval for every step, and a step-up in basis that can eliminate capital gains on properties that appreciated significantly during the original owner&apos;s lifetime.
          </p>
          <p className="text-gray-700 mb-4">
            The challenges are the same everywhere: deferred maintenance, scattered heirs, a property that&apos;s been vacant or neglected, and a probate process that takes longer than anyone wants it to. A cash buyer addresses all of those directly — no repairs, no showings, no lender conditions, and a closing timeline that works around the probate schedule instead of fighting it.
          </p>
          <p className="text-gray-700 mb-4">
            USA Home Buyers serves Springfield, Bloomington, and Peoria. We work with estate attorneys and executors regularly. Written cash offer within 24 hours of seeing the property — before your probate petition is filed, if that&apos;s where you are. Call 888-274-5006.
          </p>

        </div>

        <div className="mt-10 border-t pt-8">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Related Resources</h2>
          <ul className="text-sm space-y-2">
            <li><Link href="/markets/springfield-il/inherited-property" className="text-brand-primary hover:underline">Inherited Property in Springfield IL →</Link></li>
            <li><Link href="/markets/bloomington-il/inherited-property" className="text-brand-primary hover:underline">Inherited Property in Bloomington IL →</Link></li>
            <li><Link href="/markets/peoria-il/inherited-property" className="text-brand-primary hover:underline">Inherited Property in Peoria IL →</Link></li>
            <li><Link href="/markets/springfield-il/probate" className="text-brand-primary hover:underline">Probate Sales — Sangamon County →</Link></li>
            <li><Link href="/markets/bloomington-il/probate" className="text-brand-primary hover:underline">Probate Sales — McLean County →</Link></li>
            <li><Link href="/markets/peoria-il/probate" className="text-brand-primary hover:underline">Probate Sales — Peoria County →</Link></li>
            <li><Link href="/markets/springfield-il" className="text-brand-primary hover:underline">Sell Your House in Springfield IL →</Link></li>
            <li><Link href="/markets/bloomington-il" className="text-brand-primary hover:underline">Sell Your House in Bloomington IL →</Link></li>
            <li><Link href="/markets/peoria-il" className="text-brand-primary hover:underline">Sell Your House in Peoria IL →</Link></li>
            <li><Link href="/blog/sell-inherited-house-pennsylvania" className="text-brand-primary hover:underline">Selling an Inherited House in Pennsylvania →</Link></li>
            <li><Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide →</Link></li>
            <li><Link href="/guides/probate" className="text-brand-primary hover:underline">Probate Selling Guide →</Link></li>
          </ul>
        </div>

        <div className="mt-10">
          <CashOfferForm variant="footer" headline="Inherited an Illinois Property? Get a Cash Offer" sourcePage="/blog/sell-inherited-house-illinois" />
        </div>
      </article>
    </>
  );
}
