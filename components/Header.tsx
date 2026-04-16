'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PHONE } from '@/lib/utils';

const marketsByState: { state: string; cities: { href: string; label: string }[] }[] = [
  {
    state: 'Pennsylvania',
    cities: [
      { href: '/markets/harrisburg-pa', label: 'Harrisburg' },
      { href: '/markets/allentown-pa', label: 'Allentown' },
      { href: '/markets/king-of-prussia-pa', label: 'King of Prussia' },
      { href: '/markets/reading-pa', label: 'Reading' },
      { href: '/markets/state-college-pa', label: 'State College' },
      { href: '/markets/erie-pa', label: 'Erie' },
      { href: '/markets/bethlehem-pa', label: 'Bethlehem' },
      { href: '/markets/lancaster-pa', label: 'Lancaster' },
      { href: '/markets/york-pa', label: 'York' },
    ],
  },
  {
    state: 'Delaware',
    cities: [{ href: '/markets/wilmington-de', label: 'Wilmington' }],
  },
  {
    state: 'Ohio',
    cities: [{ href: '/markets/youngstown-oh', label: 'Youngstown' }],
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="USA Home Buyers"
              width={240}
              height={64}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            {/* Markets dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMarketsOpen(true)}
              onMouseLeave={() => setMarketsOpen(false)}
            >
              <button
                onClick={() => setMarketsOpen(!marketsOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-brand-primary focus:outline-none"
                aria-expanded={marketsOpen}
                aria-haspopup="true"
              >
                Markets <span className="text-xs">▾</span>
              </button>
              {marketsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 w-72 p-5">
                  {marketsByState.map(({ state, cities }) => (
                    <div key={state} className="mb-4 last:mb-0">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        {state}
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        {cities.map((city) => (
                          <Link
                            key={city.href}
                            href={city.href}
                            className="text-sm text-gray-600 hover:text-brand-primary transition-colors"
                            onClick={() => setMarketsOpen(false)}
                          >
                            {city.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/guides" className="text-gray-600 hover:text-brand-primary whitespace-nowrap">
              Seller Guides
            </Link>
            <Link href="/resources/how-the-process-works" className="text-gray-600 hover:text-brand-primary whitespace-nowrap">
              How It Works
            </Link>
            <Link href="/reviews" className="text-gray-600 hover:text-brand-primary">
              Reviews
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-brand-primary">
              About
            </Link>
            <a href={`tel:${PHONE}`} className="flex flex-col items-end text-brand-primary hover:text-blue-700 transition-colors whitespace-nowrap">
              <span className="font-semibold">{PHONE}</span>
              <span className="text-xs text-gray-500 font-normal">We Answer 24/7</span>
            </a>
            <Link
              href="/#lead-form"
              className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Get Cash Offer
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 space-y-2">
            {/* Mobile Markets accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:text-brand-primary hover:bg-gray-50 rounded-lg font-medium"
                onClick={() => setMobileMarketsOpen(!mobileMarketsOpen)}
              >
                <span>Markets</span>
                <span className="text-xs">{mobileMarketsOpen ? '▴' : '▾'}</span>
              </button>
              {mobileMarketsOpen && (
                <div className="ml-4 mt-1 space-y-3 pb-2">
                  {marketsByState.map(({ state, cities }) => (
                    <div key={state}>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-1">
                        {state}
                      </p>
                      {cities.map((city) => (
                        <Link
                          key={city.href}
                          href={city.href}
                          className="block px-3 py-1.5 text-sm text-gray-600 hover:text-brand-primary hover:bg-gray-50 rounded-lg"
                          onClick={() => { setMenuOpen(false); setMobileMarketsOpen(false); }}
                        >
                          {city.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {[
              { href: '/guides', label: 'Seller Guides' },
              { href: '/resources/how-the-process-works', label: 'How It Works' },
              { href: '/reviews', label: 'Reviews' },
              { href: '/about', label: 'About' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-600 hover:text-brand-primary hover:bg-gray-50 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="block px-3 py-2 text-brand-primary font-semibold"
            >
              📞 {PHONE}
            </a>
            <Link
              href="/#lead-form"
              className="block text-center bg-brand-primary text-white px-4 py-3 rounded-lg font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Get Cash Offer →
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
