import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import logo from "@/assets/logo.png"

const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const getCurrentPageName = () => {
        const currentPath = location.pathname
        const currentLink = links.find(link => {
            if (link.path === "/" && currentPath === "/") return true
            if (link.path !== "/" && currentPath.startsWith(link.path)) return true
            return false
        })
        return currentLink ? currentLink.name : "Home"
    }

    return (
        <>
            <nav className="fixed top-4 left-1/2 -translate-x-1/2
    w-[90%] max-w-6xl flex items-center justify-between
    px-8 py-3 rounded-full
    bg-gradient-to-r from-white/20 via-white/10 to-white/20
    backdrop-blur-xl border border-white/20
    shadow-lg shadow-black/10 z-50">

                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Blume Labs Logo"
                        className="h-9 w-auto md:h-11 lg:h-12"
                    />
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="flex gap-6 lg:gap-8 text-sm lg:text-base font-medium relative">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end
                                className="relative pb-1 text-black transition-colors duration-200 hover:text-brand-accentDark"
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute left-0 right-0 h-[2px] bg-brand-accent bottom-0"
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Mobile controls */}
                <div className="md:hidden flex items-center gap-3">
                    <span className="text-sm font-medium text-black">
                        {getCurrentPageName()}
                    </span>
                    <div className="w-px h-5 bg-brand-accent/20"></div>
                    <button
                        className="text-black z-[100000]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <div className="md:hidden">
                        {/* Dark Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="fixed inset-0 bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm"
                            style={{
                                zIndex: 99998,
                                width: '100vw',
                                height: '100vh',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* White Drawer */}
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                duration: 0.4
                            }}
                            className="fixed top-0 right-0 h-full w-80 max-w-[85vw]"
                            style={{
                                backgroundColor: "#ffffff",
                                zIndex: 99999,
                                boxShadow: "-8px 0 32px rgba(0, 0, 0, 0.12), -2px 0 8px rgba(0, 0, 0, 0.08)",
                                borderLeft: "1px solid rgba(0, 0, 0, 0.05)"
                            }}
                        >
                            <div
                                className="absolute top-0 left-0 right-0 h-[1px]"
                                style={{
                                    background: "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)"
                                }}
                            />

                            {/* Drawer Content */}
                            <div className="flex flex-col h-full p-8" style={{ backgroundColor: "#ffffff" }}>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="self-end mb-12 text-black hover:text-brand-accent transition-all duration-300 p-2 rounded-full hover:bg-gray-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X size={24} />
                                </motion.button>

                                {/* Navigation Links */}
                                <nav className="flex flex-col space-y-2">
                                    {links.map((link, index) => (
                                        <motion.div
                                            key={link.path}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{
                                                delay: index * 0.1 + 0.2,
                                                duration: 0.4,
                                                ease: "easeOut"
                                            }}
                                        >
                                            <NavLink
                                                to={link.path}
                                                end
                                                onClick={() => setIsOpen(false)}
                                                className="relative block text-xl font-medium text-black hover:text-brand-accent transition-all duration-300 py-4 px-4 rounded-lg hover:bg-gray-50/80 group"
                                            >
                                                {({ isActive }) => (
                                                    <>
                                                        <motion.span
                                                            className="relative z-10"
                                                            whileHover={{ x: 4 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                        >
                                                            {link.name}
                                                        </motion.span>

                                                        {isActive && (
                                                            <motion.div
                                                                layoutId="mobile-active-bg"
                                                                className="absolute inset-0 bg-brand-accent/5 rounded-lg border-l-4 border-brand-accent"
                                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                            />
                                                        )}

                                                        <motion.div
                                                            className="absolute left-0 top-1/2 w-1 h-0 bg-brand-accent rounded-full"
                                                            whileHover={{ height: "60%" }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                            style={{ y: "-50%" }}
                                                        />
                                                    </>
                                                )}
                                            </NavLink>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Drawer Footer with Logo */}
                                <div className="flex-grow" />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.4 }}
                                    className="mt-8 pt-6 border-t border-gray-100/80 flex justify-center"
                                >
                                    <NavLink to="/" onClick={() => setIsOpen(false)} className="flex items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                                        <img
                                            src={logo}
                                            alt="Blume Labs Logo"
                                            className="h-16 w-auto"
                                        />
                                    </NavLink>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
