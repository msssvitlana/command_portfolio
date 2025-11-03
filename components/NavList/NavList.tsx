'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './NavList.module.css';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import ModalDefault from '@/components/Modal/ModalDefault/ModalDefault';
import { navItems } from '@/constants/constants';

type Props = {
  onClose?: () => void;
};

const NavList = ({ onClose }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (onClose) {
      onClose();
      setTimeout(() => setIsModalOpen(true), 350);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);
  console.log('ModalDefault:', ModalDefault);

  return (
    <>
      <ul className={styles.navList}>
        {navItems.map(item => (
          <li key={item.label} className={styles.navItem} onClick={onClose}>
            <Link className={styles.navLink} href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}

        <li className={styles.navItem}>
          <button onClick={handleOpenModal} className={styles.homeBtn}>
            Замовити
          </button>
          {isModalOpen && (
            <ModalDefault isOpen={isModalOpen} onClose={handleCloseModal}>
              <RegistrationForm />
            </ModalDefault>
          )}
        </li>
      </ul>
    </>
  );
};

export default NavList;
