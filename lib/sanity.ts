import { client } from '@/sanity/lib/client';
import { BlogPost, FullBlogPost } from '@/types/blogPost';

export async function getPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc){
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  author->{
    name,
    role
  }
}`;
  return await client.fetch<BlogPost[]>(query);
}


export async function getPost(slug: string): Promise<FullBlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    mainImage,
    content,
    extendedContent,
    publishedAt,
    author->{
    name,
    role
  }
  }`;
  return await client.fetch<FullBlogPost | null>(query, { slug });
}
