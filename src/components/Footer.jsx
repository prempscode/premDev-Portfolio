import React from "react";
import { portfolioData } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-darker border-t border-border py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-muted tracking-[0.2em]">
            &copy; {currentYear} {portfolioData.name.toUpperCase()}. ALL RIGHTS
            RESERVED.
          </p>

          <div className="flex items-center gap-1 text-muted text-sm">
            <span className="font-mono text-xs">MADE WITH</span>
            <span className="text-accent mx-1">&lt;3</span>
            <span className="font-mono text-xs">USING REACT</span>
          </div>

          <div className="flex gap-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
