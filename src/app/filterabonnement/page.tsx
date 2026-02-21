import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Filterabonnement - AT Ventilasjon',
  description: 'Aldri glem å bytte filter igjen! Abonnement fra 299 kr/halvår. Vi leverer nye filtre rett hjem til deg 1-2 ganger i året.',
};

export default function Filterabonnement() {
  return (
    <>
      <Hero
        title="Filterabonnement"
        subtitle="Aldri glem å bytte filter igjen - vi leverer rett hjem til deg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Hvorfor bytte filter regelmessig?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Filteret i ventilasjonsanlegget er første forsvarslinje mot støv, pollen, bakterier og andre 
              partikler. Når filteret blir tilstoppet, reduseres luftkvaliteten og energiforbruket øker.
            </p>
            <p>
              Vi anbefaler at filtre byttes 1-2 ganger årlig, avhengig av belastning. Med vårt filterabonnement 
              slipper du å huske på det selv - vi sender deg nye filtre automatisk når det er på tide.
            </p>
            <p>
              Det er enkelt, praktisk og sikrer at du alltid har rent og sunt inneklima. Filteret får du 
              levert rett i postkassen, og du bytter det selv på 5 minutter.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Fordeler med filterabonnement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Slipper å huske</h3>
              <p className="text-gray-700">
                Vi sender nye filtre automatisk når det er på tide å bytte
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">💨</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Bedre inneklima</h3>
              <p className="text-gray-700">
                Frisk filtre sikrer optimal luftkvalitet hele året
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Lavere strømregning</h3>
              <p className="text-gray-700">
                Rene filtre reduserer energiforbruket med opptil 15%
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Hjemlevering</h3>
              <p className="text-gray-700">
                Filtrene leveres rett i postkassen - enkelt og praktisk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Slik fungerer det</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Velg abonnement</h3>
              <p className="text-gray-700">
                Oppgi filtertype og velg hvor ofte du vil ha nye filtre (halvårlig eller årlig)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Motta filtre</h3>
              <p className="text-gray-700">
                Vi sender filtre automatisk til avtalt tid - du trenger ikke gjøre noe
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Bytt filter</h3>
              <p className="text-gray-700">
                Følg enkel instruksjon og bytt filter på 5 minutter - ferdig!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">Priser</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-orange-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-2">Halvårlig</h3>
                <p className="text-gray-600 mb-4">2 filtre per år</p>
                <p className="text-5xl font-bold text-orange-600 mb-2">299 kr</p>
                <p className="text-gray-600 mb-6">per halvår</p>
                <ul className="text-left space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Filter levert hver 6. måned</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Gratis frakt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Enkelt å si opp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Veiledning inkludert</span>
                  </li>
                </ul>
                <Link
                  href="/kontakt"
                  className="block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Bestill nå
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-2">Årlig</h3>
                <p className="text-gray-600 mb-4">1 filter per år</p>
                <p className="text-5xl font-bold text-[#1a365d] mb-2">249 kr</p>
                <p className="text-gray-600 mb-6">per år</p>
                <ul className="text-left space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#1a365d] mr-2">✓</span>
                    <span>Filter levert årlig</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a365d] mr-2">✓</span>
                    <span>Gratis frakt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a365d] mr-2">✓</span>
                    <span>Enkelt å si opp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a365d] mr-2">✓</span>
                    <span>Veiledning inkludert</span>
                  </li>
                </ul>
                <Link
                  href="/kontakt"
                  className="block bg-[#1a365d] hover:bg-[#2d4a7c] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Bestill nå
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Usikker på hvilken filtertype du trenger? Kontakt oss, så hjelper vi deg!
            </p>
            <p className="text-gray-600 text-sm">
              Alle priser er inkludert mva og frakt. Ingen bindingstid - kan sies opp når som helst.
            </p>
          </div>
        </div>
      </section>

      {/* Huskfilter.no Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Kjøp enkeltfiltre på huskfilter.no</h2>
          <p className="text-xl text-gray-700 mb-8">
            Trenger du bare et nytt filter uten abonnement? Besøk vår nettbutikk huskfilter.no 
            for enkle engangskjøp av alle typer ventilasjonsfiltre.
          </p>
          <a
            href="https://huskfilter.no"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a365d] hover:bg-[#2d4a7c] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Besøk huskfilter.no →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Klar for bedre inneklima?</h2>
          <p className="text-xl mb-8">
            Tegn filterabonnement i dag og sørg for frisk luft hele året
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Bestill abonnement
          </Link>
        </div>
      </section>
    </>
  );
}
