import { ServiceItem } from '@/constants/constants';

type Props = {
  items: ServiceItem[];
};

const ServiceItems = ({ items }: Props) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <h3>{item.label}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ServiceItems;
