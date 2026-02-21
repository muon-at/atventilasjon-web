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
    <article className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:border-[#1A9BA3] hover:shadow-xl hover:-translate-y-1 transition-all">
      <div className="h-48 bg-gradient-to-br from-[#E0F7FA] to-[#1A9BA3]" />
      <div className="p-6">
        <div className="flex items-center text-sm text-[#757575] mb-3">
          <time>{date}</time>
          {readTime && (
            <>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </>
          )}
        </div>
        <h3 className="text-2xl font-bold text-[#212121] mb-3 hover:text-[#1A9BA3] transition-colors">
          <Link href={`/blogg/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="text-[#424242] mb-4 leading-relaxed">{excerpt}</p>
        <Link
          href={`/blogg/${slug}`}
          className="inline-flex items-center text-[#1A9BA3] font-semibold hover:text-[#2AABB3] transition-colors"
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
