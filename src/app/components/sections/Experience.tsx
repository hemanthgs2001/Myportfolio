'use client'

import { motion } from 'framer-motion'
import Container from '../../components/ui/Container'
import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <Container>
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
        />
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900" />
              
              <Card className="ml-4">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <Badge>{exp.period}</Badge>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}