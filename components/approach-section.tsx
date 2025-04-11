"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, PenTool, Rocket, HeadphonesIcon } from "lucide-react"

export function ApproachSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      title: "Discover",
      description:
        "We analyze your business needs and identify the right technology solutions to address your challenges.",
      icon: Search,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Design",
      description:
        "Our experts design customized solutions that align with your business goals and technical requirements.",
      icon: PenTool,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Deploy",
      description:
        "We implement the solutions with minimal disruption to your business operations and maximum efficiency.",
      icon: Rocket,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Support",
      description: "Our dedicated team provides ongoing support and maintenance to ensure optimal performance.",
      icon: HeadphonesIcon,
      color: "bg-blue-100 text-blue-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
        <div className="text-center mb-16">
          <motion.span
            className="text-sm font-medium text-blue-600 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            How We Work
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            OUR APPROACH
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 80 } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="max-w-2xl mx-auto mt-6 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our systematic approach ensures that we deliver high-quality solutions that meet your business needs and
            exceed your expectations.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-blue-100 md:hidden"></div>
          <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-blue-100 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 md:left-1/2 md:top-0 z-10 md:translate-y-0">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-white border-4 border-blue-200 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <motion.div
                      className="absolute -inset-1 rounded-full bg-blue-400/20"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    ></motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-16 md:pt-24 px-4">
                  <div className="glass-card rounded-2xl p-6 h-full cursor-glow hover:shadow-glass-hover transition-shadow duration-300">
                    <div className={`${step.color} rounded-xl p-3 inline-block mb-4`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
