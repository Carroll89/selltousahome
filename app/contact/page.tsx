import type { Metadata } from 'next';
import { CashOfferForm } from '@/components/CashOfferForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { localBusinessSchema } from '@/lib/schema';
import { PHONE } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact USA Home Buyers | Get a Cash Offer — Harrisburg PA',
  description:
    'Contact USA Home Buyers to get a cash offer for your Harrisburg PA house. Call, text, or submit online. Written offer in 24 hours. We buy houses as-is, any condition.',
  alternates: { canonical: 'https://selltousahome.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema]} />

      <section className="bg-gradient-to-br from-brand-dark to-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Have a house you need to sell? Tell us about it. We respond fast — usually the same day.
              No obligation, no pressure.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm">📞</span>
                </div>
                <div>
                  <p className="text-blue-200 text-sm mb-0.5">Call or Text</p>
                  <a href={`tel:${PHONE}`} className="text-xl font-bold text-white hover:text-blue-200">
                    {PHONE}
                  </a>
                  <p className="text-blue-300 text-xs mt-0.5">Mon–Fri 8am–6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm">📍</span>
                </div>
                <div>
                  <p className="text-blue-200 text-sm mb-0.5">Service Area</p>
                  <p className="text-white text-sm">
                    Harrisburg, Steelton, Camp Hill, Mechanicsburg, Carlisle,<br />
                    Hershey, Lemoyne, and surrounding Dauphin & Cumberland Counties
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm">⏱</span>
                </div>
                <div>
                  <p className="text-blue-200 text-sm mb-0.5">Response Time</p>
                  <p className="text-white text-sm">Written offer within 24 hours of first contact</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <CashOfferForm variant="hero" sourcePage="/contact" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">What Happens After You Reach Out</h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'We call or text you back — usually within a few hours',
                desc: 'A real person on our team will reach out to ask a few questions about the property and your situation. The conversation takes about 10 minutes.',
              },
              {
                step: '2',
                title: 'We research the property',
                desc: 'We pull public records, comp sales, and property data. If needed, we\'ll do a quick walkthrough or ask you to share photos of the inside. No cost, no commitment.',
              },
              {
                step: '3',
                title: 'Written offer within 24 hours',
                desc: 'We send you a written cash offer with a breakdown. You can accept, decline, or ask questions. Take whatever time you need — there\'s no expiration pressure.',
              },
              {
                step: '4',
                title: 'Close on your schedule',
                desc: 'If you accept, we coordinate with a local title company. You pick the closing date — as fast as 7 days or whenever works for you.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start border border-gray-200 rounded-lg p-4">
                <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Do I need to clean out the house?',
                a: 'No. Leave whatever you don\'t want and we handle the rest. We\'ve bought properties with full furniture, decades of belongings, and worse. It\'s our problem after closing.',
              },
              {
                q: 'Are there any fees or commissions?',
                a: 'None. We don\'t charge commissions, processing fees, or closing costs. What we offer is what you walk away with.',
              },
              {
                q: 'What if the house needs major repairs?',
                a: 'We price that into our offer. You don\'t fix anything. We buy as-is — roof problems, foundation issues, mold, whatever. It\'s on us after closing.',
              },
              {
                q: 'How is your offer calculated?',
                a: 'We look at the property\'s after-repair value based on comparable sales, then subtract estimated repair costs and a margin for risk and profit. We\'re happy to walk you through the math.',
              },
              {
                q: 'What if I have a mortgage on the property?',
                a: 'That\'s normal. Your mortgage gets paid off at closing from the sale proceeds. You receive whatever\'s left after the mortgage payoff.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5">
                <p className="font-semibold text-brand-dark mb-2">{item.q}</p>
                <p className="text-sm text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-brand-dark text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Ready to talk?</h2>
          <p className="text-blue-200 mb-4">Call us directly or fill out the form above. We answer our phone.</p>
          <a
            href={`tel:${PHONE}`}
            className="inline-block bg-white text-brand-dark font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </>
  );
}
