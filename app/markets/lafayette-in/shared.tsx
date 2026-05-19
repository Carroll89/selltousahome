/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema, lafayetteLocalBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const LAFAYETTE_PHONE = '888-274-5006';
export const LAFAYETTE_TEL = '+18882745006';
export const LAFAYETTE_MARKET = 'Lafayette, IN';
export const LAFAYETTE_SLUG = 'lafayette-in';

export const LAFAYETTE_FAQ_ITEMS = [
  {
    question: 'How fast can I sell my house for cash in Lafayette IN?',
    answer:
      'USA Home Buyers can make a written cash offer within 24 hours and close in as few as 7 days when title is clear. If you need more time for probate, relocation, or tenants, we can close on your schedule. Call 888-274-5006.',
  },
  {
    question: 'Will I owe transfer tax when I sell a house in Lafayette IN?',
    answer:
      'Indiana has no real property transfer tax at the state, county, or city level, including Tippecanoe County and Lafayette. Always confirm your exact settlement statement with your title company or closing attorney.',
  },
  {
    question: 'Do you buy Lafayette houses that need repairs?',
    answer:
      'Yes. We buy Lafayette homes as-is: old roofs, foundation issues, fire damage, water damage, code violations, deferred maintenance, tenant problems, and cleanout situations. You do not need to repair, clean, or stage the property.',
  },
  {
    question: 'How does foreclosure work in Indiana?',
    answer:
      'Indiana is a judicial foreclosure state, so lenders must go through court before sheriff sale. Lafayette sellers should verify their exact case timeline with a licensed Indiana attorney. A cash sale before sheriff sale can sometimes stop the process by paying off the loan at closing.',
  },
  {
    question: 'Where is probate handled in Tippecanoe County?',
    answer:
      'Probate matters in Tippecanoe County are handled by Tippecanoe Circuit Court at 301 Main Street in Lafayette. We can coordinate with the personal representative or estate attorney once the estate has authority to sell.',
  },
  {
    question: 'What parts of Lafayette and Tippecanoe County do you serve?',
    answer:
      'We buy homes throughout Lafayette and Tippecanoe County, including older neighborhoods near downtown, Ninth Street Hill, south-side ranch homes, near-northside areas, and outlying county properties.',
  },
  {
    question: 'How much is a typical cash offer for a Lafayette house?',
    answer:
      'Cash offers are property-specific, but many direct as-is offers fall around 70-80% of fair market value before adjusting for condition, repairs, title issues, tenant status, and seller timeline. On a $245,000 Lafayette median-sale home, that rough range is about $171,500-$196,000 before property-specific review.',
  },
  {
    question: 'Can I sell if the Lafayette house has liens, back taxes, or is vacant?',
    answer:
      'Often, yes. Liens, back taxes, unpaid utilities, and vacant-property issues can usually be reviewed during title work and paid from closing proceeds when there is enough equity. We buy vacant Lafayette homes as-is and coordinate with the title company before closing.',
  },
  {
    question: 'Can you help senior downsizing, relocation, or Spanish-speaking sellers?',
    answer:
      'Yes. We work with Lafayette homeowners who are downsizing, moving for work or family, helping an older parent transition, or simply need a calmer sale. Spanish-speaking help can be arranged during the offer and closing process.',
  },
];

