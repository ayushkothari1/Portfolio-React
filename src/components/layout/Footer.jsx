import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const SOCIAL_LINKS = [
  { icon: FiGithub, href: "https://github.com/ayushkothari1", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/ayushko1/",
    label: "LinkedIn",
  },

  { icon: FiMail, href: "mailto:pahadiayush61@gmail.com", label: "Email" },
];

/**
 * Footer — minimal footer with social links
 */
export default function Footer() {
  return (
    <footer className="relative border-t border-subtle py-12 px-4">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container-max flex flex-col items-center gap-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-2xl"
        >
          <span className="gradient-text">Ayush Kothari</span>
          <span className="text-[var(--color-text-muted)]">.</span>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4"
        >
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                w-10 h-10 flex items-center justify-center rounded-xl
                border border-subtle text-[var(--color-text-muted)]
                hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/10
                transition-all duration-200
              "
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-[var(--color-text-muted)]"
        >
          © 2026 Ayush Kothari
        </motion.p>
      </div>
    </footer>
  );
}
