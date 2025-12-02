'use client';

import { useState } from 'react';
import Logo from '../../Logo/Logo';
import NavList from '../NavList/NavList';
import styles from './Header.module.css';
import ModalDefault from '../../Modal/ModalDefault/ModalDefault';
import Menu from '../../Modal/Menu/Menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <Logo />
        <div className={styles.navDesktop}>
          <NavList />
        </div>
      </nav>
      <button className={styles.burgerBtn} onClick={open}>
        <svg width={28} height={28} aria-label="Open Menu" className={styles.burgerBtnIcon}>
          <use href="/icons.svg#burger"></use>
        </svg>
      </button>
      {isOpen && (
        <ModalDefault isOpen={isOpen} onClose={close}>
          <Menu click={close} />
        </ModalDefault>
      )}
    </header>
  );
};

export default Header;
