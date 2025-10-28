import Link from 'next/link';
import styles from './NavList.module.css';
import RegistrationModal from '@/components/Modal/RegistrationModal';
import { useState } from 'react';

const NavList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
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
      <li className={styles.navItem}>
        <button onClick={handleOpenModal} className={styles.homeBtn}>
          Замовити
        </button>

        <RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </li>
    </ul>
  );
};

export default NavList;
