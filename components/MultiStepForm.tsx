'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { GHL_WEBHOOK_URL, getUTMParam, getSourceChannel } from '@/lib/utils';

interface MultiStepFormProps {
  sourcePage?: string;
}

const SITUATION_CARDS = [
  { value: 'inherited-estate', label: 'Inherited Property', emoji: '🏠' },
  { value: 'behind-mortgage', label: 'Facing Foreclosure', emoji: '⚠️' },
  { value: 'divorce', label: 'Going Through Divorce', emoji: '⚖️' },
  { value: 'needs-repairs', label: 'Need Repairs / As-Is', emoji: '🔨' },
  { value: 'relocating', label: 'Relocating / Need to Sell Fast', emoji: '📦' },
  { value: 'other', label: 'Other', emoji: '💬' },
];

const TIMELINE_CARDS = [
  { value: 'asap', label: 'ASAP', sublabel: 'Within 2 weeks' },
  { value: '1-3-months', label: '1–3 Months', sublabel: 'Moderate timeline' },
  { value: '3-6-months', label: '3–6 Months', sublabel: 'Flexible timeline' },
  { value: 'exploring', label: 'Just Exploring', sublabel: 'No set timeline yet' },
];

const TOTAL_STEPS = 4;

export function MultiStepForm({ sourcePage }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [situation, setSituation] = useState('');
  const [timeline, setTimeline] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const addressRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('first_touch_url')) {
      sessionStorage.setItem('first_touch_url', window.location.href);
    }
  }, []);

  useEffect(() => {
    if (step === 3 && addressRef.current) {
      addressRef.current.focus();
    }
    if (step === 4 && nameRef.current) {
      nameRef.current.focus();
    }
  }, [step]);

  function goToStep(next: number) {
    setAnimating(true);
    setTimeout(() => {
      setStep(next);
      setAnimating(false);
    }, 200);
  }

  function selectSituation(value: string) {
    setSituation(value);
    goToStep(2);
  }

  function selectTimeline(value: string) {
    setTimeline(value);
    goToStep(3);
  }

  function handleAddressNext(e: FormEvent) {
    e.preventDefault();
    if (!propertyAddress.trim()) {
      setErrors({ propertyAddress: 'Property address is required' });
      return;
    }
    setErrors({});
    goToStep(4);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const [firstName, ...lastParts] = name.trim().split(' ');
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    const marketMatch = path.match(/\/markets\/([^/]+)/);

    const payload = {
      firstName,
      lastName: lastParts.join(' ') || '',
      name: name.trim(),
      phone,
      email: email || '',
      propertyAddress,
      address1: propertyAddress,
      situation,
      timeline,
      site: 'harrisburg-pa',
      sourcePage: sourcePage || path,
      utmSource: getUTMParam('utm_source'),
      utmMedium: getUTMParam('utm_medium'),
      utmCampaign: getUTMParam('utm_campaign'),
      source_market: marketMatch ? marketMatch[1] : '',
      source_page_type: path.startsWith('/markets/')
        ? 'market'
        : path.startsWith('/guides/')
        ? 'guide'
        : path.startsWith('/blog/')
        ? 'blog'
        : 'other',
      source_channel: getSourceChannel(),
      first_touch_url:
        typeof window !== 'undefined'
          ? sessionStorage.getItem('first_touch_url') || window.location.href
          : '',
      tags: ['geo_site_lead', 'selltousahome', 'multi_step_survey'],
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
        situation,
        timeline,
        source_page: path,
        form_type: 'multi_step_survey',
      });
    }

    window.location.href = `/thank-you?name=${encodeURIComponent(firstName)}`;
  }

  const progressPct = (step / TOTAL_STEPS) * 100;

  return (
    <div id="survey-form" className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6 text-center">
        <p className="text-sm font-medium text-gray-500 mb-2">
          Step {step} of {TOTAL_STEPS}
        </p>
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-brand-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Step content */}
      <div
        className={`transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Step 1: Situation */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-2">
              What&apos;s your situation?
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">
              Select the option that best describes you
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SITUATION_CARDS.map((card) => (
                <button
                  key={card.value}
                  type="button"
                  onClick={() => selectSituation(card.value)}
                  className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-brand-primary hover:bg-blue-50 text-left transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                >
                  <span className="text-2xl flex-shrink-0">{card.emoji}</span>
                  <span className="font-semibold text-brand-dark text-sm leading-tight">
                    {card.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Timeline */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-2">
              What&apos;s your timeline?
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">
              When are you hoping to sell?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TIMELINE_CARDS.map((card) => (
                <button
                  key={card.value}
                  type="button"
                  onClick={() => selectTimeline(card.value)}
                  className="flex flex-col items-center justify-center p-5 rounded-xl border-2 border-gray-200 hover:border-brand-primary hover:bg-blue-50 text-center transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 min-h-[80px]"
                >
                  <span className="font-bold text-brand-dark">{card.label}</span>
                  <span className="text-xs text-gray-500 mt-1">{card.sublabel}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => goToStep(1)}
              className="mt-4 text-sm text-gray-400 hover:text-gray-600 underline block mx-auto"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Property Address */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-2">
              Where&apos;s the property?
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">
              Enter the address of the home you want to sell
            </p>
            <form onSubmit={handleAddressNext} className="space-y-4">
              <div>
                <label
                  htmlFor="msf-address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Property Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="msf-address"
                  ref={addressRef}
                  type="text"
                  autoComplete="street-address"
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                  placeholder="123 Main St, Harrisburg, PA"
                  className="block w-full rounded-lg border-gray-300 focus:ring-brand-primary focus:border-brand-primary min-h-[44px] text-base px-3"
                />
                {errors.propertyAddress && (
                  <p className="mt-1 text-sm text-red-500">{errors.propertyAddress}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-4 px-6 bg-brand-primary hover:bg-blue-800 text-white font-bold text-lg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              >
                Next →
              </button>
            </form>
            <button
              type="button"
              onClick={() => goToStep(2)}
              className="mt-4 text-sm text-gray-400 hover:text-gray-600 underline block mx-auto"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 4: Contact Info */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-2">
              How can we reach you?
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">
              We&apos;ll call you within hours with your cash offer
            </p>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="msf-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="msf-name"
                  ref={nameRef}
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First and last name"
                  className="block w-full rounded-lg border-gray-300 focus:ring-brand-primary focus:border-brand-primary min-h-[44px] text-base px-3"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="msf-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="msf-phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(717) 555-0000"
                  className="block w-full rounded-lg border-gray-300 focus:ring-brand-primary focus:border-brand-primary min-h-[44px] text-base px-3"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="msf-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email{' '}
                  <span className="text-xs text-gray-400">Optional</span>
                </label>
                <input
                  id="msf-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="block w-full rounded-lg border-gray-300 focus:ring-brand-primary focus:border-brand-primary min-h-[44px] text-base px-3"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 bg-brand-secondary hover:bg-green-700 disabled:opacity-60 text-white font-bold text-lg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {submitting ? 'Submitting...' : 'Get My Cash Offer →'}
              </button>
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our{' '}
                <a href="/privacy-policy" className="underline hover:text-brand-primary">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms-of-service" className="underline hover:text-brand-primary">
                  Terms of Service
                </a>
                . You consent to receive calls and texts from USA Home Buyers.
              </p>
            </form>
            <button
              type="button"
              onClick={() => goToStep(3)}
              className="mt-2 text-sm text-gray-400 hover:text-gray-600 underline block mx-auto"
            >
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
