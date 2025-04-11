"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      quote:
        "Network Catalyst Solutions transformed our IT infrastructure, resulting in a 40% increase in operational efficiency and significant cost savings.",
      name: "John Smith",
      title: "CTO, Global Banking Corporation",
      image: "/placeholder.svg?height=80&width=80",
      company: "Banking Sector",
    },
    {
      quote:
        "Their expertise in cloud migration was invaluable. The team's professionalism and attention to detail made the transition seamless with zero downtime.",
      name: "Sarah Johnson",
      title: "IT Director, E-Commerce Solutions",
      image: "/placeholder.svg?height=80&width=80",
      company: "E-Commerce",
    },
    {
      quote:
        "The security solutions implemented by Network Catalyst have given us peace of mind. Their proactive approach to cybersecurity has prevented numerous potential threats.",
      name: "Michael Chen",
      title: "CISO, Manufacturing Industries",
      image: "/placeholder.svg?height=80&width=80",
      company: "Manufacturing",
    },
    {
      quote:
        "Working with Network Catalyst on our digital transformation journey has been exceptional. Their team understood our unique challenges and delivered tailored solutions.",
      name: "Priya Patel",
      title: "CEO, Hospitality Group",
      image: "/placeholder.svg?height=80&width=80",
      company: "Hospitality",
    },
  ]

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-[70px] w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
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
            Client Success Stories
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            TESTIMONIALS
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: 80 } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="absolute -top-6 left-10 text-blue-500 opacity-20">
              <Quote className="h-24 w-24" />
            </div>

            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="md:w-1/3 flex flex-col items-center text-center">
                    <div className="relative h-24 w-24 mb-4">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        fill
                        className="rounded-full object-cover border-4 border-blue-100"
                      />
                      <div className="absolute -inset-1 rounded-full border-2 border-blue-200 border-dashed animate-spin-slow"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonials[current].name}</h3>
                    <p className="text-blue-600">{testimonials[current].title}</p>
                    <div className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600">
                      {testimonials[current].company}
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                      "{testimonials[current].quote}"
                    </blockquote>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false)
                      setCurrent(index)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index ? "w-8 bg-blue-600" : "w-2 bg-blue-200"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full h-10 w-10 border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full h-10 w-10 border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
