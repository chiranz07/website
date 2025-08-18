import { motion } from "framer-motion"
import {
  CheckCircle,
  Lightbulb,
  Wrench,
  BarChart3,
  Laptop,
  Briefcase,
  Rocket,
} from "lucide-react"
import { Link } from "react-router-dom"

// Service images (same as homepage)
import ERPImage from "@/assets/services/ERP.jpg"
import OptimiseImage from "@/assets/services/Optimise.jpg"
import InsightsImage from "@/assets/services/Insights.jpg"
import WebImage from "@/assets/services/Web.jpg"
import SystemsImage from "@/assets/services/Systems.jpg"
import ComplianceImage from "@/assets/services/Compliance.jpg"

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
}

export default function Services() {
  return (
    <div className="bg-white scroll-smooth">
      {/* Hero */}
      <section className="text-center pt-40 pb-24 bg-gradient-to-b from-[#f7f9fb] to-white">
        <h1 className="text-5xl md:text-6xl font-bold text-[#2a3f50] mb-6">
          Our Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
          Smarter Financial Systems. Thoughtfully Designed.
        </p>

        {/* Intro Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
          At Blume Labs, we specialize in making your finance transformation
          smooth, strategic, and stress-free. With deep roots in both finance
          and technology, we guide businesses through every step of their
          migration journey — from clunky spreadsheets and broken ERPs to
          streamlined, scalable ecosystems that actually work.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6">
          <a
            href="#for-businesses"
            className="px-8 py-4 rounded-full bg-brand-accent text-white font-semibold hover:bg-brand-accentDark transition-colors shadow text-lg"
          >
            For Businesses
          </a>
          <a
            href="#for-startups"
            className="px-8 py-4 rounded-full bg-gray-200 text-[#2a3f50] font-semibold hover:bg-gray-300 transition-colors text-lg"
          >
            For Startups
          </a>
        </div>
      </section>

      {/* ================== For Businesses ================== */}
      <SectionIntro
        id="for-businesses"
        title="For Businesses"
        tagline="Smooth, strategic, and stress-free finance transformation."
      />

      <ServiceBlock
        title="ERP Implementation & Transformation"
        icon={<Lightbulb className="w-8 h-8 text-brand-accent" />}
        desc="Outgrowing spreadsheets? Switching from a legacy system? We build modern finance infrastructure from the ground up."
        bullets={[
          "Deep-dive into your processes and pain points",
          "Strategic selection of ERP platforms (Zoho, Odoo)",
          "Cloud-based deployment and setup",
          "Custom module configuration",
          "Training and support to ensure adoption",
        ]}
        why="Proper ERP implementation ensures your tools work for your team — reducing chaos, boosting adoption, and unlocking scale."
        image={ERPImage}
        reverse={false}
      />

      <ServiceBlock
        title="ERP Optimization"
        icon={<Wrench className="w-8 h-8 text-brand-accent" />}
        desc="Already using an ERP but not seeing results? We clean up and supercharge what’s already there."
        bullets={[
          "Deep system audit",
          "Clean-up of poor or rushed implementations",
          "Reconfiguration of modules to match workflows",
          "Streamlining and automation of finance tasks",
          "Improved adoption and usability",
        ]}
        why="Optimized ERPs save time, cut frustration, and help your team actually use the system with confidence."
        image={OptimiseImage}
        reverse={true}
      />

      <ServiceBlock
        title="Insights & Dashboards"
        icon={<BarChart3 className="w-8 h-8 text-brand-accent" />}
        desc="Collecting data but not analyzing it? Let’s turn numbers into narratives."
        bullets={[
          "Custom dashboards for finance and operations",
          "Real-time reporting with KPIs that matter",
          "Automated visual insights",
          "Integration of ERPs, Excel, and other tools",
          "Decision-support tools that simplify complexity",
        ]}
        why="Turning raw data into insights gives leaders clarity to make smarter, faster, and more confident decisions."
        image={InsightsImage}
        reverse={false}
      />

      <ServiceBlock
        title="Custom Apps & Automation"
        icon={<Laptop className="w-8 h-8 text-brand-accent" />}
        desc="Outgrowing your current tools or stuck with workarounds? We build what off-the-shelf software can’t."
        bullets={[
          "Custom web applications for finance and operations",
          "Automation tools for reporting, reconciliation, approvals",
          "Excel VBA automation for complex modeling",
          "System integrations (ERP, CRM, Excel, etc.)",
          "Scalable tech built for your processes",
        ]}
        why="Custom tools bridge the gap between your workflows and rigid software — giving you exactly what your business needs."
        image={WebImage}
        reverse={true}
      />

      {/* ================== For Startups ================== */}
      <SectionIntro
        id="for-startups"
        title="For Startups"
        tagline="Laying the right financial foundation from Day One."
      />

      <ServiceBlock
        title="Finance Systems Setup"
        icon={<Briefcase className="w-8 h-8 text-brand-accent" />}
        desc="Startups move fast — but your finance systems shouldn’t be an afterthought. We design scalable systems from day one."
        bullets={[
          "Selection of the right tools (Zoho, Odoo, Excel, etc.)",
          "Setup and configuration aligned with your workflows",
          "SOPs (Standard Operating Procedures) for finance processes",
          "Dashboard design and automation setup",
          "Built-in scalability for fundraising and growth",
        ]}
        why="Proper systems from Day One reduce errors, prevent chaos, and keep you investor-ready."
        image={SystemsImage}
        reverse={false}
      />

      <ServiceBlock
        title="Bookkeeping & Compliance Support"
        icon={<CheckCircle className="w-8 h-8 text-brand-accent" />}
        desc="As a founder, your time is best spent running the business — not buried in spreadsheets. We handle your back-office so you can focus on growth."
        bullets={[
          "Cloud-based bookkeeping structured for scale",
          "TDS, GST, and other compliance filings",
          "Audits and statutory financial reporting",
          "Payroll-related compliance (PF, ESI, PT, etc.)",
          "MIS reporting and dashboards",
          "Coordination with auditors and investors",
        ]}
        why="Strong bookkeeping and compliance builds trust with investors, auditors, and employees — while freeing you to focus on growth."
        image={ComplianceImage}
        reverse={true}
      />

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2a3f50] to-[#1f2d3a] py-24 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to replace finance chaos with clarity?
        </h2>
        <Link
          to="/contact"
          className="inline-block px-10 py-5 bg-white text-[#2a3f50] text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100"
        >
          Schedule a Discovery Call
        </Link>
      </section>
    </div>
  )
}

