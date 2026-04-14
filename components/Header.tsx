'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PHONE } from '@/lib/utils';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/markets/harrisburg-pa" className="text-gray-600 hover:text-brand-primary">
              Harrisburg PA
            </Link>
            <Link href="/markets/allentown-pa" className="text-gray-600 hover:text-brand-primary">
              Allentown PA
            </Link>
            <Link href="/markets/king-of-prussia-pa" className="text-gray-600 hover:text-brand-primary">
              King of Prussia PA
            </Link>
            <Link href="/markets/reading-pa" className="text-gray-600 hover:text-brand-primary">
              Reading PA
            </Link>
            <Link href="/markets/state-college-pa" className="text-gray-600 hover:text-brand-primary">
              State College PA
            </Link>
            <Link href="/markets/erie-pa" className="text-gray-600 hover:text-brand-primary">
              Erie PA
            </Link>
            <Link href="/markets/bethlehem-pa" className="text-gray-600 hover:text-brand-primary">
              Bethlehem PA
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
            <a href={`tel:${PHONE}`} className="flex flex-col items-end text-brand-primary hover:text-blue-700 transition-colors">
              <span className="font-semibold">{PHONE}</span>
              <span className="text-xs text-gray-500 font-normal">We Answer 24/7</span>
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
              { href: '/markets/allentown-pa', label: 'Allentown PA' },
              { href: '/markets/king-of-prussia-pa', label: 'King of Prussia PA' },
              { href: '/markets/reading-pa', label: 'Reading PA' },
              { href: '/markets/state-college-pa', label: 'State College PA' },
              { href: '/markets/erie-pa', label: 'Erie PA' },
              { href: '/markets/bethlehem-pa', label: 'Bethlehem PA' },
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
