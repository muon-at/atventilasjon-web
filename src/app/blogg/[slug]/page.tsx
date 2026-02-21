import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { supabase } from '@/lib/supabase';

export const revalidate = 60; // Revalidate every 60 seconds

interface PageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in getBlogPost:', error);
    return null;
  }
}

async function getRelatedPosts(currentSlug: string, category: string) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, published_at')
      .eq('status', 'published')
      .eq('category', category)
      .neq('slug', currentSlug)
      .order('published_at', { ascending: false })
      .limit(2);

    if (error) {
      console.error('Error fetching related posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getRelatedPosts:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Artikkel ikke funnet - AT Ventilasjon',
    };
  }

  return {
    title: `${post.title} - AT Ventilasjon`,
    description: post.meta_description || post.excerpt || 'Les mer på AT Ventilasjon blogg',
  };
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.category);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nb-NO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <article className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link href="/blogg" className="text-[#0891B2] hover:text-[#06B6D4] transition-colors">
            ← Tilbake til blogg
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-block bg-[#ECFEFF] text-[#0891B2] px-4 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-[#64748b]">
            <span>{post.author}</span>
            <span className="mx-3">•</span>
            <time>{formatDate(post.published_at)}</time>
            {post.excerpt && (
              <>
                <span className="mx-3">•</span>
                <span>5 min lesetid</span>
              </>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image_url ? (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img 
              src={post.featured_image_url} 
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        ) : (
          <div className="h-96 bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl mb-12 flex items-center justify-center">
            <span className="text-6xl">🏢</span>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-[#0F172A] prose-a:text-[#0891B2] prose-strong:text-[#0F172A]">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="bg-[#FAFAFA] text-[#64748b] px-4 py-2 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#F0F9FF] to-white border border-[#06B6D4] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
            Trenger du hjelp med ventilasjon eller varmepumpe?
          </h2>
          <p className="text-[#475569] mb-6">
            Kontakt oss for en uforpliktende befaring og pristilbud
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[#0891B2] hover:bg-[#06B6D4] text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg"
          >
            Kontakt oss
          </Link>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Relaterte artikler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blogg/${relatedPost.slug}`}
                  className="bg-[#FAFAFA] p-6 rounded-2xl border border-gray-200 hover:border-[#0891B2] hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-lg text-[#0F172A] mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-[#64748b] text-sm mb-2">
                    {relatedPost.excerpt?.substring(0, 100)}...
                  </p>
                  <p className="text-[#0891B2] text-sm font-medium">
                    Les mer →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
