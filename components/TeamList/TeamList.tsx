'use client';

import { team } from '@/constants/constants';
import Image from 'next/image';
import styles from './TeamList.module.css';
import TeamMemberDetails from '../TeamMemberDetails/TeamMemberDetails';
import { useState } from 'react';

const TeamList = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };
  return (
    <ul className={styles.teamList}>
      {team.map(member => (
        <li key={member.id} className={styles.teamItem} onClick={() => toggleDetails(member.id)}>
          <div className={styles.avatarWrap}>
            <Image
              className={styles.avatar}
              alt="Default Avatar"
              src={member.img}
              width={240}
              height={360}
            />
          </div>

          <div className={styles.infoDeveloper}>
            <h3 className={styles.nameDeveloper}>{member.name}</h3>
            <p className={styles.roleDeveloper}>{member.role}</p>
          </div>
          
          <div className={`${styles.hiddenInfo} ${activeId === member.id ? styles.active : ''}`}>
            <TeamMemberDetails
              name={member.name}
              age={member.age}
              certificates={member.certificates}
              technologies={member.technologies}
              bio={member.bio}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TeamList;
