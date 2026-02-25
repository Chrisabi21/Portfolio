import React from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const menuItems: string[] = ["Introduction", "About", "Skills", "Resume", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo on the Left */}
        <Link
          to="introduction"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <img src="logo.png" alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* Menu Items on the Right */}
        <div className="flex-1 flex justify-end">
          <ul className="flex space-x-6 items-center text-sm">
            {menuItems.map((section, index) => (
              <li key={section}>
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 flex items-center space-x-1"
                >
                  <span className="text-blue-400 font-mono">{`0${index + 1}.`}</span>
                  <span>{section}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
