/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { wausauLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/wausau-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Wausau WI Neighborhoods — We Buy Houses in Every Area',
  description: 'We buy houses in every Wausau WI area — downtown, East Side, Weston, Schofield, Rothschild, Rib Mountain, and Marathon County.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Downtown Wausau', description: 'Historic core along the Wisconsin River. Older Victorians and Craftsman homes. Walking distance to the 400 Block arts district. $150K-$250K.' },
  { name: 'East Side', description: 'Residential grid east of Grand Avenue. Mix of older single-families and duplexes. Affordable price points. $130K-$200K.' },
  { name: 'West Side', description: 'Established neighborhoods with post-war housing. Close to Wausau West High School. $160K-$280K.' },
  { name: 'Weston', description: 'Village west of Wausau. Newer subdivisions, commercial growth along Camp Phillips Road. $200K-$350K. Growing family market.' },
  { name: 'Schofield', description: 'City north of Wausau along the river. Working-class neighborhoods, older housing stock. $120K-$200K. Affordable entry points.' },
  { name: 'Rothschild', description: 'Village south of Wausau along Business 51. Mix of residential and commercial. $150K-$250K. Near Cedar Creek Mall area.' },
  { name: 'Rib Mountain', description: 'Town south of Wausau centered on Granite Peak ski area. Mix of residential developments and rural properties. $200K-$400K+.' },
  { name: 'Marathon City', description: 'Small city west of Wausau. Rural character, affordable housing. $100K-$180K. Estate and farm property sales.' },
  { name: 'Mosinee', description: 'City south of Wausau near Central Wisconsin Airport. Paper mill town with older housing stock. $120K-$200K.' },
  { name: 'Kronenwetter', description: 'Village east of Mosinee. Growing residential community. $180K-$300K. Newer construction mixed with established homes.' },
];

export default function WausauNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[wausauLocalBusinessSchema]} />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2"><Link href="/markets/wausau-wi" className="hover:text-white">Wausau WI</Link> › Neighborhoods</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Wausau WI Neighborhoods — We Buy Houses in Every Area</h1>
          <p className="text-blue-100 text-lg">From downtown Victorians to Weston subdivisions — we buy in every Marathon County community.</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6 my-8">
          {NEIGHBORHOODS.map(n => (
            <div key={n.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-2">{n.name}</h3>
              <p className="text-gray-600 text-sm">{n.description}</p>
            </div>
          ))}
        </div>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Greater Marathon County</h2>
          <p className="text-gray-700 mb-4">Beyond the immediate Wausau metro, we buy houses throughout Marathon County — the largest county by area in Wisconsin. Edgar, Athens, Spencer, Stratford, Hatley, Birnamwood, and the surrounding townships are all in our coverage area.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Downtown Wausau', 'Weston', 'Schofield', 'Rothschild', 'Rib Mountain', 'Marathon City', 'Mosinee', 'Kronenwetter', 'Edgar', 'Athens', 'Spencer', 'Stratford'].map(city => (
              <span key={city} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{city}</span>
            ))}
          </div>
        </section>
        <Link href="/markets/wausau-wi" className="text-brand-primary hover:underline font-medium">← Back to Wausau WI</Link>
        <div className="mt-8"><CashOfferForm variant="footer" headline="Ready to Sell Your Wausau Home?" sourcePage="/markets/wausau-wi/neighborhoods" /></div>
      </div>
    </>
  );
}
