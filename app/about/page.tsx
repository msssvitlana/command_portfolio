import TeamList from '@/components/TeamList/TeamList';
import styles from './page.module.css';
import '../globals.css';
import AboutInfoBlock from '@/components/AboutInfoBlock/AboutInfoBlock';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <section className={styles.section}>
      <AboutInfoBlock />
      <TeamList />
      <Button text="Зв'язатись з нами" className={styles.contactBtn} />
    </section>
  );
};

export default About;
