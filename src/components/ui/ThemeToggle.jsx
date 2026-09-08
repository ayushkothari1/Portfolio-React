import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

/**
 * ThemeToggle — animated sun/moon toggle button
 */
export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="
        relative w-10 h-10 rounded-xl
        flex items-center justify-center
        border border-white/10 dark:border-white/10
        bg-white/5 dark:bg-white/5
        hover:bg-indigo-500/10 hover:border-indigo-500/40
        transition-all duration-200
        text-[var(--color-text)]
      "
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.08 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0,   opacity: 1 }}
            exit={{   rotate:  90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiMoon size={18} className="text-indigo-300" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0,  opacity: 1 }}
            exit={{   rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiSun size={18} className="text-amber-400" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
