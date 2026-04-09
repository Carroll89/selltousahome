import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Press & Media | News Coverage & Resources',
  description:
    'Press resources for USA Home Buyers LLC. Media inquiries, company background, service area information, and brand assets for journalists and publications.',
  alternates: { canonical: `${SITE_URL}/press` },
};

export default function PressPage() {
  return (
    <>
      <SchemaMarkup
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Press & Media — USA Home Buyers',
          description:
            'Press resources for USA Home Buyers LLC. Media inquiries, company background, and brand assets.',
          url: `${SITE_URL}/press`,
        }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Press &amp; Media</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Resources for journalists, researchers, and media professionals covering real estate,
              housing, and homeowner solutions.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About USA Home Buyers</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                USA Home Buyers LLC is a direct home buying company that purchases residential
                properties in as-is condition. We specialize in helping homeowners who need to sell
                quickly due to foreclosure, inherited properties, divorce, relocation, code
                violations, or other time-sensitive situations.
              </p>
              <p>
                We provide cash offers within 24 hours and can close in as few as 7 days. Sellers
                pay no commissions, no closing costs, and make no repairs. Our process is designed
                for speed and certainty — not every seller needs a traditional listing, and we
                provide an alternative for those who value a guaranteed outcome.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Facts</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Headquarters: Pennsylvania</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Service Area: Nationwide (focus on PA, NY, MI, WV, ND)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Business Model: Direct cash purchases and novation agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Typical Close Time: 7–30 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>Website: <Link href="/" className="text-blue-600 hover:underline">selltousahome.com</Link></span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Media Contact</h3>
                <div className="space-y-3 text-gray-700">
                  <p>For press inquiries, interviews, or data requests:</p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className="text-blue-600 hover:underline">
                      {PHONE}
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{' '}
                    <Link href="/contact" className="text-blue-600 hover:underline">
                      selltousahome.com/contact
                    </Link>
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    We typically respond to media inquiries within one business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics We Cover */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Topics &amp; Expertise</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team can provide expert commentary and data on the following topics:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Foreclosure Prevention', desc: 'How homeowners avoid sheriff sales by selling directly.' },
                { title: 'Cash Home Buying', desc: 'How direct-purchase companies work and differ from iBuyers.' },
                { title: 'Distressed Properties', desc: 'Market trends in as-is property sales and renovation economics.' },
                { title: 'Inherited Real Estate', desc: 'Probate property challenges and options for heirs.' },
                { title: 'Local Housing Markets', desc: 'Neighborhood-level pricing data across PA and nationwide.' },
                { title: 'Seller Demographics', desc: 'Who sells to cash buyers and why — data-backed insights.' },
              ].map((topic) => (
                <div key={topic.title} className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-sm text-gray-600">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Resources */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Brand Resources</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                For verified company information, structured data, and brand facts suitable for
                AI-powered search engines and research tools, visit our{' '}
                <Link href="/brand-facts" className="text-blue-600 hover:underline">
                  Brand Facts
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Not Press? Need to Sell Your Home?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a no-obligation cash offer in 24 hours.
            </p>
            <CashOfferForm variant="hero" />
          </div>
        </section>
      </main>
    </>
  );
}
