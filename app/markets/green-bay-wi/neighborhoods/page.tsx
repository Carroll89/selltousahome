/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { greenBayLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/green-bay-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Green Bay WI Neighborhoods — We Buy Houses Throughout Brown County',
  description: 'USA Home Buyers purchases houses in all Green Bay WI neighborhoods and throughout Brown County — Astor Park, Downtown Green Bay, Fort Howard area, and surrounding communities.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Astor Park', notes: 'Near-east side historic district. Craftsman bungalows and Victorian-era frame homes from the early 1900s. Established tree-lined streets with older character stock. Common for estate and inherited situations.' },
  { name: 'Downtown Green Bay', notes: 'City center. Mix of commercial-adjacent residential and older stock. Properties here often have deferred maintenance or code compliance situations.' },
  { name: 'Fort Howard area', notes: 'Historic Fort Howard heritage neighborhood near downtown. Older frame homes and manufacturing-era residential stock. Long-held ownership situations common.' },
  { name: 'Howard', notes: 'Separate village north of Green Bay. Suburban character with newer development and older mixed stock. We buy throughout Howard.' },
  { name: 'Bellevue', notes: 'Separate village east of Green Bay. Growing community. Mix of older stock and newer suburban development.' },
  { name: 'Suamico', notes: 'Village north of Green Bay. Rural-adjacent character with larger lots. Estate and rural situations common.' },
  { name: 'Pulaski', notes: 'Village south of Green Bay in Brown County. Small-town Wisconsin character. We buy in Pulaski and surrounding rural Brown County communities.' },
  { name: 'Denmark', notes: 'Village in Brown County. Rural-adjacent Brown County community. We serve all Brown County municipalities.' },
  { name: 'De Pere', notes: 'Separate city approximately 5 miles south of Green Bay. Independent municipality with its own legal jurisdiction. Brown County Register of Deeds handles recording for De Pere. Call to confirm coverage.' },
  { name: 'Allouez', notes: 'Separate village. Not part of City of Green Bay — independent municipality. We serve Allouez. Call to confirm your specific address.' },
  { name: 'Ashwaubenon', notes: 'Separate village. Not part of City of Green Bay — independent municipality. We serve Ashwaubenon. Call to confirm your specific address.' },
];

export default function GreenBayNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[greenBayLocalBusinessSchema, articleSchema('Green Bay WI Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01')]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/green-bay-wi" className="hover:text-white">Green Bay WI</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Green Bay WI Neighborhoods — We Buy Houses Everywhere in Brown County</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-4">USA Home Buyers purchases homes throughout the City of Green Bay and the broader Brown County area. Whether your property is in an established near-east neighborhood, a suburban Brown County community, or one of the adjacent municipalities, we make cash offers as-is in any condition. Call 888-274-5006.</p>
        <p className="text-xs text-gray-500 mb-6">Note: De Pere, Allouez, and Ashwaubenon are separate municipalities from the City of Green Bay, each with its own legal jurisdiction. Brown County Register of Deeds handles deed recording for all Brown County municipalities. Call to confirm coverage for your specific address.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="border border-gray-200 rounded-xl p-4">
              <h2 className="font-bold text-brand-dark mb-1">{n.name}</h2>
              <p className="text-sm text-gray-600">{n.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-8">Don't see your neighborhood listed? Call us — we buy throughout Brown County. 888-274-5006.</p>
        <Link href="/markets/green-bay-wi" className="inline-block text-brand-primary hover:underline text-sm mb-8">← Back to Green Bay WI Market Page</Link>
        <CashOfferForm variant="footer" headline="Get a Cash Offer for Your Green Bay WI Home" sourcePage="/markets/green-bay-wi/neighborhoods" />
      </div>
    </>
  );
}
