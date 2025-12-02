import Link from 'next/link';
import styles from './PostFooter.module.css';

const PostFooter = () => {
  return (
    <footer className={styles.detailsFooter}>
      <div className={styles.footerGlow}>
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
        <span className={styles.glowLayer}></span>
        <span className={styles.glowLayer}></span>
        <span className={styles.glowLayer}></span>
      </div>
    </footer>
  );
};

export default PostFooter;
