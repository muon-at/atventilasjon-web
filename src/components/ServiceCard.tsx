import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  price?: string;
}

export default function ServiceCard({ title, description, icon, link, price }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-[#1a365d] mb-4">{title}</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
      {price && (
        <p className="text-lg font-semibold text-orange-600 mb-4">{price}</p>
      )}
      <Link
        href={link}
        className="inline-block bg-[#1a365d] hover:bg-[#2d4a7c] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Les mer
      </Link>
    </div>
  );
}
