'use client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import NotFoundPosts from '@/components/NotFound/NotFoundPosts/NotFoundPosts';
import { formatDate } from '@/utils/date';
import styles from './BlogPage.module.css';
import Section from '@/components/Ui/Section/Section';
import { BlogPost } from '@/types/blogPost';
import { useFloatingAnimation } from '@/hooks/useFloatingAnimation';
interface Props {
  posts: BlogPost[];
}

const BlogPageClient = ({ posts }: Props) => {
  useFloatingAnimation();
  return (
    <Section aria-labelledby="blog-title" className={styles.blogSection}>
      {posts.length === 0 ? (
        <NotFoundPosts />
      ) : (
        <div>
          <h2 id="blog-title" className={styles.blogTitle}>
            DevCraft: думки, код і натхнення
          </h2>
          <h3 className={styles.blogIntro}>
            Ми ділимося історіями, технічними знахідками й думками про розробку.
          </h3>

          <ul className={styles.blogPostList}>
            {posts.map(post => (
              <li key={post._id} className={styles.blogPostItem}>
                <Link
                  href={`/blog/${post.slug.current}`}
                  aria-label={`Read post: ${post.title}`}
                  className={styles.blogPostLink}
                >
                  {post.mainImage && (
                    <div className={styles.blogPostInner}>
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        width={600}
                        height={400}
                        priority
                        className={styles.blogPostImage}
                      />
                    </div>
                  )}
                  <h3 className={styles.blogPostTitle}>{post.title}</h3>
                  {post.excerpt && <p className={styles.blogPostText}>{post.excerpt}</p>}
                  <p className={styles.blogPostMeta}>
                    {post.author && (
                      <span className={styles.blogPostAuthor}>{post.author.name}</span>
                    )}
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt} className={styles.blogPostDate}>
                        {formatDate({ date: post.publishedAt })}
                      </time>
                    )}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
};

export default BlogPageClient;
