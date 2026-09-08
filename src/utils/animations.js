/**
 * Shared Framer Motion animation variants for consistent motion design
 */

// ── Fade up (used for most scroll reveals) ──
export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Fade in (simple opacity) ──
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ── Slide in from left ──
export const slideLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Slide in from right ──
export const slideRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Scale up ──
export const scaleUp = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Container with stagger children ──
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden:  {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// ── Stagger item ──
export const staggerItem = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Navbar slide down ──
export const navbarVariant = {
  hidden:  { y: -100, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Mobile menu ──
export const mobileMenuVariant = {
  closed: {
    x: '100%',
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  open: {
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export const mobileMenuItemVariant = {
  closed: { opacity: 0, x: 30 },
  open:   {
    opacity: 1, x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// ── Card hover ──
export const cardHover = {
  rest:  { y: 0, scale: 1 },
  hover: {
    y: -8, scale: 1.02,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Hero text reveal ──
export const heroTitle = {
  hidden:  { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1, y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ── Parallax helper (used with useScroll / useTransform) ──
export const parallaxConfig = {
  input:       [0, 1],
  outputFast:  ['0%', '-10%'],
  outputSlow:  ['0%', '-5%'],
};
