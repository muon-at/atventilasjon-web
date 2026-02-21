import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export const metadata = {
  title: 'AT Ventilasjon - Profesjonell ventilasjonsrens og varmepumpeservice',
  description: 'AT Ventilasjon tilbyr profesjonell ventilasjonsrens, varmepumpeservice og filterabonnement i hele Norge. Bestill befaring i dag!',
};

export default function Home() {
  return (
    <>
      <Hero
        title="Profesjonell ventilasjonsrens og varmepumpeservice"
        subtitle="Vi sørger for rent og sunt inneklima i ditt hjem eller bedrift. Med over 10 års erfaring og kontorer i hele Norge."
        ctaText="Bestill befaring"
        ctaLink="/kontakt"
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Våre tjenester</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi tilbyr helhetlige løsninger for ventilasjon, varmepumper og luftfiltre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Ventilasjonsrens"
              description="Profesjonell rengjøring av ventilasjonsanlegg for bedre inneklima og lavere energikostnader. Vi utfører grundig inspeksjon, rengjøring og dokumentasjon."
              icon="🌬️"
              link="/ventilasjonsrens"
              price="Fra 4 500 kr"
            />
            <ServiceCard
              title="Varmepumpeservice"
              description="Service og vedlikehold av alle typer varmepumper. F-gass sertifiserte teknikere som sikrer optimal ytelse og lang levetid på ditt anlegg."
              icon="♨️"
              link="/varmepumpeservice"
              price="Fra 1 290 kr"
            />
            <ServiceCard
              title="Filterabonnement"
              description="Aldri glem å bytte filter igjen! Vi leverer nye filtre rett hjem til deg 1-2 ganger i året. Enkelt, praktisk og trygt for inneklima."
              icon="🔄"
              link="/filterabonnement"
              price="Fra 299 kr/halvår"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Hvorfor velge oss?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">Erfaring</h3>
              <p className="text-gray-600">Over 10 års erfaring i bransjen</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">Sertifisert</h3>
              <p className="text-gray-600">F-gass sertifiserte teknikere</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🇳🇴</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">Landsdekkende</h3>
              <p className="text-gray-600">Kontorer i hele Norge</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">Kvalitet</h3>
              <p className="text-gray-600">Høy kundetilfredshet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Hva kundene våre sier</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-orange-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Meget profesjonelt utført arbeid. Teknikerne var punktlige og grundige. Anbefales!"
              </p>
              <p className="font-semibold text-[#1a365d]">- Kari N., Oslo</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-orange-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Fornøyd med varmepumpeservicen. God service og ryddige håndverkere."
              </p>
              <p className="font-semibold text-[#1a365d]">- Per A., Bergen</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-orange-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Filterabonnementet er genielt! Slipper å huske på det selv. Topp service!"
              </p>
              <p className="font-semibold text-[#1a365d]">- Linda S., Trondheim</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Klar for bedre inneklima?</h2>
          <p className="text-xl mb-8">
            Kontakt oss i dag for en uforpliktende befaring og pristilbud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              Bestill befaring
            </Link>
            <Link
              href="/om-oss"
              className="inline-block bg-white hover:bg-gray-100 text-[#1a365d] font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              Les mer om oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
