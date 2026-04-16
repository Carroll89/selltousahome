/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'How to Sell an Inherited House in Pennsylvania',
  description:
    'Inherited a house in Pennsylvania? Learn your options — sell as-is, probate requirements, tax implications, and how to close fast without family drama.',
  alternates: { canonical: `${SITE_URL}/blog/sell-inherited-house-pennsylvania` },
};

const FAQ_ITEMS = [
  {
    question: 'Do I have to go through probate to sell an inherited house in Pennsylvania?',
    answer:
      'It depends on how the property was titled. If the deceased owned the house solely in their name, it must go through Pennsylvania probate before you can sell it. If the property was held in joint tenancy with right of survivorship, a living trust, or transferred via a beneficiary deed, probate may not be required. A Pennsylvania real estate attorney can confirm which path applies.',
  },
  {
    question: 'How long does Pennsylvania probate take for real estate?',
    answer:
      'Simple estates in Pennsylvania typically take 9-18 months to close. Complex estates — multiple heirs, contested wills, outstanding debts — can take 2-3 years. The Register of Wills in the county where the deceased lived handles the process. You can often begin marketing the property and even accept an offer before probate closes, but the deed transfer happens at closing after Letters Testamentary are issued.',
  },
  {
    question: 'Will I owe capital gains tax when I sell an inherited house in Pennsylvania?',
    answer:
      'Federal tax law provides a "step-up in basis" for inherited property. This means your cost basis is reset to the fair market value at the date of death, not what the original owner paid. If you sell quickly after inheriting, capital gains are often minimal or zero. If the property appreciates significantly before you sell, you pay capital gains only on the increase above the date-of-death value. Pennsylvania also has its own state inheritance tax (4.5% for direct descendants). Consult a CPA for your specific situation.',
  },
  {
    question: 'What if there are multiple heirs and not everyone wants to sell?',
    answer:
      'This is the most common complication with inherited property. If heirs disagree, the one who wants to sell can file a partition action in Pennsylvania court — a legal process to force the sale. Courts typically require the property to be sold and proceeds divided. However, partition actions are expensive and slow. It\'s usually better to negotiate among heirs. Sometimes one heir can buy out the others.',
  },
  {
    question: 'Can I sell an inherited house as-is if it needs a lot of work?',
    answer:
      'Yes, and this is often the best path. Cash buyers purchase inherited homes in any condition — outdated systems, deferred maintenance, decades of contents left inside. You don\'t have to clean it out or make a single repair. We\'ve purchased estates with full basements of belongings. Take what you want, leave the rest — we handle the cleanout.',
  },
];

const pageUrl = `${SITE_URL}/blog/sell-inherited-house-pennsylvania`;

