import TeamList from '@/components/TeamList/TeamList';
import styles from './page.module.css';
import '../globals.css';
import AboutInfoBlock from '@/components/AboutInfoBlock/AboutInfoBlock';
import Button from '@/components/Button/Button';
import Link from 'next/link';
const About = () => {
  return (
    <section className={styles.section}>
      <AboutInfoBlock />
      <TeamList />
      <Link href="/contact">
        <Button text="Зв'язатись з нами" className={styles.contactBtn} />
      </Link>
    </section>
  );
};

export default About;
