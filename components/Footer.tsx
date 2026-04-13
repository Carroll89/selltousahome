import Link from 'next/link';
import { PHONE } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">USA Home Buyers</h3>
            <p className="text-sm mb-3">
              We buy houses for cash across Pennsylvania — Harrisburg, Allentown, King of Prussia, Reading, State College, Erie, and surrounding areas. Any condition, any situation.
            </p>
            <p className="text-sm">
              <strong className="text-white">Phone:</strong>{' '}
              <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE}</a>
            </p>
            <p className="text-sm mt-1">
              <strong className="text-white">Hours:</strong> Mon–Fri, 8am–6pm
            </p>
            <p className="text-sm mt-1 text-gray-400">King of Prussia, PA 19406</p>
          </div>

          {/* Markets */}
          <div>
            <h3 className="text-white font-semibold mb-3">Markets</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/markets/harrisburg-pa" className="hover:text-white">Harrisburg, PA</Link></li>
              <li><Link href="/markets/harrisburg-pa/market-report" className="hover:text-white">Harrisburg Market Report</Link></li>
              <li><Link href="/markets/harrisburg-pa/neighborhoods" className="hover:text-white">Neighborhoods</Link></li>
              <li><Link href="/markets/allentown-pa" className="hover:text-white">Allentown, PA</Link></li>
              <li><Link href="/markets/allentown-pa/market-report" className="hover:text-white">Allentown Market Report</Link></li>
              <li><Link href="/markets/king-of-prussia-pa" className="hover:text-white">King of Prussia, PA</Link></li>
              <li><Link href="/markets/king-of-prussia-pa/market-report" className="hover:text-white">KOP Market Report</Link></li>
              <li><Link href="/markets/reading-pa" className="hover:text-white">Reading, PA</Link></li>
              <li><Link href="/markets/reading-pa/market-report" className="hover:text-white">Reading Market Report</Link></li>
              <li><Link href="/markets/state-college-pa" className="hover:text-white">State College, PA</Link></li>
              <li><Link href="/markets/state-college-pa/market-report" className="hover:text-white">State College Market Report</Link></li>
              <li><Link href="/markets/erie-pa" className="hover:text-white">Erie, PA</Link></li>
              <li><Link href="/markets/erie-pa/market-report" className="hover:text-white">Erie Market Report</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-white font-semibold mb-3">Seller Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/sell-house-fast-harrisburg-pa-2026" className="hover:text-white">2026 Selling Guide</Link></li>
              <li><Link href="/guides/inherited-property" className="hover:text-white">Inherited Property</Link></li>
              <li><Link href="/guides/foreclosure" className="hover:text-white">Foreclosure</Link></li>
              <li><Link href="/guides/behind-on-payments" className="hover:text-white">Behind on Payments</Link></li>
              <li><Link href="/guides/sell-as-is" className="hover:text-white">Sell As-Is</Link></li>
              <li><Link href="/guides/divorce-sale" className="hover:text-white">Divorce Sale</Link></li>
              <li><Link href="/guides/back-taxes" className="hover:text-white">Back Taxes</Link></li>
              <li><Link href="/resources/how-the-process-works" className="hover:text-white">How It Works</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/brand-facts" className="hover:text-white">Brand Facts</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-sm text-gray-500">
          <p className="mb-2">
            We buy houses across Pennsylvania — Harrisburg, Allentown, King of Prussia, Reading, State College, Erie, and surrounding communities.
          </p>
          <p>
            © {currentYear} USA Home Buyers LLC. All rights reserved. | Serving Pennsylvania homeowners
          </p>
        </div>
      </div>
    </footer>
  );
}
