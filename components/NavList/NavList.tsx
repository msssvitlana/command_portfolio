'use client';
import Link from 'next/link';
import styles from './NavList.module.css';
import RegistrationModal from '@/components/Modal/RegistrationModal';
import { useState } from 'react';
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

  return (
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
        {isModalOpen && <RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />}
      </li>
    </ul>
  );
};

export default NavList;
