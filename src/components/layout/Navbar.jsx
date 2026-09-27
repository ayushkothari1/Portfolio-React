import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../ui/ThemeToggle";
import {
  navbarVariant,
  mobileMenuVariant,
  mobileMenuItemVariant,
} from "../../utils/animations";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

/**
 * Navbar — floating glassmorphism navbar with scroll spy + mobile drawer
 */
export default function Navbar({ activeSection, isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow + blur when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Smooth scroll to section
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        variants={navbarVariant}
        initial="hidden"
        animate="visible"
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "glass shadow-glass border-b border-subtle py-3"
              : "bg-transparent py-5"
          }
        `}
        style={{ backdropFilter: scrolled ? "blur(20px)" : "none" }}
      >
        <div className="container-max flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("hero")}
            className="font-display font-bold text-xl tracking-tight text-[var(--color-text)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">Ayush</span>
            <span className="text-[var(--color-text-muted)]">.</span>
          </motion.button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-lg
                  transition-all duration-200
                  ${
                    activeSection === link.id
                      ? "text-indigo-400 bg-indigo-500/10"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5"
                  }
                `}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            {/* Hire me CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="
                hidden md:inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold
                bg-gradient-to-r from-indigo-600 to-violet-600 text-white
                shadow-glow-sm hover:shadow-glow
                transition-all duration-200
              "
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Hire Me
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--color-text)]"
              onClick={() => setMenuOpen((o) => !o)}
              whileTap={{ scale: 0.9 }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <FiX size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <FiMenu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 menu-overlay md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariant}
            initial="closed"
            animate="open"
            exit="closed"
            className="
              fixed top-0 right-0 bottom-0 z-50 w-72
              glass-strong border-l border-white/10
              flex flex-col pt-20 pb-8 px-6
              md:hidden
            "
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  variants={mobileMenuItemVariant}
                  custom={i}
                  onClick={() => scrollTo(link.id)}
                  className={`
                    text-left px-4 py-3 rounded-xl text-base font-medium
                    transition-all duration-200
                    ${
                      activeSection === link.id
                        ? "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20"
                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5"
                    }
                  `}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto">
              <a
                href="mailto:ayush@example.com"
                className="
                  block text-center px-6 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-indigo-600 to-violet-600
                  shadow-glow-sm
                "
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
