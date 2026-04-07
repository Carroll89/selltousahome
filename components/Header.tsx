'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PHONE } from '@/lib/utils';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-brand-primary">USA Home Buyers</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/markets/harrisburg-pa" className="text-gray-600 hover:text-brand-primary">
              Harrisburg PA
            </Link>
            <Link href="/guides/sell-house-fast-harrisburg-pa-2026" className="text-gray-600 hover:text-brand-primary">
              Seller Guides
            </Link>
            <Link href="/resources/how-the-process-works" className="text-gray-600 hover:text-brand-primary">
              How It Works
            </Link>
            <Link href="/reviews" className="text-gray-600 hover:text-brand-primary">
              Reviews
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-brand-primary">
              About
            </Link>
            <a href={`tel:${PHONE}`} className="text-gray-600 hover:text-brand-primary">
              {PHONE}
            </a>
            <Link
              href="/#lead-form"
              className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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
            {[
              { href: '/markets/harrisburg-pa', label: 'Harrisburg PA' },
              { href: '/guides/sell-house-fast-harrisburg-pa-2026', label: 'Seller Guides' },
              { href: '/resources/how-the-process-works', label: 'How It Works' },
              { href: '/reviews', label: 'Reviews' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
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
