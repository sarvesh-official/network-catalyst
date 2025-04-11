"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="gradient-text inline-block">NETWORK CATALYST SOLUTIONS!</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-base md:text-lg leading-relaxed tracking-normal"
          >
            Our engineering team has hands-on experience in all aspects of IT planning, deployment,
            operational management, and maintenance support. Our design consultants create solutions tailored to your
            environment, helping you reach your business goals.
            <br className="hidden sm:block" />
            <br />
            We work as trusted advisors—transforming your ICT systems from a support role to a mission-critical
            business enabler. Our customers include top Banking Institutions, Pharmaceutical and Manufacturing
            Companies, and a wide range of SMEs.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}