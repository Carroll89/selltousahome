'use client';

import { useEffect, useState } from 'react';
import { PHONE } from '@/lib/utils';

interface StickyMobileCTAProps {
  phone?: string;
}

export function StickyMobileCTA({ phone }: StickyMobileCTAProps) {
  const tel = phone || PHONE;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const forms = document.querySelectorAll('form');
    if (forms.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Hide if ANY form is in viewport
        const anyVisible = entries.some((entry) => entry.isIntersecting);
        setVisible(!anyVisible);
      },
      { threshold: 0.1 }
    );

    forms.forEach((form) => observer.observe(form));
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.08)]">
      <a
        href={`tel:${tel}`}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white font-bold text-sm"
      >
        📞 Call Now
      </a>
      <a
        href="#lead-form"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-brand-primary text-white font-bold text-sm"
      >
        Get Cash Offer →
      </a>
    </div>
  );
}
