/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { worcesterLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/worcester-ma/neighborhoods`;

export const metadata: Metadata = {
  title: 'Worcester MA Neighborhoods — Cash Home Buyers',
  description:
    'Neighborhood-by-neighborhood price ranges in Worcester MA. We buy houses in every Worcester County neighborhood — inherited, foreclosure, tenant-occupied, as-is.',
  alternates: { canonical: pageUrl },
};

export default function WorcesterNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        worcesterLocalBusinessSchema,
        articleSchema('Worcester MA Neighborhood Guide — Where We Buy Houses', pageUrl, '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/worcester-ma" className="hover:underline">Worcester MA</Link> › Neighborhoods
        </p>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">
          Worcester MA Neighborhoods — We Buy Houses Throughout Worcester County
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            USA Home Buyers purchases properties in every Worcester neighborhood. Below are price ranges by area based on Zillow and Redfin data. Call 888-440-5250 for a property-specific offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Main South</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$225,000-$285,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Piedmont</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$230,000-$295,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Grafton Hill</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$250,000-$320,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Belmont Hill</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$315,000-$420,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Tatnuck</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$310,000-$405,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Burncoat</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$285,000-$370,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Indian Hill</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$330,000-$440,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Vernon Hill</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$265,000-$345,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Areas We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {['Shrewsbury', 'Auburn', 'Millbury', 'Grafton', 'Holden', 'Paxton', 'Leicester', 'Webster', 'Fitchburg'].map(area => (
              <span key={area} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{area}</span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-sm">
            We buy houses throughout Worcester County and neighboring counties. If you're in the Worcester metro area and need to sell fast, call us — if your property is in our service area, we can make an offer.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Worcester MA Property" subheadline="Any neighborhood, any condition. Written offer in 24 hours." sourcePage="/markets/worcester-ma/neighborhoods" />
      </div>
    </>
  );
}
