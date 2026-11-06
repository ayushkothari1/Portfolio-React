export const featuredProjects = [
  {
    id: 'nexora',
    title: 'Nexora',
    eyebrow: 'Flagship \u00b7 Everyday Browser Toolkit',
    description:
      'Nexora brings 20 utilities into one searchable workspace for calculations, text and developer tasks, conversions, and everyday planning. Most tools run directly in the browser, without requiring an account.',
    details: [
      'Search and filter 20 tools across calculators, text utilities, converters, and productivity categories',
      'Save favorite tools, revisit recent tools, and persist appearance settings using localStorage',
      'Generate QR codes for PNG download, create passwords using the Web Crypto API, and copy results to the clipboard',
      'Responsive sidebar, light and dark themes, and direct navigation to individual tools',
      'Uses Open-Meteo for weather data and Frankfurter for reference currency rates',
    ],
    architecture:
      'A React single-page application with React Router and browser-side state. Weather and currency tools integrate with public REST APIs.',
    tech: ['React 18', 'Vite 6', 'JavaScript', 'Tailwind CSS', 'React Router', 'Lucide React', 'QRCode'],
    github: 'https://github.com/ayushkothari1/Nexora',
    live: 'https://nexora-two-indol.vercel.app/',
    accent: 'nexora',
  },
  {
    id: 'chatbox',
    title: 'ChatBox',
    eyebrow: 'Major Project \u00b7 Real-Time Communication',
    description:
      'ChatBox is a room-based chat application that lets users create conversations and invite others through a shared link. It uses Socket.IO for real-time messaging and an Express server to manage room membership.',
    details: [
      'Create rooms and join conversations through invitation links',
      'Send real-time messages with participant updates and typing indicators',
      'Supports display names and up to 10 participants per room',
      'Maintains recent in-memory message history',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Socket.IO', 'React Router'],
    github: 'https://github.com/ayushkothari1',
    live: 'https://chatbox-1-rx9b.onrender.com/',
    accent: 'chatbox',
  },
  {
    id: 'animal-atlas',
    title: 'Animal Atlas',
    eyebrow: 'Major Project \u00b7 Species Discovery',
    description:
      'Animal Atlas is a searchable animal guide that brings species information together in a responsive interface. Its Express API organizes iNaturalist results and supplements species profiles with EOL and Wikipedia information when available.',
    details: [
      'Search species by common or scientific name and filter by animal category',
      'Explore species profiles with available habitat, diet, and conservation information',
      'Save favorite species and revisit them in a dedicated view',
      'Built with a React frontend and a Node.js and Express API',
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
      'A simple task manager for adding tasks, tracking completion, and preserving the task list between visits using browser storage.',
    tech: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/ayushkothari1/React-/tree/main/todoLocalS',
    live: 'https://react-qh5r.vercel.app/',
  },
  {
    id: 'shopde',
    title: 'SHOPDE',
    category: 'E-Commerce Website',
    description:
      'SHOPDE is a responsive shopping website featuring clothing, food, cosmetics, and furniture. Users can browse products, manage their cart with data saved in local storage, and use an admin panel to add or delete products.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    github: 'https://github.com/ayushkothari1/SHOPDE',
    live: 'https://shopde-phi.vercel.app/',
  },
];
