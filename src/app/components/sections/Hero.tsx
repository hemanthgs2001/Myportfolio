'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { FaEnvelope, FaPhone, FaCalendarAlt, FaCheckCircle, FaGraduationCap, FaMapMarkerAlt, FaDownload } from 'react-icons/fa'
// emojis used instead of icon components
import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import SocialLinks from '../../components/shared/SocialLinks'

// helper component that cycles through a list of skills
function SkillsRotator() {
  const skills = [
    'Node.js',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'MongoDB',
    'Razorpay'
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % skills.length)
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <p className="text-lg text-gray-600 dark:text-gray-200 mb-2 h-10">
        Skilled in{' '}
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          {skills[index]}
        </motion.span>
      </p>
      <p className="text-md text-gray-600 dark:text-gray-400 mb-4 flex items-center">
        I am a team player and have 1+ years of hands-on experience.
        <span className="ml-2 text-red-500 text-2xl animate-bounce">🚀</span>
      </p>
      <TypingMessage />
    </>
  )
}

// typing message component
function TypingMessage() {
  const phrases = [
    'Always learning.',
    'Building real‑world apps.',
    'Open to collaboration.'
  ]
  const [text, setText] = useState('')
  const [pi, setPi] = useState(0)
  const [char, setChar] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (char < phrases[pi].length) {
        setText((t) => t + phrases[pi][char])
        setChar(char + 1)
      } else {
        setTimeout(() => {
          setText('')
          setChar(0)
          setPi((pi + 1) % phrases.length)
        }, 1000)
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [char, pi])

  return <p className="text-md text-gray-500 dark:text-gray-400 mb-8 h-6">{text}&nbsp;</p>
}

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 md:pt-20 flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 flex flex-wrap items-center gap-2">
              <span>Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Hemanth Kumar GS
              </span>
              <span className="text-yellow-400 text-3xl animate-bounce inline-block">👋</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer | Software Engineer
            </p>
            {/* rotating skills */}
            <SkillsRotator />
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button href="#projects">View My Work</Button>
              <Button href="#contact" variant="outline">Contact Me</Button>
            </div>

            <div className="mt-8 mb-6">
              <a
                href="https://drive.google.com/file/d/1My2yJRHPfJ-AvK4YTUzT-MzgjiKPPt63/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume"
                className="group inline-flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-gray-700 text-gray-800 dark:text-white transition relative overflow-hidden"
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-lg transform-gpu"
                >
                  <FaDownload />
                </motion.span>
                <span className="font-medium">Download Resume</span>
                <span className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition pointer-events-none" />
              </a>
            </div>
            
            <SocialLinks />

           
          </motion.div>
          
          {/* Image flip card */}
          <FlipCard />
        </div>
      </Container>
    </section>
  )
}
// flip card component
function FlipCard() {
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.div
      onClick={() => setFlipped((f) => !f)}
      className="relative w-full mx-auto perspective"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[400px] lg:h-[500px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* front */}
        <div className="absolute inset-0 backface-hidden">
          <Image
            src="/images/image9.jpeg"
            alt="Profile"
            fill
            className="object-cover rounded-2xl shadow-2xl"
            priority
          />
          <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 text-sm text-white bg-black bg-opacity-50 rounded-md py-2 px-3">
            <div className="flex items-center gap-2">
              <span className="font-medium">Click or tap to flip</span>
              <span className="relative inline-flex items-center">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-amber-400 opacity-60 animate-ping" />
                <span className="inline-flex h-3 w-3 rounded-full bg-amber-400" />
              </span>
              <span className="text-2xl ml-1 animate-bounce" aria-hidden="true">↻</span>
            </div>
          </div>
        </div>
        {/* back */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 backface-hidden rotateY-180 overflow-y-auto text-sm">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Important Info</h2>

          <div className="grid grid-cols-1 gap-2">
             <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-gray-700 justify-between">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-2xl" />
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Availability</div>
                  <div className="text-base font-semibold">Immediate joiner</div>
                </div>
              </div>
              <div className="ml-2">
                <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Open</span>
              </div>
            </div>








            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-gray-700">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Email</div>
                <div className="text-base font-semibold">hemanthgs2001@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-gray-700">
              <FaPhone className="text-blue-600 text-2xl" />
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Phone</div>
                <div className="text-base font-semibold">+91 9108430148</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-gray-700">
              <FaCalendarAlt className="text-blue-600 text-2xl" />
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Experience</div>
                <div className="text-base font-semibold">1+ year</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-gray-700">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Location</div>
                <div className="text-base font-semibold">Bangalore, India</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-gray-700">
              <FaGraduationCap className="text-blue-600 text-2xl" />
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Education</div>
                <div className="text-base font-semibold">B.E. in CSE (4 yrs)</div>
              </div>
            </div>

            
          </div>


        </div>
      </motion.div>
    </motion.div>
  )
}
