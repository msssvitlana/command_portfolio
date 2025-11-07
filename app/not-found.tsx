'use client';
import { MatrixRainingLetters } from 'react-mdr';
import styles from './not-found.module.css';
import Link from 'next/link';
import Button from '@/components/Ui/Button/Button';

export default function NotFound() {
  return (
    <section className={styles.container}>
      <MatrixRainingLetters
        className={styles.matrixBackground}
        custom_class={styles.matrixBackground}
        color="#021b4dff"
        backgroundColor="#0d1b2a"
      />

      <div className={styles.content}>
        <h1 className={styles.title}>404 — Сторінку не знайдено</h1>
        <p className={styles.description}>
          Вибачте, але сторінка, яку Ви шукаєте, не існує або була видалена.
        </p>
        <Link href="/" passHref>
          <Button text="Повернутись на головну" className={styles.link}></Button>
        </Link>
      </div>
    </section>
  );
}
