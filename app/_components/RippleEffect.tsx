'use client';

import { useEffect } from 'react';

export default function RippleEffect() {
  useEffect(() => {
    const handleRipple = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      const cursorSize = 50;

      const rect = document.documentElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.width = ripple.style.height = `${cursorSize}px`;
      ripple.style.left = `${x - cursorSize / 2}px`;
      ripple.style.top = `${y - cursorSize / 2}px`;

      ripple.className = 'ripple';
      document.body.appendChild(ripple);

      ripple.style.animation = 'ripple-animation 0.6s linear';

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    document.addEventListener('click', handleRipple);

    return () => {
      document.removeEventListener('click', handleRipple);
    };
  }, []);

  return null;
}