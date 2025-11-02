import styles from './TeamMemberDetails.module.css';

type Props = {
  name: string;
  age: number | undefined;
  certificates?: string[];
  technologies?: string[];
  bio?: string;
};

const TeamMemberDetails = ({ name, age, certificates, technologies, bio }: Props) => {
  return (
    <div className={styles.details}>
      <p className={styles.detailsName}>
        <span className={styles.detailsAccent}>Мене звати:</span> {name}
      </p>
      <p className={styles.detailsAge}>
        <span className={styles.detailsAccent}>Мені:</span>{' '}
        {age !== undefined ? `${age} років` : 'Вік не вказано'}
      </p>
      {certificates && certificates.length > 0 && (
        <p className={styles.detailsCer}>
          <span className={styles.detailsAccent}>Маю сертифікати:</span> {certificates.join(', ')}
        </p>
      )}

      {technologies && technologies.length > 0 && (
        <p className={styles.detailsTech}>
          <span className={styles.detailsAccent}>Я працюю з технологіями:</span>{' '}
          {technologies.join(', ')}
        </p>
      )}

      {bio && (
        <p className={styles.detailsBio}>
          <span className={styles.detailsAccent}>Про мене:</span> {bio}
        </p>
      )}
    </div>
  );
};

export default TeamMemberDetails;
