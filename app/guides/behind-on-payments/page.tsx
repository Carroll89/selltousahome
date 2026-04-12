import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Behind on Mortgage Payments in PA — Sell Before Foreclosure',
  description:
    'Behind on your mortgage in Pennsylvania? You can sell before the sheriff sale and keep your equity. PA foreclosure timeline explained. Cash offer in 24 hours.',
  alternates: { canonical: 'https://selltousahome.com/guides/behind-on-payments' },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my house if I\'m behind on payments?',
    answer:
      'Yes. As long as the foreclosure sale hasn\'t completed, you can sell and use proceeds to pay off the mortgage.',
  },
  {
    question: 'What is the foreclosure timeline in Pennsylvania?',
    answer:
      'PA judicial foreclosure averages 12-18 months from first missed payment to completed sheriff sale.',
  },
  {
    question: 'What is an Act 91 notice in Pennsylvania?',
    answer:
      'A required notice that gives you 33 days to apply for PHFA assistance before foreclosure can proceed.',
  },
  {
    question: 'What happens to my equity if I sell before foreclosure?',
    answer:
      'Any amount above what you owe goes to you at closing.',
  },
  {
    question: 'Will selling before foreclosure affect my credit?',
    answer:
      'Less than a completed foreclosure. A pre-foreclosure sale (even short sale) has significantly less impact than a completed foreclosure.',
  },
];

const pageUrl = `${SITE_URL}/guides/behind-on-payments`;