export const LAFAYETTE_TESTIMONIALS = [
  {
    quote:
      'I inherited a small house near Ninth Street Hill that needed more work than I could manage from out of town. USA Home Buyers gave me a written offer the next day and waited while the estate paperwork caught up. We closed in 12 days after approval.',
    name: 'Marilyn C.',
    location: 'Ninth Street Hill, Lafayette IN',
    situation: 'Inherited Property',
    date: 'February 2026',
  },
  {
    quote:
      'My payments were behind and I did not want to wait for the foreclosure case to keep moving. They explained the numbers clearly, bought the house as-is, and closed before the next court date. It was a relief to have a real date and a real offer.',
    name: 'Derek M.',
    location: 'South Lafayette, IN',
    situation: 'Pre-Foreclosure',
    date: 'March 2026',
  },
  {
    quote:
      'We had a tenant-occupied rental that needed a roof and a cleanout. Listing it would have meant repairs and showings around the tenant. USA Home Buyers bought it with the tenant still there and we were done in about two weeks.',
    name: 'Angela R.',
    location: 'Near Downtown Lafayette, IN',
    situation: 'Tenant-Occupied Rental',
    date: 'January 2026',
  },
  {
    quote:
      'After my divorce, neither of us wanted to keep paying on the Lafayette house. We needed one offer and one closing date. They worked with both attorneys and we closed without putting the property on the market.',
    name: 'Kevin L.',
    location: 'Tippecanoe County, IN',
    situation: 'Divorce Sale',
    date: 'December 2025',
  },
];

export const LAFAYETTE_COMPARISON_ROWS = [
  { label: 'Offer timeline', cashBuyer: '24 hours', traditional: '14-60 days to receive an offer' },
  { label: 'Closing timeline', cashBuyer: '7-14 days when title is clear', traditional: '45-90+ days' },
  { label: 'Repairs required', cashBuyer: 'None - we buy as-is', traditional: 'Often required after inspection' },
  { label: 'Agent commissions', cashBuyer: '$0', traditional: '5-6% of sale price' },
  { label: 'Seller closing costs', cashBuyer: 'We cover standard seller-side costs', traditional: 'Seller costs vary by contract and title' },
  { label: 'Indiana transfer tax', cashBuyer: '$0', traditional: '$0' },
  { label: 'Showings', cashBuyer: 'None', traditional: 'Multiple showings and open houses' },
  { label: 'Sale certainty', cashBuyer: 'Cash, no financing contingency', traditional: 'Buyer financing can fall through' },
  { label: 'Average net proceeds', cashBuyer: 'Often 70-80% of fair market value', traditional: 'Higher top-line price, minus repairs, commissions, and carrying costs' },
];

