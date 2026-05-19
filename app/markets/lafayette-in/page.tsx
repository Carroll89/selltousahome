/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialBlock } from '@/components/TestimonialBlock';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SituationLinks } from '@/components/SituationLinks';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { BlogClusterLinks } from '@/components/BlogClusterLinks';
import { faqSchema, howToSchema, lafayetteLocalBusinessSchema } from '@/lib/schema';
import { PHONE, SITE_URL } from '@/lib/utils';
import {
  LAFAYETTE_COMPARISON_ROWS,
  LAFAYETTE_FAQ_ITEMS,
  LAFAYETTE_SITUATIONS,
  LAFAYETTE_TESTIMONIALS,
} from './shared';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Sell Your House Fast in Lafayette IN | Cash Home Buyers',
  description:
    'Get a cash offer for your Lafayette IN home. We buy houses as-is in Tippecanoe County with no repairs, no commissions, and flexible closing.',
  alternates: { canonical: `${SITE_URL}/markets/lafayette-in` },
  openGraph: {
    images: [{ url: '/images/lafayette-in-hero.jpg', width: 1200, height: 630, alt: 'Lafayette IN residential home - sell fast for cash' }],
  },
};

export default function LafayetteINMarketPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          lafayetteLocalBusinessSchema,
          faqSchema(LAFAYETTE_FAQ_ITEMS),
          howToSchema,
        ]}
      />

      <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/lafayette-in-hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/lafayette-in-hero.jpg"
            alt="Lafayette IN Craftsman-style residential home"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_430px] gap-5 lg:gap-10 items-start">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 ring-1 ring-white/20 mb-3">
              Lafayette cash home buyer - written offer in 24 hours
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Sell Your House Fast in Lafayette, IN
            </h1>
            <p className="text-base md:text-lg text-blue-100 lg:hidden">
              We buy Lafayette and Tippecanoe County houses as-is for cash - no repairs, no agent fees, no closing cost games.
            </p>
          </div>
          <div className="order-2 w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24">
            <CashOfferForm
              variant="hero"
              headline="Get Your Lafayette Cash Offer"
              subheadline="Tell us where the property is. We will call quickly and send a written offer within 24 hours."
              sourcePage="/markets/lafayette-in"
            />
          </div>
          <div className="order-3 lg:col-start-1 lg:row-start-2">
            <p className="hidden lg:block text-base md:text-lg text-blue-100 mb-4">
              We buy houses in Lafayette and throughout Tippecanoe County in any condition: inherited homes, rentals, pre-foreclosure, divorce sales, code violations, fire damage, and properties that need too much work to list.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 text-blue-50 text-sm mb-4">
              <span>No repairs or cleaning</span>
              <span>No commissions</span>
              <span>We pay standard seller-side costs</span>
              <span>Close in 7 days or on your schedule</span>
            </div>
            <a href="tel:+18882745006" className="flex w-full sm:w-auto items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-4 text-lg shadow-lg transition-colors ring-2 ring-green-400/50">
              Call {PHONE} - We Answer 24/7
            </a>
            <p className="mt-3 text-blue-200 text-xs md:text-sm">BBB Accredited - 15+ Years Experience - Hundreds of Homes Purchased</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="my-10 bg-blue-50 border-l-4 border-brand-primary rounded-r-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">Quick Answer: Sell Your Lafayette House for Cash</h2>
          <p className="text-gray-700 leading-relaxed">
            USA Home Buyers purchases houses in Lafayette, IN for cash, as-is, with no repairs or agent commissions. Redfin reported Lafayette's March 2026 median sale price at $245,000, 26 median days on market, a 99.5% sale-to-list ratio, and an 83/100 Compete Score. Indiana has no real property transfer tax at the state, county, or city level, though sellers should confirm transaction-specific costs with their title company or closing attorney. Call {PHONE} for a no-obligation written cash offer.
          </p>
        </section>

        <HowItWorks />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">Lafayette IN Market Snapshot</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left p-3">Metric</th>
                  <th className="text-left p-3">Lafayette IN</th>
                  <th className="text-left p-3">Source / Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="p-3 font-medium">Median sale price</td><td className="p-3">$245,000</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Median days on market</td><td className="p-3">26 days</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Sale-to-list ratio</td><td className="p-3">99.5%</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Homes above list</td><td className="p-3">31.1%</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Compete Score</td><td className="p-3">83 / 100 - Very Competitive</td><td className="p-3 text-gray-500">Redfin, Mar 2026</td></tr>
                <tr className="bg-gray-50"><td className="p-3 font-medium">Zillow ZHVI</td><td className="p-3">$266,175 (+2.3% YoY)</td><td className="p-3 text-gray-500">Zillow, Apr 2026</td></tr>
                <tr className="bg-white"><td className="p-3 font-medium">Indiana transfer tax</td><td className="p-3">$0</td><td className="p-3 text-gray-500">Confirm transaction details with title/closing attorney</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">
            Lafayette is competitive, but a strong market does not solve every seller problem. Homes with deferred maintenance, estate timing, tenant issues, foreclosure deadlines, or fire/code damage often need certainty more than another round of showings.
          </p>
        </section>

        <section className="my-12 grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Why Lafayette Sellers Choose a Cash Offer</h2>
            <p className="text-gray-700 mb-4">
              Lafayette is a working-family market anchored by manufacturing, healthcare, and regional employers. The sellers who call us usually are not looking for a perfect retail listing. They need a clean path through a real problem: inherited property, pre-foreclosure, tenants, divorce, code violations, or a house that needs repairs before it can pass a buyer's inspection.
            </p>
            <p className="text-gray-700">
              A cash offer gives you a fixed number, a flexible closing date, and no repair list. We buy the property in its current condition and handle the title process with a local title company.
            </p>
          </div>
          <picture className="block overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <source srcSet="/images/lafayette-in-asis.webp" type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/lafayette-in-asis.jpg" alt="Lafayette IN as-is residential property" className="w-full h-full object-cover" />
          </picture>
        </section>

        <SituationLinks
          heading="We Buy Lafayette IN Houses in Any Situation"
          situations={LAFAYETTE_SITUATIONS.filter((s) => !['market-report', 'faq', 'neighborhoods'].includes(s.slug)).map((s) => ({
            label: s.label,
            href: `/markets/lafayette-in/${s.slug}`,
            description: s.description,
          }))}
        />

        <TestimonialBlock testimonials={LAFAYETTE_TESTIMONIALS} heading="What Lafayette IN Sellers Say" />

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Cash Sale vs. Listing With an Agent in Lafayette IN</h2>
          <ComparisonTable rows={LAFAYETTE_COMPARISON_ROWS} />
          <p className="mt-4 text-sm text-gray-600">
            On a $245,000 Lafayette median-sale home, a 5-6% agent commission can run $12,250-$14,700 before repairs, concessions, and carrying costs. A direct cash sale usually trades some top-line price for speed, certainty, and no repair burden.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Lafayette Areas We Buy In</h2>
          <p className="text-gray-700 mb-4">We purchase homes across Lafayette and Tippecanoe County, including older residential streets, ranch homes, rentals, estates, and as-is properties.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Downtown Lafayette', 'Ninth Street Hill', 'South Lafayette', 'Near-Northside', 'Midtown', 'Tippecanoe County', 'older bungalow areas', 'ranch-home corridors', 'rental properties', 'estate homes'].map((n) => (
              <span key={n} className="bg-blue-50 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">{n}</span>
            ))}
          </div>
        </section>

        <FAQSection items={LAFAYETTE_FAQ_ITEMS} heading="FAQs - Selling a House in Lafayette IN" />

        <BlogClusterLinks marketSlug="lafayette-in" cityName="Lafayette IN" />

        <section className="my-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-brand-primary mb-2">Lafayette IN mini-site</p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Seller resources for Lafayette homeowners</h2>
            <p className="text-gray-700 max-w-3xl">
              Keep reading for market data, situation-specific pages, FAQs, and a Lafayette seller guide before you decide whether a cash offer or listing makes more sense.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/markets/lafayette-in/resources" className="bg-brand-primary hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 text-center transition-colors">
              Lafayette Resources
            </Link>
            <Link href="/blog/lafayette-in-sell-house-fast-2026" className="bg-white hover:bg-gray-50 text-brand-primary font-semibold rounded-lg px-5 py-3 text-center border border-blue-200 transition-colors">
              Local Blog
            </Link>
          </div>
        </section>

        <CashOfferForm
          variant="footer"
          headline="Ready to Get Your Lafayette IN Cash Offer?"
          subheadline="No obligation. No repairs. No commissions. Written offer in 24 hours."
          sourcePage="/markets/lafayette-in"
        />
      </div>
      <StickyMobileCTA hideWhenFormVisible={false} />
    </>
  );
}

