'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import SocialLinks from '../../components/shared/SocialLinks'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I create beautiful, responsive web applications with modern technologies
              and exceptional user experiences.
            </p>
            
            <div className="flex gap-4 mb-8">
              <Button href="#projects">View My Work</Button>
              <Button href="#contact" variant="outline">Contact Me</Button>
            </div>
            
            <SocialLinks />
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}