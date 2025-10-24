import styles from './AboutInfoBlock.module.css';

const AboutInfoBlock = () => {
  return (
    <div className={styles.aboutTeam}>
      <div className={styles.aboutTeamIntro}>
        <h2 className={styles.aboutTeamTitle}>Давайте знайомитись ближче</h2>
        <p className={styles.aboutTeamSubtitle}>
          Ми команда веброзробників, що перетворює ідеї у цифрові рішення.
        </p>
      </div>

      <div className={styles.aboutTeamDescription}>
        <p>
          Ми — невелика команда full-stack розробників, яка живе вебом та технологіями. Створюємо
          сайти та вебзастосунки, де UI/UX продумані до деталей, а дизайн не просто красивий — він
          працює на ваш бізнес.
        </p>
        <p>
          Ми не прагнемо бути найшвидшими, ми прагнемо бути{' '}
          <strong>найефективнішими та найстильнішими</strong>.
        </p>
        <p>
          Сучасні підходи, інноваційні рішення та <strong>унікальна комунікація</strong> — те, що
          робить нас іншими у світі веб-розробки.
        </p>
        <p>
          Кожен проєкт ми підходимо з душею, щоб результат не просто вражав, а закохував клієнтів у
          ваш продукт.
        </p>
      </div>
    </div>
  );
};

export default AboutInfoBlock;
