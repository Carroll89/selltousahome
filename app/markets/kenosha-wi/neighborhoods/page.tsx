/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { kenoshWILocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/kenosha-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Kenosha WI Neighborhoods — Cash Home Buyers',
  description:
    'Neighborhood-by-neighborhood price ranges in Kenosha WI. We buy houses in every Kenosha County neighborhood — inherited, foreclosure, tenant-occupied, as-is.',
  alternates: { canonical: pageUrl },
};

export default function KenoshaNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        kenoshWILocalBusinessSchema,
        articleSchema('Kenosha WI Neighborhood Guide — Where We Buy Houses', pageUrl, '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/kenosha-wi" className="hover:underline">Kenosha WI</Link> › Neighborhoods
        </p>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">
          Kenosha WI Neighborhoods — We Buy Houses Throughout Kenosha County
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            USA Home Buyers purchases properties in every Kenosha neighborhood. Below are price ranges by area based on Zillow and Redfin data. Call 888-274-5006 for a property-specific offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Downtown Kenosha</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$185,000-$240,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Uptown</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$180,000-$225,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Allendale</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$215,000-$265,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Lincoln Park</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$190,000-$235,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Pleasant Prairie (North)</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$250,000-$320,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Silver Lake</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$225,000-$290,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Bristol</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$260,000-$350,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Somers</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$265,000-$340,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Areas We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {['Racine', 'Pleasant Prairie', 'Somers', 'Bristol', 'Winthrop Harbor', 'Zion IL', 'Antioch IL'].map(area => (
              <span key={area} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{area}</span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-sm">
            We buy houses throughout Kenosha County and neighboring counties. If you're in the Kenosha metro area and need to sell fast, call us — if your property is in our service area, we can make an offer.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Kenosha WI Property" subheadline="Any neighborhood, any condition. Written offer in 24 hours." sourcePage="/markets/kenosha-wi/neighborhoods" />
      </div>
    </>
  );
}
