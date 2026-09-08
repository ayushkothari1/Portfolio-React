import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

/**
 * AnimatedCursor — custom cursor with dot + ring + mouse-follow glow
 * Hides the default OS cursor via CSS (body { cursor: none })
 */
export default function AnimatedCursor() {
  const { x, y } = useMousePosition();

  // Spring physics for smooth lag effect
  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const dotX   = useSpring(useMotionValue(0), { stiffness: 500, damping: 30 });
  const dotY   = useSpring(useMotionValue(0), { stiffness: 500, damping: 30 });
  const ringX  = useSpring(useMotionValue(0), springConfig);
  const ringY  = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    dotX.set(x);
    dotY.set(y);
    ringX.set(x);
    ringY.set(y);
  }, [x, y, dotX, dotY, ringX, ringY]);

  // Hide on mobile (touch devices)
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Glow effect following mouse */}
      <motion.div
        className="fixed pointer-events-none z-40 rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className="w-8 h-8 rounded-full border border-indigo-500/60"
          style={{ background: 'transparent' }}
        />
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-indigo-500" />
      </motion.div>
    </>
  );
}
