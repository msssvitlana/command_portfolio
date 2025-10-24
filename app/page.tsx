import css from './page.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <section className={css.main}>
      <div className={css.container}>
        <div className={css.textWrapper}>
          <h1 className={css.title}>Уявляєш свій ідеальний сайт?</h1>
          <p className={css.description}>
            <span>Цифрові рішення, що працюють.</span>
            <span>Дизайн, який закохує.</span>
            <span>Сайти та застосунки під ключ — швидко, стильно та без зайвого клопоту.</span>
          </p>
        </div>

        <Link href="/about" className={css.homeBtn}>
          Відкрий можливості
        </Link>
      </div>
    </section>
  );
};

export default Home;
