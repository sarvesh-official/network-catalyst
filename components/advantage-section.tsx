"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function AdvantageSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const advantages = [
    "Specialized team for designing and deploying IT on-prem and cloud network solutions",
    "Close collaboration with customer's IT team for mutual success",
    "Support for both CAPex & OPex model for IT infrastructure",
    "Experienced professionals with industry certifications",
    "Customized solutions tailored to your business needs",
    "24/7 technical support and maintenance",
  ]

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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our Advantage" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Our Advantage</h3>
                <p className="text-blue-100">What sets us apart from the competition</p>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text">Our Advance</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 mb-8"
            >
              We have specialized people for designing and deploying IT on-prem and cloud network solutions. We work
              closely with customer's IT team for there success and our success as we all know we together can grow to
              next level and not along. We also support both CAPex & OPex model for IT infra.
            </motion.p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {advantages.map((advantage, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
