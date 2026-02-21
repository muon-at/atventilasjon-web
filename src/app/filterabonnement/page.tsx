import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Filterabonnement - AT Ventilasjon',
  description: 'Aldri glem å bytte filter igjen! Få ventilasjonsfiltre levert rett hjem til deg automatisk via huskfilter.no.',
};

export default function Filterabonnement() {
  return (
    <>
      <Hero
        title="Filterabonnement"
        subtitle="Aldri glem å bytte filter igjen — vi leverer rett hjem til deg"
        badge="🔄 Automatisk levering"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Hvorfor bytte filter regelmessig?</h2>
          <div className="prose prose-lg max-w-none text-[#475569] leading-relaxed space-y-4">
            <p>
              Filteret i ventilasjonsanlegget er første forsvarslinje mot støv, pollen, bakterier og andre 
              partikler. Når filteret blir tilstoppet, reduseres luftkvaliteten og energiforbruket øker.
            </p>
            <p>
              Vi anbefaler at filtre byttes 1-2 ganger årlig, avhengig av belastning. Med vårt filterabonnement 
              slipper du å huske på det selv — vi sender deg nye filtre automatisk når det er på tide.
            </p>
            <p>
              Det er enkelt, praktisk og sikrer at du alltid har rent og sunt inneklima. Filteret får du 
              levert rett i postkassen, og du bytter det selv på 5 minutter.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Fordeler med filterabonnement</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 bg-[#ECFEFF] rounded-xl flex items-center justify-center text-4xl mb-5 mx-auto">🔔</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Slipper å huske</h3>
              <p className="text-[#64748b]">Vi sender nye filtre automatisk når det er på tide å bytte</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 bg-[#ECFEFF] rounded-xl flex items-center justify-center text-4xl mb-5 mx-auto">💨</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Bedre inneklima</h3>
              <p className="text-[#64748b]">Friske filtre sikrer optimal luftkvalitet hele året</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 bg-[#ECFEFF] rounded-xl flex items-center justify-center text-4xl mb-5 mx-auto">💡</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Lavere strømregning</h3>
              <p className="text-[#64748b]">Rene filtre reduserer energiforbruket med opptil 15%</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 bg-[#ECFEFF] rounded-xl flex items-center justify-center text-4xl mb-5 mx-auto">📦</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Hjemlevering</h3>
              <p className="text-[#64748b]">Filtrene leveres rett i postkassen — enkelt og praktisk</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Slik fungerer det</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#06B6D4] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Finn ditt filter</h3>
              <p className="text-[#64748b]">Gå til huskfilter.no og finn filteret som passer ditt ventilasjonsanlegg</p>
            </div>

            <div className="text-center">
              <div className="bg-[#06B6D4] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Velg abonnement</h3>
              <p className="text-[#64748b]">Velg hvor ofte du vil ha nye filtre — halvårlig eller årlig. Vi leverer automatisk.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#06B6D4] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Bytt filter</h3>
              <p className="text-[#64748b]">Følg enkel instruksjon og bytt filter på 5 minutter — ferdig!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to huskfilter.no */}
      <section className="py-24 bg-gradient-to-br from-[#ECFEFF] via-white to-[#FFF7ED]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-[#ECFEFF] rounded-2xl flex items-center justify-center text-5xl mx-auto mb-8">🏠</div>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Bestill filterabonnement på huskfilter.no</h2>
          <p className="text-xl text-[#475569] mb-4 max-w-2xl mx-auto">
            På huskfilter.no finner du alle typer ventilasjonsfiltre — både som enkeltfjøp og abonnement. 
            Finn filteret som passer ditt anlegg og få det levert rett hjem.
          </p>
          <p className="text-[#64748b] mb-10">
            Ingen bindingstid · Gratis frakt · Enkelt å si opp
          </p>
          <a
            href="https://huskfilter.no"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-bold py-5 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Gå til huskfilter.no →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Vanlige spørsmål</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Hvordan vet jeg hvilket filter jeg trenger?</h3>
              <p className="text-[#64748b]">På huskfilter.no kan du søke etter aggregattype eller filternummer. Er du usikker? Kontakt oss så hjelper vi deg finne riktig filter.</p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Hvor ofte bør jeg bytte filter?</h3>
              <p className="text-[#64748b]">Vi anbefaler å bytte filter 1-2 ganger i året. Bor du i et område med mye støv, pollen eller trafikk kan det lønne seg å bytte oftere.</p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Kan jeg si opp abonnementet?</h3>
              <p className="text-[#64748b]">Ja, det er ingen bindingstid. Du kan enkelt si opp eller endre abonnementet når som helst via huskfilter.no.</p>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Kan jeg også bestille enkeltfiltre?</h3>
              <p className="text-[#64748b]">Absolutt! På huskfilter.no kan du kjøpe enkeltfiltre uten abonnement om du foretrekker det.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0891B2] to-[#0E7490]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Klar for bedre inneklima?</h2>
          <p className="text-xl mb-8 text-white/80">
            Start filterabonnement i dag — du fortjener ren luft
          </p>
          <a
            href="https://huskfilter.no"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#0891B2] font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Bestill på huskfilter.no →
          </a>
        </div>
      </section>
    </>
  );
}
