import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  const navItems = [
    { id: "#home", icon: <BiHome />, label: "Home" },
    { id: "#about", icon: <AiOutlineUser />, label: "About" },
    { id: "#experience", icon: <GoBook />, label: "Experience" },
    { id: "#recentWork", icon: <MdOutlineWorkOutline />, label: "Projects" },
    { id: "#contact", icon: <AiOutlineMessage />, label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActiveNav("#header")}
          className="logo text-2xl font-semibold text-teal-200 drop-shadow-md"
        >
          Anshika.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`flex items-center gap-2 text-teal-200 hover:text-white transition-all duration-300 ${
                    activeNav === item.id
                      ? "text-white font-semibold drop-shadow-md"
                      : ""
                  }`}
                >
                  {React.cloneElement(item.icon, { className: "text-white h-5 w-5" })}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center md:hidden space-x-2">
          {/* Theme Toggle */}
          <button
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-teal-200 text-white transition"
            aria-label="Toggle theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>

          {/* Hamburger Menu */}
          <button
            className="h-10 w-10 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-teal-400 transition"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-teal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
