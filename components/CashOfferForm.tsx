'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';

// Minimal Google Maps types needed for Autocomplete
declare global {
  interface Window {
    google?: {
      maps: {
        places: {
          Autocomplete: new (
            input: HTMLInputElement,
            opts?: { types?: string[]; componentRestrictions?: { country: string } }
          ) => {
            addListener: (event: string, handler: () => void) => void;
            getPlace: () => { formatted_address?: string };
          };
        };
      };
    };
    initGooglePlaces?: () => void;
  }
}
import { GHL_WEBHOOK_URL, SITUATION_OPTIONS, getUTMParam, getSourceChannel } from '@/lib/utils';

interface CashOfferFormProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  variant?: 'hero' | 'inline' | 'footer';
  sourcePage?: string;
  placeholderCity?: string;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function getCityFromSourcePage(sourcePage?: string): string {
  if (!sourcePage) return 'Your City';
  if (sourcePage.includes('erie-pa')) return 'Erie';
  if (sourcePage.includes('harrisburg-pa')) return 'Harrisburg';
  if (sourcePage.includes('allentown-pa')) return 'Allentown';
  if (sourcePage.includes('king-of-prussia-pa')) return 'King of Prussia';
  if (sourcePage.includes('reading-pa')) return 'Reading';
  if (sourcePage.includes('state-college-pa')) return 'State College';
  if (sourcePage.includes('bethlehem-pa')) return 'Bethlehem';
  if (sourcePage.includes('lancaster-pa')) return 'Lancaster';
  if (sourcePage.includes('york-pa')) return 'York';
  if (sourcePage.includes('wilmington-de')) return 'Wilmington';
  if (sourcePage.includes('youngstown-oh')) return 'Youngstown';
  return 'Your City';
}

function getStateFromSourcePage(sourcePage?: string): string {
  if (!sourcePage) return '';
  if (sourcePage.includes('wilmington-de')) return 'DE';
  if (sourcePage.includes('youngstown-oh')) return 'OH';
  // Default to PA for all Pennsylvania markets
  if (sourcePage.includes('-pa') || sourcePage.includes('harrisburg') || sourcePage.includes('allentown') || sourcePage.includes('king-of-prussia') || sourcePage.includes('reading') || sourcePage.includes('erie') || sourcePage.includes('state-college') || sourcePage.includes('bethlehem') || sourcePage.includes('lancaster') || sourcePage.includes('york-pa')) return 'PA';
  return '';
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
  buttonText,
  variant = 'hero',
  sourcePage,
  placeholderCity,
}: CashOfferFormProps) {
  const resolvedCity = placeholderCity || getCityFromSourcePage(sourcePage);
  const resolvedButtonText = buttonText ?? (variant === 'hero' ? 'Get My Cash Offer →' : 'Get My Cash Offer in 24 Hours →');
  const resolvedState = getStateFromSourcePage(sourcePage);
  const addressStateSuffix = resolvedState ? `, ${resolvedState}` : '';
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    propertyAddress: '',
    situation: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const addressInputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autocompleteRef = useRef<any>(null);

  // Load Google Places and attach autocomplete
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY;
    if (!apiKey || typeof window === 'undefined') return;

    function initAutocomplete() {
      if (!addressInputRef.current || !window.google?.maps?.places) return;
      const ac = new window.google.maps.places.Autocomplete(addressInputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'us' },
      });
      ac.addListener('place_changed', () => {
        const place = ac.getPlace();
        if (place.formatted_address) {
          setForm((prev) => ({ ...prev, propertyAddress: place.formatted_address! }));
        }
      });
      autocompleteRef.current = ac;
    }

    // If already loaded
    if (window.google?.maps?.places) {
      initAutocomplete();
      return;
    }

    // Load the script once
    const scriptId = 'google-places-script';
    if (!document.getElementById(scriptId)) {
      window.initGooglePlaces = initAutocomplete;
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGooglePlaces`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      // Script tag exists but callback already fired; try again shortly
      const timer = setTimeout(initAutocomplete, 500);
      return () => clearTimeout(timer);
    }
  }, []);

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
      phone: form.phone.replace(/\D/g, ''),
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

    if (typeof window !== 'undefined') {
      const analyticsWindow = window as Window & { gtag?: (...args: unknown[]) => void };
      if (typeof analyticsWindow.gtag === 'function') {
        analyticsWindow.gtag('event', 'form_submit', {
          situation: form.situation,
          source_page: window.location.pathname,
        });
      }
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
    : 'mt-1 block w-full rounded-lg border-gray-300 text-gray-900 focus:ring-brand-primary focus:border-brand-primary min-h-[44px]';

  return (
    <div id="lead-form" className={containerClass}>
      <h2 className={`text-2xl font-bold mb-1 ${isFooter ? 'text-white' : 'text-brand-dark'}`}>
        {headline}
      </h2>
      <p className={`text-sm mb-4 ${isFooter ? 'text-gray-300' : 'text-gray-500'}`}>{subheadline}</p>

      {/* TODO(Lens/Dan): Replace text placeholder with official BBB A+ Accredited badge image when received. Target path: public/images/trust/bbb-a-plus.png */}
      {variant === 'hero' && (
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
          <div className="flex-shrink-0 bg-blue-900 text-white text-xs font-bold px-3 py-2 rounded leading-tight text-center" aria-label="BBB A+ Accredited Business">
            <div>BBB</div>
            <div className="text-yellow-300">A+ RATED</div>
          </div>
          <div className="text-xs text-gray-600 leading-snug">
            <div className="font-semibold text-gray-800">Accredited Business</div>
            <div>Better Business Bureau · A+ Rating</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className={variant === 'hero' ? 'space-y-3' : 'space-y-4'}>
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
            onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
            className={inputClass}
            placeholder="(555) 555-0000"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="propertyAddress" className={`block text-sm font-medium ${labelClass}`}>
            Property Address <span className="text-red-500">*</span>
          </label>
          <input
            id="propertyAddress"
            ref={addressInputRef}
            type="text"
            autoComplete="street-address"
            value={form.propertyAddress}
            onChange={(e) => setForm({ ...form, propertyAddress: e.target.value })}
            className={inputClass}
            placeholder={`123 Main St, ${resolvedCity}${addressStateSuffix}`}
          />
          {errors.propertyAddress && (
            <p className="mt-1 text-sm text-red-500">{errors.propertyAddress}</p>
          )}
        </div>

        {variant !== 'hero' && (
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
        )}

        {variant !== 'hero' && (
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
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 px-6 bg-brand-secondary hover:bg-green-700 disabled:opacity-60 text-white font-bold text-lg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          {submitting ? 'Submitting...' : resolvedButtonText}
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
