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
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Vår historie</h2>
          <div className="prose prose-lg max-w-none text-[#475569] leading-relaxed space-y-4">
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
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Våre verdier</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#ECFEFF] rounded-xl flex items-center justify-center text-4xl mb-5 mx-auto">🎯</div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 text-center">Kvalitet</h3>
              <p className="text-[#64748b] text-center">
                Vi setter alltid kundens behov først og leverer arbeid av høyeste kvalitet. 
                Ingen snarveier - vi gjør det riktig første gang.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#ECFEFF] rounded-xl flex items-center justify-center text-4xl mb-5 mx-auto">🤝</div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 text-center">Ærlighet</h3>
              <p className="text-[#64748b] text-center">
                Vi tror på åpen og ærlig kommunikasjon. Våre kunder skal kunne stole på oss, 
                og vi lover aldri noe vi ikke kan holde.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#ECFEFF] rounded-xl flex items-center justify-center text-4xl mb-5 mx-auto">🌱</div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 text-center">Bærekraft</h3>
              <p className="text-[#64748b] text-center">
                Vi jobber for bedre inneklima og lavere energiforbruk. Det er bra for miljøet 
                og for kundenes økonomi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6 text-center">Vårt team</h2>
          <p className="text-xl text-[#475569] text-center mb-12 max-w-3xl mx-auto">
            Vi er et team på over 50 dedikerte medarbeidere fordelt på våre kontorer rundt i Norge. 
            Alle våre teknikere er fagutdannede, F-gass sertifiserte, og har lang erfaring i bransjen.
          </p>

          <div className="bg-gradient-to-br from-[#F0F9FF] to-white rounded-2xl p-8 border border-[#06B6D4]">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">Kompetanse du kan stole på</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#0891B2]">50+</p>
                <p className="text-[#64748b]">Ansatte</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#0891B2]">10+</p>
                <p className="text-[#64748b]">År med erfaring</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#0891B2]">100%</p>
                <p className="text-[#64748b]">F-gass sertifisert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Dekningsområder</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 flex items-center">
                <span className="text-2xl mr-3">🏢</span>
                Oslo
              </h3>
              <p className="text-[#64748b]">
                Hovedkontor med full service for Oslo og Akershus. Rask respons og 
                omfattende erfaring i hovedstadsområdet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 flex items-center">
                <span className="text-2xl mr-3">🌊</span>
                Bergen
              </h3>
              <p className="text-[#64748b]">
                Regionkontor som betjener Bergen og Hordaland. Spesialisert på 
                vestlandets fuktige klima.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 flex items-center">
                <span className="text-2xl mr-3">⛰️</span>
                Trondheim
              </h3>
              <p className="text-[#64748b]">
                Regionkontor for Trøndelag med erfarne teknikere og lokal kjennskap.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 flex items-center">
                <span className="text-2xl mr-3">⚓</span>
                Stavanger
              </h3>
              <p className="text-[#64748b]">
                Regionkontor som dekker Rogaland og nærliggende områder på Sør-Vestlandet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 flex items-center">
                <span className="text-2xl mr-3">☀️</span>
                Kristiansand
              </h3>
              <p className="text-[#64748b]">
                Regionkontor for Sørlandet med god dekning i Agder-fylkene.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 flex items-center">
                <span className="text-2xl mr-3">❄️</span>
                Tromsø
              </h3>
              <p className="text-[#64748b]">
                Regionkontor som betjener Nord-Norge. Spesialkompetanse på nordnorske forhold.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#475569] mb-4">
              Finner du ikke ditt område? Kontakt oss likevel - vi hjelper deg gjerne!
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Sertifiseringer og godkjenninger</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 bg-[#FAFAFA] p-6 rounded-xl border border-gray-200">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">F-gass sertifisering</h3>
                <p className="text-[#64748b]">
                  Alle våre teknikere er F-gass sertifisert for arbeid med kjøleanlegg og varmepumper
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#FAFAFA] p-6 rounded-xl border border-gray-200">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">Fagbrev ventilasjon</h3>
                <p className="text-[#64748b]">
                  Våre ventilasjonsteknikere har fagbrev og omfattende erfaring
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#FAFAFA] p-6 rounded-xl border border-gray-200">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">HMS-sertifisert</h3>
                <p className="text-[#64748b]">
                  Vi har høyt fokus på sikkerhet og miljø i alle ledd
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#FAFAFA] p-6 rounded-xl border border-gray-200">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-bold text-lg text-[#0F172A] mb-2">Forsikret virksomhet</h3>
                <p className="text-[#64748b]">
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
