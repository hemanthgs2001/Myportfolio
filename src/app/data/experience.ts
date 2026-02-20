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
    position: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description: "Lead development of multiple web applications using React and Node.js. Architected scalable solutions and mentored junior developers. Implemented CI/CD pipelines and improved application performance by 40%.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
  },
  {
    id: 2,
    position: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description: "Developed responsive web applications for clients across various industries. Collaborated with designers to implement pixel-perfect UIs and improved user experience through A/B testing.",
    technologies: ["React", "Vue.js", "Tailwind CSS", "Figma"]
  },
  {
    id: 3,
    position: "Junior Developer",
    company: "StartUp Labs",
    period: "2019 - 2020",
    description: "Assisted in building MVP for a startup product. Participated in agile development process and contributed to both frontend and backend development.",
    technologies: ["JavaScript", "Express", "MongoDB", "Bootstrap"]
  }
]