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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setTimeout(() => setAnimate(true), 20);
    } else {
      setAnimate(false);
      setTimeout(() => setMounted(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);

      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      const y = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(y || '0') * -1);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`${styles.backdrop} ${animate ? styles.open : ''}`}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className={styles.modalWrap}>{children}</div>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
        <svg className={styles.icon} width={20} height={20}>
          <use href="/icons/icon-close.svg#icon-close" />
        </svg>
      </button>
    </div>,
    document.body
  );
};

export default ModalDefault;
