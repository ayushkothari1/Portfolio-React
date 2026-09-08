import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiZap, FiHeart, FiGlobe } from 'react-icons/fi';
import { stats } from '../../data/skills';
import { staggerContainer, staggerItem, slideLeft, slideRight } from '../../utils/animations';
import GradientText from '../ui/GradientText';

/**
 * AnimatedCounter — counts up to a target value when in view
 */
function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.span
      ref={ref}
      className="font-display font-black text-3xl md:text-4xl gradient-text"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ innerText: 0 }}
        animate={isInView ? { innerText: value } : { innerText: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        onUpdate={(latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest.innerText ?? 0) + suffix;
          }
        }}
      />
      {!isInView && `0${suffix}`}
    </motion.span>
  );
}

const highlights = [
  { icon: FiCode,  label: 'Clean Code',         desc: 'Writing maintainable, readable code is a core value.' },
  { icon: FiZap,   label: 'Performance First',   desc: 'Fast load times and smooth interactions always.' },
  { icon: FiHeart, label: 'User-Focused',        desc: 'Accessibility and great UX are never afterthoughts.' },
  { icon: FiGlobe, label: 'Always Learning',     desc: 'Currently deep-diving React, Next.js & AI tools.' },
];

/**
 * About — bio, highlights grid, and animated stats
 */
export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="badge">About Me</span>
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/40 to-transparent max-w-[120px]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-16 text-[var(--color-text)]"
        >
          Passionate about{' '}
          <GradientText>building things</GradientText>
          <br />
          for the web.
        </motion.h2>

        {/* Two-column layout */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — bio */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              Hey, I'm <strong className="text-indigo-400 font-semibold">Ayush</strong> — a frontend
              developer and creative coder from India. I build modern, responsive web apps with React
              and love crafting pixel-perfect UI that feels alive.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Currently in my 3rd year of B.Tech (CS), I've shipped <strong className="text-[var(--color-text)]">20+ projects</strong> ranging
              from full e-commerce platforms to AI-powered tools. I believe great software is where
              clean code meets thoughtful design.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              When I'm not coding, I'm exploring new tech, contributing to open source, or
              diving into design systems for inspiration.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Figma', 'Open Source'].map(tag => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right — highlights grid */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="
                  glass rounded-2xl p-5 border border-subtle
                  hover:border-indigo-500/30 hover:shadow-card-hover
                  transition-all duration-300 group
                "
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 transition-colors duration-200">
                  <Icon size={18} className="text-indigo-400" />
                </div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">{label}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-subtle"
        >
          {stats.map(({ label, value, suffix }) => (
            <motion.div key={label} variants={staggerItem} className="text-center">
              <div className="font-display font-black text-3xl md:text-4xl gradient-text mb-1">
                {value}{suffix}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
