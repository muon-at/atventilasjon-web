import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundClass?: string;
  badge?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Bestill befaring',
  ctaLink = '/kontakt',
  backgroundClass = 'bg-gradient-to-br from-[#E8F5E9] to-white',
  badge,
}: HeroProps) {
  return (
    <section className={`${backgroundClass} py-20 md:py-32`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-sm font-medium text-[#2E7D32] border border-[#2E7D32]/20 shadow-sm mb-8">
            {badge}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#212121]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-[#424242] mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
