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
      { name: 'HTML5',       icon: 'FaHtml5' },
      { name: 'CSS3',        icon: 'FaCss3Alt' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
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
      { name: 'REST APIs',   icon: 'FaCode' },
      { name: 'Socket.IO',   icon: 'FaNodeJs' },
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
    ],
  },
];
