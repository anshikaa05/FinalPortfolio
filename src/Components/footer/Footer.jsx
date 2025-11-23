import React from "react";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10  text-white relative z-10">
      <div className="container mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-semibold bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent"
            >
              Anshika<span className="text-white">.</span>
            </a>
            <p className="text-teal-100 mt-2 text-sm">
              Frontend Developer | Web Enthusiast
            </p>
          </div>

          {/* Center Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a
              href="#home"
              className="text-teal-100 hover:text-teal-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-teal-100 hover:text-teal-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-teal-100 hover:text-teal-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#recentWork"
              className="text-teal-100 hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-teal-100 hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Section (Socials + Back to Top) */}
          <div className="flex justify-center md:justify-end items-center gap-4">
            <a
              href="https://github.com/anshikaa05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/anshika-srivastava-3417831b0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#home"
              className="p-2 text-teal-100 hover:text-teal-400 transition-colors"
              aria-label="Back to top"
            >
              <FaArrowUp className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-8 pt-4 border-t border-white/10 text-sm text-teal-500">
          © {new Date().getFullYear()} Anshika Srivastava. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
