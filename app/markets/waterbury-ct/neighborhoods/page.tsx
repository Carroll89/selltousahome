/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { waterburyLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/waterbury-ct/neighborhoods`;

export const metadata: Metadata = {
  title: 'Waterbury CT Neighborhoods — We Buy Houses Throughout New Haven County',
  description: 'USA Home Buyers purchases houses in all Waterbury CT neighborhoods and throughout New Haven County — Town Plot, North End, Bunker Hill, East End, Naugatuck, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Town Plot', notes: 'Central working-class residential. Dense, compact lots. Italian and Portuguese community heritage. Compact frame homes and bungalows.' },
  { name: 'North End', notes: 'Multi-unit residential, compact urban form. Cape Verdean and immigrant community character. Two-family and triple-decker stock.' },
  { name: 'Bunker Hill', notes: 'West Waterbury. Slightly more suburban character with modest single-family homes.' },
  { name: 'East End', notes: 'Eastern Waterbury. Working-class frame homes and two-family stock.' },
  { name: 'Brooklyn / Willow', notes: 'South-central Waterbury. Mixed residential, two-family properties common.' },
  { name: 'Waterville', notes: 'Northern Waterbury. Older established residential, modest Colonial and Cape Cod stock.' },
  { name: 'Bucks Hill', notes: 'Northwestern Waterbury. More suburban character, single-family homes on slightly larger lots.' },
  { name: 'Naugatuck', notes: 'Separate borough south of Waterbury, New Haven County. Similar working-class New England character.' },
  { name: 'Wolcott', notes: 'Northeast of Waterbury, New Haven County. Suburban character, mix of older and newer single-family stock.' },
  { name: 'Cheshire', notes: 'East of Waterbury, New Haven County. More suburban character, higher median values.' },
  { name: 'Ansonia', notes: 'Southwest of Waterbury, New Haven County / Valley area. Smaller city, working-class character.' },
];

export default function WaterburyNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[waterburyLocalBusinessSchema, articleSchema('Waterbury CT Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/waterbury-ct" className="hover:text-white">Waterbury CT</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Waterbury CT — We Buy Houses Everywhere in New Haven County</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">USA Home Buyers purchases homes throughout Waterbury and the broader New Haven County area. Whether your property is in the urban core or a suburban community, we make cash offers as-is in any condition. Connecticut is an attorney-closing state — we coordinate the closing attorney on our side. Call 888-274-5006.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <Link href="/markets/waterbury-ct" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Waterbury CT Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Waterbury CT Home" sourcePage="/markets/waterbury-ct/neighborhoods" />
      </div>
    </>
  );
}
