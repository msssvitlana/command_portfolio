'use client';
import Link from 'next/link';
import styles from './NavList.module.css';
import { useState } from 'react';
import { navItems } from '@/constants/constants';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import ModalDefault from '@/components/Modal/ModalDefault/ModalDefault';
type Props = {
  onClose?: () => void;
};

const NavList = ({ onClose }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

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
        <button onClick={open} className={styles.homeBtn}>
          Замовити
        </button>
        {isOpen && (
          <ModalDefault isOpen={isOpen} onClose={close}>
            <RegistrationForm />
          </ModalDefault>
        )}
      </li>
    </ul>
  );
};

export default NavList;
