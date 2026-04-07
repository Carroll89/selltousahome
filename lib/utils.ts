export function getUTMParam(param: string): string {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get(param) || '';
}

export const PHONE = process.env.NEXT_PUBLIC_PHONE || '717-576-8192';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://selltousahome.com';
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
