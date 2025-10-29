'use client';

import { useEffect } from 'react';
import styles from './RegistrationModal.module.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <svg className={styles.icon} width={28} height={28}>
            <use href="/icons/icon-close.svg#icon-close" />
          </svg>
        </button>

        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationModal;
