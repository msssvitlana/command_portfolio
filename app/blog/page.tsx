import { client } from '@/sanity/lib/client';
import { BlogPost } from '@/types/blogPost';
import BlogPageClient from './BlogPage.client';

async function getPosts(): Promise<BlogPost[]> {
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

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogPageClient posts={posts} />;
}
