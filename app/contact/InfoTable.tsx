'use client';

import styles from './ContactPage.module.css';

export default function InfoTable() {
  return (
    <div className={styles.infoTable}>
      <h2>Контакти</h2>
      <table>
        <tbody>
          <tr>
            <td>Телефон:</td>
            <td>+38 (050) ***-**-**</td>
          </tr>
          <tr>
            <td>Адреса:</td>
            <td>м. Київ, вул. Шевченка, 111</td>
          </tr>
          <tr>
            <td>Години роботи:</td>
            <td>Пн–Пт: 09:00–18:00</td>
          </tr>
          <tr>
            <td>Сб–Нд:</td>
            <td>вихідні</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
