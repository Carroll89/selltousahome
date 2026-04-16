/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CashOfferForm } from '@/components/CashOfferForm';
import { FAQSection } from '@/components/FAQSection';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { articleSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';
import { getPostMeta, getDynamicPostSlugs } from '@/lib/blog';
import type { BlogPostContent, BlogSection } from '@/content/blog/probate-timeline-pennsylvania';

/** Map slug to content module */
async function loadContent(slug: string): Promise<BlogPostContent | null> {
  try {
    switch (slug) {
      case 'probate-timeline-pennsylvania':
        return (await import('@/content/blog/probate-timeline-pennsylvania')).default;
      case 'closing-costs-selling-house-pennsylvania':
        return (await import('@/content/blog/closing-costs-selling-house-pennsylvania')).default;
      case 'sell-house-foreclosure-pennsylvania':
        return (await import('@/content/blog/sell-house-foreclosure-pennsylvania')).default;
      case 'sell-house-tax-lien-pennsylvania':
        return (await import('@/content/blog/sell-house-tax-lien-pennsylvania')).default;
      case 'sell-house-divorce-pennsylvania':
        return (await import('@/content/blog/sell-house-divorce-pennsylvania')).default;
      case 'selling-tenant-occupied-property-pa':
        return (await import('@/content/blog/selling-tenant-occupied-property-pa')).default;
      case 'property-taxes-pennsylvania-what-happens':
        return (await import('@/content/blog/property-taxes-pennsylvania-what-happens')).default;
      case 'destroyed-rental-property-case-study':
        return (await import('@/content/blog/destroyed-rental-property-case-study')).default;
      default:
        return null;
    }
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  return getDynamicPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  'Inherited Property': 'bg-purple-100 text-purple-700',
  'Code Violations': 'bg-orange-100 text-orange-700',
  Comparison: 'bg-blue-100 text-blue-700',
  Foreclosure: 'bg-red-100 text-red-700',
  Probate: 'bg-amber-100 text-amber-700',
  Divorce: 'bg-pink-100 text-pink-700',
  'Market Report': 'bg-green-100 text-green-700',
  Education: 'bg-gray-100 text-gray-700',
};

function CalloutBox({
  type,
  title,
  text,
}: {
  type: 'amber' | 'blue' | 'green';
  title?: string;
  text: string;
}) {
  const colors = {
    amber: 'bg-amber-50 border-amber-200 text-amber-900',
    blue: 'bg-blue-50 border-blue-100 text-gray-700',
    green: 'bg-green-50 border-green-200 text-green-900',
  };
  return (
    <div className={`border rounded-xl p-5 mb-4 ${colors[type]}`}>
      {title && <p className="font-semibold mb-1 text-sm">{title}</p>}
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-brand-dark text-white">
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-semibold first:rounded-tl-lg last:rounded-tr-lg">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 border-b border-gray-100 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BlogSection({ section }: { section: BlogSection }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-brand-dark mb-4">{section.heading}</h2>
      {section.paragraphs.map((p, i) => (
        <p key={i} className="text-gray-700 mb-4 leading-relaxed">
          {p}
        </p>
      ))}
      {section.table && <DataTable headers={section.table.headers} rows={section.table.rows} />}
      {section.bullets && (
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          {section.bullets.map((b, i) => (
            <li key={i} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      )}
      {section.callout && (
        <CalloutBox
          type={section.callout.type}
          title={section.callout.title}
          text={section.callout.text}
        />
      )}
    </section>
  );
}

export default async function DynamicBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getPostMeta(slug);

  // Redirect static posts to their own pages
  if (!meta || meta.isStatic) {
    notFound();
  }

  const content = await loadContent(slug);
  if (!content) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/blog/${slug}`;

  return (
    <>
      <SchemaMarkup
        schema={[
          articleSchema(meta.title, pageUrl, meta.datePublished),
          faqSchema(content.faq),
        ]}
      />

      {/* Hero */}
      <section className="relative text-white py-16 px-4 overflow-hidden">
        <Image
          src={meta.heroImage}
          alt={meta.heroAlt}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-2">
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>{' '}
              › {meta.category}
            </p>
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${CATEGORY_COLORS[meta.category] || 'bg-gray-100 text-gray-600'}`}
              >
                {meta.category}
              </span>
              <span className="text-xs text-blue-300">{meta.date}</span>
              <span className="text-xs text-blue-300">· {meta.readTime} read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {meta.title}
            </h1>
            <p className="text-lg text-blue-100 mb-6">{meta.description}</p>
          </div>
          <div>
            <CashOfferForm variant="hero" sourcePage={`/blog/${slug}`} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          {/* TL;DR */}
          <div className="bg-blue-50 border-l-4 border-brand-primary rounded-r-xl p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-dark mb-2">TL;DR — What You Need to Know</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{content.tldr}</p>
          </div>

          {/* Content sections */}
          {content.sections.map((section, i) => (
            <BlogSection key={i} section={section} />
          ))}

          {/* CTA */}
          <CashOfferForm
            variant="inline"
            headline={content.ctaHeadline}
            subheadline={content.ctaSubheadline}
            sourcePage={`/blog/${slug}`}
          />

          {/* FAQ */}
          <FAQSection items={content.faq} heading="Frequently Asked Questions" />

          {/* Related links */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-brand-dark mb-4">More Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {content.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-gray-200 rounded-lg p-3 hover:border-brand-primary hover:text-brand-primary transition-colors"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
