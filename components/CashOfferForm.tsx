'use client';

import { useState, useEffect, FormEvent } from 'react';
import { GHL_WEBHOOK_URL, SITUATION_OPTIONS, getUTMParam, getSourceChannel } from '@/lib/utils';

interface CashOfferFormProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  variant?: 'hero' | 'inline' | 'footer';
  sourcePage?: string;
  placeholderCity?: string;
}

function getCityFromSourcePage(sourcePage?: string): string {
  if (!sourcePage) return 'Your City';
  if (sourcePage.includes('erie-pa')) return 'Erie';
  if (sourcePage.includes('harrisburg-pa')) return 'Harrisburg';
  if (sourcePage.includes('allentown-pa')) return 'Allentown';
  if (sourcePage.includes('king-of-prussia-pa')) return 'King of Prussia';
  if (sourcePage.includes('reading-pa')) return 'Reading';
  return 'Your City';
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  propertyAddress: string;
  situation: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  propertyAddress?: string;
}

export function CashOfferForm({
  headline = 'Get Your Cash Offer in 24 Hours',
  subheadline = 'Takes 2 minutes. No obligation.',
  buttonText = 'Get My Cash Offer in 24 Hours →',
  variant = 'hero',
  sourcePage,
  placeholderCity,
}: CashOfferFormProps) {
  const resolvedCity = placeholderCity || getCityFromSourcePage(sourcePage);
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    propertyAddress: '',
    situation: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('first_touch_url')) {
      sessionStorage.setItem('first_touch_url', window.location.href);
    }
  }, []);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.propertyAddress.trim()) newErrors.propertyAddress = 'Property address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const [firstName, ...lastParts] = form.name.trim().split(' ');
    const payload = {
      firstName,
      lastName: lastParts.join(' ') || '',
      name: form.name.trim(),
      phone: form.phone,
      email: form.email || '',
      propertyAddress: form.propertyAddress,
      address1: form.propertyAddress,
      situation: form.situation,
      site: 'harrisburg-pa',
      sourcePage: sourcePage || (typeof window !== 'undefined' ? window.location.pathname : ''),
      utmSource: getUTMParam('utm_source'),
      utmMedium: getUTMParam('utm_medium'),
      utmCampaign: getUTMParam('utm_campaign'),
      source_market: (() => {
        const path = typeof window !== 'undefined' ? window.location.pathname : '';
        const match = path.match(/\/markets\/([^/]+)/);
        return match ? match[1] : '';
      })(),
      source_page_type: (() => {
        const path = typeof window !== 'undefined' ? window.location.pathname : '';
        if (path.startsWith('/markets/')) return 'market';
        if (path.startsWith('/guides/')) return 'guide';
        if (path.startsWith('/blog/')) return 'blog';
        return 'other';
      })(),
      source_channel: getSourceChannel(),
      first_touch_url: typeof window !== 'undefined' ? sessionStorage.getItem('first_touch_url') || window.location.href : '',
      tags: ['geo_site_lead', 'selltousahome'],
    };

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Continue to thank-you regardless
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        situation: form.situation,
        source_page: typeof window !== 'undefined' ? window.location.pathname : '',
      });
    }

    window.location.href = `/thank-you?name=${encodeURIComponent(firstName)}`;
  }

  const isFooter = variant === 'footer';
  const containerClass = isFooter
    ? 'bg-brand-dark rounded-xl p-6 text-white'
    : variant === 'hero'
    ? 'bg-white rounded-xl shadow-xl p-6 md:p-8'
    : 'bg-brand-light border border-gray-200 rounded-xl p-6';

  const labelClass = isFooter ? 'text-gray-200' : 'text-gray-700';
  const inputClass = isFooter
    ? 'mt-1 block w-full rounded-lg border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-brand-primary focus:border-brand-primary min-h-[44px]'
    : 'mt-1 block w-full rounded-lg border-gray-300 focus:ring-brand-primary focus:border-brand-primary min-h-[44px]';

  return (
    <div id="lead-form" className={containerClass}>
      <h2 className={`text-2xl font-bold mb-1 ${isFooter ? 'text-white' : 'text-brand-dark'}`}>
        {headline}
      </h2>
      <p className={`text-sm mb-4 ${isFooter ? 'text-gray-300' : 'text-gray-500'}`}>{subheadline}</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="name" className={`block text-sm font-medium ${labelClass}`}>
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="First and last name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={`block text-sm font-medium ${labelClass}`}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            placeholder="(717) 555-0000"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="propertyAddress" className={`block text-sm font-medium ${labelClass}`}>
            Property Address <span className="text-red-500">*</span>
          </label>
          <input
            id="propertyAddress"
            type="text"
            autoComplete="street-address"
            value={form.propertyAddress}
            onChange={(e) => setForm({ ...form, propertyAddress: e.target.value })}
            className={inputClass}
            placeholder={`123 Main St, ${resolvedCity}, PA`}
          />
          {errors.propertyAddress && (
            <p className="mt-1 text-sm text-red-500">{errors.propertyAddress}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={`block text-sm font-medium ${labelClass}`}>
            Email <span className={`text-xs ${isFooter ? 'text-gray-400' : 'text-gray-400'}`}>(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="situation" className={`block text-sm font-medium ${labelClass}`}>
            Your Situation
          </label>
          <select
            id="situation"
            value={form.situation}
            onChange={(e) => setForm({ ...form, situation: e.target.value })}
            className={inputClass}
          >
            <option value="">Select your situation...</option>
            {SITUATION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 px-6 bg-brand-secondary hover:bg-green-700 disabled:opacity-60 text-white font-bold text-lg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          {submitting ? 'Submitting...' : buttonText}
        </button>

        <p className={`text-xs ${isFooter ? 'text-gray-400' : 'text-gray-500'}`}>
          By submitting, you agree to our{' '}
          <a href="/privacy-policy" className="underline hover:text-brand-primary">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms-of-service" className="underline hover:text-brand-primary">
            Terms of Service
          </a>
          . You consent to receive calls and texts from USA Home Buyers. We never share your information.
        </p>
      </form>
    </div>
  );
}
