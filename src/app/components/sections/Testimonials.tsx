'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Container from '../../components/ui/Container'
import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <Container>
        <SectionHeading
          title="Testimonials"
          subtitle="What people say about me"
        />
        
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                
                <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].position}
                </p>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}