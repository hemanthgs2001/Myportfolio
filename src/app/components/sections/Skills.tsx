'use client'

import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import SectionHeading from '../../components/ui/SectionHeading'
import SkillIcon from '../../components/shared/SkillIcon'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <Container>
        <SectionHeading
          title="My Skills"
          subtitle="Technologies I work with"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <SkillIcon skill={skill} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}