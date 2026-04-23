/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { rochesterLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/rochester-ny/neighborhoods`;

export const metadata: Metadata = {
  title: 'Rochester NY Neighborhoods — Cash Home Buyers',
  description:
    'Neighborhood-by-neighborhood price ranges in Rochester NY. We buy houses in every Monroe County neighborhood — inherited, foreclosure, tenant-occupied, as-is.',
  alternates: { canonical: pageUrl },
};

export default function RochesterNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        rochesterLocalBusinessSchema,
        articleSchema('Rochester NY Neighborhood Guide — Where We Buy Houses', pageUrl, '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/rochester-ny" className="hover:underline">Rochester NY</Link> › Neighborhoods
        </p>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">
          Rochester NY Neighborhoods — We Buy Houses Throughout Monroe County
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            USA Home Buyers purchases properties in every Rochester neighborhood. Below are price ranges by area based on Zillow and Redfin data. Call 888-274-5006 for a property-specific offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">19th Ward</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$110,000-$155,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">South Wedge</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$145,000-$215,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Park Avenue</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$195,000-$290,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Corn Hill</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$170,000-$245,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Maplewood</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$120,000-$165,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Charlotte</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$115,000-$160,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Dutchtown</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$130,000-$175,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Brooks Landing</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$155,000-$210,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Areas We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {['Greece', 'Irondequoit', 'Brighton', 'Henrietta', 'Pittsford', 'Gates', 'Chili', 'Penfield', 'Webster'].map(area => (
              <span key={area} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{area}</span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-sm">
            We buy houses throughout Monroe County and neighboring counties. If you're in the Rochester metro area and need to sell fast, call us — if your property is in our service area, we can make an offer.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Rochester NY Property" subheadline="Any neighborhood, any condition. Written offer in 24 hours." sourcePage="/markets/rochester-ny/neighborhoods" />
      </div>
    </>
  );
}
