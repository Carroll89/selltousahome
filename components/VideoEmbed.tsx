import { SchemaMarkup } from '@/components/SchemaMarkup';
import { videoObjectSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

interface VideoEmbedProps {
  src: string;
  title: string;
  poster?: string;
  subtitle?: string;
  /** ISO date string for VideoObject uploadDate (default: 2026-04-06) */
  uploadDate?: string;
}

export function VideoEmbed({ src, title, poster, subtitle, uploadDate = '2026-04-06' }: VideoEmbedProps) {
  const schema = videoObjectSchema({
    name: title,
    description: subtitle ?? title,
    contentUrl: src,
    thumbnailUrl: poster ? `${SITE_URL}${poster}` : undefined,
    uploadDate,
  });

  return (
    <section className="bg-brand-light py-8 px-4">
      <SchemaMarkup schema={schema} />
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide mb-3">
          A message from our team
        </p>
        {subtitle && (
          <p className="text-base text-gray-600 mb-4">{subtitle}</p>
        )}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={src}
          title={title}
          controls
          playsInline
          preload="none"
          poster={poster}
          className="w-full rounded-2xl shadow-lg border border-gray-200"
          aria-label={title}
        />
      </div>
    </section>
  );
}
