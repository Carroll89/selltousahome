interface VideoEmbedProps {
  src: string;
  title: string;
  poster?: string;
  subtitle?: string;
}

export function VideoEmbed({ src, title, poster, subtitle }: VideoEmbedProps) {
  return (
    <section className="bg-brand-light py-10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide mb-2">
          A message from our team
        </p>
        {subtitle && (
          <p className="text-base text-gray-600 mb-4">{subtitle}</p>
        )}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-900 p-1">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={src}
            title={title}
            poster={poster}
            controls
            playsInline
            preload="none"
            className="w-full rounded-xl"
            aria-label={title}
          />
        </div>
      </div>
    </section>
  );
}
