import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import ERPImage from "@/assets/services/ERP.jpg"
import OptimiseImage from "@/assets/services/Optimise.jpg"
import InsightsImage from "@/assets/services/Insights.jpg"
import WebImage from "@/assets/services/Web.jpg"
import SystemsImage from "@/assets/services/Systems.jpg"
import ComplianceImage from "@/assets/services/Compliance.jpg"

const businessServices = [
  {
    title: "ERP Implementation & Transformation",
    description:
      "Outgrowing your current tools? We design and deploy modern ERP systems (Zoho, Odoo) built around your actual workflows, ensuring a smooth and strategic transition.",
    image: ERPImage,
  },
  {
    title: "ERP Optimization",
    description:
      "Is your current ERP causing more problems than it solves? We audit, clean up, and reconfigure your system to boost efficiency and create a tool your team trusts.",
    image: OptimiseImage,
  },
  {
    title: "Insights & Dashboards",
    description:
      "Stop guessing and start seeing. We turn your raw data into clear, real-time dashboards, providing actionable insights for confident, data-driven decision-making.",
    image: InsightsImage,
  },
  {
    title: "Custom Apps & Automation",
    description:
      "When off-the-shelf software isn’t enough, we build it for you. We create tailored applications and automation tools that solve your unique operational challenges.",
    image: WebImage,
  },
]

const startupServices = [
  {
    title: "Finance Systems Setup",
    description:
      "Get it right from the start. We design and set up scalable finance systems, processes, and tools that support your growth and keep you investor-ready from day one.",
    image: SystemsImage,
  },
  {
    title: "Bookkeeping & Compliance Support",
    description:
      "Focus on your business, not the paperwork. We manage your bookkeeping, compliance, and reporting, ensuring your back-office is structured, accurate, and stress-free.",
    image: ComplianceImage,
  },
]

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("businesses")

  const tabs = {
    businesses: businessServices,
    startups: startupServices,
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f7f7f7] to-white overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-heading font-bold text-brand-accent mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}   // fallback so it always renders
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {["businesses", "startups"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-brand-accent to-brand-accentDark text-white shadow-md"
                  : "bg-white/70 backdrop-blur border border-gray-200 text-gray-700 hover:bg-white"
              }`}
            >
              {tab === "businesses" ? "For Businesses" : "For Startups"}
            </button>
          ))}
        </div>

        {/* Services List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}   // fallback so grid always renders
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid gap-8 sm:grid-cols-2"
          >
            {tabs[activeTab].map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -3, scale: 1.005, boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="group relative p-6 rounded-2xl bg-white/90 backdrop-blur border border-gray-100 shadow-sm text-left overflow-hidden"
              >
                {/* Image */}
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-accent mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
