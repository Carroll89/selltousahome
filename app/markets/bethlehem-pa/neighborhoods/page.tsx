import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { bethlehemLocalBusinessSchema, articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bethlehem-pa/neighborhoods`;

export const metadata: Metadata = {
  title: 'Bethlehem PA Neighborhoods Guide',
  description:
    'Bethlehem PA neighborhood guide for sellers — South Side, Central, Northeast, Historic North Side. Median prices, housing stock, and investor activity by area.',
  alternates: { canonical: pageUrl },
};

const NEIGHBORHOODS = [
  {
    name: 'South Bethlehem (South Side)',
    medianPrice: '~$245,000',
    stock: 'Dense attached row homes and semi-detached twins, primarily 2-story brick construction built 1890s–1930s for Bethlehem Steel workers. Narrow lots, small front stoops with metal railings.',
    investorActivity: 'Very High',
    notes: 'Highest volume of distressed and investor-purchased properties in the city. Many inherited and estate sales. The SteelStacks arts complex (former blast furnace site) anchors the neighborhood\'s identity and is attracting new residents and investment. According to Redfin, South Bethlehem median is approximately $245,000.',
    zipCodes: '18015',
  },
  {
    name: 'Central Bethlehem',
    medianPrice: '~$300,000',
    stock: 'Mix of Victorian-era 2-3 story homes and brick row houses, walkable to Moravian University and the SteelStacks/ArtsQuest complex. Construction 1870s–1920s.',
    investorActivity: 'High',
    notes: 'Gentrifying — proximity to Moravian University and the SteelStacks entertainment district is drawing younger buyers. Some conversion to multi-family rentals. Higher-end properties here can approach $350,000+.',
    zipCodes: '18015, 18016',
  },
  {
    name: 'Northeast Bethlehem',
    medianPrice: '~$325,000',
    stock: 'Postwar ranch homes, split-levels, and raised ranches built 1950s–1980s. More suburban character than South Side, larger lots, two-car garages common.',
    investorActivity: 'Medium',
    notes: 'Stable working-class to middle-class neighborhood. Lower distress rate than South Side. Homes sell faster here in the retail market due to condition. Investor activity is present but not the dominant purchase type.',
    zipCodes: '18017',
  },
  {
    name: 'Historic District / North Side',
    medianPrice: '$380,000–$450,000+',
    stock: '18th and 19th century stone and brick homes, including rare Moravian fieldstone construction on Church Street dating to the 1740s. National Historic Landmark District designation.',
    investorActivity: 'Low-Medium',
    notes: 'Highest-value residential area in the city. Low distress rate — these homes are well-maintained and sell at premium prices. Renovation activity driven by historic preservation requirements. Historic District guidelines restrict exterior modifications.',
    zipCodes: '18018',
  },
  {
    name: 'West Side',
    medianPrice: '$250,000–$290,000',
    stock: 'Mixed housing stock: row homes near the Lehigh River, larger early 20th-century frame homes further west, some mid-century construction on the fringes.',
    investorActivity: 'High',
    notes: 'Higher renter concentration than Northeast Bethlehem. Working-class neighborhood with some deferred maintenance. Active investor market. Properties near the Lehigh River waterfront have appreciated as the South Side has gentrified.',
    zipCodes: '18015, 18017',
  },
  {
    name: 'Fountain Hill (adjacent borough)',
    medianPrice: '~$228,000',
    stock: 'Cape Cods, townhomes, and attached twins. Typical square footage around 1,500 sq ft. 1940s–1960s construction primarily.',
    investorActivity: 'High',
    notes: 'A separate borough immediately abutting South Bethlehem — shares the urban character of the South Side at slightly lower prices. Active investor market. Many multi-family conversions. According to Lehigh Valley Just Listed data, average sale price near $228,000.',
    zipCodes: '18015',
  },
];

export default function BethlehemNeighborhoodsPage() {
  return (
    <>
      <SchemaMarkup schema={[
        bethlehemLocalBusinessSchema,
        articleSchema('Bethlehem PA Neighborhoods — Prices and Housing Stock Guide', pageUrl),
      ]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          {' › '}
          <Link href="/markets/bethlehem-pa" className="hover:text-brand-primary">Bethlehem PA</Link>
          {' › '}
          <span>Neighborhoods</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Bethlehem PA Neighborhoods — Prices and Market Guide
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A neighborhood-by-neighborhood look at Bethlehem PA real estate — median prices, housing stock,
          and what selling in each area typically means for homeowners.
        </p>

        {/* Quick overview */}
        <section className="mb-10 bg-brand-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Bethlehem at a Glance</h2>
          <p className="text-gray-700 mb-3">
            According to U.S. Census Bureau data (2020), Bethlehem has 29,631 total housing units.
            Of those, 30.8% are attached row homes and twins — a figure that reflects the city&apos;s steel-era history
            more than most comparable Pennsylvania cities. The South Side alone accounts for the majority of
            Bethlehem&apos;s investor purchase activity.
          </p>
          <p className="text-gray-700">
            According to Redfin (February 2026), Bethlehem&apos;s citywide median sale price is $320,000,
            with a Compete Score of 89/100. But that number obscures significant variation by neighborhood —
            from $228,000 in Fountain Hill to $450,000+ in the Historic District.
          </p>
        </section>

        {/* Neighborhood cards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Neighborhood-by-Neighborhood Breakdown</h2>
          <div className="space-y-6">
            {NEIGHBORHOODS.map((n) => (
              <div key={n.name} className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-brand-dark text-white px-6 py-4 flex flex-wrap justify-between items-center gap-2">
                  <h3 className="font-bold text-lg">{n.name}</h3>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-brand-primary/80 px-3 py-1 rounded-full">{n.medianPrice}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      n.investorActivity === 'Very High' ? 'bg-red-500' :
                      n.investorActivity === 'High' ? 'bg-orange-500' :
                      n.investorActivity === 'Medium' ? 'bg-yellow-500 text-gray-900' :
                      'bg-green-600'
                    }`}>
                      Investor Activity: {n.investorActivity}
                    </span>
                  </div>
                </div>
                <div className="px-6 py-5 bg-white">
                  <p className="text-sm text-gray-500 mb-1"><strong>Zip codes:</strong> {n.zipCodes}</p>
                  <p className="text-gray-700 text-sm mb-2"><strong>Housing stock:</strong> {n.stock}</p>
                  <p className="text-gray-600 text-sm">{n.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Surrounding communities */}
        <section className="mb-10 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Surrounding Communities We Serve</h2>
          <p className="text-gray-700 text-sm mb-4">
            Beyond Bethlehem proper, we buy houses throughout Northampton and Lehigh counties:
          </p>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              ['Hellertown', '~$280,000', 'Northampton County, 4 miles south'],
              ['Bethlehem Township', '$340K–$390K', 'Suburban, adjacent east'],
              ['Hanover Township', '$290K–$350K', 'Northampton County, 3 miles NE'],
              ['Nazareth', '$310K–$360K', 'Northampton County, 8 miles north'],
              ['Palmer Township', '$300K–$370K', '12 miles east, near Easton'],
              ['Easton', '$260K–$310K', '15 miles east, Northampton County'],
              ['Northampton Borough', '$230K–$280K', '9 miles north'],
              ['Emmaus', '$320K–$380K', 'Lehigh County, 8 miles SW'],
              ['Whitehall Township', '$280K–$340K', 'Lehigh County, 6 miles NW'],
              ['Catasauqua', '$250K–$300K', 'Northampton/Lehigh, 5 miles north'],
            ].map(([city, price, note]) => (
              <div key={city} className="bg-white rounded-xl p-3 border border-gray-100">
                <p className="font-semibold text-brand-dark text-sm">{city}</p>
                <p className="text-brand-primary text-xs font-medium">{price}</p>
                <p className="text-gray-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Related Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/markets/bethlehem-pa" className="text-brand-primary hover:underline">Bethlehem PA market overview →</Link></li>
            <li><Link href="/markets/bethlehem-pa/market-report" className="text-brand-primary hover:underline">Full Bethlehem market report →</Link></li>
          </ul>
        </section>

        <CashOfferForm variant="footer" headline="Sell Your Bethlehem PA Home for Cash — Any Neighborhood" sourcePage="/markets/bethlehem-pa/neighborhoods" />
      </div>
    </>
  );
}
