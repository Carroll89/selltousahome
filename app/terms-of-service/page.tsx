import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Terms of Service | USA Home Buyers',
  description:
    'Read the terms that apply when you use selltousahome.com, request an offer, or rely on information published by USA Home Buyers.',
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
};

const termsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  url: `${SITE_URL}/terms-of-service`,
  description:
    'Terms of service for selltousahome.com covering site use, cash offer disclaimers, intellectual property, and limitation of liability.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'USA Home Buyers',
    url: SITE_URL,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <SchemaMarkup schema={[termsSchema]} />

      <section className="bg-brand-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/" className="hover:text-white">USA Home Buyers</Link> › Terms of Service
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            These are the basic ground rules for using this site and requesting a cash offer from USA Home Buyers.
            Nothing fancy, just clear expectations.
          </p>
          <p className="text-sm text-blue-200 mt-4">Last updated: April 20, 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Using this website</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              By using selltousahome.com, you agree to use it for lawful purposes and in a way that doesn&apos;t interfere with the site,
              our business, or other users. Don&apos;t try to break the site, scrape it in a harmful way, submit fake leads, impersonate
              someone else, or use the site to harass anyone.
            </p>
            <p>
              The information on this site is meant to help homeowners understand how our process works. It is general information, not
              legal advice, tax advice, appraisal advice, or financial advice.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cash offer disclaimer</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              If you request an offer from us, any number discussed before we review the property is just an estimate. Real offers are
              based on the property itself, including condition, title issues, access, occupancy, repairs needed, market data, and
              other facts that affect value.
            </p>
            <p>
              A written cash offer is not guaranteed until we have enough information to make one. In many cases that means a property
              walkthrough, photos, or a direct conversation about the house. If something material turns out to be different from what
              we were told, that can affect the offer.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">No guaranteed outcomes</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We do not guarantee that every homeowner will receive an offer, accept an offer, or close a sale. Every property and every
              situation is different. Timelines on the site, including &ldquo;close in 7-14 days,&rdquo; reflect typical scenarios, not a promise
              that every deal will move that fast.
            </p>
            <p>
              Closings can be affected by title issues, probate, liens, access problems, payoff delays, seller circumstances, or other
              issues outside our control.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Your submissions</h2>
          <p className="text-gray-700">
            If you submit information through our forms, you agree that the information is accurate to the best of your knowledge and
            that you have the right to share it with us. That includes property details, contact information, and anything else you send
            through the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Intellectual property</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              The content on this site, including copy, branding, page layouts, graphics, logos, and other original material, belongs to
              USA Home Buyers LLC or is used with permission. You can read it, share links to it, and reference it in normal ways, but
              you may not republish, copy at scale, or reuse it commercially without permission.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Third-party tools and links</h2>
          <p className="text-gray-700">
            We may use third-party tools to host the site, track leads, analyze traffic, or process communications. We may also link to
            outside resources. We are not responsible for the content, policies, or uptime of third-party sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Limitation of liability</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We do our best to keep the site accurate and available, but we can&apos;t promise it will always be error-free, complete, or
              uninterrupted. To the fullest extent allowed by law, USA Home Buyers LLC is not liable for damages that result from your
              use of the site, your inability to use the site, or your reliance on general information published here.
            </p>
            <p>
              If you need legal, tax, or financial guidance about selling a property, talk to a qualified professional. A website should
              not be the final word on that kind of decision.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Changes to these terms</h2>
          <p className="text-gray-700">
            We may update these terms from time to time as the business, site, or applicable law changes. When we do, we&apos;ll update the
            date at the top of this page. Continued use of the site after changes means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Questions</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-gray-700">
            <p>
              If something on this page is unclear, contact us through our <Link href="/contact" className="text-brand-primary hover:underline">contact page</Link> and we&apos;ll point you in the right direction.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
