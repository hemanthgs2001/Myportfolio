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
    title: "Company Website",
    description: "Designed and developed the complete company website using React.js and Tailwind CSS. Built supporting backend APIs with Node.js and MongoDB. Implemented SEO-friendly and scalable frontend architecture with reusable components.",
    image: "/company.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    liveUrl: "https://company-website.com",
    githubUrl: "https://github.com/hemanthgs/company-website"
  },
  {
    id: 2,
    title: "Billing Application",
    description: "End-to-end billing and invoicing system with modules for products, purchases, vendors, and sales returns. Implemented PDF/Excel generation and automated email forwarding for report sharing. Features secure authentication and responsive UI.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=4000&h=2600&fit=crop",
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS", "JWT"],
    liveUrl: "https://billing-app.com",
    githubUrl: "https://github.com/hemanthgs/billing-application"
  },
  {
    id: 3,
    title: "FotoMandir - Online Photo Ordering Platform",
    description: "Customizable photo frame selection and ordering platform with order tracking workflows. Built APIs for orders, user profiles, and gallery management. Features seamless ordering experience and real-time order status updates.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=4000&h=2600&fit=crop",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    liveUrl: "https://fotomandir.com",
    githubUrl: "https://github.com/hemanthgs/fotomandir"
  },
  {
    id: 4,
    title: "OrkOps AI - HRMS Platform",
    description: "Role-based HRMS platform for Admin, HR, and Employees with secure authentication and session management. Features attendance tracking with check-in/check-out, leave management with approval workflows, department and role hierarchy management, and document management with employee acknowledgment tracking.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=4000&h=2600&fit=crop",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
    liveUrl: "https://orkops.com",
    githubUrl: "https://github.com/hemanthgs/hrms-platform"
  },
  {
    id: 5,
    title: "Smart Bookmark - Real-time Bookmark Manager",
    description: "A modern bookmark management application with Google authentication for secure access. Built with Next.js and Supabase for real-time data synchronization, allowing users to create, update, and delete bookmarks without page refresh. Features instant UI updates, organized bookmark collections, and seamless real-time collaboration capabilities.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=4000&h=2600&fit=crop",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Google OAuth", "Real-time Subscriptions"],
    liveUrl: "https://smart-bookmark.vercel.app",
    githubUrl: "https://github.com/hemanthgs/smart-bookmark"
  }
]