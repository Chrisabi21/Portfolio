import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center pt-24 md:pt-32 items-start px-6 sm:px-12 md:px-20 lg:px-32 text-white relative overflow-hidden"

      style={{
        backgroundImage: `url(/header.gif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

      {/* Small Intro Text */}
      <motion.p
        className="text-blue-300 text-sm sm:text-base md:text-lg lg:text-xl font-mono mb-2 relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi, my name is
      </motion.p>

      {/* Typing Effect for Name */}
      <motion.h1
        className="matrix-name text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 leading-tight relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Typewriter
          words={["OLUWASEUN ABIODUN."]}
          loop={false}
          typeSpeed={100}
          cursor
        />
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-gray-100 mb-4 md:mb-6 relative z-10 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
      >
        TypeScript Developer | MSc Artificial Intelligence | Robotics Mentor
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-200 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl text-sm sm:text-base md:text-lg mb-6 relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        I enjoy building and designing web solutions that not only work but also visually appealing. 
        With a background in artificial intelligence and a passion for robotics, I bring a unique perspective to my development work.
        I enjoy the process of building, learning and improving my skills, and I am always looking for new challenges.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative z-10"
      >
        <button
          className="border-2 border-blue-300 text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md hover:bg-blue-300 hover:text-gray-900 transition duration-300 cursor-pointer"
        >
          Contact Me
        </button>
      </motion.div>
    </section>
  );
};

export default Home;