import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Introduction from "./sections/introduction";
import About from "./sections/about";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import Resume from "./sections/resume";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-700 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar/>
      <Introduction />
      <About />
      <Skills />
      <Resume/>
      <Contact />
      <Footer />

      {/* Floating Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default App;
