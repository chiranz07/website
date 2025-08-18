import { motion } from "framer-motion"
import {
  Lightbulb,
  Workflow,
  Handshake,
  TrendingUp,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react"

const points = [
  {
    title: "Financial Expertise + Tech Knowledge",
    description:
      "Our team combines a strong finance background as Chartered Accountants with hands-on experience in modern technology. We don’t just know the numbers—we know how to design systems that make them work smarter.",
    icon: Lightbulb,
  },
  {
    title: "Tailored to Your Workflows",
    description:
      "We don’t just implement — we adapt. Our solutions are customized to align with your processes, so your team enjoys using them without friction.",
    icon: Workflow,
  },
  {
    title: "Beyond Implementation: True Partnership",
    description:
      "We take the time to understand your business challenges and provide thoughtful consulting. Not just configuration, but guidance that helps you make confident, future-proof decisions.",
    icon: Handshake,
  },
  {
    title: "Scaling With You",
    description:
      "Whether you’re a fast-growing startup or a complex enterprise, our solutions are built to grow alongside your business without constant reinvention.",
    icon: TrendingUp,
  },
  {
    title: "Trusted by Clients",
    description:
      "We’ve partnered with businesses across industries, delivering reliable systems that earn trust by producing measurable results.",
    icon: ShieldCheck,
  },
  {
    title: "Design-Driven Simplicity",
    description:
      "We believe finance doesn’t have to be chaotic. Our systems are thoughtfully designed to be intuitive, elegant, and easy for teams to adopt.",
    icon: LayoutDashboard,
  },
]

// Clean fade + slide-up animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function WhyBlumeLabs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-heading font-bold text-brand-accent mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}     // ✅ fallback
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why Blume Labs
        </motion.h2>

        {/* Grid of Reasons */}
        <div className="grid gap-10 md:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"             // ✅ fallback
              whileInView="visible"
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                borderColor: "rgba(59,130,246,0.3)",
              }}
              className="p-8 rounded-2xl bg-white shadow-md border border-gray-100 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <point.icon className="w-12 h-12 mx-auto mb-6 text-brand-accent" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
