import type { Metadata } from 'next';
import Image from 'next/image';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { PHONE, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Reviews — Harrisburg PA Cash Home Buyers',
  description:
    'Read reviews from homeowners who sold their house to USA Home Buyers in Harrisburg, PA. Real stories from inheritance, foreclosure, divorce, and problem tenant sales.',
  alternates: { canonical: 'https://www.selltousahome.com/reviews' },
};

const REVIEWS = [
  {
    quote: 'After my mother passed, my brother and I inherited her house off Derry Street. Neither of us lives in Harrisburg anymore, and the thought of cleaning it out and making repairs before listing felt impossible. USA Home Buyers made us a fair offer and closed in 12 days. We didn\'t have to touch a thing.',
    name: 'Sandra M.',
    location: 'Paxtang, PA',
    situation: 'Inherited Property — Estate Sale',
    date: 'March 2026',
    stars: 5,
  },
  {
    quote: 'I was four months behind on my mortgage and the notices were stacking up. I didn\'t even know I could sell and still come out with money. USA Home Buyers explained the whole thing, the offer was fair, and we closed before things got worse. Huge weight off my shoulders.',
    name: 'James R.',
    location: 'Steelton, PA',
    situation: 'Behind on Payments — Pre-Foreclosure',
    date: 'February 2026',
    stars: 5,
  },
  {
    quote: 'I had a tenant who stopped paying rent and refused to leave. I was paying the mortgage out of pocket for months. USA Home Buyers bought the property with the tenant still in it. That was the end of my landlord days. Done.',
    name: 'Carol T.',
    location: 'Harrisburg, PA',
    situation: 'Rental Property — Problem Tenant',
    date: 'January 2026',
    stars: 5,
  },
  {
    quote: 'My divorce was already complicated enough. The last thing I needed was months of showings and price negotiation fights with my ex. We both agreed to a cash sale, and USA Home Buyers made it simple. Offer in 24 hours, closed in 10 days. Proceeds split at closing, done.',
    name: 'Michelle K.',
    location: 'Mechanicsburg, PA',
    situation: 'Divorce — Marital Home Sale',
    date: 'December 2025',
    stars: 5,
  },
  {
    quote: 'The house had some foundation issues and hadn\'t been updated since the 80s. I got quotes from contractors and the repair costs were going to eat everything I\'d make listing it. USA Home Buyers bought it as-is. I\'m glad I called.',
    name: 'Robert F.',
    location: 'Carlisle, PA',
    situation: 'Major Repairs — Sold As-Is',
    date: 'November 2025',
    stars: 5,
  },
  {
    quote: 'The property had been vacant for two years. Taxes were piling up, the insurance company was threatening to cancel, and I live three states away. I just needed it gone. They handled everything and I closed remotely. Couldn\'t be easier.',
    name: 'Patricia L.',
    location: 'Out of State — Harrisburg Property',
    situation: 'Vacant Property — Out of State Owner',
    date: 'October 2025',
    stars: 5,
  },
  {
    quote: 'I was skeptical. I\'ve seen the "we buy houses" signs and figured it was going to be a lowball situation. But the offer was in line with what I expected given the condition of the house, and there were no games at closing. What they offered was what I got.',
    name: 'Thomas B.',
    location: 'Hershey, PA',
    situation: 'Distressed Property Sale',
    date: 'September 2025',
    stars: 5,
  },
  {
    quote: 'My mother had to move into memory care and we needed to liquidate her house quickly to cover the costs. Time was our biggest concern. USA Home Buyers moved fast — offer in a day, closed in two weeks. That money went straight to her care facility.',
    name: 'Diane W.',
    location: 'Camp Hill, PA',
    situation: 'Senior Transition — Memory Care Funding',
    date: 'August 2025',
    stars: 5,
  },
];

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'USA Home Buyers',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: REVIEWS.length.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: REVIEWS.map((r) => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.stars.toString(),
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: r.name,
    },
    reviewBody: r.quote,
    datePublished: r.date,
  })),
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <SchemaMarkup schema={[reviewSchema]} />

      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src="/images/harrisburg-hero.jpg"
          alt="Pennsylvania home — sell your house fast for cash"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real Stories from Real Homeowners
          </h1>
          <p className="text-lg text-blue-100 mb-2">
            We&apos;ve helped homeowners across Harrisburg and Central PA sell fast — without repairs, agents,
            or months of uncertainty.
          </p>
          <p className="text-blue-300 text-sm">
            These are their words, not ours.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="flex items-center gap-4 mb-10 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-dark">5.0</div>
            <div className="flex justify-center mt-1">
              <StarRating count={5} />
            </div>
            <div className="text-sm text-gray-500 mt-1">{REVIEWS.length} reviews</div>
          </div>
          <div className="border-l border-yellow-200 pl-6">
            <p className="text-gray-700 text-sm">
              Every homeowner we&apos;ve worked with has had a different situation — inheritance, foreclosure,
              divorce, bad tenants, major repairs. What they have in common is that they needed speed,
              certainty, and zero hassle. That&apos;s what we deliver.
            </p>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {REVIEWS.map((review, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <StarRating count={review.stars} />
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4 italic">&ldquo;{review.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-brand-dark text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                <span className="text-xs bg-blue-50 text-brand-primary border border-blue-100 rounded-full px-3 py-1">
                  {review.situation}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Your Situation Might Be Different</h2>
          <p className="text-gray-600 text-sm mb-4">
            Every property is unique. The only way to know if we&apos;re the right fit is to talk. No obligation —
            just a conversation about your property and what you need.
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Call {PHONE}
          </a>
        </div>

        <CashOfferForm
          variant="inline"
          headline="Get Your Cash Offer"
          subheadline="No obligation. Written offer in 24 hours. We pay all closing costs."
          sourcePage="/reviews"
        />
      </div>
    </>
  );
}
