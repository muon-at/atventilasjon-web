import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundClass?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Bestill befaring',
  ctaLink = '/kontakt',
  backgroundClass = 'bg-gradient-to-r from-[#1a365d] to-[#2d4a7c]',
}: HeroProps) {
  return (
    <section className={`${backgroundClass} text-white py-20 md:py-32`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
