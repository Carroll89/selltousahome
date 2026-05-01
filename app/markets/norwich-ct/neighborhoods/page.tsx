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
    'USA Home Buyers purchases houses in all Norwich CT neighborhoods and throughout New London County — Penacook, East Norwich, West Norwich, Bow, Hooksett, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Penacook', notes: 'Northwest Norwich neighborhood with older mill-town character. Colonial and cape cod housing stock. Good cash buyer angle for inherited homes, deferred maintenance, and estate situations.' },
  { name: 'East Norwich', notes: 'East-side residential. Mix of older capes and post-war homes. Solid demand from local buyers and investors. Full service area.' },
  { name: 'West Norwich', notes: 'West-side established neighborhood with mix of housing ages and types. Family-oriented market. Full service area.' },
  { name: 'South End / Downtown', notes: 'Older central Norwich near the state capitol. Victorian, Greek Revival, and historic homes. Strong character but often significant repair costs — strong cash buyer angle for deferred-maintenance properties.' },
  { name: 'North Norwich', notes: 'Northern Norwich neighborhoods. Mix of residential types. Full service area for cash and distressed situations.' },
  { name: 'Bow', notes: 'Adjacent suburban town south of Norwich. Mix of older farmhouses and newer construction. Strong owner-occupant and investor demand.' },
  { name: 'Hooksett', notes: 'Adjacent town south of Norwich on the Merrimack River. Growing suburban market with good access to Manchester. Full service area.' },
  { name: 'Pembroke', notes: 'Adjacent town southeast of Norwich. Older rural-residential stock with steady investor interest. Full service area.' },
  { name: 'Canterbury', notes: 'Rural town north of Norwich. Older farmhouses and character properties. Estate and inherited-property angle common.' },
  { name: 'Dunbarton', notes: 'Rural town west of Norwich. Older rural-residential. Full service area — cash angle for inherited and estate properties.' },
  { name: 'Hopkinton', notes: 'Town west of Norwich. Mix of rural and suburban residential. Full service area.' },
  { name: 'Loudon', notes: 'Town northeast of Norwich. Older rural-residential and newer construction. Full service area.' },
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
          property is a Victorian near the state capitol, a cape cod in Penacook, or a rural-
          residential in Canterbury, we make cash offers as-is in any condition. Call 888-274-5006.
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
