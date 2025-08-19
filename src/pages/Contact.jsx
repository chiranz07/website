import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [service, setService] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const formData = new FormData(e.target)

    try {
      const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzbxJxytIISSM8M7Xa1YlUKi6u_DcBLJsqz7PtOiVGnm84CYYEPrATW6__Y92O2QBpb/exec",
          {
            method: "POST",
            body: formData,
          }
      )

      if (response.ok) {
        setSuccess(true)
        e.target.reset()
        setService("")
      } else {
        console.error("Submission failed", await response.text())
      }
    } catch (err) {
      console.error("Submission error", err)
    } finally {
      setLoading(false)
    }
  }

  return (
      <div className="bg-white">
        {/* Hero */}
        <section className="text-center pt-40 pb-16 bg-gradient-to-b from-[#f7f9fb] to-white">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2a3f50] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to replace finance chaos with clarity?
            Fill out the form or book a call directly below.
          </p>
        </section>

        {/* Two Column Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-8 space-y-6 border"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="you@company.com"
                />
              </div>
            </div>

            {/* Company + City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="Company Name (optional)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                    type="text"
                    name="city"
                    autoComplete="address-level2"
                    className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:ring-brand-accent focus:border-brand-accent"
                    placeholder="e.g. Mumbai"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interested Service</label>
              <select
                  name="service"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:ring-brand-accent focus:border-brand-accent"
              >
                <option value="">Select a service</option>
                <option value="ERP Implementation & Transformation">ERP Implementation & Transformation</option>
                <option value="ERP Optimization">ERP Optimization</option>
                <option value="Insights & Dashboards">Insights & Dashboards</option>
                <option value="Custom Apps & Automation">Custom Apps & Automation</option>
                <option value="Finance Systems Setup">Finance Systems Setup</option>
                <option value="Bookkeeping & Compliance Support">Bookkeeping & Compliance Support</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* If "Other" selected */}
            {service === "Other" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Please describe</label>
                  <input
                      type="text"
                      name="otherService"
                      className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:ring-brand-accent focus:border-brand-accent"
                      placeholder="Tell us what you’re looking for"
                  />
                </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 text-base rounded-lg border-gray-300 focus:ring-brand-accent focus:border-brand-accent"
                  placeholder="How can we help?"
              />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0069ff] text-white font-semibold py-3 rounded-lg hover:bg-[#0051cc] transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {success && (
                <p className="text-green-600 text-center font-medium mt-4">
                  ✅ Thanks! Your message has been sent.
                </p>
            )}
          </motion.form>

          {/* Right: Google Calendar Appointment Embed */}
          <div className="w-full">
            <div className="rounded-2xl shadow-lg border overflow-hidden">
              <iframe
                  src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1qXM08YTLHT7HvI2GaWD5jo1RZQwVqTOGWc8-54s4Js02PhjGFdcPOFrSyNs3gWFYpOhSaiH9x"
                  style={{ border: 0, width: "100%", height: "700px" }}
                  frameBorder="0"
                  scrolling="no"
                  title="Blume Labs Appointment Scheduler"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Extra Contact Info */}
        <section className="pb-16">
          <div className="flex justify-center gap-6">
            <a
                href="mailto:contact@blumelabs.in"
                className="flex items-center gap-2 text-gray-700 hover:text-brand-accent"
            >
              <Mail className="w-5 h-5" /> contact@blumelabs.in
            </a>
            <a
                href="https://www.linkedin.com/company/blumelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-brand-accent"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </section>
      </div>
  )
}