export const LAFAYETTE_SITUATIONS = [
  {
    slug: 'inherited-property',
    label: 'Inherited Property',
    h1: 'Sell an Inherited House in Lafayette, IN',
    description:
      'Inherited a Lafayette house? We buy inherited homes for cash, as-is, and can work with estate timelines in Tippecanoe County.',
    intro:
      'Inheriting a property in Tippecanoe County often means paperwork, family coordination, property taxes, utilities, and maintenance before the house is ready to sell. A direct cash offer gives the estate a clear number and a flexible closing date.',
    bullets: [
      'No cleanout required before closing',
      'We can coordinate with the personal representative or estate attorney',
      'No repairs, showings, or agent commission',
      'Closing can wait for probate authority when needed',
    ],
  },
  {
    slug: 'foreclosure',
    label: 'Foreclosure',
    h1: 'Facing Foreclosure in Lafayette, IN?',
    description:
      'Behind on payments in Lafayette? A fast cash sale may help you sell before sheriff sale. Verify your rights with an Indiana attorney.',
    intro:
      'Indiana uses judicial foreclosure, which means the lender must go through court. If you are in that window, a cash sale can sometimes pay off the loan before sheriff sale and give you a cleaner exit.',
    bullets: [
      'Written cash offer within 24 hours',
      'Fast title work when a deadline is close',
      'We buy as-is, even with deferred maintenance',
      'Legal timelines vary, so confirm case-specific advice with an Indiana attorney',
    ],
  },
  {
    slug: 'divorce-sale',
    label: 'Divorce Sale',
    h1: 'Sell a House During Divorce in Lafayette, IN',
    description:
      'Need to sell a shared Lafayette property during divorce? We buy directly for cash with one offer and one closing date.',
    intro:
      'A divorce sale can get stuck when repairs, showings, price reductions, or buyer financing create new things to argue about. A cash offer keeps the process simple: one number, one contract, one closing date.',
    bullets: [
      'No public listing or repeated showings',
      'We can coordinate with both parties or attorneys',
      'As-is sale with no repair negotiations',
      'Flexible closing date around court or settlement needs',
    ],
  },
  {
    slug: 'probate',
    label: 'Probate',
    h1: 'Sell a Probate Property in Tippecanoe County, IN',
    description:
      'Selling a probate property in Lafayette? We buy estate homes for cash and work with Tippecanoe County probate timelines.',
    intro:
      'Probate property sales need the right authority before closing. We can still make a cash offer early, then work with the personal representative and title company when the estate is ready to close.',
    bullets: [
      'Tippecanoe Circuit Court handles local probate matters',
      'Cash offer can be structured around estate timing',
      'No repairs or cleanout before closing',
      'Residential image used; no courthouse photo is required for this page',
    ],
  },
  {
    slug: 'tenant-occupied',
    label: 'Tenant-Occupied',
    h1: 'Sell a Tenant-Occupied House in Lafayette, IN',
    description:
      'Own a Lafayette rental with tenants in place? We buy tenant-occupied properties for cash, as-is.',
    intro:
      'Most retail buyers want vacant possession. We can evaluate the property with tenants in place and buy the rental without forcing you to manage showings, turnover, or repairs first.',
    bullets: [
      'No eviction required just to sell',
      'No open-house coordination with tenants',
      'We review lease status and property condition',
      'Cash closing without buyer financing delays',
    ],
  },
  {
    slug: 'code-violations',
    label: 'Code Violations',
    h1: 'Sell a Lafayette House With Code Violations',
    description:
      'Code violations, open permits, fines, or repair orders? USA Home Buyers buys Lafayette homes as-is.',
    intro:
      'Code issues can make a normal sale difficult because lenders and buyers get nervous. We factor the repair and compliance work into the offer and buy the property in its current condition.',
    bullets: [
      'Open violations are not automatic dealbreakers',
      'No contractor work before sale',
      'We account for repairs in the cash offer',
      'Close fast or on your schedule',
    ],
  },
  {
    slug: 'fire-damage',
    label: 'Fire Damage',
    h1: 'Sell a Fire-Damaged House in Lafayette, IN',
    description:
      'Fire or smoke damage in Lafayette? We buy damaged homes as-is for cash, with no repairs required.',
    intro:
      'Fire-damaged properties are hard to finance and hard to show. We buy them directly, whether the damage is cosmetic, structural, partial, or severe.',
    bullets: [
      'No repairs before closing',
      'We can work around insurance timelines',
      'Cash offer based on current condition',
      'No agent showings through a damaged property',
    ],
  },
  {
    slug: 'market-report',
    label: 'Market Report',
    h1: 'Lafayette, IN Housing Market Report - 2026',
    description:
      'Current Lafayette housing market facts for sellers: price, days on market, competition, transfer tax, and seller options.',
    intro:
      'As of March 2026, Lafayette is a competitive seller market. Redfin reported a $245,000 median sale price, 26 median days on market, 99.5% sale-to-list ratio, 31.1% of homes selling above list, and an 83/100 Compete Score.',
    bullets: [
      'Zillow ZHVI: $266,175 as of April 2026',
      'BLS Lafayette MSA nonfarm employment: 111,000 jobs in February 2026 final data',
      'Indiana transfer tax: $0 at state, county, and city levels',
      'Complicated properties may still need a direct cash path',
    ],
  },
  {
    slug: 'faq',
    label: 'FAQ',
    h1: 'Lafayette, IN Home Selling FAQs',
    description:
      'Answers to common Lafayette seller questions about cash offers, costs, foreclosure, probate, repairs, and timelines.',
    intro:
      'These are the questions Lafayette homeowners ask before deciding whether to list, wait, or request a direct cash offer.',
    bullets: [
      'Fast closing options',
      'Indiana transfer tax and recording context',
      'Probate and foreclosure basics',
      'As-is sale expectations',
    ],
  },
  {
    slug: 'neighborhoods',
    label: 'Neighborhoods',
    h1: 'We Buy Houses in All Lafayette, IN Neighborhoods',
    description:
      'USA Home Buyers purchases homes throughout Lafayette and Tippecanoe County: older homes, ranches, rentals, estates, and as-is properties.',
    intro:
      'Lafayette includes older residential streets near downtown, Craftsman-style homes, ranch corridors, rental pockets, and outlying county properties. We buy throughout the area.',
    bullets: [
      'Downtown and near-downtown homes',
      'Ninth Street Hill and older bungalow areas',
      'South-side ranch and split-level homes',
      'Outlying Tippecanoe County properties',
    ],
  },
];

