export function getUTMParam(param: string): string {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get(param) || '';
}

export function getSourceChannel(): string {
  if (typeof window === 'undefined') return 'direct';

  const utmSource = new URLSearchParams(window.location.search).get('utm_source');
  if (utmSource) return 'paid';

  const referrer = document.referrer;
  if (!referrer) return 'direct';

  try {
    const referrerHost = new URL(referrer).hostname;
    if (referrerHost === window.location.hostname) return 'direct';
    if (/google\.com|bing\.com|duckduckgo\.com/.test(referrerHost)) return 'organic';
    if (/chatgpt\.com|perplexity\.ai|claude\.ai/.test(referrerHost)) return 'ai_search';
    if (/facebook\.com|instagram\.com|reddit\.com|twitter\.com/.test(referrerHost)) return 'social';
  } catch {
    // invalid referrer URL
  }

  return 'direct';
}

export const PHONE = process.env.NEXT_PUBLIC_PHONE || '888-274-5006';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.selltousahome.com';
export const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || 'https://rex-ghl-backend.onrender.com/webhooks/website-lead';

export const SITUATION_OPTIONS = [
  { value: 'inherited-estate', label: 'Inherited / Estate property' },
  { value: 'divorce', label: 'Going through divorce' },
  { value: 'behind-mortgage', label: 'Behind on mortgage / Foreclosure' },
  { value: 'landlord-tenants', label: 'Landlord with tenants' },
  { value: 'relocating', label: 'Relocating for work' },
  { value: 'needs-repairs', label: 'House needs major repairs' },
  { value: 'vacant-abandoned', label: 'Vacant / Abandoned property' },
  { value: 'back-taxes-liens', label: 'Back taxes / Liens' },
  { value: 'fast-sale', label: 'Just want a fast sale' },
  { value: 'other', label: 'Other' },
];
