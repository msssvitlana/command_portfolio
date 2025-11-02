import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <Logo />
        <NavList />
      </nav>
      <button className={styles.burgerBtn}>
        <svg width={28} height={28} aria-label="Open Menu" className={styles.burgerBtnIcon}>
          <use href="/icons.svg#burger"></use>
        </svg>
      </button>
    </header>
  );
};

export default Header;
