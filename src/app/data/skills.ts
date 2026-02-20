import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava,
  FaAws,
  FaDocker,
  FaFigma 
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiGit,
  SiJest,
  SiCypress,
  SiWebpack,
  SiSass,
  SiRedux,
  SiVuedotjs,
  SiDjango,
  SiFlask,
  SiKubernetes,
  SiTerraform
} from 'react-icons/si'
import { IconType } from 'react-icons'

export interface Skill {
  name: string
  icon: IconType
  level: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'testing'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: FaReact, level: 'Advanced', category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, level: 'Advanced', category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, level: 'Advanced', category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, level: 'Advanced', category: 'frontend' },
  { name: 'Vue.js', icon: SiVuedotjs, level: 'Intermediate', category: 'frontend' },
  { name: 'Redux', icon: SiRedux, level: 'Advanced', category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced', category: 'frontend' },
  { name: 'SASS', icon: SiSass, level: 'Advanced', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: FaNodeJs, level: 'Advanced', category: 'backend' },
  { name: 'Python', icon: FaPython, level: 'Intermediate', category: 'backend' },
  { name: 'Java', icon: FaJava, level: 'Intermediate', category: 'backend' },
  { name: 'Django', icon: SiDjango, level: 'Intermediate', category: 'backend' },
  { name: 'Flask', icon: SiFlask, level: 'Intermediate', category: 'backend' },
  { name: 'GraphQL', icon: SiGraphql, level: 'Advanced', category: 'backend' },
  
  // Database
  { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', category: 'database' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', category: 'database' },
  { name: 'Firebase', icon: SiFirebase, level: 'Advanced', category: 'database' },
  
  // DevOps
  { name: 'AWS', icon: FaAws, level: 'Intermediate', category: 'devops' },
  { name: 'Docker', icon: FaDocker, level: 'Intermediate', category: 'devops' },
  { name: 'Kubernetes', icon: SiKubernetes, level: 'Beginner', category: 'devops' },
  { name: 'Terraform', icon: SiTerraform, level: 'Beginner', category: 'devops' },
  { name: 'Git', icon: SiGit, level: 'Advanced', category: 'devops' },
  
  // Testing
  { name: 'Jest', icon: SiJest, level: 'Intermediate', category: 'testing' },
  { name: 'Cypress', icon: SiCypress, level: 'Intermediate', category: 'testing' },
  
  // Design
  { name: 'Figma', icon: FaFigma, level: 'Intermediate', category: 'design' },
  
  // Tools
  { name: 'Webpack', icon: SiWebpack, level: 'Intermediate', category: 'devops' },
]