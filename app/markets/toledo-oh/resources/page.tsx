import type { Metadata } from 'next';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Toledo OH Seller Resources — Guides, Market Context & Situation Help',
  description: 'Toledo OH seller resources for as-is cash sales, local situations, process pages, reviews, and direct offer options.',
  alternates: { canonical: `${SITE_URL}/markets/toledo-oh/resources` },
};

export default function ToledoResourcesPage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema('Toledo OH Seller Resources', `${SITE_URL}/markets/toledo-oh/resources`, '2026-05-02')]} />
      <section className="bg-brand-dark text-white py-12 px-4"><div className="max-w-4xl mx-auto"><p className="text-blue-300 text-sm font-medium mb-2"><Link href="/sell-my-house-fast-toledo-oh" className="hover:text-white">← Back to Toledo OH</Link></p><h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Toledo OH Seller Resources</h1><p className="text-blue-100 text-lg max-w-2xl">Local resources for Toledo OH homeowners considering a direct as-is cash sale.</p></div></section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        <section><h2 className="text-2xl font-bold text-brand-dark mb-6">Toledo OH Market Guides &amp; Reports</h2><div className="grid sm:grid-cols-2 gap-4">
              <Link href="/sell-my-house-fast-toledo-oh" className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-md transition"><p className="font-semibold text-brand-primary mb-1">Toledo OH cash offer page</p><p className="text-sm text-gray-600">Primary Batch 004 route; canonical stays on the direct market URL.</p></Link>
              <Link href="/guides/sell-house-fast-toledo-oh-2026" className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-md transition"><p className="font-semibold text-brand-primary mb-1">Toledo OH Seller Guide 2026</p><p className="text-sm text-gray-600">A scoped guide for Toledo OH sellers comparing cash sale vs. listing.</p></Link>
              <Link href="/resources/how-the-process-works/toledo-oh" className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-md transition"><p className="font-semibold text-brand-primary mb-1">How the cash-sale process works in Toledo OH</p><p className="text-sm text-gray-600">Step-by-step process from first contact through title and closing.</p></Link>
        </div></section>
        <section><h2 className="text-2xl font-bold text-brand-dark mb-2">Your Situation in Toledo OH</h2><p className="text-gray-600 mb-6">Choose the local situation page that matches why you need speed, certainty, or an as-is sale.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/markets/toledo-oh/foreclosure" className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition"><p className="font-semibold text-brand-primary mb-1">Facing Foreclosure</p><p className="text-sm text-gray-600">If a foreclosure deadline is creating pressure, a direct cash sale can be evaluated quickly so you understand whether selling before the process advances is realistic.</p></Link>
              <Link href="/markets/toledo-oh/inherited-property" className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition"><p className="font-semibold text-brand-primary mb-1">Inherited Property</p><p className="text-sm text-gray-600">Inherited houses often involve out-of-state heirs, cleanout problems, deferred repairs, and estate authority questions.</p></Link>
              <Link href="/markets/toledo-oh/probate" className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition"><p className="font-semibold text-brand-primary mb-1">Probate Property</p><p className="text-sm text-gray-600">Probate and estate-title issues do not automatically block an offer. The title company and estate professionals confirm who has authority to sign before closing.</p></Link>
              <Link href="/markets/toledo-oh/divorce-sale" className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition"><p className="font-semibold text-brand-primary mb-1">Divorce Sale</p><p className="text-sm text-gray-600">When both sides need certainty, a written cash offer can create one price, one closing date, and a cleaner path for distributing proceeds.</p></Link>
              <Link href="/markets/toledo-oh/code-violations" className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition"><p className="font-semibold text-brand-primary mb-1">Code Violations / Serious Disrepair</p><p className="text-sm text-gray-600">Open violations, failed repairs, unsafe conditions, and major deferred maintenance are common reasons sellers choose an as-is cash buyer.</p></Link>
              <Link href="/markets/toledo-oh/tenant-occupied" className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition"><p className="font-semibold text-brand-primary mb-1">Tenant-Occupied Property</p><p className="text-sm text-gray-600">Rental properties can be sold with tenants still in place. A cash sale can reduce showings, inspection friction, and landlord coordination headaches.</p></Link>
              <Link href="/markets/toledo-oh/fire-damage" className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition"><p className="font-semibold text-brand-primary mb-1">Fire Damage</p><p className="text-sm text-gray-600">Fire or smoke damage does not have to be repaired before a cash offer. We evaluate the property as-is and explain the offer before you commit.</p></Link>
        </div></section>
        <section className="bg-brand-light rounded-2xl p-8"><h2 className="text-2xl font-bold text-brand-dark mb-2 text-center">Ready to Get Your Toledo OH Cash Offer?</h2><p className="text-gray-600 text-center mb-8">No obligation. Written offer in 24 hours. Close on your timeline.</p><CashOfferForm variant="inline" sourcePage="/markets/toledo-oh/resources" /></section>
      </div>
    </>
  );
}
