'use client';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';
import Section from '@/components/Ui/Section/Section';
import styles from './page.module.css';

export default function StudioPage() {


  return (
    <Section className={styles.studioSection}>
      <NextStudio config={config} />
    </Section>
  );
}
