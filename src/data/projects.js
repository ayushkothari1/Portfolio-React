export const featuredProjects = [
  {
    id: 'nexora',
    title: 'Nexora',
    eyebrow: 'Flagship · everyday browser toolkit',
    description:
      'Nexora brings 20 small utilities into one searchable workspace, for quick calculations, text and developer tasks, conversions, and everyday planning. It is designed to keep common jobs close at hand without needing an account; most tools run directly in the browser, with weather and currency lookups connected to public APIs.',
    details: [
      'Search and filter 20 tools across calculators, text utilities, converters, and productivity tools, with direct links to each tool',
      'Save favorite tools, revisit recent tools, and retain appearance settings on the device using localStorage',
      'Generate QR codes locally for PNG download, create passwords with the browser Web Crypto API, and copy results to the clipboard',
      'Responsive sidebar and light/dark themes; Open-Meteo provides weather data and Frankfurter provides reference currency rates',
    ],
    architecture:
      'A React single-page app with React Router tool routes and browser-side state. There is no custom backend; weather and currency tools call their public REST endpoints directly.',
    tech: ['React 18', 'Vite 6', 'JavaScript', 'Tailwind CSS', 'React Router', 'Lucide React', 'QRCode'],
    github: 'https://github.com/ayushkothari1/Nexora',
    live: 'https://nexora-two-indol.vercel.app/',
    accent: 'nexora',
  },
  {
    id: 'chatbox',
    title: 'ChatBox',
    eyebrow: 'Real-time communication',
    description:
      'A room-based chat application for starting a conversation and inviting others through a shared link. Messages move through Socket.IO, while the Express server manages room membership and serves the production client.',
    details: [
      'Create rooms and join by invitation link',
      'Live messages, participant updates, and typing indicators',
      'Display names, up to 10 participants, and recent in-memory message history',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Socket.IO', 'React Router'],
    github: 'https://github.com/ayushkothari1',
    live: 'https://chatbox-1-rx9b.onrender.com/',
    accent: 'chatbox',
  },
  {
    id: 'animal-atlas',
    title: 'Animal Atlas',
    eyebrow: 'Species discovery',
    description:
      'A searchable animal guide that brings species information together in one responsive interface. An Express API normalizes iNaturalist search results and builds profiles with supplemental EOL and Wikipedia information when available.',
    details: [
      'Search common or scientific names and filter by animal category',
      'Open species profiles with available habitat, diet, and conservation details',
      'Save favorites in the browser and revisit them in a separate view',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'REST APIs'],
    github: 'https://github.com/ayushkothari1/Animal-Atlas',
    live: 'https://animal-atlas-2.onrender.com/',
    accent: 'atlas',
  },
];

export const otherProjects = [
  {
    id: 'todo-app',
    title: 'Todo App',
    description:
      'A task manager for adding tasks, tracking completion, and preserving the list between visits using browser storage.',
    tech: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/ayushkothari1/React-/tree/main/todoLocalS',
    live: 'https://react-qh5r.vercel.app/',
  },
];
