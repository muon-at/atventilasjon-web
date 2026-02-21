import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import { supabase } from '@/lib/supabase';

export const metadata = {
  title: 'Blogg - AT Ventilasjon',
  description: 'Tips, råd og nyheter om ventilasjon, varmepumper og inneklima fra AT Ventilasjon.',
};

export const revalidate = 60; // Revalidate every 60 seconds

async function getBlogPosts() {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, published_at, category')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getBlogPosts:', error);
    return [];
  }
}

export default async function Blogg() {
  const blogPosts = await getBlogPosts();

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
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
                Ingen artikler ennå
              </h2>
              <p className="text-xl text-[#475569]">
                Vi jobber med å publisere nyttig innhold om ventilasjon og varmepumper. 
                Kom tilbake snart!
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt || 'Les mer...'}
                    slug={post.slug}
                    date={post.published_at ? new Date(post.published_at).toLocaleDateString('nb-NO', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    }) : 'Nylig'}
                    readTime="5 min lesetid"
                  />
                ))}
              </div>

              {/* Pagination placeholder */}
              <div className="mt-16 text-center">
                <p className="text-[#64748b]">
                  Viser {blogPosts.length} {blogPosts.length === 1 ? 'artikkel' : 'artikler'}
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-[#F0F9FF] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#0F172A]">Hold deg oppdatert</h2>
          <p className="text-xl mb-8 text-[#475569]">
            Følg bloggen vår for de nyeste tipsene om inneklima og energisparing
          </p>
          <p className="text-[#64748b]">
            Nye artikler publiseres jevnlig - kom tilbake snart!
          </p>
        </div>
      </section>
    </>
  );
}
