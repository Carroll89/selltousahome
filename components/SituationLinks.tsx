interface SituationLink {
  label: string;
  href: string;
  description?: string;
}

interface SituationLinksProps {
  situations?: SituationLink[];
  heading?: string;
}

const DEFAULT_SITUATIONS: SituationLink[] = [
  { label: 'Inherited or Estate Property', href: '/markets/harrisburg-pa/inherited-property', description: 'Sell an inherited home fast without repairs or hassle' },
  { label: 'Going Through Divorce', href: '/markets/harrisburg-pa/divorce-sale', description: 'Close quickly and split proceeds — minimal conflict' },
  { label: 'Behind on Mortgage', href: '/markets/harrisburg-pa/foreclosure', description: 'Sell before the sheriff sale, protect your credit' },
  { label: 'Tenant-Occupied Property', href: '/markets/harrisburg-pa/tenant-occupied', description: "We buy with tenants still in place — no eviction needed" },
  { label: 'Needs Repairs (Sell As-Is)', href: '/guides/sell-as-is', description: 'Foundation, roof, mold — we buy it anyway' },
  { label: 'Back Taxes or Liens', href: '/guides/back-taxes', description: 'Unpaid taxes and liens get handled at closing' },
  { label: 'Relocating', href: '/guides/relocation', description: 'Job start date? We close fast to meet your timeline' },
  { label: 'Vacant Property', href: '/guides/vacant-property', description: 'Stop paying taxes on a property you can\'t use' },
  { label: 'Probate Sale', href: '/markets/harrisburg-pa/probate', description: 'We work with estate attorneys and executors regularly' },
];

export function SituationLinks({ situations = DEFAULT_SITUATIONS, heading = 'We Buy in Any Situation' }: SituationLinksProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">{heading}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {situations.map((s, i) => (
          <a
            key={i}
            href={s.href}
            className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-md transition-all group"
          >
            <h3 className="font-semibold text-brand-dark group-hover:text-brand-primary mb-1">
              {s.label} →
            </h3>
            {s.description && <p className="text-sm text-gray-500">{s.description}</p>}
          </a>
        ))}
      </div>
    </section>
  );
}
