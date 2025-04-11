"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Cloud, Users, BarChart, GraduationCap, LineChart, Move, Store, FileSearch, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CaseStudiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const caseStudies = [
    {
      title: "CLOUD",
      icon: Cloud,
      image: "https://networkcatalyst.in/wp-content/uploads/2024/02/1-1.png",
      description:
        "Migration of legacy systems to cloud infrastructure for a financial institution, resulting in 40% cost reduction.",
    },
    {
      title: "FIELD ENGINEERING",
      icon: Users,
      image: "https://networkcatalyst.in/wp-content/uploads/2024/02/2.png",
      description:
        "Deployment of field service management solution for a manufacturing company, improving service delivery by 60%.",
    },
    {
      title: "PROJECT MANAGEMENT",
      icon: BarChart,
      image: "https://networkcatalyst.in/wp-content/uploads/2024/02/3.png",
      description:
        "End-to-end project management for a large-scale IT infrastructure upgrade across multiple locations.",
    },
    {
      title: "LEARNING & TRAINING",
      icon: GraduationCap,
      image: "https://networkcatalyst.in/wp-content/uploads/2024/02/4.png",
      description:
        "Custom training program development for new technology adoption, resulting in 90% user proficiency.",
    },
    {
      title: "BUSINESS PROCESS CONSULTING",
      icon: LineChart,
      image: "https://networkcatalyst.in/wp-content/uploads/2024/02/5.png",
      description: "Business process optimization for an e-commerce company, reducing operational costs by 30%.",
    },
    {
      title: "RELOCATION",
      icon: Move,
      image: "https://networkcatalyst.in/wp-content/uploads/2024/02/5.png",
      description: "Seamless IT infrastructure relocation for a corporate headquarters with zero business disruption.",
    },
    {
      title: "CHANNEL SETUP",
      icon: Store,
      image: "https://networkcatalyst.in/wp-content/uploads/2024/02/7.png",
      description: "Establishment of distribution channels for a technology provider, expanding market reach by 50%.",
    },
    {
      title: "AUDIT & ADVISORY",
      icon: FileSearch,
      image: "https://networkcatalyst.in/wp-content/uploads/2024/02/7.png",
      description: "Comprehensive IT audit and advisory services for regulatory compliance and security enhancement.",
    },
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
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0047b3" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <motion.span
            className="text-sm font-medium text-blue-600 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Latest Case Studies
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            CONSULTANCY & SOLUTIONS
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
            Explore our success stories across various industries and discover how our solutions have helped businesses
            overcome challenges and achieve their goals.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-glow"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <study.icon className="h-6 w-6" />
                    </div>
                    <AnimatePresence>
                      {hoveredItem === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <AnimatePresence>
                      {hoveredItem === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-blue-100 mb-4"
                        >
                          {study.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-xl"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 px-8">
            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
