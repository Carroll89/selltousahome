/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { articleSchema, faqSchema, organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/blog/sell-inherited-house-connecticut`;

export const metadata: Metadata = {
  title: 'Selling an Inherited House in Connecticut (2026)',
  description:
    'Inherited a house in CT? Learn how Connecticut probate districts work, the estate tax picture, step-up in basis, and how to sell fast in New Haven, Waterbury, Bridgeport, or Norwich.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Does Connecticut require probate to sell an inherited house?',
    answer:
      "It depends on how the property was titled. If the deceased owned the home solely in their name, the estate must go through probate in the Connecticut Probate District for the town where the deceased lived. If the property was held in joint tenancy with right of survivorship, a living trust, or transferred via a Transfer-on-Death deed (a relatively new option in CT), probate may not be required. Pull the deed from the town land records office to confirm how title was held.",
  },
  {
    question: 'Which probate court handles my Connecticut property?',
    answer:
      "Connecticut probate is organized by Probate Districts, not counties — and the district is determined by where the deceased lived, not where the property sits. There are roughly 54 Probate Districts serving Connecticut's 169 municipalities. For example, a New Haven decedent goes through the New Haven Probate District; Waterbury has its own district. The Connecticut Probate Court Administration website (ctprobate.gov) has a district finder tool.",
  },
  {
    question: 'Does Connecticut have an inheritance tax?',
    answer:
      "No. Connecticut eliminated its separate inheritance tax years ago. What Connecticut does have is an estate tax, but the exemption was raised significantly — as of 2024, Connecticut's estate tax exemption matches the federal exemption (over $13 million). Most Connecticut residential estates fall well below that threshold and owe no state estate tax. Consult a CPA to confirm where your estate stands.",
  },
  {
    question: 'What is the step-up in basis and how does it affect my taxes?',
    answer:
      "When you inherit a property, your cost basis for federal capital gains purposes is reset to the fair market value at the date of the original owner's death — not what they paid for it decades ago. If you sell the property shortly after inheriting, your capital gains are typically minimal. According to IRS Publication 551, this step-up applies to inherited property regardless of how long you hold it before selling.",
  },
  {
    question: 'Can I sell a Connecticut inherited home before probate is finished?',
    answer:
      "You can accept an offer and sign a purchase agreement during probate, but you cannot transfer the deed until the executor has Letters Testamentary and legal authority to act on behalf of the estate. Experienced cash buyers understand this and can structure closings around your probate timeline — often closing within days once probate clears.",
  },
];

export default function SellInheritedHouseCTPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          organizationSchema,
          articleSchema(
            'Selling an Inherited House in Connecticut — Probate Districts, Taxes, and Timeline (2026)',
            pageUrl,
            '2026-05-07'
          ),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link href="/markets/new-haven-ct" className="text-brand-primary hover:underline">New Haven CT</Link>
            {' · '}
            <Link href="/markets/waterbury-ct" className="text-brand-primary hover:underline">Waterbury CT</Link>
            {' · '}
            <Link href="/markets/bridgeport-ct" className="text-brand-primary hover:underline">Bridgeport CT</Link>
            {' · '}
            <Link href="/markets/norwich-ct" className="text-brand-primary hover:underline">Norwich CT</Link>
            {' '} · May 7, 2026 · <Link href="/blog" className="text-brand-primary hover:underline">Blog</Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            Selling an Inherited House in Connecticut — Probate Districts, Taxes, and What Heirs Need to Know
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Connecticut's probate system doesn't work like most states. It's organized by town — not county — which
            catches a lot of out-of-state heirs off guard. If you've inherited a house in New Haven, Waterbury,
            Bridgeport, or Norwich, here's what the process actually looks like.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          {/* TL;DR block */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Summary</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              To sell an inherited Connecticut property, you'll likely need to go through the Probate District for
              the town where the deceased lived (not a county court — CT doesn't use counties for probate). There's
              no inheritance tax in Connecticut, and the estate tax exemption is now over $13 million — most
              residential estates owe nothing. The federal step-up in basis applies, which keeps capital gains low
              if you sell promptly. Cash buyers purchase as-is and can close within days of probate clearing.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Connecticut Probate Is Run by Town, Not County</h2>
          <p className="text-gray-700 mb-4">
            This is the part that surprises most people. Connecticut uses a Probate District system — roughly 54
            districts serving the state's 169 municipalities. You don't file with a county probate court (Connecticut
            doesn't use counties the way most states do). You file in the Probate District for the town where the
            deceased was domiciled at the time of death.
          </p>
          <p className="text-gray-700 mb-4">
            According to the Connecticut Probate Court Administration (ctprobate.gov), the district is determined by
            the decedent's last legal residence — not where the property is located. So if your parent lived in
            Waterbury and owned a house in New Haven, you'd file in the Waterbury Probate District, not New Haven.
          </p>
          <p className="text-gray-700 mb-4">
            The Connecticut Probate Court website has a district finder tool that will confirm the right court and
            contact information based on any Connecticut municipality.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Does the House Actually Need to Go Through Probate?</h2>
          <p className="text-gray-700 mb-4">
            Not every inherited property does — and figuring this out first saves a lot of time.
          </p>
          <p className="text-gray-700 mb-4">
            Pull the deed from the town land records office (in Connecticut, real estate records are maintained at the
            municipal level, not a county recorder). Look at how title was held:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-2">
            <li><strong>Solely in the deceased's name:</strong> Full probate required before the property can be transferred.</li>
            <li><strong>Joint tenancy with right of survivorship:</strong> The surviving owner inherits automatically — no probate needed for that property.</li>
            <li><strong>In a properly funded living trust:</strong> The successor trustee can typically transfer the property without probate.</li>
            <li><strong>Transfer-on-Death deed:</strong> Connecticut enacted a TOD deed statute (CGS § 47-84a) that allows property to pass directly to a named beneficiary at death. If the deceased recorded one, the property may transfer outside probate entirely.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            For older properties — especially those owned by someone who bought the home in the 1960s, 70s, or 80s —
            it's common to find the title in a single name with no survivorship language. Those go through probate.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What Connecticut Probate Looks Like in Practice</h2>
          <p className="text-gray-700 mb-4">
            Connecticut probate for a residential estate isn't wildly different from other states in terms of
            timeline — it typically runs 9 to 18 months for a straightforward case, longer if there are disputes,
            creditors, or tax complications.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                phase: 'Months 1–3',
                title: 'Open the Estate',
                desc: 'File application with the Probate District, receive Certificate of Appointment (equivalent to Letters Testamentary). Notify creditors. Inventory assets including the real property.',
              },
              {
                phase: 'Months 3–12',
                title: 'Administer & Prepare',
                desc: 'Pay valid claims and estate expenses, address any tax filings, manage the property (insurance, taxes, utilities), and prepare for sale. You can accept an offer and go under contract during this phase.',
              },
              {
                phase: 'Months 9–18',
                title: 'Close the Estate',
                desc: 'Transfer deed to buyer (or heirs), file final accounting with the court, and close the estate. The deed transfer to a buyer happens here or after the court approves the sale.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-xs font-semibold text-brand-primary mb-1">{item.phase}</p>
                <h3 className="font-bold text-brand-dark mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4">
            One practical note: unlike some states, Connecticut Probate Courts can be quite active and involved in
            estate administration. If you're handling this from out of state, an experienced Connecticut estate
            attorney is worth the cost — they know the local procedures and can move things along faster than
            navigating it alone.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">The Tax Picture: Good News for Most CT Heirs</h2>
          <p className="text-gray-700 mb-4">
            Connecticut does not have a separate inheritance tax — it was eliminated years ago. You won't owe a
            percentage of what you inherit just based on your relationship to the deceased.
          </p>
          <p className="text-gray-700 mb-4">
            Connecticut does have an estate tax, but according to the Connecticut Department of Revenue Services,
            the exemption was raised significantly and now aligns with the federal estate tax exemption — over
            $13 million as of 2024. A house in Waterbury or Norwich worth $200,000–$300,000 isn't going to trigger
            a state estate tax. Even a more expensive New Haven or Bridgeport property in the $400,000–$600,000 range
            is nowhere near the threshold.
          </p>
          <p className="text-gray-700 mb-4">
            There's also Connecticut's real estate conveyance tax to keep in mind. When the estate sells the property,
            the standard conveyance tax applies — currently 0.75% on the first $800,000 of the sale price and 1.25%
            above that at the state level, plus a municipal portion. This is paid by the seller (the estate) at closing.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Step-Up in Basis: The Part That Saves You Money</h2>
          <p className="text-gray-700 mb-4">
            Federal tax law gives heirs a significant advantage called the step-up in basis. According to IRS
            Publication 551, when you inherit property, your cost basis is reset to the fair market value at the date
            of the original owner's death — not what they paid for it.
          </p>
          <p className="text-gray-700 mb-4">
            Here's what that means in practice: if your parent bought a home in Bridgeport for $65,000 in 1979 and
            it's worth $280,000 when they pass, your basis is $280,000. If you sell it for $290,000 six months later,
            your capital gain is $10,000 — not $225,000. At a 15% long-term rate, that's roughly $1,500 in federal
            tax instead of $33,750.
          </p>
          <p className="text-gray-700 mb-4">
            The step-up also applies to properties in rough condition. Even an inherited house that needs $80,000 in
            work may have a stepped-up basis close to current market value, making a below-market cash offer still
            tax-advantageous compared to what you'd expect from the original purchase price.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">When Multiple Heirs Are Involved</h2>
          <p className="text-gray-700 mb-4">
            Inherited property with two, three, or more heirs is where things get slow. Everyone has to agree before
            the executor can sell. One heir who wants to keep the house, one who needs cash now, one who lives in
            another state and just wants it resolved — these dynamics are extremely common.
          </p>
          <p className="text-gray-700 mb-4">
            Connecticut courts can order a sale through a partition action if heirs can't agree, but that process
            is expensive, stressful, and takes additional months. The better path in most cases is a direct
            conversation — ideally with a cash offer in hand so everyone can see a concrete number rather than
            debating hypothetical list prices.
          </p>
          <p className="text-gray-700 mb-4">
            We've worked with estates where multiple siblings were involved and needed the deal structured around
            the court's approval timeline. It's manageable. The key is getting a buyer who understands probate
            and won't walk away because the closing date is uncertain.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">Selling As-Is — What That Actually Means</h2>
          <p className="text-gray-700 mb-4">
            Most inherited Connecticut homes are not in showroom condition. They may have dated kitchens and baths,
            systems that haven't been maintained, and years of belongings still inside. A traditional listing means
            cleanouts, staging, repairs, inspections, buyer financing contingencies, and an uncertain timeline.
          </p>
          <p className="text-gray-700 mb-4">
            Cash buyers purchase inherited homes exactly as they are. Take what you want from the house — we've
            bought properties with full basements and attics, garages packed with 30 years of tools, and kitchens
            that haven't been updated since the Reagan administration. Whatever condition it's in is fine. We'll
            figure out the cleanout.
          </p>
          <p className="text-gray-700 mb-4">
            We buy inherited properties across Connecticut, including in{' '}
            <Link href="/markets/new-haven-ct/inherited-property" className="text-brand-primary hover:underline">New Haven</Link>,{' '}
            <Link href="/markets/waterbury-ct/inherited-property" className="text-brand-primary hover:underline">Waterbury</Link>,{' '}
            <Link href="/markets/bridgeport-ct/inherited-property" className="text-brand-primary hover:underline">Bridgeport</Link>, and{' '}
            <Link href="/markets/norwich-ct/inherited-property" className="text-brand-primary hover:underline">Norwich</Link>.
            We know the probate process in each district and can move fast once the estate has authority to sell.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">What to Do Right Now If You've Inherited a Connecticut Property</h2>
          <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-3 ml-2">
            <li><strong>Pull the deed.</strong> Go to the town land records office (or search online via the town assessor or clerk's website) and confirm how the property was titled. This tells you whether probate is required.</li>
            <li><strong>Identify the Probate District.</strong> Use ctprobate.gov's district finder based on where the deceased lived. Don't assume it's the town where the house is.</li>
            <li><strong>Get a CPA on the phone.</strong> Walk through the estate tax picture, conveyance tax at sale, and step-up basis before you make any decisions. It may change the math significantly.</li>
            <li><strong>Talk to your co-heirs early.</strong> If multiple people are involved, surface disagreements now — not six months in when you're under contract and someone won't sign.</li>
            <li><strong>Request a cash offer.</strong> You don't have to accept it. But knowing a real number makes every other decision easier — whether you're deciding between heirs, negotiating with a buyer's agent, or just trying to close probate and move on.</li>
          </ol>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm text-amber-900">
              <strong>Connecticut-specific note:</strong> If the estate includes property in multiple towns or
              has assets in other states, you may need ancillary probate or coordinated filings. Connecticut's
              Probate Court can advise on multi-district or multi-state estates. This is more common than people
              expect for older estates with varied assets. See also our guide to{' '}
              <Link href="/blog/connecticut-foreclosure-strict-vs-sale" className="text-amber-800 underline">Connecticut's foreclosure process</Link>{' '}
              if there are also mortgage issues involved with the inherited property.
            </p>
          </div>

        </div>

        <CashOfferForm
          variant="inline"
          headline="Inherited a Connecticut Home? We Can Move at Your Timeline."
          subheadline="Cash offer in 24 hours. As-is purchase — no repairs, no cleanout. We work around probate."
          sourcePage="/blog/sell-inherited-house-connecticut"
        />

        <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling Inherited Property in Connecticut" />

        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-dark mb-4">More Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { href: '/markets/new-haven-ct/inherited-property', label: 'Inherited Homes — New Haven CT' },
              { href: '/markets/waterbury-ct/inherited-property', label: 'Inherited Homes — Waterbury CT' },
              { href: '/markets/bridgeport-ct/inherited-property', label: 'Inherited Homes — Bridgeport CT' },
              { href: '/markets/norwich-ct/inherited-property', label: 'Inherited Homes — Norwich CT' },
              { href: '/blog/connecticut-foreclosure-strict-vs-sale', label: 'Connecticut Foreclosure Guide' },
              { href: '/situations/inherited-property', label: 'Inherited Property — All Markets' },
              { href: '/guides/probate', label: 'Probate & Real Estate Guide' },
              { href: '/blog/sell-inherited-house-pennsylvania', label: 'Selling Inherited Property in PA' },
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
