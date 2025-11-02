'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalDefault.module.css';

type ModalDefaultProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const ModalDefault = ({ children, isOpen, onClose }: ModalDefaultProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={styles.modalWrap}>{children}</div>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
        <svg className={styles.icon} width={14} height={14}>
          <use href="/icons/icon-close.svg#icon-close" />
        </svg>
      </button>
    </div>,
    document.body
  );
};

export default ModalDefault;
