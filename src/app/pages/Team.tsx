import { Linkedin, Mail, Instagram, Github, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Dikshant Pandey",
    role: "Executive Director",
    qualification: "B.Sc. Computer Science",
    experience: "5+ years in tech leadership & strategic partnerships",
    bio: "Visionary leader driving Tech Gurkha's mission to transform Nepal's digital landscape.",
    image: "/team/dikshant-pandey.jpg",
    socials: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/dikshant-pandey1/", label: "LinkedIn" },
      { icon: Mail, url: "mailto:dikshantpandey123@gmail.com", label: "Email" },
      { icon: Instagram, url: "https://www.instagram.com/dikshantpandey.dev", label: "Instagram" },
    ],
  },
  {
    name: "Prayas Bhatt",
    role: "Chief Operating Officer",
    qualification: "B.Sc. Information Technology",
    experience: "4+ years in operations & project management",
    bio: "Operations maestro ensuring seamless delivery and client satisfaction across all projects.",
    image: "/team/prayas-bhatt.jpg",
    socials: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/prayasbhatt/", label: "LinkedIn" },
      { icon: Mail, url: "mailto:bhattprayas40@gmail.com", label: "Email" },
      { icon: Instagram, url: "https://www.instagram.com/bhatt.prayas/", label: "Instagram" },
    ],
  },
  {
    name: "Sajal Devkota",
    role: "Chief Information Officer",
    qualification: "B.Sc. Computer Engineering",
    experience: "4+ years in systems architecture & engineering",
    bio: "Tech architect leading the engineering vision and technical infrastructure.",
    image: "/team/sajal-devkota.jpg",
    socials: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/sajal-devkota-868808392", label: "LinkedIn" },
      { icon: Mail, url: "mailto:sajal14000605@gmail.com", label: "Email" },
      { icon: Instagram, url: "https://www.instagram.com/sajal.devkota/", label: "Instagram" },
    ],
  },
  {
    name: "Sanskar Shrestha",
    role: "Event Manager",
    qualification: "B.Sc. Computer Science",
    experience: "3+ years in event management & coordination",
    bio: "Event strategist orchestrating Tech Gurkha's flagship events and community initiatives.",
    image: "/team/sanskar-shrestha.jpg",
    socials: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/sanskar-shresthaml", label: "LinkedIn" },
      { icon: Mail, url: "mailto:sthasanskar20@gmail.com", label: "Email" },
      { icon: Instagram, url: "https://www.instagram.com/sanskar__shrestha/", label: "Instagram" },
    ],
  },
  {
    name: "Sakshyam Puri",
    role: "Outreach Officer",
    qualification: "B.Sc. Information Technology",
    experience: "3+ years in community building & outreach",
    bio: "Community builder expanding Tech Gurkha's reach across Nepal's tech ecosystem.",
    image: "/team/sakshyam-puri.jpg",
    socials: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/sakshyam-puri-1a1792311", label: "LinkedIn" },
      { icon: Mail, url: "mailto:sakshyam087@gmail.com", label: "Email" },
      { icon: Instagram, url: "https://www.instagram.com/sakshyam.core/", label: "Instagram" },
    ],
  },
  {
    name: "Shuvashis Gautam",
    role: "Chief Technical Officer",
    qualification: "B.Des. Visual Communication",
    experience: "3+ years in product design & UX research",
    bio: "Design thinker creating intuitive and beautiful user experiences.",
    image: "/team/shuvashis-gautam.jpg",
    socials: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/shuvashis-gautam-4b4ab7374/", label: "LinkedIn" },
      { icon: Mail, url: "mailto:shuvashis.gautam21@gmail.com", label: "Email" },
      { icon: Instagram, url: "https://www.instagram.com/shuvasheesh/", label: "Instagram" },
    ],
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 600 }}>The Gurkhas</span>
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-5" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Meet the team behind the mission
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Meet the team behind Tech Gurkha — building modern web, AI, and software solutions from Kathmandu, Nepal.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover"
                />

                {/* Default overlay — name & role only */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="text-sm text-blue-300 mb-1" style={{ fontWeight: 600 }}>{member.role}</div>
                    <h3 className="text-2xl text-white" style={{ fontWeight: 800 }}>{member.name}</h3>
                  </div>
                </div>

                {/* Hover overlay — social icons */}
                <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    {member.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full bg-white/15 hover:bg-white hover:text-gray-900 flex items-center justify-center text-white transition-all"
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-blue-50/50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Want to join{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">the mission?</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@techgurkha.com.np"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all hover:shadow-xl text-lg"
              style={{ fontWeight: 600 }}
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
