import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/foreclosure`;

export const metadata: Metadata = {
  title: 'Foreclosure Help Bethlehem PA',
  description:
    'Facing foreclosure in Bethlehem PA? Sell your house before the sheriff sale. Northampton County foreclosure timeline is 12-18 months — sell now, protect your credit.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in Northampton County PA?',
    answer: "Pennsylvania is a 100% judicial foreclosure state. According to the Northampton County Court of Common Pleas, the typical timeline from first missed payment to sheriff's sale is 12-18 months. This includes a mandatory 120-day federal loss mitigation window, plus Northampton County's mandatory Mortgage Foreclosure Diversion Program — conciliation conferences that add 60-90 days. This gives sellers real time to act.",
  },
  {
    question: 'Can I sell my Bethlehem house to stop foreclosure?',
    answer: "Yes. You can sell your home at any point before the sheriff's sale — even after a foreclosure complaint is filed. A cash sale closes faster than the foreclosure process. The proceeds pay off the mortgage balance, any liens, and closing costs. If you have equity, you walk away with cash instead of losing the property at sheriff's sale.",
  },
  {
    question: 'What is the Northampton County Mortgage Foreclosure Diversion Program?',
    answer: "According to the Northampton County Courts (nccpa.org), the Mortgage Foreclosure Diversion Program schedules mandatory conciliation conferences in all owner-occupied residential foreclosure cases. This gives homeowners additional time — typically 60-90 days — to explore options including loan modification, short sale, or a cash buyer purchase. To access the program, contact Northampton County Legal Aid at (610) 317-8757.",
  },
  {
    question: 'What if I owe more than my Bethlehem house is worth?',
    answer: "If you owe more than the property's value, you're in negative equity. Options include a short sale (lender agrees to accept less than owed), deed in lieu of foreclosure, or bankruptcy. A cash buyer can sometimes help facilitate a short sale negotiation. Contact Northampton County Legal Aid for free guidance: (610) 317-8757.",
  },
  {
    question: 'How much will I net from selling before a Bethlehem foreclosure?',
    answer: "According to Redfin, Bethlehem's median sale price is $320,000 as of February 2026. Cash offers typically run 70-80% of fair market value — $224,000-$256,000 on a $320,000 home. From that, your mortgage payoff, any liens, and closing costs are paid at closing. We cover transfer tax and all closing costs — nothing extra out of your pocket.",
  },
  {
    question: 'Does a pre-foreclosure sale affect my credit?',
    answer: "A completed sale before the sheriff's sale is far better for your credit than a completed foreclosure. While late payments have already appeared on your credit report, a foreclosure judgment stays on your record for 7 years and blocks future mortgage access. Selling — even at a discount — removes the foreclosure from the path.",
  },
];

export default function BethlehemForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('Selling Your House Before Foreclosure in Bethlehem PA — Northampton County', pageUrl),
        faqSchema(FAQ_ITEMS),
      ]} />

      {/* Hero */}
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/bethlehem-pa-hero-640.jpg 640w, /images/optimized/bethlehem-pa-hero-828.jpg 828w, /images/optimized/bethlehem-pa-hero-1080.jpg 1080w, /images/optimized/bethlehem-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bethlehem-pa-hero-1200.jpg"
            alt="Bethlehem PA home — stop foreclosure with a cash sale"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bethlehem-pa" className="hover:text-white">Bethlehem PA</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Before the Sheriff Sale — Bethlehem PA Foreclosure Help
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Facing foreclosure in Bethlehem PA or Northampton County? Pennsylvania&apos;s judicial process
              gives you 12-18 months — but that window closes. A cash sale is often the fastest way to
              stop the process, preserve your equity, and protect your credit.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ Close before sheriff sale</span>
              <span>✓ Written offer in 24 hours</span>
              <span>✓ Stop the foreclosure</span>
              <span>✓ We handle the payoff</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/markets/bethlehem-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            The Northampton County Foreclosure Timeline
          </h2>
          <p className="text-gray-700 mb-3">
            Pennsylvania is a 100% judicial foreclosure state, governed by Pennsylvania Rules of Civil Procedure
            (Rules 1141-1150) and Act 6 of 1974 (68 P.S. § 901 et seq.). According to Nolo&apos;s updated PA
            Foreclosure Laws guide (January 2026), the process unfolds in stages that give homeowners significant time:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { phase: 'Days 1–120', desc: 'Federal 120-day loss mitigation window — lenders cannot file a foreclosure complaint until this expires. You must miss payments AND this window must pass.' },
              { phase: 'Filing', desc: 'Lender files a Complaint in the Northampton County Court of Common Pleas. You receive formal service.' },
              { phase: 'Conciliation conference', desc: 'Northampton County\'s Mortgage Foreclosure Diversion Program schedules mandatory conferences for all owner-occupied cases. This adds 60-90 days. Contact Northampton County Legal Aid at (610) 317-8757 for free help navigating this.' },
              { phase: 'Judgment', desc: 'If no resolution, lender obtains default or contested judgment.' },
              { phase: 'Sheriff\'s sale', desc: 'Scheduled and advertised — typically 90-120 days after judgment. Pennsylvania has no post-sale redemption period.' },
            ].map((item) => (
              <div key={item.phase} className="flex gap-4 bg-brand-light rounded-xl p-4">
                <div className="flex-shrink-0 font-bold text-brand-primary text-sm w-24">{item.phase}</div>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            <strong>Total typical timeline in Northampton County: 12–18 months</strong> from first missed payment
            to sheriff&apos;s sale. The mandatory conciliation program and court scheduling backlogs often push it
            toward the 15-18 month range. You have more time than you think — but it isn&apos;t unlimited.
          </p>
        </section>

        <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">⚠️ Know Your Timeline — Act Now</h2>
          <p className="text-gray-700 mb-2">
            The clock started with your first missed payment. The earlier you sell, the more options you have:
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✓ <strong>Before complaint filed:</strong> Full equity available, cleanest sale</li>
            <li>✓ <strong>After complaint, before judgment:</strong> Sale still possible, stops proceedings</li>
            <li>✓ <strong>After judgment, before sheriff sale:</strong> Cash sale still stops sheriff sale</li>
            <li>✗ <strong>After sheriff sale:</strong> Property sold at auction — no options remain</li>
          </ul>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer Before the Bethlehem Sheriff Sale"
          subheadline="Written offer in 24 hours. We coordinate with your lender to stop the foreclosure."
          sourcePage="/markets/bethlehem-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Foreclosure in Bethlehem PA" />

        <section className="my-8 bg-brand-light rounded-2xl p-6 text-sm">
          <h2 className="font-bold text-brand-dark mb-2">Free Legal Help — Northampton County</h2>
          <p className="text-gray-700">
            <strong>Northampton County Legal Aid:</strong> (610) 317-8757 — Free assistance for homeowners facing foreclosure.
            <br />
            <strong>Mortgage Foreclosure Diversion Program:</strong>{' '}
            <a href="https://www.nccpa.org/geninfo/mortgage-foreclosure-diversion-program" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">nccpa.org →</a>
          </p>
        </section>

        <section className="my-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline">Bethlehem PA market overview →</Link></li>
            <li><Link href="/guides/foreclosure" className="text-brand-primary hover:underline">Pennsylvania foreclosure process guide →</Link></li>
            <li><Link href="/guides/behind-on-payments" className="text-brand-primary hover:underline">Options when behind on mortgage payments →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Stop the Bethlehem Foreclosure — Get a Cash Offer Now" sourcePage="/markets/bethlehem-pa" />
      </div>
    </>
  );
}
