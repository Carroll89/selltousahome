/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { columbusLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;
const pageUrl = `${SITE_URL}/markets/columbus-oh/neighborhoods`;

export const metadata: Metadata = {
  title: 'Columbus OH Neighborhoods — We Buy Houses Throughout Franklin County',
  description:
    'USA Home Buyers purchases houses in all Columbus OH neighborhoods and throughout Franklin County — Goodyear Heights, Kenmore, Firestone Park, Highland Square, and more.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  { name: 'Goodyear Heights', notes: 'Classic rubber-era bungalows and foursquares. High concentration of pre-1940 housing. Strong as-is, estate, and inherited-property angle. Company-era character.' },
  { name: 'Kenmore', notes: 'Working-class southwest neighborhood with older colonials and bungalows. Investor-friendly pricing. Cash buyer demand for distressed and deferred-maintenance homes.' },
  { name: 'Firestone Park', notes: 'Firestone company-era homes with stable neighborhood character. Estate and deferred-maintenance situations are common here.' },
  { name: 'East Columbus', notes: 'Diverse east-side neighborhood with older two-stories and Cape Cods. Active investor market, competitive lower price point.' },
  { name: 'Highland Square', notes: 'Walkable central-west neighborhood near downtown Columbus. Craftsman bungalows and older colonials. Stronger retail demand for updated homes; cash angle for deferred-maintenance.' },
  { name: 'South Columbus / Middlebury', notes: 'Mixed residential areas with older stock in varied condition. Good market for as-is and distressed sales.' },
  { name: 'Northwest Columbus', notes: 'More suburban west-side area. Mix of older and post-war housing stock. Better retail fit for move-in-ready homes; cash for fixer situations.' },
  { name: 'North Columbus', notes: 'Established north-side neighborhoods near Highland Square. Mix of housing types and price points. Full service area.' },
  { name: 'Cuyahoga Falls', notes: 'Adjacent Franklin County city north of Columbus. Mix of post-war and newer construction. Active retail and cash buyer market.' },
  { name: 'Barberton', notes: 'Southwest Franklin County. Working-class housing stock with older bungalows and colonials. Strong cash buyer demand.' },
  { name: 'Stow', notes: 'Northeast Franklin County suburban market. Mix of post-war and 1970s–1980s homes. Estate and relocation situations common.' },
  { name: 'Tallmadge', notes: 'East of Columbus. Established residential with post-war stock. Full service area — as-is, estate, and rental situations.' },
  { name: 'Green / Uniontown', notes: 'South Franklin County growing suburb. Mix of older rural-residential and newer subdivision housing. Full service area.' },
  { name: 'Fairlawn / Bath', notes: 'Upscale west/northwest Franklin County suburbs. Higher price points but cash angle exists for estates and complex situations.' },
  { name: 'Norton', notes: 'West Franklin County. Older working-class housing stock with steady investor demand.' },
];

export default function ColumbusNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          columbusLocalBusinessSchema,
          articleSchema('Columbus OH Neighborhoods — Cash Home Buyer Coverage', pageUrl, '2026-05-01'),
        ]}
      />
      <section className="relative text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/columbus-oh" className="hover:text-white">Columbus OH</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Columbus OH Neighborhoods — We Buy Houses Everywhere in Franklin County
          </h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-gray-700 mb-6">
          USA Home Buyers purchases homes throughout Columbus and Franklin County. Whether your
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
          Don't see your neighborhood listed? Call us — we buy throughout Franklin County and
          surrounding areas. 888-274-5006.
        </p>
        <Link href="/markets/columbus-oh" className="inline-block text-brand-primary hover:underline text-sm mb-8">
          ← Back to Columbus OH Market Page
        </Link>
        <CashOfferForm
          variant="footer"
          headline="Get a Cash Offer for Your Columbus OH Home"
          sourcePage="/markets/columbus-oh/neighborhoods"
        />
      </div>
    </>
  );
}