export default function SellInheritedHousePAPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('How to Sell an Inherited House in Pennsylvania', pageUrl, '2026-04-09'),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/blog" className="hover:text-white">Blog</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              How to Sell an Inherited House in Pennsylvania
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Inheriting a house can feel like a gift and a headache at the same time. The property has real value — but so does your time, 
              your peace of mind, and your relationship with the other people involved. Here's what you need to know to move forward.
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/blog/sell-inherited-house-pennsylvania" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          {/* TL;DR — GEO/AEO citation block */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">TL;DR — What You Need to Know</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              To sell an inherited house in Pennsylvania, you typically need to complete probate first (9-18 months 
              for simple estates). You benefit from a federal step-up in basis, which reduces capital gains taxes. 
              Cash buyers can purchase the property as-is — no repairs, no cleanout — and often close within days 
              of probate completing. Complications arise when multiple heirs disagree, requiring either negotiation 
              or a partition action. The fastest path is usually: confirm probate status, agree among heirs, accept 
              a cash offer, close.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">First: Do You Actually Need to Go Through Probate?</h2>
            <p className="text-gray-700 mb-4">
              Before anything else, you need to know how the property was titled. This one detail changes everything 
              about your timeline and process.
            </p>
            <p className="text-gray-700 mb-4">
              If the deceased owned the house solely in their name — which is the most common scenario with older 
              homeowners — the property is part of the estate and must go through Pennsylvania's probate process. 
              The executor (or administrator, if there was no will) applies for Letters Testamentary at the Register 
              of Wills in the county where the deceased lived. In Harrisburg, that's Dauphin County. In Allentown, 
              it's Lehigh County.
            </p>
            <p className="text-gray-700 mb-4">
              If the property was held in joint tenancy with right of survivorship — common with married couples — 
              the surviving owner inherits automatically. No probate required. The same goes for property held in a 
              properly funded living trust, or transferred via a deed with a life estate reserved for the original owner.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="text-sm text-amber-900">
                <strong>Practical step:</strong> Pull the deed from the county recorder of deeds. The vesting (how 
                the names appear on the deed) tells you everything. If you see "John Smith and Mary Smith, husband 
                and wife, as joint tenants with right of survivorship" — probate likely isn't required for the house. 
                If it just says "John Smith" — it probably is.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Pennsylvania Probate Timeline</h2>
            <p className="text-gray-700 mb-4">
              Pennsylvania probate isn't as complicated as people fear, but it does take time. Here's a realistic 
              picture of what the process looks like:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  phase: 'Months 1-3',
                  title: 'Open the Estate',
                  desc: 'File with Register of Wills, receive Letters Testamentary, publish legal notice to creditors. Creditors have 1 year to file claims against the estate.',
                },
                {
                  phase: 'Months 3-12',
                  title: 'Administer & Sell',
                  desc: 'Pay debts, file estate taxes (if required), manage the property, and sell assets. The house can often be listed and go under contract during this phase.',
                },
                {
                  phase: 'Months 9-18',
                  title: 'Close the Estate',
                  desc: 'Distribute remaining assets to heirs, file final accounting, close the estate with the court. Deed transfer to buyer happens at or after this stage.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <p className="text-xs font-semibold text-brand-primary mb-1">{item.phase}</p>
                  <h3 className="font-bold text-brand-dark mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700">
              One thing most people don't know: you can accept a cash offer and even sign a purchase agreement 
              while probate is still open. You just can't transfer the deed until the executor has legal authority 
              to do so. Experienced cash buyers understand this and can structure the deal around your probate timeline.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Tax Piece: Step-Up in Basis</h2>
            <p className="text-gray-700 mb-4">
              Most heirs don't know about this part — and it's genuinely good news.
            </p>
            <p className="text-gray-700 mb-4">
              When you inherit property, your cost basis is "stepped up" to the fair market value on the date of 
              the original owner's death. Not what they paid for it in 1978. Not the assessed value for property tax 
              purposes. The current fair market value.
            </p>
            <p className="text-gray-700 mb-4">
              In practical terms: if your parent bought a house for $40,000 in 1985 and it's worth $180,000 when they 
              die, your basis is $180,000. If you sell it for $185,000 six months later, your capital gain is only $5,000 — 
              not $145,000.
            </p>
            <p className="text-gray-700 mb-4">
              This is one reason to sell sooner rather than later after inheriting. The longer you hold it, the more 
              the property may appreciate — and the bigger your eventual capital gains exposure.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-4">
              <p className="text-sm text-gray-700">
                <strong>Pennsylvania also has an inheritance tax.</strong> The rate depends on your relationship to the 
                deceased: 0% for spouses, 4.5% for direct descendants (children, grandchildren), 12% for siblings, 15% 
                for others. This is separate from federal capital gains and is paid by the estate, not the buyer. Get a 
                CPA involved — these numbers add up.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">When There Are Multiple Heirs</h2>
            <p className="text-gray-700 mb-4">
              This is where inherited property situations get complicated — not legally, but humanly. Siblings who 
              haven't spoken in years. One heir who wants to keep the house. One who needs the money now. One who lives 
              three states away and has no interest in managing anything.
            </p>
            <p className="text-gray-700 mb-4">
              Pennsylvania law requires all heirs who have an interest in the property to agree before it can be sold. 
              If you can't reach agreement, the party who wants to sell can file a <strong>partition action</strong> — 
              a lawsuit asking the court to divide the asset. For real property that can't be physically divided, courts 
              typically order a sale and distribute the proceeds.
            </p>
            <p className="text-gray-700 mb-4">
              Partition actions work, but they're expensive, slow, and tend to permanently damage family relationships. 
              Most families find it worth the effort to negotiate directly, even when it's uncomfortable. Sometimes a 
              cash offer makes the conversation easier — everyone can see a real number and decide.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling As-Is: What This Looks Like in Practice</h2>
            <p className="text-gray-700 mb-4">
              Inherited homes are rarely move-in ready. They've often been lived in by someone who had health issues, 
              was elderly, or who deferred maintenance for years. And they're frequently full — of furniture, clothing, 
              papers, collections, and decades of accumulated stuff.
            </p>
            <p className="text-gray-700 mb-4">
              Cash buyers purchase inherited homes in exactly this condition. You take what you want, leave what you don't. 
              We've bought homes with full basements, garages stacked to the ceiling, and 40-year-old kitchens. We factor 
              the condition into the offer — we don't ask you to fix it first.
            </p>
            <p className="text-gray-700 mb-4">
              This is genuinely different from listing with an agent. A traditional listing requires cleanup, staging, 
              repairs, showings, negotiation, financing contingencies, and an inspection. For an inherited home, that 
              process can take months and cost tens of thousands of dollars upfront — money the estate often doesn't have 
              readily available.
            </p>
            <p className="text-gray-700">
              We work with estates in <Link href="/markets/harrisburg-pa/inherited-property" className="text-brand-primary hover:underline">Harrisburg</Link> and{' '}
              <Link href="/markets/allentown-pa/inherited-property" className="text-brand-primary hover:underline">Allentown</Link>{' '}
              regularly. We know how to structure deals around probate timelines and coordinate with estate attorneys 
              to make the closing straightforward.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Inherited a Pennsylvania Property? We Can Help."
            subheadline="Cash offer in 24 hours. We buy as-is — no repairs, no cleanout required."
            sourcePage="/blog/sell-inherited-house-pennsylvania"
          />

          <FAQSection items={FAQ_ITEMS} heading="Common Questions About Selling Inherited Property in PA" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">More Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { href: '/guides/inherited-property', label: 'Inherited Property Guide' },
                { href: '/guides/probate', label: 'Pennsylvania Probate Guide' },
                { href: '/markets/harrisburg-pa/inherited-property', label: 'Inherited Homes — Harrisburg PA' },
                { href: '/markets/allentown-pa/inherited-property', label: 'Inherited Homes — Allentown PA' },
                { href: '/markets/harrisburg-pa/probate', label: 'Probate Properties — Harrisburg PA' },
                { href: '/guides/sell-as-is', label: 'Selling a House As-Is in PA' },
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
      </div>
    </>
  );
}
