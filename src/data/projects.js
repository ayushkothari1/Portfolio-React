/**
 * Projects data — update with your real projects
 * Each project: id, title, description, category, tech[], github, live, featured, gradient
 */

export const CATEGORIES = ["All", "Web Development", "Full Stack"];

export const projects = [
  {
    id: 1,
    title: "Animal Atlas",
    description:
      "A searchable animal discovery app that lets users browse species and save favorites using animal data APIs.",
    category: "Web Development",
    tech: ["React", "Vite", "Node.js", "Express", "REST API"],
    github:
      "https://github.com/ayushkothari1/Animal-Atlas/tree/main/AnimalGeneral",
    live: "https://animal-atlas-2.onrender.com/",
    featured: true,
    gradient: "from-emerald-500 to-teal-600",
    color: "#10b981",
  },
  {
    id: 2,
    title: "ChatBox",
    description:
      "A real-time, room-based chat app where users can create rooms and exchange messages through shared links. Built with React, Express, and Socket.IO.",
    category: "Full Stack",
    tech: ["React", "Vite", "Node.js", "Express", "Socket.IO"],
    github: "https://github.com/ayushkothari1/ChatBox",
    live: "https://chatbox-1-rx9b.onrender.com/",
    featured: true,
    gradient: "from-violet-600 to-indigo-600",
    color: "#6366f1",
  },

  {
    id: 3,
    title: "Todo App",
    description:
      "A task manager for adding tasks, tracking completion, and preserving the list between visits using browser storage.",
    category: "Web Development",
    tech: ["React", "JavaScript", "CSS3", "LocalStorage"],
    github: "https://github.com/ayushkothari1/React-/tree/main/todoLocalS",
    live: "https://react-qh5r.vercel.app/",
    featured: true,
    gradient: "from-sky-500 to-blue-600",
    color: "#0ea5e9",
  },
];
