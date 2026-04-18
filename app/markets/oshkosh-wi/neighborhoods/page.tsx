/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { organizationSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/oshkosh-wi/neighborhoods`;

export const metadata: Metadata = {
  title: 'Oshkosh WI Neighborhoods — Sell Fast',
  description:
    'Sell your house fast in any Oshkosh WI neighborhood — Lake Shore, Merritt, Algoma, Center City, Sawyer Creek, and all of Winnebago County. Cash offers: 888-440-5250.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  {
    name: 'Lake Shore / Lakeview',
    priceRange: '$280K–$380K',
    character: 'Victorian-era lakefront and near-lakefront homes — Queen Anne, Foursquare, and Colonial Revival architecture from the 1880s-1920s. The highest-demand neighborhood in Oshkosh, anchored by Lake Winnebago waterfront access. Many homes are owner-families who\'ve held them for generations.',
    investorNote: 'Lower distress rate given premium location, but estate sales occur frequently when owners age out. When these homes hit the cash market — deferred maintenance, estate situations, flood-plain concerns — they sell fast. We buy at any condition.',
    zips: ['54901'],
  },
  {
    name: 'Merritt / Near UW Oshkosh',
    priceRange: '$145K–$210K',
    character: 'Dense student-rental zone immediately surrounding UW Oshkosh (~12,000 students). Mix of early-20th-century brick bungalows, 1.5-story Cape Cods, and older two-stories converted to multi-unit rentals. High turnover, high distress rate, frequent landlord exits.',
    investorNote: 'Highest cash-offer opportunity zone in Oshkosh. Landlord-exit sales, estate sales from student-era property owners, and properties that don\'t qualify for FHA financing due to code issues or deferred maintenance. The investor margin here is above-average for Winnebago County.',
    zips: ['54901', '54902'],
  },
  {
    name: 'Algoma / Fair Acres',
    priceRange: '$190K–$260K',
    character: 'Established residential areas on the north and east sides — mid-century ranches, split-levels, and older colonials. Good school access, moderate distress rates, consistent family demand. Homes built primarily 1950s-1970s.',
    investorNote: 'Solid investor market. Motivated sellers include retirees downsizing, estate heirs, and divorce situations. Good rental demand supports buy-and-hold strategy. Entry price point accessible for most cash buyers.',
    zips: ['54901', '54904'],
  },
  {
    name: 'Center City / Downtown',
    priceRange: '$110K–$180K',
    character: 'Urban core Oshkosh — mix of older residential, commercial, and mixed-use. Highest vacancy rate and distress concentration in the city. Pre-war two-story wood-frame homes alongside converted commercial spaces. Grand Opera House and downtown amenities nearby.',
    investorNote: 'Highest cash-offer opportunity, deepest discount potential. Many properties carry code violations, deferred maintenance backlogs, or environmental concerns from former commercial uses. Renovation required in most cases — we buy anyway.',
    zips: ['54901'],
  },
  {
    name: 'Sawyer Creek / Southwest Newer',
    priceRange: '$250K–$360K',
    character: 'Post-1990 suburban development in southwest Oshkosh — townhomes, newer single-family homes, modern amenities. Lower distress rate, shorter retail DOM. Sellers here typically have more retail options available.',
    investorNote: 'Lower investor priority given newer construction and active retail buyer pool. But estate sales, divorce situations, and relocation-driven motivated sellers exist in every neighborhood. We buy anywhere in Oshkosh including Sawyer Creek.',
    zips: ['54904'],
  },
  {
    name: 'Southwest Oshkosh / Oakwood',
    priceRange: '$200K–$290K',
    character: 'Suburban mix of 1950s-1980s ranches and split-levels, family-oriented with steady demand. South of Highway 41 corridor. Moderate condition range — some pristine owner-occupied, some deferred maintenance.',
    investorNote: 'Moderate cash-buyer opportunity. Estate sales, divorce situations, and motivated sellers on tighter timelines exist consistently. Good entry price point for buy-and-hold investors targeting the Oshkosh rental market.',
    zips: ['54904'],
  },
  {
    name: 'South Shore',
    priceRange: '$180K–$280K',
    character: 'Southern residential corridor along Lake Winnebago\'s western shore. Mix of older lake-adjacent homes and mid-century residential. Flood-plain considerations apply to properties closest to the lake. Some lakefront access properties at premium.',
    investorNote: 'Flood-plain concerns create cash-buyer opportunity — properties with flood insurance requirements and flood history are difficult to finance conventionally, making cash the natural path. We understand the South Shore drainage dynamics.',
    zips: ['54902'],
  },
  {
    name: 'Far North Side',
    priceRange: '$195K–$270K',
    character: 'Northern residential Oshkosh extending toward the city\'s boundary with Neenah. Mix of post-war and 1960s-1980s ranches. Former factory-worker neighborhoods tied to Fox Cities manufacturing employment. Steady demand, moderate distress.',
    investorNote: 'Former Oshkosh Corporation and Mercury Marine employee neighborhoods. Estate sales frequent as the original owner generation ages. Moderate distress rate, consistent rental demand from Fox Cities workforce.',
    zips: ['54901'],
  },
];

const SURROUNDING_AREAS = [
  { name: 'Neenah', county: 'Winnebago Co. WI', note: '~9 miles NE; Kimberly-Clark home base; higher median prices; estate and relocation sales' },
  { name: 'Menasha', county: 'Winnebago/Calumet Co.', note: '~11 miles NE; industrial Fox River town; blue-collar; affordable starter homes' },
  { name: 'Winneconne', county: 'Winnebago Co. WI', note: '~15 miles west; small lake town; seasonal homes; motivated sellers wanting fast close' },
  { name: 'Omro', county: 'Winnebago Co. WI', note: '~12 miles west; small rural market; agricultural area; limited investor competition' },
  { name: 'Town of Black Wolf', county: 'Winnebago Co. WI', note: 'Suburban/rural township; acreage properties; estate sales' },
  { name: 'Fond du Lac', county: 'Fond du Lac Co.', note: '~20 miles SW; Lake Winnebago south shore; similar profile to Oshkosh; separate county recording' },
];

export default function OshkoshWINeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        organizationSchema,
        articleSchema('Oshkosh WI Neighborhoods — Cash Home Buyers in Every Area', pageUrl, '2026-04-18'),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/markets/oshkosh-wi" className="hover:text-white">Oshkosh WI</Link> › Neighborhoods
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Oshkosh WI Neighborhoods — Cash Home Buyers in Every Area
          </h1>
          <p className="text-lg text-blue-100">
            From Lake Winnebago waterfront Victorians to Merritt brick bungalows to Algoma mid-century ranches — we buy in every Oshkosh neighborhood and every Winnebago County WI community. Any condition, any situation.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh WI Neighborhoods — Price Ranges and Investor Notes</h2>
          <p className="text-gray-700 mb-6">
            Oshkosh's residential neighborhoods reflect the city's history as a Lake Winnebago port city and Fox Valley manufacturing hub. The waterfront drives the premium end; the pre-war industrial-era bungalow stock defines the cash-buyer opportunity zone. Here's what each neighborhood looks like for sellers.
          </p>

          <div className="space-y-6">
            {NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="border border-gray-200 rounded-xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-brand-dark">{n.name}</h3>
                  <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">{n.priceRange}</span>
                </div>
                <p className="text-gray-700 mb-3">{n.character}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-brand-primary mb-1">Cash Buyer Note:</p>
                  <p className="text-sm text-gray-700">{n.investorNote}</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">Primary ZIPs: {n.zips.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Surrounding Winnebago County WI Communities We Serve</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Community</th>
                  <th className="text-left p-3">County</th>
                  <th className="text-left p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SURROUNDING_AREAS.map((a) => (
                  <tr key={a.name} className="bg-white even:bg-gray-50">
                    <td className="p-3 font-medium">{a.name}</td>
                    <td className="p-3 text-gray-600">{a.county}</td>
                    <td className="p-3 text-gray-600">{a.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">We serve all of Winnebago County WI (ZIPs 54901, 54902, 54904 and surrounding townships). Call 888-440-5250 if you're unsure whether we serve your address.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Oshkosh's Distinct Housing Stock — Why It Matters for Sellers</h2>
          <p className="text-gray-700 mb-4">
            Oshkosh's housing stock has a character that distinguishes it from generic Wisconsin suburbs. The city grew rapidly from the 1880s through the 1940s — a period of heavy Lake Winnebago commerce and Fox River industrial activity. The homes built during that period are the city's dominant architectural signature.
          </p>
          <p className="text-gray-700 mb-4">
            Lake Shore Victorians from the 1880s-1910s feature Queen Anne detailing, wrap-around porches, and original wood siding that's breathtaking when maintained — and a restoration project when it isn't. The brick bungalows of Merritt and Algoma (1910s-1940s) are structurally solid but carry systems aged past their design life: original knob-and-tube wiring, galvanized plumbing, coal-to-forced-air conversion furnaces. Mid-century Cape Cods and ranches on the southwest side (1950s-1970s) are in better mechanical condition but often need roof, window, and kitchen updates.
          </p>
          <p className="text-gray-700 mb-4">
            This matters for sellers because much of Oshkosh's housing stock doesn't qualify for FHA or conventional financing without repairs — repairs that sellers don't always want to fund, can't afford, or don't have time to manage from out-of-state. That's exactly where USA Home Buyers operates.
          </p>
        </section>

        <section className="my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/oshkosh-wi', label: '← Oshkosh WI Home' },
              { href: '/markets/oshkosh-wi/inherited-property', label: 'Inherited Property' },
              { href: '/markets/oshkosh-wi/foreclosure', label: 'Foreclosure Help' },
              { href: '/markets/oshkosh-wi/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/oshkosh-wi/probate', label: 'Probate Sale' },
              { href: '/sell-house-fast-wisconsin', label: 'WI Legal Guide' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Oshkosh WI Home?" sourcePage="/markets/oshkosh-wi/neighborhoods" />
      </div>
    </>
  );
}
