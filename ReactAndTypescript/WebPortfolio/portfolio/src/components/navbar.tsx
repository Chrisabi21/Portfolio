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
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex-1 flex justify-end">
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
                    <span className="text-blue-400 font-mono font-bold">
                      {`0${index + 1}.`}
                    </span>
                    <span className={`font-semibold tracking-wide ${isActive ? "text-blue-400" : "text-white hover:text-blue-300"}`}>
                      {isActive ? (
                        <span className="inline-flex">
                          {section.split("").map((char, i) => (
                            <motion.span
                              key={i}
                              className="inline-block"
                              animate={{ y: [0, -5, 0] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.08,
                                ease: "easeInOut",
                              }}
                            >
                              {char === " " ? "\u00A0" : char}
                            </motion.span>
                          ))}
                        </span>
                      ) : (
                        section
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <footer className="p-4 text-center">
            <p>&copy; 2026 Portfolio</p>
          </footer>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;