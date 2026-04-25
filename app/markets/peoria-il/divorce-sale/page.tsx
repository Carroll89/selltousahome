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

const pageUrl = `${SITE_URL}/markets/peoria-il/divorce-sale`;

export const metadata: Metadata = {
  title: 'Sell House During Divorce Peoria IL — Fast Cash Sale',
  description:
    'Selling a house in a Peoria IL divorce? We buy as-is, one offer, fast close. IL equitable distribution (750 ILCS 5/503), Peoria County Family Division. Call 888-274-5006.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Do both spouses have to agree to sell the house in a Peoria IL divorce?',
    answer: 'Yes. For a voluntary sale, both spouses must agree to the terms and sign the contract. If one spouse refuses to sell, the other can file a motion with the Peoria County Family Division (Peoria County Circuit Court, 324 Main Street, Peoria, IL 61602) asking the court to order the sale as part of the property division under 750 ILCS 5/503. A court-ordered sale takes longer but is available when voluntary agreement fails.',
  },
  {
    question: 'Is Illinois a community property state?',
    answer: 'No. Illinois is an equitable distribution state, not a community property state. Under 750 ILCS 5/503, marital property is divided "in just proportions" considering all relevant factors — not automatically 50/50. Factors include duration of the marriage, each spouse\'s economic circumstances, contribution to the marital estate, and any dissipation of assets. A direct cash sale to USA Home Buyers provides a single net number that the attorneys can divide based on the equitable distribution agreed upon or ordered by the Peoria County Family Division.',
  },
  {
    question: 'How quickly can we sell the house during a Peoria IL divorce?',
    answer: 'USA Home Buyers can close in as few as 7 days once both parties agree on the sale. The primary variable is how quickly both spouses can sign the contract and agree on distribution. A cash sale eliminates the inspection-repair negotiation cycle, the financing contingency, and the 44-59 day financed close timeline. Per Redfin (January 2026), the Peoria city median sale price is $139,000 (+8.2% YoY) — a concrete reference point for both parties\' attorneys.',
  },
  {
    question: 'What is the transfer tax on a divorce sale in Peoria?',
    answer: 'The full Peoria three-layer transfer tax applies on divorce sales unless an exemption applies. Transfers between divorcing spouses pursuant to a court order may qualify for a transfer tax exemption under 35 ILCS 200/31-45. If the property is being sold to a third party (like USA Home Buyers) as part of the divorce settlement, the standard seller-paid transfer tax applies: $800 total on a $200,000 sale (state $200 + county $100 + Peoria City $500). USA Home Buyers covers all closing costs including the full transfer tax stack.',
  },
  {
    question: 'Can one spouse sell the house without the other\'s consent?',
    answer: 'No — not voluntarily. Both spouses must sign the deed to transfer marital property. However, if the divorce court orders the sale and one spouse refuses to cooperate, the court can appoint a receiver or special master to execute the deed on behalf of the non-cooperating spouse. This process adds time and legal cost. The most efficient path is both spouses agreeing to a single cash offer and distributing the proceeds per the divorce settlement agreement.',
  },
  {
    question: 'What if we still owe a mortgage on the Peoria house?',
    answer: 'The mortgage is paid off at closing from the sale proceeds. Whatever remains after the payoff is the net equity that the Peoria County Family Division or the parties\' settlement agreement will divide. If the mortgage balance exceeds the property value (underwater), a short sale may be needed — contact us at 888-274-5006 to discuss your specific situation.',
  },
];

