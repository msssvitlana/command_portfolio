'use client';

import Icon from '@/components/Icon/Icon';
import { getGreeting } from '@/utils/blog';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './NotFoundPosts.module.css';
import Button from '@/components/Ui/Button/Button';
import Section from '@/components/Ui/Section/Section';

const NotFoundPosts = () => {
  const router = useRouter();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  const back = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };
  return (
    <Section className={styles.section}>
      <div className={styles.notFoundText}>
        <h2 className={styles.notFoundTitle}>
          {greeting}! <span>Сторінка ще відпочиває.</span>{' '}
          <span>Але зовсім скоро буде весело!</span>
        </h2>
        <p className={styles.notFoundParagraph}>
          Ми ще не встигли додати всі історії на цю сторінку, але вже кипимо від ідей і незабаром
          поділимось досвідом та цікавими проєктами.
        </p>
        <p className={styles.notFoundParagraph}>
          Поки що можна трохи заглянути за лаштунки: познайомитись з нашою командою, дізнатись про
          проєкти або сертифікати — це допоможе зрозуміти, як ми працюємо і чим можемо бути корисні.
        </p>
        <span className={styles.glowLayer}></span>
        <span className={styles.glowLayer}></span>
        <span className={styles.glowLayer}></span>
      </div>

      <div className={styles.navBlock}>
        <p className={styles.notFoundSubtitle}>
          Щоб не сумувати, ось кілька цікавих кроків прямо зараз:
        </p>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Icon width={20} height={20} iconName="icon_proj" className={styles.iconNavItem} />
            <Link className={styles.navLink} href="/projects">
              Наші роботи, реалізовані на практиці
            </Link>
          </li>
          <li className={styles.navItem}>
            <Icon width={20} height={20} iconName="icon_serv" className={styles.iconNavItem} />
            <Link className={styles.navLink} href="/services">
              Дізнатись, що ми можемо для вас створити
            </Link>
          </li>
          <li className={styles.navItem}>
            <Icon
              width={20}
              height={20}
              iconName="icon_mail_clear"
              className={styles.iconNavItem}
            />
            <Link className={styles.navLink} href="/contact">
              Написати нам і обговорити ваш проєкт
            </Link>
          </li>
          <li className={styles.navItem}>
            <Icon width={20} height={20} iconName="icon_back" className={styles.iconNavItem} />
            <Button
              text="Повернутись на попередню сторінку"
              onClick={back}
              type="button"
              className={styles.navBtn}
            />
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default NotFoundPosts;
