"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Send, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <footer ref={ref} className="bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-300 blur-3xl"></div>
      </div>

      {/* Top Wave */}
      <div className="wave-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container-custom pt-24 pb-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-3 bg-white rounded-full p-2">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Network Catalyst Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">NETWORK CATALYST</span>
                <span className="text-blue-200 text-sm leading-tight">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-blue-100 text-sm mt-4">
              Network Catalyst Solutions is a technology consulting and solutions company helping organizations gain
              edge in the market through innovative IT infrastructure, solutions, and management.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Youtube, href: "https://youtube.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.Icon.name}
                  className="bg-blue-800/50 hover:bg-blue-700 p-2 rounded-full transition-colors"
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Case Studies", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-blue-100 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Advanced Services",
                "Infrastructure & Integration",
                "Training & Consultancy",
                "Access Control",
                "CCTV Solutions",
                "Cloud Services",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-blue-100 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-blue-300" />
                <span className="text-blue-100">Network Catalyst Solutions, Mumbai, India</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-blue-300" />
                <a href="tel:+91-8454903552" className="text-blue-100 hover:text-white transition-colors">
                  +91-8454903552
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-blue-300" />
                <a href="mailto:sales@networkcatalyst.in" className="text-blue-100 hover:text-white transition-colors">
                  sales@networkcatalyst.in
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-blue-800/50 border-blue-700 text-white placeholder:text-blue-300 rounded-l-xl focus-visible:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-500 rounded-r-xl rounded-l-none">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-blue-800 mt-12 pt-6 text-center text-sm text-blue-200"
        >
          <p>&copy; {currentYear} Network Catalyst Solutions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
