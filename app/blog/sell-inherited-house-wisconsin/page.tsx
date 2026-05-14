/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/sell-inherited-house-wisconsin`;

export const metadata: Metadata = {
  title: 'Selling an Inherited House in Wisconsin (2026)',
  description:
    'Inherited a WI home? No state estate or inheritance tax. How Wisconsin circuit court probate works and how to sell fast in Milwaukee, Madison, or Green Bay.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Does Wisconsin require probate to sell an inherited house?',
    answer:
      'Not always. If the property was held in joint tenancy with right of survivorship, placed in a living trust, or had a Transfer on Death deed recorded under Wis. Stat. § 705.15, it can pass outside probate entirely. If the deceased owned the home in their name alone with no survivorship language, the estate typically goes through the Circuit Court in the county where they lived. Pull the deed from the county register of deeds to check how title was held before assuming you need a full probate proceeding.',
  },
  {
    question: 'Which Wisconsin court handles probate for my property?',
    answer:
      "Wisconsin probate is handled by the Circuit Court in the county where the deceased person was domiciled at the time of death — not necessarily where the property sits. Milwaukee County Circuit Court handles estates for Milwaukee; Dane County Circuit Court for Madison; Brown County Circuit Court for Green Bay; Outagamie County Circuit Court for Appleton; Winnebago County Circuit Court for Oshkosh. If your parent lived in Madison but owned a rental in Milwaukee, you file in Dane County and the appointed Personal Representative manages the Milwaukee property from there.",
  },
  {
    question: 'Does Wisconsin have an estate or inheritance tax?',
    answer:
      "No. Wisconsin's estate tax was tied to the federal credit for state death taxes, which was phased out between 2002 and 2005. Wisconsin effectively collected no estate tax after that, and the tax was formally off the books by 2008. Wisconsin has never had a standalone inheritance tax. The federal estate tax still exists, but the federal exemption is over $13 million — far beyond the value of a typical Wisconsin home in Milwaukee, Green Bay, or Madison. For the large majority of estates, state and federal death taxes are zero.",
  },
  {
    question: "What is Wisconsin's Transfer on Death deed, and does it help?",
    answer:
      "Wisconsin enacted the Transfer on Death (TOD) deed in 2006 under Wis. Stat. § 705.15. During their lifetime, a property owner records a TOD deed at the county register of deeds naming a beneficiary. At death, the beneficiary files a simple affidavit and a certified death certificate — no probate, no court, no waiting. The property transfers immediately. TOD deeds have been available in Wisconsin since 2006 and are more common now than many families realize. If you're not sure whether one exists on the property, search the county register of deeds records online or in person.",
  },
  {
    question: 'Is inherited property marital property in Wisconsin?',
    answer:
      "No. Wisconsin is a marital property state under Chapter 766 of the Wisconsin Statutes, but an inheritance received by one spouse is classified as individual (separate) property, not marital property — as long as it stays separate. If the inheriting spouse deposits inherited funds into a joint account or retitles an inherited property into both spouses' names, it can become mixed or marital property. For a home that was inherited and kept solely in one spouse's name, the distinction is straightforward: it's individual property, and the inheriting spouse can sell without the other spouse's approval as to ownership rights (though both spouses may need to sign the deed depending on homestead status).",
  },
];

export default function SellInheritedHouseWisconsinPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          organizationSchema,
          articleSchema(
            'Selling an Inherited House in Wisconsin — Probate, No Estate Tax, and Timeline (2026)',
            pageUrl,
            '2026-05-14'
          ),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/markets/milwaukee-wi" className="text-brand-primary hover:underline">Milwaukee WI</Link>
            {' · '}
            <Link href="/markets/madison-wi" className="text-brand-primary hover:underline">Madison WI</Link>
            {' · '}
            <Link href="/markets/green-bay-wi" className="text-brand-primary hover:underline">Green Bay WI</Link>
            {' · '}
            <Link href="/markets/appleton-wi" className="text-brand-primary hover:underline">Appleton WI</Link>
            {' · '}
            <Link href="/markets/oshkosh-wi" className="text-brand-primary hover:underline">Oshkosh WI</Link>
            {' '} · May 14, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            Selling an Inherited House in Wisconsin — Circuit Court Probate, No Estate Tax, and What Comes Next
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Wisconsin has no state estate tax and no inheritance tax, which simplifies the math compared to many
            neighboring states. If you've inherited a home in Milwaukee, Madison, Green Bay, Appleton, or
            Oshkosh, here's how the county circuit court probate system actually works — and what your real
            options look like.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          {/* TL;DR block */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Summary</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Wisconsin probate runs through the Circuit Court in the county where the deceased was domiciled —
              Milwaukee County for Milwaukee, Dane County for Madison, Brown County for Green Bay. There is no
              state estate tax and no inheritance tax; the only Wisconsin-specific transfer cost is a real estate
              transfer fee of $3 per $1,000 at sale. The federal step-up in basis typically applies, reducing
              or eliminating capital gains if you sell promptly. Wisconsin's Transfer on Death deed (Wis. Stat.
              § 705.15), living trusts, and survivorship language can all pass property outside probate entirely.
              For full probate estates, the creditor notice period runs 90 days, and most residential estates
              close in 6–12 months.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Wisconsin Probate Goes Through the Circuit Court</h2>
          <p className="text-gray-700 mb-4">
            Unlike states that have a dedicated Probate Court or Surrogate's Court, Wisconsin handles estate
            proceedings in the Circuit Court — the same court system that handles civil and criminal matters.
            The county that has jurisdiction is wherever the deceased person was legally domiciled at death,
            not where the property is located.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              { city: 'Milwaukee', county: 'Milwaukee County Circuit Court' },
              { city: 'Madison', county: 'Dane County Circuit Court' },
              { city: 'Green Bay', county: 'Brown County Circuit Court' },
              { city: 'Appleton', county: 'Outagamie County Circuit Court' },
              { city: 'Oshkosh', county: 'Winnebago County Circuit Court' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark text-sm">{item.city}</p>
                <p className="text-gray-600 text-xs mt-1">{item.county}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4">
            Wisconsin uses the term "Personal Representative" rather than executor. The Personal Representative
            is appointed by the court to inventory assets, notify creditors, pay valid debts, and ultimately
            authorize the transfer of property to heirs or to a buyer. If no Personal Representative is named
            in a will, the court appoints one — typically a surviving spouse, adult child, or other interested
            party who petitions first.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Does the House Actually Need to Go Through Probate?</h2>
          <p className="text-gray-700 mb-4">
            Before you start filing anything, pull the deed from the county register of deeds and look at how
            title was held. A surprising number of Wisconsin properties were set up to pass outside probate.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-2">
            <li>
              <strong>Transfer on Death (TOD) deed:</strong> Under Wis. Stat. § 705.15, an owner can record a
              TOD deed naming a beneficiary during their lifetime. At death, the beneficiary files an affidavit
              and a certified death certificate at the register of deeds — the property transfers immediately
              with no probate. Wisconsin has allowed these since 2006, and they're more common than many families
              expect, especially on properties that were reviewed by an estate planning attorney in the last
              15 years.
            </li>
            <li>
              <strong>Joint tenancy with right of survivorship:</strong> If the deed includes survivorship
              language, the surviving owner inherits automatically. A certified death certificate and a
              simple affidavit filed at the register of deeds is all that's needed to clear the title.
            </li>
            <li>
              <strong>Living trust:</strong> If the deceased placed the property in a properly funded revocable
              living trust, the successor trustee transfers it without going to court. The key word is
              "funded" — the deed had to have been re-recorded in the trust's name. An unfunded trust provides
              no probate protection.
            </li>
            <li>
              <strong>Survivorship marital property:</strong> Under Wisconsin's marital property law, a married
              couple can hold property as survivorship marital property, which passes automatically to the
              surviving spouse outside probate.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            For older properties — homes purchased in the 1970s and 80s, before estate planning attorneys
            routinely added TOD designations — expect to find a simple deed in one person's name with no
            survivorship language. That means full probate.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What Wisconsin Probate Looks Like in Practice</h2>
          <p className="text-gray-700 mb-4">
            A clean Wisconsin residential estate typically takes 6 to 12 months from filing to final
            distribution. Contested estates, unclear title, or properties with multiple heirs who can't agree
            can stretch past 18 months.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                phase: 'Months 1–3',
                title: 'Open the Estate',
                desc: 'File with the Circuit Court in the county where the deceased lived. The court appoints the Personal Representative and issues Letters Testamentary. Creditors are notified by publication in a local newspaper; under Wisconsin law, they have 90 days from the date of publication to file claims.',
              },
              {
                phase: 'Months 3–9',
                title: 'Administer the Estate',
                desc: 'The Personal Representative inventories assets, pays valid debts, maintains the property (insurance, taxes, utilities). You can accept an offer and sign a contract for the real estate during this phase — the actual closing just requires court authorization to transfer title.',
              },
              {
                phase: 'Months 6–12',
                title: 'Transfer and Close',
                desc: 'The court authorizes the sale and the Personal Representative executes a deed transferring title. Cash buyers familiar with Wisconsin probate can close within days of court authorization — there is no Certificate of Transfer system like in Ohio; the Personal Representative signs a standard deed once the court approves.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-xs font-semibold text-brand-primary mb-1">{item.phase}</p>
                <h3 className="font-bold text-brand-dark mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Wisconsin Has No Estate or Inheritance Tax</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin's estate tax was tied to the federal credit for state death taxes. When that federal
            credit was phased out between 2002 and 2005, Wisconsin's estate tax revenue went to zero, and
            the tax was formally off the books by 2008. Wisconsin has never had a standalone inheritance tax.
          </p>
          <p className="text-gray-700 mb-4">
            The federal estate tax still applies nationally, but the current federal exemption is over $13
            million. A home in Oshkosh worth $120,000 or a house in Milwaukee worth $250,000 is nowhere near
            that threshold. For virtually every Wisconsin residential estate, state and federal death taxes
            are zero.
          </p>
          <p className="text-gray-700 mb-4">
            The one Wisconsin-specific cost to know: the state real estate transfer fee. According to the
            Wisconsin Department of Revenue, the transfer fee is $3 per $1,000 of consideration. On a
            $180,000 sale in Green Bay, that's $540. It's a standard closing line item — not material, but
            worth knowing about when calculating net proceeds.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Step-Up in Basis: Your Tax Advantage at Sale</h2>
          <p className="text-gray-700 mb-4">
            When you inherit property, federal tax law resets your cost basis to the fair market value at the
            date of the original owner's death — not what they originally paid. According to IRS Publication
            551, this step-up in basis applies to inherited property regardless of how long you hold it.
          </p>
          <p className="text-gray-700 mb-4">
            Here's what that means for a Wisconsin property: if your parent bought a house in Appleton for
            $65,000 in 1994 and it's worth $185,000 when they pass, your basis is $185,000. If you sell
            six months later for $180,000, you have a $5,000 loss on paper — no capital gains tax owed. Even
            if you sell for slightly more than the date-of-death value, the gain above the stepped-up basis
            is modest and may fall below reporting thresholds.
          </p>
          <p className="text-gray-700 mb-4">
            The longer you hold the property after inheriting, the more potential gain builds above the
            stepped-up basis. From a pure tax standpoint, selling soon after the estate is settled is
            usually the smarter move — especially for properties in markets that have appreciated recently.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Wisconsin's Marital Property Law — What Heirs Should Know</h2>
          <p className="text-gray-700 mb-4">
            Wisconsin is a marital property state under Chapter 766 of the Wisconsin Statutes. This comes
            up in a specific way for inherited properties: if the deceased was married, their spouse may
            have a claim to or interest in the estate depending on how property was held and whether there
            was a valid will.
          </p>
          <p className="text-gray-700 mb-4">
            Property <em>inherited by</em> a spouse is generally that spouse's individual property under
            Wisconsin law — it doesn't become marital property just because the inheriting spouse is married.
            But the reverse is also true: if multiple family members inherit and one of them later takes
            possession and begins paying expenses from a joint account, the line between individual and
            marital property can blur. When multiple heirs are involved and any of them are married, having
            an attorney review the title before signing anything is worthwhile.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">When Multiple Heirs Need to Agree</h2>
          <p className="text-gray-700 mb-4">
            The Wisconsin circuit courts will process a sale cleanly once the Personal Representative has
            authority and the heirs are aligned — but "aligned" is where most inherited property sales actually
            stall. One heir wants to sell immediately, one wants to rent it out, one is emotionally attached
            to the house, and one lives out of state and wants it resolved before the next flight home.
          </p>
          <p className="text-gray-700 mb-4">
            Having a real cash offer on the table changes those conversations. Arguing about hypothetical
            list prices is easy. Deciding whether to accept a concrete number is harder to avoid. We've
            helped Wisconsin families with two, three, and four heirs reach agreement faster than a
            traditional listing would have allowed — largely because there's nothing abstract to argue about
            when someone has put a number in writing.
          </p>
          <p className="text-gray-700 mb-4">
            If co-heirs genuinely can't reach agreement, Wisconsin courts can order a partition and sale, but
            that process adds months and legal fees. A cash offer that everyone can evaluate tends to resolve
            things before it comes to that.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Selling As-Is in Wisconsin</h2>
          <p className="text-gray-700 mb-4">
            Most inherited Wisconsin homes weren't maintained with resale in mind. Dated bathrooms, older
            mechanicals, years of deferred repairs, sometimes a full cleanout needed before a conventional
            buyer will even walk through — this is the reality. Traditional listings for inherited properties
            almost always require money and time most heirs don't want to put into a house they didn't
            choose to own.
          </p>
          <p className="text-gray-700 mb-4">
            Cash buyers purchase exactly as-is. Furniture, personal property, and whatever else is in the
            house can stay until you decide otherwise. There's no staging, no repairs, no contractor
            estimates to sort through. The estate sells the home in its current condition and closes on a
            schedule that fits around the probate timeline — not around a buyer's financing contingency.
          </p>
          <p className="text-gray-700 mb-4">
            We buy inherited homes across Wisconsin, including in{' '}
            <Link href="/markets/milwaukee-wi/inherited-property" className="text-brand-primary hover:underline">Milwaukee</Link>,{' '}
            <Link href="/markets/madison-wi/inherited-property" className="text-brand-primary hover:underline">Madison</Link>,{' '}
            <Link href="/markets/green-bay-wi/inherited-property" className="text-brand-primary hover:underline">Green Bay</Link>,{' '}
            <Link href="/markets/appleton-wi/inherited-property" className="text-brand-primary hover:underline">Appleton</Link>, and{' '}
            <Link href="/markets/oshkosh-wi/inherited-property" className="text-brand-primary hover:underline">Oshkosh</Link>.
            We understand how Wisconsin circuit court probate works and can structure a closing to happen quickly
            once the Personal Representative has legal authority to sell.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What to Do Right Now</h2>
          <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-3 ml-2">
            <li>
              <strong>Pull the deed.</strong> Go to the county register of deeds (most Wisconsin counties
              have online search portals) and look at how the property was titled. This tells you immediately
              whether you're in probate or can transfer with an affidavit.
            </li>
            <li>
              <strong>Check for a TOD deed or trust.</strong> Search the register of deeds for any Transfer on
              Death deed, trust document, or survivorship language. These are often overlooked and can save
              significant time and legal expense.
            </li>
            <li>
              <strong>Identify the right circuit court.</strong> File in the county where the deceased was
              domiciled, not where the property sits. The court's website will have filing instructions and
              fee schedules.
            </li>
            <li>
              <strong>Talk to a CPA before closing.</strong> The step-up in basis and the real estate transfer
              fee are worth a quick conversation. Knowing your tax position before you sign anything often
              changes what you're willing to accept.
            </li>
            <li>
              <strong>Get co-heirs to the same table early.</strong> Waiting until you're under contract to
              learn that one sibling won't sign is one of the most common ways inherited property sales fall
              apart in Wisconsin. Surface disagreements before they become deal killers.
            </li>
            <li>
              <strong>Request a cash offer.</strong> You're not obligated to take it. But a real number on
              paper cuts through months of hypothetical discussion about what the house "could" sell for.
            </li>
          </ol>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm text-amber-900">
              <strong>Wisconsin note:</strong> If the deceased owned property in Wisconsin and another state,
              you may need ancillary probate in each state where real estate is located. Wisconsin Circuit
              Court jurisdiction covers Wisconsin assets only. Multi-state estates typically need a probate
              attorney who can coordinate filings across states. See also our{' '}
              <Link href="/guides/inherited-property" className="text-amber-800 underline">inherited property guide</Link>{' '}
              for how the process compares across all of our markets.
            </p>
          </div>

        </div>

        <CashOfferForm
          variant="inline"
          headline="Inherited a Wisconsin Home? We Buy As-Is, Fast."
          subheadline="Cash offer in 24 hours. We understand Wisconsin circuit court probate and can close once your Personal Representative has authority to sell."
          sourcePage="/blog/sell-inherited-house-wisconsin"
        />

        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling Inherited Property in Wisconsin" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">More Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { href: '/markets/milwaukee-wi/inherited-property', label: 'Inherited Homes — Milwaukee WI' },
              { href: '/markets/green-bay-wi/inherited-property', label: 'Inherited Homes — Green Bay WI' },
              { href: '/markets/madison-wi/inherited-property', label: 'Inherited Homes — Madison WI' },
              { href: '/markets/appleton-wi/inherited-property', label: 'Inherited Homes — Appleton WI' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Homes — Oshkosh WI' },
              { href: '/guides/inherited-property', label: 'Inherited Property — All Markets' },
              { href: '/blog/sell-inherited-house-pennsylvania', label: 'Selling Inherited Property in PA' },
              { href: '/blog/sell-inherited-house-ohio', label: 'Selling Inherited Property in OH' },
              { href: '/blog/sell-inherited-house-illinois', label: 'Selling Inherited Property in IL' },
              { href: '/blog/sell-inherited-house-connecticut', label: 'Selling Inherited Property in CT' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-gray-200 rounded-lg p-3 hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
