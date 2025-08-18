import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Clock, ShieldCheck, BarChart3 } from "lucide-react"
import heroImage from "@/assets/heroimage.jpg"

export default function Hero() {
    const headlineWords = ["Smarter", "Financial", "Systems"]

    // Premium easing curves
    const premiumEase = [0.25, 0.1, 0.25, 1] // Material Design easing
    const dramaticEase = [0.16, 1, 0.3, 1] // Dramatic entrance
    const smoothEase = [0.4, 0, 0.2, 1] // Smooth bounce

    const group = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                ease: premiumEase,
                delayChildren: 0.2
            }
        }
    }

    // Enhanced word drop with rotation and scale
    const wordDrop = {
        hidden: {
            opacity: 0,
            y: -80,
            scale: 0.8,
            rotateX: -15,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: dramaticEase,
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    }

    // Sophisticated rise up with parallax feel
    const riseUp = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95,
            filter: "blur(6px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.0,
                ease: smoothEase,
                type: "spring",
                damping: 25,
                stiffness: 120
            }
        }
    }

    // Elegant blur fade with scale
    const blurFade = {
        hidden: {
            opacity: 0,
            filter: "blur(12px)",
            scale: 0.98,
            y: 20
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            y: 0,
            transition: {
                duration: 1.4,
                ease: premiumEase,
                delay: 0.3
            }
        }
    }

    // Premium button hover animations
    const buttonHover = {
        scale: 1.02,
        y: -2,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: {
            duration: 0.3,
            ease: smoothEase,
            type: "spring",
            damping: 20
        }
    }

    const buttonTap = {
        scale: 0.98,
        y: 0,
        transition: { duration: 0.1 }
    }

    // Floating animation for background
    const floating = {
        y: [0, -10, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }

    // Shimmer effect keyframes
    const shimmer = {
        backgroundPosition: ["200% 0", "-200% 0"],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
        }
    }

    return (
        <section className="relative flex flex-col min-h-screen bg-white text-center px-6 overflow-hidden pt-32">
            {/* Enhanced Background with floating effect */}
            <motion.div
                className="absolute inset-0"
                animate={floating}
            >
                <img
                    src={heroImage}
                    alt="abstract background"
                    className="w-full h-full object-cover object-[73%] sm:object-center pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>
            </motion.div>

            {/* Animated overlay gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: premiumEase }}
            />

            {/* Content */}
            <div className="flex-grow flex flex-col justify-center items-center relative z-10">
                <div className="max-w-5xl">

                    {/* Group 1: Enhanced Headline with individual word animations */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-6"
                        variants={group}
                        initial="hidden"
                        animate="visible"
                    >
                        {headlineWords.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={wordDrop}
                                whileHover={{
                                    scale: 1.05,
                                    textShadow: "0 0 30px rgba(255,255,255,0.5)",
                                    transition: { duration: 0.3, ease: smoothEase }
                                }}
                                className="text-6xl md:text-8xl font-heading font-bold text-white leading-tight cursor-default
                                           bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #d0d0d0 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Group 2: Enhanced Subheadline + Mission */}
                    <motion.div
                        className="mb-10"
                        initial="hidden"
                        animate="visible"
                        variants={group}
                    >
                        <motion.h2
                            className="text-3xl md:text-5xl font-heading font-medium text-white mb-8
                                       bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
                            variants={riseUp}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3, ease: smoothEase }
                            }}
                        >
                            Thoughtfully Designed
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-2xl font-sans text-gray-200 max-w-3xl mx-auto leading-relaxed"
                            variants={blurFade}
                        >
                            We help businesses and startups replace messy spreadsheets and disconnected ERPs
                            with integrated, efficient finance systems that save time, improve reliability,
                            and unlock better insights.
                        </motion.p>
                    </motion.div>

                    {/* Group 3: Enhanced Tagline + CTA */}
                    <motion.div
                        className="mt-2 mb-16"
                        initial="hidden"
                        animate="visible"
                        variants={group}
                    >
                        <motion.p
                            className="text-2xl md:text-4xl font-sans text-gray-200 font-bold mb-8"
                            variants={riseUp}
                            whileHover={{
                                scale: 1.02,
                                color: "#ffffff",
                                transition: { duration: 0.3, ease: smoothEase }
                            }}
                        >
                            Finance doesn't have to be chaotic
                        </motion.p>

                        {/* Enhanced CTA buttons with premium animations */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-5 justify-center mb-6"
                            variants={riseUp}
                        >
                            <motion.div
                                whileHover={buttonHover}
                                whileTap={buttonTap}
                                className="relative overflow-hidden rounded-full"
                            >
                                <Link
                                    to="/services"
                                    className="relative block px-10 py-4 rounded-full bg-gradient-to-r from-brand-accent via-brand-accent to-brand-accentDark
                                               text-white text-lg font-heading font-semibold shadow-lg
                                               before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                                               before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700"
                                >
                                    <span className="relative z-10">From Chaos to Clarity</span>
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    y: -2,
                                    boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.15)",
                                    transition: { duration: 0.3, ease: smoothEase }
                                }}
                                whileTap={buttonTap}
                                className="relative overflow-hidden rounded-full"
                            >
                                <Link
                                    to="/contact"
                                    className="relative block px-10 py-4 rounded-full bg-white/95 backdrop-blur-sm text-brand-accent
                                               text-lg font-heading font-semibold shadow-lg border border-white/20
                                               hover:bg-white hover:text-brand-accentDark transition-all duration-300"
                                >
                                    Book Your Free Discovery Call
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Enhanced Scroll Down Hint */}
                        <motion.div
                            className="mt-1"
                            variants={riseUp}
                            animate={{
                                y: [0, -8, 0],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <p className="text-sm md:text-base font-semibold text-gray-200">
                                ↓ Scroll down to learn more
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Group 4: Premium Icons with enhanced interactions */}
            <motion.div
                className="absolute bottom-3 left-1/2 -translate-x-1/2
                           hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-12 text-gray-200"
                initial="hidden"
                animate="visible"
                variants={group}
            >
                <motion.div
                    className="flex flex-col items-center group cursor-default"
                    variants={riseUp}
                    whileHover={{
                        y: -8,
                        scale: 1.05,
                        transition: {
                            duration: 0.4,
                            ease: smoothEase,
                            type: "spring",
                            damping: 15
                        }
                    }}
                >
                    <motion.div
                        className="relative"
                        whileHover={{
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.6, ease: smoothEase }
                        }}
                    >
                        <Clock className="w-8 h-8 mb-3 text-white group-hover:text-brand-accent transition-colors duration-300" />
                        <motion.div
                            className="absolute -inset-2 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <motion.p
                        className="text-sm md:text-base group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                    >
                        Save Time
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center group cursor-default"
                    variants={riseUp}
                    whileHover={{
                        y: -8,
                        scale: 1.05,
                        transition: {
                            duration: 0.4,
                            ease: smoothEase,
                            type: "spring",
                            damping: 15
                        }
                    }}
                >
                    <motion.div
                        className="relative"
                        whileHover={{
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.6, ease: smoothEase }
                        }}
                    >
                        <ShieldCheck className="w-8 h-8 mb-3 text-white group-hover:text-brand-accent transition-colors duration-300" />
                        <motion.div
                            className="absolute -inset-2 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <motion.p
                        className="text-sm md:text-base group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                    >
                        Improve Reliability
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center group cursor-default"
                    variants={riseUp}
                    whileHover={{
                        y: -8,
                        scale: 1.05,
                        transition: {
                            duration: 0.4,
                            ease: smoothEase,
                            type: "spring",
                            damping: 15
                        }
                    }}
                >
                    <motion.div
                        className="relative"
                        whileHover={{
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.6, ease: smoothEase }
                        }}
                    >
                        <BarChart3 className="w-8 h-8 mb-3 text-white group-hover:text-brand-accent transition-colors duration-300" />
                        <motion.div
                            className="absolute -inset-2 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <motion.p
                        className="text-sm md:text-base group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                    >
                        Unlock Insights
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Ambient light particles effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 3, delay: 1 }}
            >
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                    />
                ))}
            </motion.div>
        </section>
    )
}