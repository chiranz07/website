import { motion } from "framer-motion"
import { Briefcase, Laptop, Users, Wrench, TrendingUp, Rocket, Building2, Cpu } from "lucide-react"
import { Link } from "react-router-dom"
import fulllogo from "@/assets/fulllogo.png"


export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="text-center pt-40 pb-20 bg-gradient-to-b from-[#f7f9fb] to-white">
        <h1 className="text-5xl md:text-6xl font-bold text-[#2a3f50] mb-6">
          About Blume Labs
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Smarter Financial Systems. Thoughtfully Designed.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#2a3f50] mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Blume Labs, we don’t just consult — we build financial systems that work.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We help businesses and startups embrace modern technology in finance, moving beyond spreadsheets
            and outdated tools into connected, scalable ERP systems. Our solutions streamline processes,
            reduce the stress of data management, and free your team to focus on growth.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We know that moving to new systems can be challenging — that’s why we support companies at every
            step of the transition, making the journey smooth, reliable, and stress-free.
          </p>
          <p className="text-lg text-gray-700">
            From finance transformation and intelligent Excel solutions to custom web and app development,
            we combine deep accounting expertise with technology to create ecosystems that are efficient,
            reliable, and intuitive.
          </p>
        </div>
        <div className="flex items-center justify-center">
  <img
    src={fulllogo}
    alt="Blume Labs Logo"
    className="h-56 md:h-64 w-auto mx-auto"
  />
</div>

      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-[#2a3f50] mb-8">Our Mission</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            At Blume Labs, our mission is to help businesses replace financial chaos with clarity.
            We guide them through smooth, stress-free transformations — moving from messy spreadsheets
            and disconnected ERPs to connected, scalable systems that actually work.
          </p>
          <p>
            By blending financial expertise with technology, we design practical, relevant solutions
            that fit the way businesses truly operate. This shift reduces the time wasted on maintaining
            data and allows business leaders to focus on analyzing insights and making confident,
            growth-driving decisions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-[#2a3f50] mb-8">Our Story</h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Blume Labs began when we noticed something troubling: companies were spending more time
            maintaining their data than analyzing it. Instead of simplifying finance, spreadsheets and
            legacy ERPs were making the process more complex — creating bottlenecks, limiting access to
            insights, and slowing down decision-making.
          </p>
          <p>
            Worse still, many businesses were trapped in poorly configured ERP systems. Instead of freeing
            teams to focus on growth, these systems created inefficiency, frustration, and a lack of trust
            in the very tools meant to support them.
          </p>
          <p>
            We knew there was a better way. With Chartered Accounting expertise, tech mastery, and product
            thinking, we set out to help businesses implement and customize modern ERP platforms like Zoho
            and Odoo — tailoring them to fit real workflows, not the other way around.
          </p>
          <p>
            Alongside ERP, we also build custom apps, web applications, and advanced Excel solutions to
            bridge gaps and solve unique challenges that off-the-shelf tools can’t. Even this very website
            was coded from scratch in-house, reflecting our hands-on approach to technology.
          </p>
          <p>
            Today, Blume Labs helps businesses of all sizes replace finance chaos with clarity. We
            specialize in smooth ERP transitions, optimization of existing systems, and building custom
            tools and automation that scale with each company’s vision.
          </p>
        </div>
      </section>

      {/* What Sets Us Apart */}
<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-[#2a3f50] mb-12">
      What Sets Us Apart
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
      {[
        {
          title: "Finance expertise + technology know-how",
          desc: "As Chartered Accountants with deep tech skills, we understand both the numbers and the systems behind them — so you don’t need to bridge the gap between consultants and developers.",
          icon: Briefcase
        },
        {
          title: "Systems built around you",
          desc: "No one-size-fits-all. We configure and customize systems around your workflows, making adoption easier and ensuring results that truly matter.",
          icon: Users
        },
        {
          title: "With you every step",
          desc: "Moving to new systems can feel overwhelming. We make the transition smooth, guiding you through setup, training, and adoption so change feels effortless, not chaotic.",
          icon: Laptop
        },
        {
          title: "Fixing broken implementations",
          desc: "We help businesses struggling with poorly configured ERPs — cleaning up, reconfiguring, and turning them into systems teams can finally trust and use with confidence.",
          icon: Wrench
        },
        {
          title: "Solutions that scale with you",
          desc: "From a startup’s first setup to enterprise-level infrastructure, our solutions are designed to evolve with your business — without constant reinvention.",
          icon: TrendingUp
        },
        {
          title: "Design-driven simplicity",
          desc: "We believe finance doesn’t have to be chaotic. Our systems are designed to be intuitive, elegant, and simple — making them easy for teams to adopt and love using.",
          icon: Cpu
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -4, scale: 1.02 }}
          className="p-6 bg-white rounded-xl shadow border flex flex-col"
        >
          <item.icon className="w-8 h-8 text-brand-accent mb-4" />
          <h3 className="text-lg font-semibold text-[#2a3f50] mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Who We Serve */}
<section className="max-w-6xl mx-auto px-6 py-20 text-center">
  <h2 className="text-3xl font-bold text-[#2a3f50] mb-12">
    Who We Serve
  </h2>
  <div className="grid gap-10 md:grid-cols-3 text-gray-700">
    <div className="p-6 bg-white rounded-xl shadow border">
      <Rocket className="w-8 h-8 mx-auto mb-4 text-brand-accent" />
      <h3 className="text-lg font-semibold text-[#2a3f50] mb-2">Startups</h3>
      <p className="text-base">
        Set up the right financial and tech foundation from Day One — scalable systems
        that keep you investor-ready and free you from chaos later.
      </p>
    </div>
    <div className="p-6 bg-white rounded-xl shadow border">
      <Building2 className="w-8 h-8 mx-auto mb-4 text-brand-accent" />
      <h3 className="text-lg font-semibold text-[#2a3f50] mb-2">SMBs & Enterprises</h3>
      <p className="text-base">
        Transform and optimize ERPs to reduce inefficiencies, unlock better insights,
        and support smooth, scalable growth.
      </p>
    </div>
    <div className="p-6 bg-white rounded-xl shadow border">
      <Cpu className="w-8 h-8 mx-auto mb-4 text-brand-accent" />
      <h3 className="text-lg font-semibold text-[#2a3f50] mb-2">Complex Needs</h3>
      <p className="text-base">
        When off-the-shelf tools fall short, we design apps, automations, and integrations
        tailored to your workflows — so your systems work the way you do.
      </p>
    </div>
  </div>
</section>


{/* Final CTA */}
<section className="bg-gradient-to-r from-[#2a3f50] to-[#1f2d3a] py-24 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
    Ready to Replace Chaos with Clarity?
  </h2>
  <p className="text-lg mb-8 text-white">
    Let’s build finance systems that save time, reduce stress, and unlock smarter decisions.
  </p>
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
