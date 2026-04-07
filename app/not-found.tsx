import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-brand-dark mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, we couldn&apos;t find that page. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="border border-brand-primary text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
