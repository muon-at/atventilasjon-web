import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime?: string;
}

export default function BlogCard({ title, excerpt, slug, date, readTime }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-br from-[#1a365d] to-[#2d4a7c]" />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <time>{date}</time>
          {readTime && (
            <>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </>
          )}
        </div>
        <h3 className="text-2xl font-bold text-[#1a365d] mb-3 hover:text-orange-600 transition-colors">
          <Link href={`/blogg/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">{excerpt}</p>
        <Link
          href={`/blogg/${slug}`}
          className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
        >
          Les mer
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
