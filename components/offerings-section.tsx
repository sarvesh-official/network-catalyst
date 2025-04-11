"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Cloud, Server, BookOpen, ArrowRight, Zap, Shield, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function OfferingsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("advance")

  const offerings = [
    {
      id: "advance",
      title: "ADVANCE SERVICES",
      description:
        "We provide you with solutions and recommendations regarding the upcoming technologies like Web Designing, Remote Monitor, Cloud and Artificial Intelligence to ensure that your organization has that edge in the market during digital transformation.",
      icon: Cloud,
      features: [
        "Web Design & Development",
        "Remote Monitoring Solutions",
        "Cloud Infrastructure",
        "Artificial Intelligence Integration",
        "Digital Transformation Strategy",
      ],
    },
    {
      id: "infrastructure",
      title: "INFRASTRUCTURE & INTEGRATION",
      description:
        "We bring together a range of disparate technologies, starting from enterprise sever and network router to security cameras, as a single network architecture so that you can realize the benefits of innovation and flexibility.",
      icon: Server,
      features: [
        "Enterprise Server Solutions",
        "Network Architecture Design",
        "Security Camera Integration",
        "Unified Communications",
        "Hardware & Software Integration",
      ],
    },
    {
      id: "training",
      title: "TRAINING & CONSULTANCY",
      description:
        "Digital transformation can be overwhelming. We provide you with training and consultancy to understand the right mix of technology, applications, and solutions to maximize your performance.",
      icon: BookOpen,
      features: [
        "Technology Adoption Training",
        "IT Strategy Consulting",
        "Digital Transformation Workshops",
        "Custom Training Programs",
        "Technical Documentation",
      ],
    },
    {
      id: "security",
      title: "SECURITY SOLUTIONS",
      description:
        "Protect your business with our comprehensive security solutions that safeguard your data, infrastructure, and applications from evolving cyber threats and vulnerabilities.",
      icon: Shield,
      features: [
        "Threat Detection & Prevention",
        "Data Encryption Services",
        "Security Audits & Compliance",
        "Identity & Access Management",
        "Endpoint Protection",
      ],
    },
    {
      id: "cloud",
      title: "CLOUD SOLUTIONS",
      description:
        "Leverage the power of cloud computing with our comprehensive suite of cloud services designed to enhance scalability, reduce costs, and improve operational efficiency.",
      icon: Database,
      features: [
        "Cloud Migration Services",
        "Hybrid Cloud Solutions",
        "Cloud-Native Application Development",
        "Serverless Architecture",
        "Cloud Security & Compliance",
      ],
    },
    {
      id: "automation",
      title: "AUTOMATION & OPTIMIZATION",
      description:
        "Streamline your business processes with intelligent automation solutions that reduce manual effort, minimize errors, and maximize operational efficiency.",
      icon: Zap,
      features: [
        "Business Process Automation",
        "IT Process Optimization",
        "Workflow Automation",
        "RPA (Robotic Process Automation)",
        "Performance Monitoring & Optimization",
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="section-padding relative bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.span className="text-sm font-medium text-blue-600 uppercase tracking-wider" variants={itemVariants}>
            What We Offering
          </motion.span>
          <motion.h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 gradient-text" variants={itemVariants}>
            OUR OFFERINGS
          </motion.h2>
          <motion.div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" variants={itemVariants}></motion.div>
          <motion.p className="max-w-2xl mx-auto mt-6 text-gray-600" variants={itemVariants}>
            We provide comprehensive IT solutions tailored to your business needs, helping you navigate the digital
            landscape with confidence.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="advance" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-blue-50 p-1 rounded-xl mb-8">
            {offerings.map((offering) => (
              <TabsTrigger
                key={offering.id}
                value={offering.id}
                className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md rounded-lg transition-all duration-200"
              >
                <offering.icon className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">{offering.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {offerings.map((offering) => (
            <TabsContent key={offering.id} value={offering.id} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={offering.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl p-8 cursor-glow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-xl text-blue-600 mr-4">
                          <offering.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{offering.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{offering.description}</p>
                      <Button className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="bg-blue-50/50 rounded-xl p-6">
                      <h4 className="font-medium text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {offering.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                              <ArrowRight className="h-3 w-3 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
