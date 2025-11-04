import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import NotFoundPosts from '@/components/NotFound/NotFoundPosts/NotFoundPosts';
import { formatDate } from '@/utils/date';

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    _type: 'image';
    asset: { _ref: string; _type: 'reference' };
  };
  excerpt?: string;
  publishedAt?: string;
  author?: string;
};

async function getPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    author
  }`;
  return await client.fetch<BlogPost[]>(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section aria-labelledby="blog-title">
      {posts.length === 0 ? (
        <NotFoundPosts />
      ) : (
        <div>
          <h2 id="blog-title">DevCraft: думки, код і натхнення</h2>
          <p>Ми ділимося історіями, технічними знахідками й думками про розробку.</p>

          {posts.map(post => (
            <article key={post._id}>
              <Link href={`/blog/${post.slug.current}`} aria-label={`Read post: ${post.title}`}>
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    alt={post.title}
                    width={600}
                    height={400}
                    priority
                  />
                )}

                <header>
                  <h2>{post.title}</h2>
                </header>

                {post.excerpt && <p>{post.excerpt}</p>}

                <footer>
                  <small>
                    {post.author && <span>{post.author} • </span>}
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {formatDate({ date: post.publishedAt })}
                      </time>
                    )}
                  </small>
                </footer>
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
