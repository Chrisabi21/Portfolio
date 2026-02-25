import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="h-screen flex flex-col justify-center items-start px-16 md:px-32 bg-gray-900 text-white relative"
      style={{
        backgroundImage: `url(/tech.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay Glow */}
      <div className="absolute inset-0 bg-blue-500 opacity-10 blur-3xl"></div>

      {/* Small Intro Text */}
      <motion.p
        className="text-blue-400 text-xl font-mono mb-2 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi, my name is
      </motion.p>

      {/* Typing Effect for Name */}
      <motion.h1
        className="text-7xl font-bold text-gray-100 mb-2 leading-tight relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Typewriter
          words={["Oluwaseun Abiodun."]}
          loop={false}
          typeSpeed={100}
          cursor
        />
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-6xl font-semibold text-white mb-6 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
      >
        I build things for the web.
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-300 max-w-2xl text-lg mb-6 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        I'm a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative z-10"
      >
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="border-2 border-blue-400 text-white text-lg px-8 py-3 rounded-md hover:bg-blue-400 hover:text-gray-900 transition duration-300 cursor-pointer"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Introduction;
