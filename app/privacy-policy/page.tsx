import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Privacy Policy | USA Home Buyers',
  description:
    'Read how USA Home Buyers collects, uses, and protects your information when you call us, fill out a form, or browse selltousahome.com.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  url: `${SITE_URL}/privacy-policy`,
  description:
    'Privacy policy for USA Home Buyers covering form submissions, cookies, analytics, data use, and contact information.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'USA Home Buyers',
    url: SITE_URL,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaMarkup schema={[privacySchema]} />

      <section className="bg-brand-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2">
            <Link href="/" className="hover:text-white">USA Home Buyers</Link> › Privacy Policy
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            If you reach out to us, we treat your information like it matters, because it does. This page explains what we collect,
            why we collect it, and what we do with it.
          </p>
          <p className="text-sm text-blue-200 mt-4">Last updated: April 20, 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What we collect</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              When you fill out a form on this site, call us, text us, or otherwise contact us, we may collect the information you
              choose to give us. That usually includes your name, phone number, email address, property address, and details about
              the house or your situation.
            </p>
            <p>
              We also collect basic website usage data, like which pages people visit, what device they&apos;re using, and how they found
              us. That helps us understand what&apos;s working and where the site needs improvement.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How we use that information</h2>
          <div className="space-y-4 text-gray-700">
            <p>We use your information to do the practical stuff you&apos;d expect, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>responding to your request for a cash offer,</li>
              <li>following up about a property you asked us to review,</li>
              <li>understanding the condition, timeline, and location of the property,</li>
              <li>improving our website, forms, and marketing, and</li>
              <li>keeping records of conversations and submissions.</li>
            </ul>
            <p>
              We do not collect information just to hoard it. If you contact us, it&apos;s because you want to hear back from us, and
              that&apos;s the main reason we use it.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Cookies, analytics, and tracking</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Like most websites, we may use cookies and similar tools to understand traffic, remember basic preferences, and measure
              how people use the site. We may also use analytics tools that show us things like page views, referral sources, and
              form activity.
            </p>
            <p>
              Those tools help us answer simple questions: Which pages are useful? Where are people dropping off? Are our forms
              working? They are not there for us to sell your browsing history.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Who we share information with</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We do not sell your personal information. Period.
            </p>
            <p>
              We may share information with service providers who help us run the business, like website hosting, analytics, CRM,
              phone, advertising, or title and closing partners, but only when that sharing is needed to operate the site, respond to
              your request, or move a transaction forward.
            </p>
            <p>
              We may also disclose information if we are legally required to do so, or if it&apos;s necessary to protect our business,
              users, or the public from fraud, abuse, or unlawful activity.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Pennsylvania privacy note</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              USA Home Buyers is a Pennsylvania-based company, and a lot of the homeowners we work with are in Pennsylvania. If you
              want to know what information we have about you, or you need something corrected, the easiest path is to contact us
              directly and ask. We&apos;ll make a good-faith effort to help.
            </p>
            <p>
              If additional state-specific privacy rights apply to you where you live, you can contact us using the details below and
              we&apos;ll review the request with that in mind.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">How long we keep information</h2>
          <p className="text-gray-700">
            We keep information for as long as it makes business and legal sense, for example to follow up on a lead, document a
            transaction, maintain records, or resolve disputes. We don&apos;t promise to keep everything forever, and we don&apos;t promise to
            delete records instantly on demand, but we do try to handle requests reasonably.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Security</h2>
          <p className="text-gray-700">
            No website can promise perfect security, and we won&apos;t pretend otherwise. What we can say is that we use standard tools and
            reasonable safeguards to protect the information we collect. If you ever think you&apos;ve submitted something in error or need
            us to update it, contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Third-party links</h2>
          <p className="text-gray-700">
            Some pages on this site may link to outside websites. If you click away from selltousahome.com, that other site has its own
            rules and privacy practices. We&apos;re not responsible for those sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Contact us</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-gray-700 space-y-2">
            <p>If you have a privacy question, want to update information, or need clarification, reach out here:</p>
            <p><strong>USA Home Buyers LLC</strong></p>
            <p>Website: <a className="text-brand-primary hover:underline" href={SITE_URL}>{SITE_URL}</a></p>
            <p>Phone: <a className="text-brand-primary hover:underline" href={`tel:${PHONE}`}>{PHONE}</a></p>
            <p>
              You can also use our <Link href="/contact" className="text-brand-primary hover:underline">contact page</Link> to send us a message.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
