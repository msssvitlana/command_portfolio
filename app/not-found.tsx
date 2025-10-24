import { Metadata } from 'next';
import style from './not-found.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  description: "The page you're looking for doesn't exist or has been moved.",
  openGraph: {
    title: 'Page not found',
    description: "The page you're looking for doesn't exist or has been moved.",
    siteName: 'WebDeveloper',
  },
};
export default function NotFound() {
  return (
    <main className={style.container}>
      <h1 className={style.title}>404 — Сторінку не знайдено</h1>
      <p className={style.description}>
        Вибач, але сторінка, яку ти шукаєш, не існує або була видалена.
      </p>
      <Link className={style.link} href="/">
        Повернутись на головну
      </Link>
    </main>
  );
}
