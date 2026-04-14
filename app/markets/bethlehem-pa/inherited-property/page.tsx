import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/inherited-property`;

export const metadata: Metadata = {
  title: 'Inherited Property Bethlehem PA',
  description:
    'Inherited a house in Bethlehem PA? We buy inherited properties as-is — no cleanout, no repairs. Cash offer in 24 hours. Northampton County Register of Wills guidance included.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to complete probate before selling an inherited Bethlehem PA property?',
    answer: "In most cases, yes. If the property was titled solely in the deceased's name, it must pass through the estate process at the Northampton County Register of Wills, located at 669 Washington Street, Easton, PA 18042 (phone: 610-829-6488). If the property was jointly titled with right of survivorship, it transfers automatically without probate. A Pennsylvania real estate attorney can confirm your specific situation quickly.",
  },
  {
    question: 'Where do I file for probate in Northampton County?',
    answer: "Northampton County probate is handled by the Register of Wills and Orphan's Court, 669 Washington Street, Easton, PA 18042, open Monday through Friday 8:30am–4:30pm. Once Letters Testamentary are issued, the executor has legal authority to sign real estate contracts on behalf of the estate.",
  },
  {
    question: 'Can I sell before Northampton County probate is complete?',
    answer: "Often yes. Once the Northampton County Register of Wills issues Letters Testamentary, the personal representative can manage and sell estate assets. A cash buyer experienced with estate sales can enter a purchase agreement and close once those letters are in hand — without waiting for the full probate process to conclude. Pennsylvania also allows a 'Voluntary Administration' affidavit for small estates under $50,000.",
  },
  {
    question: 'What if there are multiple heirs who need to agree?',
    answer: "All beneficiaries with an ownership interest must agree to the sale. If heirs disagree, the personal representative may need to petition the Northampton County Orphan's Court. In practice, most families reach agreement when they understand the carrying costs — Bethlehem property taxes, deferred maintenance on a 1920s row home, and utility bills add up quickly.",
  },
  {
    question: 'What is the transfer tax on an inherited property sale in Bethlehem PA?',
    answer: "Bethlehem PA has a standard 2% total transfer tax (1% PA state + 1% City of Bethlehem local). On a $245,000 South Side row home, total transfer tax is $4,900. By convention, buyer and seller split this 50/50 ($2,450 each). When you sell to USA Home Buyers, we cover all closing costs including the full transfer tax — nothing comes out of your proceeds.",
  },
  {
    question: 'Do we have to clean out the house before selling?',
    answer: "No. We purchase Bethlehem properties in as-is condition with all contents. Many inherited South Side row homes have a lifetime of belongings — furniture, tools, appliances. Take what matters to you and leave the rest. We handle the cleanout after closing.",
  },
];

export default function BethlehemInheritedPropertyPage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('Selling an Inherited Property in Bethlehem PA — Northampton County', pageUrl),
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
            alt="Bethlehem PA row home — sell inherited property for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bethlehem-pa" className="hover:text-white">Bethlehem PA</Link> › Inherited Property
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling an Inherited House in Bethlehem PA
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Inherited a Bethlehem row home, twin, or single-family house? We buy inherited properties
              in any condition throughout Northampton County — no cleanout, no repairs, no agent fees.
              Written cash offer in 24 hours, close on your timeline.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-5">
              <span>✓ No cleanout required</span>
              <span>✓ No repairs</span>
              <span>✓ Work with estate executors</span>
              <span>✓ Close in 7-14 days</span>
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
            Inherited a Bethlehem Home? Here&apos;s What to Know
          </h2>
          <p className="text-gray-700 mb-3">
            South Side Bethlehem has some of the densest pre-war housing stock in the Lehigh Valley. Homes built
            for Bethlehem Steel workers in the 1890s through 1930s pass through generations — and when a family
            member passes, an estate sale is often the practical outcome.
          </p>
          <p className="text-gray-700 mb-3">
            According to Redfin, Bethlehem&apos;s median sale price is $320,000 as of February 2026 — but South Side
            row homes average closer to $245,000 and often require significant work before they compete at retail.
            That math changes when a cash buyer purchases as-is: no repairs, no staging, no commission.
          </p>
          <p className="text-gray-700 mb-3">
            According to the{' '}
            <a href="https://www.pa.gov/agencies/revenue/resources/tax-types-and-information/realty-transfer-tax" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Pennsylvania Department of Revenue (pa.gov)</a>,
            the PA realty transfer tax applies to all real estate transfers including estate sales — the standard rate
            is 1% state plus 1% local (Bethlehem), totaling 2% of the sale price. On a $245,000 South Side row home,
            that&apos;s $4,900 total. When you sell to us, we cover all closing costs including the full transfer tax.
          </p>
          <p className="text-gray-700 mb-4">
            We&apos;ve worked through the Northampton County probate process many times. We understand the Register of
            Wills timeline, the Letters Testamentary requirement, and how to structure a purchase agreement that
            closes once estate authority is in place.
          </p>
        </section>

        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">
            Northampton County Register of Wills — Probate Office
          </h2>
          <p className="text-gray-700 mb-2">
            According to the{' '}
            <a href="https://norcopa.gov/recorder-of-deeds" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Northampton County Recorder of Deeds (norcopa.gov)</a>,
            all deed transfers — including estate deeds — must be recorded at 669 Washington Street, Easton, PA 18042
            before ownership formally changes hands. Probate for Bethlehem and all Northampton County estates is handled by:
          </p>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-sm">
            <p className="font-semibold text-brand-dark">Northampton County Register of Wills and Orphan&apos;s Court</p>
            <p className="text-gray-600">669 Washington Street, Easton, PA 18042</p>
            <p className="text-gray-600">Phone: (610) 829-6488</p>
            <p className="text-gray-600">Hours: Monday–Friday, 8:30am–4:30pm</p>
            <p className="text-gray-600 mt-1">
              <a href="https://www.northamptoncounty.org/register-of-wills-and-orphans-court" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
                northamptoncounty.org/register-of-wills-and-orphans-court →
              </a>
            </p>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Pennsylvania uses the Register of Wills + Orphan&apos;s Court structure. Small estates under $50,000 may use
            a Voluntary Administration affidavit without full probate. An attorney can advise on whether your
            estate qualifies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How the Sale Process Works for Inherited Properties</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Confirm estate authority', desc: 'The executor needs Letters Testamentary (or Letters of Administration) from the Northampton County Register of Wills before signing contracts. This typically takes 2-4 weeks from initial filing.' },
              { step: '2', title: 'Contact us for a cash offer', desc: 'We make a written offer based on the property\'s current condition — no repairs or cleanout needed. South Side row homes, Victorian singles, whatever the situation.' },
              { step: '3', title: 'Sign the purchase agreement', desc: 'The executor signs on behalf of the estate. The contract specifies price, terms, and a closing date that works for the estate timeline.' },
              { step: '4', title: 'Close at a Northampton County title company', desc: 'Proceeds go to the estate account. We cover all closing costs — transfer tax, recording fees, title insurance. Nothing comes out of your number.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-brand-light rounded-xl p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">{item.step}</div>
                <div>
                  <p className="font-semibold text-brand-dark">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for the Inherited Bethlehem Property"
          subheadline="No obligation. We work with executors and estate attorneys throughout Northampton County."
          sourcePage="/markets/bethlehem-pa"
        />

        <FAQSection items={FAQ_ITEMS} heading="Frequently Asked Questions — Inherited Properties in Bethlehem PA" />

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/bethlehem-pa/probate" className="text-brand-primary hover:underline">Probate sales in Bethlehem PA →</Link></li>
            <li><Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline">Bethlehem PA market overview →</Link></li>
            <li><Link href="/guides/inherited-property" className="text-brand-primary hover:underline">Pennsylvania inherited property guide →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell the Bethlehem Inherited Property?" sourcePage="/markets/bethlehem-pa" />
      </div>
    </>
  );
}
