import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, harrisburgLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Sell House with Liens in Harrisburg PA',
  description:
    'Selling a house with property liens in Harrisburg or Dauphin County PA? We buy properties with tax liens, municipal liens, judgment liens, and mechanic\'s liens as-is. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/markets/harrisburg-pa/property-liens` },
};

const FAQ_ITEMS = [
  {
    question: 'Can you sell a house with liens in Pennsylvania?',
    answer:
      'Yes. Liens don\'t prevent a sale — they must be resolved at or before closing. In most cases, liens are paid directly from the sale proceeds at closing, and the property transfers to the buyer with clear title. A cash buyer can close on a lien-heavy property that conventional buyers can\'t touch because financing lenders require clear title.',
  },
  {
    question: 'What types of liens are most common on Harrisburg properties?',
    answer:
      'In Harrisburg and Dauphin County, common liens include: Dauphin County delinquent property tax liens (filed by the Tax Claim Bureau), City of Harrisburg municipal liens for unpaid water/sewer or code violation fines, judgment liens from court cases (filed in the Dauphin County Court of Common Pleas), mechanic\'s liens from unpaid contractors, IRS federal tax liens, and PA Department of Revenue state tax liens.',
  },
  {
    question: 'What is a Dauphin County tax lien?',
    answer:
      'When property taxes go unpaid, Dauphin County\'s Tax Claim Bureau files a lien against the property. Liens accrue interest and penalty fees. If taxes remain unpaid for multiple years, the county can eventually schedule the property for an Upset Sale or Repository Sale. Before that happens, selling to a cash buyer pays the lien at closing and stops the process.',
  },
  {
    question: 'Do I have to pay off liens before selling?',
    answer:
      'Usually no. In a cash sale, the liens are identified during the title search and paid from closing proceeds. You typically don\'t need cash upfront. The title company acts as the closing agent — they disburse funds to lienholders first, then pass remaining proceeds to you.',
  },
  {
    question: 'What if the liens are more than the house is worth?',
    answer:
      'If the total liens and mortgage balance exceed the property value, you may need to negotiate a short sale or lien reduction with the lienholder(s). We have experience with these situations. In some cases, lienholders (particularly municipalities) will accept reduced payoffs to resolve old liens. We can help you understand the options before deciding.',
  },
  {
    question: 'How do I find out what liens are on my Harrisburg property?',
    answer:
      'You can check the Dauphin County Prothonotary\'s office (court judgments and mechanics liens), the Dauphin County Tax Claim Bureau (delinquent taxes), the City of Harrisburg Bureau of Codes Enforcement (municipal liens), and the Harrisburg Authority (water/sewer arrears). A title search will surface all of these automatically before closing.',
  },
  {
    question: 'Can a mechanic\'s lien stop a sale?',
    answer:
      'A mechanic\'s lien doesn\'t prevent a sale, but it must be resolved before or at closing — either paid from proceeds or discharged by court order. If a contractor filed an invalid or inflated lien, an attorney can sometimes challenge and reduce it. We work with local title attorneys experienced with lien resolution in Dauphin County.',
  },
];

const pageUrl = `${SITE_URL}/markets/harrisburg-pa/property-liens`;

