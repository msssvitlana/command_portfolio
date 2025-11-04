'use client';

import styles from './ContactPage.module.css';
import { FaClock, FaRegSmileBeam } from 'react-icons/fa';

export default function InfoTable() {
  return (
    <div className={styles.infoTable}>
      <h2 className={styles.infoTitle}>Ми завжди на зв’язку </h2>
      <p className={styles.infoSubtitle}>
        <FaRegSmileBeam className={styles.icon} /> Працюємо без вихідних, щоб допомогти саме Вам!
      </p>

      <table className={styles.infoBody}>
        <tbody>
          <tr>
            <td>
              <FaClock className={styles.icon} /> Графік роботи:
            </td>
            <td>
              Цілодобово — <strong>24/7</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <p className={styles.infoFooter}>
        Пишіть нам у будь-який час — ми завжди поруч і готові допомогти
      </p>
    </div>
  );
}
