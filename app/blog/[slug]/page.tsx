import Image from 'next/image';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText, type PortableTextBlock } from '@portabletext/react';

export type FullBlogPost = {
  title: string;
  mainImage?: {
    _type: 'image';
    asset: { _ref: string; _type: 'reference' };
  };
  content: PortableTextBlock[];
  publishedAt?: string;
  author?: string;
};

async function getPost(slug: string): Promise<FullBlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    mainImage,
    content,
    publishedAt,
    author
  }`;
  return await client.fetch<FullBlogPost | null>(query, { slug });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <p>
          {post.author && <span>{post.author}</span>}
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('uk-UA')}
            </time>
          )}
        </p>
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.title}
            width={800}
            height={500}
          />
        )}
      </header>

      <section>
        <PortableText value={post.content} />
      </section>
    </article>
  );
}
