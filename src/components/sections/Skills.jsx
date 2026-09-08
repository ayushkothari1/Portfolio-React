import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaFigma, FaPython, FaDocker,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiExpress,
  SiVite, SiNextdotjs,
} from 'react-icons/si';
import { skillCategories } from '../../data/skills';
import { staggerContainer, staggerItem } from '../../utils/animations';
import GradientText from '../ui/GradientText';

/* Icon map — maps icon name strings from data to actual components */
const ICON_MAP = {
  FaReact: FaReact, FaNodeJs: FaNodeJs, FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt, FaGithub: FaGithub, FaFigma: FaFigma,
  FaPython: FaPython, FaDocker: FaDocker,
  SiJavascript: SiJavascript, SiTypescript: SiTypescript,
  SiTailwindcss: SiTailwindcss, SiMongodb: SiMongodb,
  SiExpress: SiExpress, SiVite: SiVite,
  SiNextdotjs: SiNextdotjs,
  SiVisualstudiocode: FaReact, // fallback icon
};

/** Animated skill bar */
function SkillBar({ name, level, icon, inView }) {
  const Icon = ICON_MAP[icon];
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={14} className="text-indigo-400 flex-shrink-0" />}
          <span className="text-sm font-medium text-[var(--color-text)]">{name}</span>
        </div>
        <span className="text-xs text-[var(--color-text-muted)]">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="skill-bar-fill h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

/** Single category bento card */
function SkillCard({ category, inView }) {
  return (
    <motion.div
      variants={staggerItem}
      className="
        glass rounded-2xl p-6 border border-subtle
        hover:border-indigo-500/30 hover:shadow-card-hover
        transition-all duration-300
      "
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${category.color}20`, border: `1px solid ${category.color}30` }}
        >
          <span style={{ color: category.color }} className="text-lg">◈</span>
        </div>
        <h3 className="font-semibold text-[var(--color-text)]">{category.label}</h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {category.skills.map(skill => (
          <SkillBar key={skill.name} {...skill} inView={inView} />
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Skills — bento grid layout with animated skill bars per category
 */
export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="badge">Skills</span>
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
          My <GradientText>Tech Stack</GradientText>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[var(--color-text-muted)] mb-12 max-w-lg"
        >
          Tools and technologies I use to bring ideas to life.
        </motion.p>

        {/* Bento grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {skillCategories.map(cat => (
            <SkillCard key={cat.id} category={cat} inView={inView} />
          ))}
        </motion.div>

        {/* Floating icon cloud row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { Icon: FaReact,        color: '#61DAFB', name: 'React' },
            { Icon: SiJavascript,   color: '#F7DF1E', name: 'JS' },
            { Icon: SiTypescript,   color: '#3178C6', name: 'TS' },
            { Icon: SiTailwindcss,  color: '#06B6D4', name: 'Tailwind' },
            { Icon: FaNodeJs,       color: '#339933', name: 'Node' },
            { Icon: SiMongodb,      color: '#47A248', name: 'Mongo' },
            { Icon: FaGithub,       color: '#ffffff', name: 'GitHub' },
            { Icon: SiVite,         color: '#646CFF', name: 'Vite' },
          ].map(({ Icon, color, name }) => (
            <motion.div
              key={name}
              className="flex flex-col items-center gap-1.5 group"
              whileHover={{ y: -4, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border border-subtle glass"
                style={{ boxShadow: `0 0 16px ${color}20` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <span className="text-xs text-[var(--color-text-muted)] group-hover:text-indigo-400 transition-colors duration-200">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
