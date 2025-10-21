import css from './page.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <div className={css.container}>
          <div className={css.textWrapper}>
            <h1 className={css.title}>Need a website or app?</h1>
            <p className={css.description}>
              We design and build user-friendly, high-performance digital products — just the way
              you imagine them.
            </p>
          </div>

          <Link href="/campers" className={css.homeBtn}>
            View Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
