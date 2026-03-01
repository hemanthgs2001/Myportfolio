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
                src="/images/image10.png"
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
              Full-Stack Developer | Software Engineer
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a Full-Stack Developer with 1+ years of experience at Hachita Solutions India Private Limited, 
                specializing in building scalable web applications using Node.js, React.js, Next.js, and MongoDB. 
                My expertise includes developing RESTful APIs, implementing payment integrations with Razorpay, 
                and creating responsive user interfaces with Tailwind CSS.
              </p>
              <p>
                Throughout my career progression from Trainee Engineer to Software Developer, I've successfully 
                delivered multiple projects including a complete company website, end-to-end billing applications, 
                an online photo ordering platform (FotoMandir), and a comprehensive HRMS solution (OrkOps AI) 
                with role-based access control, attendance tracking, and leave management workflows.
              </p>
              <p>
                I hold a B.E in Computer Science Engineering from P.E.S. Institute of Technology and Management 
                with a 7.5 CGPA.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p className="text-gray-600 dark:text-gray-400">Hemanth Kumar G S</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-gray-600 dark:text-gray-400">hemanthgs2001@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location:</h4>
                <p className="text-gray-600 dark:text-gray-400">Bengaluru, Karnataka, India</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Education:</h4>
                <p className="text-gray-600 dark:text-gray-400">B.E CSE, CGPA - 7.5 (2019-2023)</p>
              </div>
            </div>
            
            <Button 
              href="https://drive.google.com/file/d/1Vm1TkywwohQZnuRKKvN8xuldiRDT_x6i/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8"
            >
              Download Resume
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}