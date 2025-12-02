import Image from 'next/image';
import styles from './ListServices.module.css';
import { services } from '@/constants/constants';
import ServiceItems from '../ServiceItems/ServiceItems';

const ListServices = () => {
  return (
    <ul className={styles.servicesList}>
      {services.map(service => (
        <li className={styles.serviceCard} key={service.id}>
          {service.picture && (
            <div className={styles.serviceImgWrap}>
              <Image
                width={240}
                height={240}
                alt={service.picture?.alt}
                src={service.picture.src}
                className={styles.serviceImg}
              />
            </div>
          )}
          <div className={styles.serviceInfo}>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <h3 className={styles.serviceSubtitle}>{service.subTitle}</h3>
          </div>
          <ServiceItems items={service.items} />
        </li>
      ))}
    </ul>
  );
};

export default ListServices;
