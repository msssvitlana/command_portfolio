import Link from 'next/link';
import styles from './Logo.module.css';
import IconLogo from './IconLogo/IconLogo';
import TextLogo from './TextLogo/TextLogo';
import TitleLogo from './TitleLogo/TitleLogo';

const Logo = () => {
  return (
    <Link href="/" className={styles.logoLink} aria-label="Logo">
      <IconLogo />
      <div className={styles.iconWrap}>
        <TitleLogo />
        <TextLogo />
      </div>
    </Link>
  );
};

export default Logo;
