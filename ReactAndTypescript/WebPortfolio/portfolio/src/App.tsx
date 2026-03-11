import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./sections/home";
import About from "./sections/about";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import Resume from "./sections/resume";
import CursorGlow from "./components/cursorGlow";
import LoadingScreen from "./components/LoadingScreen";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } },
};

const sections: Record<string, React.ReactNode> = {
  home: <Home />,
  about: <About />,
  skills: <Skills />,
  resume: <Resume />,
  contact: <Contact />,
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="h-screen overflow-hidden bg-gray-900 text-white">
          <CursorGlow />
          <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

          {/* Page Transition Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 overflow-y-auto"  // removed h-screen, added overflow-y-auto
            >
              {sections[activeSection]}
            </motion.div>
          </AnimatePresence>

          <Footer />
          <motion.a
  href="/cv.pdf"
  download="Oluwaseun_Abiodun_CV.pdf"
  title="Download CV"
  className="fixed bottom-6 z-50 w-16 h-16 rounded-full flex flex-col items-center justify-center text-white shadow-2xl cursor-pointer"
  style={{
    background: "radial-gradient(circle at 35% 35%, #60a5fa, #1d4ed8 60%, #1e3a8a)",
    boxShadow: "0 8px 20px rgba(59,130,246,0.6), inset 0 -4px 8px rgba(0,0,0,0.3), inset 0 4px 8px rgba(255,255,255,0.2)",
  }}
  animate={{
    x: ["5vw", "80vw", "5vw"],
    y: [0, -80, 0, -50, 0, -25, 0, -10, 0],
    scaleX: [1, 0.9, 1.2, 1, 1.1, 1, 1.05, 1],
    scaleY: [1, 1.1, 0.8, 1, 0.9, 1, 0.95, 1],
    rotate: [0, 180, 360],
  }}
  transition={{
    x: { duration: 6, repeat: Infinity, ease: "easeInOut" },       // slow left-right travel
    y: { duration: 1.5, repeat: Infinity, ease: [0.33, 0, 0.66, 0] },  // bounce up/down
    scaleX: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    scaleY: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 6, repeat: Infinity, ease: "linear" },     // full spin per trip
  }}
  whileHover={{ scale: 1.2, y: 0 }}
  whileTap={{ scale: 0.9 }}
>
  {/* Shine glare */}
  <div className="absolute top-2 left-3 w-4 h-3 bg-white opacity-30 rounded-full blur-sm" />

  <span className="text-xl relative z-10">⬇</span>
  <span className="text-[9px] font-bold tracking-wide relative z-10 leading-none mt-0.5">CV</span>
</motion.a>
        </div>
      )}
    </>
  );
};

export default App;