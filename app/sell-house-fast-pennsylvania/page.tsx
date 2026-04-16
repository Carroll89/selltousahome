import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { organizationSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Your House Fast in Pennsylvania',
  description:
    'USA Home Buyers buys houses across Pennsylvania for cash — as-is, any condition, close in 7-14 days. No repairs, no agent fees. Serving Harrisburg, Allentown, State College, and beyond.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-pennsylvania` },
};

const FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house in Pennsylvania?',
    answer:
      "With a cash buyer like USA Home Buyers, you can close in 7-14 days anywhere in Pennsylvania. Traditional MLS listings take 45-60+ days after offer acceptance — and that's after getting an offer, which in slower markets can take weeks.",
  },
  {
    question: 'What is Pennsylvania\'s realty transfer tax?',
    answer:
      "Pennsylvania's base realty transfer tax is 1% (state) plus a local component that varies by municipality. Most Pennsylvania municipalities charge 2% total. Some charge more: State College Borough charges 3.00%, and Philadelphia charges 4.278% combined. Always verify the rate for your specific municipality before closing.",
  },
  {
    question: 'Is Pennsylvania a judicial foreclosure state?',
    answer:
      "Yes. Pennsylvania only allows judicial foreclosure — every case goes through the county Court of Common Pleas. The full process takes 9-18 months from first missed payment to sheriff's sale. There is no redemption period after the sheriff's sale. Act 6 of 1974 requires a 30-day notice of intent before filing, and HEMAP notification is required as well.",
  },
  {
    question: 'Does Pennsylvania require an attorney at closing?',
    answer:
      "No. Pennsylvania doesn't require an attorney at closing — most transactions use a title company as settlement agent. However, many buyers and sellers choose to use a real estate attorney, especially for estate sales, short sales, or complex transactions.",
  },
  {
    question: 'What areas of Pennsylvania does USA Home Buyers serve?',
    answer:
      "We currently have active markets in Central Pennsylvania (Harrisburg and Dauphin County), the Lehigh Valley (Allentown, Bethlehem, Easton), Greater Philadelphia (King of Prussia, Montgomery County), and State College / Centre County. We're expanding across PA — call us if you're not sure whether we cover your area.",
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Sell House Fast Pennsylvania', item: `${SITE_URL}/sell-house-fast-pennsylvania` },
  ],
};

const PA_MARKETS = [
  {
    city: 'Harrisburg',
    county: 'Dauphin County',
    slug: 'harrisburg-pa',
    highlight: 'Central PA hub, 5-day median DOM, 2% transfer tax',
    surrounding: 'Camp Hill, Mechanicsburg, Carlisle, Steelton',
  },
  {
    city: 'Allentown',
    county: 'Lehigh County',
    slug: 'allentown-pa',
    highlight: 'Lehigh Valley, 2.5% transfer tax, strong Hispanic market (Hablamos español)',
    surrounding: 'Bethlehem, Easton, Whitehall, Northampton',
  },
  {
    city: 'King of Prussia',
    county: 'Montgomery County',
    slug: 'king-of-prussia-pa',
    highlight: 'Greater Philadelphia, Montgomery County, high-value suburban market',
    surrounding: 'Norristown, Conshohocken, Wayne, Plymouth Meeting',
  },
  {
    city: 'State College',
    county: 'Centre County',
    slug: 'state-college-pa',
    highlight: 'Penn State market, 3% transfer tax (Borough), 73% renter-occupied, landlord exits',
    surrounding: 'Bellefonte, Boalsburg, Port Matilda, Philipsburg',
  },
];

export default function SellHouseFastPennsylvaniaPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumbSchema, faqSchema(FAQ_ITEMS)]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Sell Your House Fast in Pennsylvania — Any City, Any Condition
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            USA Home Buyers purchases houses across Pennsylvania for cash — as-is, in any condition,
            with written offers in 24 hours and closings in 7-14 days. No repairs, no agent fees,
            no transfer tax surprises.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-white text-brand-dark font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            📞 Call Now — We Answer 24/7
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TL;DR — GEO/AEO Quick Answer */}
        <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
          <h2 className="text-lg font-bold text-brand-dark mb-2">Quick Answer: Sell Your House Fast in Pennsylvania</h2>
          <p className="text-gray-700 text-sm leading-relaxed">USA Home Buyers purchases houses throughout Pennsylvania for cash — as-is, in any condition, with no repairs and no agent fees. We serve 11 markets across PA: Harrisburg, Allentown, Bethlehem, Lancaster, York, Reading, Erie, State College, and King of Prussia. According to the Zillow Home Value Index, Pennsylvania's statewide median home value is approximately $287,000 (early 2026). Pennsylvania charges a 2% transfer tax (1% state + 1% local) — we cover all closing costs. Written offer within 24 hours, closing in 7–14 days.</p>
        </div>


        {/* PA Markets Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Our Pennsylvania Markets</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {PA_MARKETS.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="block border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-brand-dark">{market.city}</h3>
                    <p className="text-xs text-gray-500">{market.county}</p>
                  </div>
                  <span className="text-brand-primary text-sm">→</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">{market.highlight}</p>
                <p className="text-xs text-gray-400">Also serving: {market.surrounding}</p>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Don&apos;t see your city? Call us at{' '}
            <a href={`tel:${PHONE}`} className="text-brand-primary underline">{PHONE}</a>
            {' '}— we may be able to help or refer you to a trusted partner.
          </p>
        </section>

        {/* PA Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling a House Fast in Pennsylvania — What to Know</h2>
          <div className="space-y-4 text-gray-700">
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Transfer tax varies by municipality</h3>
              <p className="text-sm">
                Pennsylvania&apos;s base realty transfer tax is 1% (state portion), but local municipalities add
                their own — and the rates vary significantly. Most PA municipalities total 2.00%, but
                State College Borough charges 3.00%, Allentown charges 2.5%, and Philadelphia charges 4.278%.
                Always verify the rate for your specific municipality before signing anything.
                Source:{' '}
                <a href="https://centrecountypa.gov/420/Realty-Transfer-Tax-Rates" target="_blank" rel="noopener noreferrer" className="underline text-brand-primary">
                  Centre County RTT Rates
                </a>
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">Judicial foreclosure only</h3>
              <p className="text-sm">
                Pennsylvania requires all foreclosures to go through the county Court of Common Pleas.
                This makes the process longer (9-18 months is typical) but also gives homeowners more
                notice and more time to act. Act 6 of 1974 requires a 30-day pre-suit notice, and
                lenders must notify borrowers of HEMAP assistance options.
                Source:{' '}
                <a href="https://www.nolo.com/legal-encyclopedia/pennsylvania-foreclosure-laws-procedures.html" target="_blank" rel="noopener noreferrer" className="underline text-brand-primary">
                  PA Foreclosure Laws (Nolo)
                </a>
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">No attorney required at closing</h3>
              <p className="text-sm">
                Pennsylvania doesn&apos;t require legal counsel at closing. Title companies typically handle
                settlement and deed preparation. For complex situations (estate sales, liens, short sales),
                using a real estate attorney is recommended.
              </p>
            </div>
            <div className="border-l-4 border-brand-primary pl-4">
              <h3 className="font-semibold text-brand-dark mb-1">PA inheritance tax applies to estate properties</h3>
              <p className="text-sm">
                Pennsylvania charges an inheritance tax on assets inherited from a decedent, including
                real estate. Rates: 0% (surviving spouse), 4.5% (children/lineal descendants), 12%
                (siblings), 15% (others). The tax is separate from the real estate closing and is paid
                by the estate to the PA Department of Revenue.
                Source:{' '}
                <a href="https://www.revenue.pa.gov/TaxesAndPrograms/InheritanceTax/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="underline text-brand-primary">
                  PA Inheritance Tax (revenue.pa.gov)
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Form */}
        <CashOfferForm
          variant="inline"
          headline="Get a Cash Offer for Your Pennsylvania Home"
          subheadline="Written offer in 24 hours. No obligation. We cover closing costs."
          sourcePage="/sell-house-fast-pennsylvania"
        />

        {/* FAQ */}
        <FAQSection items={FAQ_ITEMS} heading="Selling a House Fast in Pennsylvania — FAQ" />

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>
            <Link href="/markets/harrisburg-pa" className="text-brand-primary hover:underline">Harrisburg</Link>
            {' '}·{' '}
            <Link href="/markets/allentown-pa" className="text-brand-primary hover:underline">Allentown</Link>
            {' '}·{' '}
            <Link href="/markets/king-of-prussia-pa" className="text-brand-primary hover:underline">King of Prussia</Link>
            {' '}·{' '}
            <Link href="/markets/state-college-pa" className="text-brand-primary hover:underline">State College</Link>
          </p>
        </div>
      </div>
    </>
  );
}
