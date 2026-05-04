/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { northamptonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/northampton-ma/neighborhoods`;

export const metadata: Metadata = {
  title: 'Northampton MA Neighborhoods — We Buy Houses Throughout Hampshire County',
  description:
    'USA Home Buyers purchases houses in all Northampton MA neighborhoods and throughout Hampshire County — Downtown Northampton, Florence, Leeds, Bay State, Round Hill, Easthampton, Amherst, Hadley, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Florence', notes: 'Established Northampton village with older single-family homes, multifamily properties, and estate-sale situations.' },
  { name: 'East Northampton', notes: 'East-side residential. Mix of older capes and post-war homes. Solid demand from local buyers and investors. Full service area.' },
  { name: 'West Northampton', notes: 'West-side established neighborhood with mix of housing ages and types. Family-oriented market. Full service area.' },
  { name: 'South End / Downtown', notes: 'Older central Northampton near downtown. Victorian, Greek Revival, and historic homes. Strong character but often significant repair costs — strong cash buyer angle for deferred-maintenance properties.' },
  { name: 'North Northampton', notes: 'Northern Northampton neighborhoods. Mix of residential types. Full service area for cash and distressed situations.' },
  { name: 'Downtown Northampton', notes: 'Central Northampton homes, mixed-use properties, and older housing stock near shops and services.' },
  { name: 'Florence', notes: 'Established Northampton village with older single-family homes, multifamily properties, and estate-sale situations.' },
  { name: 'Leeds', notes: 'Residential village north of downtown with older homes and inherited-property scenarios.' },
  { name: 'Easthampton', notes: 'Nearby Hampshire County city with older homes, multifamily stock, and as-is sale needs.' },
  { name: 'Amherst', notes: 'Nearby Hampshire County market with rentals, estates, and owner-occupant housing.' },
  { name: 'Hadley', notes: 'Nearby Hampshire County town with rural and suburban properties; full service area.' },
  { name: 'South Hadley', notes: 'Nearby Hampshire County community with older housing stock and as-is sale needs.' },
];

export default function NorthamptonNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          northamptonLocalBusinessSchema,
          articleSchema('Northampton MA Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01'),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/northampton-ma" className="hover:text-white">Northampton MA</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Northampton MA Neighborhoods — We Buy Houses Everywhere in Hampshire County
          </h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">
          USA Home Buyers purchases homes throughout Northampton and Hampshire County. Whether your
          property is an older home near downtown, a cape cod in Norwichtown or Taftville, or a rural-
          residential property elsewhere in Hampshire County, we make cash offers as-is in any condition. Call 888-274-5006.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map((n) => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-8">
          Don't see your neighborhood listed? Call us — we buy throughout Hampshire County and
          surrounding areas. 888-274-5006.
        </p>
        <Link href="/markets/northampton-ma" className="inline-block text-brand-primary hover:underline text-sm mb-8">
          ← Back to Northampton MA Market Page
        </Link>
        <CashOfferForm
          variant="footer"
          headline="Get a Cash Offer for Your Northampton MA Home"
          sourcePage="/markets/northampton-ma/neighborhoods"
        />
      </div>
    </>
  );
}
