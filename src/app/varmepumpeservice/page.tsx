import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata = {
  title: 'Varmepumpeservice - AT Ventilasjon',
  description: 'Profesjonell service og vedlikehold av alle typer varmepumper. F-gass sertifiserte teknikere. Priser fra 1290 kr.',
};

export default function Varmepumpeservice() {
  const faqItems = [
    {
      question: 'Hvor ofte bør varmepumpen serviceres?',
      answer: 'Vi anbefaler årlig service for optimal ytelse og lang levetid. Ved høy belastning eller spesielle forhold kan hyppigere service være aktuelt.',
    },
    {
      question: 'Hva er inkludert i en standard service?',
      answer: 'Standard service inkluderer rengjøring av filtre og varmeveksler, kontroll av kjølemedium, test av alle funksjoner, samt en rapport med anbefalinger.',
    },
    {
      question: 'Kan dere service alle merker?',
      answer: 'Ja, våre F-gass sertifiserte teknikere har kompetanse på alle kjente merker og modeller av varmepumper, inkludert luft-luft, luft-vann og væske-vann.',
    },
    {
      question: 'Hva betyr F-gass sertifisert?',
      answer: 'F-gass sertifisering er lovpålagt for å arbeide med kjøleanlegg og varmepumper. Det sikrer at arbeidet utføres miljøvennlig og i henhold til gjeldende regelverk.',
    },
    {
      question: 'Hvor lang tid tar en service?',
      answer: 'En standard service tar vanligvis 1-2 timer avhengig av varmepumpetype og tilstand. Vi informerer om forventet tidsbruk ved avtale.',
    },
  ];

  return (
    <>
      <Hero
        title="Varmepumpeservice"
        subtitle="Profesjonell service for optimal ytelse og lang levetid"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Hvorfor er service viktig?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              En varmepumpe er en stor investering som krever regelmessig vedlikehold for å fungere optimalt. 
              Uten service kan ytelsen reduseres med opptil 25%, og risikoen for kostbare reparasjoner øker betydelig.
            </p>
            <p>
              Våre F-gass sertifiserte teknikere har lang erfaring med alle typer varmepumper. Vi tilbyr 
              profesjonell service som sikrer at anlegget ditt fungerer energieffektivt og pålitelig år etter år.
            </p>
            <p>
              Med regelmessig service forlenger du varmepumpens levetid, reduserer strømforbruket, og unngår 
              uventede feil. Vi anbefaler årlig service for best resultat.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Heat Pumps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Varmepumper vi servicerer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">❄️</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Luft-til-luft</h3>
              <p className="text-gray-700">
                Den mest vanlige typen varmepumpe i Norge. Vi servicerer alle kjente merker som 
                Mitsubishi, Daikin, Panasonic, LG og Fujitsu.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Luft-til-vann</h3>
              <p className="text-gray-700">
                Varmepumpe som kobles til vannbårent varmesystem. Krever spesialkompetanse 
                og F-gass sertifisering - som alle våre teknikere har.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Væske-til-vann</h3>
              <p className="text-gray-700">
                Bergvarme og jordvarme. Vi har erfaring med alle typer grunnvarmeinstallasjoner 
                og tilbyr komplett service og vedlikehold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Hva service innebærer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">Standard service</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Rengjøring av luftfiltre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Rengjøring av varmeveksler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Kontroll av kjølemedium (F-gass)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Test av alle funksjoner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Kontroll av kondensvannslange</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Rapport med anbefalinger</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">Utvidet service</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Komplett rengjøring innvendig og utvendig</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Etterfylling av kjølemedium ved behov</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Lekkasjesøk og tetting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Kontroll av elektrisk anlegg</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Ytelsesmåling og optimalisering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">✓</span>
                  <span>Detaljert servicerapport</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">Priser</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Standard service</h3>
              <p className="text-5xl font-bold text-orange-600 mb-4">1 290 kr</p>
              <p className="text-gray-700 mb-4">
                Anbefalt årlig service for luft-til-luft varmepumper
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Rengjøring og kontroll</li>
                <li>✓ F-gass kontroll</li>
                <li>✓ Funksjonstest</li>
                <li>✓ Servicerapport</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1a365d] to-[#2d4a7c] rounded-lg p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Utvidet service</h3>
              <p className="text-5xl font-bold mb-4">Fra 2 490 kr</p>
              <p className="mb-4">
                Komplett service for alle typer varmepumper
              </p>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>✓ Alt i standard service</li>
                <li>✓ Grundig rengjøring</li>
                <li>✓ Etterfylling kjølemedium</li>
                <li>✓ Ytelsesoptimalisering</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600">
            Prisene gjelder standard installasjoner. Vi gir alltid et bindende pristilbud før arbeidet starter.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">Ofte stilte spørsmål</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Bestill varmepumpeservice i dag</h2>
          <p className="text-xl mb-8">
            Sørg for optimal ytelse og lang levetid på din varmepumpe
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Bestill service
          </Link>
        </div>
      </section>
    </>
  );
}
