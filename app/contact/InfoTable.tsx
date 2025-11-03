'use client';

import styles from './ContactPage.module.css';

export default function InfoTable() {
  return (
    <div className={styles.infoTable}>
      <h2>Ми тут, щоб допомогти</h2>
      <table>
        <tbody>
          <tr>
            <td>Пн–Пт:</td>
            <td> 09:00–18:00</td>
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
