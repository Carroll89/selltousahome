interface Testimonial {
  quote: string;
  name: string;
  location: string;
  situation?: string;
  date?: string;
}

interface TestimonialBlockProps {
  testimonials: Testimonial[];
  heading?: string;
}

export function TestimonialBlock({
  testimonials,
  heading = 'What Our Sellers Say',
}: TestimonialBlockProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">{heading}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <figure key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex mb-3">
              {[...Array(5)].map((_, s) => (
                <span key={s} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <blockquote className="text-gray-700 italic mb-4">&quot;{t.quote}&quot;</blockquote>
            <figcaption className="text-sm">
              <span className="font-semibold text-brand-dark">{t.name}</span>
              <span className="text-gray-500"> — {t.location}</span>
              {t.situation && (
                <span className="block text-gray-400 text-xs mt-1">{t.situation}</span>
              )}
              {t.date && <span className="block text-gray-400 text-xs">{t.date}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
