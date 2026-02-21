import Hero from '@/components/Hero';

export const metadata = {
  title: 'Om oss - AT Ventilasjon',
  description: 'AT Ventilasjon AS er din profesjonelle partner for ventilasjonsrens og varmepumpeservice i hele Norge. Over 10 års erfaring.',
};

export default function OmOss() {
  return (
    <>
      <Hero
        title="Om AT Ventilasjon"
        subtitle="Din profesjonelle partner for inneklima siden 2010"
        ctaText=""
        ctaLink=""
      />

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6">Vår historie</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              AT Ventilasjon AS ble grunnlagt i 2010 med en klar visjon: å gjøre profesjonell ventilasjonsrens 
              og varmepumpeservice tilgjengelig for alle i Norge. Det startet som et lite selskap i Oslo, men 
              har gjennom årene vokst til å bli en av landets ledende aktører innen inneklima og energieffektivisering.
            </p>
            <p>
              I dag har vi kontorer i Oslo, Bergen, Trondheim, Stavanger, Kristiansand og Tromsø, og betjener 
              kunder i hele Norge. Vi er stolte av å ha hjulpet tusenvis av huseiere og bedrifter med bedre 
              inneklima og lavere energikostnader.
            </p>
            <p>
              Vår suksess bygger på tre søyler: kompetente medarbeidere, profesjonelt utstyr, og et genuint 
              ønske om å levere beste kvalitet til våre kunder. Vi investerer kontinuerlig i opplæring og 
              sertifisering, slik at våre teknikere alltid er oppdatert på nyeste teknologi og metoder.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Våre verdier</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4 text-center">Kvalitet</h3>
              <p className="text-gray-700 text-center">
                Vi setter alltid kundens behov først og leverer arbeid av høyeste kvalitet. 
                Ingen snarveier - vi gjør det riktig første gang.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4 text-center">🤝</div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4 text-center">Ærlighet</h3>
              <p className="text-gray-700 text-center">
                Vi tror på åpen og ærlig kommunikasjon. Våre kunder skal kunne stole på oss, 
                og vi lover aldri noe vi ikke kan holde.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4 text-center">🌱</div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4 text-center">Bærekraft</h3>
              <p className="text-gray-700 text-center">
                Vi jobber for bedre inneklima og lavere energiforbruk. Det er bra for miljøet 
                og for kundenes økonomi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6 text-center">Vårt team</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Vi er et team på over 50 dedikerte medarbeidere fordelt på våre kontorer rundt i Norge. 
            Alle våre teknikere er fagutdannede, F-gass sertifiserte, og har lang erfaring i bransjen.
          </p>

          <div className="bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Kompetanse du kan stole på</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-gray-200">Ansatte</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">10+</p>
                <p className="text-gray-200">År med erfaring</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-gray-200">F-gass sertifisert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Dekningsområder</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">🏢 Oslo</h3>
              <p className="text-gray-700">
                Hovedkontor med full service for Oslo og Akershus. Rask respons og 
                omfattende erfaring i hovedstadsområdet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">🌊 Bergen</h3>
              <p className="text-gray-700">
                Regionkontor som betjener Bergen og Hordaland. Spesialisert på 
                vestlandets fuktige klima.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">⛰️ Trondheim</h3>
              <p className="text-gray-700">
                Regionkontor for Trøndelag med erfarne teknikere og lokal kjennskap.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">⚓ Stavanger</h3>
              <p className="text-gray-700">
                Regionkontor som dekker Rogaland og nærliggende områder på Sør-Vestlandet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">☀️ Kristiansand</h3>
              <p className="text-gray-700">
                Regionkontor for Sørlandet med god dekning i Agder-fylkene.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">❄️ Tromsø</h3>
              <p className="text-gray-700">
                Regionkontor som betjener Nord-Norge. Spesialkompetanse på nordnorske forhold.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Finner du ikke ditt område? Kontakt oss likevel - vi hjelper deg gjerne!
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">Sertifiseringer og godkjenninger</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-[#1a365d] mb-2">F-gass sertifisering</h3>
                <p className="text-gray-700">
                  Alle våre teknikere er F-gass sertifisert for arbeid med kjøleanlegg og varmepumper
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-[#1a365d] mb-2">Fagbrev ventilasjon</h3>
                <p className="text-gray-700">
                  Våre ventilasjonsteknikere har fagbrev og omfattende erfaring
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-[#1a365d] mb-2">HMS-sertifisert</h3>
                <p className="text-gray-700">
                  Vi har høyt fokus på sikkerhet og miljø i alle ledd
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-[#1a365d] mb-2">Forsikret virksomhet</h3>
                <p className="text-gray-700">
                  Full ansvarsforsikring for trygghet for både oss og våre kunder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
