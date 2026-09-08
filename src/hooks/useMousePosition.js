import { useState, useEffect } from 'react';

/**
 * useMousePosition — tracks mouse X/Y position for glow and cursor effects
 * @returns {{ x: number, y: number }} current mouse coordinates
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}
