import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import heroDesktop from "@/assets/hero-desktop.mp4"
import heroMobile from "@/assets/hero-mobile.mp4"

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Desktop Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hidden md:block absolute inset-0 w-full h-full object-cover"
            >
                <source src={heroDesktop} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Mobile Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="block md:hidden absolute inset-0 w-full h-full object-cover"
            >
                <source src={heroMobile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.h1
                    className="text-4xl md:text-5xl font-heading font-bold text-[#1a2732] leading-tight mb-6 drop-shadow-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Smarter Financial Systems. <br /> Thoughtfully Designed.
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-white drop-shadow-md mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    We help startups and growth-stage businesses move from chaotic spreadsheets
                    to clean, scalable, and tech-enabled finance ecosystems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#2a3f50] hover:bg-[#1f2d3a] text-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#2a3f50]/40 transition-all"
                    >
                        <Link to="/contact">Schedule a Discovery Call</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
