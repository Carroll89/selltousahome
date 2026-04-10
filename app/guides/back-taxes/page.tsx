import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sell Your House with Back Taxes in PA | Tax Liens & Delinquent Taxes',
  description:
    'Selling a house with back taxes or a tax lien in Pennsylvania? Back taxes don\'t block a cash sale — they\'re paid from proceeds at closing. Cash offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/guides/back-taxes` },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my house if I have back property taxes in Pennsylvania?',
    answer:
      'Yes. Outstanding property taxes don\'t prevent you from selling your house. Pennsylvania delinquent taxes become a lien on the property, which shows up in the title search and gets paid from your sale proceeds at closing. You don\'t need to pay taxes upfront before selling — the sale pays them.',
  },
  {
    question: 'What is a tax lien on a property?',
    answer:
      'When property taxes go unpaid in Pennsylvania, the county (Dauphin, Lehigh, etc.) records a lien against the property. A lien is a legal claim that must be satisfied when the property is sold. The title company will identify all liens during the title search and pay them from closing proceeds before you receive the remaining balance.',
  },
  {
    question: 'What happens if I owe more in back taxes than my house is worth?',
    answer:
      'If delinquent taxes and any other liens exceed your property\'s value, you\'re in an underwater situation. In Pennsylvania, this is relatively uncommon for property taxes alone. Contact the county Tax Claim Bureau — most counties have installment payment programs or offer discounts on delinquent taxes. A real estate attorney can help evaluate options including a short sale or deed in lieu.',
  },
  {
    question: 'How far back can Pennsylvania go to collect delinquent property taxes?',
    answer:
      'Pennsylvania has no statute of limitations on real property tax liens — they remain on the property until paid. However, after two years of delinquency, the county Tax Claim Bureau can begin the upset sale process. After that, properties can go to repository and eventually judicial sale. Acting before that process advances protects your equity and credit.',
  },
  {
    question: 'What is a Pennsylvania upset tax sale?',
    answer:
      'When property taxes go unpaid for two years, Pennsylvania counties can schedule the property for an "upset sale" — a public auction where the property can be sold for the delinquent taxes plus costs. Unlike a sheriff sale (which is driven by mortgage default), tax upset sales are driven by the county Tax Claim Bureau. Selling the property before an upset sale is generally better for the homeowner.',
  },
  {
    question: 'Will selling my house affect my IRS back taxes?',
    answer:
      'Federal IRS tax liens are also attached to property and must be paid or resolved at closing. If you have an IRS lien, the title company will contact the IRS for a payoff amount. IRS liens have priority rules that affect how proceeds are distributed. This is more complex than local property tax liens — an attorney\'s involvement is recommended.',
  },
  {
    question: 'How does a cash sale help with back taxes?',
    answer:
      'A cash sale closes quickly, which stops the accumulation of additional penalties and interest. It also eliminates the financing contingency risk — conventional mortgage buyers can have deals fall through if liens are complex. A cash buyer handles the lien resolution at closing without requiring you to pre-pay taxes or get mortgage approval.',
  },
];

const pageUrl = `${SITE_URL}/guides/back-taxes`;

