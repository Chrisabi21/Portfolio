import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-[#071a36] text-white flex items-center py-16 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/about-image.jpeg"
            alt="About me"
            className="w-full max-w-md rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-300 mb-4">
              About Me
            </h2>
            <div className="w-full h-px bg-blue-200/20" />
          </div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I hold a degree in <span className="font-semibold text-white">Artificial Intelligence</span>{" "}
              and have a strong interest in <span className="font-semibold text-white">robotics</span>.
            </p>

            <p>
              I’m passionate about <span className="font-semibold text-white">web development</span> and
              mentoring students through practical robotics projects.
            </p>

            <div className="w-full h-px bg-blue-200/20" />

            <p>
              I’m looking for opportunities as a{" "}
              <span className="font-semibold italic text-white">software developer</span> or{" "}
              <span className="font-semibold italic text-white">robotics mentor</span> to make an
              impact through <span className="font-semibold italic text-white">technology</span>.
            </p>

            <div className="w-full h-px bg-blue-200/20" />
          </div>

          {/* Cards */}
          <div className="bg-[#0d2347] rounded-3xl p-6 space-y-6 shadow-xl">
            <div className="flex items-start gap-4 border-b border-white/10 pb-5">
              <div className="text-blue-300 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Web Development Enthusiast
                </h3>
                <p className="text-gray-300 text-lg italic">
                  Building modern and responsive websites.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-300 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3h6v2a2 2 0 002 2h1a1 1 0 011 1v6a1 1 0 01-1 1h-1v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2H6a1 1 0 01-1-1V8a1 1 0 011-1h1a2 2 0 002-2V3z"
                  />
                  <circle cx="9" cy="12" r="1" fill="currentColor" />
                  <circle cx="15" cy="12" r="1" fill="currentColor" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 16h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Robotics Mentor</h3>
                <p className="text-gray-300 text-lg italic">
                  Teaching and guiding robotics projects.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;