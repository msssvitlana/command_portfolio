
import { getPosts } from '@/lib/sanity';
import BlogPageClient from './BlogPage.client';



export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogPageClient posts={posts} />;
}
