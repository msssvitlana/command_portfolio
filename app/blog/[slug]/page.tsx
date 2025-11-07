import Image from 'next/image';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText, type PortableTextBlock } from '@portabletext/react';
import Link from 'next/link';

export type FullBlogPost = {
  title: string;
  mainImage?: {
    _type: 'image';
    asset: { _ref: string; _type: 'reference' };
  };
  content: PortableTextBlock[];
  publishedAt?: string;
  author?: {
    name?: string;
    role?: string;
  };
};

async function getPost(slug: string): Promise<FullBlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    mainImage,
    content,
    publishedAt,
    author->{
    name,
    role
  }
  }`;
  return await client.fetch<FullBlogPost | null>(query, { slug });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <article aria-labelledby="post-title">
      <header>
        <h1 id="post-title">{post.title}</h1>

        <p>
          {post.author && (
            <span>
              {post.author.name}
              {post.author.role && ` (${post.author.role})`} •{' '}
            </span>
          )}
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('uk-UA')}
            </time>
          )}
        </p>
      </header>

      {post.mainImage && (
        <figure>
          <Image
            src={urlFor(post.mainImage).width(1000).height(600).url()}
            alt={post.title}
            width={1000}
            height={600}
            priority
          />
          <figcaption>{post.title}</figcaption>
        </figure>
      )}

      <section>
        <PortableText value={post.content} />
        <Link href="/blog">← Повернутись до списку статей</Link>
      </section>
    </article>
  );
}
