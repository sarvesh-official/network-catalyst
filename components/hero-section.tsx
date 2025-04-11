"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Server, Cloud, Shield, Database, Cpu, Zap } from "lucide-react"

export function HeroSection() {
  const [currentKeyword, setCurrentKeyword] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const keywords = ["Efficiency", "Innovation", "Scalability", "Security", "Reliability", "Performance"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [keywords.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingIcons = [
    { Icon: Server, x: "10%", y: "20%", size: "h-8 w-8", delay: 0 },
    { Icon: Server, x: "1%", y: "6%", size: "h-8 w-8", delay: 0 },
    { Icon: Cloud, x: "85%", y: "15%", size: "h-10 w-10", delay: 0.5 },
    { Icon: Cloud, x: "45%", y: "5%", size: "h-10 w-10", delay: 0.5 },
    { Icon: Cloud, x: "55%", y: "15%", size: "h-10 w-10", delay: 0.5 },
    { Icon: Shield, x: "75%", y: "70%", size: "h-8 w-8", delay: 1 },
    { Icon: Shield, x: "25%", y: "70%", size: "h-8 w-8", delay: 1 },
    { Icon: Database, x: "20%", y: "80%", size: "h-6 w-6", delay: 1.5 },
    { Icon: Database, x: "35%", y: "30%", size: "h-6 w-6", delay: 1.5 },
    { Icon: Database, x: "40%", y: "46%", size: "h-6 w-6", delay: 1.5 },
    { Icon: Database, x: "15%", y: "8%", size: "h-6 w-6", delay: 1.5 },
    { Icon: Database, x: "1%", y: "80%", size: "h-6 w-6", delay: 1.5 },
    { Icon: Cpu, x: "50%", y: "52%", size: "h-7 w-7", delay: 2 },
    { Icon: Cpu, x: "56%", y: "79%", size: "h-7 w-7", delay: 2 },
    { Icon: Cpu, x: "90%", y: "24%", size: "h-7 w-7", delay: 2 },
    { Icon: Zap, x: "30%", y: "66%", size: "h-9 w-9", delay: 2.5 },
    { Icon: Zap, x: "80%", y: "30%", size: "h-9 w-9", delay: 2.5 },
    { Icon: Zap, x: "96%", y: "60%", size: "h-9 w-9", delay: 2.5 },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden pt-20 md:pt-0"
      style={
        {
          "--x": `${mousePosition.x}%`,
          "--y": `${mousePosition.y}%`,
        } as React.CSSProperties
      }
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-10"></div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, size, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-500/20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay, duration: 1 }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              delay: delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Icon className={size} />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-screen items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 py-20 md:grid-cols-2">
          {/* Left Column - Animated Keywords */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start justify-center"
          >
            <motion.span
              className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              NETWORK CATALYST SOLUTIONS
            </motion.span>


            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl leading-relaxed">
              Enterprise IT Solutions for
              <span className="relative h-[60px] md:h-[70px] lg:h-[80px] ml-3">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentKeyword}
                    className="absolute left-0 gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {keywords[currentKeyword]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <motion.p
              className="mb-8 max-w-lg text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We transform businesses through cutting-edge technology solutions and expert IT consulting services,
              helping you stay ahead in today's digital landscape.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="rounded-full bg-blue-600 px-8 hover:bg-blue-700">
                Explore Solutions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px]">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-blue-400/20 backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(37, 99, 235, 0.1)",
                    "0 0 20px rgba(37, 99, 235, 0.3)",
                    "0 0 0 rgba(37, 99, 235, 0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <Image
                src="https://networkcatalyst.in/wp-content/uploads/2024/02/Various-Sectors.jpg"
                alt="Enterprise IT Solutions"
                fill
                className="object-cover p-8"
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <Server className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Servers Managed</p>
                  <p className="text-xl font-bold text-gray-900">5,000+</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 top-1/4 rounded-2xl bg-white p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Security Rating</p>
                  <p className="text-xl font-bold text-gray-900">99.9%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden">
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
      </div> */}
    </section>
  )
}
