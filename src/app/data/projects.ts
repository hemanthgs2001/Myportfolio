export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and secure payments using Stripe.",
    image: "/images/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    image: "/images/project2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather application with interactive maps, 7-day forecasts, and location-based weather data.",
    image: "/images/project3.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media managers with real-time metrics and engagement tracking.",
    image: "/images/project4.jpg",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    liveUrl: "https://project4.com",
    githubUrl: "https://github.com/yourusername/project4"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile-first fitness application with workout plans, progress tracking, and nutrition guides.",
    image: "/images/project5.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "https://project5.com",
    githubUrl: "https://github.com/yourusername/project5"
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "Content generation tool using AI to create blog posts, social media content, and marketing copy.",
    image: "/images/project6.jpg",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma"],
    liveUrl: "https://project6.com",
    githubUrl: "https://github.com/yourusername/project6"
  }
]