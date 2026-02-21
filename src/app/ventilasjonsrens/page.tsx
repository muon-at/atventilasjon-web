import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata = {
  title: 'Ventilasjonsrens - AT Ventilasjon',
  description: 'Profesjonell ventilasjonsrens for bedre inneklima og lavere energikostnader. Vi anbefaler rens hvert 3-5 år. Priser fra 4500 kr.',
};

export default function Ventilasjonsrens() {
  const faqItems = [
    {
      question: 'Hvor ofte bør ventilasjonsanlegget rengjøres?',
      answer: 'Vi anbefaler at ventilasjonsanlegg rengjøres hvert 3-5 år, avhengig av bruk og miljøfaktorer. Ved høy belastning eller allergiproblemer kan hyppigere rengjøring være nødvendig.',
    },
    {
      question: 'Hvor lang tid tar en ventilasjonsrens?',
      answer: 'En standard ventilasjonsrens i en bolig tar typisk 3-5 timer, avhengig av anleggets størrelse og tilstand. Vi informerer om forventet tidsbruk ved befaring.',
    },
    {
      question: 'Hva er inkludert i prisen?',
      answer: 'Prisen inkluderer inspeksjon, rengjøring av kanaler og aggregat, måling av luftmengder, og en detaljert rapport med bilder. Eventuelle ekstraarbeider avtales separat.',
    },
    {
      question: 'Må jeg være hjemme under rengjøringen?',
      answer: 'Du trenger ikke være til stede hele tiden, men noen må være tilgjengelig ved oppstart og avslutning. Vi informerer underveis om behov for tilgang til ulike rom.',
    },
    {
      question: 'Hvilke områder dekker dere?',
      answer: 'Vi har kontorer i Oslo, Bergen, Trondheim, Stavanger, Kristiansand og Tromsø, og betjener hele Norge. Kontakt oss for å høre om tilgjengelighet i ditt område.',
    },
  ];

  return (
    <>
      <Hero
        title="Ventilasjonsrens"
        subtitle="Profesjonell rengjøring for bedre inneklima og lavere energikostnader"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Hvorfor er ventilasjonsrens viktig?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Ventilasjonsanlegget er hjemmets eller bedriftens lunger. Over tid samler det seg støv, bakterier, 
              sopp og andre partikler i kanalene. Dette kan føre til dårligere inneklima, økt energiforbruk, 
              og helseproblemer som allergi og astma.
            </p>
            <p>
              En grundig ventilasjonsrens fjerner disse forurensningene og sikrer at anlegget fungerer optimalt. 
              Resultatet er friskere luft, lavere strømregninger og økt trivsel for de som oppholder seg i bygget.
            </p>
            <p>
              Vi anbefaler at ventilasjonsanlegg rengjøres hvert 3-5 år. Ved høyere belastning, som i boliger 
              med kjæledyr eller personer med allergi, kan hyppigere rengjøring være aktuelt.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Vår prosess</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4 text-orange-500">1</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Inspeksjon</h3>
              <p className="text-gray-700">
                Vi starter med en grundig inspeksjon av anlegget. Vi tar bilder og vurderer 
                tilstand og behov for rengjøring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4 text-orange-500">2</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Rengjøring</h3>
              <p className="text-gray-700">
                Vi rengjør alle kanaler, ventilasjonsaggregatet og ventilasjonsventilene 
                med profesjonelt utstyr.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4 text-orange-500">3</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Måling</h3>
              <p className="text-gray-700">
                Etter rengjøring måler vi luftmengder for å sikre at anlegget fungerer 
                optimalt og i henhold til tekniske krav.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4 text-orange-500">4</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Rapport</h3>
              <p className="text-gray-700">
                Du får en detaljert rapport med bilder før og etter, målinger og anbefalinger 
                for videre vedlikehold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">Priser</h2>
          
          <div className="bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] rounded-lg p-8 text-white mb-8">
            <div className="text-center">
              <p className="text-xl mb-2">Standard ventilasjonsrens</p>
              <p className="text-5xl font-bold mb-4">Fra 4 500 kr</p>
              <p className="text-gray-200">
                Prisen avhenger av anleggets størrelse og kompleksitet. Vi gir alltid et 
                bindende pristilbud etter befaring.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#1a365d] mb-3">Inkludert i prisen:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Grundig inspeksjon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Rengjøring av kanaler og aggregat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Måling av luftmengder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Detaljert rapport med bilder</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#1a365d] mb-3">Tilleggstjenester:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Ekstra grundig vask ved kraftig tilsmussing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Utskifting av filtre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Service av ventilasjonsaggregat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Filterabonnement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">Ofte stilte spørsmål</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Klar for renere luft?</h2>
          <p className="text-xl mb-8">
            Kontakt oss for en uforpliktende befaring og pristilbud
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Bestill befaring
          </Link>
        </div>
      </section>
    </>
  );
}
