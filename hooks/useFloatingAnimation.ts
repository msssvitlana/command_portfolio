'use client';
import { useEffect } from 'react';

export function useFloatingAnimation() {
  useEffect(() => {
    const items = document.querySelectorAll('.blogPostItem');
    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    items.forEach(el => {
      const item = el as HTMLElement;
      
      item.style.setProperty('--float-delay', `${random(0, 6)}s`);
      item.style.setProperty('--float-speed', `${random(8, 14)}s`);
      item.style.setProperty('--float-x', `${random(-2, 2)}px`);
      item.style.setProperty('--float-y', `${random(-3, 3)}px`);
      item.style.setProperty('--float-rot', `${random(-1.2, 1.2)}deg`);
      item.style.setProperty('--pulse-scale', `${random(1.01, 1.03)}`);
    });
  }, []);
}
