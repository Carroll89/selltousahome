'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { PHONE } from '@/lib/utils';

// This is a client component for the GA4 conversion event.
// Meta title/description is inherited from the root layout default.

export default function ThankYouPage() {
  useEffect(() => {
    // GA4 conversion event — fires once on mount
    // Push GA4 conversion event via dataLayer
    type WindowWithGA = Window & {
      dataLayer?: Record<string, unknown>[];
      gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
    };
    const win = window as WindowWithGA;
    win.dataLayer = win.dataLayer ?? [];
    win.dataLayer.push({
      event: 'conversion',
      event_category: 'lead',
      event_label: 'cash_offer_form_submit',
      value: 1,
    });
    if (typeof win.gtag === 'function') {
      win.gtag('event', 'generate_lead', {
        event_category: 'lead',
        event_label: 'cash_offer_form_submit',
        value: 1,
        currency: 'USD',
      });
    }
  }, []);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-lg w-full text-center">
        {/* Checkmark Icon */}
        <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>

        {/* Body */}
        <p className="text-lg text-gray-600 mb-3">
          We received your information.
        </p>
        <p className="text-lg text-gray-700 font-medium mb-8">
          A member of our team will call you within 24 hours.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8" />

        {/* Call CTA */}
        <p className="text-gray-500 mb-4 text-sm uppercase tracking-wide font-semibold">
          Can&apos;t wait? Call us now
        </p>
        <a
          href={`tel:${PHONE.replace(/\D/g, '')}`}
          className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-brand-primary/90 transition-colors"
        >
          📞 {PHONE}
        </a>

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/"
            className="text-brand-primary hover:underline text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
