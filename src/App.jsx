import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import AnimatedCursor from './components/ui/AnimatedCursor';
import ParticleBackground from './components/ui/ParticleBackground';

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

/**
 * App — root component
 * Wires together theme, scroll spy, navbar, particle bg, cursor and all sections
 */
export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(SECTION_IDS, 80);

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      {/* ── Ambient layer ── */}
      <ParticleBackground isDark={isDark} />
      <AnimatedCursor />

      {/* ── Floating navbar ── */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* ── Main content ── */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
