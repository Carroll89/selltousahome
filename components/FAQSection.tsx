'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  heading?: string;
}

export function FAQSection({ items, heading = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="my-10">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">{heading}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-brand-dark hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
              aria-expanded={openIndex === i}
            >
              <h3 className="text-base font-semibold pr-4">{item.question}</h3>
              <span className="flex-shrink-0 text-brand-primary text-xl">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-5 py-4 bg-gray-50 text-gray-700 text-base leading-relaxed prose max-w-none">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