export default function HarrisburgPropertyLiensPage() {
  return (
    <>
      <SchemaMarkup schema={[
        harrisburgLocalBusinessSchema,
        articleSchema('Selling a House with Property Liens in Harrisburg, PA', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

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
              <Link href="/markets/harrisburg-pa" className="hover:text-white">Harrisburg</Link> › Property Liens
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling a House with Property Liens in Harrisburg, PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Tax liens, judgment liens, municipal liens — none of these have to stop your sale. Liens are
              resolved at closing from sale proceeds. We buy lien-encumbered properties throughout Harrisburg
              and Dauphin County, as-is, for cash.
            </p>
            <div className="bg-yellow-900/50 border border-yellow-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-yellow-200 mb-1">Liens growing with interest?</p>
              <p className="text-yellow-100">
                Every month that passes, interest accrues. Call{' '}
                <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a>{' '}
                — we can close before your situation gets more expensive.
              </p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/harrisburg-pa/property-liens" />
          </div>
        </div>
      </section>
      <VideoEmbed
        src="https://v3b.fal.media/files/b/0a95c0fd/Nc_adaeWMqrhab3b0C4zT_harrisburg-property-liens.mp4"
        title="Selling a Home with Liens in Harrisburg"
<<<<<<< HEAD
        poster="/images/video-posters/harrisburg-property-liens-poster.jpg"
        subtitle="See how we buy Harrisburg homes with liens — we handle the paperwork and payoff"
=======
        poster="/images/video-posters/harrisburg-property-liens.jpg"
        subtitle="Learn about selling your property with liens in Harrisburg"
>>>>>>> db652478dd89d7d27200e95ec4d3219806ea3cbb
      />
      <details className="mt-4 mb-8 border border-gray-200 rounded-lg max-w-4xl mx-auto">
        <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          📝 Video Transcript
        </summary>
        <div className="px4 pb-4 text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">One of the biggest misconceptions I hear from Harrisburg homeowners is that liens mean they can&apos;t sell. That&apos;s not true. I&apos;m with USA Home Buyers, and I want to explain how property liens actually work in a sale.</p>
            <p className="mb-3">In Harrisburg and Dauphin County, the most common liens are delinquent property tax liens filed by the Tax Claim Bureau, city municipal liens for unpaid water, sewer, or code fines, judgment liens from the Dauphin County Court of Common Pleas, mechanic&apos;s liens from unpaid contractors, and IRS or PA Department of Revenue tax liens.</p>
            <p className="mb-3">Here&apos;s the key thing to understand: liens don&apos;t block a sale. They have to be resolved at or before closing, but in almost all cases, they&apos;re paid directly from your sale proceeds. You typically don&apos;t need cash upfront. The title company runs a search, finds all the liens, and pays them off at closing.</p>
            <p className="mb-3">The problem with traditional buyers is that conventional financing lenders require clear title. A buyer using a mortgage can&apos;t close until liens are resolved. Cash buyers don&apos;t have that constraint.</p>
            <p className="mb-3">We&apos;ve bought Harrisburg properties with tax liens, municipal liens, judgment liens, and mechanic&apos;s liens. As long as there&apos;s enough equity to cover the liens and our offer, we can close.</p>
            <p className="mb-3">Don&apos;t assume a lien means you&apos;re stuck. Call USA Home Buyers at 888-440-5250. We&apos;ll give you a cash offer within 24 hours and walk you through exactly how your specific liens get resolved.</p>
        </div>
      </details>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-1">TL;DR</p>
            <h2 className="text-lg font-bold text-brand-dark mb-2">What You Need to Know</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Liens don&apos;t prevent a sale — they&apos;re paid from closing proceeds</li>
              <li>✓ A title search surfaces every lien before closing — no surprises</li>
              <li>✓ Cash buyers close on lien-heavy properties; mortgage lenders typically won&apos;t</li>
              <li>✓ Dauphin County tax liens grow with interest — acting quickly limits the damage</li>
              <li>✓ If liens exceed value, options exist — short pay, lien reduction, negotiated settlement</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">What Is a Property Lien?</h2>
            <p className="text-gray-700 mb-4">
              A property lien is a legal claim against real estate, typically filed because money is owed —
              to the government, a contractor, a creditor, or a court judgment creditor. Liens attach to the
              property title, meaning they follow the property, not just the owner.
            </p>
            <p className="text-gray-700 mb-4">
              When you sell a property, the title company runs a comprehensive lien search. Every lien
              discovered must be resolved — paid off or legally discharged — before or at closing.
              The title company handles this disbursement automatically; you don&apos;t need cash upfront
              in most situations.
            </p>
            <p className="text-gray-700">
              The challenge for sellers is that most conventional buyers can&apos;t get mortgage financing
              on a property with unresolved liens. Their lender requires clear title. A cash buyer
              doesn&apos;t have that lender restriction — we can close and handle lien resolution as part
              of the transaction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Types of Liens on Harrisburg Properties</h2>
            <div className="space-y-4">
              {[
                {
                  type: 'Dauphin County Property Tax Liens',
                  color: 'red',
                  desc: 'Filed by the Dauphin County Tax Claim Bureau when property taxes go delinquent. Taxes in PA become delinquent on January 1 of the year following the tax year. Liens accrue interest and penalties. If unpaid for multiple years, the county can schedule an Upset Sale.',
                  action: 'Paid from closing proceeds. The tax claim bureau provides a payoff figure and releases the lien at closing.',
                },
                {
                  type: 'City of Harrisburg Municipal Liens',
                  color: 'orange',
                  desc: 'Filed by the city for unpaid code violation fines, emergency boarding/maintenance by the city, or nuisance abatement costs. Can also include water/sewer arrears through the Harrisburg Authority.',
                  action: 'Identified during title search. Paid from proceeds or negotiated for reduction at closing.',
                },
                {
                  type: 'Judgment Liens',
                  color: 'blue',
                  desc: 'When a creditor wins a court judgment against you in Dauphin County Court of Common Pleas, they can file a lien against your real property. Common sources: unpaid personal loans, medical debt, credit card judgments, HOA assessments.',
                  action: 'Paid from closing proceeds or negotiated for lump-sum settlement (often below face value).',
                },
                {
                  type: 'Mechanic\'s Liens',
                  color: 'purple',
                  desc: 'Filed by contractors, subcontractors, or material suppliers who weren\'t paid for work on the property. PA mechanic\'s lien law requires filing within 4 months of last work. Invalid or inflated liens can sometimes be challenged.',
                  action: 'Resolved at closing through payoff or legal discharge. Title attorney can contest invalid liens.',
                },
                {
                  type: 'IRS Federal Tax Liens',
                  color: 'gray',
                  desc: 'Filed when a federal tax debt goes unpaid. Federal liens attach to all real property owned. The IRS has a 120-day right of redemption after sale. These require specific handling but do not prevent a sale.',
                  action: 'Title company coordinates with IRS for payoff or discharge. IRS certificates of discharge are common in real estate transactions.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-dark mb-2">{item.type}</h3>
                  <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                  <div className="bg-green-50 rounded-lg px-4 py-2">
                    <p className="text-xs text-green-800"><span className="font-semibold">How it&apos;s resolved:</span> {item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How a Cash Sale Handles Liens</h2>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  title: 'Full title search',
                  detail: 'Our title company conducts a comprehensive search of Dauphin County records — courthouse judgments, tax claim bureau, municipal liens, federal tax liens. Every lien is identified upfront.',
                },
                {
                  step: '2',
                  title: 'Lien payoff figures are requested',
                  detail: 'Each lienholder is contacted for a payoff amount. For older liens, we often negotiate reductions — some lienholders prefer a discounted lump sum over continued collection efforts.',
                },
                {
                  step: '3',
                  title: 'Net proceeds calculated',
                  detail: 'We show you exactly what you\'ll receive: purchase price minus all lien payoffs and closing costs. No surprises at the closing table.',
                },
                {
                  step: '4',
                  title: 'Liens paid at closing',
                  detail: 'The closing agent disburses funds directly to each lienholder. Lien releases are filed. The deed transfers to us with clear title.',
                },
                {
                  step: '5',
                  title: 'You receive your proceeds',
                  detail: 'Whatever remains after liens and costs — whether it\'s $5,000 or $100,000 — is yours. Wire transfer or check at closing.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">{item.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">When Liens Exceed the Property Value</h2>
            <p className="text-gray-700 mb-4">
              Sometimes the math is difficult — especially on properties in significant disrepair with years
              of accumulated tax liens plus municipal liens plus a mortgage. If total encumbrances exceed
              what the property is worth, a standard cash sale won&apos;t generate enough proceeds to clear everything.
            </p>
            <p className="text-gray-700 mb-4">
              In these situations, options include:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Lien reduction negotiations',
                  desc: 'Many lienholders — particularly municipalities and judgment creditors — will accept less than face value for a lump-sum payoff. We can negotiate on your behalf or work alongside your attorney.',
                },
                {
                  title: 'Short sale process',
                  desc: 'If there\'s a mortgage, your lender may approve a short sale — accepting less than the full balance owed. This requires lender approval but is an established option for underwater properties.',
                },
                {
                  title: 'Understanding your exposure',
                  desc: 'Sometimes doing nothing has serious consequences — tax sale, foreclosure, or continued lien accrual. Understanding the timeline helps you make an informed decision.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — Liens Included"
            subheadline="We buy properties with tax liens, judgment liens, and municipal liens throughout Dauphin County."
            sourcePage="/markets/harrisburg-pa/property-liens"
          />

          <FAQSection items={FAQ_ITEMS} heading="Property Liens in Harrisburg — Common Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Dauphin County Lien Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Dauphin County Tax Claim Bureau</p>
                <p className="text-gray-600">
                  Dauphin County Courthouse, 101 Market Street, Harrisburg PA 17101 — delinquent tax lookup, upset and repository sales, lien status
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Dauphin County Prothonotary</p>
                <p className="text-gray-600">Records judgment liens, mechanic&apos;s liens, and other court-filed encumbrances. Search available at the Courthouse or through PA court records portal.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Harrisburg Authority (Water/Sewer)</p>
                <p className="text-gray-600">
                  <a href="https://www.harrisburgauthority.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">harrisburgauthority.org</a>{' '}
                  — Account status and arrears that can become municipal liens
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">MidPenn Legal Services</p>
                <p className="text-gray-600">
                  <a href="https://www.midpennlegal.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">midpennlegal.org</a>{' '}
                  — Free legal assistance for qualifying property owners in Central PA
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Sell Your Harrisburg House</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/code-violations" className="text-brand-primary hover:underline">Code Violations</Link>{' '}
              ·{' '}
              <Link href="/guides/back-taxes" className="text-brand-primary hover:underline">Back Taxes Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/foreclosure" className="text-brand-primary hover:underline">Facing Foreclosure</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
