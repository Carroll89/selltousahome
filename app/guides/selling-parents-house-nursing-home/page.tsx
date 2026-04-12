import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Selling Parents\' House for Nursing Home',
  description:
    'Need to sell your parents\' house when they\'re moving to a nursing home in Pennsylvania? Learn Medicaid spend-down rules, power of attorney requirements, and how to close fast. PA-specific guidance.',
  alternates: { canonical: `${SITE_URL}/guides/selling-parents-house-nursing-home` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my parents\' house if they\'re in a nursing home?',
    answer:
      'Yes, but the legal authority to sell depends on the situation. If your parent still has mental capacity, they can sign the deed and sale documents themselves (or from the nursing home with a notary). If they lack capacity, a designated Power of Attorney agent or a court-appointed guardian must handle the sale. PA law governs each of these paths carefully.',
  },
  {
    question: 'Does selling my parents\' house affect their Medicaid eligibility in Pennsylvania?',
    answer:
      'It depends on what happens with the proceeds. PA Medicaid (administered through the Department of Human Services) requires that you spend down non-exempt assets before becoming eligible. The family home is typically exempt if a spouse lives there, a disabled dependent lives there, or the resident intends to return. Once sold, the proceeds become a countable asset and must be spent on care costs before Medicaid kicks in. Consult a PA elder law attorney before selling — the timing and structuring matter enormously.',
  },
  {
    question: 'What is the Medicaid lookback period in Pennsylvania?',
    answer:
      'Pennsylvania uses a 60-month (5-year) lookback period for Medicaid long-term care eligibility. Any asset transfers made for less than fair market value within the 60 months prior to the Medicaid application create a penalty period of ineligibility. This means you cannot give the house away or sell it below value to family members without triggering a penalty. Selling at fair market value — including to a cash buyer — does not trigger the lookback penalty.',
  },
  {
    question: 'What does Power of Attorney allow in Pennsylvania?',
    answer:
      'A Pennsylvania Power of Attorney (POA) for property can authorize an agent to sell, transfer, and manage real estate on behalf of the principal. Under PA\'s current POA law (20 Pa. C.S. § 5601 et seq.), the POA must be signed, witnessed, and notarized. The agent has a strict fiduciary duty — they must act in the principal\'s best interest. Real estate transactions must be specifically authorized in the POA document (a general grant of financial authority typically covers it).',
  },
  {
    question: 'What if my parent didn\'t sign a Power of Attorney before losing capacity?',
    answer:
      'If your parent no longer has the mental capacity to sign a POA, you cannot create one. Instead, you must petition the Dauphin County Court of Common Pleas (or the county where your parent lives) for a guardianship or limited guardianship over their estate. This is a legal process that requires an attorney and court approval. Once granted, the guardian has authority to sell the property — but must report to the court on the use of proceeds.',
  },
  {
    question: 'Does the nursing home have a claim on the house proceeds?',
    answer:
      'Not directly — nursing homes cannot place a lien on the house while your parent is alive (unless they\'ve obtained a court judgment for unpaid bills). However, after your parent passes, PA\'s Medicaid Estate Recovery Program (MERP) can make a claim against the estate for Medicaid benefits paid. This can include home equity if the home passes through the estate. Elder law planning before Medicaid begins can sometimes mitigate MERP claims.',
  },
  {
    question: 'Can we sell the house before Medicaid is approved?',
    answer:
      'Yes, and in many cases it makes sense to do so. Selling before applying for Medicaid establishes the fair market value of the asset. The proceeds from the sale then go toward care costs (spend-down), and Medicaid kicks in once the assets fall below the eligibility threshold. The key is proper documentation of how proceeds are spent. Work with a PA elder law attorney to ensure the spend-down is structured correctly.',
  },
  {
    question: 'How quickly can we close if the nursing home costs are mounting?',
    answer:
      'With a cash buyer, typically 7–14 days from accepted offer. This is critical when nursing home costs are $8,000–$15,000/month and every week of delay is thousands of dollars. We can prioritize closings where care costs are ongoing — call us directly and we\'ll do our best to accommodate your timeline.',
  },
];

