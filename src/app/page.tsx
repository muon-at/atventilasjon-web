import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata = {
  title: 'AT Ventilasjon - Rene resultater. Trygg drift.',
  description: 'Profesjonell ventilasjonsrens og varmepumpeservice i hele Norge. Sertifisert og erfaren. Bestill befaring i dag!',
};

const areas = [
  'Oslo', 'Bærum', 'Asker', 'Drammen', 'Lillestrøm', 'Jessheim', 
  'Ski', 'Ås', 'Moss', 'Fredrikstad', 'Sarpsborg', 'Halden', 
  'Kongsberg', 'Tønsberg', 'Sandefjord', 'Omegn'
];

export default function Home() {
  return (
    <>
      <Hero
        title="Rene resultater. Trygg drift."
        subtitle="Profesjonell ventilasjonsrens og varmepumpeservice i hele Norge"
        ctaText="Bestill befaring"
        ctaLink="#kontakt"
        badge="✅ Sertifisert og profesjonell"
      />

      {/* Trust Items */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0891B2] mb-1">10+</div>
              <p className="text-sm text-[#64748b]">års erfaring</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0891B2] mb-1">1000+</div>
              <p className="text-sm text-[#64748b]">fornøyde kunder</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0891B2] mb-1">24/7</div>
              <p className="text-sm text-[#64748b]">kundeservice</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0891B2] mb-1">100%</div>
              <p className="text-sm text-[#64748b]">garantert kvalitet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Våre tjenester</h2>
            <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
              Helhetlige løsninger for ventilasjon, varmepumper og luftfiltre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Komplett ventilasjonsrens"
              description="Profesjonell rengjøring av hele ventilasjonsanlegget. Grundig inspeksjon, rengjøring og dokumentasjon for bedre inneklima."
              icon="🌬️"
              link="/ventilasjonsrens"
              price="Fra 3 990,- inkl. mva"
            />
            <ServiceCard
              title="Rens av varmepumpe"
              description="Service og rengjøring av alle typer varmepumper. Sertifiserte teknikere som sikrer optimal ytelse og lang levetid."
              icon="♨️"
              link="/varmepumpeservice"
              price="Fra 2 590,- inkl. mva"
            />
            <ServiceCard
              title="Service og filterbytte"
              description="Regelmessig service og profesjonelt filterbytte for å opprettholde god luftkvalitet og effektivitet."
              icon="🔧"
              price="Fra 990,-"
            />
            <ServiceCard
              title="Filterabonnement"
              description="Aldri glem å bytte filter igjen! Automatisk levering av nye filtre 1-2 ganger i året. Enkelt og bekymringsfritt."
              icon="🔄"
              link="/filterabonnement"
              price="Automatisk levering"
              external={false}
            />
            <ServiceCard
              title="Rens av kjøkkenventilasjon"
              description="Spesialisert rengjøring av kjøkkenventilasjonsanlegg for næringsdrivende. Overholder alle krav til brannsikkerhet."
              icon="🍳"
              price="For næring"
            />
            <ServiceCard
              title="Skånsom overflaterens"
              description="Profesjonell rens av overflater og kanaler med skånsomme metoder som ivaretar kvalitet og levetid."
              icon="✨"
              price="Skreddersydd pris"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Hvorfor ren ventilasjon?</h2>
            <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
              Rene ventilasjonsanlegg gir bedre helse, lavere energikostnader og lengre levetid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ECFEFF] rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">Bedre luftkvalitet</h3>
                <p className="text-[#64748b]">Fjerner støv, bakterier og allergener for et sunnere inneklima</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ECFEFF] rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">Lavere strømforbruk</h3>
                <p className="text-[#64748b]">Rene anlegg bruker opptil 30% mindre energi</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ECFEFF] rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">Lengre levetid</h3>
                <p className="text-[#64748b]">Regelmessig vedlikehold forlenger anleggets levetid betydelig</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ECFEFF] rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">Redusert støy</h3>
                <p className="text-[#64748b]">Rene vifter og kanaler gir merkbart mindre støy</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ECFEFF] rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">Brannsikkerhet</h3>
                <p className="text-[#64748b]">Rengjøring reduserer brannfaren i ventilasjonskanaler</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#ECFEFF] rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">Dokumentasjon</h3>
                <p className="text-[#64748b]">Fullstendig rapport etter hvert serviceoppdrag</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Dekningsområder</h2>
            <p className="text-xl text-[#64748b]">
              Vi betjener hele Østlandet og Sørlandet
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-block bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm font-medium text-[#475569] hover:border-[#0891B2] hover:text-[#0891B2] transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Bestill befaring</h2>
            <p className="text-xl text-[#64748b]">
              Fyll ut skjemaet så tar vi kontakt for en uforpliktende befaring og pristilbud
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