export default function BackTaxesGuidePage() {
  return (
    <>
      <SchemaMarkup schema={[
        articleSchema('Selling a House with Back Taxes in Pennsylvania', pageUrl),
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
              <Link href="/" className="hover:text-white">USA Home Buyers</Link> › Guides › Back Taxes
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Selling Your PA House with Back Property Taxes
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              Delinquent property taxes don&apos;t have to stop your sale. In Pennsylvania, back taxes become a
              lien that gets paid from your closing proceeds — you don&apos;t need to pay them upfront.
              We buy houses with tax liens as-is.
            </p>
            <div className="bg-yellow-900/50 border border-yellow-500/30 rounded-lg p-4 mb-4 text-sm">
              <p className="font-semibold text-yellow-200 mb-1">Upset sale scheduled?</p>
              <p className="text-yellow-100">
                Call <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE}</a> immediately —
                a cash sale can often close before the tax sale date.
              </p>
            </div>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/guides/back-taxes" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>

          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">The Key Thing to Understand</h2>
            <p className="text-gray-700 text-sm">
              Property tax liens don&apos;t prevent you from selling. They follow the property, not you.
              At closing, the title company identifies all outstanding liens and pays them from your sale proceeds.
              If your home has $8,000 in delinquent taxes and you sell for $150,000, you receive $142,000
              minus any mortgage balance and closing costs. The taxes are not your upfront burden.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">How Pennsylvania Property Tax Liens Work</h2>
            <div className="space-y-3">
              {[
                {
                  step: '1',
                  title: 'Taxes go unpaid',
                  detail: 'Property taxes become delinquent after January 1 of the year following assessment. Penalties and interest accrue.',
                },
                {
                  step: '2',
                  title: 'County Tax Claim Bureau takes over',
                  detail: 'After one year of delinquency, the county Tax Claim Bureau begins the collection process. The debt is formally liened against the property.',
                },
                {
                  step: '3',
                  title: 'Upset sale eligibility (year 2+)',
                  detail: 'After two years of delinquency, the property becomes eligible for an upset tax sale — a public auction. You can still sell privately before this happens.',
                },
                {
                  step: '4',
                  title: 'Cash sale before the upset sale',
                  detail: 'A private sale (including a cash sale to us) can close before the upset sale, paying all delinquent taxes from proceeds. You keep any remaining equity.',
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
            <h2 className="text-2xl font-bold text-brand-dark mb-4">County Tax Claim Bureaus in Our Service Area</h2>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Dauphin County Tax Claim Bureau (Harrisburg)</p>
                <p className="text-gray-600">Dauphin County Courthouse, 101 Market Street, Harrisburg PA 17101</p>
                <p className="text-gray-600">
                  <a href="https://www.dauphincounty.gov" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">dauphincounty.gov</a>
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-brand-dark">Lehigh County Tax Claim Bureau (Allentown)</p>
                <p className="text-gray-600">Lehigh County Courthouse, 455 W Hamilton St, Allentown PA 18101</p>
                <p className="text-gray-600">
                  <a href="https://www.lehighcounty.org" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">lehighcounty.org</a>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Why a Cash Sale Works Better Than Waiting</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Taxes compound daily', desc: 'Delinquent taxes accrue interest and penalties. Every month you wait, the lien grows. A fast cash close stops the clock.' },
                { title: 'No lender complications', desc: 'Conventional mortgage buyers require a clear title. Complex tax lien situations can kill traditional deals mid-stream. Cash buyers don\'t have this problem.' },
                { title: 'Protect your equity', desc: 'If you wait for an upset sale, you receive nothing above the tax lien — any equity is eliminated. A private sale preserves whatever equity exists.' },
                { title: 'One close, everything resolved', desc: 'The title company handles payoffs of all delinquent taxes and liens at closing. You don\'t coordinate separately with the Tax Claim Bureau.' },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <h3 className="font-semibold text-brand-dark text-sm mb-2">✓ {item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <CashOfferForm
            variant="inline"
            headline="Get a Cash Offer — Tax Liens Welcome"
            subheadline="Back taxes are paid from closing proceeds. No upfront payment required from you."
            sourcePage="/guides/back-taxes"
          />

          <FAQSection items={FAQ_ITEMS} heading="Back Taxes & Tax Liens — Common Questions" />

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Related:{' '}
              <Link href="/guides/foreclosure" className="text-brand-primary hover:underline">PA Foreclosure Guide</Link>{' '}
              ·{' '}
              <Link href="/markets/harrisburg-pa/foreclosure" className="text-brand-primary hover:underline">Harrisburg Foreclosure</Link>{' '}
              ·{' '}
              <Link href="/markets/allentown-pa/foreclosure" className="text-brand-primary hover:underline">Allentown Foreclosure</Link>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