export default function BehindOnPaymentsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Behind on Mortgage Payments in Harrisburg, PA? Here\'s What Happens Next', pageUrl),
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
              <Link href="/guides" className="hover:text-white">Guides</Link> › Behind on Payments
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Behind on Mortgage Payments in Harrisburg, PA? Here&apos;s What Happens Next
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              If you&apos;ve missed mortgage payments in Pennsylvania, you have more time and more options than you
              realize. PA is a judicial foreclosure state — the process takes 12-18 months. Here&apos;s what that
              means for you, and what you can do right now.
            </p>
            <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-red-200 mb-1">Sheriff sale date approaching?</p>
              <p className="text-red-100">Call us immediately at <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a> — we may be able to close before the sale date.</p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/behind-on-payments" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Short Answer</h2>
            <p className="text-gray-700 text-sm">
              Being behind on mortgage payments in Pennsylvania doesn&apos;t mean you&apos;re out of options. PA&apos;s judicial
              foreclosure process takes 12-18 months — meaning most homeowners who are behind have considerable time
              to act. If you have equity in your home (it&apos;s worth more than you owe), selling to a cash buyer is
              typically the fastest way to pay off the mortgage, stop the foreclosure process, and walk away with
              money in your pocket. We can close in 7-14 days.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Pennsylvania Foreclosure: The Month-by-Month Timeline
            </h2>
            <p className="text-gray-700 mb-6">
              Pennsylvania uses a judicial foreclosure process — the lender must file a lawsuit and get a court
              judgment before selling your property. This takes time, and it gives you multiple opportunities to act.
            </p>

            <div className="space-y-3">
              {[
                {
                  period: 'Day 1-30',
                  stage: '1st Missed Payment',
                  detail: 'Your lender will contact you by phone and mail. Most lenders won\'t begin formal foreclosure action until you\'re 3-4 months behind. This is your best window to call your lender and explore options directly.',
                  action: 'Call your lender. Ask about forbearance, repayment plans, or loan modification.',
                },
                {
                  period: 'Month 2-3',
                  stage: 'Continued Default',
                  detail: 'You receive notices about default status. Late fees accumulate. Your lender is required by federal law to send you information about loss mitigation options before beginning foreclosure.',
                  action: 'Consider selling if you have equity and can\'t resume payments.',
                },
                {
                  period: 'Month 3-4',
                  stage: 'Act 91 Notice',
                  detail: 'Before your lender can file foreclosure in court, they must send you an Act 91 notice. This gives you 33 days to apply for PHFA\'s Homeowner\'s Emergency Mortgage Assistance Program (HEMAP). The lender cannot file in court during this period.',
                  action: 'Apply for HEMAP assistance at phfa.org if you want to keep the home. Or decide to sell.',
                },
                {
                  period: 'Month 4-6',
                  stage: 'Foreclosure Complaint Filed',
                  detail: 'After the Act 91 period expires, the lender files a foreclosure complaint in your county Court of Common Pleas. A process server or sheriff serves you with the complaint. You have 20 days to file a written answer.',
                  action: 'You still have time to sell. Consult a foreclosure attorney about your rights and timeline.',
                },
                {
                  period: 'Month 6-10',
                  stage: 'Conciliation & Court Process',
                  detail: 'Many PA counties (including Dauphin) require a mandatory conciliation conference — a court-supervised meeting where you and the lender must attempt to work out a solution. This often results in loan modifications, repayment plans, or sale agreements.',
                  action: 'Attend the conciliation conference. If selling, get a cash buyer under contract — this can stop the proceedings.',
                },
                {
                  period: 'Month 10-15',
                  stage: 'Judgment Entered',
                  detail: 'If no agreement is reached and you haven\'t filed a defense, the court enters judgment in favor of the lender. The lender can now schedule a sheriff sale.',
                  action: 'Selling before the sheriff sale is still possible. Contact us immediately.',
                },
                {
                  period: 'Month 12-18',
                  stage: 'Sheriff Sale',
                  detail: 'The property is auctioned at a public sheriff sale. PA requires at least 30 days advance notice of the sale date. Sales are often postponed once or twice. If you have equity, the court theoretically returns excess proceeds — but the foreclosure destroys your credit for 7 years.',
                  action: 'Last chance: contact a cash buyer and a foreclosure attorney immediately.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-brand-dark text-white px-4 py-2 flex gap-3 items-center">
                    <span className="text-xs font-bold bg-white/20 rounded px-2 py-0.5">{item.period}</span>
                    <span className="font-semibold text-sm">{item.stage}</span>
                  </div>
                  <div className="p-4 text-sm">
                    <p className="text-gray-700 mb-2">{item.detail}</p>
                    <p className="text-brand-primary font-medium text-xs">→ {item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Rights Under Pennsylvania Law
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Act 91 — Emergency Assistance</h3>
                <p className="text-sm text-gray-700">
                  Pennsylvania&apos;s Act 91 requires lenders to send a specific notice before filing foreclosure.
                  The notice gives you 33 days to apply for PHFA&apos;s HEMAP program, which provides temporary
                  financial assistance to help homeowners catch up. The lender cannot file in court until
                  this period expires.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">Act 6 — Right to Cure</h3>
                <p className="text-sm text-gray-700">
                  Pennsylvania&apos;s Act 6 gives homeowners the right to cure a mortgage default by paying all
                  past-due amounts plus costs up to one hour before the sheriff sale. This last-resort option
                  requires coming up with the full arrears — but it stops the foreclosure entirely.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Your Options
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Sell to a Cash Buyer',
                  tag: 'Fastest — protects your equity and credit',
                  desc: 'If your home is worth more than you owe (including arrears), selling to a cash buyer pays off the mortgage at closing and puts the remaining equity in your pocket. The foreclosure case is dismissed when the mortgage is paid off. Close in 7-14 days. Your credit takes a hit from missed payments but avoids the devastating 7-year foreclosure record.',
                  highlight: true,
                },
                {
                  title: 'Loan Modification',
                  tag: 'If you want to keep the home',
                  desc: 'Ask your lender to permanently change your loan terms — lower interest rate, extended repayment period, or reduced principal. Requires income documentation and lender approval. Can take 3-6 months with no guarantee of approval. You must demonstrate ability to make modified payments.',
                  highlight: false,
                },
                {
                  title: 'Forbearance Agreement',
                  tag: 'Temporary relief only',
                  desc: 'The lender temporarily pauses or reduces payments. Missed amounts are added to the end of the loan. Provides breathing room but doesn\'t solve the underlying problem if you can\'t afford the payments long-term.',
                  highlight: false,
                },
                {
                  title: 'Short Sale',
                  tag: 'If you owe more than the home is worth',
                  desc: 'The lender agrees to accept less than the full mortgage balance. You avoid foreclosure, but lender must approve, and the process takes 2-6 months with no guarantee of approval. Better for credit than a completed foreclosure.',
                  highlight: false,
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.highlight ? 'border-brand-primary bg-brand-light' : 'border-gray-200'}`}>
                  <h3 className={`font-bold mb-1 ${item.highlight ? 'text-brand-primary' : 'text-gray-600'}`}>{item.title}</h3>
                  <p className="text-xs text-gray-500 mb-2 italic">{item.tag}</p>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              How Selling Before Foreclosure Protects You
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'You keep your equity',
                  desc: 'Any sale proceeds above what you owe on the mortgage come to you at closing. A foreclosure sale doesn\'t guarantee you\'ll see that equity.',
                },
                {
                  title: 'Less credit damage',
                  desc: 'Missed payments hurt your credit regardless. But a completed foreclosure stays on your credit report for 7 years and can affect employment, housing, and financing. A pre-foreclosure sale has far less lasting impact.',
                },
                {
                  title: 'The legal process stops',
                  desc: 'Once the mortgage is paid off at closing, the foreclosure lawsuit is dismissed. No more court dates, no more notices, no more stress.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer Before Your Sheriff Sale"
            subheadline="Written offer in 24 hours. Close in 7-14 days. Stop the foreclosure process."
            sourcePage="/guides/behind-on-payments"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions — Behind on Payments in PA"
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">Pennsylvania Mortgage Assistance Resources</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">PA Housing Finance Agency (PHFA) — HEMAP</p>
                <p className="text-gray-600"><a href="https://www.phfa.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">phfa.org</a> — Homeowner Emergency Mortgage Assistance Program</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Pennsylvania Legal Aid Network</p>
                <p className="text-gray-600"><a href="https://palawhelp.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">palawhelp.org</a> — Free foreclosure legal help</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">HUD-Approved Housing Counselors</p>
                <p className="text-gray-600"><a href="https://www.hud.gov/findacounselor" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">hud.gov/findacounselor</a> — Free/low-cost foreclosure counseling</p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-500">
            <p className="mb-3">
              <strong>Sources:</strong>{' '}
              <a href="https://www.legis.state.pa.us/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PA Foreclosure Law — Title 68 (legis.state.pa.us)</a>{' '}·{' '}
              <a href="https://www.dauphincounty.gov/government/support-agencies/register-of-wills" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Dauphin County Register of Wills</a>{' '}·{' '}
              <a href="https://www.revenue.pa.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">PA Transfer Tax — Revenue.PA.gov</a>{' '}·{' '}
              <a href="https://www.nar.realtor/research-and-statistics" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">NAR Research &amp; Statistics</a>
            </p>
            <p>
              Related:{' '}
              <Link href="/guides/foreclosure" className="text-brand-primary hover:underline">Foreclosure Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/foreclosure" className="text-brand-primary hover:underline">Harrisburg Foreclosure (Dauphin County)</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
