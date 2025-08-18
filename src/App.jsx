import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ScrollToTop from "@/components/ScrollToTop"

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={<PageWrapper><Home /></PageWrapper>}
                />
                <Route
                    path="/services"
                    element={<PageWrapper><Services /></PageWrapper>}
                />
                <Route
                    path="/about"
                    element={<PageWrapper><About /></PageWrapper>}
                />
                <Route
                    path="/contact"
                    element={<PageWrapper><Contact /></PageWrapper>}
                />
            </Routes>
        </AnimatePresence>
    )
}

function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-[70vh]" // keeps layout stable
        >
            {children}
        </motion.div>
    )
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-brand-bg">
                <Navbar />
                <main className="flex-grow">
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
