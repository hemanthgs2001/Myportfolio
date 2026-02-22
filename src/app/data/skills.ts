import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava,
  FaAws,
  FaDocker,
  FaFigma,
  FaGithub 
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
  SiTerraform,
  SiVisualstudiocode
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
  { name: 'Redux', icon: SiRedux, level: 'Advanced', category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: FaNodeJs, level: 'Advanced', category: 'backend' },
  { name: 'Java', icon: FaJava, level: 'Intermediate', category: 'backend' },
  
  // Database
  { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', category: 'database' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', category: 'database' },
  { name: 'Firebase', icon: SiFirebase, level: 'Advanced', category: 'database' },
  
  // DevOps & Tools
  { name: 'Git', icon: SiGit, level: 'Advanced', category: 'devops' },
  { name: 'VS Code', icon: SiVisualstudiocode, level: 'Advanced', category: 'devops' },
  { name: 'GitHub', icon: FaGithub, level: 'Advanced', category: 'devops' },
  { name: 'Webpack', icon: SiWebpack, level: 'Intermediate', category: 'devops' },
  
  // Testing
  { name: 'Manual Testing', icon: SiJest, level: 'Intermediate', category: 'testing' },
]