'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Hjem', href: '/' },
    { name: 'Ventilasjonsrens', href: '/ventilasjonsrens' },
    { name: 'Varmepumpeservice', href: '/varmepumpeservice' },
    { name: 'Filterabonnement', href: '/filterabonnement' },
    { name: 'Om oss', href: '/om-oss' },
    { name: 'Blogg', href: '/blogg' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-xl text-[#212121] sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            AT <span className="text-[#2E7D32]">Ventilasjon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#424242] hover:text-[#2E7D32] transition-colors font-medium text-[15px]"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Kontakt oss
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-[#E8F5E9] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2.5 text-[#424242] hover:text-[#2E7D32] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="block mt-4 text-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt oss
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
