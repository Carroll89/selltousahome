/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { cantonLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/canton-oh/neighborhoods`;

export const metadata: Metadata = {
  title: 'Canton OH Neighborhoods — We Buy Houses Throughout Stark County',
  description: 'USA Home Buyers purchases houses in all Canton OH neighborhoods and throughout Stark County — Central Canton, Southwest Canton, North Central Canton, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Central Canton', notes: 'Older central-city housing, more repair/title/code complexity. Very high investor interest for as-is, probate, vacant, and rehab leads. Compete Score 47.' },
  { name: 'Southwest Canton', notes: 'Working-class southwest neighborhoods; mix of older single-family and rentals. Fast DOM (25 days). Strong resale/rental demand. Compete Score 79.' },
  { name: 'North Central Canton', notes: 'Stronger owner-occupant demand; stable north-side stock. Medium-high investor interest. Compete Score 69.' },
  { name: 'Northeast Canton', notes: 'Mixed older residential and retail corridors. Good for inherited/rental content. Medium-high investor interest.' },
  { name: 'Colonial Heights', notes: 'Urban north/east-side residential with older single-family stock. Retail-resale potential. Moderate investor demand.' },
  { name: 'Historic Ridgewood', notes: 'Historic district with Tudor/Colonial Revival homes and brick streets. Strong "as-is historic home" angle when repairs are expensive.' },
  { name: 'Massillon', notes: 'Adjacent Stark County city. Redfin March 2026 median $171,000, 43 DOM. Full service area. Future dedicated page candidate.' },
  { name: 'North Canton', notes: 'Nearby Stark County city. Higher-price north-side market. Median ~$283,000 (Nov 2025). Estate and relocation situations.' },
  { name: 'Jackson Township', notes: 'Canton/Massillon suburban township. Higher-value suburban leads, some older stock.' },
  { name: 'Perry Township', notes: 'West/southwest Canton township. Close-in service area.' },
  { name: 'Plain Township', notes: 'North/east Canton township. Includes suburban neighborhoods around Canton/North Canton.' },
  { name: 'Alliance', notes: 'Eastern Stark County city. Older housing stock. Full service area.' },
];

export default function CantonNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[cantonLocalBusinessSchema, articleSchema('Canton OH Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/canton-oh" className="hover:text-white">Canton OH</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Canton OH Neighborhoods — We Buy Houses Everywhere in Stark County</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">USA Home Buyers purchases homes throughout Canton and the broader Stark County area. Whether your property is in a central Canton neighborhood or a surrounding Stark County community, we make cash offers as-is in any condition. Call 888-274-5006.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-8">Don't see your neighborhood listed? Call us — we buy throughout Stark County. 888-274-5006.</p>
        <Link href="/markets/canton-oh" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Canton OH Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Canton OH Home" sourcePage="/markets/canton-oh/neighborhoods" />
      </div>
    </>
  );
}
