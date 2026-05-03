/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { organizationSchema, faqSchema, articleSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/sell-house-fast-missouri`;

export const metadata: Metadata = {
  title: 'Sell My House Fast Missouri | Cash Buyers — No Transfer Tax',
  description:
    'We buy houses for cash throughout Missouri. No Missouri transfer tax. Written offer in 24 hours, close in 7 days. Non-judicial foreclosure, probate, and selling costs explained.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Does Missouri have a real estate transfer tax?',
    answer: "No. Missouri has no state real estate transfer tax and no local deed transfer tax in St. Louis City or County. This is a significant seller advantage compared to neighboring Illinois or Pennsylvania. City and county recording fees still apply, but no transfer tax at any level.",
  },
  {
    question: 'Is Missouri a judicial or non-judicial foreclosure state?',
    answer: "Missouri primarily uses non-judicial (power of sale) foreclosure via deed of trust under RSMo § 443.310. The trustee publishes notice in a newspaper for three consecutive weeks and can conduct the sale without court involvement. Typical timeline: 60-90 days from notice. Note: RSMo § 443.410 redemption provisions involve specific conditions -- consult a Missouri-licensed real estate attorney for guidance on redemption rights in your specific situation.",
  },
  {
    question: 'What is the difference between St. Louis City and St. Louis County?',
    answer: "St. Louis City is an independent city -- it is NOT part of St. Louis County. They are completely separate jurisdictions with different governments, courts, recorders, and tax systems. St. Louis City Circuit Court (22nd Judicial Circuit) is at 10 N. Tucker Blvd. St. Louis County Probate (21st Judicial Circuit) is in Clayton. When buying or selling a City of St. Louis property, all filings go through City offices -- never County offices.",
  },
  {
    question: 'How does probate work in Missouri?',
    answer: "Missouri uses Circuit Court for probate (each county and independent city). For St. Louis City properties, probate is handled by the 22nd Judicial Circuit (City court), 10 N. Tucker Blvd., St. Louis MO 63101, (314) 622-4498. For St. Louis County properties, the 21st Judicial Circuit handles probate in Clayton. Missouri attorney recommendation is advisable for complex estate sales.",
  },
  {
    question: 'Does Missouri require an attorney at closings?',
    answer: "Missouri does not require an attorney at real estate closings. Title companies handle most residential closings. Attorneys are optional but commonly used for complex transactions.",
  },
];

export default function MissouriHubPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Sell Your House Fast in Missouri -- Cash Home Buyers', pageUrl, '2026-05-03'),
        faqSchema(FAQ_ITEMS),
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Sell House Fast Missouri', item: pageUrl },
          ],
        },
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/st-louis-mo-hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/st-louis-mo-hero.webp"
            alt="Sell your house fast in Missouri -- cash buyers"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell My House Fast in Missouri -- No Transfer Tax, Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases houses throughout Missouri for cash in any condition -- no repairs, no cleaning, no agent fees. No Missouri transfer tax. Written cash offer within 24 hours, close in as few as 7 days. Select your city below.
            </p>
            <div className="flex flex-wrap gap-3 text-blue-100 text-sm mb-4">
              <span>&#x2713; No repairs</span>
              <span>&#x2713; No transfer tax</span>
              <span>&#x2713; No commissions</span>
              <span>&#x2713; Close in 7 days</span>
            </div>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3">
              Call Now -- We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/sell-house-fast-missouri" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <section className="my-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Missouri Markets We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-brand-dark mb-2">St. Louis City, MO</h3>
              <p className="text-gray-700 text-sm mb-3">
                St. Louis City (independent city -- NOT St. Louis County). Red brick Federal row homes, Dutchtown, South City, Benton Park. Median sale price $250,000 (Redfin, Mar 2026). Non-judicial foreclosure. No transfer tax.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>&#x2192; No Missouri transfer tax</li>
                <li>&#x2192; DOM: 31 days median</li>
                <li>&#x2192; 22nd Circuit Court handles City probate</li>
              </ul>
              <Link href="/markets/st-louis-mo" className="inline-block bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Sell Your St. Louis Home &#x2192;
              </Link>
            </div>
          </div>
        </section>

        <div className="my-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="text-sm font-bold text-brand-primary mb-2">St. Louis City vs. St. Louis County</p>
          <p className="text-sm text-gray-700">
            St. Louis City and St. Louis County are completely separate jurisdictions in Missouri. St. Louis City is an independent city -- NOT part of St. Louis County. They have different governments, courts, recorders, and tax systems. The City Circuit Court (22nd Judicial Circuit) is downtown at 10 N. Tucker Blvd. The County Probate Court (21st Judicial Circuit) is in Clayton. Always confirm which jurisdiction applies to your property.
          </p>
        </div>

        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
            Selling a House in Missouri -- What You Need to Know
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-brand-dark mb-2">No Transfer Tax</h3>
              <p className="text-gray-700 text-sm">
                Missouri has no state real estate transfer tax -- and neither St. Louis City nor St. Louis County imposes a local deed transfer tax. This is a significant seller advantage vs. neighboring Illinois. Recording fees and title costs still apply, but no transfer tax.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Non-Judicial Foreclosure</h3>
              <p className="text-gray-700 text-sm">
                Missouri primarily uses non-judicial (power of sale) foreclosure via deed of trust under RSMo § 443.310. The trustee publishes notice for three consecutive weeks and can conduct the sale without court involvement. Typical timeline: 60-90 days from notice. Note: RSMo § 443.410 involves specific redemption conditions -- consult an attorney for guidance specific to your situation.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">Probate (Circuit Court)</h3>
              <p className="text-gray-700 text-sm">
                Missouri uses Circuit Court for probate. For St. Louis City properties, the 22nd Judicial Circuit (City court) handles estate administration. For St. Louis County properties, the 21st Judicial Circuit in Clayton handles probate. These are entirely separate courts for separate jurisdictions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-2">No Attorney Required at Closing</h3>
              <p className="text-gray-700 text-sm">
                Missouri does not require an attorney at real estate closings. Title companies handle most residential closings. Attorneys are optional but recommended for complex transactions, contested estates, or foreclosure workouts.
              </p>
            </div>
          </div>
        </section>

        <section className="my-10 bg-brand-light rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Missouri Real Estate -- Key Facts for Sellers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Missouri transfer tax', 'None -- Missouri abolished real estate transfer tax'],
                  ['St. Louis City local tax', 'None -- no local deed transfer tax in St. Louis City'],
                  ['Foreclosure type', 'Non-judicial (deed of trust) -- RSMo § 443.310; ~60-90 days from notice'],
                  ['Probate system', 'Circuit Court (each county/city) -- City = 22nd Circuit; County = 21st Circuit'],
                  ['Attorney required at closing', 'No -- title companies handle most residential closings'],
                  ['Seller disclosure', 'Required under RSMo § 339.730 for most residential sales'],
                  ['No state inheritance tax', 'Missouri has no state inheritance or estate tax'],
                  ['St. Louis City vs. County', 'Separate jurisdictions with different courts, recorders, and governments'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-200">
                    <td className="py-3 pr-6 font-medium text-brand-dark w-1/3">{label}</td>
                    <td className="py-3 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="Missouri Real Estate FAQs for Sellers" />

        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Missouri Home Fast?"
          subheadline="No obligation. No fees. No transfer tax. Written offer in 24 hours."
          sourcePage="/sell-house-fast-missouri"
        />
      </div>
    </>
  );
}
