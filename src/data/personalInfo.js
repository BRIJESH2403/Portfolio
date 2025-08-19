// src/data/personalInfo.js

// Personal Info Object
export const personalInfo = {
  name: "Brijesh",
  title: "Frontend Developer",
  subtitle: "Hello! world",
  experience: "6 months internship in Hexacoders",
  bio: "💻 I'm a passionate Frontend Developer with 6 months of internship experience at Hexacoders. I enjoy turning ideas into responsive, user-friendly websites using React, Next.js, and modern web technologies. Always eager to learn and explore new tools to build better digital experiences.",
  location: "Mehsana",
  fullDescription: "A passionate developer working from Mehsana. Primarily develops modern web applications, working with React and Next.js since 2024.",

  contact: {
    email: "brijeshoza037@gmail.com",
    phone: "+91 9913581242",
    linkedin: "https://www.linkedin.com/in/brijesh-prajapati-636402230/",
    github: "https://github.com/BRIJESH2403",
    twitter: "https://x.com/PrajapatiBony",
    vercel: "https://vercel.com/brijeshoza037-gmailcoms-projects",
    address: "Mehsana, Gujarat, India"
  },

  skills: [
    { name: "HTML / CSS", percentage: 95 },
    { name: "JavaScript (ES6+)", percentage: 90 },
    { name: "React.js", percentage: 85 },
    { name: "Next.js", percentage: 80 },
    { name: "Node.js", percentage: 70 },
    { name: "UI/UX Design (Figma)", percentage: 75 },
    { name: "Git & GitHub", percentage: 85 }
  ]
};

// Projects Array
export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web Development",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    image: "/images/portfolio.png",
    liveUrl: "https://your-portfolio-live-link.com",
    repoUrl: "https://github.com/BRIJESH2403/portfolio",
    tech: ["React", "TailwindCSS", "JavaScript"],
    features: [
      "Responsive design with Tailwind",
      "Modern UI with animations",
      "Deployed with Vercel"
    ]
  },
  {
    id: 2,
    title: "Weather App",
    category: "Web App",
    description: "Weather forecasting app with real-time data and 7-day forecast.",
    image: "/images/weather.png",
    liveUrl: "https://your-weather-live-link.com",
    repoUrl: "https://github.com/BRIJESH2403/weather-app",
    tech: ["React", "API", "CSS"],
    features: [
      "Real-time weather updates",
      "Hourly and weekly forecast",
      "Beautiful SVG icons"
    ]
  },
  {
    id: 3,
    title: "Task Manager",
    category: "Productivity",
    description: "A task manager app with timer functionality for productivity tracking.",
    image: "/images/task-manager.png",
    liveUrl: "https://your-taskmanager-live-link.com",
    repoUrl: "https://github.com/BRIJESH2403/task-manager",
    tech: ["React", "useState", "useEffect"],
    features: [
      "Add, delete and manage tasks",
      "Timer with Pause/Resume/Done",
      "Drag and drop sections"
    ]
  }
];
