/**
 * Skills data grouped by category
 */

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'FaCode',
    color: '#6366f1',
    skills: [
      { name: 'React',       icon: 'FaReact' },
      { name: 'JavaScript',  icon: 'SiJavascript' },
      { name: 'TypeScript',  icon: 'SiTypescript' },
      { name: 'HTML5',       icon: 'FaHtml5' },
      { name: 'CSS3',        icon: 'FaCss3Alt' },
      { name: 'Tailwind',    icon: 'SiTailwindcss' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'FaServer',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js',     icon: 'FaNodeJs' },
      { name: 'Express',     icon: 'SiExpress' },
      { name: 'MongoDB',     icon: 'SiMongodb' },
      { name: 'REST APIs',   icon: 'FaReact' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
    icon: 'FaTools',
    color: '#ec4899',
    skills: [
      { name: 'Git & GitHub', icon: 'FaGithub' },
      { name: 'Vite',         icon: 'SiVite' },
      { name: 'Figma',        icon: 'FaFigma' },
      { name: 'VS Code',      icon: 'SiVisualstudiocode' },
    ],
  },
  {
    id: 'learning',
    label: 'Currently Learning',
    icon: 'FaGraduationCap',
    color: '#06b6d4',
    skills: [
      { name: 'Next.js',      icon: 'SiNextdotjs' },
      { name: 'Python',       icon: 'FaPython' },
      { name: 'AI Workflows', icon: 'FaReact' },
      { name: 'Docker',       icon: 'FaDocker' },
    ],
  },
];

export const stats = [
  { label: 'Projects Built',  value: 20,   suffix: '+' },
  { label: 'Technologies',    value: 15,   suffix: '+' },
  { label: 'GitHub Commits',  value: 500,  suffix: '+' },
  { label: 'Hours of Coding', value: 1000, suffix: '+' },
];
