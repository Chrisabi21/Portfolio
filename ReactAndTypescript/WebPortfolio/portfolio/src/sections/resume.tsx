import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer",
    company: "Company Name",
    date: "2023 – Present",
    description: "Built and maintained web applications using React, TypeScript, and Node.js.",
  },
  {
    title: "Robotics Mentor",
    company: "Organisation Name",
    date: "2022 – 2023",
    description: "Guided students through robotics projects and competitions.",
  },
];

const education = [
  {
    title: "BSc Artificial Intelligence",
    company: "University Name",
    date: "2019 – 2022",
    description: "Studied machine learning, robotics, and software engineering.",
  },
];

const TimelineItem = ({ item, index }: { item: typeof experiences[0]; index: number }) => (
  <motion.div
    className="flex gap-3 sm:gap-4 md:gap-6"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
  >
    {/* Dot + Line */}
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 shrink-0 mt-1" />
      <div className="w-px flex-1 bg-blue-500/20 mt-1" />
    </div>

    {/* Content */}
    <div className="pb-6 sm:pb-8">
      <div className="bg-gray-800 border border-blue-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">{item.title}</h3>
          <span className="text-xs text-blue-400 font-mono shrink-0">{item.date}</span>
        </div>
        <p className="text-blue-300 text-xs sm:text-sm font-medium mb-2">{item.company}</p>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  </motion.div>
);

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="min-h-screen flex flex-col bg-[#071a36] text-white px-4 sm:px-8 md:px-16 lg:px-32 py-10 sm:py-14 md:py-16 overflow-y-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <motion.div
        className="mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-2">Resume</h2>
        <div className="w-16 sm:w-20 h-1 bg-blue-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
        {/* Experience */}
        <div>
          <motion.div
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl sm:text-2xl">💼</span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Experience</h3>
          </motion.div>
          <div>
            {experiences.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-xl sm:text-2xl">🎓</span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Education</h3>
          </motion.div>
          <div>
            {education.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Download CV Button */}
      <motion.div
        className="mt-8 sm:mt-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
      <a  
          href="/cv.pdf"
          download="Oluwaseun_Abiodun_CV.pdf"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg transition duration-300 hover:scale-105"
        >
          ⬇ Download Full CV
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Resume;