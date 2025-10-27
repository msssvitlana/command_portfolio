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
    </header>
  );
};

export default Header;
