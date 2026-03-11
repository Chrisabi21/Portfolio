import React from "react";
import { motion } from "framer-motion";

const menuItems = ["HOME", "ABOUT", "SKILLS", "RESUME", "CONTACT"];

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-sm text-white shadow-md z-50">
      <nav className="container mx-auto flex items-center py-4 px-6">
        <ul className="flex space-x-6 items-center text-base">
          {menuItems.map((section, index) => {
            const key = section.toLowerCase();
            const isActive = activeSection === key;
            return (
              <li key={section}>
                <button
                  onClick={() => onNavigate(key)}
                  className="cursor-pointer flex items-center space-x-1 group"
                >
                  <span className="text-blue-400 font-mono font-bold">{`0${index + 1}.`}</span>
                  <span className={`font-semibold tracking-wide ${isActive ? "text-blue-400" : "text-white hover:text-blue-300"}`}>
                    {section}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="ml-auto flex items-center gap-4">
          <a
            href="/Oluwaseun-Abiodun-CV.pdf"
            download
            className="border border-blue-300 text-blue-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-300 hover:text-gray-900 transition"
          >
            Download CV
          </a>
          <p className="text-sm text-gray-300">&copy; 2026 Portfolio</p>
        </div>
      </nav>
    </header>

  );
};

export default Navbar;