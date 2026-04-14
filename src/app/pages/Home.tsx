import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  BrainCircuit,
  Smartphone,
  Palette,
  Layers,
  CheckCircle2,
  Users,
  Globe,
  Zap,
  ArrowUpRight,
  Shield,
  Clock,
  TrendingUp,
  Award,
} from "lucide-react";
import { Link } from "react-router";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useScroll, useTransform } from "motion/react";

const services = [
  { icon: Code2, title: "Web Development", desc: "Websites and web apps that are fast, responsive, and built to help you grow online.", color: "from-blue-500 to-blue-600" },
  { icon: BrainCircuit, title: "AI Solutions", desc: "Smart tools and automation that save time and help you make better decisions.", color: "from-purple-500 to-purple-600" },
  { icon: Layers, title: "Software Development", desc: "Custom software and cloud platforms built to fit the way your business works.", color: "from-emerald-500 to-emerald-600" },
  { icon: Smartphone, title: "App Development", desc: "iOS and Android apps that are smooth, reliable, and easy to use.", color: "from-orange-500 to-orange-600" },
  { icon: Palette, title: "UI/UX Design", desc: "Clean, user-friendly designs that make your product simple and enjoyable.", color: "from-pink-500 to-pink-600" },
];

const whyUs = [
  { icon: Shield, title: "Reliable Team", desc: "We show up, do the work, and don't disappear. You can count on us from start to finish." },
  { icon: Zap, title: "Modern Technology", desc: "We use the latest tools and frameworks so your product stays ahead, not behind." },
  { icon: Clock, title: "On-Time Delivery", desc: "We set realistic deadlines and stick to them. No surprises, no delays." },
  { icon: TrendingUp, title: "Built to Scale", desc: "We design systems that grow with your business, whether you have 10 users or 10,000." },
  { icon: Users, title: "People Who Care", desc: "Our team genuinely cares about your project succeeding, not just shipping code." },
  { icon: Globe, title: "Global Standards", desc: "Backed by Microsoft and Google, we follow international best practices on every project." },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-white overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1731053205641-6f0be59d42e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMEhpbWFsYXlhJTIwbW91bnRhaW5zJTIwc3VucmlzZXxlbnwxfHx8fDE3NzU4OTg2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nepal Himalaya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-blue-500" />
                <span className="text-blue-600 text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>
                  Nepal's Digital Pioneers
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-8"
                style={{ fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                We don't just{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  write code.
                </span>
                <br />
                We build futures.
              </h1>

              <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl leading-relaxed">
                A technology company from Kathmandu, Nepal — helping businesses grow with websites, apps, AI tools, and custom software.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all hover:shadow-xl"
                  style={{ fontWeight: 600 }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/80 backdrop-blur hover:bg-white text-gray-900 px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg"
                  style={{ fontWeight: 600 }}
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-2 flex-col gap-4">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400" style={{ fontWeight: 500 }}>Google for Startups</div>
                    <div className="text-lg text-gray-900" style={{ fontWeight: 700 }}>$200K Cloud Credits</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400" style={{ fontWeight: 500 }}>Microsoft for Startups</div>
                    <div className="text-lg text-gray-900" style={{ fontWeight: 700 }}>$150K Azure Credits</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400" style={{ fontWeight: 500 }}>CyberUtsav Impact</div>
                    <div className="text-lg text-gray-900" style={{ fontWeight: 700 }}>500+ Students Nationwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="py-28 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-blue-500" />
                <span className="text-blue-600 text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-8" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Technology that{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">works for you.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-5">
                Tech Gurkha is a technology company based in Kathmandu, Nepal. We build websites, mobile apps, AI tools, and custom software for businesses that want to grow digitally.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10">
                Backed by Microsoft and Google with over $350K in combined cloud credits, we bring global-quality engineering with a team that understands local needs.
              </p>
              <Link to="/about" className="group bg-gray-900 hover:bg-gray-800 text-white px-7 py-3.5 rounded-full inline-flex items-center gap-3 transition-all hover:shadow-xl" style={{ fontWeight: 600 }}>
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — Ecosystem */}
            <div className="relative flex items-center justify-center mx-auto w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
              {/* Static orbit ring guides */}
              <div className="absolute rounded-full border border-gray-200/50" style={{ width: '62.5%', height: '62.5%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
              <div className="absolute rounded-full border border-gray-200/30" style={{ width: '91.6%', height: '91.6%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

              {/* Center hub */}
              <div
                className="absolute z-10 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-white rounded-full border border-gray-200 shadow-lg flex flex-col items-center justify-center"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <span className="text-sm sm:text-base lg:text-lg text-gray-900" style={{ fontWeight: 800 }}>Tech Gurkha</span>
                <span className="text-[11px] text-blue-600 tracking-widest uppercase" style={{ fontWeight: 600 }}>Ecosystem</span>
              </div>

              {/* Inner orbit — rotating container (clockwise) */}
              <motion.div
                className="absolute w-[62.5%] h-[62.5%]"
                style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {[
                  { icon: Code2, label: "Web", color: "text-blue-600", angle: 0 },
                  { icon: BrainCircuit, label: "AI", color: "text-purple-600", angle: 90 },
                  { icon: Layers, label: "SaaS", color: "text-emerald-600", angle: 180 },
                  { icon: Smartphone, label: "Mobile", color: "text-orange-600", angle: 270 },
                ].map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const cx = `${50 + 50 * Math.cos(rad)}%`;
                  const cy = `${50 + 50 * Math.sin(rad)}%`;
                  return (
                    <motion.div
                      key={node.label}
                      className="absolute z-10 flex flex-col items-center gap-1 sm:gap-1.5"
                      style={{ top: cy, left: cx, x: '-50%', y: '-50%' }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md bg-white border border-gray-100">
                        <node.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${node.color}`} />
                      </div>
                      <span className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500" style={{ fontWeight: 600 }}>{node.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Outer orbit — rotating container (counter-clockwise) */}
              <motion.div
                className="absolute w-[91.6%] h-[91.6%]"
                style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              >
                {[
                  { icon: Palette, label: "Design", color: "text-pink-600", angle: 45 },
                  { icon: Shield, label: "Security", color: "text-blue-600", angle: 135 },
                  { icon: Globe, label: "Global", color: "text-indigo-600", angle: 225 },
                  { icon: Award, label: "Quality", color: "text-amber-600", angle: 315 },
                ].map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const cx = `${50 + 50 * Math.cos(rad)}%`;
                  const cy = `${50 + 50 * Math.sin(rad)}%`;
                  return (
                    <motion.div
                      key={node.label}
                      className="absolute z-10 flex flex-col items-center gap-0.5 sm:gap-1"
                      style={{ top: cy, left: cx, x: '-50%', y: '-50%' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 rounded-lg sm:rounded-xl flex items-center justify-center bg-white border border-gray-100 shadow-sm">
                        <node.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${node.color}`} />
                      </div>
                      <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-gray-400" style={{ fontWeight: 600 }}>{node.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-blue-600 text-sm tracking-widest uppercase mb-3 block" style={{ fontWeight: 600 }}>What We Do</span>
              <h2 className="text-4xl md:text-5xl text-gray-900" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Our Services
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group shrink-0" style={{ fontWeight: 600 }}>
              View all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all h-full"
              >
                <div className={`bg-gradient-to-br ${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3" style={{ fontWeight: 700 }}>{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to="/services" className="text-sm text-blue-600 inline-flex items-center gap-1" style={{ fontWeight: 600 }}>
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-12 bg-blue-500" />
              <span className="text-blue-600 text-sm tracking-widest uppercase" style={{ fontWeight: 600 }}>Why Tech Gurkha</span>
              <div className="h-px w-12 bg-blue-500" />
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Why work with us?
            </h2>
            <p className="text-lg text-gray-600">
              Simple — we do good work, we're honest, and we deliver on time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-blue-50 rounded-xl flex items-center justify-center mb-5 transition-colors border border-gray-100">
                  <item.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2" style={{ fontWeight: 700 }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CYBERUTSAV ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/cyberutsav/cyberutsav.jpg"
              alt="CyberUtsav event"
              className="w-full h-[300px] sm:h-[420px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-6 sm:px-12 md:px-20">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 text-sm" style={{ fontWeight: 600 }}>3 Cities • 500+ Participants</span>
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6" style={{ fontWeight: 800, lineHeight: 1.1 }}>
                  CyberUtsav — Nepal's Biggest Tech Event
                </h2>
                <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  A hackathon series held across Kathmandu, Itahari, and Chitwan — bringing students and tech enthusiasts together to build, learn, and compete.
                </p>
                <a
                  href="https://cyberutsav.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-gray-900 px-8 py-4 rounded-full inline-flex items-center gap-3 hover:shadow-xl transition-all"
                  style={{ fontWeight: 600 }}
                >
                  Explore CyberUtsav
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-blue-50/50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Have an idea?{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Let's make it real.</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Tell us about your project and we'll figure out the best way to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all hover:shadow-xl text-lg"
              style={{ fontWeight: 600 }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-full border border-gray-200 hover:border-gray-300 transition-all text-lg"
              style={{ fontWeight: 600 }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
