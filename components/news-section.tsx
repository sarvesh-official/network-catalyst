"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const news = [
    {
      title: "Unlocking Business Potential: The Role of an IT System Integrator",
      date: "April 5, 2023",
      image: "/placeholder.svg?height=200&width=400",
      excerpt:
        "Discover how IT system integrators can help businesses streamline operations and maximize efficiency through integrated technology solutions.",
    },
    {
      title: "Empowering Businesses through Expert IT Solutions",
      date: "March 15, 2023",
      image: "/placeholder.svg?height=200&width=400",
      excerpt:
        "Learn how our expert IT solutions are helping businesses of all sizes overcome technical challenges and achieve their goals.",
    },
    {
      title: "Navigating Digital Transformation: Maximizing Business Potential",
      date: "February 28, 2023",
      image: "/placeholder.svg?height=200&width=400",
      excerpt:
        "Explore the key strategies for successful digital transformation and how it can unlock new opportunities for your business.",
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
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.span
            className="text-sm font-medium text-blue-600 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Stay Updated
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Latest News
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {news.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="pt-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">{item.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 hover:bg-transparent">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
