'use client';

import ContactInfo from './ContactInfo';
import InfoTable from './InfoTable';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.leftSection}>
        <ContactInfo />
        <div className={styles.rightSection}>
          <div className={styles.infoTable}>
            <InfoTable />
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.form}>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}