export function getLafayetteSituation(slug: string) {
  return LAFAYETTE_SITUATIONS.find((s) => s.slug === slug);
}

export function metadataForSituation(slug: string): Metadata {
  const situation = getLafayetteSituation(slug);
  const title = situation ? situation.h1 : 'Sell Your House Fast in Lafayette, IN';
  const description = situation?.description ?? 'Sell your Lafayette, IN house fast for cash. No repairs, no fees, no obligation.';
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/markets/lafayette-in/${slug}` },
  };
}

export function LafayetteSituationPage({ slug }: { slug: string }) {
  const situation = getLafayetteSituation(slug);
  if (!situation) return null;
  const pageUrl = `${SITE_URL}/markets/lafayette-in/${slug}`;
  const localFaq = slug === 'faq' ? LAFAYETTE_FAQ_ITEMS : LAFAYETTE_FAQ_ITEMS.slice(0, 4);

  return (
    <>
      <SchemaMarkup
        schema={[
          lafayetteLocalBusinessSchema,
          articleSchema(situation.h1, pageUrl, '2026-05-19'),
          faqSchema(localFaq),
        ]}
      />
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={slug === 'foreclosure' || slug === 'fire-damage' || slug === 'code-violations' ? '/images/lafayette-in-asis.webp' : '/images/lafayette-in-hero.webp'} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slug === 'foreclosure' || slug === 'fire-damage' || slug === 'code-violations' ? '/images/lafayette-in-asis.jpg' : '/images/lafayette-in-hero.jpg'}
            alt="Lafayette IN residential home"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/lafayette-in" className="hover:text-white">Lafayette IN</Link>
              {' > '} {situation.label}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{situation.h1}</h1>
            <p className="text-lg text-blue-100 mb-6">{situation.description}</p>
            <a href={`tel:${LAFAYETTE_TEL}`} className="flex w-full md:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-xl md:py-3 md:text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call {LAFAYETTE_PHONE} - We Answer 24/7
            </a>
          </div>
          <CashOfferForm variant="hero" headline={`Get Your Lafayette IN Cash Offer`} sourcePage={`/markets/lafayette-in/${slug}`} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-10 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{situation.label} Help in Lafayette</h2>
          <p className="text-gray-700 leading-relaxed mb-5">{situation.intro}</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {situation.bullets.map((bullet) => (
              <li key={bullet} className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-gray-700">
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <FAQSection items={localFaq} heading={`FAQs - ${situation.label} in Lafayette IN`} />

        <nav className="my-8 flex flex-wrap gap-3">
          <Link href="/markets/lafayette-in" className="bg-blue-50 hover:bg-blue-100 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm transition-colors">
            Back to Lafayette IN
          </Link>
          {LAFAYETTE_SITUATIONS.filter((s) => s.slug !== slug).slice(0, 6).map((s) => (
            <Link key={s.slug} href={`/markets/lafayette-in/${s.slug}`} className="bg-white hover:bg-gray-50 text-brand-primary font-medium px-4 py-2 rounded-lg text-sm border border-blue-100 transition-colors">
              {s.label}
            </Link>
          ))}
        </nav>

        <CashOfferForm
          variant="footer"
          headline="Ready to Sell Your Lafayette IN Home?"
          subheadline="No repairs, no commissions, no obligation. Get a written cash offer within 24 hours."
          sourcePage={`/markets/lafayette-in/${slug}`}
        />
      </div>
    </>
  );
}
