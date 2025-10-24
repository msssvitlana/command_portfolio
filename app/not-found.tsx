'use client';
import { MatrixRainingLetters } from 'react-mdr';
import styles from './not-found.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <MatrixRainingLetters
        className={styles.matrixBackground}
        custom_class={styles.matrixBackground}
        color="#7ea9ff"
        backgroundColor="#0d1b2a"
        speed={0.3}
        density={0.6}
        fontSize={16}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>404 — Сторінку не знайдено</h1>
        <p className={styles.description}>
          Вибачте, але сторінка, яку ти шукаєш, не існує або була видалена.
        </p>
        <Link className={styles.link} href="/">
          Повернутись на головну
        </Link>
      </div>
    </main>
  );
}
