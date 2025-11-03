'use client';

import { useState } from 'react';
import styles from './page.module.css';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import ModalDefault from '@/components/Modal/ModalDefault/ModalDefault';
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
      <button onClick={handleOpenModal} className={styles.homeBtn}>
        Замовити зараз
      </button>
      {isModalOpen && (
        <ModalDefault isOpen={isModalOpen} onClose={handleCloseModal}>
          <RegistrationForm />
        </ModalDefault>
      )}
    </section>
  );
};

export default Home;
