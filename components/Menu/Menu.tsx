import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';
import styles from './Menu.module.css';

type Props = {
  click?: () => void;
};

const Menu = ({ click }: Props) => {
  return (
    <div className={styles.menuWrap}>
      <Logo />
      <div className={styles.modalMenu}>
        <NavList onClose={click} />
      </div>
    </div>
  );
};

export default Menu;
