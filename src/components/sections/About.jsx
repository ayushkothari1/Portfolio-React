import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiZap, FiHeart, FiGlobe } from "react-icons/fi";
import {
  staggerContainer,
  staggerItem,
  slideLeft,
} from "../../utils/animations";
import GradientText from "../ui/GradientText";

const highlights = [
  {
    icon: FiCode,
    label: "React & JavaScript",
    desc: "Building responsive interfaces with reusable components and interactive functionality.",
  },
  {
    icon: FiZap,
    label: "API Integration",
    desc: "Connecting applications to external services and working with API data.",
  },
  {
    icon: FiHeart,
    label: "Backend Development",
    desc: "Building server-side functionality using Node.js and Express.",
  },
  {
    icon: FiGlobe,
    label: "Real-Time Features",
    desc: "Using Socket.IO to support live communication between users.",
  },
];

/**
 * About — bio and project-focused highlights
 */
export default function About() {
  const ref = useRef(null);
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
          I enjoy building <GradientText>useful things</GradientText> for the web.
        </motion.h2>

        {/* Two-column layout */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left — bio */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              I’m{" "}
              <strong className="text-indigo-400 font-semibold">
                Ayush Kothari
              </strong>
              , a developer from India focused on building responsive, interactive web applications. I work with React and JavaScript to create user interfaces, integrate APIs, and develop features that make applications useful.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              I've also worked with Node.js, Express, and Socket.IO to build backend functionality and real-time applications. Through projects like Nexora, ChatBox, and Animal Atlas, I've been learning by building and improving practical applications.<br /><br />I'm looking for a junior developer role or internship where I can contribute to real projects, strengthen my skills, and grow as a developer.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "React",
                "JavaScript",
                "CSS",
                "Node.js",
                "Express",
                "Socket.IO",
              ].map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — highlights grid */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
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
                <h3 className="font-semibold text-[var(--color-text)] mb-1">
                  {label}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 pt-12 border-t border-subtle"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl text-[var(--color-text)] mb-6">
            Education &amp; Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="glass rounded-2xl p-6 border border-subtle">
              <p className="text-sm text-indigo-400 font-medium mb-2">Education</p>
              <h4 className="font-semibold text-lg text-[var(--color-text)]">
                Bachelor of Arts (BA)
              </h4>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                Uttarakhand Open University
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mt-3">Completed</p>
            </article>

            <article className="glass rounded-2xl p-6 border border-subtle">
              <p className="text-sm text-indigo-400 font-medium mb-2">Course</p>
              <h4 className="font-semibold text-lg text-[var(--color-text)]">
                Complete Web Development Course 2.0
              </h4>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                Hitesh Choudhary · Udemy
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mt-3">2026</p>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
