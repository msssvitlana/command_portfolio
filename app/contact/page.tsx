'use client';

import ContactInfo from './ContactInfo';
import InfoTable from './InfoTable';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <div className={styles.leftSection}>
        <div className={styles.infoTable}>
          <InfoTable />
        </div>
        <ContactInfo />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.form}>
          <RegistrationForm
            title="Давайте спілкуватись"
            subtitle="Можливо, це саме те повідомлення, яке зробить наш день кращим"
          />
        </div>
      </div>
    </section>
  );
}
