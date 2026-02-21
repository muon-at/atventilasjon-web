import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Kontakt oss - AT Ventilasjon',
  description: 'Kontakt AT Ventilasjon for ventilasjonsrens, varmepumpeservice eller filterabonnement. Vi har kontorer i hele Norge.',
};

export default function Kontakt() {
  return (
    <>
      <Hero
        title="Kontakt oss"
        subtitle="Vi hjelper deg gjerne med alle spørsmål om ventilasjon og varmepumper"
        ctaText=""
        ctaLink=""
      />

      {/* Contact Form and Info */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Send oss en forespørsel</h2>
              <p className="text-[#475569] mb-8">
                Fyll ut skjemaet under, så tar vi kontakt med deg så snart som mulig. 
                Vi gir alltid uforpliktende pristilbud.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Kontaktinformasjon</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] transition-all">
                  <h3 className="font-bold text-lg text-[#0F172A] mb-3 flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    Telefon
                  </h3>
                  <p className="text-[#475569] ml-11">
                    Ring oss: kontakt for nummer
                  </p>
                  <p className="text-[#64748b] text-sm ml-11 mt-1">
                    Mandag - Fredag: 08:00 - 16:00
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] transition-all">
                  <h3 className="font-bold text-lg text-[#0F172A] mb-3 flex items-center">
                    <span className="text-2xl mr-3">✉️</span>
                    E-post
                  </h3>
                  <p className="text-[#475569] ml-11">
                    <a href="mailto:post@atventilasjon.no" className="hover:text-[#0891B2] transition-colors">
                      post@atventilasjon.no
                    </a>
                  </p>
                  <p className="text-[#64748b] text-sm ml-11 mt-1">
                    Vi svarer normalt innen 24 timer
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] transition-all">
                  <h3 className="font-bold text-lg text-[#0F172A] mb-3 flex items-center">
                    <span className="text-2xl mr-3">⏰</span>
                    Åpningstider
                  </h3>
                  <div className="ml-11 space-y-1 text-[#475569]">
                    <p>Mandag - Fredag: 08:00 - 16:00</p>
                    <p>Lørdag - Søndag: Stengt</p>
                    <p className="text-sm text-[#64748b] mt-2">
                      Akutte henvendelser kan avtales utenom ordinær åpningstid
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Vårt kontor</h2>
          
          <div className="max-w-2xl mx-auto">
            {/* Risør - Hovedkontor */}
            <div className="bg-[#FAFAFA] p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#0891B2] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6">AT Ventilasjon AS (Hovedkontor)</h3>
              <div className="space-y-3 text-[#475569]">
                <p className="flex items-start">
                  <span className="mr-3 text-xl">📍</span>
                  <span>Rugdeveien 1<br />4956 Risør</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 text-xl">📞</span>
                  <span>Ring oss: kontakt for nummer</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 text-xl">✉️</span>
                  <a href="mailto:post@atventilasjon.no" className="hover:text-[#0891B2] transition-colors">
                    post@atventilasjon.no
                  </a>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 text-xl">🏢</span>
                  <span>Org.nr: 935 684 862</span>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-[#64748b]">
                  Vi betjener kunder i hele Norge med profesjonell ventilasjonsrens og varmepumpeservice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#0F172A]">Har du spørsmål?</h2>
          <p className="text-xl mb-4 text-[#475569]">
            Vi er her for å hjelpe deg! Ta kontakt i dag for uforpliktende råd og pristilbud.
          </p>
          <p className="text-[#64748b]">
            Ta kontakt via e-post til post@atventilasjon.no
          </p>
        </div>
      </section>
    </>
  );
}
