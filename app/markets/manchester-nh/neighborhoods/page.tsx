/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { manchesterLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/manchester-nh/neighborhoods`;

export const metadata: Metadata = {
  title: 'Manchester NH Neighborhoods — Cash Home Buyers',
  description:
    'Neighborhood-by-neighborhood price ranges in Manchester NH. We buy houses in every Hillsborough County neighborhood — inherited, foreclosure, tenant-occupied, as-is.',
  alternates: { canonical: pageUrl },
};

export default function ManchesterNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        manchesterLocalBusinessSchema,
        articleSchema('Manchester NH Neighborhood Guide — Where We Buy Houses', pageUrl, '2026-04-16'),
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-blue-600 text-sm mb-2">
          <Link href="/markets/manchester-nh" className="hover:underline">Manchester NH</Link> › Neighborhoods
        </p>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">
          Manchester NH Neighborhoods — We Buy Houses Throughout Hillsborough County
        </h1>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-900">
            USA Home Buyers purchases properties in every Manchester neighborhood. Below are price ranges by area based on Zillow and Redfin data. Call 888-274-5006 for a property-specific offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Amoskeag</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$275,000-$350,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">North End</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$285,000-$365,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Beech Hill</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$295,000-$385,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Elmwood</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$270,000-$340,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Pinecrest</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$310,000-$405,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Glen Lake</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$320,000-$420,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">South Beech Street</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$265,000-$335,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-brand-dark mb-2">Upper Amoskeag</h3>
          <p className="text-sm text-gray-700 mb-1">Median price range: <strong>$280,000-$360,000</strong></p>
          <p className="text-sm text-gray-600">We buy in this neighborhood in any condition — inherited estates, rentals, pre-foreclosure, and direct seller situations.</p>
        </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Areas We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {['Nashua', 'Goffstown', 'Hooksett', 'Londonderry', 'Bedford', 'Auburn', 'Merrimack', 'Litchfield'].map(area => (
              <span key={area} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{area}</span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-sm">
            We buy houses throughout Hillsborough County and neighboring counties. If you're in the Manchester metro area and need to sell fast, call us — if your property is in our service area, we can make an offer.
          </p>
        </section>

        <CashOfferForm variant="inline" headline="Get a Cash Offer for Your Manchester NH Property" subheadline="Any neighborhood, any condition. Written offer in 24 hours." sourcePage="/markets/manchester-nh/neighborhoods" />
      </div>
    </>
  );
}
