import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiBook, FiStar } from 'react-icons/fi';
import { experiences } from '../../data/experience';
import { staggerContainer, staggerItem } from '../../utils/animations';
import Badge from '../ui/Badge';
import GradientText from '../ui/GradientText';

const TYPE_CONFIG = {
  work:      { icon: FiBriefcase, color: '#6366f1', label: 'Work' },
  education: { icon: FiBook,      color: '#06b6d4', label: 'Education' },
  freelance: { icon: FiStar,      color: '#ec4899', label: 'Freelance' },
};

/** Single timeline entry */
function TimelineItem({ exp, index, inView }) {
  const isLeft = index % 2 === 0;
  const { icon: Icon, color } = TYPE_CONFIG[exp.type] || TYPE_CONFIG.work;

  return (
    <motion.div
      variants={staggerItem}
      className={`relative flex items-start gap-6 md:gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Content card */}
      <div className={`flex-1 ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
        <motion.div
          className="
            glass rounded-2xl p-6 border border-subtle
            hover:border-indigo-500/30 hover:shadow-card-hover
            transition-all duration-300 group
          "
          whileHover={{ y: -3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* Type badge + duration */}
          <div className={`flex items-center gap-3 mb-3 flex-wrap ${isLeft ? '' : 'md:justify-end'}`}>
            <Badge color={color}>{TYPE_CONFIG[exp.type]?.label}</Badge>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">{exp.duration}</span>
          </div>

          {/* Role & company */}
          <h3 className="font-display font-bold text-lg text-[var(--color-text)] group-hover:text-indigo-300 transition-colors duration-200 mb-1">
            {exp.role}
          </h3>
          <p className="text-sm font-medium text-indigo-400 mb-3">
            {exp.company} · {exp.location}
          </p>

          {/* Description */}
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Tech pills */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? '' : 'md:justify-end'}`}>
            {exp.tech.map(t => (
              <Badge key={t} variant="default">{t}</Badge>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center dot (hidden on mobile, shown on md+) */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 mt-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 300 }}
          className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-indigo-500/40 bg-[var(--color-bg)]"
          style={{ boxShadow: `0 0 20px ${color}30` }}
        >
          <Icon size={18} style={{ color }} />
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

/**
 * Experience — vertical timeline with animated connectors
 */
export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="badge">Experience</span>
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/40 to-transparent max-w-[120px]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-4xl md:text-5xl leading-tight mb-4 text-[var(--color-text)]"
        >
          My <GradientText>Journey</GradientText>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[var(--color-text-muted)] max-w-lg mb-16"
        >
          Work, education, and freelance milestones that shaped who I am as a developer.
        </motion.p>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Center vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent -translate-x-1/2" />

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-10"
          >
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} inView={inView} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
