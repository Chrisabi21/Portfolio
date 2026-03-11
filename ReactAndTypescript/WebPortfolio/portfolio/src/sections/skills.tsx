import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "React", level: 90, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", level: 88, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Next.js", level: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Framer Motion", level: 75, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ],
  Backend: [
    { name: "Node.js", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", level: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python", level: 78, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "GraphQL", level: 70, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "REST APIs", level: 90, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  ],
  Database: [
    { name: "PostgreSQL", level: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", level: 75, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", level: 78, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", level: 65, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Firebase", level: 72, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  AI: [
    { name: "TensorFlow", level: 70, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "OpenAI API", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Scikit-learn", level: 68, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PyTorch", level: 72, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Jupyter", level: 88, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  ],
};

type TabKey = keyof typeof skillsData;
const tabs: TabKey[] = ["Frontend", "Backend", "Database", "AI"];

const Skills = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Frontend");
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const skills = skillsData[activeTab];
  const canPrev = currentIndex > 0;
  const canNext = currentIndex + visibleCount < skills.length;

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <motion.section
    id="skills"
    className="h-screen flex flex-col relative px-6 pt-12 overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* GIF Background */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url('https://media.giphy.com/media/ZVik7pIojecu0/giphy.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-80 z-10" />

    {/* Content — must be above overlay */}
    <div className="relative z-20 flex flex-col h-full">

      {/* Heading */}
      <h2 className="text-5xl font-bold text-blue-500 mb-6 text-center">Skills</h2>

      {/* Tab Bar */}
      <div className="flex w-full bg-gray-900 bg-opacity-80 p-1 rounded-xl shadow-md mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`relative flex-1 px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "text-white"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-500 rounded-lg z-0"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Card Carousel */}
      <div className="flex items-center justify-center gap-4 w-full flex-1">
        <button
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={!canPrev}
          className="p-2 rounded-full bg-gray-900 bg-opacity-80 shadow-md text-blue-500 disabled:opacity-30 transition hover:scale-110"
        >
          ◀
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + currentIndex}
            className="flex gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            {skills.slice(currentIndex, currentIndex + visibleCount).map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center justify-between bg-gray-900 bg-opacity-80 border border-blue-500 border-opacity-30 rounded-2xl shadow-lg p-6 w-48 h-56"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={skill.image} alt={skill.name} className="w-16 h-16 object-contain" />
                <p className="text-sm font-semibold text-gray-200 mt-2">{skill.name}</p>
                <div className="w-full mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Level</span>
                    <span className="text-blue-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setCurrentIndex((i) => i + 1)}
          disabled={!canNext}
          className="p-2 rounded-full bg-gray-900 bg-opacity-80 shadow-md text-blue-500 disabled:opacity-30 transition hover:scale-110"
        >
          ▶
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 pb-10">
        {Array.from({ length: Math.ceil(skills.length / visibleCount) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * visibleCount)}
            className={`w-2 h-2 rounded-full transition-all ${
              Math.floor(currentIndex / visibleCount) === i
                ? "bg-blue-500 w-4"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  </motion.section>
  );
};

export default Skills;