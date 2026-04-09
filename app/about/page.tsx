import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { organizationSchema } from '@/lib/schema';
import { PHONE } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Us | We Buy Houses for Cash in Harrisburg PA',
  description:
    'USA Home Buyers LLC is a local cash home buying company serving Harrisburg and Central Pennsylvania. We buy houses as-is, in any condition. No repairs, no fees, close in 7-14 days.',
  alternates: { canonical: 'https://selltousahome.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              About USA Home Buyers
            </h1>
            <p className="text-lg text-blue-100 mb-4">
              We&apos;re a local company that buys houses in Harrisburg and Central Pennsylvania — for cash, as-is,
              with no repairs, no agent fees, and no surprises. We close in 7-14 days.
            </p>
            <p className="text-blue-200 mb-6">
              We started this company because we saw a gap: homeowners dealing with real problems — inherited
              properties, foreclosure, divorce, problem tenants — who needed a fast, dependable way out, and
              had no good options. Traditional agents weren&apos;t built for their situation. We are.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage="/about" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">What We Do</h2>
          <p className="text-gray-700 mb-4">
            USA Home Buyers LLC acquires residential properties directly from homeowners — for cash, in as-is
            condition. That means no repairs, no cleanouts, no staging, no months of showings. You pick the
            closing date. We pay all standard closing costs. You walk away with cash.
          </p>
          <p className="text-gray-700 mb-4">
            We work primarily in Harrisburg, Steelton, Hershey, Carlisle, Mechanicsburg, and the surrounding
            Dauphin and Cumberland County area. If you&apos;re in Central Pennsylvania, we can likely help.
          </p>
          <p className="text-gray-700">
            Our offer will typically be below full retail market value — that&apos;s the trade-off for speed,
            certainty, and zero hassle. For homeowners in distressed situations, that trade-off is often
            the right one. We&apos;re transparent about how we work.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Who We Help</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Inherited Property',
                desc: 'You inherited a house and don\'t want the carrying costs, maintenance headaches, or conflict between heirs. You want it done.',
              },
              {
                title: 'Behind on Mortgage',
                desc: 'You\'ve missed payments and the foreclosure timeline is ticking. You have equity and want to protect it — and your credit.',
              },
              {
                title: 'Divorce',
                desc: 'You and your spouse need to sell the house as part of a settlement. The faster it\'s done, the sooner both parties can move on.',
              },
              {
                title: 'Problem Tenants',
                desc: 'You have a rental with a tenant who won\'t pay, won\'t leave, or has trashed the unit. We buy landlord headaches.',
              },
              {
                title: 'Major Repairs Needed',
                desc: 'The roof is shot, the foundation has issues, the kitchen is from 1987. You don\'t want to deal with contractors. Neither do we — we handle it after closing.',
              },
              {
                title: 'Vacant Property',
                desc: 'A property that\'s been sitting vacant — eating money in taxes, insurance, and maintenance — while you figure out what to do.',
              },
              {
                title: 'Relocating',
                desc: 'You\'ve taken a job elsewhere and can\'t carry two properties while waiting for a retail buyer. You need it sold fast.',
              },
              {
                title: 'Other Difficult Situations',
                desc: 'Code violations, back taxes, liens, estate complications, hoarding cleanup — if the situation is complicated, that\'s usually where we\'re most useful.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">How the Process Works</h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Tell us about the property',
                desc: 'Fill out the form on this site or call us directly. We\'ll ask basic questions about the property — address, condition, your situation. Takes about 5 minutes.',
              },
              {
                step: '2',
                title: 'We research and run numbers',
                desc: 'We look at comparable sales, property records, and tax data. We may do a quick walkthrough or ask for photos if the condition is unclear.',
              },
              {
                step: '3',
                title: 'You get a written cash offer in 24 hours',
                desc: 'We send you a written offer with no obligation. You can accept, decline, or ask questions. No pressure.',
              },
              {
                step: '4',
                title: 'Pick your closing date',
                desc: 'We can close in 7 days or give you more time if you need it. You pick the date. We coordinate with a local title company.',
              },
              {
                step: '5',
                title: 'Get paid at closing',
                desc: 'Sign the docs, get your money via wire transfer or check. Done. We cover standard closing costs — no surprise deductions.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Our Promise</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                <strong className="text-brand-dark">We don&apos;t make lowball offers hoping you don&apos;t know better.</strong>{' '}
                Our offers are based on real market data. If you feel the number is off, ask us to walk through our
                math. We will.
              </p>
              <p>
                <strong className="text-brand-dark">We don&apos;t charge hidden fees.</strong>{' '}
                No commissions, no processing fees, no deductions at closing. What we offer is what you get.
              </p>
              <p>
                <strong className="text-brand-dark">We don&apos;t pressure you to sign anything.</strong>{' '}
                Our offers have no obligation attached. You can take time to think, talk to family, consult
                an attorney. That&apos;s your right, and we&apos;ll respect it.
              </p>
              <p>
                <strong className="text-brand-dark">We close on time.</strong>{' '}
                Cash buys don&apos;t fall through due to financing. When we say we&apos;re closing on Tuesday, we&apos;re closing
                on Tuesday.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-brand-dark mb-2">Call or Text</h3>
              <a href={`tel:${PHONE}`} className="text-2xl font-bold text-brand-primary hover:underline">
                {PHONE}
              </a>
              <p className="text-sm text-gray-600 mt-2">Mon–Fri 8am–6pm. We answer.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-brand-dark mb-2">Submit Online</h3>
              <p className="text-sm text-gray-600 mb-3">Fill out the form below and we&apos;ll be in touch within a few hours.</p>
              <Link href="/#get-offer" className="text-brand-primary font-semibold hover:underline text-sm">
                Get a Cash Offer →
              </Link>
            </div>
          </div>
        </section>

        <CashOfferForm
          variant="inline"
          headline="Ready to Get Your Offer?"
          subheadline="No obligation. No fees. Written offer in 24 hours."
          sourcePage="/about"
        />
      </div>
    </>
  );
}
