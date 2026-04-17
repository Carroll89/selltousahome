/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { springfieldLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/springfield-ma/neighborhoods`;

export const metadata: Metadata = {
  title: 'Springfield MA Neighborhoods — Cash Home Buyers',
  description:
    'Neighborhood-by-neighborhood price ranges in Springfield MA. We buy houses in every Hampden County neighborhood — inherited, foreclosure, tenant-occupied, as-is.',
  alternates: { canonical: pageUrl },
};

export default function SpringfieldNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        springfieldLocalBusinessSchema,
        articleSchema('Springfield MA Neighborhood Guide — Where We Buy Houses', pageUrl, '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/springfield-ma" className="hover:underline">Springfield MA</Link> › Neighborhoods
        </p>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">
          Springfield MA Neighborhoods — We Buy Houses Throughout Hampden County
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            USA Home Buyers purchases properties in every Springfield neighborhood. Below are price ranges by area based on Zillow and Redfin data. Call 888-440-5250 for a property-specific offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Forest Park</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$195,000-$230,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Pine Point</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$160,000-$210,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Six Corners</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$145,000-$185,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Hungry Hill</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$140,000-$180,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">McKnight</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$175,000-$220,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">East Springfield</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$130,000-$165,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Indian Orchard</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$140,000-$175,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">North End</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$120,000-$160,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Areas We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {['West Springfield', 'Agawam', 'Chicopee', 'Ludlow', 'Wilbraham', 'Longmeadow', 'Westfield', 'Holyoke'].map(area => (
              <span key={area} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{area}</span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-sm">
            We buy houses throughout Hampden County and neighboring counties. If you're in the Springfield metro area and need to sell fast, call us — if your property is in our service area, we can make an offer.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Springfield MA Property" subheadline="Any neighborhood, any condition. Written offer in 24 hours." sourcePage="/markets/springfield-ma/neighborhoods" />
      </div>
    </>
  );
}
