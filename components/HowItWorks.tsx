interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps?: Step[];
  heading?: string;
}

const DEFAULT_STEPS: Step[] = [
  {
    number: 1,
    title: 'Tell Us About Your Property',
    description: 'Fill out the 2-minute form with your property address and situation.',
  },
  {
    number: 2,
    title: 'Receive Your Cash Offer in 24 Hours',
    description: 'We review your property and send a written cash offer — no obligation.',
  },
  {
    number: 3,
    title: 'Choose Your Closing Date',
    description: 'Pick any date that works for you — as fast as 7 days from offer acceptance.',
  },
];

export function HowItWorks({ steps = DEFAULT_STEPS, heading = 'How It Works' }: HowItWorksProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">{heading}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {step.number}
            </div>
            <h3 className="font-bold text-lg text-brand-dark mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
