'use client';

import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './ContactPage.module.css';

export default function ContactInfo() {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactIntro}>
        <h2 className={styles.contactTitle}>Звʼяжіться з нами</h2>
        <p className={styles.contactSubtitle}>Ми завжди відкриті до ваших ідей</p>
      </div>

      <ul className={styles.contactInfoList}>
        <li className={styles.contactInfoItem}>
          <FaPhone className={styles.icon} />
          <a href="tel:+380501234567">+38 (050) ***-**-**</a>
        </li>
        <li className={styles.contactInfoItem}>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:info@mysite.ua">test@test.com</a>
        </li>
      </ul>

      <ul className={styles.socialsList}>
        <li>
          <a
            className={styles.socialsItem}
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            className={styles.socialsItem}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            className={styles.socialsItem}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
