import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Clock, ShieldCheck, BarChart3 } from "lucide-react"
import heroImage from "@/assets/heroimage.jpg"

export default function Hero() {
  const headlineWords = ["Smarter", "Financial", "Systems"]

  const premiumEase = [0.25, 0.1, 0.25, 1]
  const dramaticEase = [0.16, 1, 0.3, 1]
  const smoothEase = [0.4, 0, 0.2, 1]

  const group = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, ease: premiumEase, delayChildren: 0.2 } }
  }

  const wordDrop = {
    hidden: { opacity: 0, y: -80, scale: 0.8, rotateX: -15, filter: "blur(10px)" },
    visible: {
      opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)",
      transition: { duration: 1.2, ease: dramaticEase, type: "spring", damping: 20, stiffness: 100 }
    }
  }

  const riseUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(6px)" },
    visible: {
      opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
      transition: { duration: 1.0, ease: smoothEase, type: "spring", damping: 25, stiffness: 120 }
    }
  }

  const blurFade = {
    hidden: { opacity: 0, filter: "blur(12px)", scale: 0.98, y: 20 },
    visible: {
      opacity: 1, filter: "blur(0px)", scale: 1, y: 0,
      transition: { duration: 1.4, ease: premiumEase, delay: 0.3 }
    }
  }

  const buttonHover = { scale: 1.02, y: -2, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", transition: { duration: 0.3, ease: smoothEase, type: "spring", damping: 20 } }
  const buttonTap = { scale: 0.98, y: 0, transition: { duration: 0.1 } }

  const floating = { y: [0, -10, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }

  return (
    <section className="relative flex flex-col min-h-screen bg-white text-center px-6 overflow-hidden pt-32">
      {/* Background */}
      <motion.div className="absolute inset-0" animate={floating}>
        <img src={heroImage} alt="abstract background" className="w-full h-full object-cover object-[73%] sm:object-center pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>
      </motion.div>

      {/* Overlay */}
      <motion.div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: premiumEase }} />

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10">
        <div className="max-w-5xl">

          {/* Headline */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-6" variants={group} initial="hidden" animate="visible">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordDrop}
                whileHover={{ scale: 1.05, textShadow: "0 0 30px rgba(255,255,255,0.5)" }}
                className="text-6xl md:text-8xl font-heading font-bold text-white leading-tight cursor-default bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Subheadline + Mission */}
          <motion.div className="mb-10" initial="hidden" animate="visible" variants={group}>
            <motion.h2
              className="text-3xl md:text-5xl font-heading font-medium text-white mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
              variants={riseUp}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}   // ✅ fallback
              whileInView={{ opacity: 1, y: 0 }}
            >
              Thoughtfully Designed
            </motion.h2>
            <motion.p
              className="text-lg md:text-2xl font-sans text-gray-200 max-w-3xl mx-auto leading-relaxed"
              variants={blurFade}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}   // ✅ fallback
              whileInView={{ opacity: 1, y: 0 }}
            >
              We help businesses and startups replace messy spreadsheets and disconnected ERPs
              with integrated, efficient finance systems that save time, improve reliability,
              and unlock better insights.
            </motion.p>
          </motion.div>

          {/* Tagline + CTA */}
          <motion.div className="mt-2 mb-16" initial="hidden" animate="visible" variants={group}>
            <motion.p
              className="text-2xl md:text-4xl font-sans text-gray-200 font-bold mb-8"
              variants={riseUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}   // ✅ fallback
              whileInView={{ opacity: 1, y: 0 }}
            >
              Finance doesn't have to be chaotic
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-5 justify-center mb-6" variants={riseUp}>
              <motion.div whileHover={buttonHover} whileTap={buttonTap} className="relative overflow-hidden rounded-full">
                <Link to="/services" className="relative block px-10 py-4 rounded-full bg-gradient-to-r from-brand-accent via-brand-accent to-brand-accentDark text-white text-lg font-heading font-semibold shadow-lg">
                  <span className="relative z-10">Explore Our Services</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={buttonTap} className="relative overflow-hidden rounded-full">
                <Link to="/contact" className="relative block px-10 py-4 rounded-full bg-white/95 backdrop-blur-sm text-brand-accent text-lg font-heading font-semibold shadow-lg border border-white/20">
                  Book Your Free Discovery Call
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
