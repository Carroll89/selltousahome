/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { akronLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/akron-oh/neighborhoods`;

export const metadata: Metadata = {
  title: 'Akron OH Neighborhoods — We Buy Houses Throughout Summit County',
  description:
    'USA Home Buyers purchases houses in all Akron OH neighborhoods and throughout Summit County — Goodyear Heights, Kenmore, Firestone Park, Highland Square, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Goodyear Heights', notes: 'Classic rubber-era bungalows and foursquares. High concentration of pre-1940 housing. Strong as-is, estate, and inherited-property angle. Company-era character.' },
  { name: 'Kenmore', notes: 'Working-class southwest neighborhood with older colonials and bungalows. Investor-friendly pricing. Cash buyer demand for distressed and deferred-maintenance homes.' },
  { name: 'Firestone Park', notes: 'Firestone company-era homes with stable neighborhood character. Estate and deferred-maintenance situations are common here.' },
  { name: 'East Akron', notes: 'Diverse east-side neighborhood with older two-stories and Cape Cods. Active investor market, competitive lower price point.' },
  { name: 'Highland Square', notes: 'Walkable central-west neighborhood near downtown Akron. Craftsman bungalows and older colonials. Stronger retail demand for updated homes; cash angle for deferred-maintenance.' },
  { name: 'South Akron / Middlebury', notes: 'Mixed residential areas with older stock in varied condition. Good market for as-is and distressed sales.' },
  { name: 'Northwest Akron', notes: 'More suburban west-side area. Mix of older and post-war housing stock. Better retail fit for move-in-ready homes; cash for fixer situations.' },
  { name: 'North Akron', notes: 'Established north-side neighborhoods near Highland Square. Mix of housing types and price points. Full service area.' },
  { name: 'Cuyahoga Falls', notes: 'Adjacent Summit County city north of Akron. Mix of post-war and newer construction. Active retail and cash buyer market.' },
  { name: 'Barberton', notes: 'Southwest Summit County. Working-class housing stock with older bungalows and colonials. Strong cash buyer demand.' },
  { name: 'Stow', notes: 'Northeast Summit County suburban market. Mix of post-war and 1970s–1980s homes. Estate and relocation situations common.' },
  { name: 'Tallmadge', notes: 'East of Akron. Established residential with post-war stock. Full service area — as-is, estate, and rental situations.' },
  { name: 'Green / Uniontown', notes: 'South Summit County growing suburb. Mix of older rural-residential and newer subdivision housing. Full service area.' },
  { name: 'Fairlawn / Bath', notes: 'Upscale west/northwest Summit County suburbs. Higher price points but cash angle exists for estates and complex situations.' },
  { name: 'Norton', notes: 'West Summit County. Older working-class housing stock with steady investor demand.' },
];

export default function AkronNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          akronLocalBusinessSchema,
          articleSchema('Akron OH Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01'),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/akron-oh" className="hover:text-white">Akron OH</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Akron OH Neighborhoods — We Buy Houses Everywhere in Summit County
          </h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">
          USA Home Buyers purchases homes throughout Akron and Summit County. Whether your
          property is a rubber-era bungalow in Goodyear Heights, a post-war Cape Cod in
          Cuyahoga Falls, or a rental in Kenmore, we make cash offers as-is in any condition.
          Call 888-274-5006.
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
          Don't see your neighborhood listed? Call us — we buy throughout Summit County and
          surrounding areas. 888-274-5006.
        </p>
        <Link href="/markets/akron-oh" className="inline-block text-brand-primary hover:underline text-sm mb-8">
          ← Back to Akron OH Market Page
        </Link>
        <CashOfferForm
          variant="footer"
          headline="Get a Cash Offer for Your Akron OH Home"
          sourcePage="/markets/akron-oh/neighborhoods"
        />
      </div>
    </>
  );
}
