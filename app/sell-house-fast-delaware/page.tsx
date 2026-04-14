/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell Your House Fast in Delaware',
  description:
    'Cash home buyers in Delaware. We buy houses as-is in Wilmington, Newark, New Castle, and throughout New Castle County. Written offer in 24 hours.',
  alternates: { canonical: `${SITE_URL}/sell-house-fast-delaware` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Delaware', item: `${SITE_URL}/sell-house-fast-delaware` },
  ],
};

export default function DelawareStatePage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, breadcrumbSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/wilmington-de-hero-640.jpg 640w, /images/optimized/wilmington-de-hero-828.jpg 828w, /images/optimized/wilmington-de-hero-1080.jpg 1080w, /images/optimized/wilmington-de-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/wilmington-de-hero-1200.jpg"
            alt="Wilmington Delaware homes — sell your house fast for cash"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your House Fast in Delaware — Cash Offer in 24 Hours
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              USA Home Buyers purchases homes throughout Delaware for cash — any condition, any situation.
              No repairs, no agent fees, close in 7-14 days. Written cash offer within 24 hours.
              We cover all closing costs including Delaware's transfer tax.
            </p>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg px-6 py-3 text-lg shadow-lg transition-colors mb-3">
              📞 Call Now — We Answer 24/7
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/sell-house-fast-delaware" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Delaware Markets We Serve</h2>
          <p className="text-gray-700 mb-6">
            Select your city below for market-specific data, transfer tax details, and local legal context.
          </p>
          <div className="grid md:grid-cols-1 gap-4">
            <Link
              href="/markets/wilmington-de"
              className="bg-white border-2 border-brand-primary rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-1">Wilmington, DE</h3>
                  <p className="text-gray-600 text-sm">New Castle County · Median sale price $210,000 · 72 days DOM</p>
                  <p className="text-gray-500 text-xs mt-1">Transfer tax: 4% total (2.5% DE state + 1.5% City of Wilmington)</p>
                </div>
                <span className="text-brand-primary text-2xl">→</span>
              </div>
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Additional Delaware markets coming soon. Call us at{' '}
            <a href={`tel:${PHONE}`} className="text-brand-primary hover:underline">{PHONE}</a>{' '}
            if your city isn't listed — we may still be able to help.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Selling in Delaware — Key Differences from Other States</h2>
          <p className="text-gray-700 mb-4">
            Delaware has several legal and tax characteristics that differ significantly from neighboring Pennsylvania,
            Maryland, and New Jersey. Sellers should understand these before listing or accepting any offer:
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">Transfer Tax — Delaware's Highest Rate in New Castle County</h3>
              <p className="text-gray-700 text-sm">
                Delaware's base state transfer tax is 3%. However, in counties and municipalities that levy a
                local transfer tax, the state rate drops to 2.5% (and the local rate applies on top). In
                Wilmington city limits, this means: 2.5% state + 1.5% City of Wilmington = 4.0% total.
                New Castle County overall applies the maximum 4% rate. Kent County: 3%. Sussex County: 3.5%.
                Source:{' '}
                <a href="https://financefiles.delaware.gov/docs/rtt.pdf" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Delaware Division of Revenue</a>.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">Foreclosure — Judicial Process, No Right of Redemption</h3>
              <p className="text-gray-700 text-sm">
                Delaware is a judicial foreclosure state. All foreclosures go through the New Castle County
                Superior Court. The typical timeline is 170-210 days by statute; 6-9 months in practice.
                Critically, Delaware provides no post-sale right of redemption — once the court confirms the
                sheriff's sale, the property is permanently transferred. This makes acting before the sale
                especially important. Sources:{' '}
                <a href="https://www.nolo.com/legal-encyclopedia/delaware-foreclosure-laws-and-procedures.html" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">Nolo Delaware Foreclosure Laws</a>;{' '}
                <a href="https://www.amerinotexchange.com/foreclosure-law/delaware/" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">amerinotexchange.com</a>.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">Probate — Register of Wills (Court of Chancery)</h3>
              <p className="text-gray-700 text-sm">
                Delaware's probate system operates through the Register of Wills as a branch of the Delaware
                Court of Chancery — a unified court system, not county-level Orphans' Courts as in Pennsylvania.
                The New Castle County Register of Wills is at 800 N. French Street, Wilmington DE 19801
                (302-395-7800;{' '}
                <a href="https://www.newcastlede.gov/152/Register-of-Wills" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">newcastlede.gov/152</a>).
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-5">
              <h3 className="font-bold text-brand-dark mb-2">No Delaware Inheritance Tax</h3>
              <p className="text-gray-700 text-sm">
                Delaware does not impose a state inheritance tax. Federal estate tax may apply for large estates
                (threshold: $13.61 million in 2026). Capital gains on inherited property are calculated from
                the stepped-up basis at date of death, not original purchase price.
              </p>
            </div>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Get a Delaware Cash Offer"
          subheadline="Written offer in 24 hours. We cover all closing costs including Delaware's transfer tax."
          sourcePage="/sell-house-fast-delaware"
        />

        <nav className="border-t pt-6 mt-8 text-sm text-gray-500">
          <Link href="/" className="text-brand-primary hover:underline">← Home</Link>
        </nav>
      </div>
    </>
  );
}
