/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { bridgeportLocalBusinessSchema, articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

const pageUrl = `${SITE_URL}/markets/bridgeport-ct/tenant-occupied`;

export const metadata: Metadata = {
  title: 'Sell Tenant-Occupied House Bridgeport CT',
  description:
    'Selling a tenant-occupied property in Bridgeport CT? We buy with tenants in place — no eviction needed. Written offer in 24 hours.',
  alternates: { canonical: pageUrl },
};

const FAQ_ITEMS = [
  {
    question: 'Can I sell my Bridgeport rental property with tenants in it?',
    answer: 'Yes. We buy tenant-occupied properties in Bridgeport with tenants in place. You don\'t need to evict or wait for the lease to expire. The tenant relationship transfers with the property at closing.',
  },
  {
    question: 'Do I need to notify my tenant I\'m selling?',
    answer: 'Connecticut law requires specific notice to tenants when a property is being sold or shown. Requirements vary by lease type. We can work with you on timing and notification so the process is legally compliant and doesn\'t create additional tenant conflict.',
  },
  {
    question: 'What if my tenant has an active lease?',
    answer: 'Active leases generally transfer with the property in Connecticut — we take the property subject to the existing lease. This is common in our purchases. We buy the property knowing the lease terms and the tenant situation.',
  },
  {
    question: 'What if my tenant is not paying rent?',
    answer: 'Non-paying tenants are one of the most common reasons landlords sell to us. We buy with non-paying tenants in place. You don\'t have to spend months and thousands of dollars on an eviction proceeding. We take over that situation at closing.',
  },
];

export default function BridgeportTenantOccupiedPage() {
  return (
    <>
      <SchemaMarkup schema={[
        bridgeportLocalBusinessSchema,
        articleSchema('Sell Your Tenant-Occupied Bridgeport CT Property — No Eviction Needed', pageUrl, '2026-04-16'),
        faqSchema(FAQ_ITEMS),
      ]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet="/images/optimized/bridgeport-ct-hero-640.jpg 640w, /images/optimized/bridgeport-ct-hero-828.jpg 828w, /images/optimized/bridgeport-ct-hero-1080.jpg 1080w, /images/optimized/bridgeport-ct-hero-1200.jpg 1200w"
            type="image/jpeg"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/bridgeport-ct-hero-1200.jpg"
            alt="Bridgeport CT homes — Sell Your Tenant-Occupied Bridgeport CT Property — No Eviction Needed"
            fetchPriority="high"
            className="object-cover object-center absolute inset-0 w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/markets/bridgeport-ct" className="hover:text-white">Bridgeport CT</Link> › Tenant Occupied
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Sell Your Tenant-Occupied Bridgeport CT Property — No Eviction Needed
            </h1>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
              <p className="text-blue-100 text-sm font-medium mb-1">TL;DR</p>
              <p className="text-white text-sm leading-relaxed">USA Home Buyers purchases tenant-occupied properties in Bridgeport CT — problem tenants, non-payers, holdovers. We buy with tenants in place. Written cash offer in 24 hours, close in 7-14 days. No eviction process required on your end. Call 888-440-5250.</p>
            </div>
            <p className="text-lg text-blue-100 mb-6">
              Written cash offer in 24 hours. Close in 7–14 days. No repairs, no agent fees, no waiting.
            </p>
          <p className="text-blue-100 text-sm">Hablamos español — servimos a la comunidad de habla hispana.</p>
            <a href="tel:+18884405250" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl text-lg mb-4 transition-colors">
              📞 Call Now — 888-440-5250 (24/7)
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" headline="Get Your Cash Offer" subheadline="Written offer in 24 hours. We cover all closing costs." sourcePage="/markets/bridgeport-ct/tenant-occupied" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Market Data: Bridgeport CT — $252,000 Median Price</h2>
          <p className="text-gray-700 mb-4">
            According to Zillow and Redfin data for Fairfield County, the median home value in Bridgeport is approximately $252,000. Transfer tax: Connecticut real estate conveyance tax — 0.75% state + 0.25% municipal (City of Bridgeport) = 1.0% total for properties under $800,000. Seller pays both portions. On a $252,000 sale: $2,520. Source: Connecticut Department of Revenue Services (ct.gov/drs).
          </p>
        </section>

        <FAQSection items={FAQ_ITEMS} heading="FAQs — Tenant Occupied in Bridgeport CT" />

        <section className="my-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Related Situations in Bridgeport CT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: '/markets/bridgeport-ct/inherited-property', label: 'Inherited Property' },
              { href: '/markets/bridgeport-ct/foreclosure', label: 'Foreclosure' },
              { href: '/markets/bridgeport-ct/divorce-sale', label: 'Divorce Sale' },
              { href: '/markets/bridgeport-ct/probate', label: 'Probate' },
              { href: '/markets/bridgeport-ct/tenant-occupied', label: 'Tenant-Occupied' },
              { href: '/markets/bridgeport-ct', label: '← Back to Bridgeport' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="bg-brand-light rounded-lg px-4 py-3 text-brand-primary hover:bg-blue-100 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <CashOfferForm variant="footer" headline="Ready to Sell Your Bridgeport CT Property?" sourcePage="/markets/bridgeport-ct/tenant-occupied" />
      </div>
    </>
  );
}
