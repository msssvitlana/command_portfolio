import Image from 'next/image';
import styles from './ListServices.module.css';
import { services } from '@/constants/constants';
import ServiceItems from '../ServiceItems/ServiceItems';

const ListServices = () => {
  return (
    <ul>
      {services.map(service => (
        <li key={service.id}>
          {service.picture && (
            <Image width={240} height={240} alt={service.picture?.alt} src={service.picture.src} />
          )}
          <div>
            <h2>{service.title}</h2>
            <h3>{service.subTitle}</h3>
          </div>
          <ServiceItems items={service.items} />
        </li>
      ))}
    </ul>
  );
};

export default ListServices;
