/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { concordLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/concord-nh/neighborhoods`;

export const metadata: Metadata = {
  title: 'Concord NH Neighborhoods — We Buy Houses Throughout Merrimack County',
  description:
    'USA Home Buyers purchases houses in all Concord NH neighborhoods and throughout Merrimack County — Penacook, East Concord, West Concord, Bow, Hooksett, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Penacook', notes: 'Northwest Concord neighborhood with older mill-town character. Colonial and cape cod housing stock. Good cash buyer angle for inherited homes, deferred maintenance, and estate situations.' },
  { name: 'East Concord', notes: 'East-side residential. Mix of older capes and post-war homes. Solid demand from local buyers and investors. Full service area.' },
  { name: 'West Concord', notes: 'West-side established neighborhood with mix of housing ages and types. Family-oriented market. Full service area.' },
  { name: 'South End / Downtown', notes: 'Older central Concord near the state capitol. Victorian, Greek Revival, and historic homes. Strong character but often significant repair costs — strong cash buyer angle for deferred-maintenance properties.' },
  { name: 'North Concord', notes: 'Northern Concord neighborhoods. Mix of residential types. Full service area for cash and distressed situations.' },
  { name: 'Bow', notes: 'Adjacent suburban town south of Concord. Mix of older farmhouses and newer construction. Strong owner-occupant and investor demand.' },
  { name: 'Hooksett', notes: 'Adjacent town south of Concord on the Merrimack River. Growing suburban market with good access to Manchester. Full service area.' },
  { name: 'Pembroke', notes: 'Adjacent town southeast of Concord. Older rural-residential stock with steady investor interest. Full service area.' },
  { name: 'Canterbury', notes: 'Rural town north of Concord. Older farmhouses and character properties. Estate and inherited-property angle common.' },
  { name: 'Dunbarton', notes: 'Rural town west of Concord. Older rural-residential. Full service area — cash angle for inherited and estate properties.' },
  { name: 'Hopkinton', notes: 'Town west of Concord. Mix of rural and suburban residential. Full service area.' },
  { name: 'Loudon', notes: 'Town northeast of Concord. Older rural-residential and newer construction. Full service area.' },
];

export default function ConcordNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          concordLocalBusinessSchema,
          articleSchema('Concord NH Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01'),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/concord-nh" className="hover:text-white">Concord NH</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Concord NH Neighborhoods — We Buy Houses Everywhere in Merrimack County
          </h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">
          USA Home Buyers purchases homes throughout Concord and Merrimack County. Whether your
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
          Don't see your neighborhood listed? Call us — we buy throughout Merrimack County and
          surrounding areas. 888-274-5006.
        </p>
        <Link href="/markets/concord-nh" className="inline-block text-brand-primary hover:underline text-sm mb-8">
          ← Back to Concord NH Market Page
        </Link>
        <CashOfferForm
          variant="footer"
          headline="Get a Cash Offer for Your Concord NH Home"
          sourcePage="/markets/concord-nh/neighborhoods"
        />
      </div>
    </>
  );
}
