import Image from 'next/image';
import { notFound } from 'next/navigation';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import styles from './BlogPostPage.module.css';
import Section from '@/components/Ui/Section/Section';
import { getPost } from '@/lib/sanity';

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
        <footer className={styles.detailsFooter}>
          <div className={styles.footerContent}>
            <p className={styles.thankYouText}>Дякуємо, що читаєте наш блог! 💛</p>
            <p className={styles.footerNavText}>
              Можете повернутися на{' '}
              <Link href="/blog" className={styles.detailsLink}>
                сторінку блогу
              </Link>{' '}
              і знайти ще більше цікавого.
            </p>
          </div>
        </footer>
      </div>
    </Section>
  );
};

export default BlogPostPage;
