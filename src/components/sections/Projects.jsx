import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects, CATEGORIES } from '../../data/projects';
import { staggerContainer, staggerItem } from '../../utils/animations';
import Badge from '../ui/Badge';
import GradientText from '../ui/GradientText';

/** Single project card with hover overlay */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={staggerItem}
      className={`
        project-card relative group overflow-hidden rounded-2xl border border-subtle
        glass hover:border-indigo-500/30
        transition-all duration-300 hover:shadow-card-hover
        ${project.featured && index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Color glow orb in corner */}
      <div
        className="absolute top-6 right-6 w-20 h-20 rounded-full blur-2xl opacity-20 pointer-events-none"
        style={{ background: project.color }}
      />

      <div className="p-6 flex flex-col h-full">
        {/* Category tag */}
        <div className="flex items-center justify-between mb-4">
          <Badge color={project.color}>{project.category}</Badge>
          {project.featured && (
            <span className="text-[10px] font-semibold text-indigo-300 border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 rounded-full">
              ★ Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg md:text-xl text-[var(--color-text)] mb-2 group-hover:text-indigo-300 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <Badge key={t} variant="default">{t}</Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub`}
            className="
              flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
              border border-subtle text-[var(--color-text-muted)]
              hover:text-[var(--color-text)] hover:border-indigo-500/40 hover:bg-indigo-500/10
              transition-all duration-200
            "
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiGithub size={15} /> Code
          </motion.a>

          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} Live Demo`}
            className="
              flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
              bg-gradient-to-r from-indigo-600 to-violet-600 text-white
              shadow-glow-sm hover:shadow-glow
              transition-all duration-200
            "
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiExternalLink size={15} /> Live Demo
          </motion.a>
        </div>
      </div>

      {/* Hover shine overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${project.color}10 0%, transparent 60%)`,
            }}
          />
        )}
      </AnimatePresence>
    </motion.article>
  );
}

/**
 * Projects — filter tabs + bento-grid showcase with stagger animations
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="badge">Projects</span>
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
          Things I've <GradientText>Built</GradientText>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[var(--color-text-muted)] max-w-lg mb-10"
        >
          A curated selection of projects — from side experiments to production-ready apps.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Project categories"
        >
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${activeFilter === cat
                  ? 'bg-indigo-600 text-white shadow-glow-sm'
                  : 'border border-subtle text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5'
                }
              `}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            ref={ref}
            key={activeFilter}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No results */}
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[var(--color-text-muted)] py-16"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}