const pageUrl = `${SITE_URL}/guides/selling-parents-house-nursing-home`;

export default function SellingParentsHouseNursingHomePage() {
  return (
    <>
      <SchemaMarkup schema={[
        articleSchema('Selling Your Parents\' House When They Move to a Nursing Home in PA', pageUrl),
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
              <Link href="/guides" className="hover:text-white">Guides</Link> › Selling Parents&apos; House — Nursing Home
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your Parents&apos; House When They Move to a Nursing Home
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              When a parent moves into long-term care, the family home often becomes a financial and legal
              puzzle. Medicaid spend-down rules, power of attorney requirements, and the emotional weight
              of the process can feel overwhelming. This guide covers what Pennsylvania families need to know.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
              Call {PHONE} — We work with families navigating elder care sales
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/selling-parents-house-nursing-home" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <p className="text-xs font-bold text-brand-primary uppercase tracking-wide mb-1">TL;DR</p>
            <h2 className="text-lg font-bold text-brand-dark mb-2">Key Points for PA Families</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ You can sell a parent&apos;s home from a nursing home — with proper legal authority (POA or guardianship)</li>
              <li>✓ Selling at fair market value does NOT trigger Medicaid&apos;s 5-year lookback penalty</li>
              <li>✓ Home sale proceeds typically must be spent down on care before Medicaid applies</li>
              <li>✓ PA Medicaid Estate Recovery (MERP) can claim the home after death — planning matters</li>
              <li>✓ Cash buyers close in 7–14 days — critical when nursing home bills are accumulating</li>
              <li>✓ <strong>Consult a PA elder law attorney before selling</strong> — the stakes are high</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">The Situation Most PA Families Face</h2>
            <p className="text-gray-700 mb-4">
              A parent enters a skilled nursing facility or memory care unit. The monthly bill arrives:
              $8,000, $10,000, $13,000 per month — and climbing. The family home is sitting empty.
              Assets are draining fast. Someone asks: should we sell the house?
            </p>
            <p className="text-gray-700 mb-4">
              The answer is almost always yes — but <em>how</em> and <em>when</em> you sell matters
              enormously for Medicaid planning, estate preservation, and tax implications. This guide
              walks through the key considerations for Pennsylvania families.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> This guide provides general educational information about
                Pennsylvania law and Medicaid. It is not legal advice. Given the financial stakes
                involved, working with a PA-licensed elder law attorney before making decisions is
                strongly recommended.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Legal Authority: Who Can Sell the House?</h2>
            <p className="text-gray-700 mb-4">
              Before you can list or sell a parent&apos;s home, someone must have the legal authority to
              sign the deed and sale documents on their behalf (or the parent must be able to sign themselves).
            </p>
            <div className="space-y-4">
              <div className="border border-brand-primary rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-2">Option 1: Parent Signs Directly</h3>
                <p className="text-sm text-gray-700">
                  If your parent retains cognitive capacity, they can execute the sale documents themselves —
                  even from a nursing home. A notary can come to the facility. This is the simplest path
                  when it&apos;s available.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Option 2: Power of Attorney</h3>
                <p className="text-sm text-gray-700 mb-2">
                  If a valid Pennsylvania POA for property exists (signed when the parent had capacity),
                  the designated agent can sign on behalf of the principal. The POA must:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Be properly executed under PA law (signed, witnessed by two adults, notarized)</li>
                  <li>• Specifically authorize real estate transactions (general authority typically covers this)</li>
                  <li>• Not have been revoked and the principal must have had capacity when signed</li>
                </ul>
                <p className="text-sm text-gray-700 mt-2">
                  The title company will require a copy of the POA and may require it be recorded.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Option 3: Guardianship</h3>
                <p className="text-sm text-gray-700">
                  If there is no valid POA and the parent lacks capacity, you must petition the Court of
                  Common Pleas in the parent&apos;s home county for guardianship of the estate. In Dauphin County,
                  this is the Orphans&apos; Court. Guardianship proceedings typically take 2–4 months and require
                  a PA attorney. Once appointed, the guardian can sell the property — but may need court
                  approval for the specific transaction.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Pennsylvania Medicaid and the Family Home</h2>
            <p className="text-gray-700 mb-4">
              Pennsylvania Medicaid (Medical Assistance) for long-term care has strict asset rules.
              Understanding them before selling can save tens of thousands of dollars.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-semibold text-green-800 mb-2">The home is exempt while your parent lives</h3>
                <p className="text-sm text-gray-700">
                  Under PA Medicaid rules, the primary residence is an exempt asset — it doesn&apos;t count against
                  the eligibility limit — as long as: the Medicaid applicant intends to return home, a spouse
                  lives in the home, or a disabled or dependent child lives there.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-semibold text-red-800 mb-2">Once sold, proceeds become countable</h3>
                <p className="text-sm text-gray-700">
                  When you sell the home, the sale proceeds are no longer exempt. They become a countable
                  asset — and PA Medicaid requires individuals to spend down to $2,400 (for most applicants)
                  before receiving benefits.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
              <h3 className="font-semibold text-brand-dark mb-2">The 5-Year Lookback Period</h3>
              <p className="text-sm text-gray-700 mb-2">
                Pennsylvania uses a 60-month lookback for nursing home Medicaid. Any transfer of assets
                for less than fair market value within 5 years of the Medicaid application creates a
                penalty period of ineligibility.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Critical:</strong> Selling the house at fair market value — even to a cash buyer —
                does NOT trigger the lookback. The penalty only applies to transfers that are gifts or
                below-market transactions. A legitimate sale at market value is fine.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h3 className="font-semibold text-yellow-800 mb-2">Medicaid Estate Recovery Program (MERP)</h3>
              <p className="text-sm text-gray-700">
                After a Medicaid recipient passes away, PA&apos;s MERP can make a claim against the estate
                to recover benefits paid. This can include the home if it&apos;s still in the estate. Proper
                elder law planning — done before Medicaid begins — can sometimes reduce or eliminate MERP
                exposure through trusts, life estate deeds, or other strategies. This is another reason
                to consult an elder law attorney early.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Spend-Down Process</h2>
            <p className="text-gray-700 mb-4">
              &ldquo;Spend-down&rdquo; means using non-exempt assets to pay for care until your parent&apos;s remaining
              assets fall below the Medicaid eligibility threshold.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="px-4 py-3 text-left">Step</th>
                    <th className="px-4 py-3 text-left">What Happens</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['House is sold at fair market value', 'Proceeds go to seller (your parent, via POA or guardian). No Medicaid penalty for selling at market price.'],
                    ['Proceeds pay nursing home costs', 'Sale proceeds are used to pay the nursing facility, home health care, approved medical expenses, and funeral pre-planning (up to IRS limits).'],
                    ['Assets drop below $2,400', 'Once countable assets fall to the PA Medicaid threshold ($2,400 for most), your parent becomes eligible for Medicaid long-term care benefits.'],
                    ['Medicaid begins paying', 'Pennsylvania Medical Assistance covers nursing home costs going forward. Parent contributes their income (Social Security, pension) minus a small personal needs allowance.'],
                    ['MERP applies after death', 'After the Medicaid recipient passes, the state may file a claim against the estate for benefits paid. Proper planning can reduce this exposure.'],
                  ].map(([step, desc], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 border-b border-gray-100 font-medium align-top">{step}</td>
                      <td className="py-3 px-4 border-b border-gray-100 text-gray-600">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Emotional Side of This Process</h2>
            <p className="text-gray-700 mb-4">
              Selling a parent&apos;s home while they&apos;re still living — even if they can no longer live there —
              is emotionally complex. The house holds decades of memories. Siblings may disagree about timing.
              Your parent may resist the idea, even if they lack the capacity to live there.
            </p>
            <p className="text-gray-700 mb-4">
              This is normal. Here are a few things families find helpful:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Give everyone a voice — within limits',
                  desc: 'If siblings have different views on timing or price, discuss it openly. But ultimately, the legal decision-maker (POA holder or guardian) has the authority — and the responsibility.',
                },
                {
                  title: 'Document everything',
                  desc: 'Keep records of the sale price, appraisals, how proceeds are used, and all Medicaid-related expenditures. Documentation protects the family in case of future disputes or state inquiries.',
                },
                {
                  title: 'Personal belongings take time',
                  desc: 'Plan for sorting through decades of possessions. Cash buyers are flexible on closing dates — we can accommodate the time needed to clear the home properly.',
                },
                {
                  title: 'It\'s okay to grieve the house',
                  desc: 'Selling isn\'t abandonment. It\'s a practical decision that helps fund your parent\'s care and protects the family from financial strain.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Timeline: From Decision to Closing</h2>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  time: 'Before anything',
                  title: 'Consult an elder law attorney',
                  detail: 'Before listing or accepting any offer, have a PA elder law attorney review the Medicaid situation. The planning done now can save significant money in care costs and MERP exposure.',
                },
                {
                  step: '2',
                  time: 'Days 1–3',
                  title: 'Verify legal authority',
                  detail: 'Confirm you have a valid POA or guardianship order. Gather the documents — the title company will need them. If capacity is uncertain, get a capacity evaluation.',
                },
                {
                  step: '3',
                  time: 'Days 3–7',
                  title: 'Get a cash offer',
                  detail: 'Contact us with property details. We can often walk the property and deliver a written cash offer within 24 hours. No staging, no repairs required.',
                },
                {
                  step: '4',
                  time: 'Days 7–21',
                  title: 'Title search and closing prep',
                  detail: 'The title company searches for liens, verifies legal authority, and prepares closing documents. This is when any liens or estate issues are surfaced and resolved.',
                },
                {
                  step: '5',
                  time: 'Closing day',
                  title: 'Close and receive proceeds',
                  detail: 'The POA agent or guardian signs at closing. Proceeds are disbursed. Funds go toward care costs as part of the Medicaid spend-down plan.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start border border-gray-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-brand-dark text-sm">{item.title}</p>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{item.time}</span>
                    </div>
                    <p className="text-xs text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Ready to Get an Offer on Your Parents&apos; House?"
            subheadline="We work with families navigating nursing home transitions throughout Pennsylvania. Written offer in 24 hours."
            sourcePage="/guides/selling-parents-house-nursing-home"
          />

          <FAQSection items={FAQ_ITEMS} heading="Selling Parents&apos; House — Nursing Home Questions" />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Pennsylvania Elder Care Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Department of Aging</p>
                <p className="text-gray-600">
                  <a href="https://www.aging.pa.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">aging.pa.gov</a>{' '}
                  — Long-term care resources, Medicaid waiver information, caregiver support
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Department of Human Services — Medicaid</p>
                <p className="text-gray-600">
                  <a href="https://www.dhs.pa.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">dhs.pa.gov</a>{' '}
                  — PA Medical Assistance eligibility, spend-down rules, estate recovery information
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Association of Elder Law Attorneys (PAELA)</p>
                <p className="text-gray-600">
                  <a href="https://www.paela.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">paela.org</a>{' '}
                  — Find a PA elder law attorney experienced with Medicaid planning and guardianship
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Dauphin County Register of Wills / Orphans&apos; Court</p>
                <p className="text-gray-600">Dauphin County Courthouse, 101 Market Street, Harrisburg PA 17101 — Guardianship filings, Letters Testamentary, estate matters</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Central PA Legal Services</p>
                <p className="text-gray-600">
                  <a href="https://www.midpennlegal.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">midpennlegal.org</a>{' '}
                  — Free legal help for qualifying seniors and families in Central PA
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Inherited Property Guide</Link>{' '}
              ·{' '}
              <Link href="/guides/probate" className="text-brand-primary hover:underline">Selling During Probate</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/probate" className="text-brand-primary hover:underline">Dauphin County Probate Sales</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Sell Your Harrisburg House</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
