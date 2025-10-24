import TeamList from '@/components/TeamList/TeamList';
import styles from './page.module.css';
import '../globals.css';
import AboutInfoBlock from '@/components/AboutInfoBlock/AboutInfoBlock';

const About = () => {
  return (
    <section className={styles.section}>
      <AboutInfoBlock />
      <TeamList />
    </section>
  );
};

export default About;
