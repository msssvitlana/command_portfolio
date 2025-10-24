import styles from './page.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <section className={styles.main}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>Уявляєш свій ідеальний сайт?</h1>
        <p className={styles.description}>
          <span>Цифрові рішення, що працюють.</span>
          <span>Дизайн, який закохує.</span>
          <span>Сайти та застосунки під ключ — швидко, стильно та без зайвого клопоту.</span>
        </p>
      </div>

      <Link href="/about" className={styles.homeBtn}>
        Відкрий можливості
      </Link>
    </section>
  );
};

export default Home;
