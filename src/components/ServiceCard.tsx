import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
  price?: string;
  external?: boolean;
}

export default function ServiceCard({ title, description, icon, link, price, external }: ServiceCardProps) {
  const cardContent = (
    <>
      <div className="w-14 h-14 bg-[#E0F7FA] rounded-2xl flex items-center justify-center text-3xl mb-5">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#212121] mb-3">{title}</h3>
      <p className="text-[#757575] mb-6 leading-relaxed flex-grow">{description}</p>
      {price && (
        <p className="text-xl font-bold text-[#1A9BA3] mb-5">{price}</p>
      )}
      {link && !external && (
        <span className="inline-block text-[#1A9BA3] font-semibold hover:underline">
          Les mer →
        </span>
      )}
      {link && external && (
        <span className="inline-block text-[#1A9BA3] font-semibold hover:underline">
          Gå til tjeneste →
        </span>
      )}
    </>
  );

  const className = "bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:border-[#1A9BA3] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full";

  if (link && external) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
        {cardContent}
      </a>
    );
  }

  if (link) {
    return (
      <Link href={link} className={className}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={className}>
      {cardContent}
    </div>
  );
}
