"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text" variants={itemVariants}>
            NETWORK CATALYST SOLUTIONS!
          </motion.h2>
          <motion.p className="text-gray-700 mb-8 leading-relaxed" variants={itemVariants}>
            Our engineering team have hands-on experience in all aspects of IT planning, deployment, operational
            management and maintenance support. Our design consultants design solutions that fit best within your
            environment and help achieve your business goals – working with you as trusted advisors to help determine
            the best solution for your business. We transform your business by changing the role of your ICT systems
            from a support function to a mission-critical business enabler. Our customers include some of the leading
            Banking Institutions, Pharmaceutical and Manufacturing Companies, and a large pool of small and medium sized
            enterprises.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
