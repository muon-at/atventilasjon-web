import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata = {
  title: 'Komplett ventilasjonsrens - AT Ventilasjon',
  description: 'Profesjonell ventilasjonsrens for bedre inneklima og lavere energikostnader. Vi anbefaler rens hvert 3-5 år. Fra 3 990,- inkl. mva.',
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
        title="Komplett ventilasjonsrens"
        subtitle="Profesjonell rengjøring for bedre inneklima og lavere energikostnader"
        badge="🌬️ Fra 3 990,- inkl. mva"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#212121] mb-6">Hvorfor er ventilasjonsrens viktig?</h2>
          <div className="prose prose-lg max-w-none text-[#424242] leading-relaxed space-y-4">
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
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#212121] mb-12 text-center">Vår prosess</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#E0F7FA] rounded-xl flex items-center justify-center text-2xl font-bold text-[#1A9BA3] mb-4">1</div>
              <h3 className="text-xl font-bold text-[#212121] mb-3">Inspeksjon</h3>
              <p className="text-[#757575]">
                Vi starter med en grundig inspeksjon av anlegget. Vi tar bilder og vurderer 
                tilstand og behov for rengjøring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#E0F7FA] rounded-xl flex items-center justify-center text-2xl font-bold text-[#1A9BA3] mb-4">2</div>
              <h3 className="text-xl font-bold text-[#212121] mb-3">Rengjøring</h3>
              <p className="text-[#757575]">
                Vi rengjør alle kanaler, ventilasjonsaggregatet og ventilasjonsventilene 
                med profesjonelt utstyr.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#E0F7FA] rounded-xl flex items-center justify-center text-2xl font-bold text-[#1A9BA3] mb-4">3</div>
              <h3 className="text-xl font-bold text-[#212121] mb-3">Måling</h3>
              <p className="text-[#757575]">
                Etter rengjøring måler vi luftmengder for å sikre at anlegget fungerer 
                optimalt og i henhold til tekniske krav.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#E0F7FA] rounded-xl flex items-center justify-center text-2xl font-bold text-[#1A9BA3] mb-4">4</div>
              <h3 className="text-xl font-bold text-[#212121] mb-3">Rapport</h3>
              <p className="text-[#757575]">
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
          <h2 className="text-3xl font-bold text-[#212121] mb-8 text-center">Priser</h2>
          
          <div className="bg-gradient-to-br from-[#E0F7FA] to-white rounded-2xl p-8 border border-[#1A9BA3] mb-8">
            <div className="text-center">
              <p className="text-xl mb-2 text-[#424242]">Komplett ventilasjonsrens</p>
              <p className="text-5xl font-bold mb-4 text-[#1A9BA3]">Fra 3 990,-</p>
              <p className="text-sm text-[#757575] mb-1">inkl. mva</p>
              <p className="text-[#424242] mt-4">
                Prisen avhenger av anleggets størrelse og kompleksitet. Vi gir alltid et 
                bindende pristilbud etter befaring.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h3 className="font-bold text-lg text-[#212121] mb-4">Inkludert i prisen:</h3>
              <ul className="space-y-3 text-[#424242]">
                <li className="flex items-start">
                  <span className="text-[#1A9BA3] mr-2 font-bold">✓</span>
                  <span>Grundig inspeksjon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1A9BA3] mr-2 font-bold">✓</span>
                  <span>Rengjøring av kanaler og aggregat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1A9BA3] mr-2 font-bold">✓</span>
                  <span>Måling av luftmengder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1A9BA3] mr-2 font-bold">✓</span>
                  <span>Detaljert rapport med bilder</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h3 className="font-bold text-lg text-[#212121] mb-4">Tilleggstjenester:</h3>
              <ul className="space-y-3 text-[#424242]">
                <li className="flex items-start">
                  <span className="text-[#1A9BA3] mr-2">•</span>
                  <span>Ekstra grundig vask ved kraftig tilsmussing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1A9BA3] mr-2">•</span>
                  <span>Utskifting av filtre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1A9BA3] mr-2">•</span>
                  <span>Service av ventilasjonsaggregat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1A9BA3] mr-2">•</span>
                  <span>Filterabonnement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#212121] mb-8 text-center">Ofte stilte spørsmål</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E0F7FA] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#212121]">Klar for renere luft?</h2>
          <p className="text-xl mb-8 text-[#424242]">
            Kontakt oss for en uforpliktende befaring og pristilbud
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[#1A9BA3] hover:bg-[#148088] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Bestill befaring
          </Link>
        </div>
      </section>
    </>
  );
}
