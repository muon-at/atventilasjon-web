'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left px-6 py-4 hover:bg-[#F0F9FF] transition-colors flex justify-between items-center"
          >
            <span className="font-semibold text-[#0F172A] text-lg pr-4">{item.question}</span>
            <svg
              className={`w-5 h-5 text-[#06B6D4] transform transition-transform flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-[#FAFAFA] border-t border-gray-200">
              <p className="text-[#475569] leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
