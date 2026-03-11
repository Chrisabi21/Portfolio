import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* GIF Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://media.giphy.com/media/ZVik7pIojecu0/giphy.gif')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-75 z-10" />

          {/* Blue Glow */}
          <div className="absolute inset-0 bg-blue-500 opacity-5 blur-3xl z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center gap-8 w-full px-8 max-w-md">

            {/* Animated Logo / Name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-blue-400 font-mono text-sm tracking-[0.3em] uppercase mb-2">
                Welcome to
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight">
                Oluwaseun <span className="text-blue-400">Abiodun</span>
              </h1>
              <p className="text-gray-400 font-mono text-sm mt-2 tracking-widest">
                Software Engineer
              </p>
            </motion.div>

            {/* Blinking cursor line */}
            <motion.div
              className="font-mono text-blue-400 text-sm tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {">>> Initializing portfolio..."}
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                <span>Loading assets</span>
                <span className="text-blue-400">{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Segmented ticks */}
              <div className="flex justify-between mt-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-px h-1 transition-colors duration-300 ${
                      progress >= (i + 1) * 10 ? "bg-blue-400" : "bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Status messages */}
            <motion.div
              className="text-xs font-mono text-gray-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {progress < 40 && "[ Compiling components... ]"}
              {progress >= 40 && progress < 75 && "[ Mounting experience... ]"}
              {progress >= 75 && progress < 100 && "[ Almost ready... ]"}
              {progress >= 100 && (
                <span className="text-blue-400">[ Portfolio ready ✓ ]</span>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;