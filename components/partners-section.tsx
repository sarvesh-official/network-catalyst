"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const partners = Array(8).fill("/placeholder.svg?height=80&width=200")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.span
            className="text-sm font-medium text-blue-600 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Partners
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            ASSOCIATES WITH
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 80 } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <Image
                src={partner || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                width={150}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
