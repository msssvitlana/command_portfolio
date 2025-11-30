import ListServices from '@/components/ListServ/ListServices';
import Section from '@/components/Ui/Section/Section';
import styles from './page.module.css';

const ServicesPage = () => {
  return (
    <Section className={styles.sectionService}>
      <ListServices />
    </Section>
  );
};

export default ServicesPage;
