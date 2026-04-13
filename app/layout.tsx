import type { Metadata } from 'next';

// Force all pages to render on-demand (not at build time)
// This keeps builds fast and memory-safe as we scale to 250+ markets
export const dynamic = 'force-dynamic';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallBar } from '@/components/MobileCallBar';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export const metadata: Metadata = {
  title: {
    default: 'Sell Your House Fast for Cash | USA Home Buyers',
    template: '%s | USA Home Buyers',
  },
  description:
    'USA Home Buyers purchases homes for cash in any condition. No repairs, no agent fees, close in 7-14 days. Serving Harrisburg PA and Central Pennsylvania.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: 'USA Home Buyers',
    locale: 'en_US',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'USA Home Buyers - Sell Your House Fast for Cash' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <SchemaMarkup schema={organizationSchema} />
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="pb-20 md:pb-0 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
