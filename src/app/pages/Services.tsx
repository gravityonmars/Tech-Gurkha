import { Code2, BrainCircuit, Layers, Smartphone, Palette, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    id: "web",
    icon: Code2,
    color: "from-blue-500 to-indigo-500",
    accent: "bg-blue-500",
    accentLight: "bg-blue-50 text-blue-600",
    title: "Web Development",
    tagline: "Fast, responsive websites that work",
    description: "We build modern websites and web apps that load fast, look great on every device, and help your business get found online.",
    features: [
      "Custom websites & web apps",
      "Mobile-friendly design",
      "Fast loading & SEO optimized",
      "Easy-to-use admin panel",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    cardHighlight: "What You'll Get",
    cardPoints: ["Clean, responsive design", "SEO-ready from day one", "Fast page load speeds", "Content management system"],
  },
  {
    id: "ai",
    icon: BrainCircuit,
    color: "from-orange-500 to-amber-500",
    accent: "bg-orange-500",
    accentLight: "bg-orange-50 text-orange-600",
    title: "AI Solutions",
    tagline: "Smart tools for smarter business",
    description: "We help businesses use AI to automate tasks, understand data better, and build intelligent features that save time and money.",
    features: [
      "AI-powered automation",
      "Custom chatbots & assistants",
      "Data analysis & insights",
      "AI integration into existing systems",
    ],
    tech: ["Python", "TensorFlow", "OpenAI", "LangChain", "Azure AI"],
    cardHighlight: "What You'll Get",
    cardPoints: ["Ready-to-use AI tools", "Custom models for your needs", "Analytics dashboard", "Easy API integration"],
  },
  {
    id: "software",
    icon: Layers,
    color: "from-blue-500 to-indigo-500",
    accent: "bg-blue-500",
    accentLight: "bg-blue-50 text-blue-600",
    title: "Software Development",
    tagline: "Reliable software built to grow with you",
    description: "We develop custom software and cloud-based platforms that are secure, scalable, and designed to fit how your business actually works.",
    features: [
      "Custom business software",
      "Cloud-based platforms",
      "API development & integration",
      "Ongoing support & maintenance",
    ],
    tech: ["Node.js", ".NET", "PostgreSQL", "Docker", "Azure"],
    cardHighlight: "What You'll Get",
    cardPoints: ["Scalable architecture", "Secure & reliable systems", "Third-party integrations", "Full documentation"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    color: "from-orange-500 to-amber-500",
    accent: "bg-orange-500",
    accentLight: "bg-orange-50 text-orange-600",
    title: "App Development",
    tagline: "Mobile apps people love to use",
    description: "We create iOS and Android apps that are smooth, intuitive, and built to keep your users coming back.",
    features: [
      "iOS & Android apps",
      "Cross-platform development",
      "Offline support",
      "Push notifications & real-time features",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    cardHighlight: "What You'll Get",
    cardPoints: ["App Store & Play Store ready", "Smooth performance", "Works offline", "Push notification system"],
  },
  {
    id: "design",
    icon: Palette,
    color: "from-blue-500 to-indigo-500",
    accent: "bg-blue-500",
    accentLight: "bg-blue-50 text-blue-600",
    title: "UI/UX Design",
    tagline: "Designs that look good and work better",
    description: "We design clean, user-friendly interfaces that make it easy for people to use your product — and enjoy doing it.",
    features: [
      "User research & wireframing",
      "Interactive prototypes",
      "Brand & visual design",
      "Design systems & handoff",
    ],
    tech: ["Figma", "Adobe XD", "Framer", "Principle", "Storybook"],
    cardHighlight: "What You'll Get",
    cardPoints: ["Complete design system", "Interactive prototypes", "User-tested designs", "Developer-ready files"],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 600 }}>Our Expertise</span>
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-5" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            What we do best
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We help businesses build, launch, and grow with technology that actually works.
          </p>
        </div>
      </section>

      {/* Services - Alternating Layout */}
      <section className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isAlt = index % 2 === 1;
            return (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 sm:py-24 ${index < services.length - 1 ? "border-b border-gray-100" : ""} ${isAlt ? "lg:direction-rtl" : ""}`}
              style={isAlt ? { direction: "rtl" } : {}}
            >
              {/* Content */}
              <div style={{ direction: "ltr" }}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-6 ${service.accentLight}`} style={{ fontWeight: 600 }}>
                  <service.icon className="w-3.5 h-3.5" />
                  SERVICE {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="text-4xl md:text-5xl text-gray-900 mb-3" style={{ fontWeight: 800, lineHeight: 1.1 }}>
                  {service.title}
                </h2>
                <p className="text-lg text-gray-500 mb-6" style={{ fontWeight: 500 }}>{service.tagline}</p>
                <p className="text-gray-500 leading-relaxed mb-8">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600 text-[15px]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-gray-100 text-gray-500 rounded-full text-xs" style={{ fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Visual Card */}
              <div style={{ direction: "ltr" }}>
                <div className={`relative bg-gradient-to-br ${service.color} rounded-3xl p-1 hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="bg-white rounded-[22px] p-10 md:p-14">
                    <div className={`${service.accent} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg text-gray-400 uppercase tracking-wider mb-4" style={{ fontWeight: 600 }}>{service.cardHighlight}</h3>
                    <div className="space-y-4 mb-8">
                      {service.cardPoints.map((point) => (
                        <div key={point} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${service.accent} shrink-0`} />
                          <span className="text-gray-700 text-lg" style={{ fontWeight: 600 }}>{point}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-gray-900 group"
                      style={{ fontWeight: 600 }}
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-blue-50/50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Let's build something{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">amazing</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team.
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
              to="/about"
              className="bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-full border border-gray-200 hover:border-gray-300 transition-all text-lg"
              style={{ fontWeight: 600 }}
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
