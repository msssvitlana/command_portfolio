import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Section.module.css';

type SectionProps = {
  children: ReactNode;
  id?: string;
  ariaLabelledby?: string;
  className?: string;
};

export default function Section({ children, id, ariaLabelledby, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={ariaLabelledby} className={clsx(styles.section, className)}>
      {children}
    </section>
  );
}
