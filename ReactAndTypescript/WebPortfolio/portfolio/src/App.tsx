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
import CVbutton from "./components/CVbutton";


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
          <CVbutton />
        </div>
      )}
    </>
  );
};

export default App;