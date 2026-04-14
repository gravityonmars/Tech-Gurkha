import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/team", label: "Team" },
];

export default function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-white/80 backdrop-blur-lg border-b border-gray-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <span className="text-xl tracking-tight" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                <span className={scrolled ? "text-gray-900" : "text-gray-900"}>TECH GURKHA</span>
                <span className="text-cyan-500">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center gap-1 px-4 py-2 rounded-lg text-[15px] transition-colors ${
                    isActive(link.path)
                      ? "text-blue-600 bg-blue-50/60"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://cyberutsav.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-[14px] text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
                style={{ fontWeight: 500 }}
              >
                CyberUtsav
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/contact"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full transition-all text-[14px] hover:shadow-lg"
                style={{ fontWeight: 600 }}
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-3 rounded-lg text-[15px] ${
                      isActive(link.path) ? "text-blue-600 bg-blue-50/60" : "text-gray-600"
                    }`}
                    style={{ fontWeight: 500 }}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://cyberutsav.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 py-3 px-3 text-[15px] text-gray-600"
                  style={{ fontWeight: 500 }}
                >
                  CyberUtsav <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-gray-900 text-white px-6 py-3 rounded-full text-center text-[14px] mt-2"
                  style={{ fontWeight: 600 }}
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center mb-6">
                <span className="text-xl tracking-tight" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                  <span className="text-white">TECH GURKHA</span>
                  <span className="text-cyan-500">.</span>
                </span>
              </div>
              <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                Nepal-based technology company offering web development, AI solutions, and custom software to help businesses grow digitally.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/tg-ds/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/techgurkha.np/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-5" style={{ fontWeight: 600 }}>Company</h4>
              <div className="space-y-3">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/team", label: "Our Team" },
                ].map((l) => (
                  <Link key={l.to} to={l.to} className="block text-gray-400 hover:text-white transition-colors text-[15px]">{l.label}</Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-5" style={{ fontWeight: 600 }}>Services</h4>
              <div className="space-y-3">
                {["Web Development", "AI Solutions", "Software Dev", "App Development", "UI/UX Design"].map((s) => (
                  <Link key={s} to="/services" className="block text-gray-400 hover:text-white transition-colors text-[15px]">{s}</Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-5" style={{ fontWeight: 600 }}>Get in Touch</h4>
              <div className="space-y-3 text-gray-400 text-[15px]">
                <p>info@techgurkha.com.np</p>
                <p>+977 9705707707</p>
                <p>Mid Baneshwor, Kathmandu, Nepal</p>
              </div>
              <Link
                to="/contact"
                className="inline-block mt-6 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-[14px] transition-colors"
                style={{ fontWeight: 500 }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex items-center justify-center text-gray-500 text-[13px]">
            <p>&copy; 2025 Tech Gurkha Digital Services Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
