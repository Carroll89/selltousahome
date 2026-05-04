/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { norwichLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/norwich-ct/neighborhoods`;

export const metadata: Metadata = {
  title: 'Norwich CT Neighborhoods — We Buy Houses Throughout New London County',
  description:
    'USA Home Buyers purchases houses in all Norwich CT neighborhoods and throughout New London County — Downtown Norwich, Norwichtown, Taftville, Greeneville, Yantic, Laurel Hill, New London, Groton, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Norwichtown', notes: 'Historic Norwich area with older homes, estates, and inherited-property situations.' },
  { name: 'East Norwich', notes: 'East-side residential. Mix of older capes and post-war homes. Solid demand from local buyers and investors. Full service area.' },
  { name: 'West Norwich', notes: 'West-side established neighborhood with mix of housing ages and types. Family-oriented market. Full service area.' },
  { name: 'South End / Downtown', notes: 'Older central Norwich near downtown. Victorian, Greek Revival, and historic homes. Strong character but often significant repair costs — strong cash buyer angle for deferred-maintenance properties.' },
  { name: 'North Norwich', notes: 'Northern Norwich neighborhoods. Mix of residential types. Full service area for cash and distressed situations.' },
  { name: 'Downtown Norwich', notes: 'Central Norwich homes, older housing stock, and mixed-use properties near local services.' },
  { name: 'Norwichtown', notes: 'Historic Norwich area with older homes, estates, and inherited-property situations.' },
  { name: 'Taftville', notes: 'Norwich village with older mill-era housing, multifamily stock, and as-is sale needs.' },
  { name: 'Greeneville', notes: 'Established Norwich neighborhood with older residential properties and investor demand.' },
  { name: 'Yantic', notes: 'Norwich village with single-family homes, estate properties, and as-is sale scenarios.' },
  { name: 'New London', notes: 'Nearby New London County city with older homes, rentals, and cash-sale needs.' },
  { name: 'Groton', notes: 'Nearby New London County market with owner-occupant, rental, and inherited-property scenarios.' },
];

export default function NorwichNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          norwichLocalBusinessSchema,
          articleSchema('Norwich CT Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01'),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/norwich-ct" className="hover:text-white">Norwich CT</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Norwich CT Neighborhoods — We Buy Houses Everywhere in New London County
          </h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">
          USA Home Buyers purchases homes throughout Norwich and New London County. Whether your
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
          Don't see your neighborhood listed? Call us — we buy throughout New London County and
          surrounding areas. 888-274-5006.
        </p>
        <Link href="/markets/norwich-ct" className="inline-block text-brand-primary hover:underline text-sm mb-8">
          ← Back to Norwich CT Market Page
        </Link>
        <CashOfferForm
          variant="footer"
          headline="Get a Cash Offer for Your Norwich CT Home"
          sourcePage="/markets/norwich-ct/neighborhoods"
        />
      </div>
    </>
  );
}
