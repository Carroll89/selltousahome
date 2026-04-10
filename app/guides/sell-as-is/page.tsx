import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Your House As-Is in Pennsylvania — No Repairs Required',
  description:
    'Selling a house as-is in Pennsylvania? Learn how cash buyers purchase homes in any condition — no repairs, no inspections, no lender requirements.',
  alternates: { canonical: 'https://selltousahome.com/guides/sell-as-is' },
};

const FAQ_ITEMS = [
  {
    question: 'What does "as-is" mean when selling a house?',
    answer:
      'Selling as-is means the property is sold in its current condition. The seller makes no repairs, provides no credits for defects, and does not address buyer inspection findings. The buyer accepts the property as they find it. You still have disclosure obligations under PA law — you must disclose known material defects.',
  },
  {
    question: 'Do I have to disclose defects when selling as-is in Pennsylvania?',
    answer:
      'Yes. Pennsylvania\'s Real Estate Seller Disclosure Law (68 Pa.C.S. § 7301) requires sellers to disclose known material defects on a standard disclosure form. Selling as-is does not eliminate disclosure obligations — it means you won\'t fix the issues, not that you can hide them. Cash buyers are experienced with this and typically waive inspection contingencies anyway.',
  },
  {
    question: 'Will traditional buyers finance an as-is home purchase?',
    answer:
      'Often not. FHA, VA, and USDA loans have property condition requirements — lenders won\'t approve financing on homes with significant structural, safety, or habitability issues. Conventional financing is more flexible but lenders can still require repairs before closing. Cash buyers have no lender requirements — they can purchase any property in any condition.',
  },
  {
    question: 'How much less do you get for selling as-is?',
    answer:
      'Cash buyers typically pay 70-80% of fair market value for as-is properties. However, when you subtract the cost of repairs, agent commissions (5-6%), closing costs, and carrying time from a traditional sale, the net difference is often smaller than it appears — especially for properties needing significant work.',
  },
  {
    question: 'What types of properties do you buy as-is?',
    answer:
      'We buy everything: foundation problems, mold, fire damage, water damage, hoarding/cluttered properties, unfinished renovations, outdated systems, roof issues, structural problems, and major code violations. We\'ve bought properties that other buyers and lenders wouldn\'t touch.',
  },
];

const pageUrl = `${SITE_URL}/guides/sell-as-is`;

