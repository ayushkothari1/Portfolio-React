import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import Button from '../ui/Button';
import { staggerContainer, staggerItem } from '../../utils/animations';

/**
 * Hero — Full-viewport hero with animated gradient, stagger text, mouse-glow orbs
 */
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y    = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28"
    >
      {/* Animated gradient orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="glow-orb w-[600px] h-[600px] bg-indigo-600 top-[-10%] left-[-10%] opacity-[0.12]" />
        <div className="glow-orb w-[500px] h-[500px] bg-violet-600 bottom-[-5%] right-[-5%] opacity-[0.10]"
          style={{ animationDelay: '2s' }} />
        <div className="glow-orb w-[300px] h-[300px] bg-pink-600 top-[40%] left-[60%] opacity-[0.08]"
          style={{ animationDelay: '4s' }} />
      </motion.div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-max text-center px-4"
      >
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge pill */}
          <motion.div variants={staggerItem}>
            <span className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
              border border-indigo-500/30 bg-indigo-500/10 text-indigo-300
            ">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={staggerItem} className="space-y-2">
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-[var(--color-text)]">
              I build <span className="gradient-text">web apps</span> with React.
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={staggerItem}
            className="max-w-xl text-lg md:text-xl text-[var(--color-text-muted)] text-balance leading-relaxed"
          >
            I build responsive web applications, integrate APIs, and turn ideas into working products.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={staggerItem} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button variant="ghost" size="lg" href="https://github.com/ayushkothari1" target="_blank" rel="noopener noreferrer">
              <FiGithub size={18} /> GitHub
            </Button>
          </motion.div>

          {/* Social row */}
          <motion.div variants={staggerItem} className="flex items-center gap-4 pt-2">
            {[
              { icon: FiGithub,   href: 'https://github.com/ayushkothari1', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ayushko1/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--color-text-muted)] hover:text-indigo-400 transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
            <div className="w-px h-4 bg-white/10" />
            <span className="text-xs text-[var(--color-text-muted)]">pahadiayush61@gmail.com</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
          className="mt-16 flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-indigo-400 transition-colors duration-200 mx-auto"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <FiArrowDown size={16} />
        </motion.button>
      </motion.div>
    </section>
  );
}