/* ===== Section Intro with Animated Icons ===== */
function SectionIntro({ id, title, tagline }) {
  const icon =
    title === "For Businesses" ? (
      <Briefcase className="w-9 h-9 text-brand-accent" />
    ) : title === "For Startups" ? (
      <Rocket className="w-9 h-9 text-brand-accent" />
    ) : null

  return (
    <section
      id={id}
      className="max-w-6xl mx-auto px-6 py-24 text-center scroll-mt-28"
    >
      {/* Title + Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}          // ✅ fallback
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mb-4"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#2a3f50]">
          {title}
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}   // ✅ fallback
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {icon}
        </motion.div>
      </motion.div>

      {/* Underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}                // ✅ fallback
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-28 h-1 bg-gradient-to-r from-brand-accent to-brand-accentDark mx-auto mb-8 rounded-full origin-center"
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}         // ✅ fallback
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-xl text-gray-700 max-w-3xl mx-auto"
      >
        {tagline}
      </motion.p>
    </section>
  )
}

/* ===== ServiceBlock (separate mobile & desktop markup) ===== */
function ServiceBlock({ title, icon, desc, bullets, why, image, reverse }) {
  return (
    <section className={`${reverse ? "bg-white" : "bg-gray-50"} py-16 md:py-24`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* ---- MOBILE VERSION ---- */}
        <div className="md:hidden">
          {/* Heading */}
          <div className="flex items-center gap-3">
            {icon}
            <h3 className="text-3xl font-bold text-[#2a3f50]">{title}</h3>
          </div>

          {/* Image */}
          <motion.img
            src={image}
            alt={title}
            className="w-full h-auto rounded-2xl shadow-lg object-cover mt-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}       // ✅ fallback
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-accentDark rounded-full my-6" />

          {/* Description */}
          <p className="text-lg text-gray-700 mb-6">{desc}</p>

          {/* Bullets */}
          <ul className="space-y-3">
            {bullets.map((item, i) => (
              <motion.li
                key={i}
                variants={bulletVariants}
                initial="hidden"
                whileInView="visible"            // bullet text is always visible
                viewport={{ once: true }}
                custom={i}
                className="flex gap-2 text-base text-gray-700"
              >
                <CheckCircle className="w-6 h-6 text-brand-accent flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Why box */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}       // ✅ fallback
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 p-6 rounded-xl bg-brand-accent/5 border border-brand-accent/10"
          >
            <h4 className="text-lg font-semibold text-[#2a3f50] mb-2">Why it matters</h4>
            <p className="text-base text-gray-700">{why}</p>
          </motion.div>
        </div>

        {/* ---- DESKTOP VERSION ---- */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Image (left when !reverse, right when reverse) */}
          {!reverse && (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}     // ✅ fallback
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          )}

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}       // ✅ fallback
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              {icon}
              <h3 className="text-4xl font-bold text-[#2a3f50]">{title}</h3>
            </div>

            <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-accentDark rounded-full mb-6" />

            <p className="text-xl text-gray-700 mb-6">{desc}</p>

            <ul className="space-y-3">
              {bullets.map((item, i) => (
                <motion.li
                  key={i}
                  variants={bulletVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex gap-2 text-lg text-gray-700"
                >
                  <CheckCircle className="w-6 h-6 text-brand-accent flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}     // ✅ fallback
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-xl bg-brand-accent/5 border border-brand-accent/10"
            >
              <h4 className="text-xl font-semibold text-[#2a3f50] mb-2">Why it matters</h4>
              <p className="text-base text-gray-700">{why}</p>
            </motion.div>
          </motion.div>

          {reverse && (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}     // ✅ fallback
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
