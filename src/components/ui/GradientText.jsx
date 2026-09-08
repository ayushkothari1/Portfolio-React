import { motion } from 'framer-motion';

/**
 * GradientText — animated gradient text with shimmer effect
 */
export default function GradientText({ children, className = '', animate = false }) {
  return (
    <span
      className={`
        gradient-text font-bold
        ${animate ? 'animated-gradient bg-clip-text' : ''}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
