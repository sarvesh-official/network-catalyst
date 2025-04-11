"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cloud, Shield, Zap, Monitor, Video, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      icon: Cloud,
      title: "ADVANCED SERVICES",
      items: [
        "Support / Transition",
        "Gap Analysis",
        "Remote Monitor",
        "Planning & Implementation",
        "Current State Assessment",
        "Solution Design",
        "Website Design",
        "Artificial Intelligence",
      ],
    },
    {
      icon: Shield,
      title: "ACCESS CONTROL",
      items: [
        "Authentication and authorization",
        "Vendor Management",
        "IT Planning",
        "Personal identification numbers",
        "Biometric scans",
        "Security tokens",
        "Security compliance programs",
        "Access control software",
      ],
    },
    {
      icon: Zap,
      title: "APEX",
      items: [
        "Easy to use",
        "Easy to test",
        "Multitenant environment",
        "Strongly Typed",
        "Integrated",
        "Demand lighting platform",
        "Cost-effective",
      ],
    },
    {
      icon: Monitor,
      title: "COMMERCIAL SCREEN",
      items: [
        "Complete Digital Display Solutions",
        "One Point Control Software",
        "Long & Quality Life Span",
        "Hi-tech small pixel",
        "Software's",
        "Equipment's On Rental",
        "High-definition full-color LED display",
      ],
    },
    {
      icon: Video,
      title: "CCTV",
      items: [
        "Home security",
        "Office security",
        "Housing society security",
        "Industry smart security",
        "Remote Monitor",
        "Smart security solutions on IoT",
        "Current State Assessment",
        "Solution Design",
      ],
    },
    {
      icon: BookOpen,
      title: "TRAINING & CONSULTANCY",
      items: [
        "Preventive Services",
        "Vendor Management",
        "IT Planning",
        "Proven training programs",
        "Experienced and knowledgeable instructors",
        "Career Counselor",
        "Escalation Management",
        "Coordinated Training Delivery",
      ],
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
    <section ref={ref} className="section-padding relative bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="opacity-5">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#0047b3"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
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
            Our Special
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            SERVICES
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
            We offer a comprehensive range of IT services designed to meet the diverse needs of businesses across
            various industries.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 hover:shadow-glass-hover transition-all duration-300 cursor-glow"
              style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600 mr-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{service.title}</h3>
              </div>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + index * 0.1 }}
                  >
                    <div className="bg-blue-50 rounded-full p-1 mr-2 mt-1">
                      <ArrowRight className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button variant="outline" className="w-full rounded-xl border-blue-200 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
