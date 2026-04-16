/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { yorkLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/york-pa/foreclosure`;

export const metadata: Metadata = {
  title: 'Foreclosure Help York PA',
  description:
    'Facing foreclosure in York PA? Sell your house before the sheriff sale. York County foreclosure timeline is ~270 days — sell now, protect your credit.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'How long does foreclosure take in York County PA?',
    answer: "Pennsylvania is a 100% judicial foreclosure state. The typical York County timeline from first missed payment to sheriff's sale is approximately 270 days (~9 months). This includes the federal 120-day loss mitigation window, the foreclosure complaint filing, service of process, judgment, and sheriff's sale scheduling. Pennsylvania has no post-sale redemption period — once the sheriff sells the property, there's no getting it back.",
  },
  {
    question: 'Can I sell my York house to stop foreclosure?',
    answer: "Yes. You can sell your home at any point before the sheriff's sale — even after a foreclosure complaint is filed in York County Court of Common Pleas. A cash sale closes faster than the foreclosure process. The proceeds pay off the mortgage balance, any liens, and closing costs. If you have equity, you walk away with cash instead of losing the property at sheriff's sale.",
  },
  {
    question: 'What is the Act 91 notice in Pennsylvania?',
    answer: "According to Pennsylvania law (Act 91 of 1983, 35 P.S. § 1680.401c), lenders must send homeowners a formal notice at least 30 days before filing a foreclosure complaint. This notice explains your right to apply for mortgage assistance. Receiving an Act 91 notice is your signal that time is running — contact us immediately for a cash offer.",
  },
  {
    question: 'What if I owe more than my York house is worth?',
    answer: "If you're underwater on the mortgage, options include a short sale (lender agrees to accept less than owed), deed in lieu of foreclosure, or bankruptcy protection. A cash buyer can sometimes facilitate a short sale negotiation. Contact a HUD-approved housing counselor for free guidance — call 1-800-569-4287 or visit hud.gov.",
  },
  {
    question: 'How much will I net from selling before a York foreclosure?',
    answer: "According to Redfin, York City's median sale price is $165,850 as of February 2026. Cash offers typically run 65-75% of after-repair value. From the offer, your mortgage payoff, any liens, and closing costs are paid at closing. We cover transfer tax and all closing costs — nothing extra out of your pocket.",
  },
  {
    question: 'Where are York County foreclosure sales held?',
    answer: "York County tax and judicial sales are administered through the York County Tax Sale process and held via GovEase (online platform). According to yorkcountypa.gov/528, the next Judicial Sale is June 4, 2026. Sheriff's sales are separate and scheduled by the York County Sheriff's Office after a court judgment.",
  },
];

export default function YorkForeclosurePage() {
  return (
    <>
      <SchemaMarkup schema={[
        yorkLocalBusinessSchema,
        articleSchema('Selling Your House Before Foreclosure in York PA — York County', pageUrl, '2026-04-13'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/york-pa-hero-640.jpg 640w, /images/optimized/york-pa-hero-828.jpg 828w, /images/optimized/york-pa-hero-1080.jpg 1080w, /images/optimized/york-pa-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/york-pa-hero-1200.jpg"
            alt="York PA home — stop foreclosure with a cash sale"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/york-pa" className="hover:text-white">York PA</Link> › Foreclosure
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Before the Sheriff Sale — York PA Foreclosure Help
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Facing foreclosure in York PA or York County? Pennsylvania's judicial process gives you
              approximately 270 days from first missed payment — but that window closes. A cash sale is
              the fastest way to stop the process, preserve your equity, and protect your credit record.
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
            <CashOfferForm variant="hero" sourcePage="/markets/york-pa" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Yes, you can sell a house in foreclosure in York, PA. Pennsylvania uses judicial foreclosure through the York County Court of Common Pleas — the process typically runs 12–18 months from first missed payment to sheriff sale, giving you time to sell and protect your equity. USA Home Buyers can close in as few as 7 days with cash, paying off the mortgage and stopping the foreclosure before it completes.</p>
        </div>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">
            The York County Foreclosure Timeline
          </h2>
          <p className="text-gray-700 mb-3">
            Pennsylvania is a 100% judicial foreclosure state. According to{' '}
            <a href="https://www.pa.gov/agencies/dobs/consumers-investors/consumer-resources/consumer-financial-protections.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">PA consumer financial protections (pa.gov)</a>,
            homeowners have important rights under Act 6 (68 P.S. § 901) and Act 91 (35 P.S. § 1680.401c)
            — including mandatory notice periods and the right to cure defaults before court filings.
            The process unfolds in stages:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { phase: 'Days 1–120', desc: 'Federal 120-day loss mitigation window — lenders cannot file a foreclosure complaint until this expires. You must miss payments AND this window must pass.' },
              { phase: 'Act 91 Notice', desc: 'Lender must send a formal notice at least 30 days before filing in York County Court of Common Pleas. This is your earliest warning sign — contact us immediately.' },
              { phase: 'Filing', desc: 'Lender files a Complaint in York County Court of Common Pleas. You receive formal service of process and have 20 days to respond.' },
              { phase: 'Judgment', desc: 'If no resolution, lender obtains default or contested judgment.' },
              { phase: 'Sheriff\'s sale', desc: 'Scheduled after judgment with ~30 days public notice. Pennsylvania has no post-sale redemption period — this is the final step.' },
            ].map((item) => (
              <div key={item.phase} className="flex gap-4 bg-brand-light rounded-xl p-4">
                <div className="flex-shrink-0 font-bold text-brand-primary text-sm w-28">{item.phase}</div>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            <strong>Total typical timeline in York County: ~270 days</strong> from first missed payment
            to sheriff's sale — a minimum baseline. Court scheduling delays can extend this. You have
            more time than you think, but it isn't unlimited.
          </p>
          <p className="text-gray-700 mt-3">
            According to the{' '}
            <a href="https://yorkcountypa.gov/528/Tax-Sale-Information" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">York County Tax Sale Information page (yorkcountypa.gov)</a>,
            judicial tax sales are also held for properties with delinquent taxes — a separate but related
            process that can accelerate the loss of a property. If you're behind on both your mortgage
            AND property taxes, act now.
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
          headline="Get a Cash Offer Before the York Sheriff Sale"
          subheadline="Written offer in 24 hours. We coordinate with your lender to stop the foreclosure."
          sourcePage="/markets/york-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Foreclosure in York PA" />

        <section className="my-8 bg-brand-light rounded-2xl p-6 text-sm">
          <h2 className="font-bold text-brand-dark mb-2">Free Housing Help</h2>
          <p className="text-gray-700">
            <strong>HUD-Approved Housing Counseling:</strong>{' '}
            <a href="https://www.hud.gov/findacounselor" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">hud.gov/findacounselor</a> — 1-800-569-4287
            <br />
            <strong>York County Tax Sales:</strong>{' '}
            <a href="https://yorkcountypa.gov/528/Tax-Sale-Information" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">yorkcountypa.gov/528 →</a>
          </p>
        </section>

        <section className="my-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/york-pa" className="text-brand-primary hover:underline">York PA market overview →</Link></li>
            <li><Link href="/guides/foreclosure" className="text-brand-primary hover:underline">Pennsylvania foreclosure process guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Stop the York PA Foreclosure?" sourcePage="/markets/york-pa" />
      </div>
    </>
  );
}
