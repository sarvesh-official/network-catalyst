"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Factory, Building2, ShoppingBag, Utensils } from "lucide-react"

export function SectorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const sectors = [
    {
      icon: Factory,
      title: "MANUFACTURING-PLANT OFFICE",
      points: [
        "Passive and networking",
        "CCTV installation",
        "Servers and endpoints installation",
        "Project Business of 1 Crore rupees",
        "Location - PAN India",
      ],
    },
    {
      icon: Building2,
      title: "BANKING /BFSI",
      points: [
        "Electrical, networking, endpoint, servers",
        "Market Served – Banking",
        "Project Business of 1.5 Crore rupees",
        "20 + Branches covered across India",
      ],
    },
    {
      icon: ShoppingBag,
      title: "E-COMMERCE/IT-ITES",
      points: [
        "CCTV Surveillance installation, wi-fi solution in 80 thousand sq.ft",
        "Networking and endpoint setup in warehouse and office",
        "Market Served – Large E-Commerce Project Business of 25 lakhs for each warehouse",
        "5 Warehouse Covered",
      ],
    },
    {
      icon: Utensils,
      title: "HOSPITALITY - HOTELS | RESTAURANTS",
      points: [
        "Server-client setup software licensing installation",
        "Market Served – Hotel Chain Business with 4500+ Hotels",
        "Project Business of INR 7 Crore rupees in one Financial year for 3 consecutive years",
        "Deployed WI-FI,CCTVEPBX in 1500+ Hotels across India",
      ],
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
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-[70px] w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50"
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
            Experience
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Various Sectors Experience
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
            We have extensive experience working with clients across various industries, delivering tailored solutions
            to meet their specific needs.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sectors.map((sector, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass-card h-full rounded-2xl overflow-hidden cursor-glow">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-6 flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <sector.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{sector.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {sector.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-3 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
