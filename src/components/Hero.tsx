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
  backgroundClass = 'bg-gradient-to-br from-cyan-50 via-white to-orange-50',
  badge,
}: HeroProps) {
  return (
    <section className={`${backgroundClass} py-20 md:py-32 relative overflow-hidden`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-sm font-medium text-[#0891B2] border border-[#0891B2]/20 shadow-sm mb-8">
            {badge}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#0F172A]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-[#475569] mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
