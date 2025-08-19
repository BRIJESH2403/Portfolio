export const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "It displays current weather conditions with real-time data, along with hourly and weekly forecasts, sunrise/sunset times, and moon phase information in a clean, responsive interface.",
    tech: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
    liveUrl: "http://brij-weather.vercel.app/",
    repoUrl: "https://github.com/BRIJESH2403/weather-js",
    image: "/images/weather-app.png",
    category: "Web Development",
    features: [
      "Real-time weather data integration",
      "Geolocation API for user location",
      "Responsive design with custom SVG icons",
      "Automatic day/night mode switching"
    ]
  },
  {
    id: 2,
    title: "Task Timer Board",
    description: "A task management app with three sections: To Do, In Progress, and Done. Allows adding tasks with time limits and automatic timer management.",
    tech: ["React.js", "Tailwind CSS", "Ant Design", "Vite"],
    liveUrl: "https://brij-task-timer-board.vercel.app/",
    repoUrl: "https://github.com/BRIJESH2403/task-timer-board",
    image: "/images/task-timer.png",
    category: "React App",
    features: [
      "Drag & drop task management",
      "Built-in timer functionality",
      "Task search and filtering",
      "Progress tracking with statistics"
    ]
  },
  {
    id: 3,
    title: "Memory Card Game",
    description: "A fun interactive Memory Matching Game built with React. Players flip cards to reveal emojis and try to match pairs with different difficulty levels.",
    tech: ["React.js", "Tailwind CSS", "shadcn/ui", "Vite"],
    liveUrl: "https://brij-memory-card-game-rho.vercel.app/",
    repoUrl: "https://github.com/BRIJESH2403/Memory-Card-Game",
    image: "/images/memory-game.png",
    category: "Game Development",
    features: [
      "Multiple difficulty levels",
      "Timer and move counter",
      "Preview mode for extra challenge",
      "Responsive grid layout"
    ]
  }
];