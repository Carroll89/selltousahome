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
  title: 'Selling a House With Code Violations in PA',
  description:
    'Have open permits or code violations on your PA home? You can still sell. Learn what violations mean for your sale, and how cash buyers handle them.',
  alternates: { canonical: `${SITE_URL}/blog/sell-house-with-code-violations-pa` },
};

const FAQ_ITEMS = [
  {
    question: 'Can you sell a house with open code violations in Pennsylvania?',
    answer:
      'Yes. Pennsylvania law does not prohibit selling a property with open code violations. You are required to disclose known material defects — which includes known violations — on the PA Seller Disclosure form. Cash buyers routinely purchase properties with open violations and handle resolution after closing. Traditional buyers using financing may have a harder path, since lenders often won\'t approve loans on properties with significant violations.',
  },
  {
    question: 'What are the most common code violations that affect home sales in PA?',
    answer:
      'The most common are: missing or non-functioning smoke/carbon monoxide detectors, electrical panel issues (Federal Pacific panels, aluminum wiring, double-tapped breakers), unpermitted additions or renovations, failed or absent sewage system inspections, structural concerns flagged during inspections, and exterior maintenance violations (peeling paint in homes built before 1978, broken windows, deteriorating rooflines). Some municipalities in PA — especially older cities like Allentown and Harrisburg — conduct point-of-sale inspections that generate a violation list automatically.',
  },
  {
    question: 'What is a point-of-sale inspection in Pennsylvania?',
    answer:
      'Some Pennsylvania municipalities require a housing inspection before a property can be transferred. The city sends an inspector, generates a list of violations, and the seller must either fix them or get a buyer to agree to assume them. Harrisburg and Allentown both have point-of-sale inspection requirements. Cash buyers who know the local market handle this regularly — they know what will and won\'t hold up a closing.',
  },
  {
    question: 'Will code violations reduce the price I get for my house?',
    answer:
      'Yes — but often less than you\'d expect compared to fixing them first. Significant violations (structural, electrical, sewage) will reduce a cash offer, but you\'re also avoiding the cost of the repairs plus the time, hassle, and carrying costs of getting them done. For many properties — especially older homes in Harrisburg or Allentown — the net result of selling as-is with violations factored in is comparable to fixing and listing, especially after agent commissions.',
  },
  {
    question: 'What happens if I just ignore code violations and don\'t disclose them?',
    answer:
      'Don\'t do this. Pennsylvania\'s Real Estate Seller Disclosure Law requires you to disclose known material defects. Failing to disclose known violations exposes you to liability after closing — a buyer could sue for misrepresentation. Cash buyers waive inspection contingencies but that doesn\'t eliminate your disclosure obligations. Disclose what you know, price accordingly, and move on clean.',
  },
];

const pageUrl = `${SITE_URL}/blog/sell-house-with-code-violations-pa`;

export default function SellHouseCodeViolationsPAPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Selling a House With Code Violations in Pennsylvania', pageUrl, '2026-04-10'),
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
              <Link href="/blog" className="hover:text-white">Blog</Link> › Code Violations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a House With Code Violations in Pennsylvania
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Open permits, failed inspections, violations you inherited from a previous owner — these don't have 
              to stop your sale. But they do require a different approach than the standard listing process.
            </p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/blog/sell-house-with-code-violations-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          {/* TL;DR — GEO/AEO citation block */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">TL;DR — What You Need to Know</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              You can sell a house with code violations in Pennsylvania — there's no law preventing it. You must 
              disclose known violations on the PA Seller Disclosure form. Traditional buyers using bank financing 
              often can't close on properties with significant violations because lenders won't approve the loan. 
              Cash buyers purchase properties with violations as-is and handle code compliance after closing. 
              Harrisburg and Allentown both have point-of-sale inspection requirements that generate violation lists 
              at transfer — experienced cash buyers work with these routinely.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">What Code Violations Actually Mean for Your Sale</h2>
            <p className="text-gray-700 mb-4">
              A code violation is a determination by a local building or code enforcement department that some aspect 
              of your property doesn't meet current standards. This might be something you caused — an addition you 
              built without permits — or something you inherited from a previous owner, or simply the result of a 
              house aging out of compliance with updated codes.
            </p>
            <p className="text-gray-700 mb-4">
              Some violations are cosmetic and easy to resolve. Others — structural problems, failed septic systems, 
              knob-and-tube wiring — are significant and expensive to address. The impact on your sale depends on 
              both the severity of the violations and the type of buyer you're dealing with.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2 text-sm">Traditional Sale With Violations</h3>
                <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                  <li>Lender may refuse to fund the loan</li>
                  <li>Buyer&apos;s inspection triggers renegotiation</li>
                  <li>Seller must repair or provide credit</li>
                  <li>Closing delayed while work is completed</li>
                  <li>Deal can fall apart if violations are severe</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2 text-sm">Cash Sale With Violations</h3>
                <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                  <li>No lender — no lender requirements</li>
                  <li>Violations factored into offer price</li>
                  <li>No repair requests or credits negotiated</li>
                  <li>Buyer handles code compliance after closing</li>
                  <li>Can close fast regardless of violation list</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Point-of-Sale Inspections in Harrisburg and Allentown</h2>
            <p className="text-gray-700 mb-4">
              If you're selling a property in Harrisburg or Allentown, there's one requirement that doesn't exist 
              everywhere in Pennsylvania: a mandatory point-of-sale (POS) housing inspection.
            </p>
            <p className="text-gray-700 mb-4">
              Before you can transfer title in these cities, an inspector from the city's code enforcement department 
              comes through the property. They generate a violation list — sometimes just a few items, sometimes several 
              pages. This list becomes part of the transaction.
            </p>
            <p className="text-gray-700 mb-4">
              In a traditional sale, sellers are often expected to remediate violations before closing, or at minimum 
              escrow funds to ensure they'll be addressed. This can hold up a closing for weeks.
            </p>
            <p className="text-gray-700 mb-4">
              With a cash buyer who knows the market, this process is handled differently. We've been through the 
              Harrisburg and Allentown point-of-sale process many times. We know what inspectors flag, we know what 
              actually needs to be addressed versus what can be handled post-closing, and we've structured deals 
              around violation lists without the closing blowing up.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm text-amber-900">
                <strong>If you&apos;re in Harrisburg:</strong> The Bureau of Building and Housing Inspection handles 
                point-of-sale reviews. Schedule early — inspector availability can affect your timeline.
                <br /><br />
                <strong>If you&apos;re in Allentown:</strong> The Bureau of Housing Inspection and Licensing conducts 
                POS inspections. Similar process. Budget time for the scheduling and inspection before you can close.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Most Common Violations We See (and What They Mean)</h2>
            <p className="text-gray-700 mb-4">
              Not all violations are created equal. Here's a practical breakdown of what shows up most often in 
              Central Pennsylvania and Lehigh Valley homes:
            </p>
            <div className="space-y-4">
              {[
                {
                  type: 'Electrical Issues',
                  severity: 'Moderate to High',
                  color: 'orange',
                  desc: 'Federal Pacific or Zinsco panels, aluminum wiring (common in homes built 1965-1973), double-tapped breakers, knob-and-tube wiring. Lenders often require these to be addressed. Cash buyers factor the remediation cost into the offer.',
                },
                {
                  type: 'Unpermitted Additions or Renovations',
                  severity: 'Moderate',
                  color: 'yellow',
                  desc: 'A finished basement, added bathroom, or enclosed porch that was built without permits. The structure itself may be fine — the paperwork isn\'t. Some municipalities allow retroactive permits; others require the work to be opened up for inspection.',
                },
                {
                  type: 'Exterior Maintenance Violations',
                  severity: 'Low to Moderate',
                  color: 'yellow',
                  desc: 'Peeling paint (especially an issue with pre-1978 homes due to lead paint rules), broken windows, deteriorating siding, overgrown vegetation. Many of these are simple fixes; some municipalities will issue a violation notice automatically at POS inspection.',
                },
                {
                  type: 'Sewage / Septic System Issues',
                  severity: 'High',
                  color: 'red',
                  desc: 'Failed septic inspection, expired sewage permit, septic system that\'s been holding rather than treating. PA requires sewage inspection at transfer in many jurisdictions. Failed systems can cost $15,000-$40,000+ to remediate.',
                },
                {
                  type: 'Structural Concerns',
                  severity: 'High',
                  color: 'red',
                  desc: 'Foundation cracks, bowing walls, deteriorated framing. Lenders almost always flag these. Cash buyers can still purchase — the cost of structural repair is worked into the offer.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-brand-dark text-sm">{item.type}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.color === 'red' ? 'bg-red-100 text-red-700' :
                      item.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.severity}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Disclosure Obligations</h2>
            <p className="text-gray-700 mb-4">
              Let's be clear about this: selling as-is doesn't mean you can hide problems. Pennsylvania's Real Estate 
              Seller Disclosure Law requires you to disclose known material defects on a standard form. Code violations 
              you know about are material defects.
            </p>
            <p className="text-gray-700 mb-4">
              Sellers sometimes think cash buyers waiving inspection contingencies means they're off the hook for 
              disclosure. They're not. Waiving an inspection means the buyer accepts the risk of unknown defects — 
              not that the seller can conceal known ones.
            </p>
            <p className="text-gray-700">
              The practical advice: disclose everything you know. Work with a buyer who's comfortable with the property's 
              actual condition. Close clean with no post-sale liability.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Got Code Violations? We Buy Anyway."
            subheadline="No repairs required. We handle the violations after closing. Cash offer in 24 hours."
            sourcePage="/blog/sell-house-with-code-violations-pa"
          />

          <FAQSection items={FAQ_ITEMS} heading="Questions About Selling With Code Violations in PA" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Related Reading</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { href: '/markets/harrisburg-pa/code-violations', label: 'Code Violations — Harrisburg PA' },
                { href: '/markets/allentown-pa/code-violations', label: 'Code Violations — Allentown PA' },
                { href: '/guides/sell-as-is', label: 'Selling a House As-Is in Pennsylvania' },
                { href: '/markets/harrisburg-pa', label: 'Sell Your Harrisburg House Fast' },
                { href: '/markets/allentown-pa', label: 'Sell Your Allentown House Fast' },
                { href: '/resources/how-the-process-works', label: 'How Our Process Works' },
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
