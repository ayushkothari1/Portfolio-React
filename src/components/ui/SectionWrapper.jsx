import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp } from '../../utils/animations';

/**
 * SectionWrapper — scroll-reveal container for page sections
 * @param {string}  id        - section ID for scroll spy
 * @param {string}  className - extra classes
 * @param {object}  variants  - custom animation variants (overrides fadeUp)
 * @param {boolean} stagger   - enable stagger children
 */
export default function SectionWrapper({
  children,
  id,
  className = '',
  variants,
  once = true,
  amount = 0.15,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants || fadeUp}
      className={`section-padding relative ${className}`}
    >
      {children}
    </motion.section>
  );
}
