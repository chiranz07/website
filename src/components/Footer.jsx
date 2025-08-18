import { NavLink } from "react-router-dom"
import { Linkedin, Mail } from "lucide-react"
import logo from "@/assets/logo.png"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-b from-white to-[#f7f9fb] text-gray-600 pt-12 pb-6 relative">
            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200" />

            <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3 items-center text-center md:text-left">
                {/* Logo + Tagline */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <NavLink to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Blume Labs Logo" className="h-10 w-auto" />
                    </NavLink>
                    <p className="text-sm text-gray-500 max-w-xs">
                        Smarter Financial Systems. Thoughtfully Designed.
                    </p>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 font-medium">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Services", path: "/services" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" },
                    ].map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end
                            className="text-gray-600 hover:text-[#2a3f50] transition-colors duration-200"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-end gap-5">
                    <a
                        href="https://www.linkedin.com/company/blumelabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                    >
                        <Linkedin className="w-5 h-5 text-[#2a3f50]" />
                    </a>
                    <a
                        href="mailto:hello@blumelabs.com"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                    >
                        <Mail className="w-5 h-5 text-[#2a3f50]" />
                    </a>
                </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                © {year} Blume Labs — All Rights Reserved
            </div>
        </footer>
    )
}
