import Hero from '@/components/Hero';

export const metadata = {
  title: 'Om oss - AT Ventilasjon',
  description: 'AT Ventilasjon AS er din profesjonelle partner for ventilasjonsrens og varmepumpeservice i hele Norge. VVS-spesialister fra Risør.',
};

export default function OmOss() {
  return (
    <>
      <Hero
        title="Om AT Ventilasjon"
        subtitle="Din profesjonelle partner for inneklima siden 2025"
        ctaText=""
        ctaLink=""
      />

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Vår historie</h2>
          <div className="prose prose-lg max-w-none text-[#475569] leading-relaxed space-y-4">
            <p>
              AT Ventilasjon AS ble stiftet i 2025 med et klart mål: å tilby profesjonell VVS-service 
              med fokus på ventilasjonsrens og varmepumpeservice til kunder i hele Norge. Basert i Risør 
              på Sørlandet, kombinerer vi lokal forankring med landsdekkende tjenester.
            </p>
            <p>
              Som et MVA-registrert VVS-selskap (NACE 43.220) leverer vi alt fra ventilasjonsrens og 
              varmepumpeservice til filterabonnement. Vårt team består av 13 dedikerte medarbeidere 
              som jobber hver dag for å gi kundene våre bedre inneklima og lavere energikostnader.
            </p>
            <p>
              Vår suksess bygger på kompetente medarbeidere, profesjonelt utstyr, og et genuint 
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
            Vi er et team på 13 dedikerte medarbeidere basert i Risør. 
            Alle våre teknikere er fagutdannede, F-gass sertifiserte, og har lang erfaring i VVS-bransjen.
          </p>

          <div className="bg-gradient-to-br from-[#F0F9FF] to-white rounded-2xl p-8 border border-[#06B6D4]">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">Kompetanse du kan stole på</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#0891B2]">13</p>
                <p className="text-[#64748b]">Ansatte</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#0891B2]">VVS</p>
                <p className="text-[#64748b]">Spesialisert arbeid</p>
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
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all mb-8">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center">
                <span className="text-3xl mr-3">🏢</span>
                Risør (Hovedkontor)
              </h3>
              <p className="text-[#64748b] mb-4">
                Vårt hovedkontor ligger på Rugdeveien 1 i Risør. Her finner du vårt dedikerte team 
                på 13 medarbeidere som betjener kunder i hele Norge med profesjonell ventilasjonsrens 
                og varmepumpeservice.
              </p>
              <p className="text-[#475569] font-medium">
                Org.nr: 935 684 862 | MVA-registrert | VVS-arbeid (NACE 43.220)
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F0F9FF] to-white p-8 rounded-2xl border border-[#06B6D4]">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 text-center flex items-center justify-center">
                <span className="text-3xl mr-3">🇳🇴</span>
                Landsdekkende tjenester
              </h3>
              <p className="text-[#64748b] text-center mb-6">
                Vi betjener kunder i hele Norge med våre tjenester innen ventilasjonsrens, 
                varmepumpeservice og filterabonnement. Uansett hvor du befinner deg i landet, 
                kan vi hjelpe deg med bedre inneklima og lavere energikostnader.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center text-sm text-[#64748b]">
                <div>Oslo & Akershus</div>
                <div>Østfold</div>
                <div>Vestfold</div>
                <div>Telemark</div>
                <div>Agder</div>
                <div>Rogaland</div>
                <div>Vestland</div>
                <div>Trøndelag</div>
                <div>Nordland</div>
              </div>
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
