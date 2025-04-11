"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/products", label: "Products" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary py-2 px-4 text-white text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+91-8454903552" className="flex items-center hover:text-blue-200 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91-8454903552</span>
            </a>
            <a
              href="mailto:sales@networkcatalyst.in"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span>sales@networkcatalyst.in</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-200 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-200 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-200 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <motion.nav
        className={cn(
          "py-3 transition-all duration-300",
          scrolled ? "bg-white shadow-md" : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Network Catalyst Logo"
              width={55}
              height={55}
              className="mr-2"
            />
            <div className="flex flex-col">
              <span className="font-bold text-primary text-lg leading-tight">NETWORK CATALYST</span>
              <span className="text-blue-500 text-sm leading-tight">SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button className="bg-primary hover:bg-blue-700 text-white">Contact Us</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 pt-20 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container px-4 py-6 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 hover:text-primary text-lg font-medium py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-blue-700 text-white">Get a Quote</Button>
              </div>
              <div className="pt-4 flex flex-col space-y-4">
                <a href="tel:+91-8454903552" className="flex items-center text-gray-700">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <span>+91-8454903552</span>
                </a>
                <a href="mailto:sales@networkcatalyst.in" className="flex items-center text-gray-700">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <span>sales@networkcatalyst.in</span>
                </a>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://facebook.com" aria-label="Facebook" className="text-primary hover:text-blue-700">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="text-primary hover:text-blue-700">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="text-primary hover:text-blue-700">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
