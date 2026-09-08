import { motion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Button — premium button with magnetic hover effect
 *
 * @param {'primary'|'ghost'|'outline'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} magnetic - enable magnetic cursor attraction
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  magnetic = true,
  className = '',
  onClick,
  href,
  target,
  rel,
  type = 'button',
  disabled = false,
  ...props
}) {
  const ref = useRef(null);

  // Magnetic effect on mouse move
  const handleMouseMove = (e) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (!magnetic || !ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variants = {
    primary: `
      relative overflow-hidden
      bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600
      text-white font-semibold
      shadow-glow hover:shadow-glow-lg
      before:absolute before:inset-0 before:bg-white/0 hover:before:bg-white/10
      before:transition-colors before:duration-300
    `,
    ghost: `
      relative overflow-hidden
      bg-transparent border border-white/10 dark:border-white/10
      text-[var(--color-text)] font-medium
      hover:bg-white/5 hover:border-indigo-500/40
    `,
    outline: `
      relative overflow-hidden
      bg-transparent border border-indigo-500/60
      text-indigo-400 font-semibold
      hover:bg-indigo-500/10 hover:border-indigo-500
      shadow-glow-sm hover:shadow-glow
    `,
  };

  const baseClass = `
    inline-flex items-center justify-center gap-2
    rounded-xl cursor-pointer
    transition-all duration-300 ease-out
    select-none outline-none
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${sizes[size]}
    ${variants[variant]}
    ${className}
  `;

  const motionProps = {
    ref,
    className: baseClass,
    whileTap: disabled ? {} : { scale: 0.96 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)' },
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
