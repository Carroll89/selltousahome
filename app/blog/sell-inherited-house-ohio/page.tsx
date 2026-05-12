/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/sell-inherited-house-ohio`;

export const metadata: Metadata = {
  title: 'Selling an Inherited House in Ohio (2026)',
  description:
    'Inherited a house in OH? Ohio eliminated its estate and inheritance taxes in 2013. Here\'s how county probate works, the tax picture, and how to sell fast in Cleveland, Akron, Canton, or Youngstown.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Does Ohio require probate to sell an inherited house?',
    answer:
      "It depends on how title was held. If the deceased owned the home solely in their name with no survivorship language, the estate must go through probate in the Probate Division of the Court of Common Pleas in the county where the deceased lived. If the property was held in joint tenancy with right of survivorship, placed in a living trust, or had a Transfer on Death affidavit recorded under Ohio Revised Code 5302.22, probate may not be required. Pull the deed from the county recorder to confirm.",
  },
  {
    question: 'Which Ohio county probate court handles my property?',
    answer:
      "Ohio probate is filed in the county where the deceased lived at the time of death — not necessarily where the property is located. For properties we buy: Cleveland is Cuyahoga County Probate Court; Akron is Summit County Probate Court; Canton is Stark County Probate Court; Youngstown is Mahoning County Probate Court. If the house is in a different county than where the deceased lived, the executor still handles the sale — the probate court's jurisdiction follows the person, not the property.",
  },
  {
    question: 'Does Ohio have an estate or inheritance tax?',
    answer:
      "No. Ohio eliminated both its estate tax and its inheritance tax effective January 1, 2013. Before that, Ohio's estate tax applied to estates over $338,333 with rates up to 7%. According to the Ohio Department of Taxation, neither tax is currently collected. The federal estate tax still exists but the exemption is over $13 million — far above the value of most residential properties in Cleveland, Akron, Canton, or Youngstown.",
  },
  {
    question: "What is Ohio's Certificate of Transfer, and why does it matter for a sale?",
    answer:
      "Unlike most states where an executor signs a deed, Ohio uses a Certificate of Transfer (Ohio Revised Code 2113.61) to formally transfer real estate out of a probate estate. The Probate Court issues the certificate, and the executor files it with the county recorder. For a cash sale, this is the key document that allows closing to happen. Once the estate has authority to sell and the court approves the transaction, we can close within days of the Certificate being filed.",
  },
  {
    question: 'Can I sell an Ohio inherited home before probate is finished?',
    answer:
      "You can accept an offer and sign a contract during probate, but the actual transfer of title requires the Certificate of Transfer from the court. Cash buyers who understand Ohio probate can structure the closing to happen immediately once that document is in hand — they won't walk away because the timeline depends on court scheduling. The contract just needs to reflect that closing is contingent on the court's approval or issuance of the Certificate.",
  },
];

export default function SellInheritedHouseOhioPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          organizationSchema,
          articleSchema(
            'Selling an Inherited House in Ohio — County Probate, Taxes, and Timeline (2026)',
            pageUrl,
            '2026-05-11'
          ),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/markets/cleveland-oh" className="text-brand-primary hover:underline">Cleveland OH</Link>
            {' · '}
            <Link href="/markets/akron-oh" className="text-brand-primary hover:underline">Akron OH</Link>
            {' · '}
            <Link href="/markets/canton-oh" className="text-brand-primary hover:underline">Canton OH</Link>
            {' · '}
            <Link href="/markets/youngstown-oh" className="text-brand-primary hover:underline">Youngstown OH</Link>
            {' '} · May 11, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            Selling an Inherited House in Ohio — County Probate, No Estate Tax, and What to Do Next
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ohio eliminated both its estate tax and inheritance tax back in 2013, which changes the math compared
            to a lot of other states. If you've inherited a home in Cleveland, Akron, Canton, or Youngstown,
            here's how the county probate system works and what the actual process looks like.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          {/* TL;DR block */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Summary</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ohio probate runs through the Probate Division of the Court of Common Pleas in each county —
              Cuyahoga for Cleveland, Summit for Akron, Stark for Canton, Mahoning for Youngstown. Ohio
              eliminated both its estate tax and inheritance tax in 2013, so there's no state tax on what you
              inherit or what the estate sells. The federal step-up in basis applies, keeping capital gains low
              if you sell promptly. Ohio uses a Certificate of Transfer (not a deed) to move real estate out of
              probate — cash buyers who know Ohio probate can close within days of that document being filed.
              Most residential estates wrap up in 6–12 months.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Ohio Probate Is Run by the County</h2>
          <p className="text-gray-700 mb-4">
            Each of Ohio's 88 counties has a Probate Division inside its Court of Common Pleas. Where you file
            depends on where the deceased person was legally domiciled at the time of death — not where the
            property sits. So if your parent lived in Akron but owned a house in Canton, the estate is filed
            in Summit County (Akron), and the appointed executor handles the Canton property from there.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              { city: 'Cleveland', county: 'Cuyahoga County Probate Court' },
              { city: 'Akron', county: 'Summit County Probate Court' },
              { city: 'Canton', county: 'Stark County Probate Court' },
              { city: 'Youngstown', county: 'Mahoning County Probate Court' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark text-sm">{item.city}</p>
                <p className="text-gray-600 text-xs mt-1">{item.county}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4">
            Cuyahoga County Probate Court — which covers Cleveland — is one of the busiest probate courts
            in Ohio. That means more resources and more experienced staff, but also more cases in the queue.
            For simpler estates, this usually doesn't cause significant delays. For anything contested or
            complicated, having a local probate attorney who knows the court's scheduling tends to matter.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Does the House Actually Need to Go Through Probate?</h2>
          <p className="text-gray-700 mb-4">
            Before assuming you're in for a year-long process, pull the deed from the county recorder's office
            and check how the property was titled. Several ownership structures pass outside probate entirely.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-2">
            <li>
              <strong>Joint tenancy with right of survivorship:</strong> The surviving owner inherits
              automatically. A simple affidavit and certified death certificate filed at the recorder's office
              clears the title — no probate needed.
            </li>
            <li>
              <strong>Living trust:</strong> If the deceased placed the home in a properly funded revocable
              living trust, the successor trustee can transfer it without probate. Check whether the trust was
              actually funded (i.e., the deed was re-recorded in the trust's name).
            </li>
            <li>
              <strong>Transfer on Death (TOD) affidavit:</strong> Ohio Revised Code 5302.22 allows owners to
              record a TOD designation at the county recorder during their lifetime. At death, the named
              beneficiary files a short affidavit and death certificate — the property transfers without going
              through a court. This option has been available in Ohio since 2000 and is more common than most
              people expect.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            For older properties — homes bought in the 1960s, 70s, or 80s — TOD designations and survivorship
            language were rarely used. If the deed shows a single owner with no special language, expect full
            probate.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What Ohio Probate Looks Like in Practice</h2>
          <p className="text-gray-700 mb-4">
            A straightforward residential estate in Ohio typically takes 6 to 12 months from filing to
            final distribution. More complicated estates — creditor disputes, family disagreements, unclear
            title, or tax complications — can push past 18 months.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                phase: 'Months 1–3',
                title: 'Open the Estate',
                desc: 'File with the county Probate Court, receive Letters Testamentary, inventory assets including real estate. Creditors are notified; under ORC 2117.06, they have 6 months from the date of death (or 3 months after notice is published) to file claims.',
              },
              {
                phase: 'Months 3–9',
                title: 'Administer the Estate',
                desc: 'Pay valid debts and estate expenses. Maintain the property (insurance, utilities, taxes). Prepare for sale — you can accept an offer and go under contract during this phase even before the court issues a Certificate of Transfer.',
              },
              {
                phase: 'Months 6–12',
                title: 'Transfer and Close',
                desc: "The court issues a Certificate of Transfer (ORC 2113.61), which the executor records at the county recorder's office. This formally moves title. Closing on a cash sale can happen within days of this filing.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-xs font-semibold text-brand-primary mb-1">{item.phase}</p>
                <h3 className="font-bold text-brand-dark mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Ohio's Certificate of Transfer — What It Is and Why It Matters</h2>
          <p className="text-gray-700 mb-4">
            Most states use a deed signed by the executor to transfer inherited real estate. Ohio does it
            differently. Under Ohio Revised Code 2113.61, the Probate Court issues a Certificate of Transfer,
            which the executor records at the county recorder. That certificate is the document that legally
            moves title out of the estate to whoever is receiving the property — whether that's heirs or a buyer.
          </p>
          <p className="text-gray-700 mb-4">
            For a cash sale, this matters in a practical way: once the estate has authority to sell and the
            court approves the transaction (or the Certificate is issued and ready to file), closing can happen
            fast. There's no back-and-forth on deed preparation or waiting for an executor to sign documents
            across multiple states. The Certificate comes from the court, the executor records it, and title is
            clear.
          </p>
          <p className="text-gray-700 mb-4">
            Buyers who are unfamiliar with Ohio probate sometimes get confused or anxious about this step —
            it's different from what they've seen in Pennsylvania, Illinois, or other states. If you're working
            with a cash buyer, confirm upfront that they've closed Ohio probate sales before.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Tax Picture: Ohio Eliminated Both Taxes in 2013</h2>
          <p className="text-gray-700 mb-4">
            Before January 1, 2013, Ohio had both an estate tax (on estates over $338,333, with rates up to 7%)
            and a separate inheritance tax. Both were eliminated. According to the Ohio Department of Taxation,
            Ohio no longer collects either tax on property or money passing at death.
          </p>
          <p className="text-gray-700 mb-4">
            The federal estate tax still exists, but the federal exemption is over $13 million as of 2024.
            A house in Youngstown worth $90,000 or a house in Cleveland Heights worth $350,000 — neither comes
            close to triggering federal estate tax. For most Ohio residential estates, the state and federal
            tax burden at death is zero.
          </p>
          <p className="text-gray-700 mb-4">
            There is a real estate conveyance fee at sale. Ohio counties charge a transfer fee — the standard
            rate is $1 per $1,000 of the sale price at the county level, plus a $0.50 per $1,000 state tax.
            On a $150,000 house in Youngstown, that's about $225 total. It's a line item, not a material cost.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Step-Up in Basis: The Tax Advantage You Shouldn't Miss</h2>
          <p className="text-gray-700 mb-4">
            When you inherit property, federal tax law resets your cost basis to the fair market value at the
            date of the original owner's death — not what they paid for it. According to IRS Publication 551,
            this step-up applies to inherited property regardless of how long you hold it.
          </p>
          <p className="text-gray-700 mb-4">
            Here's what that means in Northeast Ohio: if your parent bought a house in Akron for $48,000 in
            1987 and it's worth $145,000 when they pass, your basis is $145,000. If you sell it six months
            later for $138,000, you have a $7,000 loss — zero federal capital gains tax. Even if you sell for
            more, the gain is calculated from the stepped-up value, not the original purchase price.
          </p>
          <p className="text-gray-700 mb-4">
            This makes selling soon after inheriting — rather than holding the property for years — often the
            smarter tax move. Every year you hold and the house appreciates, more potential gain builds up
            above the stepped-up basis.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">When Multiple Heirs Are Involved</h2>
          <p className="text-gray-700 mb-4">
            Ohio inherited properties with two, three, or more heirs follow the same dynamic you see everywhere:
            someone wants to sell, someone isn't sure, someone lives out of state and just wants it resolved,
            and someone has an emotional attachment. These situations slow things down more than any court
            procedural issue.
          </p>
          <p className="text-gray-700 mb-4">
            If heirs genuinely can't agree, Ohio courts can order a partition sale — but that process adds
            months, attorney fees, and stress for everyone involved. The better path in almost every case
            is getting a concrete cash offer on the table first. Hypothetical list prices are easy to argue
            about. A real number with a written offer tends to move conversations to resolution faster.
          </p>
          <p className="text-gray-700 mb-4">
            We've worked with Ohio estates where four siblings needed to agree on a sale and needed the
            closing to fit around probate court dates. It's manageable — the key is working with a buyer who
            won't disappear if closing gets pushed two weeks because the Certificate of Transfer isn't filed yet.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Selling As-Is in Ohio's Market</h2>
          <p className="text-gray-700 mb-4">
            Most inherited Ohio homes aren't going to win any showings. Dated kitchens, old carpet, a furnace
            that's been patched for fifteen years, a basement that's had some water — this is the reality of
            properties that weren't maintained with resale in mind. Traditional listings for inherited homes
            almost always require a cleanout, repairs, and time you may not want to spend.
          </p>
          <p className="text-gray-700 mb-4">
            Cash buyers purchase exactly as-is. That means whatever's in the house stays until the executor
            decides otherwise — you don't need to remove furniture, clear the garage, or deal with a
            dumpster before closing. Bring what you want and leave the rest.
          </p>
          <p className="text-gray-700 mb-4">
            We buy inherited homes across Northeast Ohio, including in{' '}
            <Link href="/markets/cleveland-oh/inherited-property" className="text-brand-primary hover:underline">Cleveland</Link>,{' '}
            <Link href="/markets/akron-oh/inherited-property" className="text-brand-primary hover:underline">Akron</Link>,{' '}
            <Link href="/markets/canton-oh/inherited-property" className="text-brand-primary hover:underline">Canton</Link>, and{' '}
            <Link href="/markets/youngstown-oh/inherited-property" className="text-brand-primary hover:underline">Youngstown</Link>.
            We understand the Certificate of Transfer process and can structure closing to happen fast once
            the estate has legal authority to sell.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What to Do Right Now If You've Inherited an Ohio Property</h2>
          <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-3 ml-2">
            <li>
              <strong>Pull the deed.</strong> Search the county recorder's website (most Ohio counties have
              online search) to confirm how title was held. This is the single fastest way to know whether
              you're in probate or can transfer with just an affidavit.
            </li>
            <li>
              <strong>Identify the right probate court.</strong> File in the county where the deceased lived
              — not where the property is. If you're dealing with Cuyahoga, Summit, Stark, or Mahoning County,
              each court's website has filing instructions and fee schedules.
            </li>
            <li>
              <strong>Talk to a CPA before selling.</strong> The step-up in basis and the conveyance tax at
              closing are worth a 30-minute call. It often changes how much heirs net from the sale.
            </li>
            <li>
              <strong>Surface co-heir disagreements early.</strong> Waiting until you're under contract to
              discover one sibling won't sign is one of the more painful ways a sale falls apart. Get everyone
              in the same conversation early, even if it's uncomfortable.
            </li>
            <li>
              <strong>Request a cash offer.</strong> You're not obligated to accept it. But knowing a real
              number makes it easier to decide whether to list, sell as-is, or split the difference with
              multiple heirs who have competing priorities.
            </li>
          </ol>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm text-amber-900">
              <strong>Ohio-specific note:</strong> If the estate has assets in multiple states — property in
              Ohio and another state — you may need ancillary probate proceedings in each state where real
              estate is located. Ohio probate only gives the executor authority over Ohio assets. A probate
              attorney familiar with multi-state estates can coordinate the filings. See also our guide to{' '}
              <Link href="/situations/inherited-property" className="text-amber-800 underline">inherited property across all our markets</Link>{' '}
              if you need help understanding how the process differs state by state.
            </p>
          </div>

        </div>

        <CashOfferForm
          variant="inline"
          headline="Inherited an Ohio Home? We Buy As-Is, Fast."
          subheadline="Cash offer in 24 hours. We know Ohio probate and can close within days of your Certificate of Transfer."
          sourcePage="/blog/sell-inherited-house-ohio"
        />

        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling Inherited Property in Ohio" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">More Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { href: '/markets/cleveland-oh/inherited-property', label: 'Inherited Homes — Cleveland OH' },
              { href: '/markets/akron-oh/inherited-property', label: 'Inherited Homes — Akron OH' },
              { href: '/markets/canton-oh/inherited-property', label: 'Inherited Homes — Canton OH' },
              { href: '/markets/youngstown-oh/inherited-property', label: 'Inherited Homes — Youngstown OH' },
              { href: '/situations/inherited-property', label: 'Inherited Property — All Markets' },
              { href: '/blog/sell-inherited-house-pennsylvania', label: 'Selling Inherited Property in PA' },
              { href: '/blog/sell-inherited-house-connecticut', label: 'Selling Inherited Property in CT' },
              { href: '/blog/sell-inherited-house-illinois', label: 'Selling Inherited Property in IL' },
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
