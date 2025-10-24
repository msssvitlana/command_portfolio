import { team } from '@/constants/constants';
import Image from 'next/image';
import styles from './TeamList.module.css';

const TeamList = () => {
  return (
    <ul className={styles.teamList}>
      {team.map(member => (
        <li key={member.id} className={styles.teamItem}>
          <div className={ styles.avatarWrap}>
            <Image className={styles.avatar} alt="Default Avatar" src={member.img} width={240} height={360} />
          </div>

          <div className={styles.infoDeveloper}>
            <h3 className={styles.nameDeveloper}>{member.name}</h3>
            <p className={styles.roleDeveloper}>{member.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeamList;
