/**
 * Skills data — update proficiency levels (0-100) to match your real skills
 */

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'FaCode',
    color: '#6366f1',
    skills: [
      { name: 'React',       level: 85, icon: 'FaReact' },
      { name: 'JavaScript',  level: 90, icon: 'SiJavascript' },
      { name: 'TypeScript',  level: 70, icon: 'SiTypescript' },
      { name: 'HTML5',       level: 95, icon: 'FaHtml5' },
      { name: 'CSS3',        level: 90, icon: 'FaCss3Alt' },
      { name: 'Tailwind',    level: 85, icon: 'SiTailwindcss' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'FaServer',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js',     level: 70, icon: 'FaNodeJs' },
      { name: 'Express',     level: 65, icon: 'SiExpress' },
      { name: 'MongoDB',     level: 65, icon: 'SiMongodb' },
      { name: 'REST APIs',   level: 80, icon: 'FaReact' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    icon: 'FaTools',
    color: '#ec4899',
    skills: [
      { name: 'Git & GitHub', level: 85, icon: 'FaGithub' },
      { name: 'Vite',         level: 80, icon: 'SiVite' },
      { name: 'Figma',        level: 70, icon: 'FaFigma' },
      { name: 'VS Code',      level: 95, icon: 'SiVisualstudiocode' },
    ],
  },
  {
    id: 'learning',
    label: 'Currently Learning',
    icon: 'FaGraduationCap',
    color: '#06b6d4',
    skills: [
      { name: 'Next.js',      level: 50, icon: 'SiNextdotjs' },
      { name: 'Python',       level: 55, icon: 'FaPython' },
      { name: 'AI Workflows', level: 45, icon: 'FaReact' },
      { name: 'Docker',       level: 40, icon: 'FaDocker' },
    ],
  },
];

export const stats = [
  { label: 'Projects Built',  value: 20,   suffix: '+' },
  { label: 'Technologies',    value: 15,   suffix: '+' },
  { label: 'GitHub Commits',  value: 500,  suffix: '+' },
  { label: 'Hours of Coding', value: 1000, suffix: '+' },
];
