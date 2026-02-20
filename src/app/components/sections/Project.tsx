'use client'

import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import SectionHeading from '../../components/ui/SectionHeading'
import ProjectCard from '../../components/shared/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <Container>
        <SectionHeading
          title="My Projects"
          subtitle="Here are some of my recent works"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}