export default function PeoriaDivorceSalePage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Selling a House During Divorce in Peoria IL — What You Need to Know', pageUrl, '2026-04-18'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/peoria-il-hero-640.jpg 640w, /images/optimized/peoria-il-hero-828.jpg 828w, /images/optimized/peoria-il-hero-1080.jpg 1080w, /images/optimized/peoria-il-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/peoria-il-hero-1200.jpg"
            alt="Peoria IL home — Sell House During Divorce Fast for Cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/peoria-il" className="hover:text-white">Peoria IL</Link> › Divorce Sale
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a House During Divorce in Peoria IL
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">
Selling a Peoria IL home in divorce? According to 750 ILCS 5/503, Illinois is equitable distribution — not community property. Per the Peoria County Family Division (324 Main St., 309-672-6000), contested disputes add months. One cash offer, one closing, proceeds divided by attorneys. Closes in 7 days. Call 888-274-5006.
              </p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              One offer, one closing, proceeds divided per your settlement. We buy Peoria houses during divorce — any condition, fast close.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>

      <VideoEmbed
        src="/videos/peoria-il/divorce-sale.mp4"
        title="Selling a House During Divorce in Peoria IL"
        poster="/videos/peoria-il/divorce-sale-poster.jpg"
        subtitle="One offer, one closing, clean split of proceeds in Peoria County"
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          Divorce in Peoria and need to sell fast? One cash offer, both parties sign, close in 7-14 days. No agents, no open houses. Proceeds split at closing per your agreement. Call 888-274-5006.
        </div>
      </details>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer Now" subheadline="One offer, one closing. Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/peoria-il/divorce-sale" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Illinois Divorce and Real Property — The Legal Framework</h2>
          <p className="text-gray-700 mb-4">
            Illinois divorce law is governed by the Illinois Marriage and Dissolution of Marriage Act, 750 ILCS 5 (IMDMA). For divorcing couples in Peoria, the relevant proceedings are handled by the Peoria County Circuit Court, Family Division, at 324 Main Street, Peoria, IL 61602, phone 309-672-6000.
          </p>
          <p className="text-gray-700 mb-4">
            Under 750 ILCS 5/503, marital property is divided "in just proportions" — Illinois is an equitable distribution state, meaning the court divides property fairly but not necessarily equally. The statute directs the court to consider factors including the duration of the marriage, each party's economic circumstances, contributions to the marital estate (including homemaking), any dissipation of assets, and the tax consequences of a proposed division. A 50/50 split is common but not required.
          </p>
          <p className="text-gray-700 mb-4">
            For the marital home specifically, 750 ILCS 5/503 gives the court several options: award the home to one spouse (with a corresponding offset in other marital property), order a sale and division of proceeds, or establish a deferred sale arrangement (less common, typically used when minor children's stability is a priority). The most efficient resolution for couples who cannot reach agreement on who keeps the home is a sale, with proceeds divided per the equitable distribution formula.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Why a Cash Sale Simplifies Peoria Divorce Real Estate</h2>
          <p className="text-gray-700 mb-4">
            A traditional listed sale in Peoria during a divorce creates multiple friction points that extend the timeline and generate additional disputes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Repairs and presentation:</strong> Who pays for pre-listing repairs? Who authorizes work? Which spouse is present for contractor access? Pre-1940 Peoria housing stock frequently requires $10,000–$30,000 in updates before a conventional lender will finance a buyer — disputes over who funds this can stall a listing for months.</li>
            <li><strong>Showing logistics:</strong> Both spouses need to cooperate on access, staging, and scheduling. If the relationship is contentious, this is a recurring source of conflict.</li>
            <li><strong>Offer negotiation:</strong> Both spouses must agree on accepting or rejecting offers. Buyers typically submit repair requests after inspection — requiring another round of joint decision-making.</li>
            <li><strong>Financing contingency risk:</strong> About 15-20% of financed transactions fall through at the last moment. Each fallthrough extends the process by weeks and can reopen disputes already resolved in the settlement agreement.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            A cash sale to USA Home Buyers eliminates every one of these friction points. We make one written offer. Both spouses review the same number. If both agree, we sign a contract, choose a closing date, and pay at closing. No repairs. No showings. No financing risk. No inspection negotiation. The attorneys divide the net proceeds per the settlement agreement.
          </p>
          <p className="text-gray-700 mb-4">
            According to Zillow (February 2026), Peoria's ZHVI is $115,649. On a home at that price point, 5-6% agent commission represents $5,782–$6,939 — a meaningful sum that reduces the net proceeds both parties share. USA Home Buyers charges no commission and covers all closing costs including Peoria's $800 transfer tax stack.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Peoria Divorce Sale Scenarios — Where Cash Buyers Add the Most Value</h2>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Healthcare Worker Divorces (OSF / Methodist Area Couples)</h3>
          <p className="text-gray-700 mb-4">
            OSF HealthCare (OSF Saint Francis Medical Center) and UnityPoint Health (Methodist Medical Center of Illinois) are two of Peoria's largest employers. Dual-income healthcare households are a significant segment of the Peoria homeownership market in the Kellar Heights, Knoxville Avenue, and North Peoria areas. When these couples divorce, they typically share a marital home in the $130,000–$200,000 range — bought together, now a contested asset.
          </p>
          <p className="text-gray-700 mb-4">
            The common scenario: one spouse has accepted a transfer or a new position elsewhere and is eager to close quickly; the other wants maximum value from a longer listing. A cash offer provides a concrete number that both parties can evaluate against a retail listing projection — with all the carrying cost and timeline risk netted out.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Bradley University Faculty/Staff Divorces</h3>
          <p className="text-gray-700 mb-4">
            Bradley University employs approximately 700 faculty and staff in Peoria. Academic households near campus — Bradley Park, Northmoor, and the Knoxville Avenue corridor — represent a segment of the divorce sale market with moderate home values ($90,000–$150,000) and academic-year timing constraints. A cash sale can close before the end of a semester, allowing both parties to relocate on a defined schedule.
          </p>

          <h3 className="text-xl font-semibold text-brand-dark mb-3">Manufacturing Worker Divorces — South Side and East Bluff</h3>
          <p className="text-gray-700 mb-4">
            In the South Peoria, East Bluff, and Manual area neighborhoods, divorcing couples frequently share homes in the $50,000–$100,000 range — many of them pre-1940 construction with deferred maintenance. Neither spouse can typically afford to buy out the other, and neither wants to take on a home they can't sell on the retail market. A cash offer provides immediate liquidity, clears the mortgage, and gives both parties a clean start.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">The Peoria County Family Division — What to Expect</h2>
          <p className="text-gray-700 mb-4">
            Peoria County divorce proceedings are handled by the Family Division of the Peoria County Circuit Court, 10th Judicial Circuit, 324 Main Street, Peoria, IL 61602, phone 309-672-6000. Under 750 ILCS 5, the court has full authority to order the sale of marital real property when the parties cannot agree on disposition.
          </p>
          <p className="text-gray-700 mb-4">
            When a court-ordered sale is necessary, the court typically sets a minimum acceptable price and a timeline for the sale. If the parties cannot find a buyer at or above the minimum price within the specified timeline, the court may order a reduced minimum or appoint a commissioner to conduct the sale. Court-ordered sales add legal fees, attorney time, and delay that a voluntary sale avoids.
          </p>
          <p className="text-gray-700 mb-4">
            The fastest resolution — and the one that minimizes legal fees for both parties — is both spouses agreeing on a sale before the court orders one. A written cash offer from USA Home Buyers provides the concrete number both parties need to reach that agreement. Call 888-274-5006.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Transfer Tax on Divorce Sales in Peoria</h2>
          <p className="text-gray-700 mb-4">
            When a Peoria home is sold to a third party (such as USA Home Buyers) as part of a divorce settlement, the full three-layer transfer tax applies: $800 total on a $200,000 sale ($200 state + $100 county + $500 Peoria City municipal RETT). Per ATG (Attorneys' Title Guaranty Fund) and peoriagov.org, the city stamp must be purchased at Peoria City Hall, 419 Fulton St., before the deed can be recorded. USA Home Buyers covers all three layers — the seller (estate) pays nothing at closing.
          </p>
          <p className="text-gray-700 mb-4">
            If property is being transferred directly between divorcing spouses rather than sold to a third party, an exemption may apply under 35 ILCS 200/31-45 for transfers pursuant to a court order. Consult your divorce attorney about whether this exemption applies in your specific settlement structure.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How We Work With Divorce Sale Sellers</h2>
          <p className="text-gray-700 mb-4">
            USA Home Buyers has experience working with divorcing couples in Peoria County. Here's how we handle the process:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Call or submit:</strong> Either spouse can initiate contact. We gather basic property information.</li>
            <li><strong>Written offer:</strong> We issue a written cash offer within 24 hours, addressed to both spouses and their attorneys if desired.</li>
            <li><strong>Mutual agreement:</strong> Both spouses review the offer. If accepted, both sign the purchase contract.</li>
            <li><strong>Closing coordination:</strong> We coordinate with the title company to ensure both parties can sign at a convenient time, including separate signings when needed.</li>
            <li><strong>Proceeds distribution:</strong> The title company issues proceeds checks per the closing statement. How the net proceeds are divided is between you and your attorneys — we write the checks as directed by the settlement agreement.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Call 888-274-5006 today. We serve all of Peoria city and Peoria County, any condition, any divorce timeline.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Divorce Sale in Peoria IL" />

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/peoria-il', label: '← Back to Peoria IL' },
              { href: '/markets/peoria-il/inherited-property', label: 'Inherited Property' },
              { href: '/markets/peoria-il/foreclosure', label: 'Foreclosure' },
              { href: '/markets/peoria-il/probate', label: 'Probate Sale' },
              { href: '/markets/peoria-il/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/sell-house-fast-illinois', label: 'Illinois Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Peoria IL Home During Divorce?" sourcePage="/markets/peoria-il/divorce-sale" />
      </div>
    </>
  );
}
