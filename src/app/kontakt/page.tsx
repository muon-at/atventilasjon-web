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
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#06B6D4] transition-all">
                  <h3 className="font-bold text-lg text-[#0F172A] mb-3 flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    Telefon
                  </h3>
                  <p className="text-[#475569] ml-11">
                    <a href="tel:22xxxxxx" className="hover:text-[#06B6D4] transition-colors">
                      22 XX XX XX
                    </a>
                  </p>
                  <p className="text-[#64748b] text-sm ml-11 mt-1">
                    Mandag - Fredag: 08:00 - 16:00
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#06B6D4] transition-all">
                  <h3 className="font-bold text-lg text-[#0F172A] mb-3 flex items-center">
                    <span className="text-2xl mr-3">✉️</span>
                    E-post
                  </h3>
                  <p className="text-[#475569] ml-11">
                    <a href="mailto:post@atventilasjon.no" className="hover:text-[#06B6D4] transition-colors">
                      post@atventilasjon.no
                    </a>
                  </p>
                  <p className="text-[#64748b] text-sm ml-11 mt-1">
                    Vi svarer normalt innen 24 timer
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#06B6D4] transition-all">
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
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">Våre kontorer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Oslo */}
            <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#06B6D4] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Oslo (Hovedkontor)</h3>
              <div className="space-y-2 text-[#475569]">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Eksempelveien 1<br />0100 Oslo</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span>
                  <a href="tel:22xxxxxx" className="hover:text-[#06B6D4] transition-colors">
                    22 XX XX XX
                  </a>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:oslo@atventilasjon.no" className="hover:text-[#06B6D4] transition-colors">
                    oslo@atventilasjon.no
                  </a>
                </p>
              </div>
            </div>

            {/* Bergen */}
            <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#06B6D4] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Bergen</h3>
              <div className="space-y-2 text-[#475569]">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Bergensveien 2<br />5000 Bergen</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span>
                  <a href="tel:55xxxxxx" className="hover:text-[#06B6D4] transition-colors">
                    55 XX XX XX
                  </a>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:bergen@atventilasjon.no" className="hover:text-[#06B6D4] transition-colors">
                    bergen@atventilasjon.no
                  </a>
                </p>
              </div>
            </div>

            {/* Trondheim */}
            <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#06B6D4] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Trondheim</h3>
              <div className="space-y-2 text-[#475569]">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Trondheimsgata 3<br />7000 Trondheim</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span>
                  <a href="tel:73xxxxxx" className="hover:text-[#06B6D4] transition-colors">
                    73 XX XX XX
                  </a>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:trondheim@atventilasjon.no" className="hover:text-[#06B6D4] transition-colors">
                    trondheim@atventilasjon.no
                  </a>
                </p>
              </div>
            </div>

            {/* Stavanger */}
            <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#06B6D4] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Stavanger</h3>
              <div className="space-y-2 text-[#475569]">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Stavangerveien 4<br />4000 Stavanger</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span>
                  <a href="tel:51xxxxxx" className="hover:text-[#06B6D4] transition-colors">
                    51 XX XX XX
                  </a>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:stavanger@atventilasjon.no" className="hover:text-[#06B6D4] transition-colors">
                    stavanger@atventilasjon.no
                  </a>
                </p>
              </div>
            </div>

            {/* Kristiansand */}
            <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#06B6D4] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Kristiansand</h3>
              <div className="space-y-2 text-[#475569]">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Sørlandsveien 5<br />4600 Kristiansand</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span>
                  <a href="tel:38xxxxxx" className="hover:text-[#06B6D4] transition-colors">
                    38 XX XX XX
                  </a>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:kristiansand@atventilasjon.no" className="hover:text-[#06B6D4] transition-colors">
                    kristiansand@atventilasjon.no
                  </a>
                </p>
              </div>
            </div>

            {/* Tromsø */}
            <div className="bg-[#FAFAFA] p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#06B6D4] hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Tromsø</h3>
              <div className="space-y-2 text-[#475569]">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Nordlysveien 6<br />9000 Tromsø</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span>
                  <a href="tel:77xxxxxx" className="hover:text-[#06B6D4] transition-colors">
                    77 XX XX XX
                  </a>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:tromso@atventilasjon.no" className="hover:text-[#06B6D4] transition-colors">
                    tromso@atventilasjon.no
                  </a>
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
            Ring oss på 22 XX XX XX eller send e-post til post@atventilasjon.no
          </p>
        </div>
      </section>
    </>
  );
}
