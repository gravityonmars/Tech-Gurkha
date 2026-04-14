import { motion } from "motion/react";
import { Target, Eye, CheckCircle2, Handshake, Users, Globe, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const milestones = [
  { year: "Apr 4, 2025", title: "Company Founded", desc: "Tech Gurkha Digital Services Pvt. Ltd. started in Kathmandu." },
  { year: "Sep 14, 2025", title: "Microsoft Founders Hub", desc: "Got $25,000 in Azure credits from Microsoft for Startups." },
  { year: "Aug – Nov 2025", title: "CyberUtsav 2.0", desc: "Ran a hackathon series across Kathmandu, Itahari, and Chitwan." },
  { year: "Nov 19, 2025", title: "CyberUtsav Grand Finale", desc: "Top teams from all three cities came together for the finals." },
  { year: "Jan 22, 2026", title: "Tech Gurkha LLC", desc: "Opened our US branch to serve international clients." },
  { year: "Feb 28, 2026", title: "$150K Azure Credits", desc: "Received $150,000 in Azure credits from Microsoft." },
  { year: "Apr 1, 2026", title: "$200K Google Cloud", desc: "Awarded $200,000 in Google Cloud credits through Google for Startups." },
];

const impact = [
  { icon: Globe, value: "$150K", label: "Azure Credits" },
  { icon: Globe, value: "$200K", label: "Google Cloud Credits" },
  { icon: Users, value: "500+", label: "Event Participants" },
  { icon: TrendingUp, value: "10+", label: "Projects Delivered" },
];

export default function About() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ═══ HERO / ABOUT US ═══ */}
      <section className="relative pt-40 pb-32 px-6 lg:px-12 overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-[120px]" />
          <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-purple-50/40 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 max-w-4xl mx-auto"
            style={{ fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" }}
          >
            A tech company{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                built in Nepal
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
            <br />
            for the world.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-16"
          >
            We're a Kathmandu-based team that builds websites, apps, and AI tools for businesses in Nepal and beyond.
          </motion.p>

          {/* Impact counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-4 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
          >
            {impact.map((item, i) => (
              <div key={item.label} className={`px-5 sm:px-8 md:px-12 py-6 sm:py-7 text-center hover:bg-gray-50 transition-colors ${i < impact.length - 1 ? "border-b sm:border-b-0 sm:border-r border-gray-100" : ""} ${i % 2 === 0 && i < impact.length - 1 ? "border-r sm:border-r border-gray-100" : ""}`}>
                <div className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-1" style={{ fontWeight: 800 }}>{item.value}</div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider" style={{ fontWeight: 600 }}>{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ WHO WE ARE ═══ */}
      <section className="py-28 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Top — full-width heading */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-blue-500" />
              <span className="text-blue-600 text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 max-w-3xl" style={{ fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">story</span>
            </h2>
          </div>

          {/* Two-column: paragraphs + values */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — story as numbered chapters */}
            <div className="space-y-8">
              {[
                { num: "01", text: "Tech Gurkha started in Kathmandu with one goal — to build great technology right here in Nepal. We wanted to show that you don't need to go abroad to create software that competes globally." },
                { num: "02", text: "In our first year, we got backed by Microsoft and Google, ran CyberUtsav hackathons across 3 cities in Nepal, and built digital products for businesses of all sizes." },
                { num: "03", text: "Now we're growing — expanding to the US and building a team of developers, designers, and problem-solvers who care about doing good work." },
              ].map((para, i) => (
                <motion.div
                  key={para.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <span className="text-4xl text-blue-100 shrink-0 -mt-1" style={{ fontWeight: 800 }}>{para.num}</span>
                  <p className="text-gray-500 leading-relaxed">{para.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Right — three tall value cards */}
            <div className="grid gap-4">
              {[
                { title: "Quality First", desc: "We take pride in writing clean code and building products that actually work well.", gradient: "from-blue-500 to-blue-600", light: "bg-blue-50 text-blue-600" },
                { title: "Made in Nepal", desc: "Great technology built locally, serving clients in Nepal and around the world.", gradient: "from-indigo-500 to-indigo-600", light: "bg-indigo-50 text-indigo-600" },
                { title: "Community Focused", desc: "We give back through events like CyberUtsav and support Nepal's growing tech community.", gradient: "from-purple-500 to-purple-600", light: "bg-purple-50 text-purple-600" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all group overflow-hidden"
                >
                  {/* Top gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 ${item.light} rounded-xl flex items-center justify-center shrink-0 text-lg`} style={{ fontWeight: 800 }}>
                      {item.title[0]}
                    </div>
                    <div>
                      <h3 className="text-base text-gray-900 mb-1" style={{ fontWeight: 700 }}>{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSION / VISION / PROMISE ═══ */}
      <section className="py-28 px-6 lg:px-12 relative overflow-hidden">
        {/* Light decorative background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="text-blue-600 text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 600 }}>Purpose</span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              What we stand for
            </h2>
            <p className="text-gray-500 leading-relaxed">
              The values behind everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 md:gap-0 rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-white">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To help businesses in Nepal and beyond grow through reliable, well-built technology — from websites and apps to AI-powered tools.",
                accent: "blue",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To become a trusted technology partner in South Asia, known for building software that works and teams that deliver.",
                accent: "indigo",
              },
              {
                icon: Handshake,
                title: "Our Promise",
                desc: "We treat every project like it's our own — honest communication, quality work, and no shortcuts.",
                accent: "purple",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative p-10 md:p-12 group hover:bg-gray-50/50 transition-colors ${i < 2 ? "md:border-r border-b md:border-b-0 border-gray-100" : ""}`}
              >
                {/* Large watermark number */}
                <span
                  className="absolute top-6 right-8 text-[120px] text-gray-100 leading-none select-none pointer-events-none"
                  style={{ fontWeight: 900 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className={`w-14 h-14 bg-${item.accent}-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-7 h-7 text-${item.accent}-600`} />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-4" style={{ fontWeight: 800 }}>{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ECOSYSTEM TREE ═══ */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-12 bg-blue-500" />
              <span className="text-blue-600 text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Ecosystem</span>
              <div className="h-px w-12 bg-blue-500" />
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Under Tech Gurkha
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our products, ventures, and community initiatives.
            </p>
          </div>

          <div className="flex flex-col items-center">
            {/* Root */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 text-white rounded-2xl px-10 py-6 text-center shadow-xl"
            >
              <div className="text-lg" style={{ fontWeight: 700 }}>Tech Gurkha Digital Services</div>
              <div className="text-gray-400 text-sm" style={{ fontWeight: 500 }}>Parent Company</div>
            </motion.div>

            <div className="w-px h-12 bg-gradient-to-b from-gray-900 to-gray-300" />

            {/* Horizontal connector */}
            <div className="relative w-full max-w-4xl">
              <div className="absolute top-0 h-px bg-gray-300 hidden md:block" style={{ left: "12.5%", right: "12.5%" }} />
            </div>

            {/* Branches */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
              {[
                { title: "Tech Gurkha LLC", desc: "US Operations", logo: "/logos/techgurkha-llc.png", border: "border-blue-200 hover:border-blue-300" },
                { title: "GuffGPT", desc: "AI Product", logo: "/logos/guffgpt.png", border: "border-purple-200 hover:border-purple-300" },
                { title: "CyberUtsav", desc: "Tech Events", logo: "/logos/cyberutsav.png", border: "border-orange-200 hover:border-orange-300" },
                { title: "TekGurkha", desc: "NGO", logo: "/logos/tekgurkha.png", border: "border-emerald-200 hover:border-emerald-300" },
              ].map((branch, i) => (
                <motion.div
                  key={branch.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-px h-8 bg-gray-300 hidden md:block" />
                  <div className={`bg-white rounded-xl px-6 py-6 border ${branch.border} text-center w-full shadow-sm hover:shadow-md transition-all`}>
                    <img src={branch.logo} alt={`${branch.title} logo`} className="w-16 h-16 rounded-xl mx-auto mb-4 object-contain" />
                    <div className="text-base text-gray-900" style={{ fontWeight: 700 }}>{branch.title}</div>
                    <div className="text-gray-400 text-xs mt-1" style={{ fontWeight: 500 }}>{branch.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="py-28 px-6 lg:px-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-12 bg-blue-500" />
              <span className="text-blue-600 text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Milestones</span>
              <div className="h-px w-12 bg-blue-500" />
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Our journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-indigo-400 to-gray-200 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((m, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                  className={`relative flex items-start gap-6 md:gap-10 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-100 -translate-x-1/2 mt-2 z-10" />

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content */}
                  <div className="ml-14 md:ml-0 md:w-1/2">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm text-blue-600 mb-1" style={{ fontWeight: 600 }}>{m.year}</div>
                      <h3 className="text-lg text-gray-900 mb-1.5" style={{ fontWeight: 700 }}>{m.title}</h3>
                      <p className="text-gray-500 text-[15px]">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Want to build something{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">amazing?</span>
          </h2>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to talk about how we can help.
          </p>
          <Link
            to="/contact"
            className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all hover:shadow-xl"
            style={{ fontWeight: 600 }}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
