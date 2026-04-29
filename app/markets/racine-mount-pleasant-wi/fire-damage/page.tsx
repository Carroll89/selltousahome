/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { racineWILocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/racine-mount-pleasant-wi/fire-damage`;

export const metadata: Metadata = {
  title: 'Sell Fire-Damaged House Racine WI | Wisconsin Insurance Claim',
  description:
    'Fire or smoke damage to your Racine or Mount Pleasant WI house? We buy fire-damaged homes as-is. Wisconsin insurance claim process explained. Written cash offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell a fire-damaged house in Racine WI?',
    answer: 'Yes. We buy fire-damaged, smoke-damaged, and partial-loss properties throughout Racine County. Active fire damage often creates habitability and appraisal issues for conventional or FHA financing, which is why cash buyers are often the practical path. A direct cash sale to a professional rehabber is typically the fastest path to cash out and move on.',
  },
  {
    question: 'Should I rebuild or sell the Racine fire-damaged house?',
    answer: 'It depends on your insurance proceeds, policy terms, lender requirements, damage extent, and timeline. Wisconsin fire claims are governed by the policy and regulated by the Wisconsin Office of the Commissioner of Insurance; many replacement-cost policies pay actual cash value first and release withheld depreciation after covered repairs are completed. Compare the net insurance position plus our cash offer against the cost, time, and risk of managing a rebuild.',
  },
  {
    question: 'What is the Wisconsin fire insurance claim process?',
    answer: 'Wisconsin fire insurance claims are governed by your policy and regulated by the Wisconsin Office of the Commissioner of Insurance (OCI). A common sequence is: call the fire department, notify your insurer promptly, secure the property, document damage, schedule the adjuster inspection, then decide whether to rebuild or sell after reviewing the coverage position. Retain receipts and written claim communications.',
  },
  {
    question: 'Can I sell before the Racine insurance claim is settled?',
    answer: 'Yes. We buy fire-damaged properties with open insurance claims. The property sells as-is, but insurance proceeds may be affected by your policy, mortgage, and lender requirements. We coordinate with the insurer, lender, and title company so the claim status is handled before closing. Consult your insurance agent and a Wisconsin attorney for specifics on your policy.',
  },
  {
    question: 'What about mortgage acceleration after a Racine fire?',
    answer: 'Many mortgages include hazard-insurance-proceeds language that affects how claim payments are used after a major loss. Depending on the policy and loan documents, proceeds may need to fund repairs or reduce the loan balance. That coordination does not automatically prevent a sale, but title and payoff details need to be reviewed before closing.',
  },
  {
    question: 'Do you buy partial fire-damage in Racine — kitchen fires, electrical fires?',
    answer: 'Yes. We buy everything from small kitchen-fire smoke-damage cases to total-loss structure fires. Smoke damage alone can be deceptively expensive to remediate — contaminated drywall, carpet, HVAC ducts, and framing — and insurance sometimes undervalues that scope. If you\'re looking at an adjuster estimate that feels short and don\'t want to argue with the insurance company for 6 months, we\'ll give you a cash offer on the house as-is regardless of the claim status.',
  },
  {
    question: 'What\'s the Racine housing-stock factor in fire-damage pricing?',
    answer: 'Much of Racine\'s older housing can include plaster-on-lath, older wiring, and legacy framing conditions that make fire remediation more complex than in newer construction. Our pricing accounts for those rehab risks after we inspect the property.',
  },
];

export default function RacineFireDamagePage() {
  return (
    <>
      <SchemaMarkup schema={[
        racineWILocalBusinessSchema,
        articleSchema('Sell Your Fire-Damaged Racine WI House — As-Is, Cash Offer', pageUrl, '2026-04-17'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/racine-mount-pleasant-wi-hero-640.jpg 640w, /images/optimized/racine-mount-pleasant-wi-hero-828.jpg 828w, /images/optimized/racine-mount-pleasant-wi-hero-1080.jpg 1080w, /images/optimized/racine-mount-pleasant-wi-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/racine-mount-pleasant-wi-hero-1200.jpg"
            alt="Racine WI fire-damaged property — sell as-is for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/racine-mount-pleasant-wi" className="hover:text-white">Racine WI</Link> › Fire Damage
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Fire-Damaged Racine WI House — As-Is, No Repairs
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases fire-damaged, smoke-damaged, and partial-loss Racine properties regardless of insurance-claim status. We close as-is at a Racine title company, coordinate any policy/lender/title issues, and take on the rebuild risk after closing. Written offer in 24 hours. Call 888-274-5006.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Partial loss, total loss, smoke-only damage — we buy all of it. Written cash offer in 24 hours. Close in 7–14 days when title is clear.
            </p>
            <a href="tel:+18882745006" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-274-5006 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. No cleanup, no restoration." sourcePage="/markets/racine-mount-pleasant-wi/fire-damage" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Rebuild vs. Sell — The Racine Math</h2>
          <p className="text-gray-700 mb-4">
            After a fire, every Racine homeowner faces the same decision: take the insurance money and rebuild, or take the money and sell the land/structure as-is. The right answer depends on four variables: (1) the actual cash value of insurance proceeds you\'re eligible to receive, (2) the full-scope rebuild cost, (3) your time horizon and willingness to manage a months-long displacement, and (4) the post-rebuild resale value in your specific Racine neighborhood.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Factor</th>
                  <th className="text-left p-3">Rebuild</th>
                  <th className="text-left p-3">Sell As-Is to Cash Buyer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Timeline to resolution</td><td className="p-3">Often months, depending on claim scope and contractor schedule</td><td className="p-3">7-14 days to closing when title is clear</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Upfront capital needed</td><td className="p-3">Deductible + often out-of-pocket overage on scope</td><td className="p-3">$0 — we bring the cash</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Insurance proceeds</td><td className="p-3">Handled under the policy and any lender requirements</td><td className="p-3">Coordinated with insurer, lender, and title company</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Displacement (ALE)</td><td className="p-3">Policy-limited rental / hotel coverage while repairs proceed</td><td className="p-3">No rebuild-related displacement after closing</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Risk of cost overrun</td><td className="p-3">High — rebuilding on older Racine housing often surfaces surprise issues (knob-and-tube, asbestos, lead)</td><td className="p-3">Zero — we absorb it</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Energy required</td><td className="p-3">Full-time project management</td><td className="p-3">One closing signature</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">End state</td><td className="p-3">Rebuilt home, same address</td><td className="p-3">Cash in hand, moved on</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">
            For out-of-state heirs, elderly owners, or owners with any significant life event in progress (divorce, job relocation, health issue), the sell-as-is option may be worth comparing even when the rebuild-plus-resell number looks bigger on paper — because the rebuild path compounds stress, time, and risk.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Fire Insurance Claim Process — What to Expect</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Fire department response.</strong> The Racine Fire Department documents cause and origin; request a copy of the fire report. Emergency: 911. Non-emergency / report requests: (262) 635-7920.</li>
            <li><strong>Notice to insurer.</strong> Per OCI consumer guidance and policy conditions, report the loss promptly by phone and follow up in writing.</li>
            <li><strong>Emergency mitigation.</strong> Board-up, tarp roof, and utility shutoff. Reimbursement depends on your policy and insurer approval.</li>
            <li><strong>Adjuster visit and scope.</strong> Your insurer\'s adjuster inspects. You may want your own public adjuster for substantial losses — Wisconsin licenses public adjusters under Wis. Stat. § 628.</li>
            <li><strong>Actual cash value (ACV) advance.</strong> Most policies pay ACV first — the depreciated value — with replacement-cost withheld until rebuild.</li>
            <li><strong>Proof of loss.</strong> Submit any sworn proof of loss by the deadline stated in your policy or insurer request; keep all receipts and written communications.</li>
            <li><strong>Settlement or dispute.</strong> Policy appraisal clauses, regulator complaints, or legal review may be options for disputed claims; review the policy and Wisconsin OCI guidance before deciding.</li>
          </ol>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Racine Housing Stock — Why Fire Loss Hits Harder</h2>
          <p className="text-gray-700 mb-4">
            Public housing-stock datasets show many Racine homes are older structures. Older construction can include plaster-on-lath interiors, older wiring, and other materials that make fire remediation more complex.
          </p>
          <p className="text-gray-700 mb-4">
            That housing-stock reality can shape insurance settlements and rebuild economics. When an initial adjustment does not capture the full scope, the homeowner may face a gap during rebuild or a longer claim dispute. Selling as-is transfers that scope risk to us. We have rebuilt Racine properties before and budget for the realities of older housing stock.
          </p>
          <p className="text-gray-700 mb-4">
            According to the Wisconsin Department of Revenue, Wisconsin's real estate transfer fee is $3.00 per $1,000 of consideration under Wis. Stat. § 77.22. We cover it. Insurance-claim questions should be reviewed against your policy and Wisconsin OCI guidance.
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Fire-Damaged Houses in Racine WI" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Racine WI</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/racine-mount-pleasant-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/racine-mount-pleasant-wi/foreclosure', label: 'Foreclosure' },
              { href: '/markets/racine-mount-pleasant-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/racine-mount-pleasant-wi/probate', label: 'Probate' },
              { href: '/markets/racine-mount-pleasant-wi/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/racine-mount-pleasant-wi/code-violations', label: 'Code Violations' },
              { href: '/markets/racine-mount-pleasant-wi', label: '← Back to Racine' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Fire-Damaged Racine WI Property?" sourcePage="/markets/racine-mount-pleasant-wi/fire-damage" />
      </div>
    </>
  );
}
