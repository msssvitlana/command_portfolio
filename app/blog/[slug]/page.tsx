import Image from 'next/image';
import { notFound } from 'next/navigation';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import styles from './BlogPostPage.module.css';
import Section from '@/components/Ui/Section/Section';
import { getPost } from '@/lib/sanity';
import PostFooter from '@/components/Layout/PostFooter/PostFooter';

type ParamsProps = {
  params: Promise<{ slug: string }>;
};

const BlogPostPage = async ({ params }: ParamsProps) => {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <Section aria-labelledby="post-title" className={styles.detailsSection}>
      <div className={styles.detailsWrap}>
        <header className={styles.detailsHeader}>
          <h1 id="post-title" className={styles.detailsSTitle}>
            {post.title}
          </h1>
          <p className={styles.detailsInfo}>
            {post.author && (
              <span className={styles.detailsAuthor}>
                {post.author.name}
                {post.author.role && ` (${post.author.role})`} •{' '}
              </span>
            )}
            {post.publishedAt && (
              <time dateTime={post.publishedAt} className={styles.detailsDate}>
                {new Date(post.publishedAt).toLocaleDateString('uk-UA')}
              </time>
            )}
          </p>
        </header>
        <div className={styles.contentBlock}>
          {post.mainImage && (
            <div className={styles.detailsImageWrap}>
              <Image
                src={urlFor(post.mainImage).width(1000).height(600).url()}
                alt={post.title}
                width={1000}
                height={600}
                priority
                className={styles.detailsImage}
              />
              <figcaption className={styles.detailsDesc}>{post.title}</figcaption>
            </div>
          )}
          <div className={styles.detailsContentText}>
            <PortableText value={post.content} />
          </div>
        </div>
        {post.extendedContent && (
          <div className={styles.detailsExtendedText}>
            <PortableText value={post.extendedContent} />
          </div>
        )}
        <PostFooter />
      </div>
    </Section>
  );
};

export default BlogPostPage;
