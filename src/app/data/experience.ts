export interface Experience {
  id: number
  position: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Software Developer",
    company: "Hachita Solutions India Private Limited",
    period: "Dec 2025 - Present",
    description: "Continued development of key projects including the HRMS platform (OrkOps AI) and the Online Photo Ordering Platform (FotoMandir). Focused on building scalable APIs, implementing complex features like role-based access control, leave management workflows, and payment integrations. Responsible for performance optimization and ensuring robust backend architecture with Node.js and MongoDB.",
    technologies: ["Node.js", "React.js", "MongoDB", "Express.js", "JWT", "Razorpay"]
  },
  {
    id: 2,
    position: "Junior Developer",
    company: "Hachita Solutions India Private Limited",
    period: "Mar 2025 - Dec 2025",
    description: "Played a key role in developing full-stack applications. Contributed significantly to the Billing Application by building invoicing modules and implementing PDF/Excel generation with automated email forwarding. Developed responsive UIs for various projects using React.js and Tailwind CSS, and assisted in building backend APIs for products, vendors, and user management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "API Integration"]
  },
  {
    id: 3,
    position: "Trainee Engineer",
    company: "Hachita Solutions India Private Limited",
    period: "Dec 2024 - Feb 2025",
    description: "Started as a trainee, quickly contributing to live projects. Assisted in designing and developing the official company website using React.js and Tailwind CSS. Gained hands-on experience with backend API development using Node.js and MongoDB, focusing on building reusable components and ensuring an SEO-friendly architecture.",
    technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "Tailwind CSS", "Git"]
  }
]