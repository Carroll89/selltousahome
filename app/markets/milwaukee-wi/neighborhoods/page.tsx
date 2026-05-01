/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { milwaukeeLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/milwaukee-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Milwaukee WI Neighborhoods — We Buy Houses Throughout Milwaukee County',
  description: 'USA Home Buyers purchases houses in all Milwaukee WI neighborhoods and throughout Milwaukee County — Bay View, Riverwest, Sherman Park, Washington Heights, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Bay View', notes: 'Lake-adjacent older homes and bungalows. High demand, tighter margins. Great character homes, often with deferred maintenance.' },
  { name: 'Riverwest', notes: 'Duplex and rental demand near downtown. German duplexes and older frame homes. Strong inherited/rental angle.' },
  { name: 'Washington Heights', notes: 'Historic west-side housing. Owner-occupant + rehab appeal. Pre-war bungalows and Craftsman homes.' },
  { name: "Sherman Park", notes: 'Strongest rehab/cash-buyer affordability play. Older stock and repair risk. Very strong investor interest.' },
  { name: "Walker's Point", notes: 'Mixed industrial/residential, redevelopment corridor. Investor/speculative interest.' },
  { name: 'Lower East Side', notes: 'Condo/rental-heavy. Longer DOM, condition/HOA complexity. Urban walkable but slower timelines.' },
  { name: 'Downtown Milwaukee', notes: 'Condo/urban inventory. Higher price, slower timelines. Less classic cash-buyer fit.' },
  { name: 'West Allis', notes: 'Adjacent inner-ring city. Older single-family and duplex stock. Full service area.' },
  { name: 'Wauwatosa', notes: 'Adjacent west side. Higher-value older homes and inherited-property potential. Full service area.' },
  { name: 'Shorewood', notes: 'North shore inner-ring. Older housing and estate sales. Full service area.' },
  { name: 'Greenfield', notes: 'Southwest suburban with older ranch stock. Full service area.' },
  { name: 'South Milwaukee', notes: 'South shore working-class older homes. Full service area.' },
];

export default function MilwaukeeNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[milwaukeeLocalBusinessSchema, articleSchema('Milwaukee WI Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/milwaukee-wi" className="hover:text-white">Milwaukee WI</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Milwaukee WI Neighborhoods — We Buy Houses Everywhere in Milwaukee County</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">USA Home Buyers purchases homes throughout Milwaukee and the broader Milwaukee County area. Whether your property is in a historic Milwaukee neighborhood or a nearby Milwaukee County community, we make cash offers as-is in any condition. Call 888-274-5006.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-8">Don't see your neighborhood listed? Call us — we buy throughout Milwaukee County. 888-274-5006.</p>
        <Link href="/markets/milwaukee-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Milwaukee WI Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Milwaukee WI Home" sourcePage="/markets/milwaukee-wi/neighborhoods" />
      </div>
    </>
  );
}
