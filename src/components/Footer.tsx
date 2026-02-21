import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AT <span className="text-[#06B6D4]">Ventilasjon</span></h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Profesjonell ventilasjonsrens og varmepumpeservice i hele Norge.
            </p>
            <p className="text-gray-500 text-sm">
              Org.nr: XXX XXX XXX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/ventilasjonsrens" className="text-gray-400 hover:text-[#06B6D4] transition-colors text-sm">
                  Ventilasjonsrens
                </Link>
              </li>
              <li>
                <Link href="/varmepumpeservice" className="text-gray-400 hover:text-[#06B6D4] transition-colors text-sm">
                  Rens av varmepumpe
                </Link>
              </li>
              <li>
                <Link href="/filterabonnement" className="text-gray-400 hover:text-[#06B6D4] transition-colors text-sm">
                  Filterabonnement
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-400 hover:text-[#06B6D4] transition-colors text-sm">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-[#06B6D4] transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt oss</h3>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li>
                <a href="tel:22xxxxxx" className="hover:text-[#06B6D4] transition-colors">
                  Telefon: 22 XX XX XX
                </a>
              </li>
              <li>
                <a href="mailto:post@atventilasjon.no" className="hover:text-[#06B6D4] transition-colors">
                  E-post: post@atventilasjon.no
                </a>
              </li>
              <li className="pt-3">
                <p className="font-semibold text-white mb-1.5">Dekningsområder</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Oslo, Bærum, Asker, Drammen, Lillestrøm, Jessheim, Ski, Ås, Moss, Fredrikstad, Sarpsborg, Halden, Kongsberg, Tønsberg, Sandefjord, Omegn
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-2">
            &copy; 2026 AT Ventilasjon. Alle rettigheter reservert.
          </p>
          <p className="text-gray-600 text-xs">
            Drevet av Sebastian Moen & Eric
          </p>
        </div>
      </div>
    </footer>
  );
}
