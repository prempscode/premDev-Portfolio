export const portfolioData = {
  // Hero
  name: "Prem",
  tagline: "I think, therefore I build.",
  stats: [
    { label: "Projects Built", value: "5+" },
    { label: "Technologies", value: "10+" },
    { label: "Years Learning", value: "2+" },
  ],
  profileImage: "/images/profile.png",

  // What I Do
  services: [
    {
      title: "Backend Engineering",
      bullets: [
        "Building REST APIs and backend services with Node.js and Express.js",
        "Implementing authentication, authorization, file uploads, and real-time communication",
        "Designing and working with databases using MongoDB",
      ],
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Socket.io",
        "JWT",
      ],
    },
    {
      title: "Frontend Development",
      bullets: [
        "Delivering production-ready React.js and Next.js interfaces for web applications and operational workflows",
        "Translating product requirements into reliable full stack features across authentication, user management, and business automation",
        "Collaborating with frontend teams to integrate API-driven React components and real-time application states",
      ],
      tags: ["React.js", "HTML", "CSS", "Vite", "JavaScript"],
    },
    {
      title: "Deployment & Tools",
      bullets: [
        "Deploying full-stack applications with separate frontend and backend services",
        "Managing projects with Git and GitHub",
        "Working with production environments and environment variables",
      ],
      tags: ["Git", "GitHub", "Vercel", "Render"],
    },
  ],

  // Proficiency
  proficiency: [
    { skill: "Backend Development", level: 65 },
    { skill: "Frontend Development", level: 50 },
    { skill: "Database & APIs", level: 65 },
  ],

  // Education
  education: [
    {
      school: "ITER, Siksha 'O' Anusandhan (SOA)",
      degree: "Bachelor of Computer Applications",
    },
  ],
  // academics
  academics: {
    degree: "BCA",
    cgpa: 9.81,
    years: [
      {
        year: 1,
        semesters: [
          { sem: 1, sgpa: 9.8 },
          { sem: 2, sgpa: 9.5 },
        ],
      },
      {
        year: 2,
        semesters: [
          { sem: 3, sgpa: 10 },
          { sem: 4, sgpa: 9.91 },
        ],
      },
      {
        year: 3,
        semesters: [
          { sem: 5, sgpa: "soon" },
          { sem: 6, sgpa: "soon" },
        ],
      },
    ],
  },

  // Experience
  experience: [
    {
      company: "NativeSoftTech",
      position: "Learning Intern",
      duration: "August 2025 - September 2025",
      summary:
        "Gained hands-on experience in frontend development and responsive web design.",
      bullets: [
        "Developed a responsive blog website using HTML, CSS, and JavaScript.",
        "Implemented responsive layouts using CSS media queries.",
        "Optimized the interface for mobile, tablet, and desktop devices.",
      ],
    },
  ],

  // Projects
  projects: [
    {
      id: "PROJ_001",
      name: "Seer — Real-Time Chat App",
      description:
        "A full-stack real-time messaging app (MERN + Socket.io) with JWT authentication, live typing indicators, online/offline presence, instant user list updates, and image sharing via Cloudinary.",
      github: "https://github.com/prempscode/seer-chat-app",
      demo: null,
    },
    {
      id: "PROJ_002",
      name: "Svara — Music Playlist App",
      description:
        "A full-stack music playlist/streaming app (React + Node/Express/MongoDB) with JWT auth, track uploads with cover art via ImageKit, likes, albums, and user profiles.",
      github: "https://github.com/prempscode/svara",
      demo: "https://svara-phi.vercel.app",
    },
    {
      id: "PROJ_003",
      name: "Ledger Project — Banking System",
      description:
        "A double-entry banking/ledger backend (Node/Express/MongoDB) with JWT auth, idempotent transfers, and MongoDB transactions ensuring debits and credits are never left inconsistent, plus a React (Vite) frontend for accounts, balances, and transfers.",
      github: "https://github.com/prempscode/ledger-project",
      demo: "https://ledger-project-sandy.vercel.app",
    },
    {
      id: "PROJ_004",
      name: "React Learning Project",
      description:
        "A collection of small React projects built to explore component architecture, state management, hooks, and modern frontend development patterns.",
      github: "https://github.com/prempscode/learn-react-by-projects",
      demo: "https://learn-react-by-projects.vercel.app",
    },
  ],

  // Social
  social: {
    github: "https://github.com/prempscode",
    linkedin: "https://linkedin.com/in/prem-pravash-sahu-6392b4334",
    instagram: "https://instagram.com/not_premps",
  },

  // Contact
  email: "prempravash65@gmail.com",
};