export default function SellAsIsGuidePage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema('Sell Your House As-Is in Pennsylvania — No Repairs Required', pageUrl),
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
              <Link href="/guides" className="hover:text-white">Guides</Link> › Sell As-Is
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House As-Is in Pennsylvania — No Repairs Required
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases houses in any condition throughout Pennsylvania — no repairs, no cleaning,
              no staging. We handle everything. Written cash offer in 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm">
              <span>✓ Foundation problems</span>
              <span>✓ Fire/water damage</span>
              <span>✓ Mold</span>
              <span>✓ Hoarding</span>
              <span>✓ Major code violations</span>
            </div>
            <div className="mt-4">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-white bg-white/10 border border-white/30 rounded-lg px-5 py-3 hover:bg-white/20 text-sm">
                Call {PHONE}
              </a>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/sell-as-is" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              What &quot;As-Is&quot; Means — Legally and Practically
            </h2>
            <p className="text-gray-700 mb-4">
              When you sell a house &quot;as-is&quot; in Pennsylvania, you&apos;re telling buyers: the price accounts for the
              property&apos;s current condition. You will not make repairs, provide repair credits, or negotiate based
              on inspection findings.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>What as-is does NOT mean:</strong> You can hide known defects. Pennsylvania&apos;s Real Estate
              Seller Disclosure Law (68 Pa.C.S. § 7301) still requires you to disclose material defects you&apos;re
              aware of. Selling as-is means you won&apos;t fix them — not that you don&apos;t have to disclose them.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>The practical problem with as-is listings on the MLS:</strong> Traditional buyers using
              FHA, VA, or USDA loans can&apos;t purchase homes that don&apos;t meet lender condition requirements.
              Even with conventional financing, lenders often require repairs before approving the loan.
              This narrows your buyer pool dramatically for properties in poor condition.
            </p>
            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-lg p-4">
              <p className="font-semibold text-brand-dark mb-1">Cash buyers have no lender requirements.</p>
              <p className="text-gray-700 text-sm">
                Because cash buyers don&apos;t finance the purchase, there&apos;s no lender to require repairs before closing.
                They can purchase properties in any condition — which is why as-is sellers consistently turn to
                cash buyers.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              Conditions We Buy — No Matter How Severe
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Structural / Foundation Issues', desc: 'Cracked foundations, bowing walls, settling — issues that scare away traditional buyers and trigger lender rejections.' },
                { title: 'Mold & Water Damage', desc: 'Active mold, water intrusion, damaged drywall and subfloor. We\'ve seen it all.' },
                { title: 'Fire Damage', desc: 'Partial or total fire damage. Smoke, char, and structural compromise — we assess and buy.' },
                { title: 'Hoarding / Severely Cluttered', desc: 'We buy hoarding properties as-is. No cleanup required. Leave anything you don\'t want.' },
                { title: 'Outdated / Code Violations', desc: 'Knob-and-tube wiring, galvanized pipes, asbestos, open code violations — not a problem for cash buyers.' },
                { title: 'Unfinished Renovations', desc: 'Stopped mid-renovation with walls open, no kitchen, incomplete additions — we purchase as-is.' },
                { title: 'Roof & Mechanical Issues', desc: 'Failed roofs, broken HVAC, outdated electrical panels, non-functioning systems.' },
                { title: 'Abandoned / Long-Vacant', desc: 'Properties that have been vacant for years, with deferred maintenance accumulated throughout.' },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-dark text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              The Real Math: As-Is Cash Sale vs. Fix Before Listing
            </h2>
            <p className="text-gray-700 mb-4">
              Here&apos;s a common scenario: a Harrisburg home worth $180,000 in good condition, but needing $25,000
              in repairs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-light rounded-xl p-5">
                <h3 className="font-bold text-brand-primary mb-3">Cash Sale As-Is</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>FMV (in current condition)</span><span className="font-bold">~$155,000</span></div>
                  <div className="flex justify-between"><span>Cash offer (75%)</span><span className="font-bold">$116,250</span></div>
                  <div className="flex justify-between text-gray-500"><span>Repairs out-of-pocket</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Agent commission</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Closing costs</span><span>$0</span></div>
                  <div className="flex justify-between text-gray-500"><span>Carrying time</span><span>2 weeks</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-brand-dark"><span>Net to seller</span><span>$116,250</span></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-700 mb-3">Fix Up Then List</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>FMV after repairs</span><span className="font-bold">$180,000</span></div>
                  <div className="flex justify-between text-red-500"><span>Repair cost (out-of-pocket)</span><span>-$25,000</span></div>
                  <div className="flex justify-between text-red-500"><span>Agent commission (5.5%)</span><span>-$9,900</span></div>
                  <div className="flex justify-between text-red-500"><span>Closing/transfer costs</span><span>-$3,600</span></div>
                  <div className="flex justify-between text-red-500"><span>Carrying costs (90 days)</span><span>-$3,600</span></div>
                  <div className="flex justify-between text-gray-500"><span>Carrying time</span><span>90-120 days</span></div>
                  <div className="border-t pt-2 flex justify-between font-bold text-brand-dark"><span>Net to seller</span><span>$137,900</span></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              The gap in this example: $21,650. But you&apos;d need to front $25,000 for repairs, spend 3-4 months
              managing contractors, and risk the deal falling through at inspection. Whether that difference is
              worth it depends entirely on your situation.
            </p>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer on Your As-Is Property"
            subheadline="No repairs required. Written offer in 24 hours."
            sourcePage="/guides/sell-as-is"
          />

          <FAQSection
            items={FAQ_ITEMS}
            heading="Frequently Asked Questions — Selling As-Is in Pennsylvania"
          />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/hoarding-property" className="text-brand-primary hover:underline">Hoarding Property Guide</Link>{' '}
              ·{' '}
              <Link href="/resources/sell-house-without-repairs" className="text-brand-primary hover:underline">Sell Without Repairs</Link>{' '}
              ·{' '}
              <Link href="/resources/how-much-do-cash-buyers-pay" className="text-brand-primary hover:underline">How Much Do Cash Buyers Pay?</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
