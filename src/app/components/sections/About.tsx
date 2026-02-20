'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '../../components/ui/Container'
import SectionHeading from '../../components/ui/SectionHeading'
import Button from '../../components/ui/Button'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="About me"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Passionate Developer Creating Digital Excellence
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a Full Stack Developer with 5+ years of experience in building
                web applications that solve real-world problems. My journey in tech
                started with a curiosity for how things work, and evolved into a
                passion for creating elegant solutions.
              </p>
              <p>
                I specialize in React, Next.js, and Node.js, but I'm always eager to
                learn new technologies and methodologies. I believe in writing clean,
                maintainable code and creating intuitive user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p className="text-gray-600 dark:text-gray-400">Your Name</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-gray-600 dark:text-gray-400">your.email@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location:</h4>
                <p className="text-gray-600 dark:text-gray-400">Your City, Country</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability:</h4>
                <p className="text-gray-600 dark:text-gray-400">Freelance/Full-time</p>
              </div>
            </div>
            
            <Button href="/resume.pdf" className="mt-8">
              Download Resume
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}