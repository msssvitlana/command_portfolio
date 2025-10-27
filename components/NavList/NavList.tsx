import Link from 'next/link';
import styles from './NavList.module.css';

const NavList = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link className={styles.navLink} href="/">
          Головна
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink} href="/about">
          Про нас
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink} href="/projects">
          Проекти
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink} href="/services">
          Послуги
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink} href="/blog">
          Блог
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.navLink} href="/contact">
          Контакти
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
