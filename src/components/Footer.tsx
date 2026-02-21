import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AT Ventilasjon AS</h3>
            <p className="text-gray-300 mb-4">
              Din profesjonelle partner for ventilasjonsrens, varmepumpeservice og filterabonnement i hele Norge.
            </p>
            <p className="text-gray-300 text-sm">
              Org.nr: XXX XXX XXX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ventilasjonsrens" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Ventilasjonsrens
                </Link>
              </li>
              <li>
                <Link href="/varmepumpeservice" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Varmepumpeservice
                </Link>
              </li>
              <li>
                <Link href="/filterabonnement" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Filterabonnement
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt oss</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:22xxxxxx" className="hover:text-orange-400 transition-colors">
                  Telefon: 22 XX XX XX
                </a>
              </li>
              <li>
                <a href="mailto:post@atventilasjon.no" className="hover:text-orange-400 transition-colors">
                  E-post: post@atventilasjon.no
                </a>
              </li>
              <li className="pt-4">
                <p className="font-semibold text-white">Kontorer i:</p>
                <p className="text-sm">Oslo, Bergen, Trondheim, Stavanger, Kristiansand, Tromsø</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 AT Ventilasjon AS. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}
