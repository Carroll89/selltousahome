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
    answer: 'Yes. We buy fire-damaged, smoke-damaged, and partial-loss properties throughout Racine County. Conventional and FHA lenders will not finance a house with active fire damage, which shrinks the retail buyer pool to near zero — which is why fire-damaged properties usually trade cash-only at meaningful discounts to undamaged comps. A direct cash sale to a professional rehabber is typically the fastest path to cash out and move on.',
  },
  {
    question: 'Should I rebuild or sell the Racine fire-damaged house?',
    answer: 'It depends on your insurance proceeds, the extent of damage, and your timeline. Wisconsin is a replacement-cost-insurance state for most homeowner policies — your insurance company typically pays actual cash value first, then the remainder when you rebuild. If you take the cash and don\'t rebuild, you may forfeit the recoverable depreciation portion. Quick math: compare (a) net insurance proceeds if you walk away + our cash offer for the land/structure as-is, versus (b) full insurance rebuild + 6-12 months of displacement + the carrying costs and sweat equity of managing a rebuild. For many Racine owners — particularly out-of-state heirs, elderly owners, or those with time constraints — option (a) wins even though option (b) may look larger on paper.',
  },
  {
    question: 'What is the Wisconsin fire insurance claim process?',
    answer: 'Wisconsin fire insurance claims are governed by your policy and regulated by the Wisconsin Office of the Commissioner of Insurance (OCI). The typical sequence: (1) call the fire department (Racine Fire Department emergency: 911; non-emergency (262) 635-7920); (2) notify your insurer within the policy-required window (often 24-72 hours); (3) secure the property (board-up, tarp); (4) meet the insurance adjuster on-site; (5) receive actual cash value advance; (6) submit proof of loss; (7) negotiate the scope and final settlement. Wisconsin\'s standard fire policy (modeled on the National Fire Protection Association language required by Wis. Stat. § 631.46) pays the insured value at a minimum in the event of total loss — not the policy limit, but the actual value — under the "valued policy" principles in Wis. Stat. § 632.05. Retain all receipts.',
  },
  {
    question: 'Can I sell before the Racine insurance claim is settled?',
    answer: 'Yes. We buy fire-damaged properties with open insurance claims. The property sells as-is; you retain the insurance proceeds from any completed claim payments as your own funds — they are not transferred to the buyer at closing. Future claim payments can generally still be made to you after the sale if the fire occurred before the sale and the claim was filed timely. Consult your insurance agent and a Wisconsin attorney for specifics on your policy.',
  },
  {
    question: 'What about mortgage acceleration after a Racine fire?',
    answer: 'Most Wisconsin mortgages contain a "hazard insurance proceeds" clause giving the lender first claim on insurance payouts to either pay down the loan or fund repairs. If the damage is substantial, some lenders elect to apply proceeds to the loan balance and then call the loan due. That doesn\'t prevent a sale — it just means the closing will pay off the mortgage first. If the insurance proceeds plus our cash offer cover the mortgage, you walk away clean. If not, a short-sale negotiation with the lender is possible; we\'ve coordinated those in Racine County.',
  },
  {
    question: 'Do you buy partial fire-damage in Racine — kitchen fires, electrical fires?',
    answer: 'Yes. We buy everything from small kitchen-fire smoke-damage cases to total-loss structure fires. Smoke damage alone can be deceptively expensive to remediate — contaminated drywall, carpet, HVAC ducts, and framing — and insurance sometimes undervalues that scope. If you\'re looking at an adjuster estimate that feels short and don\'t want to argue with the insurance company for 6 months, we\'ll give you a cash offer on the house as-is regardless of the claim status.',
  },
  {
    question: 'What\'s the Racine housing-stock factor in fire-damage pricing?',
    answer: 'Much of Racine\'s older housing — the Northside cream brick cottages, Southside Victorians, turn-of-the-century two-family flats — was built with balloon framing, plaster-on-lath, and original knob-and-tube wiring. Fire in these structures often creates full-envelope damage in ways a modern platform-framed house doesn\'t, because flames race up the un-fire-blocked wall cavities. This means the typical Racine fire loss leans heavier toward tear-down/rebuild economics than a comparable fire in a newer Mount Pleasant split-level. Our pricing accounts for balloon-frame rehab economics specifically.',
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
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases fire-damaged, smoke-damaged, and partial-loss Racine properties regardless of insurance-claim status. We close as-is at a Racine title company, you keep your insurance proceeds, and the rebuild risk transfers to us. Written offer in 24 hours. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Partial loss, total loss, smoke-only damage — we buy all of it. Written cash offer in 24 hours. Close in 7–14 days.
            </p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
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
            After a fire, every Racine homeowner faces the same decision: take the insurance money and rebuild, or take the money and sell the land/structure as-is. The right answer depends on four variables: (1) the actual cash value of insurance proceeds you\'re eligible to receive, (2) the full-scope rebuild cost, (3) your time horizon and willingness to manage a 6-12 month displacement, and (4) the post-rebuild resale value in your specific Racine neighborhood.
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
                <tr className="bg-white"><td className="p-3 font-medium">Timeline to resolution</td><td className="p-3">6-14 months</td><td className="p-3">7-14 days to closing</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Upfront capital needed</td><td className="p-3">Deductible + often out-of-pocket overage on scope</td><td className="p-3">$0 — we bring the cash</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Insurance proceeds</td><td className="p-3">Paid over rebuild in draws</td><td className="p-3">Retained by seller; not transferred to buyer</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Displacement (ALE)</td><td className="p-3">6-14 months of rental / hotel</td><td className="p-3">None — you\'ve already left</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Risk of cost overrun</td><td className="p-3">High — rebuilding on older Racine housing often surfaces surprise issues (knob-and-tube, asbestos, lead)</td><td className="p-3">Zero — we absorb it</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Energy required</td><td className="p-3">Full-time project management</td><td className="p-3">One closing signature</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">End state</td><td className="p-3">Rebuilt home, same address</td><td className="p-3">Cash in hand, moved on</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">
            For out-of-state heirs, elderly owners, or owners with any significant life event in progress (divorce, job relocation, health issue), the sell-as-is math almost always wins even when the rebuild-plus-resell number looks bigger on paper — because the rebuild path compounds stress, time, and risk.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Wisconsin Fire Insurance Claim Process — What to Expect</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Fire department response.</strong> The Racine Fire Department documents cause and origin; request a copy of the fire report. Emergency: 911. Non-emergency / report requests: (262) 635-7920.</li>
            <li><strong>Notice to insurer.</strong> Most Wisconsin policies require prompt notice of loss — commonly 24-72 hours. Report the claim by phone and follow up in writing.</li>
            <li><strong>Emergency mitigation.</strong> Board-up, tarp roof, and utility shutoff. These costs are typically reimbursable under the policy.</li>
            <li><strong>Adjuster visit and scope.</strong> Your insurer\'s adjuster inspects. You may want your own public adjuster for substantial losses — Wisconsin licenses public adjusters under Wis. Stat. § 628.</li>
            <li><strong>Actual cash value (ACV) advance.</strong> Most policies pay ACV first — the depreciated value — with replacement-cost withheld until rebuild.</li>
            <li><strong>Proof of loss.</strong> Typically 60 days to submit a sworn proof of loss (Wis. Stat. § 631.83 regulates timing). Keep all receipts.</li>
            <li><strong>Settlement or dispute.</strong> Wisconsin allows appraisal clauses, mediation, and litigation for disputed claims. Your insurer must act in good faith under Wis. Stat. § 628.46 (interest on overdue payments) and bad-faith common law.</li>
          </ol>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Racine Housing Stock — Why Fire Loss Hits Harder</h2>
          <p className="text-gray-700 mb-4">
            Roughly 45% of the City of Racine\'s housing stock was built before 1939 (U.S. Census ACS). Balloon-frame construction, plaster-on-lath interiors, and original knob-and-tube wiring are the norm in the Northside and Southside Historic Districts. Balloon framing lets fire race up un-fire-blocked wall cavities to the attic, which is why Racine fire losses in pre-1940 houses often extend far beyond the visible damage at the origin point. A kitchen fire in a 1910 cream brick cottage frequently becomes a full-envelope total-loss claim after the adjuster cuts into the walls and finds charred studs two stories up.
          </p>
          <p className="text-gray-700 mb-4">
            That housing-stock reality shapes insurance settlements and rebuild economics specifically in Racine. When insurers underestimate the scope at initial adjustment, the homeowner bears the gap during rebuild — or gets stuck in a year-long fight with the carrier. Selling as-is transfers that scope risk to us. We\'ve rebuilt Racine balloon-frame properties before and have budgeted for the realities of the housing stock.
          </p>
          <p className="text-gray-700 mb-4">
            Transfer fee: Wisconsin realty transfer fee — $3.00 per $1,000 of consideration, paid by seller (Wis. Stat. § 77.22). We cover it. Source: Wisconsin Department of Revenue (revenue.wi.gov); Wisconsin Office of the Commissioner of Insurance (oci.wi.gov).
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
