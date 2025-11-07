import TeamList from '@/components/TeamList/TeamList';
import styles from './page.module.css';
import '../globals.css';
import AboutInfoBlock from '@/components/AboutInfoBlock/AboutInfoBlock';
import Button from '@/components/Ui/Button/Button';
import Link from 'next/link';
import Section from '@/components/Ui/Section/Section';
const About = () => {
  return (
    <Section className={styles.sectionAbout}>
      <AboutInfoBlock />
      <TeamList />
      <Link href="/contact">
        <Button text="Зв'язатись з нами" className={styles.contactBtn} />
      </Link>
    </Section>
  );
};

export default About;
