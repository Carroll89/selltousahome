import { PHONE } from '@/lib/utils';

interface MobileCallBarProps {
  phone?: string;
}

export function MobileCallBar({ phone }: MobileCallBarProps) {
  const tel = phone || PHONE;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-white border-t border-gray-200 shadow-lg">
      <a
        href={`tel:${tel}`}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-brand-primary font-semibold"
      >
        📞 Call Now
      </a>
      <a
        href="#lead-form"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-primary text-white font-semibold"
      >
        Get Cash Offer →
      </a>
    </div>
  );
}
