import ListServices from '@/components/Services/ListServ/ListServices';
import Section from '@/components/Ui/Section/Section';
import styles from './page.module.css';

const ServicesPage = () => {
  return (
    <Section className={styles.sectionService}>
      <div className={styles.intro}>
        <h1>Вітаємо!</h1>
        <p>
          Наша команда зібрала всі послуги в одному місці — обирайте те, що вам підходить, і ми з
          радістю допоможемо.
        </p>
      </div>
      <ListServices />
    </Section>
  );
};

export default ServicesPage;
