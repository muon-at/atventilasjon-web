import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blogg - AT Ventilasjon',
  description: 'Tips, råd og nyheter om ventilasjon, varmepumper og inneklima fra AT Ventilasjon.',
};

// Placeholder blog posts - in production these would come from Supabase or a CMS
const blogPosts = [
  {
    title: 'Hvorfor er ventilasjonsrens så viktig?',
    excerpt: 'Mange husker ikke å rengjøre ventilasjonsanlegget, men det kan ha store konsekvenser for både helse og økonomi. Les mer om hvorfor regelmessig ventilasjonsrens er essensielt.',
    slug: 'hvorfor-ventilasjonsrens-er-viktig',
    date: '15. januar 2026',
    readTime: '5 min lesetid',
  },
  {
    title: '5 tegn på at varmepumpen din trenger service',
    excerpt: 'En varmepumpe som ikke fungerer optimalt kan koste deg dyrt i strømregningen. Her er fem tegn på at det er på tide med service.',
    slug: '5-tegn-pa-at-varmepumpen-trenger-service',
    date: '8. januar 2026',
    readTime: '4 min lesetid',
  },
  {
    title: 'Slik bytter du filter i ventilasjonsanlegget',
    excerpt: 'Det er enklere enn du tror! Følg vår steg-for-steg guide for å bytte filter selv, og sørg for frisk luft i hjemmet ditt.',
    slug: 'slik-bytter-du-filter',
    date: '2. januar 2026',
    readTime: '6 min lesetid',
  },
  {
    title: 'Inneklima og helse - hva du bør vite',
    excerpt: 'Dårlig inneklima kan føre til hodepine, tretthet og allergiproblemer. Les om sammenhengen mellom luftkvalitet og helse.',
    slug: 'inneklima-og-helse',
    date: '20. desember 2025',
    readTime: '7 min lesetid',
  },
  {
    title: 'Spar penger med riktig vedlikehold',
    excerpt: 'Visste du at riktig vedlikehold av ventilasjon og varmepumpe kan spare deg for tusenvis av kroner årlig? Her er hvordan.',
    slug: 'spar-penger-med-riktig-vedlikehold',
    date: '10. desember 2025',
    readTime: '5 min lesetid',
  },
  {
    title: 'Våre beste tips til vinterklare varmepumper',
    excerpt: 'Når kulden setter inn, er det viktig at varmepumpen fungerer optimalt. Her er våre beste tips for å forberede varmepumpen til vinteren.',
    slug: 'vinterklare-varmepumper',
    date: '1. november 2025',
    readTime: '6 min lesetid',
  },
];

export default function Blogg() {
  return (
    <>
      <Hero
        title="Blogg"
        subtitle="Tips, råd og nyheter om ventilasjon, varmepumper og inneklima"
        ctaText=""
        ctaLink=""
      />

      {/* Blog Posts Grid */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                readTime={post.readTime}
              />
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-16 text-center">
            <p className="text-[#757575]">Viser 6 av 6 artikler</p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-[#E0F7FA] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#212121]">Hold deg oppdatert</h2>
          <p className="text-xl mb-8 text-[#424242]">
            Følg bloggen vår for de nyeste tipsene om inneklima og energisparing
          </p>
          <p className="text-[#757575]">
            Nye artikler publiseres jevnlig - kom tilbake snart!
          </p>
        </div>
      </section>
    </>
  );
}
