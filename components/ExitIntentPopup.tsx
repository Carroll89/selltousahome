'use client';

import { useState, useEffect, useCallback } from 'react';

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('exit_intent_shown')) return;
    sessionStorage.setItem('exit_intent_shown', '1');
    setVisible(true);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobile) {
      const handleMouseOut = (e: MouseEvent) => {
        if (e.clientY < 0) show();
      };
      document.addEventListener('mouseout', handleMouseOut);
      return () => document.removeEventListener('mouseout', handleMouseOut);
    } else {
      let lastScrollY = window.scrollY;
      let triggered = false;

      const timer = setTimeout(() => {
        if (!triggered) {
          triggered = true;
          show();
        }
      }, 30000);

      const handleScroll = () => {
        if (triggered) return;
        const currentScrollY = window.scrollY;
        if (currentScrollY < lastScrollY - 50 && currentScrollY < 100) {
          triggered = true;
          show();
        }
        lastScrollY = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [show]);

  if (!visible) return null;

  function handleCTA() {
    setVisible(false);
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-heading"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 id="exit-popup-heading" className="text-2xl font-bold text-brand-dark mb-3">
          Before you go — get a free, no-obligation cash offer.
        </h2>
        <p className="text-gray-600 mb-6">Takes 30 seconds. No repairs. No fees. Close in 7 days.</p>
        <button
          onClick={handleCTA}
          className="w-full py-4 px-6 bg-brand-secondary hover:bg-green-700 text-white font-bold text-lg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Get My Cash Offer
        </button>
      </div>
    </div>
  );
}
