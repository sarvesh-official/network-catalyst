"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Check, Edit, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Edit,
      title: "Easy To Edit Process",
      description: "Many aspects of computing and technology and the term is more recognizable than before.",
    },
    {
      icon: Check,
      title: "WordPress Capitable Design",
      description: "Many aspects of computing and technology and the term is more recognizable than before.",
    },
    {
      icon: Heart,
      title: "Enjoy Our Work",
      description: "Passionate about delivering excellence through our work, creating experiences that inspire",
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
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.span
            className="text-sm font-medium text-blue-600 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Welcome To Network Catalyst
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 80 } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="About Network Catalyst"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-[200px]">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed">
              Network Catalyst Solutions is a technology consulting and solutions company helping organizations to gain
              edge in the market by solving business challenges, optimizing costs and enhancing efficiency through
              Industry standard Infrastructure, transforming and innovative solutions, IT management and more.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-6 mt-8">
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More About Us</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
