import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What I Do", href: "#what-i-do" },
    { name: "Proficiency", href: "#proficiency" },
    { name: "Education", href: "#education" },
    { name: "Academics", href: "#academics" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const socialIcons = [
    { icon: FaGithub, href: portfolioData.social.github, label: "GitHub" },
    {
      icon: FaLinkedin,
      href: portfolioData.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: portfolioData.social.instagram,
      label: "Instagram",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled
          ? "bg-dark/30 backdrop-blur-xl border-white/10 shadow-lg shadow-black/5"
          : "bg-transparent border-white/10"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="/"
            className="flex items-center gap-2 font-mono text-sm tracking-wider text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-accent">&gt;</span>
            <span>{portfolioData.name.replace(/\s/g, "_").toUpperCase()}</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-border-light rounded flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <a
              href={"#contact"}
              className="font-mono text-xs tracking-wider text-white border border-border-light rounded px-4 py-2 hover:border-accent hover:text-accent transition-all"
            >
              [ CONTACT ]
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8 pb-3 -mt-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-[11px] tracking-widest text-muted hover:text-accent transition-colors"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-darker border-b border-border"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-mono text-xs tracking-wider text-muted hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-border">
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-border-light rounded flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
